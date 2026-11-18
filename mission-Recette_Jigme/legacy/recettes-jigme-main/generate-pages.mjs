// Génération des pages publiques (factorisée depuis build.mjs) : une page, une liste, un sitemap.
// Utilisée par le build complet et par la reconstruction ciblée (webhooks).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function publicRecipe(r) {
  const { source_fiche, ...rest } = r;
  if (!rest.lexique_local) return rest;
  const lexique_local = {};
  for (const [variant, entries] of Object.entries(rest.lexique_local)) {
    lexique_local[variant] = {};
    for (const [id, e] of Object.entries(entries || {})) {
      if (e && typeof e === 'object' && 'ref' in e) { const { ref, ...entry } = e; lexique_local[variant][id] = entry; }
      else lexique_local[variant][id] = e;
    }
  }
  return { ...rest, lexique_local };
}

export function crumbLd(items, { SITE_URL, PROD }) {
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Jigmé', item: SITE_URL + '/' }, ...items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 2, name: n, item: PROD + (u || '/') }))] }).replace(/</g, '\\u003c')}</script>`;
}

export function heroImg(r, ctx) {
  const { esc, altOf, AVIF, DIM } = ctx;
  const u = r.image.url, A = AVIF[u], d = DIM[u] || { w: 1200, h: 800 };
  const HS = '(max-width:520px) 100vw, 520px';
  const img = `<img src="${esc(u)}"${A?.w800 ? ` srcset="${esc(A.w800)} 800w, ${esc(u)} ${d.w}w" sizes="${HS}"` : ''} alt="${esc(altOf(r))}" width="${d.w}" height="${d.h}" fetchpriority="high" decoding="async">`;
  const DS = A?.w800 ? `<source media="(min-width:700px)" type="image/webp" srcset="${esc(A.w800)} 800w, ${esc(u)} ${d.w}w" sizes="min(calc(100vw - 80px), 1500px)">` : '';
  return A ? `<picture>${DS}<source type="image/avif" srcset="${esc(A.h640)} 640w, ${esc(A.h1040)} 1040w" sizes="(max-width:520px) 100vw, 520px">${img}</picture>` : img;
}

export function recipeArticle(r, ctx) {
  const hero = ctx.heroImg || heroImg;
  const { L, esc, adaptPanelHTML, AMAZON_DISCLAIMER, conservationHtml, relatedHtml, coquilleHref, SITE_ORIGIN, altOf, HEART } = ctx;
  const ICON = { personnes: '👥', pains: '🍞', ramequins: '🍮' };
  const hasH = !!r.house_toggle;
  const styles = [];
  styles.push(`<button class="opt" data-style="base">Pas de régime particulier</button>`);
  const DL = { vegetarien: 'Végé (sans viande ni poisson)', vegan: 'Végan (sans produit animal)', pescetarien: 'Pesco (sans viande)' };
  L.SANS_ORDER.forEach(k => styles.push(`<button class="opt" data-style="sans" data-sans="${k}">${DL[k]}</button>`));
  const exOpts = L.ALLERGIES.map(([a, lab]) => `<button type="button" class="ex atag" data-a="${a}" aria-pressed="false">${esc(lab)}</button>`).join('');
  const base = L.resolve(r, r.house_toggle || r.default_variant);
  const norm = ctx.norm;
  const CRUMB = [['Recettes', '/'], [r.category ? r.category.charAt(0).toUpperCase() + r.category.slice(1) : 'Recettes', `/c/${norm(r.category) === 'sucre' ? 'sucre' : norm(r.category) === 'boissons' ? 'boissons' : 'sale'}/`], [r.title, `/r/${r.slug}/`]];
  const body = `<article class="rj-art"><section class="hero"><a class="back" href="/" aria-label="Retour aux recettes"><svg class="back-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span class="back-t">← Recettes</span></a><div class="hero-tools"></div>
 <div class="hero-card tone-${r.hero_tone}" data-lum="${r.title_lum == null ? '' : r.title_lum.toFixed(3)}">
 <div class="hero-media" aria-hidden="true">${r.image?.url ? hero(r, ctx) : ''}<div class="hero-shade"></div></div>
 <div class="hero-content">
  <h1 class="display hero-title">${esc(r.title)}</h1>
  <div class="hero-bar"><div class="bubblebar"><button id="adapt-btn" class="bub" aria-expanded="false" aria-controls="panel"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span id="adapt-txt">Adapter la recette</span></button></div></div>
 </div>
 <div id="panel" class="panel-adapt" aria-hidden="true">
  ${adaptPanelHTML({ icon: ICON[base.servings_unit] || '🍽️', styles: styles.join('').replaceAll('class="opt"', 'type="button" role="radio" class="ex atag dtag"'), exOpts })} </div>
 </div>
</section>

<main class="recipe">
 <nav id="rtabs" class="rtabs no-scrollbar" role="tablist" aria-label="Sections de la recette"><span class="rtab-pill" aria-hidden="true"></span>${[['ing', 'Ingrédients'], ['steps', 'Étapes'], ['mat', 'Matériel'], ['extra', 'Extra']].map(([k, l], i) => `<button type="button" role="tab" id="tab-${k}" class="rtab${i ? '' : ' on'}" data-tab="${k}" aria-controls="pane-${k}" aria-selected="${!i}">${l}</button>`).join('')}<button type="button" class="rtab-fav fav-btn" data-slug="${esc(r.slug)}" data-title="${esc(r.title)}" aria-haspopup="dialog" aria-label="Ajouter à une collection ou aux signets">${HEART}</button></nav>
 <div id="panes" class="panes">
  <section class="pane block" id="pane-ing" role="tabpanel" aria-labelledby="tab-ing"><h2 class="sr-only">Ingrédients</h2><button type="button" id="ingredients-adapt" class="ingredients-adapt" aria-controls="panel" aria-expanded="false" aria-haspopup="dialog">Adapter la recette</button><div id="ingredients"></div><div id="tags" class="tags"></div><div id="subs-box" class="subs-note" hidden><p class="subs-h">Substitutions possibles</p><ul id="subs"></ul></div><p id="warn-pill" class="pill-note" hidden></p></section>
  <section class="pane block" id="pane-steps" role="tabpanel" aria-labelledby="tab-steps" hidden><h2 class="sr-only">Préparation</h2><div class="cook-row">${L.threeExplanations(r) ? `<button type="button" class="lect-cycle lect-row lect-stack" data-lect="amateur" aria-label="Explications amateur — passer à : Explications pro"><span class="lst-c" data-m="amateur" data-pos="0">Explications amateur</span><span class="lst-c" data-m="pro" data-pos="1" aria-hidden="true">Explications pro</span><span class="lst-c" data-m="cavernes" data-pos="2" aria-hidden="true">Langage des cavernes</span></button>` : r.lexique ? '<button type="button" class="lect-cycle lect-row lect-stack" data-lect="debutant" aria-label="Explications débutant — passer à : Explications intermédiaire"><span class="lst-c" data-m="debutant" data-pos="0">Explications débutant</span><span class="lst-c" data-m="intermediaire" data-pos="1" aria-hidden="true">Explications intermédiaire</span><span class="lst-c" data-m="pro" data-pos="2" aria-hidden="true">Explications pro</span><span class="lst-c" data-m="caveman" data-pos="3" aria-hidden="true">Caveman writing</span></button>' : ''}<button type="button" class="cook-open" aria-haspopup="dialog" aria-label="Mode cuisine (plein écran)"><span aria-hidden="true">🍳</span> Mode cuisine<svg class="cook-fs" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button></div><ol id="steps" class="steps"></ol><ul id="times" class="times no-scrollbar" aria-label="Temps"></ul><div id="diets" hidden></div></section>
  <section class="pane block" id="pane-mat" role="tabpanel" aria-labelledby="tab-mat" hidden><p class="aff-note">${esc(AMAZON_DISCLAIMER)}</p><div id="equipment" class="equip"></div><p id="eq-credits" class="eq-credits"></p></section>
  <section class="pane block" id="pane-extra" role="tabpanel" aria-labelledby="tab-extra" hidden><div class="extras">
 ${conservationHtml(r.conservation)}
 ${r.wines?.length ? `<article class="xcard x-raisin" id="x-vins"><h3 class="display">Accords vins 🍷</h3>${r.wines.map(w => `<div class="wine"><b>${esc(w.name)}</b>${w.producer ? ' — ' + esc(w.producer) : ''}${(m => m ? `<div class="muted">${m}</div>` : '')([w.origin, w.grapes, w.award ? '🏅 ' + w.award : ''].filter(Boolean).map(esc).join(' · '))}<div>${esc(w.why)}</div></div>`).join('')}</article>` : ''}
 ${r.histoire ? `<article class="xcard x-parchemin" id="x-histoire"><h3 class="display">Un peu d’histoire 🏰</h3><p>${esc(r.histoire)}</p></article>` : ''}
 ${r.fun_facts?.length ? `<article class="xcard x-postit" id="x-facts"><h3 class="display">Le saviez-vous ? 💡</h3><ul>${r.fun_facts.map(f => `<li>${esc(f.text)} <span class="muted">— ${f.source_url ? `<a href="${esc(f.source_url)}" rel="noopener" target="_blank">${esc(f.source_name)}</a>` : esc(f.source_name)}</span></li>`).join('')}</ul></article>` : ''}
  </div>${relatedHtml(r)}</section>
 </div>
 <div class="credit-row">${r.image?.url && r.image?.credit ? `<p class="credit">${r.image.own ? 'Photo' : 'Photo provisoire'} : ${r.image.source ? `<a href="${esc(r.image.source)}" rel="noopener" target="_blank">${esc(r.image.credit)}</a>` : esc(r.image.credit)}</p>` : '<span></span>'}<p class="credit coquille">Une coquille dans cette recette&nbsp;? <a id="coquille-link" href="${esc(coquilleHref(r))}" data-title="${esc(r.title)}" data-origin="${SITE_ORIGIN}" rel="noopener" target="_blank">Signalez-la en un clic</a></p></div>
</main></article>`;
  return { body, CRUMB, base };
}

