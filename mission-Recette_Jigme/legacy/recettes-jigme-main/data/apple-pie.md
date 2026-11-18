---
schema: recette-web-jigme/v2
slug: apple-pie
title: Apple pie
lang: fr
description: "Apple pie : recette américaine avec pomme, citron et farine, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- végétarien
- pomme
- goûter
image:
  url:
  alt: Apple pie
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/apple-pie.md
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
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans fruits à coque.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
  La tarte aux pommes « american apple pie » vient des colons anglais (croûte coffyn)
  et de pommiers plantés après le XVIIe s. — la pomme n’est pas indigène aux États-Unis.
  L’expression « as American as apple pie » se répand au XXe s. ; le dessert devient
  un cliché de foyer, pas une recette amérindienne.
fun_facts:
- text: >
    *American Cookery* (Amelia Simmons, 1796) donne déjà des tartes aux pommes au
    beurre local.
  source_name: Grokipedia, Pie in American cuisine
  source_url: https://grokipedia.com/page/Pie_in_American_cuisine
- text: >
    Cannelle et muscade sont des épices d’importation : le « goût américain » de la
    pie est un mélange Europe + vergers du Nouveau Monde.
  source_name: Grokipedia, Pie in American cuisine
  source_url: https://grokipedia.com/page/Pie_in_American_cuisine
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Rochefort-sur-Loire, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel, acidité — la pie épicée sans noyer la pâte.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Raisin frais, fleur — la pomme et la cannelle, plus léger qu’un liquoreux.
- name: Cidre bouché brut
  producer: Dupont
  origin: Victot-Pontfol, Normandie
  grapes: pommes à cidre
  award:
  why: Bulles, pomme — le même fruit, plus sec que la garniture.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 30
      rest_min: 90
      total_min: 150
    equipment: &id003
    - four
    - casserole
    - saladier
    - rouleau à pâtisserie
    - film alimentaire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: pomme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: fécule de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sirop d'érable
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Dans un récipient, versez la farine, le sucre glace, l’eau et une pincée de sel. Mélangez
      le tout jusqu’à obtenir une pâte bien homogène.
    - Mélange. Ajoutez le beurre et mélangez de nouveau. Débarrassez la pâte dans du film alimentaire
      et réservez-la au frais pendant environ 1h.
    - Cuisson. Pendant ce temps, épluchez les pommes, coupez-les en quart et retirez le trognon. Coupez-les
      ensuite en lamelle plus fine.
    - Cuisson. Faites chauffer les pommes dans une casserole avec une noix de beurre. Ajoutez le jus
      d’un citron, de la cassonade, de la fécule de maïs, du sirop d’érable. Complétez avec
      un peu de cannelle en fonction de vos goûts. Mélangez bien et laissez cuire une dizaine
      de minutes à feu doux.
    - Cuisson. Séparez votre pâte à tarte en deux. Avec la première moitié, réalisez votre fond de
      tarte. Versez le pommes cuites par dessus. La seconde partie de la pâte va vous permettre
      de réaliser la décoration. Pour cela, aplatissez la pâte à l’aide d’un rouleau puis
      coupez-la en lamelles régulière. Disposez ensuite ces lamelle sur la tarte de manière
      à réaliser un tressage. Pour le faire parfaitement,
    - Finition. Coupez les morceaux de pâte qui dépassent du plat. Pour complétez la décoration du plat,
      réalisez des lamelles très fines avec le reste de votre pâte. Tressez-les par trois.
      Disposez ces jolies nattes sur l’extérieur de la tarte. Complétez avec une pointe de
      cannelle et enfournez le tout à 180°C pendant environ 30min. Et voilà, votre magnifique
      apple pie est prête. Dégustez-la chaude ou tiède, accompagnée d’une délicieuse boule
      de glace à la vanille. Bon appétit !
    steps_niveaux:
      amateur:
      - "Dans un récipient, versez la farine, le sucre glace, l’eau et une pincée de sel. Mélangez le tout jusqu’à obtenir une pâte bien homogène."
      - "Ajoutez le beurre et mélangez de nouveau. Débarrassez la pâte dans du film alimentaire et réservez-la au frais pendant environ 1 h."
      - "Pendant ce temps, épluchez les pommes, coupez-les en quart et retirez le trognon. Coupez-les ensuite en lamelles plus fines."
      - "Faites chauffer les pommes dans une casserole avec une noix de beurre. Ajoutez le jus d’un citron, de la cassonade, de la fécule de maïs, du sirop d’érable. Complétez avec un peu de cannelle en fonction de vos goûts. Mélangez bien et laissez cuire une dizaine de minutes à feu doux."
      - "Séparez votre pâte à tarte en deux. Avec la première moitié, réalisez votre fond de tarte. Versez les pommes cuites par-dessus. Avec la seconde partie, aplatissez la pâte à l’aide d’un rouleau puis coupez-la en lamelles régulières. Disposez ces lamelles sur la tarte de manière à réaliser un tressage."
      - "Coupez les morceaux de pâte qui dépassent du plat. Réalisez des lamelles très fines avec le reste de votre pâte. Tressez-les par trois. Disposez ces nattes sur l’extérieur de la tarte. Complétez avec une pointe de cannelle et enfournez le tout à 180 °C pendant environ 30 min. Dégustez chaude ou tiède, accompagnée d’une boule de glace à la vanille."
      pro:
      - "Dans un récipient, verser la farine, le sucre glace, l’eau et une pincée de sel. Mélanger jusqu’à pâte homogène."
      - "Ajouter le beurre. Mélanger. Débarrasser la pâte dans du film alimentaire. Réserver au frais environ 1 h."
      - "Pendant ce temps, éplucher les pommes. Couper en quart, retirer le trognon. Couper en lamelles plus fines."
      - "Chauffer les pommes dans une casserole avec une noix de beurre. Ajouter le jus d’un citron, la cassonade, la fécule de maïs, le sirop d’érable. Un peu de cannelle selon le goût. Mélanger. Cuire une dizaine de minutes à feu doux."
      - "Séparer la pâte en deux. Première moitié : fond de tarte. Verser les pommes cuites. Seconde : aplatir au rouleau, couper en lamelles régulières, tresser sur la tarte."
      - "Couper les morceaux de pâte qui dépassent. Avec le reste, lamelles très fines, tresser par trois, disposer en nattes sur l’extérieur. Pointe de cannelle. Four 180 °C environ 30 min. Servir chaude ou tiède, boule de glace à la vanille."
      cavernes:
      - "Récipient : farine, sucre glace, eau, pincée sel. Mélanger. Pâte homogène."
      - "Beurre. Mélanger. Film alimentaire. Frais environ 1 h."
      - "Pendant : pommes éplucher. Quart. Trognon. Lamelles plus fines."
      - "Casserole : pommes, noix beurre. Jus citron, cassonade, fécule de maïs, sirop d’érable. Peu cannelle selon goûts. Mélanger. Cuire dizaine de minutes feu doux."
      - "Pâte tarte : deux. Première moitié : fond tarte. Pommes cuites dessus. Seconde : rouleau, aplatir. Lamelles régulières. Tressage."
      - "Pâte qui dépasse : couper. Reste pâte : lamelles très fines. Tresser par trois. Nattes extérieur tarte. Pointe cannelle. Four 180 °C environ 30 min. Chaude ou tiède. Boule glace vanille."
    kcal_per_serving: 1132
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1132
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
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 30
      rest_min: 90
      total_min: 150
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: pomme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: fécule de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sirop d'érable
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Dans un récipient, versez la farine, le sucre glace, l’eau et une pincée de sel. Mélangez
      le tout jusqu’à obtenir une pâte bien homogène.
    - Mélange. Ajoutez la margarine végétale et mélangez de nouveau. Débarrassez la pâte dans du film alimentaire
      et réservez-la au frais pendant environ 1h.
    - Cuisson. Pendant ce temps, épluchez les pommes, coupez-les en quart et retirez le trognon. Coupez-les
      ensuite en lamelle plus fine.
    - Cuisson. Faites chauffer les pommes dans une casserole avec une noix de margarine végétale. Ajoutez le jus
      d’un citron, de la cassonade, de la fécule de maïs, du sirop d’érable. Complétez avec
      un peu de cannelle en fonction de vos goûts. Mélangez bien et laissez cuire une dizaine
      de minutes à feu doux.
    - Cuisson. Séparez votre pâte à tarte en deux. Avec la première moitié, réalisez votre fond de
      tarte. Versez le pommes cuites par dessus. La seconde partie de la pâte va vous permettre
      de réaliser la décoration. Pour cela, aplatissez la pâte à l’aide d’un rouleau puis
      coupez-la en lamelles régulière. Disposez ensuite ces lamelle sur la tarte de manière
      à réaliser un tressage. Pour le faire parfaitement,
    - Finition. Coupez les morceaux de pâte qui dépassent du plat. Pour complétez la décoration du plat,
      réalisez des lamelles très fines avec le reste de votre pâte. Tressez-les par trois.
      Disposez ces jolies nattes sur l’extérieur de la tarte. Complétez avec une pointe de
      cannelle et enfournez le tout à 180°C pendant environ 30min. Et voilà, votre magnifique
      apple pie est prête. Dégustez-la chaude ou tiède, accompagnée d’une délicieuse boule
      de glace à la vanille. Bon appétit !
    steps_niveaux:
      amateur:
      - "Dans un récipient, versez la farine, le sucre glace, l’eau et une pincée de sel. Mélangez le tout jusqu’à obtenir une pâte bien homogène."
      - "Ajoutez la margarine végétale et mélangez de nouveau. Débarrassez la pâte dans du film alimentaire et réservez-la au frais pendant environ 1 h."
      - "Pendant ce temps, épluchez les pommes, coupez-les en quart et retirez le trognon. Coupez-les ensuite en lamelles plus fines."
      - "Faites chauffer les pommes dans une casserole avec une noix de margarine végétale. Ajoutez le jus d’un citron, de la cassonade, de la fécule de maïs, du sirop d’érable. Complétez avec un peu de cannelle en fonction de vos goûts. Mélangez bien et laissez cuire une dizaine de minutes à feu doux."
      - "Séparez votre pâte à tarte en deux. Avec la première moitié, réalisez votre fond de tarte. Versez les pommes cuites par-dessus. Avec la seconde partie, aplatissez la pâte à l’aide d’un rouleau puis coupez-la en lamelles régulières. Disposez ces lamelles sur la tarte de manière à réaliser un tressage."
      - "Coupez les morceaux de pâte qui dépassent du plat. Réalisez des lamelles très fines avec le reste de votre pâte. Tressez-les par trois. Disposez ces nattes sur l’extérieur de la tarte. Complétez avec une pointe de cannelle et enfournez le tout à 180 °C pendant environ 30 min. Dégustez chaude ou tiède, accompagnée d’une boule de glace à la vanille."
      pro:
      - "Dans un récipient, verser la farine, le sucre glace, l’eau et une pincée de sel. Mélanger jusqu’à pâte homogène."
      - "Ajouter la margarine végétale. Mélanger. Débarrasser la pâte dans du film alimentaire. Réserver au frais environ 1 h."
      - "Pendant ce temps, éplucher les pommes. Couper en quart, retirer le trognon. Couper en lamelles plus fines."
      - "Chauffer les pommes dans une casserole avec une noix de margarine végétale. Ajouter le jus d’un citron, la cassonade, la fécule de maïs, le sirop d’érable. Un peu de cannelle selon le goût. Mélanger. Cuire une dizaine de minutes à feu doux."
      - "Séparer la pâte en deux. Première moitié : fond de tarte. Verser les pommes cuites. Seconde : aplatir au rouleau, couper en lamelles régulières, tresser sur la tarte."
      - "Couper les morceaux de pâte qui dépassent. Avec le reste, lamelles très fines, tresser par trois, disposer en nattes sur l’extérieur. Pointe de cannelle. Four 180 °C environ 30 min. Servir chaude ou tiède, boule de glace à la vanille."
      cavernes:
      - "Récipient : farine, sucre glace, eau, pincée sel. Mélanger. Pâte homogène."
      - "Margarine végétale. Mélanger. Film alimentaire. Frais environ 1 h."
      - "Pendant : pommes éplucher. Quart. Trognon. Lamelles plus fines."
      - "Casserole : pommes, noix margarine végétale. Jus citron, cassonade, fécule de maïs, sirop d’érable. Peu cannelle selon goûts. Mélanger. Cuire dizaine de minutes feu doux."
      - "Pâte tarte : deux. Première moitié : fond tarte. Pommes cuites dessus. Seconde : rouleau, aplatir. Lamelles régulières. Tressage."
      - "Pâte qui dépasse : couper. Reste pâte : lamelles très fines. Tresser par trois. Nattes extérieur tarte. Pointe cannelle. Four 180 °C environ 30 min. Chaude ou tiède. Boule glace vanille."
    kcal_per_serving: 692
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1132
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Apple pie
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/apple-pie]]

