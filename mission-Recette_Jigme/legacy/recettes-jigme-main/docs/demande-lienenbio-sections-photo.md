# Demande Recettes → Lien en bio : photo, cadrage et effets des cartes « En construction » (back v48, préprod)

Demande du 17/11/2026, à la suite du retour de Jigmé (9:17). Back `preprod-back-jigme` seulement, rien en prod.
Contrat de départ : `/workspace/plans/recettes-sections-contrat.md` (back v47). Recettes est prêt de son côté depuis la v256 (relais, rendu, tests avec un faux back).

## 1. Nouveaux champs de `card` (les trois rubriques)
Ajouter dans `validerCarte` (`domains/recettes/application/sections.ts`), toujours présents dans les réponses et compris dans le `sha` :
- `image` : `null`, ou chemin d'une photo déjà enregistrée par la route du §2 : `/api/v1/recettes/sections/media/<sha256 64 hex>.webp`
  (400 si le fichier n'existe pas). Les URL https ne sont plus acceptées pour les nouvelles valeurs, parce que le site ne charge que ses propres images.
  Une ancienne valeur https déjà enregistrée peut être gardée telle quelle.
- `crop` : `{ x, y, zoom }` ou `null`. `x` et `y` vont de 0 à 100 (%) et `zoom` de 0.5 à 3. Les valeurs sont arrondies à 2 décimales.
  Si `image` vaut `null`, le back force `crop` à `null`. Si une image est posée sans cadrage, la valeur par défaut est `{ x: 50, y: 50, zoom: 1 }`.
- `mention` : `parseMention` de `lib/mention.ts` (ruban CP2 : label parmi MENTION_LABELS, couleur, angle −45..45, x, y), ou `null`.
- `halo` : booléen, `false` par défaut (EN2).
- `haloColor` : `parseHaloColor`, `null` = vert d'origine.
- `fx` : `parseFx` (ship CP30, mark CP26, glow CP13, tag CP11), `null` si aucun effet.
- Ces champs restent refusés dans les autres clés inconnues (400 `card.<champ> : champ inconnu`, comme aujourd'hui).
- La carte neutre (`carteNeutre`) prend `image:null, crop:null, mention:null, halo:false, haloColor:null, fx:null`.

## 2. Upload de la photo
`POST /api/admin/recettes/sections/media`, avec la même clé et les mêmes refus que `POST /api/admin/recettes/sections` :
clé `admin-recettes:ecrire`, 404 sans clé, 403 pour une autre portée ou un relecteur.
- Corps JSON (12 Mo maximum) : `{ "section": "restaurants" | "materiel" | "livres", "data": "data:image/(jpeg|png|webp);base64,…" }`.
- Contrôles : image décodée de 8 Mo maximum (413 au-delà), format réel jpeg, png ou webp lu par sharp (400 sinon), `limitInputPixels` 40 M.
- Ré-encodage, comme `saveUploadedImage` : `sharp(buf).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).webp({ quality: 85 })`.
  Le cadrage n'est pas appliqué dans le fichier : il est gardé à part, dans `crop`, comme pour les recos matériel.
- Stockage : `DATA_DIR/recettes/reglages/media/<sha256 du WebP>.webp`. Le nom est le hash du fichier, donc un même contenu donne le même nom (pas de doublon).
- 200 `{ ok: true, image: "/api/v1/recettes/sections/media/<sha256>.webp", width, height, bytes }`. Pas d'événement, puisque la carte ne change pas encore.
  Audit `domaine: recettes`, `quoi: sections.media`, `ressource_id: sections:<section>`.
- Ménage : garder toute photo référencée par une carte, plus les 20 derniers uploads. Les orphelins de plus de 7 jours peuvent être supprimés.

## 3. Lecture de la photo
`GET /api/v1/recettes/sections/media/<sha256>.webp`, sans clé, sur le back seulement (Flycast). Le site, lui, répond 404, comme pour les autres routes Recettes.
- 200 `Content-Type: image/webp`, `Cache-Control: public, max-age=31536000, immutable`, `X-Content-Type-Options: nosniff` ; 404 si le nom est inconnu ou mal formé.
- 600 requêtes par minute et par IP, comme `GET /api/v1/recettes/sections`.
- Recettes lit cette route à chaque régénération, vérifie le sha256 (nom = hash) et le format WebP, puis copie la photo dans `/cuisine/img/construction/`.

## 4. Inchangé
- `POST /api/admin/recettes/sections` (sha attendu, 409 `{ok,error,currentSha}`, 400, `change`, audit) et l'événement `cuisine.sections.modifie` `{ section, sha, at }`.
- `background` reste accepté, mais Recettes ne l'affiche pas, à cause de la CSP (fond fixe en classe CSS).

## 5. Tests attendus côté back
Upload : JPG, PNG et WebP acceptés ; GIF et SVG refusés (400) ; image de 9 Mo refusée (413) ; même image envoyée deux fois = même chemin.
Carte : chemin inconnu refusé (400) ; `crop` hors bornes refusé (400) ; `image:null` remet `crop` à null ; `fx` ou `mention` invalides refusés (400) ;
les nouveaux champs changent le `sha` ; 404 sans clé et 403 avec une clé bot sur l'upload ; lecture de la photo sans clé en 200, nom inconnu en 404.

Côté Recettes (déjà livré en v256) : le PUT `/api/v1/admin/restaurants/construction` relaie `image` (data URL → §2), `crop`, `mention`, `halo`, `haloColor`, `fx` et `legende`.
Il répond 501 tant que la route du §2 répond 404. Le rendu et la copie de la photo sont déjà en place.
