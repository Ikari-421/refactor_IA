---
schema: recette-web-jigme/v2
equipment:
- ref: maryse
slug: salade-cesar
title: Salade César
lang: fr
description: "Salade César : recette mexicaine avec coeur de sucrine, oeuf et filet de poulet, pour 4 personnes. Version maison. Facile à suivre."
cuisine: mexicaine
category: salé
tags:
- salé
- salade
- coeur de sucrine
- plat
image:
  url:
  alt: Salade César
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-cesar.md
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
    - from: parmesan entier
      to: comté affiné (naturellement quasi sans lactose)
      note:
    - from: paneer ou tofu ferme
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
    - from: mayonnaise
      to: mayonnaise vegan (à l'aquafaba)
      note:
    - from: mayonnaise vegan (à l'aquafaba)
      to: mayonnaise vegan (à l'aquafaba)
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - moutarde
    swaps: []
    note: 'Contient moutarde (mayonnaise) : pas d’adaptation fiable.'
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
    - from: paneer ou tofu ferme
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; œuf de lin (1 c.à.s. lin + 3
      c.à.s. eau / œuf) ou tofu soyeux → pois chiches rôtis ; tofu ferme → pois chiches rôtis.'
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
histoire: 'Salade César : romaine, croûtons, parmesan, sauce (œuf, citron, huile, anchois ou Worcester,
  ail). On raconte que Caesar Cardini l’a improvisée à Tijuana pendant la prohibition. On décrit la composition,
  pas une année tranchée ici.

  '
fun_facts:
- text: >
    L’anchois n’est pas toujours dans les récits d’origine ; le Worcester en
    apporte déjà.
  source_name: Grokipedia, Caesar salad
  source_url: https://grokipedia.com/page/Caesar_salad
- text: >
    La romaine tient la sauce ; une feuille trop tendre s’affaisse.
  source_name: Wikipedia, Caesar salad
  source_url: https://en.wikipedia.org/wiki/Caesar_salad
wines:
- name: Soave
  producer: Cantina di Soave
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — le parmesan et l’anchois, sans un chardonnay boisé.
- name: Frascati
  producer: Fontana Candida
  origin: Frascati, Latium
  grapes: malvasia, trebbiano
  award:
  why: Blanc de Rome — la romaine, voisin d’Italie.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — l’ail et le citron, sans un rouge tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - poisson
    - moutarde
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id002
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: coeur de sucrine
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
      item: filet de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron jaune
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: parmesan entier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mayonnaise
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: anchois
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante pendant environ 10 minutes pour
      obtenir des oeufs durs. Une fois cuit, écalez les oeufs et réservez.
    - Cuisson. Pendant ce temps, dégraissez les blancs de poulets et faites les revenir dans une poêle
      bien chaude avec un filet d’huile végétale. Débarrassez-les lorsqu’ils sont cuits et
      que les deux faces sont bien colorées.
    - Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croutons, puis faites revenir
      ces morceaux de pain dans la même poêle que pour la cuisson du poulet. Ajoutez une gousse
      d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier
      absorbant et réservez.
    - Mixage. Pour réaliser la sauce de la salade césar, mixez les anchois, du parmesan râpé (à doser
      selon vos goûts), un jaune d’oeuf et le jus d’un citron. Débarrassez la sauce obtenue
      dans une bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez
      avoir une sauce plus liquide, n’hésitez pas à ajouter de l’huile d’olive.
    - Finition. Découpez les coeurs de sucrine et déposez les dans les assiettes. Faites des lamelles
      de poulet et disposez-les au dessus la salade. Complétez avec les oeufs coupez en quatre,
      quelques copeaux de parmesan et les croutons. Assaisonnez avec la sauce et dégustez
      ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante pendant environ 10 minutes pour obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Cuisson. Pendant ce temps, dégraissez les blancs de poulet et faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale. Débarrassez-les lorsqu’ils sont cuits et que les deux faces sont bien colorées."
      - "Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croûtons, puis faites revenir ces morceaux de pain dans la même poêle que pour la cuisson du poulet. Ajoutez une gousse d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier absorbant et réservez."
      - "Mixage. Pour réaliser la sauce de la salade César, mixez les anchois, du parmesan [[raper|râpé]] (à doser selon vos goûts), un jaune d’œuf et le jus d’un citron. Débarrassez la sauce obtenue dans un bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez une sauce plus liquide, ajoutez de l’huile d’olive."
      - "Finition. Découpez les cœurs de sucrine et déposez-les dans les assiettes. Faites des lamelles de poulet et disposez-les au-dessus de la salade. Complétez avec les œufs coupés en quatre, quelques copeaux de parmesan et les croûtons. Assaisonnez avec la sauce et dégustez."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante environ 10 minutes, œufs durs. Écaler. Réserver."
      - "Dégraisser les blancs de poulet. Faire revenir dans une poêle bien chaude avec un filet d’huile végétale. Débarrasser une fois cuits, deux faces colorées."
      - "Couper le pain en cubes. Faire revenir dans la même poêle que le poulet. Ajouter une gousse d’ail hachée. Saler, poivrer. Colorés : débarrasser sur papier absorbant. Réserver."
      - "Sauce César : mixer les anchois, du parmesan râpé (doser au goût), un jaune d’œuf et le jus d’un citron. Débarrasser dans un bol. Incorporer la mayonnaise à la maryse. Option : huile d’olive pour une sauce plus liquide."
      - "Découper les cœurs de sucrine. Déposer dans les assiettes. Lamelles de poulet au-dessus. Œufs en quatre, copeaux de parmesan, croûtons. Assaisonner avec la sauce."
      cavernes:
      - "Cuisson. Œufs, casserole eau bouillante, environ 10 minutes, œufs durs. Cuits, écaler. Réserver."
      - "Cuisson. Blancs poulet, dégraisser. Poêle bien chaude, filet huile végétale, revenir. Cuits, deux faces colorées, débarrasser."
      - "Cuisson. Pain, cubes, croûtons. Même poêle poulet, revenir. Gousse ail hachée, sel, poivre. Colorés : papier absorbant, débarrasser. Réserver."
      - "Mixage. Sauce César : anchois, parmesan râpé (doser goût), jaune œuf, jus citron, mixer. Bol, débarrasser. Mayonnaise, maryse, incorporer. Option : huile olive, plus liquide."
      - "Finition. Cœurs sucrine, découper, assiettes. Lamelles poulet, dessus salade. Œufs quatre, copeaux parmesan, croûtons. Sauce, assaisonner. Déguster."
    kcal_per_serving: 382
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
    - lactose
    - produits_laitiers
    - oeuf
    - soja
    - moutarde
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: coeur de sucrine
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
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron jaune
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: grana (présure microbienne) entier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mayonnaise
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: câpres extra
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante pendant environ 10 minutes pour
      obtenir des oeufs durs. Une fois cuit, écalez les oeufs et réservez.
    - Cuisson. Pendant ce temps, faites revenir le paneer (ou le tofu ferme) dans une poêle bien chaude avec un filet d’huile végétale. Débarrassez-le lorsqu’il est cuit et bien coloré des deux faces.
    - Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croutons, puis faites revenir
      ces morceaux de pain dans la même poêle que pour la cuisson du paneer. Ajoutez une gousse
      d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier
      absorbant et réservez.
    - Mixage. Pour réaliser la sauce de la salade césar, mixez les câpres extra, du grana (présure microbienne) râpé
      (à doser selon vos goûts), un jaune d’oeuf et le jus d’un citron. Débarrassez la sauce
      obtenue dans une bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous
      souhaitez avoir une sauce plus liquide, n’hésitez pas à ajouter de l’huile d’olive.
    - Finition. Découpez les coeurs de sucrine et déposez les dans les assiettes. Faites des lamelles de paneer et disposez-les au-dessus de la salade. Complétez avec les oeufs coupez en quatre,
      quelques copeaux de grana (présure microbienne) et les croutons. Assaisonnez avec la sauce et dégustez
      ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante pendant environ 10 minutes pour obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Cuisson. Pendant ce temps, faites revenir le paneer (ou le tofu ferme) dans une poêle bien chaude avec un filet d’huile végétale. Débarrassez-le lorsqu’il est cuit et bien coloré des deux faces."
      - "Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croûtons, puis faites revenir ces morceaux de pain dans la même poêle que pour la cuisson du paneer. Ajoutez une gousse d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier absorbant et réservez."
      - "Mixage. Pour réaliser la sauce de la salade César, mixez les câpres extra, du grana (présure microbienne) [[raper|râpé]] (à doser selon vos goûts), un jaune d’œuf et le jus d’un citron. Débarrassez la sauce obtenue dans un bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez une sauce plus liquide, ajoutez de l’huile d’olive."
      - "Finition. Découpez les cœurs de sucrine et déposez-les dans les assiettes. Faites des lamelles de paneer et disposez-les au-dessus de la salade. Complétez avec les œufs coupés en quatre, quelques copeaux de grana (présure microbienne) et les croûtons. Assaisonnez avec la sauce et dégustez."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante environ 10 minutes, œufs durs. Écaler. Réserver."
      - "Faire revenir le paneer (ou le tofu ferme) dans une poêle bien chaude avec un filet d’huile végétale. Débarrasser une fois cuit, deux faces colorées."
      - "Couper le pain en cubes. Faire revenir dans la même poêle que le paneer. Ajouter une gousse d’ail hachée. Saler, poivrer. Colorés : débarrasser sur papier absorbant. Réserver."
      - "Sauce César : mixer les câpres extra, du grana (présure microbienne) râpé (doser au goût), un jaune d’œuf et le jus d’un citron. Débarrasser dans un bol. Incorporer la mayonnaise à la maryse. Option : huile d’olive pour une sauce plus liquide."
      - "Découper les cœurs de sucrine. Déposer dans les assiettes. Lamelles de paneer au-dessus. Œufs en quatre, copeaux de grana (présure microbienne), croûtons. Assaisonner avec la sauce."
      cavernes:
      - "Cuisson. Œufs, casserole eau bouillante, environ 10 minutes, œufs durs. Cuits, écaler. Réserver."
      - "Cuisson. Paneer ou tofu ferme, poêle bien chaude, filet huile végétale, revenir. Cuit, deux faces colorées, débarrasser."
      - "Cuisson. Pain, cubes, croûtons. Même poêle paneer, revenir. Gousse ail hachée, sel, poivre. Colorés : papier absorbant, débarrasser. Réserver."
      - "Mixage. Sauce César : câpres extra, grana (présure microbienne) râpé (doser goût), jaune œuf, jus citron, mixer. Bol, débarrasser. Mayonnaise, maryse, incorporer. Option : huile olive, plus liquide."
      - "Finition. Cœurs sucrine, découper, assiettes. Lamelles paneer, dessus salade. Œufs quatre, copeaux grana (présure microbienne), croûtons. Sauce, assaisonner. Déguster."
    kcal_per_serving: 309
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
    - soja
    - moutarde
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: coeur de sucrine
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
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron jaune
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mayonnaise vegan (à l'aquafaba)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: câpres extra
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le tofu ferme en quartiers (à la place des œufs durs).
    - Dressage. Pendant ce temps, faites dorer le tofu ferme dans une poêle bien chaude avec un filet d’huile. Réservez.
    - Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croutons, puis faites revenir
      ces morceaux de pain dans la même poêle que pour la cuisson du tofu. Ajoutez une gousse
      d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier
      absorbant et réservez.
    - Mixage. Pour réaliser la sauce de la salade césar, mixez les câpres, du parmesan végétal (à doser), un peu de tofu soyeux et le jus d’un citron. Débarrassez la sauce obtenue dans une bol pour
      pouvoir y incorporer de la mayonnaise vegan à la maryse. Si vous souhaitez avoir une
      sauce plus liquide, n’hésitez pas à ajouter de l’huile d’olive.
    - Dressage. Découpez les coeurs de sucrine et déposez les dans les assiettes. Faites des lamelles de tofu et disposez-les sur la salade. Complétez avec des quartiers de tofu, des copeaux de parmesan végétal et les croûtons. Assaisonnez avec la sauce et dégustez ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu ferme en quartiers (à la place des œufs durs)."
      - "Dressage. Pendant ce temps, faites dorer le tofu ferme dans une poêle bien chaude avec un filet d’huile. Réservez."
      - "Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croûtons, puis faites revenir ces morceaux de pain dans la même poêle que pour la cuisson du tofu. Ajoutez une gousse d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier absorbant et réservez."
      - "Mixage. Pour réaliser la sauce de la salade César, mixez les câpres, du parmesan végétal (à doser), un peu de tofu soyeux et le jus d’un citron. Débarrassez la sauce obtenue dans un bol pour pouvoir y incorporer de la mayonnaise vegan à la maryse. Si vous souhaitez une sauce plus liquide, ajoutez de l’huile d’olive."
      - "Dressage. Découpez les cœurs de sucrine et déposez-les dans les assiettes. Faites des lamelles de tofu et disposez-les sur la salade. Complétez avec des quartiers de tofu, des copeaux de parmesan végétal et les croûtons. Assaisonnez avec la sauce et dégustez."
      pro:
      - "Couper le tofu ferme en quartiers (à la place des œufs durs)."
      - "Faire dorer le tofu ferme dans une poêle bien chaude avec un filet d’huile. Réserver."
      - "Couper le pain en cubes. Faire revenir dans la même poêle que le tofu. Ajouter une gousse d’ail hachée. Saler, poivrer. Colorés : débarrasser sur papier absorbant. Réserver."
      - "Sauce César : mixer les câpres, du parmesan végétal (à doser), un peu de tofu soyeux et le jus d’un citron. Débarrasser dans un bol. Incorporer la mayonnaise vegan à la maryse. Option : huile d’olive pour une sauce plus liquide."
      - "Découper les cœurs de sucrine. Déposer dans les assiettes. Lamelles de tofu sur la salade. Quartiers de tofu, copeaux de parmesan végétal, croûtons. Assaisonner avec la sauce."
      cavernes:
      - "Préparation. Tofu ferme, quartiers (place œufs durs)."
      - "Dressage. Tofu ferme, poêle bien chaude, filet huile, dorer. Réserver."
      - "Cuisson. Pain, cubes, croûtons. Même poêle tofu, revenir. Gousse ail hachée, sel, poivre. Colorés : papier absorbant, débarrasser. Réserver."
      - "Mixage. Sauce César : câpres, parmesan végétal (doser), peu tofu soyeux, jus citron, mixer. Bol, débarrasser. Mayonnaise vegan, maryse, incorporer. Option : huile olive, plus liquide."
      - "Dressage. Cœurs sucrine, découper, assiettes. Lamelles tofu, salade. Quartiers tofu, copeaux parmesan végétal, croûtons. Sauce, assaisonner. Déguster."
    kcal_per_serving: 388
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
    - lactose
    - produits_laitiers
    - oeuf
    - poisson
    - moutarde
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: coeur de sucrine
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
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron jaune
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: parmesan entier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mayonnaise
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: anchois
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante pendant environ 10 minutes pour
      obtenir des oeufs durs. Une fois cuit, écalez les oeufs et réservez.
    - Cuisson. Pendant ce temps, dégraissez les blancs de poulets et faites les revenir dans une poêle
      bien chaude avec un filet d’huile végétale. Débarrassez-les lorsqu’ils sont cuits et
      que les deux faces sont bien colorées.
    - Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croutons, puis faites revenir
      ces morceaux de pain dans la même poêle que pour la cuisson du poulet. Ajoutez une gousse
      d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier
      absorbant et réservez.
    - Mixage. Pour réaliser la sauce de la salade césar, mixez les anchois, du parmesan râpé (à doser
      selon vos goûts), un jaune d’oeuf et le jus d’un citron. Débarrassez la sauce obtenue
      dans une bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez
      avoir une sauce plus liquide, n’hésitez pas à ajouter de l’huile d’olive.
    - Finition. Découpez les coeurs de sucrine et déposez les dans les assiettes. Faites des lamelles
      de poulet et disposez-les au dessus la salade. Complétez avec les oeufs coupez en quatre,
      quelques copeaux de parmesan et les croutons. Assaisonnez avec la sauce et dégustez
      ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante pendant environ 10 minutes pour obtenir des œufs durs. Une fois cuits, écalez-les et réservez."
      - "Cuisson. Pendant ce temps, dégraissez les blancs de poulet et faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale. Débarrassez-les lorsqu’ils sont cuits et que les deux faces sont bien colorées."
      - "Cuisson. Coupez vos tranches de pain en cubes afin de réaliser les croûtons, puis faites revenir ces morceaux de pain dans la même poêle que pour la cuisson du poulet. Ajoutez une gousse d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier absorbant et réservez."
      - "Mixage. Pour réaliser la sauce de la salade César, mixez les anchois, du parmesan [[raper|râpé]] (à doser selon vos goûts), un jaune d’œuf et le jus d’un citron. Débarrassez la sauce obtenue dans un bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez une sauce plus liquide, ajoutez de l’huile d’olive."
      - "Finition. Découpez les cœurs de sucrine et déposez-les dans les assiettes. Faites des lamelles de poulet et disposez-les au-dessus de la salade. Complétez avec les œufs coupés en quatre, quelques copeaux de parmesan et les croûtons. Assaisonnez avec la sauce et dégustez."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante environ 10 minutes, œufs durs. Écaler. Réserver."
      - "Dégraisser les blancs de poulet. Faire revenir dans une poêle bien chaude avec un filet d’huile végétale. Débarrasser une fois cuits, deux faces colorées."
      - "Couper le pain en cubes. Faire revenir dans la même poêle que le poulet. Ajouter une gousse d’ail hachée. Saler, poivrer. Colorés : débarrasser sur papier absorbant. Réserver."
      - "Sauce César : mixer les anchois, du parmesan râpé (doser au goût), un jaune d’œuf et le jus d’un citron. Débarrasser dans un bol. Incorporer la mayonnaise à la maryse. Option : huile d’olive pour une sauce plus liquide."
      - "Découper les cœurs de sucrine. Déposer dans les assiettes. Lamelles de poulet au-dessus. Œufs en quatre, copeaux de parmesan, croûtons. Assaisonner avec la sauce."
      cavernes:
      - "Cuisson. Œufs, casserole eau bouillante, environ 10 minutes, œufs durs. Cuits, écaler. Réserver."
      - "Cuisson. Blancs poulet, dégraisser. Poêle bien chaude, filet huile végétale, revenir. Cuits, deux faces colorées, débarrasser."
      - "Cuisson. Pain, cubes, croûtons. Même poêle poulet, revenir. Gousse ail hachée, sel, poivre. Colorés : papier absorbant, débarrasser. Réserver."
      - "Mixage. Sauce César : anchois, parmesan râpé (doser goût), jaune œuf, jus citron, mixer. Bol, débarrasser. Mayonnaise, maryse, incorporer. Option : huile olive, plus liquide."
      - "Finition. Cœurs sucrine, découper, assiettes. Lamelles poulet, dessus salade. Œufs quatre, copeaux parmesan, croûtons. Sauce, assaisonner. Déguster."
    kcal_per_serving: 309
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  pesco:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; œufs crus ou peu cuits"

---

# Salade César
**Équipement :** [[maryse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-cesar]]

## Ingrédients (4 personnes)

- 4 coeur de sucrine
- 4 oeuf
- 4 filet de poulet
- 1 citron jaune
- 4 tranche de pain
- 1 gousse d'ail
-  parmesan entier
-  mayonnaise
-  anchois
-  huile végétale

## Préparation

1. Placez les oeufs dans une casserole d’eau bouillante pendant environ 10 minutes pour obtenir des oeufs durs. Une fois cuit, écalez les oeufs et réservez.
2. Pendant ce temps, dégraissez les blancs de poulets et faites les revenir dans une poêle bien chaude avec un filet d’huile végétale. Débarrassez-les lorsqu’ils sont cuits et que les deux faces sont bien colorées.
3. Coupez vos tranches de pain en cubes afin de réaliser les croutons, puis faites revenir ces morceaux de pain dans la même poêle que pour la cuisson du poulet. Ajoutez une gousse d’ail hachée, salez et poivrez. Lorsqu’ils sont colorés, débarrassez-les sur un papier absorbant et réservez.
4. Pour réaliser la sauce de la salade césar, mixez les anchois, du parmesan râpé (à doser selon vos goûts), un jaune d’oeuf et le jus d’un citron. Débarrassez la sauce obtenue dans une bol pour pouvoir y incorporer de la mayonnaise à la maryse. Si vous souhaitez avoir une sauce plus liquide, n’hésitez pas à ajouter de l’huile d’olive.
5. Découpez les coeurs de sucrine et déposez les dans les assiettes. Faites des lamelles de poulet et disposez-les au dessus la salade. Complétez avec les oeufs coupez en quatre, quelques copeaux de parmesan et les croutons. Assaisonnez avec la sauce et dégustez !

 
 

 
 Bon appétit !
