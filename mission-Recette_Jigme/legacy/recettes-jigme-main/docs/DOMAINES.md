# Carte des domaines — site recettes (recettes-jigme)

Rédigé le 11/11/2026 d'après le schéma de Jigmé (/workspace/superviseur/docs/schema-archi-ddd-2026-11-11.jpg) et la lecture du code. Document de proposition : aucun code n'a été modifié. Décisions associées : docs/DECISIONS.md (D19).

## 1. Le schéma de Jigmé, appliqué à ce site

```
ADMIN (admin.jigme.fr, dashboard Lien en bio)                         FRONT
 ├─ Lien ── base Lien                                                  (site public
 ├─ Media Kit                                                           recettes.jigme.fr)
 └─ Recette ── base Recette (MD) ⇄ Obsidian   ── API ──────────────▶
                     ↑ script     ↑ Hermès (Chef)
```

Ce dossier porte le **domaine Recette** (fiches, matériel, lexique, restaurants), sa base (les fichiers MD), son API admin et son front. Lien et Media Kit sont hors de ce dossier.

## 2. État actuel (vérifié dans le code le 11/11/2026)

| Fichier / dossier | Rôle réel | Mélange de responsabilités |
|---|---|---|
| `data/*.md` (309) | Copie locale des fiches `Cuisine/Recettes/Web` (schéma v2). Base du build et seed du volume. | — |
| `materiel/*.md` (15) | Fiches matériel affilié. | — |
| `lexique/*.md` (25 + `INDEX-nas.md`, `pilot-refs.json`) | Copie des notices `Cuisine/Lexique` (`lexique-jigme/v1`). | — |
| `restaurants/*.md` (3) | Reviews (`restaurant-jigme/v1`). | — |
| `src/lectures.json`, `titres.json`, `cuisines.json`, `categories-surcharge.json`, `verbes.json`, `dates-*.tsv` ; à la racine `overrides.json`, `photos-jigme.json` (et `sync-extra.json` s'il existe) | Surcharges locales et métadonnées appliquées au build sans toucher le NAS. | Données métier dispersées hors des MD. |
| `build.mjs` (631 lignes) | Tout le générateur : lecture YAML, corrections (`sanitize`, `accent`, tags, catégories), règles métier (régimes `catGroups`, VEGE, recettes proches, kcal), JSON-LD, HTML de toutes les pages, images (sharp), CSP (`csp.inc`), garde-fous prod (`TARGET`, `fly.prod.toml`). | Domaine + application + rendu + infra dans un seul fichier. |
| `ssr.mjs` | Pré-rendu ingrédients/étapes avec Playwright (lit `dist/`). | Adaptateur de rendu, correct. |
| `howto-name.mjs` | Règle `HowToStep.name`. | Règle de domaine, isolée : bon exemple. |
| `check.mjs`, `_valide-v2.mjs`, `_doses.mjs`, `_v.mjs` | Outils de relecture schéma v2 et doses (scripts ponctuels, chemins en dur pour `_v.mjs`). Depuis l'étape 2, les règles bloquantes sont dans `honeypot/recette-schema.mjs` (build + admin). | Règles d'avertissement encore séparées. |
| `check-seo.mjs` | Contrôle SEO de `dist/` (lancé par le build, échec au moindre écart). | Test de sortie, correct. |
| `src/logic.js` (UMD) | Calcul des doses (`resolve`, `scaleQty`, `scaleIng`, unités, `inflect`), régimes, allergènes, trois styles. Utilisé par le navigateur **et** par build.mjs. | Domaine pur partagé : bon point, mais mêlé à du texte d'interface. |
| `src/religion.js` | Compatibilités religieuses déduites (prudentes). | Domaine, utilisé par le front et le build. |
| `src/app.js`, `home.js`, `home-random.js`, `features.js`, `favoris.js`, `share.js`, `adapt-ui.js`, `site-tabs.js`, `restaurants.js`, `footer.js`, `drawer-stacking.js`, `banner-drawer-geom.js`, `*.css` | Front (interface, localStorage, carte Leaflet). `adapt-ui.js`, `site-tabs.js`, `footer.js` sont livrés minifiés. | Front, lit les données injectées dans le HTML (`rj-data`, `RECETTE`). |
| `honeypot/server.mjs`, `hp.conf`, `hp-proxy.inc` | Leurres préprod (alerte e-mail). | — |
| `honeypot/admin-api.mjs` (768 lignes) | Serveur HTTP admin : auth Bearer, routes, lecture/écriture MD sur le volume, validation v2, photos (sharp), patch du HTML servi, visibilité, réapplication au démarrage, service public de `/`, `/idx.json`, `/sitemap.xml` (visibilité). | HTTP + cas d'usage + accès fichiers + rendu HTML dans un fichier. Rangé sous `honeypot/` alors que ce n'est pas un leurre. |
| `honeypot/restaurants-domain.mjs` / `restaurants-render.mjs` | Depuis l'étape 1 (11/11) : règles (schéma, validation, tri, sans import ni I/O) et rendu HTML/JSON-LD/patch, partagés build/admin. Avant : un seul `restaurants-core.mjs`. | Séparé ; reste à ranger dans `domain/` et `adapters/rendu` (étape 8). |
| `honeypot/restaurants-admin.mjs` | Routes restaurants (stockage volume, SHA-256, photos, patch HTML). | Application + adaptateur. |
| `honeypot/lexique.mjs` (`LexiqueStore`) | CRUD lexique, SHA-256, corbeille, projection sur les pilotes, garde `OBSIDIAN_NAS_WRITE`. | Application + stockage. |
| `honeypot/visibility.mjs` | Projection publique (masquer fiches/matériel). | Domaine + rendu. |
| `honeypot/start.sh` | Contrôle cible/app, lance leurres et API, noindex, nginx. | Infra. |
| `honeypot/*.inc`, `visibility-proxy.conf`, `nginx.conf`, `security.inc`, `csp.inc` (généré) | nginx : cache, redirections, CSP, proxys vers l'API (9001) et les leurres (9000). | Infra. |
| `Dockerfile`, `fly.toml`, `fly.prod.toml` | Image, garde-fous TARGET/HONEYPOT, volume `recettes_live`. | Infra. |
| `tests/` | `restaurants.test.mjs`, `lexique.test.mjs`, `visibility.test.mjs`, `trois-styles.test.cjs`, `pilot-persistence.mjs`, `postit-dismissal.cjs`, `stack-label-cascade.py`. Plus ~150 `t-*.cjs`/`test*.cjs` historiques à la racine. | Tests UI ponctuels non regroupés. |
| Synchro Obsidian | Lexique : pont box `/workspace/preprod-admin-jigme/scripts/lexique-sync` (MCP NAS, plan/conflit). Recettes : resynchros faites à la main (copie NAS → `data/`, voir ETAT-HISTO 27/10, 30/10), **aucun script de synchro recettes dans ce dossier**. Hermès/Chef écrit dans Obsidian via `/workspace/chef/envoyer-chef.sh`. Dépôt Git `/workspace/recettes-web` (bare NAS) pas encore branché au build. | Pas de chemin unique ni outillé pour les recettes. |

Constats principaux :
1. `build.mjs` et `admin-api.mjs` contiennent chacun une partie des règles métier (validation v2, rendu HTML, visibilité). Le même fait est codé deux fois, sauf pour les restaurants.
2. Le front ne lit pas l'admin directement, mais l'admin **réécrit le HTML servi** (patch). En pratique l'admin connaît la structure des pages du front.
3. Trois emplacements pour une même fiche : NAS, `data/` du workspace, volume `/var/recettes-live`. Les éditions admin ne reviennent dans le workspace que par copie manuelle.
4. Contrôle de conflit (`expectedSha`) présent pour le lexique (SHA-256) et les restaurants (SHA-1), **absent pour recettes et matériel** (une sauvegarde peut en écraser une autre).
5. En prod (`HONEYPOT=0`), l'image ne contient ni Node ni l'API admin, et les onglets Restaurants/Affiliés ne sont pas générés : l'admin n'existe aujourd'hui qu'en préprod.

## 3. Cible : domaine Recette en couches

```
recettes-jigme/
  domain/            # pur : aucune I/O, aucun fs/http/sharp/yaml/DOM
    recette/         # Fiche, Variante (héritage), Ingrédient, Étape, TroisStyles, règles HowToStep
    doses/           # portions, mise à l'échelle, unités métrique/US, arrondis (extrait de src/logic.js)
    regimes/         # végé/végan/pesco, allergènes, religion (prudent), VeganDiet
    materiel/        # FicheMateriel, recos, liens fiche ↔ matériel
    lexique/         # Notice, formes, balises [[id|forme]], règles post-it (amateur seulement)
    restaurant/      # Restaurant, Blocs, catégories, distance (aujourd'hui `honeypot/restaurants-domain.mjs` ; la distance est encore dans `src/restaurants.js`)
    visibilite/      # règles hidden
  application/       # cas d'usage, dépendent du domaine et de ports (interfaces)
    publier-site     # lit le dépôt → modèle de pages → demande le rendu
    editer-recette, editer-materiel, editer-lexique, editer-restaurant, changer-visibilite
    valider-schema   # un seul validateur v2 (remplace check.mjs, _valide-v2.mjs, validateRecipeV2)
    ports/           # DepotFiches, DepotImages, Rendu, Horloge, ...
  adapters/
    sources/         # MD fichiers (data/, volume), Git (vault), lecture NAS
    sync-obsidian/   # script de synchro (pont lexique + futur pont recettes), séparé
    hermes/          # échanges avec Chef (prompts, retours), séparé du script
    http-admin/      # serveur API admin : auth Bearer, routes, JSON, limites de taille
    rendu/           # générateur statique (pages HTML, JSON-LD, sitemap), SSR Playwright, images sharp, patch HTML
    infra/           # nginx, csp, start.sh, Dockerfile, fly
  front/             # src/*.js, css : n'importe que domain/ (calculs partagés) et les données publiées
  honeypot/          # uniquement les leurres
```

### Règle de dépendance

- `domain` ne dépend de rien d'autre que lui-même.
- `application` → `domain` + ses propres ports.
- `adapters` → `application` + `domain` ; ils implémentent les ports.
- `front` → `domain` (calculs isomorphes : doses, régimes) + données publiées (HTML/JSON) ou API. Jamais le volume, le NAS, Git ni les modules admin.
- L'admin (dashboard Lien en bio) → **uniquement** l'API HTTP admin.
- Les synchros Obsidian (script, Hermès) → passent par les cas d'usage ou par le dépôt Git, jamais par un patch direct du HTML.
- Interdits vérifiables par test : import de `fs`, `http`, `sharp`, `js-yaml`, `playwright` ou `document` dans `domain/` ; import de `adapters/` depuis `application/` ou `domain/`.

### SOLID, concrètement
- **S** : `build.mjs` devient un orchestrateur court ; `admin-api.mjs` ne garde que le routage HTTP.
- **O** : un nouveau type de bloc restaurant ou un nouveau style d'explication s'ajoute dans le domaine sans toucher le rendu.
- **L/I** : ports petits (`lire(slug)`, `ecrire(slug, md, expectedSha)`, `lister()`), mêmes contrats pour fichiers, volume et Git.
- **D** : les cas d'usage reçoivent leurs dépôts et le rendu en paramètre (tests sur dossiers temporaires, comme `lexique.test.mjs`).

## 4. Module actuel → emplacement cible → ce qui change

| Actuel | Cible | Ce qui change |
|---|---|---|
| `build.mjs` (lecture YAML, `sanitize`, tags, `catFix`) | `adapters/sources` + `domain/recette` | Parsing dans l'adaptateur, corrections en règles nommées et testées. |
| `build.mjs` (`catGroups`, VEGE, recettes proches, kcal, JSON-LD) | `domain/recette`, `domain/regimes` ; JSON-LD dans `adapters/rendu` | Règles sorties du gabarit HTML. |
| `build.mjs` (HTML, images, CSP, garde-fous TARGET) | `adapters/rendu`, `adapters/infra` ; orchestration dans `application/publier-site` | `build.mjs` = point d'entrée de quelques lignes. |
| `src/logic.js` | `domain/doses` + `domain/regimes` (toujours livré au navigateur) | Fonctions pures séparées des libellés d'interface ; même sortie. |
| `src/religion.js`, `howto-name.mjs` | `domain/regimes`, `domain/recette` | Déplacement seul. |
| `check.mjs`, `_valide-v2.mjs`, `_doses.mjs`, `_v.mjs`, `validateRecipeV2` | `application/valider-schema` (+ règles dans `domain`) | Un seul validateur, utilisé par le build, l'admin et la synchro. |
| `honeypot/admin-api.mjs` | `adapters/http-admin` (routes) + `application/editer-*` + `adapters/sources` + `adapters/rendu` (patch) | Fichier découpé ; ajout de `expectedSha` aux recettes et au matériel. |
| `honeypot/restaurants-domain.mjs`, `restaurants-render.mjs` (ex-`restaurants-core.mjs`, séparé à l'étape 1) | `domain/restaurant` + `adapters/rendu` | Déplacement seul ; la distance (front) rejoindra le domaine plus tard. |
| `honeypot/restaurants-admin.mjs`, `lexique.mjs`, `visibility.mjs` | `application/editer-*`, `domain/visibilite`, `adapters/sources` | Mêmes routes, même stockage. |
| `honeypot/server.mjs`, `hp.conf`, `hp-proxy.inc` | `honeypot/` (inchangé) | Seuls les leurres restent dans ce dossier. |
| `honeypot/start.sh`, `*.inc`, `nginx.conf`, `security.inc`, `Dockerfile`, `fly*.toml` | `adapters/infra` | Chemins mis à jour dans le Dockerfile ; garde-fous conservés à l'identique. |
| `ssr.mjs` | `adapters/rendu/ssr` | Déplacement seul. |
| `src/*.js`, `*.css` | `front/` | Déplacement ; plus aucun accès aux modules admin. |
| `src/lectures.json`, `titres.json`, `cuisines.json`, `categories-surcharge.json`… | Dans les MD (via Chef/Obsidian) ou `adapters/sources/surcharges` | Inventaire, puis migration fiche par fiche avec OK Jigmé (écriture NAS). |
| Pont lexique (`preprod-admin-jigme/scripts/lexique-sync`) | `adapters/sync-obsidian` (ou reste côté admin, à décider avec Lien en bio) | Un seul pont documenté, même règle de conflit pour recettes et lexique. |
| Resynchro recettes manuelle | `adapters/sync-obsidian` sur le dépôt Git | Script outillé (plan → conflit → application), écriture NAS seulement après OK. |
| `t-*.cjs`, `test*.cjs` à la racine | `tests/` (garder les utiles) | Rangement, sans perte de tests passant aujourd'hui. |

## 5. Contrat API admin ↔ recettes

Références : `docs/admin-preprod.md` (recettes, matériel, photos, visibilité), `docs/admin-restaurants.md` (restaurants), `/workspace/preprod-admin-jigme/docs/lexique-contract.md` (lexique). Décision : DECISIONS.md D26 (convenu avec Lien en bio le 11/11).

| # | Point | Statut |
|---|---|---|
| 1 | Préfixe `/api/admin/v1/`, ancien `/api/admin/` en alias (réponses inchangées) pendant la migration | Fait en préprod (v200) ; **alias retiré en v201** (410), migration Lien en bio terminée |
| 2 | `expectedSha` SHA-256 sur recettes, matériel, lexique, restaurants ; SHA-1 restaurants accepté pendant la migration | Fait en préprod (v200) ; **SHA-1 retiré en v201** ; optionnel sauf lexique (obligatoire, 428) |
| 3 | Forme uniforme (GET liste, GET élément, POST + `action`), erreurs `{ok:false,error}` 400/401/404/409/413 | Convenu ; déjà le cas pour l'essentiel, harmonisation restante à l'étape 5 complète |
| 4 | Photos : même forme de contrat, un endpoint par domaine ; Media Kit côté Lien | Convenu ; à aligner |
| 5 | Édition : volume préprod → Git quand prêt → NAS après OK Jigmé | Convenu ; volume seulement aujourd'hui |
| 6 | API publique en lecture seule, séparée de l'API admin | Convenu ; dépend de D25 (front HTML ou API) |
| 7 | Hébergement admin prod, secrets par domaine avec rotation, porteur du pont Obsidian | En attente de Jigmé (proposition Lien en bio : app Fly dédiée + Cloudflare Access, un secret par domaine, pont porté par Recettes) |

Migration Lien en bio terminée le 11/11 (dashboard admin préprod v58, commit 1ec2d10 : uniquement `/api/admin/v1/`, `expectedSha` SHA-256 partout) ; alias et SHA-1 retirés en préprod v201.

## 6. Découpage proposé (préprod, avec le chantier vault Git)

Chaque étape : sauvegarde, aucun changement visible, build préprod, déploiement préprod seulement si l'étape touche l'image. Critère commun : **`dist/` identique octet pour octet à la référence** (hors barre de version préprod) et réponses de l'API admin identiques sur les fixtures.

| # | Étape | Tests qui la valident |
|---|---|---|
| 0 | Filet de sécurité : dépôt Git local (D23, un commit par étape) + sauvegarde datée, empreintes SHA-256 de tout `dist/` (référence v199), instantané des réponses API admin sur données de test (`tests/api-snapshot.mjs`), `npm test` qui agrège les tests valides. Les builds de vérification remettent `preprod-version.txt` à 198 pour reproduire exactement la v199. | `scripts/compare-dist.sh` : dist identique (4 400 fichiers) ; instantané API identique sur deux exécutions. |
| 1 | Domaine restaurants : séparer les règles (`restaurants-domain.mjs`) du rendu HTML (`restaurants-render.mjs`) ; ancien `restaurants-core.mjs` supprimé. **Fait le 11/11.** | `tests/restaurants.test.mjs`, dist identique, API restaurants identique. |
| 2 | Validateur unique schéma v2 `honeypot/recette-schema.mjs` (règles bloquantes de l'admin), appelé par build.mjs sur chaque fiche de `data/` (+ slug = nom de fichier) et par l'API admin. **Fait le 11/11.** `check.mjs`, `_valide-v2.mjs`, `_doses.mjs` restent des outils de relecture (avertissements), à rebrancher sur ce module plus tard. | Mêmes acceptations/refus sur les 309 fiches + fixtures invalides ; dist identique. |
| 3 | Doses et régimes : extraire les fonctions pures de `src/logic.js` (toujours livrées au navigateur). | Tableau de référence : toutes recettes × variantes × portions (1, base, 12) × unités, identique avant/après ; `trois-styles.test.cjs`. |
| 4 | Ports de dépôt (`DepotFiches`) : adaptateurs « dossier » (`data/`, volume) puis « Git » (vault). C'est ici que le chantier vault Git se branche. | Mêmes listes et contenus via les deux adaptateurs sur fixtures ; dist identique quand le build lit le clone Git. |
| 5 | Cas d'usage d'édition (`editer-recette`, `editer-materiel`, `editer-lexique`, `editer-restaurant`, `changer-visibilite`) ; `admin-api.mjs` réduit au routage. Ajouter `expectedSha` aux recettes/matériel en option (rétrocompatible). **Partiel fait le 11/11** : alias `/api/admin/v1/` + `expectedSha` SHA-256 sur recettes, matériel, restaurants (SHA-1 restaurants toléré), lexique inchangé ; découpage d'`admin-api.mjs` en cas d'usage non commencé. | `lexique.test.mjs`, `visibility.test.mjs`, `restaurants.test.mjs`, `pilot-persistence.mjs`, instantané API identique ; test 409 recettes. |
| 6 | Rendu : un seul moteur de pages pour le build et le patch admin ; `build.mjs` devient orchestrateur. | dist identique ; patch admin = page rebuild pour la même fiche (comparaison octet). |
| 7 | Synchro Obsidian séparée : pont lexique et futur pont recettes dans `adapters/sync-obsidian`, Hermès dans `adapters/hermes`. Plan à blanc seulement, écriture NAS désactivée. | Plan identique au pont actuel sur le même cache ; aucune écriture NAS (vérifié). |
| 8 | Ranger : `honeypot/` = leurres seuls ; admin et infra déplacés ; Dockerfile/start.sh mis à jour. | Image préprod : `/health` identique, 401 sans auth, pages identiques ; leurres testés en local seulement (un appel en ligne déclenche une alerte e-mail). |
| 9 | Test d'architecture : règle de dépendance vérifiée automatiquement (imports interdits). | Le test échoue si on ajoute `fs` dans `domain/`. |

Ordre conseillé : 0 → 1 → 2 → 4 (avec le vault Git) → 5 → 3 → 6 → 7 → 8 → 9. Les étapes 1 et 2 sont petites et réduisent le risque des suivantes.

Avancement au 11/11 (après D25, seules les étapes indépendantes du choix front) : 0, 1, 2 et 5 partielle (alias v1 + `expectedSha`). Étapes 3, 4, 6, 7, 8, 9 non commencées.

## 7. Points tranchés et points ouverts

Tranchés le 11/11 (DECISIONS.md D21 à D26) :
- Base Recette = dépôt Git `Web/` ; conflit → l'admin gagne (D21).
- Pas de pont recettes vers `Web/` sur le NAS pour l'instant (D22).
- Git local sur `/workspace/recettes-jigme`, sans remote (D23, 12:34, remplace « pas de Git » de 12:31).
- Hébergement de l'admin en prod : reporté (D24).
- Contrat API v1 avec Lien en bio (D26).

Ouverts pour Jigmé :
1. Front en HTML généré (recommandé pour le référencement) ou lecture d'une API publique dans le navigateur (D25). Bloque les étapes 3, 4, 6 et suivantes.
2. Secrets par domaine avec rotation, et porteur du pont Obsidian (D26 point 7).
3. Surcharges locales (`src/titres.json`, `cuisines.json`, `categories-surcharge.json`, `lectures.json`…) : les reporter dans les fiches par Chef ?
4. Restaurants : onglet seulement en préprod ; coordonnées du Petit Léon à confirmer ; fiches de test à remplacer.
5. Schéma v1 : aucune trace dans ce dossier ; date et contenu à confirmer.
6. Lien entre le dépôt Git du code (`recettes-jigme`) et le dépôt du contenu (`recettes-web`), et dépôt distant éventuel (aucun sans OK).
