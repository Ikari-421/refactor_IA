// Index SQLite du domaine Recettes (contrat API v1 §9).
// Reconstructible depuis les Markdown. La vérité reste le fichier MD.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { DatabaseSync } from "node:sqlite";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS recettes (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  lang TEXT,
  description TEXT,
  category TEXT,
  cuisine TEXT,
  statut TEXT NOT NULL,
  hidden INTEGER NOT NULL DEFAULT 0,
  sha TEXT NOT NULL,
  path TEXT NOT NULL,
  image_url TEXT,
  updated_at TEXT,
  published_at TEXT,
  deleted INTEGER NOT NULL DEFAULT 0,
  auteur TEXT
);
CREATE TABLE IF NOT EXISTS recette_tags (
  slug TEXT NOT NULL,
  tag TEXT NOT NULL,
  PRIMARY KEY (slug, tag)
);
CREATE TABLE IF NOT EXISTS recette_refs_materiel (
  slug TEXT NOT NULL,
  materiel_id TEXT NOT NULL,
  PRIMARY KEY (slug, materiel_id)
);
CREATE TABLE IF NOT EXISTS recette_refs_lexique (
  slug TEXT NOT NULL,
  lexique_id TEXT NOT NULL,
  PRIMARY KEY (slug, lexique_id)
);
CREATE TABLE IF NOT EXISTS historique (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL,
  sha TEXT NOT NULL,
  sha_precedent TEXT,
  auteur TEXT,
  at TEXT,
  action TEXT,
  path TEXT
);
CREATE TABLE IF NOT EXISTS conflits (
  slug TEXT PRIMARY KEY,
  sha_admin TEXT,
  sha_autre TEXT,
  path_autre TEXT,
  auteur_autre TEXT,
  date_autre TEXT
);
CREATE TABLE IF NOT EXISTS propositions (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL,
  source TEXT,
  statut TEXT NOT NULL,
  sha_base TEXT,
  sha_proposition TEXT,
  path TEXT,
  resume TEXT,
  created_at TEXT,
  resolved_at TEXT,
  resolved_by TEXT
);
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
CREATE TABLE IF NOT EXISTS sync_state (
  path TEXT PRIMARY KEY,
  sha TEXT,
  last_sync_at TEXT
);
`;

const INDEX_TABLES = ["recette_tags", "recette_refs_materiel", "recette_refs_lexique", "recettes"];
const STATUTS = new Set(["brouillon", "publiee"]);
const CATEGORIES = new Set(["sucré", "salé", "boissons"]);
const LEXIQUE_RE = /\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g;
const sha256 = (b) => createHash("sha256").update(b).digest("hex");

function fold(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function loadSurcharge(file) {
  if (!file || !fs.existsSync(file)) return {};
  const raw = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = {};
  for (const [k, v] of Object.entries(raw)) {
    if (k.startsWith("_")) continue;
    if (v) out[k] = String(v);
  }
  return out;
}

export function effectiveCategory(slug, frontmatterCategory, surcharge = {}) {
  const fm = frontmatterCategory != null && String(frontmatterCategory).trim() !== "" ? String(frontmatterCategory) : "";
  if (fm === "boissons") return "boissons";
  if (surcharge[slug]) return String(surcharge[slug]);
  return fm || "";
}

function walkStrings(value, visit) {
  if (typeof value === "string") visit(value);
  else if (Array.isArray(value)) value.forEach((x) => walkStrings(x, visit));
  else if (value && typeof value === "object") Object.values(value).forEach((x) => walkStrings(x, visit));
}

export function lexiqueRefs(data) {
  const ids = new Set();
  const take = (s) => {
    LEXIQUE_RE.lastIndex = 0;
    for (const m of String(s).matchAll(LEXIQUE_RE)) ids.add(m[1]);
  };
  walkStrings(data?.steps_niveaux, take);
  walkStrings(data?.steps, take);
  if (data?.lexique_local && typeof data.lexique_local === "object") {
    for (const id of Object.keys(data.lexique_local)) {
      if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) ids.add(id);
    }
    for (const variant of Object.values(data.lexique_local)) {
      if (variant && typeof variant === "object") {
        for (const id of Object.keys(variant)) {
          if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) ids.add(id);
        }
      }
    }
  }
  return [...ids].sort();
}

export function materielRefs(data) {
  const ids = new Set();
  const take = (arr) => {
    if (!Array.isArray(arr)) return;
    for (const e of arr) {
      if (e && typeof e === "object" && e.ref) ids.add(String(e.ref));
    }
  };
  take(data?.equipment);
  if (data?.variants && typeof data.variants === "object") {
    for (const v of Object.values(data.variants)) take(v?.equipment);
  }
  return [...ids].sort();
}

function listMd(dir) {
  if (!dir || !fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !f.startsWith("_") && !f.endsWith(".bak"));
}

function parseFile(file, rel, deleted, yamlLoad, surcharge) {
  const raw = fs.readFileSync(file);
  const txt = raw.toString("utf8");
  const m = txt.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error("frontmatter manquant");
  const data = yamlLoad(m[1]);
  if (!data || typeof data !== "object") throw new Error("frontmatter invalide");
  const slug = String(data.slug || path.basename(file, ".md"));
  const statut = data.statut && STATUTS.has(String(data.statut)) ? String(data.statut) : "publiee";
  const category = effectiveCategory(slug, data.category, surcharge);
  const st = fs.statSync(file);
  const updated = new Date(st.mtimeMs).toISOString();
  return {
    row: {
      slug,
      title: String(data.title || slug),
      lang: data.lang != null ? String(data.lang) : null,
      description: data.description != null ? String(data.description) : null,
      category,
      cuisine: data.cuisine != null ? String(data.cuisine) : null,
      statut,
      hidden: data.hidden === true ? 1 : 0,
      sha: sha256(raw),
      path: rel,
      image_url: data.image && data.image.url != null ? String(data.image.url) : null,
      updated_at: updated,
      published_at: statut === "publiee" ? updated : null,
      deleted: deleted ? 1 : 0,
      auteur: null,
    },
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    materiel: materielRefs(data),
    lexique: lexiqueRefs(data),
    data,
  };
}

export function openIndex(opts) {
  const mdDir = opts.mdDir;
  const yamlLoad = opts.yamlLoad;
  if (typeof yamlLoad !== "function") throw new Error("yamlLoad requis");
  const surcharge = { ...loadSurcharge(opts.surchargePath), ...(opts.surcharge || {}) };
  const dbPath = opts.dbPath || ":memory:";
  if (dbPath !== ":memory:") fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON");
  db.exec(SCHEMA);

  function rebuild() {
    const files = [];
    for (const f of listMd(mdDir)) files.push({ file: path.join(mdDir, f), rel: f, deleted: false });
    for (const f of listMd(path.join(mdDir, ".trash"))) files.push({ file: path.join(mdDir, ".trash", f), rel: ".trash/" + f, deleted: true });
    const parsed = [];
    for (const item of files) {
      try {
        parsed.push(parseFile(item.file, item.rel, item.deleted, yamlLoad, surcharge));
      } catch (e) {
        console.error("[index-recettes] fiche ignorée", item.rel, e.message);
      }
    }
    db.exec("BEGIN");
    try {
      for (const t of INDEX_TABLES) db.exec("DELETE FROM " + t);
      const ins = db.prepare(
        `INSERT INTO recettes (slug, title, lang, description, category, cuisine, statut, hidden, sha, path, image_url, updated_at, published_at, deleted, auteur)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      );
      const insTag = db.prepare("INSERT OR IGNORE INTO recette_tags (slug, tag) VALUES (?, ?)");
      const insMat = db.prepare("INSERT OR IGNORE INTO recette_refs_materiel (slug, materiel_id) VALUES (?, ?)");
      const insLex = db.prepare("INSERT OR IGNORE INTO recette_refs_lexique (slug, lexique_id) VALUES (?, ?)");
      for (const p of parsed) {
        const r = p.row;
        ins.run(r.slug, r.title, r.lang, r.description, r.category, r.cuisine, r.statut, r.hidden, r.sha, r.path, r.image_url, r.updated_at, r.published_at, r.deleted, r.auteur);
        for (const tag of p.tags) insTag.run(r.slug, tag);
        for (const id of p.materiel) insMat.run(r.slug, id);
        for (const id of p.lexique) insLex.run(r.slug, id);
      }
      db.exec("COMMIT");
    } catch (e) {
      try { db.exec("ROLLBACK"); } catch { /* ignore */ }
      throw e;
    }
    return parsed.length;
  }

  function count(deleted = 0) {
    return db.prepare("SELECT COUNT(*) AS n FROM recettes WHERE deleted = ?").get(deleted).n;
  }

  function get(slug) {
    return db.prepare("SELECT * FROM recettes WHERE slug = ?").get(slug) || null;
  }

  function tagsOf(slug) {
    return db.prepare("SELECT tag FROM recette_tags WHERE slug = ? ORDER BY tag").all(slug).map((r) => r.tag);
  }

  function refsOf(slug) {
    return {
      materiel: db.prepare("SELECT materiel_id AS id FROM recette_refs_materiel WHERE slug = ? ORDER BY materiel_id").all(slug).map((r) => r.id),
      lexique: db.prepare("SELECT lexique_id AS id FROM recette_refs_lexique WHERE slug = ? ORDER BY lexique_id").all(slug).map((r) => r.id),
    };
  }

  function list({ q = "", category, statut, page = 1, limit = 50, drafts = false } = {}) {
    const where = ["deleted = 0"];
    const params = [];
    if (category) {
      if (!CATEGORIES.has(category)) throw Object.assign(new Error("category invalide"), { status: 400 });
      where.push("category = ?");
      params.push(category);
    }
    if (drafts) {
      where.push("(statut = 'brouillon' OR hidden = 1)");
    } else if (statut) {
      if (!STATUTS.has(statut)) throw Object.assign(new Error("statut invalide"), { status: 400 });
      where.push("statut = ?");
      params.push(statut);
    }
    const needle = fold(String(q || "").slice(0, 80));
    let rows = db.prepare(
      `SELECT slug, title, lang, description, category, cuisine, statut, hidden, sha, path, image_url, updated_at, published_at, deleted, auteur
       FROM recettes WHERE ${where.join(" AND ")}`
    ).all(...params);
    if (needle) {
      const tagMap = new Map();
      for (const t of db.prepare("SELECT slug, tag FROM recette_tags").all()) {
        const arr = tagMap.get(t.slug) || [];
        arr.push(t.tag);
        tagMap.set(t.slug, arr);
      }
      rows = rows.filter((r) => fold(`${r.title} ${r.slug} ${(tagMap.get(r.slug) || []).join(" ")} ${r.description || ""}`).includes(needle));
    }
    rows.sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
    const total = rows.length;
    const p = page == null || page === "" ? 1 : Number(page);
    const all = limit === "all";
    const l = all ? total || 1 : (limit == null || limit === "" ? 50 : Number(limit));
    if (!Number.isInteger(p) || p < 1) throw Object.assign(new Error("page invalide"), { status: 400 });
    if (!all && (!Number.isInteger(l) || l < 1 || l > 200)) throw Object.assign(new Error("limit invalide"), { status: 400 });
    const slice = all ? rows : rows.slice((p - 1) * l, (p - 1) * l + l);
    const slugs = slice.map((r) => r.slug);
    const tagMap = new Map();
    if (slugs.length) {
      const ph = slugs.map(() => "?").join(",");
      for (const t of db.prepare(`SELECT slug, tag FROM recette_tags WHERE slug IN (${ph})`).all(...slugs)) {
        const arr = tagMap.get(t.slug) || [];
        arr.push(t.tag);
        tagMap.set(t.slug, arr);
      }
    }
    const recipes = slice.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      tags: tagMap.get(r.slug) || [],
      hidden: r.hidden === 1,
      statut: r.statut,
    }));
    const trash = db.prepare("SELECT slug, title, sha FROM recettes WHERE deleted = 1 ORDER BY slug").all()
      .map((r) => ({ slug: r.slug, title: r.title, sha: r.sha, deleted: true }));
    return { recipes, total, page: all ? 1 : p, limit: all ? "all" : l, trash };
  }

  function clearSlug(slug) {
    db.prepare("DELETE FROM recette_tags WHERE slug = ?").run(slug);
    db.prepare("DELETE FROM recette_refs_materiel WHERE slug = ?").run(slug);
    db.prepare("DELETE FROM recette_refs_lexique WHERE slug = ?").run(slug);
    db.prepare("DELETE FROM recettes WHERE slug = ?").run(slug);
  }

  function insertParsed(p) {
    const r = p.row;
    db.prepare(
      `INSERT INTO recettes (slug, title, lang, description, category, cuisine, statut, hidden, sha, path, image_url, updated_at, published_at, deleted, auteur)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(r.slug, r.title, r.lang, r.description, r.category, r.cuisine, r.statut, r.hidden, r.sha, r.path, r.image_url, r.updated_at, r.published_at, r.deleted, r.auteur);
    const insTag = db.prepare("INSERT OR IGNORE INTO recette_tags (slug, tag) VALUES (?, ?)");
    const insMat = db.prepare("INSERT OR IGNORE INTO recette_refs_materiel (slug, materiel_id) VALUES (?, ?)");
    const insLex = db.prepare("INSERT OR IGNORE INTO recette_refs_lexique (slug, lexique_id) VALUES (?, ?)");
    for (const tag of p.tags) insTag.run(r.slug, tag);
    for (const id of p.materiel) insMat.run(r.slug, id);
    for (const id of p.lexique) insLex.run(r.slug, id);
  }

  function upsertSlug(slug) {
    const active = path.join(mdDir, slug + ".md");
    const trashed = path.join(mdDir, ".trash", slug + ".md");
    clearSlug(slug);
    if (fs.existsSync(active)) insertParsed(parseFile(active, slug + ".md", false, yamlLoad, surcharge));
    else if (fs.existsSync(trashed)) insertParsed(parseFile(trashed, ".trash/" + slug + ".md", true, yamlLoad, surcharge));
  }

  function appendHistorique({ slug, sha, sha_precedent, auteur, at, action, path: histPath }) {
    db.prepare(
      "INSERT INTO historique (slug, sha, sha_precedent, auteur, at, action, path) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).run(slug, sha || "", sha_precedent || null, auteur || null, at || new Date().toISOString(), action || "", histPath || null);
  }

  function close() {
    db.close();
  }

  return { db, dbPath, mdDir, rebuild, count, get, tagsOf, refsOf, list, upsertSlug, appendHistorique, close, surcharge };
}

export { CATEGORIES, STATUTS };
