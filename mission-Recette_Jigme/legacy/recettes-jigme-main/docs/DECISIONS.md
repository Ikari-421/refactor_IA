# Journal des décisions — site recettes (recettes-jigme)

Une entrée par décision : Contexte, Choix, Raison, Alternatives écartées, Sources.
Les dates viennent d'une source citée. Sans source datée : « date à confirmer ».
Les plus récentes en bas. Ajouter une entrée pour toute nouvelle décision, ne jamais réécrire une ancienne : la remplacer par une nouvelle entrée qui la cite.

Abréviations des sources : `ETAT` = ETAT.md, `HISTO l.N` = ETAT-HISTO.md ligne N, `mémoire` = mémoire du bot (fait daté).

---

## D01 — Markdown comme source unique des fiches (schéma `recette-web-jigme`)
- **Date** : principe antérieur au 26/10/2026 (date exacte à confirmer). Schéma v2 adopté le 27/10/2026 (« modèle Chef v2 », HISTO l.14). Schéma v1 : contenu et date à confirmer (aucune trace dans ce dossier).
- **Contexte** : Jigmé écrit ses fiches dans Obsidian, sur le NAS (`Cuisine/Recettes/Web`), et le site doit les reprendre telles quelles.
- **Choix** : un fichier `.md` par recette (frontmatter YAML, schéma `recette-web-jigme/v2`) est la seule source. Pas de base de données. Le build lit `data/*.md` (copie locale du NAS) ; l'admin lit et écrit les mêmes MD sur le volume préprod. Même principe pour le matériel (`materiel/*.md`), le lexique (`lexique-jigme/v1`) et les restaurants (`restaurant-jigme/v1`).
- **Raison** : une seule vérité éditable dans Obsidian, lisible par Chef (Hermès), versionnable avec Git.
- **Alternatives écartées** : base JSON ou SQL côté admin (« pas de base à part », docs/admin-preprod.md ; « pas de base JSON », HISTO l.248).
- **Sources** : docs/admin-preprod.md ; docs/schema-v2-conservation.md ; honeypot/visibility.mjs (« les MD restent la seule source de visibilité ») ; mémoire 2026-10-15 et 2026-10-16.

