// API admin préprod recettes — Bearer RECETTES_ADMIN_SECRET uniquement (secret dédié, H1 ; repli ADMIN_API_SECRET retiré en v243).
// Écrit data/*.md et materiel/*.md sur le volume /var/recettes-live, puis patch le HTML servi.
// Jamais en prod : refuse de démarrer hors recettes-jigme-preprod.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { timingSafeEqual, createHash } from "node:crypto";
import yaml from "./vendor/js-yaml.mjs";
import { LexiqueStore } from "./lexique.mjs";
import { publicRoute, publicResponse } from "./visibility.mjs";
import { imageCandidates, downloadAllowedImage, parseHttpsUrl } from "./materiel-images.mjs";
import { RestaurantStore, applyBlockAction } from "./restaurants-admin.mjs";
import * as RD from "./restaurants-domain.mjs";
import { validateRecipeV2, SCHEMA_V2 } from "./recette-schema.mjs";
import { u, prefixText, LOGICAL_ORIGIN, BASE_PATH, RESTO_PATH, SITE_URL } from "./paths.mjs"; // D29 : HTML servi sous /cuisine/ et /restaurants/
import * as RR from "./restaurants-render.mjs";
import { fileURLToPath } from "node:url";
import { createCuisineV1 } from "../domains/cuisine/http-v1.mjs";
import { writesToBack, proxyLegacyAdmin } from "../domains/cuisine/admin-back-proxy.mjs";
import { regenDirs } from "../domains/cuisine/regen-dirs.mjs";

async function loadSharp() {
  try { return (await import("sharp")).default; }
  catch (e) { throw Object.assign(new Error("sharp indisponible sur cette image (" + (e.message || e) + ")"), { status: 500 }); }
}

const APP = process.env.FLY_APP_NAME || "";
// v243 : seul RECETTES_ADMIN_SECRET authentifie l'API admin (repli ADMIN_API_SECRET retiré). Minimum 32 caractères.
const SECRETS = [process.env.RECETTES_ADMIN_SECRET].filter((s) => s && s.length >= 32);
// R-3 (audit) : un secret défini mais trop court est signalé au démarrage (nom seulement, ni valeur ni longueur).
{
  const v = process.env.RECETTES_ADMIN_SECRET;
  if (v && v.length < 32) console.error("[admin-api] alerte : RECETTES_ADMIN_SECRET est défini mais trop court (minimum 32 caractères) — ignoré");
}
const PORT = Number(process.env.ADMIN_API_PORT || 9001);
const SEED = process.env.RECETTES_SEED || "/opt/recettes-content";
// v234 : mêmes dossiers de régénération pour le webhook et le proxy admin (/opt/src et /opt sur Fly)
const REGEN_DIRS = regenDirs({ here: path.dirname(fileURLToPath(import.meta.url)) });
const LIVE = process.env.RECETTES_LIVE || "/var/recettes-live";
const HTML_ROOT = process.env.RECETTES_HTML || "/usr/share/nginx/html";
const HTML = path.join(HTML_ROOT, BASE_PATH.slice(1)); // D29 : site sous /cuisine/ (chemins logiques /r/… relatifs à ce dossier)
const PREPROD_ONLY = "recettes-jigme-preprod";

if (APP && APP !== PREPROD_ONLY) {
  console.error(`[admin-api] refuse de démarrer : app=${APP} (attendu ${PREPROD_ONLY})`);
  process.exit(1);
}
if (!SECRETS.length) {
  console.error("[admin-api] RECETTES_ADMIN_SECRET manquant ou trop court — API non démarrée");
  process.exit(0); // ne bloque pas le site public
}

const eq = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const okHttps = (u) => typeof u === "string" && /^https:\/\/[^\s]+$/i.test(u) && u.length <= 1500 && !/[\s<>"']/.test(u);
const clip = (s, n) => String(s ?? "").normalize("NFC").trim().slice(0, n);
// Contrat v1 (docs/admin-preprod.md) : empreinte SHA-256 du fichier MD complet, renvoyée en `sha` et attendue en `expectedSha`.
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
const fileSha = (file) => (fs.existsSync(file) ? sha256(fs.readFileSync(file)) : null);
const recipeFile = (slug) => path.join(LIVE, "data", `${slug}.md`);
const materielFile = (id) => path.join(LIVE, "materiel", `${id}.md`);
// expectedSha optionnel : absent = pas de contrôle (compatibilité) ; présent et différent = 409 sans écriture.
function checkExpectedSha(file, expectedSha) {
  if (expectedSha == null || expectedSha === "") return;
  if (String(expectedSha) !== fileSha(file)) throw Object.assign(new Error("conflit : la fiche a changé depuis la lecture (recharger)"), { status: 409 });
}
// Delete (et lexique) : expectedSha obligatoire, SHA-256 64 hex → 428 si absent/invalide, 409 si différent.
function requireExpectedSha(file, expectedSha) {
  if (typeof expectedSha !== "string" || !/^[a-f0-9]{64}$/.test(expectedSha)) {
    throw Object.assign(new Error("empreinte de lecture requise (SHA-256)"), { status: 428 });
  }
  checkExpectedSha(file, expectedSha);
}
function trashDir(kind) {
  return path.join(LIVE, kind === "restaurant" ? "restaurants" : kind === "materiel" ? "materiel" : "data", ".trash");
}
function listTrashFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((x) => x.endsWith(".md") && !x.startsWith("_") && !x.endsWith(".bak"));
}

function seedIfNeeded() {
  fs.mkdirSync(path.join(LIVE, "data"), { recursive: true });
  fs.mkdirSync(path.join(LIVE, "materiel"), { recursive: true });
  fs.mkdirSync(path.join(LIVE, "img", "p"), { recursive: true });
  fs.mkdirSync(path.join(LIVE, "img", "t", "p"), { recursive: true });
  const marker = path.join(LIVE, ".seeded");
  if (fs.existsSync(marker)) return;
  for (const dir of ["data", "materiel"]) {
    const src = path.join(SEED, dir);
    if (!fs.existsSync(src)) continue;
    for (const f of fs.readdirSync(src)) {
      if (!f.endsWith(".md") || f.startsWith("_")) continue;
      const dest = path.join(LIVE, dir, f);
      // Ne pas réintroduire une fiche mise en corbeille (soft-delete, volume seulement).
      if (fs.existsSync(path.join(LIVE, dir, ".trash", f)) || fs.existsSync(dest + ".bak")) continue;
      if (!fs.existsSync(dest)) fs.copyFileSync(path.join(src, f), dest);
    }
  }
  fs.writeFileSync(marker, new Date().toISOString() + "\n");
  console.log("[admin-api] volume initialisé depuis le seed");
}


function syncLiveImages() {
  for (const sub of ["img/p", "img/t/p"]) {
    const src = path.join(LIVE, sub);
    const dest = path.join(HTML, sub);
    if (!fs.existsSync(src)) continue;
    fs.mkdirSync(dest, { recursive: true });
    for (const f of fs.readdirSync(src)) {
      if (!f.endsWith(".webp")) continue;
      try { fs.copyFileSync(path.join(src, f), path.join(dest, f)); } catch (e) { console.error("[admin-api] sync img", sub, f, e.message); }
    }
  }
  const matSrc = path.join(LIVE, "img", "materiel");
  if (fs.existsSync(matSrc)) {
    for (const id of fs.readdirSync(matSrc)) {
      if (!ID_RE.test(id)) continue;
      const dest = path.join(HTML, "img", "materiel", id);
      fs.mkdirSync(dest, { recursive: true });
      for (const f of fs.readdirSync(path.join(matSrc, id))) {
        if (!/^[a-z0-9-]+\.webp$/.test(f)) continue;
        try { fs.copyFileSync(path.join(matSrc, id, f), path.join(dest, f)); } catch (e) { console.error("[admin-api] sync img materiel", id, f, e.message); }
      }
    }
  }
}

