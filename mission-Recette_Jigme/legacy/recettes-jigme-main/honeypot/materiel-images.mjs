// Lecture d'images produit Amazon (candidates + téléchargement) : HTTPS public, hôtes autorisés, pas de SSRF.
import { lookup as dnsLookup } from "node:dns/promises";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const PAGE_TIMEOUT_MS = 8000;
const IMAGE_TIMEOUT_MS = 8000;
const MAX_HTML = 1_500_000;
const MAX_IMAGE = 8 * 1024 * 1024;
const MAX_REDIRECTS = 5;
const MAX_CANDIDATES = 12;

const HOST_SUFFIXES = [
  "amazon.com", "amazon.co.uk", "amazon.co.jp", "amazon.com.au", "amazon.com.be",
  "amazon.com.mx", "amazon.com.br", "amazon.com.tr", "amazon.fr", "amazon.de",
  "amazon.es", "amazon.it", "amazon.ca", "amazon.nl", "amazon.se", "amazon.pl",
  "amazon.in", "amazon.sg", "amazon.ae", "amazon.sa", "amazon.eg", "amazon.ie",
  "ssl-images-amazon.com", "media-amazon.com", "images-amazon.com",
  "amzn.to", "amzn.eu", "a.co", "amzlinks.in",
];

let fetchImpl = globalThis.fetch.bind(globalThis);
let lookupImpl = (host) => dnsLookup(host, { all: true, verbatim: true });

/** Hooks de test uniquement (ne pas utiliser en production). */
export function setMaterielImageHooks({ fetch, lookup } = {}) {
  if (fetch) fetchImpl = fetch;
  if (lookup) lookupImpl = lookup;
}
export function resetMaterielImageHooks() {
  fetchImpl = globalThis.fetch.bind(globalThis);
  lookupImpl = (host) => dnsLookup(host, { all: true, verbatim: true });
}

export function hostAllowed(host) {
  const h = String(host || "").replace(/\.$/, "").toLowerCase();
  if (!h || /[^a-z0-9.-]/.test(h)) return false;
  if (h === "link.amazon" || h.endsWith(".link.amazon")) return true;
  return HOST_SUFFIXES.some((s) => h === s || h.endsWith("." + s));
}

export function isPrivateIp(ip) {
  const raw = String(ip || "").toLowerCase().replace(/^\[|\]$/g, "");
  if (!raw) return true;
  if (raw.startsWith("::ffff:")) return isPrivateIp(raw.slice(7));
  if (raw.includes(":")) {
    if (raw === "::1" || raw === "::" || raw.startsWith("fe80:") || raw.startsWith("fc") || raw.startsWith("fd")) return true;
    return false;
  }
  const p = raw.split(".").map(Number);
  if (p.length !== 4 || p.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return true;
  const [a, b] = p;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 192 && b === 168) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
  if (a >= 224) return true; // multicast / reserved
  return false;
}

