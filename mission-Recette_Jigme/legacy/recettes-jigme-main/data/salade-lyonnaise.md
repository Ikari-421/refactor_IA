---
schema: recette-web-jigme/v2
slug: salade-lyonnaise
title: Salade lyonnaise
lang: fr
description: "Salade lyonnaise : recette française avec salade verte type laitue, tranche de lard épaisse et oeuf, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- salade
- Lyon
- rapide
image:
  url:
  alt: Salade lyonnaise
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-lyonnaise.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lait.
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
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu fumé → pois chiches rôtis ; œuf de lin (1 c.à.s. lin + 3 c.à.s. eau
      / œuf) ou tofu soyeux → pois chiches rôtis.'
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
  Dans les bouchons lyonnais, ces petits restaurants de cuisine ouvrière, on sert
  une salade qui n’a rien d’une entrée diète : frisée amère, lardons chauds, croûtons,
  œuf poché. La vinaigrette se fait souvent avec le gras encore tiède des lardons,
  relevée de moutarde. C’est un plat de comptoir, cousin de la frisée aux lardons,
  à ne pas confondre avec la niçoise. L’œuf nappe : le jaune est la « crème » du plat.
fun_facts:
- text: >
    La salade lyonnaise, souvent appelée frisée aux lardons, est un plat de bouchon
    lyonnais : frisée, lardons poêlés, croûtons, œuf mollet ou poché.
  source_name: My Parisian Kitchen, salade lyonnaise
  source_url: https://www.myparisiankitchen.com/salade-lyonnaise-frisee-lardons/
- text: >
    La vinaigrette se monte souvent avec la graisse des lardons encore chaude :
    elle ramollit la frisée sans la noyer.
  source_name: Usage
  source_url:
wines:
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay — Lyon et le Beaujolais, tanin court contre le lardon.
- name: Coteaux du Lyonnais
  producer: Cave du Château de Saint-Lager
  origin: Lyonnais
  grapes: gamay
  award:
  why: Gamay local — la salade, voisin de terroir.
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: Mâcon, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple — si l’on veut un blanc, l’œuf et la moutarde.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 10
      rest_min: 0
      total_min: 25
    equipment: &id002
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de lard épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Plongez les oeufs dans une casserole d’eau bouillante pendant 10min jusqu’à obtenir
      des oeufs durs. Une fois cuits, écalez les oeufs et réservez.
    - Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez.
    - Cuisson. Retirez la couenne de votre lard et découpez le en lardon. Faites les ensuite revenir
      dans une poêle chaude jusqu’à ce qu’ils soient colorés/
    - Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser
      la graisse du lard pour apporter un peu de matière grasse. Une fois que les croutons
      sont bien dorés, débarrassez-les sur un papier absorbant.
    - Finition. Il ne vous reste plus qu’à dresser ! Dans un bol ou une assiette creuse, placez la salade.
      Ajoutez les oeufs durs coupés en quatre, les croutons, le lard et un filet de la vinaigrette
      de votre choix. Et voilà, rien de plus simple pour réaliser une authentique salade lyonnaise.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Plongez les œufs dans une casserole d’eau bouillante pendant 10 min, jusqu’à obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez."
      - "Cuisson. Retirez la couenne de votre lard et découpez-le en lardons. Faites-les ensuite revenir dans une poêle chaude jusqu’à ce qu’ils soient colorés."
      - "Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser la graisse du lard pour apporter un peu de matière grasse. Une fois que les croûtons sont bien dorés, débarrassez-les sur un papier absorbant."
      - "Finition. Dans un bol ou une assiette creuse, placez la salade. Ajoutez les œufs durs coupés en quatre, les croûtons, le lard et un filet de la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs dans une casserole d’eau bouillante 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Trancher une miche de pain. Découper les tranches en dés. Réserver."
      - "Retirer la couenne du lard. Découper en lardons. Faire revenir dans une poêle chaude jusqu’à colorés."
      - "Dans la même poêle, cuire les dés de pain. Réutiliser la graisse du lard au choix. Croûtons dorés : débarrasser sur papier absorbant."
      - "Dans un bol ou une assiette creuse, placer la salade. Ajouter les œufs durs coupés en quatre, les croûtons, le lard et un filet de vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante, plonger 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Dressage. Miche pain, trancher. Tranches, dés, découper. Réserver."
      - "Cuisson. Lard, couenne, retirer. Lardons, découper. Poêle chaude, revenir jusqu’à colorés."
      - "Dressage. Même poêle, dés pain, cuire. Graisse lard, réutiliser, option. Croûtons dorés : papier absorbant, débarrasser."
      - "Finition. Bol ou assiette creuse, salade, placer. Œufs durs, quatre, couper. Croûtons, lard, filet vinaigrette choix, ajouter."
    kcal_per_serving: 248
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
    - gluten
    - oeuf
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Plongez les oeufs dans une casserole d’eau bouillante pendant 10min jusqu’à obtenir
      des oeufs durs. Une fois cuits, écalez les oeufs et réservez.
    - Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez.
    - Cuisson. Retirez la couenne de votre tofu fumé et découpez le en tofu fumé. Faites les ensuite
      revenir dans une poêle chaude jusqu’à ce qu’ils soient colorés/
    - Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser
      la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croutons
      sont bien dorés, débarrassez-les sur un papier absorbant.
    - Finition. Il ne vous reste plus qu’à dresser ! Dans un bol ou une assiette creuse, placez la salade.
      Ajoutez les oeufs durs coupés en quatre, les croutons, le tofu fumé et un filet de la
      vinaigrette de votre choix. Et voilà, rien de plus simple pour réaliser une authentique
      salade lyonnaise. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Plongez les œufs dans une casserole d’eau bouillante pendant 10 min, jusqu’à obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez."
      - "Cuisson. Retirez la couenne de votre tofu fumé et découpez-le. Faites-le ensuite revenir dans une poêle chaude jusqu’à ce qu’il soit coloré."
      - "Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croûtons sont bien dorés, débarrassez-les sur un papier absorbant."
      - "Finition. Dans un bol ou une assiette creuse, placez la salade. Ajoutez les œufs durs coupés en quatre, les croûtons, le tofu fumé et un filet de la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs dans une casserole d’eau bouillante 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Trancher une miche de pain. Découper les tranches en dés. Réserver."
      - "Retirer la couenne du tofu fumé. Découper. Faire revenir dans une poêle chaude jusqu’à coloré."
      - "Dans la même poêle, cuire les dés de pain. Réutiliser la graisse du tofu fumé au choix. Croûtons dorés : débarrasser sur papier absorbant."
      - "Dans un bol ou une assiette creuse, placer la salade. Ajouter les œufs durs coupés en quatre, les croûtons, le tofu fumé et un filet de vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante, plonger 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Dressage. Miche pain, trancher. Tranches, dés, découper. Réserver."
      - "Cuisson. Tofu fumé, couenne, retirer. Découper. Poêle chaude, revenir jusqu’à coloré."
      - "Dressage. Même poêle, dés pain, cuire. Graisse tofu fumé, réutiliser, option. Croûtons dorés : papier absorbant, débarrasser."
      - "Finition. Bol ou assiette creuse, salade, placer. Œufs durs, quatre, couper. Croûtons, tofu fumé, filet vinaigrette choix, ajouter."
    kcal_per_serving: 248
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Plongez les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs dans une
      casserole d’eau bouillante pendant 10min jusqu’à obtenir des œuf de lin (1 c.à.s. lin
      + 3 c.à.s. eau / œuf) ou tofu soyeuxs durs. Une fois cuits, écalez les œuf de lin (1
      c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs et réservez.
    - Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez.
    - Cuisson. Retirez la couenne de votre tofu fumé et découpez le en tofu fumé. Faites les ensuite
      revenir dans une poêle chaude jusqu’à ce qu’ils soient colorés/
    - Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser
      la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croutons
      sont bien dorés, débarrassez-les sur un papier absorbant.
    - Finition. Il ne vous reste plus qu’à dresser ! Dans un bol ou une assiette creuse, placez la salade.
      Ajoutez les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs durs coupés
      en quatre, les croutons, le tofu fumé et un filet de la vinaigrette de votre choix.
      Et voilà, rien de plus simple pour réaliser une authentique salade lyonnaise. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les œufs de lin (1 c. à s. de lin + 3 c. à s. d’eau par œuf) ou le tofu soyeux dans une casserole d’eau bouillante pendant 10 min, jusqu’à obtenir des œufs de lin ou tofu soyeux durs. Une fois cuits, écalez-les et réservez."
      - "Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez."
      - "Cuisson. Retirez la couenne de votre tofu fumé et découpez-le. Faites-le ensuite revenir dans une poêle chaude jusqu’à ce qu’il soit coloré."
      - "Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croûtons sont bien dorés, débarrassez-les sur un papier absorbant."
      - "Finition. Dans un bol ou une assiette creuse, placez la salade. Ajoutez les œufs de lin ou tofu soyeux durs coupés en quatre, les croûtons, le tofu fumé et un filet de la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs de lin (1 c. à s. de lin + 3 c. à s. d’eau par œuf) ou le tofu soyeux dans une casserole d’eau bouillante 10 min, jusqu’à durs. Écaler. Réserver."
      - "Trancher une miche de pain. Découper les tranches en dés. Réserver."
      - "Retirer la couenne du tofu fumé. Découper. Faire revenir dans une poêle chaude jusqu’à coloré."
      - "Dans la même poêle, cuire les dés de pain. Réutiliser la graisse du tofu fumé au choix. Croûtons dorés : débarrasser sur papier absorbant."
      - "Dans un bol ou une assiette creuse, placer la salade. Ajouter les œufs de lin ou tofu soyeux durs coupés en quatre, les croûtons, le tofu fumé et un filet de vinaigrette au choix."
      cavernes:
      - "Préparation. Œufs lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux, casserole, eau bouillante, plonger 10 min, jusqu’à durs. Écaler. Réserver."
      - "Dressage. Miche pain, trancher. Tranches, dés, découper. Réserver."
      - "Cuisson. Tofu fumé, couenne, retirer. Découper. Poêle chaude, revenir jusqu’à coloré."
      - "Dressage. Même poêle, dés pain, cuire. Graisse tofu fumé, réutiliser, option. Croûtons dorés : papier absorbant, débarrasser."
      - "Finition. Bol ou assiette creuse, salade, placer. Œufs lin ou tofu soyeux durs, quatre, couper. Croûtons, tofu fumé, filet vinaigrette choix, ajouter."
    kcal_per_serving: 248
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
    - gluten
    - oeuf
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Plongez les oeufs dans une casserole d’eau bouillante pendant 10min jusqu’à obtenir
      des oeufs durs. Une fois cuits, écalez les oeufs et réservez.
    - Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez.
    - Cuisson. Retirez la couenne de votre tofu fumé et découpez le en tofu fumé. Faites les ensuite
      revenir dans une poêle chaude jusqu’à ce qu’ils soient colorés/
    - Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser
      la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croutons
      sont bien dorés, débarrassez-les sur un papier absorbant.
    - Finition. Il ne vous reste plus qu’à dresser ! Dans un bol ou une assiette creuse, placez la salade.
      Ajoutez les oeufs durs coupés en quatre, les croutons, le tofu fumé et un filet de la
      vinaigrette de votre choix. Et voilà, rien de plus simple pour réaliser une authentique
      salade lyonnaise. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Plongez les œufs dans une casserole d’eau bouillante pendant 10 min, jusqu’à obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Dressage. Tranchez une miche de pain, découpez ces tranches en dés et réservez."
      - "Cuisson. Retirez la couenne de votre tofu fumé et découpez-le. Faites-le ensuite revenir dans une poêle chaude jusqu’à ce qu’il soit coloré."
      - "Dressage. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser la graisse du tofu fumé pour apporter un peu de matière grasse. Une fois que les croûtons sont bien dorés, débarrassez-les sur un papier absorbant."
      - "Finition. Dans un bol ou une assiette creuse, placez la salade. Ajoutez les œufs durs coupés en quatre, les croûtons, le tofu fumé et un filet de la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs dans une casserole d’eau bouillante 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Trancher une miche de pain. Découper les tranches en dés. Réserver."
      - "Retirer la couenne du tofu fumé. Découper. Faire revenir dans une poêle chaude jusqu’à coloré."
      - "Dans la même poêle, cuire les dés de pain. Réutiliser la graisse du tofu fumé au choix. Croûtons dorés : débarrasser sur papier absorbant."
      - "Dans un bol ou une assiette creuse, placer la salade. Ajouter les œufs durs coupés en quatre, les croûtons, le tofu fumé et un filet de vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante, plonger 10 min, jusqu’à œufs durs. Écaler. Réserver."
      - "Dressage. Miche pain, trancher. Tranches, dés, découper. Réserver."
      - "Cuisson. Tofu fumé, couenne, retirer. Découper. Poêle chaude, revenir jusqu’à coloré."
      - "Dressage. Même poêle, dés pain, cuire. Graisse tofu fumé, réutiliser, option. Croûtons dorés : papier absorbant, débarrasser."
      - "Finition. Bol ou assiette creuse, salade, placer. Œufs durs, quatre, couper. Croûtons, tofu fumé, filet vinaigrette choix, ajouter."
    kcal_per_serving: 248
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade lyonnaise
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-lyonnaise]]

## Ingrédients (4 personnes)

- 1 salade verte type laitue
- 4 tranche de lard épaisse
- 4 oeuf
- 4 tranche de pain

## Préparation

1. Plongez les oeufs dans une casserole d’eau bouillante pendant 10min jusqu’à obtenir des oeufs durs. Une fois cuits, écalez les oeufs et réservez.
2. Tranchez une miche de pain, découpez ces tranches en dés et réservez.
3. Retirez la couenne de votre lard et découpez le en lardon. Faites les ensuite revenir dans une poêle chaude jusqu’à ce qu’ils soient colorés/
4. Conservez la même poêle pour faire cuire les dés de pain. Vous pouvez également réutiliser la graisse du lard pour apporter un peu de matière grasse. Une fois que les croutons sont bien dorés, débarrassez-les sur un papier absorbant.
5. Il ne vous reste plus qu’à dresser ! Dans un bol ou une assiette creuse, placez la salade. Ajoutez les oeufs durs coupés en quatre, les croutons, le lard et un filet de la vinaigrette de votre choix.

 
 

 
 Et voilà, rien de plus simple pour réaliser une authentique salade lyonnaise. Bon appétit !
