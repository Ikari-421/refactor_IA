// Écriture v1 du domaine Recettes (contrat §9) : volume préprod seulement, jamais le NAS.
// La vérité reste le Markdown. L'index SQLite est mis à jour après chaque écriture.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
const clip = (s, n) => String(s ?? "").normalize("NFC").trim().slice(0, n);
const HEX64 = /^[a-f0-9]{64}$/;

export const CONFLICT = "conflit : la fiche a changé depuis la lecture (recharger)";
export const WRITE_SCOPES = {
  admin: "admin-recettes:ecrire",
  hermes: "bot-hermes:recettes:ecrire",
  grok: "bot-grok:recettes:ecrire",
};

const HERMES_ACTIONS = new Set(["create", "update", "save"]);
const ADMIN_ACTIONS = new Set(["create", "update", "save", "publier", "delete", "restore", "hide", "show", "visibility", "photo"]);

export function allowedAction(scope, action) {
  if (scope === WRITE_SCOPES.hermes || scope === WRITE_SCOPES.grok) return HERMES_ACTIONS.has(action);
  if (scope === WRITE_SCOPES.admin) return ADMIN_ACTIONS.has(action);
  return false;
}

export function parseExpectedSha(body, req) {
  const fromBody = body && body.expectedSha != null && body.expectedSha !== "" ? String(body.expectedSha).trim() : "";
  const raw = req && req.headers ? String(req.headers["if-match"] || "") : "";
  const fromHeader = raw.replace(/^W\//, "").replaceAll('"', "").trim();
  return fromBody || fromHeader || "";
}

function conflict(currentSha) {
  return Object.assign(new Error(CONFLICT), { status: 409, currentSha: currentSha || null });
}

export function createWriter(opts) {
  const live = opts.live;
  const yaml = opts.yaml;
  const validateRecipeV2 = opts.validateRecipeV2;
  const SCHEMA_V2 = opts.SCHEMA_V2;
  const SLUG_RE = opts.SLUG_RE;
  const CATEGORIES = opts.CATEGORIES;
  if (!live || !yaml || typeof yaml.dump !== "function" || typeof yaml.load !== "function") {
    throw new Error("createWriter : live et yaml.load/dump requis");
  }
  if (typeof validateRecipeV2 !== "function" || !SCHEMA_V2 || !SLUG_RE || !CATEGORIES) {
    throw new Error("createWriter : validateur de schéma requis (pas d'import honeypot depuis domains/)");
  }
  const index = opts.index;
  const auditFile = opts.auditFile || path.join(live, "audit", "recettes-v1.jsonl");
  const dataDir = path.join(live, "data");
  const trashDir = path.join(dataDir, ".trash");

  const recipeFile = (slug) => path.join(dataDir, `${slug}.md`);
  const trashFile = (slug) => path.join(trashDir, `${slug}.md`);
  const fileSha = (file) => (fs.existsSync(file) ? sha256(fs.readFileSync(file)) : null);

  function readFm(file) {
    const txt = fs.readFileSync(file, "utf8");
    const m = txt.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) throw Object.assign(new Error("frontmatter manquant"), { status: 400 });
    return { fm: m[1], body: m[2], raw: txt, data: yaml.load(m[1]) };
  }

  function ensureSha(file, expected) {
    const current = fileSha(file);
    if (!HEX64.test(String(expected || "")) || expected !== current) throw conflict(current);
  }

  function atomicWrite(file, content) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (fs.existsSync(file)) fs.copyFileSync(file, file + ".bak");
    const tmp = file + ".v1-tmp";
    fs.writeFileSync(tmp, content);
    fs.renameSync(tmp, file);
  }

  function dumpMd(data, body) {
    const dump = yaml.dump(data, { lineWidth: 100, noRefs: true });
    const bodyTxt = body.startsWith("\n") ? body.slice(1) : body;
    return "---\n" + dump + "---\n" + bodyTxt;
  }

  function appendAudit({ at, portee, action, slug, sha_ancien, sha_nouveau }) {
    const line = JSON.stringify({
      at: at || new Date().toISOString(),
      portee: portee || "",
      action,
      slug,
      sha_ancien: sha_ancien || null,
      sha_nouveau: sha_nouveau || null,
    }) + "\n";
    fs.mkdirSync(path.dirname(auditFile), { recursive: true });
    fs.appendFileSync(auditFile, line);
  }

  function refreshIndex(slug) {
    if (!index || typeof index.upsertSlug !== "function") return;
    index.upsertSlug(slug);
  }

  function afterWrite({ scope, action, slug, shaAncien, shaNouveau, data, publicPatch, wasPublic = false }) {
    const at = new Date().toISOString();
    appendAudit({ at, portee: scope, action, slug, sha_ancien: shaAncien, sha_nouveau: shaNouveau });
    if (index && typeof index.appendHistorique === "function") {
      index.appendHistorique({
        slug,
        sha: shaNouveau || "",
        sha_precedent: shaAncien || null,
        auteur: scope,
        at,
        action,
        path: path.relative(live, recipeFile(slug)),
      });
    }
    refreshIndex(slug);
    const evt = {
      slug,
      action,
      sha: shaNouveau,
      statut: data && data.statut,
      hidden: !!(data && data.hidden),
      category: data && data.category,
      title: data && data.title,
      description: data && data.description,
      publicPatch: !!publicPatch,
      wasPublic: !!wasPublic,
    };
    if (typeof opts.onChange === "function") {
      try { opts.onChange(evt); } catch (e) { console.error("[write-recettes] onChange", e.message); }
    }
    return evt;
  }

  function minimalRecipe(input) {
    const src = input && input.recipe && typeof input.recipe === "object" ? { ...input.recipe, ...pickFlat(input) } : { ...input };
    delete src.action;
    delete src.expectedSha;
    delete src.recipe;
    const slug = clip(src.slug, 80).toLowerCase();
    if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
    const title = clip(src.title, 120);
    if (title.length < 2) throw Object.assign(new Error("titre trop court"), { status: 400 });
    const category = src.category != null ? String(src.category) : "";
    if (!CATEGORIES.includes(category)) throw Object.assign(new Error("category hors schéma"), { status: 400 });
    const description = src.description != null ? clip(src.description, 155) : "";
    if (!description || description.length < 120 || description.length > 155) {
      throw Object.assign(new Error("description : 120–155 caractères (schéma v2), reçu " + description.length), { status: 400 });
    }
    let variants = src.variants;
    if (!variants || typeof variants !== "object" || !Object.keys(variants).length) {
      const ingredients = Array.isArray(src.ingredients) ? src.ingredients : [{ item: "ingrédient de test", qty: 1, unit: null }];
      const steps = Array.isArray(src.steps) ? src.steps : ["Étape de brouillon, jamais publiée."];
      variants = {
        traditionnelle: {
          servings_base: src.servings_base != null ? Number(src.servings_base) : 2,
          servings_unit: src.servings_unit != null ? String(src.servings_unit) : "personnes",
          ingredients,
          steps,
        },
      };
    }
    const data = {
      schema: SCHEMA_V2,
      equipment: Array.isArray(src.equipment) ? src.equipment : [],
      slug,
      title,
      lang: src.lang != null ? String(src.lang) : "fr",
      description,
      cuisine: src.cuisine != null ? String(src.cuisine) : "",
      category,
      tags: Array.isArray(src.tags) ? src.tags.map((t) => clip(t, 40)).filter(Boolean).slice(0, 30) : [],
      statut: "brouillon",
      hidden: src.hidden === false ? false : true,
      default_variant: src.default_variant || Object.keys(variants)[0],
      variants,
    };
    if (src.image && typeof src.image === "object") data.image = src.image;
    return data;
  }

  function pickFlat(input) {
    const out = {};
    for (const k of ["slug", "title", "category", "description", "lang", "cuisine", "tags", "hidden", "ingredients", "steps", "servings_base", "servings_unit", "default_variant"]) {
      if (input[k] != null) out[k] = input[k];
    }
    return out;
  }

  function create(body, { scope } = {}) {
    const data = minimalRecipe(body);
    if (scope === WRITE_SCOPES.hermes || scope === WRITE_SCOPES.grok) {
      data.statut = "brouillon";
      data.hidden = true;
    }
    validateRecipeV2(data, { fileSlug: data.slug, checkDescriptionLength: true });
    const file = recipeFile(data.slug);
    if (fs.existsSync(file) || fs.existsSync(trashFile(data.slug))) {
      throw Object.assign(new Error("une fiche porte déjà ce slug"), { status: 409, currentSha: fileSha(file) || fileSha(trashFile(data.slug)) });
    }
    const mdBody = `\n# ${data.title}\n\nFiche créée via l'API v1 en préprod. Brouillon, jamais publiée automatiquement.\n`;
    const content = dumpMd(data, mdBody);
    atomicWrite(file, content);
    const sha = sha256(content);
    afterWrite({ scope, action: "create", slug: data.slug, shaAncien: null, shaNouveau: sha, data, publicPatch: false });
    return { ok: true, slug: data.slug, sha, recipe: publicRecipe(data), note: "créée en brouillon sur le volume préprod. NAS non touché." };
  }

  function publicRecipe(data, slug) {
    return {
      ...data,
      slug: data.slug || slug,
      statut: data.statut || "publiee",
      hidden: data.hidden === true,
    };
  }

  function loadActive(slug) {
    if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
    const file = recipeFile(slug);
    if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
    return { file, ...readFm(file) };
  }

  function applyUpdate(data, body) {
    if (body.category != null && String(body.category) !== String(data.category)) {
      throw Object.assign(new Error("catégorie Sucré/Salé non modifiable ici"), { status: 400 });
    }
    const prevCategory = data.category;
    if (body.title != null) {
      const t = clip(body.title, 120);
      if (t.length < 2) throw Object.assign(new Error("titre trop court"), { status: 400 });
      data.title = t;
    }
    if (body.description != null) {
      const d = clip(body.description, 155);
      if (d.length < 120 || d.length > 155) throw Object.assign(new Error("description : 120–155 caractères (schéma v2), reçu " + d.length), { status: 400 });
      data.description = d;
    }
    if (body.tags != null) {
      if (!Array.isArray(body.tags)) throw Object.assign(new Error("tags invalides"), { status: 400 });
      data.tags = body.tags.map((t) => clip(t, 40)).filter(Boolean).slice(0, 30);
    }
    const variantKey = data.default_variant || Object.keys(data.variants || {})[0];
    const v = data.variants?.[variantKey];
    if (v && Array.isArray(body.ingredients)) {
      if (body.ingredients.length !== (v.ingredients || []).length) {
        throw Object.assign(new Error("nombre d'ingrédients inchangé requis (correction de coquille seulement)"), { status: 400 });
      }
      v.ingredients = v.ingredients.map((ing, i) => {
        const next = body.ingredients[i];
        const item = clip(next?.item ?? ing.item, 120);
        if (!item) throw Object.assign(new Error(`ingrédient ${i + 1} vide`), { status: 400 });
        const out = { ...ing, item };
        if (Object.prototype.hasOwnProperty.call(next || {}, "qty")) {
          if (next.qty == null || next.qty === "") out.qty = null;
          else {
            const q = Number(next.qty);
            if (!Number.isFinite(q)) throw Object.assign(new Error(`ingrédient ${i + 1} : qty invalide`), { status: 400 });
            out.qty = q;
          }
        }
        if (Object.prototype.hasOwnProperty.call(next || {}, "unit")) {
          if (next.unit == null || next.unit === "") out.unit = null;
          else out.unit = clip(next.unit, 20);
        }
        return out;
      });
    }
    if (v && Array.isArray(body.steps)) {
      if (body.steps.length !== (v.steps || []).length) {
        throw Object.assign(new Error("nombre d'étapes inchangé requis (correction de coquille seulement)"), { status: 400 });
      }
      v.steps = body.steps.map((s, i) => {
        const t = clip(s, 2000);
        if (t.length < 2) throw Object.assign(new Error(`étape ${i + 1} trop courte`), { status: 400 });
        return t;
      });
    }
    if (v && body.servings_base != null) {
      const sb = Number(body.servings_base);
      if (!Number.isFinite(sb) || sb <= 0) throw Object.assign(new Error("servings_base doit être un nombre > 0"), { status: 400 });
      v.servings_base = sb;
    }
    if (v && body.servings_unit != null) {
      const su = clip(body.servings_unit, 40);
      if (su.length < 1) throw Object.assign(new Error("servings_unit invalide (1–40 car.)"), { status: 400 });
      v.servings_unit = su;
    }
    validateRecipeV2(data, { prevCategory, checkDescriptionLength: body.description != null });
    return data;
  }

  function update(slug, body, { scope, expectedSha } = {}) {
    const cur = loadActive(slug);
    ensureSha(cur.file, expectedSha);
    const shaAncien = fileSha(cur.file);
    const wasPublic = cur.data.statut === "publiee" && cur.data.hidden !== true;
    if (cur.data.schema !== SCHEMA_V2) throw Object.assign(new Error("fiche hors schéma recette-web-jigme/v2"), { status: 400 });
    const data = applyUpdate(cur.data, body);
    const content = dumpMd(data, cur.body);
    atomicWrite(cur.file, content);
    const sha = sha256(fs.readFileSync(cur.file));
    const published = data.statut === "publiee" && data.hidden !== true;
    afterWrite({ scope, action: "update", slug, shaAncien, shaNouveau: sha, data, publicPatch: published, wasPublic });
    return { ok: true, slug, sha, recipe: publicRecipe(data, slug), note: "MD écrit sur le volume préprod. NAS non touché." };
  }

  function publier(slug, body, { scope, expectedSha } = {}) {
    const cur = loadActive(slug);
    ensureSha(cur.file, expectedSha);
    const shaAncien = fileSha(cur.file);
    const wasPublic = cur.data.statut === "publiee" && cur.data.hidden !== true;
    cur.data.statut = "publiee";
    validateRecipeV2(cur.data, { prevCategory: cur.data.category });
    const content = dumpMd(cur.data, cur.body);
    atomicWrite(cur.file, content);
    const sha = sha256(fs.readFileSync(cur.file));
    afterWrite({ scope, action: "publier", slug, shaAncien, shaNouveau: sha, data: cur.data, publicPatch: cur.data.hidden !== true, wasPublic });
    return { ok: true, slug, sha, recipe: publicRecipe(cur.data, slug) };
  }

  function setHidden(slug, hidden, { scope, action, expectedSha } = {}) {
    const cur = loadActive(slug);
    ensureSha(cur.file, expectedSha);
    const shaAncien = fileSha(cur.file);
    const wasPublic = cur.data.statut === "publiee" && cur.data.hidden !== true;
    cur.data.hidden = !!hidden;
    validateRecipeV2(cur.data, { prevCategory: cur.data.category });
    const content = dumpMd(cur.data, cur.body);
    atomicWrite(cur.file, content);
    const sha = sha256(fs.readFileSync(cur.file));
    afterWrite({ scope, action: action || (hidden ? "hide" : "show"), slug, shaAncien, shaNouveau: sha, data: cur.data, publicPatch: false, wasPublic });
    return { ok: true, slug, sha, hidden: !!hidden, recipe: publicRecipe(cur.data, slug) };
  }

  function remove(slug, { scope, expectedSha } = {}) {
    const cur = loadActive(slug);
    ensureSha(cur.file, expectedSha);
    const shaAncien = fileSha(cur.file);
    const wasPublic = cur.data.statut === "publiee" && cur.data.hidden !== true;
    fs.mkdirSync(trashDir, { recursive: true });
    const dest = trashFile(slug);
    if (fs.existsSync(dest)) throw Object.assign(new Error("une version est déjà en corbeille pour ce slug"), { status: 409, currentSha: shaAncien });
    if (!fs.existsSync(cur.file + ".bak")) fs.copyFileSync(cur.file, cur.file + ".bak");
    fs.renameSync(cur.file, dest);
    const shaNouveau = fileSha(dest);
    afterWrite({ scope, action: "delete", slug, shaAncien, shaNouveau, data: { ...cur.data, hidden: true }, publicPatch: false, wasPublic });
    return { ok: true, slug, sha: shaNouveau };
  }

  function restore(slug, { scope } = {}) {
    if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
    const src = trashFile(slug);
    const dest = recipeFile(slug);
    if (!fs.existsSync(src)) throw Object.assign(new Error("recette absente de la corbeille"), { status: 404 });
    if (fs.existsSync(dest)) throw Object.assign(new Error("une recette active porte déjà ce slug"), { status: 409, currentSha: fileSha(dest) });
    const shaAncien = fileSha(src);
    fs.renameSync(src, dest);
    const parsed = readFm(dest);
    const sha = fileSha(dest);
    afterWrite({ scope, action: "restore", slug, shaAncien, shaNouveau: sha, data: parsed.data, publicPatch: parsed.data.statut === "publiee" && parsed.data.hidden !== true, wasPublic: false });
    return { ok: true, slug, sha, recipe: publicRecipe(parsed.data, slug) };
  }

  async function photo(slug, body, ctx) {
    if (typeof opts.saveRecipePhoto !== "function") {
      throw Object.assign(new Error("action photo non branchée"), { status: 501 });
    }
    if (!slug) throw Object.assign(new Error("slug manquant"), { status: 400 });
    const file = recipeFile(slug);
    if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
    ensureSha(file, ctx.expectedSha);
    const shaAncien = fileSha(file);
    const out = await opts.saveRecipePhoto(slug, { ...body, expectedSha: ctx.expectedSha });
    const parsed = readFm(file);
    const sha = fileSha(file);
    const visible = parsed.data.statut === "publiee" && parsed.data.hidden !== true;
    afterWrite({ scope: ctx.scope, action: "photo", slug, shaAncien, shaNouveau: sha, data: parsed.data, publicPatch: visible, wasPublic: visible });
    return { ok: true, slug, sha, image: out.image, patch: out.patch, recipe: publicRecipe(parsed.data, slug), note: out.note };
  }

  function dispatch(action, slug, body, ctx) {
    switch (action) {
      case "create": return create(body, ctx);
      case "update":
      case "save": return update(slug, body, ctx);
      case "publier": return publier(slug, body, ctx);
      case "delete": return remove(slug, ctx);
      case "restore": return restore(slug, ctx);
      case "hide": return setHidden(slug, true, { ...ctx, action: "hide" });
      case "show": return setHidden(slug, false, { ...ctx, action: "show" });
      case "visibility":
        if (typeof body.hidden !== "boolean") throw Object.assign(new Error("hidden doit être un booléen"), { status: 400 });
        return setHidden(slug, body.hidden, { ...ctx, action: body.hidden ? "hide" : "show" });
      case "photo":
        return photo(slug, body, ctx);
      default:
        throw Object.assign(new Error("action invalide (create, update, publier, delete, restore, hide, show, photo)"), { status: 400 });
    }
  }

  return { create, update, publier, remove, restore, setHidden, dispatch, auditFile, recipeFile, fileSha, ensureSha, CONFLICT };
}
