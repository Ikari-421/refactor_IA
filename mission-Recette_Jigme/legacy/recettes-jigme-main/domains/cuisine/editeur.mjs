// Éditeur dans la page (Admin · jigme.fr) : aperçu de la fiche, recherche de matériel, patch d'édition et « styles à aligner ».
// Préprod. L'aperçu réutilise le pipeline et le gabarit du build (recipes-pipeline.mjs → generate-pages.mjs recipeArticle) ;
// les attributs data-edit ne sont posés QUE dans ce fragment, jamais dans les pages publiques (le build n'importe pas ce module).
// Aucun HTML venant du corps : textes refusés s'ils contiennent du balisage (assertNoHtml), et tout texte est échappé au rendu.
import { materielApercu } from "./materiel-apercu.mjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { assertNoHtml } from "./brouillons.mjs";

export const STYLES_TROIS = ["amateur", "pro", "cavernes"];
export const UNITES = new Set(["g", "ml", "cl", "piece", "gousse", "cas", "cac", "pincee", "botte", "feuille", "poignée"]);
export const LIMITES = { titre: [2, 120], intro: [120, 155], histoire: [0, 2000], etape: [2, 2000], etapes: 40, ingredients: 60, item: 120, groupe: 60, materiel: 30,
  cv: [0, 300], cvListe: 20, vins: 10, vin: [0, 300], saviez: 10, fait: [2, 600], source: [0, 120] };
const LX_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const Q_RE = /\{\{q:(\d+)\}\}/g;

// logic.js du site (repo : src/logic.js ; image : /opt/src/logic.js) : mêmes règles de titre d'étape que la page publique
const L = createRequire(import.meta.url)("../../src/logic.js");

const fail = (m, status = 400) => { throw Object.assign(new Error(m), { status }); };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nfc = (s) => String(s ?? "").normalize("NFC");
/** Texte brut d'une zone contenteditable : sauts de ligne et espaces multiples → une espace. */
export const texteBrut = (s) => nfc(s).replace(/\s+/g, " ").trim();
export const sansAccents = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'").trim();

function texte(v, champ, [min, max]) {
  if (typeof v !== "string") fail(champ + " : texte attendu");
  assertNoHtml(v, champ);
  const t = texteBrut(v);
  if (t.length < min || t.length > max) fail(`${champ} : ${min}–${max} caractères attendus (reçu ${t.length})`);
  return t;
}

export function threeStyles(recipe) {
  for (const v of Object.values((recipe && recipe.variants) || {})) {
    const n = v && v.steps_niveaux;
    if (n && STYLES_TROIS.every((s) => Array.isArray(n[s]))) return true;
  }
  return false;
}

/** Variante éditée : celle demandée ou la variante par défaut ; jamais une variante qui hérite (ses listes sont vides). */
export function varianteEditee(recipe, demandee) {
  const variants = (recipe && recipe.variants) || {};
  const key = demandee || recipe.house_toggle || recipe.default_variant || Object.keys(variants)[0];
  const v = variants[key];
  if (!v) fail("variante inconnue : " + key);
  if (v.inherit) fail(`variante ${key} : hérite de ${v.inherit}, éditer ${v.inherit}`);
  return key;
}

export function styleEdite(recipe, demande) {
  if (!threeStyles(recipe)) {
    if (demande && demande !== "base") fail("cette fiche n'a qu'un style d'étapes (base)");
    return "base";
  }
  const s = demande || "amateur";
  if (!STYLES_TROIS.includes(s)) fail("style invalide (amateur, pro, cavernes)");
  return s;
}

// v252 : titres de phase des étapes. Lecture : { titre, brut } (brut = texte sans titre). Patch : un texte sans titre récupère le titre d'origine.
const normEtape = (t) => texteBrut(String(t ?? "").replace(LX_RE, (m, id, fo) => fo || id)).toLowerCase();

/** Titre de phase d'une étape (mêmes règles que la page publique : logic.js phaseTitle) ; titre = texte brut avant le premier point. */
export function titreEtape(raw, style, refs) {
  const t = String(raw ?? "").trim();
  const ph = L.phaseTitle(t, style === "base" ? "amateur" : style, refs);
  if (!ph) return { titre: "", brut: t };
  const k = t.indexOf(".");
  return { titre: t.slice(0, k).trim(), brut: L.stripPhaseTitle(t, ph) };
}

/** Étapes de chaque version et style, titre séparé : { [variante]: { base: [{titre, brut}], amateur?, pro?, cavernes? } }. */
export function etapesEdition(r) {
  const out = {};
  for (const [key, v] of Object.entries((r && r.variants) || {})) {
    if (!v || v.inherit) continue;
    const n = v.steps_niveaux || {};
    const o = { base: (v.steps || []).map((t) => titreEtape(t, "base")) };
    if (threeStyles(r)) for (const s of STYLES_TROIS) if (Array.isArray(n[s])) o[s] = n[s].map((t, i) => titreEtape(t, s, [(v.steps || [])[i], (n.amateur || [])[i]]));
    out[key] = o;
  }
  return out;
}

/**
 * Rang d'origine de chaque nouvelle étape (ou -1 si insérée) : plus longue sous-suite commune sur le texte sans titre,
 * puis, entre deux étapes appariées, appariement dans l'ordre (étape modifiée sur place) ; les nouvelles en surplus sont des insertions.
 */
export function originesEtapes(ancien, nouveau, nouveauSansTitre = null) {
  const a = ancien.map(normEtape), b = nouveau.map(normEtape), b2 = nouveauSansTitre ? nouveauSansTitre.map(normEtape) : b, n = a.length, m = b.length;
  // une nouvelle étape correspond à une ancienne par son texte, avec ou sans son propre titre en tête
  const eq = (i, j) => a[i] === b[j] || a[i] === b2[j];
  const T = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) T[i][j] = eq(i, j) ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);
  const paires = [];
  for (let i = 0, j = 0; i < n && j < m;) { if (eq(i, j)) { paires.push([i, j]); i++; j++; } else if (T[i + 1][j] >= T[i][j + 1]) i++; else j++; }
  const org = new Array(m).fill(-1);
  let pi = 0, pj = 0;
  for (const [i, j] of [...paires, [n, m]]) {
    for (let k = 0; k < Math.min(i - pi, j - pj); k++) org[pj + k] = pi + k;
    if (i < n) org[j] = i;
    pi = i + 1; pj = j + 1;
  }
  return org;
}

