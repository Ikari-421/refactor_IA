// Pipeline commun des fiches (D50, 15/11/2026) : chargement, normalisation, dates, recettes proches, descriptions.
// Utilisé tel quel par build.mjs (build complet) et generate-targeted.mjs (régénération ciblée, webhooks) :
// une seule copie du code, pour que la page refaite seule sorte identique au build complet.
// Les seules différences d'environnement passent par des « crochets » (fichiers présents sur la box seulement :
// photos NAS, photos-jigme, images sources) ; la régénération ciblée les lit dans build-manifest.json.
import fs from 'node:fs';
import path from 'node:path';

export const accent = o => typeof o === 'string' ? (o === 'vegan' ? o : o.replace(/\b([Vv])egan/g, (m, v) => (v === 'V' ? 'Vé' : 'vé') + 'gan')) : Array.isArray(o) ? o.map(accent) : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, accent(v)])) : o;
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const recoSlug = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const nrm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
export const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
export const catFix = c => { const n = String(c || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); return n === 'boisson' || n === 'boissons' ? 'boissons' : n === 'sucre' ? 'sucré' : n === 'sale' ? 'salé' : c; };
export const EQ_GENERIC_ALL = [[/kitchenaid|robot/i, 'robot'], [/four/i, 'four'], [/plaque/i, 'plaque'], [/fouet/i, 'fouet'], [/casserole/i, 'casserole'], [/ramequin/i, 'ramequins'], [/saladier/i, 'saladier'], [/couteau/i, 'couteau'], [/moule/i, 'moule'], [/sauteuse|wok/i, 'sauteuse']];
export const OBSIDIAN_TROIS_STYLES = ['creme-brulee', 'tagliatelles-carbonara', 'poulet-tikka-masala', 'ile-flottante', 'beurre-clarifie', 'gaspacho-concombre-avocat', 'ceviche-melon-banana', 'pates-au-saumon'];

// v104 : tiroir « Adapter » partagé (fiches + accueil) : même balisage, mêmes id, même code (src/adapt-ui.js)
const REL_BTN = `<button type="button" id="rel-open" class="ex atag rel-atag" aria-label="Filtres religieux" aria-haspopup="true" aria-pressed="false"><span aria-hidden="true">✡️☪️🕉️☸️✝️</span></button>`;
const REL_VIEW = `   <div id="rel-view" hidden>
    <h2 class="display">Une religion ?</h2>
    <div id="rel-list" class="atags" role="radiogroup" aria-label="Religion"></div>
    <div id="rel-subs" class="atags rel-subs" role="group" aria-label="Sous-filtres" hidden></div>
    <p id="rel-res" class="rel-res" role="status" aria-live="polite"></p>
    <button type="button" id="rel-switch" class="rel-switch" hidden></button>
    <div class="row foot"><button type="button" id="rel-ok" class="done">OK</button></div>
    <p class="rel-note">Indicatif, pas une certification casher ou halal.</p>
   </div>
`;
export const makeAdaptPanelHTML = L => function adaptPanelHTML(o) {
  o = Object.assign({ title: 'Adapter la recette', hint: '', icon: '🍽️', rel: true, exOpts: L.ALLERGIES.map(([a, lab]) => `<button type="button" class="ex atag" data-a="${a}" aria-pressed="false">${esc(lab)}</button>`).join('') }, o);
  if (o.styles == null) { const DL = { vegetarien: 'Végé (sans viande ni poisson)', vegan: 'Végan (sans produit animal)', pescetarien: 'Pesco (sans viande)' }; o.styles = [`<button class="opt" data-style="base">Pas de régime particulier</button>`].concat(L.SANS_ORDER.map(k => `<button class="opt" data-style="sans" data-sans="${k}">${DL[k]}</button>`)).join('').replaceAll('class="opt"', 'type="button" role="radio" class="ex atag dtag"'); }
  return `  <div class="panel-inner"><div class="track">
  <div class="screen s1">
   <div class="s1-hd"><button id="units-btn" class="bubble small units-mini" aria-label="Changer d’unités"><span id="units-label"><b>Métrique</b><small>(g, ml, °C)</small></span></button><h2 class="display">${o.title}</h2></div>${o.hint}
   <div class="row qty"><span class="ico" aria-hidden="true">${o.icon}</span>
    <div class="stepper"><button id="minus" aria-label="moins">−</button><input id="n" type="number" min="1" inputmode="numeric" aria-label="Quantité"><button id="plus" aria-label="plus">+</button></div><span id="nunit" class="nunit"></span></div>
   <div class="row col diet-row"><button id="diet-open" class="allergy-btn diet-btn" aria-controls="s3"><span id="ver-label">Un régime particulier ?</span></button></div>
   <div class="row col allergy-row"><button id="allergy-open" class="allergy-btn" aria-controls="s2"><span id="allergy-label">Des allergies ? Intolérances ?</span></button><div id="pan-tags" class="pan-tags" hidden></div></div>
   <div class="row foot foot1">
    <button id="reset" class="linkbtn">Réinitialiser</button>
    <button id="done" class="done">Terminé</button>
   </div>
  </div>
  <div class="screen s3" id="s3" aria-hidden="true">
   <h2 class="display">Un régime particulier ?</h2>
   <p class="muted s2-hint">Choisissez vos préférences et la recette s’adapte automatiquement.</p>
   <div id="diet-opts" class="atags" role="radiogroup" aria-label="Version">${o.styles}${o.rel ? REL_BTN : ''}</div>
${o.rel ? REL_VIEW : ''}   <div class="row col allergy-row s3-allergy"><button id="allergy-open2" class="allergy-btn" aria-controls="s2">Des allergies ? Intolérances ?</button></div>
   <div class="row foot"><button id="diet-ok" class="done">OK</button></div>
  </div>
  <div class="screen s2" id="s2" aria-hidden="true">
   <h2 class="display">Des allergies ? Intolérances ?</h2>
   
   <div id="exclude-opts" class="atags">${o.exOpts}</div>
   <div class="row foot"><button id="allergy-ok" class="done">OK</button></div>
  </div>
  </div></div>
`;
};

