// Restaurants — rendu HTML (pages /restaurant/ et /restaurant/<slug>/, JSON-LD, patch du HTML servi).
// Même rendu pour build.mjs (statique) et l'API admin (patch immédiat). Les règles métier sont dans restaurants-domain.mjs.
import { CATEGORIES, CAT_KEYS, catLabel, PHOTO_PLACEHOLDER, sortRecent, miseEnAvant } from "./restaurants-domain.mjs";
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// ---------- Rendu HTML (identique build / admin) ----------
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
export const dateFr = (s) => { const [y, m, d] = String(s).split("-").map(Number); return `${d === 1 ? "1er" : d} ${MOIS[m - 1]} ${y}`; };
export const noteFr = (n) => String(n).replace(".", ",") + "/5";
const paras = (t) => String(t).split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");
// opts.url(u) : URL publique (ex. ajout ?v=hash) ; opts.thumb(u) : vignette 720 si elle existe
const defaults = (opts = {}) => ({ url: (u) => u, thumb: (u) => u, ...opts });
// Vignette 720 candidate : photos recettes /img/p/x.webp → /img/t/p/x.webp ; uploads admin /img/resto/<slug>/<h>.webp → <h>-720.webp
export const thumbCandidates = (u) => { const out = []; if (u === PHOTO_PLACEHOLDER) out.push("/img/banniere-hero-800.webp"); let m = u.match(/^\/img\/p\/([a-z0-9-]+)\.webp$/); if (m) out.push(`/img/t/p/${m[1]}.webp`); m = u.match(/^(\/img\/resto\/[a-z0-9-]+\/[a-z0-9-]+)\.webp$/); if (m && !/-720$/.test(m[1])) out.push(m[1] + "-720.webp"); return out; };
function dataAttrs(r) { return `data-slug="${esc(r.slug)}" data-cat="${esc(r.categorie)}" data-lat="${r.lat}" data-lng="${r.lng}" data-date="${esc(r.date_review)}" data-nom="${esc(r.nom)}" data-ville="${esc(r.ville)}"`; }
export function renderCard(r, i, opts) {
  const o = defaults(opts);
  return `<a class="rs-card" role="listitem" href="/restaurant/${esc(r.slug)}/" ${dataAttrs(r)}><span class="rs-card-media"><img src="${esc(o.url(o.thumb(r.photo)))}" alt="${esc(r.photo_alt || r.nom)}" width="720" height="720"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></span><span class="rs-card-veil" aria-hidden="true"></span><span class="rs-card-body"><span class="rs-kicker">${esc(catLabel(r.categorie))} · ${esc(r.ville)}</span><span class="rs-card-name">${esc(r.nom)}</span><span class="rs-card-ex">${esc(r.extrait)}</span></span>${r.test ? '<span class="rs-badge">Test</span>' : ""}</a>`;
}
export function renderRow(r, opts) {
  const o = defaults(opts);
  return `<li class="rs-row" ${dataAttrs(r)}><a class="rs-row-a" href="/restaurant/${esc(r.slug)}/"><img src="${esc(o.url(o.thumb(r.photo)))}" alt="" width="720" height="720" loading="lazy" decoding="async"><span class="rs-row-t"><span class="rs-kicker">${esc(catLabel(r.categorie))} · ${esc(r.ville)}</span><span class="rs-row-name">${esc(r.nom)}</span><span class="rs-row-ex">${esc(r.extrait)}</span></span><span class="rs-dist" hidden></span></a></li>`;
}
// Contenu de la section /restaurant/ (entre les marqueurs <!--rj-resto-list--> … <!--/rj-resto-list-->)
// opts.cat (page /restaurant/c/<cat>/) : filtre présélectionné, lignes des autres catégories masquées, sans les encarts « à la une ».
export function renderListing(all, opts) {
  const cat = opts && CAT_KEYS.includes(opts.cat) ? opts.cat : "";
  const list = sortRecent(all.filter((r) => !r.hidden && r.statut !== "brouillon")), recent = miseEnAvant(list, opts && opts.miseEnAvant), n = Object.fromEntries(CAT_KEYS.map((k) => [k, list.filter((r) => r.categorie === k).length]));
  const anyTest = list.some((r) => r.test);
  return `<!--rj-resto-list-->${anyTest ? '<p class="rs-test-note">Aperçu de test : restaurants et textes provisoires (lorem ipsum).</p>' : ""}${cat ? "" : `<section class="rs-sec" aria-labelledby="rs-recent-h"><h2 class="rs-h display" id="rs-recent-h">Reviews récentes</h2><div class="tiles rs-recent" role="list">${recent.map((r, i) => renderCard(r, i, opts)).join("")}</div></section>`}`
    + `<section class="rs-sec rs-browse"${cat ? ` data-cat="${cat}"` : ""} aria-labelledby="rs-all-h"><h2 class="rs-h display" id="rs-all-h">Par catégorie</h2><div class="rs-cats" role="group" aria-label="Catégories de restaurants"><button type="button" class="rs-cat" data-cat="" aria-pressed="${!cat}">Tous <small>${list.length}</small></button>${CATEGORIES.map(([k, lab]) => `<button type="button" class="rs-cat" data-cat="${k}" aria-pressed="${k === cat}">${lab} <small>${n[k]}</small></button>`).join("")}</div>`
    + `<form class="rs-geo" role="search" action="/restaurant/" method="get" novalidate><label class="sr-only" for="rs-addr">Adresse, ville ou code postal</label><span class="rs-geo-field"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><input id="rs-addr" name="adresse" type="search" enterkeyhint="search" autocomplete="street-address" placeholder="Une adresse, une ville…" maxlength="200"></span><button type="submit" class="rs-go">Chercher</button><button type="button" class="rs-near" hidden>Autour de moi</button></form><p class="rs-geo-status" role="status" aria-live="polite"></p>`
    + `<div class="rs-map" aria-label="Carte des restaurants reviewés" role="region"><p class="rs-map-ph">La carte s’affiche ici.</p></div><p class="rs-map-credit">Carte : © contributeurs <a href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a></p>`
    + `<ul class="rs-list" role="list">${list.map((r) => { const h = renderRow(r, opts); return cat && r.categorie !== cat ? h.replace('<li class="rs-row" ', '<li class="rs-row" hidden ') : h; }).join("")}</ul><p class="rs-empty" role="status"${cat && !n[cat] ? "" : " hidden"}>Aucun restaurant reviewé dans cette catégorie pour l’instant.</p></section><!--/rj-resto-list-->`;
}
function renderBlock(b, r, opts) {
  const o = defaults(opts);
  const fig = (x, cls) => `<figure class="${cls}"><img src="${esc(o.url(x.src))}" alt="${esc(x.alt || "")}" loading="lazy" decoding="async">${x.legende ? `<figcaption>${esc(x.legende)}</figcaption>` : ""}</figure>`;
  if (b.type === "titre") return `<h2 class="rv-b rv-titre display" data-b="${esc(b.id)}">${esc(b.texte)}</h2>`;
  if (b.type === "paragraphe") return `<div class="rv-b rv-para" data-b="${esc(b.id)}">${paras(b.texte)}</div>`;
  if (b.type === "image") return `<div class="rv-b rv-image" data-b="${esc(b.id)}">${fig(b, "rv-fig")}</div>`;
  if (b.type === "galerie") return `<div class="rv-b rv-galerie rv-n${Math.min(b.images.length, 4)}" data-b="${esc(b.id)}">${b.images.map((x) => fig(x, "rv-fig")).join("")}</div>`;
  if (b.type === "citation") return `<blockquote class="rv-b rv-citation" data-b="${esc(b.id)}"><p>${esc(b.texte)}</p>${b.auteur ? `<footer>${esc(b.auteur)}</footer>` : ""}</blockquote>`;
  if (b.type === "infos") {
    const note = b.note ?? r.note;
    const rows = [["Adresse", b.adresse || [r.adresse, r.code_postal && !r.adresse.includes(r.code_postal) ? r.code_postal + " " + r.ville : ""].filter(Boolean).join(", ")], ["Prix", b.prix || r.prix], ["Note", note != null ? noteFr(note) : ""], ["Horaires", b.horaires], ["Téléphone", b.telephone]].filter(([, v]) => v);
    return `<aside class="rv-b rv-infos" data-b="${esc(b.id)}" aria-label="Infos pratiques"><h2 class="rv-infos-h">Infos pratiques</h2><dl>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}${b.site ? `<div><dt>Site</dt><dd><a href="${esc(b.site)}" rel="noopener nofollow" target="_blank">${esc(b.site.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a></dd></div>` : ""}</dl></aside>`;
  }
  return "";
}
// Corps de la page review (entre <!--rj-resto-body--> … <!--/rj-resto-body-->)
// Signet restaurant (15/11) : même principe que les signets des recettes (stockage local, ajout et retrait immédiats, features.js),
// rangé à part dans « Mes signets » (catégorie Restaurants). Nom, ville et vignette voyagent avec le bouton pour la page des signets.
const BOOKMARK = '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h11a1 1 0 0 1 1 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 0 1 1-1z"/></svg>';
function favButton(r, o) {
  return `<button type="button" class="rs-fav" data-slug="${esc(r.slug)}" data-nom="${esc(r.nom)}" data-ville="${esc(r.ville)}" data-img="${esc(o.url(o.thumb(r.photo)))}" aria-pressed="false">${BOOKMARK}<span class="rs-fav-t">Ajouter aux signets</span></button>`;
}
export function renderReview(r, opts) {
  const o = defaults(opts);
  return `<!--rj-resto-body--><article class="rv"><header class="rv-hero"><img class="rv-hero-img" src="${esc(o.url(r.photo))}" alt="${esc(r.photo_alt || r.nom)}" fetchpriority="high" decoding="async"><span class="rv-shade" aria-hidden="true"></span><a class="rv-back" href="/restaurant/"><span aria-hidden="true">←</span> Restaurants</a><div class="rv-head"><p class="rs-kicker">${esc(catLabel(r.categorie))} · ${esc(r.ville)}</p><h1 class="display rv-title">${esc(r.nom)}</h1><p class="rv-meta">Review du ${dateFr(r.date_review)}${r.note != null ? ` · <span class="rv-note">${noteFr(r.note)}</span>` : ""}</p>${favButton(r, o)}</div></header>`
    + `${r.test ? `<p class="rv-test">${esc(r.test_note || "Page de test : texte provisoire (lorem ipsum), à remplacer par la vraie review.")}</p>` : ""}<p class="rv-lead">${esc(r.extrait)}</p><div class="rv-blocks">${r.blocs.map((b) => renderBlock(b, r, opts)).join("")}</div></article><!--/rj-resto-body-->`;
}
export function reviewDescription(r) {
  let d = r.extrait.replace(/\s+/g, " ").trim();
  const add = [`Review de ${r.nom} (${catLabel(r.categorie).toLowerCase()}, ${r.ville}) par Jigmé.`, "Photos, adresse, prix et infos pratiques.", "Photos et infos pratiques.", "Review de Jigmé.", `${r.ville}.`];
  for (const a of add) if (d.length < 120 && d.length + 1 + a.length <= 155) d += " " + a;
  if (d.length > 155) d = d.slice(0, d.lastIndexOf(" ", 153)).replace(/[\s,;:.]+$/, "") + "…";
  return d;
}
// JSON-LD Restaurant + Review (+ fil d'Ariane) ; base = URL de prod (canonique)
export function reviewLd(r, base, opts) {
  const o = defaults(opts), url = `${base}/restaurant/${r.slug}/`;
  const ld = { "@context": "https://schema.org", "@type": "Restaurant", name: r.nom, url, image: [base + o.url(r.photo)],
    address: { "@type": "PostalAddress", streetAddress: r.adresse.split(",")[0].trim(), addressLocality: r.ville, ...(r.code_postal ? { postalCode: r.code_postal } : {}), addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", latitude: r.lat, longitude: r.lng }, ...(r.prix ? { priceRange: r.prix } : {}),
    review: { "@type": "Review", name: `Avis de Jigmé sur ${r.nom}`, author: { "@type": "Person", name: "Jigmé" }, datePublished: r.date_review, reviewBody: r.extrait, inLanguage: "fr",
      ...(r.note != null ? { reviewRating: { "@type": "Rating", ratingValue: r.note, bestRating: 5, worstRating: 0 } } : {}) } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [["Jigmé", "https://jigme.fr/"], ["Restaurants", base + "/restaurant/"], [r.nom, url]].map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })) };
  const tag = (j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`;
  return `<!--rj-resto-ld-->${r.test ? '<meta name="robots" content="noindex, nofollow" data-rs-test>' : ""}${tag(ld)}${tag(crumb)}<!--/rj-resto-ld-->`;
}
export const titleOf = (r) => `${r.nom} — Restaurants de Jigmé`;
// Patch d'une page review existante (ou d'un gabarit copié d'une autre review)
export function patchReviewPage(html, r, base, opts) {
  const desc = esc(reviewDescription(r)), t = esc(titleOf(r)), url = `${base}/restaurant/${r.slug}/`;
  const rep = (h, re, s) => { if (!re.test(h)) throw Object.assign(new Error("gabarit review : motif absent " + re), { status: 500 }); return h.replace(re, () => s); };
  let h = html;
  h = rep(h, /<!--rj-resto-body-->[\s\S]*?<!--\/rj-resto-body-->/, renderReview(r, opts));
  h = rep(h, /<!--rj-resto-ld-->[\s\S]*?<!--\/rj-resto-ld-->/, reviewLd(r, base, opts));
  h = rep(h, /<title>[^<]*<\/title>/, `<title>${t}</title>`);
  h = h.replace(/(<meta name="description" content=")[^"]*/, `$1${desc}`).replace(/(<meta property="og:description" content=")[^"]*/, `$1${desc}`).replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${desc}`);
  h = h.replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`).replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`);
  h = h.replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`).replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
  if (opts && opts.og) { const o = defaults(opts), img = esc(base + o.url(r.photo)), alt = esc(r.photo_alt || r.nom);
    h = h.replace(/(<meta property="og:image" content=")[^"]*/, `$1${img}`).replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${img}`)
      .replace(/(<meta property="og:image:width" content=")\d+/, `$1${opts.og.w}`).replace(/(<meta property="og:image:height" content=")\d+/, `$1${opts.og.h}`)
      .replace(/(<meta property="og:image:alt" content=")[^"]*/, `$1${alt}`).replace(/(<meta name="twitter:image:alt" content=")[^"]*/, `$1${alt}`); }
  return h;
}
export function patchListingPage(html, all, opts) {
  if (!/<!--rj-resto-list-->[\s\S]*?<!--\/rj-resto-list-->/.test(html)) throw Object.assign(new Error("page /restaurant/ : marqueurs absents"), { status: 500 });
  return html.replace(/<!--rj-resto-list-->[\s\S]*?<!--\/rj-resto-list-->/, () => renderListing(all, opts));
}
export { CATEGORIES };
