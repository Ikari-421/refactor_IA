// Surface /api/v1 (contrat §9) : lecture et écriture Recettes, matériel, lexique, restaurants.
// L'API /api/admin/v1/* n'est pas gérée ici et doit rester inchangée.
import fs from "node:fs";
import path from "node:path";
import { timingSafeEqual, createHash } from "node:crypto";
import { openIndex, CATEGORIES, STATUTS } from "./index-recettes.mjs";
import { createWriter, parseExpectedSha, allowedAction, WRITE_SCOPES, CONFLICT } from "./write-recettes.mjs";
import { openDomainIndex } from "./index-domaine.mjs";
import { createDomainWriter } from "./write-domaine.mjs";
import { createOutbox, recetteEventType, otherEventType, signatureOk } from "./outbox.mjs";
import { writesToBack, createBackWriteClient } from "./back-write-client.mjs";
import { parseRange, fetchAnalytics } from "./analytics.mjs";
import { applyPublicEvent } from "./rebuild-public.mjs";
import { hasBackReadKey } from "../../scripts/source-back.mjs";
import {
  applyEditorPatch, etapesEdition, stylesAAligner, metaAlignement, champsPourBack, fusionnerChamps, verifierEtapes,
  chercherMateriel, chercherLexique, imageMateriel, renderApercu, threeStyles, STYLES_TROIS,
} from "./editeur.mjs";
import { CASES_RECETTE, CASES_MATERIEL, TYPES_RELECTURE, verifierPutRelecture, couverture } from "./relectures.mjs";
import {
  loadHashedBotKeys, matchHashedKey, isBotScope, botDomain, botMay, assertNoHtml,
  createRateLimiter, createPropositionStore,
} from "./brouillons.mjs";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RESTO_BLOCK_ACTIONS = new Set(["block-add", "block-update", "block-delete", "block-move", "blocks-order", "blocks"]);
const RESERVED = new Set(["recipes", "propositions", "brouillons", "meta", "editions", "couverture"]);
const ADMIN_SCOPES = [
  "admin-recettes:ecrire",
  "admin-materiel:ecrire",
  "admin-lexique:ecrire",
  "admin-restaurants:ecrire",
];
const READ_RECETTES = "admin-recettes:ecrire";
const WRITE_RECETTES = "admin-recettes:ecrire";
const WRITE_HERMES = "bot-hermes:recettes:ecrire";
const WRITE_GROK = "bot-grok:recettes:ecrire";
const BOT_RECETTES = [WRITE_HERMES, WRITE_GROK];
const BOT_LEXIQUE = ["bot-hermes:lexique:ecrire", "bot-grok:lexique:ecrire"];


const eq = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};

function parseKeys(secret, extraRaw) {
  const keys = [];
  // v243 : secret admin unique ou liste (RECETTES_ADMIN_SECRET seulement), portées admin.
  for (const s of [].concat(secret || [])) if (s) keys.push({ secret: s, scopes: [...ADMIN_SCOPES] });
  if (!extraRaw) return keys;
  try {
    const v = typeof extraRaw === "string" ? JSON.parse(extraRaw) : extraRaw;
    if (!Array.isArray(v)) return keys;
    for (const k of v) {
      if (!k || !k.secret || !Array.isArray(k.scopes)) continue;
      keys.push({ secret: String(k.secret), scopes: k.scopes.map(String) });
    }
  } catch {
    console.error("[api-v1] API_V1_EXTRA_KEYS invalide, ignoré");
  }
  return keys;
}

function bearer(req) {
  const h = String(req.headers.authorization || "");
  if (!h.startsWith("Bearer ")) return "";
  return h.slice(7);
}

function identify(req, keys, hashedKeys = []) {
  const token = bearer(req);
  if (!token) return null;
  const bot = matchHashedKey(token, hashedKeys);
  if (bot) return bot;
  for (const k of keys) if (k.secret && eq(token, k.secret)) return k;
  return null;
}

function send(res, status, body, extra = {}) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex",
    ...extra,
  });
  res.end(data);
}

function sendConflict(res, currentSha) {
  const headers = {};
  if (currentSha) headers.ETag = `"${currentSha}"`;
  const body = { ok: false, error: CONFLICT };
  if (currentSha) body.currentSha = currentSha;
  send(res, 409, body, headers);
}

function etagMatch(req, sha) {
  const raw = String(req.headers["if-none-match"] || "");
  if (!raw) return false;
  return raw.split(/\s*,\s*/).some((t) => t.replace(/^W\//, "").replaceAll('"', "") === sha);
}

function sendNotModified(res, sha) {
  res.writeHead(304, {
    ETag: `"${sha}"`,
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex",
  });
  res.end();
}

function isDraftOrHidden(row) {
  if (!row || row.deleted === 1 || row.deleted === true) return false;
  return row.statut === "brouillon" || row.hidden === true || row.hidden === 1;
}

function withSlugAndId(row) {
  const slug = row.slug || row.id;
  const id = row.id || row.slug;
  return { ...row, slug, id };
}

function readRecipeFile(mdDir, row, yamlLoad) {
  const file = path.join(mdDir, row.path);
  if (!fs.existsSync(file)) return null;
  const txt = fs.readFileSync(file, "utf8");
  const m = txt.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  return yamlLoad(m[1]);
}

function parsePageLimit(url) {
  const rawPage = url.searchParams.get("page");
  const rawLimit = url.searchParams.get("limit");
  if (rawLimit === "all") {
    const page = rawPage == null || rawPage === "" ? 1 : Number(rawPage);
    if (rawPage != null && rawPage !== "" && (!Number.isInteger(page) || page < 1)) {
      throw Object.assign(new Error("page invalide"), { status: 400 });
    }
    return { page: 1, limit: "all" };
  }
  const page = rawPage == null || rawPage === "" ? 1 : Number(rawPage);
  const limit = rawLimit == null || rawLimit === "" ? 50 : Number(rawLimit);
  if (!Number.isInteger(page) || page < 1) throw Object.assign(new Error("page invalide"), { status: 400 });
  if (!Number.isInteger(limit) || limit < 1 || limit > 200) throw Object.assign(new Error("limit invalide"), { status: 400 });
  return { page, limit };
}

async function readJson(req, max = 256 * 1024) {
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > max) throw Object.assign(new Error("trop gros"), { status: 413 });
    chunks.push(c);
  }
  const raw = Buffer.concat(chunks).toString("utf8") || "{}";
  try { return JSON.parse(raw); }
  catch { throw Object.assign(new Error("JSON mal formé"), { status: 400 }); }
}

