// v250 : matériel de l'aperçu rendu côté serveur avec le code même d'app.js (src/app.js), pas une copie.
// Sur le site, app.js remplit #equipment et #eq-credits au chargement ; l'admin n'exécute aucun script.
// On extrait d'app.js, par repères exacts, les fonctions de rendu (esc, publicRecos, inkOf, ribbonGeo, eqFxAttr, eqAdHtml,
// applyEqFx, ARROW), le corps du .map() de #equipment, la phrase de repli et l'expression de #eq-credits, puis on les exécute
// sur un mini-DOM (juste ce qu'applyEqFx utilise). Repère introuvable → erreur 500 explicite (jamais de rendu approximatif).
// Différences voulues avec la page : aucun lien actif (<a> sans href/target/rel, aria-disabled), recommandation de fond
// déterministe (la première ; la page en tire une au hasard), zones data-edit de l'éditeur.
import fs from "node:fs";
import path from "node:path";

const fail = (m) => { throw Object.assign(new Error("aperçu matériel : " + m), { status: 500 }); };

function entre(src, debut, fin, nom) {
  const i = src.indexOf(debut);
  if (i < 0) fail(`repère introuvable dans app.js (${nom})`);
  const j = src.indexOf(fin, i + debut.length);
  if (j < 0) fail(`fin introuvable dans app.js (${nom})`);
  return src.slice(i + debut.length, j);
}
function fonction(src, entete) {
  const i = src.indexOf(entete);
  if (i < 0) fail(`repère introuvable dans app.js (${entete})`);
  let d = 0;
  for (let k = src.indexOf("{", i); k < src.length; k++) {
    if (src[k] === "{") d++;
    else if (src[k] === "}" && --d === 0) return src.slice(i, k + 1);
  }
  fail("accolades déséquilibrées : " + entete);
}