function publicImageUrl(slug, data) {
  const web = `/img/p/${slug}.webp`;
  const onDisk = fs.existsSync(path.join(HTML, "img", "p", `${slug}.webp`)) || fs.existsSync(path.join(LIVE, "img", "p", `${slug}.webp`));
  const raw = data?.image?.url != null ? String(data.image.url) : "";
  if (raw.startsWith("/img/")) return raw;
  if (onDisk) return web;
  if (raw) return web; // chemin NAS → URL web attendue après build
  return onDisk ? web : null;
}

function readFm(file) {
  const txt = fs.readFileSync(file, "utf8");
  const m = txt.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error("frontmatter manquant");
  return { fm: m[1], body: m[2], raw: txt, data: yaml.load(m[1]) };
}

function setFmScalar(fm, key, value) {
  const needsQuotes = /[:#{}\[\],&*?|<>=!%@`"']/.test(value) || /^(true|false|null|yes|no)$/i.test(value) || value !== value.trim();
  const q = needsQuotes ? JSON.stringify(value) : value;
  const re = new RegExp("^(" + key + ":)\s*.*$", "m");
  if (!re.test(fm)) throw new Error("champ " + key + " absent du frontmatter");
  return fm.replace(re, "$1 " + q);
}

function writeRecipeMd(slug, data, body, { full = false, fmText = null } = {}) {
  const file = path.join(LIVE, "data", `${slug}.md`);
  if (fs.existsSync(file)) fs.copyFileSync(file, file + ".bak");
  let out;
  if (!full && fmText) {
    const bodyTxt = body.startsWith("\n") ? body.slice(1) : body;
    out = "---\n" + fmText.replace(/\n$/, "") + "\n---\n" + bodyTxt;
  } else {
    const dump = yaml.dump(data, { lineWidth: 100, noRefs: true });
    const bodyTxt = body.startsWith("\n") ? body.slice(1) : body;
    out = "---\n" + dump + "---\n" + bodyTxt;
  }
  fs.writeFileSync(file, out);
  return file;
}

function writeMaterielMd(id, data, body) {
  const dump = yaml.dump(data, { lineWidth: 100, noRefs: true });
  const out = `---\n${dump}---\n${body.startsWith("\n") ? body.slice(1) : body}`;
  const file = path.join(LIVE, "materiel", `${id}.md`);
  if (fs.existsSync(file)) fs.copyFileSync(file, file + ".bak");
  fs.writeFileSync(file, out);
  return file;
}

function listRecipes(q = "") {
  const dir = path.join(LIVE, "data");
  const needle = clip(q, 80).toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  const out = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md") && !x.startsWith("_") && !x.endsWith(".bak"))) {
    try {
      const { data } = readFm(path.join(dir, f));
      const slug = String(data.slug || f.replace(/\.md$/, ""));
      const title = String(data.title || slug);
      const category = data.category ? String(data.category) : "";
      const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
      const desc = String(data.description || "");
      const hay = `${title} ${slug} ${tags.join(" ")} ${desc}`.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
      if (needle && !hay.includes(needle)) continue;
      out.push({ slug, title, category, tags, hidden: data.hidden === true });
    } catch { /* ignore corrupt */ }
  }
  out.sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
  return out;
}

function listRecipeTrash() {
  const out = [];
  for (const f of listTrashFiles(trashDir("recipe"))) {
    try {
      const raw = fs.readFileSync(path.join(trashDir("recipe"), f));
      const { data } = readFm(path.join(trashDir("recipe"), f));
      const slug = String(data.slug || f.replace(/\.md$/, ""));
      out.push({ slug, title: String(data.title || slug), sha: sha256(raw), deleted: true });
    } catch { out.push({ slug: f.replace(/\.md$/, ""), title: f.replace(/\.md$/, ""), sha: null, deleted: true, corrupt: true }); }
  }
  out.sort((a, b) => a.slug.localeCompare(b.slug, "fr", { sensitivity: "base" }));
  return out;
}

function getRecipe(slug) {
  if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
  const file = path.join(LIVE, "data", `${slug}.md`);
  if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
  const { data } = readFm(file);
  const variantKey = data.default_variant || data.house_toggle || Object.keys(data.variants || {})[0];
  const v = (data.variants && data.variants[variantKey]) || {};
  const ingredients = Array.isArray(v.ingredients)
    ? v.ingredients.map((i) => ({
        item: String(i?.item ?? ""),
        qty: i?.qty == null || i?.qty === "" ? null : Number(i.qty),
        unit: i?.unit == null || i?.unit === "" ? null : String(i.unit),
        optional: !!i?.optional,
        to_taste: !!i?.to_taste,
      }))
    : [];
  const steps = Array.isArray(v.steps) ? v.steps.map((s) => String(s ?? "")) : [];
  const imgUrl = publicImageUrl(slug, data);
  return {
    slug: String(data.slug || slug),
    hidden: data.hidden === true,
    title: String(data.title || ""),
    description: String(data.description || ""),
    category: data.category ? String(data.category) : "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    variant: variantKey,
    servings_base: v.servings_base != null ? Number(v.servings_base) : null,
    servings_unit: v.servings_unit != null ? String(v.servings_unit) : "",
    image: {
      url: imgUrl,
      alt: data.image?.alt != null ? String(data.image.alt) : String(data.title || ""),
      credit: data.image?.credit != null ? String(data.image.credit) : "",
    },
    ingredients,
    steps,
  };
}