export function recipeLd(r, ctx) {
  const { L, descOf, reallyVegan, CUIS, STOP, SOC, PROD, altOf, norm } = ctx;
  const base = L.resolve(r, r.house_toggle || r.default_variant);
  const dv = base;
  const iso = m => m ? 'PT' + (m >= 60 ? Math.floor(m / 60) + 'H' : '') + (m % 60 ? (m % 60) + 'M' : '') : undefined;
  const UF = { g: 'g', ml: 'ml', piece: '', gousse: 'gousse', cas: 'c. à s.', cac: 'c. à c.', pincee: 'pincée', botte: 'botte', feuille: 'feuille' };
  const DIET_LD = { vegetarien: 'https://schema.org/VegetarianDiet', vegan: 'https://schema.org/VeganDiet', sans_lactose: 'https://schema.org/LowLactoseDiet', sans_gluten: 'https://schema.org/GlutenFreeDiet' };
  const dd = [...(dv.diets || [])];
  const diets = dd.filter(d => d !== 'vegan' || reallyVegan(dv)).map(d => DIET_LD[d]).filter(Boolean);
  const cookMin = dv.time?.cook_min ?? (dv.time?.total_min != null && dv.time?.prep_min != null ? Math.max(0, dv.time.total_min - dv.time.prep_min) : 0);
  const kcal = dv.kcal_per_serving;
  return {
    '@context': 'https://schema.org', '@type': 'Recipe', name: r.title, inLanguage: 'fr',
    image: SOC[r.slug] ? SOC[r.slug].ld.map(x => PROD + x) : undefined, url: `${PROD}/r/${r.slug}/`, datePublished: r.date || undefined,
    author: { '@type': 'Person', name: 'Jigmé' },
    description: descOf(r, dv),
    recipeCategory: r.category === 'boissons' ? 'boisson' : r.category, recipeCuisine: (typeof r.cuisine === 'string' && r.cuisine.trim()) || CUIS[r.slug] || 'française',
    keywords: [...new Set([r.category, ...(r.tags || [])].filter(t => t && !STOP.has(norm(t)) || t === r.category))].join(', ') || undefined,
    suitableForDiet: diets.length ? diets : undefined,
    prepTime: iso(dv.time?.prep_min), cookTime: cookMin ? iso(cookMin) : 'PT0M',
    nutrition: kcal ? { '@type': 'NutritionInformation', calories: `${Math.round(kcal)} kcal`, servingSize: `1 ${L.unitLabel(dv.servings_unit, 1)}` } : undefined, totalTime: iso(dv.time?.total_min),
    recipeYield: `${dv.servings_base} ${dv.servings_unit}`,
    recipeIngredient: (dv.ingredients || []).map(i => [i.qty ?? '', UF[i.unit] ?? '', i.item].filter(x => x !== '').join(' ') + (i.to_taste ? ' (au goût)' : '')),
    recipeInstructions: (dv.steps || []).map((st, k) => ({ '@type': 'HowToStep', name: ctx.stepName(L.normalizeStep(st), k + 1), text: L.stepBody(st) }))
  };
}

