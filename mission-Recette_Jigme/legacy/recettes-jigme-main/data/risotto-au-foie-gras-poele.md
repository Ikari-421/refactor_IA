---
schema: recette-web-jigme/v2
equipment:
- ref: siphon
- ref: fouet
slug: risotto-au-foie-gras-poele
title: Risotto au foie gras poêlé
lang: fr
description: "Risotto au foie gras poêlé : recette italienne avec escalope de foie gras, riz rond et oignon, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- risotto
- foie gras
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/risotto-au-foie-gras-poele.webp
  alt: Risotto au foie gras poêlé
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/risotto-au-foie-gras-poele.md
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
    - from: mascarpone
      to: fromage frais sans lactose
      note:
    - from: parmesan
      to: comté affiné (naturellement quasi sans lactose)
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
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
    note: 'Contient poisson (fumet de poisson) : pas d’adaptation fiable.'
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine ; lait d''avoine ou soja → lait
      d''avoine.'
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
histoire: 'Risotto : riz à grains courts du nord de l’Italie, bouillon versé peu à peu, crémeux. /. Le
  foie gras poêlé est un ajout festif du Sud-Ouest, pas un risotto milanais.

  '
fun_facts:
- text: 'Arborio, carnaroli ou vialone : beaucoup d’amidon ; un riz long ne file pas.

    '
  source_name: Grokipedia, Arborio rice
  source_url: https://grokipedia.com/page/Arborio_rice
- text: 'Le foie gras se saisit à la dernière minute : trop tôt, il fond dans le riz.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Risotto au foie gras poêlé ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Risotto
wines:
- name: Pessac-Léognan
  producer: Château Haut-Bergey
  origin: Pessac-Léognan, Bordeaux
  grapes: cabernet sauvignon, merlot
  award:
  why: Graviers — le foie gras et le riz, un bordeaux de table.
- name: Bergerac
  producer: Château Tour des Gendres
  origin: Bergerac, Dordogne
  grapes: merlot, cabernet
  award:
  why: Merlot du Périgord — voisin du foie gras.
