// v237 : GET /api/v1/admin/analytics — audience des pages /cuisine et /restaurants, lue chez Lien en bio
// (résumé front-analytics:lire, collecte déjà faite par a.js). Aucune collecte ni stockage côté Recettes.
// Clé ANALYTICS_READ_KEY : jamais journalisée ni renvoyée.

const DEFAULT_BASE = "http://preprod-lienenbio-jigme.flycast:8080";
const PREFIXES = "/cuisine,/restaurants";
const MAX_DAYS = 366;
const DAY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

const err = (status, error) => Object.assign(new Error(error), { status });

/** Jour civil réel AAAA-MM-JJ → numéro de jour (UTC minuit), sinon null. */
function dayNum(s) {
  const m = DAY_RE.exec(String(s || ""));
  if (!m) return null;
  const t = Date.UTC(+m[1], +m[2] - 1, +m[3]);
  const d = new Date(t);
  return d.getUTCFullYear() === +m[1] && d.getUTCMonth() === +m[2] - 1 && d.getUTCDate() === +m[3] ? t / 86400000 : null;
}

/** Aujourd'hui en Europe/Paris, AAAA-MM-JJ. */
export function parisToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** from/to : bornes incluses, jours de Paris ; absents → 30 derniers jours (comme la source). Erreur → status 400. */
export function parseRange(params, now = new Date()) {
  let from = params.get("from"), to = params.get("to");
  if (!from && !to) {
    to = parisToday(now);
    from = new Date((dayNum(to) - 29) * 86400000).toISOString().slice(0, 10);
  }
  const a = dayNum(from), b = dayNum(to);
  if (a == null || b == null) throw err(400, "from et to doivent être des dates AAAA-MM-JJ");
  if (b < a) throw err(400, "to doit être postérieur ou égal à from");
  if (b - a + 1 > MAX_DAYS) throw err(400, "plage maximale de 366 jours");
  return { from, to };
}

const pairs = (arr) => (Array.isArray(arr) ? arr : [])
  .map((x) => ({ key: String(x?.key ?? ""), count: Number(x?.count) || 0 }))
  .filter((x) => x.key);

/** Réponse de la source → contrat validé par Admin (forme exacte, sans totaux). */
export function toContract(src, { from, to }) {
  return {
    ok: true,
    from: String(src.from || from),
    to: String(src.to || to),
    fuseau: "Europe/Paris",
    visits: Number(src.visits) || 0,
    uniques: Number(src.uniques) || 0,
    daily: (Array.isArray(src.daily) ? src.daily : [])
      .filter((d) => d && DAY_RE.test(String(d.day)))
      .map((d) => ({ day: String(d.day), visits: Number(d.visits) || 0, uniques: Number(d.uniques) || 0 })),
    topPages: pairs(src.topPages),
    sources: pairs(src.sources),
  };
}

export async function fetchAnalytics({ from, to }, { fetchImpl = fetch, base, key } = {}) {
  const root = String(base || process.env.ANALYTICS_BASE || DEFAULT_BASE).replace(/\/+$/, "");
  const secret = String(key || process.env.ANALYTICS_READ_KEY || "").trim();
  if (!secret) throw err(503, "source d'audience non configurée");
  const u = `${root}/api/v1/analytics/summary?prefix=${encodeURIComponent(PREFIXES)}&from=${from}&to=${to}`;
  let r, j;
  try {
    r = await fetchImpl(u, { headers: { Authorization: "Bearer " + secret, Accept: "application/json" }, signal: AbortSignal.timeout(10000) });
    j = await r.json();
  } catch {
    throw err(502, "source d'audience injoignable");
  }
  if (r.status === 400) throw err(400, String(j?.error || "requête refusée par la source"));
  if (!r.ok || !j || j.ok !== true) throw err(502, "source d'audience indisponible (" + r.status + ")");
  return toContract(j, { from, to });
}