/** Données de la fiche pour app.js (rj-data). Exporté : la régénération ciblée compare ce bloc pour savoir quelles fiches refaire. */
export function recipeDataTag(r, { OV, VERBES }) {
  return `<script type="application/json" id="rj-data">${JSON.stringify({ INFLECT: OV._inflections || {}, RECETTE: publicRecipe(r), VERBES }).replace(/</g, '\\u003c')}</script>`;
}

/** Écrit distRoot/r/<slug>/index.html (chemins logiques, avant SSR / hash / préfixe). */
export function writeRecipePage(r, ctx) {
  const { page, v, VERBES, OV, PROD, descOf, L, outRoot } = ctx;
  const root = outRoot || 'dist';
  const { body, CRUMB, base } = recipeArticle(r, ctx);
  const ld = recipeLd(r, ctx);
  const ldTag = `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>${crumbLd(CRUMB, ctx)}`;
  fs.mkdirSync(path.join(root, 'r', r.slug), { recursive: true });
  fs.writeFileSync(path.join(root, 'r', r.slug, 'index.html'), page(r.title + ' — Recettes de Jigmé', body,
    `<script src="${v('logic.js')}" defer></script><script src="${v('adapt-ui.js')}" defer></script>${recipeDataTag(r, ctx)}<script src="${v('app.js')}" defer></script><script src="${v('religion.js')}" defer></script><script src="${v('share.js')}" defer></script>`, 'p-recipe', ldTag, { type: 'article', title: r.title, desc: ld.description, url: `${PROD}/r/${r.slug}/`, og: ctx.SOC[r.slug]?.og, pin: ctx.SOC[r.slug]?.pin, alt: ctx.altOf(r) }));
  return path.join(root, 'r', r.slug, 'index.html');
}

// ---------- ACCUEIL (factorisé depuis build.mjs, 15/11/2026) : cartes, catégories, tri ; même code pour le build et la régénération ciblée
export function sectionTabs(active) {
  const tabs = [
    ["/", "Recettes"],
    ["/restaurant/", "Restaurants", "Restos"],
    ["/affilies/", "Liens affiliés", "Liens"],
  ];
  return `<nav class="rj-site-tabs" aria-label="Explorer">${tabs.map(([href, lab, short]) => {
    const cur = lab === active ? ' aria-current="page"' : "";
    const aria = short ? ` aria-label="${lab}"` : "";
    const label = short
      ? `<span class="rj-tab-full">${lab}</span><span class="rj-tab-short">${short}</span>`
      : lab;
    return `<a class="rj-site-tab" href="${href}"${cur}${aria}>${label}</a>`;
  }).join("")}</nav>`;
}

