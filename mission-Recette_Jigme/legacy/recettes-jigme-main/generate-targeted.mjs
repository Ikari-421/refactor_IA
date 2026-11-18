// Reconstruction ciblée : même génération que build.mjs (generate-pages.mjs), une page à la fois.
// Ne touche pas au NAS. Sur Fly, playwright peut être absent : le HTML pré-SSR est tout de même écrit.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as G from "./generate-pages.mjs";
import { stepName } from "./howto-name.mjs";
import { checkPage, relatedTargets, lowInbound } from "./seo-checks.mjs";
import * as IV from "./image-variants.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

async function resolveModule(cands) {
  for (const p of cands) {
    try {
      if (p.startsWith("file:") || p.startsWith("/")) {
        if (p.startsWith("/") && !fs.existsSync(p)) continue;
        return await import(p.startsWith("file:") ? p : pathToFileURL(p).href);
      }
      return await import(p);
    } catch { /* next */ }
  }
  return null;
}

export async function loadSharp() {
  const m = await resolveModule(["sharp"]);
  if (m) return m.default || m;
  // Image : sharp est installé dans /opt/hp (à côté de l'API admin), pas dans /opt.
  for (const dir of [path.join(here, "hp"), "/opt/hp"]) { try { return createRequire(path.join(dir, "package.json"))("sharp"); } catch { /* suivant */ } }
  return null;
}

function findRoot(opts) {
  if (opts.root) return path.resolve(opts.root);
  if (fs.existsSync(path.join(here, "build.mjs"))) return here;
  if (fs.existsSync("/opt/recettes-content")) return "/opt/recettes-content";
  return process.cwd();
}

import { makeAdaptPanelHTML, nrm, esc, norm, emoji, altOf, makeTileImg, applyDates, loadMateriel, loadRecipes, makeRelated, descOf, reallyVegan, conservationHtml, STOP, EQ_GENERIC_ALL, MANIFEST_FILE } from "./recipes-pipeline.mjs";

const AMAZON_DISCLAIMER = "En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises";
const HEART = '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h11a1 1 0 0 1 1 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 0 1 1-1z"/></svg>';

