// Contrôles SEO par page, partagés par check-seo.mjs (build complet) et generate-targeted.mjs (webhook, v235).
// Les pages sont contrôlées sur leurs chemins logiques, avant prefixText (canonical https://recettes.jigme.fr/…).
export const dec = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
export const LDS = h => [...h.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)].map(m => JSON.parse(m[1].replace(/\\u003c/g, '<')));
// Fiches citées dans « Recettes proches » ; préfixe toléré (pages déjà publiées sous /cuisine/).
export const relatedTargets = h => { const out = []; for (const m of h.matchAll(/<nav class="related".*?<\/nav>/gs)) for (const l of m[0].matchAll(/href="(?:\/[a-z-]+)?\/r\/([a-z0-9-]+)\/"/g)) out.push(l[1]); return out; };

// name : '' (accueil), 'c/<cat>', 'r/<slug>' ; bad(clé, valeur) collecte les écarts. Renvoie la longueur de la description
// et recipe=false si une fiche n'a pas de JSON-LD Recipe (ses liens « Recettes proches » ne comptent alors pas).
export function checkPage(name, h, bad) {
  const d = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (d.length < 120 || d.length > 155) bad('description 120-155', `${name} (${d.length})`);
  if (!h.includes(`<link rel="canonical" href="https://recettes.jigme.fr/${name ? name + '/' : ''}">`)) bad('canonical', name);
  if (!/property="og:image:width" content="\d+"/.test(h) || !/property="og:image:height" content="\d+"/.test(h)) bad('og:image dimensions', name);
  if (!name.startsWith('r/')) return { descLen: d.length, recipe: null };
  const s = name.slice(2), ld = LDS(h), rec = ld.find(x => x['@type'] === 'Recipe'), bc = ld.find(x => x['@type'] === 'BreadcrumbList');
  if (!rec) { bad('Recipe JSON-LD', s); return { descLen: d.length, recipe: false }; }
  if (!Array.isArray(rec.image) || rec.image.length !== 3) bad('3 images JSON-LD', s);
  if (!rec.recipeCuisine || !rec.datePublished || !rec.cookTime) bad('JSON-LD champs', s);
  if (!bc || bc.itemListElement.length !== 4 || bc.itemListElement[0].item !== 'https://jigme.fr/' || /class="breadcrumb"/.test(h)) bad('BreadcrumbList JSON-LD absent ou fil d’Ariane visible', s);
  if (!/id="pane-extra"[^]*?<nav class="related"/.test(h) || /<nav class="related"[^]*?id="pane-extra"/.test(h) || (h.match(/<nav class="related"/g) || []).length !== 1) bad('Recettes proches hors onglet Extra', s);
  if (!/<img [^>]*width="\d+" height="\d+"/.test(h.split('hero-media')[1] || '')) bad('dimensions image principale', s);
  if (!/<ul class="ing">/.test(h) || !/<ol id="steps" class="steps"><li/.test(h)) bad('SSR ingrédients/étapes', s);
  return { descLen: d.length, recipe: true };
}

// Liens entrants (« Recettes proches ») : chaque fiche doit être citée par au moins 3 autres.
export function lowInbound(inb, bad, only = null) {
  for (const [s, set] of Object.entries(inb)) if ((!only || only.has(s)) && set.size < 3) bad('liens entrants < 3', `${s} (${set.size})`);
}