export function writeHome(ctx) {
  const { cardsOrder, L, esc, norm, tileImg, emoji, HEART, PRE_BAR, homeRandomJs, page, v, adaptPanelHTML, IS_PROD, PROD, SOC, BANNER_PIC, BIO_BACK, BANNER_PRELOAD, HOME_DESC, firstSlug, outRoot } = ctx;
  const log = ctx.log || (() => {});
  const root = outRoot || 'dist';
  const file = path.join(root, 'index.html');
  // v123 : catégories de l'accueil, dérivées des fiches (lecture seule) : category (salé/sucré), cuisine (française/alsacienne → françaises, sinon du monde),
  // ingrédients de la version par défaut (viande, poisson/fruits de mer ; végétarien = tag), tags de type (entrée, plat, dessert, goûter, soupe, pâtes/nouilles),
  // fast-food (tags/titre burger, sandwich, pizza, frites…), du quotidien (salé, ≤ 40 min, difficulté ≤ 2, ou tag rapide salé) — ces deux dernières sont approchées.
  const CAT_FAMS = [['Goût', [['sale', 'Salé'], ['sucre', 'Sucré'], ['boisson', 'Boissons']]], ['Origine', [['fr', 'Françaises'], ['monde', 'Du monde']]], ['Ingrédient', [['viande', 'Viande'], ['poisson', 'Poisson & fruits de mer']]] /* v126 : Végétarien retiré (chaque recette s'adapte en végétarien) */, ['Type', [['entree', 'Entrées'], ['plat', 'Plats'], ['dessert', 'Desserts'], ['gouter', 'Goûters'], ['soupe', 'Soupes'], ['pates', 'Pâtes & nouilles']]], ['Style', [['fastfood', 'Fast-food'], ['quotidien', 'Du quotidien']]]];
  const MEAT = /\b(poulet|volaille fermi|b(œ|oe)uf|porc|veau|agneau|canard|lardons?|jambon|bacon|chorizo|saucisses?|dinde|lapin|steaks?|viande|hach(é|e)|magret|foie gras|pancetta|merguez|chair à saucisse|r(ô|o)ti|guanciale|prosciutto|coppa|boudin|andouille|cuisses? de|blancs? de poulet|filet mignon|échine|paleron|joue|gigot|côtes? de|poitrine|pâté|rillettes|speck|mortadelle|salami|nems?)\b/i;
  const FISH = /\b(poissons?|saumon|thon|cabillaud|crevettes?|moules?|saint-jacques|calamars?|anchois|sardines?|truite|maquereau|dorade|colin|merlu|haddock|crabe|homard|langoustines?|poulpe|seiche|fruits de mer|surimi|gambas|huîtres?|lieu noir|bar |églefin|tarama|œufs de saumon)\b/i;
  const FISH_NO = /sauce (de )?poisson|nuoc|nước|nam pla/i, MEAT_NO = /bouillon|fond de/i;
  function catGroups(r) { const g = new Set(), tags = (r.tags || []).map(t => String(t).toLowerCase()), v = L.resolve(r, r.house_toggle || r.default_variant) || {}, ings = (v.ingredients || []).map(i => String(i.item || ''));
    const c = String(r.category || '').toLowerCase(); if (c === 'salé') g.add('sale'); if (c === 'sucré') g.add('sucre'); if (c === 'boissons' || tags.includes('boisson')) g.add('boisson');
    const cu = String(r.cuisine || '').toLowerCase(); if (cu) g.add(/^(française|alsacienne)$/.test(cu) ? 'fr' : 'monde');
    if (ings.some(i => MEAT.test(i) && !MEAT_NO.test(i)) || (!tags.some(t => /^(végétarien|végane|vegan)$/.test(t)) && tags.some(t => /^(poulet|bœuf|porc|veau|canard|agneau|viande)$/.test(t)))) g.add('viande'); // v124 : un tag « bœuf » sur une fiche végétarienne (ex. wellington végétarien = style) ne la classe plus en Viande
    if (ings.some(i => FISH.test(i + ' ') && !FISH_NO.test(i)) || tags.some(t => /^(poisson|saumon|fruits de mer|thon|crevettes?)$/.test(t))) g.add('poisson');
    if (!g.has('viande') && !g.has('poisson') && tags.some(t => /^(végétarien|végane|vegan)$/.test(t)) || (c === 'salé' && !g.has('viande') && !g.has('poisson') && (v.diets || []).some(d => /veget|vegan/.test(d)))) g.add('vege');
    for (const [t, k] of [['entrée', 'entree'], ['plat', 'plat'], ['dessert', 'dessert'], ['goûter', 'gouter'], ['soupe', 'soupe'], ['pâtes', 'pates'], ['nouilles', 'pates']]) if (tags.includes(t)) g.add(k);
    if (tags.some(t => /^(burger|sandwich|pizza|frites|hot-dog|wrap|tacos|kebab|nuggets)$/.test(t)) || /burger|sandwich|pizza|hot[- ]?dog|frites|kebab|nuggets|tacos|wrap|bagel|club/i.test(r.title)) g.add('fastfood');
    const tm = v.time && v.time.total_min; if (c === 'salé' && ((tm && tm <= 40 && (v.difficulty || 2) <= 2) || tags.includes('rapide'))) g.add('quotidien');
    return [...g]; }
  const CAT_N = {}; for (const r of cardsOrder) for (const k of catGroups(r)) CAT_N[k] = (CAT_N[k] || 0) + 1;
  log('catégories', JSON.stringify(CAT_N)); if (process.env.RJ_CAT_DEBUG) for (const r of cardsOrder) { const g = catGroups(r); if (g.includes('vege') && (g.includes('viande') || g.includes('poisson'))) { const v = L.resolve(r, r.house_toggle || r.default_variant) || {}; console.log('CHEV', r.slug, g.join(','), '|', (r.tags || []).join(','), '|', (v.ingredients || []).map(i => i.item).filter(i => MEAT.test(i) || FISH.test(i + ' ')).join(' ; ')); } }
  const cards = cardsOrder.map((r, i) => {
    const words = [r.title, r.category]; // v49 : tags passés dans data-i (même règle que les ingrédients)
    // v49 : ingrédients à part (data-i, séparés par « | ») pour la règle des composés (noix ≠ noix de muscade) de home.js ; data-search = titre + catégorie
    const ings = new Set(); for (const k of Object.keys(r.variants)) for (const i of (L.resolve(r, k).ingredients || [])) ings.add(norm(i.item).replace(/\|/g, ' ')); for (const t of (r.tags || [])) ings.add(norm(t).replace(/\|/g, ' '));
    const kc = L.resolve(r, r.house_toggle || r.default_variant)?.kcal_per_serving; // kcal par portion de la version affichée par défaut (même source que le JSON-LD)
    return `<div class="tw" data-slug="${esc(r.slug)}"${r.category === 'boissons' ? ' hidden' : ''} data-date="${r.date}" data-alpha="${r.alpha}" data-kcal="${kc > 0 ? Math.round(kc) : ''}"><a class="tile ${r.title_color === 'dark' ? 'dark' : 'light'}" href="/r/${r.slug}/" data-cat="${esc(norm(r.category))}" data-g="${catGroups(r).join(' ')}" data-search="${esc(norm(words.join(' ')))}" data-i="${esc([...ings].join('|'))}">${r.image?.url ? tileImg(r, i) : `<span class="noimg">${emoji(r)}</span>`}${kc > 0 ? `<span class="kc">${Math.round(kc)} kcal</span>` : ''}<span class="tt">${esc(r.title)}</span></a><button type="button" class="fav-btn fav-tile" data-slug="${esc(r.slug)}" data-title="${esc(r.title)}" aria-haspopup="dialog" aria-label="Ajouter « ${esc(r.title)} » à une collection ou aux signets">${HEART}</button></div>`;
  }).join('');
  const home = `${PRE_BAR}
<main class="home">
 <header class="home-head"><div class="home-banner" aria-hidden="true">__BANNER_PIC__</div><p class="bn-title" aria-hidden="true">Jigmé Cuisine</p><a class="bn-back" href="__BIO_BACK__"><span aria-hidden="true">←</span> Lien en bio</a><h1 class="display sr-only">Les recettes de Jigmé</h1>
  <div class="hb-field hsearch" id="search-wrap"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" enterkeyhint="search" placeholder="" data-ph="Une recette ? Un ingrédient ?" autocomplete="off" aria-label="Rechercher une recette ou un ingrédient"><button type="button" class="hb-x" id="search-x" aria-label="Effacer la recherche"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
 </header>
 ${sectionTabs("Recettes")}
 <div class="rj-content-viewport"><div class="rj-section-content" data-rj-path="/">
 <div class="hbar" id="hbar" role="toolbar" aria-label="Adapter, catégories et tri"><div class="hb-unif">
  <button type="button" id="home-adapt" class="hb-btn hb-adapt" aria-label="Adapter les recettes à vos préférences" aria-expanded="false" aria-controls="bn-panel"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span class="ha-action"><span class="ha-lab ha-lab-desk">Adapter les recettes à vos préférences</span><span class="ha-lab ha-lab-mob">Adapter les recettes</span></span></button>
  <div class="hb-l">
   <button type="button" id="cat-btn" class="hb-btn cat-pill" aria-label="Par catégorie" aria-expanded="false" aria-controls="bn-panel"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="3.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="3.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg><span class="hb-t">Catégories</span><span id="fcount" class="count" hidden></span></button>
   <button type="button" id="filters-btn" class="hb-btn" aria-label="Tri" aria-expanded="false" aria-controls="filters-wrap"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16M3.5 16.5 7 20l3.5-3.5M17 20V4m-3.5 3.5L17 4l3.5 3.5"/></svg><span class="hb-t">Tri</span></button>
  </div>
 </div></div>
 <p id="home-adapt-summary" class="home-adapt-summary" role="status" aria-live="polite" hidden></p>
 <div class="hb-pop" id="cats-wrap" hidden>
  <div id="filters" class="cats" role="group" aria-label="Catégories"><div class="pillbar"><button class="pill-tab on" data-g="" aria-pressed="true">Toutes</button>${CAT_FAMS.map(([fam, l]) => l.filter(([k]) => CAT_N[k]).map(([k, lab]) => `<button class="pill-tab" data-g="${k}" data-f="${fam}" aria-pressed="false">${lab} <small>${CAT_N[k]}</small></button>`).join('')).join('<i class="cats-sep" aria-hidden="true"></i>')}</div></div>
 </div>
 <div class="hb-pop" id="filters-wrap" hidden><p class="hb-pop-t">Trier</p>
  <div id="sorts" class="pillbar" role="group" aria-label="Trier"><button class="pill-tab on" data-sort="recent" aria-pressed="true">Plus récent</button><button class="pill-tab" data-sort="ancien" aria-pressed="false">Plus ancien</button><button class="pill-tab" data-sort="az" aria-pressed="false">A-Z</button><button class="pill-tab" data-sort="kcal" aria-pressed="false">Calories</button></div>
  <p class="flt-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span>Chaque recette peut être adaptée depuis sa fiche selon votre régime, vos allergies ou vos convictions. Votre choix s’applique ensuite à toutes les recettes, et les alternatives s’affichent au fil des fiches.</span></p>
 </div>
 <p id="kcal-note" class="kcal-note" role="status" aria-live="polite" hidden></p>
 <div class="tiles random-pending" id="tiles">${cards}</div><script>${homeRandomJs}</script>
 <p id="empty" class="empty" hidden>Aucune recette ne correspond.</p>
</div></div></main>`;
  fs.writeFileSync(file, page('Les recettes de Jigmé', home.replace('__BANNER_PIC__', BANNER_PIC).replace('__BIO_BACK__', BIO_BACK).replace('</main>', `<nav class="cat-links" aria-label="Catégories"><a href="/c/sale/">Recettes salées</a> · <a href="/c/sucre/">Recettes sucrées</a> · <a href="/c/boissons/">Boissons</a></nav></main>`), `<template id="ha-tpl">${adaptPanelHTML({ title: 'Adapter les recettes', hint: '<p class="muted ha-hint">Les ingrédients s’adaptent automatiquement à vos préférences.</p>', icon: '👥', rel: false })}</template><script src="${v('logic.js')}" defer></script><script src="${v('adapt-ui.js')}" defer></script><script src="${v('home.js')}" defer></script>${IS_PROD ? '' : `<script src="${v('restaurants.js')}" defer></script>`}`, 'p-home', BANNER_PRELOAD + (IS_PROD ? '' : `<link rel="stylesheet" href="${v('restaurants.css')}">`), { title: 'Les recettes de Jigmé', desc: HOME_DESC, url: PROD + '/', og: SOC[firstSlug]?.og, pin: SOC[firstSlug]?.pin, alt: 'Les recettes de Jigmé' }));
  return file;
}