function etapesAvecTitres(list, { pre, ancien, style, refs = [] }) {
  const vieux = ancien.map((t, i) => titreEtape(t, style, refs[i]));
  const corps = list.map((x, i) => {
    if (typeof x === "string") return { texte: x };
    if (!x || typeof x !== "object" || Array.isArray(x)) fail(`${pre}étape ${i + 1} : texte ou { titre?, texte } attendu`);
    for (const k of Object.keys(x)) if (!["titre", "texte", "origine"].includes(k)) fail(`${pre}étape ${i + 1} : champ inconnu ${k}`);
    if (x.origine !== undefined && x.origine !== null && !(Number.isInteger(x.origine) && x.origine >= 0 && x.origine < ancien.length)) fail(`${pre}étape ${i + 1} : origine = rang (0…${ancien.length - 1}) de l'étape d'origine`);
    return x;
  });
  const envoyes = corps.map((x) => String(x.texte ?? "")), envoyesSansTitre = envoyes.map((t, i) => titreEtape(t, style, refs[i]).brut);
  const org = originesEtapes(vieux.map((e) => e.brut), envoyes, envoyesSansTitre);
  return corps.map((x, i) => {
    const t = texte(x.texte, `${pre}étape ${i + 1}`, LIMITES.etape);
    let titre;
    if (x.titre !== undefined) {
      if (x.titre === "" || x.titre === null) return t;
      titre = texte(x.titre, `${pre}étape ${i + 1} titre`, [1, 40]);
      if (/[.:;!?]/.test(titre)) fail(`${pre}étape ${i + 1} titre : sans ponctuation (. : ; ! ?)`);
    } else {
      const o = Number.isInteger(x.origine) ? x.origine : org[i];
      // texte envoyé avec son propre titre devant le texte d'origine (titre changé) : gardé tel quel
      if (o >= 0 && vieux[o] && normEtape(envoyes[i]) !== normEtape(vieux[o].brut) && normEtape(envoyesSansTitre[i]) === normEtape(vieux[o].brut)) return t;
      titre = o >= 0 && vieux[o] ? vieux[o].titre : "";
      if (!titre || t.toLowerCase().startsWith(titre.toLowerCase() + ".")) return t;
    }
    return texte(`${titre}. ${t}`, `${pre}étape ${i + 1}`, LIMITES.etape);
  });
}

const plainLx = (t, lex = {}) => String(t).replace(LX_RE, (m, id, fo) => fo || (lex[id] || {}).terme || id);

/**
 * Applique les champs d'édition (titre, intro, histoire, etapes, ingredients, materiel) à une COPIE de la fiche.
 * Une liste envoyée remplace la liste entière. Les doses restent dans le YAML (qty/unit), calculées par le code du site.
 * ctx.materiel : catalogue [{ id, label }] pour valider les ids. Retourne { recipe, variante, style }.
 */
