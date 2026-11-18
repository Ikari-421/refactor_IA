# Relecture guidée et couverture — contrat API Recettes (préprod, v247 ; cases v248)

Pour Admin · jigme.fr (sous-onglets « Relecture » et « Couverture » de l'onglet Recettes). Préprod seulement
(`https://recettes-jigme-preprod.fly.dev`). Admin ne parle qu'à Recettes : Recettes relaie vers le back commun (Lien en bio, back v44,
`docs/recettes-brouillon-contrat.md` §6), avec sa clé admin ou **la clé du bot appelant**.

Authentification : `Authorization: Bearer <RECETTES_ADMIN_SECRET>` ; bots : leurs clés actuelles (`bot-hermes:recettes:ecrire`,
`bot-grok:recettes:ecrire`). Sans clé ou clé inconnue : `404 {"ok":false}` (D36). Bot sur une écriture : `403 {"ok":false,"error":"portée insuffisante"}`
(jamais relayé). `Cache-Control: no-store`. Volume local (dev, `RJ_WRITES` ≠ `back`) : relectures `501`, couverture lue dans l'index local.

| Méthode | Route | Clés |
|---|---|---|
| GET | `/api/v1/admin/relectures/cases` | admin, bots |
| GET | `/api/v1/admin/relectures?etat=a_relire\|verifiee\|tous&type=recette\|materiel\|lexique\|restaurant\|tous&page=&limit=` | admin, bots |
| GET | `/api/v1/admin/relectures/suivante?type=recette&sauf=recette:a,recette:b` | admin, bots |
| GET | `/api/v1/admin/relectures/:type/:id` | admin, bots |
| PUT | `/api/v1/admin/relectures/:type/:id` | admin (bots 403) |
| GET | `/api/v1/admin/recettes/couverture?manque=materiel\|lexique\|tous` | admin, bots |

## Objet relecture (celui du back)
```json
{ "cle": "recette:charlotte-au-kiwi", "type": "recette", "id": "charlotte-au-kiwi", "etat": "a_relire",
  "cases": { "manque_materiel": true }, "note": "", "version": 3, "updatedAt": "…", "updatedBy": "admin",
  "contentHash": null, "verifieeLe": null, "verifieePar": null, "modifieeDepuisVerif": false }
```
- États : `a_relire` (défaut, `version: 0` sans enregistrement) | `verifiee`.
- Une fiche `verifiee` modifiée ensuite (n'importe quelle écriture, publication d'un brouillon comprise) se lit `a_relire` avec
  `modifieeDepuisVerif: true` : calculé par le back, rien à faire côté Admin.

## Cases
`GET /api/v1/admin/relectures/cases` :
```json
{ "ok": true, "types": ["recette", "materiel", "lexique", "restaurant"], "etats": ["a_relire", "verifiee"],
  "cases": { "recette": [
    { "id": "etapes_a_reecrire", "libelle": "Étapes à réécrire" },
    { "id": "manque_materiel", "libelle": "Manque matériel" },
    { "id": "manque_lexique", "libelle": "Manque lexique" },
    { "id": "ingredients_a_revoir", "libelle": "Ingrédients ou quantités à revoir" },
    { "id": "photo_a_refaire", "libelle": "Photo manquante ou à refaire" },
    { "id": "temps_portions", "libelle": "Temps ou portions à vérifier" },
    { "id": "intro_a_reecrire", "libelle": "Introduction ou texte à reprendre" },
    { "id": "seo_a_revoir", "libelle": "Titre ou description à revoir" },
    { "id": "fautes", "libelle": "Fautes d'orthographe" } ],
    "materiel": [
    { "id": "lien_casse", "libelle": "Lien cassé" },
    { "id": "photo_a_refaire", "libelle": "Photo manquante ou à refaire" },
    { "id": "description_a_reecrire", "libelle": "Description à réécrire" } ],
    "lexique": [], "restaurant": [] } }
```
Recette : seules ces 9 cases (validées par Jigmé le 16/11, v248), dans cet ordre, sont acceptées (autre nom → `400`). Matériel : ces 3 cases sont proposées à l'affichage, mais le PUT reste libre comme pour le lexique et les restaurants (le back n'impose que le nom `[a-z0-9_-]{1,60}`, 60 max).
Afficher les libellés renvoyés ici (ne pas les recopier en dur), pour que la liste reste la même partout.