function escHtml(s) {
  return String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function patchRecipeHtml(slug, { title, description, imageBust = null } = {}) {
  const file = path.join(HTML, "r", slug, "index.html");
  if (!fs.existsSync(file)) return { patched: false, reason: "html absent" };
  let h = fs.readFileSync(file, "utf8");
  const before = createHash("sha1").update(h).digest("hex");
  if (title) {
    h = h.replace(/<title>[^<]*<\/title>/, `<title>${escHtml(title)} — Recettes de Jigmé</title>`);
    h = h.replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${escHtml(title)}"`);
    h = h.replace(/name="twitter:title" content="[^"]*"/, `name="twitter:title" content="${escHtml(title)}"`);
    h = h.replace(/(<h1[^>]*class="[^"]*display[^"]*"[^>]*>)([\s\S]*?)(<\/h1>)/, `$1${escHtml(title)}$3`);
  }
  if (description) {
    const d = escHtml(description);
    h = h.replace(/name="description" content="[^"]*"/, `name="description" content="${d}"`);
    h = h.replace(/property="og:description" content="[^"]*"/, `property="og:description" content="${d}"`);
    h = h.replace(/name="twitter:description" content="[^"]*"/, `name="twitter:description" content="${d}"`);
  }
  if (imageBust) {
    const bustPath = `/img/p/${slug}.webp?v=${imageBust}`;
    h = h.replace(new RegExp(`/img/p/${slug}\\.webp(?:\\?v=[^"\\s]*)?`, "g"), bustPath);
    const abs = `${LOGICAL_ORIGIN}${bustPath}`; // converti en https://jigme.fr/cuisine/… par prefixText à l'écriture
    h = h.replace(/property="og:image" content="[^"]*"/, `property="og:image" content="${escHtml(abs)}"`);
    h = h.replace(/name="twitter:image" content="[^"]*"/, `name="twitter:image" content="${escHtml(abs)}"`);
    const alt = escHtml((getRecipe(slug).image && getRecipe(slug).image.alt) || title || slug);
    h = h.replace(new RegExp(`(<img[^>]*src="(?:/${BASE_PATH.slice(1)})?/img/p/[^"]+"[^>]*alt=")` + '[^"]*(")'), `$1${alt}$2`);
  }
  // Patch rj-data JSON (RECETTE.title / description / tags / variants + servings + image)
  h = h.replace(/<script type="application\/json" id="rj-data">([\s\S]*?)<\/script>/, (full, raw) => {
    try {
      const j = JSON.parse(raw.replace(/\\u003c/g, "<"));
      if (j.RECETTE) {
        const r = getRecipe(slug);
        if (title) j.RECETTE.title = title;
        if (description) j.RECETTE.description = description;
        j.RECETTE.tags = r.tags;
        if (r.image && r.image.url) {
          j.RECETTE.image = { ...(j.RECETTE.image || {}), url: r.image.url, alt: r.image.alt, credit: r.image.credit || "Jigmé Théaux" };
        }
        const vk = r.variant;
        if (j.RECETTE.variants && j.RECETTE.variants[vk]) {
          const src = readFm(path.join(LIVE, "data", `${slug}.md`)).data;
          const vv = src.variants && src.variants[vk];
          if (vv && vv.ingredients) j.RECETTE.variants[vk].ingredients = vv.ingredients;
          if (vv && vv.steps) j.RECETTE.variants[vk].steps = vv.steps;
          if (vv && vv.servings_base != null) j.RECETTE.variants[vk].servings_base = vv.servings_base;
          if (vv && vv.servings_unit != null) j.RECETTE.variants[vk].servings_unit = vv.servings_unit;
        }
      }
      return `<script type="application/json" id="rj-data">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`;
    } catch { return full; }
  });
  h = prefixText(h); // D28 : chemins insérés (logiques) → publics
  const after = createHash("sha1").update(h).digest("hex");
  if (before !== after) fs.writeFileSync(file, h);
  return { patched: before !== after };
}


// Validateur unique du schéma v2 : honeypot/recette-schema.mjs (partagé avec build.mjs)

function saveRecipe(slug, body) {
  if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
  const file = path.join(LIVE, "data", `${slug}.md`);
  if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
  checkExpectedSha(file, body.expectedSha);
  const parsed = readFm(file);
  const data = parsed.data;
  if (body.category != null) throw Object.assign(new Error("catégorie Sucré/Salé non modifiable (ne touche jamais Sucré/Salé)"), { status: 400 });
  const prevCategory = data.category;
  if (data.schema !== SCHEMA_V2) throw Object.assign(new Error("fiche hors schéma recette-web-jigme/v2"), { status: 400 });
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
  const variantKey = data.default_variant || data.house_toggle || Object.keys(data.variants || {})[0];
  const v = data.variants?.[variantKey];
  if (v && Array.isArray(body.ingredients)) {
    if (body.ingredients.length !== (v.ingredients || []).length)
      throw Object.assign(new Error("nombre d'ingrédients inchangé requis (correction de coquille seulement)"), { status: 400 });
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
        else {
          const u = clip(next.unit, 20);
          if (u.length > 20) throw Object.assign(new Error(`ingrédient ${i + 1} : unit trop longue`), { status: 400 });
          out.unit = u;
        }
      }
      return out;
    });
  }
  if (v && Array.isArray(body.steps)) {
    if (body.steps.length !== (v.steps || []).length)
      throw Object.assign(new Error("nombre d'étapes inchangé requis (correction de coquille seulement)"), { status: 400 });
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
    if (su.length < 1 || su.length > 40) throw Object.assign(new Error("servings_unit invalide (1–40 car.)"), { status: 400 });
    v.servings_unit = su;
  }
    validateRecipeV2(data, { prevCategory, checkDescriptionLength: body.description != null });
  const needFull = Array.isArray(body.ingredients) || Array.isArray(body.steps) || body.servings_base != null || body.servings_unit != null;
  let fmText = parsed.fm;
  if (!needFull) {
    if (body.title != null) fmText = setFmScalar(fmText, "title", data.title);
    if (body.description != null) fmText = setFmScalar(fmText, "description", data.description);
    if (body.tags != null) {
      // bloc tags : on repasse en dump ciblé du frontmatter entier si tags changent (liste YAML)
      writeRecipeMd(slug, data, parsed.body, { full: true });
      const patch = patchRecipeHtml(slug, { title: data.title, description: data.description });
      return { ok: true, slug, patch, mode: "yaml-full-tags", note: "MD écrit sur le volume préprod + HTML patché si présent. NAS non touché. Rebuild complet non lancé." };
    }
    writeRecipeMd(slug, data, parsed.body, { full: false, fmText });
  } else {
    writeRecipeMd(slug, data, parsed.body, { full: true });
  }
  const patch = patchRecipeHtml(slug, { title: data.title, description: data.description });
  return { ok: true, slug, patch, mode: needFull ? "yaml-full" : "surgical", note: "MD écrit sur le volume préprod + HTML patché si présent. NAS non touché. Rebuild complet non lancé." };
}


function parseDataUrlImage(dataUrl) {
  if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) {
    throw Object.assign(new Error("image : data URL attendue (JPG/PNG/WebP)"), { status: 400 });
  }
  const m = dataUrl.match(/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=\s]+)$/i);
  if (!m) throw Object.assign(new Error("image : format refusé (JPG, PNG ou WebP)"), { status: 400 });
  const buf = Buffer.from(m[2].replace(/\s+/g, ""), "base64");
  if (!buf.length) throw Object.assign(new Error("image vide"), { status: 400 });
  if (buf.length > 8 * 1024 * 1024) throw Object.assign(new Error("image trop lourde (8 Mo max)"), { status: 413 });
  return { mime: m[1].toLowerCase(), buf };
}

async function saveRecipePhoto(slug, body) {
  if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
  const file = path.join(LIVE, "data", `${slug}.md`);
  if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
  checkExpectedSha(file, body.expectedSha);
  const parsed = readFm(file);
  const data = parsed.data;
  if (data.schema !== SCHEMA_V2) throw Object.assign(new Error("fiche hors schéma recette-web-jigme/v2"), { status: 400 });
  const prevCategory = data.category;
  const { buf } = parseDataUrlImage(body.image);
  const sharp = await loadSharp();
  const heroDirLive = path.join(LIVE, "img", "p");
  const thumbDirLive = path.join(LIVE, "img", "t", "p");
  const heroDirHtml = path.join(HTML, "img", "p");
  const thumbDirHtml = path.join(HTML, "img", "t", "p");
  for (const d of [heroDirLive, thumbDirLive, heroDirHtml, thumbDirHtml]) fs.mkdirSync(d, { recursive: true });
  const heroName = `${slug}.webp`;
  const heroLive = path.join(heroDirLive, heroName);
  const thumbLive = path.join(thumbDirLive, heroName);
  const heroHtml = path.join(heroDirHtml, heroName);
  const thumbHtml = path.join(thumbDirHtml, heroName);
  // Héros ~1600 inside (comme build.mjs) + vignette 720 cover
  await sharp(buf).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 78 }).toFile(heroLive);
  await sharp(heroLive).resize({ width: 720, height: 720, fit: "cover", withoutEnlargement: true }).webp({ quality: 74 }).toFile(thumbLive);
  fs.copyFileSync(heroLive, heroHtml);
  fs.copyFileSync(thumbLive, thumbHtml);
  // Variante w800 pour srcset héros si le dossier existe déjà
  const w800Dir = path.join(HTML, "img", "w800");
  if (fs.existsSync(path.join(HTML, "img"))) {
    fs.mkdirSync(w800Dir, { recursive: true });
    await sharp(heroLive).resize({ width: 800 }).webp({ quality: 72 }).toFile(path.join(w800Dir, heroName));
  }
  const bust = createHash("sha1").update(fs.readFileSync(heroLive)).digest("hex").slice(0, 8);
  if (!data.image || typeof data.image !== "object") data.image = {};
  data.image.url = `/img/p/${slug}.webp`;
  if (!data.image.alt) data.image.alt = String(data.title || slug);
  if (!data.image.credit) data.image.credit = "Jigmé Théaux";
  validateRecipeV2(data, { prevCategory, checkDescriptionLength: false });
  writeRecipeMd(slug, data, parsed.body, { full: true });
  const patch = patchRecipeHtml(slug, { title: data.title, description: data.description, imageBust: bust });
  return {
    ok: true,
    slug,
    image: { url: data.image.url, alt: data.image.alt, credit: data.image.credit, bust },
    patch,
    note: "Photo WebP écrite sur volume live + HTML servi. NAS non touché. Rebuild complet non lancé.",
  };
}