- name: Sauternes
  producer: Château Filhot
  origin: Sauternes, Bordeaux
  grapes: sémillon, sauvignon
  award:
  why: Liquoreux — le foie gras, un prestige tout au plus.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 50
      cook_min: 35
      rest_min: 0
      total_min: 85
    equipment: &id002
    - four
    - casserole
    - poêle
    - fouet
    - siphon
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: escalope de foie gras
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: riz rond
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond blanc de volaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: gélatine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: café
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mascarpone
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Pour réaliser l’espuma de vanille, faites réduire 20 cL de lait et 50 cL de crème liquide
      dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que
      la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué
      de moitié.
    - Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites le revenir dans une casserole.
      Avant que l’oignon ne colore, ajoutez le riz. Laissez le revenir à feu doux pendant
      environ 5 minutes en mélangeant très régulièrement.
    - Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond blanc
      de volaille à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et
      ainsi de suite jusqu’à ce que le riz soit cuit.
    - Cuisson. Assaisonnez chaque faces du foie gras avec du sel et du poivre. Déposez-le dans une
      poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite snacker l’autre
      côté. N’ajoutez pas de matière grasse dans la poêle, le foie GRAS fait amplement l’affaire.
    - Cuisson. Débarrassez le foie gras et placer-le au four pendant 2 minutes à 180°C.
    - Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec des feuilles de gélatines
      (6g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis
      versez le tout dans un siphon.
    - Cuisson. Finissons maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu
      de fond blanc de volaille pour détendre le mélange. Assaisonnez selon vos goûts et mélangez.
    - Finition. Avant de dresser les assiettes, pensez à allumer votre machine à café pour préparer
      des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe
      de café (idéalement, uniquement la mousse). Placez un morceau de foie gras snacké sur
      le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon. Et voilà
      ! Vous pouvez maintenant servir une entrée originale et pleines de saveurs. Vous verrez,
      les goûts de la vanille, du café et du foie gras se marient à merveille. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Cuisson. Pour réaliser l’espuma de vanille, [[reduire|faites réduire]] 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué de moitié."
      - "Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites-le revenir dans une casserole. Avant que l’oignon ne colore, ajoutez le riz. Laissez-le revenir à feu doux pendant environ 5 minutes en mélangeant très régulièrement."
      - "Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond blanc de volaille à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite jusqu’à ce que le riz soit cuit."
      - "Cuisson. Assaisonnez chaque face du foie gras avec du sel et du poivre. Déposez-le dans une poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite dorer l’autre côté. N’ajoutez pas de matière grasse dans la poêle, le foie gras fait amplement l’affaire."
      - "Cuisson. Débarrassez le foie gras et placez-le au four pendant 2 minutes à 180°C."
      - "Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec des feuilles de gélatine (6g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis versez le tout dans un siphon."
      - "Cuisson. Finissez maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu de fond blanc de volaille pour détendre le mélange. Assaisonnez selon vos goûts et mélangez."
      - "Finition. Avant de dresser les assiettes, allumez votre machine à café pour préparer des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe de café (idéalement, uniquement la mousse). Placez un morceau de foie gras doré sur le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon."
      pro:
      - "Espuma de vanille : réduire 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajouter le contenu d’une gousse de vanille et la gousse entière coupée en deux. Prêt quand le mélange a diminué de moitié."
      - "Éplucher et hacher l’oignon, le faire revenir dans une casserole. Avant coloration, ajouter le riz. Laisser revenir à feu doux environ 5 minutes en mélangeant très régulièrement."
      - "Riz nacré (grains translucides) : mouiller avec le fond blanc de volaille à hauteur. Dès évaporation, verser de nouveau du fond blanc, jusqu’à cuisson du riz."
      - "Assaisonner chaque face du foie gras sel et poivre. Déposer dans une poêle à feu vif jusqu’à petite croûte. Dorer l’autre côté. Sans matière grasse : le foie gras suffit."
      - "Débarrasser le foie gras et le placer au four 2 minutes à 180°C."
      - "Revenir à la crème du début. Compléter avec des feuilles de gélatine (6g) préalablement ramollies dans de l’eau froide. Mélanger au fouet, verser dans un siphon."
      - "Finir le risotto : ajouter au riz le mascarpone, le parmesan et un peu de fond blanc de volaille pour détendre. Assaisonner et mélanger."
      - "Allumer la machine à café, préparer des expresso. Dresser : un peu de riz, une ou deux cuillères à soupe de café (idéalement la mousse). Morceau de foie gras doré sur le riz, espuma vanille du siphon."
      cavernes:
      - "Cuisson. Espuma vanille. 20 cL lait, 50 cL crème liquide, casserole feu doux, réduire. Contenu gousse vanille, gousse entière coupée en deux, ajouter. Prêt : mélange diminué moitié."
      - "Cuisson. Oignon, éplucher hacher. Casserole, faire revenir. Avant colorer : riz, ajouter. Feu doux, environ 5 min, mélanger très régulièrement."
      - "Cuisson. Riz nacré (grains translucides). Fond blanc volaille, mouiller à hauteur. S’évapore : encore fond blanc. Jusqu’à riz cuit."
      - "Cuisson. Foie gras, chaque face, sel poivre. Poêle feu vif, petite croûte. Autre côté, dorer. Zéro matière grasse : foie gras suffit."
      - "Cuisson. Foie gras, débarrasser. Four 2 min 180°C."
      - "Cuisson. Crème début recette. Feuilles gélatine (6g) ramollies eau froide, compléter. Fouet, mélanger. Siphon, verser."
      - "Cuisson. Risotto, finir. Riz, mascarpone, parmesan, peu fond blanc volaille, détendre. Assaisonner, mélanger."
      - "Finition. Machine café, allumer. Expresso. Assiette : peu riz, 1 ou 2 c. à soupe café (idéalement mousse seulement). Foie gras doré, riz. Espuma vanille siphon."
    kcal_per_serving: 738
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
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cèpes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: riz rond
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: café
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mascarpone
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Pour réaliser l’espuma de vanille, faites réduire 20 cL de lait et 50 cL de crème liquide
      dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que
      la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué
      de moitié.
    - Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites le revenir dans une casserole.
      Avant que l’oignon ne colore, ajoutez le riz. Laissez le revenir à feu doux pendant
      environ 5 minutes en mélangeant très régulièrement.
    - Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond de légumes
      à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite
      jusqu’à ce que le riz soit cuit.
    - Cuisson. Assaisonnez chaque faces du cèpes avec du sel et du poivre. Déposez-le dans une
      poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite snacker l’autre
      côté. N’ajoutez pas de matière grasse dans la poêle, le foie GRAS fait amplement l’affaire.
    - Cuisson. Débarrassez le cèpes et placer-le au four pendant 2 minutes à 180°C.
    - Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec des agar-agar
      (2 g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis
      versez le tout dans un siphon.
    - Cuisson. Finissons maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu
      de fond de légumes pour détendre le mélange. Assaisonnez selon vos goûts et mélangez.
    - Finition. Avant de dresser les assiettes, pensez à allumer votre machine à café pour préparer
      des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe
      de café (idéalement, uniquement la mousse). Placez un morceau de cèpes snacké sur
      le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon. Et voilà
      ! Vous pouvez maintenant servir une entrée originale et pleines de saveurs. Vous verrez,
      les goûts de la vanille, du café et du cèpes se marient à merveille. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Cuisson. Pour réaliser l’espuma de vanille, [[reduire|faites réduire]] 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué de moitié."
      - "Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites-le revenir dans une casserole. Avant que l’oignon ne colore, ajoutez le riz. Laissez-le revenir à feu doux pendant environ 5 minutes en mélangeant très régulièrement."
      - "Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond de légumes à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite jusqu’à ce que le riz soit cuit."
      - "Cuisson. Assaisonnez chaque face des cèpes avec du sel et du poivre. Déposez-les dans une poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite dorer l’autre côté. N’ajoutez pas de matière grasse dans la poêle, le foie gras fait amplement l’affaire."
      - "Cuisson. Débarrassez les cèpes et placez-les au four pendant 2 minutes à 180°C."
      - "Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec de l’agar-agar (2 g) préalablement ramolli dans de l’eau froide. Mélangez à l’aide d’un fouet, puis versez le tout dans un siphon."
      - "Cuisson. Finissez maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu de fond de légumes pour détendre le mélange. Assaisonnez selon vos goûts et mélangez."
      - "Finition. Avant de dresser les assiettes, allumez votre machine à café pour préparer des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe de café (idéalement, uniquement la mousse). Placez un morceau de cèpes doré sur le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon."
      pro:
      - "Espuma de vanille : réduire 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajouter le contenu d’une gousse de vanille et la gousse entière coupée en deux. Prêt quand le mélange a diminué de moitié."
      - "Éplucher et hacher l’oignon, le faire revenir dans une casserole. Avant coloration, ajouter le riz. Laisser revenir à feu doux environ 5 minutes en mélangeant très régulièrement."
      - "Riz nacré (grains translucides) : mouiller avec le fond de légumes à hauteur. Dès évaporation, verser de nouveau du fond blanc, jusqu’à cuisson du riz."
      - "Assaisonner chaque face des cèpes sel et poivre. Déposer dans une poêle à feu vif jusqu’à petite croûte. Dorer l’autre côté. Sans matière grasse : le foie gras suffit."
      - "Débarrasser les cèpes et les placer au four 2 minutes à 180°C."
      - "Revenir à la crème du début. Compléter avec de l’agar-agar (2 g) préalablement ramolli dans de l’eau froide. Mélanger au fouet, verser dans un siphon."
      - "Finir le risotto : ajouter au riz le mascarpone, le parmesan et un peu de fond de légumes pour détendre. Assaisonner et mélanger."
      - "Allumer la machine à café, préparer des expresso. Dresser : un peu de riz, une ou deux cuillères à soupe de café (idéalement la mousse). Morceau de cèpes doré sur le riz, espuma vanille du siphon."
      cavernes:
      - "Cuisson. Espuma vanille. 20 cL lait, 50 cL crème liquide, casserole feu doux, réduire. Contenu gousse vanille, gousse entière coupée en deux, ajouter. Prêt : mélange diminué moitié."
      - "Cuisson. Oignon, éplucher hacher. Casserole, faire revenir. Avant colorer : riz, ajouter. Feu doux, environ 5 min, mélanger très régulièrement."
      - "Cuisson. Riz nacré (grains translucides). Fond légumes, mouiller à hauteur. S’évapore : encore fond blanc. Jusqu’à riz cuit."
      - "Cuisson. Cèpes, chaque face, sel poivre. Poêle feu vif, petite croûte. Autre côté, dorer. Zéro matière grasse : foie gras suffit."
      - "Cuisson. Cèpes, débarrasser. Four 2 min 180°C."
      - "Cuisson. Crème début recette. Agar-agar (2 g) ramolli eau froide, compléter. Fouet, mélanger. Siphon, verser."
      - "Cuisson. Risotto, finir. Riz, mascarpone, parmesan, peu fond légumes, détendre. Assaisonner, mélanger."
      - "Finition. Machine café, allumer. Expresso. Assiette : peu riz, 1 ou 2 c. à soupe café (idéalement mousse seulement). Cèpes doré, riz. Espuma vanille siphon."
    kcal_per_serving: 738
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: riz rond
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
    - qty: 500
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: café
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mascarpone végétal (cajou)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Pour réaliser l’espuma de vanille, faites réduire 20 cL de lait d'avoine ou soja et
      50 cL de crème de soja ou avoine dans une casserole à feu doux. Ajoutez le contenu d’une
      gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est
      prête quand le mélange a diminué de moitié.
    - Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites le revenir dans une casserole.
      Avant que l’oignon ne colore, ajoutez le riz. Laissez le revenir à feu doux pendant
      environ 5 minutes en mélangeant très régulièrement.
    - Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond de légumes
      à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond de légumes et ainsi de suite
      jusqu’à ce que le riz soit cuit.
    - Cuisson. Assaisonnez le tofu fumé, faites-le dorer à feu vif des deux côtés.
    - Cuisson. Débarrassez le tofu fumé et passez-le 2 minutes au four à 180°C.
    - Mélange. Revenez à la crème faite au début de la recette. Complétez-la avec l’agar-agar (6 g) dilué dans un peu d’eau froide. Mélangez à l’aide d’un fouet, puis
      versez le tout dans un siphon.
    - Cuisson. Finissons maintenant le risotto. Ajoutez au riz le mascarpone végétal (cajou), le parmesan
      végétal ou levure maltée et un peu de fond de légumes pour détendre le mélange. Assaisonnez
      selon vos goûts et mélangez.
    - Finition. Avant de dresser les assiettes, pensez à allumer votre machine à café pour préparer
      des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe
      de café (idéalement, uniquement la mousse). Placez un morceau de tofu fumé sur le riz, puis l’espuma vanille. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Pour réaliser l’espuma de vanille, [[reduire|faites réduire]] 20 cL de lait d’avoine ou soja et 50 cL de crème de soja ou avoine dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué de moitié."
      - "Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites-le revenir dans une casserole. Avant que l’oignon ne colore, ajoutez le riz. Laissez-le revenir à feu doux pendant environ 5 minutes en mélangeant très régulièrement."
      - "Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond de légumes à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond de légumes et ainsi de suite jusqu’à ce que le riz soit cuit."
      - "Cuisson. Assaisonnez le tofu fumé, faites-le dorer à feu vif des deux côtés."
      - "Cuisson. Débarrassez le tofu fumé et passez-le 2 minutes au four à 180°C."
      - "Mélange. Revenez à la crème faite au début de la recette. Complétez-la avec l’agar-agar (6 g) dilué dans un peu d’eau froide. Mélangez à l’aide d’un fouet, puis versez le tout dans un siphon."
      - "Cuisson. Finissez maintenant le risotto. Ajoutez au riz le mascarpone végétal (cajou), le parmesan végétal ou levure maltée et un peu de fond de légumes pour détendre le mélange. Assaisonnez selon vos goûts et mélangez."
      - "Finition. Avant de dresser les assiettes, allumez votre machine à café pour préparer des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe de café (idéalement, uniquement la mousse). Placez un morceau de tofu fumé sur le riz, puis l’espuma vanille."
      pro:
      - "Espuma de vanille : réduire 20 cL de lait d’avoine ou soja et 50 cL de crème de soja ou avoine dans une casserole à feu doux. Ajouter le contenu d’une gousse de vanille et la gousse entière coupée en deux. Prêt quand le mélange a diminué de moitié."
      - "Éplucher et hacher l’oignon, le faire revenir dans une casserole. Avant coloration, ajouter le riz. Laisser revenir à feu doux environ 5 minutes en mélangeant très régulièrement."
      - "Riz nacré (grains translucides) : mouiller avec le fond de légumes à hauteur. Dès évaporation, verser de nouveau du fond de légumes, jusqu’à cuisson du riz."
      - "Assaisonner le tofu fumé, dorer à feu vif des deux côtés."
      - "Débarrasser le tofu fumé et le passer 2 minutes au four à 180°C."
      - "Revenir à la crème du début. Compléter avec l’agar-agar (6 g) dilué dans un peu d’eau froide. Mélanger au fouet, verser dans un siphon."
      - "Finir le risotto : ajouter au riz le mascarpone végétal (cajou), le parmesan végétal ou levure maltée et un peu de fond de légumes pour détendre. Assaisonner et mélanger."
      - "Allumer la machine à café, préparer des expresso. Dresser : un peu de riz, une ou deux cuillères à soupe de café (idéalement la mousse). Morceau de tofu fumé sur le riz, puis espuma vanille."
      cavernes:
      - "Cuisson. Espuma vanille. 20 cL lait avoine ou soja, 50 cL crème soja ou avoine, casserole feu doux, réduire. Contenu gousse vanille, gousse entière coupée en deux, ajouter. Prêt : mélange diminué moitié."
      - "Cuisson. Oignon, éplucher hacher. Casserole, faire revenir. Avant colorer : riz, ajouter. Feu doux, environ 5 min, mélanger très régulièrement."
      - "Cuisson. Riz nacré (grains translucides). Fond légumes, mouiller à hauteur. S’évapore : encore fond légumes. Jusqu’à riz cuit."
      - "Cuisson. Tofu fumé, assaisonner. Feu vif, deux côtés, dorer."
      - "Cuisson. Tofu fumé, débarrasser. Four 2 min 180°C."
      - "Mélange. Crème début recette. Agar-agar (6 g) dilué peu eau froide, compléter. Fouet, mélanger. Siphon, verser."
      - "Cuisson. Risotto, finir. Riz, mascarpone végétal (cajou), parmesan végétal ou levure maltée, peu fond légumes, détendre. Assaisonner, mélanger."
      - "Finition. Machine café, allumer. Expresso. Assiette : peu riz, 1 ou 2 c. à soupe café (idéalement mousse seulement). Tofu fumé, riz. Espuma vanille."
    kcal_per_serving: 429
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
    - lactose
    - produits_laitiers
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
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
    - qty: 250
      unit: g
      item: riz rond
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fumet de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: gélatine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: café
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mascarpone
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Pour réaliser l’espuma de vanille, faites réduire 20 cL de lait et 50 cL de crème liquide
      dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que
      la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué
      de moitié.
    - Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites le revenir dans une casserole.
      Avant que l’oignon ne colore, ajoutez le riz. Laissez le revenir à feu doux pendant
      environ 5 minutes en mélangeant très régulièrement.
    - Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fumet de poisson
      à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite
      jusqu’à ce que le riz soit cuit.
    - Cuisson. Assaisonnez chaque faces du saumon avec du sel et du poivre. Déposez-le dans une
      poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite snacker l’autre
      côté. N’ajoutez pas de matière grasse dans la poêle, le foie GRAS fait amplement l’affaire.
    - Cuisson. Débarrassez le saumon et placer-le au four pendant 2 minutes à 180°C.
    - Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec des feuilles de gélatines
      (6g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis
      versez le tout dans un siphon.
    - Cuisson. Finissons maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu
      de fumet de poisson pour détendre le mélange. Assaisonnez selon vos goûts et mélangez.
    - Finition. Avant de dresser les assiettes, pensez à allumer votre machine à café pour préparer
      des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe
      de café (idéalement, uniquement la mousse). Placez un morceau de saumon snacké sur
      le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon. Et voilà
      ! Vous pouvez maintenant servir une entrée originale et pleines de saveurs. Vous verrez,
      les goûts de la vanille, du café et du saumon se marient à merveille. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Cuisson. Pour réaliser l’espuma de vanille, [[reduire|faites réduire]] 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué de moitié."
      - "Cuisson. Pendant ce temps, épluchez et hachez l’oignon, puis faites-le revenir dans une casserole. Avant que l’oignon ne colore, ajoutez le riz. Laissez-le revenir à feu doux pendant environ 5 minutes en mélangeant très régulièrement."
      - "Cuisson. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fumet de poisson à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite jusqu’à ce que le riz soit cuit."
      - "Cuisson. Assaisonnez chaque face du saumon avec du sel et du poivre. Déposez-le dans une poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite dorer l’autre côté. N’ajoutez pas de matière grasse dans la poêle, le foie gras fait amplement l’affaire."
      - "Cuisson. Débarrassez le saumon et placez-le au four pendant 2 minutes à 180°C."
      - "Cuisson. Revenez à la crème faite au début de la recette. Complétez-la avec des feuilles de gélatine (6g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis versez le tout dans un siphon."
      - "Cuisson. Finissez maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu de fumet de poisson pour détendre le mélange. Assaisonnez selon vos goûts et mélangez."
      - "Finition. Avant de dresser les assiettes, allumez votre machine à café pour préparer des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe de café (idéalement, uniquement la mousse). Placez un morceau de saumon doré sur le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon."
      pro:
      - "Espuma de vanille : réduire 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajouter le contenu d’une gousse de vanille et la gousse entière coupée en deux. Prêt quand le mélange a diminué de moitié."
      - "Éplucher et hacher l’oignon, le faire revenir dans une casserole. Avant coloration, ajouter le riz. Laisser revenir à feu doux environ 5 minutes en mélangeant très régulièrement."
      - "Riz nacré (grains translucides) : mouiller avec le fumet de poisson à hauteur. Dès évaporation, verser de nouveau du fond blanc, jusqu’à cuisson du riz."
      - "Assaisonner chaque face du saumon sel et poivre. Déposer dans une poêle à feu vif jusqu’à petite croûte. Dorer l’autre côté. Sans matière grasse : le foie gras suffit."
      - "Débarrasser le saumon et le placer au four 2 minutes à 180°C."
      - "Revenir à la crème du début. Compléter avec des feuilles de gélatine (6g) préalablement ramollies dans de l’eau froide. Mélanger au fouet, verser dans un siphon."
      - "Finir le risotto : ajouter au riz le mascarpone, le parmesan et un peu de fumet de poisson pour détendre. Assaisonner et mélanger."
      - "Allumer la machine à café, préparer des expresso. Dresser : un peu de riz, une ou deux cuillères à soupe de café (idéalement la mousse). Morceau de saumon doré sur le riz, espuma vanille du siphon."
      cavernes:
      - "Cuisson. Espuma vanille. 20 cL lait, 50 cL crème liquide, casserole feu doux, réduire. Contenu gousse vanille, gousse entière coupée en deux, ajouter. Prêt : mélange diminué moitié."
      - "Cuisson. Oignon, éplucher hacher. Casserole, faire revenir. Avant colorer : riz, ajouter. Feu doux, environ 5 min, mélanger très régulièrement."
      - "Cuisson. Riz nacré (grains translucides). Fumet poisson, mouiller à hauteur. S’évapore : encore fond blanc. Jusqu’à riz cuit."
      - "Cuisson. Saumon, chaque face, sel poivre. Poêle feu vif, petite croûte. Autre côté, dorer. Zéro matière grasse : foie gras suffit."
      - "Cuisson. Saumon, débarrasser. Four 2 min 180°C."
      - "Cuisson. Crème début recette. Feuilles gélatine (6g) ramollies eau froide, compléter. Fouet, mélanger. Siphon, verser."
      - "Cuisson. Risotto, finir. Riz, mascarpone, parmesan, peu fumet poisson, détendre. Assaisonner, mélanger."
      - "Finition. Machine café, allumer. Expresso. Assiette : peu riz, 1 ou 2 c. à soupe café (idéalement mousse seulement). Saumon doré, riz. Espuma vanille siphon."
    kcal_per_serving: 738
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
  pesco:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: ["Arancini"]
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent) ; saumon ; crème"
---

# Risotto au foie gras poêlé

![[risotto-au-foie-gras-poele.webp]]
**Équipement :** [[fouet]] · [[siphon]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/risotto-au-foie-gras-poele]]

## Ingrédients (4 personnes)

- 4 escalope de foie gras
- 250 g de riz rond
- 1 oignon
- 50 cl de crème liquide
- 20 cl de lait
- 50 cl de fond blanc de volaille
- 6 g de gélatine
- 1 tasse de café
- 1 gousse de vanille
-  mascarpone
-  parmesan

## Préparation

1. Pour réaliser l’espuma de vanille, faites réduire 20 cL de lait et 50 cL de crème liquide dans une casserole à feu doux. Ajoutez le contenu d’une gousse de vanille, ainsi que la gousse entière coupée en deux. Votre préparation est prête quand le mélange a diminué de moitié.
2. Pendant ce temps, épluchez et hachez l’oignon, puis faites le revenir dans une casserole. Avant que l’oignon ne colore, ajoutez le riz. Laissez le revenir à feu doux pendant environ 5 minutes en mélangeant très régulièrement.
3. Lorsque le riz est nacré (les grains sont translucides), mouillez avec le fond blanc de volaille à hauteur. Dès que celui-ci s’évapore, versez de nouveau du fond blanc et ainsi de suite jusqu’à ce que le riz soit cuit.
4. Assaisonnez chaque faces du foie gras avec du sel et du poivre. Déposez-le dans une poêle à feu vif, jusqu’à ce qu’une petite croûte se forme. Faites ensuite snacker l’autre côté. N’ajoutez pas de matière grasse dans la poêle, le foie GRAS fait amplement l’affaire.
5. Débarrassez le foie gras et placer-le au four pendant 2 minutes à 180°C.
6. Revenez à la crème faite au début de la recette. Complétez-la avec des feuilles de gélatines (6g) préalablement ramollies dans de l’eau froide. Mélangez à l’aide d’un fouet, puis versez le tout dans un siphon.
7. Finissons maintenant le risotto. Ajoutez au riz le mascarpone, le parmesan et un peu de fond blanc de volaille pour détendre le mélange. Assaisonnez selon vos goûts et mélangez.
8. Avant de dresser les assiettes, pensez à allumer votre machine à café pour préparer des expresso. Dans chaque assiette, déposez un peu de riz, une ou deux cuillères à soupe de café (idéalement, uniquement la mousse). Placez un morceau de foie gras snacké sur le riz, puis complétez avec l’espuma à la vanille qui se trouve dans le siphon.

 
 

 
 Et voilà ! Vous pouvez maintenant servir une entrée originale et pleines de saveurs. Vous verrez, les goûts de la vanille, du café et du foie gras se marient à merveille. Bon appétit !
