// Projection publique préprod : les MD restent la seule source de visibilité.
import fs from 'node:fs';
import path from 'node:path';
import { u } from './paths.mjs'; // D29 : nginx retire /cuisine avant le proxy ; les Location renvoyées sont publiques
const norm = s => String(s || '').normalize('NFD').replace(/\p{M}/gu, '').trim().toLowerCase();
export function filterRecipeMaterial(recipe, materials) {
  const names = new Set(materials.flatMap(m => [m.id, m.label, ...(m.aliases || [])]).map(norm));
  const blocked = name => names.has(norm(name)) || names.has(norm(recipe.equipment_meta?.[name]?.label));
  const walk = obj => {
    if (!obj || typeof obj !== 'object') return;
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'equipment' && Array.isArray(value)) obj[key] = value.filter(x => !blocked(typeof x === 'string' ? x : x?.name || x?.ref));
      else if (key === 'equipment_recos' || key === 'equipment_meta') {
        if (value && typeof value === 'object') for (const name of Object.keys(value)) if (blocked(name)) delete value[name];
      } else walk(value);
    }
  };
  // Les labels metadata sont nécessaires à blocked même après suppression des clés.
  const snapshot = recipe.equipment_meta;
  recipe.equipment_meta = snapshot ? { ...snapshot } : snapshot;
  const labels = new Set(Object.keys(snapshot || {}).filter(blocked).map(norm));
  for (const name of labels) names.add(name);
  walk(recipe);
  return recipe;
}
export function projectHtml(html, state) {
  if (!state.recipes.size && !state.materiel.length) return html;
  html = html.replace(/<div class="tw"\s+data-slug="([a-z0-9-]+)"[\s\S]*?<\/div>/g, (tile, slug) => state.recipes.has(slug) ? '' : tile);
  // JSON-LD des fiches ne contient pas le matériel ; JSON de l'app et index signets oui.
  return html.replace(/(<script type="application\/json" id="rj-data">)([\s\S]*?)(<\/script>)/g, (_, a, raw, b) => {
    const data = JSON.parse(raw);
    if (data.RECETTE) filterRecipeMaterial(data.RECETTE, state.materiel);
    if (Array.isArray(data.IDX)) data.IDX = data.IDX.filter(r => !state.recipes.has(r.s || r.slug));
    else if (data.IDX) for (const slug of state.recipes) delete data.IDX[slug];
    return a + JSON.stringify(data).replace(/</g, '\\u003c') + b;
  });
}
const redirects = { 'delicieuse-tarte-poires-et-chocolat-youcookcuisine': 'tarte-poire-chocolat', 'pain-cuit-a-la-cocotte': 'pain-a-la-cocotte' };
export function publicRoute(p) {
  return ['/', '/index.html', '/idx.json', '/sitemap.xml', '/r', '/c', '/favoris'].includes(p) || /^\/(r|c|favoris)\//.test(p);
}
export function publicResponse(root, p, state, search = '') {
  // D48 : même politique que nginx.conf location / (ETag conservé). /cuisine/ et /cuisine/r|c|favoris/ sont servis ici, pas par nginx statique.
  const headers = { 'Cache-Control': 'public, max-age=0, stale-while-revalidate=120', 'X-Content-Type-Options': 'nosniff' };
  const result = (status, body, type='text/html; charset=utf-8') => ({status, body, headers:{...headers,'Content-Type':type}});
  // En préprod, ^~ /cuisine/r|c/ envoie ces 301 ici (pas nginx) : conserver la query, comme $is_args$args.
  const q = typeof search === 'string' && search.startsWith('?') ? search : '';
  const redirect = to => ({status:301,body:'',headers:{...headers,Location:u(to)+q}});
  if (['/index.html','/r','/c','/r/','/c/','/r/index.html','/c/index.html'].includes(p)) return redirect('/');
  const m = p.match(/^\/r\/([a-z0-9-]+)(?:\/index\.html|\/)?$/);
  if (m) {
    const slug = redirects[m[1]] || m[1];
    if (state.recipes.has(slug)) return result(404,'Recette indisponible');
    if (redirects[m[1]] || !p.endsWith('/') || p.endsWith('/index.html')) return redirect('/r/'+slug+'/');
  }
  const category = p.match(/^\/c\/([a-z0-9-]+)(?:\/index\.html)?$/);
  if (category) return redirect('/c/'+category[1]+'/');
  // Une liste fermée de chemins, aucune lecture arbitraire (ni encodage / traversal).
  if (!/^\/(?:r|c)\/[a-z0-9-]+\/(?:index\.html)?$/.test(p) && !['/','/favoris/','/favoris/index.html','/idx.json','/sitemap.xml'].includes(p)) return result(404,'Page introuvable');
  const file = path.join(root, p === '/' ? 'index.html' : p.endsWith('/') ? p.slice(1)+'index.html' : p.slice(1));
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return result(404,'Page introuvable');
  let body=fs.readFileSync(file,'utf8');
  if (p === '/idx.json') {
    const index=JSON.parse(body); for (const slug of state.recipes) delete index[slug];
    return result(200,JSON.stringify(index),'application/json; charset=utf-8');
  }
  if (p === '/sitemap.xml') {
    body=body.replace(/<url>\s*<loc>[^<]*\/r\/([a-z0-9-]+)\/<\/loc>[\s\S]*?<\/url>/g,(entry,slug)=>state.recipes.has(slug)?'':entry);
    return result(200,body,'application/xml; charset=utf-8');
  }
  return result(200,projectHtml(body,state));
}
