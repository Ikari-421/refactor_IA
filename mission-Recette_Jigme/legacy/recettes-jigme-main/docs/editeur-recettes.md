# Éditeur dans la page — contrat API Recettes (préprod, v246)

Pour Admin · jigme.fr. Préprod seulement (`https://recettes-jigme-preprod.fly.dev`). Rien en prod.
Authentification : `Authorization: Bearer <RECETTES_ADMIN_SECRET>` (portée `admin-recettes:ecrire`, `admin-materiel:ecrire`).
Comme toute la surface `/api/v1/admin/*` (D36) : sans clé ou clé inconnue → `404 {"ok":false}` (pas 401) ; portée insuffisante
(clé bot) → `403 {"ok":false,"error":"portée insuffisante"}`. Réponses `Cache-Control: no-store`.
Conflit : `409 {"ok":false,"error":"…","currentSha":"<version attendue>"}` (format inchangé ; le message du back est conservé,
ex. « conflit : la fiche a changé depuis l'ouverture du brouillon (recharger) » à la publication d'un brouillon périmé).

Stockage (v246) : le **brouillon d'édition du back commun** (Lien en bio, back v44, contrat `docs/recettes-brouillon-contrat.md`).
Recettes garde son format d'édition (`titre`, `intro`, `etapes`, `ingredients`, `materiel`) et le traduit en `champs` du back
(versions entières, fusionnées par clé) + `meta` (marqueur « styles à aligner »). Le brouillon n'est jamais publié ni lu par le site
public ; seule la publication écrit la fiche, et la page publique est refaite par le webhook de l'outbox du back.

`version` (v246) = **version du brouillon** (empreinte `{base_sha, data, meta}` calculée par le back) ; **sans brouillon, `version` = sha de la
fiche**, et le premier `PATCH` avec cette valeur crée le brouillon. Toujours renvoyer la dernière `version` reçue.

## État de livraison

