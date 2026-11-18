// Brouillons et propositions pour les bots (Hermès, Grok Bot) — contrat §9.8 / D42.
// Une clé bot ne publie jamais et ne modifie jamais une fiche publiée : elle crée un brouillon ou une proposition.
import fs from "node:fs";
import path from "node:path";
import { createHash, timingSafeEqual, randomBytes } from "node:crypto";

const sha256 = (s) => createHash("sha256").update(String(s)).digest("hex");
const eqHash = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};

const HTML_RE = /<\/?[a-z][\s\S]*?>|javascript\s*:|on[a-z]+\s*=/i;
const MAX_BODY = 200 * 1024;
export const BOT_KEYS = [
  { id: "bot-hermes", env: "API_KEY_BOT_HERMES", scopes: ["bot-hermes:recettes:ecrire", "bot-hermes:lexique:ecrire"] },
  { id: "bot-grok", env: "API_KEY_BOT_GROK", scopes: ["bot-grok:recettes:ecrire", "bot-grok:lexique:ecrire"] },
];
const BOT_ACTIONS = new Set(["create", "update", "save"]);
const ADMIN_PROP_ACTIONS = new Set(["accept", "reject"]);

export function isBotScope(scope) {
  return /^bot-(hermes|grok):(recettes|lexique):ecrire$/.test(String(scope || ""));
}

export function botDomain(scope) {
  const m = String(scope || "").match(/^bot-(?:hermes|grok):(recettes|lexique):ecrire$/);
  return m ? m[1] : null;
}

export function loadHashedBotKeys(env = process.env) {
  const keys = [];
  for (const def of BOT_KEYS) {
    const raw = env[def.env];
    if (!raw) continue;
    keys.push({ id: def.id, envName: def.env, hash: sha256(raw), scopes: [...def.scopes], hashed: true });
  }
  return keys;
}

export function matchHashedKey(token, keys) {
  if (!token) return null;
  const digest = sha256(token);
  for (const k of keys) {
    if (k.hashed && eqHash(digest, k.hash)) return k;
  }
  return null;
}

export function assertNoHtml(value, path = "") {
  if (typeof value === "string") {
    if (HTML_RE.test(value)) {
      throw Object.assign(new Error("HTML ou script interdit" + (path ? " (" + path + ")" : "")), { status: 400 });
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => assertNoHtml(v, path ? path + "[" + i + "]" : String(i)));
    return;
  }
  if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "expectedSha" || k === "action" || k === "image") continue;
      assertNoHtml(v, path ? path + "." + k : k);
    }
  }
}

export function assertBodySize(raw, max = MAX_BODY) {
  const n = Buffer.isBuffer(raw) ? raw.length : Buffer.byteLength(String(raw || ""));
  if (n > max) throw Object.assign(new Error("corps trop volumineux"), { status: 413 });
}

export function createRateLimiter({ limit, windowMs = 60_000 } = {}) {
  const n = Number(process.env.BOT_RATE_LIMIT || limit || 30);
  const hits = new Map();
  return {
    check(id) {
      const now = Date.now();
      const arr = (hits.get(id) || []).filter((t) => now - t < windowMs);
      if (arr.length >= n) {
        throw Object.assign(new Error("trop de requêtes"), { status: 429, retryAfter: Math.ceil((arr[0] + windowMs - now) / 1000) });
      }
      arr.push(now);
      hits.set(id, arr);
    },
    limit: n,
  };
}

function newId(prefix) {
  return prefix + Date.now().toString(16) + randomBytes(6).toString("hex");
}

function simpleDiff(a, b) {
  const la = String(a || "").split("\n");
  const lb = String(b || "").split("\n");
  const hunks = [];
  const max = Math.max(la.length, lb.length);
  for (let i = 0; i < max; i++) {
    if (la[i] === lb[i]) continue;
    if (i >= la.length) hunks.push({ op: "add", line: i + 1, text: lb[i] });
    else if (i >= lb.length) hunks.push({ op: "del", line: i + 1, text: la[i] });
    else hunks.push({ op: "chg", line: i + 1, avant: la[i], apres: lb[i] });
  }
  return { hunks, lignesAvant: la.length, lignesApres: lb.length };
}

