// Restaurants — règles du domaine (schéma restaurant-jigme/v1) : validation, normalisation, tri. Aucune I/O, aucun HTML.
// Utilisé par build.mjs, l'API admin (restaurants-admin.mjs) et le rendu (restaurants-render.mjs). Contrat : docs/admin-restaurants.md
export const SCHEMA = "restaurant-jigme/v1";
export const CATEGORIES = [["etoile", "Restaurants étoilés", "Étoilé"], ["gastronomique", "Gastronomiques", "Gastronomique"], ["bistronomique", "Bistronomiques", "Bistronomique"], ["brasserie", "Brasseries", "Brasserie"], ["fastfood", "Fast food", "Fast food"]];
export const CAT_KEYS = CATEGORIES.map((c) => c[0]);
export const catLabel = (k) => (CATEGORIES.find((c) => c[0] === k) || [])[2] || "";
export const BLOCK_TYPES = ["titre", "paragraphe", "image", "galerie", "citation", "infos"];
export const LIMITS = { blocs: 60, titre: 160, paragraphe: 4000, legende: 300, alt: 200, citation: 600, auteur: 120, galerie: 12, nom: 80, extrait: [20, 220], adresse: 200, ville: 80, prix: 80, horaires: 300, telephone: 40, site: 300 };
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const BLOCK_ID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
// Images : chemins locaux du site uniquement (aucun hotlink externe)
export const IMG_RE = /^\/img\/[A-Za-z0-9_\/.-]+\.(?:webp|jpg|jpeg|png|avif)$/;
const bad = (msg) => Object.assign(new Error(msg), { status: 400 });
const str = (v, n, label, { required = false, min = 0 } = {}) => {
  if (v == null || v === "") { if (required) throw bad(label + " manquant"); return ""; }
  if (typeof v !== "string" && typeof v !== "number") throw bad(label + " : texte attendu");
  const s = String(v).normalize("NFC").replace(/\r\n?/g, "\n").trim();
  if (s.length > n) throw bad(`${label} : ${n} caractères max (reçu ${s.length})`);
  if (s.length < min) throw bad(`${label} : ${min} caractères min (reçu ${s.length})`);
  if (required && !s) throw bad(label + " manquant");
  return s;
};
const img = (v, label) => { const s = str(v, 300, label, { required: true }); if (!IMG_RE.test(s) || s.includes("..")) throw bad(label + " : chemin local /img/… attendu (pas d'URL externe)"); return s; };
const num = (v, label, lo, hi) => { const n = typeof v === "string" ? Number(v.replace(",", ".")) : v; if (typeof n !== "number" || !Number.isFinite(n) || n < lo || n > hi) throw bad(`${label} : nombre entre ${lo} et ${hi} attendu`); return n; };
const noteOf = (v, label = "note") => { if (v == null || v === "") return null; const n = num(v, label, 0, 5); if (Math.round(n * 2) !== n * 2) throw bad(label + " : pas de 0,5"); return n; };
const dateOf = (v) => { const s = v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ""); if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || Number.isNaN(Date.parse(s))) throw bad("date_review : AAAA-MM-JJ attendu"); return s; };
const siteOf = (v) => { const s = str(v, LIMITS.site, "site"); if (s && (!/^https:\/\/[^\s<>"']+$/i.test(s))) throw bad("site : URL https attendue"); return s; };

export function newBlockId(taken = new Set()) {
  for (;;) { const id = "b" + Math.random().toString(36).slice(2, 8); if (!taken.has(id)) return id; }
}
// Valide et normalise un bloc ; ne garde que les champs connus du type.
export function cleanBlock(b, i = 0) {
  const at = `bloc ${i + 1}`;
  if (!b || typeof b !== "object" || Array.isArray(b)) throw bad(at + " : objet attendu");
  if (!BLOCK_TYPES.includes(b.type)) throw bad(`${at} : type inconnu (${BLOCK_TYPES.join(", ")})`);
  const id = b.id == null || b.id === "" ? null : String(b.id);
  if (id != null && !BLOCK_ID_RE.test(id)) throw bad(at + " : id invalide [a-z0-9-], 40 car. max");
  const o = { id, type: b.type };
  if (b.type === "titre") o.texte = str(b.texte, LIMITS.titre, at + " titre", { required: true });
  if (b.type === "paragraphe") o.texte = str(b.texte, LIMITS.paragraphe, at + " paragraphe", { required: true });
  if (b.type === "image") { o.src = img(b.src, at + " src"); o.alt = str(b.alt, LIMITS.alt, at + " alt"); o.legende = str(b.legende, LIMITS.legende, at + " légende"); }
  if (b.type === "galerie") {
    if (!Array.isArray(b.images) || !b.images.length) throw bad(at + " : galerie vide");
    if (b.images.length > LIMITS.galerie) throw bad(`${at} : ${LIMITS.galerie} photos max`);
    o.images = b.images.map((x, k) => ({ src: img(x?.src, `${at} photo ${k + 1}`), alt: str(x?.alt, LIMITS.alt, `${at} photo ${k + 1} alt`), legende: str(x?.legende, LIMITS.legende, `${at} photo ${k + 1} légende`) }));
  }
  if (b.type === "citation") { o.texte = str(b.texte, LIMITS.citation, at + " citation", { required: true }); o.auteur = str(b.auteur, LIMITS.auteur, at + " auteur"); }
  if (b.type === "infos") { o.adresse = str(b.adresse, LIMITS.adresse, at + " adresse"); o.prix = str(b.prix, LIMITS.prix, at + " prix"); o.note = noteOf(b.note, at + " note"); o.horaires = str(b.horaires, LIMITS.horaires, at + " horaires"); o.telephone = str(b.telephone, LIMITS.telephone, at + " téléphone"); o.site = siteOf(b.site); }
  for (const k of Object.keys(o)) if (o[k] === "" || o[k] == null) { if (k !== "id") delete o[k]; }
  return o;
}
export function cleanBlocks(list, { assignIds = true } = {}) {
  if (!Array.isArray(list)) throw bad("blocs : liste attendue");
  if (list.length > LIMITS.blocs) throw bad(`blocs : ${LIMITS.blocs} max`);
  const out = list.map(cleanBlock), seen = new Set();
  for (const b of out) { if (b.id) { if (seen.has(b.id)) throw bad("blocs : id en double " + b.id); seen.add(b.id); } }
  out.forEach((b, i) => { if (b.id) return; if (!assignIds) throw bad("blocs : id manquant"); b.id = seen.has("b" + (i + 1)) ? newBlockId(seen) : "b" + (i + 1); seen.add(b.id); }); // id déterministe si absent (fiches écrites à la main)
  return out;
}
// Valide une fiche complète (frontmatter). Renvoie une copie normalisée, clés dans l'ordre du contrat.
export function cleanRestaurant(d) {
  if (!d || typeof d !== "object") throw bad("fiche invalide");
  if (d.schema != null && d.schema !== SCHEMA) throw bad("schema doit valoir " + SCHEMA);
  const slug = String(d.slug ?? ""); if (!SLUG_RE.test(slug) || slug.length > 80) throw bad("slug invalide [a-z0-9-]");
  const categorie = String(d.categorie ?? ""); if (!CAT_KEYS.includes(categorie)) throw bad("categorie : " + CAT_KEYS.join(" | "));
  const o = {
    schema: SCHEMA, slug,
    nom: str(d.nom, LIMITS.nom, "nom", { required: true, min: 2 }), categorie,
    adresse: str(d.adresse, LIMITS.adresse, "adresse", { required: true }),
    code_postal: str(d.code_postal, 10, "code_postal"),
    ville: str(d.ville, LIMITS.ville, "ville", { required: true }),
    lat: num(d.lat, "lat", -90, 90), lng: num(d.lng, "lng", -180, 180),
    date_review: dateOf(d.date_review),
    photo: img(d.photo, "photo"), photo_alt: str(d.photo_alt, LIMITS.alt, "photo_alt"),
    extrait: str(d.extrait, LIMITS.extrait[1], "extrait", { required: true, min: LIMITS.extrait[0] }),
    note: noteOf(d.note), prix: str(d.prix, LIMITS.prix, "prix"),
    test: d.test === true, hidden: d.hidden === true,
    test_note: str(d.test_note, 300, "test_note"),
    blocs: cleanBlocks(d.blocs || []),
  };
  if (d.statut === "brouillon" || d.statut === "publiee") o.statut = d.statut;
  if (o.code_postal && !/^\d{5}$/.test(o.code_postal)) throw bad("code_postal : 5 chiffres");
  for (const k of ["code_postal", "photo_alt", "prix", "test_note"]) if (!o[k]) delete o[k];
  if (o.note == null) delete o.note;
  if (!o.hidden) delete o.hidden;
  return o;
}
// Photo par défaut d'une fiche créée sans photo ni image : bannière du site (toujours présente dans src/img et dist/img).
export const PHOTO_PLACEHOLDER = "/img/banniere-hero.webp";
// Encarts mis en avant sur /restaurants/, choisis à la main par Jigmé (15/11), dans cet ordre (remplace le tri par date).
// Une fiche absente, masquée ou en brouillon est sautée ; si aucune n'est publiable, repli sur les 3 reviews les plus récentes.
export const MISE_EN_AVANT = ["le-petit-leon", "les-singuliers", "le-cilaos"];
export function miseEnAvant(list, slugs = MISE_EN_AVANT) {
  const out = slugs.map((s) => list.find((r) => r.slug === s)).filter(Boolean).slice(0, 3);
  return out.length ? out : sortRecent(list).slice(0, 3);
}
export function sortRecent(list) { return [...list].sort((a, b) => (a.date_review < b.date_review ? 1 : a.date_review > b.date_review ? -1 : a.nom.localeCompare(b.nom, "fr"))); }
