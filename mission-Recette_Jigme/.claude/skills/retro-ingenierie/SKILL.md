---
name: retro-ingenierie
description: Rétro-ingénierie d'une app web legacy. Première étape, prendre une photo HTML de toute l'app (toutes les pages accessibles depuis une URL, HTML rendu après JavaScript, appels API observés) dans docs/01-moa/snapshot/. À utiliser quand on démarre l'analyse d'une app legacy, ou quand on demande un snapshot, une photo ou un crawl de l'app.
---

# Rétro-ingénierie

Pour l'instant, ce skill ne fait qu'une étape : la photo HTML de l'app. Les étapes suivantes (inventaire fonctionnel, règles métier, scénarios) s'appuieront sur cette photo.

## Prérequis

- L'app legacy tourne et répond à une URL, en local de préférence.
- Elle tourne sur une **copie** de la base de données. Si l'utilisateur ne l'a pas confirmé, le lui demander avant de lancer.
- Playwright est installé dans le dépôt de mission : `npm install --save-dev playwright`, puis `npx playwright install chromium`.

## Étapes

1. Obtenir l'URL de départ de l'app. Si elle n'est pas donnée, la demander.
2. Lancer, depuis la racine du dépôt de mission :
   `node .claude/skills/retro-ingenierie/scripts/snapshot.mjs <url> --max-pages 500`
3. Lire `docs/01-moa/snapshot/index.json` et faire un compte rendu court : nombre de pages sauvegardées, pages en erreur, pages restantes non visitées, nombre d'appels API observés. Si la limite de pages est atteinte, proposer de relancer avec une limite plus haute.

## Règles

- Ne jamais modifier `legacy/`.
- Ne pas analyser le contenu des pages à cette étape : la photo d'abord, l'analyse ensuite.
- Le script ne fait que des requêtes GET. Il bloque les autres et ne suit pas les liens de déconnexion ou de suppression.
