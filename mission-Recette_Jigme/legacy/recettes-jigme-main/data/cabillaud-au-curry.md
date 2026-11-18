---
schema: recette-web-jigme/v2
slug: cabillaud-au-curry
title: Cabillaud au curry
lang: fr
description: "Cabillaud au curry : recette française avec tomate, pavé de cabillaud et oignon, pour 4 personnes. Version maison. Facile à suivre."
cuisine: fusion
category: salé
tags:
- salé
- curry
- cabillaud
- tomate
image:
  url:
  alt: Cabillaud au curry
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cabillaud-au-curry.md
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
    - from: feuille de brick
      to: feuille de riz
      note:
    note: 'Gluten : feuille de brick → feuille de riz.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Lactose : tofu ferme ou halloumi → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Produits laitiers : tofu ferme ou halloumi → tofu ferme.'
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
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme ou halloumi → pois chiches rôtis ; tofu ferme → pois chiches
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: pineau blanc (facultatif)
      to: bouillon de légumes
      note:
    note: 'Sulfites : pineau blanc (facultatif) → bouillon de légumes.'
house_toggle:
house_options: []
histoire: >
  Mariage contemporain : cabillaud (gadus, mer du Nord) et curry (mélange d’épices
  d’Asie du Sud). Ce n’est pas un plat indien canonique ni un classicisme français daté.
fun_facts:
- text: "Le cabillaud sèche s’il dépasse 50–55 °C à cœur trop longtemps ; le curry se fait dans la sauce, pas dans le poisson."
  source_name: Usage
  source_url:
- text: "Un curry en poudre déjà grillé s’ajoute hors feu fort, sinon il amertume."
  source_name: Usage
  source_url:
wines:
- name: Gewurztraminer d'Alsace
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, rose — le curry, sans sucrosité de dessert.
- name: Grüner Veltliner
  producer: Domäne Wachau
  origin: Wachau, Autriche
  grapes: grüner veltliner
  award:
  why: Poivre blanc, agrume — poisson et épice.