export function applyEditorPatch(current, champs, { style, variante, materiel = [], lexique = null } = {}) {
  if (!current || typeof current !== "object") fail("fiche introuvable", 404);
  if (!champs || typeof champs !== "object" || Array.isArray(champs)) fail("champs invalides");
  const connus = new Set(["titre", "intro", "histoire", "etapes", "ingredients", "materiel", "conservation", "vins", "saviez"]);
  for (const k of Object.keys(champs)) if (!connus.has(k)) fail("champ inconnu : " + k);
  const r = structuredClone(current);
  const key = varianteEditee(r, variante);
  const st = styleEdite(r, style);
  const v = r.variants[key];
  if (champs.titre !== undefined) r.title = texte(champs.titre, "titre", LIMITES.titre);
  if (champs.intro !== undefined) r.description = texte(champs.intro, "intro", LIMITES.intro);
  if (champs.histoire !== undefined) r.histoire = texte(champs.histoire, "histoire", LIMITES.histoire);
  if (champs.ingredients !== undefined) {
    const list = champs.ingredients;
    if (!Array.isArray(list) || !list.length || list.length > LIMITES.ingredients) fail(`ingredients : liste de 1 à ${LIMITES.ingredients} éléments`);
    v.ingredients = list.map((x, i) => {
      if (!x || typeof x !== "object" || Array.isArray(x)) fail(`ingrédient ${i + 1} invalide`);
      for (const k of Object.keys(x)) if (!["item", "qty", "unit", "group", "optional", "to_taste", "scale"].includes(k)) fail(`ingrédient ${i + 1} : champ inconnu ${k}`);
      const item = texte(x.item, `ingrédient ${i + 1}`, [1, LIMITES.item]);
      let qty = null;
      if (x.qty !== undefined && x.qty !== null && x.qty !== "") { qty = Number(x.qty); if (!Number.isFinite(qty) || qty < 0 || qty > 100000) fail(`ingrédient ${i + 1} : qty invalide`); }
      const unit = x.unit == null || x.unit === "" ? null : String(x.unit);
      if (unit != null && !UNITES.has(unit)) fail(`ingrédient ${i + 1} : unité inconnue (${[...UNITES].join(", ")})`);
      const group = x.group == null || x.group === "" ? null : texte(x.group, `ingrédient ${i + 1} groupe`, [1, LIMITES.groupe]);
      for (const b of ["optional", "to_taste", "scale"]) if (x[b] !== undefined && typeof x[b] !== "boolean") fail(`ingrédient ${i + 1} : ${b} booléen`);
      return { qty, unit, item, group, scale: x.scale !== false, optional: x.optional === true, to_taste: x.to_taste === true };
    });
  }
  if (champs.etapes !== undefined) {
    // Une liste = le style choisi ; un objet { amateur?, pro?, cavernes? } = plusieurs styles d'un coup (alignement).
    const parStyle = champs.etapes && typeof champs.etapes === "object" && !Array.isArray(champs.etapes);
    if (parStyle && st === "base") fail("etapes par style : fiche à un seul style (envoyer une liste)");
    const lots = parStyle ? Object.entries(champs.etapes) : [[st, champs.etapes]];
    if (!lots.length) fail("etapes : au moins un style");
    const ancienBase = Array.isArray(v.steps) ? v.steps.slice() : [], ancienN = structuredClone(v.steps_niveaux || {});
    // repères du titre de phase en pro/cavernes : étape steps et amateur enregistrées au même rang
    const ancienRefs = Array.from({ length: Math.max(ancienBase.length, (ancienN.amateur || []).length) }, (_, i) => [ancienBase[i], (ancienN.amateur || [])[i]]);
    for (const [sty, list] of lots) {
      if (parStyle && !STYLES_TROIS.includes(sty)) fail("style invalide (amateur, pro, cavernes) : " + String(sty).slice(0, 20));
      const pre = parStyle ? sty + " " : "";
      if (!Array.isArray(list) || !list.length || list.length > LIMITES.etapes) fail(`etapes ${pre}: liste de 1 à ${LIMITES.etapes} éléments`);
      const textes = etapesAvecTitres(list, { pre, ancien: sty === "base" ? ancienBase : ancienN[sty] || [], style: sty, refs: ancienRefs });
      if (sty === "base") v.steps = textes;
      else {
        v.steps_niveaux = { ...(v.steps_niveaux || {}) };
        v.steps_niveaux[sty] = textes;
        // `steps` (JSON-LD, repli) suit le style amateur, sans balisage lexique
        if (sty === "amateur") v.steps = textes.map((t) => plainLx(t));
      }
    }
  }
  if (champs.materiel !== undefined) {
    const ids = champs.materiel;
    if (!Array.isArray(ids) || ids.length > LIMITES.materiel) fail(`materiel : liste de 0 à ${LIMITES.materiel} identifiants`);
    const cat = new Map(materiel.map((m) => [m.id, m]));
    const seen = new Set();
    for (const id of ids) {
      if (typeof id !== "string" || !cat.has(id)) fail("matériel inconnu : " + String(id).slice(0, 60));
      if (seen.has(id)) fail("matériel en double : " + id);
      seen.add(id);
    }
    const avant = (Array.isArray(r.equipment) ? r.equipment : []).map((e) => e && e.ref).filter(Boolean);
    r.equipment = ids.map((ref) => ({ ref }));
    // Le pipeline n'affiche un matériel lié que s'il figure (par son libellé) dans la liste equipment des versions :
    // on y ajoute les libellés des nouveaux et on retire ceux des matériels retirés (les autres noms restent).
    const labelOf = (id) => (cat.get(id) || {}).label || id;
    const retires = new Set(avant.filter((id) => !seen.has(id)).map((id) => sansAccents(labelOf(id))));
    for (const vv of Object.values(r.variants)) {
      if (!vv || vv.inherit) continue;
      const cur = (Array.isArray(vv.equipment) ? vv.equipment : []).filter((n) => !retires.has(sansAccents(typeof n === "string" ? n : n && n.name)));
      for (const id of ids) { const lab = labelOf(id); if (!cur.some((n) => sansAccents(typeof n === "string" ? n : n && n.name) === sansAccents(lab))) cur.push(lab); }
      vv.equipment = cur;
    }
  }
  // v251 : sections Extra (jamais de dose touchée : ni ingredients ni variants)
  if (champs.conservation !== undefined) r.conservation = conservationPatch(r.conservation, champs.conservation);
  if (champs.vins !== undefined) r.wines = vinsPatch(champs.vins);
  if (champs.saviez !== undefined) r.fun_facts = saviezPatch(champs.saviez);
  // v251 : un terme [[id]] ajouté dans une étape reçoit son entrée lexique_local depuis la notice publiée
  if (champs.etapes !== undefined && lexique) completerLexiqueLocal(r, key, lexique);
  verifierEtapes(r);
  return { recipe: r, variante: key, style: st };
}

