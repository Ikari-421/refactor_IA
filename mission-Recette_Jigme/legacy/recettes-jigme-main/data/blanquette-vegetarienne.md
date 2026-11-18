---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: blanquette-vegetarienne
title: Blanquette végétarienne
lang: fr
description: "Blanquette végétarienne : recette française avec seitan, carotte et champignon de Paris, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- mijoté
- végétarien
- seitan
image:
  url:
  alt: Blanquette végétarienne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/blanquette-vegetarienne.md
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
    - from: seitan
      to: tofu ferme
      note:
    note: 'Gluten : seitan → tofu ferme.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
  Réinterprétation sans veau d’un ragoût blanc français du XVIIIe s. (voir blanquette
  de veau). Champignons, racines et crème imitent la liaison, pas l’histoire paysanne
  du veau de lait.
fun_facts:
- text: "Sans veau, le fond blanc (légumes, champignons) doit porter le goût : sinon ce n’est qu’une béchamel."
  source_name: Usage
  source_url:
- text: "On garde le principe « ne pas dorer » si l’on veut encore le mot blanquette."
  source_name: Grokipedia, Blanquette de veau
  source_url: https://grokipedia.com/page/Blanquette_de_veau
wines:
- name: Menetou-Salon
  producer: Domaine Pellé
  origin: Morogues, Centre-Loire
  grapes: sauvignon
  award:
  why: Agrume, pierre — crème et champignons.
- name: Pouilly-Fuissé
  producer: J.A. Ferret
  origin: Fuissé, Mâconnais
  grapes: chardonnay
  award:
  why: Noisette, corps — la liaison, un cran au-dessus du Mâcon.