function listMateriel() {
  const dir = path.join(LIVE, "materiel");
  const out = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md") && !x.startsWith("_") && !x.endsWith(".bak"))) {
    try {
      const { data } = readFm(path.join(dir, f));
      out.push({
        id: String(data.id || f.replace(/\.md$/, "")),
        label: String(data.label || ""),
        hidden: data.hidden === true,
        aliases: Array.isArray(data.aliases) ? data.aliases.map(String) : [],
        recos: (Array.isArray(data.recos) ? data.recos : []).map((r) => ({
          ...r,
          title: String(r.title || ""),
          url: String(r.url || ""),
          review: r.review != null ? String(r.review) : "",
        })),
      });
    } catch { /* ignore */ }
  }
  out.sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" }));
  return out;
}

function getMateriel(id) {
  if (!ID_RE.test(id)) throw Object.assign(new Error("id invalide"), { status: 400 });
  const file = path.join(LIVE, "materiel", `${id}.md`);
  if (!fs.existsSync(file)) throw Object.assign(new Error("fiche matériel introuvable"), { status: 404 });
  const { data, body } = readFm(file);
  return {
    id: String(data.id || id),
    label: String(data.label || ""),
        hidden: data.hidden === true,
    aliases: Array.isArray(data.aliases) ? data.aliases.map(String) : [],
    schema: data.schema || "materiel-jigme/v1",
    recos: (Array.isArray(data.recos) ? data.recos : []).map((r) => ({
      ...r,
          title: String(r.title || ""),
      url: String(r.url || ""),
      review: r.review != null ? String(r.review) : "",
    })),
    bodyMarkdown: body.trim(),
  };
}

