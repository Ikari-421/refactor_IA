import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import yaml from './vendor/js-yaml.mjs';

const hash = raw => createHash('sha256').update(raw).digest('hex');
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const fail = (message, status = 400) => { throw Object.assign(new Error(message), { status }); };
const parse = raw => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!m) fail('Frontmatter lexique absent');
  return { data: yaml.load(m[1]), body: m[2] };
};
const dump = (data, body) => '---\n' + yaml.dump(data, { lineWidth: 100, noRefs: true }) + '---\n' + (body.startsWith('\n') ? body.slice(1) : body);

/** Écriture NAS Obsidian : désactivée tant que Jigmé n'a pas donné un OK direct. */
export const OBSIDIAN_NAS_WRITE = process.env.OBSIDIAN_NAS_WRITE === '1';
export const OBSIDIAN_NAS_PATH = process.env.OBSIDIAN_NAS_PATH || 'Cuisine/Lexique';

export class LexiqueStore {
  constructor(seed, live) {
    this.seed = path.join(seed, 'lexique');
    this.dir = path.join(live, 'lexique');
    this.trashDir = path.join(this.dir, '.trash');
    this.baseDir = path.join(this.dir, '.base');
    this.historyDir = path.join(this.dir, '.history');
    this.refs = fs.existsSync(path.join(this.seed, 'pilot-refs.json'))
      ? JSON.parse(fs.readFileSync(path.join(this.seed, 'pilot-refs.json'), 'utf8')) : {};
    if (Object.keys(this.refs).some(s => !['creme-brulee', 'tagliatelles-carbonara'].includes(s))) {
      fail('Périmètre pilote invalide', 500);
    }
    for (const d of [this.dir, this.baseDir, this.historyDir, this.trashDir]) fs.mkdirSync(d, { recursive: true });
    // Seed dédié : copie initiale sans écraser un edit Fly déjà présent.
    for (const id of this.seedIds()) this.ensureSeeded(id);
  }

