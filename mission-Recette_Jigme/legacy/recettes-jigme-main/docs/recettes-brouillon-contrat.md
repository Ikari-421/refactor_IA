# Back commun — brouillon d'édition des recettes, propositions sur brouillon, relecture (préprod)

Pour Recettes (et Admin via Recettes). Préprod seulement : `http://preprod-back-jigme.flycast` (Flycast, comme les autres routes v1).
Rien en prod. Demande d'origine : `docs/editeur-recettes.md` de recettes-jigme, « Ce qui manque côté back », points 1 à 6.

## Conventions communes

- Session relecteur Meta de l'admin (`x-admin-role: reviewer` ou `relecteur`) : `403` sur toutes ces routes, même avec le secret (sans clé : `404`).

- Authentification : `Authorization: Bearer <clé>`.
  - **admin** = clé à portée `admin-recettes:ecrire` (ex. `BACK_RECETTES_WRITE_KEY` de Recettes) ou le secret admin commun.
  - **bot** = clé `bot-hermes:recettes:ecrire` ou `bot-grok:recettes:ecrire` (auteur noté `bot-hermes` / `bot-grok`).
- Sans clé ou clé inconnue : `404 {"ok":false}`. Portée insuffisante : `403 {"ok":false,"error":"portée insuffisante"}`.
  Débit : 60 écritures / min par clé admin (`429`). Réponses `Cache-Control: no-store`, `ETag` = version courante.
- HTML, `on…=` ou `javascript:` dans un corps : `400` (`HTML ou script interdit (chemin)`).
- Conflit (inchangé) : `409 {"ok":false,"error":"conflit : la fiche a changé depuis la lecture (recharger)","currentSha":"<version>"}`.
- Le brouillon n'est **jamais** publié, jamais émis à l'outbox, jamais lu par les routes publiques (`/api/v1/public/*`).
  Stockage : `DATA_DIR/recettes/editions/recettes/<slug>.json` + journal `editions/journal.jsonl`.

## 1. Brouillon d'édition — `/api/v1/admin/recettes/:slug/brouillon`

Objet stocké : `{ slug, base_sha, version, data, meta, auteur, maj, maj_par, cree, cree_par, proposition }`.
- `base_sha` : sha de la fiche (Markdown du back) au moment où le brouillon a été ouvert.
- `version` : sha-256 de `{base_sha, data, meta}` (JSON canonique). C'est la valeur à renvoyer pour toute écriture.
- `data` : frontmatter complet du brouillon. `meta` : objet libre jamais publié (64 Ko max).
- `auteur` : dernier auteur (une proposition acceptée garde `bot-grok` / `bot-hermes`), `maj_par` : qui a écrit (admin, ou « admin (proposition prp_… de bot-grok) »).

### GET (admin et bots)
`200` :
```json
{ "ok": true, "slug": "charlotte-au-kiwi", "aBrouillon": true,
  "version": "<version du brouillon, ou sha de la fiche s'il n'y en a pas>", "base_sha": "<sha>",
  "ficheVersion": "<sha actuel de la fiche>", "ficheStatut": "publiee", "publieeVersion": "<sha ou null si statut brouillon>",
  "perime": false,
  "recette": { …frontmatter du brouillon (ou de la fiche), sans chemin NAS… },
  "meta": { "stylesAAligner": [ … ] }, "stylesAAligner": [ … ], "alignement": "a_faire",
  "auteur": "admin", "maj": "…", "maj_par": "admin", "cree": "…", "cree_par": "admin",
  "propositions": [ …propositions en attente cible brouillon… ] }
```
`perime: true` : la fiche a changé depuis l'ouverture du brouillon (publier répondra 409 ; supprimer le brouillon et repartir).
`404` : fiche inconnue.

