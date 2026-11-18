# Contrat API admin — Restaurants (préprod)

Pour le dashboard admin.jigme.fr (bot Lien en bio). Serveur : API admin existante de `recettes-jigme-preprod`
(`honeypot/admin-api.mjs` + `honeypot/restaurants-admin.mjs`, règles `honeypot/restaurants-domain.mjs`, rendu partagé avec le build `honeypot/restaurants-render.mjs`).

- **D28 (11/11 préprod v203)** : pages publiques sous `/recettes/` et `/restaurants/` ; les champs `url` renvoyés valent `/restaurants/<slug>/` (avant `/restaurant/…`). Base API inchangée (racine, hors préfixe).
- Base : `https://recettes-jigme-preprod.fly.dev/api/admin/v1` (contrat v1) ; l'ancien `…/api/admin` hors v1 est retiré depuis le 11/11/2026 (410) — **préprod uniquement**. Détail du contrat v1 : `docs/admin-preprod.md`.
- Auth : `Authorization: Bearer <RECETTES_ADMIN_SECRET>` (même secret que recettes/matériel/lexique). Sans, ou avec l'ancien `ADMIN_API_SECRET` : `401 {ok:false,error}`.
- JSON UTF-8 (`Content-Type: application/json`). Corps max : 256 Ko (création), 12 Mo (autres POST, photo comprise).
- Erreurs : `{ ok:false, error:"message en français" }` avec 400 (validation), 404 (introuvable), 409 (conflit / doublon), 413 (trop gros), 500.
- Santé : `GET /api/admin/health` → `restaurantsVersion: 1`.
- Stockage : un MD par restaurant sur le volume `/var/recettes-live/restaurants/<slug>.md` (frontmatter YAML). **NAS jamais écrit.**
- Effet : chaque écriture patche immédiatement le HTML servi (`/restaurants/<slug>/` et la liste `/restaurants/`), avec le même rendu que le build. Pas de rebuild.
- Persistance : au redémarrage/déploiement, les fiches éditées (`.md.bak` présent) ou créées par l'admin sont réappliquées sur le HTML ; une fiche jamais éditée suit le fichier du workspace (`restaurants/<slug>.md`). Pour rendre définitive une édition faite dans l'admin : recopier le MD du volume dans `restaurants/` du workspace avant le prochain build.

## Objet restaurant (schéma `restaurant-jigme/v1`)

