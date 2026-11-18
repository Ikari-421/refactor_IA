// Boîte d'envoi des webhooks HMAC (§9.9 / §6). Le secret n'est jamais journalisé.
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const MAX_TRIES = 8;
const PENDING = "en_attente";
const ACK = "ack";
const ERR = "erreur";

export function newEventId() {
  return "evt_" + Date.now().toString(16) + randomBytes(8).toString("hex");
}

export function signBody(secret, raw) {
  return "sha256=" + createHmac("sha256", secret).update(raw).digest("hex");
}

export function signatureOk(secret, raw, header) {
  if (!secret || !header) return false;
  const want = Buffer.from(signBody(secret, raw));
  const got = Buffer.from(String(header).trim());
  return want.length === got.length && timingSafeEqual(want, got);
}

export function recetteEventType(evt) {
  const isPublic = evt.action !== "delete" && evt.statut === "publiee" && evt.hidden !== true;
  const wasPublic = evt.wasPublic === true;
  if (evt.action === "delete" && wasPublic) return "cuisine.recette.supprimee";
  if (evt.action === "restore" && isPublic) return "cuisine.recette.restauree";
  if (wasPublic && !isPublic) return "cuisine.recette.masquee";
  if (!isPublic) return null;
  if (evt.action === "publier" || evt.action === "show" || evt.action === "restore") return "cuisine.recette.publiee";
  if (evt.action === "update" || evt.action === "photo" || evt.action === "save") return "cuisine.recette.modifiee";
  return wasPublic ? "cuisine.recette.modifiee" : "cuisine.recette.publiee";
}

export function otherEventType(kind, evt) {
  const isPublic = evt.action !== "delete" && evt.statut !== "brouillon" && evt.hidden !== true && evt.test !== true;
  const wasPublic = evt.wasPublic === true;
  const base = kind === "materiel" ? "cuisine.materiel" : kind === "lexique" ? "cuisine.lexique" : "cuisine.restaurant";
  if (evt.action === "delete" && wasPublic) return base + ".supprimee";
  if (evt.action === "restore" && isPublic) return base + ".restauree";
  if (!isPublic && wasPublic) return base + ".masquee";
  if (isPublic && (evt.action === "publier" || evt.action === "show" || evt.action === "create" || !wasPublic)) return base + ".publiee";
  if (isPublic) return base + ".modifiee";
  return null;
}

export function createOutbox({ db, secret, url, fetchImpl }) {
  const post = fetchImpl || fetch;
  if (db) {
    db.exec(`
      CREATE TABLE IF NOT EXISTS outbox (
        id TEXT PRIMARY KEY,
        type TEXT,
        at TEXT,
        payload TEXT,
        tentatives INTEGER,
        dernier_essai TEXT,
        ack_at TEXT,
        statut TEXT
      );
      CREATE TABLE IF NOT EXISTS webhook_acks (
        id TEXT PRIMARY KEY,
        at TEXT
      );
    `);
  }

  function enqueue({ type, data, domaine = "cuisine" }) {
    if (!db) return null;
    const id = newEventId();
    const at = new Date().toISOString();
    const envelope = { id, type, at, domaine, data: data || {} };
    const raw = JSON.stringify(envelope);
    db.prepare(
      "INSERT INTO outbox(id, type, at, payload, tentatives, dernier_essai, ack_at, statut) VALUES (?, ?, ?, ?, 0, NULL, NULL, ?)"
    ).run(id, type, at, raw, PENDING);
    return { id, raw, envelope };
  }

  function alreadyAcked(id) {
    if (!db || !id) return false;
    const row = db.prepare("SELECT id FROM webhook_acks WHERE id = ?").get(id);
    if (row) return true;
    const o = db.prepare("SELECT statut FROM outbox WHERE id = ?").get(id);
    return !!(o && o.statut === ACK);
  }

  function markAcked(id) {
    if (!db || !id) return;
    const at = new Date().toISOString();
    db.prepare("INSERT OR IGNORE INTO webhook_acks(id, at) VALUES (?, ?)").run(id, at);
    db.prepare("UPDATE outbox SET statut = ?, ack_at = ?, dernier_essai = ? WHERE id = ?").run(ACK, at, at, id);
  }

  function pending(limit = 20) {
    if (!db) return [];
    return db.prepare(
      "SELECT id, type, at, payload, tentatives, statut FROM outbox WHERE statut != ? AND tentatives < ? ORDER BY at ASC LIMIT ?"
    ).all(ACK, MAX_TRIES, limit);
  }

  async function deliver(row) {
    if (!secret || !url) return { ok: false, skip: true };
    const raw = row.payload;
    const sig = signBody(secret, raw);
    const res = await post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Id": row.id,
        "X-Webhook-Signature": sig,
      },
      body: raw,
    });
    return { ok: res.status === 200, status: res.status };
  }

  async function pump() {
    if (!db || !secret || !url) return { sent: 0, skipped: true };
    const rows = pending();
    let sent = 0, acked = 0, failed = 0;
    for (const row of rows) {
      const now = new Date().toISOString();
      try {
        const out = await deliver(row);
        if (out.skip) return { sent, skipped: true };
        sent++;
        if (out.ok) {
          markAcked(row.id);
          acked++;
        } else {
          const n = (row.tentatives || 0) + 1;
          const statut = n >= MAX_TRIES ? ERR : PENDING;
          db.prepare("UPDATE outbox SET tentatives = ?, dernier_essai = ?, statut = ? WHERE id = ?").run(n, now, statut, row.id);
          failed++;
        }
      } catch {
        const n = (row.tentatives || 0) + 1;
        const statut = n >= MAX_TRIES ? ERR : PENDING;
        db.prepare("UPDATE outbox SET tentatives = ?, dernier_essai = ?, statut = ? WHERE id = ?").run(n, now, statut, row.id);
        failed++;
      }
    }
    return { sent, acked, failed };
  }

  return { enqueue, alreadyAcked, markAcked, pending, pump, deliver, enabled: !!(secret && url) };
}