const LOCAL_RECO_IMG = /^\/img\/[a-z0-9][a-z0-9/_-]*\.(?:webp|jpg|jpeg|png)$/i;
function clipNum(v, min, max) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return Math.min(max, Math.max(min, n));
}
function cleanCrop(src) {
  if (!src || typeof src !== "object") return undefined;
  const x = src.x != null ? clipNum(src.x, 0, 100) : null;
  const y = src.y != null ? clipNum(src.y, 0, 100) : null;
  const zoom = src.zoom != null ? clipNum(src.zoom, 0.5, 3) : null;
  if (x == null && y == null && zoom == null) return undefined;
  return { x: x ?? 50, y: y ?? 50, zoom: zoom ?? 1 };
}
function cleanMention(m) {
  if (!m || typeof m !== "object") return undefined;
  const label = clip(m.label, 80);
  if (!label) return undefined;
  const angle = m.angle != null ? clipNum(m.angle, -45, 45) : 0;
  return {
    label,
    color: typeof m.color === "string" && /^#[0-9a-fA-F]{6}$/.test(m.color) ? m.color.toLowerCase() : "#ffffff",
    angle: angle ?? 0,
    x: m.x != null ? (clipNum(m.x, -600, 600) ?? 0) : 0,
    y: m.y != null ? (clipNum(m.y, -60, 400) ?? 0) : 0,
  };
}
function fxText(v, max, what, i) {
  const t = String(v ?? "").replace(/[\u0000-\u001f\u007f<>]/g, "").trim().replace(/\s+/g, " ");
  if (t.length < 1 || t.length > max) throw Object.assign(new Error(`reco ${i + 1} : ${what} (1 à ${max} car.)`), { status: 400 });
  return t;
}
function fxColor(v, what, i) {
  const c = String(v ?? "");
  if (!/^#[0-9a-fA-F]{6}$/.test(c)) throw Object.assign(new Error(`reco ${i + 1} : ${what} (#RRGGBB)`), { status: 400 });
  return c.toLowerCase();
}
function fxNum(v, min, max, what, i, dflt) {
  if (v == null || v === "") return dflt;
  const n = Number(v);
  if (!Number.isFinite(n) || n < min || n > max) throw Object.assign(new Error(`reco ${i + 1} : ${what} (${min} à ${max})`), { status: 400 });
  return Math.round(n * 1000) / 1000;
}
function cleanFx(fx, i) {
  if (fx == null || fx === "") return undefined;
  if (typeof fx !== "object" || Array.isArray(fx)) throw Object.assign(new Error(`reco ${i + 1} : fx objet attendu (ship, mark, glow, tag)`), { status: 400 });
  for (const k of Object.keys(fx)) if (!["ship", "mark", "glow", "tag"].includes(k)) throw Object.assign(new Error(`reco ${i + 1} : effet inconnu (${k.slice(0, 20)})`), { status: 400 });
  const out = {};
  if (fx.ship != null) {
    const x = fx.ship; if (!x || typeof x !== "object") throw Object.assign(new Error(`reco ${i + 1} : bandeau livraison invalide`), { status: 400 });
    out.ship = { text: fxText(x.text, 40, "texte du bandeau livraison", i), color: fxColor(x.color, "couleur du bandeau livraison", i), speed: fxNum(x.speed, 4, 30, "vitesse du bandeau (s)", i, 8) };
  }
  if (fx.mark != null) {
    const x = fx.mark; if (!x || typeof x !== "object") throw Object.assign(new Error(`reco ${i + 1} : marque flottante invalide`), { status: 400 });
    out.mark = { text: fxText(x.text, 30, "texte de la marque flottante", i), color: fxColor(x.color, "couleur de la marque flottante", i), x: fxNum(x.x, 0, 100, "position X de la marque (%)", i, 4), y: fxNum(x.y, 0, 100, "position Y de la marque (%)", i, 70) };
  }
  if (fx.glow != null) {
    const x = fx.glow; if (!x || typeof x !== "object") throw Object.assign(new Error(`reco ${i + 1} : bord lumineux invalide`), { status: 400 });
    out.glow = { color: fxColor(x.color, "couleur du bord lumineux", i), speed: fxNum(x.speed, 1, 12, "vitesse du bord lumineux (s)", i, 3) };
  }
  if (fx.tag != null) {
    const x = fx.tag; if (!x || typeof x !== "object") throw Object.assign(new Error(`reco ${i + 1} : étiquette invalide`), { status: 400 });
    out.tag = { text: fxText(x.text, 20, "texte de l'étiquette", i), color: fxColor(x.color, "couleur de l'étiquette", i), x: fxNum(x.x, 0, 100, "position X de l'étiquette (%)", i, 3) };
  }
  const s = JSON.stringify(out);
  if (s.length > 4000) throw Object.assign(new Error(`reco ${i + 1} : effets trop volumineux`), { status: 400 });
  return Object.keys(out).length ? out : undefined;
}
async function storeMaterielRecoWebp(id, buf) {
  const sharp = await loadSharp();
  let hero;
  try {
    hero = await sharp(buf).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  } catch {
    throw Object.assign(new Error("image illisible (JPG, PNG ou WebP attendu)"), { status: 400 });
  }
  const name = createHash("sha1").update(hero).digest("hex").slice(0, 10);
  const rel = `/img/materiel/${id}/${name}.webp`;
  for (const root of [LIVE, HTML]) {
    const d = path.join(root, "img", "materiel", id);
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, `${name}.webp`), hero);
  }
  return rel;
}
const OWNED_MATERIEL_WEBP = /^\/img\/materiel\/[a-z0-9-]+\/[a-f0-9]{10}\.webp$/;
function isOwnedMaterielWebp(rel) {
  return typeof rel === "string" && OWNED_MATERIEL_WEBP.test(rel);
}
function ownedMaterielWebps(recos = []) {
  return new Set((recos || []).map((r) => r && r.image).filter(isOwnedMaterielWebp));
}
function materielWebpReferenced(rel) {
  if (!isOwnedMaterielWebp(rel)) return true;
  const needles = [rel];
  if (BASE_PATH && BASE_PATH !== "/") needles.push(`${BASE_PATH}${rel}`);
  const dir = path.join(LIVE, "materiel");
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".md") || f.startsWith("_")) continue;
      try {
        const { data } = readFm(path.join(dir, f));
        for (const r of data.recos || []) {
          if (r && typeof r.image === "string" && needles.includes(r.image)) return true;
        }
      } catch { /* ignore */ }
    }
  }
  const pages = path.join(HTML, "r");
  if (fs.existsSync(pages)) {
    for (const slug of fs.readdirSync(pages)) {
      const file = path.join(pages, slug, "index.html");
      if (!fs.existsSync(file)) continue;
      const h = fs.readFileSync(file, "utf8");
      if (needles.some((n) => h.includes(n))) return true;
    }
  }
  return false;
}
function unlinkOrphanMaterielWebps(rels) {
  for (const rel of rels) {
    if (!isOwnedMaterielWebp(rel) || materielWebpReferenced(rel)) continue;
    const parts = rel.split("/"); // "", "img", "materiel", id, name.webp
    const id = parts[3], name = parts[4];
    for (const root of [LIVE, HTML]) {
      const f = path.join(root, "img", "materiel", id, name);
      try { if (fs.existsSync(f)) fs.unlinkSync(f); } catch { /* ignore */ }
    }
  }
}
async function encodeMaterielRecoImage(id, dataUrl) {
  const { buf } = parseDataUrlImage(dataUrl);
  return storeMaterielRecoWebp(id, buf);
}
function recoMediaPatch(r) {
  const o = { title: r.title, url: r.url, review: r.review || null };
  if (r.image) o.image = r.image;
  if (r.crop) o.crop = r.crop;
  if (r.mention) o.mention = r.mention;
  if (r.halo) o.halo = true;
  if (r.haloColor) o.haloColor = r.haloColor;
  if (r.fx) o.fx = r.fx;
  if (r.ad) { o.ad = true; if (r.adLabel) o.adLabel = r.adLabel; }
  return o;
}
function publicRecos(fiche) {
  return (fiche.recos || []).filter((r) => !r.hidden).map((r) => recoMediaPatch(r));
}
async function cleanRecos(recos, { id, prev = [] } = {}) {
  if (!Array.isArray(recos)) throw Object.assign(new Error("recos invalides"), { status: 400 });
  if (recos.length > 20) throw Object.assign(new Error("trop de recommandations"), { status: 400 });
  const prevByUrl = new Map((prev || []).filter((p) => p && p.url).map((p) => [String(p.url), p]));
  const out = [];
  for (let i = 0; i < recos.length; i++) {
    const r = recos[i] || {};
    const title = clip(r.title, 120);
    const url = clip(r.url, 1500);
    const review = clip(r.review ?? "", 400);
    if (!title) throw Object.assign(new Error(`reco ${i + 1} : titre manquant`), { status: 400 });
    if (!okHttps(url)) throw Object.assign(new Error(`reco ${i + 1} : URL https requise`), { status: 400 });
    const prevR = prevByUrl.get(url) || {};
    let image;
    if (typeof r.image === "string" && r.image === "") {
      image = undefined; // effacement explicite ; null/absent conservent l'image
    } else if (typeof r.image === "string" && r.image.startsWith("data:image/")) {
      if (!id) throw Object.assign(new Error(`reco ${i + 1} : id requis pour enregistrer une image`), { status: 400 });
      image = await encodeMaterielRecoImage(id, r.image);
    } else if (typeof r.image === "string" && r.image) {
      if (LOCAL_RECO_IMG.test(r.image) && !r.image.includes("..")) image = r.image;
      else if (okHttps(r.image) && r.image === prevR.image) image = prevR.image; // déjà enregistrée (y compris ancienne URL https)
      else if (okHttps(r.image)) {
        try { parseHttpsUrl(r.image); } catch (e) {
          throw Object.assign(new Error(`reco ${i + 1} : image distante = hôte Amazon autorisé, data URL ou chemin /img/…`), { status: e.status || 400 });
        }
        if (!id) throw Object.assign(new Error(`reco ${i + 1} : id requis pour enregistrer une image`), { status: 400 });
        const { buf } = await downloadAllowedImage(r.image);
        image = await storeMaterielRecoWebp(id, buf);
      } else throw Object.assign(new Error(`reco ${i + 1} : image = data URL, chemin /img/… ou URL Amazon autorisée`), { status: 400 });
    } else {
      image = prevR.image || undefined;
    }
    const cropIn = r.crop != null && typeof r.crop === "object" ? r.crop : (r.x != null || r.y != null || r.zoom != null ? r : null);
    let crop = cropIn ? cleanCrop(cropIn) : prevR.crop;
    if (!image) crop = undefined; // le cadrage ne s'applique qu'à une image
    const mention = r.mention !== undefined && r.mention !== null ? cleanMention(r.mention) : prevR.mention;
    const halo = typeof r.halo === "boolean" ? r.halo : prevR.halo;
    const haloColor = r.haloColor !== undefined && r.haloColor !== null
      ? (typeof r.haloColor === "string" && /^#[0-9a-fA-F]{6}$/.test(r.haloColor) ? r.haloColor.toLowerCase() : "")
      : prevR.haloColor;
    const fx = r.fx !== undefined && r.fx !== null ? cleanFx(r.fx, i) : prevR.fx;
    let hidden;
    if (typeof r.hidden === "boolean") hidden = r.hidden;
    else if (typeof r.visible === "boolean") hidden = !r.visible;
    else hidden = prevR.hidden === true;
    const ad = typeof r.ad === "boolean" ? r.ad : prevR.ad === true;
    const adLabelIn = r.adLabel !== undefined && r.adLabel !== null ? r.adLabel : (ad ? prevR.adLabel : undefined);
    const adLabel = ad ? (clip(adLabelIn || "Publicité", 40) || "Publicité") : undefined;
    const next = { ...prevR, ...r, title, url, review };
    delete next.x; delete next.y; delete next.zoom; delete next.visible;
    if (image) next.image = image; else delete next.image;
    if (crop) next.crop = crop; else delete next.crop;
    if (mention) next.mention = mention; else delete next.mention;
    if (halo) next.halo = true; else delete next.halo;
    if (halo && haloColor) next.haloColor = haloColor; else delete next.haloColor;
    if (fx) next.fx = fx; else delete next.fx;
    if (ad) { next.ad = true; next.adLabel = adLabel; } else { delete next.ad; delete next.adLabel; }
    if (hidden) next.hidden = true; else delete next.hidden;
    out.push(next);
  }
  return out;
}

function patchMaterielInRecipes(fiche) {
  // Met à jour equipment_recos / equipment_meta dans les pages qui citent ce matériel.
  const label = fiche.label;
  const recos = publicRecos(fiche);
  const root = path.join(HTML, "r");
  if (!fs.existsSync(root)) return { pages: 0 };
  let pages = 0;
  for (const slug of fs.readdirSync(root)) {
    const file = path.join(root, slug, "index.html");
    if (!fs.existsSync(file)) continue;
    let h = fs.readFileSync(file, "utf8");
    if (!h.includes(label) && !h.includes(`"id":"${fiche.id}"`)) continue;
    const next = h.replace(/<script type="application\/json" id="rj-data">([\s\S]*?)<\/script>/, (full, raw) => {
      try {
        const j = JSON.parse(raw.replace(/\\u003c/g, "<"));
        const r = j.RECETTE;
        if (!r) return full;
        let hit = false;
        if (r.equipment_recos && typeof r.equipment_recos === "object") {
          for (const k of Object.keys(r.equipment_recos)) {
            if (k === label || (fiche.aliases || []).some((a) => k === a)) {
              r.equipment_recos[k] = recos;
              hit = true;
            }
          }
          if (!hit && recos.length) {
            // si la fiche est référencée via meta
            if (r.equipment_meta?.[label]) { r.equipment_recos[label] = recos; hit = true; }
          }
        }
        if (r.equipment_meta?.[label]) {
          r.equipment_meta[label] = { ...(r.equipment_meta[label] || {}), label };
          hit = true;
        }
        if (!hit) return full;
        pages++;
        return `<script type="application/json" id="rj-data">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`;
      } catch { return full; }
    });
    if (next !== h) fs.writeFileSync(file, prefixText(next));
  }
  return { pages };
}

async function saveMateriel(id, body) {
  const action = String(body.action || "save");
  if (action !== "save" && action !== "create") {
    throw Object.assign(new Error("action inconnue (save, visibility)"), { status: 400 });
  }
  if (action === "create") {
    const newId = clip(body.id, 60).toLowerCase();
    if (!ID_RE.test(newId)) throw Object.assign(new Error("id invalide (a-z0-9-)"), { status: 400 });
    const file = path.join(LIVE, "materiel", `${newId}.md`);
    if (fs.existsSync(file)) throw Object.assign(new Error("fiche déjà existante"), { status: 409 });
    const label = clip(body.label, 80);
    if (label.length < 2) throw Object.assign(new Error("label trop court"), { status: 400 });
    const aliases = Array.isArray(body.aliases) ? body.aliases.map((a) => clip(a, 80)).filter(Boolean).slice(0, 20) : [label];
    const recos = await cleanRecos(body.recos || [], { id: newId });
    const data = { schema: "materiel-jigme/v1", id: newId, label, aliases, recos };
    writeMaterielMd(newId, data, `\n# ${label}\n\nFiche ajoutée depuis l'admin préprod.\n`);
    const patch = patchMaterielInRecipes({ id: newId, label, aliases, recos });
    refreshVisibility();
    return { ok: true, id: newId, patch };
  }
  if (!ID_RE.test(id)) throw Object.assign(new Error("id invalide"), { status: 400 });
  const file = path.join(LIVE, "materiel", `${id}.md`);
  if (!fs.existsSync(file)) throw Object.assign(new Error("fiche matériel introuvable"), { status: 404 });
  checkExpectedSha(file, body.expectedSha);
  const parsed = readFm(file);
  const data = parsed.data;
  const prevImgs = ownedMaterielWebps(data.recos);
  if (body.label != null) {
    const label = clip(body.label, 80);
    if (label.length < 2) throw Object.assign(new Error("label trop court"), { status: 400 });
    data.label = label;
  }
  if (body.aliases != null) {
    if (!Array.isArray(body.aliases)) throw Object.assign(new Error("aliases invalides"), { status: 400 });
    data.aliases = body.aliases.map((a) => clip(a, 80)).filter(Boolean).slice(0, 20);
  }
  if (body.recos != null) data.recos = await cleanRecos(body.recos, { id, prev: Array.isArray(data.recos) ? data.recos : [] });
  writeMaterielMd(id, data, parsed.body);
  const fiche = getMateriel(id);
  const patch = patchMaterielInRecipes(fiche);
  refreshVisibility();
  unlinkOrphanMaterielWebps([...prevImgs].filter((rel) => !ownedMaterielWebps(fiche.recos).has(rel)));
  return { ok: true, id, patch, note: "MD matériel écrit sur le volume. Pages recettes patchées si le label y figure. NAS non touché." };
}

let publicVisibility = { recipes: new Set(), materiel: [] };
function refreshVisibility() {
  if (writesToBack()) {
    // Vague 1 : la visibilité publique vient du back (régénération ciblée), pas du volume.
    publicVisibility = { recipes: new Set(), materiel: [] };
    return;
  }
  publicVisibility = {
    recipes: new Set([
      ...listRecipes().filter(r => r.hidden || recipeOffPublic(r.slug)).map(r => r.slug),
      ...listRecipeTrash().map(r => r.slug),
    ]),
    materiel: listMateriel().filter((m) => {
      if (m.hidden) return true;
      try {
        const { data } = readFm(path.join(LIVE, "materiel", m.id + ".md"));
        return data.statut === "brouillon";
      } catch { return true; }
    }),
  };
}
function saveVisibility(kind, id, body) {
  if (typeof body.hidden !== "boolean") throw Object.assign(new Error("hidden doit être un booléen"), {status:400});
  if (!ID_RE.test(id)) throw Object.assign(new Error("id invalide"), {status:400});
  const file = path.join(LIVE, kind === "recipe" ? "data" : "materiel", id + ".md");
  if (!fs.existsSync(file)) throw Object.assign(new Error("fiche introuvable"), {status:404});
  checkExpectedSha(file, body.expectedSha);
  const parsed = readFm(file);
  parsed.data.hidden = body.hidden;
  // Mutation dédiée : aucun champ texte/photo/effet/variante n'est reconstruit.
  const tmp = file + ".visibility-tmp";
  fs.writeFileSync(tmp, "---\n" + yaml.dump(parsed.data, {lineWidth:100,noRefs:true}) + "---\n" + parsed.body);
  fs.copyFileSync(file, file + ".bak");
  fs.renameSync(tmp, file);
  refreshVisibility();
  return {ok:true, hidden:body.hidden};
}

function deleteRecipe(slug, body) {
  if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
  const file = recipeFile(slug);
  if (!fs.existsSync(file)) throw Object.assign(new Error("recette introuvable"), { status: 404 });
  requireExpectedSha(file, body.expectedSha);
  const destDir = trashDir("recipe");
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, `${slug}.md`);
  if (fs.existsSync(dest)) throw Object.assign(new Error("une version est déjà en corbeille pour ce slug"), { status: 409 });
  if (!fs.existsSync(file + ".bak")) fs.copyFileSync(file, file + ".bak");
  fs.renameSync(file, dest);
  refreshVisibility();
  return { ok: true, slug };
}