// --- Nettoyage des textes au build : « <a » orphelin, artefacts de remplacement, guillemets insécables
const ARTEFACTS = [
  // « Beurrez » remplacé par la margarine : « margarine végétale (sans lait…)z »
  [/(^|[.!?]\s+)?margarine végétale \(sans lait(?: d'avoine ou soja)?\)z\b/g, (m, deb) => (deb != null ? deb + 'Graissez' : 'graissez') + ' à la margarine végétale (sans lait)', ')z'],
  // « beurrer » → « margarine végétale (sans lait)r »
  [/margarine végétale \(sans lait(?: d'avoine ou soja)?\)r\b/g, () => 'graisser à la margarine végétale (sans lait)', ')r'],
  // « petits beurres » → « petits margarine végétale (sans lait)s »
  [/petits margarine végétale \(sans lait(?: d'avoine ou soja)?\)s\b/g, () => 'petits-beurre', ')s'],
  // « pavés » (bœuf) → « thon (pavé)s »
  [/\bthon \(pavé\)s\b/g, () => 'pavés de thon', '(pavé)s'],
];
export function makeSanitize(FIX) {
  return function sanitize(t, f) {
    let o = t;
    const t2 = o.replace(/\s*<a\b[^<>]*$/, ''); if (t2 !== o) { FIX.a++; o = t2; }
    for (const [re, fn, name] of ARTEFACTS) o = o.replace(re, (...m) => { FIX.art++; (FIX.variants[name] ??= []).push(f); return fn(...m); });
    const t3 = o.replace(/«[ \t\u00A0\u202F]*/g, '«\u00A0').replace(/[ \t\u00A0\u202F]*»/g, '\u00A0»'); FIX.nb += (o.match(/«(?!\u00A0)|(?<!\u00A0)»/g) || []).length; o = t3;
    return o;
  };
}

// Matériel (copie de Cuisine/Materiel/{id}.md) : equipment: [{ ref }] → bouton matériel (label, recos)
export function loadMateriel(dir, yaml) {
  const MAT = {};
  if (!dir || !fs.existsSync(dir)) return MAT;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md') && !x.startsWith('_') && !x.startsWith('.'))) {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const mm = txt.match(/---\n([\s\S]*?)\n---/); if (!mm) continue;
    const m = yaml.load(mm[1]);
    m.backlinks = [...txt.replace(/^---\n[\s\S]*?\n---/, '').matchAll(/\[\[([^\]|#]+)/g)].map(x => x[1].trim());
    if (m.id) MAT[m.id] = m;
  }
  return MAT;
}

/**
 * Charge et normalise toutes les fiches publiées d'un dossier (même code pour le build et la régénération ciblée).
 * env : { dataDir, MAT, yaml, validateRecipeV2, L, OV, PJ, SX, TITRES, CATSUR, LECT, EQ_CREDITS, EQ_GENERIC,
 *         nasPhoto(nasF, r) → {} | null, pjPhoto(r, pj) → { big }, recoImageExists(id) → bool, log }
 */
export function loadRecipes(env) {
  const { dataDir, MAT, yaml, validateRecipeV2, L, OV, PJ, SX, TITRES, CATSUR, LECT, EQ_CREDITS, EQ_GENERIC } = env;
  const log = env.log || (() => {});
  const FIX = env.FIX || { a: 0, art: 0, nb: 0, variants: {} };
  const sanitize = makeSanitize(FIX);
  const LEX = Object.fromEntries((LECT.lexique || []).map(e => [e.id, e]));
  const PJF = PJ._force || [];
  const recipes = fs.readdirSync(dataDir).filter(f => f.endsWith('.md') && !f.startsWith('_')).map(f => {
    const raw = yaml.load(fs.readFileSync(path.join(dataDir, f), 'utf8').match(/---\n([\s\S]*?)\n---/)[1]);
    // Validateur unique du schéma v2 (même code que l'API admin) : une fiche invalide arrête le build
    try { validateRecipeV2(raw, { fileSlug: f.replace(/\.md$/, '') }); } catch (e) { throw new Error(path.join(dataDir, f) + ' : ' + e.message); }
    const r = accent(raw);
    // tags : certaines fiches NAS regroupent plusieurs tags en un seul élément « a, b, c » → on sépare et on dédoublonne
    r.category = catFix(CATSUR[r.slug] || r.category);
    r.tags = [...new Set((r.tags || []).flatMap(t => String(t).split(',')).map(t => t.trim()).filter(Boolean))];
    // note_verif : note interne de relecture, jamais publiée (ni HTML ni JSON)
    (function strip(o) { if (Array.isArray(o)) o.forEach(strip); else if (o && typeof o === 'object') { delete o.note_verif; Object.values(o).forEach(strip); } })(r);
    if (OBSIDIAN_TROIS_STYLES.includes(r.slug) && !L.threeExplanations(r)) throw new Error(r.slug + ': source Obsidian trois styles manquante');
    // v114 « deux lectures » : surcharge locale src/lectures.json. v116 : corrections de langue côté site, toutes versions
    for (const [a, b] of (LECT.corrections || {})[r.slug] || []) for (const v of Object.values(r.variants || {})) if (Array.isArray(v?.steps)) v.steps = v.steps.map(t => typeof t === 'string' ? t.split(a).join(b) : t);
    if (!L.threeExplanations(r) && (LECT.fiches || {})[r.slug]) { const used = new Set(); for (const [k, arr] of Object.entries(LECT.fiches[r.slug])) { const v = r.variants?.[k]; if (!v || v.inherit || !Array.isArray(v.steps) || v.steps.length !== arr.length) { log('lectures : ignoré', r.slug, k); continue; }
      const plain = t => t.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, id, fo) => { if (!LEX[id]) throw new Error('lectures : terme absent du lexique ' + id); used.add(id); return fo || LEX[id].terme; });
      const nz = t => String(t).normalize('NFC').replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
      if (!arr.every((x, i) => nz(plain(x.habitue)) === nz(v.steps[i]) && x.debutant && (plain(x.debutant), true))) { log('lectures : habitué ≠ steps, ignoré', r.slug, k); continue; }
      v.steps_lectures = arr.map(x => (x.caveman ? { habitue: x.habitue, debutant: x.debutant, caveman: x.caveman } : { habitue: x.habitue, debutant: x.debutant })); }
      if (used.size) r.lexique = Object.fromEntries(Object.values(LEX).map(e => [e.id, { terme: e.terme, explication: e.explication, formes: e.formes || [] }])); }
    // v124 : 4 niveaux : LECT.niveaux[slug][version] = { debutant, intermediaire, pro, caveman }
    for (const [k, nv] of Object.entries(L.threeExplanations(r) ? {} : (LECT.niveaux || {})[r.slug] || {})) { const v = r.variants?.[k]; if (!v || v.inherit) { log('niveaux : ignoré', r.slug, k); continue; }
      const n = (v.ingredients || []).length, bad = [];
      for (const lv of ['debutant', 'intermediaire', 'pro', 'caveman']) for (const t of nv[lv] || []) { for (const [, id] of t.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) if (!LEX[id]) bad.push('terme ' + id); for (const [, q] of t.matchAll(/\{\{q:(\d+)\}\}/g)) if (+q >= n || v.ingredients[+q].qty == null) bad.push('q:' + q); }
      if (bad.length || !['debutant', 'intermediaire', 'pro', 'caveman'].every(lv => Array.isArray(nv[lv]) && nv[lv].length)) { log('niveaux : invalide', r.slug, k, bad.join(', ')); continue; }
      v.steps_niveaux = nv; r.lexique = Object.fromEntries(Object.values(LEX).map(e => [e.id, { terme: e.terme, explication: e.explication, formes: e.formes || [] }])); }
    if (L.threeExplanations(r)) {
      for (const [key, v] of Object.entries(r.variants)) {
        if (v.inherit) continue;
        const levels = v.steps_niveaux, lx = L.explanationLexicon(r, key);
        if (!levels || Object.keys(levels).sort().join(',') !== 'amateur,cavernes,pro') throw new Error(r.slug + '/' + key + ': trois styles requis');
        for (const mode of L.explanationModes(r)) {
          const steps = levels[mode];
          if (!Array.isArray(steps) || steps.length !== v.steps.length || steps.some(t => typeof t !== 'string' || !t.trim())) throw new Error(r.slug + '/' + key + '/' + mode + ': étapes invalides');
          for (const text of steps) for (const [, id] of text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
            if (!lx[id] || typeof lx[id].explication !== 'string' || mode !== 'amateur') throw new Error(r.slug + '/' + key + ': lexique invalide ' + id);
          }
        }
      }
    }
    // Filet de sécurité sur les textes affichés
    (function clean(o) { for (const k in o) { const v = o[k]; if (typeof v === 'string') { if (!/url|image|^file$|^source$/i.test(k)) o[k] = sanitize(v, f); } else if (v && typeof v === 'object') clean(v); } })(r);
    const sx = SX[r.slug]; if (sx) { if (!r.equipment?.length) r.equipment = sx.equipment; for (const [k, v] of Object.entries(sx.kcal || {})) if (r.variants[k] && r.variants[k].kcal_per_serving == null) r.variants[k].kcal_per_serving = v; }
    // Photos NAS (.jpg sous /Volumes/...) illisibles → photo provisoire (pastille) ; .webp : copie locale nas-photos/<fichier>.webp → /img/p/<slug>.webp
    const nasF = r.image?.url && /^\/Volumes\/.*\.webp$/i.test(r.image.url) ? 'nas-photos/' + r.image.url.split('/').pop() : null;
    const nasX = nasF ? env.nasPhoto(nasF, r) : null;
    if (nasX) r.image = { ...r.image, url: `/img/p/${r.slug}.webp`, own: true, ...nasX };
    // v235 : photo envoyée par Admin au back (action photo → url_publique /cuisine/img/p/<slug>.webp, original synchronisé dans img/p/)
    else if (BACK_PHOTO_RE.test(r.image?.url || '')) r.image = { ...r.image, url: r.image.url.replace(/^\/cuisine\/img\//, '/img/'), own: true };
    else if (r.image?.url && !/^(\/img\/|https:\/\/)/.test(r.image.url)) r.image = { ...r.image, url: null, nas_photo: true };
    if (TITRES[r.slug] && TITRES[r.slug] !== r.title) { r.title_nas = r.title; r.title = TITRES[r.slug]; }
    r.alt_nas = r.image?.alt || '';
    const o = OV[r.slug]; if (o) { if (!r.image?.url) r.image = o.image; r.title_color = o.title_color; }
    // 29/10 : vraies photos de Jigmé (photos-jigme.json slug → fichier) : priment sur la photo provisoire
    const pj = PJ[r.slug]; if (pj && (r.image?.url?.startsWith('/img/') || !r.image?.url) && (!r.image?.own || PJF.includes(r.slug))) {
      const { big } = env.pjPhoto(r, pj);
      r.image = { url: `/img/p/${r.slug}.webp`, alt: r.title, credit: 'Jigmé Théaux', own: true, jigme720: true };
      if (big) { r.image.jigme720 = false; r.image.big = true; }
    }
    // Recos matériel (liens affiliés) : overrides.json ou YAML. Rien n'est inventé : sans recos, bouton neutre.
    const okUrl = u => typeof u === 'string' && /^https:\/\//.test(u);
    const ovEq = (o?.equipment || []).filter(e => e && (e.name || e.names));
    // Liens matériel : refs de la fiche + backlinks Obsidian ([[slug]] dans la note Materiel)
    const refs = [...new Set([...(Array.isArray(r.equipment) ? r.equipment : []).map(e => MAT[e?.ref]), ...Object.values(MAT).filter(m => (m.backlinks || []).includes(r.slug))].filter(Boolean))]; delete r.equipment;
    const recoMedia = x => {
      const oo = {};
      if (x.crop && typeof x.crop === 'object') oo.crop = { x: x.crop.x, y: x.crop.y, zoom: x.crop.zoom };
      else if (x.x != null || x.y != null || x.zoom != null) oo.crop = { x: x.x, y: x.y, zoom: x.zoom };
      if (x.mention) oo.mention = x.mention;
      if (x.halo) oo.halo = true;
      if (x.haloColor) oo.haloColor = x.haloColor;
      if (x.fx) oo.fx = x.fx;
      if (x.ad) { oo.ad = true; if (x.adLabel) oo.adLabel = x.adLabel; }
      return oo;
    };
    const cleanRecos = rs => (rs || []).filter(x => x && x.title && okUrl(x.url) && !x.hidden).map(x => {
      const image = x.image || (env.recoImageExists(recoSlug(x.title)) ? `/img/eq/${recoSlug(x.title)}.webp` : undefined);
      return { title: x.title, url: x.url, ...(image ? { image } : {}), review: x.review || null, ...recoMedia(x) };
    });
    r.equipment_recos = {}; r.equipment_meta = {};
    const allEq = new Set(); (function walk(x) { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === 'object') for (const [k, v] of Object.entries(x)) { if (k === 'equipment' && Array.isArray(v)) v.forEach(s => allEq.add(typeof s === 'string' ? s : s?.name)); else walk(v); } })(r);
    for (const name of [...allEq].filter(Boolean)) {
      const ov = ovEq.find(e => e.name === name || (e.names || []).includes(name));
      const mt = refs.find(m => [m.label, ...(m.aliases || [])].some(a => nrm(a) && nrm(name).includes(nrm(a))));
      const e = ov || (mt ? { label: mt.label, recos: mt.recos } : null);
      const recos = cleanRecos(e?.recos); if (recos.length) r.equipment_recos[name] = recos;
      const g = e?.image ? null : EQ_GENERIC.find(([re]) => re.test(name));
      const image = e?.image || (g ? `/img/eq/${g[1]}.webp` : null);
      const key = image ? image.replace(/^.*\/(.*)\.webp$/, '$1') : null;
      r.equipment_meta[name] = { label: e?.label || null, image, credit: key && EQ_CREDITS[key] ? EQ_CREDITS[key] : null };
    }
    // Matériel lié (ref ou backlink) mais absent des listes « equipment » des versions : on l'ajoute pour que le lien apparaisse
    for (const m of refs) {
      const hits = n => [m.label, ...(m.aliases || [])].some(a => nrm(a) && nrm(typeof n === 'string' ? n : n?.name).includes(nrm(a)));
      const recos = cleanRecos(m.recos); if (!recos.length) continue;
      for (const v of Object.values(r.variants || {})) if (Array.isArray(v?.equipment) && v.equipment.length && !v.inherit && !v.equipment.some(n => hits(n) || (r.equipment_recos[typeof n === 'string' ? n : n?.name] || []).some(x => recos.some(y => y.url === x.url)))) v.equipment.push(m.label);
      r.equipment_recos[m.label] = recos;
      const g = EQ_GENERIC.find(([re]) => re.test(m.label)); const image = g ? `/img/eq/${g[1]}.webp` : null; const key = image ? g[1] : null;
      r.equipment_meta[m.label] = { label: m.label, image, credit: key && EQ_CREDITS[key] ? EQ_CREDITS[key] : null };
    }
    return r;
  }).filter(r => r.hidden !== true && r.statut !== 'brouillon')
    // v235 : fiche sans photo jamais publiée (contrôles SEO). Elle est écartée des pages et des listes, sauf si c'est la fiche
    // de l'événement en cours (keepSansPhoto) : la régénération ciblée la rend alors pour la refuser (400 seo). Ainsi une fiche
    // refusée restée « publiée » dans le back ne bloque pas les événements suivants des autres fiches.
    .filter(r => { if (r.image?.url || env.keepSansPhoto?.(r.slug)) return true; env.log?.(`fiche sans photo écartée : ${r.slug}`); return false; })
    .sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
  return { recipes, FIX, LEX };
}

// v18 : date de publication d'origine (src/dates-site.tsv), repli date de création NAS (src/dates-nas-fichier.tsv)
const MOIS = { janvier: 1, 'février': 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, 'août': 8, septembre: 9, octobre: 10, novembre: 11, 'décembre': 12 };
const parseFr = t => { t = (t || '').trim().normalize('NFC'); let m = t.match(/^(\d{4})-(\d{2})-(\d{2})/); if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = t.match(/([a-zéû]+)\s+(\d{1,2})(?:st|nd|rd|th)?,\s*(\d{4})/i); if (m && MOIS[m[1].toLowerCase()]) return `${m[3]}-${String(MOIS[m[1].toLowerCase()]).padStart(2, '0')}-${m[2].padStart(2, '0')}`; return ''; };
/** Dates, ordre alphabétique (alpha) et ordre des cartes (plus récent d'abord ; sans date en fin, puis A-Z). */
// v235 : repli = date de première publication posée par le back (published_at, action « publier ») ; jour UTC AAAA-MM-JJ.
export const publishedDay = v => { if (!v) return ''; const d = v instanceof Date ? v : new Date(String(v)); return isNaN(d) ? '' : d.toISOString().slice(0, 10); };
export const BACK_PHOTO_RE = /^\/cuisine\/img\/p\/[a-z0-9-]+\.webp$/;
export function applyDates(recipes, srcDir) {
  const tsv = f => { const p = path.join(srcDir, f); return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').split('\n').filter(Boolean).map(l => l.split('\t')) : []; };
  const DATES = Object.fromEntries(tsv('dates-site.tsv').map(([k, v]) => [k.normalize('NFC'), parseFr(v)]));
  const DATES_F = Object.fromEntries(tsv('dates-nas-fichier.tsv'));
  for (const r of recipes) { const k = (r.source_fiche || '').split('/').pop().replace(/\.md$/, '').normalize('NFC'); r.date = r.date || DATES[k] || DATES[r.slug] || DATES_F[r.slug] || publishedDay(r.published_at); }
  recipes.forEach((r, i) => { r.alpha = i; });
  const byDate = (dir) => (a, b) => (!a.date) - (!b.date) || (a.date && b.date && a.date !== b.date ? (a.date < b.date ? -dir : dir) : 0) || a.alpha - b.alpha;
  return [...recipes].sort(byDate(-1));
}

// alt des photos : titre de la recette, sauf ces deux fiches où l'image.alt écrit par Chef est repris tel quel
const ALT_CHEF = new Set(['panna-cotta-aux-fruits-rouges', 'poulet-tikka-masala']);
export const altOf = r => ALT_CHEF.has(r.slug) && r.alt_nas ? r.alt_nas : r.title;
export const TILE_SIZES = '(max-width:600px) 100vw, (min-width:1024px) 340px, (min-width:700px) 50vw, 300px';
export const makeTileImg = ({ THUMB, THUMB360, AVIF }) => (r, i) => { const u = r.image.url, A = AVIF[u];
  const img = `<img src="${esc(THUMB[u] || u)}"${THUMB360[u] ? ` srcset="${esc(THUMB360[u])} 360w, ${esc(THUMB[u])} 720w" sizes="${TILE_SIZES}"` : ''} alt="${esc(altOf(r))}" width="720" height="720"${i < 4 ? ' loading="eager" fetchpriority="high" decoding="sync" data-atf' : ' loading="lazy" decoding="async"'}>`;
  return A ? `<picture><source type="image/avif" srcset="${esc(A[360])} 360w, ${esc(A[720])} 720w" sizes="${TILE_SIZES}">${img}</picture>` : img; };
export const emoji = r => r.category === 'sucré' ? '🍮' : r.category === 'boissons' ? '🥤' : '🥘';

export const STOP = new Set(['youcookcuisine', 'sucre', 'sale', 'dessert', 'plat', 'entree', 'recette']);
/** SEO : recettes proches (4 + complément pour ≥ 3 liens entrants), liens classique ↔ végé. */
export function makeRelated(recipes, L, log = () => {}) {
  const VEGE = { 'blanquette-vegetarienne': 'blanquette-de-veau-gingembre-citronnelle', 'burger-vegetarien': 'hamburger-classique', 'bento-vegetarien': 'bento-au-saumon', 'ramen-vegetarien': 'ramen-au-porc', 'wellington-vegetarien': 'boeuf-wellington', 'lasagnes-vegetariennes': 'lasagnes-epinards-champignons', 'gyozas-vegetariens': 'nems-au-porc', 'curry-vegetalien': 'poulet-tikka-masala' };
  const BYSLUG = Object.fromEntries(recipes.map(r => [r.slug, r]));
  for (const [vg, cl] of Object.entries(VEGE)) if (!BYSLUG[vg] || !BYSLUG[cl]) { log('VEGE inconnu', vg, cl); delete VEGE[vg]; }
  const VEGE_OF = Object.fromEntries(Object.entries(VEGE).map(([a, b]) => [b, a]));
  const words = r => new Set([...(r.tags || []).map(norm), ...norm(r.title).split(/[^a-z0-9]+/)].filter(w => w.length > 3 && !STOP.has(w)));
  const ingSet = r => new Set((L.resolve(r, r.default_variant || 'traditionnelle').ingredients || []).map(i => norm(i.item).split(/[^a-z]+/).filter(w => w.length > 3).slice(-1)[0]).filter(Boolean));
  for (const r of recipes) { r._w = words(r); r._i = ingSet(r); }
  const score = (r, o) => { let s = 0; for (const w of r._w) if (o._w.has(w)) s += 3; for (const w of r._i) if (o._i.has(w)) s += 1; return s + (o.category === r.category ? 2 : 0); };
  const pairOf = r => VEGE[r.slug] || VEGE_OF[r.slug];
  const ranked = r => recipes.filter(o => o !== r && o.slug !== pairOf(r)).map(o => [score(r, o), o]).sort((a, b) => b[0] - a[0] || a[1].alpha - b[1].alpha).map(x => x[1]);
  const REL = Object.fromEntries(recipes.map(r => [r.slug, ranked(r).slice(0, 4).map(o => o.slug)]));
  const INB = Object.fromEntries(recipes.map(r => [r.slug, 0]));
  for (const l of Object.values(REL)) for (const t of l) INB[t]++;
  for (const a of Object.keys(VEGE)) { INB[a]++; INB[VEGE[a]]++; }
  for (const u of recipes) while (INB[u.slug] < 3) {
    const cand = recipes.filter(p => p !== u && p.slug !== pairOf(u) && !REL[p.slug].includes(u.slug) && REL[p.slug].length < 8).map(p => [score(p, u), p]).sort((a, b) => b[0] - a[0] || a[1].alpha - b[1].alpha)[0]?.[1];
    if (!cand) break;
    REL[cand.slug].push(u.slug); INB[u.slug]++;
  }
  const relLink = (o, lab) => `<li><a href="/r/${o.slug}/">${lab ? `<span class="rel-k">${lab}</span> ` : ''}${esc(o.title)}</a></li>`;
  return r => { const vg = VEGE_OF[r.slug] && BYSLUG[VEGE_OF[r.slug]], cl = VEGE[r.slug] && BYSLUG[VEGE[r.slug]];
    return `<nav class="related" aria-label="Recettes proches"><h2 class="display">Recettes proches</h2><ul>${vg ? relLink(vg, /vegetalien/.test(vg.slug) ? 'Version végétalienne :' : 'Version végétarienne :') : ''}${cl ? relLink(cl, 'Version classique :') : ''}${REL[r.slug].map(sl => relLink(BYSLUG[sl])).join('')}</ul></nav>`; };
}

// meta description / description JSON-LD : 120 à 155 caractères (description Chef, sinon 1re phrase de l'histoire complétée)
const cut = (t, n) => t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n - 1)).replace(/[\s,;:.]+$/, '') + '…';
const durFr = m => !m ? '' : m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? String(m % 60).padStart(2, '0') : ''}` : `${m} min`;
export const descOf = (r, b) => {
  { const cd = typeof r.description === 'string' ? r.description.replace(/\s+/g, ' ').trim() : ''; if (cd.length >= 120 && cd.length <= 155) return cd; }
  let d = r.histoire ? String(r.histoire).trim().split(/(?<=\.)\s/)[0].replace(/\s+/g, ' ') : '';
  d = cut(d, 155);
  const dur = durFr(b.time?.total_min), n = (b.ingredients || []).length;
  const pieces = [`${r.category === 'boissons' ? 'Boisson' : 'Recette ' + r.category} de Jigmé${dur ? ` en ${dur}` : ''}.`, `${n} ingrédients et étapes pas à pas.`, 'Portions et régimes adaptables.', `${r.title} : ingrédients, étapes et astuces.`];
  for (const pc of pieces) { if (d.length >= 120) break; if (d.length + 1 + pc.length <= 155) d = (d + ' ' + pc).trim(); }
  if (d.length < 120) d = cut((d + ` Retrouvez la recette de ${r.title} chez Jigmé : ingrédients, étapes et portions adaptables.`).trim(), 155);
  return d;
};
// végan réel : aucun ingrédient animal dans la version par défaut
const ANIMAL = /\b(beurre|creme|lait|fromage|parmesan|mozzarella|mascarpone|ricotta|feta|chevre|brebis|comte|gruyere|emmental|yaourt|oeufs?|jaunes?|blancs? d'oeufs?|miel|gelatine|viande|boeuf|veau|porc|poulet|canard|agneau|lard|lardons|jambon|saumon|thon|poisson|cabillaud|crevettes?|anchois|bouillon de volaille|fond de veau)\b/;
const VEGOK = /(vegetal|soja|avoine|amande|coco|riz|vegan|veggie|de noix de cajou|sans lactose vegetal)/;
export const reallyVegan = v => (v.ingredients || []).every(i => { const t = norm(i.item); return !ANIMAL.test(t) || VEGOK.test(t); });

// CONSERVATION (champ YAML optionnel, voir docs/schema-v2-conservation.md)
const txt = x => (typeof x === 'string' || typeof x === 'number') && String(x).trim() ? String(x).trim() : '';
const list = x => (Array.isArray(x) ? x : txt(x) ? [x] : []).map(txt).filter(Boolean);
export function conservationHtml(c) {
  if (!c || typeof c !== 'object' || Array.isArray(c)) return '';
  const obj = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
  const dl = rows => rows.filter(([, v]) => v).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('');
  const sec = (ico, title, inner) => inner ? `<section class="cv-sec"><h4><span aria-hidden="true">${ico}</span> ${title}</h4>${inner}</section>` : '';
  const fr = obj(c.frigo), co = obj(c.congelation), ta = obj(c.temperature_ambiante);
  const wrap = (rows, note) => { const d = dl(rows); const n = txt(note); return d || n ? (d ? `<dl>${d}</dl>` : '') + (n ? `<p class="cv-note">${esc(n)}</p>` : '') : ''; };
  const parts = [
    sec('❄️', 'Au réfrigérateur', wrap([['Durée', txt(fr.duree)], ['Contenant', txt(fr.contenant)]], fr.note)),
    sec('🧊', 'Au congélateur', co.possible === false ? `<p>Ne se congèle pas.</p>${txt(co.note) ? `<p class="cv-note">${esc(txt(co.note))}</p>` : ''}` : wrap([['Durée', txt(co.duree)], ['Décongélation', txt(co.decongelation)]], co.note)),
    sec('🌡️', 'À température ambiante', wrap([['Durée', txt(ta.duree)]], ta.note)),
    sec('🔥', 'Réchauffage', txt(c.rechauffage) ? `<p>${esc(txt(c.rechauffage))}</p>` : list(c.rechauffage).length ? `<ul>${list(c.rechauffage).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''),
    sec('🍲', 'Idées pour les restes', list(c.restes).length ? `<ul>${list(c.restes).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''),
    sec('♻️', 'Pour ne rien perdre', list(c.anti_gaspi).length ? `<ul>${list(c.anti_gaspi).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '')
  ].filter(Boolean); // a_verifier : lu mais volontairement non affiché
  return parts.length ? `<article class="xcard x-frais" id="x-conservation"><h3 class="display">Conservation 🫙</h3>${parts.join('')}</article>` : '';
}

// Manifeste du build (non public, copié dans /opt) : faits que seule la box connaît (photos NAS, photos-jigme,
// images sources) pour que la régénération ciblée sur Fly calcule exactement les mêmes valeurs.
export const MANIFEST_FILE = 'build-manifest.json';
