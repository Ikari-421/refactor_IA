// Écriture v1 matériel / lexique / restaurants. Volume seulement. Jamais de NAS.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileSha } from "./index-domaine.mjs";

const CONFLICT = "conflit : la fiche a changé depuis la lecture (recharger)";
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

function fail(msg, status = 400, extra = {}) {
  throw Object.assign(new Error(msg), { status, ...extra });
}

export function parseExpectedSha(body, req) {
  const fromBody = body && typeof body.expectedSha === "string" ? body.expectedSha.trim() : "";
  const hdr = String(req?.headers?.["if-match"] || req?.headers?.["If-Match"] || "").replace(/^W\//, "").replace(/"/g, "").trim();
  const sha = fromBody || hdr;
  if (!sha || !/^[a-f0-9]{64}$/.test(sha)) {
    fail("empreinte de lecture requise (expectedSha ou If-Match)", 409, { currentSha: null });
  }
  return sha;
}

function appendAudit(auditFile, rec) {
  if (!auditFile) return;
  fs.mkdirSync(path.dirname(auditFile), { recursive: true });
  fs.appendFileSync(auditFile, JSON.stringify(rec) + "\n");
}

function dumpMd(yaml, data, body) {
  const bodyText = body == null ? "" : String(body);
  return "---\n" + yaml.dump(data, { lineWidth: 100, noRefs: true }) + "---\n" + (bodyText.startsWith("\n") ? bodyText.slice(1) : bodyText);
}

function parseMd(yaml, raw) {
  const m = String(raw).match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!m) fail("frontmatter absent", 500);
  return { data: yaml.load(m[1]) || {}, body: m[2] || "" };
}

function atomicWrite(file, next, previousRaw) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (previousRaw != null && !fs.existsSync(file + ".bak")) {
    try { fs.writeFileSync(file + ".bak", previousRaw); } catch { /* marqueur seed */ }
  } else if (!fs.existsSync(file) && !fs.existsSync(file + ".bak")) {
    fs.writeFileSync(file + ".bak", "");
  }
  const tmp = file + ".tmp";
  fs.writeFileSync(tmp, next);
  fs.renameSync(tmp, file);
}

function requireMatch(file, expectedSha) {
  if (!fs.existsSync(file)) fail("introuvable", 404);
  const currentSha = fileSha(file);
  if (currentSha !== expectedSha) fail(CONFLICT, 409, { currentSha });
  return currentSha;
}

