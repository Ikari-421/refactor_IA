// API admin restaurants (préprod) : MD sur le volume live + patch HTML immédiat (règles : restaurants-domain.mjs ; même rendu que build.mjs : restaurants-render.mjs).
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import * as RD from "./restaurants-domain.mjs";
import * as RR from "./restaurants-render.mjs";
import { u, prefixText } from "./paths.mjs"; // D28 : pages sous /restaurants/, HTML écrit en chemins publics

const PROD = "https://recettes.jigme.fr"; // canoniques / JSON-LD = URL de prod, comme build.mjs
const err = (status, msg) => Object.assign(new Error(msg), { status });
const sha1 = (b) => createHash("sha1").update(b).digest("hex");
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
// expectedSha : SHA-256 (contrat v1) ou SHA-1 (ancien contrat, accepté le temps que le dashboard migre).
const EDITABLE = ["nom", "categorie", "adresse", "code_postal", "ville", "lat", "lng", "date_review", "photo", "photo_alt", "extrait", "note", "prix", "test", "test_note", "hidden", "statut", "blocs"];

export class RestaurantStore {
  constructor({ seed, live, html, pages, yaml, loadSharp }) {
    this.pages = pages || path.join(html, "..", "restaurants");
    this.seedDir = path.join(seed, "restaurants"); this.dir = path.join(live, "restaurants"); this.live = live; this.html = html; this.yaml = yaml; this.loadSharp = loadSharp;
    fs.mkdirSync(this.dir, { recursive: true });
  }
  file(slug) { if (!RD.SLUG_RE.test(slug)) throw err(400, "slug invalide"); return path.join(this.dir, slug + ".md"); }
  // Seed non destructif : une fiche jamais modifiée par l'admin (pas de .bak) suit le workspace ; une fiche modifiée garde la version du volume.
  seed() {
    if (!fs.existsSync(this.seedDir)) return 0; let n = 0;
    for (const f of fs.readdirSync(this.seedDir)) {
      if (!f.endsWith(".md") || f.startsWith("_")) continue;
      const src = path.join(this.seedDir, f), dest = path.join(this.dir, f);
      if (fs.existsSync(dest + ".bak")) continue;
      if (fs.existsSync(path.join(this.dir, ".trash", f))) continue;
      if (!fs.existsSync(dest) || fs.readFileSync(dest, "utf8") !== fs.readFileSync(src, "utf8")) { fs.copyFileSync(src, dest); n++; }
    }
    return n;
  }
  read(slug) {
    const file = this.file(slug); if (!fs.existsSync(file)) throw err(404, "restaurant introuvable");
    const raw = fs.readFileSync(file, "utf8"), m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) throw err(500, "frontmatter manquant");
    return { data: RD.cleanRestaurant(this.yaml.load(m[1])), body: m[2], sha: sha256(raw) }; // contrat v1 : SHA-256 uniquement (SHA-1 retiré le 11/11, fin de migration)
  }
  all() {
    return fs.readdirSync(this.dir).filter((f) => f.endsWith(".md") && !f.startsWith("_")).flatMap((f) => { try { return [this.read(f.replace(/\.md$/, "")).data]; } catch (e) { console.error("[admin-api] restaurant", f, e.message); return []; } });
  }
  list() {
    return RD.sortRecent(this.all()).map((r) => ({ slug: r.slug, nom: r.nom, categorie: r.categorie, categorieLabel: RD.catLabel(r.categorie), ville: r.ville, date_review: r.date_review, photo: r.photo, extrait: r.extrait, note: r.note ?? null, test: r.test, hidden: r.hidden === true, blocs: r.blocs.length, url: u(`/restaurant/${r.slug}/`) }));
  }
  listTrash() {
    const dir = path.join(this.dir, ".trash");
    if (!fs.existsSync(dir)) return [];
    const out = [];
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md") && !x.startsWith("_"))) {
      try {
        const raw = fs.readFileSync(path.join(dir, f));
        const m = raw.toString("utf8").match(/^---\n([\s\S]*?)\n---/);
        const data = m ? this.yaml.load(m[1]) : {};
        const slug = String(data.slug || f.replace(/\.md$/, ""));
        out.push({ slug, nom: String(data.nom || slug), sha: sha256(raw), deleted: true });
      } catch {
        out.push({ slug: f.replace(/\.md$/, ""), nom: f.replace(/\.md$/, ""), sha: null, deleted: true, corrupt: true });
      }
    }
    return out.sort((a, b) => a.slug.localeCompare(b.slug, "fr", { sensitivity: "base" }));
  }
  async remove(slug, expectedSha) {
    const file = this.file(slug);
    if (!fs.existsSync(file)) throw err(404, "restaurant introuvable");
    if (typeof expectedSha !== "string" || !/^[a-f0-9]{64}$/.test(expectedSha)) throw err(428, "empreinte de lecture requise (SHA-256)");
    const raw = fs.readFileSync(file);
    if (sha256(raw) !== expectedSha) throw err(409, "conflit : la fiche a changé depuis la lecture (recharger)");
    const trashDir = path.join(this.dir, ".trash");
    fs.mkdirSync(trashDir, { recursive: true });
    const dest = path.join(trashDir, slug + ".md");
    if (fs.existsSync(dest)) throw err(409, "une version est déjà en corbeille pour ce slug");
    if (!fs.existsSync(file + ".bak")) fs.copyFileSync(file, file + ".bak");
    fs.renameSync(file, dest);
    const page = path.join(this.pages, slug);
    if (fs.existsSync(page)) fs.rmSync(page, { recursive: true, force: true });
    this.renderListing(this.all());
    return { ok: true, slug };
  }
  async restore(slug) {
    if (!RD.SLUG_RE.test(slug)) throw err(400, "slug invalide");
    const src = path.join(this.dir, ".trash", slug + ".md");
    if (!fs.existsSync(src)) throw err(404, "restaurant absent de la corbeille");
    const dest = this.file(slug);
    if (fs.existsSync(dest)) throw err(409, "un restaurant actif porte déjà ce slug");
    fs.renameSync(src, dest);
    const r = this.read(slug).data;
    await this.renderOne(r);
    return { ok: true, slug };
  }
  write(slug, data, body, prevSha) {
    const file = this.file(slug), clean = RD.cleanRestaurant({ ...data, slug });
    if (fs.existsSync(file)) {
      const buf = fs.readFileSync(file);
      if (prevSha != null && prevSha !== sha256(buf)) throw err(409, "conflit : la fiche a changé depuis la lecture (recharger)");
      fs.copyFileSync(file, file + ".bak");
    } else fs.writeFileSync(file + ".bak", ""); // marqueur « édité par l'admin » (le seed ne l'écrasera pas)
    const out = "---\n" + this.yaml.dump(clean, { lineWidth: 100, noRefs: true }) + "---\n" + (body || "\nNotes libres (non publiées).\n").replace(/^\n?/, "\n");
    const tmp = file + ".tmp"; fs.writeFileSync(tmp, out); fs.renameSync(tmp, file);
    return clean;
  }
  // ---------- rendu ----------
  opts() {
    const H = {}, hashOf = (u) => { if (!(u in H)) { const f = path.join(this.html, u); H[u] = fs.existsSync(f) ? sha1(fs.readFileSync(f)).slice(0, 8) : null; } return H[u]; };
    return { url: (u) => { const h = hashOf(u); return h ? `${u}?v=${h}` : u; }, thumb: (u) => RR.thumbCandidates(u).find((t) => fs.existsSync(path.join(this.html, t))) || u };
  }
  async ogOf(r) {
    try { const sharp = await this.loadSharp(); const m = await sharp(path.join(this.html, r.photo)).metadata(); return { w: m.width, h: m.height }; } catch { return null; }
  }
  async renderOne(r, all) {
    const dir = path.join(this.pages, r.slug), file = path.join(dir, "index.html"), opts = this.opts();
    let review = false;
    if (r.hidden || r.statut === "brouillon") { if (fs.existsSync(file)) { fs.rmSync(dir, { recursive: true, force: true }); review = true; } }
    else {
      let tpl = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
      if (!tpl) { const any = this.all().map((x) => path.join(this.pages, x.slug, "index.html")).find((f) => fs.existsSync(f)); if (!any) throw err(500, "aucun gabarit de page review dans le HTML servi (rebuild nécessaire)"); tpl = fs.readFileSync(any, "utf8"); }
      const og = await this.ogOf(r);
      const next = prefixText(RR.patchReviewPage(tpl, r, PROD, { ...opts, og }));
      if (next !== tpl || !fs.existsSync(file)) { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(file, next); review = true; }
    }
    return { review, listing: this.renderListing(all || this.all()) };
  }
  renderListing(all) {
    const file = path.join(this.pages, "index.html"); if (!fs.existsSync(file)) return false;
    const h = fs.readFileSync(file, "utf8"), next = prefixText(RR.patchListingPage(h, all, this.opts()));
    let changed = next !== h; if (changed) fs.writeFileSync(file, next);
    // pages /restaurant/c/<cat>/ issues du build : même liste, filtre présélectionné
    for (const [k] of RD.CATEGORIES) { const f = path.join(this.pages, "c", k, "index.html"); if (!fs.existsSync(f)) continue;
      const hc = fs.readFileSync(f, "utf8"), nc = prefixText(RR.patchListingPage(hc, all, { ...this.opts(), cat: k })); if (nc !== hc) { fs.writeFileSync(f, nc); changed = true; } }
    return changed;
  }
  // Au démarrage : le HTML de l'image vient du build (workspace). Les fiches en corbeille sur le volume ne doivent pas réapparaître.
  applyTrash() {
    const trash = this.listTrash();
    let n = 0;
    for (const t of trash) {
      if (!RD.SLUG_RE.test(t.slug)) continue;
      const page = path.join(this.pages, t.slug);
      if (fs.existsSync(page)) { fs.rmSync(page, { recursive: true, force: true }); n++; }
    }
    if (trash.length) this.renderListing(this.all());
    return n;
  }
  // Réapplique les fiches éditées (.bak) ou créées par l'admin, puis la corbeille (idempotent).
  async reapply() {
    const trashed = this.applyTrash();
    const seedSet = new Set(fs.existsSync(this.seedDir) ? fs.readdirSync(this.seedDir) : []);
    const all = this.all(); let n = 0;
    for (const r of all) if (fs.existsSync(this.file(r.slug) + ".bak") || !seedSet.has(r.slug + ".md")) { await this.renderOne(r, all); n++; }
    if (n) this.renderListing(all);
    return n + trashed;
  }
  syncImages() {
    const src = path.join(this.live, "img", "resto"); if (!fs.existsSync(src)) return 0; let n = 0;
    for (const s of fs.readdirSync(src)) { if (!RD.SLUG_RE.test(s)) continue; const d = path.join(this.html, "img", "resto", s); fs.mkdirSync(d, { recursive: true });
      for (const f of fs.readdirSync(path.join(src, s))) if (/^[a-z0-9-]+\.webp$/.test(f)) { fs.copyFileSync(path.join(src, s, f), path.join(d, f)); n++; } }
    return n;
  }
  // ---------- mutations ----------
  // create : `image` (data URL) optionnel → réencodée comme photo target cover ; sinon `photo` ; sinon placeholder local.
  // Atomique : slug, image (décodage + réencodage) et champs validés AVANT toute écriture ; échec après écriture → tout est retiré.
  async create(b, parseDataUrlImage) {
    const slug = String(b.slug || "").trim();
    if (!RD.SLUG_RE.test(slug) || slug.length > 80) throw err(400, "slug invalide [a-z0-9-], 80 car. max");
    if (fs.existsSync(this.file(slug))) throw err(409, "restaurant déjà existant");
    const data = { schema: RD.SCHEMA, slug }; for (const k of EDITABLE) if (b[k] !== undefined && b[k] !== null) data[k] = b[k];
    if (!data.blocs) data.blocs = [];
    let enc = null;
    if (b.image != null) { if (!parseDataUrlImage) throw err(500, "décodeur d'image absent"); enc = await this.encode(slug, parseDataUrlImage(b.image).buf); data.photo = enc.rel; }
    else if (data.photo == null || data.photo === "") data.photo = RD.PHOTO_PLACEHOLDER;
    RD.cleanRestaurant(data); // validation complète, rien n'est encore écrit
    const file = this.file(slug), written = [];
    try {
      if (enc) written.push(...this.store(slug, enc));
      written.push(file, file + ".bak", file + ".tmp"); // n'existaient pas (409 sinon)
      const r = this.write(slug, data, null, null);
      const res = this.result(r, await this.renderOne(r));
      return enc ? { ...res, image: enc.out } : res;
    } catch (e) {
      for (const f of written) fs.rmSync(f, { force: true });
      fs.rmSync(path.join(this.pages, slug), { recursive: true, force: true });
      try { this.renderListing(this.all()); } catch {}
      throw e;
    }
  }
  // Réencodage WebP commun (create image, photo) : 1600 px max q78 + vignette 720 q74. Une image illisible lève 400.
  async encode(slug, buf) {
    const sharp = await this.loadSharp(); let hero, thumb, meta;
    try {
      hero = await sharp(buf).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
      thumb = await sharp(hero).resize({ width: 720, height: 720, fit: "cover", withoutEnlargement: true }).webp({ quality: 74 }).toBuffer();
      meta = await sharp(hero).metadata();
    } catch { throw err(400, "image illisible (JPG, PNG ou WebP attendu)"); }
    const name = sha1(hero).slice(0, 10), rel = `/img/resto/${slug}/${name}.webp`, relT = `/img/resto/${slug}/${name}-720.webp`;
    return { name, hero, thumb, rel, out: { url: rel, thumb: relT, width: meta.width, height: meta.height } };
  }
  store(slug, enc) {
    const out = [];
    for (const root of [this.live, this.html]) { const d = path.join(root, "img", "resto", slug); fs.mkdirSync(d, { recursive: true });
      for (const [f, buf] of [[enc.name + ".webp", enc.hero], [enc.name + "-720.webp", enc.thumb]]) { const fp = path.join(d, f); if (!fs.existsSync(fp)) out.push(fp); fs.writeFileSync(fp, buf); } }
    return out;
  }
  async save(slug, b) {
    const cur = this.read(slug), data = { ...cur.data };
    for (const k of EDITABLE) if (b[k] !== undefined) { if (b[k] === null) delete data[k]; else data[k] = b[k]; }
    if (data.blocs === undefined) data.blocs = [];
    const r = this.write(slug, data, cur.body, b.expectedSha ?? null);
    return this.result(r, await this.renderOne(r));
  }
  async blocks(slug, b) {
    const cur = this.read(slug), blocs = applyBlockAction(cur.data.blocs, b);
    const r = this.write(slug, { ...cur.data, blocs }, cur.body, b.expectedSha ?? null);
    return this.result(r, await this.renderOne(r));
  }
  async photo(slug, b, parseDataUrlImage) {
    const cur = this.read(slug), enc = await this.encode(slug, parseDataUrlImage(b.image).buf);
    this.store(slug, enc); const rel = enc.rel, out = enc.out;
    const target = String(b.target || "library");
    if (target === "library") return { ok: true, slug, image: out, note: "Photo WebP enregistrée (volume + HTML). Utiliser image.url dans un bloc image ou galerie." };
    if (target !== "cover") throw err(400, "target : cover | library");
    const data = { ...cur.data, photo: rel }; if (b.alt != null) data.photo_alt = String(b.alt);
    const r = this.write(slug, data, cur.body, b.expectedSha ?? null);
    return { ...this.result(r, await this.renderOne(r)), image: out };
  }
  result(r, patch) { const raw = fs.readFileSync(this.file(r.slug)); return { ok: true, restaurant: r, sha: sha256(raw), patch, note: "MD écrit sur le volume préprod + HTML patché. NAS non touché. Rebuild complet non lancé." }; }
}