// ---- v251 : sections Extra éditables (Conservation, Accords vins, Le saviez-vous) ----
const objet = (x, champ) => { if (x === undefined) return undefined; if (!x || typeof x !== "object" || Array.isArray(x)) fail(champ + " : objet attendu"); return x; };
const seulement = (x, cles, champ) => { for (const k of Object.keys(x)) if (!cles.includes(k)) fail(`${champ} : champ inconnu ${k}`); };
const opt = (v, champ, lim) => v == null ? "" : texte(v, champ, lim);
const liste = (v, champ, max, lim) => {
  if (!Array.isArray(v) || v.length > max) fail(`${champ} : liste de 0 à ${max} éléments`);
  return v.map((x, i) => texte(x, `${champ} ${i + 1}`, [1, lim[1]]));
};
const CV_SOUS = { frigo: ["duree", "contenant", "note"], congelation: ["possible", "duree", "decongelation", "note"], temperature_ambiante: ["duree", "note"] };
export function conservationPatch(avant, c) {
  objet(c, "conservation");
  seulement(c, [...Object.keys(CV_SOUS), "rechauffage", "restes", "anti_gaspi"], "conservation");
  const base = avant && typeof avant === "object" && !Array.isArray(avant) ? structuredClone(avant) : {};
  const out = {
    frigo: { duree: "", contenant: "", note: "", ...(base.frigo || {}) },
    congelation: { possible: true, duree: "", decongelation: "", note: "", ...(base.congelation || {}) },
    temperature_ambiante: { duree: "", note: "", ...(base.temperature_ambiante || {}) },
    rechauffage: base.rechauffage ?? "", restes: base.restes || [], anti_gaspi: base.anti_gaspi || [],
    a_verifier: base.a_verifier ?? false, note_verif: base.note_verif ?? "",
  };
  for (const [sec, cles] of Object.entries(CV_SOUS)) {
    const x = objet(c[sec], "conservation." + sec);
    if (!x) continue;
    seulement(x, cles, "conservation." + sec);
    for (const k of cles) {
      if (x[k] === undefined) continue;
      if (k === "possible") { if (typeof x[k] !== "boolean") fail("conservation.congelation.possible : booléen"); out[sec][k] = x[k]; }
      else out[sec][k] = opt(x[k], `conservation.${sec}.${k}`, LIMITES.cv);
    }
  }
  if (c.rechauffage !== undefined) out.rechauffage = opt(c.rechauffage, "conservation.rechauffage", LIMITES.cv);
  for (const k of ["restes", "anti_gaspi"]) if (c[k] !== undefined) out[k] = liste(c[k], "conservation." + k, LIMITES.cvListe, LIMITES.cv);
  return out;
}
const VIN = ["name", "producer", "origin", "grapes", "award", "why"];
export function vinsPatch(v) {
  if (!Array.isArray(v) || v.length > LIMITES.vins) fail(`vins : liste de 0 à ${LIMITES.vins} éléments`);
  return v.map((w, i) => {
    objet(w, `vin ${i + 1}`); seulement(w, VIN, `vin ${i + 1}`);
    const o = {};
    for (const k of VIN) { const t = k === "name" ? texte(w[k], `vin ${i + 1} name`, [1, 120]) : opt(w[k], `vin ${i + 1} ${k}`, LIMITES.vin); o[k] = t === "" && k !== "why" ? null : t; }
    return o;
  });
}
export function saviezPatch(v) {
  if (!Array.isArray(v) || v.length > LIMITES.saviez) fail(`saviez : liste de 0 à ${LIMITES.saviez} éléments`);
  return v.map((f, i) => {
    objet(f, `saviez ${i + 1}`); seulement(f, ["text", "source_name", "source_url"], `saviez ${i + 1}`);
    const url = f.source_url == null || f.source_url === "" ? null : String(f.source_url).trim();
    if (url !== null && (!/^https:\/\/[^\s<>"']+$/.test(url) || url.length > 500)) fail(`saviez ${i + 1} : source_url https attendue`);
    const nom = opt(f.source_name, `saviez ${i + 1} source_name`, LIMITES.source);
    return { text: texte(f.text, `saviez ${i + 1} text`, LIMITES.fait), source_name: nom || null, source_url: url };
  });
}

/** Fragment : zones éditables des sections Extra (mêmes classes que la page ; blocs vides rendus pour pouvoir les remplir). */
export function extrasEditables(body, source) {
  const ed = (champ, v, tag = "span", cls = "") => `<${tag}${cls ? ` class="${cls}"` : ""} data-edit="${champ}" data-brut="${esc(v ?? "")}">${esc(v ?? "")}</${tag}>`;
  // champ d'un élément de liste (vin, fait) : data-champ comme les ingrédients
  const ch = (champ, v, tag = "span") => `<${tag} data-champ="${champ}" data-brut="${esc(v ?? "")}">${esc(v ?? "")}</${tag}>`;
  const c = conservationPatch(source.conservation, {});
  const dl = (sec, rows) => `<dl>${rows.map(([lab, k]) => `<div><dt>${lab}</dt>${ed(`conservation.${sec}.${k}`, c[sec][k], "dd")}</div>`).join("")}</dl>${ed(`conservation.${sec}.note`, c[sec].note, "p", "cv-note")}`;
  const ul = (k) => `<ul data-edit-liste="conservation.${k}">${c[k].map((x, i) => `<li data-edit="conservation.${k}" data-index="${i}" data-brut="${esc(x)}">${esc(x)}</li>`).join("")}</ul>`;
  const sec = (ico, titre, inner) => `<section class="cv-sec"><h4><span aria-hidden="true">${ico}</span> ${titre}</h4>${inner}</section>`;
  const cons = `<article class="xcard x-frais" id="x-conservation" data-edit-bloc="conservation"><h3 class="display">Conservation 🫙</h3>` +
    sec("❄️", "Au réfrigérateur", dl("frigo", [["Durée", "duree"], ["Contenant", "contenant"]])) +
    sec("🧊", "Au congélateur", `<p data-edit="conservation.congelation.possible" data-brut="${c.congelation.possible === false ? "false" : "true"}">${c.congelation.possible === false ? "Ne se congèle pas." : "Se congèle."}</p>` + dl("congelation", [["Durée", "duree"], ["Décongélation", "decongelation"]])) +
    sec("🌡️", "À température ambiante", dl("temperature_ambiante", [["Durée", "duree"]])) +
    sec("🔥", "Réchauffage", ed("conservation.rechauffage", c.rechauffage, "p")) +
    sec("🍲", "Idées pour les restes", ul("restes")) + sec("♻️", "Pour ne rien perdre", ul("anti_gaspi")) + `</article>`;
  const vins = `<article class="xcard x-raisin" id="x-vins" data-edit-liste="vins"><h3 class="display">Accords vins 🍷</h3>` + (source.wines || []).map((w, i) =>
    `<div class="wine" data-edit="vin" data-index="${i}">${ch("name", w.name, "b")} — ${ch("producer", w.producer)}<div class="muted">${ch("origin", w.origin)} · ${ch("grapes", w.grapes)} · 🏅 ${ch("award", w.award)}</div>${ch("why", w.why, "div")}</div>`).join("") + `</article>`;
  const faits = `<article class="xcard x-postit" id="x-facts" data-edit-liste="saviez"><h3 class="display">Le saviez-vous ? 💡</h3><ul>` + (source.fun_facts || []).map((f, i) =>
    `<li data-edit="saviez" data-index="${i}" data-source-url="${esc(f.source_url || "")}">${ch("text", f.text)} <span class="muted">— ${ch("source_name", f.source_name, f.source_url ? "a" : "span")}</span></li>`).join("") + `</ul></article>`;
  const ouvre = '<div class="extras">';
  if (!body.includes(ouvre)) fail("gabarit inattendu pour l'aperçu : extras", 500);
  for (const id of ["x-conservation", "x-vins", "x-facts"]) body = body.replace(new RegExp(`\\s*<article class="xcard [a-z-]+" id="${id}">[\\s\\S]*?</article>`), "");
  body = body.replace(ouvre, () => `${ouvre}\n ${cons}\n ${vins}`);
  const h = body.match(/<article class="xcard x-parchemin" id="x-histoire">[\s\S]*?<\/article>/);
  body = h ? body.replace(h[0], () => `${h[0]}\n ${faits}`) : body.replace(vins, () => `${vins}\n ${faits}`);
  return body;
}

// ---- v251 : lexique (recherche et entrées lexique_local) ----
/** Recherche sans accents ni casse sur l'id, le terme et les formes ; notices publiées seulement. */
export function chercherLexique(items, q, limite = 10) {
  const n = Number(limite == null || limite === "" ? 10 : limite);
  if (!Number.isInteger(n) || n < 1 || n > 50) fail("limite invalide (1 à 50)");
  const qq = sansAccents(q || "");
  if (qq.length > 80) fail("q trop long");
  const ok = (items || []).filter((m) => m && m.id && !m.deleted && m.hidden !== true && m.statut !== "brouillon");
  const score = (m) => {
    if (!qq) return 1;
    const ch = [m.id, m.terme, ...(Array.isArray(m.formes) ? m.formes : [])].map(sansAccents);
    if (ch.some((c) => c === qq)) return 4;
    if (ch.some((c) => c.startsWith(qq))) return 3;
    if (ch.some((c) => c.split(/[\s-]+/).some((w) => w.startsWith(qq)))) return 2;
    return ch.some((c) => c.includes(qq)) ? 1 : 0;
  };
  return ok.map((m) => [score(m), m]).filter(([x]) => x > 0)
    .sort((a, b) => b[0] - a[0] || String(a[1].terme || a[1].id).localeCompare(String(b[1].terme || b[1].id), "fr"))
    .slice(0, n).map(([, m]) => ({ id: m.id, terme: m.terme || m.id, definitionCourte: m.sens || "" }));
}

/** Pour chaque [[id]] des étapes de la version sans entrée lexique_local : entrée copiée de la notice (terme, explication, ref). */
export function completerLexiqueLocal(r, key, lexique) {
  if (!threeStyles(r)) return;
  const v = r.variants[key];
  const lex = lexiqueDe(r, key);
  const notices = new Map((lexique || []).filter((m) => m && m.id && !m.deleted && m.hidden !== true && m.statut !== "brouillon").map((m) => [m.id, m]));
  const textes = [...(v.steps || []), ...STYLES_TROIS.flatMap((s) => (v.steps_niveaux && v.steps_niveaux[s]) || [])];
  for (const t of textes) for (const [, id] of String(t).matchAll(LX_RE)) {
    if (lex[id]) continue;
    const n = notices.get(id);
    if (!n || typeof n.explication !== "string" || !n.explication.trim()) continue; // verifierEtapes refusera le terme inconnu
    r.lexique_local = { ...(r.lexique_local || {}) };
    r.lexique_local[key] = { ...(r.lexique_local[key] || {}) };
    r.lexique_local[key][id] = { terme: n.terme || id, explication: texteBrut(n.explication), ref: `Cuisine/Lexique/${id}.md` };
    lex[id] = r.lexique_local[key][id];
  }
}

/** Mêmes règles que le pipeline du build (recipes-pipeline.mjs) pour les étapes, plus {{q:N}} et le lexique. */
export function verifierEtapes(r) {
  const trois = threeStyles(r);
  for (const [key, v] of Object.entries(r.variants || {})) {
    if (!v || v.inherit) continue;
    const ings = v.ingredients || [];
    const lex = lexiqueDe(r, key);
    const check = (t, where) => {
      for (const [, q] of String(t).matchAll(Q_RE)) if (+q >= ings.length || ings[+q].qty == null) fail(`${where} : {{q:${q}}} ne désigne pas un ingrédient dosé`);
      for (const [, id] of String(t).matchAll(LX_RE)) if (!lex[id]) fail(`${where} : terme de lexique inconnu ${id}`);
    };
    (v.steps || []).forEach((t, i) => check(t, `${key} étape ${i + 1}`));
    if (trois && v.steps_niveaux) for (const s of STYLES_TROIS) (v.steps_niveaux[s] || []).forEach((t, i) => {
      check(t, `${key}/${s} étape ${i + 1}`);
      // même règle que le pipeline du build : balisage lexique dans le style amateur seulement
      if (s !== "amateur" && LX_RE.test(String(t))) fail(`${key}/${s} étape ${i + 1} : le balisage [[…]] n'est accepté qu'en amateur`);
      LX_RE.lastIndex = 0;
    });
  }
}

function lexiqueDe(r, key) {
  const seen = new Set();
  while (key && !seen.has(key)) {
    if (r.lexique_local && r.lexique_local[key]) return r.lexique_local[key];
    seen.add(key); key = r.variants && r.variants[key] && r.variants[key].inherit;
  }
  return {};
}

/** Alignement de deux listes de textes : indices ajoutés (après), supprimés (avant), modifiés (après). */
export function diffEtapes(avant = [], apres = []) {
  const a = avant.map(String), b = apres.map(String);
  const n = a.length, m = b.length;
  const L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ajoutes = [], supprimes = [], modifies = [];
  let i = 0, j = 0, del = [], add = [];
  const flush = () => {
    const k = Math.min(del.length, add.length);
    for (let x = 0; x < k; x++) modifies.push(add[x]);
    supprimes.push(...del.slice(k)); ajoutes.push(...add.slice(k));
    del = []; add = [];
  };
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) { flush(); i++; j++; }
    else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) add.push(j++);
    else del.push(i++);
  }
  flush();
  return { ajoutes, modifies, supprimes };
}

