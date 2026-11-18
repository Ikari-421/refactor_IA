# Passage de recettes.jigme.fr à jigme.fr/recettes, puis jigme.fr/cuisine

**D29 (12/11/2026)** : le préfixe de base `/recettes` devient **`/cuisine`** (jigme.fr/cuisine/, /cuisine/r/<slug>/, /cuisine/c/<catégorie>/). `/restaurants` ne change pas. Décision de Jigmé, relayée par Superviseur Sites. 301 internes `/recettes/*` → `/cuisine/*` (chemin et query conservés, un seul saut). Images de partage (y compris restaurants) sous `/cuisine/img/`. Préfixe toujours paramétrable (`BASE_PATH` dans `honeypot/paths.mjs`). Liste de test : `docs/adresses-test-cuisine.md`. Script : `scripts/test-prefixes-d29.py`. Rien en prod, aucun DNS, aucune écriture NAS.

Le plan ci-dessous est le chiffrage initial **D28** (11/11/2026). Il reste la référence historique du passage sous jigme.fr ; lire D29 dans `docs/DECISIONS.md` pour le renommage /recettes → /cuisine.

Références : plan Lien en bio `/workspace/plans/bascule-jigme-fr.md` §2-3 ; Référencement `/workspace/referencement/migration/BALISES.md` et `redirections.csv` (318 correspondances, liste de test du proxy).

## 1. Constats
- **DNS** (DoH Cloudflare, 11/11 17:35) : `recettes.jigme.fr` et `recette.jigme.fr` → NXDOMAIN. Premier lancement : **aucun 301 historique à prévoir**, aucun signet d'internaute à migrer.
- **Fly** (org personal) : `recettes-jigme-preprod` a seulement des IP publiques, **pas de flycast**. L'appli prod `recettes-jigme` n'existe pas.
- Build préprod local de test (v202, `preprod-version.txt` remis à 201, rien déployé) : 319 pages HTML (accueil, 309 recettes, 3 catégories, signets, affiliés, Restaurants + 3 fiches), 4 400 fichiers ; sitemap 313 URL ; **13 363** attributs `href/src/srcset/action/data-*` en racine dans le HTML généré ; **4 081** occurrences de `https://recettes.jigme.fr` (canonical, OG, JSON-LD).
- Absents : RSS/Atom, manifest, service worker, hreflang.