## D02 — Doses lues seulement dans le YAML, calcul dans le code du site
- **Date** : à confirmer.
- **Contexte** : portions ajustables, unités métrique/US, variantes (végé, végan…).
- **Choix** : les quantités (`qty`, `unit`, `servings_base`, `servings_unit`) viennent uniquement du YAML. Le calcul (mise à l'échelle, arrondis, conversions) est fait par `src/logic.js` (`scaleQty`, `scaleIng`, `resolve`). Les textes (étapes, trois styles, traductions) ne portent pas de dose recalculée ; `src/share.js` reprend les doses calculées sans les recalculer.
- **Raison** : une seule source de chiffres, pas d'écart entre texte et liste d'ingrédients, pas de dose inventée.
- **Alternatives écartées** : doses écrites en dur dans les textes de Chef ; quantités `{{q:N}}` calculées dans les niveaux (essai v124, HISTO l.239, abandonné avec les quatre niveaux, voir D13).
- **Sources** : src/logic.js, src/share.js (en-tête) ; mémoire 2026-11-03 (traductions « doses inchangées dans le YAML ») et 2026-11-08 (« les doses restent inchangées »).

## D03 — NAS `Cuisine/Recettes/Web` en lecture seule, sauf OK direct de Jigmé
- **Date** : appliqué au moins depuis le 26/10/2026 (HISTO l.3). Date de la décision initiale à confirmer.
- **Contexte** : le NAS est la vérité éditoriale ; plusieurs bots y ont accès.
- **Choix** : le site et l'admin n'écrivent jamais sur le NAS. Les resynchros copient NAS → `data/` (lecture). Seuls Chef (sur demande) ou un pont explicitement autorisé écrivent, avec sauvegarde. L'écriture Obsidian du lexique depuis Fly est désactivée (`OBSIDIAN_NAS_WRITE` ≠ 1, honeypot/lexique.mjs) ; Fly n'a de toute façon pas accès au NAS.
- **Raison** : ne jamais abîmer la source de Jigmé.
- **Alternatives écartées** : synchro automatique admin → NAS.
- **Sources** : HISTO l.3, l.21, l.248 ; docs/admin-preprod.md (« L'admin n'écrit JAMAIS sur le NAS ») ; /workspace/preprod-admin-jigme/scripts/lexique-sync/README.md.

## D04 — Fiches originales Chef `Sucré/` et `Salé/` jamais modifiées
- **Date** : à confirmer.
- **Contexte** : les fiches d'origine de Jigmé sont dans `Sucré/` et `Salé/` ; les versions web dans `Web/` (mémoire 2026-10-22).
- **Choix** : aucun outil (site, admin, ponts, dépôt Git) ne touche `Sucré/` ni `Salé/`. Le dépôt Git du 05/11 les exclut (D10). Le pont lexique ne touche que `Cuisine/Lexique/`.
- **Raison** : ce sont les originaux.
- **Alternatives écartées** : aucune trouvée.
- **Sources** : mémoire 2026-10-22 et 2026-11-05 ; lexique-sync/README.md.

## D05 — Catégorie Sucré/Salé non modifiable depuis l'admin
- **Date** : 05/11/2026 (HISTO l.248).
- **Choix** : le champ catégorie Sucré/Salé est en lecture seule dans l'admin. Les surcharges locales (ex. Boissons, 30/10) passent par `src/categories-surcharge.json`, sans toucher le NAS.
- **Raison** : la catégorie structure le site (pages `/c/…`) ; elle reste décidée dans la fiche source.
- **Sources** : docs/admin-preprod.md ; HISTO l.197, l.248 ; build.mjs l.109.

## D06 — Préprod d'abord, prod seulement après OK explicite de Jigmé
- **Date** : à confirmer (règle en vigueur dès le 26/10/2026, HISTO l.3).
- **Choix** : tout changement passe par `recettes-jigme-preprod`, avec lien de vérification envoyé à Jigmé. Aucune mise en prod sans son OK direct. À ce jour : aucune app recettes en prod.
- **Raison** : Jigmé valide visuellement avant publication.
- **Sources** : ETAT (« Règles ») ; mémoire 2026-10-15.

## D07 — Hébergement Fly.io : app préprod, `fly.prod.toml` jamais déployé
- **Date** : 28/10/2026 (`fly.prod.toml` créé, HISTO l.73, section « Reste avant prod (2026-10-28) »).
- **Choix** : préprod = app `recettes-jigme-preprod` (cdg, nginx non root, 1 machine chaude). Prod = `fly.prod.toml` (app `recettes-jigme` à confirmer, `TARGET=prod`, sans honeypot ni noindex), jamais déployé. `TARGET` obligatoire au build et gravé dans l'image ; `start.sh` refuse de démarrer sur la mauvaise app ; `fly.prod.toml` interdit `[processes]`/`cmd`/`entrypoint`/`exec` (contrôlé par build.mjs).
- **Raison** : rendre impossible une préprod servie comme prod (audits B6, v27–v29).
- **Alternatives écartées** : repli silencieux sur la préprod quand `TARGET` manque (supprimé, audit B6).
- **Sources** : fly.toml, fly.prod.toml, Dockerfile, honeypot/start.sh, build.mjs l.4–9 ; HISTO l.73–87.

## D08 — Préprod non indexée et sans mot de passe ; HSTS includeSubDomains seulement en prod
- **Date** : 27/10/2026 (validé par Jigmé, mémoire).
- **Choix** : `X-Robots-Tag: noindex, nofollow` si `ROBOTS_NOINDEX=1` sur l'app préprod ; pas d'authentification HTTP ; canoniques, OG et sitemap toujours en `https://recettes.jigme.fr`. `includeSubDomains` ajouté au passage en prod, après vérification HTTPS de tous les sous-domaines.
- **Sources** : HISTO l.1–4, l.78 ; mémoire 2026-10-27 ; honeypot/start.sh.

## D09 — Leurres (honeypot) en préprod uniquement
- **Date** : en place au 28/10/2026 (HISTO l.52) ; décision initiale à confirmer.
- **Choix** : 5 chemins piégés (`/flag.txt`, `/.env`, `/admin-backup.zip`, `/.git/config`, `/wp-login.php`) avec alerte e-mail, actifs seulement sur l'app préprod (`HONEYPOT=1`). Prod : `HONEYPOT=0`, `TARGET=prod` + `HONEYPOT=1` refusé par le Dockerfile.
- **Remarque** : le dossier `honeypot/` contient aussi l'API admin (voir DOMAINES.md, à séparer).
- **Sources** : Dockerfile, honeypot/server.mjs, honeypot/hp.conf, HISTO l.52.

## D10 — Pas d'agent cloud par défaut
- **Date** : 28/10/2026 (mémoire partagée).
- **Choix** : tout le code se fait sur la box ; un agent cloud seulement si vraiment nécessaire et après OK explicite de Jigmé.
- **Raison** : économiser l'usage et le temps.
- **Sources** : mémoire 2026-10-28 ; ETAT (« Pas d'agent cloud / clone pour ce chantier sauf nécessité + OK Jigmé »).

## D11 — Admin préprod : écriture des MD sur le volume, sans rebuild (patch HTML)
- **Date** : 05/11/2026 vers 14h50 (HISTO l.248).
- **Contexte** : Jigmé veut corriger les fiches depuis le tableau de bord admin.jigme.fr.
- **Choix** : API admin dans l'image préprod (`honeypot/admin-api.mjs`, port 9001 derrière nginx), Bearer `ADMIN_API_SECRET`. Elle écrit `data/`, `materiel/`, puis `lexique/` et `restaurants/` sur le volume Fly `recettes_live` (`/var/recettes-live`) et patche le HTML servi pour un effet immédiat. Au démarrage, les MD édités (`.bak`) sont réappliqués. Schéma v2 contrôlé à l'enregistrement.
- **Raison** : un rebuild complet (Playwright SSR, sharp) à chaque sauvegarde est trop lourd.
- **Alternatives écartées** : rebuild à chaque sauvegarde ; base JSON.
- **Conséquence** : une édition admin n'est définitive dans le workspace qu'après recopie du MD du volume vers le dossier (docs/admin-restaurants.md). À résoudre par le vault Git (D12).
- **Sources** : docs/admin-preprod.md, docs/admin-restaurants.md, fly.toml (`[mounts]`), honeypot/start.sh.

## D12 — Plan Obsidian + Git validé ; dépôt bare NAS `Tech/git/recettes-web.git`
- **Date** : plan validé par Jigmé le 05/11/2026 (HISTO l.248). Dépôt créé le 05/11/2026 par Lien en bio (mémoire).
- **Choix** : vault Git avec les mêmes MD, préprod d'abord. Dépôt bare `Tech/git/recettes-web.git`, working tree `Tech/git/recettes-web`, clone box `/workspace/recettes-web` (branche `main`) : `data/*.md` (309, v2) + `materiel/*.md` (15). Hors `Web/`, `Sucré/`, `Salé/`, photos. Synchro avec `Web/` et toute écriture NAS seulement après OK de Jigmé.
- **Raison** : historique, retour arrière et fusion des éditions admin / Obsidian / Chef.
- **Point à confirmer** : le dossier `recettes-jigme` lui-même n'est toujours pas sous Git ; le branchement build ↔ dépôt reste à faire.
- **Sources** : HISTO l.248 ; docs/admin-preprod.md (« Vault Git `Web/` … plan validé ») ; mémoire 2026-11-05.

## D13 — Explications en trois styles (amateur, pro, cavernes)
- **Date** : 08/11/2026 18:02 (remplacement des quatre niveaux par trois styles, mémoire) ; règles amateur au vouvoiement / pro à l'infinitif le 08/11 18:16 ; généralisation autorisée le 09/11/2026 18:30 (mémoire) ; 301/301 recettes en préprod le 10/11 (v191–v197).
- **Historique** : « deux lectures » habitué/débutant (spec du 03/11, docs/deux-lectures.md) → quatre niveaux (v124, 04/11) → trois styles.
- **Choix** : Chef écrit les trois styles dans les fiches ; amateur au vouvoiement avec post-it `[[id|forme]]`, pro à l'infinitif sans lexique, cavernes télégraphique sans post-it. `steps` d'origine inchangés (JSON-LD). Aucune invention de paramètre, doses inchangées (D02).
- **Sources** : docs/deux-lectures.md ; HISTO l.230–239, l.719–753 ; mémoire 2026-11-08, 2026-11-09, 2026-11-10 ; tests/trois-styles.test.cjs.

## D14 — Lexique centralisé dans Obsidian `Cuisine/Lexique/`
- **Date** : demande du 08/11/2026 21:24 (mémoire) ; API lexique publiée en préprod le 09/11/2026 08:10 (ETAT).
- **Choix** : une notice MD par terme (`lexique-jigme/v1`, `Cuisine/Lexique/<id>.md`, id stable), éditable dans l'admin (CRUD, `expectedSha` SHA-256, 409 en conflit, corbeille). Retour vers Obsidian par le pont box `scripts/lexique-sync` (MCP NAS, conflit des deux côtés = blocage), jamais par Fly. 25 notices au 10/11.
- **Alternatives écartées** : `Web/_LEXIQUE.yaml` unique (spec 03/11, docs/deux-lectures.md) ; définitions copiées dans chaque fiche (les copies `lexique_local` des pilotes restent une projection provisoire, lexique/INDEX-nas.md).
- **Sources** : lexique/INDEX-nas.md ; honeypot/lexique.mjs ; /workspace/preprod-admin-jigme/docs/lexique-contract.md ; lexique-sync/README.md.

## D15 — Traductions EN/ES reportées
- **Date** : 03/11/2026 (mémoire).
- **Choix** : mis de côté. Plus tard : Chef traduit chaque fiche en amont (`<slug>.en.md` puis `.es.md`, doses inchangées dans le YAML) ; côté site routes `/en/`, sélecteur de langue, interface traduite, `hreflang`. Commencer par un essai préprod sur quelques fiches.
- **Alternatives écartées** : traduction à la volée par le site (non retenue dans le plan).
- **Sources** : mémoire 2026-11-03.

## D16 — Déployer uniquement depuis `/workspace/recettes-jigme`
- **Date** : 05/11/2026 (mémoire ; HISTO l.249).
- **Choix** : `/workspace/rj116` n'est qu'un miroir UI ; il n'a pas le `[mounts]` du volume ni l'admin. Jamais de déploiement depuis rj116.
- **Sources** : ETAT ; HISTO l.249 ; mémoire 2026-11-05.

## D17 — Onglet Restaurants (v198)
- **Date** : 11/11/2026 (demande t479u ; préprod v198 en ligne à 11:24).
- **Choix** :
  - un MD par restaurant (`restaurants/<slug>.md`, schéma `restaurant-jigme/v1`), corps en blocs façon newsletter (titre, paragraphe, image, galerie, citation, infos) ;
  - validation et rendu dans un module partagé par le build et l'admin (`honeypot/restaurants-core.mjs`) ;
  - carte Leaflet 1.9.4 auto-hébergée (`/vendor/leaflet-1.9.4/`) avec tuiles OpenStreetMap ; recherche d'adresse par api-adresse.data.gouv.fr côté navigateur ; distances en km ;
  - fiches de test (`test: true`) en `noindex` et hors sitemap ; onglet absent des builds prod pour l'instant ;
  - éditeur dans le dashboard admin.jigme.fr, codé par Lien en bio.
- **Raison** : même modèle que les recettes (MD source, admin sans rebuild) ; pas de dépendance à un CDN ; géocodage public français gratuit.
- **Alternatives écartées** : à confirmer (non documentées).
- **Points ouverts** : les coordonnées du Petit Léon sont à confirmer ; les deux autres fiches sont fictives.
- **Sources** : ETAT ; docs/admin-restaurants.md ; restaurants/_LISEZMOI.md ; csp.inc ; build.mjs l.383, l.405–424.

## D18 — Contrat API admin ↔ recettes
- **Date** : 05/11/2026 pour la première API (D11) ; extensions lexique (08–09/11) et restaurants (11/11).
- **Choix** :
  - le dashboard admin.jigme.fr est géré par Lien en bio et appelle `https://recettes-jigme-preprod.fly.dev/api/admin/…` avec `Authorization: Bearer <RECETTES_ADMIN_SECRET>` (même secret partout ; repli `ADMIN_API_SECRET` retiré en v243, D51) ;
  - réponses JSON `{ ok, … }` ou `{ ok:false, error }` (400, 401, 404, 409, 413, 500) ;
  - `GET /api/admin/health` expose les versions (`visibilityVersion`, `lexiqueVersion`, `restaurantsVersion`) ;
  - le BFF admin refuse toute `RECETTES_API_URL` hors préprod ; préprod uniquement.
- **Sources** : docs/admin-preprod.md ; docs/admin-restaurants.md ; lexique-contract.md ; honeypot/admin-api.mjs.
- **À caler avec Lien en bio** : voir DOMAINES.md, section « Contrat API admin ↔ recettes ».

## D19 — Architecture par domaines (DDD), Clean Architecture et SOLID ; tenue de ce journal
- **Date** : 11/11/2026 (schéma de Jigmé, relayé par Superviseur Sites : /workspace/superviseur/docs/schema-archi-ddd-2026-11-11.jpg).
- **Contexte** : un bloc ADMIN contient trois domaines (Lien, Recette, Media Kit), chacun avec sa base. La base Recette est synchronisée dans les deux sens avec Obsidian par un script et par Hermès. L'admin parle au FRONT uniquement par une API. Après le prototype : épics et fonctionnalités, de l'admin au front, à partir de ce journal.
- **Choix** : ce site = domaine Recette (fiches, matériel, lexique, restaurants) + son front. Découpage proposé dans docs/DOMAINES.md, mené en préprod avec le chantier du vault Git, sans changement visible. Tenir ce journal pour toute décision.
- **Statut** : proposition. Aucun code modifié à ce stade.

## D20 — Création de restaurant avec image (API admin)
- **Date** : 11/11/2026 (préprod v199).
- **Choix** : `POST /api/admin/restaurants` `action: create` accepte un champ optionnel `image` (data URL JPG/PNG/WebP, 8 Mo max) ré-encodé comme l'action `photo` `target: cover`. Il remplit `photo`, et `photo_alt` reste optionnel. Sans `image` ni `photo`, la fiche prend la photo locale `/img/banniere-hero.webp`. La création est atomique : tout est validé avant d'écrire, et un échec tardif retire ce qui a été écrit.
- **Pourquoi** : le dashboard peut créer une fiche en un seul appel, sans fiche à moitié créée ni image cassée.
- **Sources** : docs/admin-restaurants.md ; honeypot/restaurants-admin.mjs (`create`, `encode`, `store`) ; tests/restaurants.test.mjs.

## D21 — Le dépôt Git `Web/` devient la base Recette ; en cas de conflit, l'admin gagne
- **Date** : 11/11/2026 12:31 (Jigmé, via Superviseur Sites).
- **Contexte** : point ouvert n° 2 de DOMAINES.md (D19) : quelle est la « base Recette » du schéma, et qui gagne entre l'admin, Obsidian et Hermès.
- **Choix** : la base Recette est le dépôt Git `Web/` (dépôt bare NAS `Tech/git/recettes-web.git`, D12). Si une même fiche est modifiée à la fois dans l'admin et ailleurs, la version de l'admin gagne.
- **Raison** : décision de Jigmé ; l'admin est l'outil d'édition courant.
- **Alternatives écartées** : NAS `Web/` comme base ; priorité à Obsidian ou à Hermès.
- **Conséquence** : la synchro devra détecter le conflit, garder la version admin et conserver l'autre version (trace), jamais l'effacer sans sauvegarde.

## D22 — Pas de pont recettes vers `Web/` sur le NAS pour l'instant
- **Date** : 11/11/2026 12:31 (Jigmé, via Superviseur Sites).
- **Choix** : aucun script n'écrit les fiches recettes dans `Cuisine/Recettes/Web` du NAS. Le pont lexique existant (D14) n'est pas concerné. D03 reste en vigueur.
- **Alternatives écartées** : pont recettes sur le modèle du pont lexique (proposé dans DOMAINES.md, point ouvert n° 3).

## D23 — Git local sur `/workspace/recettes-jigme` (adopté le 11/11 12:34, remplace la réponse de 12:31)
- **Trace** : à 12:31, Jigmé avait répondu « pas de Git sur /workspace/recettes-jigme pour l'instant : filet de sécurité par sauvegardes datées ». À 12:34, il a changé d'avis : « Faisons un dépôt Git maintenant. »
- **Date** : 11/11/2026 12:34 (Jigmé, via Superviseur Sites).
- **Choix** : dépôt Git local, branche `main`, **sans remote** (aucun dépôt distant sans OK de Jigmé). `.gitignore` : `dist/`, `node_modules/`, `.cache/`, `backup-*/`, `nas-backup-*/`, `screens/`, `shots/`, fichiers `.env*`, clés, `secrets/`, `*.bak*`, `*.log`, `*.tmp`. Premier commit « État v199 préprod, 2026-11-11 » (`e687772`) après scan de secrets (rien trouvé). Chaque étape du découpage est un commit séparé. Les sauvegardes datées `backup-2026-11-11-ddd-etapeN/` sont conservées en plus.
- **Raison** : suivre et pouvoir annuler chaque étape du découpage DDD.
- **Alternatives écartées** : sauvegardes datées seules (réponse de 12:31) ; dépôt distant (pas d'OK).
- **Point ouvert** : lien entre ce dépôt (code du site) et le dépôt `recettes-web` (contenu, D12/D21).

## D24 — Hébergement de l'admin en prod : reporté
- **Date** : 11/11/2026 12:31 (Jigmé, via Superviseur Sites).
- **Choix** : rien n'est décidé ; l'API admin reste préprod uniquement (image prod sans Node, D07, D11).
- **Proposition de Lien en bio, non retenue à ce jour** : app Fly dédiée derrière Cloudflare Access.

## D25 — Front en HTML généré ou API publique : en attente de Jigmé
- **Date** : 11/11/2026 12:31 (Jigmé, via Superviseur Sites).
- **Choix** : en attente. Le découpage n'avance que sur les étapes qui ne dépendent pas de ce choix (étapes 0, 1, 2 et 5 partielle de DOMAINES.md).

## D26 — Contrat API admin ↔ recettes v1 (convenu avec Lien en bio)
- **Date** : 11/11/2026 (accord Recettes ↔ Lien en bio, transmis par Superviseur Sites à 12:31). Remplace la partie « à caler » de D18.
- **Choix** :
  1. Préfixe `/api/admin/v1/`. L'actuel `/api/admin/` reste un alias pendant la migration du dashboard, avec des réponses inchangées.
  2. `expectedSha` généralisé à recettes, matériel, lexique et restaurants, avec un algorithme unique : SHA-256 du fichier MD complet. Compatibilité temporaire : l'ancien SHA-1 des restaurants reste accepté le temps que Lien en bio migre.
  3. Forme uniforme : `GET` liste, `GET` élément, `POST` avec `action`. Erreurs `{ ok:false, error }` avec 400, 401, 404, 409, 413.
  4. Photos : même forme de contrat, mais chaque domaine garde son endpoint. Le Media Kit reste côté Lien.
  5. Édition admin : volume préprod, puis Git quand ce sera prêt ; NAS seulement après OK de Jigmé.
  6. API publique en lecture seule, séparée de l'API admin.
  7. En attente de Jigmé : hébergement de l'admin en prod (D24), secrets par domaine avec rotation, porteur du pont Obsidian. Proposition de Lien en bio : app Fly dédiée derrière Cloudflare Access, un secret par domaine, pont Obsidian porté par Recettes.
- **Mise en œuvre** : points 1 et 2 en préprod (v200), voir docs/admin-preprod.md et docs/admin-restaurants.md. Les points 3 à 6 restent à faire.
- **Fin de migration (11/11/2026 ~13:05)** : Lien en bio confirme que le dashboard admin préprod v58 (commit 1ec2d10) n'appelle plus que `/api/admin/v1/` et envoie `expectedSha` SHA-256 sur toutes les écritures (création de restaurant : image en data URL) et demande le retrait. Logs Fly préprod vérifiés : derniers appels hors v1 à 12:53 (Europe/Paris), avant la release v58 de l'admin (13:03) ; depuis, uniquement v1. **Alias `/api/admin/…` hors v1 retiré (410) et SHA-1 restaurants refusé (409) en préprod v201.**
- **Sources** : message de Superviseur Sites du 11/11 12:31 ; D18.

## D27 — Dépôt GitHub privé (11/11/2026, 13:21)
- **Source** : réponse de Jigmé relayée par Superviseur Sites : « Oui, publie recettes-jigme en privé sur GitHub et invite ikari-421. »
- **Choix** : dépôt **privé** `recettes-jigme` sur le compte GitHub de Jigmé ; push de tout l'historique local (depuis `e687772`) ; ikari-421 invité en contributeur avec droit d'écriture, pas admin. Ni prod ni NAS concernés.
- **Garde-fou** : scan des secrets refait sur tout l'historique le 11/11 à 13:25 : aucun fichier .env, clé, jeton Fly/GitHub ni valeur de `ADMIN_API_SECRET` ; seuls les faux identifiants du honeypot (leurres volontaires). Note : un contributeur verra le code du honeypot et ses chemins leurres.
- **État (11/11 13:33)** : dépôt créé https://github.com/hayagrivax/recettes-jigme (PRIVATE, branche main), historique e687772..0220eb9 poussé ; invitation envoyée à Ikari-421 (droit write, id 342904836, en attente d'acceptation). gh connecté sur la box au compte hayagrivax (scope repo).

## D28 — Passage sous jigme.fr/recettes (11/11/2026, 17:27) : chiffrage
- **Source** : demande de Jigmé relayée par Superviseur Sites le 11/11 à 17:27 : le site passe de recettes.jigme.fr à **jigme.fr/recettes** ; jigme.fr servi par l'appli Lien en bio (lienenbio.jigme.fr redirigera vers jigme.fr) ; l'admin reste sur admin.jigme.fr. Plan Lien en bio : `/workspace/plans/bascule-jigme-fr.md` §2-3.
- **Mécanisme retenu (proposé, aligné sur Lien en bio)** : rewrite Next.js `jigme.fr/recettes/*` → `http://recettes-jigme.flycast/recettes/*`, **préfixe conservé**. Recettes sert tout sous `/recettes/` (build `BASE=/recettes`, `PROD=https://jigme.fr/recettes`) ; `/` de l'appli → 301 `/recettes/`. API admin inchangée à la racine `/api/admin/v1/` du nom fly.dev (jamais joignable par jigme.fr : `/recettes/api/*` → 404 côté Lien en bio).
- **Constat** : recettes.jigme.fr et recette.jigme.fr n'ont **aucun DNS** (NXDOMAIN, vérifié le 11/11 17:45 via DoH Cloudflare) et l'appli prod n'a jamais été créée : premier lancement : aucun 301 historique à prévoir, aucun signet d'internaute à migrer. Liste de test du proxy : `/workspace/referencement/migration/redirections.csv` (318 correspondances, Référencement) ; balises : `/workspace/referencement/migration/BALISES.md`.
- **Point bloquant** : l'appli `recettes-jigme-preprod` n'a pas d'IP flycast (seulement IP publiques). Pour le test via `preprod-lienenbio-jigme`, il faut `fly ips allocate-v6 --private -a recettes-jigme-preprod` (OK de Jigmé requis) ou passer par `recettes-jigme-preprod.internal:8080` (une machine reste chaude : `min_machines_running = 1`).
- **Exigences SEO intégrées** : canonical, og:url, og:image, JSON-LD (Recipe, BreadcrumbList) en `https://jigme.fr/recettes/…` ; liens légaux et mediakit en même origine sur jigme.fr ; sitemap `https://jigme.fr/recettes/sitemap.xml` ; barre finale conservée, sans boucle ni redirection vers l'hôte flycast (`absolute_redirect off`, `port_in_redirect off`) ; noindex et hors sitemap proposés pour burger-test-express, table-test-etoilee, /favoris/, /affilies/ (à confirmer par Jigmé).
- **Effort estimé** : environ 17 h (15 à 21 h). Détail, audit et risques : `docs/migration-prefixe-recettes.md`.
- **Décisions de Jigmé (11/11 17:49 puis 17:50, relayées par Superviseur)** : go préprod seulement ; préfixe conservé ; rien sur recettes.jigme.fr ; Affiliés sous `/recettes/affilies/` ; **Restaurants sur jigme.fr/restaurants** (et non /recettes/restaurant/) ; noindex + hors sitemap pour burger-test-express, table-test-etoilee, /favoris/, /affilies/ ; signets de test laissés ; IP flycast privée autorisée ; niveau « Jigmé » dans le fil d'Ariane (fait, trivial) ; robots IA autorisés (aucun blocage anti-IA dans robots.txt ni ailleurs : vérifié). Interdits : app prod, DNS/Cloudflare, NAS, prod, agent cloud.
- **Implémentation** :
  - `honeypot/paths.mjs` : `BASE_PATH=/recettes`, `RESTO_PATH=/restaurants`, `SITE_URL=https://jigme.fr`, fonction unique `u()` et `prefixText()` (build et API admin) : le build et l'API produisent des chemins logiques (/r/…, /restaurant/…, https://recettes.jigme.fr/…), convertis en un seul endroit.
  - `build.mjs` : passe `prefixText` sur dist avant la CSP ; arborescence finale `dist/recettes/`, `dist/restaurants/`, `dist/robots.txt` ; garde-fou : échec si un lien racine non préfixé reste ; liens légaux `https://jigme.fr/mentions-legales` et `/confidentialite`, mediakit `https://jigme.fr/mediakit` ; garde-fou prod `LIENENBIO_URL`/`CONTACT_BASE` = `https://jigme.fr`.
  - Sitemaps séparés : `https://jigme.fr/recettes/sitemap.xml` (313 URL) et `https://jigme.fr/restaurants/sitemap.xml`, vide mais valide tant qu'il n'y a pas de vraie fiche. Les 3 fiches actuelles sont `test: true` (Lorem ipsum) : noindex, et `/restaurants/` lui-même en noindex tant qu'aucune vraie fiche (sous réserve de l'avis de Jigmé). Le sitemap index jigme.fr est fait par Lien en bio.
  - JSON-LD : Recipe et BreadcrumbList en https://jigme.fr/recettes/… ; Restaurant (url, image) en https://jigme.fr/… ; `review.name` = « Avis de Jigmé sur … » ; fil d'Ariane « Jigmé » (https://jigme.fr/) en 1er niveau.
  - nginx : `/` → 301 `/recettes/`, `/recettes` → `/recettes/`, `/restaurants` → `/restaurants/`, `absolute_redirect off` + `port_in_redirect off` (Location relatives), une seule redirection de barre finale, 301 internes sous /recettes/. Fiches masquées : préfixe retiré avant l'API Node, Location repréfixées.
  - API admin : contrat v1 inchangé à la racine `/api/admin/v1/` ; HTML patché écrit en chemins publics ; champs `url` en `/restaurants/<slug>/` ; og:image des photos en https://jigme.fr/recettes/img/….
  - Fly : `force_https = false` (sinon Fly redirige aussi le flycast vers https://<app>.flycast, inutilisable : constaté en v202) ; la redirection HTTPS des hôtes publics *.fly.dev est faite par nginx. IP flycast privée allouée le 11/11 à 18:14 : `fdaa:d3:d7b8:0:1::2` (`recettes-jigme-preprod.flycast`, port 80).
- **Statut (11/11 18:30)** : **implémenté en préprod (v203, `deployment-01M75SZ2PRPB59Z88S70K1R34D`)** ; v202 (`deployment-01M75SA0RDZ1JHTEHEEVTNPYQ1`) avait le blocage flycast. Tests : 320/320 adresses de Référencement OK en direct (200, canonical, aucune boucle) ; flycast testé depuis le réseau privé Fly ; `npm test` 26/26 + API v1 OK ; empreintes dist régénérées (`tests/fixtures/dist-d28.sha256`, `api-snapshot-d28.json`). Rien en prod, app prod non créée, aucun DNS, aucune écriture NAS.
- **Suite (11/11 18:50, préprod v204, `deployment-01M75VJT3CG7XXEZG625VKBMQK`)** : après les tests proxy de Lien en bio (preprod-lienenbio v160 → v203, tout OK). (1) Le lien « Signalez une coquille » prend l'origine fixée au build selon TARGET (`data-origin` : https://jigme.fr en prod, l'hôte préprod en préprod) et non plus `location.origin` ; build prod local vérifié : `https://jigme.fr/recettes/r/<slug>/`, aucun fly.dev dans dist (non déployé). (2) HTML des deux préfixes en `Cache-Control: no-cache` + ETag (304 vérifié), au lieu de no-store sur les pages servies par l'API de visibilité ; assets versionnés inchangés (immutable).

### D28 — suite v205 (11/11)
- nginx : 301 `/recettes/restaurant` et `/recettes/restaurant/*` → `/restaurants/*` (Location relative ; reste du chemin, barre finale et paramètres conservés). Lien en bio signalé en 404.
- Tiroirs de l'accueil (Adapter, Catégories, Tri) : après un scroll, la page remontait mais le tiroir ne s'ouvrait pas. Cause : `pathIsRecettes()` (src/home.js) attendait encore « / » comme accueil ; sous `/recettes/`, chaque image de scroll (y compris le scrollTo d'openPanel) prenait la page pour « hors Recettes » et refermait le tiroir. Correctif : l'accueil est `/recettes/`.
- Menu radial « + » : sur l'accueil, plus de calque fixe (`rj-rad-fx`). Il reste en absolute en haut à droite de la bannière, défile et disparaît avec elle, et ne chevauche plus Tri. Rangée sticky inchangée (bande blanche iPhone).

## D29 — Renommage du préfixe /recettes → /cuisine (12/11/2026)
- **Source** : décision de Jigmé relayée par Superviseur Sites le 12/11/2026 au matin. OK direct de Jigmé pour la préprod le même jour. Rien en prod, ni DNS ni NAS.
- **Contexte** : après D28 (site sous jigme.fr/recettes et jigme.fr/restaurants), Jigmé renomme le préfixe de base en **/cuisine**, pour laisser la place à d'autres rubriques plus tard (ex. /jardin). `/restaurants` ne change pas. Affiliés restent sous le préfixe de base : `/cuisine/affilies/`.
- **Choix** :
  - `BASE_PATH=/cuisine` dans `honeypot/paths.mjs` (paramètre unique, inchangé pour le mécanisme) ; `RESTO_PATH=/restaurants` ; `SITE_URL=https://jigme.fr` ; `prefixText()` reste la seule conversion des chemins logiques.
  - Canonical, og:url, JSON-LD, sitemap et liens internes en `https://jigme.fr/cuisine/…` (et `https://jigme.fr/restaurants/…`). Sitemap recettes : `/cuisine/sitemap.xml`.
  - nginx : `/` → 301 `/cuisine/` ; barre finale en un seul saut ; Location relatives (`absolute_redirect off`, `port_in_redirect off`).
  - 301 historiques conservés, en un seul saut : `/recettes/restaurant/*` et `/cuisine/restaurant/*` → `/restaurants/*` ; slugs renommés depuis `/recettes/r/…` et `/cuisine/r/…` directement vers le nouveau slug sous `/cuisine/`.
  - 301 de l'ancien préfixe : `/recettes/*` → `/cuisine/*` (chemin et query conservés, un seul saut, sans boucle). Pas de 301 externe sur recettes.jigme.fr (toujours aucun DNS).
  - Images de partage (recettes et restaurants) sous `/cuisine/img/` — même arborescence partagée qu'en D28, seul le préfixe de base change.
  - Contrat API admin `/api/admin/v1/` inchangé à la racine du nom fly.dev. Les champs `url` des recettes passent sous `/cuisine/…` ; ceux des restaurants restent `/restaurants/<slug>/`.
  - Lien « Signalez une coquille » : origine toujours dérivée de TARGET ; les URL de fiches suivent `BASE_PATH`.
  - Client : `window.RJ_BASE` injecté au build (préfixe paramétrable pour le JS).
- **Statut (12/11 09:24 Europe/Paris)** : **implémenté en préprod v206** (`deployment-01M77DDV391X6GDS37NQ1XQ6ZC`). HTTP : 46/46 adresses de `docs/adresses-test-cuisine.md` OK en direct sur recettes-jigme-preprod.fly.dev ; `npm test` 26/26 + API v1 OK. Rien en prod, app prod non créée, aucun DNS, aucune écriture NAS.
- **Correctif query (12/11 10:05 Europe/Paris, préprod v208, `deployment-01M77FS9JWBRY8NFVWKYKNJTXX`)** : crawl Référencement v164 — 5 « 301 nginx » perdaient la query (`/cuisine`, `/restaurants`, barre finale `/cuisine/r/<slug>` et `/cuisine/c/<cat>`, 2 anciens slugs). Tous les `return 301` nginx ont maintenant `$is_args$args` (et emplacements explicites à la place du 301 implicite de `try_files`). En préprod, les 301 fiches/catégories/anciens slugs sont émis par `publicResponse` (le `^~ /cuisine/r|c/` du visibility-proxy prime sur les regex nginx) : `url.search` est ajouté à `Location`. La v207 n'a pas servi (location `/cuisine/favoris` en double). HTTP v208 : liste complète + 13 cas query OK, un seul saut, query conservée. `npm test` 26/26 + API v1 OK. Rien en prod, ni DNS ni NAS.
- **Correctif 301 restaurants (12/11 12:23 Europe/Paris, préprod v209, `deployment-01M77QP1F6DH3ZHBF14AQMB31N`)** : `/recettes/restaurant/<slug>` et `/cuisine/restaurant/<slug>` sans barre allaient vers `/restaurants/<slug>` (deux sauts). Les 301 historiques pointent maintenant directement vers `/restaurants/<slug>/` (barre finale, query conservée, un seul saut, pas de barre doublée). Script HTTP 38/38 OK. Rien en prod, ni DNS ni NAS.
- **Côté Lien en bio** : le proxy doit relayer `/cuisine/` (préfixe conservé) avec `X-Forwarded-Prefix: /cuisine`. Liste d'adresses : `docs/adresses-test-cuisine.md`.
- **Sources** : message Superviseur Sites du 12/11/2026 ; D28 ; `docs/migration-prefixe-recettes.md` ; `docs/adresses-test-cuisine.md`.

## D30 — Admin unique par domaines : décisions de cadrage (après la bascule de jigme.fr)
- **Date** : 12/11/2026 12:08 (heure de Paris).
- **Source** : validé par Jigmé auprès de Superviseur Sites, relayé le 12/11/2026 12:08.
- **Contexte** : plan pilote `/workspace/plans/admin-domaines.md` (Lien en bio) et partie Recettes `/workspace/plans/admin-domaines-recettes.md`. Rien ne démarre avant la bascule de jigme.fr. Aucun déploiement, aucun DNS, aucune écriture NAS à cette date.
- **Choix** :
  1. Un fichier SQLite par domaine, dans le back, sert d’index. Les recettes et le lexique restent en Markdown dans le dépôt Git `Web/` (inchangé par rapport à D01 et D21).
  2. Écriture vers le NAS `Cuisine/Recettes/Web` : oui, mais seulement après déduplication, et avec ces garde-fous : compte NAS dédié, qui ne voit que ce dossier (`Sucré/` et `Salé/` invisibles, jamais accessibles aux bots) ; ce qui vient d’Obsidian arrive comme proposition à valider dans l’admin, avec vérification du contenu (Markdown seul, taille limitée, aucun script) ; empreinte de la dernière version synchronisée ; en cas de conflit, on garde les deux versions, on signale, rien n’est écrasé ; instantané et journal à chaque synchro ; interrupteur ; démarrage en lecture seule (Obsidian vers admin) pendant quelques semaines, avant d’activer l’écriture. Cela lève D03 et D22 **pour ce pont seulement**, une fois la déduplication faite et la phase lecture seule terminée.
  3. Une correction faite par un bot est proposée, puis validée d’un clic par Jigmé. Elle ne va pas en ligne toute seule.
  4. `/cuisine` reste en HTML généré ; l’admin a sa propre app. Cela tranche D24 et D25.
  5. Déduplication : Jigmé tranche chaque recette divergente (crème brûlée, carbonara, et les autres écarts). `pizza-saumon-avocat` (présente sur le NAS seulement) arrive en brouillon.
  6. La catégorie `boissons` est notée dans le frontmatter de chaque recette concernée (les 11 fiches aujourd’hui listées dans `src/categories-surcharge.json` seront reportées à l’import). La catégorie reste non modifiable depuis l’admin (D05).
- **Répartition** : les écrans de l’admin passent au bot Admin · jigme.fr ; le bot Recettes garde l’API de Recettes.
- **Raison** : décisions de Jigmé, pour un back unique par domaines, sans écrasement silencieux, et sans donner aux bots l’accès aux originaux Chef (`Sucré/`, `Salé/`).
- **Alternatives écartées** : une seule base SQLite partagée entre domaines ; recettes ou lexique uniquement en tables ; écriture NAS dès le premier jour, ou sans compte dédié ; corrections d’un bot publiées tout de suite ; front `/cuisine` lu dans le navigateur à partir de l’API seule (D25, option non retenue).
- **Sources** : message de Superviseur Sites du 12/11/2026 12:08 ; D03, D04, D05, D21, D22, D24, D25 ; `/workspace/plans/admin-domaines-recettes.md` § 9.

## D31 — Soft-delete recettes/restaurants et photos recos matériel (préprod v210)
- **Date** : 12/11/2026 12:46 Europe/Paris (OK direct de Jigmé pour la préprod) ; live v210 à 12:59.
- **Contexte** : l’admin jigme.fr demandait une suppression restaurable des fiches (comme le lexique) et la conservation des photos, du cadrage et des effets sur les recommandations matériel (passation `recettes-material-media-handoff.md`).
- **Choix** : `POST /api/admin/v1/recipes/:slug` et `POST /api/admin/v1/restaurants/:slug` avec `{ action: "delete", expectedSha }` déplacent le MD vers `.trash/` sur le volume, laissent un `.bak` pour que `seed()` ne ressuscite pas la fiche, et la retirent du site (recettes via `publicVisibility`, restaurants en supprimant la page HTML). Restore inverse. Succès `{ ok: true, slug }`. `expectedSha` SHA-256 obligatoire (428 si absent, 409 si faux). Action inconnue → 400, pas un save. Les recos matériel acceptent `image` (data URL ré-encodée WebP, chemin `/img/…` ou URL https, pas de fetch), `crop` et les effets ; un champ absent ou `null` conserve la valeur précédente (plus de `image: null` forcé).
- **Raison** : même modèle que le lexique, pas de perte définitive, pas d’écriture NAS, compatibilité des POST sans `action` (save).
- **Alternatives écartées** : flag `hidden` seul (déjà une action distincte) ; effacement définitif du volume ; rebuild complet à chaque suppression.
- **Limite** : le build lit le workspace, pas le volume. Une fiche seulement dans `.trash` du volume réapparaît au prochain `TARGET=preprod` si le MD est encore dans `data/` ou `restaurants/`.
- **Sources** : ETAT 12/11 12:59 v210 ; docs/admin-preprod.md ; docs/admin-restaurants.md.

## D32 — La corbeille du volume survit au déploiement préprod (v211)
- **Date** : 12/11/2026 (correctif du risque signalé en v210).
- **Contexte** : le build lit le workspace, pas le volume. Un déploiement recopiait le HTML et pouvait republier une fiche seulement mise à la corbeille sur le volume.
- **Choix** : au démarrage, avant d'écouter, `applyTrash()` retire les pages restaurants des slugs encore dans `/var/recettes-live/restaurants/.trash/` et reprend la liste ; `refreshVisibility()` relit la corbeille recettes pour que le proxy public les laisse en 404 (listes, index, sitemap). Restore inchangé. Le build n'essaie pas de lire le volume (il tourne hors Fly).
- **Raison** : la corbeille live est la source de vérité ; solution la plus simple et la plus sûre, sans écrire le NAS ni modifier le workspace automatiquement.
- **Alternatives écartées** : interroger l'API préprod pendant le build (réseau, secret, échec hors ligne) ; exclure les fiches du workspace à la main à chaque suppression.
- **Sources** : ETAT 12/11 13:10 v211 ; docs/admin-preprod.md ; docs/admin-restaurants.md.

## D33 — Images Amazon, effets, publicité et masquage des recos matériel (préprod v212)
- **Date** : 12/11/2026 13:11 Europe/Paris (demande directe de Jigmé) ; live v212 à 13:26.
- **Contexte** : sur les recos matériel (liens affiliés Amazon), pouvoir coller le lien et choisir parmi les images produit, ou envoyer une image au choix ; appliquer les mêmes effets que les cartes lien en bio ; mentionner « Publicité » (partenariat marque) ; afficher ou masquer rapidement une reco sans la supprimer. Les écrans restent au bot Admin · jigme.fr ; cette décision couvre l'API Recettes et le rendu public.
- **Choix** :
  1. `POST /api/admin/v1/materiel/image-candidates` `{ url }` (Bearer). Suit les redirections HTTPS (dont `amzlinks.in` pour `link.amazon`), lit `og:image` / images principales et variantes, renvoie `{ ok, finalUrl, asin?, candidates: [{ url, width?, height? }] }`. Timeouts 8 s, allowlist Amazon + CDN, DNS revalidé, pas de SSRF vers le réseau privé, pas d'exécution. Si Amazon bloque (captcha/503/délai) : erreur claire, l'envoi d'image reste le secours.
  2. Choisir une candidate : la passer en `recos[].image` au POST save ; le serveur la télécharge et la ré-encode en WebP local (pas de hotlink). Une data URL ou un chemin `/img/…` restent acceptés.
  3. Nouveaux champs reco : `ad` (badge Publicité) et `adLabel` (défaut « Publicité »), `hidden` (alias `visible: false`), `fx` / `mention` / `halo` alignés sur le lien en bio (CP2, EN2, CP30, CP26, CP13, CP11). Le masquage retire la reco des pages via le PATCH HTML déjà en place (`publicRecos`), sans rebuild. Liens affiliés/pub : `rel="sponsored nofollow noopener"`.
- **Raison** : Jigmé doit pouvoir mettre en avant un matériel (partenariat) et le retirer tout de suite, avec une image choisie et les mêmes effets que le lien en bio, sans dépendre d'un hotlink Amazon.
- **Limite** : depuis Fly (et depuis la box), Amazon a répondu un captcha sur `link.amazon/B0flvWedK` ; `image-candidates` renvoie alors 502 et il faut envoyer une image. Un champ image absent ou `null` au POST conserve l'image déjà enregistrée (pas d'effacement par omission).
- **Sources** : ETAT 12/11 13:26 v212 ; docs/admin-preprod.md ; passation `recettes-material-media-handoff.md`.

## D34 — Effacement explicite de l'image d'une reco matériel (préprod v213)
- **Date** : 12/11/2026 13:45 Europe/Paris.
- **Contexte** : complément de D33. `null` ou l'absence du champ `image` au POST conserve l'image déjà enregistrée ; il manquait un moyen d'effacer une photo, et de retirer le WebP orphelin.
- **Choix** : `recos[].image: ""` (chaîne vide) = effacement explicite. La reco relue n'a plus de champ `image` ; `crop` est retiré avec l'image (le cadrage ne s'applique qu'à une image). Les pages publiques sont patchées comme d'habitude. Le fichier `/img/materiel/<id>/<hash>.webp` est supprimé du volume et de sa copie HTML s'il n'est plus référencé par aucune reco ni aucune page recette.
- **Raison** : l'admin doit pouvoir retirer une image choisie, sans laisser d'orphelins, et sans casser la conservation quand le champ est omis.
- **Sources** : ETAT 12/11 13:45 v213 ; docs/admin-preprod.md ; D33.

## D35 — Mesure d'audience maison (Lien en bio) en préprod seulement (v214)
- **Date** : 12/11/2026 17:40 Europe/Paris (OK direct de Jigmé dans le fil Recettes) ; live v214 à 17:51.
- **Contexte** : Lien en bio (via Superviseur Sites) a livré un script de mesure d'audience maison, sans cookie et sans bandeau, qui envoie la page vue, le référent externe et les `utm_*` vers `/api/track`, en respectant DNT/GPC, l'opt-out (`localStorage audience_optout`) et `data-no-track`. À coller dans le `<head>` des pages `/cuisine` et `/restaurants`, en préprod seulement.
- **Choix** :
  1. En `TARGET=preprod`, le gabarit commun `page()` (accueil, fiches, catégories, signets, affiliés, 404, listing et fiches restaurants) injecte `<script src="…/a.js" defer></script>` dans le `<head>`. L'URL vient de `AUDIENCE_SCRIPT_URL`, sinon `CONTACT_BASE` / `LIENENBIO_URL`, sinon `https://preprod-lienenbio-jigme.fly.dev`.
  2. En `TARGET=prod`, rien n'est injecté (plus tard `https://jigme.fr/a.js`, pas maintenant).
  3. CSP nginx (`csp.inc`) : en préprod, `https://preprod-lienenbio-jigme.fly.dev` est ajouté à `script-src` et `connect-src`, pour l'accès direct à `recettes-jigme-preprod.fly.dev`. Via le proxy Lien en bio, c'est la même origine.
  4. Pas de script sur l'admin ni sur l'API. `/favoris/`, `/affilies/` et les pages de test le conservent (aucun `data-no-track` existant sur ces pages).
- **Raison** : mesurer l'audience des pages recettes et restaurants sans cookie ni bandeau, uniquement en préprod, sans toucher à la prod, au DNS ni au NAS.
- **Sources** : message de Lien en bio & Media Kit (12/11) ; OK direct de Jigmé 12/11 17:40 ; ETAT 12/11 17:51 v214.

## D36 — Première tranche admin par domaines : index SQLite Recettes et API v1 en lecture (branche, pas de déploiement)
- **Date** : 13/11/2026, matin (Europe/Paris). Contrat API v1 §9 validé par Lien en bio et Admin · jigme.fr.
- **Contexte** : démarrer l'admin par domaines en préprod, sans attendre la bascule. Première tranche locale seulement : index du domaine Recettes et routes de lecture. Aucun déploiement Fly, aucune écriture NAS, rien en prod.
- **Choix** :
  1. Index SQLite reconstructible depuis les Markdown (`domains/cuisine/index-recettes.mjs`, `node:sqlite`). Schéma du §9 (tables d'index, historique, conflits, propositions, outbox, sync_state). Chemin configurable (`RECETTES_INDEX`), défaut `/var/recettes-live/index/recettes.sqlite` en préprod. La vérité reste le Markdown.
  2. Catégorie `boissons` lue dans le frontmatter ; à défaut, repli sur `src/categories-surcharge.json` (11 fiches) tant que l'import n'a pas reporté la catégorie dans le YAML.
  3. Routes de lecture seulement, sur l'API admin existante (même processus, préfixe distinct) : `GET /api/v1/health` (versions par domaine, `recettes: "1"`, sans secret) ; `GET /api/v1/admin/recettes` (filtres `q`, `category`, `statut`, pagination `page` + `limit`) et `GET /api/v1/admin/recettes/<slug>` (`sha`, `ETag`, 304). Alias `/recipes` conservé (table du §9). 404 `{ "ok": false }` sans `error` si Bearer absent ou faux ; 403 si portée insuffisante ; `Cache-Control: no-store`. Aucune écriture v1 (POST → 405).
  4. `/api/admin/v1/*` inchangé (401 sans Bearer, réponses identiques). Instantané API : seules les empreintes HTML ont été actualisées (script d'audience v214 déjà dans `dist/`, D35) ; les corps JSON admin sont strictement identiques.
- **Raison** : avancer le contrat v1 sans casser l'admin actuel ni Ménichat, et sans déployer avant que la lecture soit relue.
- **Limite** : rien n'est encore en préprod Fly. nginx (`/api/v1/`) et le `Dockerfile` (copie de `domains/` et de la surcharge) sont prêts pour un déploiement ultérieur, sur OK. L'image devra fournir Node ≥ 22 (`node:sqlite`). Pas d'écriture, pas de webhooks, pas de clés à portée limitée au-delà du secret actuel et d'une variable de test `API_V1_EXTRA_KEYS`.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9 ; D26, D30, D35 ; plan `admin-domaines-recettes.md`.

## D37 — Arbitrages Jigmé sur les fiches divergentes (préprod v215)
- **Date** : 13/11/2026, 9:27 Europe/Paris (Jigmé, relayé par Superviseur Sites).
- **Contexte** : inventaire lecture seule des quatre copies (13/11) et liste à trancher. Application dans le dépôt (`main`) et en préprod seulement. Pas d’écriture NAS, pas de déploiement prod, branche `admin-domaines` non touchée.
- **Choix** :
  1. `creme-brulee` et `tagliatelles-carbonara` : les post-it (`lexique_local`) reprennent exactement les entrées du NAS (texte long des notices centrales, champ `ref`). Étapes, doses, trois styles et le reste de la fiche inchangés.
  2. `guacamole`, `cocotte`, `balance` et `al-dente` : on garde la version du dépôt. Le volume préprod est réeligné là où il différait (guacamole et son `.bak`, balance, al-dente), via l’API admin (`expectedSha`) ou, à défaut pour une recette entière, par copie depuis le seed de l’image.
  3. `reduire` : les deux formes NAS (`faites réduire`, `Faites réduire`) sont reportées dans le dépôt et sur le volume.
  4. `pizza-saumon-avocat` (NAS seulement) arrive dans le dépôt en `statut: brouillon` et `hidden: true`. Absente des listes publiques, de `idx.json` et du sitemap (filtre de build + projection de visibilité). Visible dans l’admin si le fichier est présent sur le volume.
  5. Les 249 recettes et les notices « sans changement de contenu » restent la version du dépôt. Les 14 notices de lexique au même texte, YAML différent, sont réelignées sur le volume si c’est sans risque.
- **Raison** : une seule version retenue par fiche, post-it des pilotes alignés sur le lexique central, brouillon non publié, préprod seulement.
- **Sources** : `/workspace/plans/a-trancher-2026-11-13.md` ; inventaire du 13/11 ; message Superviseur Sites 13/11 9:27.

## D38 — Écriture v1 du domaine Recettes (préprod v218)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes).
- **Contexte** : la lecture v1 est en préprod depuis v217 (D36). Cette tranche ajoute l’écriture du seul domaine Recettes, en préprod seulement, sans toucher au NAS ni à la prod, et sans modifier `/api/admin/v1/*`.
- **Choix** :
  1. `POST /api/v1/admin/recettes` (`action: "create"`, fiche en `statut: brouillon`) et `POST /api/v1/admin/recettes/<slug>` (alias `/recipes`) avec les actions `create`, `update` (alias `save`), `publier`, `delete`, `restore`, `hide`, `show` (alias `visibility`). Alias `POST …/<slug>/restore`.
  2. Portées : `admin-recettes:ecrire` (toutes les actions) ; `bot-hermes:recettes:ecrire` (création d’un brouillon seulement, forcé `hidden: true` ; jamais `publier`, `delete`, `restore`, `hide`/`show`). `RECETTES_ADMIN_SECRET` possède les portées admin (depuis v243 / D51 ; pendant la transition v235, `ADMIN_API_SECRET` les conservait aussi).
  3. `expectedSha` ou `If-Match` obligatoire sur une fiche existante (sauf `create` et `restore`). Absent, invalide ou périmé → `409` `{ ok:false, error:"conflit : la fiche a changé depuis la lecture (recharger)", currentSha }` et en-tête `ETag`. Pas de 428 sur cette surface v1.
  4. Le schéma vivant `recette-web-jigme/v2` (validateur unique déjà partagé avec le build) est vérifié avant toute écriture. Les doses restent les `qty` / `unit` du YAML ; l’API ne calcule aucune dose à l’échelle. `category` est posée à la création, ensuite en lecture seule (D05).
  5. Journal d’audit en ajout seul sur le volume : `/var/recettes-live/audit/recettes-v1.jsonl` (date, portée, action, slug, ancien et nouveau sha). La table SQLite `historique` est aussi mise à jour.
  6. L’index SQLite est mis à jour pour la seule fiche concernée (`upsertSlug`), pas un rebuild complet. La page HTML publique n’est pas régénérée par un build : les brouillons, les fiches `hidden` et la corbeille sont retirés du public par la projection de visibilité (le `statut: brouillon` est maintenant pris en compte, en plus de `hidden`). Si une fiche déjà publiée et visible est mise à jour, on réutilise le patch HTML existant (D11) sur `/cuisine/r/<slug>/` seulement. idx.json, listes et sitemap d’une *nouvelle* publication attendent le prochain build du site. Les webhooks d’outbox ne sont pas encore émis.
  7. `GIT_COMMIT` (argument de build) : s’il est présent, `GET /api/v1/health` renvoie `commit` (7 caractères). Liste admin : `?limit=all` renvoie toutes les fiches actives (la vue aplatie reste pour plus tard).
- **Limite** : pas de reconstruction complète d’une nouvelle page publique sans build ; pas de webhooks ; écriture limitée au domaine Recettes (matériel, lexique, restaurants restent en lecture sur `/api/v1`).
- **Raison** : avancer le contrat §9 en préprod, avec un CAS strict, un audit, et sans faire régresser l’admin actuel ni exposer un brouillon.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9 ; D05, D11, D31, D36, D37.

## D39 — Écriture v1 matériel, lexique et restaurants (préprod v219)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, reprise du chantier admin par domaines).
- **Contexte** : l’écriture v1 Recettes est en préprod depuis v218 (D38). Cette tranche étend lecture et écriture aux trois autres domaines, en préprod seulement, sans toucher au NAS ni à la prod, et sans modifier `/api/admin/v1/*` (l’admin s’en sert encore pour Matériel, Lexique, Restaurants et la photo).
- **Choix** :
  1. `GET` et `POST /api/v1/admin/materiel`, `/api/v1/admin/lexique` et `/api/v1/admin/restaurants` (fiche `…/<id>` ; alias `POST …/<id>/restore`). Actions communes : `create`, `update`, `delete`, `restore`, `hide`, `show` (alias `visibility`). Création en `statut: brouillon` et `hidden: true`.
  2. Portées : `admin-materiel:ecrire`, `admin-lexique:ecrire`, `admin-restaurants:ecrire`. `RECETTES_ADMIN_SECRET` les possède (depuis v243 / D51 ; pendant la transition, `ADMIN_API_SECRET` les possédait déjà).
  3. `expectedSha` ou `If-Match` obligatoire sur un élément existant (sauf `create` et `restore`). Absent, invalide ou périmé → `409` `{ ok:false, error:"conflit : la fiche a changé depuis la lecture (recharger)", currentSha }` et en-tête `ETag`. Pas de 428 sur cette surface v1. L’ancienne API garde son 428 / sha optionnel.
  4. Journal d’audit en ajout seul par domaine : `/var/recettes-live/audit/{materiel,lexique,restaurants}-v1.jsonl`. Index SQLite par domaine, reconstructible depuis les MD : `/var/recettes-live/index/{materiel,lexique,restaurants}.sqlite`. Liste admin : `?limit=all`.
  5. Un brouillon n’est jamais public : visibilité matériel, listing et page restaurant (un `statut: brouillon` est traité comme une fiche masquée). Les stores honeypot existants restent utilisés par `/api/admin/v1/*` ; les modules `domains/` ne les importent pas (injection depuis `admin-api.mjs`, leçon v218 / `/opt/hp`).
  6. Action `photo` ajoutée sur `POST /api/v1/admin/recettes/<slug>` (réencodage WebP déjà en place, CAS 409, audit et index). L’admin peut continuer à passer par l’ancienne route.
- **Limite** : pas de webhooks (étape suivante). Actions additionnelles du contrat non branchées en v1 pour l’instant : `image-candidates` matériel, `import-markdown` / `export` lexique, blocs et photo restaurants. Soft-delete matériel : disponible en v1 seulement (l’ancienne API n’en a pas).
- **Raison** : terminer la surface d’écriture commune du contrat §9 en préprod, avec le même CAS et le même audit que Recettes, sans couper l’admin actuel.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9 ; D38, D36, D11, D31.

## D49 — Cascade #depuis-bio reportée à l’activation du prerender (préprod v228)
- **Date** : 14/11/2026 Europe/Paris (lien en bio préprod v190 en ligne ; mesure de contrôle après le fondu noir).
- **Contexte** : le lien en bio prérend désormais `/cuisine/#depuis-bio` (speculation `moderate`, `immediate` au `pointerdown`), précharge photo et polices, navigue à 720 ms, et le `::after` mobile du FLIP est le dégradé noir identique à `.home-banner::after`. Jigmé veut un enchaînement sans trou ni saut. La cascade d’accueil ne doit pas se jouer pendant que le document est encore invisible (`document.prerendering`).
- **Cause mesurée** : `BIO_JS` (dans `<head>`) posait `rj-bio` + `depuis-bio` et armait le `setTimeout` 1300 ms dès le parse, sans lire `document.prerendering`. Simulation Chromium (même page préprod, `document.prerendering` forcé à true) : les classes sont ajoutées pendant le prerender (t≈298 ms), les `rj-enter-*` démarrent dès que le CSS est là (t≈1031 ms, `currentTime` qui avance alors que la page est invisible), la pilule « ← Lien en bio » est déjà terminée vers 1496 ms, et `rj-bio` est retiré à 1598 ms — toujours en prerender. À l’activation, la cascade peut donc être déjà finie. Les mesures bout-en-bout sous Playwright/CDP ne voient pas ce cas : Chrome refuse le prerender dès qu’un DevTools est attaché (`PrerenderingDisabledByDevTools`) ; dans ces passages la cascade part bien à `currentTime = 0` au premier rendu visible, et le dégradé bas de bannière ne saute plus (luma ≈ 27 → 30 au swap, plus de blanc → noir).
- **Choix** : dans `build.mjs` et `generate-targeted.mjs`, `BIO_JS` attend `prerenderingchange` avant d’ajouter `rj-bio` / `depuis-bio` (ou `rj-enter`) et avant d’armer le timer 1300 ms. Arrivée normale (pas de prerender, tests `t-depuis-bio.cjs`) : les classes restent posées tout de suite, avant la première peinture. Titre toujours sans `rj-bio-in` grâce à `depuis-bio`. Rien d’autre dans la cascade CSS, `/api/*` inchangée.
- **Limite** : rien en prod, rien sur le NAS. Le trou visuel 57–79 ms annoncé par le lien en bio n’a pas pu être reproduit sous CDP (prerender y est désactivé) ; sans prerender, le trou mesuré reste d’environ 340–480 ms (fin du FLIP → premier photogramme /cuisine).
- **Raison** : une cascade jouée en coulisse est perdue pour l’utilisateur au moment où /cuisine apparaît.
- **Sources** : demande de contrôle 14/11 après lienenbio v190 ; simulation `/tmp/sim-prerender.cjs` ; mesures `/workspace/screens/enchainement-v190/` ; D48, D46.

## D48 — Trou d’enchaînement lien en bio → /cuisine : HTML réutilisable et preload plus tôt (préprod v227)
- **Date** : 14/11/2026 Europe/Paris (retour de Jigmé après validation de la cascade v226, fil Recettes, message « exactement ça » / enchaînement trop lent).
- **Contexte** : en cliquant sur « Les recettes de cuisine » depuis le lien en bio (préprod), on voit le FLIP (bannière qui s’agrandit, « Jigmé Cuisine » apparaît), puis un temps d’arrêt, puis seulement la cascade /cuisine. Jigmé situe le souci surtout dans la première partie (côté lien en bio). Mesure Chromium 390×844, 3 passages, `performance.now` + screencast : voir `/workspace/plans/enchainement-bio-cuisine.md`.
- **Cause mesurée** (médiane des 3 passages, clic = 0) : le FLIP se termine vers 722 ms ; `location.href` part seulement à 774 ms (`setTimeout` 750 ms dans RecettesLink, après `DUREE_GLISSEMENT` 700 ms). Un prefetch speculation-rules (eagerness `moderate`) démarre au toucher et a déjà le HTML vers 210 ms, mais `Cache-Control: no-cache` force une revalidation bloquante (~175–200 ms, `fromPrefetchCache: false`). Ensuite le parse de ~536 Ko d’HTML et le chargement des polices / de `banniere-hero-800.*.webp` (URL différente de celle du FLIP, `/images/banniere-hero-800.webp`) occupent encore ~400–500 ms. Premier rendu /cuisine et début de cascade vers 1300–1470 ms. Trou visible après la fin du FLIP : ~580–750 ms. Premier photogramme /cuisine : titre « Jigmé Cuisine » sur un dégradé vide, photo absente (arrivée plus tard). La cascade elle-même part bien à la première peinture (pas de délai ajouté côté accueil). Le code du lien en bio n’a pas été modifié (appartient au bot Lien en bio).
- **Choix (côté /cuisine seulement)** : (1) `Cache-Control` du HTML statique (`nginx.conf` `location /`) : `public, max-age=0, stale-while-revalidate=120` à la place de `no-cache`, ETag conservé — un prefetch peut servir le corps immédiatement, revalidation en arrière-plan (gain attendu ~175–200 ms). 404 et `robots.txt` restent `no-cache`. (2) Dans `build.mjs` et `generate-targeted.mjs`, les `link rel=preload` de la bannière (`${head}`) sont placés juste après les preloads de polices, avant le CSS critique inlined, pour que le scanner démarre l’image plus tôt pendant l’analyse du HTML. La cascade `#depuis-bio` et les preloads de polices / bannière existants restent. Rien d’autre côté animation.
- **Limite** : le trou restant (~400–550 ms de parse + photo non partagée avec le FLIP) ne peut être refermé que par le lien en bio (prerender de `/cuisine/` pendant le FLIP, prefetch de l’image cuisine, éventuellement View Transition). Proposition prête à appliquer : `/workspace/plans/enchainement-bio-cuisine.md`. Rien en prod, rien sur le NAS, `/api/*` inchangée. Non vérifié sur un vrai iPhone.
- **Raison** : la cascade v226 est validée ; l’arrêt vient de l’attente avant navigation et du fait que le prefetch déjà en place n’est pas utilisable tout de suite.
- **Sources** : retour Jigmé 14/11 [pt536u] ; mesures `/workspace/screens/enchainement-bio-cuisine/clean/` ; D204 (HTML `no-cache` + ETag, que cette entrée assouplit sans la réécrire) ; D47.

## D47 — Étiquette « Recette au hasard » liée à la carte centrale (préprod v226)
- **Date** : 14/11/2026 Europe/Paris (retour de Jigmé sur la planche v225, fil Recettes).
- **Contexte** : sur la planche `accueil-v225/planche-depuis-bio.png`, de t0000 à t0420, l’étiquette « Recette au hasard » flottait seule sous la bannière, avant l’arrivée des cartes du carrousel.
- **Cause** : le bandeau est dans `.random-tools`, calque du deck, pas un enfant de l’hôte `.is-front`. La cascade D46 animait les cartes (opacity 0 jusqu’à 480 ms) mais laissait l’étiquette visible dès le montage du carrousel.
- **Choix** : masquer `.random-tools` pendant `rj-bio` / `rj-enter` (`rj-enter-fade`, `fill: both`, même délai 480 ms et même durée 480 ms que la carte centrale). L’étiquette apparaît avec sa carte. Signets, titres et ombres restent sur l’hôte de chaque carte et n’apparaissent donc pas avant elle. `prefers-reduced-motion` : pas d’animation, étiquette visible. Si JS échoue : pas de classe, tout est visible. Le reste de la cascade D46 est inchangé (recherche dans la bannière, L/C/R, pop-in, `rv-pre` à 1200 ms).
- **Limite** : rien en prod, rien sur le NAS, `/api/*` inchangée. Non vérifié sur un vrai iPhone (captures Chromium 390×844).
- **Raison** : un badge qui précède sa carte casse l’assemblage de la page.
- **Sources** : retour Jigmé 14/11 sur la planche v225 ; D46 ; `src/home-ui.css`, `src/critical.css`, `src/home-random.js`.

## D46 — Barre de recherche dans la bannière et cascade d’assemblage de l’accueil (préprod v225)
- **Date** : 14/11/2026 Europe/Paris (retours iPhone de Jigmé, suite de D45 / v224, fil Recettes).
- **Contexte** : depuis le lien en bio, la barre de recherche arrivait par la droite, hors de l’image de bannière, puis se recalait (visible sur `depuis-bio-t0360-cascade.png` de v224). Le reste de la page apparaissait encore trop d’un coup : Jigmé veut la voir s’assembler, rapidement et sans bug.
- **Cause** : les keyframes d’entrée animaient `transform`, ce qui écrasait le `transform: translateX(-50%)` de centrage de `.hsearch` (`left: 50%`). Au `to { transform: none }` puis au retrait de la classe, la barre se recentrait d’un coup.
- **Choix** :
  1. Les entrées n’animent plus `transform`. Elles utilisent les propriétés individuelles `translate` / `scale` (et `opacity`), qui se composent avec le centrage CSS et avec le `translateX` JS du carrousel. Audit des autres animations d’entrée : même règle.
  2. Carrousel « recettes au hasard » : chaque carte est animée sur l’hôte (`.is-front`, `.is-slot-left`, `.is-slot-right` posées par `home-random.js`), pas sur le `.tile` interne — ainsi photo, favori et ombre voyagent ensemble, sans laisser un chassis blanc en place, et sans toucher au `transform` / `opacity` JS, au scroll-snap ni au drag. Centre : scale 0,7 → 1 + fondu (480 ms). Gauche : glisse de −56 px. Droite : +56 px. Le `.random-deck` ne bouge pas (pas de recadrage).
  3. Pop-in de la pilule « ← Lien en bio » et du bouton « + » (`.rj-rad-main` seulement, emplacement radial inchangé) : scale depuis 0,5 avec léger dépassement, `cubic-bezier(.34, 1.56, .64, 1)`, 420 ms. Adapter / Catégories / Tri : même pop, échelonnés. Onglets et recherche : slide de 52 px vers le haut. Première carte de la liste : slide 52 px + léger zoom (`rj-enter-zoom`), délai adapté pour le correctif v224 (mesure `rv-pre` à 1200 ms, retrait des classes à 1300 ms).
  4. Rythme : chaque animation 420–480 ms ; page complète vers 1,09 s (dernière fin : première carte de liste, 640+450 ms). `prefers-reduced-motion` : pas d’animation, contenu visible. Si JS échoue : pas de classe, tout est visible.
- **Limite** : rien en prod, rien sur le NAS, `/api/*` inchangée. Le menu radial (ouverture, calque fixe) n’est pas animé. Non vérifié sur un vrai iPhone (captures Chromium 390×844).
- **Raison** : une barre de recherche qui sort de la bannière casse l’arrivée depuis le lien en bio ; l’accueil doit se construire sous les yeux, sans saut ni flash.
- **Sources** : retours Jigmé 14/11 (suite v224) ; D45 ; `src/home-ui.css`, `src/critical.css`, `src/home-random.js`, `src/home.js`.

## D45 — Flash de la première carte sous le carrousel et cascade d’entrée de l’accueil (préprod v224)
- **Date** : 14/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes).
- **Contexte** : depuis le lien en bio (`#depuis-bio`), la bannière arrive déjà en place (FLIP côté lien en bio, 700–900 ms, puis navigation). Le reste de l’accueil apparaissait d’un coup. En bas de l’écran, la première carte de la liste (après le carrousel, selon le tri, ex. « Banane flambée ») montrait le haut de sa photo puis disparaissait, et ne revenait qu’au scroll. Le carrousel lui-même était correct.
- **Cause** : la révélation au scroll (v16, `rv-pre` / IntersectionObserver dans `home.js`) posait `opacity: 0` et `translateY(24px)` sur une carte déjà partiellement visible. Deux déclencheurs : (1) `getBoundingClientRect()` incluait le `translateY` de l’ancienne animation `rj-bio-in` (`fill: both`), ce qui plaçait le haut de la carte au-delà de `innerHeight` et lui donnait `rv-pre` après la première peinture ; (2) `rootMargin: 0 0 -8% 0` empêchait l’observer de révéler une carte dont seule une fine bande était dans le viewport. L’ancienne cascade `html.rj-bio` ne couvrait que quelques tuiles et les rangées `.hb-l` / `.hb-r`, déjà désactivées ensuite.
- **Choix** :
  1. Une tuile déjà dans le viewport, même partiellement (marge de 64 px pour les transforms et l’`innerHeight` iOS), ne reçoit plus `rv-pre`. Si elle l’a déjà, la classe est retirée tout de suite. L’observer n’a plus de marge négative en bas (`threshold: 0`). Pendant `rj-bio` / `rj-enter`, on attend la fin de la cascade (800 ms) avant de mesurer, pour ne pas masquer la première carte.
  2. Cascade d’entrée (CSS critique, classes posées en `<head>` avant la première peinture) : pilule « ← Lien en bio » (40 ms), recherche (80 ms), onglets (130 ms), Adapter / Catégories / Tri (170 / 200 / 230 ms), carrousel (260 ms, fondu seul — un `transform` sur `.random-deck` recadrerait les cartes latérales), première(s) carte(s) de la liste (320–400 ms, léger zoom). Durée 320–360 ms, courbe `cubic-bezier(.22, 1, .36, 1)`, cascade totale ~620 ms. Seulement `opacity` / `transform` (pas de CLS). `prefers-reduced-motion` : aucune animation, contenu visible. Si JS échoue : pas de classe, tout est visible ; si la classe reste, l’animation se termine à `opacity: 1`.
  3. `#depuis-bio` → `rj-bio` + `depuis-bio` (titre de bannière toujours sans `rj-bio-in`, hash retiré, `depuis-bio` gardée). Chargement direct → `rj-enter` (même cascade, titre inchangé). Pas de `rj-enter` en `back_forward` ni au rechargement avec position restaurée. Le menu radial n’est pas animé.
- **Limite** : rien en prod, rien sur le NAS, `/api/*` inchangée. La View Transition / FLIP depuis le vrai lien en bio (site lienenbio) n’est pas rejouée ici ; seule l’arrivée sur `/cuisine/#depuis-bio` est couverte. Non vérifié sur un vrai iPhone.
- **Raison** : l’état initial affiché doit être l’état final (aucune carte qui apparaît puis disparaît), et l’accueil doit se construire aussi fluideement que la bannière, sans faire attendre.
- **Sources** : demande Jigmé 14/11 ; `lienenbio-maison/components/RecettesLink.tsx` ; v16 / `src/home.js` ; D29 (préfixe `/cuisine`).

## D44 — Meta recettes, détail des brouillons et 304 sur l’export lexique (préprod v223)
- **Date** : 13/11/2026 Europe/Paris (demande Admin, relayée par Jigmé, fil Recettes).
- **Contexte** : trois manques bloquaient l’écran Admin sur la surface `/api/v1/admin/…` déjà en préprod. Aucune écriture volume dans cette tranche.
- **Choix** :
  1. `GET /api/v1/admin/recettes/meta` reprend le même corps que `/api/admin/v1/meta` (fonction partagée `adminMeta()`). `ETag` = SHA-256 du JSON, `If-None-Match` → `304`. La route legacy reste en place, inchangée.
  2. Le détail `GET /api/v1/admin/{recettes,lexique}/brouillons/<id>` accepte slug ou id, y compris les tirets (le motif d’URL excluait `-`, d’où le 404 sur `pizza-saumon-avocat` pourtant présente dans la liste). La liste et le détail couvrent les fiches `statut: brouillon` ou `hidden: true` (non supprimées). Chaque entrée de la liste est lisible au détail.
  3. `GET /api/v1/admin/lexique/<id>/export` envoie `ETag` égal au `sha` et répond `304` si `If-None-Match` correspond.
- **Limite** : `/api/admin/v1/*` inchangée. Pizza laissée brouillon et hidden, jamais publiée. Rien sur le NAS, rien en prod, rien sur Ménichat.
- **Raison** : l’admin doit pouvoir lire la méta, ouvrir chaque brouillon de la liste, et revalider l’export lexique sans recharger le Markdown.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9.5 et §9.8 ; D42, D43.

## D43 — Routes Admin manquantes : image-candidates, import/export lexique, blocs et photo restaurants (préprod v222)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes).
- **Contexte** : D39 a ouvert l’écriture v1 de matériel, lexique et restaurants, mais quelques routes de l’admin actuel manquaient encore. Cette tranche les ajoute, en reprenant le comportement de `/api/admin/v1/*`, sans retirer ni modifier l’ancienne API, et sans allumer `push-obsidian`.
- **Choix** :
  1. `POST /api/v1/admin/materiel/image-candidates` : même comportement que la route legacy (allowlist Amazon, pas de SSRF, 400 / 502 / 503). Pas d’`expectedSha` (aucune écriture).
  2. `POST /api/v1/admin/lexique/<id>` `{ "action": "import-markdown", "markdown", "expectedSha" }` (importe sur le volume, jamais le NAS ; sha périmé → `409` + `currentSha`) et `GET /api/v1/admin/lexique/<id>/export`. `POST …/push-obsidian` n’existe pas en v1 (`404`).
  3. Actions restaurants `block-add`, `block-update`, `block-delete`, `block-move`, `blocks-order`, `blocks`, et `photo` (`target: "cover"` ou `"library"`). Même sémantique que le legacy. `cover` et les blocs exigent `expectedSha` (`409` si périmé). `library` écrit un WebP sous `/img/resto/<slug>/` sans modifier la fiche (pas de sha).
  4. Toutes ces routes sont réservées à `admin-<domaine>:ecrire`. Une clé bot reçoit `403`.
  5. Comme ailleurs : audit, webhooks et reconstruction ciblée si un élément publié (non `test`, non `hidden`) change.
- **Limite** : pas de `push-obsidian`. `/api/admin/v1/*` inchangée. Rien sur le NAS, rien en prod, rien sur Ménichat.
- **Raison** : l’admin actuel doit pouvoir basculer sur `/api/v1/admin/…` sans perdre ces actions.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9.5 ; D39, D40, D41.

## D42 — Brouillons et propositions pour les bots Hermès et Grok (préprod v221)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes, à enchaîner après D41 dans le même déploiement).
- **Contexte** : l’API v1 écrit déjà les recettes et le lexique (D38–D39). Cette tranche ouvre une surface bot qui ne peut jamais publier, pour que Hermès et Grok Bot proposent des fiches ou des corrections, et que l’admin les accepte ou les refuse.
- **Choix** :
  1. Deux clés Fly, `API_KEY_BOT_HERMES` et `API_KEY_BOT_GROK`, seulement sur `recettes-jigme-preprod`, chacune révocable seule. L’app ne conserve en mémoire que le hash SHA-256 de la valeur, jamais la clé en clair. L’audit enregistre l’identifiant `bot-hermes` ou `bot-grok`, pas la valeur. Les clés ont été générées et posées par `flyctl secrets import --stage`, puis appliquées au déploiement v221 ; la valeur n’apparaît ni dans le dépôt, ni dans les journaux, ni dans les comptes rendus.
  2. Portée : `bot-*:recettes:ecrire` et `bot-*:lexique:ecrire` seulement. Actions autorisées : `create`, `update`/`save`. `delete`, `publier`, `hide`/`show`/`visibility`, `restore` et `photo` → `403`.
  3. Toute écriture bot crée un **brouillon** ou une **proposition**, jamais du contenu publié. Un `create` est toujours un brouillon masqué. Un `update` sur une fiche déjà `publiee` n’écrit pas le Markdown : il crée une proposition liée (`sha_base`, source `bot-hermes` ou `bot-grok`). La version précédente reste récupérable.
  4. CAS : sha périmé → `409` + `currentSha`, rien n’est écrasé. HTML, attributs `on*` et `javascript:` refusés en `400`. Corps trop gros refusé. Limite de débit par clé → `429` + `Retry-After` (défaut 30/min).
  5. Routes Admin (écran de validation), contrat §9.8 : `GET /api/v1/admin/{recettes,lexique}/brouillons` et `/brouillons/<id>` ; `GET /api/v1/admin/{recettes,lexique}/propositions` et `/propositions/<id>` (détail avec `diff` ligne à ligne vis-à-vis de la version publiée) ; `POST …/propositions/<id>` `{ "action": "accept" }` ou `{ "action": "reject" }`, réservés à `admin-recettes:ecrire` / `admin-lexique:ecrire`. `accept` applique un `update` avec `expectedSha = sha_base` (409 si la fiche a changé). Un bot ne peut ni accepter ni rejeter.
- **Limite** : pas de photo, pas de matériel ni restaurants, rien sur Ménichat ni `/api/admin/v1/*`. La révocation d’une clé a été vérifiée en local (secret d’environnement retiré → `404`). Aucune proposition n’a été acceptée en préprod.
- **Raison** : donner aux bots une voie d’écriture utile sans jamais modifier le public à leur place.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §9.8 ; D30, D38, D41.

## D41 — Génération ciblée réelle et reconstruction des pages liées (préprod v221)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes).
- **Contexte** : D40 livrait déjà les webhooks HMAC, mais la reconstruction d’une page publiée partait d’un gabarit (rustine D11), et le récepteur ne régénérait pas encore les pages qui dépendent du matériel, du lexique ou des restaurants.
- **Choix** :
  1. Les fonctions d’écriture HTML de `build.mjs` (fiche, idx, catégories, sitemap, pages et sitemap restaurants) sont factorisées dans `generate-pages.mjs`. `generate-targeted.mjs` reconstruit le même contexte qu’un build (sans incrémenter `preprod-version.txt`, sans refaire tout le pipeline d’images) et n’écrit que les pages demandées.
  2. Preuve locale : régénération ciblée de `creme-brulee` (fiche, idx, sitemap, catégorie) sur une copie du `dist/` v220 : `diff -rq` vide, fiche identique à l’octet près. Les `?v=` des assets sont relus dans le HTML déjà servi (hash des fichiers non préfixés), et `title_lum` / `hero_tone` sont calculés avant les dates, comme dans le build complet.
  3. Le récepteur webhook (`applyPublicEvent`) appelle cette génération réelle. Sur le serveur Fly, le SSR Playwright est désactivé (`ssr: false`) pour ne pas bloquer Node ; une nouvelle page de test peut être pré-SSR au prochain build. Les listes déjà publiées (`idx.json`, sitemap, tuiles de catégorie) sont mises à jour au scalpel, pour ne pas réécrire un idx complet à partir d’un contexte partiel. Le chemin v1 ne passe plus par le patch D11 (celui-ci reste sur `/api/admin/v1/*`).
  4. Événements matériel / lexique : régénération des fiches qui citent l’élément (cartes, post-it / notices). Événements restaurant : page, listing et sitemap restaurants.
- **Limite** : pas de SSR Playwright dans l’image Fly (la preuve locale l’a exercé). Rien sur le NAS, pas de sync Obsidian, rien en prod. Le premier essai de déploiement a échoué parce que `.dockerignore` excluait les `.mjs` à la racine et presque tout `src/` ; corrigé (commit `403970f`) puis un seul déploiement réussi, sans nouveau build du site.
- **Raison** : une publication ou un changement de matériel / lexique / restaurant doit reconstruire exactement les mêmes pages qu’un build complet, pas un gabarit approchant.
- **Sources** : D11, D40 ; `build.mjs` ; `/workspace/plans/api-v1-contrat.md` §9.9.

## D40 — Webhooks HMAC et reconstruction partielle du public (préprod v220)
- **Date** : 13/11/2026 Europe/Paris (demande directe de Jigmé, fil Recettes).
- **Contexte** : l’écriture v1 des quatre domaines est en préprod depuis v219 (D39). Cette tranche ajoute les webhooks du contrat §9.9 / §6, en préprod seulement, pour qu’une écriture qui touche une fiche *publiée* reconstruise seulement ce qui a changé, sans rebuild complet ni NAS ni prod.
- **Choix** :
  1. À chaque écriture v1 qui ajoute, retire ou met à jour une fiche au public (`publier`+`show`, `hide`, `delete` d’une fiche déjà publique, `restore` publique, `update`/`photo` d’une fiche déjà visible), un événement est enregistré dans l’outbox SQLite (`recettes.sqlite`, table `outbox`) avec un `id` unique et stable (`evt_…`).
  2. Livraison HTTP vers le générateur de la même app (`http://127.0.0.1:9001/api/v1/webhooks/cuisine`) : enveloppe du §6, en-têtes `X-Webhook-Id` et `X-Webhook-Signature: sha256=<HMAC-SHA-256 du corps brut>`. Un `200` accuse réception ; tout autre code déclenche un nouvel essai (jusqu’à 8). Un doublon d’`id` est ignoré (`200` `{ duplicate: true }`, table `webhook_acks`). Signature invalide ou absente : `404 { ok:false }`, comme le reste de la surface v1 sans autorisation.
  3. Le secret HMAC est un secret Fly (`WEBHOOK_HMAC_SECRET`), posé seulement sur `recettes-jigme-preprod` (préparé avec `--stage`, appliqué au déploiement). Il n’est ni dans le dépôt, ni dans les journaux, ni dans le compte rendu. Sans secret, l’outbox reste inactive.
  4. Types recettes : `cuisine.recette.publiee`, `masquee`, `supprimee`, `restauree`, et `modifiee` pour une mise à jour déjà publique. La reconstruction cible : page `/cuisine/r/<slug>/` (gabarit d’une fiche existante + données de la fiche, pas un `build.mjs` complet), `idx.json`, `sitemap.xml`, et `/cuisine/c/<cat>/`. Un brouillon ou une fiche encore `hidden` n’émet rien et ne crée pas de page. Le patch HTML D11 reste en place (le chemin n’est pas encore déclaré équivalent à un rebuild ciblé, hors horodatage).
  5. Matériel, lexique et restaurants : un événement peut être enfilé si le changement touche le public ; la reconstruction ciblée (cartes affiliés, post-it, sitemap restaurants) n’est pas encore faite dans le récepteur — visibilité et patchs des stores existants suffisent pour cette tranche.
- **Limite** : pas un rendu byte-à-byte identique à `build.mjs` (page nouvellement publiée à partir d’un gabarit). D11 non retiré. Reconstruction ciblée matériel / lexique / restaurants reportée. Aucun webhook vers l’extérieur.
- **Raison** : une nouvelle publication (et un retrait) doivent mettre à jour le public tout de suite, sans attendre le prochain build du site, avec un CAS de livraison idempotent.
- **Sources** : `/workspace/plans/api-v1-contrat.md` §6 et §9.9 ; D38, D39, D11.

## D50 — Source « back » du générateur (préprod v229, 14/11/2026)
- **Quoi** : `RJ_SOURCE=back` fait lire à `build.mjs` les Markdown publiés (recettes, matériel ; lexique recopié pour contrôle) depuis le back commun (`?format=source`, `?format=source-index`, clé `front-cuisine:lire`, Flycast), via `scripts/source-back.mjs` : cache `.cache/back/`, ETag / If-None-Match, empreintes vérifiées ; photos d'origine comparées au manifeste (sha256) et téléchargées seulement si elles diffèrent, variantes toujours calculées par la vitrine. HTML toujours généré au build, aucune lecture API par visite. Les chemins `/Volumes/` restent retirés au build (v216).
- **Repli** : sans `RJ_SOURCE` (défaut), le build lit `data/` et `materiel/` comme avant ; retour arrière = rebuild sans la variable ou redéploiement de l'image v228.
- **Preuve** : sha back = dépôt pour 309 recettes, 15 matériel, 25 notices ; `dist/` v229 depuis le back = v228 sur 4 401 fichiers, seuls 7 HTML diffèrent, uniquement par le bandeau de version.
- **Hors périmètre de cette étape** : le serveur préprod (admin, régénération ciblée, visibilité) lit encore le volume ; bascule des écritures et webhooks du back aux étapes suivantes.
- **Sources** : `/workspace/plans/migration-recettes-back-commun.md` § 3 ; `/workspace/plans/back-vitrine/rapport-diff-2026-11-14.md`.

## D51 — Repli ADMIN_API_SECRET retiré (préprod v243)
- **Date** : 16/11/2026 Europe/Paris (contre-vérif n°6 d'Audit Sécurité, relayée par Superviseur Sites).
- **Choix** : seul `RECETTES_ADMIN_SECRET` (Bearer) authentifie les routes admin (`honeypot/admin-api.mjs`, `domains/cuisine/http-v1.mjs`, `honeypot/start.sh`). Le repli `ADMIN_API_SECRET` est retiré du code : même si la variable est encore présente dans l'environnement, un Bearer avec cette valeur reçoit 401 sur `/api/admin/v1/*` (404 sur `/api/v1/admin/*`, inchangé). Le format 409 `{ ok:false, error, currentSha }` est inchangé. Préprod seulement.
- **Raison** : lexique-sync et l'admin sont déjà migrés sur `RECETTES_ADMIN_SECRET` ; le repli n'était plus protégé que par l'absence de la variable sur Fly.
- **Sources** : contre-vérif n°6 ; D18, D38, D39 ; `tests/admin-secret-h1.test.mjs`.

## D52 — Éditeur dans la page : aperçu, recherche matériel, brouillon en attente du back (préprod v245)
- **Date** : 16/11/2026 Europe/Paris (demande directe de Jigmé, forme proposée par Admin · jigme.fr).
- **Constat** : le back commun garde une fiche dans un seul Markdown (`statut: brouillon|publiee`, `hidden`) ; un `update` admin sur une fiche publiée l'écrit et la publie ; les propositions (`prp_…`) sont à part mais immuables et portent sur la version publiée. Il n'existe donc pas de brouillon modifiable séparé d'une fiche publiée, ni de place pour un marqueur « styles à aligner ». Les étapes sont une liste simple de textes par version (`steps`) et, pour les fiches à trois styles, `steps_niveaux.amateur|pro|cavernes` de même longueur (exigé par le build) ; pas de sous-titres ni de groupes (le « titre » est la première phrase, `Purée.`) ; les ingrédients ont un champ `group`.
- **Choix** : livrer ce qui ne dépend pas du back (aperçu, lecture du brouillon, recherche matériel, validation du patch et calcul du marqueur), figer le contrat des écritures (409/400 puis 501) et demander à Lien en bio le stockage d'un brouillon d'édition (liste dans `docs/editeur-recettes.md`). Aucune modification du code du back, aucun stockage de contournement sur le volume.
- **Garde-fous** : `data-edit` seulement dans le fragment d'aperçu (module `domains/cuisine/editeur.mjs`, jamais importé par le build) ; textes avec balisage refusés (400), tout texte échappé ; build public identique à l'octet (A/B).
- **Sources** : `docs/editeur-recettes.md` ; `tests/editeur-v245.test.mjs` ; code du back `domains/recettes/application/index.ts` (lecture seule).

## D53 — Éditeur branché sur le brouillon d'édition du back (v246, préprod)
- **Date** : 16/11/2026 Europe/Paris (suite de D52 ; back v44 de Lien en bio, contrat `docs/recettes-brouillon-contrat.md`).
- **Choix** : Recettes garde son format d'édition (titre, intro, etapes, ingredients, materiel) et le traduit en `champs` du back : champs racine modifiés + versions modifiées entières (`variants` fusionnées par clé) ; jamais `data` complet ni le patch simple `steps` (qui exige le même nombre d'étapes). Version = celle du brouillon (sha de la fiche s'il n'y en a pas). Publication, contrôle « même nombre d'étapes », clôture des propositions et remise `a_relire` : faits par le back. Page publique refaite par le webhook de l'outbox, pas de régénération dans Recettes.
- **Marqueur** : `meta.stylesAAligner` recalculé par Recettes à chaque PATCH contre une référence (`meta.alignementBase` = étapes au moment de la dernière validation, sinon la fiche). Valider (accepter la proposition d'un bot, ou `validerAlignement: true`) vide le marqueur et pose la référence ; une proposition `cible: "brouillon"` relayée par Recettes porte donc `meta: { stylesAAligner: [], alignementBase }`.
- **Bots** : propositions relayées avec la clé du bot (auteur `bot-hermes` / `bot-grok`), entrée `edition` (format de l'éditeur) ou `champs`/`data` ; PATCH, DELETE, publier, accepter : 403.
- **Périmé** : pas de rebase (choix du back) ; Admin affiche `perime` et propose « abandonner et repartir ».
- **Sources** : `docs/editeur-recettes.md` ; `tests/editeur-v246.test.mjs` (faux back au contrat) ; `scripts/e2e-editeur-v246.mjs`.

## D54 — Relectures relayées et couverture (v247, préprod)
- **Date** : 16/11/2026 Europe/Paris (demande d'Admin · jigme.fr : Admin ne parle qu'à Recettes).
- **Choix** : `/api/v1/admin/relectures[/suivante|/:type/:id]` relayées au back (clé admin de Recettes, ou clé du bot pour les lectures) ; PUT admin seulement, contrôlé dans Recettes avant relais (version entière, états, 9 cases pour une recette, note), bots 403 sans relais. `/relectures/cases` sert la liste des 9 cases de recette (libellés). Couverture calculée par Recettes à partir des références du back (`refs_materiel`, `refs_lexique`, lues fiche par fiche : la liste du back ne les donne pas), brouillons compris, cache par sha sur le volume de Recettes (`live/index/couverture-refs.json`). Le back limite les lectures admin à 240/min par clé (un premier essai à 310 lectures d'un coup a pris des 429) : au-delà de 10 fiches à lire, tâche de fond à 1 fiche/s et réponse `complet:false`.
- **Réserve** : les noms exacts des 9 cases proposées par Admin n'étaient écrits nulle part dans les dépôts : liste posée dans `domains/cuisine/relectures.mjs` (`CASES_RECETTE`), à confirmer par Admin (un seul endroit à changer).
- **Sources** : `docs/relectures-recettes.md` ; `tests/relectures-v247.test.mjs` ; `scripts/e2e-relectures-v247.mjs`.

## D55 — Cases de relecture validées par Jigmé (v248, préprod)
- **Date** : 16/11/2026 Europe/Paris. Remplace la liste provisoire de D54.
- **Recette (9, ordre d'affichage)** : etapes_a_reecrire, manque_materiel, manque_lexique, ingredients_a_revoir, photo_a_refaire, temps_portions, intro_a_reecrire, seo_a_revoir, fautes. `styles_a_aligner` et `histoire_a_completer` retirées (non validées). PUT recette : ces 9 seulement.
- **Matériel (affichage)** : lien_casse, photo_a_refaire, description_a_reecrire ; PUT libre (le back n'impose que le format du nom).

## D56 — CSS critique de l'aperçu et CORS des polices (v249, préprod)
- **Date** : 16/11/2026 Europe/Paris. Demande d'Admin (admin v115) : le titre du hero paraissait plus petit dans l'éditeur.
- **Décision** : `POST …/apercu` renvoie `cssCritique`. C'est le `<style>` du `<head>` de la page publique construite, lu dans le dist servi : même source que le build, aucune copie. Les commentaires sont retirés et les `url()` rendues absolues. Si un `<` restait, le champ vaut `null`.
- **CORS** : `map $http_origin` dans nginx.conf, seulement sur `location /cuisine/fonts/`, pour `https://admin.jigme.fr` et `https://preprod-admin-jigme.fly.dev`. Ni `*`, ni autre ressource. La règle partira aussi en prod au prochain déploiement prod (même nginx.conf), où elle reste inoffensive.
- **Build public** : inchangé. Dist reconstruit identique à l'octet (4407 fichiers, csp.inc identique).

## D57 — Matériel de l'aperçu rendu par le code d'app.js (v250, préprod)
- **Date** : 16/11/2026 Europe/Paris. Demande d'Admin : `#equipment` était vide dans l'aperçu, car app.js le remplit et l'admin n'exécute aucun script.
- **Décision** : `domains/cuisine/materiel-apercu.mjs` extrait de `src/app.js`, par repères exacts, les fonctions de rendu du matériel (`esc`, `publicRecos`, `eqFxAttr`, `eqAdHtml`, `inkOf`, `ribbonGeo`, `applyEqFx`, `ARROW`), le corps du `.map()` de `#equipment`, la phrase de repli et l'expression de `#eq-credits`. Il les exécute sur un mini-DOM côté serveur, avec `R = publicRecipe(r)` et `v = L.resolve(R, variante)`. Si un repère manque, erreur 500 : jamais de copie qui diverge.
- **Neutralisation** : `<a>` sans href/target/rel et avec `aria-disabled`, pas de script, texte échappé. Valeurs CSS dangereuses ignorées. Sérialisation comparée au vrai Chrome (Playwright) : identique, effets compris.
- **Image** : `src/app.js` copié dans `/opt/src` (non servi). Page publique inchangée : dist identique à l'octet.

## D58 — Sections Extra éditables et lexique de l'éditeur (v251, préprod)
- **Date** : 16/11/2026 Europe/Paris. Demandes de Jigmé relayées par Admin.
- **Extra** : champs `conservation` (objet partiel fusionné), `vins` (→ `wines`) et `saviez` (→ `fun_facts`) dans l'aperçu et le PATCH du brouillon. Fragment : `data-edit`, `data-brut`, `data-edit-liste`, mêmes classes que la page. Blocs toujours rendus, même vides. Les doses ne sont jamais touchées. Ces champs, avec `lexique_local`, partent au back comme champs racine.
- **Lexique** : `GET /api/v1/admin/lexique?q=&limite=` → `{ ok, items:[{ id, terme, definitionCourte }] }` (admin et bots, 404 sans clé). Syntaxe `[[id|forme]]` ou `[[id]]` (le terme est alors affiché). Le balisage est accepté en amateur seulement, comme le pipeline. Un `[[id]]` sans entrée dans `lexique_local` reçoit `{ terme, explication, ref }` copié de la notice publiée.

## D59 — « En construction » par rubrique : en attente du back (v251)
- Les routes `GET /api/v1/recettes/sections` et `POST /api/admin/recettes/sections` n'existent pas dans le back préprod (404, contrôle du 16/11/2026). Pas de stockage parallèle côté Recettes. La demande à Lien en bio est dans `docs/demande-lienenbio-sections.md`. `…/restaurants/construction` n'est pas livré.

## D60 — Titres de phase retirés du texte des étapes (v252)
- Accord de Jigmé (16/11/2026, relayé par Admin). Le titre court en tête d'étape est retiré du HTML (page publique, SSR, aperçu), pas masqué en CSS. Données inchangées.
- Règle unique `phaseTitle` (logic.js) : amateur = `stepTitle` ; cavernes = même titre que l'amateur au même rang (évite « Éplucher la mangue. ») ; pro = idem et pas de verbe (« Dresser. » reste).
- JSON-LD : name = titre ou « Étape N », text sans le titre. Éditeur : `titre` / `brut` séparés, titre d'origine remis au patch (appariement LCS ou `origine`), `titre: ""` le retire.

## D61 — Aucun titre court à l'écran, chaque style indépendamment (v253)
- Demande de Jigmé (16/11/2026) : la règle « titre amateur au même rang » de D60 laissait « Marinade. » (yakitori, cavernes). Désormais amateur, pro et cavernes : `stepTitle`, sans regarder l'amateur ; pro et cavernes : jamais un verbe. Les cas retirés en pro/cavernes sans titre amateur sont listés pour relecture (rapport v253).
- Patch : appariement des étapes envoyées avec ou sans leur titre (corrige v252 : une étape titrée insérée prenait le titre de la suivante).

## D62 — Pro et cavernes : seulement les vrais titres de phase (v254)
- Remplace D61 pour pro et cavernes : le style cavernes est télégraphique par conception (validé mot pour mot par Jigmé sur la carbonara) ; « Hors feu. », « Eau salée ébullition. », « Casserole bien chaude. », « Sphère sur toast. » restent.
- Titre retiré si égal (sans accents ni casse) au titre de steps/amateur au même rang, ou mot de la liste fermée PHASE_MOTS (étiquettes de phase de l'audit, pas d'ingrédient, d'ustensile ni de consigne). Jamais un verbe ni « X : ». Amateur et steps inchangés.
- Les 105 textes validés (carbonara, crème brûlée) sont rendus intégralement (test trois-styles).

## D63 — Restaurants « En construction » : relais du back, carte seule (v255)
- Source unique : section `restaurants` du back (v47), lue par Flycast ; Recettes ne stocke rien (sauf le dernier état lu, en cache de régénération).
- Format Admin `{actif,titre,texte,lien}` ↔ `{on, card:{title,text,href}}` ; les autres champs de la carte sont conservés tels quels.
- Pages : carte seule (gabarit des liens affiliés) sur la liste, les catégories et chaque fiche restaurant ; fond fixe en CSS (CSP).

## D64 — Carte « En construction » : centrée en ordinateur, photo servie par le site, effets en CSSOM (v256)
- Demande de Jigmé (17/11/2026, 9:17) : en ordinateur, la carte était une petite tuile carrée à gauche, parce que le conteneur gardait la grille
  des tuiles. Elle est maintenant centrée, sur 720 × 360 (2:1), soit la proportion du mobile, qui ne change pas.
- La photo vient du back commun (stockage unique, demande Lien en bio v48) et Recettes la copie sur son origine. La CSP ne change pas
  (`img-src 'self'`). Une origine tierce aurait demandé d'ouvrir `img-src`, alors que le back n'est joignable que par Flycast.
- Le cadrage n'est pas destructif (`crop` x/y/zoom, comme les recos matériel). Les effets sont repris de Lien en bio et posés par JS
  (CSSOM, autorisé par la CSP) à partir de `data-rj-fx`. Le HTML ne porte aucun style en ligne.