/**
 * « Styles à aligner » : pour chaque version, chaque style d'étapes modifié par rapport à la référence,
 * avec les indices ajoutés / modifiés / supprimés et les styles restés tels quels (à rattraper).
 * Référence d'une version : `bases[variante]` (étapes au moment de la dernière validation de l'alignement, gardées dans
 * meta.alignementBase du brouillon) sinon les étapes de la fiche (version publiée). Fiches à un seul style : [].
 */
export function stylesAAligner(publiee, brouillon, bases = null) {
  if (!brouillon || !threeStyles(brouillon)) return [];
  const out = [];
  for (const [key, v] of Object.entries(brouillon.variants || {})) {
    if (!v || v.inherit || !v.steps_niveaux) continue;
    const ref = bases && bases[key] && typeof bases[key] === "object" ? bases[key] : null;
    const pn = ref || ((publiee && publiee.variants && publiee.variants[key]) || {}).steps_niveaux || {};
    const ops = {};
    for (const s of STYLES_TROIS) ops[s] = diffEtapes(pn[s] || [], v.steps_niveaux[s] || []);
    const change = (s) => ops[s].ajoutes.length + ops[s].modifies.length + ops[s].supprimes.length > 0;
    const changes = STYLES_TROIS.filter(change);
    const intacts = STYLES_TROIS.filter((s) => !change(s));
    if (!changes.length || !intacts.length) continue; // rien changé, ou les trois styles déjà repris
    for (const s of changes) out.push({ variante: key, styleModifie: s, ...ops[s], aRattraper: intacts });
  }
  return out;
}

