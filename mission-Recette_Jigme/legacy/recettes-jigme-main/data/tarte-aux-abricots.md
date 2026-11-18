---
schema: recette-web-jigme/v2
slug: tarte-aux-abricots
title: Tarte aux abricots
lang: fr
description: "Tarte aux abricots : recette française avec pâte sablée sucrée, abricot et oeuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tarte
- fruits
- végétarien
image:
  url:
  alt: Tarte aux abricots
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-aux-abricots.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
diet_toggles:
- vegetarien
- vegan
- pesco
allergen_toggles:
- sans_gluten
- sans_lactose
- sans_produits_laitiers
- sans_oeufs
- sans_fruits_a_coque
- sans_celeri
- sans_moutarde
- sans_mollusques
- sans_crustaces
- sans_poisson
- sans_lupin
- sans_soja
- sans_arachides
- sans_sesame
- sans_sulfites
constraint_layers:
  sans_gluten:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - gluten
    swaps:
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    - from: pâte sablée sucrée
      to: pâte brisée vegan (à la margarine)
      note:
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    - from: pâte sablée sucrée
      to: pâte brisée vegan (à la margarine)
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans poisson.
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Tarte aux fruits d’été, abricots sur pâte (sablée ou brisée), souvent une
  frangipane ou rien. Plat de saison français, pas une tarte d’auteur.
fun_facts:
- text: >
    L’abricot rend du jus : trop mûr, la pâte détrempée ; trop dur, il reste acide.
  source_name: Usage
  source_url:
- text: >
    Un peu de poudre d’amande sous les fruits absorbe le jus.
  source_name: Usage
  source_url:
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin — l’abricot, sucré-acide.
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise, Rhône
  grapes: muscat
  award:
  why: Muscat — le fruit, sans un vin tannique.
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — la tarte d’été.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte sablée sucrée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: piece
      item: abricot
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par foncer votre tarte (vous pouvez regarder ce tuto si besoin).
    - Cuisson. Coupez les abricots en deux, retirez les noyaux, puis coupez les grossièrement. Pensez
      à conserver quelques abricot entier pour le dressage.
    - Cuisson. Mettez les morceaux d’abricots dans une casserole et laissez mijoter à feu doux. Si
      le mélange accroche, n’hésitez pas à ajouter un peu d’eau. Laissez cuire jusqu’à obtenir
      une texture proche de celle de la confiture. Vous pouvez ajouter un peu de sucre en
      fonction de vos goûts et de celui des abricots.
    - Cuisson. Pendant ce temps, réalisez la crème d’amande. Pour cela, versez le beurre et le sucre
      dans un récipient et mélangez. Ajoutez ensuite la poudre d’amande et les oeufs et mélangez
      de nouveau.
    - Dressage. Pour le dressage, déposez un peu de marmelade d’abricot au fond de votre tarte. Ajoutez
      quelques abricots secs, puis recouvrez le tout avec la crème d’amande. Enfin, décorez
      votre tarte avec quelques abricots coupés en deux et dénoyautés.
    - Cuisson. Enfournez la tarte à 170°C pendant environ 30min. Dégustez votre tarte encore tiède
      ou laissez-la refroidir pour plus tard. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. [[foncer|Foncez]] votre tarte."
      - "Cuisson. Coupez les abricots en deux, retirez les noyaux, puis coupez-les grossièrement. Conservez quelques abricots entiers pour le dressage."
      - "Cuisson. Mettez les morceaux d’abricots dans une casserole et [[mijoter|laissez mijoter]] à feu doux. Si le mélange accroche, ajoutez un peu d’eau. Laissez cuire jusqu’à obtenir une texture proche de celle de la confiture. Vous pouvez ajouter un peu de sucre en fonction de vos goûts et de celui des abricots."
      - "Cuisson. Pendant ce temps, réalisez la crème d’amande. Versez le beurre et le sucre dans un récipient et mélangez. Ajoutez ensuite la poudre d’amande et les œufs et mélangez de nouveau."
      - "Dressage. Déposez un peu de marmelade d’abricot au fond de votre tarte. Ajoutez quelques abricots secs, puis recouvrez le tout avec la crème d’amande. Décorez votre tarte avec quelques abricots coupés en deux et dénoyautés."
      - "Cuisson. Enfournez la tarte à 170 °C pendant environ 30 min. Dégustez-la encore tiède ou laissez-la refroidir pour plus tard."
      pro:
      - "Foncer la tarte."
      - "Couper les abricots en deux, retirer les noyaux, puis les couper grossièrement. Conserver quelques abricots entiers pour le dressage."
      - "Mettre les morceaux d’abricots dans une casserole et laisser mijoter à feu doux. Si le mélange accroche, ajouter un peu d’eau. Laisser cuire jusqu’à une texture proche de celle de la confiture. Ajouter un peu de sucre selon le goût et celui des abricots."
      - "Pendant ce temps, réaliser la crème d’amande. Verser le beurre et le sucre dans un récipient et mélanger. Ajouter ensuite la poudre d’amande et les œufs et mélanger de nouveau."
      - "Déposer un peu de marmelade d’abricot au fond de la tarte. Ajouter quelques abricots secs, puis recouvrir le tout avec la crème d’amande. Décorer la tarte avec quelques abricots coupés en deux et dénoyautés."
      - "Enfourner la tarte à 170 °C pendant environ 30 min. Déguster encore tiède ou laisser refroidir pour plus tard."
      cavernes:
      - "Préparation. Tarte, foncer."
      - "Cuisson. Abricots, couper en deux, noyaux, retirer, puis couper grossièrement. Quelques abricots entiers, dressage, garder."
      - "Cuisson. Morceaux abricots, casserole, mijoter feu doux. Si mélange accroche, peu eau, ajouter. Cuire jusqu’à texture proche confiture. Option : peu sucre selon goûts et celui abricots."
      - "Cuisson. Pendant ce temps, crème amande, réaliser. Beurre, sucre, récipient, verser, mélanger. Puis poudre amande, œufs, ajouter, mélanger de nouveau."
      - "Dressage. Peu marmelade abricot, fond tarte, déposer. Quelques abricots secs, ajouter, puis tout, crème amande, recouvrir. Tarte, quelques abricots coupés en deux, dénoyautés, décorer."
      - "Cuisson. Tarte, Four 170 °C, environ 30 min, enfourner. Encore tiède, déguster, ou refroidir, plus tard."
    kcal_per_serving: 578
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 578
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    - vegan
    allergens:
    - gluten
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte brisée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: piece
      item: abricot
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par foncer votre tarte (vous pouvez regarder ce tuto si besoin).
    - Cuisson. Coupez les abricots en deux, retirez les noyaux, puis coupez les grossièrement. Pensez
      à conserver quelques abricot entier pour le dressage.
    - Cuisson. Mettez les morceaux d’abricots dans une casserole et laissez mijoter à feu doux. Si
      le mélange accroche, n’hésitez pas à ajouter un peu d’eau. Laissez cuire jusqu’à obtenir
      une texture proche de celle de la confiture. Vous pouvez ajouter un peu de sucre en
      fonction de vos goûts et de celui des abricots.
    - Mélange. Pendant ce temps, réalisez la crème d’amande. Pour cela, versez la margarine végétale et le sucre dans un récipient et mélangez. Ajoutez ensuite la poudre d’amande
      et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et mélangez de
      nouveau.
    - Dressage. Pour le dressage, déposez un peu de marmelade d’abricot au fond de votre tarte. Ajoutez
      quelques abricots secs, puis recouvrez le tout avec la crème d’amande. Enfin, décorez
      votre tarte avec quelques abricots coupés en deux et dénoyautés.
    - Cuisson. Enfournez la tarte à 170°C pendant environ 30min. Dégustez votre tarte encore tiède
      ou laissez-la refroidir pour plus tard. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. [[foncer|Foncez]] votre tarte."
      - "Cuisson. Coupez les abricots en deux, retirez les noyaux, puis coupez-les grossièrement. Conservez quelques abricots entiers pour le dressage."
      - "Cuisson. Mettez les morceaux d’abricots dans une casserole et [[mijoter|laissez mijoter]] à feu doux. Si le mélange accroche, ajoutez un peu d’eau. Laissez cuire jusqu’à obtenir une texture proche de celle de la confiture. Vous pouvez ajouter un peu de sucre en fonction de vos goûts et de celui des abricots."
      - "Mélange. Pendant ce temps, réalisez la crème d’amande. Versez la margarine végétale et le sucre dans un récipient et mélangez. Ajoutez ensuite la poudre d’amande et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et mélangez de nouveau."
      - "Dressage. Déposez un peu de marmelade d’abricot au fond de votre tarte. Ajoutez quelques abricots secs, puis recouvrez le tout avec la crème d’amande. Décorez votre tarte avec quelques abricots coupés en deux et dénoyautés."
      - "Cuisson. Enfournez la tarte à 170 °C pendant environ 30 min. Dégustez-la encore tiède ou laissez-la refroidir pour plus tard."
      pro:
      - "Foncer la tarte."
      - "Couper les abricots en deux, retirer les noyaux, puis les couper grossièrement. Conserver quelques abricots entiers pour le dressage."
      - "Mettre les morceaux d’abricots dans une casserole et laisser mijoter à feu doux. Si le mélange accroche, ajouter un peu d’eau. Laisser cuire jusqu’à une texture proche de celle de la confiture. Ajouter un peu de sucre selon le goût et celui des abricots."
      - "Pendant ce temps, réaliser la crème d’amande. Verser la margarine végétale et le sucre dans un récipient et mélanger. Ajouter ensuite la poudre d’amande et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et mélanger de nouveau."
      - "Déposer un peu de marmelade d’abricot au fond de la tarte. Ajouter quelques abricots secs, puis recouvrir le tout avec la crème d’amande. Décorer la tarte avec quelques abricots coupés en deux et dénoyautés."
      - "Enfourner la tarte à 170 °C pendant environ 30 min. Déguster encore tiède ou laisser refroidir pour plus tard."
      cavernes:
      - "Préparation. Tarte, foncer."
      - "Cuisson. Abricots, couper en deux, noyaux, retirer, puis couper grossièrement. Quelques abricots entiers, dressage, garder."
      - "Cuisson. Morceaux abricots, casserole, mijoter feu doux. Si mélange accroche, peu eau, ajouter. Cuire jusqu’à texture proche confiture. Option : peu sucre selon goûts et celui abricots."
      - "Mélange. Pendant ce temps, crème amande, réaliser. Margarine végétale, sucre, récipient, verser, mélanger. Puis poudre amande, œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, ajouter, mélanger de nouveau."
      - "Dressage. Peu marmelade abricot, fond tarte, déposer. Quelques abricots secs, ajouter, puis tout, crème amande, recouvrir. Tarte, quelques abricots coupés en deux, dénoyautés, décorer."
      - "Cuisson. Tarte, Four 170 °C, environ 30 min, enfourner. Encore tiède, déguster, ou refroidir, plus tard."
    kcal_per_serving: 358
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 578
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte aux abricots
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-aux-abricots]]