async function titleLum(url, srcRoot, sharp) {
  if (!url || !url.startsWith("/img/") || !sharp) return null;
  const f = path.join(srcRoot, url.replace(/^\//, ""));
  if (!fs.existsSync(f)) return null;
  const m = await sharp(f).metadata();
  const { data } = await sharp(f).extract({ left: Math.round(m.width * .25), top: Math.round(m.height * .33), width: Math.round(m.width * .5), height: Math.round(m.height * .29) }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const lin = c => { c /= 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; };
  let s = 0; for (let i = 0; i < data.length; i += 3) s += .2126 * lin(data[i]) + .7152 * lin(data[i + 1]) + .0722 * lin(data[i + 2]);
  return s / (data.length / 3);
}

function readJson(file, fb) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : fb;
}

// lastmod de l'accueil dans le sitemap servi : la régénération ciblée garde la date du build complet.
function sitemapToday(publicDir, home) {
  const f = path.join(publicDir, "sitemap.xml");
  if (!fs.existsSync(f)) return null;
  const m = fs.readFileSync(f, "utf8").match(new RegExp("<loc>" + home.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "/</loc><lastmod>(\\d{4}-\\d{2}-\\d{2})</lastmod>"));
  return m ? m[1] : null;
}

function existsPub(publicDir, u) {
  return fs.existsSync(path.join(publicDir, String(u).replace(/^\//, "")));
}

export function citingRecipeSlugs(recipes, { kind, id, label, aliases = [] }) {
  const slugs = [];
  const names = new Set([label, id, ...aliases].filter(Boolean).map(nrm));
  for (const r of recipes) {
    let hit = false;
    if (kind === "materiel") {
      const meta = r.equipment_meta || {};
      const recos = r.equipment_recos || {};
      for (const k of [...Object.keys(meta), ...Object.keys(recos)]) if (names.has(nrm(k))) hit = true;
      const raw = JSON.stringify({ e: r.equipment, recos, meta, refs: r.equipment_refs });
      if (raw.includes(id)) hit = true;
    }
    if (kind === "lexique") {
      if (r.lexique && r.lexique[id]) hit = true;
      if (r.lexique_local) {
        for (const entries of Object.values(r.lexique_local)) if (entries && entries[id]) hit = true;
      }
      const blob = JSON.stringify(r.variants || {});
      if (blob.includes("[[" + id) || blob.includes(id + "|")) hit = true;
    }
    if (hit) slugs.push(r.slug);
  }
  return slugs;
}

export async function createTargetedContext(opts = {}) {
  const root = findRoot(opts);
  const srcDir = opts.srcDir || (fs.existsSync(path.join(root, "src")) ? path.join(root, "src") : path.join(here, "src"));
  const publicDir = opts.publicDir || (fs.existsSync(path.join(root, "dist", "cuisine")) ? path.join(root, "dist", "cuisine") : path.join(root, "dist"));
  const restoDir = opts.restoDir || (fs.existsSync(path.join(root, "dist", "restaurants")) ? path.join(root, "dist", "restaurants") : path.join(publicDir, "restaurant"));
  const dataDir = opts.dataDir || (opts.live && fs.existsSync(path.join(opts.live, "data")) ? path.join(opts.live, "data") : path.join(root, "data"));
  const materielDir = opts.materielDir || (opts.live && fs.existsSync(path.join(opts.live, "materiel")) ? path.join(opts.live, "materiel") : path.join(root, "materiel"));
  const restaurantsDir = opts.restaurantsDir || (opts.live && fs.existsSync(path.join(opts.live, "restaurants")) ? path.join(opts.live, "restaurants") : path.join(root, "restaurants"));
  const hpDir = opts.hpDir || [path.join(here, "honeypot"), path.join(here, "hp"), "/opt/hp", path.join(root, "honeypot")].find(d => fs.existsSync(d));
  const yamlMod = opts.yaml || (await resolveModule([path.join(hpDir || "", "vendor/js-yaml.mjs"), path.join(here, "honeypot/vendor/js-yaml.mjs")])).default;
  const RD = opts.RD || (await resolveModule([path.join(hpDir || "", "restaurants-domain.mjs"), path.join(here, "honeypot/restaurants-domain.mjs")]));
  const RR = opts.RR || (await resolveModule([path.join(hpDir || "", "restaurants-render.mjs"), path.join(here, "honeypot/restaurants-render.mjs")]));
  const paths = opts.paths || (await resolveModule([path.join(hpDir || "", "paths.mjs"), path.join(here, "honeypot/paths.mjs")]));
  const { BASE_PATH, RESTO_PATH, SITE_URL, prefixText } = paths;
  const validateRecipeV2 = opts.validateRecipeV2 || (await resolveModule([path.join(hpDir || "", "recette-schema.mjs"), path.join(here, "honeypot/recette-schema.mjs")])).validateRecipeV2;
  const L = opts.L || require(path.join(srcDir, "logic.js"));
  const sharp = opts.sharp || await loadSharp();
  // v232 : sans sharp, dimensions et luminances seraient des valeurs par défaut (pages ≠ build complet) → on refuse.
  if (!sharp && opts.requireSharp !== false) throw Object.assign(new Error("régénération ciblée : sharp introuvable (pages non conformes au build)"), { status: 503 });
  const adaptPanelHTML = makeAdaptPanelHTML(L);

  const OV = readJson(path.join(root, "overrides.json"), readJson(path.join(here, "overrides.json"), {}));
  const SX = readJson(path.join(root, "sync-extra.json"), {});
  const CUIS = readJson(path.join(srcDir, "cuisines.json"), {});
  const TITRES = readJson(path.join(srcDir, "titres.json"), {});
  const CATSUR = readJson(path.join(srcDir, "categories-surcharge.json"), readJson(path.join(root, "categories-surcharge.json"), {}));
  const VERBES = (readJson(path.join(srcDir, "verbes.json"), { formes: {} })).formes;
  const LECT = readJson(path.join(srcDir, "lectures.json"), { lexique: [], fiches: {} });
  const PJ = readJson(path.join(root, "photos-jigme.json"), {});
  // Manifeste du build (box) : photos NAS / photos-jigme / luminance calculées sur les images sources, absentes de Fly.
  const MANIFEST = opts.manifest || readJson(path.join(root, MANIFEST_FILE), readJson(path.join(here, MANIFEST_FILE), {}));
  const known = new Set(MANIFEST.slugs || []);
  const EQ_CREDITS = readJson(path.join(srcDir, "img/eq/credits.json"), null) || MANIFEST.eqCredits || readJson(path.join(publicDir, "img/eq/credits.json"), {});
  const eqDir = fs.existsSync(path.join(srcDir, "img/eq")) ? path.join(srcDir, "img/eq") : path.join(publicDir, "img/eq");
  const EQ_GENERIC = EQ_GENERIC_ALL.filter(([, k]) => fs.existsSync(path.join(eqDir, k + ".webp")));
  const MAT = loadMateriel(materielDir, yamlMod);
  // Même code que build.mjs (recipes-pipeline.mjs) ; seuls les faits « fichiers de la box » viennent du manifeste.
  const evSlugs = new Set(opts.recipes || []);
  const { recipes } = loadRecipes({ dataDir, MAT, keepSansPhoto: s => evSlugs.has(s), log: (...a) => console.log(...a), yaml: yamlMod, validateRecipeV2, L, OV, PJ, SX, TITRES, CATSUR, LECT, EQ_CREDITS, EQ_GENERIC,
    nasPhoto: (nasF, r) => (known.has(r.slug) ? !!(MANIFEST.nasOk || {})[r.slug] : (fs.existsSync(path.join(root, nasF)) || existsPub(publicDir, "/img/p/" + r.slug + ".webp"))) ? {} : null,
    pjPhoto: r => ({ big: known.has(r.slug) ? !!(MANIFEST.pjBig || {})[r.slug] : existsPub(publicDir, `/img/s/${r.slug}-2x3.jpg`) }),
    recoImageExists: id => fs.existsSync(path.join(srcDir, "img/eq", id + ".webp")) || existsPub(publicDir, "/img/eq/" + id + ".webp") });

  // v235 : originaux des photos envoyées au back (cache de la source back, img/p/<slug>.webp), comme src/img du build.
  const photoRoot = opts.photoRoot || null;
  const srcRootForLum = fs.existsSync(path.join(srcDir, "img")) ? srcDir : publicDir;
  const origOf = u => photoRoot && u && u.startsWith("/img/") && fs.existsSync(path.join(photoRoot, u.slice(1))) ? path.join(photoRoot, u.slice(1)) : null;
  const sha1Pub = u => { const f = path.join(publicDir, String(u).replace(/^\//, "")); return fs.existsSync(f) ? crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex") : null; };
  for (const r of recipes) {
    const m = (MANIFEST.titleLum || {})[r.slug];
    if (m && m.url === r.image?.url && m.sha1 && m.sha1 === sha1Pub(m.url)) r.title_lum = m.lum;
    else r.title_lum = await titleLum(r.image?.url, origOf(r.image?.url) ? photoRoot : srcRootForLum, sharp);
    r.hero_tone = r.title_lum != null && r.title_lum > 0.4 ? "light" : "dark";
  }

  const cardsOrder = applyDates(recipes, srcDir);

  const THUMB = {}, THUMB360 = {}, AVIF = {}, SOC = {}, DIM = {};
  for (const r of recipes) {
    const u = r.image?.url; if (!u || !u.startsWith("/img/") || !u.endsWith(".webp")) continue;
    const sl = r.slug;
    const tu = "/img/t" + u.slice(4); if (existsPub(publicDir, tu)) THUMB[u] = tu;
    const ts = "/img/t360" + u.slice(4); if (existsPub(publicDir, ts)) THUMB360[u] = ts;
    const W = {};
    if (existsPub(publicDir, `/img/a/360/${sl}.avif`)) W[360] = `/img/a/360/${sl}.avif`;
    if (existsPub(publicDir, `/img/a/720/${sl}.avif`)) W[720] = `/img/a/720/${sl}.avif`;
    if (existsPub(publicDir, `/img/a/h640/${sl}.avif`)) W.h640 = `/img/a/h640/${sl}.avif`;
    if (existsPub(publicDir, `/img/a/h1040/${sl}.avif`)) W.h1040 = `/img/a/h1040/${sl}.avif`;
    if (existsPub(publicDir, `/img/w800/${sl}.webp`)) W.w800 = `/img/w800/${sl}.webp`;
    if (Object.keys(W).length) AVIF[u] = W;
    const s11 = `/img/s/${sl}-1x1.webp`, s43 = `/img/s/${sl}-4x3.webp`, s169 = `/img/s/${sl}-16x9.jpg`, pin = `/img/s/${sl}-2x3.jpg`;
    if (existsPub(publicDir, s11) && existsPub(publicDir, s43) && existsPub(publicDir, s169)) {
      SOC[sl] = { ld: [s11, s43, s169], og: { url: s169, w: 1200, h: 675, type: "image/jpeg" }, pin: existsPub(publicDir, pin) ? { url: pin, w: 800, h: 1200, type: "image/jpeg" } : undefined };
    }
    const srcImg = fs.existsSync(path.join(srcDir, u.replace(/^\//, ""))) ? path.join(srcDir, u.replace(/^\//, "")) : origOf(u) || path.join(publicDir, u.replace(/^\//, ""));
    if (sharp && fs.existsSync(srcImg)) {
      const md = await sharp(srcImg).metadata();
      DIM[u] = { w: md.width, h: md.height };
    }
  }

  const tileImg = makeTileImg({ THUMB, THUMB360, AVIF });
  const relatedHtml = makeRelated(recipes, L);

  // Asset hashes and page() — identical construction to build.mjs, sans incrément de version
  const ASSETS = ["logic.js", "adapt-ui.js", "app.js", "share.js", "home.js", "home-random.js", "site-tabs.js", "home-ui.css", "style.css", "footer.js", "footer.css", "features.js", "features.css", "favoris.js", "religion.js", "desktop.css", "restaurants.js", "restaurants.css"];
  const H = {};
  // Les ?v= du build portent le hash du fichier AVANT prefixText. On les relit depuis une page existante.
  const samplePages = ["index.html", "favoris/index.html"].map(f => path.join(publicDir, f));
  const rDir = path.join(publicDir, "r");
  if (fs.existsSync(rDir)) {
    for (const d of fs.readdirSync(rDir).slice(0, 8)) {
      const f = path.join(rDir, d, "index.html");
      if (fs.existsSync(f)) samplePages.push(f);
    }
  }
  for (const samplePage of samplePages) {
    if (!fs.existsSync(samplePage)) continue;
    const html = fs.readFileSync(samplePage, "utf8");
    for (const f of ASSETS) {
      if (H[f]) continue;
      const m = html.match(new RegExp(f.replace(/[.]/g, "\\.") + "\\?v=([0-9a-f]{8,})"));
      if (m) H[f] = m[1];
    }
  }
  for (const f of ASSETS) {
    if (H[f]) continue;
    const fp = path.join(publicDir, f);
    if (fs.existsSync(fp)) H[f] = crypto.createHash("sha1").update(fs.readFileSync(fp)).digest("hex").slice(0, 10);
  }
  const v = f => `/${f}?v=${H[f] || "0"}`;
  const bannerSrc = fs.existsSync(path.join(srcDir, "img/banniere-hero.webp")) ? path.join(srcDir, "img") : path.join(publicDir, "img");
  const BH = {};
  for (const n of ["banniere-recettes.webp", "banniere-recettes-800.webp", "banniere-recettes-2400.webp", "banniere-hero.webp", "banniere-hero-800.webp"]) {
    const src = path.join(bannerSrc, n);
    if (fs.existsSync(src) && !src.includes(".hashed-skip")) {
      const h = crypto.createHash("sha256").update(fs.readFileSync(src)).digest("hex").slice(0, 10);
      BH["/img/" + n] = "/img/" + n.replace(".webp", "." + h + ".webp");
    } else {
      const pref = n.replace(".webp", ".");
      const dir = path.join(publicDir, "img");
      if (fs.existsSync(dir)) {
        const hit = fs.readdirSync(dir).find(x => x.startsWith(pref) && x.endsWith(".webp") && /\.[0-9a-f]{10}\.webp$/.test(x));
        if (hit) BH["/img/" + n] = "/img/" + hit;
      }
    }
  }
  const fontsCss = fs.existsSync(path.join(srcDir, "fonts/fonts.css")) ? fs.readFileSync(path.join(srcDir, "fonts/fonts.css"), "utf8") : "";
  const critCss = fs.existsSync(path.join(srcDir, "critical.css")) ? fs.readFileSync(path.join(srcDir, "critical.css"), "utf8") : "";
  const homeUi = fs.existsSync(path.join(srcDir, "home-ui.css")) ? fs.readFileSync(path.join(srcDir, "home-ui.css"), "utf8") : "";
  const CRIT = (fontsCss + critCss + homeUi).replace(/\s+/g, " ").replace(/\/img\/banniere-(recettes|hero)(-800|-2400)?\.webp/g, m => BH[m] || m);
  const PROD = "https://recettes.jigme.fr";
  const seoHead = m => !m ? "" : `<meta name="description" content="${esc(m.desc)}"><link rel="canonical" href="${m.url}"><meta property="og:type" content="${m.type || "website"}"><meta property="og:site_name" content="Les recettes de Jigmé"><meta property="og:locale" content="fr_FR"><meta property="og:title" content="${esc(m.title)}"><meta property="og:description" content="${esc(m.desc)}"><meta property="og:url" content="${m.url}">${m.og ? `<meta property="og:image" content="${esc(PROD + m.og.url)}"><meta property="og:image:width" content="${m.og.w}"><meta property="og:image:height" content="${m.og.h}"><meta property="og:image:type" content="${m.og.type}"><meta property="og:image:alt" content="${esc(m.alt || m.title)}">${m.pin ? `<meta property="og:image" content="${esc(PROD + m.pin.url)}"><meta property="og:image:width" content="${m.pin.w}"><meta property="og:image:height" content="${m.pin.h}"><meta property="og:image:type" content="${m.pin.type}">` : ""}` : ""}<meta name="twitter:card" content="${m.og ? "summary_large_image" : "summary"}"><meta name="twitter:title" content="${esc(m.title)}"><meta name="twitter:description" content="${esc(m.desc)}">${m.og ? `<meta name="twitter:image" content="${esc(PROD + m.og.url)}"><meta name="twitter:image:alt" content="${esc(m.alt || m.title)}">` : ""}`;
  const FOOTER_LOADER = `(function(){var e=document.getElementById('lb-footer');if(!e)return;var d=0,l=function(){if(d)return;d=1;var s=document.createElement('script');s.src='${v("footer.js")}';document.body.appendChild(s)};var g=function(){if('IntersectionObserver'in window){new IntersectionObserver(function(a,o){if(a[0].isIntersecting){o.disconnect();l()}},{rootMargin:'800px'}).observe(e)}else{setTimeout(l,2500)}},w=function(){setTimeout(function(){window.requestIdleCallback?requestIdleCallback(g,{timeout:1500}):g()},300)};if(document.readyState==='complete')w();else addEventListener('load',w,{once:true})})()`;
  // Comme build.mjs : si document.prerendering, classes + timer 1300 ms attendus prerenderingchange.
  const BIO_JS = `<script>(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;function whenVisible(fn){if(document.prerendering){document.addEventListener('prerenderingchange',fn,{once:true})}else fn()}if(location.hash==='#depuis-bio'){whenVisible(function(){d.classList.add('rj-bio','depuis-bio');function done(){if(!d.classList.contains('rj-bio'))return;d.classList.remove('rj-bio');try{history.replaceState(history.state,'',location.pathname+location.search)}catch(e){}}setTimeout(done,rm?0:1300)});return}if(rm)return;whenVisible(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0],st=history.state;if((n&&n.type==='back_forward')||(st&&typeof st.hY==='number'&&n&&n.type==='reload'))return}catch(e){}d.classList.add('rj-enter');setTimeout(function(){d.classList.remove('rj-enter')},1300)})})();</script>`;
  const TARGET = process.env.TARGET || "preprod";
  const IS_PROD = TARGET === "prod";
  const AUDIENCE_SCRIPT_URL = TARGET === "preprod"
    ? (process.env.AUDIENCE_SCRIPT_URL || process.env.CONTACT_BASE || process.env.LIENENBIO_URL || "https://preprod-lienenbio-jigme.fly.dev").replace(/\/+$/, "") + "/a.js"
    : "";
  const AUDIENCE_JS = AUDIENCE_SCRIPT_URL ? `<script src="${AUDIENCE_SCRIPT_URL}" defer></script>` : "";
  const nginx = [path.join(root, "nginx.conf"), path.join(here, "nginx.conf"), "/opt/nginx.conf"].find(f => fs.existsSync(f));
  const REDIR = nginx ? Object.fromEntries([...fs.readFileSync(nginx, "utf8").matchAll(new RegExp("\\^" + BASE_PATH + "/r/([a-z0-9-]+)/\\?\\$ \\{ return 301 " + BASE_PATH + "/r/([a-z0-9-]+)/", "g"))].map(m => [m[1], m[2]])) : {};
  const page = (title, body, scripts = "", cls = "", head = "", meta = null) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">${BIO_JS}<meta name="theme-color" content="#ffffff"><meta name="color-scheme" content="light"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="preload" href="/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/playfair-latin.woff2" as="font" type="font/woff2" crossorigin>${head}${TARGET === "prod" ? "" : '<meta name="robots" content="noindex, nofollow"'}><title>${esc(title)}</title>${seoHead(meta)}<style>${CRIT}</style><link rel="stylesheet" href="${v("style.css")}"><link rel="stylesheet" href="${v("features.css")}"><link rel="stylesheet" href="${v("desktop.css")}" media="(min-width:700px)"><link rel="stylesheet" href="${v("home-ui.css")}"><script>window.RJ_BASE=${JSON.stringify(BASE_PATH)};window.RJ_REDIR=${JSON.stringify(REDIR)}</script>${AUDIENCE_JS}</head><body class="${cls}"><div class="edge-overlay" aria-hidden="true"></div>${(body.match(/^<a class="back"[^]*?<\/a>/) || [""])[0]}<div class="shell"><div class="shell-card">${body.replace(/^<a class="back"[^]*?<\/a>/, "")}<link rel="stylesheet" href="${v("footer.css")}"><div id="lb-footer"></div><p class="rj-legal"><a href="${SITE_URL}/mentions-legales">Mentions légales</a><span aria-hidden="true">·</span><a href="${SITE_URL}/confidentialite">Politique de confidentialité</a></p></div></div>${scripts}<script src="${v("features.js")}" defer></script><script src="${v("site-tabs.js")}" defer></script><script>${FOOTER_LOADER}</script></body></html>`;

  // Version préprod : lire sans incrément (page déjà déployée ou juste bâtie)
  let PV = 21;
  const verFile = path.join(root, "preprod-version.txt");
  if (fs.existsSync(verFile)) PV = Number(fs.readFileSync(verFile, "utf8")) || 21;
  else {
    const idx = path.join(publicDir, "index.html");
    if (fs.existsSync(idx)) {
      const m = fs.readFileSync(idx, "utf8").match(/version de test · v(\d+)/);
      if (m) PV = Number(m[1]);
    }
  }
  const PRE_BAR = IS_PROD ? "" : `<div class="pre">Préprod — version de test · v${PV}</div>`;
  const LIENENBIO_PREPROD = "https://preprod-lienenbio-jigme.fly.dev";
  const CONTACT_BASE = (TARGET === "prod" ? (process.env.CONTACT_BASE || process.env.LIENENBIO_URL) : (process.env.CONTACT_BASE || process.env.LIENENBIO_URL || LIENENBIO_PREPROD)).replace(/\/+$/, "");
  const SITE_ORIGIN = TARGET === "prod" ? SITE_URL : "https://recettes-jigme-preprod.fly.dev";
  const SITE_BASE = SITE_ORIGIN + BASE_PATH;
  const CONTACT_URL = `${CONTACT_BASE}/contact`;
  const COQUILLE_MOTIF = "Coquille dans une recette";
  const coquilleMsg = (title, url) => `Bonjour,\nJ'ai trouvé une coquille dans la recette « ${title} » (${url}) :\n[expliquez la coquille simplement]`;
  const coquilleHref = (r, base = SITE_BASE) => `${CONTACT_URL}?${new URLSearchParams({ motif: COQUILLE_MOTIF, message: coquilleMsg(r.title, `${base}/r/${r.slug}/`) })}`;
  const BIO_BACK = (process.env.LIENENBIO_URL || (TARGET === "prod" ? "" : process.env.CONTACT_BASE || "https://preprod-lienenbio-jigme.fly.dev")).replace(/\/+$/, "") + "/";
  const BANNER = BH["/img/banniere-recettes.webp"], HERO = BH["/img/banniere-hero.webp"];
  const HERO_SET = `${BH["/img/banniere-hero-800.webp"]} 800w, ${HERO} 1200w`;
  const BANNER_SIZES = "(max-width:599px) calc(100vw - 32px), 456px";
  const WIDE_SET = `${BH["/img/banniere-recettes-800.webp"]} 800w, ${BANNER} 1200w, ${BH["/img/banniere-recettes-2400.webp"]} 2400w`, WIDE_SIZES = "min(calc(100vw - 80px), 1500px)";
  const BANNER_PIC = `<picture><source media="(min-width:700px)" srcset="${WIDE_SET}" sizes="${WIDE_SIZES}"><img class="bn-b" src="${HERO}" srcset="${HERO_SET}" sizes="${BANNER_SIZES}" width="1200" height="1333" alt="" decoding="sync" fetchpriority="high"></picture>`;
  const BANNER_PRELOAD = `<link rel="preload" as="image" media="(min-width:700px)" imagesrcset="${WIDE_SET}" imagesizes="${WIDE_SIZES}" type="image/webp" fetchpriority="high"><link rel="preload" as="image" media="(max-width:699px)" href="${HERO}" imagesrcset="${HERO_SET}" imagesizes="${BANNER_SIZES}" type="image/webp" fetchpriority="high">`;
  const HOME_DESC = "Plus de 200 recettes maison de Jigmé, sucrées et salées, avec versions végétarienne et végane, allergènes signalés et portions ajustables.";
  const firstSlug = cardsOrder.find(r => SOC[r.slug])?.slug;
  const sectionTabs = G.sectionTabs;
  const sharedHead = `<header class="home-head"><div class="home-banner" aria-hidden="true">${BANNER_PIC}</div><p class="bn-title" aria-hidden="true">Jigmé Cuisine</p><a class="bn-back" href="${BIO_BACK}"><span aria-hidden="true">←</span> Lien en bio</a><h1 class="display sr-only">Les recettes de Jigmé</h1>
  <div class="hb-field hsearch" id="search-wrap"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" enterkeyhint="search" placeholder="" data-ph="Une recette ? Un ingrédient ?" autocomplete="off" aria-label="Rechercher une recette ou un ingrédient"><button type="button" class="hb-x" id="search-x" aria-label="Effacer la recherche"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
 </header>`;
  const RS_OPTS = { thumb: u => (RR.thumbCandidates(u).find(t => existsPub(publicDir, t) || fs.existsSync(path.join(srcDir, t.replace(/^\//, "")))) || u) };
  const RS_CSS = `<link rel="stylesheet" href="${v("restaurants.css")}">`, RS_JS = `<script src="${v("restaurants.js")}" defer></script>`;

  const RESTOS = [];
  const sharpMeta = {};
  if (fs.existsSync(restaurantsDir)) {
    for (const f of fs.readdirSync(restaurantsDir).filter(x => x.endsWith(".md") && !x.startsWith("_"))) {
      const m = fs.readFileSync(path.join(restaurantsDir, f), "utf8").match(/^---\n([\s\S]*?)\n---/);
      if (!m) continue;
      const r = RD.cleanRestaurant(yamlMod.load(m[1]));
      RESTOS.push(r);
      const photoSrc = fs.existsSync(path.join(srcDir, String(r.photo || "").replace(/^\//, ""))) ? path.join(srcDir, String(r.photo).replace(/^\//, "")) : path.join(publicDir, String(r.photo || "").replace(/^\//, ""));
      if (sharp && r.photo && fs.existsSync(photoSrc)) sharpMeta[r.photo] = await sharp(photoSrc).metadata();
    }
  }
  const RESTO_REAL = RESTOS.filter(r => !r.hidden && !r.test).length;

  const ctx = {
    page, v, esc, recipes, cardsOrder, THUMB, THUMB360, AVIF, SOC, DIM, HEART, PRE_BAR,
    AMAZON_DISCLAIMER, VERBES, OV, PROD, SITE_URL, SITE_ORIGIN, altOf, conservationHtml,
    relatedHtml, descOf, reallyVegan, L, CUIS, STOP, stepName, adaptPanelHTML, norm, emoji,
    tileImg, coquilleHref, HERO, HERO_SET, BANNER_SIZES, today: sitemapToday(publicDir, SITE_URL + BASE_PATH) || MANIFEST.today || new Date().toISOString().slice(0, 10),
    sharp, origOf, AMAZON_DISCLAIMER_: AMAZON_DISCLAIMER,
    prefixText, RESTO_REAL, IS_PROD, RR, RD, RS_OPTS, RS_CSS, RS_JS, BANNER_PRELOAD, HOME_DESC,
    firstSlug, sharedHead, sectionTabs, RESTOS, sharpMeta, publicDir, restoDir, root, srcDir, dataDir,
    // v255 : rubrique Restaurants « En construction » (section du back, lue par rebuild-public.mjs ; null = contenu réel)
    CONSTRUCTION: opts.construction || null,
    BASE_PATH, RESTO_PATH, BANNER_PIC, BIO_BACK, homeRandomJs: fs.existsSync(path.join(publicDir, "home-random.js")) ? fs.readFileSync(path.join(publicDir, "home-random.js"), "utf8") : "",
  };
  return ctx;
}

function publishedOg(file, slug) {
  return fs.existsSync(file) && fs.readFileSync(file, "utf8").includes(`/img/s/${slug}-16x9.jpg`);
}

/** v235 : variantes de la photo (vignettes, recompression, AVIF, 800w, sociales, Pinterest) pour les fiches touchées dont
 *  l'original est disponible (photo envoyée au back). Mêmes réglages que build.mjs (image-variants.mjs). Met à jour le contexte. */
async function stageImages(ctx, slugs, stage) {
  const out = [];
  const { sharp } = ctx;
  for (const sl of slugs) {
    const r = ctx.recipes.find(x => x.slug === sl);
    const u = r?.image?.url;
    if (!u || !u.startsWith("/img/") || !u.endsWith(".webp")) continue;
    const src = ctx.origOf(u);
    if (!src || !sharp) continue;
    const put = async (url, fn) => { const f = path.join(stage, url.slice(1)); fs.mkdirSync(path.dirname(f), { recursive: true }); await fn(sharp(src)).toFile(f); out.push(url.slice(1)); return url; };
    const [t720, t360] = IV.thumbSpecs(u);
    ctx.THUMB[u] = await put(t720.url, t720.fn);
    ctx.THUMB360[u] = await put(t360.url, t360.fn);
    const md = await sharp(src).metadata();
    ctx.DIM[u] = { w: md.width, h: md.height };
    // photo servie : l'original, ou sa recompression si plus légère (build : cpSync src/img puis remplacement)
    const size0 = fs.statSync(src).size;
    let best = null;
    if (size0 > IV.RECOMP_MAX) for (const q of IV.RECOMP_QUALITIES) { const b = await IV.recompFn(q)(sharp(src)).toBuffer(); best = b; if (b.length <= IV.RECOMP_MAX) break; }
    const pf = path.join(stage, u.slice(1)); fs.mkdirSync(path.dirname(pf), { recursive: true });
    if (best && best.length < size0) fs.writeFileSync(pf, best); else fs.copyFileSync(src, pf);
    out.push(u.slice(1));
    const W = {};
    for (const s of IV.variantSpecs(sl, md)) W[s.key] = await put(s.url, s.fn);
    ctx.AVIF[u] = IV.avifOf(W);
    const pin = path.join(stage, IV.pinUrl(sl).slice(1)); fs.mkdirSync(path.dirname(pin), { recursive: true });
    await IV.pinToFile(sharp, src, pin); out.push(IV.pinUrl(sl).slice(1));
    ctx.SOC[sl] = IV.socOf(sl, W);
  }
  return out;
}

export async function generateTargeted(opts = {}) {
  // M1 : tous les slugs reçus sont validés avant toute lecture ou écriture (aucun chemin hors de r/, restaurants/, img/).
  for (const s of [...(opts.recipes || []), ...(opts.removeRecipes || []), ...(opts.restaurants || []), ...(opts.removeRestaurants || [])]) G.safeChildDir("/x", s);
  const ctx = opts.ctx || await createTargetedContext(opts);
  const tmp = opts.tmp || fs.mkdtempSync(path.join("/tmp", "rj-gen-"));
  ctx.outRoot = tmp;
  // v235 : fiche touchée dont la photo d'origine est disponible → mêmes variantes que le build (image-variants.mjs),
  // préparées hors du public ; elles ne sont installées qu'avec les pages, après SSR et contrôles SEO.
  const stage = path.join(tmp, ".images");
  const cleanup = () => { if (!opts.keepTmp) fs.rmSync(tmp, { recursive: true, force: true }); };
  const stagedImages = [];
  // Fiches pas encore en ligne (publiées dans le back mais refusées ou en attente) : leurs variantes sont aussi préparées,
  // sinon le premier événement suivant (autre fiche) les rendrait sans images sociales et serait refusé.
  const pending = ctx.recipes.filter(r => !(opts.recipes || []).includes(r.slug) && !fs.existsSync(path.join(ctx.publicDir, "r", r.slug, "index.html"))).map(r => r.slug);
  try { stagedImages.push(...await stageImages(ctx, [...(opts.recipes || []), ...pending], stage)); } catch (e) { cleanup(); throw e; }
  const firstBefore = ctx.firstSlug;
  ctx.firstSlug = ctx.cardsOrder.find(r => ctx.SOC[r.slug])?.slug;
  const written = [];
  const slugs = new Set(opts.recipes || []);
  const cats = new Set(opts.categories || []);
  if (opts.ctx && opts.construction !== undefined) opts.ctx.CONSTRUCTION = opts.construction || null;
  // v255 : toutes les pages restaurant (bascule « En construction »)
  const restos = new Set(opts.allRestaurants ? ctx.RESTOS.filter(r => !r.hidden).map(r => r.slug) : opts.restaurants || []);
  const lists = opts.lists !== false && (slugs.size || (opts.removeRecipes || []).length || opts.lists === true);
  // Fiches touchées par ricochet : toute fiche dont le bloc « Recettes proches » ou les données rj-data (ordre alpha, titres liés…)
  // servis diffèrent de ce que le build complet écrirait est refaite aussi (même writeRecipePage + SSR). Fiche ajoutée/retirée/renommée
  // → souvent beaucoup de fiches ; simple modification → aucune en général.
  const related = [];
  if (lists && opts.related !== false) {
    const fin = { imgRoot: ctx.publicDir, prefixText: ctx.prefixText, cache: {} };
    for (const r of ctx.recipes) {
      if (slugs.has(r.slug)) continue;
      const f = path.join(ctx.publicDir, "r", r.slug, "index.html");
      if (!fs.existsSync(f)) { related.push(r.slug); continue; }
      const cur = fs.readFileSync(f, "utf8");
      if (!cur.includes(G.finalizeText(ctx.relatedHtml(r), fin)) || !cur.includes(G.finalizeText(G.recipeDataTag(r, ctx), fin))) related.push(r.slug);
    }
  }
  for (const s of related) slugs.add(s);
  const result = { written: [], removed: [], slugs: [...slugs], related, categories: [...cats], restaurants: [...restos], ssr: null };

  if (opts.removeRecipes) {
    for (const slug of opts.removeRecipes) {
      if (G.removeRecipePage(slug, ctx.publicDir)) result.removed.push("r/" + slug);
    }
  }
  if (opts.removeRestaurants) {
    for (const slug of opts.removeRestaurants) {
      if (G.removeRestaurantPage(slug, ctx.restoDir)) result.removed.push("restaurants/" + slug);
    }
  }

  for (const slug of slugs) {
    const r = ctx.recipes.find(x => x.slug === slug);
    if (!r) continue;
    written.push(G.writeRecipePage(r, ctx));
    cats.add(G.catDirOf(r.category, ctx.norm));
  }
  // Listes : mêmes fonctions et mêmes données que le build complet (idx, sitemap, signets, 3 catégories), jamais de rustine.
  // Toutes les fiches publiées sont dans ctx.recipes (cache back synchronisé) : une catégorie quittée ou une fiche retirée suit aussi.
  if (lists) written.push(G.writeHome(ctx), G.writeIdx(ctx), G.writeCuisineSitemap(ctx), G.writeFavoris(ctx), ...G.writeCategoryPages(ctx));

  for (const slug of restos) {
    const r = ctx.RESTOS.find(x => x.slug === slug && !x.hidden);
    if (r) written.push(G.writeRestaurantPage(r, ctx));
  }
  // v235 : l'og:image de l'accueil, des Liens affiliés et de Restaurants suit la fiche la plus récente avec photo (firstSlug, comme le build).
  const sectionStale = lists && ctx.firstSlug && (ctx.firstSlug !== firstBefore || !publishedOg(path.join(ctx.publicDir, "affilies", "index.html"), ctx.firstSlug));
  if (sectionStale) written.push(G.writeSectionPage("affilies", "Liens affiliés", G.affiliesHtml({ esc: ctx.esc, AMAZON_DISCLAIMER: ctx.AMAZON_DISCLAIMER_ }), ctx));
  if (opts.restaurantListing || restos.size || opts.removeRestaurants || sectionStale) written.push(G.writeRestaurantListing(ctx), ...G.writeRestaurantCategoryPages(ctx));
  if (opts.restaurantSitemap || restos.size || opts.removeRestaurants) written.push(G.writeRestaurantSitemap(ctx));

  function linkAssets() {
    for (const name of fs.readdirSync(ctx.publicDir)) {
      const src = path.join(ctx.publicDir, name);
      const dest = path.join(tmp, name);
      if (name === "r" || name === "c" || name === "idx.json" || name === "sitemap.xml" || name === "favoris" || name === "index.html") continue;
      if (fs.existsSync(dest)) continue;
      try { fs.symlinkSync(src, dest); } catch { /* ignore */ }
    }
  }
  linkAssets();
  const recipeSlugs = [...slugs].filter(s => fs.existsSync(path.join(tmp, "r", s, "index.html")));
  // SSR (ingrédients, étapes, JSON-LD recalculé) : même ssr.mjs que le build. ssr: "require" (défaut) → échec = rien n'est publié.
  const ssrMode = opts.ssr === false ? "off" : opts.ssr === "auto" ? "auto" : "require";
  if (recipeSlugs.length && ssrMode !== "off") {
    try {
      const { ssrPages } = await import("./ssr.mjs");
      result.ssr = await ssrPages({ dist: tmp, slugs: recipeSlugs });
    } catch (e) {
      result.ssr = { skipped: true, reason: e.message };
    }
    if (ssrMode === "require" && (!result.ssr || result.ssr.skipped || result.ssr.n !== recipeSlugs.length)) {
      cleanup();
      throw Object.assign(new Error("régénération ciblée : SSR impossible (" + (result.ssr?.reason || "pages non rendues") + "), rien n'est publié"), { status: 503 });
    }
  }

  // v235 : mêmes contrôles SEO que le build complet (seo-checks.mjs), avant toute écriture publique. Écart → rien n'est publié,
  // l'ancienne version reste en ligne (fiche déjà publiée comme nouvelle fiche).
  if (opts.seo !== false) {
    const E = {}; const bad = (k, s) => (E[k] ??= []).push(s);
    const logical = new Set(["", "c/sale", "c/sucre", "c/boissons"]);
    const touched = new Set();
    for (const f of written) {
      const rel = path.relative(tmp, f).replaceAll("\\", "/");
      const m = rel.match(/^(r\/[a-z0-9-]+|c\/[a-z]+)\/index\.html$/) || (rel === "index.html" ? [rel, ""] : null);
      if (!m || !(m[1].startsWith("r/") || logical.has(m[1]))) continue;
      checkPage(m[1], fs.readFileSync(f, "utf8"), bad);
      if (m[1].startsWith("r/")) touched.add(m[1].slice(2));
    }
    if (touched.size) {
      const inb = Object.fromEntries(ctx.recipes.map(r => [r.slug, new Set()]));
      for (const r of ctx.recipes) {
        const ft = path.join(tmp, "r", r.slug, "index.html"), fp = path.join(ctx.publicDir, "r", r.slug, "index.html");
        const f = fs.existsSync(ft) ? ft : fs.existsSync(fp) ? fp : null; if (!f) continue;
        for (const s of relatedTargets(fs.readFileSync(f, "utf8"))) inb[s]?.add(r.slug);
      }
      lowInbound(inb, bad, touched);
    }
    result.seo = Object.keys(E).length ? E : null;
    if (result.seo) {
      cleanup();
      throw Object.assign(new Error("régénération ciblée : contrôles SEO en échec, rien n'est publié"), { status: 422, code: "seo", details: E });
    }
  }

  G.finalizeLogicalFiles(written, { imgRoot: [stage, ctx.publicDir], prefix: true, prefixText: ctx.prefixText, restoReal: ctx.RESTO_REAL });

  const mapping = {};
  // Images d'abord : une page installée ne référence jamais une image absente.
  for (const rel of stagedImages) mapping[".images/" + rel] = path.join(ctx.publicDir, rel);
  for (const f of written) {
    const rel = path.relative(tmp, f).replaceAll("\\", "/");
    if (rel.startsWith("restaurant/")) mapping[rel] = path.join(ctx.restoDir, rel.slice("restaurant/".length));
    else mapping[rel] = path.join(ctx.publicDir, rel);
  }
  result.written = G.installToPublic(tmp, mapping);
  result.images = stagedImages;
  // v235 : fiche retirée dont la photo vient du back (original en cache, donc recalculable) → ses variantes quittent aussi le public,
  // comme dans un build complet. Les photos NAS / photos-jigme (non recalculables sur Fly) ne sont jamais effacées.
  for (const slug of opts.removeRecipes || []) {
    const u = `/img/p/${slug}.webp`;
    if (!ctx.origOf(u)) continue;
    for (const url of [u, ...IV.thumbSpecs(u).map(s => s.url), ...IV.variantSpecs(slug, { width: Infinity }).map(s => s.url), IV.pinUrl(slug)]) {
      const f = path.join(ctx.publicDir, url.slice(1));
      if (fs.existsSync(f)) { fs.rmSync(f); result.removed.push(url.slice(1)); }
    }
  }
  cleanup();
  return result;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = process.argv.slice(2);
  const recipes = [], categories = [], restaurants = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--recipe") recipes.push(args[++i]);
    else if (args[i] === "--category") categories.push(args[++i]);
    else if (args[i] === "--restaurant") restaurants.push(args[++i]);
    else if (args[i] === "--idx") {}
  }
  if (!recipes.length && !categories.length && !restaurants.length) recipes.push("creme-brulee");
  const out = await generateTargeted({ recipes, categories, restaurants, idx: true, sitemap: true });
  console.log(JSON.stringify(out, null, 2));
}
