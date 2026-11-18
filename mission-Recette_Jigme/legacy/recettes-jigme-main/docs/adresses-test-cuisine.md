# Adresses à tester — préfixe `/cuisine` (D29)

Hôte de test préprod (direct) : `https://recettes-jigme-preprod.fly.dev`

Via le proxy Lien en bio (même chemins, préfixe conservé) : `https://preprod-lienenbio-jigme.fly.dev`  
Le middleware doit relayer `/cuisine/` avec `X-Forwarded-Prefix: /cuisine` (et `/restaurants/` avec `X-Forwarded-Prefix: /restaurants`). `/cuisine/api/*` doit rester en 404 côté proxy.

Canoniques, `og:url` et JSON-LD : toujours `https://jigme.fr/cuisine/…` ou `https://jigme.fr/restaurants/…` (jamais l’hôte fly.dev). Les images de partage (recettes et restaurants) sont sous `/cuisine/img/`.

Rien à tester sur `recettes.jigme.fr` (pas de DNS, aucun 301 externe).

Script : `python3 scripts/test-prefixes-d29.py`

## Pages `/cuisine/` (200)

| Adresse | Statut attendu | Notes |
|---|---|---|
| `/cuisine/` | 200 | Accueil. Canonical `https://jigme.fr/cuisine/` |
| `/cuisine/r/creme-brulee/` | 200 | Fiche recette |
| `/cuisine/r/tagliatelles-carbonara/` | 200 | 2ᵉ fiche pilote |
| `/cuisine/c/sale/` | 200 | Catégorie |
| `/cuisine/c/sucre/` | 200 | Catégorie |
| `/cuisine/c/boissons/` | 200 | Catégorie |
| `/cuisine/sitemap.xml` | 200 | Sitemap recettes, URL `https://jigme.fr/cuisine/…` |
| `/cuisine/idx.json` | 200 | Index |
| `/cuisine/img/banniere-hero.webp` | 200 | Image de partage / bannière |
| `/cuisine/img/p/creme-brulee.webp` | 200 | Photo de fiche (recettes et restaurants partagent `/cuisine/img/`) |
| `/cuisine/favoris/` | 200 | noindex, hors sitemap |
| `/cuisine/affilies/` | 200 | noindex, hors sitemap |

## Pages `/restaurants/` (200, préfixe inchangé)

| Adresse | Statut attendu | Notes |
|---|---|---|
| `/restaurants/` | 200 | Accueil restaurants (noindex tant qu’aucune vraie fiche) |
| `/restaurants/le-petit-leon/` | 200 | Fiche |
| `/restaurants/burger-test-express/` | 200 | Fiche test, noindex, hors sitemap |
| `/restaurants/table-test-etoilee/` | 200 | Fiche test, noindex, hors sitemap |
| `/restaurants/sitemap.xml` | 200 | Sitemap valide (vide tant qu’il n’y a pas de vraie fiche) |

## 301 — un seul saut, Location relative, query conservée

