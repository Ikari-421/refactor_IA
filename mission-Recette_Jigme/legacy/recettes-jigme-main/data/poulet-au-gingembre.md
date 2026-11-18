---
schema: recette-web-jigme/v2
slug: poulet-au-gingembre
title: Poulet au gingembre
lang: fr
description: "Poulet au gingembre : recette française avec poulet, gousse d'ail et gingembre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: chinoise
category: salé
tags:
- salé
- poulet
- gingembre
- mijoté
- arachide
image:
  url:
  alt: Poulet au gingembre
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-au-gingembre.md
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
    - from: paneer ou tofu ferme
      to: tofu ferme
      note:
    note: 'Lactose : paneer ou tofu ferme → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: paneer ou tofu ferme
      to: tofu ferme
      note:
    note: 'Produits laitiers : paneer ou tofu ferme → tofu ferme.'
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
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: paneer ou tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; tofu ferme → pois chiches rôtis.'
  sans_arachides:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - arachides
    swaps:
    - from: arachide
      to: huile de tournesol
      note:
    - from: cacahuète
      to: graines de tournesol
      note:
    note: Remplacer arachide.
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
  Poulet sauté au gingembre : geste d’Asie de l’Est (gingembre, souvent soja ou
  vin de cuisine). Pas un plat français daté. Le gingembre frais se met en début
  de poêle, pour parfumer l’huile.
fun_facts:
- text: >
    Le gingembre jeune pique moins que le vieux, plus fibreux ; on le coupe en
    lamelles, on ne le réduit pas en poudre ici.
  source_name: Usage
  source_url:
- text: >
    Trop cuit, le poulet sèche ; trop de gingembre brûlé, et ça amertume.
  source_name: Usage
  source_url:
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le gingembre et le poulet, sans un rouge tannique.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — le sauté, légèrement sucré contre le piquant.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le plat d’Asie, sans un blanc trop aromatique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 50
      rest_min: 0
      total_min: 110
    equipment: &id002
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et
      pilez le tout.
    - Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier.
    - Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer.
    - Cuisson. Coupez votre poulet en deux dans sa longueur et posez-le côté peau dans la marmite bien
      chaude (attention aux projections d’huile !).
    - Mélange. Lorsque le poulet a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre
      directement dans la marmite.
    - Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez
      et laissez mijoter pendant 20 bonnes minutes.
    - Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite.
      Laissez à nouveau mijoter une trentaine de minutes. C’est prêt ! Accompagnez le poulet
      d’un riz ou d’une semoule et dégustez !
    steps_niveaux:
      amateur:
      - "Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et pilez le tout."
      - "Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier."
      - "Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer."
      - "Cuisson. Coupez votre poulet en deux dans sa longueur et posez-le côté peau dans la marmite bien chaude (attention aux projections d’huile !)."
      - "Mélange. Lorsque le poulet a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre directement dans la marmite."
      - "Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez et [[mijoter|laissez mijoter]] pendant 20 bonnes minutes."
      - "Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite. Laissez à nouveau [[mijoter|mijoter]] une trentaine de minutes. C’est prêt ! Accompagnez le poulet d’un riz ou d’une semoule et dégustez !"
      pro:
      - "Émincer l’oignon. Couper l’ail en deux. Déposer dans un mortier. Piler."
      - "Couper le gingembre en fines lamelles. Ajouter dans le mortier."
      - "Verser de l’huile au fond d’une marmite. Mettre à chauffer."
      - "Couper le poulet en deux dans sa longueur. Poser côté peau dans la marmite bien chaude. Attention aux projections d’huile."
      - "Lorsque le poulet a un peu grillé, ajouter le mélange d’ail, d’oignon et de gingembre dans la marmite."
      - "Lorsque le tout commence à prendre un belle couleur, ajouter 1/2 litre d’eau. Couvrir. Mijoter 20 bonnes minutes."
      - "Couper grossièrement les tomates. Ajouter tomates et bouillon cube dans la marmite. Mijoter à nouveau une trentaine de minutes. Accompagner d’un riz ou d’une semoule."
      cavernes:
      - "Préparation. Oignon, émincer. Ail, couper deux. Mortier, déposer. Piler."
      - "Cuisson. Gingembre, fines lamelles, couper. Mortier, ajouter."
      - "Cuisson. Huile, fond marmite, verser. Chauffer."
      - "Cuisson. Poulet, couper deux, longueur. Côté peau, marmite bien chaude, poser. Attention projections huile !"
      - "Mélange. Poulet grillé peu. Mélange ail oignon gingembre, marmite, ajouter."
      - "Cuisson. Belle couleur. Eau 1/2 litre, ajouter. Couvrir. Mijoter 20 bonnes minutes."
      - "Finition. Tomates, couper grossièrement. Bouillon cube, marmite, ajouter. Mijoter encore trentaine minutes. Prêt. Riz ou semoule, accompagner. Déguster !"
    kcal_per_serving: 335
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
    - soja
    - arachides
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et
      pilez le tout.
    - Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier.
    - Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer.
    - Cuisson. Coupez votre paneer ou tofu ferme en deux dans sa longueur et posez-le côté peau dans
      la marmite bien chaude (attention aux projections d’huile !).
    - Mélange. Lorsque le paneer ou tofu ferme a un peu grillé, ajoutez le mélange d’ail, d’oignon
      et de gingembre directement dans la marmite.
    - Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez
      et laissez mijoter pendant 20 bonnes minutes.
    - Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite.
      Laissez à nouveau mijoter une trentaine de minutes. C’est prêt ! Accompagnez le paneer
      ou tofu ferme d’un riz ou d’une semoule et dégustez !
    steps_niveaux:
      amateur:
      - "Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et pilez le tout."
      - "Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier."
      - "Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer."
      - "Cuisson. Coupez votre paneer ou tofu ferme en deux dans sa longueur et posez-le côté peau dans la marmite bien chaude (attention aux projections d’huile !)."
      - "Mélange. Lorsque le paneer ou tofu ferme a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre directement dans la marmite."
      - "Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez et [[mijoter|laissez mijoter]] pendant 20 bonnes minutes."
      - "Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite. Laissez à nouveau [[mijoter|mijoter]] une trentaine de minutes. C’est prêt ! Accompagnez le paneer ou tofu ferme d’un riz ou d’une semoule et dégustez !"
      pro:
      - "Émincer l’oignon. Couper l’ail en deux. Déposer dans un mortier. Piler."
      - "Couper le gingembre en fines lamelles. Ajouter dans le mortier."
      - "Verser de l’huile au fond d’une marmite. Mettre à chauffer."
      - "Couper le paneer ou tofu ferme en deux dans sa longueur. Poser côté peau dans la marmite bien chaude. Attention aux projections d’huile."
      - "Lorsque le paneer ou tofu ferme a un peu grillé, ajouter le mélange d’ail, d’oignon et de gingembre dans la marmite."
      - "Lorsque le tout commence à prendre un belle couleur, ajouter 1/2 litre d’eau. Couvrir. Mijoter 20 bonnes minutes."
      - "Couper grossièrement les tomates. Ajouter tomates et bouillon cube dans la marmite. Mijoter à nouveau une trentaine de minutes. Accompagner d’un riz ou d’une semoule."
      cavernes:
      - "Préparation. Oignon, émincer. Ail, couper deux. Mortier, déposer. Piler."
      - "Cuisson. Gingembre, fines lamelles, couper. Mortier, ajouter."
      - "Cuisson. Huile, fond marmite, verser. Chauffer."
      - "Cuisson. Paneer ou tofu ferme, couper deux, longueur. Côté peau, marmite bien chaude, poser. Attention projections huile !"
      - "Mélange. Paneer ou tofu ferme grillé peu. Mélange ail oignon gingembre, marmite, ajouter."
      - "Cuisson. Belle couleur. Eau 1/2 litre, ajouter. Couvrir. Mijoter 20 bonnes minutes."
      - "Finition. Tomates, couper grossièrement. Bouillon cube, marmite, ajouter. Mijoter encore trentaine minutes. Prêt. Paneer ou tofu ferme, riz ou semoule, accompagner. Déguster !"
    kcal_per_serving: 317
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et
      pilez le tout.
    - Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier.
    - Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer.
    - Cuisson. Coupez votre tofu ou tofu ferme en deux dans sa longueur et posez-le côté peau dans
      la marmite bien chaude (attention aux projections d’huile !).
    - Mélange. Lorsque le tofu ou tofu ferme a un peu grillé, ajoutez le mélange d’ail, d’oignon et
      de gingembre directement dans la marmite.
    - Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez
      et laissez mijoter pendant 20 bonnes minutes.
    - Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite.
      Laissez à nouveau mijoter une trentaine de minutes. C’est prêt ! Accompagnez le tofu
      ou tofu ferme d’un riz ou d’une semoule et dégustez !
    steps_niveaux:
      amateur:
      - "Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et pilez le tout."
      - "Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier."
      - "Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer."
      - "Cuisson. Coupez votre tofu ou tofu ferme en deux dans sa longueur et posez-le côté peau dans la marmite bien chaude (attention aux projections d’huile !)."
      - "Mélange. Lorsque le tofu ou tofu ferme a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre directement dans la marmite."
      - "Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez et [[mijoter|laissez mijoter]] pendant 20 bonnes minutes."
      - "Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite. Laissez à nouveau [[mijoter|mijoter]] une trentaine de minutes. C’est prêt ! Accompagnez le tofu ou tofu ferme d’un riz ou d’une semoule et dégustez !"
      pro:
      - "Émincer l’oignon. Couper l’ail en deux. Déposer dans un mortier. Piler."
      - "Couper le gingembre en fines lamelles. Ajouter dans le mortier."
      - "Verser de l’huile au fond d’une marmite. Mettre à chauffer."
      - "Couper le tofu ou tofu ferme en deux dans sa longueur. Poser côté peau dans la marmite bien chaude. Attention aux projections d’huile."
      - "Lorsque le tofu ou tofu ferme a un peu grillé, ajouter le mélange d’ail, d’oignon et de gingembre dans la marmite."
      - "Lorsque le tout commence à prendre un belle couleur, ajouter 1/2 litre d’eau. Couvrir. Mijoter 20 bonnes minutes."
      - "Couper grossièrement les tomates. Ajouter tomates et bouillon cube dans la marmite. Mijoter à nouveau une trentaine de minutes. Accompagner d’un riz ou d’une semoule."
      cavernes:
      - "Préparation. Oignon, émincer. Ail, couper deux. Mortier, déposer. Piler."
      - "Cuisson. Gingembre, fines lamelles, couper. Mortier, ajouter."
      - "Cuisson. Huile, fond marmite, verser. Chauffer."
      - "Cuisson. Tofu ou tofu ferme, couper deux, longueur. Côté peau, marmite bien chaude, poser. Attention projections huile !"
      - "Mélange. Tofu ou tofu ferme grillé peu. Mélange ail oignon gingembre, marmite, ajouter."
      - "Cuisson. Belle couleur. Eau 1/2 litre, ajouter. Couvrir. Mijoter 20 bonnes minutes."
      - "Finition. Tomates, couper grossièrement. Bouillon cube, marmite, ajouter. Mijoter encore trentaine minutes. Prêt. Tofu ou tofu ferme, riz ou semoule, accompagner. Déguster !"
    kcal_per_serving: 317
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et
      pilez le tout.
    - Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier.
    - Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer.
    - Cuisson. Coupez votre cabillaud en deux dans sa longueur et posez-le côté peau dans la marmite
      bien chaude (attention aux projections d’huile !).
    - Mélange. Lorsque le cabillaud a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre
      directement dans la marmite.
    - Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez
      et laissez mijoter pendant 20 bonnes minutes.
    - Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite.
      Laissez à nouveau mijoter une trentaine de minutes. C’est prêt ! Accompagnez le cabillaud
      d’un riz ou d’une semoule et dégustez !
    steps_niveaux:
      amateur:
      - "Préparation. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et pilez le tout."
      - "Cuisson. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier."
      - "Cuisson. Versez de l’huile au fond d’une marmite et mettez-la à chauffer."
      - "Cuisson. Coupez votre cabillaud en deux dans sa longueur et posez-le côté peau dans la marmite bien chaude (attention aux projections d’huile !)."
      - "Mélange. Lorsque le cabillaud a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre directement dans la marmite."
      - "Cuisson. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez et [[mijoter|laissez mijoter]] pendant 20 bonnes minutes."
      - "Finition. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite. Laissez à nouveau [[mijoter|mijoter]] une trentaine de minutes. C’est prêt ! Accompagnez le cabillaud d’un riz ou d’une semoule et dégustez !"
      pro:
      - "Émincer l’oignon. Couper l’ail en deux. Déposer dans un mortier. Piler."
      - "Couper le gingembre en fines lamelles. Ajouter dans le mortier."
      - "Verser de l’huile au fond d’une marmite. Mettre à chauffer."
      - "Couper le cabillaud en deux dans sa longueur. Poser côté peau dans la marmite bien chaude. Attention aux projections d’huile."
      - "Lorsque le cabillaud a un peu grillé, ajouter le mélange d’ail, d’oignon et de gingembre dans la marmite."
      - "Lorsque le tout commence à prendre un belle couleur, ajouter 1/2 litre d’eau. Couvrir. Mijoter 20 bonnes minutes."
      - "Couper grossièrement les tomates. Ajouter tomates et bouillon cube dans la marmite. Mijoter à nouveau une trentaine de minutes. Accompagner d’un riz ou d’une semoule."
      cavernes:
      - "Préparation. Oignon, émincer. Ail, couper deux. Mortier, déposer. Piler."
      - "Cuisson. Gingembre, fines lamelles, couper. Mortier, ajouter."
      - "Cuisson. Huile, fond marmite, verser. Chauffer."
      - "Cuisson. Cabillaud, couper deux, longueur. Côté peau, marmite bien chaude, poser. Attention projections huile !"
      - "Mélange. Cabillaud grillé peu. Mélange ail oignon gingembre, marmite, ajouter."
      - "Cuisson. Belle couleur. Eau 1/2 litre, ajouter. Couvrir. Mijoter 20 bonnes minutes."
      - "Finition. Tomates, couper grossièrement. Bouillon cube, marmite, ajouter. Mijoter encore trentaine minutes. Prêt. Cabillaud, riz ou semoule, accompagner. Déguster !"
    kcal_per_serving: 317
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
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