export function parseAsin(url) {
  const s = String(url || "");
  const m = s.match(/\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/(?:a|s|tg\/detail)[^\s]*\/)([A-Z0-9]{8,12})(?:[/?#]|$)/i)
    || s.match(/link\.amazon\/([A-Z0-9]{8,12})(?:[/?#]|$)/i)
    || s.match(/[?&]asin=([A-Z0-9]{8,12})(?:&|$)/i)
    || s.match(/\/([A-Z0-9]{10})(?:[/?#]|$)/i);
  return m ? m[1].toUpperCase() : undefined;
}

const err = (status, message) => Object.assign(new Error(message), { status });

export function parseHttpsUrl(raw) {
  let u;
  try { u = new URL(String(raw || "").trim()); } catch { throw err(400, "url https invalide"); }
  if (u.protocol !== "https:") throw err(400, "url https requise");
  if (u.username || u.password) throw err(400, "url https invalide");
  if (!hostAllowed(u.hostname)) throw err(400, "hôte non autorisé (domaines Amazon et leurs images seulement)");
  return u;
}

async function assertPublicHost(host) {
  if (!hostAllowed(host)) throw err(400, "hôte non autorisé (domaines Amazon et leurs images seulement)");
  let records;
  try { records = await lookupImpl(host); } catch { throw err(502, "hôte introuvable"); }
  const list = Array.isArray(records) ? records : [records];
  if (!list.length) throw err(502, "hôte introuvable");
  for (const r of list) {
    const address = r.address || r;
    if (isPrivateIp(address)) throw err(400, "adresse privée refusée");
  }
}

function looksBlocked(status, body, contentType) {
  if (status === 503 || status === 429) return "unavailable";
  const t = String(body || "").slice(0, 80_000).toLowerCase();
  const typ = String(contentType || "").toLowerCase();
  if (status === 202 || /validatecaptcha|opfcaptcha|enter the characters you see|attention required|robot check|api-services-support@amazon\.com/.test(t)) return "captcha";
  if (typ.includes("html") && /captcha/.test(t) && /amazon/.test(t) && t.length < 20000) return "captcha";
  return null;
}

async function fetchHop(url, { timeout, accept, maxBytes }) {
  const u = parseHttpsUrl(url);
  await assertPublicHost(u.hostname);
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeout);
  let res;
  try {
    res = await fetchImpl(u.href, {
      method: "GET",
      redirect: "manual",
      signal: ac.signal,
      headers: {
        "User-Agent": UA,
        "Accept": accept,
        "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8",
      },
    });
  } catch (e) {
    if (e && (e.name === "AbortError" || e.code === "ABORT_ERR")) throw err(504, "délai dépassé en lisant la page Amazon. Envoie une image à la place.");
    throw err(502, "lecture Amazon impossible. Envoie une image à la place.");
  } finally { clearTimeout(t); }
  return res;
}

async function readLimited(res, max) {
  const bufs = [];
  let n = 0;
  const body = res.body;
  if (!body || typeof body.getReader !== "function") {
    const ab = await res.arrayBuffer();
    if (ab.byteLength > max) throw err(413, "réponse trop volumineuse");
    return Buffer.from(ab);
  }
  const reader = body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.byteLength;
    if (n > max) { try { reader.cancel(); } catch {} throw err(413, "réponse trop volumineuse"); }
    bufs.push(Buffer.from(value));
  }
  return Buffer.concat(bufs);
}

export async function fetchAllowed(url, { timeout = PAGE_TIMEOUT_MS, accept = "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8", maxBytes = MAX_HTML, maxRedirects = MAX_REDIRECTS } = {}) {
  let current = url;
  for (let i = 0; i <= maxRedirects; i++) {
    const res = await fetchHop(current, { timeout, accept, maxBytes });
    const loc = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && loc) {
      let next;
      try { next = new URL(loc, current).href; } catch { throw err(502, "redirection Amazon invalide"); }
      current = next;
      continue;
    }
    const type = res.headers.get("content-type") || "";
    const buf = await readLimited(res, maxBytes);
    return { url: current, status: res.status, type, buf, headers: res.headers };
  }
  throw err(502, "trop de redirections");
}

export function normalizeAmazonImageUrl(raw, base) {
  let href;
  try { href = new URL(String(raw || "").trim(), base).href; } catch { return null; }
  let u;
  try { u = new URL(href); } catch { return null; }
  if (u.protocol !== "https:") return null;
  if (!hostAllowed(u.hostname)) return null;
  // Ôte les suffixes de taille Amazon ._AC_SL1500_ / ._SX679_ etc. pour proposer la plus grande version.
  u.pathname = u.pathname.replace(/\._[A-Z0-9,_]+(?=\.[a-z]{3,4}$)/i, "");
  u.hash = "";
  return u.href;
}

function addCandidate(map, raw, base, dim) {
  const url = normalizeAmazonImageUrl(raw, base);
  if (!url) return;
  const prev = map.get(url) || { url };
  if (dim && dim[0] > 0 && dim[1] > 0) {
    if (!prev.width || dim[0] * dim[1] > (prev.width || 0) * (prev.height || 0)) {
      prev.width = dim[0];
      prev.height = dim[1];
    }
  }
  map.set(url, prev);
}

function decodeEntities(s) {
  return String(s || "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export function extractCandidates(html, baseUrl) {
  const map = new Map();
  const text = String(html || "");
  const metaRe = /<meta\s[^>]*(?:property|name)\s*=\s*["'](?:og:image(?::url)?|twitter:image(?::src)?)["'][^>]*>/gi;
  let m;
  while ((m = metaRe.exec(text))) {
    const c = m[0].match(/content=["']([^"']+)["']/i);
    if (c) addCandidate(map, decodeEntities(c[1]), baseUrl);
  }
  const old = text.matchAll(/data-old-hires=["']([^"']+)["']/gi);
  for (const x of old) addCandidate(map, decodeEntities(x[1]), baseUrl);
  const dyn = text.matchAll(/data-a-dynamic-image=["']([^"']+)["']/gi);
  for (const x of dyn) {
    try {
      const json = JSON.parse(decodeEntities(x[1]));
      if (json && typeof json === "object") {
        for (const [u, d] of Object.entries(json)) {
          const dim = Array.isArray(d) ? d : null;
          addCandidate(map, u, baseUrl, dim);
        }
      }
    } catch { /* ignore */ }
  }
  // JSON-LD Product.image
  const ldRe = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  while ((m = ldRe.exec(text))) {
    try {
      const data = JSON.parse(m[1]);
      const visit = (v) => {
        if (!v) return;
        if (typeof v === "string") { addCandidate(map, v, baseUrl); return; }
        if (Array.isArray(v)) { v.forEach(visit); return; }
        if (typeof v === "object") {
          const types = [].concat(v["@type"] || []);
          if (types.some((t) => String(t).toLowerCase() === "product") && v.image) visit(v.image);
          if (v.url && /\/images\//.test(String(v.url))) addCandidate(map, v.url, baseUrl);
        }
      };
      visit(data);
    } catch { /* ignore */ }
  }
  // Blocs colorImages / hiRes typiques des pages Amazon
  const color = text.matchAll(/"hiRes"\s*:\s*"(https:[^"\\]+)"/g);
  for (const x of color) addCandidate(map, x[1].replace(/\\u002F/g, "/"), baseUrl);
  const large = text.matchAll(/"large"\s*:\s*"(https:[^"\\]+)"/g);
  for (const x of large) addCandidate(map, x[1].replace(/\\u002F/g, "/"), baseUrl);
  const landing = text.match(/id=["']landingImage["'][^>]*src=["']([^"']+)["']/i)
    || text.match(/id=["']imgBlkFront["'][^>]*src=["']([^"']+)["']/i);
  if (landing) addCandidate(map, decodeEntities(landing[1]), baseUrl);

  const list = [...map.values()].sort((a, b) => ((b.width || 0) * (b.height || 0)) - ((a.width || 0) * (a.height || 0)));
  return list.slice(0, MAX_CANDIDATES);
}

export async function imageCandidates(rawUrl) {
  const start = parseHttpsUrl(rawUrl);
  let page;
  try {
    page = await fetchAllowed(start.href, { timeout: PAGE_TIMEOUT_MS, maxBytes: MAX_HTML, accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8" });
  } catch (e) {
    if (e && e.status) throw e;
    throw err(502, "lecture Amazon impossible. Envoie une image à la place.");
  }
  const body = page.buf.toString("utf8");
  const blocked = looksBlocked(page.status, body, page.type);
  if (blocked === "unavailable") throw err(503, "Amazon est temporairement indisponible (HTTP " + page.status + "). Envoie une image à la place.");
  if (blocked === "captcha" || page.status === 401 || page.status === 403) throw err(502, "Amazon a bloqué la lecture de la page (captcha ou anti-robot). Envoie une image à la place.");
  if (page.status < 200 || page.status >= 300) throw err(502, "page Amazon inaccessible (HTTP " + page.status + "). Envoie une image à la place.");
  const candidates = extractCandidates(body, page.url);
  if (!candidates.length) throw err(502, "aucune image produit trouvée. Envoie une image à la place.");
  const asin = parseAsin(page.url) || parseAsin(start.href);
  return { ok: true, finalUrl: page.url, ...(asin ? { asin } : {}), candidates };
}

export async function downloadAllowedImage(rawUrl) {
  const start = parseHttpsUrl(rawUrl);
  const page = await fetchAllowed(start.href, {
    timeout: IMAGE_TIMEOUT_MS,
    maxBytes: MAX_IMAGE,
    accept: "image/webp,image/jpeg,image/png,image/*;q=0.8",
  });
  if (page.status < 200 || page.status >= 300) throw err(502, "téléchargement de l'image impossible (HTTP " + page.status + ")");
  const type = String(page.type || "").toLowerCase();
  if (type && !type.startsWith("image/") && !type.includes("octet-stream")) {
    // certaines CDN Amazon renvoient sans type précis ; Sharp décidera
    if (type.includes("html") || type.includes("json") || type.includes("text/")) throw err(400, "l'URL distante n'est pas une image");
  }
  if (!page.buf.length) throw err(400, "image vide");
  return { buf: page.buf, type };
}
