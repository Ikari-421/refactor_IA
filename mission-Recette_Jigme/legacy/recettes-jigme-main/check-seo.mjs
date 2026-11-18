// Contrôles SEO sur dist/ (lancés par build.mjs : le build échoue au moindre écart)
// D28 : fil d'Ariane avec 1er niveau « Jigmé » (https://jigme.fr/) ; contrôles faits sur les chemins logiques, avant prefixText
import fs from 'node:fs';
const slugs = fs.readdirSync('dist/r').filter(s => fs.existsSync(`dist/r/${s}/index.html`));
import { LDS, dec, checkPage, relatedTargets, lowInbound } from './seo-checks.mjs';
const E = {}; const bad = (k, s) => (E[k] ??= []).push(s);
const inb = Object.fromEntries(slugs.map(s => [s, new Set()])); const lens = [];
const pages = [['', 'dist/index.html'], ['c/sale', 'dist/c/sale/index.html'], ['c/sucre', 'dist/c/sucre/index.html'], ['c/boissons', 'dist/c/boissons/index.html'], ...slugs.map(s => ['r/' + s, `dist/r/${s}/index.html`])];
for (const [name, f] of pages) {
  const h = fs.readFileSync(f, 'utf8'); const { descLen, recipe } = checkPage(name, h, bad);
  lens.push(descLen);
  if (recipe) for (const t of relatedTargets(h)) inb[t]?.add(name.slice(2));
}
lowInbound(inb, bad);
// paires : liens « Version classique » / « Version végétarienne » dans les deux sens
const pairs = [...fs.readFileSync('recipes-pipeline.mjs', 'utf8').match(/const VEGE = \{(.*?)\};/s)[1].matchAll(/'([a-z0-9-]+)': '([a-z0-9-]+)'/g)].map(m => [m[1], m[2]]);
for (const [vg, cl] of pairs) { const a = fs.readFileSync(`dist/r/${vg}/index.html`, 'utf8'), b = fs.readFileSync(`dist/r/${cl}/index.html`, 'utf8');
  if (!new RegExp(`Version classique[^<]*</span> [^<]*</a>`).test(a) || !a.includes(`href="/r/${cl}/"`)) bad('paire : lien classique', vg);
  if (!/Version (végétarienne|végétalienne)/.test(b) || !b.includes(`href="/r/${vg}/"`)) bad('paire : lien végétarien', cl); }
// Restaurants (préprod) : JSON-LD Restaurant + Review, noindex tant que test, marqueurs du patch admin
if (fs.existsSync('dist/restaurant/index.html')) {
  const li = fs.readFileSync('dist/restaurant/index.html', 'utf8');
  if (!/<!--rj-resto-list-->[\s\S]*<!--\/rj-resto-list-->/.test(li)) bad('restaurants : marqueurs liste', '-');
  const nCards = (li.match(/class="rs-card"/g) || []).length; if (nCards < 1 || nCards > 3) bad('restaurants : 1 à 3 reviews récentes', nCards);
  for (const s of fs.readdirSync('dist/restaurant').filter(x => fs.existsSync(`dist/restaurant/${x}/index.html`))) {
    const h = fs.readFileSync(`dist/restaurant/${s}/index.html`, 'utf8'), ld = LDS(h), r = ld.find(x => x['@type'] === 'Restaurant'), bc = ld.find(x => x['@type'] === 'BreadcrumbList');
    const d = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || ''); if (d.length < 120 || d.length > 155) bad('restaurants : description 120-155', `${s} (${d.length})`);
    if (!h.includes(`<link rel="canonical" href="https://recettes.jigme.fr/restaurant/${s}/">`)) bad('restaurants : canonical', s);
    if (!/property="og:image:width" content="\d+"/.test(h)) bad('restaurants : og:image dimensions', s);
    if (!r || !r.name || !r.address?.addressLocality || !r.geo?.latitude || !Array.isArray(r.image)) bad('restaurants : JSON-LD Restaurant', s);
    const rv = r?.review; if (!rv || rv['@type'] !== 'Review' || rv.author?.['@type'] !== 'Person' || !/^\d{4}-\d{2}-\d{2}$/.test(rv.datePublished || '') || !rv.reviewBody) bad('restaurants : JSON-LD Review', s);
    if (rv?.reviewRating && !(rv.reviewRating.ratingValue >= 0 && rv.reviewRating.ratingValue <= 5 && rv.reviewRating.bestRating === 5)) bad('restaurants : reviewRating', s);
    if (!bc || bc.itemListElement.length !== 3 || bc.itemListElement[0].item !== 'https://jigme.fr/') bad('restaurants : BreadcrumbList', s);
    if (/data-rs-test/.test(h) !== /class="rv-test"/.test(h) || (/class="rv-test"/.test(h) && !/<meta name="robots" content="noindex, nofollow" data-rs-test>/.test(h))) bad('restaurants : noindex des données test', s);
    if (!/<!--rj-resto-body-->[\s\S]*<!--\/rj-resto-body-->/.test(h) || !/<!--rj-resto-ld-->[\s\S]*<!--\/rj-resto-ld-->/.test(h)) bad('restaurants : marqueurs page', s);
    if (fs.readFileSync('dist/sitemap.xml', 'utf8').includes('/restaurant/' + s + '/') && /data-rs-test/.test(h)) bad('restaurants : page test dans le sitemap', s);
    pages.push(['restaurant/' + s, null]);
  }
}
if (!fs.existsSync('dist/404.html') || !fs.existsSync('dist/favicon.ico') || !fs.existsSync('dist/apple-touch-icon.png')) bad('404/favicon', '-');
lens.sort((a, b) => a - b);
console.log('contrôles SEO :', pages.length, 'pages ; descriptions', lens[0] + '–' + lens[lens.length - 1], 'car. ; liens entrants min', Math.min(...Object.values(inb).map(x => x.size)), '; paires', pairs.length, '; erreurs', Object.keys(E).length ? JSON.stringify(E) : '0');
if (Object.keys(E).length) throw new Error('contrôles SEO en échec');