export function createPropositionStore({ live, yaml }) {
  const root = path.join(live, "propositions");
  const auditFile = path.join(live, "audit", "propositions-v1.jsonl");
  fs.mkdirSync(path.join(root, "recettes"), { recursive: true });
  fs.mkdirSync(path.join(root, "lexique"), { recursive: true });

  function dirOf(domaine) {
    return path.join(root, domaine === "lexique" ? "lexique" : "recettes");
  }
  function fileOf(domaine, id) {
    return path.join(dirOf(domaine), id + ".json");
  }
  function appendAudit(rec) {
    fs.mkdirSync(path.dirname(auditFile), { recursive: true });
    fs.appendFileSync(auditFile, JSON.stringify(rec) + "\n");
  }
  function read(domaine, id) {
    const f = fileOf(domaine, id);
    if (!fs.existsSync(f)) return null;
    return JSON.parse(fs.readFileSync(f, "utf8"));
  }
  function write(rec) {
    const f = fileOf(rec.domaine, rec.id);
    const tmp = f + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(rec, null, 2));
    fs.renameSync(tmp, f);
  }
  function list(domaine, { statut = "en_attente", page = 1, limit = 50 } = {}) {
    const dir = dirOf(domaine);
    const items = fs.readdirSync(dir).filter((x) => x.endsWith(".json")).map((x) => JSON.parse(fs.readFileSync(path.join(dir, x), "utf8")));
    items.sort((a, b) => String(b.at).localeCompare(String(a.at)));
    const filtered = statut ? items.filter((x) => x.statut === statut) : items;
    const start = (page - 1) * limit;
    return { items: filtered.slice(start, start + limit), total: filtered.length, page, limit };
  }
  function create({ domaine, slug, shaBase, markdown, champs, resume, source, auteur }) {
    const rec = {
      id: newId("prp_"),
      domaine,
      slug,
      sha_base: shaBase,
      markdown: markdown || null,
      champs: champs || null,
      resume: resume || "",
      source: source || "bot",
      auteur: auteur || source || "",
      statut: "en_attente",
      at: new Date().toISOString(),
      decided_at: null,
      markdown_applique: null,
    };
    write(rec);
    appendAudit({ at: rec.at, action: "create", id: rec.id, slug, domaine, portee: auteur, sha_base: shaBase });
    return rec;
  }
  function decide(domaine, id, action, { actor, apply }) {
    const rec = read(domaine, id);
    if (!rec) throw Object.assign(new Error("proposition introuvable"), { status: 404 });
    if (rec.statut !== "en_attente") throw Object.assign(new Error("proposition déjà tranchée"), { status: 409 });
    if (action === "reject") {
      rec.statut = "rejetee";
      rec.decided_at = new Date().toISOString();
      rec.decided_by = actor;
      write(rec);
      appendAudit({ at: rec.decided_at, action: "reject", id: rec.id, slug: rec.slug, domaine, portee: actor });
      return rec;
    }
    if (action !== "accept") throw Object.assign(new Error("action inconnue"), { status: 400 });
    const applied = apply(rec);
    rec.statut = "acceptee";
    rec.decided_at = new Date().toISOString();
    rec.decided_by = actor;
    rec.sha_apres = applied && applied.sha || null;
    rec.markdown_applique = rec.markdown;
    write(rec);
    appendAudit({ at: rec.decided_at, action: "accept", id: rec.id, slug: rec.slug, domaine, portee: actor, sha_apres: rec.sha_apres });
    return { ...rec, applied };
  }
  function withDiff(rec, currentMarkdown) {
    if (!rec) return null;
    return { ...rec, diff: simpleDiff(currentMarkdown || "", rec.markdown || yamlDumpChamps(rec.champs)) };
  }
  function yamlDumpChamps(champs) {
    if (!champs || !yaml) return JSON.stringify(champs || {}, null, 2);
    try { return yaml.dump(champs, { lineWidth: 100, noRefs: true }); } catch { return JSON.stringify(champs, null, 2); }
  }
  return { root, auditFile, read, list, create, decide, withDiff, yamlDumpChamps, fileOf };
}

export function botMay(action) {
  return BOT_ACTIONS.has(String(action || ""));
}

export function adminMayDecide(action) {
  return ADMIN_PROP_ACTIONS.has(String(action || ""));
}
