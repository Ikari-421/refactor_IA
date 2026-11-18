import { stepName } from './howto-name.mjs';
import { constructionActive, constructionHtml, writeHome, writeRecipePage, writeIdx, writeFavoris, writeCategoryPages, writeCuisineSitemap, writeRestaurantPage, writeRestaurantListing, writeRestaurantSitemap, writeRestaurantCategoryPages, affiliesHtml, writeSectionPage, sectionTabs } from './generate-pages.mjs';
import { ssrPages } from './ssr.mjs';
import { validateRecipeV2 } from './honeypot/recette-schema.mjs'; import * as RD from './honeypot/restaurants-domain.mjs'; import * as RR from './honeypot/restaurants-render.mjs'; import { BASE_PATH, RESTO_PATH, SITE_URL, prefixText } from './honeypot/paths.mjs'; // restaurants (préprod) : règles (RD) et rendu (RR) partagés avec l'API admin
import fs from 'fs'; import crypto from 'crypto'; import * as yaml from 'js-yaml'; import { createRequire } from 'module';
// TARGET obligatoire (audit B6) : plus de repli silencieux sur la préprod
if (!['prod', 'preprod'].includes(process.env.TARGET)) { console.error('ERREUR : TARGET manquant ou invalide (' + (process.env.TARGET ?? 'absent') + '). Utiliser TARGET=preprod node build.mjs, ou TARGET=prod CONTACT_BASE=https://jigme.fr LIENENBIO_URL=https://jigme.fr node build.mjs'); process.exit(1); }
const LIENENBIO_PROD = 'https://jigme.fr'; // D28 : lien en bio servi sur jigme.fr
// Contre-audit v29 : fly.prod.toml ne doit contenir ni section [processes] ni commande explicite (cmd/entrypoint/exec) : start.sh doit rester le seul point d'entrée
if (process.env.TARGET === 'prod') { const t = fs.existsSync('fly.prod.toml') ? fs.readFileSync('fly.prod.toml', 'utf8').replace(/#.*$/gm, '') : null; if (t === null) { console.error('ERREUR : fly.prod.toml absent'); process.exit(1); } if (/^\s*\[\[?processes\]?\]|^\s*(cmd|entrypoint|exec)\s*=/m.test(t)) { console.error('ERREUR : fly.prod.toml contient une section [processes] ou une commande explicite (cmd/entrypoint/exec) : interdit'); process.exit(1); } }
if (process.env.TARGET === 'prod') for (const k of ['LIENENBIO_URL', 'CONTACT_BASE']) if (process.env[k] !== LIENENBIO_PROD) { console.error(`ERREUR : build de prod : ${k} doit valoir exactement ${LIENENBIO_PROD} (reçu : ${process.env[k] ?? 'absent'})`); process.exit(1); }
// « végan » avec accent dans tous les textes affichés (les codes exacts 'vegan' restent intacts)
import { makeAdaptPanelHTML, esc, norm, emoji, altOf, makeTileImg, applyDates, loadMateriel, loadRecipes, makeRelated, descOf, reallyVegan, conservationHtml, STOP, EQ_GENERIC_ALL, MANIFEST_FILE } from './recipes-pipeline.mjs'; // D50 : pipeline commun build / régénération ciblée
const L = createRequire(import.meta.url)('./src/logic.js');
const { JAIN_SVG } = createRequire(import.meta.url)('./src/religion.js');
const adaptPanelHTML = makeAdaptPanelHTML(L); // v104 : tiroir « Adapter » partagé (recipes-pipeline.mjs)
// Images produit des recos matériel (cache src/img/eq/<id-reco>.webp ; échec → fond générique)
try { (await import('child_process')).execSync('node fetch-reco-img.cjs', { stdio: 'inherit', timeout: 600000 }); } catch (e) { console.log('recos img : ignoré', e.message); }
// D50 : RJ_SOURCE=back → fiches et matériel lus depuis le back commun (scripts/source-back.mjs, cache .cache/back, ETag) ; défaut local (repli).
const SOURCE_BACK = process.env.RJ_SOURCE === 'back';
// RJ_BACK_OFFLINE=1 : reconstruit depuis le cache .cache/back déjà synchronisé (tunnel indisponible ; vérifications locales uniquement)
if (SOURCE_BACK) console.log('source back :', process.env.RJ_BACK_OFFLINE === '1' ? 'hors ligne (cache .cache/back)' : JSON.stringify(await (await import('./scripts/source-back.mjs')).syncBack()));
// RJ_DATA : dossier de fiches alternatif (tests locaux uniquement, jamais déployé)
const DATA = process.env.RJ_DATA || (SOURCE_BACK ? '.cache/back/data' : 'data');
const MATDIR = SOURCE_BACK ? '.cache/back/materiel' : 'materiel';
// R2 : restaurants publiés lus depuis le back (photos /img/resto/ copiées dans src/img/resto par syncBack)
const RESTODIR = SOURCE_BACK ? '.cache/back/restaurants' : 'restaurants';
const OV = JSON.parse(fs.readFileSync('overrides.json', 'utf8'));
const PJ = JSON.parse(fs.readFileSync('photos-jigme.json', 'utf8')); const TJOBS = []; const PJF = PJ._force || [], PJT = PJ._tile_big || []; // _tile_big : vignette générée depuis la grande (petite < 720 px) // _force : vraie photo choisie par Jigmé qui prime même sur la photo NAS ; vignette depuis la grande si la -720 fait < 720 px
// Mention reprise mot pour mot du lien en bio (lienenbio-maison/lib/content.ts, AMAZON_DISCLAIMER)
const AMAZON_DISCLAIMER = 'En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises';
import sharp from 'sharp'; import * as IV from './image-variants.mjs';
// Luminance relative de la zone du titre (25–75 % en largeur, 33–62 % en hauteur), calculée au build
async function titleLum(url) {
  if (!url || !url.startsWith('/img/')) return null;
  const f = 'src' + url; if (!fs.existsSync(f)) return null;
  const m = await sharp(f).metadata();
  const { data } = await sharp(f).extract({ left: Math.round(m.width * .25), top: Math.round(m.height * .33), width: Math.round(m.width * .5), height: Math.round(m.height * .29) }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const lin = c => { c /= 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; };
  let s = 0; for (let i = 0; i < data.length; i += 3) s += .2126 * lin(data[i]) + .7152 * lin(data[i + 1]) + .0722 * lin(data[i + 2]);
  return s / (data.length / 3);
}
// Fonds génériques du matériel (photos libres Wikimedia Commons, crédits dans src/img/eq/credits.json)
const EQ_CREDITS = JSON.parse(fs.readFileSync('src/img/eq/credits.json', 'utf8'));
const EQ_GENERIC = EQ_GENERIC_ALL.filter(([, k]) => fs.existsSync(`src/img/eq/${k}.webp`));
const SX = fs.existsSync('sync-extra.json') ? JSON.parse(fs.readFileSync('sync-extra.json', 'utf8')) : {};
// SEO : titres accentués (surcharge locale src/titres.json ; la fiche NAS n'est jamais modifiée)
const CUIS = JSON.parse(fs.readFileSync('src/cuisines.json', 'utf8')); // cuisine d'origine déduite (surcharge locale), à valider par Chef
const TITRES = JSON.parse(fs.readFileSync('src/titres.json', 'utf8'));
// 30/10 : catégorie Boissons. Surcharge locale slug → catégorie (src/categories-surcharge.json, le NAS n'est pas modifié) ; « boisson(s) » venant du YAML accepté aussi
const CATSUR = JSON.parse(fs.readFileSync('src/categories-surcharge.json', 'utf8'));
const VERBES = JSON.parse(fs.readFileSync('src/verbes.json', 'utf8')).formes;
const LECT = fs.existsSync('src/lectures.json') ? JSON.parse(fs.readFileSync('src/lectures.json', 'utf8')) : { lexique: [], fiches: {} }; const LEX = Object.fromEntries(LECT.lexique.map(e => [e.id, e]));
const MAT = loadMateriel(MATDIR, yaml);
const { recipes, FIX } = loadRecipes({ dataDir: DATA, MAT, yaml, validateRecipeV2, L, OV, PJ, SX, TITRES, CATSUR, LECT, EQ_CREDITS, EQ_GENERIC, log: (...a) => console.log(...a),
  nasPhoto: nasF => fs.existsSync(nasF) ? { nas_src: nasF } : null,
  // 29/10 : -720 utilisée telle quelle pour vignette ET héros (pas d'agrandissement) ; lot 2 : version grande (sans -720) → grand format, vignette webp depuis la -720
  pjPhoto: (r, pj) => { const src = 'photos-jigme/' + pj; if (!fs.existsSync(src)) throw new Error('photo absente ' + src); fs.mkdirSync('src/img/p', { recursive: true }); const out = `src/img/p/${r.slug}.webp`; if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs) fs.copyFileSync(src, out);
    const big = src.replace(/-720\.webp$/, '.webp');
    if (big !== src && fs.existsSync(big)) { if (!fs.existsSync(out) || fs.statSync(out).size !== fs.statSync(big).size) fs.copyFileSync(big, out); const tOut = `src/img/t/p/${r.slug}.webp`; fs.mkdirSync('src/img/t/p', { recursive: true }); if (!fs.existsSync(tOut) || fs.statSync(tOut).mtimeMs < fs.statSync(out).mtimeMs) TJOBS.push(sharp(PJT.includes(r.slug) ? big : src).resize({ width: 720, height: 720, fit: 'cover', withoutEnlargement: true }).webp({ quality: 74 }).toFile(tOut)); return { big: true }; }
    return { big: false }; },
  recoImageExists: id => fs.existsSync(`src/img/eq/${id}.webp`) });
// Manifeste pour la régénération ciblée (Fly n'a ni nas-photos/ ni photos-jigme/ ni les images sources)
const MANIFEST = { version: 1, slugs: recipes.map(r => r.slug), nasOk: {}, pjBig: {}, titleLum: {} };
for (const r of recipes) { if (r.image?.nas_src) MANIFEST.nasOk[r.slug] = true; if (r.image?.big) MANIFEST.pjBig[r.slug] = true; }
fs.mkdirSync('src/img/p', { recursive: true });
// Qualité webp spécifique (photos lourdes, cible < 300 Ko)
const IMGQ = { 'bo-bun-au-boeuf': { q: 70, w: 1200 } };
let NASP = 0; for (const r of recipes) if (r.image?.nas_src) { const out = 'src' + r.image.url; if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(r.image.nas_src).mtimeMs || IMGQ[r.slug]) await sharp(r.image.nas_src).rotate().resize({ width: IMGQ[r.slug]?.w ?? 1600, height: IMGQ[r.slug]?.w ?? 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: IMGQ[r.slug]?.q ?? 78 }).toFile(out); delete r.image.nas_src; NASP++; }
console.log('photos NAS webp', NASP);
for (const r of recipes) { r.title_lum = await titleLum(r.image?.url); r.hero_tone = r.title_lum != null && r.title_lum > 0.4 ? 'light' : 'dark'; console.log('titre', r.slug, r.title_lum?.toFixed(3), r.hero_tone); }
for (const r of recipes) if (r.title_lum != null) MANIFEST.titleLum[r.slug] = { url: r.image.url, lum: r.title_lum };
fs.rmSync('dist', { recursive: true, force: true }); fs.mkdirSync('dist/r', { recursive: true });
const ASSETS = ['logic.js', 'adapt-ui.js', 'app.js', 'share.js', 'home.js', 'home-random.js', 'site-tabs.js', 'home-ui.css', 'style.css', 'footer.js', 'footer.css', 'features.js', 'features.css', 'favoris.js', 'religion.js', 'desktop.css', 'restaurants.js', 'restaurants.css'];
// Redirections 301 (nginx.conf) : les favoris enregistrés suivent les nouveaux slugs
const REDIR = Object.fromEntries([...fs.readFileSync('nginx.conf', 'utf8').matchAll(new RegExp('\\^' + BASE_PATH + '/r/([a-z0-9-]+)/\\?\\$ \\{ return 301 ' + BASE_PATH + '/r/([a-z0-9-]+)/', 'g'))].map(m => [m[1], m[2]]));
// SEO/vitesse : CSS et JS minifiés dans dist (src/ intact) ; l'@import Google Fonts est retiré (polices auto-hébergées, voir src/fonts)
const esb = await import('esbuild');
const SERVED = {};
for (const f of ASSETS) {
  let code = fs.readFileSync('src/' + f, 'utf8');
  if (f === 'style.css') code = code.replace(/^@import url\([^)]*\);?\s*/, '');
  if (f !== 'footer.js') code = (await esb.transform(code, { loader: f.endsWith('.css') ? 'css' : 'js', minify: true, legalComments: 'none', target: f.endsWith('.css') ? 'safari15' : 'es2020' })).code;
  SERVED[f] = code; fs.writeFileSync('dist/' + f, code);
}
fs.cpSync('src/fonts', 'dist/fonts', { recursive: true });
fs.cpSync('src/img', 'dist/img', { recursive: true });
fs.cpSync('src/icons', 'dist/icons', { recursive: true });
// jsPDF hébergé localement (chargé au clic), version épinglée dans package.json, copiée depuis node_modules
const JSPDF_V = JSON.parse(fs.readFileSync('node_modules/jspdf/package.json', 'utf8')).version;
if (JSPDF_V !== JSON.parse(fs.readFileSync('package.json', 'utf8')).dependencies.jspdf) throw new Error('jspdf : node_modules ≠ package.json (npm ci)');
if (!fs.readFileSync('src/share.js', 'utf8').includes(`/vendor/jspdf-${JSPDF_V}.umd.min.js`)) throw new Error('share.js doit charger /vendor/jspdf-' + JSPDF_V + '.umd.min.js');
fs.mkdirSync('dist/vendor', { recursive: true });
fs.copyFileSync('node_modules/jspdf/dist/jspdf.umd.min.js', `dist/vendor/jspdf-${JSPDF_V}.umd.min.js`);
fs.copyFileSync('node_modules/jspdf/LICENSE', `dist/vendor/jspdf-LICENSE.txt`);
// Leaflet auto-hébergé (carte de l'onglet Restaurants, chargé à la demande par restaurants.js), version épinglée dans package.json
const LEAFLET_V = JSON.parse(fs.readFileSync('node_modules/leaflet/package.json', 'utf8')).version;
if (LEAFLET_V !== JSON.parse(fs.readFileSync('package.json', 'utf8')).dependencies.leaflet) throw new Error('leaflet : node_modules ≠ package.json (npm ci)');
if (!fs.readFileSync('src/restaurants.js', 'utf8').includes(`/vendor/leaflet-${LEAFLET_V}/`)) throw new Error('restaurants.js doit charger /vendor/leaflet-' + LEAFLET_V + '/');
fs.mkdirSync(`dist/vendor/leaflet-${LEAFLET_V}/images`, { recursive: true });
fs.writeFileSync(`dist/vendor/leaflet-${LEAFLET_V}/leaflet.js`, fs.readFileSync('node_modules/leaflet/dist/leaflet.js', 'utf8').replace(/\n\/\/# sourceMappingURL=.*\s*$/, '\n'));
fs.copyFileSync('node_modules/leaflet/dist/leaflet.css', `dist/vendor/leaflet-${LEAFLET_V}/leaflet.css`);
for (const f of fs.readdirSync('node_modules/leaflet/dist/images')) fs.copyFileSync('node_modules/leaflet/dist/images/' + f, `dist/vendor/leaflet-${LEAFLET_V}/images/` + f);
fs.copyFileSync('node_modules/leaflet/LICENSE', `dist/vendor/leaflet-${LEAFLET_V}/LICENSE.txt`);
// Contour France + DROM pour « Autour de moi » (restaurants.js, chargé au clic) : IGN Admin Express COG 2018, Licence Ouverte (data/fr-zone.json)
if (!fs.readFileSync('src/restaurants.js', 'utf8').includes('/vendor/fr-zone-2018/fr-zone.json')) throw new Error('restaurants.js doit charger /vendor/fr-zone-2018/fr-zone.json');
fs.mkdirSync('dist/vendor/fr-zone-2018', { recursive: true }); fs.copyFileSync('data/fr-zone.json', 'dist/vendor/fr-zone-2018/fr-zone.json');
const H = {}; for (const f of ASSETS) H[f] = crypto.createHash('sha1').update(SERVED[f]).digest('hex').slice(0, 10);
const BH = {}; for (const n of ['banniere-recettes.webp', 'banniere-recettes-800.webp', 'banniere-recettes-2400.webp', 'banniere-hero.webp', 'banniere-hero-800.webp']) { const h = crypto.createHash('sha256').update(fs.readFileSync('src/img/' + n)).digest('hex').slice(0, 10); BH['/img/' + n] = '/img/' + n.replace('.webp', '.' + h + '.webp'); }
const CRIT = (fs.readFileSync('src/fonts/fonts.css', 'utf8') + fs.readFileSync('src/critical.css', 'utf8') + fs.readFileSync('src/home-ui.css', 'utf8')).replace(/\s+/g, ' ').replace(/\/img\/banniere-(recettes|hero)(-800|-2400)?\.webp/g, m => BH[m]);
const v = f => `/${f}?v=${H[f]}`;
// SEO : URL de prod (canonique, sitemap, Open Graph). La préprod est exclue par l'en-tête nginx X-Robots-Tag (ROBOTS_NOINDEX=1).
const PROD = 'https://recettes.jigme.fr';
const seoHead = m => !m ? '' : `<meta name="description" content="${esc(m.desc)}"><link rel="canonical" href="${m.url}"><meta property="og:type" content="${m.type || 'website'}"><meta property="og:site_name" content="Les recettes de Jigmé"><meta property="og:locale" content="fr_FR"><meta property="og:title" content="${esc(m.title)}"><meta property="og:description" content="${esc(m.desc)}"><meta property="og:url" content="${m.url}">${m.og ? `<meta property="og:image" content="${esc(PROD + m.og.url)}"><meta property="og:image:width" content="${m.og.w}"><meta property="og:image:height" content="${m.og.h}"><meta property="og:image:type" content="${m.og.type}"><meta property="og:image:alt" content="${esc(m.alt || m.title)}">${m.pin ? `<meta property="og:image" content="${esc(PROD + m.pin.url)}"><meta property="og:image:width" content="${m.pin.w}"><meta property="og:image:height" content="${m.pin.h}"><meta property="og:image:type" content="${m.pin.type}">` : ''}` : ''}<meta name="twitter:card" content="${m.og ? 'summary_large_image' : 'summary'}"><meta name="twitter:title" content="${esc(m.title)}"><meta name="twitter:description" content="${esc(m.desc)}">${m.og ? `<meta name="twitter:image" content="${esc(PROD + m.og.url)}"><meta name="twitter:image:alt" content="${esc(m.alt || m.title)}">` : ''}`;
// footer.js (React, ~240 Ko) n'est chargé que lorsque le pied de page approche de l'écran (ou après 4 s d'inactivité)
const FOOTER_LOADER = `(function(){var e=document.getElementById('lb-footer');if(!e)return;var d=0,l=function(){if(d)return;d=1;var s=document.createElement('script');s.src='${v('footer.js')}';document.body.appendChild(s)};var g=function(){if('IntersectionObserver'in window){new IntersectionObserver(function(a,o){if(a[0].isIntersecting){o.disconnect();l()}},{rootMargin:'800px'}).observe(e)}else{setTimeout(l,2500)}},w=function(){setTimeout(function(){window.requestIdleCallback?requestIdleCallback(g,{timeout:1500}):g()},300)};if(document.readyState==='complete')w();else addEventListener('load',w,{once:true})})()`; // v111 : jamais pendant le chargement (Safari : barre de chargement prolongée)
// Entrée accueil : classe posée sur <html> avant le premier rendu visible (critical / home-ui.css). #depuis-bio → rj-bio + depuis-bio (bannière déjà en place, cascade dessous, hash retiré, depuis-bio gardée). Sinon rj-enter (même cascade, pas de retour arrière / rechargement avec position). Mouvement réduit : aucune classe. Si document.prerendering, les classes et le timer 1300 ms attendent prerenderingchange — sinon la cascade se jouerait invisible et pourrait déjà être finie à l'activation.
const BIO_JS = `<script>(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;function whenVisible(fn){if(document.prerendering){document.addEventListener('prerenderingchange',fn,{once:true})}else fn()}if(location.hash==='#depuis-bio'){whenVisible(function(){d.classList.add('rj-bio','depuis-bio');function done(){if(!d.classList.contains('rj-bio'))return;d.classList.remove('rj-bio');try{history.replaceState(history.state,'',location.pathname+location.search)}catch(e){}}setTimeout(done,rm?0:1300)});return}if(rm)return;whenVisible(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0],st=history.state;if((n&&n.type==='back_forward')||(st&&typeof st.hY==='number'&&n&&n.type==='reload'))return}catch(e){}d.classList.add('rj-enter');setTimeout(function(){d.classList.remove('rj-enter')},1300)})})();</script>`;
// D35 : mesure d'audience maison (Lien en bio), préprod seulement. Prod : rien (plus tard https://jigme.fr/a.js).
// URL paramétrable : AUDIENCE_SCRIPT_URL, sinon CONTACT_BASE / LIENENBIO_URL, sinon l'origine préprod du lien en bio.
const AUDIENCE_SCRIPT_URL = process.env.TARGET === 'preprod'
  ? (process.env.AUDIENCE_SCRIPT_URL || process.env.CONTACT_BASE || process.env.LIENENBIO_URL || 'https://preprod-lienenbio-jigme.fly.dev').replace(/\/+$/, '') + '/a.js'
  : '';
const AUDIENCE_JS = AUDIENCE_SCRIPT_URL ? `<script src="${AUDIENCE_SCRIPT_URL}" defer></script>` : '';
const page = (title, body, scripts = '', cls = '', head = '', meta = null) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">${BIO_JS}<meta name="theme-color" content="#ffffff"><meta name="color-scheme" content="light"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="preload" href="/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/playfair-latin.woff2" as="font" type="font/woff2" crossorigin>${head}${process.env.TARGET === 'prod' ? '' : '<meta name="robots" content="noindex, nofollow">'}<title>${esc(title)}</title>${seoHead(meta)}<style>${CRIT}</style><link rel="stylesheet" href="${v('style.css')}"><link rel="stylesheet" href="${v('features.css')}"><link rel="stylesheet" href="${v('desktop.css')}" media="(min-width:700px)"><link rel="stylesheet" href="${v('home-ui.css')}"><script>window.RJ_BASE=${JSON.stringify(BASE_PATH)};window.RJ_REDIR=${JSON.stringify(REDIR)}</script>${AUDIENCE_JS}</head><body class="${cls}"><div class="edge-overlay" aria-hidden="true"></div>${(body.match(/^<a class="back"[^]*?<\/a>/) || [''])[0]}<div class="shell"><div class="shell-card">${body.replace(/^<a class="back"[^]*?<\/a>/, '')}<link rel="stylesheet" href="${v('footer.css')}"><div id="lb-footer"></div><p class="rj-legal"><a href="${SITE_URL}/mentions-legales">Mentions légales</a><span aria-hidden="true">·</span><a href="${SITE_URL}/confidentialite">Politique de confidentialité</a></p></div></div>${scripts}<script src="${v('features.js')}" defer></script><script src="${v('site-tabs.js')}" defer></script><script>${FOOTER_LOADER}</script></body></html>`;

// ---------- ACCUEIL ----------
const HEART = '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h11a1 1 0 0 1 1 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 0 1 1-1z"/></svg>'; // v90 : icône signet (ancien cœur ; nom de constante et classe .heart gardés)
const FAVLINK = `<a class="fav-link" href="/favoris/" aria-label="Mes signets">${HEART}<span class="fl-txt">Mes signets</span></a>`;
// v14 : vignettes 720 px pour les tuiles (moins d'octets, moins de mémoire de décodage sur iOS : flashs blancs au redimensionnement)
const THUMB = {}, THUMB360 = {};
await Promise.all(TJOBS);
for (const r of recipes) { const u = r.image?.url; if (!u || !u.startsWith('/img/') || !u.endsWith('.webp')) continue;
  const src = 'src' + u, tu = IV.thumbSpecs(u)[0].url, out = 'src' + tu; if (!fs.existsSync(src)) continue;
  if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs) { fs.mkdirSync(out.replace(/\/[^/]+$/, ''), { recursive: true }); await IV.thumbSpecs(u)[0].fn(sharp(src)).toFile(out); }
  fs.mkdirSync('dist' + tu.replace(/\/[^/]+$/, ''), { recursive: true }); fs.copyFileSync(out, 'dist' + tu); THUMB[u] = tu;
  // SEO/vitesse : variante 360 px pour srcset (écrans étroits ou densité 1)
  const ts = IV.thumbSpecs(u)[1].url, outS = 'src' + ts;
  if (!fs.existsSync(outS) || fs.statSync(outS).mtimeMs < fs.statSync(src).mtimeMs) { fs.mkdirSync(outS.replace(/\/[^/]+$/, ''), { recursive: true }); await IV.thumbSpecs(u)[1].fn(sharp(src)).toFile(outS); }
  fs.mkdirSync('dist' + ts.replace(/\/[^/]+$/, ''), { recursive: true }); fs.copyFileSync(outS, 'dist' + ts); THUMB360[u] = ts; }
// ---------- IMAGES (copies du build uniquement ; src/ et le NAS ne sont pas modifiés) ----------
// dimensions réelles, recompression des photos > 150 Ko, AVIF (tuiles 360/720, héros 640/1040), formats sociaux (JSON-LD 1:1, 4:3, 16:9 ; Open Graph 16:9 ; Pinterest 2:3)
const DIM = {}, AVIF = {}, SOC = {}, RECOMP = { n: 0, avant: 0, apres: 0 };
const fresh = (out, ...srcs) => fs.existsSync(out) && srcs.every(x => fs.statSync(out).mtimeMs >= fs.statSync(x).mtimeMs);
const gen = async (out, src, fn) => { if (!fresh(out, src)) { fs.mkdirSync(out.replace(/\/[^/]+$/, ''), { recursive: true }); await fn(sharp(src)).toFile(out); } const d = 'dist' + out.replace(/^\.cache/, ''); fs.mkdirSync(d.replace(/\/[^/]+$/, ''), { recursive: true }); fs.copyFileSync(out, d); return out.replace(/^\.cache/, ''); };
const imgJobs = recipes.filter(r => { const u = r.image?.url; return u && u.startsWith('/img/') && u.endsWith('.webp') && fs.existsSync('src' + u); });
const doImg = async r => {
  const u = r.image.url, src = 'src' + u, sl = r.slug, W = {};
  const md = await sharp(src).metadata(); DIM[u] = { w: md.width, h: md.height };
  const size0 = fs.statSync(src).size;
  if (size0 > IV.RECOMP_MAX) { // recompression : qualité décroissante jusqu'à ≤ 150 Ko (jamais plus gros que l'original)
    let best = null; for (const q of IV.RECOMP_QUALITIES) { const out = `.cache/rc/${sl}-q${q}.webp`; if (!fresh(out, src)) { fs.mkdirSync('.cache/rc', { recursive: true }); await IV.recompFn(q)(sharp(src)).toFile(out); } best = out; if (fs.statSync(out).size <= IV.RECOMP_MAX) break; }
    if (fs.statSync(best).size < size0) { fs.copyFileSync(best, 'dist' + u); RECOMP.n++; RECOMP.avant += size0; RECOMP.apres += fs.statSync(best).size; }
  }
  // v235 : réglages partagés avec la régénération ciblée (image-variants.mjs)
  for (const s of IV.variantSpecs(sl, md)) W[s.key] = await gen('.cache' + s.url, src, s.fn);
  AVIF[u] = IV.avifOf(W);
  const pinOut = '.cache' + IV.pinUrl(sl);
  if (!fresh(pinOut, src)) { fs.mkdirSync('.cache/img/s', { recursive: true }); await IV.pinToFile(sharp, src, pinOut); }
  fs.mkdirSync('dist/img/s', { recursive: true }); fs.copyFileSync(pinOut, 'dist' + IV.pinUrl(sl));
  SOC[sl] = IV.socOf(sl, W);
};
for (let i = 0; i < imgJobs.length; i += 6) await Promise.all(imgJobs.slice(i, i + 6).map(doImg));
console.log('images', imgJobs.length, 'recompressées', RECOMP.n, Math.round(RECOMP.avant / 1024) + ' Ko →', Math.round(RECOMP.apres / 1024) + ' Ko');
const cardsOrder = applyDates(recipes, 'src');
const SANS_DATE = recipes.filter(r => !r.date).map(r => r.slug); console.log('dates', recipes.length - SANS_DATE.length, 'sans date', SANS_DATE.length, SANS_DATE.join(','));
const tileImg = makeTileImg({ THUMB, THUMB360, AVIF });
const IS_PROD = process.env.TARGET === 'prod';
const PV = IS_PROD ? 0 : (Number(fs.existsSync('preprod-version.txt') ? fs.readFileSync('preprod-version.txt', 'utf8') : '21') || 21) + 1; if (!IS_PROD) fs.writeFileSync('preprod-version.txt', String(PV));
const PRE_BAR = IS_PROD ? '' : `<div class="pre">Préprod — version de test · v${PV}</div>`;
const HOME_DESC = 'Plus de 200 recettes maison de Jigmé, sucrées et salées, avec versions végétarienne et végane, allergènes signalés et portions ajustables.';
const firstSlug = cardsOrder.find(r => SOC[r.slug])?.slug;
// Bannière de l'accueil : préchargée (même URL exacte que critical.css, vérifiée ici ; pas de hash dans le nom)
for (const [a, b] of Object.entries(BH)) { fs.mkdirSync('dist/img', { recursive: true }); fs.copyFileSync('src' + a, 'dist' + b); }
const BIO_BACK = (process.env.LIENENBIO_URL || (process.env.TARGET === 'prod' ? '' : process.env.CONTACT_BASE || 'https://preprod-lienenbio-jigme.fly.dev')).replace(/\/+$/, '') + '/';
const BANNER = BH['/img/banniere-recettes.webp'], BANNER_SET = `${BH['/img/banniere-recettes-800.webp']} 800w, ${BANNER} 1200w, ${BH['/img/banniere-recettes-2400.webp']} 2400w`, BANNER_SIZES = '(max-width:599px) calc(100vw - 32px), 456px';
for (const u of Object.values(BH)) if (!fs.existsSync('dist' + u)) throw new Error('bannière : fichier manquant ' + u);
const HERO = BH['/img/banniere-hero.webp'], HERO_SET = `${BH['/img/banniere-hero-800.webp']} 800w, ${HERO} 1200w`;
const WIDE_SET = `${BH['/img/banniere-recettes-800.webp']} 800w, ${BANNER} 1200w, ${BH['/img/banniere-recettes-2400.webp']} 2400w`, WIDE_SIZES = 'min(calc(100vw - 80px), 1500px)';
const BANNER_PIC = `<picture><source media="(min-width:700px)" srcset="${WIDE_SET}" sizes="${WIDE_SIZES}"><img class="bn-b" src="${HERO}" srcset="${HERO_SET}" sizes="${BANNER_SIZES}" width="1200" height="1333" alt="" decoding="sync" fetchpriority="high"></picture>`;
const BANNER_PRELOAD = `<link rel="preload" as="image" media="(min-width:700px)" imagesrcset="${WIDE_SET}" imagesizes="${WIDE_SIZES}" type="image/webp" fetchpriority="high"><link rel="preload" as="image" media="(max-width:699px)" href="${HERO}" imagesrcset="${HERO_SET}" imagesizes="${BANNER_SIZES}" type="image/webp" fetchpriority="high">`;
if (!BANNER_PIC.includes(`srcset="${HERO_SET}" sizes="${BANNER_SIZES}"`) || !BANNER_PRELOAD.includes(`imagesrcset="${HERO_SET}" imagesizes="${BANNER_SIZES}"`)) throw new Error('bannière : img ≠ preload');
const homeCtx = () => ({ cardsOrder, L, esc, norm, tileImg, emoji, HEART, PRE_BAR, homeRandomJs: SERVED['home-random.js'], page, v, adaptPanelHTML, IS_PROD, PROD, SOC, outRoot: 'dist', log: (...a) => console.log(...a) });
writeHome({ ...homeCtx(), BANNER_PIC, BIO_BACK, BANNER_PRELOAD, HOME_DESC, firstSlug });

// ---------- Favicon, apple-touch-icon ----------
const ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#6f9e4c"/><path d="M96 286h320a160 160 0 0 1-160 154A160 160 0 0 1 96 286z" fill="#fff"/><rect x="88" y="262" width="336" height="28" rx="14" fill="#fff"/><g fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round"><path d="M196 214c-26-26 26-44 0-74"/><path d="M256 214c-26-26 26-44 0-74"/><path d="M316 214c-26-26 26-44 0-74"/></g></svg>';
fs.writeFileSync('dist/favicon.svg', ICON_SVG);
const png = async n => sharp(Buffer.from(ICON_SVG)).resize(n, n).png().toBuffer();
fs.writeFileSync('dist/apple-touch-icon.png', await png(180));
fs.writeFileSync('dist/icon-192.png', await png(192)); fs.writeFileSync('dist/icon-512.png', await png(512));
{ const p32 = await png(32), h = Buffer.alloc(22); h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4); h[6] = 32; h[7] = 32; h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12); h.writeUInt32LE(p32.length, 14); h.writeUInt32LE(22, 18); fs.writeFileSync('dist/favicon.ico', Buffer.concat([h, p32])); }
// ---------- Page 404 aux couleurs du site (servie par nginx avec le vrai code 404) ----------
// v138 : pages internes préprod autorisées ; aucune destination /services bio.
let RESTO_REAL = 0; // D28 : fiches restaurants réelles (ni test ni masquées) ; 0 → /restaurants/ en noindex et sitemap vide
if (!IS_PROD) {
  // v146 : même bannière + nav que l'accueil ; seul .rj-section-content s'anime. Encarts Matériel/Livres = design LinkCardView lien en bio (contenu réel, pas inventé).
  fs.mkdirSync('dist/img/aff', { recursive: true });
  for (const f of ['card-materiel.jpg', 'card-livres-cuisine-jardin.jpg']) fs.copyFileSync('src/img/aff/' + f, 'dist/img/aff/' + f);
  const sharedHead = `<header class="home-head"><div class="home-banner" aria-hidden="true">${BANNER_PIC}</div><p class="bn-title" aria-hidden="true">Jigmé Cuisine</p><a class="bn-back" href="${BIO_BACK}"><span aria-hidden="true">←</span> Lien en bio</a><h1 class="display sr-only">Les recettes de Jigmé</h1>
  <div class="hb-field hsearch" id="search-wrap"><svg class="hb-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" enterkeyhint="search" placeholder="" data-ph="Une recette ? Un ingrédient ?" autocomplete="off" aria-label="Rechercher une recette ou un ingrédient"><button type="button" class="hb-x" id="search-x" aria-label="Effacer la recherche"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
 </header>`;
  /* v164/t426u : cartes = largeur cellule grille recettes ; h1 page en sr-only (pilule = libellé visible) */
  const affiliesContent = affiliesHtml({ esc, AMAZON_DISCLAIMER });
  // 11/11 (t479u) : onglet Restaurants = reviews de Jigmé, un MD par restaurant (restaurants/<slug>.md, schéma restaurant-jigme/v1, docs/admin-restaurants.md)
  const RESTOS = fs.readdirSync(RESTODIR).filter(f => f.endsWith('.md') && !f.startsWith('_')).map(f => { const m = fs.readFileSync(RESTODIR + '/' + f, 'utf8').match(/^---\n([\s\S]*?)\n---/); if (!m) throw new Error('restaurants/' + f + ' : frontmatter manquant');
    let r; try { r = RD.cleanRestaurant(yaml.load(m[1])); } catch (e) { throw new Error('restaurants/' + f + ' : ' + e.message); }
    if (r.slug + '.md' !== f) throw new Error('restaurants/' + f + ' : slug ≠ nom de fichier');
    for (const u of [r.photo, ...r.blocs.flatMap(b => b.type === 'image' ? [b.src] : b.type === 'galerie' ? b.images.map(x => x.src) : [])]) if (!fs.existsSync('src' + u)) throw new Error('restaurants/' + f + ' : image absente ' + u);
    return r; });
  const RS_OPTS = { thumb: u => RR.thumbCandidates(u).find(t => fs.existsSync('src' + t)) || u };
  // v255 : « En construction » lu au build (RJ_SECTIONS_FILE = réponse de GET /api/v1/recettes/sections) ; sans fichier : contenu réel
  const CONSTRUCTION = process.env.RJ_SECTIONS_FILE ? ((JSON.parse(fs.readFileSync(process.env.RJ_SECTIONS_FILE, 'utf8')).sections || {}).restaurants || null) : null;
  const restaurantContent = constructionActive(CONSTRUCTION) ? constructionHtml(CONSTRUCTION, esc) : RR.renderListing(RESTOS, RS_OPTS);
  const RS_CSS = `<link rel="stylesheet" href="${v('restaurants.css')}">`, RS_JS = `<script src="${v('restaurants.js')}" defer></script>`;
  const sharpMeta = {};
  for (const r of RESTOS.filter(x => !x.hidden)) sharpMeta[r.photo] = await sharp('src' + r.photo).metadata();
  const restoCtx = { page, PRE_BAR, RESTOS, RS_OPTS, RR, RS_CSS, RS_JS, BANNER_PRELOAD, HOME_DESC, firstSlug, sharedHead, sectionTabs, sharpMeta, PROD, v, outRoot: 'dist', CONSTRUCTION, esc };
  for (const r of RESTOS.filter(x => !x.hidden)) writeRestaurantPage(r, restoCtx);
  console.log('restaurants', RESTOS.length, RESTOS.map(r => r.slug).join(','));
  const REAL = RESTOS.filter(r => !r.hidden && !r.test); RESTO_REAL = REAL.length;
  restoCtx.RESTO_REAL = RESTO_REAL;
  writeRestaurantSitemap(restoCtx);
  writeRestaurantCategoryPages({ ...restoCtx, SOC });
  // v235 : même écriture que la régénération ciblée (generate-pages.mjs writeSectionPage)
  for (const [route, title, content] of [
    ['affilies', 'Liens affiliés', affiliesContent],
    ['restaurant', 'Restaurants', restaurantContent]
  ]) writeSectionPage(route, title, content, { page, PRE_BAR, sharedHead, sectionTabs, RS_JS, RS_CSS, BANNER_PRELOAD, HOME_DESC, PROD, SOC, firstSlug, outRoot: 'dist' });
}
fs.writeFileSync('dist/404.html', page('Page introuvable — Recettes de Jigmé', `<main class="home nf"><header class="home-head"><h1 class="display">Page introuvable</h1><p class="muted">Cette page n’existe pas ou a changé d’adresse. La recette que vous cherchez est peut-être dans la liste.</p></header><p><a class="bubble-btn on" href="/">Toutes les recettes</a></p><nav class="cat-links" aria-label="Catégories"><a href="/c/sale/">Recettes salées</a> · <a href="/c/sucre/">Recettes sucrées</a> · <a href="/c/boissons/">Boissons</a></nav></main>`, '', 'p-home p-404'));
// ---------- Lien « coquille » vers le formulaire de contact (site lien en bio, paramètres motif + message) ----------
// Préprod : CONTACT_BASE, sinon LIENENBIO_URL, sinon https://preprod-lienenbio-jigme.fly.dev.
// Prod : LIENENBIO_URL ET CONTACT_BASE obligatoires, valant exactement https://jigme.fr (D28) (contrôlé en tête de fichier, sinon exit 1).
const TARGET = process.env.TARGET;
// Prod : base du contact = CONTACT_BASE (obligatoire, = LIENENBIO_URL = https://jigme.fr) ; URL des fiches = https://jigme.fr${BASE_PATH} (D29)
const LIENENBIO_PREPROD = 'https://preprod-lienenbio-jigme.fly.dev';
const CONTACT_BASE = (TARGET === 'prod' ? (process.env.CONTACT_BASE || process.env.LIENENBIO_URL) : (process.env.CONTACT_BASE || process.env.LIENENBIO_URL || LIENENBIO_PREPROD)).replace(/\/+$/, '');
if (TARGET === 'prod' && /preprod|fly\.dev/i.test(CONTACT_BASE)) throw new Error('Build de prod : la base du contact pointe vers la préprod (' + CONTACT_BASE + ')');
const SITE_ORIGIN = TARGET === 'prod' ? SITE_URL : 'https://recettes-jigme-preprod.fly.dev'; // dérivé de TARGET (lien coquille : jamais location.origin)
const SITE_BASE = SITE_ORIGIN + BASE_PATH; // D28
const CONTACT_URL = `${CONTACT_BASE}/contact`;
const COQUILLE_MOTIF = 'Coquille dans une recette';
const coquilleMsg = (title, url) => `Bonjour,\nJ'ai trouvé une coquille dans la recette « ${title} » (${url}) :\n[expliquez la coquille simplement]`;
const coquilleHref = (r, base = SITE_BASE) => `${CONTACT_URL}?${new URLSearchParams({ motif: COQUILLE_MOTIF, message: coquilleMsg(r.title, `${base}/r/${r.slug}/`) })}`;
// ---------- FICHES, idx, favoris, catégories, sitemap (generate-pages.mjs) ----------
const relatedHtml = makeRelated(recipes, L, (...a) => console.warn(...a));
const genCtx = {
  page, v, esc, recipes, cardsOrder, THUMB, THUMB360, AVIF, SOC, DIM, HEART, PRE_BAR,
  AMAZON_DISCLAIMER, VERBES, OV, PROD, SITE_URL, SITE_ORIGIN, altOf, conservationHtml,
  relatedHtml, descOf, reallyVegan, L, CUIS, STOP, stepName, adaptPanelHTML, norm, emoji,
  tileImg, coquilleHref, HERO, HERO_SET, BANNER_SIZES, today: null, prefixText, outRoot: 'dist',
};
for (const r of recipes) writeRecipePage(r, genCtx);
writeIdx(genCtx);
writeFavoris(genCtx);
writeCategoryPages(genCtx);
const today = new Date().toISOString().slice(0, 10);
genCtx.today = today;
writeCuisineSitemap(genCtx);
fs.writeFileSync('dist/robots.txt', process.env.TARGET === 'prod' ? `User-agent: *\nAllow: /\n\nSitemap: ${PROD}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n'); // préprod : rien d'indexable
console.log('titres NAS fautifs (corrigés localement)', JSON.stringify(recipes.filter(r => r.title_nas).map(r => [r.slug, r.title_nas, r.title])));
console.log('nettoyage', JSON.stringify({ a_orphelins: FIX.a, artefacts: FIX.art, guillemets: FIX.nb, variantes: FIX.variants }));
console.log('build ok', recipes.map(r => r.slug));
await ssrPages({ dist: 'dist' });
await import('./check-seo.mjs');
// /test/ (pages de bisection safe-area) : jamais dans l'image déployée ; générées seulement avec GEN_TESTS=1 (usage local)
if (process.env.GEN_TESTS === '1') await import('./gen-tests.mjs'); else fs.rmSync('dist/test', { recursive: true, force: true });

// ---- 29/10 : images versionnées par hash du contenu (?v=<sha1 8>) dans tout le texte de dist : une même URL (ex. /img/a/720/<slug>.avif) ne sert plus jamais deux photos différentes → plus d'ancienne photo en cache navigateur (Cache-Control 7 j)
{ const crypto = await import('node:crypto'); const H = {}; const hashOf = u => { if (!(u in H)) { const f = 'dist' + u; H[u] = fs.existsSync(f) ? crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8) : null; } return H[u]; };
  let nf = 0, nu = 0; const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = d + '/' + e.name; if (e.isDirectory()) { if (!f.startsWith('dist/img')) walk(f); continue; } if (!/\.(html|js|json|xml|css)$/.test(e.name)) continue;
    const t = fs.readFileSync(f, 'utf8'); const t2 = t.replace(/(\/img\/[A-Za-z0-9_\/.-]+\.(?:webp|avif|jpg|jpeg|png))(\?v=[0-9a-f]+)?(?=[\s"'),\\&])/g, (m, u) => { const h = hashOf(u); if (!h) return m; nu++; return u + '?v=' + h; }); if (t2 !== t) { fs.writeFileSync(f, t2); nf++; } } };
  walk('dist'); console.log('images versionnées', nu, 'URL dans', nf, 'fichiers'); }
// ---- D29 (12/11/2026) : préfixes publics ${BASE_PATH}/ et ${RESTO_PATH}/ ; prefixText (honeypot/paths.mjs) est la seule conversion chemin logique → public.
// Avant la CSP : les scripts inline changent (leurs empreintes sont calculées ensuite). dist/vendor (bibliothèques tierces) n'est pas touché.
{ let nf = 0; const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = d + '/' + e.name; if (e.isDirectory()) { if (f !== 'dist/vendor' && !f.startsWith('dist/img')) walk(f); continue; } if (!/\.(html|js|json|xml|css|txt)$/.test(e.name)) continue;
    const t = fs.readFileSync(f, 'utf8'); let t2 = prefixText(t);
    // noindex (décision Jigmé 11/11 17:49) : signets, liens affiliés, restaurants de test ; déjà global en préprod
    if ((/^dist\/(favoris|affilies|restaurant\/(burger-test-express|table-test-etoilee))\/index\.html$/.test(f) || (/^dist\/restaurant\/(c\/[a-z0-9-]+\/)?index\.html$/.test(f) && !RESTO_REAL)) && !/<meta name="robots"/.test(t2)) t2 = t2.replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta name="robots" content="noindex, follow">');
    if (t2 !== t) { fs.writeFileSync(f, t2); nf++; } } };
  walk('dist'); console.log('préfixes ' + BASE_PATH + ' et ' + RESTO_PATH + ' :', nf, 'fichiers'); }
// ---- CSP générée (csp.inc, copiée dans l'image) : sans unsafe-inline, hash des seuls scripts/styles inline présents dans dist
{
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(d + '/' + e.name) : e.name.endsWith('.html') ? [d + '/' + e.name] : []);
  const sha = t => "'sha256-" + crypto.createHash('sha256').update(t).digest('base64') + "'";
  const sc = new Set(), st = new Set();
  for (const f of walk('dist')) {
    const h = fs.readFileSync(f, 'utf8');
    for (const m of h.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) if (!/\ssrc=/.test(m[1]) && !/type="(application\/(ld\+)?json)"/.test(m[1])) sc.add(sha(m[2]));
    for (const m of h.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) st.add(sha(m[1]));
    if (/\s(style|on[a-z]+)="/.test(h.replace(/data-style="[^"]*"/g, ''))) throw new Error('attribut style= ou on*= dans ' + f + ' : incompatible avec la CSP sans unsafe-inline');
  }
  if (sc.size > 4 || st.size > 2) throw new Error('trop de scripts/styles inline distincts (' + sc.size + '/' + st.size + ') : la CSP par hash suppose des blocs identiques sur toutes les pages');
  const formAction = ["'self'", new URL(CONTACT_BASE).origin].join(' ');
  const audienceOrigin = AUDIENCE_SCRIPT_URL ? new URL(AUDIENCE_SCRIPT_URL).origin : '';
  const csp = ["default-src 'self'", `script-src 'self' ${[...sc].join(' ')}${audienceOrigin ? ' ' + audienceOrigin : ''}`, `style-src 'self' ${[...st].join(' ')}`, `img-src 'self' data: blob:${IS_PROD ? '' : ' https://tile.openstreetmap.org'}`, "font-src 'self' data:", "media-src 'self' blob: data:", `connect-src 'self' blob: data:${IS_PROD ? '' : ' https://api-adresse.data.gouv.fr'}${audienceOrigin ? ' ' + audienceOrigin : ''}`, "worker-src 'self' blob:", "object-src 'none'", "base-uri 'self'", `form-action ${formAction}`, "frame-ancestors 'self'", 'upgrade-insecure-requests'].join('; ');
  fs.writeFileSync('csp.inc', `# Généré par build.mjs (${TARGET}, CONTACT_BASE=${new URL(CONTACT_BASE).origin}) : ne pas éditer\nadd_header Content-Security-Policy "${csp}" always;\n`);
  console.log('CSP :', TARGET, '| scripts inline', sc.size, '| styles inline', st.size, '| form-action', formAction, '| audience', audienceOrigin || 'non');
}
// ---- D29 : arborescence servie = chemins publics. dist${BASE_PATH}/ (site) et dist${RESTO_PATH}/ (ex dist/restaurant/) ; robots.txt racine pour l'hôte fly.dev
// (jigme.fr/robots.txt appartient au lien en bio). Aucun blocage de robots IA.
{ fs.renameSync('dist', 'dist.tmp'); fs.mkdirSync('dist'); fs.renameSync('dist.tmp', 'dist' + BASE_PATH);
  if (fs.existsSync('dist' + BASE_PATH + '/restaurant')) fs.renameSync('dist' + BASE_PATH + '/restaurant', 'dist' + RESTO_PATH);
  fs.renameSync('dist' + BASE_PATH + '/robots.txt', 'dist/robots.txt');
  if (IS_PROD) fs.writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}${BASE_PATH}/sitemap.xml\n`);
  const unpref = new RegExp('(?:href|src)="/(?!' + BASE_PATH.slice(1) + '/|' + RESTO_PATH.slice(1) + '/)');
  const left = []; const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = d + '/' + e.name; if (e.isDirectory()) { if (!f.includes('/vendor') && !f.includes('/img')) walk(f); } else if (e.name.endsWith('.html') && unpref.test(fs.readFileSync(f, 'utf8'))) left.push(f); } };
  walk('dist'); if (left.length) throw new Error('chemins non préfixés dans ' + left.length + ' pages, ex. ' + left.slice(0, 3).join(', '));
  console.log('arborescence : dist' + BASE_PATH + '/, dist' + RESTO_PATH + '/, dist/robots.txt'); }
// ---- D50 : manifeste non public (copié dans /opt par le Dockerfile) : la luminance du titre est liée à l'empreinte du fichier
// servi (si l'admin remplace la photo, la régénération ciblée recalcule depuis le fichier public). Ni secret ni chemin NAS.
{ for (const [slug, t] of Object.entries(MANIFEST.titleLum)) { const f = 'dist' + BASE_PATH + t.url; t.sha1 = fs.existsSync(f) ? crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex') : null; }
  MANIFEST.today = genCtx.today; MANIFEST.eqCredits = EQ_CREDITS;
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(MANIFEST)); console.log('manifeste', MANIFEST_FILE, Object.keys(MANIFEST.titleLum).length, 'luminances'); }