- name: Condrieu
  producer: E. Guigal
  origin: Condrieu, Rhône
  grapes: viognier
  award:
  why: Pêche, viognier — un cran plus aromatique (rester sur les cuvées d’entrée).
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - gluten
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 20
      rest_min: 0
      total_min: 65
    equipment: &id002
    - four
    - casserole
    - poêle
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pavé de cabillaud
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
    - qty:
      unit:
      item: curry en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pineau blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe,
      puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite
      dans l’eau froide afin de pouvoir retire la peau très facilement.
    - Cuisson. Retirez ensuite le pédoncule des tomates et coupez-les en dés.
    - Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole
      avec un filet d’huile végétales.
    - Cuisson. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau
      blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez le tout,
      couvrez et laissez mijoter à feu doux.
    - Cuisson. Assaisonnez le cabillaud avec du sel, du poivre, du curry et un filet d’huile d’olive.
      Faites le cuire au four environ 10min à 170°C.
    - Cuisson. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez.
    - Cuisson. Profitez des cuissons pour réaliser une chips pour apporter du croustillant en faisant
      revenir une feuille de brick à la poêle avec de l’huile d’arachide. Débarrassez sur
      du papier absorbant et réservez.
    - Finition. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez
      le pavé de cabillaud, la chips de brick et un peu d’herbes fraîches hachez en fonction
      de vos envies. Bon appétit ! Découvrez aussi nos recettes de poulet au curry et de curry
      végétalien.
    steps_niveaux:
      amateur:
      - "Tomates. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe, puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite dans l’eau froide afin de pouvoir retirer la peau très facilement."
      - "Dés. Retirez le pédoncule des tomates et coupez-les en dés."
      - "Oignons. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole avec un filet d’huile végétale."
      - "Sauce. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez, couvrez et [[mijoter|laissez mijoter]] à feu doux."
      - "Cabillaud. Assaisonnez le cabillaud avec du sel, du poivre, du curry et un filet d’huile d’olive. Faites-le cuire au four environ 10 min à 170 °C."
      - "Riz. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez."
      - "Chips. Pendant les cuissons, faites revenir une feuille de brick à la poêle avec de l’huile d’arachide, pour une chips croustillante. Débarrassez sur du papier absorbant et réservez."
      - "Dressage. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez le pavé de cabillaud, la chips de brick et un peu d’herbes fraîches hachées, selon vos envies."
      pro:
      - "Entailler les tomates en croix. Plonger quelques secondes dans l’eau bouillante, transvaser dans l’eau froide, retirer la peau."
      - "Retirer le pédoncule des tomates. Couper en dés."
      - "Éplucher et couper finement l’oignon et l’ail. Faire revenir les oignons en casserole avec un filet d’huile végétale."
      - "Avant coloration des oignons : ajouter tomates, puis ail. Verser un peu de pineau blanc (facultatif), poivre, sel, un peu de curry en poudre. Mélanger, couvrir, mijoter à feu doux."
      - "Assaisonner le cabillaud (sel, poivre, curry, filet d’huile d’olive). Cuire au four environ 10 min à 170 °C."
      - "Cuire le riz à la casserole ou à l’auto-cuiseur, selon le matériel."
      - "Pendant les cuissons : faire revenir une feuille de brick à la poêle à l’huile d’arachide. Débarrasser sur papier absorbant. Réserver."
      - "Dresser : un peu de riz, purée de tomate au curry, pavé de cabillaud, chips de brick, herbes fraîches hachées selon envie."
      cavernes:
      - "Tomates. Entaille croix. Eau bouillante, quelques secondes. Eau froide. Peau, retirer."
      - "Dés. Pédoncule tomates, retirer. Couper dés."
      - "Oignons. Oignon, ail, éplucher, couper fin. Casserole, filet huile végétale. Oignons, revenir."
      - "Sauce. Oignons, avant colorer. Tomates, ail. Pineau blanc facultatif, poivre, sel, curry poudre. Mélanger, couvrir. Mijoter feu doux."
      - "Cabillaud. Cabillaud, assaisonner sel poivre curry, filet huile olive. Four 170 °C environ 10 min."
      - "Riz. Riz, cuire casserole ou auto-cuiseur."
      - "Chips. Feuille brick, poêle, huile arachide, revenir. Papier absorbant. Réserver."
      - "Dressage. Assiettes. Riz, purée tomate curry. Pavé cabillaud, chips brick, herbes fraîches hachées."
    kcal_per_serving: 85
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
    - gluten
    - lactose
    - produits_laitiers
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu ferme ou halloumi
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
    - qty:
      unit:
      item: curry en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pineau blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe,
      puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite
      dans l’eau froide afin de pouvoir retire la peau très facilement.
    - Cuisson. Retirez ensuite le pédoncule des tomates et coupez-les en dés.
    - Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole
      avec un filet d’huile végétales.
    - Cuisson. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau
      blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez le tout,
      couvrez et laissez mijoter à feu doux.
    - Cuisson. Assaisonnez le tofu ferme (ou le halloumi) avec du sel, du poivre, du curry et un filet d’huile d’olive. Enfournez environ 10 min à 170°C.
    - Cuisson. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez.
    - Cuisson. Profitez des cuissons pour réaliser une chips pour apporter du croustillant en faisant
      revenir une feuille de brick à la poêle avec de l’huile d’arachide. Débarrassez sur
      du papier absorbant et réservez.
    - Finition. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez
      le tofu ferme ou halloumi, la chips de brick et un peu d’herbes fraîches hachez en fonction
      de vos envies. Bon appétit ! Découvrez aussi notre recette de curry
      végétalien.
    steps_niveaux:
      amateur:
      - "Tomates. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe, puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite dans l’eau froide afin de pouvoir retirer la peau très facilement."
      - "Dés. Retirez le pédoncule des tomates et coupez-les en dés."
      - "Oignons. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole avec un filet d’huile végétale."
      - "Sauce. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez, couvrez et [[mijoter|laissez mijoter]] à feu doux."
      - "Tofu. Assaisonnez le tofu ferme (ou le halloumi) avec du sel, du poivre, du curry et un filet d’huile d’olive. Enfournez environ 10 min à 170 °C."
      - "Riz. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez."
      - "Chips. Pendant les cuissons, faites revenir une feuille de brick à la poêle avec de l’huile d’arachide, pour une chips croustillante. Débarrassez sur du papier absorbant et réservez."
      - "Dressage. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez le tofu ferme ou le halloumi, la chips de brick et un peu d’herbes fraîches hachées, selon vos envies."
      pro:
      - "Entailler les tomates en croix. Plonger quelques secondes dans l’eau bouillante, transvaser dans l’eau froide, retirer la peau."
      - "Retirer le pédoncule des tomates. Couper en dés."
      - "Éplucher et couper finement l’oignon et l’ail. Faire revenir les oignons en casserole avec un filet d’huile végétale."
      - "Avant coloration des oignons : ajouter tomates, puis ail. Verser un peu de pineau blanc (facultatif), poivre, sel, un peu de curry en poudre. Mélanger, couvrir, mijoter à feu doux."
      - "Assaisonner le tofu ferme (ou le halloumi) : sel, poivre, curry, filet d’huile d’olive. Enfourner environ 10 min à 170 °C."
      - "Cuire le riz à la casserole ou à l’auto-cuiseur, selon le matériel."
      - "Pendant les cuissons : faire revenir une feuille de brick à la poêle à l’huile d’arachide. Débarrasser sur papier absorbant. Réserver."
      - "Dresser : un peu de riz, purée de tomate au curry, tofu ferme ou halloumi, chips de brick, herbes fraîches hachées selon envie."
      cavernes:
      - "Tomates. Entaille croix. Eau bouillante, quelques secondes. Eau froide. Peau, retirer."
      - "Dés. Pédoncule tomates, retirer. Couper dés."
      - "Oignons. Oignon, ail, éplucher, couper fin. Casserole, filet huile végétale. Oignons, revenir."
      - "Sauce. Oignons, avant colorer. Tomates, ail. Pineau blanc facultatif, poivre, sel, curry poudre. Mélanger, couvrir. Mijoter feu doux."
      - "Tofu. Tofu ferme ou halloumi, assaisonner sel poivre curry, filet huile olive. Four 170 °C environ 10 min."
      - "Riz. Riz, cuire casserole ou auto-cuiseur."
      - "Chips. Feuille brick, poêle, huile arachide, revenir. Papier absorbant. Réserver."
      - "Dressage. Assiettes. Riz, purée tomate curry. Tofu ferme ou halloumi, chips brick, herbes fraîches hachées."
    kcal_per_serving: 163
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
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu ferme
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
    - qty:
      unit:
      item: curry en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pineau blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe,
      puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite
      dans l’eau froide afin de pouvoir retire la peau très facilement.
    - Cuisson. Retirez ensuite le pédoncule des tomates et coupez-les en dés.
    - Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole
      avec un filet d’huile végétales.
    - Cuisson. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau
      blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez le tout,
      couvrez et laissez mijoter à feu doux.
    - Cuisson. Assaisonnez le tofu ferme avec du sel, du poivre, du curry et un filet d’huile d’olive. Enfournez environ 10 min à 170°C.
    - Cuisson. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez.
    - Cuisson. Profitez des cuissons pour réaliser une chips pour apporter du croustillant en faisant
      revenir une feuille de brick à la poêle avec de l’huile d’arachide. Débarrassez sur
      du papier absorbant et réservez.
    - Finition. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez
      le tofu ferme ou tofu, la chips de brick et un peu d’herbes fraîches hachez en fonction
      de vos envies. Bon appétit ! Découvrez aussi nos recettes de poulet au curry et de curry
      végétalien.
    steps_niveaux:
      amateur:
      - "Tomates. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe, puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite dans l’eau froide afin de pouvoir retirer la peau très facilement."
      - "Dés. Retirez le pédoncule des tomates et coupez-les en dés."
      - "Oignons. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole avec un filet d’huile végétale."
      - "Sauce. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez, couvrez et [[mijoter|laissez mijoter]] à feu doux."
      - "Tofu. Assaisonnez le tofu ferme avec du sel, du poivre, du curry et un filet d’huile d’olive. Enfournez environ 10 min à 170 °C."
      - "Riz. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez."
      - "Chips. Pendant les cuissons, faites revenir une feuille de brick à la poêle avec de l’huile d’arachide, pour une chips croustillante. Débarrassez sur du papier absorbant et réservez."
      - "Dressage. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez le tofu ferme, la chips de brick et un peu d’herbes fraîches hachées, selon vos envies."
      pro:
      - "Entailler les tomates en croix. Plonger quelques secondes dans l’eau bouillante, transvaser dans l’eau froide, retirer la peau."
      - "Retirer le pédoncule des tomates. Couper en dés."
      - "Éplucher et couper finement l’oignon et l’ail. Faire revenir les oignons en casserole avec un filet d’huile végétale."
      - "Avant coloration des oignons : ajouter tomates, puis ail. Verser un peu de pineau blanc (facultatif), poivre, sel, un peu de curry en poudre. Mélanger, couvrir, mijoter à feu doux."
      - "Assaisonner le tofu ferme : sel, poivre, curry, filet d’huile d’olive. Enfourner environ 10 min à 170 °C."
      - "Cuire le riz à la casserole ou à l’auto-cuiseur, selon le matériel."
      - "Pendant les cuissons : faire revenir une feuille de brick à la poêle à l’huile d’arachide. Débarrasser sur papier absorbant. Réserver."
      - "Dresser : un peu de riz, purée de tomate au curry, tofu ferme, chips de brick, herbes fraîches hachées selon envie."
      cavernes:
      - "Tomates. Entaille croix. Eau bouillante, quelques secondes. Eau froide. Peau, retirer."
      - "Dés. Pédoncule tomates, retirer. Couper dés."
      - "Oignons. Oignon, ail, éplucher, couper fin. Casserole, filet huile végétale. Oignons, revenir."
      - "Sauce. Oignons, avant colorer. Tomates, ail. Pineau blanc facultatif, poivre, sel, curry poudre. Mélanger, couvrir. Mijoter feu doux."
      - "Tofu. Tofu ferme, assaisonner sel poivre curry, filet huile olive. Four 170 °C environ 10 min."
      - "Riz. Riz, cuire casserole ou auto-cuiseur."
      - "Chips. Feuille brick, poêle, huile arachide, revenir. Papier absorbant. Réserver."
      - "Dressage. Assiettes. Riz, purée tomate curry. Tofu ferme, chips brick, herbes fraîches hachées."
    kcal_per_serving: 163
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
    - poisson
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 85
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
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
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Cabillaud au curry
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cabillaud-au-curry]]

