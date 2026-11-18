---
schema: recette-web-jigme/v2
slug: pates-au-saumon
title: Pâtes au saumon
lang: fr
description: "Pâtes au saumon : recette française avec pavé de saumon, pâtes et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- pâtes
- saumon
- pavé de saumon
image:
  url:
  alt: Pâtes au saumon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pates-au-saumon.md
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
    - from: pâtes
      to: pâtes sans gluten
      note: Cuisson plus courte, surveiller.
    note: Pâtes de blé → pâtes sans gluten.
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
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    - from: tofu ferme ou halloumi
      to: tofu ferme
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
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
    - from: halloumi ou tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : halloumi ou tofu fumé → pois chiches rôtis ; tofu ferme ou halloumi → pois
      chiches rôtis ; tofu ferme → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  Pâtes nappées d’une sauce au saumon (crème, vin blanc, aneth). Plat de maison
  contemporain, pas une recette italienne nommée. Les pâtes sont italiennes ;
  le saumon-crème est un mariage nordique-français de resto.
fun_facts:
- text: >
    Le saumon se ajoute hors du feu ou à peine : trop cuit, il sèche et blanchit.
  source_name: Usage
  source_url:
- text: >
    Une sauce trop réduite sale : le saumon fumé, s’il y en a, sale déjà.
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — le saumon, sans un chardonnay boisé.
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire — la crème, un blanc un peu plus ample.
- name: Chablis
  producer: La Chablisienne
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre, citron — le poisson, sans beurre de fût.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - poisson
    - sulfites
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pavé de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pâtes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: fumet de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aneth fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Épluchez et ciselez très finement les échalotes. Faites les revenir dans une casserole
      avec un peu de vin blanc et laissez réduire.
    - Cuisson. Lorsque le vin s’est évaporé, ajoutez le fumet de poisson. Laissez cuire à feu doux
      jusqu’à ce que le fumet de poisson ait réduit de moitié, voire plus.
    - Cuisson. Pendant ce temps, découpez les pavés de saumon. Pour que le plat soit beau visuellement,
      essayez de réaliser des cubes bien réguliers.
    - Cuisson. Dans la casserole, ajoutez la crème liquide et laissez de nouveau réduire de moitié.
      Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante.
    - Cuisson. Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée
      en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu.
    - Finition. Salez et poivrez les pavés de saumon, puis disposez-les dans la casserole contenant
      la sauce. Ils vont lentement cuire dans la crème encore chaude. Débarrassez les pâtes
      dans une ou plusieurs assiettes, ajoutez la sauce et le saumon, puis complétez avec
      un peu d’aneth ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et ciselez très finement les échalotes. Faites-les revenir dans une casserole avec un peu de vin blanc et [[reduire|laissez réduire]]."
      - "Lorsque le vin s’est évaporé, ajoutez le fumet de poisson. Laissez cuire à feu doux jusqu’à ce que le fumet de poisson ait [[reduire|réduit de moitié]], voire plus."
      - "Pendant ce temps, découpez les pavés de saumon. Pour que le plat soit beau visuellement, essayez de réaliser des cubes bien réguliers."
      - "Dans la casserole, ajoutez la crème liquide et [[reduire|laissez de nouveau réduire de moitié]]. Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante."
      - "Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu."
      - "Salez et poivrez les pavés de saumon, puis disposez-les dans la casserole contenant la sauce. Ils vont lentement cuire dans la crème encore chaude. Débarrassez les pâtes dans une ou plusieurs assiettes, ajoutez la sauce et le saumon, puis complétez avec un peu d’aneth ciselée."
      pro:
      - "Éplucher et ciseler très finement les échalotes. Faire revenir dans une casserole avec un peu de vin blanc. Laisser réduire."
      - "Lorsque le vin s’est évaporé, ajouter le fumet de poisson. Cuire à feu doux jusqu’à réduction de moitié, voire plus."
      - "Pendant ce temps, découper les pavés de saumon en cubes bien réguliers."
      - "Ajouter la crème liquide. Laisser de nouveau réduire de moitié. Lancer en parallèle la cuisson des pâtes dans une casserole d’eau bouillante."
      - "Lorsque la sauce est assez crémeuse et concentrée en goût, saler et poivrer à l’envie. Éteindre le feu."
      - "Saler et poivrer les pavés de saumon. Disposer dans la casserole, dans la crème encore chaude : cuisson lente. Débarrasser les pâtes. Ajouter sauce et saumon. Compléter d’aneth ciselée."
      cavernes:
      - "Échalotes éplucher, ciseler très fin. Casserole, peu de vin blanc, revenir. Réduire."
      - "Vin évaporé. Fumet de poisson. Feu doux. Réduire moitié, voire plus."
      - "Pendant : pavés saumon cubes réguliers."
      - "Crème liquide. Réduire moitié encore. Autre casserole eau bouillante, pâtes."
      - "Sauce crémeuse, goût concentré. Sel poivre envie. Feu éteindre."
      - "Pavés saumon sel poivre. Sauce encore chaude, disposer. Cuisson lente. Pâtes débarrasser. Sauce saumon. Aneth ciselée."
    kcal_per_serving: 800
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - soja
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: halloumi ou tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pâtes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aneth fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Épluchez et ciselez très finement les échalotes. Faites les revenir dans une casserole
      avec un peu de vin blanc et laissez réduire.
    - Cuisson. Lorsque le vin s’est évaporé, ajoutez le fond de légumes. Laissez cuire à feu doux jusqu’à ce qu’il ait réduit de moitié, voire plus.
    - Cuisson. Pendant ce temps, découpez le halloumi (ou le tofu fumé) en cubes réguliers.
    - Cuisson. Dans la casserole, ajoutez la crème liquide et laissez de nouveau réduire de moitié.
      Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante.
    - Cuisson. Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée
      en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu.
    - Finition. Salez et poivrez le halloumi (ou le tofu fumé), puis disposez-le dans la casserole contenant la sauce. Il va lentement cuire dans la crème encore chaude. Débarrassez les pâtes, ajoutez la sauce et le halloumi, puis complétez avec
      un peu d’aneth ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et ciselez très finement les échalotes. Faites-les revenir dans une casserole avec un peu de vin blanc et [[reduire|laissez réduire]]."
      - "Lorsque le vin s’est évaporé, ajoutez le fond de légumes. Laissez cuire à feu doux jusqu’à ce qu’il ait [[reduire|réduit de moitié]], voire plus."
      - "Pendant ce temps, découpez le halloumi (ou le tofu fumé) en cubes réguliers."
      - "Dans la casserole, ajoutez la crème liquide et [[reduire|laissez de nouveau réduire de moitié]]. Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante."
      - "Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu."
      - "Salez et poivrez le halloumi (ou le tofu fumé), puis disposez-le dans la casserole contenant la sauce. Il va lentement cuire dans la crème encore chaude. Débarrassez les pâtes, ajoutez la sauce et le halloumi, puis complétez avec un peu d’aneth ciselée."
      pro:
      - "Éplucher et ciseler très finement les échalotes. Faire revenir dans une casserole avec un peu de vin blanc. Laisser réduire."
      - "Lorsque le vin s’est évaporé, ajouter le fond de légumes. Cuire à feu doux jusqu’à réduction de moitié, voire plus."
      - "Pendant ce temps, découper le halloumi (ou le tofu fumé) en cubes réguliers."
      - "Ajouter la crème liquide. Laisser de nouveau réduire de moitié. Lancer en parallèle la cuisson des pâtes dans une casserole d’eau bouillante."
      - "Lorsque la sauce est assez crémeuse et concentrée en goût, saler et poivrer à l’envie. Éteindre le feu."
      - "Saler et poivrer le halloumi (ou le tofu fumé). Disposer dans la casserole, dans la crème encore chaude : cuisson lente. Débarrasser les pâtes. Ajouter sauce et halloumi. Compléter d’aneth ciselée."
      cavernes:
      - "Échalotes éplucher, ciseler très fin. Casserole, peu de vin blanc, revenir. Réduire."
      - "Vin évaporé. Fond de légumes. Feu doux. Réduire moitié, voire plus."
      - "Pendant : halloumi (ou tofu fumé) cubes réguliers."
      - "Crème liquide. Réduire moitié encore. Autre casserole eau bouillante, pâtes."
      - "Sauce crémeuse, goût concentré. Sel poivre envie. Feu éteindre."
      - "Halloumi (ou tofu fumé) sel poivre. Sauce encore chaude, disposer. Cuisson lente. Pâtes débarrasser. Sauce halloumi. Aneth ciselée."
    kcal_per_serving: 880
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
    - soja
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pâtes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aneth fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Épluchez et ciselez très finement les échalotes. Faites les revenir dans une casserole
      avec un peu de vin blanc et laissez réduire.
    - Cuisson. Lorsque le vin s’est évaporé, ajoutez le fond de légumes. Laissez réduire de moitié à feu doux.
    - Cuisson. Pendant ce temps, découpez le tofu ferme en cubes réguliers.
    - Cuisson. Dans la casserole, ajoutez la crème de soja ou avoine et laissez de nouveau réduire
      de moitié. Vous pouvez également lancer la cuisson des pâtes dans une autre casserole
      d’eau bouillante.
    - Cuisson. Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée
      en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu.
    - Dressage. Salez et poivrez le tofu, puis disposez-le dans la sauce encore chaude. Dressez les pâtes, la sauce, le tofu et l’aneth. Bon appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et ciselez très finement les échalotes. Faites-les revenir dans une casserole avec un peu de vin blanc et [[reduire|laissez réduire]]."
      - "Lorsque le vin s’est évaporé, ajoutez le fond de légumes. Laissez [[reduire|réduire de moitié]] à feu doux."
      - "Pendant ce temps, découpez le tofu ferme en cubes réguliers."
      - "Dans la casserole, ajoutez la crème de soja ou avoine et [[reduire|laissez de nouveau réduire de moitié]]. Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante."
      - "Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu."
      - "Salez et poivrez le tofu, puis disposez-le dans la sauce encore chaude. Dressez les pâtes, la sauce, le tofu et l’aneth."
      pro:
      - "Éplucher et ciseler très finement les échalotes. Faire revenir dans une casserole avec un peu de vin blanc. Laisser réduire."
      - "Lorsque le vin s’est évaporé, ajouter le fond de légumes. Laisser réduire de moitié à feu doux."
      - "Pendant ce temps, découper le tofu ferme en cubes réguliers."
      - "Ajouter la crème de soja ou avoine. Laisser de nouveau réduire de moitié. Lancer en parallèle la cuisson des pâtes dans une casserole d’eau bouillante."
      - "Lorsque la sauce est assez crémeuse et concentrée en goût, saler et poivrer à l’envie. Éteindre le feu."
      - "Saler et poivrer le tofu. Disposer dans la sauce encore chaude. Dresser pâtes, sauce, tofu et aneth."
      cavernes:
      - "Échalotes éplucher, ciseler très fin. Casserole, peu de vin blanc, revenir. Réduire."
      - "Vin évaporé. Fond de légumes. Feu doux. Réduire moitié."
      - "Pendant : tofu ferme cubes réguliers."
      - "Crème de soja ou avoine. Réduire moitié encore. Autre casserole eau bouillante, pâtes."
      - "Sauce crémeuse, goût concentré. Sel poivre envie. Feu éteindre."
      - "Tofu sel poivre. Sauce encore chaude, disposer. Dresser pâtes sauce tofu aneth."
    kcal_per_serving: 630
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - poisson
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 800
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; crème"
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md

