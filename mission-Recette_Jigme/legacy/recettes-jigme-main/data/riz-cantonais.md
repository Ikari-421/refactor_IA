---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: riz-cantonais
title: Riz cantonais
lang: fr
description: "Riz cantonais : recette chinoise avec riz, œuf et oignon, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: chinoise
category: salé
tags:
- salé
- riz
- œufs
- jambon
- Chine
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/riz-cantonais.webp
  alt: Riz cantonais
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/riz-cantonais.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (saumon fumé) : pas d’adaptation fiable.'
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
histoire: 'Riz sauté : riz déjà cuit, wok très chaud, œuf, légumes, parfois charcuterie. /. Le « cantonais
  » français désigne souvent un riz à l’œuf, petits pois, jambon — version de resto, pas le chǎofàn de
  Canton dans le détail.

  '
fun_facts:
- text: 'Un riz de la veille, un peu sec, saute ; un riz trop frais colle.

    '
  source_name: Grokipedia, Fried rice
  source_url: https://grokipedia.com/page/Fried_rice
- text: 'L’œuf se brouille dans le wok avant le riz, ou autour : trop tard, il reste cru par plaques.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Riz cantonais ».'
  source_name: Wikipédia
  source_url: https://fr.wikipedia.org/wiki/Riz_cantonais
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le soja et l’œuf, sans un rouge.
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron — le wok, acidité nette.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le riz sauté, sans un tanin.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - poêle
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
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
    - qty: 4
      unit: piece
      item: tranche de jambon cuit
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: petits pois
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
    - Dressage. Faites cuire du riz blanc et réservez-le.
    - Cuisson. Écossez vos petits pois et faites-les blanchir très rapidement dans de l’eau bouillante.
      Débarrassez-les dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés.
    - Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les.
    - Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale.
      Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon
      et les petits pois. Mélangez le tout puis réservez.
    - Cuisson. Ajoutez-y les œufs battus et à l’aide d’une spatule en bois, hachez grossièrement le
      tout. Réincorporez ensuite les oignons, les petits pois et le jambon.
    - Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation
      pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Et vous voilà avec un
      magnifique riz cantonais ! Accompagnez avec ce que vous voulez et surtout adaptez à
      votre palais et à vos particularités alimentaires. Vous pouvez très bien remplacer le
      jambon par des petites crevettes ou bien du tofu, c’est tout autant délicieux !
    steps_niveaux:
      amateur:
      - "Dressage. Faites cuire du riz blanc et réservez-le."
      - "Cuisson. Écossez vos petits pois et cuisez-les très rapidement dans de l’eau bouillante. Débarrassez-les dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés."
      - "Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les."
      - "Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon et les petits pois. Mélangez le tout puis réservez."
      - "Cuisson. Ajoutez-y les œufs battus et, à l’aide d’une spatule en bois, hachez grossièrement le tout. Réincorporez ensuite les oignons, les petits pois et le jambon."
      - "Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Accompagnez selon votre palais. Vous pouvez remplacer le jambon par des petites crevettes ou du tofu."
      pro:
      - "Cuire du riz blanc et réserver."
      - "Écosser les petits pois. Cuire très rapidement dans de l’eau bouillante. Débarrasser dans de l’eau froide pour stopper la cuisson."
      - "Éplucher un oignon et le couper finement. Couper le jambon en petits carrés."
      - "Dans un cul de poule, casser 3 à 4 œufs et mélanger."
      - "Chauffer le wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Faire dorer les oignons. Ajouter le jambon et les petits pois. Mélanger, réserver."
      - "Ajouter les œufs battus. Hacher grossièrement à la spatule en bois. Réincorporer les oignons, les petits pois et le jambon."
      - "Ajouter le riz. Cuire 4 à 5 minutes à feu doux en mélangeant régulièrement. Servir. Option : remplacer le jambon par des crevettes ou du tofu."
      cavernes:
      - "Dressage. Riz blanc, cuire, réserver."
      - "Cuisson. Petits pois, écosser. Eau bouillante, cuire très rapidement. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Oignon, éplucher, couper finement. Jambon, petits carrés."
      - "Mélange. Cul de poule. 3 à 4 œufs, casser, mélanger."
      - "Cuisson. Wok ou grande poêle creuse, feu vif, huile végétale. Oignons, dorer. Jambon, petits pois, ajouter. Mélanger, réserver."
      - "Cuisson. Œufs battus, ajouter. Spatule bois, hacher grossièrement. Oignons, petits pois, jambon, réincorporer."
      - "Finition. Riz, ajouter. 4 à 5 min feu doux, mélanger. Servir. Option : jambon, remplacer par crevettes ou tofu."
    kcal_per_serving: 307
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
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
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: petits pois
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
    - Dressage. Faites cuire du riz blanc et réservez-le.
    - Cuisson. Écossez vos petits pois et faites-les blanchir très rapidement dans de l’eau bouillante.
      Débarrassez-les dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés.
    - Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les.
    - Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale.
      Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon
      et les petits pois. Mélangez le tout puis réservez.
    - Cuisson. Ajoutez-y les œufs battus et à l’aide d’une spatule en bois, hachez grossièrement le
      tout. Réincorporez ensuite les oignons, les petits pois et le jambon.
    - Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation
      pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Et vous voilà avec un
      magnifique riz cantonais ! Accompagnez avec ce que vous voulez et surtout adaptez à
      votre palais et à vos particularités alimentaires. Vous pouvez très bien remplacer le
      jambon par des petites crevettes ou bien du tofu, c’est tout autant délicieux !
    steps_niveaux:
      amateur:
      - "Dressage. Faites cuire du riz blanc et réservez-le."
      - "Cuisson. Écossez vos petits pois et cuisez-les très rapidement dans de l’eau bouillante. Débarrassez-les dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés."
      - "Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les."
      - "Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon et les petits pois. Mélangez le tout puis réservez."
      - "Cuisson. Ajoutez-y les œufs battus et, à l’aide d’une spatule en bois, hachez grossièrement le tout. Réincorporez ensuite les oignons, les petits pois et le jambon."
      - "Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Accompagnez selon votre palais. Vous pouvez remplacer le jambon par des petites crevettes ou du tofu."
      pro:
      - "Cuire du riz blanc et réserver."
      - "Écosser les petits pois. Cuire très rapidement dans de l’eau bouillante. Débarrasser dans de l’eau froide pour stopper la cuisson."
      - "Éplucher un oignon et le couper finement. Couper le jambon en petits carrés."
      - "Dans un cul de poule, casser 3 à 4 œufs et mélanger."
      - "Chauffer le wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Faire dorer les oignons. Ajouter le jambon et les petits pois. Mélanger, réserver."
      - "Ajouter les œufs battus. Hacher grossièrement à la spatule en bois. Réincorporer les oignons, les petits pois et le jambon."
      - "Ajouter le riz. Cuire 4 à 5 minutes à feu doux en mélangeant régulièrement. Servir. Option : remplacer le jambon par des crevettes ou du tofu."
      cavernes:
      - "Dressage. Riz blanc, cuire, réserver."
      - "Cuisson. Petits pois, écosser. Eau bouillante, cuire très rapidement. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Oignon, éplucher, couper finement. Jambon, petits carrés."
      - "Mélange. Cul de poule. 3 à 4 œufs, casser, mélanger."
      - "Cuisson. Wok ou grande poêle creuse, feu vif, huile végétale. Oignons, dorer. Jambon, petits pois, ajouter. Mélanger, réserver."
      - "Cuisson. Œufs battus, ajouter. Spatule bois, hacher grossièrement. Oignons, petits pois, jambon, réincorporer."
      - "Finition. Riz, ajouter. 4 à 5 min feu doux, mélanger. Servir. Option : jambon, remplacer par crevettes ou tofu."
    kcal_per_serving: 332
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
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
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: petits pois
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
    - Dressage. Faites cuire du riz blanc et réservez-le.
    - Cuisson. Écossez vos petits pois et faites-les blanchir très rapidement dans de l’eau bouillante.
      Débarrassez-les dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon végétal en petits carrés.
    - Mélange. Dans un cul de poule, versez l’œuf de lin (ou le tofu soyeux) et mélangez.
    - Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale.
      Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon végétal et les petits pois. Mélangez le tout puis réservez.
    - Cuisson. Ajoutez-y l’œuf de lin battu
      et à l’aide d’une spatule en bois, hachez grossièrement le tout. Réincorporez ensuite les oignons, les petits pois et le jambon végétal.
    - Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation
      pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Et vous voilà avec un
      magnifique riz cantonais ! Accompagnez avec ce que vous voulez et surtout adaptez à
      votre palais et à vos particularités alimentaires. Vous pouvez remplacer le jambon végétal par plus de tofu.
    steps_niveaux:
      amateur:
      - "Dressage. Faites cuire du riz blanc et réservez-le."
      - "Cuisson. Écossez vos petits pois et cuisez-les très rapidement dans de l’eau bouillante. Débarrassez-les dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon végétal en petits carrés."
      - "Mélange. Dans un cul de poule, versez l’œuf de lin (ou le tofu soyeux) et mélangez."
      - "Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon végétal et les petits pois. Mélangez le tout puis réservez."
      - "Cuisson. Ajoutez-y l’œuf de lin battu et, à l’aide d’une spatule en bois, hachez grossièrement le tout. Réincorporez ensuite les oignons, les petits pois et le jambon végétal."
      - "Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Accompagnez selon votre palais. Vous pouvez remplacer le jambon végétal par plus de tofu."
      pro:
      - "Cuire du riz blanc et réserver."
      - "Écosser les petits pois. Cuire très rapidement dans de l’eau bouillante. Débarrasser dans de l’eau froide pour stopper la cuisson."
      - "Éplucher un oignon et le couper finement. Couper le jambon végétal en petits carrés."
      - "Dans un cul de poule, verser l’œuf de lin (ou le tofu soyeux) et mélanger."
      - "Chauffer le wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Faire dorer les oignons. Ajouter le jambon végétal et les petits pois. Mélanger, réserver."
      - "Ajouter l’œuf de lin battu. Hacher grossièrement à la spatule en bois. Réincorporer les oignons, les petits pois et le jambon végétal."
      - "Ajouter le riz. Cuire 4 à 5 minutes à feu doux en mélangeant régulièrement. Servir. Option : remplacer le jambon végétal par plus de tofu."
      cavernes:
      - "Dressage. Riz blanc, cuire, réserver."
      - "Cuisson. Petits pois, écosser. Eau bouillante, cuire très rapidement. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Oignon, éplucher, couper finement. Jambon végétal, petits carrés."
      - "Mélange. Cul de poule. Œuf de lin ou tofu soyeux, verser, mélanger."
      - "Cuisson. Wok ou grande poêle creuse, feu vif, huile végétale. Oignons, dorer. Jambon végétal, petits pois, ajouter. Mélanger, réserver."
      - "Cuisson. Œuf de lin battu, ajouter. Spatule bois, hacher grossièrement. Oignons, petits pois, jambon végétal, réincorporer."
      - "Finition. Riz, ajouter. 4 à 5 min feu doux, mélanger. Servir. Option : jambon végétal, remplacer par plus de tofu."
    kcal_per_serving: 332
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
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
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
    - qty: 4
      unit: piece
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: petits pois
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
    - Dressage. Faites cuire du riz blanc et réservez-le.
    - Cuisson. Écossez vos petits pois et faites-les blanchir très rapidement dans de l’eau bouillante.
      Débarrassez-les dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés.
    - Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les.
    - Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale.
      Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon
      et les petits pois. Mélangez le tout puis réservez.
    - Cuisson. Ajoutez-y les œufs battus et à l’aide d’une spatule en bois, hachez grossièrement le
      tout. Réincorporez ensuite les oignons, les petits pois et le jambon.
    - Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation
      pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Et vous voilà avec un
      magnifique riz cantonais ! Accompagnez avec ce que vous voulez et surtout adaptez à
      votre palais et à vos particularités alimentaires. Vous pouvez très bien remplacer le
      jambon par des petites crevettes ou bien du tofu, c’est tout autant délicieux !
    steps_niveaux:
      amateur:
      - "Dressage. Faites cuire du riz blanc et réservez-le."
      - "Cuisson. Écossez vos petits pois et cuisez-les très rapidement dans de l’eau bouillante. Débarrassez-les dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés."
      - "Mélange. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les."
      - "Cuisson. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon et les petits pois. Mélangez le tout puis réservez."
      - "Cuisson. Ajoutez-y les œufs battus et, à l’aide d’une spatule en bois, hachez grossièrement le tout. Réincorporez ensuite les oignons, les petits pois et le jambon."
      - "Finition. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation pendant 4 à 5 minutes à feu doux en mélangeant régulièrement. Accompagnez selon votre palais. Vous pouvez remplacer le jambon par des petites crevettes ou du tofu."
      pro:
      - "Cuire du riz blanc et réserver."
      - "Écosser les petits pois. Cuire très rapidement dans de l’eau bouillante. Débarrasser dans de l’eau froide pour stopper la cuisson."
      - "Éplucher un oignon et le couper finement. Couper le jambon en petits carrés."
      - "Dans un cul de poule, casser 3 à 4 œufs et mélanger."
      - "Chauffer le wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Faire dorer les oignons. Ajouter le jambon et les petits pois. Mélanger, réserver."
      - "Ajouter les œufs battus. Hacher grossièrement à la spatule en bois. Réincorporer les oignons, les petits pois et le jambon."
      - "Ajouter le riz. Cuire 4 à 5 minutes à feu doux en mélangeant régulièrement. Servir. Option : remplacer le jambon par des crevettes ou du tofu."
      cavernes:
      - "Dressage. Riz blanc, cuire, réserver."
      - "Cuisson. Petits pois, écosser. Eau bouillante, cuire très rapidement. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Oignon, éplucher, couper finement. Jambon, petits carrés."
      - "Mélange. Cul de poule. 3 à 4 œufs, casser, mélanger."
      - "Cuisson. Wok ou grande poêle creuse, feu vif, huile végétale. Oignons, dorer. Jambon, petits pois, ajouter. Mélanger, réserver."
      - "Cuisson. Œufs battus, ajouter. Spatule bois, hacher grossièrement. Oignons, petits pois, jambon, réincorporer."
      - "Finition. Riz, ajouter. 4 à 5 min feu doux, mélanger. Servir. Option : jambon, remplacer par crevettes ou tofu."
    kcal_per_serving: 447
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
  restes: ["Poêlée le lendemain"]
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"
---