export function writeIdx(ctx) {
  const { recipes, THUMB360, THUMB, outRoot } = ctx;
  const root = outRoot || 'dist';
  fs.writeFileSync(path.join(root, 'idx.json'), JSON.stringify(Object.fromEntries(recipes.map(r => [r.slug, [r.title, r.image?.url ? (THUMB360[r.image.url] || THUMB[r.image.url] || r.image.url) : null]]))));
  return path.join(root, 'idx.json');
}

export function writeFavoris(ctx) {
  const { recipes, page, v, HEART, PRE_BAR, HERO, HERO_SET, BANNER_SIZES, altOf, emoji, outRoot } = ctx;
  const root = outRoot || 'dist';
  const IDX = recipes.map(r => ({ s: r.slug, t: r.title, i: r.image?.url || null, a: altOf(r), d: r.title_color === 'dark' ? 1 : 0, e: emoji(r) }));
  fs.mkdirSync(path.join(root, 'favoris'), { recursive: true });
  const file = path.join(root, 'favoris', 'index.html');
  fs.writeFileSync(file, page('Mes signets — Recettes de Jigmé', `${PRE_BAR}
<main class="home favs">
 <header class="home-head fv-head"><div class="home-banner fv-banner" aria-hidden="true"><img class="bn-b" id="fv-img" src="${HERO}" srcset="${HERO_SET}" sizes="${BANNER_SIZES}" width="1200" height="1333" alt="" decoding="async" fetchpriority="high"></div><p class="bn-title" aria-hidden="true">Mes signets</p><a class="bn-back fav-back" href="/"><span aria-hidden="true">←</span> Recettes</a><h1 class="display sr-only">Mes signets</h1></header>
 <p class="muted fv-sub"><span class="fv-long">Vos recettes préférées et vos collections, enregistrées sur cet appareil, sans compte.</span><span class="fv-short">Enregistrés sur cet appareil, sans compte</span></p>
 <div id="favs-root" aria-live="polite"><noscript><p class="empty">Activez JavaScript pour voir vos signets.</p></noscript></div>
</main>`, `<script type="application/json" id="rj-data">${JSON.stringify({ IDX, HEART }).replace(/</g, '\\u003c')}</script><script src="${v('favoris.js')}" defer></script>`, 'p-home p-favs'));
  return file;
}

export const CATS = [['sale', 'salé', 'Recettes salées', 'Les recettes salées de Jigmé : plats, entrées, soupes, gratins et apéritifs faits maison, avec versions végétariennes et sans allergènes.'], ['sucre', 'sucré', 'Recettes sucrées', 'Les recettes sucrées de Jigmé : desserts, gâteaux, tartes, boissons et douceurs faits maison, avec portions ajustables et versions sans allergènes.'], ['boissons', 'boissons', 'Boissons', 'Les boissons de Jigmé : cocktails, thés, lattes, bubble teas, lassi et chocolat chaud faits maison, avec portions ajustables.']];

export function writeCategoryPage(cs, ctx) {
  const cat = CATS.find(c => c[0] === cs);
  if (!cat) throw new Error('catégorie inconnue ' + cs);
  const [key, name, h, d] = cat;
  const { cardsOrder, norm, page, tileImg, emoji, HEART, esc, PROD, SOC, outRoot, altOf } = ctx;
  const root = outRoot || 'dist';
  const list = cardsOrder.filter(r => norm(r.category) === norm(name));
  const tl = list.map((r, i) => `<div class="tw" data-slug="${esc(r.slug)}"><a class="tile ${r.title_color === 'dark' ? 'dark' : 'light'}" href="/r/${r.slug}/">${r.image?.url ? tileImg(r, i) : `<span class="noimg">${emoji(r)}</span>`}<span class="tt">${esc(r.title)}</span></a><button type="button" class="fav-btn fav-tile" data-slug="${esc(r.slug)}" data-title="${esc(r.title)}" aria-haspopup="dialog" aria-label="Ajouter « ${esc(r.title)} » à une collection ou aux signets">${HEART}</button></div>`).join('');
  fs.mkdirSync(path.join(root, 'c', key), { recursive: true });
  const file = path.join(root, 'c', key, 'index.html');
  fs.writeFileSync(file, page(h + ' — Recettes de Jigmé', `<main class="home cat-page"><header class="home-head"><a class="fav-back" href="/">← Recettes</a><h1 class="display">${h}</h1><p class="muted">${esc(d)}</p></header><div class="tiles">${tl}</div></main>`, '', 'p-home p-cat', crumbLd([['Recettes', '/'], [h, `/c/${key}/`]], ctx), { title: h + ' — Les recettes de Jigmé', desc: d, url: `${PROD}/c/${key}/`, og: SOC[list.find(x => SOC[x.slug])?.slug]?.og, pin: SOC[list.find(x => SOC[x.slug])?.slug]?.pin, alt: h }));
  return file;
}