# Poulet au gingembre
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-au-gingembre]]

## Ingrédients (4 personnes)

- 1 poulet
- 2 gousse d'ail
- 10 cl d'huile d'arachide
- 0.5 gingembre
- 3 oignon
- 6 tomate
- 1 bouillon cube

## Préparation

1. Émincez votre oignon et coupez votre ail en deux. Déposez le tout dans un mortier et pilez le tout.
2. Coupez le gingembre en fines lamelles et ajoutez-le dans le mortier.
3. Versez de l’huile au fond d’une marmite et mettez-la à chauffer.
4. Coupez votre poulet en deux dans sa longueur et posez-le côté peau dans la marmite bien chaude (attention aux projections d’huile !).
5. Lorsque le poulet a un peu grillé, ajoutez le mélange d’ail, d’oignon et de gingembre directement dans la marmite.
6. Lorsque le tout commence à prendre un belle couleur, ajoutez 1/2 litre d’eau. Couvrez et laissez mijoter pendant 20 bonnes minutes.
7. Coupez grossièrement vos tomates et ajoutez-les ainsi que le bouillon cube dans la marmite. Laissez à nouveau mijoter une trentaine de minutes.

 
 

 
 C’est prêt ! Accompagnez le poulet d’un riz ou d’une semoule et dégustez !