| Champ | Type | Règle |
|---|---|---|
| `schema` | string | toujours `restaurant-jigme/v1` (lecture seule) |
| `slug` | string | `[a-z0-9-]`, ≤ 80, fixé à la création (non modifiable) |
| `nom` | string | 2–80 |
| `categorie` | enum | `etoile` \| `bistronomique` \| `brasserie` \| `fastfood` |
| `adresse` | string | 1–200 (rue / lieu-dit) |
| `code_postal` | string? | 5 chiffres |
| `ville` | string | 1–80 |
| `lat`, `lng` | number | −90…90 / −180…180 (WGS84) — géocoder côté dashboard avec api-adresse.data.gouv.fr si besoin |
| `date_review` | string | `AAAA-MM-JJ` (tri « reviews récentes » : plus récent d'abord, 3 premières en haut) |
| `photo` | string | chemin local `/img/….(webp\|jpg\|jpeg\|png\|avif)` ; jamais d'URL externe |
| `photo_alt` | string? | ≤ 200 (défaut : nom) |
| `extrait` | string | 20–220 (carte + chapô + meta description) |
| `note` | number? | 0–5 par pas de 0,5 (affichée « 4,5/5 », JSON-LD `reviewRating`) |
| `prix` | string? | ≤ 80 (ex. « 20 à 30 € ») |
| `test` | bool | `true` = bandeau « page de test » + `noindex` |
| `test_note` | string? | ≤ 300, texte du bandeau test |
| `hidden` | bool? | `true` = retiré de la liste et page review supprimée du HTML servi (réversible) |
| `blocs` | Bloc[] | ≤ 60 blocs, ordre = ordre d'affichage |

Champs optionnels : envoyer `null` pour effacer.

## Blocs (façon newsletter)

Chaque bloc : `{ id, type, … }`. `id` : `[a-z0-9][a-z0-9-]{0,39}`, unique dans la fiche, attribué par le serveur si absent. Champs inconnus ignorés.

| `type` | Champs | Limites |
|---|---|---|
| `titre` | `texte` | ≤ 160, requis |
| `paragraphe` | `texte` | ≤ 4000, requis ; ligne vide = nouveau paragraphe, retour simple = `<br>` ; texte brut (pas de HTML ni Markdown) |
| `image` | `src`, `alt?`, `legende?` | `src` chemin local `/img/…` ; alt ≤ 200 ; légende ≤ 300 |
| `galerie` | `images: [{ src, alt?, legende? }]` | 1–12 photos, mêmes règles que `image` |
| `citation` | `texte`, `auteur?` | ≤ 600 / ≤ 120 |
| `infos` | `adresse?`, `prix?`, `note?`, `horaires?`, `telephone?`, `site?` | adresse ≤ 200 (défaut : adresse + CP + ville de la fiche), prix ≤ 80 (défaut : fiche), note 0–5 pas 0,5 (défaut : fiche), horaires ≤ 300, téléphone ≤ 40, site URL `https://` ≤ 300 |

## Routes

### `GET /restaurants`
```json
{ "ok": true,
  "restaurants": [ { "slug": "le-petit-leon", "nom": "Le Petit Léon", "categorie": "bistronomique", "categorieLabel": "Bistronomique",
                     "ville": "Saint-Léon-sur-Vézère", "date_review": "2026-11-10", "photo": "/img/p/…webp", "extrait": "…",
                     "note": null, "test": true, "hidden": false, "blocs": 7, "url": "/restaurants/le-petit-leon/" } ],
  "categories": [ { "key": "etoile", "label": "Restaurants étoilés", "singulier": "Étoilé" }, … ],
  "blockTypes": ["titre","paragraphe","image","galerie","citation","infos"],
  "limits": { … }, "schema": "restaurant-jigme/v1" }
```
Liste triée par `date_review` décroissante (inclut les fiches `hidden`).

### `GET /restaurants/<slug>`
`{ ok, restaurant: <objet complet>, sha, url }` : `sha` = SHA-256 du fichier MD. Garder `sha` et le renvoyer en `expectedSha` pour détecter les conflits (409 si la fiche a changé entre-temps). `expectedSha` est optionnel sur toutes les écritures ; SHA-256 uniquement (l'ancien SHA-1 est refusé, 409, depuis v201).

### `POST /restaurants` — création
`{ "action": "create", "slug", "nom", "categorie", "adresse", "ville", "lat", "lng", "date_review", "extrait", "image"?, "photo"?, "photo_alt"?, …optionnels, "blocs"?: [] }`
→ 409 si le slug existe. Crée `/restaurants/<slug>/` et met à jour la liste. Corps : 12 Mo max.

Photo de couverture, par ordre de priorité (depuis le 11/11, v199) :
1. `image` : data URL JPG/PNG/WebP, 8 Mo décodés max (413 au-delà). Même ré-encodage que l'action `photo` avec `target: "cover"` : WebP ≤ 1600 px q78 + vignette 720 cover q74, fichiers `/img/resto/<slug>/<hash>.webp` et `<hash>-720.webp` (volume + HTML). `photo` est alors ignoré et rempli avec l'URL produite. `photo_alt` est optionnel.
2. `photo` : chemin local `/img/…` existant (comme avant).
3. Ni l'un ni l'autre : `photo` = `/img/banniere-hero.webp` (photo du site, toujours présente ; vignette `/img/banniere-hero-800.webp`). Jamais d'image cassée.

Création atomique : le slug, l'image (décodage et ré-encodage) et tous les champs sont validés avant toute écriture. En cas d'erreur (400 format ou image illisible, 413 trop lourde, 400 champ invalide), aucun fichier n'est créé. Si une étape échoue après l'écriture, le MD, les images et la page sont retirés.

Réponse : comme les autres écritures, avec en plus `image: { url, thumb, width, height }` si `image` a été fourni.

### `POST /restaurants/<slug>` — modifications (champ `action`)
| `action` | Corps | Effet |
|---|---|---|
| `save` (défaut) | n'importe quels champs du tableau (sauf `slug`/`schema`), `blocs?` (remplace tout) | fusion puis validation complète |
| `block-add` | `block`, `index?` (0…n, défaut fin) | insère |
| `block-update` | `id`, `block` (champs à changer ; `type` modifiable) | fusion sur le bloc |
| `block-delete` | `id` | supprime |
| `block-move` | `id`, `index` (position finale, 0…n-1) | déplace |
| `blocks-order` | `order: [ids]` (permutation exacte) | réordonne (glisser-déposer) |
| `blocks` | `blocs: [...]` | remplace la liste entière |
| `photo` | `image` (data URL JPG/PNG/WebP, 8 Mo max), `target: "cover"\|"library"`, `alt?` | ré-encodage WebP (≤ 1600 px + vignette 720 cover), fichiers `/img/resto/<slug>/<hash>.webp` et `<hash>-720.webp` (volume + HTML). `cover` : devient `photo` (+ `photo_alt` si `alt`). `library` : renvoie seulement `image.url` à mettre dans un bloc `image`/`galerie` |

Réponse des écritures : `{ ok:true, restaurant, sha, patch: { review:bool, listing:bool }, note }` (+ `image: { url, thumb, width, height }` pour `photo`).

## Rendu public (rappel)
- `/restaurants/` : 3 reviews récentes (cartes photo), filtres catégorie (catégorie vide = message), recherche par adresse (api-adresse.data.gouv.fr côté navigateur) + « Autour de moi », liste triée par distance (km, 0,1), carte Leaflet/OSM.
- `/restaurants/<slug>/` : JSON-LD `Restaurant` + `Review` (+ fil d'Ariane). `test: true` → `noindex` et hors sitemap.

## Soft-delete (corbeille volume)

### `POST /restaurants/<slug>` — `{ "action": "delete", "expectedSha": "<sha256 64 hex>" }`

Fiche déplacée dans `/var/recettes-live/restaurants/.trash/<slug>.md` (conservée, restaurable). Page HTML retirée tout de suite (comme `hidden`). Au démarrage (donc à chaque déploiement), `applyTrash()` retire à nouveau les pages des slugs encore en corbeille sur le volume et reprend la liste : une fiche du workspace mise à la corbeille ne réapparaît pas. Restore replace le MD et régénère la page. **NAS jamais écrit.**

- **200** `{ "ok": true, "slug": "<slug>" }`
- **400** `{ "ok": false, "error": "slug invalide" }`
- **400** `{ "ok": false, "error": "action inconnue (save, block-add, block-update, block-delete, block-move, blocks-order, blocks, photo, delete)" }` — `POST` sans `action` (ou `"save"`) reste un enregistrement.
- **401** `{ "ok": false, "error": "non autorisé" }`
- **404** `{ "ok": false, "error": "restaurant introuvable" }`
- **409** `{ "ok": false, "error": "conflit : la fiche a changé depuis la lecture (recharger)" }`
- **409** `{ "ok": false, "error": "une version est déjà en corbeille pour ce slug" }`
- **428** `{ "ok": false, "error": "empreinte de lecture requise (SHA-256)" }`

`GET /restaurants` ajoute `trash: [ { "slug", "nom", "sha", "deleted": true } ]`.

### `POST /restaurants/<slug>/restore`

Corps vide ou `{}`.

- **200** `{ "ok": true, "slug": "<slug>" }` — MD remis en place, page HTML régénérée, liste mise à jour.
- **400** `{ "ok": false, "error": "slug invalide" }`
- **401** `{ "ok": false, "error": "non autorisé" }`
- **404** `{ "ok": false, "error": "restaurant absent de la corbeille" }`
- **409** `{ "ok": false, "error": "un restaurant actif porte déjà ce slug" }`