## Ingrédients (4 personnes)

- 8 pomme
- 1 citron
- 500 g de farine
- 50 g de sucre
- 250 g de beurre
- 60 g d'eau
- 40 g de cassonade
- 40 g de fécule de maïs
- 70 g de sirop d'érable

## Préparation

1. Dans un récipient, versez la farine, le sucre glace, l’eau et une pincée de sel. Mélangez le tout jusqu’à obtenir une pâte bien homogène.
2. Ajoutez le beurre et mélangez de nouveau. Débarrassez la pâte dans du film alimentaire et réservez-la au frais pendant environ 1h.
3. Pendant ce temps, épluchez les pommes, coupez-les en quart et retirez le trognon. Coupez-les ensuite en lamelle plus fine.
4. Faites chauffer les pommes dans une casserole avec une noix de beurre. Ajoutez le jus d’un citron, de la cassonade, de la fécule de maïs, du sirop d’érable. Complétez avec un peu de cannelle en fonction de vos goûts. Mélangez bien et laissez cuire une dizaine de minutes à feu doux.
5. Séparez votre pâte à tarte en deux. Avec la première moitié, réalisez votre fond de tarte. Versez le pommes cuites par dessus. La seconde partie de la pâte va vous permettre de réaliser la décoration. Pour cela, aplatissez la pâte à l’aide d’un rouleau puis coupez-la en lamelles régulière. Disposez ensuite ces lamelle sur la tarte de manière à réaliser un tressage. Pour le faire parfaitement,
6. Coupez les morceaux de pâte qui dépassent du plat. Pour complétez la décoration du plat, réalisez des lamelles très fines avec le reste de votre pâte. Tressez-les par trois. Disposez ces jolies nattes sur l’extérieur de la tarte. Complétez avec une pointe de cannelle et enfournez le tout à 180°C pendant environ 30min.

 
 

 
 Et voilà, votre magnifique apple pie est prête. Dégustez-la chaude ou tiède, accompagnée d’une délicieuse boule de glace à la vanille. Bon appétit !