const MAX_BASE_ALIGNEMENT = 48 * 1024; // meta du back : 64 Ko max

/** Étapes des trois styles de chaque version (hors héritage) : référence posée quand l'alignement est validé. */
export function baseAlignement(recette) {
  const out = {};
  for (const [key, v] of Object.entries((recette && recette.variants) || {})) {
    if (!v || v.inherit || !v.steps_niveaux) continue;
    const n = v.steps_niveaux;
    if (!STYLES_TROIS.every((s) => Array.isArray(n[s]))) continue;
    out[key] = Object.fromEntries(STYLES_TROIS.map((s) => [s, n[s].map(String)]));
  }
  return out;
}

/**
 * meta à écrire dans le brouillon du back.
 * valider : le marqueur est effacé et la référence devient l'état validé (trop gros : référence retirée, on retombe sur la fiche).
 * Sinon : marqueur recalculé ; null si rien ne change (ne pas envoyer de meta).
 */
export function metaAlignement(fiche, apres, metaAvant = {}, { valider = false } = {}) {
  const m = metaAvant && typeof metaAvant === "object" ? metaAvant : {};
  if (valider) {
    const base = baseAlignement(apres);
    const ok = Buffer.byteLength(JSON.stringify(base)) <= MAX_BASE_ALIGNEMENT;
    return { stylesAAligner: [], alignementBase: ok && Object.keys(base).length ? base : null };
  }
  const marqueur = stylesAAligner(fiche, apres, m.alignementBase || null);
  const avant = Array.isArray(m.stylesAAligner) ? m.stylesAAligner : [];
  return JSON.stringify(marqueur) === JSON.stringify(avant) ? null : { stylesAAligner: marqueur };
}

const CHAMPS_RACINE = ["title", "description", "histoire", "equipment", "tags", "conservation", "wines", "fun_facts", "lexique_local"];
const pareil = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

/** Différence avant → après au format `champs` du back : champs racine modifiés, et seulement les versions modifiées (entières). */
export function champsPourBack(avant, apres) {
  const out = {};
  for (const k of CHAMPS_RACINE) if (!pareil(avant && avant[k], apres && apres[k])) out[k] = apres[k];
  const va = (avant && avant.variants) || {}, vb = (apres && apres.variants) || {};
  const variants = {};
  for (const k of Object.keys(vb)) if (!pareil(va[k], vb[k])) variants[k] = vb[k];
  for (const k of Object.keys(va)) if (!(k in vb)) variants[k] = null;
  if (Object.keys(variants).length) out.variants = variants;
  return out;
}

/** Fiche obtenue en appliquant des `champs` au format du back (versions fusionnées par clé, null retire). */
export function fusionnerChamps(data, champs) {
  const r = structuredClone(data || {});
  for (const [k, v] of Object.entries(champs || {})) {
    if (k === "variants") {
      if (!v || typeof v !== "object" || Array.isArray(v)) fail("variants : objet attendu");
      const merged = { ...(r.variants || {}) };
      for (const [vk, vv] of Object.entries(v)) { if (vv === null) delete merged[vk]; else merged[vk] = vv; }
      r.variants = merged;
    } else r[k] = v;
  }
  return r;
}

/** Recherche de matériel sans accents ni casse, sur l'id, le libellé et les alias. */
export function chercherMateriel(items, q, limite = 10) {
  const n = Number(limite == null || limite === "" ? 10 : limite);
  if (!Number.isInteger(n) || n < 1 || n > 50) fail("limite invalide (1 à 50)");
  const qq = sansAccents(q || "");
  if (qq.length > 80) fail("q trop long");
  const visibles = (items || []).filter((m) => m && m.id && !m.deleted);
  const score = (m) => {
    if (!qq) return 1;
    const champs = [m.id, m.label, ...(Array.isArray(m.aliases) ? m.aliases : [])].map(sansAccents);
    if (champs.some((c) => c === qq)) return 4;
    if (champs.some((c) => c.startsWith(qq))) return 3;
    if (champs.some((c) => c.split(/[\s-]+/).some((w) => w.startsWith(qq)))) return 2;
    return champs.some((c) => c.includes(qq)) ? 1 : 0;
  };
  return visibles.map((m) => [score(m), m]).filter(([s]) => s > 0)
    .sort((x, y) => y[0] - x[0] || String(x[1].label || x[1].id).localeCompare(String(y[1].label || y[1].id), "fr"))
    .slice(0, n).map(([, m]) => m);
}

export function imageMateriel(m) {
  const r = (Array.isArray(m.recos) ? m.recos : []).find((x) => x && x.image && !x.hidden);
  return r ? r.image : null;
}

// ---------- Aperçu : pipeline + gabarit du build, puis zones éditables ----------

const ORIGINE_PREPROD = "https://recettes-jigme-preprod.fly.dev";