export const FIN_MAP = "}).join('') || '";
export function extraireRendu(src) {
  const helpers = entre(src, "\n  const esc = s =>", "\n  function applyEqFx(root) {", "esc…eqAdHtml");
  const apply = fonction(src, "function applyEqFx(root) {");
  const arrow = (src.match(/^\s*const ARROW = '[^'\n]*';$/m) || fail("ARROW introuvable"))[0];
  const corps = entre(src, "$('#equipment').innerHTML = (v.equipment || []).map((s, i) => {", FIN_MAP, "map #equipment");
  const repli = entre(src, FIN_MAP, "';", "repli #equipment");
  const credits = entre(src, "$('#eq-credits').innerHTML = ", ";\n    usedCredits.clear();", "#eq-credits");
  const code = `"use strict";\n  const esc = s =>${helpers}\n  ${apply}\n${arrow}\n  const bgPick = new Map(); const usedCredits = new Set();\n` +
    `  return (R, v) => { usedCredits.clear(); bgPick.clear();\n    const items = (v.equipment || []).map((s, i) => {${corps}});\n` +
    `    const credits = ${credits};\n    return { items, credits, applyEqFx };\n  };`;
  // eslint-disable-next-line no-new-func
  const fabrique = new Function("document", "Math", code);
  return { fabrique, repli, code };
}

// ---- mini-DOM : analyse du HTML produit par les gabarits d'app.js, juste les API qu'applyEqFx appelle ----
const VIDES = new Set(["img", "br", "hr", "input", "meta", "link", "source", "wbr"]);
const dec = (s) => s.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m, e) => ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", nbsp: "\u00a0" }[e]));
const escAttr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00a0/g, "&nbsp;");
// sérialisation comme un navigateur (innerHTML) : texte & < > et espace insécable, attributs & " < > et insécable
const escTexte = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00a0/g, "&nbsp;");
const kebab = (k) => k.startsWith("--") ? k : k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
// valeur CSS refusée (comme un navigateur qui ignore une valeur invalide) : pas de sortie de déclaration ni d'url()
// couleurs #rgb/#rrggbb sérialisées en rgb(r, g, b) comme le fait le navigateur
// et calc() imbriqué dans min()/max() simplifié (« min(8px, calc(100% - 30px)) » → « min(8px, 100% - 30px) »)
const rgb = (v) => String(v).replace(/,(?=\S)/g, ", ").replace(/\b(min|max)\((.*)\)$/, (m, f, a) => `${f}(${a.replace(/calc\(([^()]*)\)/g, "$1")})`).replace(/#([0-9a-f]{6}|[0-9a-f]{3})\b/gi, (m, h) => { const x = h.length === 3 ? [...h].map((c) => c + c).join("") : h; const n = parseInt(x, 16); return `rgb(${n >> 16}, ${(n >> 8) & 255}, ${n & 255})`; });
const cssSure = (v) => !/[;{}<>\\]|url\s*\(|expression\s*\(|@import/i.test(String(v));

class Txt { constructor(t) { this.t = t; } html() { return escTexte(this.t); } }
class El {
  constructor(tag) {
    this.tag = tag; this.attrs = new Map(); this.children = []; this.parent = null; this.css = new Map();
    const self = this;
    this.style = new Proxy({}, {
      get(_, k) { if (k === "setProperty") return (p, v) => { if (v != null && cssSure(v)) self.css.set(p, p.startsWith("--") ? String(v) : rgb(v)); }; return self.css.get(kebab(String(k))); },
      set(_, k, v) { if (v != null && cssSure(v)) self.css.set(kebab(String(k)), rgb(v)); return true; },
    });
  }
  getAttribute(n) { return this.attrs.has(n) ? this.attrs.get(n) : null; }
  hasAttribute(n) { return this.attrs.has(n); }
  setAttribute(n, v) { this.attrs.set(n, String(v)); }
  removeAttribute(n) { this.attrs.delete(n); }
  set className(v) { this.attrs.set("class", String(v)); }
  get className() { return this.getAttribute("class") || ""; }
  get classList() { const e = this; return { add: (c) => { const l = e.className.split(/\s+/).filter(Boolean); if (!l.includes(c)) l.push(c); e.className = l.join(" "); }, contains: (c) => e.className.split(/\s+/).includes(c) }; }
  set textContent(v) { this.children = [new Txt(String(v))]; }
  append(...ns) { for (const n of ns) { if (n instanceof El) n.parent = this; this.children.push(typeof n === "string" ? new Txt(n) : n); } }
  *descendants() { for (const c of this.children) if (c instanceof El) { yield c; yield* c.descendants(); } }
  match(sel) {
    let m;
    if ((m = sel.match(/^\.([\w-]+)$/))) return this.className.split(/\s+/).includes(m[1]);
    if ((m = sel.match(/^\[([\w-]+)\]$/))) return this.attrs.has(m[1]);
    if ((m = sel.match(/^[a-z]+$/))) return this.tag === sel;
    fail("sélecteur non géré par le mini-DOM : " + sel);
  }
  querySelectorAll(sel) { return [...this.descendants()].filter((e) => e.match(sel)); }
  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
  html() {
    if (this.css.size) this.attrs.set("style", [...this.css].map(([k, v]) => `${k}: ${v};`).join(" "));
    const a = [...this.attrs].map(([k, v]) => ` ${k}="${escAttr(v)}"`).join("");
    if (VIDES.has(this.tag)) return `<${this.tag}${a}>`;
    return `<${this.tag}${a}>${this.children.map((c) => c.html()).join("")}</${this.tag}>`;
  }
}
export function parse(html) {
  const root = new El("#racine");
  let cur = root;
  const re = /<\/([a-zA-Z][\w-]*)\s*>|<([a-zA-Z][\w-]*)((?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>|([^<]+)|(<)/g;
  let m;
  while ((m = re.exec(html))) {
    if (m[1]) { const t = m[1]; let e = cur; while (e && e !== root && e.tag !== t) e = e.parent; if (!e || e === root) fail("balise fermante inattendue " + t); cur = e.parent; }
    else if (m[2]) {
      const e = new El(m[2]);
      for (const a of m[3].matchAll(/([^\s=>\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) e.attrs.set(a[1], dec(a[2] ?? a[3] ?? a[4] ?? ""));
      cur.append(e);
      if (!VIDES.has(e.tag) && !m[4]) cur = e;
    } else if (m[5]) {
      if (/&(?!(amp|lt|gt|quot|#39|nbsp);)/.test(m[5])) fail("entité HTML non gérée dans le texte du matériel");
      cur.children.push(new Txt(dec(m[5])));
    }
    else fail("« < » isolé dans le HTML du matériel");
  }
  if (cur !== root) fail("balise non fermée : " + cur.tag);
  return root;
}

const sansAcc = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

let cache = null;
function rendu(srcDir) {
  const f = path.join(srcDir, "app.js");
  const st = fs.statSync(f);
  if (!cache || cache.f !== f || cache.mtime !== st.mtimeMs) cache = { f, mtime: st.mtimeMs, ...extraireRendu(fs.readFileSync(f, "utf8")) };
  return cache;
}

/**
 * R : la fiche publique (publicRecipe(r), comme window.RECETTE), v : la version affichée (L.resolve(R, clé)).
 * refs : [{ id, label, aliases }] matériel du catalogue lié à la fiche (pour data-materiel-id).
 * Retourne { equipment, credits } : intérieur de #equipment et de #eq-credits, sans lien actif ni script.
 */
export function materielApercu({ R, v, srcDir, refs = [] }) {
  const { fabrique, repli } = rendu(srcDir);
  const doc = { createElement: (t) => new El(String(t)) };
  const M = Object.create(Math); M.random = () => 0;
  const { items, credits, applyEqFx } = fabrique(doc, M)(R, v);
  const noms = (v.equipment || []).map((s) => (typeof s === "string" ? s : (s && s.name) || ""));
  const racine = parse(items.join("") || repli);
  applyEqFx(racine);
  const elems = racine.children.filter((c) => c instanceof El);
  if (items.length) {
    if (elems.length !== items.length) fail("un élément par matériel attendu");
    elems.forEach((e, i) => {
      e.setAttribute("data-edit", "materiel"); e.setAttribute("data-index", String(i));
      const n = sansAcc(noms[i]);
      const hit = refs.find((m) => [m.label, ...(m.aliases || [])].some((a) => sansAcc(a) && n.includes(sansAcc(a))));
      if (hit) e.setAttribute("data-materiel-id", hit.id);
    });
  }
  const cr = parse(credits);
  for (const r of [racine, cr]) for (const a of r.querySelectorAll("a")) {
    for (const k of ["href", "target", "rel"]) a.removeAttribute(k);
    a.setAttribute("aria-disabled", "true");
  }
  const out = (r) => r.children.map((c) => c.html()).join("");
  return { equipment: out(racine), credits: out(cr) };
}