---

# Pâtes au saumon
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pates-au-saumon]]

## Ingrédients (4 personnes)

- 4 pavé de saumon
- 400 g de pâtes
- 25 cL de crème liquide
- 80 cL de fumet de poisson
- 4 échalote
-  vin blanc
-  aneth fraîche

## Préparation

1. Épluchez et ciselez très finement les échalotes. Faites les revenir dans une casserole avec un peu de vin blanc et laissez réduire.
2. Lorsque le vin s’est évaporé, ajoutez le fumet de poisson. Laissez cuire à feu doux jusqu’à ce que le fumet de poisson ait réduit de moitié, voire plus.
3. Pendant ce temps, découpez les pavés de saumon. Pour que le plat soit beau visuellement, essayez de réaliser des cubes bien réguliers.
4. Dans la casserole, ajoutez la crème liquide et laissez de nouveau réduire de moitié. Vous pouvez également lancer la cuisson des pâtes dans une autre casserole d’eau bouillante.
5. Une fois que la sauce a une consistance assez crémeuse et qu’elle est bien concentrée en goût, rajoutez du sel et du poivre à l’envie, puis éteignez le feu.
6. Salez et poivrez les pavés de saumon, puis disposez-les dans la casserole contenant la sauce. Ils vont lentement cuire dans la crème encore chaude.

 
 

 
 Débarrassez les pâtes dans une ou plusieurs assiettes, ajoutez la sauce et le saumon, puis complétez avec un peu d’aneth ciselée. Bon appétit !

 