- name: Cheverny rouge
  producer: François Cazin
  origin: Cheverny, Loire
  grapes: pinot noir, gamay
  award:
  why: Léger, groseille — si l’on veut un rouge maigre sur un plat crème.
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: crème fraîche
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez les champignons de Paris en quatre, puis faites les revenir dans une cocotte
      chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Lorsque les
      champignons sont bien colorés, débarrassez et réservez.
    - Cuisson. Épluchez et hachez l’oignon et l’ail. Faites les revenir dans la cocotte à feu doux,
      avec un peu de beurre.
    - Cuisson. Épluchez les carottes et coupez-les en rondelles. Ajoutez-les ensuite dans la cocotte,
      avec les oignons et l’ail. Complétez à hauteur avec du bouillon de légumes. Laissez
      mijoter jusque ce que les légumes soient cuits.
    - Cuisson. À l’aide d’un écumoire, mettez de côté toutes la parties solides (carottes, oignons,
      etc.) et laissez réduire le bouillon quelques minutes.
    - Cuisson. Une fois que le bouillon a réduit, ajoutez de la crème fraiche ainsi que le jus d’un
      citron. Enfin, ajouter petit à petit un roux que vous aurez fait préalablement (vous
      avez la recette dans cette vidéo) jusqu’à obtenir la texture souhaitée.
    - Cuisson. Coupez le seitan (préparation à base de farine de blé) en gros dés et ajoutez les morceaux
      dans la cocotte. Comme Jigmé dans la vidéo ci-dessous, vous pouvez ajouter une pointe
      de massala (facultatif).
    - Finition. Rajoutez les carotes, l’ail, l’oignon et les champignons, puis laissez mijoter le tout
      jusqu’à ce que ce soit bien chaud. C’est prêt ! Servez votre délicieuse blanquette végétarienne
      avec une portion de riz blanc et dégustez bien chaud. Bon appétit ! Découvrez aussi
      notre blanquette revisitée au gingembre et à la citronnelle.
    steps_niveaux:
      amateur:
      - "Coupez les champignons de Paris en quatre, puis faites-les revenir dans une cocotte chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Lorsque les champignons sont bien colorés, débarrassez et réservez."
      - "Épluchez et hachez l’oignon et l’ail. Faites-les revenir dans la cocotte à feu doux, avec un peu de beurre."
      - "Épluchez les carottes et coupez-les en rondelles. Ajoutez-les ensuite dans la cocotte, avec les oignons et l’ail. Complétez à hauteur avec du bouillon de légumes. [[mijoter|Laissez mijoter]] jusque ce que les légumes soient cuits."
      - "À l’aide d’un écumoire, mettez de côté toutes les parties solides (carottes, oignons, etc.) et [[reduire|laissez réduire]] le bouillon quelques minutes."
      - "Une fois que le bouillon a [[reduire|réduit]], ajoutez de la crème fraîche ainsi que le jus d’un citron. Ajoutez petit à petit un roux préparé à l’avance jusqu’à obtenir la texture souhaitée."
      - "Coupez le seitan (préparation à base de farine de blé) en gros dés et ajoutez les morceaux dans la cocotte. Vous pouvez ajouter une pointe de massala (facultatif)."
      - "Ajoutez les carottes, l’ail, l’oignon et les champignons, puis [[mijoter|laissez mijoter]] le tout jusqu’à ce que ce soit bien chaud. Servez avec du riz blanc, bien chaud."
      pro:
      - "Couper les champignons de Paris en quatre. Cocotte chaude, filet d’huile végétale : faire revenir. Saler, poivrer. Bien colorés : débarrasser, réserver."
      - "Éplucher et hacher l’oignon et l’ail. Les faire revenir dans la cocotte à feu doux, avec un peu de beurre."
      - "Éplucher les carottes, les couper en rondelles. Les ajouter dans la cocotte, avec les oignons et l’ail. Compléter à hauteur avec du bouillon de légumes. Mijoter jusque ce que les légumes soient cuits."
      - "Écumoire : mettre de côté toutes les parties solides (carottes, oignons, etc.). Laisser réduire le bouillon quelques minutes."
      - "Bouillon réduit : ajouter la crème fraîche et le jus d’un citron. Incorporer petit à petit un roux préparé à l’avance jusqu’à la texture souhaitée."
      - "Couper le seitan (farine de blé) en gros dés. Ajouter les morceaux dans la cocotte. Pointe de massala facultative."
      - "Remettre les carottes, l’ail, l’oignon et les champignons. Mijoter jusqu’à ce que ce soit bien chaud. Servir avec du riz blanc, bien chaud."
      cavernes:
      - "Champignons de Paris : couper en quatre. Cocotte chaude, filet huile végétale : revenir. Sel, poivre. Colorés : débarrasser, réserver."
      - "Oignon, ail : éplucher, hacher. Cocotte feu doux, beurre : revenir."
      - "Carottes : éplucher, rondelles. Cocotte : oignons, ail, carottes. Bouillon de légumes à hauteur. Mijoter jusque légumes cuits."
      - "Écumoire : parties solides (carottes, oignons) de côté. Bouillon : réduire quelques minutes."
      - "Bouillon réduit : crème fraîche, jus de citron. Roux petit à petit, texture souhaitée."
      - "Seitan (farine de blé) : gros dés. Cocotte : ajouter. Pointe massala facultatif."
      - "Carottes, ail, oignon, champignons : remettre. Mijoter bien chaud. Riz blanc : servir chaud."
    kcal_per_serving: 291
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 291
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: crème de soja ou avoine
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez les champignons de Paris en quatre, puis faites les revenir dans une cocotte
      chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Lorsque les
      champignons sont bien colorés, débarrassez et réservez.
    - Cuisson. Épluchez et hachez l’oignon et l’ail. Faites les revenir dans la cocotte à feu doux,
      avec un peu de margarine végétale.
    - Cuisson. Épluchez les carottes et coupez-les en rondelles. Ajoutez-les ensuite dans la cocotte,
      avec les oignons et l’ail. Complétez à hauteur avec du bouillon de légumes. Laissez
      mijoter jusque ce que les légumes soient cuits.
    - Cuisson. À l’aide d’un écumoire, mettez de côté toutes la parties solides (carottes, oignons,
      etc.) et laissez réduire le bouillon quelques minutes.
    - Cuisson. Une fois que le bouillon a réduit, ajoutez de la crème de soja ou d’avoine ainsi que le jus d’un citron. Enfin, ajouter petit à petit un roux que vous aurez fait préalablement (vous
      avez la recette dans cette vidéo) jusqu’à obtenir la texture souhaitée.
    - Cuisson. Coupez le seitan (préparation à base de farine de blé) en gros dés et ajoutez les morceaux
      dans la cocotte. Comme Jigmé dans la vidéo ci-dessous, vous pouvez ajouter une pointe
      de massala (facultatif).
    - Finition. Rajoutez les carotes, l’ail, l’oignon et les champignons, puis laissez mijoter le tout
      jusqu’à ce que ce soit bien chaud. C’est prêt ! Servez votre délicieuse blanquette végétarienne
      avec une portion de riz blanc et dégustez bien chaud. Bon appétit ! Découvrez aussi
      notre blanquette revisitée au gingembre et à la citronnelle.
    steps_niveaux:
      amateur:
      - "Coupez les champignons de Paris en quatre, puis faites-les revenir dans une cocotte chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Lorsque les champignons sont bien colorés, débarrassez et réservez."
      - "Épluchez et hachez l’oignon et l’ail. Faites-les revenir dans la cocotte à feu doux, avec un peu de margarine végétale."
      - "Épluchez les carottes et coupez-les en rondelles. Ajoutez-les ensuite dans la cocotte, avec les oignons et l’ail. Complétez à hauteur avec du bouillon de légumes. [[mijoter|Laissez mijoter]] jusque ce que les légumes soient cuits."
      - "À l’aide d’un écumoire, mettez de côté toutes les parties solides (carottes, oignons, etc.) et [[reduire|laissez réduire]] le bouillon quelques minutes."
      - "Une fois que le bouillon a [[reduire|réduit]], ajoutez de la crème de soja ou d’avoine ainsi que le jus d’un citron. Ajoutez petit à petit un roux préparé à l’avance jusqu’à obtenir la texture souhaitée."
      - "Coupez le seitan (préparation à base de farine de blé) en gros dés et ajoutez les morceaux dans la cocotte. Vous pouvez ajouter une pointe de massala (facultatif)."
      - "Ajoutez les carottes, l’ail, l’oignon et les champignons, puis [[mijoter|laissez mijoter]] le tout jusqu’à ce que ce soit bien chaud. Servez avec du riz blanc, bien chaud."
      pro:
      - "Couper les champignons de Paris en quatre. Cocotte chaude, filet d’huile végétale : faire revenir. Saler, poivrer. Bien colorés : débarrasser, réserver."
      - "Éplucher et hacher l’oignon et l’ail. Les faire revenir dans la cocotte à feu doux, avec un peu de margarine végétale."
      - "Éplucher les carottes, les couper en rondelles. Les ajouter dans la cocotte, avec les oignons et l’ail. Compléter à hauteur avec du bouillon de légumes. Mijoter jusque ce que les légumes soient cuits."
      - "Écumoire : mettre de côté toutes les parties solides (carottes, oignons, etc.). Laisser réduire le bouillon quelques minutes."
      - "Bouillon réduit : ajouter la crème de soja ou d’avoine et le jus d’un citron. Incorporer petit à petit un roux préparé à l’avance jusqu’à la texture souhaitée."
      - "Couper le seitan (farine de blé) en gros dés. Ajouter les morceaux dans la cocotte. Pointe de massala facultative."
      - "Remettre les carottes, l’ail, l’oignon et les champignons. Mijoter jusqu’à ce que ce soit bien chaud. Servir avec du riz blanc, bien chaud."
      cavernes:
      - "Champignons de Paris : couper en quatre. Cocotte chaude, filet huile végétale : revenir. Sel, poivre. Colorés : débarrasser, réserver."
      - "Oignon, ail : éplucher, hacher. Cocotte feu doux, margarine végétale : revenir."
      - "Carottes : éplucher, rondelles. Cocotte : oignons, ail, carottes. Bouillon de légumes à hauteur. Mijoter jusque légumes cuits."
      - "Écumoire : parties solides (carottes, oignons) de côté. Bouillon : réduire quelques minutes."
      - "Bouillon réduit : crème de soja ou avoine, jus de citron. Roux petit à petit, texture souhaitée."
      - "Seitan (farine de blé) : gros dés. Cocotte : ajouter. Pointe massala facultatif."
      - "Carottes, ail, oignon, champignons : remettre. Mijoter bien chaud. Riz blanc : servir chaud."
    kcal_per_serving: 291
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 291
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Blanquette végétarienne
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/blanquette-vegetarienne]]

