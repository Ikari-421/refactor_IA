// Recettes — validateur unique du schéma `recette-web-jigme/v2` (règles bloquantes).
// Partagé par build.mjs (chaque fiche de data/ avant génération) et l'API admin (avant toute écriture).
// Aucune dépendance ni I/O : l'appelant lit le YAML et passe l'objet. Erreur = Error avec status 400.
export const SCHEMA_V2 = "recette-web-jigme/v2";
export const CATEGORIES = ["sucré", "salé", "boissons"];
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const DESCRIPTION_LENGTH = [120, 155];

// opts.prevCategory : catégorie avant modification (admin : Sucré/Salé non modifiable)
// opts.checkDescriptionLength : vérifier 120–155 caractères (admin, quand la description est modifiée)
// opts.fileSlug : nom du fichier sans .md (build) → le slug doit être identique
export function recipeV2Errors(data, { prevCategory, checkDescriptionLength = false, fileSlug } = {}) {
  const errs = [];
  if (!data || typeof data !== "object") return ["fiche invalide"];
  if (data.schema !== SCHEMA_V2) errs.push("schema doit rester " + SCHEMA_V2);
  if (!data.slug || !SLUG_RE.test(String(data.slug))) errs.push("slug invalide");
  else if (fileSlug != null && String(data.slug) !== fileSlug) errs.push("slug ≠ nom de fichier (" + fileSlug + ")");
  if (!data.title || String(data.title).length < 2) errs.push("titre trop court");
  const cat = data.category != null ? String(data.category) : "";
  if (prevCategory != null && cat !== String(prevCategory)) errs.push("catégorie Sucré/Salé non modifiable ici");
  if (cat && !CATEGORIES.includes(cat)) errs.push("category hors schéma");
  if (checkDescriptionLength) {
    const dl = String(data.description || "").length;
    if (dl < DESCRIPTION_LENGTH[0] || dl > DESCRIPTION_LENGTH[1]) errs.push("description longueur " + dl + " (attendu " + DESCRIPTION_LENGTH.join("–") + ")");
  }
  if (!data.variants || typeof data.variants !== "object") errs.push("variants manquants");
  return errs;
}
export function validateRecipeV2(data, opts) {
  const errs = recipeV2Errors(data, opts);
  if (errs.length) throw Object.assign(new Error("schéma v2 : " + errs.join(" ; ")), { status: 400 });
}
