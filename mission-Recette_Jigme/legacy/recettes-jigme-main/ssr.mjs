// SEO : pré-rendu statique des ingrédients (<ul>) et étapes (<ol>) de la version par défaut (métrique, portions de base).
// app.js rend la page avec un navigateur sans profil, on recopie #ingredients et #steps dans le HTML ; app.js remplace ensuite ce contenu à l'identique.
import { stepName } from './howto-name.mjs';
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';

export async function ssrPages({ dist = 'dist', slugs = null } = {}) {
  const DIST = path.resolve(dist);
  if (!fs.existsSync(path.join(DIST, 'r'))) {
    console.log('ssr ignoré : pas de dossier r/ dans', DIST);
    return { n: 0, skipped: true };
  }
  let chromium;
  // Box : playwright + google-chrome. Image préprod (régénération ciblée) : playwright-core + chromium Alpine (/usr/bin/chromium-browser), lancé en --jitless (sinon V8 réserve 512 Mo d'un bloc, refusés par le noyau Fly).
  for (const m of ['playwright', 'playwright-core', path.join(path.dirname(fileURLToPath(import.meta.url)), 'hp/node_modules/playwright-core/index.mjs'), '/opt/hp/node_modules/playwright-core/index.mjs']) { try { ({ chromium } = await import(m)); break; } catch {} }
  if (!chromium) {
    console.log('ssr ignoré : playwright absent');
    return { n: 0, skipped: true, reason: 'playwright' };
  }
  const exe = [process.env.RJ_CHROMIUM, '/usr/bin/google-chrome', '/usr/bin/chromium-browser', '/usr/bin/chromium'].find(f => f && fs.existsSync(f));
  const boxChrome = exe === '/usr/bin/google-chrome';
  const TYPES = { html: 'text/html', js: 'text/javascript', css: 'text/css', webp: 'image/webp', svg: 'image/svg+xml', json: 'application/json', png: 'image/png' };
const browser = await chromium.launch({ executablePath: exe, ...(boxChrome || !exe ? {} : { args: ['--disable-dev-shm-usage', '--disable-gpu', '--no-zygote', '--js-flags=--jitless'], env: { ...process.env, HOME: process.env.RJ_CHROMIUM_HOME || '/tmp' } }) });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
await ctx.addInitScript(() => { try { localStorage.clear(); sessionStorage.clear(); } catch {} });
await ctx.route('**/*', async rt => { const u = new URL(rt.request().url()); if (u.hostname !== 'ssr.local') return rt.abort();
  let f = path.join(DIST, decodeURIComponent(u.pathname)); if (f.endsWith('/')) f += 'index.html';
  if (!f.startsWith(DIST) || !fs.existsSync(f)) return rt.fulfill({ status: 404, body: '' });
  rt.fulfill({ status: 200, contentType: TYPES[f.split('.').pop()] || 'application/octet-stream', body: fs.readFileSync(f) }); });
let n = 0; const DIVERGE = [], ECART = [];
try { // le navigateur est toujours fermé (Fly : 512 Mo)
const pg = await ctx.newPage();
  const list = slugs ? slugs.filter(s => fs.existsSync(path.join(DIST, 'r', s, 'index.html'))) : fs.readdirSync(path.join(DIST, 'r'));
  for (const slug of list) {
      const file = path.join(DIST, 'r', slug, 'index.html'); if (!fs.existsSync(file)) continue;
  await pg.goto(`http://ssr.local/r/${slug}/`, { waitUntil: 'load' });
  await pg.waitForFunction(() => document.querySelector('#steps li') || document.querySelector('#ingredients').innerHTML, null, { timeout: 10000 }).catch(() => {});
  const { ing, st, rs, dom } = await pg.evaluate(() => ({ ing: document.querySelector('#ingredients').innerHTML, st: (() => { const o = document.querySelector('#steps').cloneNode(true); o.querySelectorAll(':scope > li:not([data-k])').forEach(e => e.remove()); return o.innerHTML; })(),
    rs: { ings: window.RJ_STATE.ings, steps: window.RJ_STATE.steps.map(x => x.seo ?? x.text), shown: window.RJ_STATE.steps.map(x => x.text), names: window.RJ_STATE.steps.map(x => x.name), servings: window.RJ_STATE.servings },
    dom: { ings: [...document.querySelectorAll('#ingredients li')].map(li => ({ nm: li.querySelector('.nm')?.textContent.trim() || '', q: li.querySelector('.q')?.textContent.trim() || '' })), steps: [...document.querySelectorAll('#steps li[data-k]')].map(li => li.textContent.trim()) } }));
  let h = fs.readFileSync(file, 'utf8');
  // JSON-LD généré depuis le même rendu que le HTML visible (RJ_STATE) : ingrédients, étapes, portions
  const LD = /<script type="application\/ld\+json">([^<]*)<\/script>/;
  const ld = JSON.parse(h.match(LD)[1].replace(/\\u003c/g, '<')), avant = JSON.stringify([ld.recipeIngredient, ld.recipeInstructions.map(x => x.text), ld.recipeYield]);
  ld.recipeIngredient = rs.ings.map(i => [i.q, i.nm].filter(Boolean).join(' '));
  const nmBuild = ld.recipeInstructions.map(x => x.name);
  ld.recipeInstructions = rs.steps.map((t, k) => ({ '@type': 'HowToStep', name: rs.names[k], text: t }));
  ld.recipeYield = rs.servings;
  if (avant !== JSON.stringify([ld.recipeIngredient, ld.recipeInstructions.map(x => x.text), ld.recipeYield])) DIVERGE.push(slug);
  h = h.replace(LD, () => `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  // test de comparaison JSON-LD ↔ HTML visible (le build échoue au moindre écart)
  const ldI = ld.recipeIngredient, domI = dom.ings.map(i => [i.q, i.nm].filter(Boolean).join(' '));
  const norm = t => t.replace(/\s+/g, ' ').trim();
  const okI = ldI.length === domI.length && ldI.every((t, k) => norm(t) === norm(domI[k]).replace(/ajusté$/, '').trim() || norm(domI[k]).startsWith(norm(t)) || norm(domI[k]).includes(norm(t).replace(/^\S+ \S+ /, '')));
  const okS = ld.recipeInstructions.length === dom.steps.length && ld.recipeInstructions.every((x, k) => x.name === nmBuild[k]) && ld.recipeInstructions.every((x, k) => norm(rs.shown[k]) === norm(dom.steps[k])); // v114 : JSON-LD = steps (habitué sans balise) ; le HTML visible = mode affiché (débutant par défaut sur les fiches à deux lectures)
  if (!okI || !okS) ECART.push(slug + (okI ? '' : ' [ingrédients]') + (okS ? '' : ' [étapes]'));
  h = h.replace('<div id="ingredients"></div>', `<div id="ingredients">${ing.replace(/ class="[^"]*(?:entering|leaving)[^"]*"/g, '')}</div>`).replace('<ol id="steps" class="steps"></ol>', `<ol id="steps" class="steps">${st}</ol>`);
  fs.writeFileSync(file, h); if (ing && st) n++;
}
} finally { await browser.close(); }
console.log('ssr', n);
console.log('JSON-LD recalculé depuis le HTML visible :', DIVERGE.length, 'fiches avec écart avant correction', DIVERGE.slice(0, 40).join(','));
console.log('test JSON-LD = HTML visible :', ECART.length ? 'ÉCHEC ' + ECART.join(', ') : 'OK (' + n + ' fiches, 0 écart)');
  if (ECART.length) throw new Error('JSON-LD ≠ HTML visible : ' + ECART.join(', '));
  return { n, DIVERGE, ECART };
}


const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) await ssrPages({ dist: 'dist', slugs: process.argv[2] ? process.argv.slice(2) : null });
