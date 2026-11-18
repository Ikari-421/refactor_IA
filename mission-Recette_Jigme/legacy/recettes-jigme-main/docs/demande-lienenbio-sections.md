# « En construction » par rubrique : ce que Recettes attend du back (à demander à Lien en bio)

État au 16/11/2026, 18:20 Europe/Paris (préprod) : les routes du back n'existent pas encore. Contrôle en lecture seule depuis la VM Recettes vers
`preprod-back-jigme.flycast`, avec et sans clé : `GET /api/v1/recettes/sections` → 404, `GET /api/admin/recettes/sections` → 404,
`GET /api/v1/admin/recettes/sections` → 404 (pris pour une fiche nommée « sections »). Aucun contrat dans `/workspace/plans/`.
Recettes ne crée **pas** de stockage parallèle. `GET/PUT /api/v1/admin/restaurants/construction` n'est pas livré tant que le back n'a pas ces routes.

## Décision de Jigmé (rappel)
Un document de réglages Recettes dans le back, avec une section par rubrique (`restaurants`, `materiel`, `livres`). Chaque section a une case
« en construction » (comme l'interrupteur `maintenance` de Lien), avec une carte personnalisable qui suit le schéma des cartes de liens affiliés.
Quand la case est cochée, la rubrique publique ne montre que la carte. La préprod reste éditable. Jigmé décoche la case le jour du déploiement.

## Demande à Lien en bio
1. `GET /api/v1/recettes/sections` (public, sans clé, cache court comme `/api/v1/public/lien/switches`) :
   ```json
   { "ok": true, "sha": "<sha du document>",
     "sections": {
       "restaurants": { "on": true, "since": "2026-11-16T17:00:00Z",
         "card": { "title": "🍽️ Restaurants", "text": "Bientôt…", "href": null, "external": false, "background": "linear-gradient(…)", "image": null, "caption": null } },
       "materiel": { "on": false, "since": null, "card": null },
       "livres":   { "on": false, "since": null, "card": null } } }
   ```
   `card` : même schéma que `links[].card` de `/api/v1/public/lien/links?section=materiel`
   (`title`, `href`, `external`, `background`, `image`, `caption`), plus un `text` facultatif (paragraphe sous le titre).
2. `GET /api/admin/recettes/sections` et `POST /api/admin/recettes/sections` (clé admin Recettes `BACK_RECETTES_WRITE_KEY`, portée d'écriture recettes) :
   corps `{ "expectedSha": "<sha>", "section": "restaurants", "on": true, "card": { … } }` (ou `If-Match`). `409 { ok:false, error, currentSha }`
   si le sha est périmé. `400` si la section est inconnue, si une URL n'est pas en https, ou si un texte contient du HTML. `since` est posé par le back
   au passage à `on: true` et remis à `null` au passage à `false`. Audit, puis événement outbox `cuisine.sections.modifie { section, sha, at }`
   vers le webhook Recettes, comme les autres événements `cuisine.*`.
3. Rien en prod tant que Jigmé ne l'a pas validé. La prod lira le même document le jour de la bascule.

## Ce que Recettes fera ensuite (préprod)

> Fait en v255 (back v47) : voir docs/editeur-recettes.md §7 et D63.
- `GET/PUT /api/v1/admin/restaurants/construction` : relais vers la section `restaurants`, sans copie locale.
  Format Admin : `{ actif, titre, texte, lien? }` ↔ `{ on, card: { title, text, href } }`, version = `sha`, 409 `{ ok, error, currentSha }`.
  Il faudra réserver `construction` dans les slugs de restaurants : aujourd'hui `/api/v1/admin/restaurants/<slug>` le prendrait pour un slug.
- Au webhook `cuisine.sections.modifie` : régénération ciblée de `/restaurants/` (bannière seule si `on`, contenu réel sinon) et des pages
  `/restaurants/<slug>/` (masquées derrière la bannière si `on`).
- Gabarit de la carte : celui des liens affiliés, `a.rj-link-card` (fond `.rj-link-card-bg`, voile `.rj-link-card-veil`, flèche
  `.rj-link-card-arrow`, `h2`), déjà dans le build (`affiliesHtml`, generate-pages.mjs), avec le même design que les cartes Matériel et Livres
  de Lien en bio. Sans `href`, la carte est un `div.rj-link-card` sans flèche.

## Matériel & livres
Il n'y a aujourd'hui ni bannière matériel ni onglet « Matériel & livres ». La pilule a trois onglets (Recettes, Restaurants, Liens affiliés), et
« Liens affiliés » ne contient que les deux cartes `rj-link-card` (Mon matériel, Livres) vers Amazon. La section `materiel` (et `livres`) du document
servira quand l'onglet sera construit (lancement prévu après la prod, sous « En construction »).