| Route | État v246 |
|---|---|
| `POST /api/v1/admin/recettes/:slug/apercu` | livrée (rend le brouillon s'il existe) |
| `GET /api/v1/admin/recettes/:slug/brouillon` | livrée (admin et bots) |
| `PATCH /api/v1/admin/recettes/:slug/brouillon` | livrée (admin) |
| `DELETE /api/v1/admin/recettes/:slug/brouillon` | livrée (admin) |
| `POST /api/v1/admin/recettes/:slug/publier` (alias `…/brouillon/publier`) | livrée (admin) |
| `GET /api/v1/admin/alignements?etat=a_faire\|tous` (alias `GET /api/v1/admin/recettes/editions?alignement=`) | livrée (admin et bots) |
| `POST /api/v1/admin/recettes/propositions` `cible: "brouillon"` | livrée (bots et admin) ; accepter / refuser : `POST …/propositions/:id` (admin) |
| `GET /api/v1/admin/materiel?q=&limite=10` | livrée |

Volume local (dev, `RJ_WRITES` ≠ `back`) : `GET …/brouillon` en lecture seule, écritures → 409/400 puis `501` (`attente: "RJ_WRITES=back"`).

### Changements de contrat v245 → v246 (pour Admin)
- `version` : celle du brouillon (voir plus haut), plus le sha de la fiche dès qu'un brouillon existe. `ficheVersion` = sha de la fiche.
- `aBrouillon` : `true` = un brouillon d'édition existe (en v245 : « fiche jamais publiée ») ; le statut de la fiche est dans `ficheStatut`.
- `GET …/brouillon` : champs ajoutés `base_sha`, `ficheVersion`, `ficheStatut`, `perime`, `alignement` (`a_faire`|`ok`), `auteur`, `maj`, `maj_par`,
  `cree`, `cree_par`, `propositions` (en attente, cible brouillon) ; `stockage` retiré (sauf volume local).
- `PATCH` : répond la vue complète (`version` = nouvelle version), `inchange: true` si rien n'a changé ; champ `validerAlignement: true` ajouté ;
  `etapes` accepte aussi un objet `{ amateur?, pro?, cavernes? }` (plusieurs styles d'un coup).
  **Le nombre d'étapes peut différer entre styles dans le brouillon** (exigé seulement à la publication).
- `publier` : `400` « publication impossible : les styles n'ont pas le même nombre d'étapes (variante … : amateur 4, pro 3, cavernes 3) » ;
  `409` si la fiche a changé depuis l'ouverture (`perime`) : pas de rebase, supprimer le brouillon et repartir.
  Réponse : `{ ok, slug, sha, version (= nouveau sha de la fiche), versionBrouillon, relecture, aBrouillon: false, statut, hidden }`.
  La relecture repasse à `a_relire` côté back (plus de TODO dans Recettes). Publier ne change ni `statut` ni `hidden`.
- `DELETE` : corps facultatif `{ version }` (409 si périmée) ; `404` s'il n'y a pas de brouillon ; réponse = vue sans brouillon + `supprime`.
  Publier ou supprimer clôt les propositions en attente sur ce brouillon.
- Aperçu : ajoute `aBrouillon`, `perime` ; `version` = version du brouillon.
- Les routes `501` de v245 n'existent plus en préprod.

## 1. Aperçu

`POST /api/v1/admin/recettes/:slug/apercu`, corps JSON (512 Ko max), au choix :
- `{}` : le brouillon d'édition s'il existe, sinon la fiche ;
- `{ "champs": { … }, "style"?, "variante"? }` : les champs d'édition (même forme que le PATCH, §2) appliqués sur le brouillon (ou la fiche), sans rien écrire ;
- `{ "recette": { …fiche complète schéma recette-web-jigme/v2… } }` : une fiche entière non enregistrée (`slug` = celui de l'URL).

Options : `style` = `amateur` (défaut) | `pro` | `cavernes` pour les fiches à trois styles, `base` sinon ; `variante` = défaut `default_variant` (une variante qui hérite, ex. `pesco`, est refusée : éditer sa variante mère).

Réponse 200 :
```json
{ "ok": true, "slug": "charlotte-au-kiwi",
  "html": "<div class=\"rj-apercu\" data-slug=\"charlotte-au-kiwi\"><article class=\"rj-art\">…</article></div>",
  "cssUrl": "https://recettes-jigme-preprod.fly.dev/cuisine/style.css?v=e29da64e09",
  "cssUrls": [{ "href": ".../style.css?v=…" }, { "href": ".../features.css?v=…" }, { "href": ".../desktop.css?v=…", "media": "(min-width:700px)" }, …],
  "cssCritique": "@font-face{font-family:\"Outfit\";…src:url(https://recettes-jigme-preprod.fly.dev/cuisine/fonts/outfit-latin.woff2) format(\"woff2\");…}…",
  "variante": "traditionnelle", "style": "amateur", "styles": ["amateur", "pro", "cavernes"],
  "version": "<version du brouillon, ou sha de la fiche>", "aBrouillon": true, "perime": false,
  "stylesAAligner": [ …voir §4… ] }
```
Le fragment est rendu par le **même pipeline et le même gabarit que le build** (`recipes-pipeline.mjs` → `generate-pages.mjs` `recipeArticle`).
Les listes que le site remplit en JavaScript (ingrédients, étapes, matériel) sont rendues côté serveur pour l'aperçu. Pas de script, pas de
gestionnaire `on*`, URL absolues vers la préprod. Les panneaux d'onglets sont tous visibles.

Zones éditables (seulement dans ce fragment, jamais dans les pages publiques) :
- `data-edit="titre"` (h1), `data-edit="intro"` (= `description`, 120–155 car., affichée sous le titre dans l'aperçu seulement), `data-edit="histoire"` ;
- `data-edit-liste="ingredients"` (+ `data-variante`) > `li[data-edit="ingredient"][data-index]` avec `span[data-champ="item"]` et `span[data-champ="qty"]` ;
- `data-edit-liste="etapes"` (+ `data-variante`, `data-style`) > `li[data-edit="etape"][data-index][data-brut]` ;
- `#equipment[data-edit-liste="materiel"]` > `[data-edit="materiel"][data-index]` (v250, voir ci-dessous), `data-materiel-id` quand la carte correspond à un matériel lié du catalogue.

Matériel (v250) : `#equipment` contient le HTML qu'app.js produit sur la page publique. Il est rendu par le même code, extrait
d'`src/app.js` (le `.map()` de `#equipment` et `applyEqFx`), pas par une copie. Il suit la version demandée (`variante`) de la fiche
ou du brouillon de l'aperçu, avec ses `champs.materiel`. Mêmes classes que la page, une carte par entrée :
- sans recommandation : `div.eq.eq-none[aria-disabled="true"]` (`.eq-photo` avec `img.eq-bg` si une photo existe, sinon `span.eq-emoji` 🍳) ;
- une recommandation : `a.eq.eq-link`, **sans `href`/`target`/`rel`** et avec `aria-disabled="true"` ;
- plusieurs recommandations : `button.eq.eq-multi` (« N recommandations »), inerte puisqu'il n'y a pas de script.
Dans chaque carte : `.eq-veil`, `.eq-t` (libellé), `.eq-s`, `.eq-r`, `.eq-ad`, puis la flèche `svg.eq-arrow`. Les effets (cadrage, halo,
ruban, `fx-*`) sont appliqués comme sur la page.
Sans matériel : `<p class="muted">Pas de matériel particulier.</p>`. `#eq-credits` est rempli de la même façon, liens neutralisés.
Différences voulues avec la page : aucun lien actif, et la photo de fond d'une carte multiple est la première recommandation (la page en
tire une au hasard). Le texte est échappé. Le libellé n'est plus le premier texte de la carte : il est dans `.eq-t`.

`data-brut` = texte source de l'étape, avec le balisage lexique `[[terme|forme]]` et les quantités `{{q:N}}`. Le texte affiché les résout.
Pour ne pas perdre ces liens, éditer `data-brut` (ou renvoyer le texte source) et non le texte affiché.

`cssCritique` (v249) : chaîne de texte CSS, ou `null` si la page publique construite est introuvable. C'est le `<style>` que la page
publique a dans son `<head>`, lu dans la page déjà construite (build.mjs : `fonts.css` + `critical.css` + `home-ui.css`), pas une copie
à la main. Il contient les 4 `@font-face` (Outfit et Playfair Display, latin et latin-ext). Les commentaires sont retirés, toutes les
`url(/…)` sont absolues vers la préprod Recettes. Jamais de `<` (ni balise, ni `</style>`), jamais de script. À mettre avant les `cssUrls`,
dans le même ordre que la page (critique, puis feuilles).
Shadow DOM : Chrome ignore les `@font-face` déclarés dans un shadow root. Il faut aussi poser ces `@font-face` dans le document
(un `<style>` dans le `<head>` de l'admin) pour que les polices se chargent. Le reste peut aller dans le shadow.
Polices et CORS : `/cuisine/fonts/*.woff2` envoie `Access-Control-Allow-Origin` pour `https://admin.jigme.fr` et
`https://preprod-admin-jigme.fly.dev` seulement (avec `Vary: Origin`). Aucune autre ressource n'a de CORS. Le relais de l'admin reste
nécessaire si sa CSP limite `font-src` à `'self'`.

Sections Extra (v251) : les trois blocs sont toujours rendus dans l'aperçu, même vides, pour pouvoir les remplir. Ils gardent les classes de la page.
- `article#x-conservation[data-edit-bloc="conservation"]` : chaque valeur est un `[data-edit="conservation.<section>.<clé>"][data-brut]`
  (`dd` pour les durées et le contenant, `p.cv-note` pour les notes, `p` pour `rechauffage`).
  `p[data-edit="conservation.congelation.possible"]` porte `data-brut="true|false"`. Listes : `ul[data-edit-liste="conservation.restes"]` et
  `…anti_gaspi` > `li[data-edit="conservation.restes"][data-index][data-brut]`. Contrairement à la page, les sections vides sont affichées.
- `article#x-vins[data-edit-liste="vins"]` > `div.wine[data-edit="vin"][data-index]`, avec dans chaque vin `[data-champ="name|producer|origin|grapes|award|why"][data-brut]`.
- `article#x-facts[data-edit-liste="saviez"]` > `ul > li[data-edit="saviez"][data-index][data-source-url]`, avec `[data-champ="text"]` et
  `[data-champ="source_name"]` (un `<a>` sans `href` s'il y a une URL).
Ajout ou suppression : renvoyer la liste entière dans le PATCH (`vins`, `saviez`, `conservation.restes`, `conservation.anti_gaspi`).

Erreurs : 400 (schéma, champ, HTML), 404 (fiche inconnue, sauf `recette` complète), 500 (gabarit inattendu, message explicite).

## 2. Brouillon

`GET /api/v1/admin/recettes/:slug/brouillon` (admin et clés bot) :
```json
{ "ok": true, "slug": "charlotte-au-kiwi",
  "recette": { …frontmatter du brouillon (ou de la fiche)…, "materiel": ["fouet"], "styles": ["amateur", "pro", "cavernes"] },
  "version": "<version du brouillon, ou sha de la fiche>", "aBrouillon": true, "base_sha": "<sha de la fiche à l'ouverture>",
  "ficheVersion": "<sha actuel de la fiche>", "ficheStatut": "publiee", "publieeVersion": "<sha ou null>", "perime": false,
  "stylesAAligner": [ … ], "alignement": "a_faire",
  "auteur": "admin", "maj": "…", "maj_par": "admin", "cree": "…", "cree_par": "admin",
  "propositions": [ { "id": "prp_…", "cible": "brouillon", "auteur": "bot-hermes", "statut": "en_attente", … } ] }
```
`perime: true` : la fiche a changé depuis l'ouverture du brouillon ; publier répondra 409. Afficher un bandeau « Brouillon périmé :
abandonner et repartir de la fiche » (DELETE puis GET).

`PATCH` (admin) : `{ "version": "<version>", "style"?, "variante"?, "validerAlignement"?, <champs> }` (1,5 Mo max ; `version` peut venir de `If-Match`).
Champs (une liste envoyée remplace la liste entière ; textes bruts, sauts de ligne → espace ; tout balisage HTML, `on…=` ou `javascript:` → 400) :
- `titre` 2–120 car. ; `intro` 120–155 car. (→ `description`) ; `histoire` 0–2000 car. ;
- `etapes` : liste de 1–40 éléments (chaîne ou `{ "texte" }`, 2–2000 car.) pour le `style` choisi, **ou** objet `{ "amateur"?: […], "pro"?: […], "cavernes"?: […] }`.
  `[[id|forme]]` : id du lexique de la version ; `{{q:N}}` : ingrédient dosé n° N. Éditer `amateur` met aussi à jour `steps` (JSON-LD), sans balisage.
  Le nombre d'étapes peut différer d'un style à l'autre dans le brouillon ;
- `ingredients` : 1–60 éléments `{ item (1–120), qty (nombre ≥ 0 ou null), unit (g, ml, cl, piece, gousse, cas, cac, pincee, botte, feuille, poignée ou null), group?, optional?, to_taste?, scale? }`. Les doses restent dans le YAML et sont calculées par le code du site ;
- `materiel` : 0–30 identifiants **existants** du catalogue (sans doublon) → `equipment: [{ref}]`, et le libellé est ajouté (ou retiré) dans la liste `equipment` des versions, sans quoi le site ne l'affiche pas ;
- `conservation` (v251) : objet **partiel** fusionné avec l'existant. Clés : `frigo { duree, contenant, note }`,
  `congelation { possible (booléen), duree, decongelation, note }`, `temperature_ambiante { duree, note }`, `rechauffage` (texte),
  `restes` et `anti_gaspi` (listes de 0 à 20 textes, chaque liste remplacée entière). Textes de 0 à 300 caractères. `a_verifier` et
  `note_verif` ne sont pas éditables (ils sont gardés) ;
- `vins` (v251, → `wines`) : liste de 0 à 10 éléments `{ name (1–120, requis), producer?, origin?, grapes?, award?, why? }` (≤ 300 car. ; vide → `null`) ;
- `saviez` (v251, → `fun_facts`) : liste de 0 à 10 éléments `{ text (2–600, requis), source_name? (≤ 120), source_url? (https seulement) }` ;
- Aucun de ces champs ne touche aux doses (ingrédients, variantes) ;
- `validerAlignement: true` : efface le marqueur « styles à aligner » (§4), seul ou avec des champs.

Lexique dans les étapes (v251) :
- Syntaxe : `[[id|forme]]` ou `[[id]]`. Le parseur est le même sur le site et dans le pipeline : `/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/`.
  Le texte affiché est `forme`, à défaut le `terme` de l'entrée, à défaut l'id. `[[id]]` seul est donc accepté et affiche le terme : c'est
  le bon choix quand la forme est identique au terme.
- Fiches à trois styles seulement, et en `amateur` seulement (règle du pipeline du build). Un `[[…]]` en `pro` ou `cavernes` renvoie 400.
- Le site n'affiche l'infobulle que si `lexique_local.<version>.<id>` existe dans la fiche. Si un `[[id]]` ajouté n'a pas d'entrée et que la
  notice du lexique existe (publiée, non masquée, avec une explication), Recettes ajoute l'entrée
  `{ terme, explication, ref: "Cuisine/Lexique/<id>.md" }` (même forme que les entrées existantes). Le `lexique_local` modifié part au back
  avec le brouillon. Un id sans notice reste refusé (400 « terme de lexique inconnu »). Les entrées existantes ne sont jamais retirées.

Envoyé au back : `{ version, champs: { …champs racine modifiés…, variants: { <seulement les versions modifiées, entières> } }, meta? }`.
Réponse 200 : la vue `GET` (nouvelle `version`), plus `inchange: true` si rien n'a changé. `409` si `version` absente ou périmée
(`currentSha` = version attendue). `400` : champs. `413` : trop gros. Sans aucun champ ni `validerAlignement` : `400` « rien à enregistrer ».

`DELETE` (admin) : abandon. Corps facultatif `{ "version" }` (409 si périmée). `404` s'il n'y a pas de brouillon. Réponse : vue sans brouillon + `"supprime": "<version supprimée>"`.

`POST /api/v1/admin/recettes/:slug/publier { "version" }` (admin ; alias `…/brouillon/publier`) :
`409` si `version` périmée (`currentSha` = version du brouillon) ou si la fiche a changé depuis l'ouverture (`currentSha` = sha de la fiche) ;
`400` si les styles n'ont pas le même nombre d'étapes, ou si la fiche publiée ne passe pas les contrôles de publication (description 120–155, …) ;
`404` sans brouillon. `200` : `{ ok, slug, sha, version, versionBrouillon, relecture, aBrouillon: false, statut, hidden }`.
La relecture `recette:<slug>` repasse à `a_relire` si elle était `verifiee` (fait par le back). Griser « Publier » tant que les longueurs diffèrent.

## 3. Matériel (autocomplétion)

`GET /api/v1/admin/materiel?q=mix&limite=10` (le paramètre `limite`, 1–50, active ce mode ; sans lui la liste garde sa forme `{ materiel: […] }`) :
```json
{ "ok": true, "items": [ { "id": "mixeur-plongeant", "slug": "mixeur-plongeant", "nom": "Mixeur plongeant", "imageUrl": null } ] }
```
Recherche sans accents ni casse sur l'id, le libellé et les alias (exact, puis début, puis début de mot, puis contenu). Matériel masqué
ou en brouillon exclu. Pas de création depuis la fiche. `imageUrl` : image de la première reco, URL absolue, ou `null`.

## 3 bis. Lexique (autocomplétion, v251)

`GET /api/v1/admin/lexique?q=blanch&limite=10` (le paramètre `limite`, 1–50, active ce mode ; sans lui la liste garde sa forme `{ notices: […] }`).
Clé admin ou bot (Hermès, Grok), 404 sans clé :
```json
{ "ok": true, "items": [ { "id": "blanchir", "terme": "blanchir", "definitionCourte": "Fouetter des jaunes d’œufs avec du sucre…" } ] }
```
Recherche sans accents ni casse sur l'id, le terme et les formes (exact, puis début, puis début de mot, puis contenu). Notices masquées
ou en brouillon exclues. `definitionCourte` = champ `sens` de la notice. À insérer dans une étape amateur : `[[id]]` ou `[[id|forme]]`.

## 3 ter. Titres de phase des étapes (v252)

Les petits titres en tête d'étape (« Purée. Mixez… ») ne sont plus dans le HTML public (page, SSR, aperçu) : retirés du texte, pas cachés en CSS.
Règle (`src/logic.js` `phaseTitle`, la même pour le site et l'éditeur) :
- `steps` et style **amateur** : règle `stepTitle` (≤ 3 mots + point, pas un impératif type « Coupez les fraises. ») ;
- **cavernes** et **pro** (v254) : style télégraphique, « Hors feu. », « Eau salée ébullition. », « Casserole bien chaude. » sont des consignes.
  Le titre de tête n'est retiré que si (a) il est égal, sans accents ni casse, au titre de l'étape `steps` ou amateur au même rang,
  ou (b) c'est un mot de phase de la liste fermée `PHASE_MOTS` (logic.js : cuisson, finition, préparation, mélange, dressage, marinade,
  mixage, montage, repos, sauce, pâte, purée, mousse, garniture, assemblage, service, appareil, farce, coulis, friture, mijotage,
  façonnage, infusion, nappage, panure, panage, rinçage, roulage, pliage, glaçage, imbibage, égouttage, trempage, lavage, découpe,
  liaison, flambage, filtrage, dorure, assaisonnement, torréfaction, blanchiment, turbinage, réduction, décor, pétrissage, pousse,
  levée, fermentation, macération, pochage, refroidissement, démoulage, émulsion). Jamais un verbe (« Dresser. », « Oignons, couper. ») ;
- les amorces « X : … » ne sont jamais touchées.

JSON-LD : `HowToStep.name` = le titre (sinon « Étape N »), `text` = la suite, sans le titre.

**Lecture admin** : la fiche (`GET /api/v1/admin/recettes/:slug`, champ `recipe.etapesEdition`) et le brouillon (`GET …/:slug/brouillon`, champ `recette.etapesEdition`) :

```json
{ "etapesEdition": { "<variante>": {
  "base":     [{ "titre": "Purée", "brut": "Mixez les kiwis avec le sucre." }],
  "amateur":  [{ "titre": "Purée", "brut": "Mixez les [[kiwi|kiwis]] avec le sucre." }],
  "pro":      [{ "titre": "", "brut": "Dresser. Chemiser." }],
  "cavernes": [{ "titre": "Purée", "brut": "Kiwi écraser." }] } } }
```

`steps` / `steps_niveaux` restent inchangés (texte complet). Ne pas renvoyer `etapesEdition` dans une `recette` complète.

**Aperçu** : `<li data-edit="etape" data-index="i" data-titre="Purée" data-brut="Mixez les [[kiwi|kiwis]]…">` ; `data-titre` absent sans titre ; `data-brut` = texte sans titre.

**PATCH / aperçu `champs.etapes`** : chaque étape est une chaîne ou `{ titre?, texte, origine? }` :
- chaîne ou objet sans `titre` : le titre d'origine est remis devant (rien si le texte commence déjà par « Titre. ») ;
- `titre: ""` (ou `null`) : titre retiré ; `titre: "Coulis"` : titre posé (1–40 car., sans `. : ; ! ?`) ;
- un texte envoyé avec un autre titre devant le texte d'origine (« Coulis. Mixez… » au lieu de « Purée. Mixez… ») est gardé tel quel ;
- étape d'origine : `origine` (rang dans la liste enregistrée) si fourni ; sinon appariement par le texte, avec ou sans son titre
  (plus longue sous-suite commune, puis sur place entre deux étapes appariées : une étape modifiée garde son titre,
  une étape insérée n'en a pas). Pour un déplacement ou un échange de deux étapes, envoyer `origine`.

## 4. Styles à aligner

Fiches à trois styles d'étapes (`steps_niveaux.amateur|pro|cavernes`). Recalculé par Recettes à chaque `PATCH` et écrit dans `meta.stylesAAligner`
du brouillon (le back le garde et le liste). Par version (variante), en comparant le brouillon à la **référence** : les étapes au moment de la
dernière validation (`meta.alignementBase`, interne) sinon celles de la fiche :
```json
[ { "variante": "traditionnelle", "styleModifie": "amateur", "ajoutes": [2], "modifies": [], "supprimes": [], "aRattraper": ["pro", "cavernes"] } ]
```
Indices : `ajoutes` et `modifies` dans le brouillon, `supprimes` dans la référence. `aRattraper` = styles restés identiques.
Plus d'entrée quand les trois styles ont été repris.

Validation (un clic, efface le marqueur et fait de l'état courant la nouvelle référence) :
- accepter la proposition d'un bot : `POST /api/v1/admin/recettes/propositions/:id { "action": "accept" }` (admin ; appliquée au brouillon seulement) ;
- ou, sans proposition : `PATCH …/brouillon { "version", "validerAlignement": true }`.
Refuser : `{ "action": "reject" }`.

## 5. Propositions des bots (Hermès, Grok)

Les bots lisent `GET /api/v1/admin/alignements?etat=a_faire` et `GET …/brouillon` avec leur clé actuelle (`bot-hermes:recettes:ecrire`,
`bot-grok:recettes:ecrire`), puis proposent (Recettes relaie avec **la clé du bot**, l'auteur reste `bot-hermes` / `bot-grok`) :
```json
POST /api/v1/admin/recettes/propositions
{ "cible": "brouillon", "slug": "charlotte-au-kiwi", "version": "<version du brouillon>",
  "edition": { "etapes": { "pro": ["…", "…", "Gélatine : tremper 5 min.", "…"], "cavernes": ["…", "…", "…", "…"] } },
  "resume": "alignement pro + cavernes sur l'étape 3 ajoutée en amateur" }
```
Entrée : `edition` (format de l'éditeur, §2, avec `style`/`variante` facultatifs), ou `champs` / `data` au format du back. Validée tout de suite
(400), `409` si `version` périmée, `404` sans brouillon. La proposition porte `meta: { stylesAAligner: [], alignementBase }` : l'accepter vaut validation.
Réponse : celle du back (`proposition`, `version`) + `stylesAAlignerApres` (marqueur que donnerait la proposition sans validation, pour information).
Les bots ne peuvent ni écrire le brouillon (PATCH/DELETE → 403), ni accepter (403), ni publier (403) : rien n'atteint la fiche publiée sans Jigmé.
Liste : `GET /api/v1/admin/recettes/propositions?statut=en_attente&cible=brouillon&slug=<slug>` ; détail avec `diff` : `GET …/propositions/:id`.

## 6. Liste des brouillons

`GET /api/v1/admin/alignements?etat=a_faire|tous` (défaut `a_faire` ; admin et bots ; `page`, `limit` relayés) :
```json
{ "ok": true, "etat": "a_faire", "brouillons": [ { "slug", "titre", "base_sha", "version", "ficheVersion", "ficheAbsente": false, "perime": false,
  "auteur", "maj", "maj_par", "cree", "stylesAAligner": [ … ], "alignement": "a_faire", "propositionsEnAttente": 1 } ], "total": 1, "page": 1, "limit": 50 }
```
Même chose sous `GET /api/v1/admin/recettes/editions?alignement=a_faire|tous` (défaut `tous`, nom du back). `400` pour une autre valeur.

Affichage prévu côté Admin : bandeau « Styles à aligner : pro, cavernes (étape 3 ajoutée en amateur) », propositions des bots sous le bandeau
avec « Valider » (accept) / « Refuser », bouton « Valider l'alignement » sans proposition (`validerAlignement`), bandeau « périmé », publication
grisée tant que les longueurs diffèrent.

## 7. Restaurants « En construction » (v255)

Relais de la section `restaurants` du back (Lien en bio back v47, contrat `/workspace/plans/recettes-sections-contrat.md`), sans copie locale.
Clé admin seulement (portée `admin-restaurants:ecrire`) : sans clé 404, clés bots 403.

- `GET /api/v1/admin/restaurants/construction` → `{ ok, actif, titre, texte, lien, depuis, version }` (`ETag: "<version>"`).
- `PUT /api/v1/admin/restaurants/construction`, corps `{ version, actif?, titre?, texte?, lien? }` (version aussi en `If-Match`).
  Champs absents = inchangés. `lien` : https ou `null` (un lien ouvre un nouvel onglet). Le fond, l'image et la légende de la carte
  enregistrée dans le back sont gardés. `actif:false` garde la carte pour la prochaine fois.
  - 200 : même forme que le GET, plus `change` ;
  - 409 `{ ok:false, error, currentSha }` : version absente ou périmée (relire puis renvoyer) ;
  - 400 `{ ok:false, error }` : champ inconnu, `actif` non booléen, ou refus du back relayé tel quel (titre vide, lien non https, HTML…).
- `version` = `sha` du document des trois rubriques : un changement de `materiel` ou `livres` la fait aussi avancer.
- Le slug `construction` est réservé (création d'un restaurant `construction` : 400).

Pages : au webhook `cuisine.sections.modifie`, régénération de `/restaurants/`, `/restaurants/c/<catégorie>/` et de chaque
`/restaurants/<slug>/`. Actif : la carte seule (`a.rj-link-card` avec flèche si lien, `div.rj-link-card` sans flèche sinon, titre en
`h2`, texte en `p.rj-construction-texte`, conteneur `[data-rj-construction="restaurants"]`), sans la review ni son JSON-LD. Inactif : le vrai
contenu. Fond fixe (dégradé neutre, classe CSS) : la CSP interdit les styles en ligne, donc `background` n'est pas affiché. La photo, la légende
et les effets le sont depuis la v256 (§7 bis). L'état est relu à chaque régénération (dernier état connu gardé si le back ne répond pas), au démarrage de la machine, et au
build (`RJ_SECTIONS_FILE`).

### 7 bis. Photo, cadrage et effets de la carte (v256)

Même modèle que les recos matériel (« liens affiliés ») et les cartes Lien en bio. Champs en plus, au GET et au PUT :

- `legende` : texte ≤ 300 ou `null`, affiché sous la carte (= `caption` du back) ;
- `image` : au PUT, data URL `data:image/(jpeg|png|webp);base64,…` (8 Mo maximum), chemin déjà enregistré
  `/api/v1/recettes/sections/media/<sha256>.webp`, ou `""` pour retirer (efface aussi le cadrage). Une data URL est d'abord envoyée au back
  (`POST /api/admin/recettes/sections/media`, back v48 : réponse `{ ok, sha, url, image, width, height, bytes }`, `url` = `image`), qui la ré-encode en WebP (2400 px max) et renvoie le chemin. La carte pointe ensuite sur ce chemin.
  Tant que le back n'a pas cette route : **501** `{ ok:false, error:"photo : l'upload n'est pas encore disponible…" }`. Au GET : chemin ou `null` ;
- `crop` : `{ x: 0–100, y: 0–100, zoom: 0.5–3 }` ou `null` (position du point visible en %, zoom 1 = image qui remplit la carte) ;
- `mention` (ruban CP2), `halo` (booléen, EN2), `haloColor` (`#rrggbb`), `fx` (`ship` CP30, `mark` CP26, `glow` CP13, `tag` CP11) :
  mêmes formes et mêmes bornes que `lib/mention.ts` de Lien en bio (et `effectsEditor` d'Admin). Le back valide. Recettes relaie et filtre au rendu.
- Le PUT part de la carte enregistrée : un champ absent reste inchangé. Avec une photo, la version est vérifiée **avant** l'upload (409 sans upload orphelin).
- `haloColor` `#9fd36b` (vert d'origine) est envoyé et renvoyé `null` (contrat v48).
- Sur le back v47 (avant la demande v48) : `crop`, `mention`, `halo`, `haloColor`, `fx` → 400 `card.<champ> : champ inconnu` (refus du back relayé) ; photo → 501.
- `GET /api/v1/admin/restaurants/construction/media/<sha256>.webp` (clé admin) : la photo enregistrée, pour l'aperçu d'Admin (relais du back, sha256 vérifié).

Rendu : à chaque régénération, Recettes copie la photo du back (Flycast, sha256 vérifié, WebP) dans `/cuisine/img/construction/<sha256>.webp`.
Elle est donc servie par le site, et la CSP (`img-src 'self'`) n'a pas changé. Aucune URL tierce n'est téléchargée. La carte reçoit
`<img class="rj-link-card-img">` (object-fit cover) et un attribut `data-rj-fx` (valeurs filtrées à la génération). `restaurants.js` pose ensuite
le cadrage (`object-position` x % y %, `transform: scale(zoom)` centré sur ce point), le halo, le ruban et les effets en CSSOM. La CSP l'autorise
(pas de style en ligne dans le HTML). Sans JS, la photo est centrée, sans effets. Dimensions affichées : 720 × 360 px sur ordinateur (2:1, carte
centrée), pleine largeur × 176 px sur mobile (≈ 358 × 176). Photo conseillée : paysage 2:1, au moins 1600 × 800 px. Le sujet doit être au centre,
car les bords sont coupés sur mobile.

## Côté back (livré par Lien en bio, back v44)

Les points 1 à 6 demandés en v245 sont livrés (brouillon d'édition, `meta`, propositions `cible: "brouillon"`, liste `/editions`, écriture par
`variants`, relecture avec remise `a_relire` à la publication). Écarts retenus : liste sous `/recettes/editions` (Recettes garde l'alias
`/api/v1/admin/alignements`), pas de rebase d'un brouillon périmé, relectures (`/api/v1/admin/relectures…`) servies par le back
mais pas encore relayées par Recettes en v246 (à ajouter si Admin en a besoin).