function absolu(html, origine) {
  return html.replace(/(^|["\s,(])\/(cuisine|restaurants)\//g, (m, p, b) => `${p}${origine}/${b}/`);
}

// Une page de fiche publique déjà construite (dist) : source unique des feuilles et du CSS critique de l'aperçu.
function pageFichePublique(publicDir) {
  const rDir = path.join(publicDir, "r");
  for (const f of [path.join(publicDir, "index.html"), ...(fs.existsSync(rDir) ? fs.readdirSync(rDir).slice(0, 3).map((d) => path.join(rDir, d, "index.html")) : [])]) {
    if (fs.existsSync(f) && f.includes(path.sep + "r" + path.sep)) return fs.readFileSync(f, "utf8");
  }
  return "";
}

function feuillesDeStyle(html, origine) {
  const out = [];
  for (const m of html.matchAll(/<link rel="stylesheet" href="([^"]+)"(?: media="([^"]+)")?>/g)) {
    const href = m[1].startsWith("/") ? origine + m[1] : m[1];
    out.push(m[2] ? { href, media: m[2] } : { href });
  }
  return out;
}

// v249 : le <style> que build.mjs injecte dans le <head> des pages publiques (fonts.css + critical.css + home-ui.css),
// lu tel quel dans la page construite (pas de copie à la main). Commentaires retirés, url(/…) rendues absolues.
// Texte CSS seul : null si la page n'en a pas ou s'il reste un « < » (jamais de balise ni de </style> dans le champ).
export function cssCritiqueDePage(html, origine) {
  const head = String(html || "").split(/<\/head>/i)[0];
  const m = head.match(/<style>([\s\S]*?)<\/style>/i);
  if (!m) return null;
  const css = m[1].replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim()
    .replace(/url\(\s*(["']?)\/(?!\/)/g, (x, q) => `url(${q}${origine}/`);
  if (!css || css.includes("<")) return null;
  return css;
}

function ingredientsHtml(v, ctx) {
  const { L, OV } = ctx;
  let html = "", g;
  (v.ingredients || []).forEach((ing, i) => {
    if (ing.group !== g || i === 0) {
      if (i) html += "</ul>";
      g = ing.group;
      html += (g ? `<h4>${esc(g.charAt(0).toUpperCase() + g.slice(1))}</h4>` : "") + '<ul class="ing">';
    }
    const so = L.scaleIng(ing, 1), q = so.qty;
    const qs = L.fmtIng(so, false);
    let item = L.inflect(ing.item, q == null ? null : Number(String(qs).replace(",", ".").match(/[\d.]+/)?.[0] ?? q), ing.unit, (OV && OV._inflections) || {});
    item = item ? item.charAt(0).toUpperCase() + item.slice(1) : item;
    html += `<li data-edit="ingredient" data-index="${i}"><span class="nm" data-champ="item">${esc(item)}${ing.to_taste ? " <em>(au goût)</em>" : ""}${ing.optional ? " <em>(facultatif)</em>" : ""}</span><span class="q" data-champ="qty">${esc(qs)}</span></li>`;
  });
  return html ? html + "</ul>" : '<p class="muted">Aucun ingrédient.</p>';
}

function etapesHtml(v, key, r, style, ctx) {
  const { L } = ctx;
  const lex = lexiqueDe(r, key);
  const src = style === "base" ? (v.steps || []) : ((v.steps_niveaux || {})[style] || []);
  const qv = (n) => { const ing = (v.ingredients || [])[+n]; return ing && ing.qty != null ? String(L.fmtIng(L.scaleIng(ing, 1), false) || "") : ""; };
  return src.map((raw, i) => {
    const { titre, brut } = titreEtape(raw, style, [(v.steps || [])[i], ((v.steps_niveaux || {}).amateur || [])[i]]); // v252 : titre retiré du HTML, exposé à part
    const vu = plainLx(String(brut).replace(Q_RE, (m, n) => qv(n)), lex).replace(/\*\*/g, "");
    return `<li data-edit="etape" data-index="${i}"${titre ? ` data-titre="${esc(titre)}"` : ""} data-brut="${esc(brut)}">${esc(vu)}</li>`;
  }).join("");
}

// v250 : matériel lié de la fiche (refs du catalogue), pour poser data-materiel-id sur les cartes rendues par app.js.
function refsMateriel(source, cat) {
  const byId = new Map(cat.map((m) => [m.id, m]));
  return (Array.isArray(source.equipment) ? source.equipment : []).map((e) => e && e.ref).filter(Boolean)
    .map((id) => byId.get(id) || { id, label: id }).map((m) => ({ id: m.id, label: m.label || m.id, aliases: m.aliases || [] }));
}

/**
 * Le pipeline du build exige des styles de même longueur (sinon la fiche est refusée). Pour l'aperçu SEULEMENT,
 * une version désalignée est complétée par le texte brut du style le plus long ; l'aperçu affiche les étapes de la source.
 */
function alignerPourPipeline(r) {
  if (!threeStyles(r)) return;
  for (const [key, v] of Object.entries(r.variants || {})) {
    if (!v || v.inherit || !v.steps_niveaux) continue;
    const n = v.steps_niveaux;
    const lens = STYLES_TROIS.map((s) => (n[s] || []).length);
    if (lens.every((x) => x === (v.steps || []).length)) continue;
    const lex = lexiqueDe(r, key);
    const ref = STYLES_TROIS.map((s) => n[s] || []).sort((a, b) => b.length - a.length)[0].map((t) => plainLx(t, lex));
    v.steps = ref.slice();
    v.steps_niveaux = Object.fromEntries(STYLES_TROIS.map((s) => [s, ref.slice()]));
  }
}

/** Pose les zones éditables sur le fragment du gabarit public (chaînes exactes du gabarit ; échec explicite si elles changent). */
export function zonesEditables(body, { r, source, key, style, ctx, cat, publique, srcDir, fin = (t) => t }) {
  const v = ctx.L.resolve(r, key);
  const vs = ctx.L.resolve(source, key);
  const swap = (from, to) => {
    if (!body.includes(from)) fail("gabarit inattendu pour l'aperçu : " + from.slice(0, 40), 500);
    body = body.replace(from, () => to);
  };
  swap('<h1 class="display hero-title">', '<h1 class="display hero-title" data-edit="titre">');
  swap('<div id="ingredients"></div>', `<div id="ingredients" data-edit-liste="ingredients" data-variante="${esc(key)}">${ingredientsHtml(v, ctx)}</div>`);
  swap('<ol id="steps" class="steps"></ol>', `<ol id="steps" class="steps" data-edit-liste="etapes" data-variante="${esc(key)}" data-style="${esc(style)}">${etapesHtml({ ...vs, ingredients: v.ingredients }, key, source, style, ctx)}</ol>`);
  // v250 : matériel rendu par le code d'app.js (materiel-apercu.mjs), version et fiche de l'aperçu, sans lien actif
  const mat = materielApercu({ R: publique, v: ctx.L.resolve(publique, key), srcDir, refs: refsMateriel(source, cat) });
  swap('<div id="equipment" class="equip"></div><p id="eq-credits" class="eq-credits"></p>', `<div id="equipment" class="equip" data-edit-liste="materiel">${fin(mat.equipment)}</div><p id="eq-credits" class="eq-credits">${fin(mat.credits)}</p>`);
  if (r.histoire) swap(`<p>${ctx.esc(r.histoire)}</p>`, `<p data-edit="histoire">${ctx.esc(r.histoire)}</p>`);
  // intro = description (résumé de la fiche, 120–155 car.) : affichée sous le titre dans l'aperçu seulement
  swap('<div class="hero-bar">', `<p class="rj-apercu-intro" data-edit="intro">${esc(source.description || "")}</p><div class="hero-bar">`);
  body = extrasEditables(body, source);
  // panneaux d'onglets tous visibles (pas de script dans l'aperçu)
  body = body.replace(/(<section class="pane block" id="pane-[a-z]+" role="tabpanel" aria-labelledby="tab-[a-z]+") hidden>/g, "$1>");
  return `<div class="rj-apercu" data-slug="${esc(r.slug)}">${body}</div>`;
}

/** Supprime tout script, gestionnaire on* et URL javascript: (le gabarit n'en contient pas ; défense en profondeur). */
export function sansScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/javascript\s*:/gi, "");
}

/**
 * Rend l'aperçu d'une fiche : même pipeline (loadRecipes) et même gabarit (recipeArticle) que le build.
 * opts : { recipe (objet YAML complet), materiel (catalogue admin), loadTargeted, publicDir, srcDir, root, yaml, RD, RR, paths,
 *          validateRecipeV2, style, variante, origine }
 */
export async function renderApercu(opts) {
  const { recipe, materiel = [], yaml } = opts;
  const origine = (opts.origine || process.env.APERCU_ORIGIN || ORIGINE_PREPROD).replace(/\/+$/, "");
  const slug = String(recipe.slug || "");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail("slug invalide");
  const key = varianteEditee(recipe, opts.variante);
  const style = styleEdite(recipe, opts.style);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "rj-apercu-"));
  try {
    for (const d of ["data", "materiel", "restaurants"]) fs.mkdirSync(path.join(tmp, d));
    // L'aperçu montre la fiche même si elle est un brouillon ou masquée (le pipeline les écarte du public).
    const copie = { ...recipe };
    delete copie.statut; delete copie.hidden; delete copie.sha; delete copie.body; delete copie.refs_materiel; delete copie.refs_lexique;
    for (const k of ["id", "published_at"]) delete copie[k];
    alignerPourPipeline(copie);
    fs.writeFileSync(path.join(tmp, "data", slug + ".md"), "---\n" + yaml.dump(copie, { lineWidth: 100, noRefs: true }) + "---\n");
    for (const m of materiel) {
      if (!m || !m.id || m.hidden === true || m.statut === "brouillon" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(m.id)) continue;
      const fm = { schema: m.schema || "materiel-jigme/v1", id: m.id, label: m.label, aliases: m.aliases || [m.label], recos: m.recos || [] };
      fs.writeFileSync(path.join(tmp, "materiel", m.id + ".md"), "---\n" + yaml.dump(fm, { lineWidth: 100, noRefs: true }) + "---\n" + String(m.bodyMarkdown || m.body || ""));
    }
    const G = await opts.loadTargeted();
    const ctx = await G.createTargetedContext({
      publicDir: opts.publicDir, restoDir: path.join(tmp, "restaurants"), dataDir: path.join(tmp, "data"), materielDir: path.join(tmp, "materiel"),
      restaurantsDir: path.join(tmp, "restaurants"), srcDir: opts.srcDir, root: opts.root, yaml, RD: opts.RD, RR: opts.RR, paths: opts.paths,
      validateRecipeV2: opts.validateRecipeV2, recipes: [slug], requireSharp: false, photoRoot: opts.photoRoot,
    });
    const r = ctx.recipes.find((x) => x.slug === slug);
    if (!r) fail("aperçu impossible : fiche écartée par le pipeline");
    const P = await opts.loadPages();
    const { body } = P.recipeArticle(r, ctx);
    let html = zonesEditables(body, { r, source: recipe, key, style, ctx, cat: materiel, publique: P.publicRecipe(r), srcDir: opts.srcDir,
      // ?v= des images du matériel, comme le JSON de la page publique (finalizeText du build, sans préfixe : posé plus bas)
      fin: (t) => P.finalizeText(t, { imgRoot: opts.publicDir, prefix: false, cache: {} }) });
    html = sansScripts(absolu((opts.paths && opts.paths.prefixText) ? opts.paths.prefixText(html) : html, origine));
    const pagePub = pageFichePublique(opts.publicDir);
    const css = feuillesDeStyle(pagePub, origine);
    return { html, cssUrl: (css[0] || {}).href || null, cssUrls: css, cssCritique: cssCritiqueDePage(pagePub, origine), variante: key, style, styles: threeStyles(recipe) ? STYLES_TROIS : ["base"] };
  } catch (e) {
    if (!e.status && /schéma v2|invalide|requis/.test(e.message || "")) e.status = 400;
    throw e;
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

export const shaDe = (s) => createHash("sha256").update(String(s)).digest("hex");