# Riz cantonais

![[riz-cantonais.webp]]
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/riz-cantonais]]

## Ingrédients (4 personnes)

- 240 g de riz
- 3 œuf
- 1 oignon
- 4 tranche de jambon cuit
- 60 g de petits pois
-  huile végétale

## Préparation

1. Faites cuire du riz blanc et réservez-le.
2. Écossez vos petits pois et faites-les blanchir très rapidement dans de l’eau bouillante. Débarrassez-les dans de l’eau froide pour stopper la cuisson.
3. Épluchez un oignon et coupez-le finement. Coupez le jambon en petits carrés.
4. Dans un cul de poule, cassez 3 à 4 œufs et mélangez-les.
5. Faites chauffer votre wok (ou une grande poêle creuse) à feu vif avec de l’huile végétale. Une fois que l’huile est chaude, faites dorer les oignons. Ajoutez ensuite le jambon et les petits pois. Mélangez le tout puis réservez.
6. Ajoutez-y les œufs battus et à l’aide d’une spatule en bois, hachez grossièrement le tout.  Réincorporez ensuite les oignons, les petits pois et le jambon.
7. Ajoutez le riz à la préparation et laissez-le cuire avec le reste de la préparation pendant 4 à 5 minutes à feu doux en mélangeant régulièrement.

 
 

 
 Et vous voilà avec un magnifique riz cantonais ! Accompagnez avec ce que vous voulez et surtout adaptez à votre palais et à vos particularités alimentaires. Vous pouvez très bien remplacer le jambon par des petites crevettes ou bien du tofu, c’est tout autant délicieux !