export function writeCategoryPages(ctx) {
  return CATS.map(([cs]) => writeCategoryPage(cs, ctx));
}

export function writeCuisineSitemap(ctx) {
  const { recipes, PROD, outRoot } = ctx;
  const root = outRoot || 'dist';
  const today = ctx.today || new Date().toISOString().slice(0, 10);
  const file = path.join(root, 'sitemap.xml');
  fs.writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[[PROD + '/', today], ...CATS.map(c => [`${PROD}/c/${c[0]}/`, today]), ...recipes.map(r => [`${PROD}/r/${r.slug}/`, r.date])].map(([u, d]) => `<url><loc>${u}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`);
  return file;
}

export function catDirOf(category, norm) {
  const n = norm(category);
  if (n === 'sucre') return 'sucre';
  if (n === 'boissons') return 'boissons';
  return 'sale';
}

// v255 : rubrique Restaurants « En construction » (section `restaurants` du back, docs/editeur-recettes.md §7). Gabarit des liens affiliés
// (a.rj-link-card) ; sans href, div sans flèche. Fond fixe (classe CSS) : la CSP interdit les styles en ligne (background/image du back non rendus).
export function constructionActive(c) { return !!(c && c.on === true && c.card && typeof c.card.title === 'string' && c.card.title); }
/** v256 : effets de la carte (même modèle que les recos matériel et les cartes Lien en bio) : seules les valeurs validées passent,
 *  posées ensuite par restaurants.js en CSSOM (pas de style en ligne sous la CSP). */
const HEX6 = /^#[0-9a-fA-F]{6}$/;
const numIn = (v, min, max) => { const n = Number(v); return Number.isFinite(n) && n >= min && n <= max ? n : null; };
const fxTexte = (v, max) => { const t = String(v ?? '').replace(/[\u0000-\u001f\u007f<>]/g, '').trim().replace(/\s+/g, ' '); return t && t.length <= max ? t : null; };
export function constructionFx(k, avecImage) {
  const o = {};
  const c = k.crop;
  if (avecImage && c && typeof c === 'object') { const x = numIn(c.x, 0, 100), y = numIn(c.y, 0, 100), z = numIn(c.zoom, 0.5, 3); if (x != null || y != null || z != null) o.crop = { x: x ?? 50, y: y ?? 50, zoom: z ?? 1 }; }
  const m = k.mention;
  if (m && typeof m === 'object' && fxTexte(m.label, 80) && HEX6.test(m.color || '')) o.mention = { label: fxTexte(m.label, 80), color: m.color, angle: numIn(m.angle, -45, 45) ?? 0, x: numIn(m.x, -600, 600) ?? 0, y: numIn(m.y, -60, 400) ?? 0 };
  if (k.halo === true) { o.halo = true; if (HEX6.test(k.haloColor || '')) o.haloColor = k.haloColor; }
  const f = k.fx && typeof k.fx === 'object' ? k.fx : {}, fx = {};
  if (f.ship && fxTexte(f.ship.text, 40) && HEX6.test(f.ship.color || '')) fx.ship = { text: fxTexte(f.ship.text, 40), color: f.ship.color, speed: numIn(f.ship.speed, 4, 30) ?? 8 };
  if (f.mark && fxTexte(f.mark.text, 30) && HEX6.test(f.mark.color || '')) fx.mark = { text: fxTexte(f.mark.text, 30), color: f.mark.color, x: numIn(f.mark.x, 0, 100) ?? 4, y: numIn(f.mark.y, 0, 100) ?? 70 };
  if (f.glow && HEX6.test(f.glow.color || '')) fx.glow = { color: f.glow.color, speed: numIn(f.glow.speed, 1, 12) ?? 3 };
  if (f.tag && fxTexte(f.tag.text, 20) && HEX6.test(f.tag.color || '')) fx.tag = { text: fxTexte(f.tag.text, 20), color: f.tag.color, x: numIn(f.tag.x, 0, 100) ?? 3 };
  if (Object.keys(fx).length) o.fx = fx;
  return Object.keys(o).length ? o : null;
}
/** k._img : photo déjà copiée sur le site par la régénération ({ src: "/img/construction/<sha>.webp", w, h }) ; sans elle, le fond fixe. */
export function constructionHtml(c, esc) {
  const k = c.card, href = typeof k.href === 'string' && /^https:\/\//.test(k.href) ? k.href : null;
  const img = k._img && /^\/img\/construction\/[a-f0-9]{16,64}\.webp$/.test(k._img.src) ? k._img : null;
  const fx = constructionFx(k, !!img);
  const photo = img ? `<img class="rj-link-card-img" src="${esc(img.src)}" alt=""${img.w && img.h ? ` width="${img.w}" height="${img.h}"` : ''} decoding="async" fetchpriority="high">` : '';
  const inner = `<span class="rj-link-card-bg rj-link-card-bg--construction" aria-hidden="true"></span>${photo}<span class="rj-link-card-veil" aria-hidden="true"></span>${href ? '<span class="rj-link-card-arrow" aria-hidden="true">↗</span>' : ''}<h2>${esc(k.title)}</h2>${k.text ? `<p class="rj-construction-texte">${esc(k.text)}</p>` : ''}`;
  const attrs = `class="rj-link-card rj-construction-carte" role="listitem"${fx ? ` data-rj-fx="${esc(JSON.stringify(fx))}"` : ''}`;
  const card = href ? `<a ${attrs} href="${esc(href)}"${k.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>` : `<div ${attrs}>${inner}</div>`;
  const legende = k.caption ? `<p class="rj-construction-legende">${esc(k.caption)}</p>` : '';
  return `<div class="tiles rj-aff-stack rj-construction" role="list" data-rj-construction="restaurants">${card}</div>${legende}`;
}
const listingOuConstruction = (ctx, html) => constructionActive(ctx.CONSTRUCTION) ? constructionHtml(ctx.CONSTRUCTION, ctx.esc || escHtml) : html();
const escHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function writeRestaurantPage(r, ctx) {
  const { page, PRE_BAR, RR, PROD, v, sharpMeta, RS_OPTS, RS_CSS, outRoot } = ctx;
  const root = outRoot || 'dist';
  const md = sharpMeta[r.photo] || { width: 1200, height: 800 };
  fs.mkdirSync(path.join(root, 'restaurant', r.slug), { recursive: true });
  const file = path.join(root, 'restaurant', r.slug, 'index.html');
  const cons = constructionActive(ctx.CONSTRUCTION); // en construction : la carte seule, sans la review ni son JSON-LD
  fs.writeFileSync(file, page(RR.titleOf(r), `${PRE_BAR}<main class="rv-page">${cons ? constructionHtml(ctx.CONSTRUCTION, ctx.esc || escHtml) : RR.renderReview(r, RS_OPTS)}</main>`, cons && constructionFx(ctx.CONSTRUCTION.card, !!ctx.CONSTRUCTION.card._img) ? (ctx.RS_JS || '') : '', 'p-resto', RS_CSS + (cons ? '' : RR.reviewLd(r, PROD, RS_OPTS)), { type: 'article', title: RR.titleOf(r), desc: RR.reviewDescription(r), url: `${PROD}/restaurant/${r.slug}/`, og: { url: r.photo, w: md.width, h: md.height, type: 'image/webp' }, alt: r.photo_alt || r.nom }));
  return file;
}