## 2. Audit du code source (occurrences `rg`, fichiers suivis, hors sauvegardes)
| Catégorie | Total | Fichiers |
|---|---|---|
| Hôte `recettes.jigme.fr` | 9 | build.mjs 3 (PROD l.244, SITE_BASE l.439) ; check-seo.mjs 2 ; tests/restaurants.test.mjs 2 ; src/share.js 1 (`SITE`) ; honeypot/restaurants-admin.mjs 1 (PROD JSON-LD) |
| Hôte `recettes-jigme-preprod.fly.dev` | 7 | honeypot/server.mjs 4 (texte d'alerte) ; honeypot/admin-api.mjs 1 (**og:image absolue du patch HTML**, l.223) ; build.mjs 1 ; verif-vignettes.mjs 1 |
| `lienenbio.jigme.fr` / `preprod-lienenbio` | 14 | build.mjs 8 (garde-fou prod, mentions légales, confidentialité, retour bio, contact) ; src/footer.js 1 + footer-src/footer.tsx 1 (mediakit) ; fly.prod.toml 1 |
| Routes racine `/r/ /c/ /restaurant/ /favoris/ /affilies/` | 113 | build.mjs 15 ; honeypot/restaurants-render.mjs 10 ; src/features.js 5 ; src/home.js 4 ; honeypot/visibility.mjs 4 ; honeypot/visibility-proxy.conf 4 ; src/restaurants.js 3 ; check-seo.mjs 3 ; src/favoris.js 2 ; nginx.conf 2 ; src/site-tabs.js 1 (minifié, sans source) ; src/style.css 1 ; src/home-ui.css 1 ; ssr.mjs 1 ; restaurants-admin.mjs 1 ; admin-api.mjs 1 ; verif-vignettes.mjs 1 ; tests 25 |
| Assets racine `/img/ /fonts/ /icons/ /vendor/` | 52 | build.mjs 21 ; honeypot/admin-api.mjs 6 (patch `?v=` photos) ; nginx.conf 3 ; restaurants-render.mjs 2 ; restaurants-domain.mjs 2 ; 1 chacun : src/share.js, src/restaurants.js, src/home-ui.css, src/footer.js, src/features.js, restaurants-admin.mjs, verif-vignettes.mjs ; tests 3 |
| `idx.json`, sitemap, robots, favicons | 16 | visibility.mjs 4 ; visibility-proxy.conf 2 ; build.mjs 2 ; src/features.js 1 (`fetch('/idx.json')`) ; nginx.conf 1 ; tests 1 |
| Liens nus `href="/"` | 7 | build.mjs 5 ; src/features.js 1 ; src/favoris.js 1 |
| URL côté client (`location.*`, `fetch`, `history`) | 63 | src/home.js 11 ; src/share.js 6 ; src/app.js 4 ; src/features.js 3 ; site-tabs.js 1 ; restaurants.js 1 (API adresse externe, OK) ; build.mjs 1 ; tests 16 |
| Regex de chemins (`\/r\/`, `\/img\/`) | 14 | build.mjs 5 ; visibility.mjs 3 ; restaurants-render.mjs 2 ; admin-api.mjs 2 ; restaurants-domain.mjs 1 ; src/features.js 1 |
| `localStorage` / `sessionStorage` | 52 | app.js 13 ; home.js 9 ; home-random.js 4 ; features.js 4 ; religion.js 2 ; autres 1. Clés toutes en `rj-` (`rj-favs` = signets), aucun chemin dans les clés |
| JSON-LD (Recipe, BreadcrumbList, Review) | 14 | build.mjs 4 ; restaurants-render.mjs 3 ; ssr.mjs 1 |
| canonical / og:url / og:image | 36 | build.mjs (`seoHead`, PROD ×20) ; restaurants-render.mjs 4 ; check-seo.mjs 4 ; admin-api.mjs 2 |

Serveur : `nginx.conf` (34 lignes : root, 301 internes, cache par chemin, 404) ; `honeypot/hp.conf` (leurres + `/api/admin/`) ; `honeypot/visibility-proxy.conf` (fiches masquées via Node ; **redirections Node sans préfixe**) ; `Dockerfile` ; `fly.toml` (pas de healthcheck HTTP) ; `fly.prod.toml`.

## 3. Mécanisme recommandé (aligné sur Lien en bio)
- **Build** : `BASE=/recettes`, `PROD=https://jigme.fr/recettes`, une fonction `u(path)` pour tout chemin ; `window.RJ_BASE` pour le JS client ; `LIENENBIO_URL` = `CONTACT_BASE` = `https://jigme.fr` (garde-fou de build mis à jour) ; liens légaux et mediakit en `/mentions-legales`, `/confidentialite`, `/mediakit` ; retour bio `/`.
- **SEO** : canonical, og:url, og:image, twitter:image, JSON-LD Recipe (`url`, `image[]`) et BreadcrumbList (`item`) en `https://jigme.fr/recettes/…` ; sitemap `https://jigme.fr/recettes/sitemap.xml` (le `robots.txt` de jigme.fr, côté lien en bio, le déclare) ; noindex + hors sitemap pour burger-test-express, table-test-etoilee, `/favoris/`, `/affilies/` (si Jigmé confirme).
- **Serveur** : site copié dans `/usr/share/nginx/html/recettes/` ; nginx sous `location /recettes/` (301 internes, cache, 404 `/recettes/404.html`) ; `location = /` → 301 `/recettes/` ; **barre finale conservée**, `absolute_redirect off` (déjà) + `port_in_redirect off` : Location toujours relatives, jamais vers `recettes-jigme.flycast` ; une seule redirection `/recettes/r/x` → `/recettes/r/x/`, sans boucle (test sur les 318 URL de Référencement).
- **Préfixe conservé** par le proxy : mêmes URL en direct et via jigme.fr.
- **En-têtes proxy** (proposition Lien en bio, validée) : `Host` = cible flycast ; `X-Forwarded-Host: jigme.fr` ; `X-Forwarded-Proto: https` ; `X-Forwarded-Prefix: /recettes` ; `X-Forwarded-For`/`Fly-Client-IP` d'origine ; `Accept-Encoding` transmis ; `Cache-Control` relayé ; **Cookie retiré** ; CSP de Recettes non écrasée ; `/recettes/api/*` → 404 côté jigme.fr.
- **Admin** : contrat v1 inchangé, API à la racine `https://recettes-jigme-preprod.fly.dev/api/admin/v1/` (hors préfixe, jamais via jigme.fr). Pas de CORS (BFF serveur à serveur), pas de cookie. À adapter côté Recettes : patch HTML (admin-api, visibility, restaurants-*) avec chemins préfixés et URL absolues jigme.fr ; champs `url` renvoyés (`/restaurant/slug/`) → `/recettes/restaurant/slug/` (valeur, pas schéma : prévenir le BFF).
- **Préprod** : `https://recettes-jigme-preprod.fly.dev/recettes/` en direct ; via `https://preprod-lienenbio-jigme.fly.dev/recettes/` → `recettes-jigme-preprod.flycast` (IP privée à allouer) ou `.internal:8080`.
- **Healthcheck** : aucun aujourd'hui ; proposer `GET /recettes/` (200) ou `location = /healthz`.
- **Honeypot** : leurres et API restent à la racine du nom fly.dev préprod, non exposés sous jigme.fr.

## 4. Points bloquants
1. **Pas de flycast sur la préprod** : `fly ips allocate-v6 --private -a recettes-jigme-preprod` (OK requis) ou `.internal:8080` (une machine chaude : déjà `min_machines_running = 1`).
2. Redirections Node (`visibility.mjs`) et `og:image` du patch admin en dur : à préfixer, sinon liens cassés.
3. `src/site-tabs.js` minifié sans source : édition à la main, prudente.
4. Même origine que le lien en bio : localStorage partagé (clés `rj-`, collision à exclure côté lien en bio), cookie media kit à ne pas relayer, CSP séparées.

## 5. Effort estimé : environ 17 h (fourchette 15 à 21 h)
| Bloc | Heures |
|---|---|
| build.mjs : base, `u()`, canonical/OG/JSON-LD/sitemap, liens légaux, garde-fous, noindex des pages exclues | 3,5 |
| JS/CSS client (dont site-tabs.js minifié) | 2,5 |
| nginx.conf, Dockerfile, visibility-proxy.conf, hp.conf, `/` → 301, barre finale, healthcheck | 2 |
| API admin et patch HTML (admin-api, visibility, restaurants-render/admin) | 2,5 |
| check-seo.mjs, tests (empreintes dist à régénérer une fois, snapshot API, visibility) | 2 |
| Préprod : déploiement + test des 318 URL (direct et via preprod-lienenbio) + navigateur | 2,5 |
| Docs, coordination Lien en bio / Référencement | 1 |
| Option : Restaurants sorti vers `jigme.fr/restaurants` | +3 |
| Option : export/import des signets de test | +1 |

## 6. Risques
- Signets `rj-favs` : liés à l'origine, ne suivent pas de fly.dev vers jigme.fr. Impact réel nul (aucune prod publique), sauf signets de test de Jigmé.
- Cache : toutes les URL changent une fois (premier passage froid) ; `?v=hash` inchangé.
- Démarrage à froid derrière le proxy : `min_machines_running = 1` en prod.
- Bande blanche iPhone : non concernée (pas de changement de mise en page).
- Search Console : propriété domaine jigme.fr, pas d'ancien site à déplacer.

## 7. Décisions pour Jigmé
1. Préfixe **conservé** par le proxy (recommandé) : OK ?
2. recettes.jigme.fr / recette.jigme.fr : ne rien faire (recommandé) ou réserver par une 301 Cloudflare générique (DNS : son OK).
3. Restaurants et Affiliés sous `/recettes/restaurant/` et `/recettes/affilies/` (recommandé, coût nul) ou `jigme.fr/restaurants` (+3 h).
4. noindex + hors sitemap : burger-test-express, table-test-etoilee, `/favoris/`, `/affilies/` : OK ?
5. Flycast préprod : allouer l'IP privée sur `recettes-jigme-preprod` ou passer par `.internal`.
6. Création de l'appli prod `recettes-jigme` (flycast, `min_machines_running = 1`, environ 2 €/mois) et **date de bascule**.
7. Signets de test : on les laisse (recommandé) ou export/import (+1 h).
8. Option fil d'Ariane : 1er niveau « Jigmé » `https://jigme.fr/` (proposé par Référencement) ?
