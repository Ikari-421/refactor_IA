---
schema: recette-web-jigme/v2
slug: matcha-latte
title: Matcha latte
lang: fr
description: "Matcha latte : recette japonaise avec lait, miel et poudre de matcha, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: sucré
tags:
- sucré
- boisson
- thé
- végétarien
image:
  url:
  alt: Matcha latte
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/matcha-latte.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
  Matcha : poudre de thé vert japonais (feuilles ombrées, moulues). Le « latte »
  mélange ce thé fouetté à du lait. Il s’est répandu dans les cafés au début
  du XXIe siècle, à partir de la tradition japonaise du matcha. Ce n’est pas
  la cérémonie du thé.
fun_facts:
- text: >
    On délaye d’abord le matcha dans un peu d’eau chaude (pas bouillante) pour
    éviter les grumeaux, puis on ajoute le lait.
  source_name: Grokipedia, Matcha
  source_url: https://grokipedia.com/page/Matcha
- text: >
    Le grade culinaire amertume plus que le grade « cérémonie » : pour un latte
    sucré, on n’a pas besoin du thé le plus cher.
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "Boisson au thé et au lait : pas d’accord vin."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: ml
      item: lait (de vache ou végétal)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: poudre de matcha
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un shaker, versez le lait ainsi que le miel et shakez énergiquement.
    - Cuisson. Placez quelques glaçons au fond d’un verre et versez délicatement le lait afin de réaliser,
      comme Jigmé, un matcha latte bicolore.
    - Finition. Dans le shaker, versez à présent la poudre de matcha et un peu d’eau (à vous de doser
      en fonction de vos goût, si vous voulez quelque chose de léger ou de plus fort). Shakez,
      puis versez délicatement dans le verre. Et voilà, vous avez un délicieux match latte
      bi-colore glacée ! Pensez bien à le mélanger avant de le boire !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un shaker, versez le lait ainsi que le miel et shakez énergiquement."
      - "Cuisson. Placez quelques glaçons au fond d’un verre et versez délicatement le lait afin de réaliser, comme Jigmé, un matcha latte bicolore."
      - "Finition. Dans le shaker, versez à présent la poudre de matcha et un peu d’eau (à vous de doser en fonction de vos goût, si vous voulez quelque chose de léger ou de plus fort). Shakez, puis versez délicatement dans le verre. Et voilà, vous avez un délicieux match latte bi-colore glacée ! Pensez bien à le mélanger avant de le boire !"
      pro:
      - "Dans un shaker : verser le lait et le miel. Shaker énergiquement."
      - "Placer quelques glaçons au fond d’un verre. Verser délicatement le lait pour un matcha latte bicolore."
      - "Dans le shaker : verser la poudre de matcha et un peu d’eau, doser selon le goût, léger ou plus fort. Shaker. Verser délicatement dans le verre. Mélanger avant de boire."
      cavernes:
      - "Préparation. Shaker. Lait, miel, verser. Shaker énergiquement."
      - "Cuisson. Glaçons, fond verre. Lait, verser délicatement. Matcha latte bicolore."
      - "Finition. Shaker. Poudre matcha, peu eau, verser. Doser goût, léger ou plus fort. Shaker. Verre, verser délicatement. Match latte bi-colore glacée. Avant boire, mélanger."
    kcal_per_serving: 190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sirop d'érable ou agave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: poudre de matcha
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un shaker, versez le lait d’avoine ou de soja ainsi que le sirop d'érable ou agave et shakez énergiquement.
    - Cuisson. Placez quelques glaçons au fond d’un verre et versez délicatement le lait d’avoine ou de soja afin de réaliser,
      comme Jigmé, un matcha latte bicolore.
    - Finition. Dans le shaker, versez à présent la poudre de matcha et un peu d’eau (à vous de doser
      en fonction de vos goût, si vous voulez quelque chose de léger ou de plus fort). Shakez,
      puis versez délicatement dans le verre. Et voilà, vous avez un délicieux match latte
      bi-colore glacée ! Pensez bien à le mélanger avant de le boire !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un shaker, versez le lait d’avoine ou de soja ainsi que le sirop d'érable ou agave et shakez énergiquement."
      - "Cuisson. Placez quelques glaçons au fond d’un verre et versez délicatement le lait d’avoine ou de soja afin de réaliser, comme Jigmé, un matcha latte bicolore."
      - "Finition. Dans le shaker, versez à présent la poudre de matcha et un peu d’eau (à vous de doser en fonction de vos goût, si vous voulez quelque chose de léger ou de plus fort). Shakez, puis versez délicatement dans le verre. Et voilà, vous avez un délicieux match latte bi-colore glacée ! Pensez bien à le mélanger avant de le boire !"
      pro:
      - "Dans un shaker : verser le lait d’avoine ou de soja et le sirop d’érable ou d’agave. Shaker énergiquement."
      - "Placer quelques glaçons au fond d’un verre. Verser délicatement le lait d’avoine ou de soja pour un matcha latte bicolore."
      - "Dans le shaker : verser la poudre de matcha et un peu d’eau, doser selon le goût, léger ou plus fort. Shaker. Verser délicatement dans le verre. Mélanger avant de boire."
      cavernes:
      - "Préparation. Shaker. Lait avoine ou soja, sirop érable ou agave, verser. Shaker énergiquement."
      - "Cuisson. Glaçons, fond verre. Lait avoine ou soja, verser délicatement. Matcha latte bicolore."
      - "Finition. Shaker. Poudre matcha, peu eau, verser. Doser goût, léger ou plus fort. Shaker. Verre, verser délicatement. Match latte bi-colore glacée. Avant boire, mélanger."
    kcal_per_serving: 190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