export function writeRestaurantListing(ctx) {
  const { page, PRE_BAR, RESTOS, RS_OPTS, RR, RS_JS, RS_CSS, BANNER_PRELOAD, HOME_DESC, PROD, SOC, firstSlug, sharedHead, sectionTabs, outRoot } = ctx;
  const root = outRoot || 'dist';
  const restaurantContent = listingOuConstruction(ctx, () => RR.renderListing(RESTOS, RS_OPTS));
  fs.mkdirSync(path.join(root, 'restaurant'), { recursive: true });
  const file = path.join(root, 'restaurant', 'index.html');
  fs.writeFileSync(file, page('Restaurants — Recettes de Jigmé', `${PRE_BAR}<main class="home">${sharedHead}${sectionTabs('Restaurants')}<div class="rj-content-viewport"><div class="rj-section-content" data-rj-path="/restaurant/"><h1 class="display sr-only">Restaurants</h1>${restaurantContent}</div></div></main>`, RS_JS, 'p-home', BANNER_PRELOAD + RS_CSS, { title: 'Restaurants — Recettes de Jigmé', desc: HOME_DESC, url: PROD + '/restaurant/', og: SOC[firstSlug]?.og, pin: SOC[firstSlug]?.pin, alt: 'Restaurants' }));
  return file;
}

// Pages /restaurant/c/<cat>/ (une par catégorie du domaine, même gabarit que /restaurant/, filtre présélectionné).
// Une catégorie retirée du domaine perd sa page. Même écriture au build complet et à la régénération ciblée.
export function writeRestaurantCategoryPages(ctx) {
  const { page, PRE_BAR, RESTOS, RS_OPTS, RR, RS_JS, RS_CSS, BANNER_PRELOAD, PROD, SOC, firstSlug, sharedHead, sectionTabs, outRoot } = ctx;
  const root = outRoot || 'dist', cdir = path.join(root, 'restaurant', 'c'), out = [];
  fs.mkdirSync(cdir, { recursive: true });
  const keys = new Set(RR.CATEGORIES.map(c => c[0]));
  for (const d of fs.readdirSync(cdir)) if (!keys.has(d) && SAFE_SLUG.test(d)) fs.rmSync(path.join(cdir, d), { recursive: true, force: true });
  for (const [k, label] of RR.CATEGORIES) {
    const visibles = RESTOS.filter(r => !r.hidden && r.statut !== 'brouillon' && r.categorie === k).length;
    const title = `${label} — Restaurants — Recettes de Jigmé`;
    const desc = `Restaurants de la catégorie ${label.toLowerCase()} reviewés par Jigmé : adresses, carte et distances depuis chez vous${visibles ? ` (${visibles} restaurant${visibles > 1 ? 's' : ''})` : ''}.`;
    fs.mkdirSync(path.join(cdir, k), { recursive: true });
    const file = path.join(cdir, k, 'index.html');
    fs.writeFileSync(file, page(title, `${PRE_BAR}<main class="home">${sharedHead}${sectionTabs('Restaurants')}<div class="rj-content-viewport"><div class="rj-section-content" data-rj-path="/restaurant/"><h1 class="display sr-only">Restaurants : ${label}</h1>${listingOuConstruction(ctx, () => RR.renderListing(RESTOS, { ...RS_OPTS, cat: k }))}</div></div></main>`, RS_JS, 'p-home', BANNER_PRELOAD + RS_CSS, { title, desc, url: `${PROD}/restaurant/c/${k}/`, og: SOC[firstSlug]?.og, pin: SOC[firstSlug]?.pin, alt: label }));
    out.push(file);
  }
  return out;
}

export function writeRestaurantSitemap(ctx) {
  const { RESTOS, PROD, outRoot } = ctx;
  const root = outRoot || 'dist';
  const REAL = RESTOS.filter(r => !r.hidden && !r.test);
  fs.mkdirSync(path.join(root, 'restaurant'), { recursive: true });
  const file = path.join(root, 'restaurant', 'sitemap.xml');
  fs.writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...(REAL.length ? [[PROD + '/restaurant/', '']] : []), ...ctx.RR.CATEGORIES.filter(([k]) => REAL.some(r => r.categorie === k)).map(([k]) => [`${PROD}/restaurant/c/${k}/`, '']), ...REAL.map(r => [`${PROD}/restaurant/${r.slug}/`, r.date_review])].map(([u, d]) => `<url><loc>${u}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`);
  return file;
}

// M1 (audit) : un slug venu d'un événement ne doit jamais sortir de son dossier (../.., /, \0…). Refus 400, rien n'est effacé.
export const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function safeChildDir(base, slug) {
  const err = () => Object.assign(new Error('slug invalide'), { status: 400, code: 'slug' });
  if (typeof slug !== 'string' || slug.length > 120 || !SAFE_SLUG.test(slug)) throw err();
  const b = path.resolve(base), d = path.resolve(b, slug);
  if (path.dirname(d) !== b) throw err();
  return d;
}

export function removeRecipePage(slug, publicDir) {
  const dir = safeChildDir(path.join(publicDir, 'r'), slug);
  if (fs.existsSync(dir)) { fs.rmSync(dir, { recursive: true, force: true }); return true; }
  return false;
}

export function removeRestaurantPage(slug, restoDir) {
  const dir = safeChildDir(restoDir, slug);
  if (fs.existsSync(dir)) { fs.rmSync(dir, { recursive: true, force: true }); return true; }
  return false;
}

