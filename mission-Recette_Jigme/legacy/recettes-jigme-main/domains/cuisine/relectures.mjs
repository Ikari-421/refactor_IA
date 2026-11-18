// Relecture guidée et couverture (v247, préprod) : relais des relectures du back commun (Lien en bio, back v44) et liste des
// recettes sans matériel ou sans lexique lié. Contrat Recettes : docs/relectures-recettes.md ; contrat du back : docs/recettes-brouillon-contrat.md §6.

/** Les 9 cases de relecture d'une recette, validées par Jigmé le 16/11 (ordre d'affichage). */
export const CASES_RECETTE = [
  { id: "etapes_a_reecrire", libelle: "Étapes à réécrire" },
  { id: "manque_materiel", libelle: "Manque matériel" },
  { id: "manque_lexique", libelle: "Manque lexique" },
  { id: "ingredients_a_revoir", libelle: "Ingrédients ou quantités à revoir" },
  { id: "photo_a_refaire", libelle: "Photo manquante ou à refaire" },
  { id: "temps_portions", libelle: "Temps ou portions à vérifier" },
  { id: "intro_a_reecrire", libelle: "Introduction ou texte à reprendre" },
  { id: "seo_a_revoir", libelle: "Titre ou description à revoir" },
  { id: "fautes", libelle: "Fautes d'orthographe" },
];
/** Cases proposées pour le matériel (affichage ; le PUT reste libre comme le back). */
export const CASES_MATERIEL = [
  { id: "lien_casse", libelle: "Lien cassé" },
  { id: "photo_a_refaire", libelle: "Photo manquante ou à refaire" },
  { id: "description_a_reecrire", libelle: "Description à réécrire" },
];
export const TYPES_RELECTURE = ["recette", "materiel", "lexique", "restaurant"];
export const ETATS_RELECTURE = ["a_relire", "verifiee"];
const IDS_RECETTE = new Set(CASES_RECETTE.map((c) => c.id));
const fail = (m) => { throw Object.assign(new Error(m), { status: 400 }); };

/**
 * Contrôle d'un PUT de relecture avant relais (le back refait ses propres contrôles).
 * version entière obligatoire ; etat a_relire|verifiee ; cases {nom: booléen} (recette : les 9 cases seulement) ; note ≤ 2000 car.
 * Retourne le corps à relayer (seulement les champs connus).
 */
export function verifierPutRelecture(type, body) {
  if (!TYPES_RELECTURE.includes(type)) fail(`type invalide (${TYPES_RELECTURE.join(", ")})`);
  if (!body || typeof body !== "object" || Array.isArray(body)) fail("corps JSON objet attendu");
  for (const k of Object.keys(body)) if (!["version", "etat", "cases", "note"].includes(k)) fail("champ inconnu : " + String(k).slice(0, 40));
  const v = body.version;
  if (!(Number.isInteger(v) && v >= 0) && !(typeof v === "string" && /^\d{1,9}$/.test(v))) fail("version : entier lu dans le GET attendu");
  const out = { version: Number(v) };
  if (body.etat !== undefined) {
    if (!ETATS_RELECTURE.includes(body.etat)) fail(`etat invalide (${ETATS_RELECTURE.join(", ")})`);
    out.etat = body.etat;
  }
  if (body.cases !== undefined) {
    const c = body.cases;
    if (!c || typeof c !== "object" || Array.isArray(c)) fail("cases : objet {nom: booléen} attendu");
    const e = Object.entries(c);
    if (e.length > 60) fail("cases : 60 au plus");
    for (const [k, b] of e) {
      if (!/^[a-z0-9_-]{1,60}$/.test(k)) fail("case invalide : " + k.slice(0, 60));
      if (type === "recette" && !IDS_RECETTE.has(k)) fail(`case inconnue pour une recette : ${k} (voir /api/v1/admin/relectures/cases)`);
      if (typeof b !== "boolean") fail(`case ${k} : booléen attendu`);
    }
    out.cases = Object.fromEntries(e);
  }
  if (body.note !== undefined) {
    if (typeof body.note !== "string" || body.note.length > 2000) fail("note : texte de 2000 caractères au plus");
    out.note = body.note;
  }
  return out;
}

export const MANQUES = ["materiel", "lexique", "tous"];

/**
 * Couverture : recettes (brouillons compris, corbeille exclue) sans matériel lié et/ou sans lexique lié.
 * manque = materiel | lexique | tous (= au moins l'un des deux). fiches : [{ slug, title, category, statut, hidden, materiel:[ids], lexique:[ids] }].
 */
export function couverture(fiches, manque = "tous") {
  if (!MANQUES.includes(manque)) fail(`manque invalide (${MANQUES.join(", ")})`);
  const lignes = (fiches || []).filter((f) => f && f.slug && !f.deleted).map((f) => {
    const materiel = [...new Set(f.materiel || [])].sort(), lexique = [...new Set(f.lexique || [])].sort();
    const m = [];
    if (!materiel.length) m.push("materiel");
    if (!lexique.length) m.push("lexique");
    return {
      slug: f.slug, titre: String(f.title || f.slug), category: f.category || null, statut: f.statut || null,
      publiee: f.statut === "publiee" && f.hidden !== true, hidden: f.hidden === true, materiel, lexique, manque: m,
    };
  });
  const compte = {
    fiches: lignes.length,
    sansMateriel: lignes.filter((l) => l.manque.includes("materiel")).length,
    sansLexique: lignes.filter((l) => l.manque.includes("lexique")).length,
    sansLesDeux: lignes.filter((l) => l.manque.length === 2).length,
  };
  const garde = lignes.filter((l) => (manque === "tous" ? l.manque.length > 0 : l.manque.includes(manque)));
  garde.sort((a, b) => a.titre.localeCompare(b.titre, "fr", { sensitivity: "base" }));
  return { recettes: garde, total: garde.length, compte };
}