export function createDomainWriter({ kind, live, yaml, index, auditFile, onChange, lexique, restos, validateLexique, parseDataUrlImage }) {
  const subdir = kind === "restaurants" ? "restaurants" : kind;
  const dir = path.join(live, subdir);
  const trashDir = path.join(dir, ".trash");
  const idKey = kind === "restaurants" ? "slug" : "id";
  const scopeName = `admin-${kind === "restaurants" ? "restaurants" : kind}:ecrire`;
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(trashDir, { recursive: true });

  function fileOf(id) { return path.join(dir, id + ".md"); }
  function trashOf(id) { return path.join(trashDir, id + ".md"); }

  function checkId(id) {
    if (!ID_RE.test(id) || id.length > 80) fail("identifiant invalide [a-z0-9-]", 400);
    return id;
  }

  function flagsOf(id) {
    try {
      const item = readLive(id);
      const hidden = item.hidden === true;
      const statut = item.statut === "brouillon" ? "brouillon" : "publiee";
      const test = item.test === true;
      return { statut, hidden, test, wasPublic: statut === "publiee" && !hidden && !test };
    } catch {
      return { statut: null, hidden: true, test: false, wasPublic: false };
    }
  }

  function record(action, id, shaAncien, shaNouveau, portee, extra = {}) {
    appendAudit(auditFile, {
      at: new Date().toISOString(),
      portee,
      action,
      slug: id,
      sha_ancien: shaAncien || null,
      sha_nouveau: shaNouveau || null,
    });
    try { index.appendHistorique({ id, sha: shaNouveau || shaAncien || "", shaPrecedent: shaAncien, action, filePath: path.relative(live, fileOf(id)) }); } catch { /* index optionnel */ }
    try { index.upsertId(id); } catch { /* */ }
    if (onChange) {
      try { onChange({ kind, id, action, sha: shaNouveau, ...extra }); } catch (e) { console.error("[write-domaine] onChange", kind, e.message); }
    }
  }

  function readLive(id) {
    const file = fileOf(id);
    if (!fs.existsSync(file)) fail(kind === "lexique" ? "notice introuvable" : kind === "materiel" ? "fiche matériel introuvable" : "restaurant introuvable", 404);
    if (kind === "lexique" && lexique) return lexique.read(id);
    if (kind === "restaurants" && restos) {
      const { data, body, sha } = restos.read(id);
      return { ...data, sha, bodyMarkdown: body };
    }
    const raw = fs.readFileSync(file, "utf8");
    const { data, body } = parseMd(yaml, raw);
    return {
      ...data,
      hidden: data.hidden === true,
      statut: data.statut === "brouillon" ? "brouillon" : "publiee",
      sha: sha256(raw),
      bodyMarkdown: String(body || "").trim(),
    };
  }

  function createMateriel(body) {
    const id = checkId(String(body.id || "").trim().toLowerCase());
    if (fs.existsSync(fileOf(id))) fail("fiche déjà existante", 409);
    if (fs.existsSync(trashOf(id))) fail("Cette id est dans la corbeille : restaure-la ou choisis un autre id", 409);
    const label = String(body.label || "").trim();
    if (!label || label.length > 120) fail("label requis (1 à 120 car.)", 400);
    const data = {
      schema: "materiel-jigme/v1",
      id,
      label,
      aliases: Array.isArray(body.aliases) ? body.aliases.map(String) : [label],
      recos: Array.isArray(body.recos) ? body.recos : [],
      hidden: true,
      statut: "brouillon",
    };
    const raw = dumpMd(yaml, data, `\n# ${label}\n\nFiche ajoutée depuis l'API v1 (préprod).\n`);
    atomicWrite(fileOf(id), raw, null);
    const item = readLive(id);
    record("create", id, null, item.sha, scopeName, { ...flagsOf(id), wasPublic: false });
    return { ok: true, materiel: item, sha: item.sha };
  }

  function createLexique(body) {
    const id = checkId(String(body.id || "").trim().toLowerCase());
    if (fs.existsSync(fileOf(id))) fail("Notice déjà existante", 409);
    if (fs.existsSync(trashOf(id))) fail("Cette id est dans la corbeille : restaure-la ou choisis un autre id", 409);
    const data = {
      schema: "lexique-jigme/v1",
      id,
      terme: String(body.terme || "").trim(),
      sens: String(body.sens || "").trim(),
      categorie: String(body.categorie || "geste").trim(),
      formes: Array.isArray(body.formes) ? body.formes : [String(body.terme || id)],
      explication: String(body.explication || "").trim(),
      references: Array.isArray(body.references) ? body.references.map(String) : [],
      hidden: true,
      statut: "brouillon",
    };
    if (validateLexique) validateLexique(id, data, { allowHidden: true });
    else if (lexique) lexique.validate(id, data, { allowHidden: true });
    const raw = dumpMd(yaml, data, `\n# ${data.terme}\n\nNotice ajoutée depuis l'API v1 (préprod).\n`);
    if (lexique) {
      fs.mkdirSync(lexique.baseDir, { recursive: true });
      fs.writeFileSync(path.join(lexique.baseDir, id + ".md"), raw, { flag: "wx" });
    }
    atomicWrite(fileOf(id), raw, null);
    const item = readLive(id);
    record("create", id, null, item.sha, scopeName, { ...flagsOf(id), wasPublic: false });
    return { ok: true, notice: item, sha: item.sha };
  }

  async function createRestaurant(body) {
    if (!restos) fail("store restaurants absent", 500);
    const slug = checkId(String(body.slug || "").trim().toLowerCase());
    if (fs.existsSync(trashOf(slug))) fail("Ce slug est dans la corbeille : restaure-le ou choisis-en un autre", 409);
    const created = await restos.create({
      ...body,
      slug,
      hidden: true,
      test: true,
      statut: "brouillon",
      test_note: body.test_note || "Fiche de test API v1 : jamais visible du public.",
    });
    // Garantit statut si le store l'a déjà écrit via cleanRestaurant.
    const file = fileOf(slug);
    const raw = fs.readFileSync(file, "utf8");
    const parsed = parseMd(yaml, raw);
    if (parsed.data.statut !== "brouillon" || parsed.data.hidden !== true) {
      parsed.data.statut = "brouillon";
      parsed.data.hidden = true;
      parsed.data.test = true;
      atomicWrite(file, dumpMd(yaml, parsed.data, parsed.body), raw);
    }
    const item = readLive(slug);
    record("create", slug, null, item.sha, scopeName, { ...flagsOf(slug), wasPublic: false });
    return { ok: true, restaurant: item, sha: item.sha, patch: created.patch };
  }

  function updateMateriel(id, body, expectedSha) {
    const file = fileOf(id);
    const prev = requireMatch(file, expectedSha);
    const raw = fs.readFileSync(file, "utf8");
    const { data, body: mdBody } = parseMd(yaml, raw);
    if (Object.hasOwn(body, "label")) {
      const label = String(body.label || "").trim();
      if (!label || label.length > 120) fail("label requis (1 à 120 car.)", 400);
      data.label = label;
    }
    if (Object.hasOwn(body, "aliases") && Array.isArray(body.aliases)) data.aliases = body.aliases.map(String);
    if (Object.hasOwn(body, "recos") && Array.isArray(body.recos)) data.recos = body.recos;
    if (Object.hasOwn(body, "hidden")) data.hidden = !!body.hidden;
    if (body.statut === "brouillon" || body.statut === "publiee") data.statut = body.statut;
    data.schema = "materiel-jigme/v1";
    data.id = id;
    atomicWrite(file, dumpMd(yaml, data, mdBody), raw);
    const item = readLive(id);
    return { prev, item };
  }

  function updateLexique(id, body, expectedSha) {
    const file = fileOf(id);
    const prev = requireMatch(file, expectedSha);
    const raw = fs.readFileSync(file, "utf8");
    const { data, body: mdBody } = parseMd(yaml, raw);
    for (const key of ["terme", "sens", "categorie", "formes", "explication", "references"]) {
      if (Object.hasOwn(body, key)) data[key] = body[key];
    }
    if (Object.hasOwn(body, "hidden")) data.hidden = !!body.hidden;
    if (body.statut === "brouillon" || body.statut === "publiee") data.statut = body.statut;
    data.schema = "lexique-jigme/v1";
    data.id = id;
    if (validateLexique) validateLexique(id, data, { allowHidden: true });
    else if (lexique) lexique.validate(id, data, { allowHidden: true });
    atomicWrite(file, dumpMd(yaml, data, mdBody), raw);
    const item = readLive(id);
    return { prev, item };
  }

  async function updateRestaurant(id, body, expectedSha) {
    if (!restos) fail("store restaurants absent", 500);
    requireMatch(fileOf(id), expectedSha);
    const prev = expectedSha;
    const saved = await restos.save(id, { ...body, expectedSha, hidden: Object.hasOwn(body, "hidden") ? !!body.hidden : undefined });
    const item = readLive(id);
    return { prev, item, patch: saved.patch };
  }

  function softDelete(id, expectedSha) {
    const file = fileOf(id);
    const prev = requireMatch(file, expectedSha);
    const dest = trashOf(id);
    if (fs.existsSync(dest)) fail("une version est déjà en corbeille pour cet identifiant", 409);
    if (!fs.existsSync(file + ".bak")) fs.copyFileSync(file, file + ".bak");
    fs.renameSync(file, dest);
    return prev;
  }

  function restore(id) {
    checkId(id);
    const src = trashOf(id);
    if (!fs.existsSync(src)) fail("absent de la corbeille", 404);
    if (fs.existsSync(fileOf(id))) fail("un élément actif porte déjà cet identifiant", 409);
    fs.renameSync(src, fileOf(id));
  }

  async function dispatch(action, id, body, req, portee) {
    let act = String(action || "");
    if (act === "save") act = "update";
    if (act === "create") {
      if (kind === "materiel") return createMateriel(body);
      if (kind === "lexique") return createLexique(body);
      return createRestaurant(body);
    }
    const itemId = checkId(id);
    const before = flagsOf(itemId);
    if (act === "restore") {
      if (kind === "restaurants" && restos) await restos.restore(itemId);
      else restore(itemId);
      const item = readLive(itemId);
      record("restore", itemId, null, item.sha, portee, { ...flagsOf(itemId), wasPublic: false });
      return { ok: true, [kind === "lexique" ? "notice" : kind === "materiel" ? "materiel" : "restaurant"]: item, sha: item.sha };
    }
    const BLOCK_ACTIONS = new Set(["block-add", "block-update", "block-delete", "block-move", "blocks-order", "blocks"]);
    const libraryPhoto = act === "photo" && String(body.target || "library") === "library";
    let expectedSha;
    if (!libraryPhoto) {
      try { expectedSha = parseExpectedSha(body, req); }
      catch (e) {
        if (e.status === 409 && fs.existsSync(fileOf(itemId))) e.currentSha = fileSha(fileOf(itemId));
        throw e;
      }
    }
    if (act === "import-markdown") {
      if (kind !== "lexique" || !lexique) fail("import-markdown réservé au lexique", 400);
      if (!body.markdown) fail("markdown manquant", 400);
      let notice;
      try { notice = lexique.importMarkdown(itemId, body.markdown, { expectedSha }); }
      catch (e) {
        if (e.status === 409 && fs.existsSync(fileOf(itemId))) e.currentSha = fileSha(fileOf(itemId));
        throw e;
      }
      record("import-markdown", itemId, expectedSha, notice.sha, portee, { ...flagsOf(itemId), wasPublic: before.wasPublic });
      return { ok: true, notice, sha: notice.sha };
    }
    if (BLOCK_ACTIONS.has(act)) {
      if (kind !== "restaurants" || !restos) fail("actions de blocs réservées aux restaurants", 400);
      const saved = await restos.blocks(itemId, { ...body, action: act, expectedSha });
      const item = readLive(itemId);
      record(act, itemId, expectedSha, item.sha, portee, { ...flagsOf(itemId), wasPublic: before.wasPublic });
      return { ok: true, restaurant: item, sha: item.sha, patch: saved.patch, note: saved.note };
    }
    if (act === "photo") {
      if (kind !== "restaurants" || !restos) fail("photo de restaurant : store absent", 500);
      if (!parseDataUrlImage) fail("parseDataUrlImage manquant", 500);
      const saved = await restos.photo(itemId, { ...body, expectedSha }, parseDataUrlImage);
      if (libraryPhoto) {
        record("photo", itemId, before.wasPublic ? expectedSha : null, saved.sha || null, portee, { ...before, wasPublic: false });
        return { ok: true, slug: itemId, image: saved.image, note: saved.note };
      }
      const item = readLive(itemId);
      record("photo", itemId, expectedSha, item.sha, portee, { ...flagsOf(itemId), wasPublic: before.wasPublic });
      return { ok: true, restaurant: item, sha: item.sha, image: saved.image, patch: saved.patch, note: saved.note };
    }
    if (act === "update") {
      let out;
      if (kind === "materiel") out = updateMateriel(itemId, body, expectedSha);
      else if (kind === "lexique") out = updateLexique(itemId, body, expectedSha);
      else out = await updateRestaurant(itemId, body, expectedSha);
      record("update", itemId, out.prev, out.item.sha, portee, { ...flagsOf(itemId), wasPublic: before.wasPublic });
      return { ok: true, [kind === "lexique" ? "notice" : kind === "materiel" ? "materiel" : "restaurant"]: out.item, sha: out.item.sha, patch: out.patch };
    }
    if (act === "hide" || act === "show" || act === "visibility") {
      const hidden = act === "visibility" ? !!body.hidden : act === "hide";
      let out;
      if (kind === "materiel") out = updateMateriel(itemId, { hidden }, expectedSha);
      else if (kind === "lexique") out = updateLexique(itemId, { hidden }, expectedSha);
      else out = await updateRestaurant(itemId, { hidden }, expectedSha);
      record(hidden ? "hide" : "show", itemId, out.prev, out.item.sha, portee, { ...flagsOf(itemId), wasPublic: before.wasPublic });
      return { ok: true, hidden, sha: out.item.sha, [kind === "lexique" ? "notice" : kind === "materiel" ? "materiel" : "restaurant"]: out.item };
    }
    if (act === "delete") {
      if (kind === "restaurants" && restos) {
        requireMatch(fileOf(itemId), expectedSha);
        await restos.remove(itemId, expectedSha);
      } else {
        softDelete(itemId, expectedSha);
      }
      record("delete", itemId, expectedSha, null, portee, { ...before, hidden: true, wasPublic: before.wasPublic });
      return { ok: true, id: itemId, slug: itemId, trashed: true };
    }
    fail("action inconnue", 400);
  }

  return { kind, readLive, dispatch, fileOf, trashOf, scopeName };
}
