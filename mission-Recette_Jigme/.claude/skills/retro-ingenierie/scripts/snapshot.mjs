#!/usr/bin/env node
// Photo HTML d'une app web : parcourt les liens internes depuis une URL
// et sauvegarde le HTML rendu après JavaScript, plus les appels API observés.
// Lecture seule : toute requête autre que GET est bloquée.
//
// Usage : node snapshot.mjs <url> [--max-pages 200] [--out docs/01-moa/snapshot]

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const args = process.argv.slice(2);
const start = args[0];
if (!start || start.startsWith('--')) {
  console.error('Usage : node snapshot.mjs <url> [--max-pages 200] [--out docs/01-moa/snapshot]');
  process.exit(1);
}
const option = (name, defaut) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : defaut;
};
const maxPages = Number(option('--max-pages', 200));
const outDir = option('--out', 'docs/01-moa/snapshot');

const origin = new URL(start).origin;
const EXCLUS = /(logout|deconnexion|déconnexion|signout|delete|supprimer)/i;

const normaliser = (href) => {
  const u = new URL(href);
  u.hash = '';
  return u.toString();
};
const idDe = (url) => {
  const u = new URL(url);
  const slug = (u.pathname + u.search).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 60) || 'accueil';
  return `${slug}-${createHash('sha1').update(url).digest('hex').slice(0, 8)}`;
};

await mkdir(path.join(outDir, 'pages'), { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();
const appels = [];

// Lecture seule : on bloque tout ce qui n'est pas GET.
await context.route('**/*', (route) => {
  const req = route.request();
  if (req.method() !== 'GET') {
    appels.push({ methode: req.method(), url: req.url(), bloque: true });
    return route.abort();
  }
  return route.continue();
});

// Appels API observés (sans les en-têtes, pour ne pas enregistrer de secrets).
context.on('response', (res) => {
  const req = res.request();
  if (['xhr', 'fetch'].includes(req.resourceType())) {
    appels.push({ methode: req.method(), url: req.url(), statut: res.status() });
  }
});

const file = [normaliser(start)];
const vus = new Set(file);
const pages = [];
const page = await context.newPage();

while (file.length && pages.length < maxPages) {
  const url = file.shift();
  const entree = { id: idDe(url), url };
  try {
    const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    entree.statut = res ? res.status() : null;
    entree.titre = await page.title();
    await writeFile(path.join(outDir, 'pages', `${entree.id}.html`), await page.content());

    const liens = await page.$$eval('a[href]', (as) => as.map((a) => a.href));
    for (const href of liens) {
      let u;
      try { u = normaliser(href); } catch { continue; }
      if (new URL(u).origin !== origin || vus.has(u) || EXCLUS.test(u)) continue;
      vus.add(u);
      file.push(u);
    }
  } catch (e) {
    entree.erreur = e.message.split('\n')[0];
  }
  pages.push(entree);
  console.log(`${String(pages.length).padStart(4)}  ${entree.statut ?? 'ERR'}  ${url}`);
}

await browser.close();

await writeFile(
  path.join(outDir, 'index.json'),
  JSON.stringify({ depart: start, date: new Date().toISOString(), pages, restantes: file }, null, 2),
);
await writeFile(path.join(outDir, 'appels-api.json'), JSON.stringify(appels, null, 2));

console.log(`\n${pages.length} pages sauvegardées dans ${outDir}, ${file.length} restantes non visitées, ${appels.length} appels API.`);
