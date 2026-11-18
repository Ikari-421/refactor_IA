# Demande Recettes → Admin · jigme.fr : photo, zoom et effets sur la carte « Site en construction » (préprod)

Demande du 17/11/2026, à la suite du retour de Jigmé (9:17). Écran : Restaurants → « Site en construction » (`buildConstructionBox`, admin v122).
Route Recettes (déjà livrée en v256) : `GET/PUT /api/v1/admin/restaurants/construction`, relayée par Admin en `/api/recettes/restaurants/construction`.
Contrat : `docs/editeur-recettes.md` §7 et §7 bis de recettes-jigme.

## 1. Écran
Reprendre l'éditeur en pilules des cartes Lien en bio (`pillEditor`) et le bloc photo des recos matériel (`recoEditor`) :
- Pilule « Texte et lien » : titre, texte, lien (comme aujourd'hui), plus « Légende (facultatif) », 300 caractères maximum.
- Pilule « Photo » :
  - emplacement « Ajouter une image » ; boutons « Envoyer une image », « Changer » et « Retirer » (avec `confirmDanger`, comme les recos) ;
  - `cropper(…, { w: 1600, h: 800, fit: "cover", maxMb: 8, hint: HINT_CONSTRUCTION })`, avec l'ajustement, le zoom et le glisser du recadreur ;
  - puis trois curseurs non destructifs, identiques aux recos : « Cadrage horizontal » 0–100, « Cadrage vertical » 0–100, « Zoom » 0.5–3 (pas de 0.01) ;
  - le relevé « Cadrage : x % · y % · zoom z ».
- Pilule « Effets » : `effectsEditor(cur, onChange)` tel quel (ruban en coin CP2, halo EN2, bandeau livraison CP30, marque flottante CP26, bord lumineux CP13, étiquette CP11).
- Aperçu en direct collant, avec le même DOM que le site :
  - `.rj-link-card.rj-construction-carte` ;
  - photo `img.rj-link-card-img` en `object-fit: cover`, `object-position: x% y%`, `transform: scale(zoom)` et `transform-origin: x% y%` ;
  - puis `ribbonEl(mention)`, `fxEls(fx)` et `haloOn(box, v)` ;
  - bascule « Ordinateur » (720 × 360) / « Mobile » (358 × 176).
- Garder l'avertissement actuel. Enregistrer est grisé tant que rien n'a changé, puis devient « Enregistré ✓ ».

Texte de recommandation (même forme que `HINT_RECO` des liens affiliés) :
> Image de la carte : source paysage 2:1 conseillée (1600 × 800 px ou plus), JPG, PNG ou WebP (8 Mo max). Format affiché : carte 720 × 360 px
> sur ordinateur, pleine largeur × 176 px sur mobile ; garde le sujet au centre, les bords sont coupés sur mobile. Le cadrage (position et zoom)
> est envoyé avec l'enregistrement. Une nouvelle image part en data URL et est ré-encodée en WebP par le back commun. Retirer envoie une chaîne
> vide à l'enregistrement, ce qui efface l'image et le cadrage.

## 2. Échanges avec Recettes
- GET → `{ ok, actif, titre, texte, lien, legende, image, crop, mention, halo, haloColor, fx, depuis, version }`. `image` vaut un chemin ou `null`.
  Pour l'aperçu d'une photo déjà enregistrée : `GET /api/v1/admin/restaurants/construction/media/<sha256>.webp` (même clé, `image/webp`), à relayer comme les autres routes.
- PUT `{ version, …champs changés seulement }` :
  - `image` : data URL pour une nouvelle photo, chemin reçu au GET pour la garder (ou champ absent), `""` pour la retirer ;
  - `crop`, `mention`, `halo`, `haloColor` et `fx` : mêmes formes que pour les recos (`recoPayload`).
- Taille du corps : jusqu'à 12 Mo sur cette route (photo en data URL). Relever la limite du proxy Admin pour ce seul chemin.
- Réponses :
  - 200 : même forme que le GET ;
  - 409 `{ ok:false, error, currentSha }` : relire, puis proposer de renvoyer ;
  - 400 `{ ok:false, error }` : afficher le message (refus du back relayé) ;
  - **501** : « l'upload n'est pas encore disponible sur le back commun ». À afficher tel quel tant que Lien en bio n'a pas livré le back v48.
- Rien n'est publié avant Enregistrer. Les pages se régénèrent en une dizaine de secondes après l'enregistrement.

## 3. Tests attendus
Envoi JPG, PNG et WebP ; refus d'un GIF et d'une image de plus de 8 Mo côté écran ; les curseurs et le glisser changent l'aperçu et le relevé ; Retirer vide la photo et le cadrage ;
effets cumulés visibles dans l'aperçu ; un 409 propose de relire ; un 501 est affiché ; captures ordinateur 1280 et mobile 390.
