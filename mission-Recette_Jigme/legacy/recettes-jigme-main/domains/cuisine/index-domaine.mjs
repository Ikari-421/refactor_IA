// Index SQLite générique (matériel, lexique, restaurants). Reconstructible depuis les MD.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { DatabaseSync } from "node:sqlite";

const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

function parseFm(raw, load) {
  const m = String(raw).match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!m) throw new Error("frontmatter absent");
  return { data: load(m[1]) || {}, body: m[2] || "" };
}

export function openDomainIndex({ dbPath, mdDir, yamlLoad, idKey = "id", titleKey = "title" }) {
  if (!dbPath) throw new Error("dbPath requis");
  if (!mdDir) throw new Error("mdDir requis");
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = new DatabaseSync(dbPath);
  db.exec(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY,
      title TEXT,
      statut TEXT NOT NULL,
      hidden INTEGER NOT NULL DEFAULT 0,
      sha TEXT NOT NULL,
      path TEXT NOT NULL,
      deleted INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT
    );
    CREATE TABLE IF NOT EXISTS historique (
      id INTEGER PRIMARY KEY,
      item_id TEXT NOT NULL,
      sha TEXT NOT NULL,
      sha_precedent TEXT,
      auteur TEXT,
      at TEXT,
      action TEXT,
      path TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_items_deleted ON items(deleted);
    CREATE INDEX IF NOT EXISTS idx_hist_item ON historique(item_id);
  `);

  function rowOf(file, { deleted = false } = {}) {
    const raw = fs.readFileSync(file);
    const { data } = parseFm(raw, yamlLoad);
    const id = String(data[idKey] || path.basename(file, ".md"));
    const title = String(data[titleKey] || id);
    const statut = data.statut === "brouillon" ? "brouillon" : "publiee";
    const hidden = data.hidden === true ? 1 : 0;
    const rel = path.relative(path.dirname(mdDir), file).replaceAll("\\", "/");
    return { id, title, statut, hidden, sha: sha256(raw), path: rel, deleted: deleted ? 1 : 0, updated_at: fs.statSync(file).mtime.toISOString() };
  }

  function upsertRow(row) {
    db.prepare(`
      INSERT INTO items(id, title, statut, hidden, sha, path, deleted, updated_at)
      VALUES (@id, @title, @statut, @hidden, @sha, @path, @deleted, @updated_at)
      ON CONFLICT(id) DO UPDATE SET
        title=excluded.title, statut=excluded.statut, hidden=excluded.hidden,
        sha=excluded.sha, path=excluded.path, deleted=excluded.deleted, updated_at=excluded.updated_at
    `).run(row);
  }

  function upsertId(id) {
    const file = path.join(mdDir, id + ".md");
    const trash = path.join(mdDir, ".trash", id + ".md");
    if (fs.existsSync(file)) upsertRow(rowOf(file));
    else if (fs.existsSync(trash)) upsertRow(rowOf(trash, { deleted: true }));
    else db.prepare("DELETE FROM items WHERE id = ?").run(id);
  }

  function appendHistorique({ id, sha, shaPrecedent = null, auteur = "", action = "", filePath = "" }) {
    db.prepare(`
      INSERT INTO historique(item_id, sha, sha_precedent, auteur, at, action, path)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, sha, shaPrecedent, auteur, new Date().toISOString(), action, filePath);
  }

  function rebuild() {
    db.exec("DELETE FROM items");
    const ins = [];
    if (fs.existsSync(mdDir)) {
      for (const f of fs.readdirSync(mdDir).filter((x) => x.endsWith(".md") && !x.startsWith(".") && !x.startsWith("_"))) {
        try { upsertRow(rowOf(path.join(mdDir, f))); ins.push(f); }
        catch (e) { console.error("[index-domaine] skip", f, e.message); }
      }
    }
    const trashDir = path.join(mdDir, ".trash");
    if (fs.existsSync(trashDir)) {
      for (const f of fs.readdirSync(trashDir).filter((x) => x.endsWith(".md") && !x.startsWith("."))) {
        try { upsertRow(rowOf(path.join(trashDir, f), { deleted: true })); }
        catch (e) { console.error("[index-domaine] trash skip", f, e.message); }
      }
    }
    return ins.length;
  }

  function list({ q = "", statut = "", hidden = "", deleted = false, page = 1, limit = 50, drafts = false } = {}) {
    const where = ["deleted = ?"];
    const params = [deleted ? 1 : 0];
    if (drafts) { where.push("(statut = 'brouillon' OR hidden = 1)"); }
    else if (statut) { where.push("statut = ?"); params.push(statut); }
    if (!drafts) {
      if (hidden === true || hidden === "true" || hidden === "1") { where.push("hidden = 1"); }
      else if (hidden === false || hidden === "false" || hidden === "0") { where.push("hidden = 0"); }
    }
    if (q) { where.push("(id LIKE ? OR title LIKE ?)"); params.push("%" + q + "%", "%" + q + "%"); }
    const whereSql = where.join(" AND ");
    const total = db.prepare(`SELECT COUNT(*) AS n FROM items WHERE ${whereSql}`).get(...params).n;
    const all = limit === "all";
    const sql = `SELECT id, title, statut, hidden, sha, path, deleted, updated_at FROM items WHERE ${whereSql} ORDER BY title COLLATE NOCASE, id`;
    const rows = all
      ? db.prepare(sql).all(...params)
      : db.prepare(sql + " LIMIT ? OFFSET ?").all(...params, limit, (page - 1) * limit);
    const items = rows.map((r) => ({
      id: r.id,
      title: r.title,
      statut: r.statut,
      hidden: r.hidden === 1,
      sha: r.sha,
      path: r.path,
      deleted: r.deleted === 1,
      updated_at: r.updated_at,
    }));
    return { items, total, page: all ? 1 : page, limit: all ? "all" : limit };
  }

  function get(id) {
    return db.prepare("SELECT id, title, statut, hidden, sha, path, deleted, updated_at FROM items WHERE id = ?").get(id) || null;
  }

  return { db, rebuild, upsertId, appendHistorique, list, get, mdDir, idKey, titleKey };
}

export function fileSha(file) {
  return sha256(fs.readFileSync(file));
}