function restoreRecipe(slug) {
  if (!SLUG_RE.test(slug)) throw Object.assign(new Error("slug invalide"), { status: 400 });
  const dest = recipeFile(slug);
  const src = path.join(trashDir("recipe"), `${slug}.md`);
  if (!fs.existsSync(src)) throw Object.assign(new Error("recette absente de la corbeille"), { status: 404 });
  if (fs.existsSync(dest)) throw Object.assign(new Error("une recette active porte déjà ce slug"), { status: 409 });
  fs.renameSync(src, dest);
  refreshVisibility();
  return { ok: true, slug };
}

function reapplyAll() {
  // Ne retraiter que les fiches réellement éditées (présence d'un .bak sur le volume).
  let recipes = 0, materiel = 0;
  const dataDir = path.join(LIVE, "data");
  for (const f of fs.readdirSync(dataDir).filter((x) => x.endsWith(".md.bak"))) {
    const slug = f.replace(/\.md\.bak$/, "");
    if (!SLUG_RE.test(slug)) continue;
    try {
      const r = getRecipe(slug);
      patchRecipeHtml(slug, { title: r.title, description: r.description });
      recipes++;
    } catch (e) { console.error("[admin-api] reapply recipe", slug, e.message); }
  }
  const matDir = path.join(LIVE, "materiel");
  for (const f of fs.readdirSync(matDir).filter((x) => x.endsWith(".md.bak"))) {
    const id = f.replace(/\.md\.bak$/, "");
    if (!ID_RE.test(id)) continue;
    try { patchMaterielInRecipes(getMateriel(id)); materiel++; }
    catch (e) { console.error("[admin-api] reapply materiel", id, e.message); }
  }
  console.log(`[admin-api] reapply recipes=${recipes} materiel=${materiel}`);
  return { recipes, materiel };
}

async function readJson(req, max = 256 * 1024) {
  let size = 0; const chunks = [];
  for await (const c of req) { size += c.length; if (size > max) throw Object.assign(new Error("trop gros"), { status: 413 }); chunks.push(c); }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function send(res, status, body, extraHeaders = {}) {
  const data = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex",
    ...extraHeaders,
  });
  res.end(data);
}

function auth(req) {
  const h = String(req.headers.authorization || "");
  if (!h.startsWith("Bearer ")) return false;
  // comparaison à temps constant contre chaque secret, sans court-circuit
  let ok = false;
  for (const s of SECRETS) ok = eq(h.slice(7), s) || ok;
  return ok;
}