### PATCH (admin) — enregistrer (autosauvegarde)
Corps : `{ "version": "<version>", "champs"?: {…}, "data"?: {…}, "meta"?: {…} }` (1,5 Mo max). `version` peut venir de `If-Match`.
- Sans brouillon, `version` = sha de la fiche (`GET` le renvoie) : le brouillon est créé. Ensuite, `version` = celle du brouillon.
- `champs` : champs modifiables de la fiche (`title`, `description`, `histoire`, `equipment`, `variants`, `tags`, …, mêmes règles que l'update du back).
  - `variants` est **fusionné par clé de variante** : la variante envoyée remplace la variante entière ; `null` la retire.
    C'est la voie pour ajouter ou retirer des étapes (`steps`, `steps_niveaux.amateur|pro|cavernes`) et du matériel (`equipment` de la variante).
  - `steps` / `ingredients` simples (variante par défaut) : même nombre exigé, sinon `400` (« nombre d'étapes inchangé requis… »).
  - Champs verrouillés ignorés : `schema`, `statut`, `hidden`, `published_at`, `source_fiche` ; `slug` et `category` non modifiables (`400`).
- `data` : frontmatter complet (remplace tout ; champs verrouillés repris de la fiche). `data` et `champs` ensemble : `400`.
- `meta` : fusion clé par clé ; une clé à `null` est retirée ; `"meta": null` vide tout. `meta.stylesAAligner` doit être une liste.
- Contrôles du brouillon : titre 2–120 car., au moins une variante (objets), `default_variant` présente. Le nombre d'étapes par style n'est **pas** exigé ici.

`200` : même forme que `GET`, plus `"inchange": true` si rien n'a changé (même version). `409` si `version` absente ou périmée
(`currentSha` = version du brouillon, ou sha de la fiche s'il n'y a pas de brouillon). `400` : champs. `413` : trop gros.

### PUT (admin)
Comme PATCH, mais `data` obligatoire (remplacement complet) ; sinon `400`.

### DELETE (admin) — abandon
Corps facultatif `{ "version" }` (ou `If-Match`) : si fourni et périmé → `409`. `404` s'il n'y a pas de brouillon.
`200` : vue `GET` sans brouillon + `"supprime": "<version supprimée>"`. Les propositions en attente sur ce brouillon sont closes (`rejetee`, motif « brouillon supprimé »).

## 2. Publier — `POST /api/v1/admin/recettes/:slug/brouillon/publier` (admin)
Corps : `{ "version": "<version du brouillon>" }` (ou `If-Match`).
1. `409` (`currentSha` = version du brouillon) si `version` absente ou périmée.
2. `409` « conflit : la fiche a changé depuis l'ouverture du brouillon (recharger) » (`currentSha` = sha de la fiche) si la fiche n'est plus à `base_sha`.
3. `400` « publication impossible : les styles n'ont pas le même nombre d'étapes (variante … : amateur 3, pro 2, cavernes 2) » (variantes avec `steps_niveaux`, hors `inherit`).
4. Fiche `publiee` : mêmes contrôles que la publication (titre, catégorie, description 120–155 car., variantes) → `400` sinon.
5. Écrit la fiche (update avec `expected = base_sha`, corps Markdown inchangé, champs verrouillés repris) → historique, audit,
   événement `cuisine.recette.modifiee` si la fiche est publique. Supprime le brouillon, clôt ses propositions en attente,
   et remet la relecture `recette:<slug>` à `a_relire` si elle était `verifiee`.

`200` : `{ "ok": true, "slug", "sha": "<nouveau sha de la fiche>", "version": "<idem>", "inchange"?, "versionBrouillon", "relecture": {…}|null, "aBrouillon": false, "statut", "hidden" }`.
Publier ne change ni `statut` ni `hidden` (une fiche jamais publiée reste `brouillon` : la publier reste l'action `publier` habituelle). `404` : pas de brouillon.

## 3. Propositions sur le brouillon — `/api/v1/admin/recettes/propositions`
- `POST` (bots et admin) : `{ "cible": "brouillon", "slug", "version"?, "champs"? | "data"?, "meta"?, "resume"? }`.
  - `version` (ou `expectedSha` / `If-Match`) : version du brouillon visée ; absente = version courante ; périmée → `409`.
  - `404` s'il n'y a pas de brouillon. La proposition est validée tout de suite (mêmes règles que PATCH → `400`).
  - `200` : `{ "ok": true, "proposition": { "id": "prp_…", "cible": "brouillon", "slug", "sha_base": "<version du brouillon>", "champs": {champs|data, meta}, "auteur": "bot-grok", "statut": "en_attente", … }, "sha": "<sha_base>", "version": "<sha_base>" }`.
  - Sans `cible` (ou `"cible": "fiche"`) : comportement inchangé (proposition sur la fiche publiée). Autre valeur → `400`.
- `GET ?statut=en_attente|acceptee|rejetee|all&cible=brouillon|fiche&slug=<slug>` (admin et bots) : filtres `cible` et `slug` ajoutés.
- `GET /propositions/:id` : `diff` calculé contre le brouillon (Markdown du brouillon au dépôt → Markdown après application).
- `POST /propositions/:id { "action": "accept" | "reject" }` (admin seulement ; bot → `403`) :
  - `accept` : appliquée **au brouillon seulement** (jamais à la fiche). `409` (`currentSha` = version actuelle) si le brouillon a changé depuis, ou s'il a été supprimé / publié.
    Le brouillon garde `auteur` = auteur de la proposition, `maj_par` = « admin (proposition prp_… de bot-grok) », `proposition` = id.
    Une `meta` dans la proposition (ex. `{"stylesAAligner": []}`) est appliquée aussi : c'est ainsi qu'une validation efface le marqueur.
  - `200` : `{ "ok": true, "proposition": {…, "statut": "acceptee", "sha_apres": "<nouvelle version>"}, "version": "<nouvelle version du brouillon>" }`.

## 4. Liste des brouillons — `GET /api/v1/admin/recettes/editions?alignement=a_faire|tous` (admin et bots)
Défaut `tous`. `a_faire` = `meta.stylesAAligner` non vide. Pagination `page`, `limit` (1–200 ou `all`). Autre valeur → `400`.
```json
{ "ok": true, "brouillons": [ { "slug", "titre", "base_sha", "version", "ficheVersion", "ficheAbsente": false, "perime": false,
  "auteur", "maj", "maj_par", "cree", "stylesAAligner": [ … ], "alignement": "a_faire", "propositionsEnAttente": 1 } ],
  "total": 1, "page": 1, "limit": 50 }
```
(Côté Recettes, `GET /api/v1/admin/alignements?etat=a_faire` peut s'appuyer dessus.)

## 5. Étapes par variantes
Voir PATCH : `champs.variants` (fusion par variante) ou `data` complet. Le patch simple `steps` / `ingredients` garde la règle « même nombre ».

## 6. Relecture — clé `type:id`
Types : `recette`, `materiel`, `lexique`, `restaurant`. États : `a_relire` (défaut), `verifiee`.
Objet : `{ cle, type, id, etat, cases: {nom: booléen}, note, version (entier), updatedAt, updatedBy, contentHash, verifieeLe, verifieePar, modifieeDepuisVerif }`.
- `contentHash` = sha de la fiche au moment où elle passe `verifiee`. Si la fiche change ensuite (n'importe quelle écriture),
  l'état lu devient `a_relire` avec `modifieeDepuisVerif: true` (calculé). La publication d'un brouillon l'écrit aussi (version + 1).
- `GET /api/v1/admin/relectures/:type/:id` (admin et bots) : `200 { ok, relecture }` (sans enregistrement : `a_relire`, `version: 0`). `404` fiche inconnue, `400` type.
- `PUT /api/v1/admin/relectures/:type/:id` (admin) : `{ "version": <entier lu>, "etat"?, "cases"?, "note"? }`.
  `cases` remplace l'objet (60 cases max, nom `[a-z0-9_-]{1,60}`, valeurs booléennes) ; `note` ≤ 2000 car.
  `409 { "ok": false, "error": "conflit : la relecture a changé depuis la lecture (recharger)", "currentVersion": 3, "currentSha": "3" }`.
  `200 { ok, relecture }` (version + 1). Bot → `403`.
- `GET /api/v1/admin/relectures?etat=a_relire|verifiee|tous&type=recette|materiel|lexique|restaurant|tous` (admin et bots) :
  `{ ok, relectures: [ {…relecture, titre, publiee} ], total, page, limit, compte?: {a_relire, verifiee} }` (brouillons inclus, corbeille exclue).
- `GET /api/v1/admin/relectures/suivante?type=recette&sauf=recette:a,recette:b` : une fiche `a_relire` au hasard,
  `{ ok, relecture: {…}|null, restantes }`.

## Routes (récapitulatif)
| Méthode | Route | Clés |
|---|---|---|
| GET | `/api/v1/admin/recettes/:slug/brouillon` | admin, bots |
| PATCH, PUT, DELETE | `/api/v1/admin/recettes/:slug/brouillon` | admin |
| POST | `/api/v1/admin/recettes/:slug/brouillon/publier` | admin |
| GET | `/api/v1/admin/recettes/editions?alignement=` | admin, bots |
| POST | `/api/v1/admin/recettes/propositions` (`cible: "brouillon"`) | admin, bots |
| POST | `/api/v1/admin/recettes/propositions/:id` (`accept`/`reject`) | admin |
| GET | `/api/v1/admin/relectures`, `/relectures/suivante`, `/relectures/:type/:id` | admin, bots |
| PUT | `/api/v1/admin/relectures/:type/:id` | admin |

Slug réservé côté back : `editions` (comme `recipes`, `propositions`, `brouillons`, `meta`).