| Adresse demandée | Statut | Location |
|---|---|---|
| `/` | 301 | `/cuisine/` |
| `/cuisine` | 301 | `/cuisine/` |
| `/restaurants` | 301 | `/restaurants/` |
| `/restaurants/le-petit-leon` | 301 | `/restaurants/le-petit-leon/` |
| `/recettes` | 301 | `/cuisine/` |
| `/recettes/` | 301 | `/cuisine/` |
| `/recettes/index.html` | 301 | `/cuisine/` |
| `/recettes/r/creme-brulee/` | 301 | `/cuisine/r/creme-brulee/` |
| `/recettes/r/creme-brulee/?n=4` | 301 | `/cuisine/r/creme-brulee/?n=4` |
| `/recettes/c/sale/` | 301 | `/cuisine/c/sale/` |
| `/recettes/favoris/` | 301 | `/cuisine/favoris/` |
| `/recettes/affilies/` | 301 | `/cuisine/affilies/` |
| `/recettes/sitemap.xml` | 301 | `/cuisine/sitemap.xml` |
| `/recettes/img/banniere-hero.webp` | 301 | `/cuisine/img/banniere-hero.webp` |
| `/recettes/r/pain-cuit-a-la-cocotte/` | 301 | `/cuisine/r/pain-a-la-cocotte/` |
| `/cuisine/r/pain-cuit-a-la-cocotte/` | 301 | `/cuisine/r/pain-a-la-cocotte/` |
| `/recettes/r/delicieuse-tarte-poires-et-chocolat-youcookcuisine/` | 301 | `/cuisine/r/tarte-poire-chocolat/` |
| `/cuisine/r/delicieuse-tarte-poires-et-chocolat-youcookcuisine/` | 301 | `/cuisine/r/tarte-poire-chocolat/` |
| `/recettes/restaurant` | 301 | `/restaurants/` |
| `/recettes/restaurant/` | 301 | `/restaurants/` |
| `/recettes/restaurant/le-petit-leon/` | 301 | `/restaurants/le-petit-leon/` |
| `/recettes/restaurant/le-petit-leon` | 301 | `/restaurants/le-petit-leon/` |
| `/recettes/restaurant/?adresse=Sarlat` | 301 | `/restaurants/?adresse=Sarlat` |
| `/cuisine/restaurant` | 301 | `/restaurants/` |
| `/cuisine/restaurant/` | 301 | `/restaurants/` |
| `/cuisine/restaurant/le-petit-leon/` | 301 | `/restaurants/le-petit-leon/` |
| `/cuisine/restaurant/le-petit-leon` | 301 | `/restaurants/le-petit-leon/` |
| `/cuisine?utm_source=seo-test&x=1` | 301 | `/cuisine/?utm_source=seo-test&x=1` |
| `/restaurants?utm_source=seo-test&x=1` | 301 | `/restaurants/?utm_source=seo-test&x=1` |
| `/cuisine/r/creme-brulee?utm_source=seo-test&x=1` | 301 | `/cuisine/r/creme-brulee/?utm_source=seo-test&x=1` |
| `/cuisine/c/sale?utm_source=seo-test&x=1` | 301 | `/cuisine/c/sale/?utm_source=seo-test&x=1` |
| `/cuisine/r/pain-cuit-a-la-cocotte/?utm_source=seo-test&x=1` | 301 | `/cuisine/r/pain-a-la-cocotte/?utm_source=seo-test&x=1` |
| `/cuisine/r/delicieuse-tarte-poires-et-chocolat-youcookcuisine/?utm_source=seo-test&x=1` | 301 | `/cuisine/r/tarte-poire-chocolat/?utm_source=seo-test&x=1` |
| `/?utm_source=seo-test&x=1` | 301 | `/cuisine/?utm_source=seo-test&x=1` |
| `/recettes?utm_source=seo-test&x=1` | 301 | `/cuisine/?utm_source=seo-test&x=1` |
| `/recettes/r/pain-cuit-a-la-cocotte/?utm_source=seo-test&x=1` | 301 | `/cuisine/r/pain-a-la-cocotte/?utm_source=seo-test&x=1` |
| `/cuisine/index.html?utm_source=seo-test&x=1` | 301 | `/cuisine/?utm_source=seo-test&x=1` |
| `/cuisine/r/creme-brulee/index.html?utm_source=seo-test&x=1` | 301 | `/cuisine/r/creme-brulee/?utm_source=seo-test&x=1` |
| `/restaurants/le-petit-leon?utm_source=seo-test&x=1` | 301 | `/restaurants/le-petit-leon/?utm_source=seo-test&x=1` |
| `/cuisine/favoris?utm_source=seo-test&x=1` | 301 | `/cuisine/favoris/?utm_source=seo-test&x=1` |

## API admin (inchangée)

| Adresse | Statut attendu | Notes |
|---|---|---|
| `/api/admin/v1/health` | 200 | Contrat v1 à la racine du nom fly.dev, hors préfixe |
| `/api/admin/v1/recipes` | 401 | sans `Authorization` |
| `/api/admin/health` | 410 | ancien chemin retiré |