seedIfNeeded();
const HERE = path.dirname(fileURLToPath(import.meta.url));
const surchargePath = [
  process.env.RECETTES_CATEGORIES_SURCHARGE,
  path.join(SEED, "categories-surcharge.json"),
  path.join(HERE, "..", "src", "categories-surcharge.json"),
  "/opt/recettes-content/categories-surcharge.json",
].find((f) => f && fs.existsSync(f));
function recipeOffPublic(slug) {
  const file = recipeFile(slug);
  if (!fs.existsSync(file)) return true;
  try {
    const { data } = readFm(file);
    return data.hidden === true || data.statut === "brouillon";
  } catch { return true; }
}

const lexique = new LexiqueStore(SEED, LIVE);
const restos = new RestaurantStore({ seed: SEED, live: LIVE, html: HTML, pages: path.join(HTML_ROOT, "restaurants"), yaml, loadSharp });
try { const n = restos.seed(); if (n) console.log("[admin-api] restaurants seed", n); } catch (e) { console.error("[admin-api] restaurants seed", e.message); }
// R2 : avec RJ_WRITES=back, les pages restaurants viennent du back (build + webhook) ; le volume local n'est plus rejoué au démarrage.
if (!writesToBack()) {
try { restos.syncImages(); } catch (e) { console.error("[admin-api] restaurants img", e.message); }
try { const n = restos.applyTrash(); if (n) console.log("[admin-api] restaurants corbeille html=" + n); } catch (e) { console.error("[admin-api] restaurants corbeille", e.message); }
setTimeout(() => { restos.reapply().then((n) => console.log("[admin-api] reapply restaurants=" + n)).catch((e) => console.error("[admin-api] reapply restaurants", e.message)); }, 900);
}

function adminMeta() {
  return {
    ok: true,
    preprod: true,
    app: APP || "local",
    live: LIVE,
    seed: SEED,
    sourceOfTruth: {
      nas: "vérité éditoriale (non synchronisée par cet admin)",
      workspace: "/workspace/recettes-jigme/data et materiel (source des builds/déploiements)",
      volume: "édits live préprod (/var/recettes-live) — survivent au stop machine, perdus si volume détruit",
    },
    rebuild: "Pas de rebuild complet à chaque sauvegarde. MD écrits sur le volume + patch HTML (rj-data, meta, titre). Rebuild complet : TARGET=preprod node build.mjs puis fly deploy -a recettes-jigme-preprod (depuis le workspace, après avoir recopié les MD du volume si besoin).",
    editable: {
      recettes: ["visibility (hidden booléen, préprod)", "delete (soft-delete, corbeille volume)", "title", "description", "tags", "ingredients[].item|qty|unit (variant par défaut, même nombre)", "servings_base", "servings_unit", "steps[] (variant par défaut, même nombre)", "photo (action photo → /img/p/<slug>.webp)"],
      materiel: ["visibility (hidden booléen, préprod)", "label", "aliases", "recos[] (title, url https, review, image, crop, mention, halo, fx, ad, hidden)", "image-candidates (POST url Amazon)", "création de fiche"],
    },
  };
}

const cuisineV1 = createCuisineV1({
  yamlLoad: (s) => yaml.load(s),
  yamlDump: (d) => yaml.dump(d, { lineWidth: 100, noRefs: true }),
  yaml,
  live: LIVE,
  mdDir: path.join(LIVE, "data"),
  dbPath: process.env.RECETTES_INDEX || path.join(LIVE, "index", "recettes.sqlite"),
  surchargePath,
  secret: SECRETS,
  extraKeys: process.env.API_V1_EXTRA_KEYS,
  commit: process.env.GIT_COMMIT,
  validateRecipeV2,
  SCHEMA_V2,
  SLUG_RE,
  CATEGORIES: ["sucré", "salé", "boissons"],
  webhookSecret: process.env.WEBHOOK_HMAC_SECRET || "",
  webhookUrl: process.env.WEBHOOK_URL || ("http://127.0.0.1:" + PORT + "/api/v1/webhooks/cuisine"),
  htmlDir: HTML,
  restoDir: process.env.RESTAURANTS_HTML || path.join(path.dirname(HTML), "restaurants"),
  ...REGEN_DIRS,
  prefixText,
  paths: { BASE_PATH, RESTO_PATH, SITE_URL, prefixText },
  RD,
  RR,
  lexique,
  restaurants: restos,
  restaurantBlocks: applyBlockAction,
  validateLexique: (id, data, flags) => lexique.validate(id, data, flags),
  saveRecipePhoto,
  parseDataUrlImage,
  imageCandidates,
  adminMeta,
  restaurantMeta: {
    schema: RD.SCHEMA,
    categories: RD.CATEGORIES,
    blockTypes: RD.BLOCK_TYPES,
    limits: RD.LIMITS,
  },
  onChange(evt) {
    try { refreshVisibility(); } catch (e) { console.error("[admin-api] v1 visibility", e.message); }
    // D41 : plus de rustine D11 sur les écritures v1 ; la reconstruction ciblée passe par le webhook.
  },
});
try { console.log("[admin-api] index recettes=" + cuisineV1.rebuild()); }
catch (e) { console.error("[admin-api] index recettes", e.message); }