export function createCuisineV1(opts) {
  const keys = parseKeys(opts.secret, opts.extraKeys || process.env.API_V1_EXTRA_KEYS);
  const botKeys = loadHashedBotKeys(process.env);
  const rate = createRateLimiter();
  const index = openIndex(opts);
  const commit = opts.commit || process.env.GIT_COMMIT || "";
  const yaml = opts.yaml || (opts.yamlLoad && opts.yamlDump ? { load: opts.yamlLoad, dump: opts.yamlDump } : null);
  const live = opts.live || (opts.mdDir ? path.dirname(opts.mdDir) : "");
  const props = live ? createPropositionStore({ live, yaml }) : null;
  const webhookSecret = opts.webhookSecret || process.env.WEBHOOK_HMAC_SECRET || "";
  const webhookSecretBack = process.env.CUISINE_WEBHOOK_HMAC_SECRET || "";
  const webhookSecrets = [...new Set([webhookSecret, webhookSecretBack].filter(Boolean))];
  const webhookUrl = opts.webhookUrl || process.env.WEBHOOK_URL || "";
  const outbox = createOutbox({ db: index && index.db, secret: webhookSecret, url: webhookUrl });
  if (!outbox.enabled) console.log("[api-v1] webhooks inactifs");
  else console.log("[api-v1] webhooks prêts");

  function enqueueFromEvt(evt) {
    if (!outbox.enabled || !evt) return null;
    let type = null, data = null;
    if (!evt.kind || evt.kind === "recettes") {
      type = recetteEventType(evt);
      if (type) data = { slug: evt.slug, sha: evt.sha || null, at: new Date().toISOString() };
    } else {
      type = otherEventType(evt.kind, evt);
      if (type) data = { id: evt.id, slug: evt.id, sha: evt.sha || null, at: new Date().toISOString() };
    }
    if (!type) return null;
    return outbox.enqueue({ type, data });
  }

  let pumping = false;
  async function pumpSoon() {
    if (pumping || !outbox.enabled) return;
    pumping = true;
    try { await outbox.pump(); }
    catch (e) { console.error("[api-v1] outbox", e.message); }
    finally { pumping = false; }
  }

  function hookedChange(evt) {
    const skipLocalOutbox = writesToBack() && evt;
    if (!skipLocalOutbox) {
      try { enqueueFromEvt(evt); } catch (e) { console.error("[api-v1] outbox enqueue", e.message); }
      pumpSoon();
    }
    if (typeof opts.onChange === "function") {
      try { opts.onChange(evt); } catch (e) { console.error("[api-v1] onChange", e.message); }
    }
  }

  function eventTypeAfterWrite(kind, action, data) {
    const base = kind === "materiel" ? "cuisine.materiel" : kind === "lexique" ? "cuisine.lexique" : kind === "restaurants" ? "cuisine.restaurant" : "cuisine.recette";
    const rec = data && (data.recipe || data.fiche || data.notice || data.restaurant || data);
    const statut = rec && rec.statut;
    const hidden = !!(rec && rec.hidden);
    if (action === "delete") return base + ".supprimee";
    if (action === "hide" || hidden) return base + ".masquee";
    if (action === "show" || action === "publier" || action === "restore") return base + ".publiee";
    if (action === "create" && (statut === "brouillon" || hidden)) return null;
    if (statut === "brouillon") return null;
    if (["update", "save", "photo", "create"].includes(action) || action) return base + ".modifiee";
    return null;
  }

  async function regenAfterBackWrite(kind, action, id, data) {
    const type = eventTypeAfterWrite(kind, action, data);
    if (!type || !id || !hasBackReadKey()) return;
    try {
      await applyPublicEvent({
        type,
        data: { slug: id, id, sha: data && data.sha },
        htmlDir: opts.htmlDir,
        restoDir: opts.restoDir,
        live,
        yaml,
        prefixText: opts.prefixText,
        paths: opts.paths,
        RD: opts.RD,
        RR: opts.RR,
        validateRecipeV2: opts.validateRecipeV2,
        srcDir: opts.srcDir,
        root: opts.root,
      });
    } catch (e) { console.error("[api-v1] regen back", e.message); }
  }

  // v236 : relais vers le back avec la clé de l'APPELANT si c'est un bot (le back voit bot-hermes / bot-grok et applique
  // ses propres garde-fous : brouillon masqué, proposition sur fiche publiée, 403 sur publier). BACK_RECETTES_WRITE_KEY
  // (admin-recettes:ecrire) ne sert qu'aux appels admin. La clé du bot n'est jamais journalisée (redact du client).
  function backClientFor(req) {
    const k = identify(req, keys, botKeys);
    const isBot = !!k && (k.hashed === true || isBotScope(k.scope) || (k.scopes || []).some(isBotScope));
    return isBot ? createBackWriteClient({ key: bearer(req) }) : createBackWriteClient();
  }

  function avecEtapesEdition(d) {
    if (!d || !d.recipe || typeof d.recipe !== "object") return d;
    try { return { ...d, recipe: { ...d.recipe, etapesEdition: etapesEdition(d.recipe) } }; } catch { return d; }
  }

  async function forwardToBack(req, res, path, { body, expectedSha, kind, action, id, lecture } = {}) {
    try {
      const client = backClientFor(req);
      const method = req.method === "HEAD" ? "GET" : req.method;
      const payload = method === "GET" || method === "HEAD" ? undefined : body;
      const out = await client.request(method, path, payload, { expectedSha, ifMatch: req.headers["if-match"] });
      const headers = {};
      if (out.etag) headers.ETag = out.etag;
      else if (out.sha) headers.ETag = `"${out.sha}"`;
      if (method !== "GET" && method !== "HEAD" && kind) {
        const ident = id || (out.data && (out.data.slug || out.data.id || (out.data.recipe && out.data.recipe.slug)));
        await regenAfterBackWrite(kind, action, ident, out.data);
      }
      if (req.method === "HEAD") {
        res.writeHead(out.status, {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
          "X-Robots-Tag": "noindex",
          ...headers,
        });
        res.end();
        return true;
      }
      send(res, out.status, lecture && out.status === 200 ? lecture(out.data) : out.data, headers);
    } catch (e) {
      if (e.status === 409) { sendConflict(res, e.currentSha); return true; }
      send(res, e.status || 500, e.body && typeof e.body === "object" ? e.body : { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }

  const writer = yaml && live
    ? createWriter({
        live,
        yaml,
        index,
        auditFile: opts.auditFile,
        onChange: hookedChange,
        validateRecipeV2: opts.validateRecipeV2,
        SCHEMA_V2: opts.SCHEMA_V2,
        SLUG_RE: opts.SLUG_RE,
        CATEGORIES: opts.CATEGORIES,
        saveRecipePhoto: opts.saveRecipePhoto,
      })
    : null;


  const domainIndexes = {};
  const domainWriters = {};
  if (yaml && live) {
    for (const spec of [
      { kind: "materiel", idKey: "id", titleKey: "label" },
      { kind: "lexique", idKey: "id", titleKey: "terme" },
      { kind: "restaurants", idKey: "slug", titleKey: "nom" },
    ]) {
      const idx = openDomainIndex({
        dbPath: opts[spec.kind + "DbPath"] || path.join(live, "index", spec.kind + ".sqlite"),
        mdDir: path.join(live, spec.kind),
        yamlLoad: (s) => yaml.load(s),
        idKey: spec.idKey,
        titleKey: spec.titleKey,
      });
      try { console.log("[api-v1] index " + spec.kind + "=" + idx.rebuild()); }
      catch (e) { console.error("[api-v1] index " + spec.kind, e.message); }
      domainIndexes[spec.kind] = idx;
      domainWriters[spec.kind] = createDomainWriter({
        kind: spec.kind,
        live,
        yaml,
        index: idx,
        auditFile: opts[spec.kind + "AuditFile"] || path.join(live, "audit", spec.kind + "-v1.jsonl"),
        onChange: hookedChange,
        lexique: opts.lexique,
        restos: opts.restaurants,
        validateLexique: opts.validateLexique,
        parseDataUrlImage: opts.parseDataUrlImage,
      });
    }
  }

  function health() {
    const body = {
      ok: true,
      api: "v1",
      domaines: { recettes: "1", materiel: "1", lexique: "1", restaurants: "1" },
    };
    if (commit) body.commit = String(commit).slice(0, 7);
    return body;
  }

  function requireAdmin(req, res, scopes = [READ_RECETTES]) {
    const key = identify(req, keys, botKeys);
    if (key && key.hashed) {
      try { rate.check(key.id); }
      catch (e) {
        if (e.status === 429) {
          send(res, 429, { ok: false, error: e.message }, e.retryAfter ? { "Retry-After": String(e.retryAfter) } : {});
          return null;
        }
        throw e;
      }
    }
    if (!key) {
      send(res, 404, { ok: false });
      return null;
    }
    const wanted = Array.isArray(scopes) ? scopes : [scopes];
    const hit = wanted.find((s) => key.scopes.includes(s));
    if (!hit) {
      send(res, 403, { ok: false, error: "portée insuffisante" });
      return null;
    }
    const scope = key.scopes.includes(WRITE_RECETTES) && wanted.includes(WRITE_RECETTES)
      ? WRITE_RECETTES
      : hit;
    return { ...key, scope };
  }

  // v237 : audience /cuisine + /restaurants (source Lien en bio, front-analytics:lire). Admin seulement (bots 403, sans clé 404).
  function handleAnalytics(req, res, url) {
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (!requireAdmin(req, res, [WRITE_RECETTES])) return;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return;
    }
    if (!requireAdmin(req, res, [WRITE_RECETTES])) return;
    let range;
    try { range = parseRange(url.searchParams); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return; }
    (opts.fetchAnalytics || fetchAnalytics)(range).then(
      (out) => send(res, 200, out),
      (e) => send(res, [400, 502, 503].includes(e.status) ? e.status : 502, { ok: false, error: e.message || "source d'audience indisponible" }),
    );
  }

  function handleList(req, res, url) {
    if (req.method === "POST") return handleWrite(req, res, "", url);
    if (req.method !== "GET" && req.method !== "HEAD") {
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    if (!requireAdmin(req, res, [READ_RECETTES, ...BOT_RECETTES])) return true;
    if (writesToBack()) {
      return forwardToBack(req, res, (url.pathname.replace(/\/+$/, "") || "/") + url.search);
    }
    try {
      const { page, limit } = parsePageLimit(url);
      const category = url.searchParams.get("category") || "";
      const statut = url.searchParams.get("statut") || "";
      if (category && !CATEGORIES.has(category)) throw Object.assign(new Error("category invalide"), { status: 400 });
      if (statut && !STATUTS.has(statut)) throw Object.assign(new Error("statut invalide"), { status: 400 });
      const out = index.list({ q: url.searchParams.get("q") || "", category: category || undefined, statut: statut || undefined, page, limit });
      send(res, 200, { ok: true, ...out });
    } catch (e) {
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }

  function handleItem(req, res, slug) {
    if (req.method === "POST") return handleWrite(req, res, slug);
    if (req.method !== "GET" && req.method !== "HEAD") {
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    if (!requireAdmin(req, res, [READ_RECETTES, ...BOT_RECETTES])) return true;
    if (!SLUG_RE.test(slug)) {
      send(res, 400, { ok: false, error: "slug invalide" });
      return true;
    }
    if (writesToBack()) {
      // v252 : etapesEdition (titre de phase séparé) ajouté à la fiche lue
      return forwardToBack(req, res, "/api/v1/admin/recettes/recipes/" + slug, { lecture: avecEtapesEdition });
    }
    const row = index.get(slug);
    if (!row || row.deleted) {
      send(res, 404, { ok: false, error: "recette introuvable" });
      return true;
    }
    if (etagMatch(req, row.sha)) {
      sendNotModified(res, row.sha);
      return true;
    }
    const data = readRecipeFile(index.mdDir, row, opts.yamlLoad);
    if (!data) {
      send(res, 404, { ok: false, error: "recette introuvable" });
      return true;
    }
    const refs = index.refsOf(slug);
    const recipe = {
      ...data,
      category: row.category,
      statut: row.statut,
      hidden: row.hidden === 1,
      refs_materiel: refs.materiel,
      refs_lexique: refs.lexique,
    };
    const body = avecEtapesEdition({ ok: true, recipe, sha: row.sha });
    if (req.method === "HEAD") {
      const payload = JSON.stringify(body);
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex",
        ETag: `"${row.sha}"`,
        "Content-Length": Buffer.byteLength(payload),
      });
      res.end();
      return true;
    }
    send(res, 200, body, { ETag: `"${row.sha}"` });
    return true;
  }

  async function handleWrite(req, res, slug) {
    if (!writer) {
      send(res, 405, { ok: false, error: "écriture v1 non disponible pour l'instant" });
      return true;
    }
    let body;
    try { body = await readJson(req, 9 * 1024 * 1024); }
    catch (e) {
      send(res, e.status || 400, { ok: false, error: e.message || "JSON mal formé" });
      return true;
    }
    const action = String(body.action || (slug ? "" : "create"));
    if (!action) {
      send(res, 400, { ok: false, error: "action invalide (create, update, publier, delete, restore, hide, show, photo)" });
      return true;
    }
    const needed = ["create", "update", "save"].includes(action) ? [WRITE_RECETTES, ...BOT_RECETTES] : [WRITE_RECETTES];
    const key = requireAdmin(req, res, needed);
    if (!key) return true;
    const bot = isBotScope(key.scope);
    if (bot) {
      try { assertNoHtml(body); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return true; }
      if (!botMay(action)) {
        send(res, 403, { ok: false, error: "portée insuffisante" });
        return true;
      }
    } else if (!allowedAction(key.scope, action)) {
      send(res, 403, { ok: false, error: "portée insuffisante" });
      return true;
    }
    if (writesToBack()) {
      const target0 = slug || (body.slug ? String(body.slug) : "");
      const expectedSha0 = parseExpectedSha(body, req);
      const path0 = target0
        ? "/api/v1/admin/recettes/recipes/" + target0
        : "/api/v1/admin/recettes/recipes";
      if (bot && (action === "update" || action === "save") && target0) {
        try {
          const client = backClientFor(req);
          const cur = await client.get(path0);
          const rec = (cur.data && (cur.data.recipe || cur.data)) || {};
          const currentSha = cur.sha || rec.sha;
          if (!currentSha) throw Object.assign(new Error("recette introuvable"), { status: 404 });
          if (expectedSha0 !== currentSha) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha });
          if (rec.statut === "publiee") {
            const out = await client.post("/api/v1/admin/recettes/propositions", {
              ...body, action: "create", slug: target0, expectedSha: currentSha,
            });
            const prop = (out.data && (out.data.proposition || out.data)) || out.data;
            send(res, 200, { ok: true, proposition: prop, sha: currentSha, note: "proposition enregistrée, fiche publiée non modifiée" }, { ETag: `"${currentSha}"` });
            return true;
          }
          body.statut = "brouillon";
          body.hidden = true;
        } catch (e) {
          if (e.status === 409) { sendConflict(res, e.currentSha); return true; }
          send(res, e.status || 500, e.body && typeof e.body === "object" ? e.body : { ok: false, error: e.message || "Erreur serveur" });
          return true;
        }
      }
      if (bot) { body.statut = "brouillon"; body.hidden = true; }
      return forwardToBack(req, res, path0, { body, expectedSha: expectedSha0, kind: "recettes", action, id: target0 });
    }
    const target = slug || (body.slug ? String(body.slug) : "");
    if (action !== "create" && !target) {
      send(res, 400, { ok: false, error: "slug manquant" });
      return true;
    }
    const needsSha = !["create", "restore"].includes(action);
    const expectedSha = parseExpectedSha(body, req);
    try {
      if (bot && (action === "update" || action === "save")) {
        const current = writer.readLive ? writer.readLive(target) : writer.get && writer.get(target);
        const shaNow = current && (current.sha || current.recipe && current.recipe.sha);
        // lecture directe du fichier si besoin
        const file = live && path.join(live, "data", target + ".md");
        let raw = "";
        let currentSha = shaNow;
        let statut = current && current.statut;
        let hidden = current && current.hidden;
        if (file && fs.existsSync(file)) {
          raw = fs.readFileSync(file, "utf8");
          currentSha = currentSha || createHash("sha256").update(raw).digest("hex");
          if (!statut) {
            const fm = (yaml.load(raw.match(/^---\n([\s\S]*?)\n---/)[1]) || {});
            statut = fm.statut; hidden = fm.hidden;
          }
        }
        if (!currentSha) throw Object.assign(new Error("recette introuvable"), { status: 404 });
        if (expectedSha !== currentSha) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha });
        if (statut === "publiee") {
          const rec = props.create({
            domaine: "recettes",
            slug: target,
            shaBase: currentSha,
            markdown: body.markdown || null,
            champs: { ...body, action: undefined, expectedSha: undefined },
            resume: body.resume || "",
            source: key.id,
            auteur: key.id,
          });
          rec.markdown_base = raw;
          if (props && rec) { /* store base for recover */ }
          send(res, 200, { ok: true, proposition: rec, sha: currentSha, note: "proposition enregistrée, fiche publiée non modifiée" }, { ETag: `"${currentSha}"` });
          return true;
        }
        // brouillon : l'écriture reste un brouillon
        body.statut = "brouillon";
        body.hidden = true;
      }
      const out = await writer.dispatch(action, target, body, { scope: bot ? WRITE_HERMES : key.scope, expectedSha });
      const headers = {};
      if (out.sha) headers.ETag = `"${out.sha}"`;
      send(res, 200, out, headers);
    } catch (e) {
      if (e.status === 409) {
        sendConflict(res, e.currentSha);
        return true;
      }
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }


  function currentMarkdown(domaine, slug) {
    const file = path.join(live, domaine === "lexique" ? "lexique" : "data", slug + ".md");
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  }
  function currentShaOf(domaine, slug) {
    const raw = currentMarkdown(domaine, slug);
    if (!raw) return null;
    return createHash("sha256").update(raw).digest("hex");
  }

  function handleDraftRoutes(req, res, url, raw) {
    const m = raw.match(/^\/api\/v1\/admin\/(recettes|lexique)\/(brouillons|propositions)(?:\/([a-z0-9_-]+))?$/);
    if (!m) return false;
    const domaine = m[1];
    const kind = m[2];
    const id = m[3] || "";
    const adminScope = domaine === "lexique" ? "admin-lexique:ecrire" : WRITE_RECETTES;
    const botScopes = domaine === "lexique" ? BOT_LEXIQUE : BOT_RECETTES;
    const readScopes = [adminScope, ...botScopes];
    if (writesToBack()) {
      const pathB = raw + url.search;
      if (kind === "brouillons") {
        if (req.method !== "GET" && req.method !== "HEAD") {
          if (!requireAdmin(req, res, readScopes)) return true;
          send(res, 405, { ok: false, error: "méthode non autorisée" });
          return true;
        }
        if (!requireAdmin(req, res, readScopes)) return true;
        return forwardToBack(req, res, pathB);
      }
      if (req.method === "GET" || req.method === "HEAD") {
        if (!requireAdmin(req, res, readScopes)) return true;
        return forwardToBack(req, res, pathB);
      }
      if (req.method !== "POST") {
        if (!requireAdmin(req, res, readScopes)) return true;
        send(res, 405, { ok: false, error: "méthode non autorisée" });
        return true;
      }
      (async () => {
        let body;
        try { body = await readJson(req); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return; }
        const action = String(body.action || (id ? "" : "create"));
        if (action === "create") {
          const key = requireAdmin(req, res, botScopes.concat([adminScope]));
          if (!key) return;
          try { if (isBotScope(key.scope) || body.cible === "brouillon") assertNoHtml(body); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return; }
          // v246 : proposition sur le brouillon d'édition (bots et admin) : traduite, validée et marquée ici, puis relayée.
          if (body.cible === "brouillon") {
            if (domaine !== "recettes") { send(res, 400, { ok: false, error: "cible brouillon : recettes seulement" }); return; }
            await proposerSurBrouillon(req, res, body, key);
            return;
          }
          // v237 : une proposition ne change aucune page → pas de régénération (ni d'identifiant prp_… envoyé à la regen).
          await forwardToBack(req, res, pathB, { body, expectedSha: parseExpectedSha(body, req) });
          return;
        }
        if (action === "accept" || action === "reject") {
          const key = requireAdmin(req, res, [adminScope]);
          if (!key) return;
          if (!id) { send(res, 400, { ok: false, error: "identifiant manquant" }); return; }
          // accept : la fiche publiée modifiée part par l'outbox du back (webhook) ; reject n'écrit rien. Pas de regen ici.
          await forwardToBack(req, res, pathB, { body });
          return;
        }
        send(res, 400, { ok: false, error: "action invalide" });
      })();
      return true;
    }
    if (kind === "brouillons") {
      if (req.method !== "GET" && req.method !== "HEAD") {
        if (!requireAdmin(req, res, readScopes)) return true;
        send(res, 405, { ok: false, error: "méthode non autorisée" });
        return true;
      }
      const key = requireAdmin(req, res, readScopes);
      if (!key) return true;
      if (id) {
        try {
          if (domaine === "lexique") {
            const item = domainWriters.lexique.readLive(id);
            if (!isDraftOrHidden(item)) { send(res, 404, { ok: false, error: "brouillon introuvable" }); return true; }
            if (etagMatch(req, item.sha)) { sendNotModified(res, item.sha); return true; }
            send(res, 200, { ok: true, notice: item, sha: item.sha, id: item.id || id, slug: item.slug || item.id || id }, { ETag: `"${item.sha}"` });
          } else {
            const row = index.get(id);
            if (!isDraftOrHidden(row)) { send(res, 404, { ok: false, error: "brouillon introuvable" }); return true; }
            if (etagMatch(req, row.sha)) { sendNotModified(res, row.sha); return true; }
            const data = readRecipeFile(index.mdDir, row, opts.yamlLoad);
            const hidden = row.hidden === 1 || row.hidden === true;
            send(res, 200, { ok: true, recipe: { ...data, sha: row.sha, statut: row.statut, hidden, slug: row.slug, id: row.slug }, sha: row.sha }, { ETag: `"${row.sha}"` });
          }
        } catch (e) {
          send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
        }
        return true;
      }
      try {
        const q = url.searchParams.get("q") || "";
        const limit = url.searchParams.get("limit") || 50;
        const page = Number(url.searchParams.get("page") || 1);
        if (domaine === "lexique") {
          const out = domainIndexes.lexique.list({ drafts: true, q, limit, page });
          send(res, 200, { ok: true, brouillons: (out.items || []).map(withSlugAndId), total: out.total, page: out.page, limit: out.limit });
        } else {
          const out = index.list({ drafts: true, q, limit, page });
          send(res, 200, { ok: true, brouillons: (out.items || out.recipes || []).map(withSlugAndId), total: out.total, page: out.page, limit: out.limit });
        }
      } catch (e) {
        send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
      }
      return true;
    }
    // propositions
    if (req.method === "GET" || req.method === "HEAD") {
      const key = requireAdmin(req, res, readScopes);
      if (!key) return true;
      if (!props) { send(res, 503, { ok: false, error: "propositions indisponibles" }); return true; }
      if (id) {
        const rec = props.read(domaine, id);
        if (!rec) { send(res, 404, { ok: false, error: "proposition introuvable" }); return true; }
        send(res, 200, { ok: true, proposition: props.withDiff(rec, currentMarkdown(domaine, rec.slug)) });
        return true;
      }
      const out = props.list(domaine, { statut: url.searchParams.get("statut") || "en_attente", page: Number(url.searchParams.get("page") || 1), limit: Number(url.searchParams.get("limit") || 50) });
      send(res, 200, { ok: true, propositions: out.items, total: out.total, page: out.page, limit: out.limit });
      return true;
    }
    if (req.method !== "POST") {
      if (!requireAdmin(req, res, readScopes)) return true;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    // POST create (bot) or accept/reject (admin)
    (async () => {
      let body;
      try { body = await readJson(req); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return; }
      const action = String(body.action || (id ? "" : "create"));
      if (action === "create") {
        const key = requireAdmin(req, res, botScopes.concat([adminScope]));
        if (!key) return;
        try { if (isBotScope(key.scope)) assertNoHtml(body); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return; }
        const slug = String(body.slug || body.id || "");
        if (!slug) { send(res, 400, { ok: false, error: "slug manquant" }); return; }
        const sha = currentShaOf(domaine, slug);
        if (!sha) { send(res, 404, { ok: false, error: domaine === "lexique" ? "notice introuvable" : "recette introuvable" }); return; }
        const expected = (body.expectedSha || "").trim() || sha;
        if (expected !== sha) { sendConflict(res, sha); return; }
        const rec = props.create({ domaine, slug, shaBase: sha, markdown: body.markdown || currentMarkdown(domaine, slug), champs: body, resume: body.resume || "", source: key.id || "admin", auteur: key.id || "admin" });
        send(res, 200, { ok: true, proposition: rec, sha }, { ETag: `"${sha}"` });
        return;
      }
      if (action === "accept" || action === "reject") {
        const key = requireAdmin(req, res, [adminScope]);
        if (!key) return;
        if (!id) { send(res, 400, { ok: false, error: "identifiant manquant" }); return; }
        try {
          const rec = props.decide(domaine, id, action, {
            actor: "admin",
            apply: (p) => {
              const sha = currentShaOf(domaine, p.slug);
              if (sha !== p.sha_base) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha: sha });
              if (action === "accept") {
                if (domaine === "recettes") {
                  return writer.dispatch("update", p.slug, { ...(p.champs || {}), markdown: p.markdown, expectedSha: p.sha_base, action: "update" }, { scope: adminScope, expectedSha: p.sha_base });
                }
                return domainWriters.lexique.dispatch("update", p.slug, { ...(p.champs || {}), expectedSha: p.sha_base, action: "update" }, {}, adminScope);
              }
              return null;
            },
          });
          send(res, 200, { ok: true, proposition: rec });
        } catch (e) {
          if (e.status === 409) return sendConflict(res, e.currentSha);
          send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
        }
        return;
      }
      send(res, 400, { ok: false, error: "action invalide" });
    })();
    return true;
  }

  // ---------- Éditeur dans la page (v245 aperçu, v246 brouillon d'édition du back), préprod : docs/editeur-recettes.md ----------
  const loadMod = async (rel, abs) => {
    try { return await import(new URL(rel, import.meta.url).href); } catch (e) { if (abs) return import(abs); throw e; }
  };
  const loadTargeted = opts.loadTargeted || (() => loadMod("../../generate-targeted.mjs", "/opt/generate-targeted.mjs"));
  const loadPages = opts.loadPages || (() => loadMod("../../generate-pages.mjs", "/opt/generate-pages.mjs"));

  async function ficheCourante(slug) {
    if (writesToBack()) {
      const out = await createBackWriteClient().get("/api/v1/admin/recettes/recipes/" + slug);
      const rec = (out.data && (out.data.recipe || out.data)) || {};
      return { recipe: rec, sha: out.sha || rec.sha };
    }
    const row = index.get(slug);
    if (!row || row.deleted) throw Object.assign(new Error("recette introuvable"), { status: 404 });
    const data = readRecipeFile(index.mdDir, row, opts.yamlLoad);
    if (!data) throw Object.assign(new Error("recette introuvable"), { status: 404 });
    return { recipe: { ...data, statut: row.statut, hidden: row.hidden === 1 }, sha: row.sha };
  }

  async function catalogueMateriel() {
    if (writesToBack()) {
      const out = await createBackWriteClient().get("/api/v1/admin/materiel?limit=all");
      const d = out.data || {};
      return (d.materiel || d.items || []).filter((m) => m && !m.deleted);
    }
    const idx = domainIndexes.materiel, wr = domainWriters.materiel;
    if (!idx || !wr) return [];
    return idx.list({ limit: "all" }).items.filter((r) => !r.deleted).map((r) => { try { return wr.readLive(r.id); } catch { return null; } }).filter(Boolean);
  }

  // v251 : notices du lexique (back en préprod, sinon index local), pour la recherche et les entrées lexique_local
  async function catalogueLexique() {
    if (writesToBack()) {
      const out = await createBackWriteClient().get("/api/v1/admin/lexique?limit=all");
      const d = out.data || {};
      return (d.notices || d.items || []).filter((m) => m && !m.deleted);
    }
    const idx = domainIndexes.lexique, wr = domainWriters.lexique;
    if (!idx || !wr) return [];
    return idx.list({ limit: "all" }).items.filter((r) => !r.deleted).map((r) => { try { return wr.readLive(r.id); } catch { return null; } }).filter(Boolean);
  }
  // Lexique indisponible : pas de complément (un terme absent de lexique_local reste refusé en 400 par verifierEtapes)
  const avecLexique = (champs) => champs && champs.etapes !== undefined ? catalogueLexique().catch(() => null) : Promise.resolve(null);

  const materielIds = (rec) => (Array.isArray(rec.equipment) ? rec.equipment : []).map((e) => e && e.ref).filter(Boolean);

  function vueBrouillon(rec) {
    const { body, bodyMarkdown, refs_materiel, refs_lexique, ...recette } = rec;
    return { ...recette, materiel: materielIds(rec), styles: threeStyles(rec) ? STYLES_TROIS : ["base"], etapesEdition: etapesEdition(rec) };
  }

  function sendErr(res, e) {
    // 409 : format inchangé {ok:false,error,currentSha} ; on garde le message du back (ex. « …depuis l'ouverture du brouillon… »).
    if (e.status === 409) {
      const msg = e.body && typeof e.body.error === "string" ? e.body.error : CONFLICT;
      const body = { ok: false, error: msg };
      if (e.currentSha) body.currentSha = e.currentSha;
      if (e.body && e.body.currentVersion !== undefined) body.currentVersion = e.body.currentVersion;
      return send(res, 409, body, e.currentSha ? { ETag: `"${e.currentSha}"` } : {});
    }
    send(res, e.status || 500, e.body && typeof e.body === "object" && e.body.ok === false ? e.body : { ok: false, error: e.message || "Erreur serveur" });
  }

  // v246 : brouillon d'édition stocké dans le back commun (Lien en bio, back v44) : /api/v1/admin/recettes/:slug/brouillon[/publier],
  // /recettes/editions, propositions cible « brouillon ». Contrat du back : docs/recettes-brouillon-contrat.md. Recettes garde son
  // format d'édition (titre, intro, etapes, ingredients, materiel) et le traduit en `champs` du back (versions entières) + `meta`.
  const pathBrouillon = (slug) => "/api/v1/admin/recettes/" + slug + "/brouillon";
  const SANS_BACK = "brouillon d'édition : back commun seulement (RJ_WRITES=back)";

  async function vueBack(req, slug) {
    const out = await backClientFor(req).get(pathBrouillon(slug));
    return out.data || {};
  }

  /** Réponse Recettes à partir de la vue du back (sans meta brute ni chemin NAS). */
  function vueEdition(slug, v, extra = {}) {
    return {
      ok: true, slug,
      recette: vueBrouillon(v.recette || {}),
      version: v.version, aBrouillon: v.aBrouillon === true, base_sha: v.base_sha || null,
      ficheVersion: v.ficheVersion || null, ficheStatut: v.ficheStatut || null, publieeVersion: v.publieeVersion ?? null,
      perime: v.perime === true,
      stylesAAligner: Array.isArray(v.stylesAAligner) ? v.stylesAAligner : [], alignement: v.alignement || "ok",
      auteur: v.auteur ?? null, maj: v.maj ?? null, maj_par: v.maj_par ?? null, cree: v.cree ?? null, cree_par: v.cree_par ?? null,
      propositions: Array.isArray(v.propositions) ? v.propositions : [],
      ...extra,
    };
  }

  /** Fiche de référence (version enregistrée dans le back, la publiée si elle l'est) : base du marqueur « styles à aligner ». */
  async function ficheDe(slug, v) {
    if (!v.aBrouillon) return v.recette || {};
    return (await ficheCourante(slug)).recipe;
  }

  const versionDe = (b, req) => String((b && b.version) || req.headers["if-match"] || "").replace(/^W\//, "").replaceAll('"', "").trim();

  /** Proposition d'un bot (ou de l'admin) sur le brouillon d'édition : traduite et validée ici, puis relayée avec la clé de l'appelant. */
  async function proposerSurBrouillon(req, res, body, key) {
    try {
      const slug = String(body.slug || "");
      if (!/^[a-z0-9-]+$/.test(slug)) return send(res, 400, { ok: false, error: "slug manquant" });
      const v = await vueBack(req, slug);
      if (!v.aBrouillon) return send(res, 404, { ok: false, error: "brouillon d'édition introuvable (rien à viser : proposer sur la fiche sans cible)" });
      const version = versionDe(body, req);
      if (version && version !== v.version) return sendConflict(res, v.version);
      const sources = ["edition", "champs", "data"].filter((k) => body[k] !== undefined);
      if (sources.length !== 1) return send(res, 400, { ok: false, error: "une seule entrée : edition (format de l'éditeur), champs ou data (format du back)" });
      let entree, apres;
      if (body.edition !== undefined) {
        const { style, variante, ...champs } = body.edition || {};
        const out = applyEditorPatch(v.recette, champs, { style, variante, materiel: await catalogueMateriel(), lexique: await avecLexique(champs) });
        apres = out.recipe;
        entree = { champs: champsPourBack(v.recette, apres) };
        if (!Object.keys(entree.champs).length) return send(res, 400, { ok: false, error: "rien à proposer (aucun changement)" });
      } else if (body.champs !== undefined) {
        if (!body.champs || typeof body.champs !== "object" || Array.isArray(body.champs)) return send(res, 400, { ok: false, error: "champs : objet attendu" });
        apres = fusionnerChamps(v.recette, body.champs);
        verifierEtapes(apres);
        entree = { champs: body.champs };
      } else {
        if (!body.data || typeof body.data !== "object" || Array.isArray(body.data)) return send(res, 400, { ok: false, error: "data : objet attendu" });
        apres = body.data;
        verifierEtapes(apres);
        entree = { data: body.data };
      }
      // Accepter la proposition = valider l'alignement (décision de Jigmé) : la meta portée efface le marqueur et pose la référence.
      const fiche = await ficheDe(slug, v);
      const meta = metaAlignement(fiche, apres, v.meta, { valider: true });
      const apresInfo = stylesAAligner(fiche, apres, (v.meta && v.meta.alignementBase) || null);
      const fwd = { cible: "brouillon", slug, version: v.version, ...entree, meta, resume: String(body.resume || "").slice(0, 500) };
      const out = await backClientFor(req).request("POST", "/api/v1/admin/recettes/propositions", fwd, {});
      send(res, out.status, { ...out.data, stylesAAlignerApres: apresInfo, auteurCle: isBotScope(key.scope) ? "bot" : "admin" });
    } catch (e) { sendErr(res, e); }
  }

  function handleEditeur(req, res, url, raw) {
    if (raw === "/api/v1/admin/alignements" || raw === "/api/v1/admin/recettes/editions") {
      if (!requireAdmin(req, res, [WRITE_RECETTES, ...BOT_RECETTES])) return true;
      if (req.method !== "GET" && req.method !== "HEAD") { send(res, 405, { ok: false, error: "méthode non autorisée" }); return true; }
      const alias = raw.endsWith("/alignements");
      const etat = url.searchParams.get(alias ? "etat" : "alignement") || (alias ? "a_faire" : "tous");
      if (!["a_faire", "tous"].includes(etat)) { send(res, 400, { ok: false, error: (alias ? "etat" : "alignement") + " invalide (a_faire, tous)" }); return true; }
      if (!writesToBack()) { send(res, 501, { ok: false, error: SANS_BACK }); return true; }
      (async () => {
        try {
          const q = new URLSearchParams({ alignement: etat });
          for (const k of ["page", "limit"]) if (url.searchParams.get(k)) q.set(k, url.searchParams.get(k));
          const out = await backClientFor(req).get("/api/v1/admin/recettes/editions?" + q);
          const d = out.data || {};
          send(res, 200, { ok: true, etat, brouillons: d.brouillons || [], total: d.total ?? 0, page: d.page ?? 1, limit: d.limit ?? 50 });
        } catch (e) { sendErr(res, e); }
      })();
      return true;
    }
    const m = raw.match(/^\/api\/v1\/admin\/recettes\/([a-z0-9-]+)\/(apercu|brouillon|publier|brouillon\/publier)$/);
    if (!m) return false;
    const slug = m[1], route = m[2] === "brouillon/publier" ? "publier" : m[2];
    if (RESERVED.has(slug)) return false;
    if (route === "apercu") {
      if (!requireAdmin(req, res, [WRITE_RECETTES])) return true;
      if (req.method !== "POST") { send(res, 405, { ok: false, error: "méthode non autorisée" }); return true; }
      (async () => {
        try {
          const b = await readJson(req, 512 * 1024);
          if (b.recette !== undefined && b.champs !== undefined) throw Object.assign(new Error("recette OU champs, pas les deux"), { status: 400 });
          const [cur, cat] = await Promise.all([
            ficheCourante(slug).catch((e) => { if (e.status === 404 && b.recette) return null; throw e; }),
            catalogueMateriel(),
          ]);
          // v246 : base = le brouillon d'édition s'il existe (back), sinon la fiche.
          let v = null;
          if (cur && writesToBack()) v = await vueBack(req, slug);
          const base = v ? v.recette : cur && cur.recipe;
          let recette;
          if (b.recette !== undefined) {
            if (!b.recette || typeof b.recette !== "object" || Array.isArray(b.recette)) throw Object.assign(new Error("recette invalide"), { status: 400 });
            assertNoHtml(b.recette);
            if (b.recette.slug !== slug) throw Object.assign(new Error("slug ≠ URL"), { status: 400 });
            opts.validateRecipeV2(b.recette, { prevCategory: cur ? cur.recipe.category : undefined });
            recette = b.recette;
          } else if (b.champs !== undefined) {
            recette = applyEditorPatch(base, b.champs, { style: b.style, variante: b.variante, materiel: cat, lexique: await avecLexique(b.champs) }).recipe;
          } else recette = base;
          const aligner = cur ? stylesAAligner(cur.recipe, recette, (v && v.meta && v.meta.alignementBase) || null) : [];
          const ap = await renderApercu({
            recipe: recette, materiel: cat, yaml, loadTargeted, loadPages, publicDir: opts.htmlDir, srcDir: opts.srcDir, root: opts.root,
            RD: opts.RD, RR: opts.RR, paths: opts.paths, validateRecipeV2: opts.validateRecipeV2, style: b.style, variante: b.variante,
          });
          send(res, 200, {
            ok: true, slug, ...ap, version: v ? v.version : cur ? cur.sha : null, aBrouillon: !!(v && v.aBrouillon), perime: !!(v && v.perime),
            stylesAAligner: aligner,
          });
        } catch (e) { sendErr(res, e); }
      })();
      return true;
    }
    if (route === "brouillon" && (req.method === "GET" || req.method === "HEAD")) {
      if (!requireAdmin(req, res, [WRITE_RECETTES, ...BOT_RECETTES])) return true;
      (async () => {
        try {
          if (!writesToBack()) {
            // Volume local (dev, tests) : pas de brouillon d'édition ; la fiche est renvoyée telle quelle (lecture seule).
            const cur = await ficheCourante(slug);
            const publiee = cur.recipe.statut !== "brouillon";
            return send(res, 200, vueEdition(slug, {
              recette: cur.recipe, version: cur.sha, aBrouillon: false, base_sha: cur.sha, ficheVersion: cur.sha,
              ficheStatut: publiee ? "publiee" : "brouillon", publieeVersion: publiee ? cur.sha : null,
            }, { stockage: "volume local : lecture seule (brouillon d'édition dans le back commun seulement)" }), { ETag: `"${cur.sha}"` });
          }
          const v = await vueBack(req, slug);
          send(res, 200, vueEdition(slug, v), { ETag: `"${v.version}"` });
        } catch (e) { sendErr(res, e); }
      })();
      return true;
    }
    const allowed = route === "publier" ? ["POST"] : ["PATCH", "DELETE"];
    if (!requireAdmin(req, res, [WRITE_RECETTES])) return true;
    if (!allowed.includes(req.method)) { send(res, 405, { ok: false, error: "méthode non autorisée" }); return true; }
    (async () => {
      try {
        if (!writesToBack()) {
          // Volume local : version (409) et champs (400) contrôlés, puis 501 (rien n'est écrit).
          const b = req.method === "DELETE" ? {} : await readJson(req, 512 * 1024);
          const cur = await ficheCourante(slug);
          if (req.method !== "DELETE" && versionDe(b, req) !== cur.sha) return sendConflict(res, cur.sha);
          if (req.method === "PATCH") {
            const { version, style, variante, validerAlignement, ...champs } = b;
            applyEditorPatch(cur.recipe, champs, { style, variante, materiel: await catalogueMateriel(), lexique: await avecLexique(champs) });
          }
          return send(res, 501, { ok: false, error: SANS_BACK, attente: "RJ_WRITES=back" });
        }
        const b = await readJson(req, 1536 * 1024).catch((e) => { if (req.method === "DELETE" && e.status === 400) return {}; throw e; });
        const version = versionDe(b, req);
        const client = createBackWriteClient();
        if (route === "publier") {
          // Le back contrôle la version (409), la fiche inchangée depuis l'ouverture (409), le même nombre d'étapes par style (400)
          // et les règles de publication ; il clôt les propositions et remet la relecture à a_relire. La page publique est refaite
          // par le webhook de l'outbox du back (événement modifiee si la fiche est publique) : pas de régénération ici.
          const out = await client.request("POST", pathBrouillon(slug) + "/publier", { version }, {});
          send(res, 200, out.data, out.data && out.data.sha ? { ETag: `"${out.data.sha}"` } : {});
          return;
        }
        if (req.method === "DELETE") {
          const out = await client.request("DELETE", pathBrouillon(slug), version ? { version } : {}, {});
          send(res, 200, vueEdition(slug, out.data, { supprime: out.data.supprime }), { ETag: `"${out.data.version}"` });
          return;
        }
        // PATCH (format de l'éditeur)
        const { version: _v, style, variante, validerAlignement, ...champs } = b;
        if (validerAlignement !== undefined && typeof validerAlignement !== "boolean") throw Object.assign(new Error("validerAlignement : booléen"), { status: 400 });
        const v = await vueBack(req, slug);
        if (!version || version !== v.version) return sendConflict(res, v.version);
        if (!Object.keys(champs).length && !validerAlignement) throw Object.assign(new Error("rien à enregistrer"), { status: 400 });
        const apres = Object.keys(champs).length
          ? applyEditorPatch(v.recette, champs, { style, variante, materiel: await catalogueMateriel(), lexique: await avecLexique(champs) }).recipe
          : v.recette;
        const champsBack = champsPourBack(v.recette, apres);
        const meta = metaAlignement(await ficheDe(slug, v), apres, v.meta, { valider: validerAlignement === true });
        if (!Object.keys(champsBack).length && !meta) {
          send(res, 200, vueEdition(slug, v, { inchange: true }), { ETag: `"${v.version}"` });
          return;
        }
        const fwd = { version };
        if (Object.keys(champsBack).length) fwd.champs = champsBack;
        if (meta) fwd.meta = meta;
        const out = await client.request("PATCH", pathBrouillon(slug), fwd, {});
        send(res, 200, vueEdition(slug, out.data, out.data.inchange ? { inchange: true } : {}), { ETag: `"${out.data.version}"` });
      } catch (e) { sendErr(res, e); }
    })();
    return true;
  }

  // Recherche de matériel pour l'autocomplétion de l'éditeur : GET /api/v1/admin/materiel?q=&limite=10 (« limite » active ce mode).
  function handleMaterielRecherche(req, res, url) {
    if (!requireAdmin(req, res, [DOMAIN_SCOPE.materiel])) return true;
    (async () => {
      try {
        const items = chercherMateriel((await catalogueMateriel()).filter((m) => m.hidden !== true && m.statut !== "brouillon"), url.searchParams.get("q") || "", url.searchParams.get("limite"));
        const origine = (process.env.APERCU_ORIGIN || "https://recettes-jigme-preprod.fly.dev").replace(/\/+$/, "");
        const abs = (u) => !u ? null : /^https:\/\//.test(u) ? u : u.startsWith("/") ? origine + (u.startsWith("/cuisine/") ? u : "/cuisine" + u) : null;
        send(res, 200, { ok: true, items: items.map((m) => ({ id: m.id, slug: m.id, nom: m.label || m.id, imageUrl: abs(imageMateriel(m)) })) });
      } catch (e) { sendErr(res, e); }
    })();
    return true;
  }


  // v251 : recherche dans le lexique pour l'éditeur : GET /api/v1/admin/lexique?q=&limite=10 (admin et bots ; 404 sans clé).
  function handleLexiqueRecherche(req, res, url) {
    if (!requireAdmin(req, res, [DOMAIN_SCOPE.lexique, ...BOT_LEXIQUE, WRITE_RECETTES, ...BOT_RECETTES])) return true;
    (async () => {
      try {
        send(res, 200, { ok: true, items: chercherLexique(await catalogueLexique(), url.searchParams.get("q") || "", url.searchParams.get("limite")) });
      } catch (e) { sendErr(res, e); }
    })();
    return true;
  }

  // ---------- Relectures (relais du back) et couverture, v247 préprod : docs/relectures-recettes.md ----------
  const LECTURE = [READ_RECETTES, WRITE_RECETTES, ...BOT_RECETTES];
  function handleRelectures(req, res, url, raw) {
    const m = raw.match(/^\/api\/v1\/admin\/relectures(?:\/(cases|suivante)|\/([a-z]+)\/([a-z0-9-]+))?$/);
    if (!m) return false;
    const put = req.method === "PUT";
    if (!requireAdmin(req, res, put ? [WRITE_RECETTES] : LECTURE)) return true;
    const item = !!m[2];
    if (put ? !item : req.method !== "GET" && req.method !== "HEAD") { send(res, 405, { ok: false, error: "méthode non autorisée" }); return true; }
    if (m[1] === "cases") {
      send(res, 200, { ok: true, cases: { recette: CASES_RECETTE, materiel: CASES_MATERIEL, lexique: [], restaurant: [] }, etats: ["a_relire", "verifiee"], types: TYPES_RELECTURE });
      return true;
    }
    if (item && !TYPES_RELECTURE.includes(m[2])) { send(res, 400, { ok: false, error: `type invalide (${TYPES_RELECTURE.join(", ")})` }); return true; }
    if (!writesToBack()) { send(res, 501, { ok: false, error: "relectures : back commun seulement (RJ_WRITES=back)" }); return true; }
    (async () => {
      try {
        if (put) {
          const body = verifierPutRelecture(m[2], await readJson(req, 64 * 1024));
          const out = await createBackWriteClient().request("PUT", raw, body, {});
          send(res, 200, out.data, out.etag ? { ETag: out.etag } : {});
          return;
        }
        const q = new URLSearchParams();
        const permis = m[1] === "suivante" ? ["type", "sauf"] : item ? [] : ["etat", "type", "page", "limit"];
        for (const k of permis) if (url.searchParams.get(k) != null) q.set(k, url.searchParams.get(k));
        const out = await backClientFor(req).get(raw + (q.toString() ? "?" + q : ""));
        send(res, 200, out.data, out.etag ? { ETag: out.etag } : {});
      } catch (e) { sendErr(res, e); }
    })();
    return true;
  }

  // Couverture : la liste du back n'a pas les références ; une lecture par fiche, gardée dans un cache par sha (sur le volume de
  // Recettes, pas le NAS). Le back limite les lectures admin à 240/min par clé : au-delà de COUV_SYNC fiches à relire, la lecture
  // se fait en tâche de fond à COUV_PAS_MS par fiche (60/min au plus) et la réponse dit complet:false (aLire = fiches restantes).
  const COUV_SYNC = 10;
  const COUV_PAS_MS = Number(process.env.RJ_COUVERTURE_PAS_MS || 1000);
  const couvFile = live ? path.join(live, "index", "couverture-refs.json") : "";
  const refsCache = new Map();
  try { if (couvFile && fs.existsSync(couvFile)) for (const [k, v] of Object.entries(JSON.parse(fs.readFileSync(couvFile, "utf8")))) refsCache.set(k, v); } catch (e) { console.error("[api-v1] couverture cache", e.message); }
  const saveCouv = () => {
    if (!couvFile) return;
    try { fs.mkdirSync(path.dirname(couvFile), { recursive: true }); fs.writeFileSync(couvFile + ".tmp", JSON.stringify(Object.fromEntries(refsCache))); fs.renameSync(couvFile + ".tmp", couvFile); }
    catch (e) { console.error("[api-v1] couverture cache", e.message); }
  };
  let couvWorker = null;
  async function lireRefs(client, r) {
    const d = (await client.get("/api/v1/admin/recettes/recipes/" + r.slug)).data || {};
    const rec = d.recipe || {};
    refsCache.set(r.slug, { sha: r.sha, materiel: rec.refs_materiel || [], lexique: rec.refs_lexique || [] });
  }
  function lancerCouverture(client, aLire) {
    if (couvWorker) return;
    couvWorker = (async () => {
      let n = 0;
      for (const r of aLire) {
        const c = refsCache.get(r.slug);
        if (c && c.sha === r.sha) continue;
        try { await lireRefs(client, r); n++; }
        catch (e) {
          if (e.status === 429) { await new Promise((ok) => setTimeout(ok, 60000)); continue; }
          if (e.status !== 404) console.error("[api-v1] couverture", r.slug, e.message);
        }
        if (n % 20 === 0) saveCouv();
        await new Promise((ok) => setTimeout(ok, COUV_PAS_MS));
      }
      saveCouv();
    })().finally(() => { couvWorker = null; });
  }
  const sansRefs = (r) => { const c = refsCache.get(r.slug); return !(c && c.sha === r.sha); };
  async function fichesCouverture() {
    if (!writesToBack()) {
      return { complet: true, aLire: 0, fiches: index.list({ limit: "all" }).recipes.map((r) => ({ ...r, hidden: r.hidden === true || r.hidden === 1, ...index.refsOf(r.slug) })) };
    }
    const client = createBackWriteClient();
    const list = (await client.get("/api/v1/admin/recettes/recipes?limit=all")).data || {};
    const rows = (list.recipes || list.items || []).filter((r) => r && r.slug && !r.deleted);
    const vivants = new Set(rows.map((r) => r.slug));
    for (const k of refsCache.keys()) if (!vivants.has(k)) refsCache.delete(k);
    let todo = rows.filter(sansRefs);
    if (todo.length && todo.length <= COUV_SYNC && !couvWorker) {
      for (const r of todo) await lireRefs(client, r);
      saveCouv();
      todo = [];
    } else if (todo.length) lancerCouverture(client, todo);
    const prets = rows.filter((r) => !sansRefs(r));
    return {
      complet: prets.length === rows.length, aLire: rows.length - prets.length,
      fiches: prets.map((r) => ({ ...r, materiel: refsCache.get(r.slug).materiel, lexique: refsCache.get(r.slug).lexique })),
    };
  }
  function handleCouverture(req, res, url) {
    if (!requireAdmin(req, res, LECTURE)) return true;
    if (req.method !== "GET" && req.method !== "HEAD") { send(res, 405, { ok: false, error: "méthode non autorisée" }); return true; }
    (async () => {
      try {
        const manque = url.searchParams.get("manque") || "tous";
        couverture([], manque); // valide « manque » (400) avant toute lecture
        const f = await fichesCouverture();
        const r = couverture(f.fiches, manque);
        send(res, 200, { ok: true, manque, complet: f.complet, aLire: f.aLire, ...r });
      } catch (e) { sendErr(res, e); }
    })();
    return true;
  }

  function handle(req, res, url, rawPath) {
    const raw = rawPath || (url.pathname.replace(/\/+$/, "") || "/");
    if (raw !== "/api/v1" && !raw.startsWith("/api/v1/")) return false;

    if (raw === "/api/v1/webhooks/cuisine") {
      handleWebhook(req, res);
      return true;
    }

    if (raw === "/api/v1/health") {
      if (req.method !== "GET" && req.method !== "HEAD") {
        send(res, 405, { ok: false, error: "méthode non autorisée" });
        return true;
      }
      send(res, 200, health());
      return true;
    }

    const rest = raw.match(/^\/api\/v1\/admin\/recettes\/(?:recipes\/)?([a-z0-9-]+)\/restore$/);
    if (rest) {
      if (req.method !== "POST") {
        if (!requireAdmin(req, res)) return true;
        send(res, 405, { ok: false, error: "méthode non autorisée" });
        return true;
      }
      req._v1RestoreAlias = true;
      // Reuse handleWrite with action forced after body read: wrap by injecting on a clone is hard;
      // instead parse here via handleWrite after monkey-patching... Simpler: handleRestore.
      handleRestore(req, res, rest[1]);
      return true;
    }

    if (raw === "/api/v1/admin/analytics") {
      handleAnalytics(req, res, url);
      return true;
    }

    if (raw === "/api/v1/admin/recettes/couverture") return handleCouverture(req, res, url);
    if (handleRelectures(req, res, url, raw)) return true;

    if (handleEditeur(req, res, url, raw)) return true;

    if (handleDraftRoutes(req, res, url, raw)) return true;

    if (raw === "/api/v1/admin/recettes/meta") {
      handleMeta(req, res);
      return true;
    }

    const list = raw === "/api/v1/admin/recettes" || raw === "/api/v1/admin/recettes/recipes";
    if (list) return handleList(req, res, url);

    const item = raw.match(/^\/api\/v1\/admin\/recettes\/(?:recipes\/)?([a-z0-9-]+)$/);
    if (item && (item[1] !== "recipes" || raw.includes("/recipes/"))) {
      if (RESERVED.has(item[1]) && !raw.includes("/recipes/")) {
        if (!requireAdmin(req, res)) return true;
        send(res, 404, { ok: false, error: "introuvable" });
        return true;
      }
      return handleItem(req, res, item[1]);
    }

    if (raw === "/api/v1/admin/materiel/image-candidates") {
      handleImageCandidates(req, res);
      return true;
    }
    const lexExport = raw.match(/^\/api\/v1\/admin\/lexique\/([a-z0-9-]+)\/export$/);
    if (lexExport) {
      handleLexiqueExport(req, res, lexExport[1]);
      return true;
    }
    const domainRest = raw.match(/^\/api\/v1\/admin\/(materiel|lexique|restaurants)\/([a-z0-9-]+)\/restore$/);
    if (domainRest) {
      handleDomainRestore(req, res, domainRest[1], domainRest[2]);
      return true;
    }
    const domainList = raw.match(/^\/api\/v1\/admin\/(materiel|lexique|restaurants)$/);
    if (domainList) return handleDomainList(req, res, url, domainList[1]);
    if (raw === "/api/v1/admin/restaurants/construction") { handleConstruction(req, res); return true; }
    const consMedia = raw.match(/^\/api\/v1\/admin\/restaurants\/construction\/media\/([a-f0-9]{64})\.webp$/);
    if (consMedia) { handleConstructionMedia(req, res, consMedia[1]); return true; }
    const domainItem = raw.match(/^\/api\/v1\/admin\/(materiel|lexique|restaurants)\/([a-z0-9-]+)$/);
    if (domainItem) return handleDomainItem(req, res, domainItem[1], domainItem[2]);

    if (raw.startsWith("/api/v1/admin/")) {
      if (!requireAdmin(req, res)) return true;
      send(res, 404, { ok: false, error: "introuvable" });
      return true;
    }

    send(res, 404, { ok: false, error: "introuvable" });
    return true;
  }


  const DOMAIN_SCOPE = {
    materiel: "admin-materiel:ecrire",
    lexique: "admin-lexique:ecrire",
    restaurants: "admin-restaurants:ecrire",
  };
  const DOMAIN_LIST_KEY = { materiel: "materiel", lexique: "notices", restaurants: "restaurants" };
  const DOMAIN_ITEM_KEY = { materiel: "materiel", lexique: "notice", restaurants: "restaurant" };

  function mapListItem(kind, row) {
    const base = { statut: row.statut, hidden: row.hidden, sha: row.sha, deleted: row.deleted, updated_at: row.updated_at };
    if (kind === "materiel") return { id: row.id, label: row.title, ...base };
    if (kind === "lexique") return { id: row.id, terme: row.title, ...base };
    return { slug: row.id, nom: row.title, ...base };
  }


  function handleMeta(req, res) {
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (!requireAdmin(req, res, [READ_RECETTES])) return;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return;
    }
    const key = requireAdmin(req, res, [READ_RECETTES]);
    if (!key) return;
    const body = typeof opts.adminMeta === "function" ? opts.adminMeta() : (opts.adminMeta || null);
    if (!body) {
      send(res, 503, { ok: false, error: "meta indisponible" });
      return;
    }
    const sha = createHash("sha256").update(JSON.stringify(body)).digest("hex");
    if (etagMatch(req, sha)) {
      sendNotModified(res, sha);
      return;
    }
    if (req.method === "HEAD") {
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex",
        ETag: `"${sha}"`,
      });
      res.end();
      return;
    }
    send(res, 200, body, { ETag: `"${sha}"` });
  }

  async function handleImageCandidates(req, res) {
    if (req.method !== "POST") {
      if (!requireAdmin(req, res, [DOMAIN_SCOPE.materiel])) return;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return;
    }
    const key = requireAdmin(req, res, [DOMAIN_SCOPE.materiel]);
    if (!key) return;
    const fn = opts.imageCandidates;
    if (!fn) {
      send(res, 503, { ok: false, error: "image-candidates indisponible" });
      return;
    }
    try {
      const body = await readJson(req, 8 * 1024);
      const out = await fn(body && body.url);
      send(res, 200, out);
    } catch (e) {
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
  }

  function handleLexiqueExport(req, res, id) {
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (!requireAdmin(req, res, [DOMAIN_SCOPE.lexique])) return;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return;
    }
    const key = requireAdmin(req, res, [DOMAIN_SCOPE.lexique]);
    if (!key) return;
    if (writesToBack()) {
      return forwardToBack(req, res, "/api/v1/admin/lexique/" + id + "/export");
    }
    if (!opts.lexique) {
      send(res, 503, { ok: false, error: "lexique indisponible" });
      return;
    }
    try {
      const body = { ok: true, ...opts.lexique.export(id) };
      if (etagMatch(req, body.sha)) {
        sendNotModified(res, body.sha);
        return;
      }
      send(res, 200, body, { ETag: `"${body.sha}"` });
    } catch (e) {
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
  }

  function handleDomainList(req, res, url, kind) {
    if (req.method === "POST") return handleDomainWrite(req, res, kind, "");
    if (kind === "materiel" && req.method === "GET" && url.searchParams.has("limite")) return handleMaterielRecherche(req, res, url);
    if (kind === "lexique" && req.method === "GET" && url.searchParams.has("limite")) return handleLexiqueRecherche(req, res, url);
    if (req.method !== "GET" && req.method !== "HEAD") {
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    if (!requireAdmin(req, res, kind === "lexique" ? [DOMAIN_SCOPE[kind], ...BOT_LEXIQUE] : [DOMAIN_SCOPE[kind]])) return true;
    if (writesToBack()) {
      return forwardToBack(req, res, (url.pathname.replace(/\/+$/, "") || "/") + url.search);
    }
    const idx = domainIndexes[kind];
    if (!idx) {
      send(res, 503, { ok: false, error: "index " + kind + " indisponible" });
      return true;
    }
    try {
      const { page, limit } = parsePageLimit(url);
      const out = idx.list({
        q: url.searchParams.get("q") || "",
        statut: url.searchParams.get("statut") || "",
        hidden: url.searchParams.get("hidden") || "",
        deleted: url.searchParams.get("deleted") === "1" || url.searchParams.get("deleted") === "true",
        page,
        limit,
      });
      const trash = idx.list({ deleted: true, limit: "all" }).items.map((r) => mapListItem(kind, r));
      const payload = {
        ok: true,
        [DOMAIN_LIST_KEY[kind]]: out.items.map((r) => mapListItem(kind, r)),
        total: out.total,
        page: out.page,
        limit: out.limit,
        trash,
      };
      if (kind === "restaurants" && opts.restaurantMeta) Object.assign(payload, opts.restaurantMeta);
      send(res, 200, payload);
    } catch (e) {
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }

  function handleDomainItem(req, res, kind, id) {
    if (req.method === "POST") return handleDomainWrite(req, res, kind, id);
    if (req.method !== "GET" && req.method !== "HEAD") {
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    if (!requireAdmin(req, res, kind === "lexique" ? [DOMAIN_SCOPE[kind], ...BOT_LEXIQUE] : [DOMAIN_SCOPE[kind]])) return true;
    if (writesToBack()) {
      return forwardToBack(req, res, "/api/v1/admin/" + kind + "/" + id);
    }
    const wr = domainWriters[kind];
    if (!wr) {
      send(res, 503, { ok: false, error: "écriture " + kind + " indisponible" });
      return true;
    }
    try {
      const item = wr.readLive(id);
      if (etagMatch(req, item.sha)) {
        res.writeHead(304, {
          ETag: `"${item.sha}"`,
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
          "X-Robots-Tag": "noindex",
        });
        res.end();
        return true;
      }
      send(res, 200, { ok: true, [DOMAIN_ITEM_KEY[kind]]: item, sha: item.sha }, { ETag: `"${item.sha}"` });
    } catch (e) {
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }

  async function handleDomainWrite(req, res, kind, id) {
    const wr = domainWriters[kind];
    if (!wr) {
      if (!requireAdmin(req, res, [DOMAIN_SCOPE[kind]])) return true;
      send(res, 405, { ok: false, error: "écriture v1 non disponible pour l'instant" });
      return true;
    }
    let body;
    try { body = await readJson(req, 9 * 1024 * 1024); }
    catch (e) {
      send(res, e.status || 400, { ok: false, error: e.message || "JSON mal formé" });
      return true;
    }
    const action = String(body.action || (id ? "" : "create"));
    if (!action) {
      send(res, 400, { ok: false, error: "action invalide (create, update, delete, restore, hide, show, import-markdown, photo, block-add, block-update, block-delete, block-move, blocks-order, blocks)" });
      return true;
    }
    const needed = kind === "lexique" && ["create", "update", "save"].includes(action) ? [DOMAIN_SCOPE[kind], ...BOT_LEXIQUE] : [DOMAIN_SCOPE[kind]];
    const key = requireAdmin(req, res, needed);
    if (!key) return true;
    const bot = isBotScope(key.scope);
    if (bot) {
      if (kind !== "lexique") {
        send(res, 403, { ok: false, error: "portée insuffisante" });
        return true;
      }
      try { assertNoHtml(body); } catch (e) { send(res, e.status || 400, { ok: false, error: e.message }); return true; }
      if (!botMay(action)) {
        send(res, 403, { ok: false, error: "portée insuffisante" });
        return true;
      }
    }
    // v255 : « construction » réservé (route /api/v1/admin/restaurants/construction)
    if (kind === "restaurants" && String(id || body.id || body.slug || "") === "construction") {
      send(res, 400, { ok: false, error: "slug réservé : construction" });
      return true;
    }
    if (writesToBack()) {
      const target0 = id || String(body.id || body.slug || "");
      const expectedSha0 = parseExpectedSha(body, req);
      const path0 = target0 ? "/api/v1/admin/" + kind + "/" + target0 : "/api/v1/admin/" + kind;
      if (bot && kind === "lexique" && (action === "update" || action === "save") && target0) {
        try {
          const client = backClientFor(req);
          const cur = await client.get(path0);
          const rec = (cur.data && (cur.data.notice || cur.data.fiche || cur.data)) || {};
          const currentSha = cur.sha || rec.sha;
          if (!currentSha) throw Object.assign(new Error("notice introuvable"), { status: 404 });
          if (expectedSha0 !== currentSha) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha });
          if (rec.statut === "publiee") {
            const out = await client.post("/api/v1/admin/lexique/propositions", {
              ...body, action: "create", slug: target0, id: target0, expectedSha: currentSha,
            });
            const prop = (out.data && (out.data.proposition || out.data)) || out.data;
            send(res, 200, { ok: true, proposition: prop, sha: currentSha, note: "proposition enregistrée, notice publiée non modifiée" }, { ETag: `"${currentSha}"` });
            return true;
          }
          body.statut = "brouillon";
          body.hidden = true;
        } catch (e) {
          if (e.status === 409) { sendConflict(res, e.currentSha); return true; }
          send(res, e.status || 500, e.body && typeof e.body === "object" ? e.body : { ok: false, error: e.message || "Erreur serveur" });
          return true;
        }
      }
      if (bot) { body.statut = "brouillon"; body.hidden = true; }
      if (kind === "restaurants") {
        // R2 : même API qu'avant pour Admin. Photo : bibliothèque par défaut (le back met cover par défaut).
        if (action === "photo" && (body.target == null || body.target === "")) body.target = "library";
        // Actions de blocs : le back ne connaît que update ; Recettes calcule les blocs sur la fiche du back (sha vérifié).
        if (RESTO_BLOCK_ACTIONS.has(action)) {
          if (!target0) { send(res, 400, { ok: false, error: "identifiant manquant" }); return true; }
          try {
            if (!opts.restaurantBlocks) throw Object.assign(new Error("actions de blocs indisponibles"), { status: 503 });
            const cur = await backClientFor(req).get(path0);
            const rec = (cur.data && cur.data.restaurant) || {};
            const currentSha = cur.sha || (cur.data && cur.data.sha) || rec.sha;
            if (!currentSha) throw Object.assign(new Error("restaurant introuvable"), { status: 404 });
            if (expectedSha0 !== currentSha) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha });
            const blocs = opts.restaurantBlocks(rec.blocs || [], { ...body, action });
            return forwardToBack(req, res, path0, { body: { action: "update", blocs, expectedSha: currentSha }, expectedSha: currentSha, kind, action: "update", id: target0 });
          } catch (e) {
            if (e.status === 409) { sendConflict(res, e.currentSha); return true; }
            send(res, e.status || 500, e.body && typeof e.body === "object" ? e.body : { ok: false, error: e.message || "Erreur serveur" });
            return true;
          }
        }
      }
      return forwardToBack(req, res, path0, { body, expectedSha: expectedSha0, kind, action, id: target0 });
    }
    const target = id || String(body.id || body.slug || "");
    if (action !== "create" && !target) {
      send(res, 400, { ok: false, error: "identifiant manquant" });
      return true;
    }
    try {
      if (bot && (action === "update" || action === "save")) {
        const file = live && path.join(live, "lexique", target + ".md");
        if (!file || !fs.existsSync(file)) throw Object.assign(new Error("notice introuvable"), { status: 404 });
        const raw = fs.readFileSync(file, "utf8");
        const currentSha = createHash("sha256").update(raw).digest("hex");
        const expectedSha = parseExpectedSha(body, req);
        if (expectedSha !== currentSha) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409, currentSha });
        const fm = yaml.load((raw.match(/^---\n([\s\S]*?)\n---/) || [])[1] || "") || {};
        if (fm.statut === "publiee") {
          const rec = props.create({
            domaine: "lexique", slug: target, shaBase: currentSha,
            markdown: body.markdown || raw, champs: { ...body, action: undefined, expectedSha: undefined },
            resume: body.resume || "", source: key.id, auteur: key.id,
          });
          send(res, 200, { ok: true, proposition: rec, sha: currentSha, note: "proposition enregistrée, notice publiée non modifiée" }, { ETag: `"${currentSha}"` });
          return true;
        }
        body.statut = "brouillon";
        body.hidden = true;
      }
      const out = await wr.dispatch(action, target, body, req, bot ? DOMAIN_SCOPE.lexique : key.scope);
      const headers = {};
      if (out.sha) headers.ETag = `"${out.sha}"`;
      send(res, 200, out, headers);
    } catch (e) {
      if (e.status === 409) {
        sendConflict(res, e.currentSha);
        return true;
      }
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
    return true;
  }

  async function handleDomainRestore(req, res, kind, id) {
    if (req.method !== "POST") {
      if (!requireAdmin(req, res, [DOMAIN_SCOPE[kind]])) return true;
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return true;
    }
    const wr = domainWriters[kind];
    if (!wr) {
      send(res, 405, { ok: false, error: "écriture v1 non disponible pour l'instant" });
      return true;
    }
    const key = requireAdmin(req, res, [DOMAIN_SCOPE[kind]]);
    if (!key) return;
    if (writesToBack()) {
      let body = {};
      try { body = await readJson(req); } catch { body = { action: "restore" }; }
      body.action = "restore";
      return forwardToBack(req, res, "/api/v1/admin/" + kind + "/" + id + "/restore", { body, kind, action: "restore", id });
    }
    try {
      await readJson(req);
      const out = await wr.dispatch("restore", id, {}, req, key.scope);
      const headers = {};
      if (out.sha) headers.ETag = `"${out.sha}"`;
      send(res, 200, out, headers);
    } catch (e) {
      if (e.status === 409) return sendConflict(res, e.currentSha);
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
  }

  async function handleRestore(req, res, slug) {
    req.headers = req.headers || {};
    try {
      const body = await readJson(req);
      body.action = "restore";
      // Re-enter write with a synthetic already-read body by calling writer directly
      const key = requireAdmin(req, res, [WRITE_RECETTES]);
      if (!key) return;
      if (writesToBack()) {
        body.action = "restore";
        return forwardToBack(req, res, "/api/v1/admin/recettes/recipes/" + slug + "/restore", { body, kind: "recettes", action: "restore", id: slug });
      }
      const out = writer.dispatch("restore", slug, body, { scope: key.scope });
      const headers = {};
      if (out.sha) headers.ETag = `"${out.sha}"`;
      send(res, 200, out, headers);
    } catch (e) {
      if (e.status === 409) return sendConflict(res, e.currentSha);
      send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
    }
  }

  async function handleWebhook(req, res) {
    if (req.method !== "POST") {
      send(res, 405, { ok: false, error: "méthode non autorisée" });
      return;
    }
    let raw;
    try {
      const buf = [];
      let size = 0;
      for await (const c of req) {
        size += c.length;
        if (size > 64 * 1024) throw Object.assign(new Error("trop gros"), { status: 413 });
        buf.push(c);
      }
      raw = Buffer.concat(buf);
    } catch (e) {
      send(res, e.status || 400, { ok: false, error: e.message || "corps illisible" });
      return;
    }
    if (!webhookSecrets.length || !webhookSecrets.some((s) => signatureOk(s, raw, req.headers["x-webhook-signature"]))) {
      send(res, 404, { ok: false });
      return;
    }
    let env;
    try { env = JSON.parse(raw.toString("utf8")); }
    catch {
      send(res, 400, { ok: false, error: "JSON mal formé" });
      return;
    }
    const id = env && env.id;
    if (!id || !env.type) {
      send(res, 400, { ok: false, error: "enveloppe invalide" });
      return;
    }
    if (outbox.alreadyAcked(id)) {
      send(res, 200, { ok: true, duplicate: true, id });
      return;
    }
    try {
      const rebuilt = await applyPublicEvent({
        htmlDir: opts.htmlDir,
        restoDir: opts.restoDir,
        live,
        yaml,
        prefixText: opts.prefixText,
        paths: opts.paths,
        RD: opts.RD,
        RR: opts.RR,
        validateRecipeV2: opts.validateRecipeV2,
        srcDir: opts.srcDir,
        root: opts.root,
        type: env.type,
        data: env.data || {},
      });
      outbox.markAcked(id);
      send(res, 200, { ok: true, id, rebuilt });
    } catch (e) {
      // v235 : contrôles SEO en échec → 400 (code définitif pour l'outbox du back : 400/404/413, pas de nouvel essai). Rien n'est publié.
      if (e.code === "slug") { console.error("[api-v1] webhook refusé (slug invalide)", id, env.type); send(res, 400, { ok: false, error: "slug invalide" }); return; }
    if (e.code === "seo") { console.error("[api-v1] webhook refusé (SEO)", id, env.type, JSON.stringify(e.details)); send(res, 400, { ok: false, error: "seo", details: e.details }); return; }
      send(res, 500, { ok: false, error: e.message || "reconstruction impossible" });
    }
  }

  // v255 : « En construction » de la rubrique Restaurants (section `restaurants` du back, contrat Lien en bio back v47).
  // Relais vers GET/POST /api/admin/recettes/sections (clé BACK_RECETTES_WRITE_KEY, Flycast), sans copie locale. Admin seulement.
  const SECTION_PATH = "/api/admin/recettes/sections";
  // v256 : photo de la carte (même modèle que les recos matériel : data URL → WebP ré-encodé, cadrage { x, y, zoom } à part) et effets
  // (ruban, halo, ship/mark/glow/tag de Lien en bio). Stockage dans le back (demande Lien en bio v48) ; ici, relais et contrôle de forme.
  const SECTION_MEDIA_PATH = "/api/admin/recettes/sections/media";
  const SECTION_MEDIA_REF = /^\/api\/v1\/recettes\/sections\/media\/[a-f0-9]{64}\.webp$/;
  const CARTE_FX = ["crop", "mention", "halo", "haloColor", "fx"];
  const CHAMPS_PUT = ["actif", "titre", "texte", "lien", "legende", "image", ...CARTE_FX, "version"];
  function versAdmin(d) {
    const s = ((d && d.sections) || {}).restaurants || {}, c = s.card || {};
    return { ok: true, actif: s.on === true, titre: c.title ?? null, texte: c.text ?? null, lien: c.href ?? null, legende: c.caption ?? null,
      image: c.image ?? null, crop: c.crop ?? null, mention: c.mention ?? null, halo: c.halo === true, haloColor: c.haloColor ?? null, fx: c.fx ?? null,
      depuis: s.since ?? null, version: d.sha, ...(d.change !== undefined ? { change: d.change } : {}) };
  }
  const objOuNull = (v) => v === null || (typeof v === "object" && !Array.isArray(v));
  async function handleConstruction(req, res) {
    if (!requireAdmin(req, res, ["admin-restaurants:ecrire"])) return;
    if (!writesToBack()) return send(res, 501, { ok: false, error: "rubriques : back commun seulement (RJ_WRITES=back)" });
    const client = createBackWriteClient();
    try {
      if (req.method === "GET" || req.method === "HEAD") {
        const out = await client.get(SECTION_PATH);
        return send(res, 200, versAdmin(out.data), { ETag: `"${out.data.sha}"` });
      }
      if (req.method !== "PUT") return send(res, 405, { ok: false, error: "méthode non autorisée" });
      const b = await readJson(req, 12 * 1024 * 1024); // photo en data URL : 8 Mo maximum avant encodage
      for (const k of Object.keys(b)) if (!CHAMPS_PUT.includes(k)) return send(res, 400, { ok: false, error: "champ inconnu : " + k });
      if (b.actif !== undefined && typeof b.actif !== "boolean") return send(res, 400, { ok: false, error: "actif : booléen attendu" });
      if (b.halo !== undefined && typeof b.halo !== "boolean") return send(res, 400, { ok: false, error: "halo : booléen attendu" });
      for (const k of ["titre", "texte", "lien", "legende", "image", "haloColor"]) if (b[k] !== undefined && b[k] !== null && typeof b[k] !== "string") return send(res, 400, { ok: false, error: k + " : texte attendu" });
      for (const k of ["crop", "mention", "fx"]) if (b[k] !== undefined && !objOuNull(b[k])) return send(res, 400, { ok: false, error: k + " : objet attendu (ou null)" });
      const img = b.image;
      if (typeof img === "string" && img && !img.startsWith("data:image/") && !SECTION_MEDIA_REF.test(img)) return send(res, 400, { ok: false, error: "image : data URL (JPG, PNG ou WebP), chemin déjà enregistré ou \"\" pour retirer" });
      if (typeof img === "string" && img.startsWith("data:image/") && !/^data:image\/(jpeg|png|webp);base64,/.test(img)) return send(res, 400, { ok: false, error: "image : JPG, PNG ou WebP attendu" });
      const version = String(b.version || req.headers["if-match"] || "").replace(/^W\//, "").replaceAll('"', "").trim();
      if (!version) return send(res, 409, { ok: false, error: "version manquante (sha de la dernière lecture)", currentSha: (await client.get(SECTION_PATH)).data.sha });
      // carte : on part de la carte enregistrée (tous ses champs gardés) et on ne change que les champs envoyés
      const cur = (await client.get(SECTION_PATH)).data;
      const carteAvant = (((cur.sections || {}).restaurants || {}).card) || null;
      const touche = ["titre", "texte", "lien", "legende", "image", ...CARTE_FX].some((k) => b[k] !== undefined);
      const body = { expectedSha: version, section: "restaurants" };
      if (b.actif !== undefined) body.on = b.actif;
      if (touche) {
        if (cur.sha !== version) return send(res, 409, { ok: false, error: "version périmée : relis le document", currentSha: cur.sha }, { ETag: `"${cur.sha}"` });
        const card = Object.fromEntries(Object.entries(carteAvant || {}).filter(([, v]) => v !== undefined));
        if (b.titre !== undefined) card.title = b.titre ?? "";
        if (b.texte !== undefined) card.text = b.texte || null;
        if (b.lien !== undefined) { card.href = b.lien || null; card.external = !!b.lien; }
        if (b.legende !== undefined) card.caption = b.legende || null;
        if (img !== undefined) {
          if (!img) card.image = null;
          else if (img.startsWith("data:image/")) {
            // upload d'abord (le back ré-encode en WebP et renvoie le chemin), puis la carte pointe dessus
            let up;
            try { up = await client.post(SECTION_MEDIA_PATH, { section: "restaurants", data: img }); }
            catch (e) { const st = e.status || e.backStatus; if (st === 404 || st === 405) return send(res, 501, { ok: false, error: "photo : l'upload n'est pas encore disponible sur le back commun (demande Lien en bio)" }); throw e; }
            // back v48 : { ok, sha, url, image, width, height, bytes } (url = image) ; le nom du fichier est le sha256 de la photo
            const ref = (up.data && (up.data.image || up.data.url)) || "";
            if (!SECTION_MEDIA_REF.test(ref) || (up.data.sha && !ref.includes(up.data.sha))) return send(res, 502, { ok: false, error: "photo : réponse du back invalide" });
            card.image = ref;
          } else card.image = img;
        }
        for (const k of CARTE_FX) if (b[k] !== undefined) card[k] = k === "halo" ? b[k] === true : b[k];
        if (typeof card.haloColor === "string" && card.haloColor.toLowerCase() === "#9fd36b") card.haloColor = null; // vert d'origine = null (contrat v48)
        if (!card.image && "crop" in card) card.crop = null; // le cadrage ne vaut que pour une photo ; champ absent tant que le back ne le connaît pas
        body.card = card;
      }
      const out = await client.post(SECTION_PATH, body, version);
      send(res, 200, versAdmin(out.data), { ETag: `"${out.data.sha}"` });
    } catch (e) { sendErr(res, e); }
  }

  // v256 : aperçu Admin de la photo enregistrée (lecture sans clé du back par Flycast, relayée ici derrière la clé admin)
  async function handleConstructionMedia(req, res, sha) {
    if (!requireAdmin(req, res, ["admin-restaurants:ecrire"])) return;
    if (req.method !== "GET") return send(res, 405, { ok: false, error: "méthode non autorisée" });
    try {
      const base = (process.env.BACK_RECETTES_URL || "http://preprod-back-jigme.flycast").replace(/\/+$/, "");
      const r = await fetch(base + "/api/v1/recettes/sections/media/" + sha + ".webp", { signal: AbortSignal.timeout(15000) });
      if (!r.ok) return send(res, r.status === 404 ? 404 : 502, { ok: false, error: "photo introuvable sur le back" });
      const body = Buffer.from(await r.arrayBuffer());
      if (createHash("sha256").update(body).digest("hex") !== sha) return send(res, 502, { ok: false, error: "photo corrompue" });
      res.writeHead(200, { "Content-Type": "image/webp", "Content-Length": body.length, "Cache-Control": "private, max-age=3600", "X-Content-Type-Options": "nosniff" });
      res.end(body);
    } catch (e) { send(res, 502, { ok: false, error: "back injoignable" }); }
  }

  // Au démarrage (image neuve = contenu réel) : si la rubrique est en construction, régénération comme au webhook.
  if (writesToBack() && hasBackReadKey() && process.env.RJ_SECTIONS_BOOT !== "off") {
    const t = setTimeout(async () => {
      try {
        const { fetchSections } = await import("../../scripts/source-back.mjs");
        const j = await fetchSections({ root: process.env.RJ_BACK_CACHE || "/tmp/rj-back-source" });
        if (j.sections && j.sections.restaurants && j.sections.restaurants.on === true) {
          const r = await applyPublicEvent({ htmlDir: opts.htmlDir, restoDir: opts.restoDir, live, yaml, prefixText: opts.prefixText, paths: opts.paths, RD: opts.RD, RR: opts.RR,
            validateRecipeV2: opts.validateRecipeV2, srcDir: opts.srcDir, root: opts.root, type: "cuisine.sections.modifie", data: { section: "restaurants" } });
          console.log("[api-v1] démarrage : rubrique Restaurants en construction, pages régénérées", (r.files || []).length);
        }
      } catch (e) { console.error("[api-v1] démarrage : lecture des rubriques impossible", e.message); }
    }, 20000);
    if (typeof t.unref === "function") t.unref();
  }

  if (outbox.enabled) {
    const timer = setInterval(() => { pumpSoon(); }, 20000);
    if (typeof timer.unref === "function") timer.unref();
  }

  return { handle, rebuild: () => index.rebuild(), count: () => index.count(), index, health, writer, domainWriters, domainIndexes, outbox, pump: pumpSoon, close: () => index.close() };

}