## Ingrédients (4 personnes)

- 4 tomate
- 4 pavé de cabillaud
- 1 oignon
- 1 gousse d'ail
-  curry en poudre
-  pineau blanc (facultatif)
- 1 feuille de brick
-  huile végétale

## Préparation

1. Réalisez une entaille en forme de croix sous les tomates, à l’aide d’un couteau à pointe, puis plongez-les dans l’eau bouillante pendant quelques secondes. Transvasez-les ensuite dans l’eau froide afin de pouvoir retire la peau très facilement.
2. Retirez ensuite le pédoncule des tomates et coupez-les en dés.
3. Épluchez et coupez finement l’oignon et l’ail. Faites revenir les oignons dans une casserole avec un filet d’huile végétales.
4. Avant que les oignons colorent, ajoutez les tomates, puis l’ail. Versez un peu de pineau blanc (facultatif), du poivre, du sel et un peu de curry en poudre. Mélangez le tout, couvrez et laissez mijoter à feu doux.
5. Assaisonnez le cabillaud avec du sel, du poivre, du curry et un filet d’huile d’olive. Faites le cuire au four environ 10min à 170°C.
6. Faites cuire le riz à la casserole ou à l’auto-cuiseur, selon ce que vous avez.
7. Profitez des cuissons pour réaliser une chips pour apporter du croustillant en faisant revenir une feuille de brick à la poêle avec de l’huile d’arachide. Débarrassez sur du papier absorbant et réservez.
8. Dans les assiettes, déposez un peu de riz et de la purée de tomate au curry. Ajoutez le pavé de cabillaud, la chips de brick et un peu d’herbes fraîches hachez en fonction de vos envies.

 
 

 
 Bon appétit !

Découvrez aussi nos recettes de poulet au curry et de curry végétalien.