refreshVisibility();
try { syncLiveImages(); } catch (e) { console.error("[admin-api] sync images", e.message); }
// 14/11/2026 (choix Jigmé) : plus de recopie des MD volume (recettes/matériel) au démarrage.
// Les pages servies restent celles du build. POST /api/admin/v1/reapply inchangé (contrat admin).
console.log("[admin-api] reapply recettes/matériel au démarrage : désactivé");

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://x");
    const raw = url.pathname.replace(/\/+$/, "") || "/";
    if (cuisineV1.handle(req, res, url, raw)) return;
    // Contrat v1 : seul /api/admin/v1/… est servi. L'ancien /api/admin/… (alias pendant la migration) est retiré le 11/11/2026 : 410.
    // `sha` (SHA-256 du MD) sur les lectures/écritures d'une fiche, `apiVersion` sur /health.
    const v1 = /^\/api\/admin\/v1(\/|$)/.test(raw);
    if (!v1 && /^\/api\/admin(\/|$)/.test(raw)) return send(res, 410, { ok: false, error: "ancien chemin retiré (11/11/2026) : utiliser /api/admin/v1/…" });
    const p = v1 ? raw.replace(/^\/api\/admin\/v1/, "/api/admin") : raw;
    const withSha = (obj, file) => (v1 && obj && obj.ok !== false ? { ...obj, sha: fileSha(file) } : obj);
    if (req.method === "GET" && p === "/api/admin/health") return send(res, 200, { ok: true, app: APP || "local", live: LIVE, visibilityVersion: 1, lexiqueVersion: 2, lexiqueNotices: lexique.liveIds().length, restaurantsVersion: 1, ...(v1 ? { apiVersion: 1 } : {}) });
    if ((req.method === "GET" || req.method === "HEAD") && publicRoute(url.pathname)) {
      const page = publicResponse(HTML, url.pathname, publicVisibility, url.search);
      const pilot = url.pathname.match(/^\/r\/(creme-brulee|tagliatelles-carbonara)\/$/);
      if (page.status === 200 && pilot) page.body = lexique.project(page.body, pilot[1]);
      if (page.status === 200) { // ETag faible (nginx gzip affaiblit les ETag forts) → 304 si inchangé
        const etag = 'W/"' + createHash("sha1").update(page.body).digest("hex").slice(0, 20) + '"';
        page.headers = { ...page.headers, ETag: etag };
        if (String(req.headers["if-none-match"] || "").split(/\s*,\s*/).includes(etag)) { res.writeHead(304, page.headers); return res.end(); }
      }
      res.writeHead(page.status, page.headers); return res.end(req.method === "HEAD" ? "" : page.body);
    }
    if (!auth(req)) return send(res, 401, { ok: false, error: "non autorisé" });

    if (await proxyLegacyAdmin(req, res, {
      p, url, raw, v1, send, readJson,
      htmlDir: HTML, restoDir: process.env.RESTAURANTS_HTML || path.join(path.dirname(HTML), "restaurants"),
      live: LIVE, yaml, prefixText, paths: { BASE_PATH, RESTO_PATH, SITE_URL, prefixText },
      RD, RR, validateRecipeV2, ...REGEN_DIRS,
    })) return;

    if (req.method === "GET" && p === "/api/admin/lexique") {
      return send(res, 200, {
        ok: true,
        notices: lexique.list(url.searchParams.get("q") || ""),
        trash: lexique.listTrash(),
        scope: "Lexique préprod (volume Fly). Export Obsidian manuel ; écriture NAS désactivée par défaut.",
        obsidian: { nasWriteEnabled: false, path: "Cuisine/Lexique/<id>.md" },
      });
    }
    if (req.method === "POST" && p === "/api/admin/lexique") {
      const b = await readJson(req, 64 * 1024);
      if (b.action === "create") return send(res, 200, { ok: true, notice: lexique.create(b) });
      return send(res, 400, { ok: false, error: "action invalide (create)" });
    }
    {
      const m = p.match(/^\/api\/admin\/lexique\/([a-z0-9-]+)(\/export|\/restore|\/push-obsidian)?$/);
      if (m && req.method === "GET" && (!m[2] || m[2] === "/export")) {
        return send(res, 200, m[2] === "/export" ? { ok: true, ...lexique.export(m[1]) } : { ok: true, notice: lexique.read(m[1]) });
      }
      if (m && req.method === "POST") {
        const b = await readJson(req, 64 * 1024);
        if (m[2] === "/restore") return send(res, 200, { ok: true, notice: lexique.restore(m[1]) });
        if (m[2] === "/push-obsidian") return send(res, 200, lexique.pushToObsidian(m[1]));
        if (b.action === "visibility") return send(res, 200, { ok: true, notice: lexique.setHidden(m[1], b.hidden, b.expectedSha) });
        if (b.action === "delete") return send(res, 200, lexique.remove(m[1], b.expectedSha));
        if (b.action === "import-markdown") return send(res, 200, { ok: true, notice: lexique.importMarkdown(m[1], b.markdown, { expectedSha: b.expectedSha }) });
        return send(res, 200, { ok: true, notice: lexique.save(m[1], b) });
      }
    }

    if (req.method === "GET" && p === "/api/admin/meta") {
      return send(res, 200, adminMeta());
    }

    if (req.method === "GET" && p === "/api/admin/recipes") {
      {
        const q = url.searchParams.get("q") || "";
        const recipes = listRecipes(q);
        // Une seule passe YAML au chargement initial (q vide) ; total = longueur filtrée sinon 2e passe.
        const total = q ? listRecipes("").length : recipes.length;
        return send(res, 200, { ok: true, recipes, total, trash: listRecipeTrash() });
      }
    }
    {
      const mRest = p.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)\/restore$/);
      if (mRest && req.method === "POST") {
        await readJson(req);
        return send(res, 200, restoreRecipe(mRest[1]));
      }
      const m = p.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)$/);
      if (m && req.method === "GET") return send(res, 200, withSha({ ok: true, recipe: getRecipe(m[1]) }, recipeFile(m[1])));
      if (m && req.method === "POST") {
        const b = await readJson(req, 12 * 1024 * 1024);
        const a = b.action;
        if (a === "visibility") return send(res, 200, withSha(saveVisibility("recipe", m[1], b), recipeFile(m[1])));
        if (a === "photo") return send(res, 200, withSha(await saveRecipePhoto(m[1], b), recipeFile(m[1])));
        if (a === "delete") return send(res, 200, deleteRecipe(m[1], b));
        if (a == null || a === "" || a === "save") return send(res, 200, withSha(saveRecipe(m[1], b), recipeFile(m[1])));
        return send(res, 400, { ok: false, error: "action inconnue (save, photo, visibility, delete)" });
      }
    }

    if (req.method === "GET" && p === "/api/admin/materiel") {
      return send(res, 200, { ok: true, materiel: listMateriel() });
    }
    if (req.method === "POST" && p === "/api/admin/materiel/image-candidates") {
      const b = await readJson(req, 8 * 1024);
      return send(res, 200, await imageCandidates(b && b.url));
    }
    {
      const m = p.match(/^\/api\/admin\/materiel\/([a-z0-9-]+)$/);
      if (m && req.method === "GET") return send(res, 200, withSha({ ok: true, fiche: getMateriel(m[1]) }, materielFile(m[1])));
      if (m && req.method === "POST") {
        const b = await readJson(req, 12 * 1024 * 1024);
        if (b.action === "visibility") return send(res, 200, withSha(saveVisibility("materiel", m[1], b), materielFile(m[1])));
        const r = await saveMateriel(m[1], b);
        return send(res, 200, withSha(r, materielFile(r.id || m[1])));
      }
    }
    if (req.method === "POST" && p === "/api/admin/materiel") {
      const b = await readJson(req, 12 * 1024 * 1024);
      const r = await saveMateriel("new", { ...b, action: "create" });
      return send(res, 200, withSha(r, materielFile(r.id)));
    }
    // ---------- Restaurants (contrat : docs/admin-restaurants.md) ----------
    if (req.method === "GET" && p === "/api/admin/restaurants") {
      return send(res, 200, { ok: true, restaurants: restos.list(), trash: restos.listTrash(), categories: RD.CATEGORIES.map(([key, label, singulier]) => ({ key, label, singulier })), blockTypes: RD.BLOCK_TYPES, limits: RD.LIMITS, schema: RD.SCHEMA });
    }
    // R2 : écritures restaurants hors v1 refusées en mode back (elles écriraient le volume local, plus la source).
    if (writesToBack() && req.method === "POST" && /^\/api\/admin\/restaurants(\/|$)/.test(p)) return send(res, 410, { ok: false, error: "écritures restaurants : /api/v1/admin/restaurants (back)" });
    if (req.method === "POST" && p === "/api/admin/restaurants") {
      const b = await readJson(req, 12 * 1024 * 1024); // image data URL (8 Mo décodés max, vérifié par parseDataUrlImage)
      if (b.action !== "create") return send(res, 400, { ok: false, error: "action invalide (create)" });
      return send(res, 200, withSha(await restos.create(b, parseDataUrlImage), restos.file(String(b.slug || "").trim())));
    }
    {
      const mRest = p.match(/^\/api\/admin\/restaurants\/([a-z0-9-]+)\/restore$/);
      if (mRest && req.method === "POST") {
        await readJson(req);
        return send(res, 200, await restos.restore(mRest[1]));
      }
      const m = p.match(/^\/api\/admin\/restaurants\/([a-z0-9-]+)$/);
      if (m && req.method === "GET") { const r = restos.read(m[1]); return send(res, 200, { ok: true, restaurant: r.data, sha: r.sha, url: u(`/restaurant/${m[1]}/`) }); }
      if (m && req.method === "POST") {
        const b = await readJson(req, 12 * 1024 * 1024);
        const a = String(b.action || "save");
        const shaOut = (o) => (o.sha ? withSha(o, restos.file(m[1])) : o); // library : pas de sha (fiche inchangée)
        if (a === "photo") return send(res, 200, shaOut(await restos.photo(m[1], b, parseDataUrlImage)));
        if (a === "save") return send(res, 200, shaOut(await restos.save(m[1], b)));
        if (a === "delete") return send(res, 200, await restos.remove(m[1], b.expectedSha));
        if (/^blocks?(-add|-update|-delete|-move|-order)?$/.test(a)) return send(res, 200, shaOut(await restos.blocks(m[1], { ...b, action: a })));
        return send(res, 400, { ok: false, error: "action inconnue (save, block-add, block-update, block-delete, block-move, blocks-order, blocks, photo, delete)" });
      }
    }
    if (req.method === "POST" && p === "/api/admin/reapply") {
      return send(res, 200, { ok: true, ...reapplyAll() });
    }
    return send(res, 404, { ok: false, error: "introuvable" });
  } catch (e) {
    console.error("[admin-api]", e?.message);
    send(res, e.status || 500, { ok: false, error: e.message || "Erreur serveur" });
  }
});
server.listen(PORT, "127.0.0.1", () => console.log(`[admin-api] prêt sur 127.0.0.1:${PORT}`));
