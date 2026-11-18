// Chemins publics (D29, 12/11/2026) : le site est servi sous jigme.fr/cuisine/ et jigme.fr/restaurants/ (préfixes conservés par le proxy de Lien en bio).
// Ancien préfixe /recettes/ (D28) : 301 nginx vers /cuisine/ (chemin et query conservés, un seul saut).
// Le build et l'API admin produisent d'abord des chemins « logiques » à la racine (/r/…, /img/…, /restaurant/…) et des URL absolues
// https://recettes.jigme.fr/… (hôte logique, jamais publié) ; prefixText() est le seul endroit qui les convertit en chemins publics.
// BASE_PATH reste le paramètre unique du préfixe de base (d'autres rubriques, ex. /jardin, pourront coexister plus tard).
export const BASE_PATH = '/cuisine';
export const RESTO_PATH = '/restaurants';
export const SITE_URL = 'https://jigme.fr';
const LOGICAL_ORIGIN = 'https://recettes.jigme.fr';
// u('/r/x/') → '/cuisine/r/x/' ; u('/restaurant/x/') → '/restaurants/x/' ; u('/') → '/cuisine/'
export const u = (p = '/') => p === '/restaurant' || p.startsWith('/restaurant/') ? RESTO_PATH + p.slice('/restaurant'.length) : BASE_PATH + p;
// Chemin public → chemin logique (inverse de u), null hors préfixes
export const logical = (p) => p === RESTO_PATH || p.startsWith(RESTO_PATH + '/') ? '/restaurant' + p.slice(RESTO_PATH.length) : p === BASE_PATH || p.startsWith(BASE_PATH + '/') ? p.slice(BASE_PATH.length) || '/' : null;
const ABS = /https:\/\/recettes\.jigme\.fr(\/[^\s"'<>)\\,`]*)?/g;
const REL = /(?<=["'(`]|, )\/((?:r|c|img|fonts|icons|vendor|favoris|affilies)\/|restaurant(?=[\/"'?#`])|idx\.json|sitemap\.xml|robots\.txt|404\.html|favicon\.(?:svg|ico)|apple-touch-icon\.png|icon-\d+\.png|[a-z][a-z0-9-]*\.(?:css|js)(?=[?"'`]))/g;
const ROOT = /\b(href|action|data-rj-path)=(\\?["'])\/\2/g;
// Idempotent : un chemin déjà préfixé (/cuisine/…, /restaurants/…) n'est jamais repris.
export const prefixText = (t) => t
  .replace(ABS, (m, p) => SITE_URL + u(p || '/'))
  .replace(REL, (m, p) => u('/' + p))
  .replace(ROOT, (m, a, q) => `${a}=${q}${BASE_PATH}/${q}`);
export { LOGICAL_ORIGIN };