## Ingrédients (4 personnes)

- 1 pâte sablée sucrée
- 15 abricot
- 2 oeuf
- 125 g de poudre d'amande
- 125 g de sucre
- 125 g de beurre

## Préparation

1. Commencez par foncer votre tarte (vous pouvez regarder ce tuto si besoin).
2. Coupez les abricots en deux, retirez les noyaux, puis coupez les grossièrement. Pensez à conserver quelques abricot entier pour le dressage.
3. Mettez les morceaux d’abricots dans une casserole et laissez mijoter à feu doux. Si le mélange accroche, n’hésitez pas à ajouter un peu d’eau. Laissez cuire jusqu’à obtenir une texture proche de celle de la confiture. Vous pouvez ajouter un peu de sucre en fonction de vos goûts et de celui des abricots.
4. Pendant ce temps, réalisez la crème d’amande. Pour cela, versez le beurre et le sucre dans un récipient et mélangez. Ajoutez ensuite la poudre d’amande et les oeufs et mélangez de nouveau.
5. Pour le dressage, déposez un peu de marmelade d’abricot au fond de votre tarte. Ajoutez quelques abricots secs, puis recouvrez le tout avec la crème d’amande. Enfin, décorez votre tarte avec quelques abricots coupés en deux et dénoyautés.
6. Enfournez la tarte à 170°C pendant environ 30min.

 
 

 
 Dégustez votre tarte encore tiède ou laissez-la refroidir pour plus tard. Bon appétit !