/** Actions de blocs (block-add, block-update, block-delete, block-move, blocks-order, blocks) appliquées à une copie des blocs.
 *  R2 : partagée par le store local et par le relais back (le back ne connaît que update ; Recettes calcule les blocs). */
export function applyBlockAction(src, b) {
  const blocs = (src || []).map((x) => ({ ...x })), idx = (id) => { const i = blocs.findIndex((x) => x.id === id); if (i < 0) throw err(404, "bloc introuvable " + id); return i; };
  const at = (v, max) => { if (v == null) return max; const n = Number(v); if (!Number.isInteger(n) || n < 0 || n > max) throw err(400, `index : entier entre 0 et ${max}`); return n; };
  if (b.action === "block-add") { const nb = RD.cleanBlock({ ...(b.block || {}), id: b.block?.id || RD.newBlockId(new Set(blocs.map((x) => x.id))) }); if (blocs.some((x) => x.id === nb.id)) throw err(409, "id de bloc déjà utilisé"); blocs.splice(at(b.index, blocs.length), 0, nb); }
  else if (b.action === "block-update") { const i = idx(String(b.id)); blocs[i] = RD.cleanBlock({ ...blocs[i], ...(b.block || {}), id: blocs[i].id }, i); }
  else if (b.action === "block-delete") blocs.splice(idx(String(b.id)), 1);
  else if (b.action === "block-move") { const i = idx(String(b.id)), [x] = blocs.splice(i, 1); blocs.splice(at(b.index, blocs.length), 0, x); }
  else if (b.action === "blocks-order") {
    if (!Array.isArray(b.order) || b.order.length !== blocs.length || new Set(b.order).size !== blocs.length || !b.order.every((id) => blocs.some((x) => x.id === id))) throw err(400, "order : permutation exacte des id de blocs attendue");
    blocs.sort((p, q) => b.order.indexOf(p.id) - b.order.indexOf(q.id));
  } else if (b.action === "blocks") blocs.splice(0, blocs.length, ...RD.cleanBlocks(b.blocs));
  else throw err(400, "action inconnue");
  return blocs;
}