## Lire
- `GET /relectures/:type/:id` → `{ "ok": true, "relecture": {…} }`, `ETag: "<version>"`. `400` type, `404` fiche inconnue.
- `GET /relectures?…` → `{ "ok": true, "relectures": [ {…relecture, "titre", "publiee"} ], "total", "page", "limit", "compte"?: { "a_relire", "verifiee" } }`
  (brouillons inclus avec `publiee: false`, corbeille exclue ; `compte` quand `etat=tous`). Défauts du back : `etat=tous`, `type=tous`.
- `GET /relectures/suivante?type=recette&sauf=…` → `{ "ok": true, "relecture": {…} | null, "restantes": 12 }` : une fiche `a_relire` au hasard,
  hors `sauf` (liste `type:id` séparée par des virgules : les fiches déjà passées pendant la séance).
Paramètres relayés : liste `etat`, `type`, `page`, `limit` ; suivante `type`, `sauf`. Les autres sont ignorés.

## Écrire (admin)
`PUT /relectures/:type/:id` : `{ "version": <entier lu>, "etat"?: "a_relire"|"verifiee", "cases"?: {nom: booléen}, "note"?: "≤ 2000 car." }`.
`cases` remplace l'objet entier (envoyer toutes les cases cochées). Autre champ → `400`. Contrôlé dans Recettes avant relais (`400`), puis par le back.
- `200 { "ok": true, "relecture": {…} }` (version + 1, `ETag: "<version>"`).
- `409 { "ok": false, "error": "conflit : la relecture a changé depuis la lecture (recharger)", "currentVersion": 3, "currentSha": "3" }`.
Marquer `verifiee` enregistre `contentHash` = sha de la fiche, `verifieeLe`, `verifieePar`.

## Couverture
`GET /api/v1/admin/recettes/couverture?manque=materiel|lexique|tous` (défaut `tous` = il manque au moins l'un des deux) :
```json
{ "ok": true, "manque": "materiel", "complet": true, "aLire": 0, "total": 2,
  "compte": { "fiches": 310, "sansMateriel": 290, "sansLexique": 300, "sansLesDeux": 285 },
  "recettes": [ { "slug": "charlotte-au-kiwi", "titre": "Charlotte au kiwi", "category": "sucré", "statut": "publiee", "publiee": true,
                  "hidden": false, "materiel": [], "lexique": ["chemiser"], "manque": ["materiel"] } ] }
```
- Brouillons compris (`publiee: false` : statut `brouillon` ou fiche masquée), corbeille exclue, tri par titre.
- « matériel lié » = `equipment: [{ref}]` de la fiche ; « lexique lié » = références lexique calculées par le back (`lexique_local`, `references` des notices).
- `compte` porte sur toutes les fiches, quel que soit `manque`. `400` pour une autre valeur de `manque`.
- Le back n'a pas les références dans sa liste : Recettes lit chaque fiche une fois et garde le résultat (cache par sha, sur son volume).
  Le back limite les lectures admin (240/min par clé) : quand plus de 10 fiches sont à relire (premier calcul, ~5 min pour 310 fiches),
  la lecture se fait en tâche de fond à 1 fiche/s et la réponse dit `complet: false`, `aLire: <fiches restantes>`, avec seulement les fiches
  déjà lues. Afficher « calcul en cours (N fiches) » et recharger toutes les 30 s. Ensuite seules les fiches modifiées sont relues (10 ou moins : tout de suite).
- Pour corriger depuis la liste : ouvrir l'éditeur (`docs/editeur-recettes.md`) et ajouter le matériel, ou les termes du lexique dans les étapes amateur.
