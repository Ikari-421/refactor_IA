// Reconstruction ciblée du public : vraie génération (generate-pages.mjs / build.mjs), pas de gabarit ni de patch D11.
// Recette, idx, sitemap, catégorie ; recettes qui citent un matériel ou une notice ; pages et sitemap restaurants.
// Ne touche pas au NAS.
import path from "node:path";
import { pathToFileURL } from "node:url";
import fs from "node:fs";
import { hasBackReadKey, syncBackPublished, fetchBackSource, fetchBackPhoto, syncRestoPhotos, fetchSections, syncSectionImage } from "../../scripts/source-back.mjs";

async function loadTargeted() {
  const cands = [
    new URL("../../generate-targeted.mjs", import.meta.url).href,
    pathToFileURL("/opt/generate-targeted.mjs").href,
    pathToFileURL("/opt/hp/generate-targeted.mjs").href,
  ];
  let last;
  for (const u of cands) {
    try { return await import(u); } catch (e) { last = e; }
  }
  throw last || new Error("generate-targeted.mjs introuvable");
}

function isRemoveType(type) {
  return /[.](masquee|supprimee)$/.test(String(type || ""));
}

async function vague1DirsFromBack(opts, { type, data }) {
  const cache = process.env.RJ_BACK_CACHE || "/tmp/rj-back-source";
  await syncBackPublished({ root: cache });
  const t = String(type || "");
  const id = data.id || data.slug;
  const expectedSha = data.sha || undefined;
  let missing = false;
  if (id && !isRemoveType(t)) {
    let domaine = "recettes";
    if (t.startsWith("cuisine.materiel.")) domaine = "materiel";
    else if (t.startsWith("cuisine.lexique.")) domaine = "lexique";
    else if (t.startsWith("cuisine.restaurant.")) domaine = "restaurants";
    {
      let got;
      try {
        got = await fetchBackSource({ domaine, id, expectedSha, root: cache });
      } catch (e) {
        // data.sha toléré : si l'empreinte a avancé, on régénère depuis la source actuelle.
        if (e.status === 409) got = await fetchBackSource({ domaine, id, root: cache });
        else throw e;
      }
      if (!got.ok && got.status === 404) missing = true;
      // v235 : photo envoyée au back (image.url = /cuisine/img/p/<slug>.webp) → original en cache pour les variantes.
      // R2 : photos du restaurant (originaux du back + vignettes 720) posées dans le HTML servi avant le rendu des pages.
      if (got.ok && domaine === "restaurants" && opts.htmlDir) await syncRestoPhotos({ imgRoot: path.join(opts.htmlDir, "img"), slug: id, sharpImpl: opts.sharpImpl });
      if (got.ok && domaine === "recettes" && /^ +url: *['"]?\/cuisine\/img\/p\/[a-z0-9-]+\.webp['"]? *$/m.test(fs.readFileSync(got.path, "utf8"))) await fetchBackPhoto({ slug: id, root: cache });
    }
  }
  const live = opts.live;
  return {
    missing,
    photoRoot: cache,
    dataDir: path.join(cache, "data"),
    materielDir: path.join(cache, "materiel"),
    lexiqueDir: path.join(cache, "lexique"),
    restaurantsDir: path.join(cache, "restaurants"),
  };
}

// Un seul événement à la fois (un seul Chromium sur 512 Mo, pas d'écritures croisées dans dist). Un même événement renvoyé
// (nouvel essai de l'outbox pendant une longue régénération) rejoint celui déjà en file au lieu d'être refait.
export function makeQueue() {
  let queue = Promise.resolve();
  const pending = new Map();
  return (key, fn) => {
    if (pending.has(key)) return pending.get(key);
    const run = queue.then(fn);
    queue = run.catch(() => {});
    pending.set(key, run);
    run.then(() => pending.delete(key), () => pending.delete(key));
    return run;
  };
}
const exclusive = makeQueue();
export function applyPublicEvent(opts) {
  const d = opts.data || {};
  return exclusive(JSON.stringify([opts.type, d.slug || d.id || "", d.sha || "", opts.htmlDir || ""]), () => applyPublicEventNow(opts));
}

// M1 : identifiant d'événement validé avant tout accès disque ou réseau (cache back, public, photos).
const SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function checkId(v) { if (v != null && (typeof v !== "string" || v.length > 120 || !SAFE_ID.test(v))) throw Object.assign(new Error("slug invalide"), { status: 400, code: "slug" }); }

async function applyPublicEventNow(opts) {
  const { type, data = {}, htmlDir, live, restoDir } = opts;
  checkId(data.slug); checkId(data.id);
  const t = String(type || "");
  const G = await loadTargeted();
  const publicDir = htmlDir;
  // R2 : restaurants aussi lus depuis le back (avant : volume local, dont les fiches recettes périmées faisaient échouer
  // la régénération des événements cuisine.restaurant.* en 500).
  const useBack = hasBackReadKey() && process.env.RJ_TARGETED_SOURCE !== "local";
  let restaurantsDir = live ? path.join(live, "restaurants") : undefined;
  let dataDir = live ? path.join(live, "data") : undefined;
  let materielDir = live ? path.join(live, "materiel") : undefined;
  let lexiqueDir = live ? path.join(live, "lexique") : undefined;
  let photoRoot;
  if (useBack) {
    const dirs = await vague1DirsFromBack({ ...opts, sharpImpl: t.startsWith("cuisine.restaurant.") ? await G.loadSharp() : undefined }, { type: t, data });
    dataDir = dirs.dataDir;
    materielDir = dirs.materielDir;
    lexiqueDir = dirs.lexiqueDir;
    restaurantsDir = dirs.restaurantsDir;
    photoRoot = dirs.photoRoot;
    if (dirs.missing && (t.startsWith("cuisine.recette.") || t.startsWith("cuisine.restaurant."))) {
      // La source publique ne connaît plus la fiche : on la retire des pages.
      opts = { ...opts };
      data._forceRemove = true;
    }
  }
  // v255 : « En construction » de la rubrique Restaurants, lu à chaque régénération (toute page restaurant ou liste écrite suit l'état du back)
  let construction = opts.construction;
  if (construction === undefined && useBack) {
    try { construction = ((await fetchSections({ root: process.env.RJ_BACK_CACHE || "/tmp/rj-back-source" })).sections || {}).restaurants || null; }
    catch (e) { if (t === "cuisine.sections.modifie") throw e; construction = null; }
  }
  // v256 : photo de la carte copiée depuis le back sur le site (img-src 'self') ; en cas d'échec, la carte reste avec son fond fixe.
  if (construction && construction.card && construction.card.image && htmlDir) {
    try {
      const img = await syncSectionImage({ card: construction.card, imgRoot: path.join(htmlDir, "img"), sharpImpl: opts.sharpImpl || await G.loadSharp().catch(() => undefined) });
      construction = { ...construction, card: { ...construction.card, _img: img } };
    } catch (e) { console.error("[recettes] photo de la carte En construction :", e.message); }
  }
  const common = {
    construction: construction || null,
    publicDir,
    restoDir: restoDir || (htmlDir ? path.join(path.dirname(htmlDir), "restaurants") : undefined),
    live,
    dataDir,
    materielDir,
    lexiqueDir,
    restaurantsDir,
    photoRoot: opts.photoRoot || photoRoot,
    srcDir: opts.srcDir,
    root: opts.root,
    yaml: opts.yaml,
    RD: opts.RD,
    RR: opts.RR,
    paths: opts.paths,
    validateRecipeV2: opts.validateRecipeV2,
    // SSR obligatoire (défaut) : une page sans ingrédients/étapes pré-rendus n'est jamais publiée. RJ_TARGETED_SSR=off|auto : tests locaux.
    ssr: process.env.RJ_TARGETED_SSR === "off" ? false : process.env.RJ_TARGETED_SSR === "auto" ? "auto" : "require",
  };

  if (t.startsWith("cuisine.recette.")) {
    const slug = data.slug;
    if (!slug) return { page: false };
    if (isRemoveType(t) || data._forceRemove) {
      const out = await G.generateTargeted({
        ...common,
        removeRecipes: [slug],
        recipes: [],
        idx: true,
        sitemap: true,
      });
      return { page: true, idx: true, sitemap: true, removed: true, files: out.removed.concat(out.written || []) };
    }
    const out = await G.generateTargeted({
      ...common,
      recipes: [slug],
      idx: true,
      sitemap: true,
    });
    return { page: out.written.some(f => f.includes("/r/" + slug + "/")), idx: true, sitemap: true, files: out.written, ssr: out.ssr };
  }

  if (t.startsWith("cuisine.materiel.") || t.startsWith("cuisine.lexique.")) {
    const kind = t.startsWith("cuisine.materiel.") ? "materiel" : "lexique";
    const id = data.id || data.slug;
    const ctx = await G.createTargetedContext(common);
    const slugs = G.citingRecipeSlugs(ctx.recipes, { kind, id, label: data.label || data.terme, aliases: data.aliases || data.formes || [] });
    if (!slugs.length) return { page: false, citations: [], deferred: false };
    const out = await G.generateTargeted({ ...common, ctx, recipes: slugs });
    return { page: true, citations: slugs, files: out.written, ssr: out.ssr };
  }

  if (t.startsWith("cuisine.restaurant.")) {
    const slug = data.slug || data.id;
    if (isRemoveType(t) || data._forceRemove) {
      const out = await G.generateTargeted({ ...common,
        removeRestaurants: slug ? [slug] : [],
        restaurantListing: true,
        restaurantSitemap: true,
      });
      return { page: true, listing: true, sitemap: true, removed: true, files: out.removed.concat(out.written) };
    }
    const out = await G.generateTargeted({
      ...common,
      restaurants: slug ? [slug] : [],
      restaurantListing: true,
      restaurantSitemap: true,
    });
    return { page: true, listing: true, sitemap: true, files: out.written };
  }

  if (t === "cuisine.sections.modifie") {
    // matériel et livres : pas encore d'onglet (rien à régénérer)
    if (data.section && data.section !== "restaurants") return { section: data.section, page: false, ignore: true };
    const out = await G.generateTargeted({ ...common, allRestaurants: true, restaurantListing: true });
    return { section: "restaurants", construction: !!(construction && construction.on), page: true, listing: true, files: out.written };
  }

  return { type: t, deferred: true };
}

// Compat tests / ancien appel synchrone : on expose aussi une façade async.
export function applyRecetteEvent(opts) {
  return applyPublicEvent({ ...opts, type: opts.type, data: { slug: opts.slug, sha: opts.sha } });
}

export function applyDomainEvent(opts) {
  return applyPublicEvent(opts);
}