/** ?v=<sha1 8> des images (même règle que le build) puis prefixText, sur un texte. imgRoot : dossier ou liste (v235 : images préparées puis public). */
export function finalizeText(t, { imgRoot, prefix = true, prefixText, cache = {} }) {
  t = t.replace(/(\/img\/[A-Za-z0-9_\/.-]+\.(?:webp|avif|jpg|jpeg|png))(\?v=[0-9a-f]+)?(?=[\s"'),\\&])/g, (m, u) => {
    if (!(u in cache)) { const f = [].concat(imgRoot).map(r => path.join(r, u.replace(/^\//, ''))).find(x => fs.existsSync(x)); cache[u] = f ? crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8) : null; }
    return cache[u] ? u + '?v=' + cache[u] : m;
  });
  if (prefix) {
    if (!prefixText) throw new Error('prefixText requis');
    t = prefixText(t);
  }
  return t;
}

/** Applique ?v= et prefixText sur une liste de fichiers déjà écrits en chemins logiques, puis les copie vers la destination publique. */
export function finalizeLogicalFiles(files, { imgRoot, prefix = true, prefixText, restoReal = 0 }) {
  const cache = {};
  const out = [];
  for (const f of files) {
    if (!f || !fs.existsSync(f)) continue;
    let t = finalizeText(fs.readFileSync(f, 'utf8'), { imgRoot, prefix, prefixText, cache });
    const rel = f.replace(/\\/g, '/');
    if ((/\/(favoris|affilies|restaurant\/(burger-test-express|table-test-etoilee))\/index\.html$/.test(rel) || (/\/restaurant\/(c\/[a-z0-9-]+\/)?index\.html$/.test(rel) && !restoReal)) && !/<meta name="robots"/.test(t)) {
      t = t.replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta name="robots" content="noindex, follow">');
    }
    fs.writeFileSync(f, t);
    out.push(f);
  }
  return out;
}

export function installToPublic(logicalRoot, mapping) {
  // mapping: { 'r/slug/index.html': publicFile, ... }
  const copied = [];
  for (const [rel, dest] of Object.entries(mapping)) {
    const src = path.join(logicalRoot, rel);
    if (!fs.existsSync(src)) continue;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied.push(dest);
  }
  return copied;
}


function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function readIdx(file) {
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return {}; }
}

export function upsertIdxEntry(file, slug, entry, { remove = false } = {}) {
  const idx = readIdx(file);
  if (remove) delete idx[slug];
  else idx[slug] = entry;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(idx));
  return file;
}

export function patchSitemapEntry(file, loc, { present, lastmod } = {}) {
  if (!fs.existsSync(file)) {
    if (!present) return false;
    fs.writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>\n`);
  }
  let xml = fs.readFileSync(file, "utf8");
  xml = xml.replace(new RegExp(`<url>\\s*<loc>${escapeRe(loc)}</loc>[\\s\\S]*?</url>\\s*`), "");
  if (present) {
    const day = lastmod || new Date().toISOString().slice(0, 10);
    const entry = `<url><loc>${loc}</loc>${day ? `<lastmod>${day}</lastmod>` : ""}</url>\n`;
    if (xml.includes("</urlset>")) xml = xml.replace("</urlset>", entry + "</urlset>");
    else xml += entry;
  }
  fs.writeFileSync(file, xml);
  return true;
}

export function patchCategoryTile(file, slug, data, { present, escFn } = {}) {
  if (!fs.existsSync(file)) return false;
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(new RegExp(`<div class="tw" data-slug="${escapeRe(slug)}">[\\s\\S]*?</button></div>`), "");
  if (present) {
    const e = escFn || (s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])));
    const title = e(data.title || slug);
    const prefixed = html.includes("/cuisine/");
    const href = prefixed ? `/cuisine/r/${slug}/` : `/r/${slug}/`;
    const icon = data.category === "sucré" ? "🍮" : data.category === "boissons" ? "🥤" : "🥘";
    const tile = `<div class="tw" data-slug="${slug}"><a class="tile light" href="${href}"><span class="noimg">${icon}</span><span class="tt">${title}</span></a><button type="button" class="fav-btn fav-tile" data-slug="${slug}" data-title="${title}" aria-haspopup="dialog" aria-label="Ajouter « ${title} » à une collection ou aux signets"></button></div>`;
    if (html.includes('<div class="tiles">')) html = html.replace('<div class="tiles">', '<div class="tiles">' + tile);
    else return false;
  }
  fs.writeFileSync(file, html);
  return true;
}

// v235 : page « Liens affiliés » partagée par build.mjs et la régénération ciblée (son og:image suit la fiche la plus récente).
export const affiliesHtml = ({ esc, AMAZON_DISCLAIMER }) => `<p class="aff-note">${esc(AMAZON_DISCLAIMER)}</p><div class="tiles rj-aff-stack" role="list"><a class="rj-link-card" role="listitem" href="https://amzlink.to/az0dTSMR7bjr2" target="_blank" rel="noopener noreferrer sponsored"><span class="rj-link-card-bg rj-link-card-bg--materiel" aria-hidden="true"></span><span class="rj-link-card-veil" aria-hidden="true"></span><span class="rj-link-card-arrow" aria-hidden="true">↗</span><h2>🧰 Mon matériel</h2></a><a class="rj-link-card" role="listitem" href="https://amzlink.to/az0DucdgXXRkv" target="_blank" rel="noopener noreferrer sponsored"><span class="rj-link-card-bg rj-link-card-bg--livres" aria-hidden="true"></span><span class="rj-link-card-veil" aria-hidden="true"></span><span class="rj-link-card-arrow" aria-hidden="true">↗</span><h2>📚 Livres</h2></a></div>`;
export function writeSectionPage(route, title, content, ctx) {
  const { page, PRE_BAR, sharedHead, sectionTabs, RS_JS, RS_CSS, BANNER_PRELOAD, HOME_DESC, PROD, SOC, firstSlug, outRoot } = ctx;
  const root = outRoot || 'dist';
  fs.mkdirSync(path.join(root, route), { recursive: true });
  const file = path.join(root, route, 'index.html');
  fs.writeFileSync(file, page(title + ' — Recettes de Jigmé', `${PRE_BAR}<main class="home">${sharedHead}${sectionTabs(title)}<div class="rj-content-viewport"><div class="rj-section-content" data-rj-path="/${route}/"><h1 class="display sr-only">${title}</h1>${content}</div></div></main>`, RS_JS, 'p-home', BANNER_PRELOAD + RS_CSS, { title: title + ' — Recettes de Jigmé', desc: HOME_DESC, url: PROD + '/' + route + '/', og: SOC[firstSlug]?.og, pin: SOC[firstSlug]?.pin, alt: title }));
  return file;
}