## Ingrédients (4 personnes)

- 250 g de seitan
- 2 carotte
- 200 g champignon de Paris
- 1 oignon
- 1 gousse d'ail
- 1 L de bouillon de légumes
- 200 g de crème fraîche
- 1 citron
-  ciboulette

## Préparation

1. Coupez les champignons de Paris en quatre, puis faites les revenir dans une cocotte chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Lorsque les champignons sont bien colorés, débarrassez et réservez.
2. Épluchez et hachez l’oignon et l’ail. Faites les revenir dans la cocotte à feu doux, avec un peu de beurre.
3. Épluchez les carottes et coupez-les en rondelles. Ajoutez-les ensuite dans la cocotte, avec les oignons et l’ail. Complétez à hauteur avec du bouillon de légumes. Laissez mijoter jusque ce que les légumes soient cuits.
4. À l’aide d’un écumoire, mettez de côté toutes la parties solides (carottes, oignons, etc.) et laissez réduire le bouillon quelques minutes.
5. Une fois que le bouillon a réduit, ajoutez de la crème fraiche ainsi que le jus d’un citron. Enfin, ajouter petit à petit un roux que vous aurez fait préalablement (vous avez la recette dans cette vidéo) jusqu’à obtenir la texture souhaitée.
6. Coupez le seitan (préparation à base de farine de blé) en gros dés et ajoutez les morceaux dans la cocotte. Comme Jigmé dans la vidéo ci-dessous, vous pouvez ajouter une pointe de massala (facultatif).
7. Rajoutez les carotes, l’ail, l’oignon et les champignons, puis laissez mijoter le tout jusqu’à ce que ce soit bien chaud.

 
 

 
 C’est prêt ! Servez votre délicieuse blanquette végétarienne avec une portion de riz blanc et dégustez bien chaud. Bon appétit !

Découvrez aussi notre blanquette revisitée au gingembre et à la citronnelle.