  seedIds() {
    if (!fs.existsSync(this.seed)) return [];
    return fs.readdirSync(this.seed).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, '')).filter(id => ID.test(id));
  }

  liveIds() {
    return fs.readdirSync(this.dir).filter(f => f.endsWith('.md') && !f.startsWith('.')).map(f => f.replace(/\.md$/, '')).filter(id => ID.test(id)).sort();
  }

  ensureSeeded(id) {
    const source = path.join(this.seed, id + '.md');
    if (!fs.existsSync(source)) return;
    const raw = fs.readFileSync(source, 'utf8');
    this.validate(id, parse(raw).data);
    const base = path.join(this.baseDir, id + '.md');
    const file = path.join(this.dir, id + '.md');
    if (!fs.existsSync(base)) fs.writeFileSync(base, raw, { flag: 'wx' });
    if (!fs.existsSync(file)) fs.writeFileSync(file, raw, { flag: 'wx' });
  }

  file(id, { mustExist = true } = {}) {
    if (!ID.test(id)) fail('id invalide (a-z0-9-)');
    const file = path.join(this.dir, id + '.md');
    if (mustExist && !fs.existsSync(file)) fail('Notice introuvable', 404);
    return file;
  }

  validate(id, d, { allowHidden = true } = {}) {
    if (!d || d.schema !== 'lexique-jigme/v1' || d.id !== id) fail('Schema ou ID lexique invalide');
    for (const [key, max] of [['terme', 120], ['sens', 2000], ['categorie', 80], ['explication', 6000]]) {
      if (typeof d[key] !== 'string' || !d[key].trim() || d[key].length > max) fail('Champ invalide : ' + key);
    }
    if (!Array.isArray(d.formes) || d.formes.length > 60 || d.formes.some(x => typeof x !== 'string' || !x.trim() || x.length > 160)) {
      fail('Formes invalides');
    }
    if (d.references != null && (!Array.isArray(d.references) || d.references.some(x => typeof x !== 'string'))) fail('Références invalides');
    if (!allowHidden && d.hidden === true) fail('hidden invalide à la création');
    if (d.hidden != null && typeof d.hidden !== 'boolean') fail('hidden doit être un booléen');
  }

  referencedBy(id) {
    const hits = [];
    for (const [slug, variants] of Object.entries(this.refs)) {
      for (const [variant, entries] of Object.entries(variants)) {
        if (entries[id]) hits.push(`${slug}/${variant}`);
      }
    }
    return hits;
  }

  read(id) {
    const raw = fs.readFileSync(this.file(id), 'utf8');
    const { data, body } = parse(raw);
    this.validate(id, data);
    const basePath = path.join(this.baseDir, id + '.md');
    const baseSha = fs.existsSync(basePath) ? hash(fs.readFileSync(basePath)) : null;
    const sha = hash(raw);
    return {
      ...data,
      hidden: data.hidden === true,
      references: Array.isArray(data.references) ? data.references : [],
      sha,
      baseSha,
      bodyMarkdown: body,
      obsidianPending: baseSha ? sha !== baseSha : true,
      referencedBy: this.referencedBy(id),
      obsidianPath: `${OBSIDIAN_NAS_PATH}/${id}.md`,
      nasWriteEnabled: OBSIDIAN_NAS_WRITE,
    };
  }

  list(q = '') {
    const norm = s => String(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
    const needle = norm(q).slice(0, 120);
    return this.liveIds().map(id => this.read(id)).filter(n =>
      norm([n.id, n.terme, n.sens, n.explication, n.hidden ? 'masqué' : ''].join(' ')).includes(needle)
    );
  }

  listTrash() {
    if (!fs.existsSync(this.trashDir)) return [];
    return fs.readdirSync(this.trashDir).filter(f => f.endsWith('.md')).map(f => {
      const id = f.replace(/\.md$/, '');
      try {
        const raw = fs.readFileSync(path.join(this.trashDir, f), 'utf8');
        const { data } = parse(raw);
        return { id, terme: data.terme || id, sens: data.sens || '', sha: hash(raw), deleted: true };
      } catch {
        return { id, terme: id, sens: '', sha: null, deleted: true, corrupt: true };
      }
    }).sort((a, b) => a.id.localeCompare(b.id, 'fr'));
  }

  atomicWrite(file, next, previousRaw, previousSha) {
    const id = path.basename(file, '.md');
    const backups = path.join(this.historyDir, id);
    fs.mkdirSync(backups, { recursive: true });
    if (previousRaw && previousSha) {
      const backup = path.join(backups, previousSha + '.md');
      if (!fs.existsSync(backup)) fs.writeFileSync(backup, previousRaw, { flag: 'wx' });
    }
    const tmp = file + '.tmp';
    fs.writeFileSync(tmp, next);
    fs.renameSync(tmp, file);
  }

  requireSha(raw, expectedSha) {
    if (typeof expectedSha !== 'string' || !/^[a-f0-9]{64}$/.test(expectedSha)) fail('Empreinte de lecture requise', 428);
    if (hash(raw) !== expectedSha) {
      fail('Conflit : cette notice a changé. Tes saisies sont conservées ; recharge la version serveur avant de décider.', 409);
    }
  }

  save(id, input) {
    const file = this.file(id);
    const raw = fs.readFileSync(file, 'utf8');
    this.requireSha(raw, input.expectedSha);
    const { data, body } = parse(raw);
    for (const key of ['terme', 'sens', 'categorie', 'formes', 'explication']) {
      if (Object.hasOwn(input, key)) data[key] = input[key];
    }
    if (Object.hasOwn(input, 'hidden')) data.hidden = !!input.hidden;
    if (!Array.isArray(data.references)) data.references = [];
    this.validate(id, data);
    const next = dump(data, body);
    this.atomicWrite(file, next, raw, input.expectedSha);
    return this.read(id);
  }

  setHidden(id, hidden, expectedSha) {
    return this.save(id, { expectedSha, hidden: !!hidden });
  }

  create(input) {
    const id = String(input.id || '').trim().toLowerCase();
    if (!ID.test(id)) fail('id invalide (a-z0-9-)');
    if (fs.existsSync(path.join(this.dir, id + '.md'))) fail('Notice déjà existante', 409);
    if (fs.existsSync(path.join(this.trashDir, id + '.md'))) fail('Cette id est dans la corbeille : restaure-la ou choisis un autre id', 409);
    const data = {
      schema: 'lexique-jigme/v1',
      id,
      terme: String(input.terme || '').trim(),
      sens: String(input.sens || '').trim(),
      categorie: String(input.categorie || 'geste').trim(),
      formes: Array.isArray(input.formes) ? input.formes : [String(input.terme || id)],
      explication: String(input.explication || '').trim(),
      references: Array.isArray(input.references) ? input.references.map(String) : [],
      hidden: false,
    };
    this.validate(id, data, { allowHidden: false });
    const body = `\n# ${data.terme}\n\nNotice ajoutée depuis l'admin préprod.\n`;
    const raw = dump(data, body);
    // Base = version initiale Fly (pas encore une relecture NAS).
    fs.writeFileSync(path.join(this.baseDir, id + '.md'), raw, { flag: 'wx' });
    fs.writeFileSync(path.join(this.dir, id + '.md'), raw, { flag: 'wx' });
    return this.read(id);
  }

  remove(id, expectedSha) {
    const file = this.file(id);
    const raw = fs.readFileSync(file, 'utf8');
    this.requireSha(raw, expectedSha);
    const refs = this.referencedBy(id);
    // Soft-delete même si référencée : projection publique ignore déjà hidden/supprimée.
    const trash = path.join(this.trashDir, id + '.md');
    if (fs.existsSync(trash)) fail('Une version est déjà en corbeille pour cet id', 409);
    this.atomicWrite(file, raw, raw, expectedSha); // historique de la version courante
    fs.renameSync(file, trash);
    return { ok: true, id, trashed: true, referencedBy: refs, warning: refs.length ? 'Notice encore référencée par des pilotes : absente du site tant qu’elle est en corbeille.' : null };
  }

  restore(id) {
    if (!ID.test(id)) fail('id invalide');
    const trash = path.join(this.trashDir, id + '.md');
    if (!fs.existsSync(trash)) fail('Notice absente de la corbeille', 404);
    if (fs.existsSync(path.join(this.dir, id + '.md'))) fail('Une notice active porte déjà cet id', 409);
    fs.renameSync(trash, path.join(this.dir, id + '.md'));
    return this.read(id);
  }

  export(id) {
    const notice = this.read(id);
    return {
      filename: id + '.md',
      markdown: fs.readFileSync(this.file(id), 'utf8'),
      sha: notice.sha,
      baseSha: notice.baseSha,
      obsidianPending: notice.obsidianPending,
      obsidianPath: notice.obsidianPath,
      nasWriteEnabled: OBSIDIAN_NAS_WRITE,
    };
  }

  /** Importe un Markdown Obsidian vers Fly (sens Obsidian→site). N’écrit jamais le NAS. */
  importMarkdown(id, markdown, { expectedSha = null } = {}) {
    if (!ID.test(id)) fail('id invalide');
    const { data, body } = parse(markdown);
    if (data.id && data.id !== id) fail('id du fichier différent de la route');
    data.id = id;
    data.schema = 'lexique-jigme/v1';
    if (!Array.isArray(data.references)) data.references = [];
    this.validate(id, data);
    const next = dump(data, body);
    const file = path.join(this.dir, id + '.md');
    const base = path.join(this.baseDir, id + '.md');
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      if (expectedSha) this.requireSha(raw, expectedSha);
      else if (hash(raw) !== hash(next)) fail('Import refusé sans expectedSha : la notice Fly diffère du Markdown fourni', 409);
      this.atomicWrite(file, next, raw, hash(raw));
    } else {
      fs.writeFileSync(file, next, { flag: 'wx' });
    }
    // La base devient la version Obsidian importée (empreinte de comparaison).
    fs.writeFileSync(base, next);
    return this.read(id);
  }

  /**
   * Écriture site→Obsidian NAS : construite mais refusée tant que OBSIDIAN_NAS_WRITE≠1.
   * Aucun connecteur NAS n’est appelé ici.
   */
  pushToObsidian(id) {
    const notice = this.read(id);
    const payload = {
      path: notice.obsidianPath,
      markdown: fs.readFileSync(this.file(id), 'utf8'),
      sha: notice.sha,
    };
    if (!OBSIDIAN_NAS_WRITE) {
      return {
        ok: false,
        blocked: true,
        error: 'Écriture NAS Obsidian désactivée (OBSIDIAN_NAS_WRITE≠1). Export Markdown disponible ; OK direct de Jigmé requis pour activer.',
        wouldWrite: payload,
      };
    }
    fail('Connecteur d’écriture NAS non branché dans cette API (sécurité). Utiliser le flux validé par Jigmé.', 501);
  }

  project(html, slug) {
    const mapping = this.refs[slug];
    if (!mapping) return html;
    return html.replace(/(<script type="application\/json" id="rj-data">)([\s\S]*?)(<\/script>)/, (_, a, raw, b) => {
      const j = JSON.parse(raw), r = j.RECETTE;
      if (!r || r.slug !== slug) fail('Projection lexique : recette inattendue', 500);
      for (const [variant, entries] of Object.entries(mapping)) {
        for (const [id, ref] of Object.entries(entries)) {
          if (ref !== 'Cuisine/Lexique/' + id + '.md' || !r.lexique_local?.[variant]?.[id]) {
            fail('Projection lexique : référence pilote absente ' + id, 500);
          }
          if (!fs.existsSync(path.join(this.dir, id + '.md'))) {
            delete r.lexique_local[variant][id];
            continue;
          }
          const n = this.read(id);
          if (n.hidden) {
            delete r.lexique_local[variant][id];
            continue;
          }
          const { ref: _drop, ...prev } = r.lexique_local[variant][id];
          r.lexique_local[variant][id] = {
            ...prev,
            terme: n.terme,
            explication: n.explication,
            formes: n.formes,
          };
        }
      }
      return a + JSON.stringify(j).replace(/</g, '\\u003c') + b;
    });
  }
}
