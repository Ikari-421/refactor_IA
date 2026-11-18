---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: panna-cotta
title: Panna cotta
lang: fr
description: "Panna cotta : recette italienne avec mangue, feuille de gélatine et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: sucré
tags:
- sucré
- dessert
- goûter
- mangue
image:
  url:
  alt: Panna cotta
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/panna-cotta.md
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
histoire: 'Panna cotta : « crème cuite », crème sucrée liée à la gélatine, moulée. Dessert du Piémont.
  Vanille, café ou autre parfum. Pas une panna cotta « inventée » à une date précise ici.

  '
fun_facts:
- text: 'Trop de gélatine, et c’est un caoutchouc ; trop peu, elle ne se démoule pas.

    '
  source_name: Usage
  source_url: null
- text: 'On chauffe juste assez pour fondre la gélatine : la crème ne doit pas bouillir.

    '
  source_name: Grokipedia, Panna cotta
  source_url: https://grokipedia.com/page/Panna_cotta
- text: 'Pour aller plus loin : l’histoire de « Panna cotta ».'
  source_name: Wikipédia
  source_url: https://fr.wikipedia.org/wiki/Panna_cotta
wines:
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: muscat
  award:
  why: Muscat perlé, voisin du Piémont — la crème, sans un vin tannique.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — la panna cotta, sans un champagne brut.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Muscat doux — la vanille et la crème.
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
      prep_min: 30
      cook_min: 20
      rest_min: 60
      total_min: 110
    equipment: &id002
    - casserole
    - saladier
    - fouet
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: feuille de gélatine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - qty: 1
      unit: piece
      item: badiane (anis étoilée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Plongez les feuilles de gélatine dans de l’eau froide. Pendant qu’elles ramollissent,
      faites chauffer la crème dans une casserole.
    - Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille
      (l’intérieur ainsi que la gousse de la vanille).
    - Cuisson. Après une dizaine de minutes, ajoutez la gélatine préalablement essorée entre vos mains
      (n’hésitez pas à regarder la vidéo ci-dessous pour mieux visualiser les gestes). Mélangez
      le tout à l’aide d’un fouet.
    - Mélange. Une fois que la gélatine a bien fondue, passez le mélange au chinois afin de retirer
      la badiane et la gousse de vanille.
    - Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses (c’est
      vous qui choisissez !). Placez ensuite les récipients au frigo pour que la préparation
      se fige.
    - Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié en brunoise et réservez.
    - Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Pour cela, mixez les morceaux de
      mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole.
    - Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet
      et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le
      tout au frigo.
    - Finition. Finalisez vos panna cotta en ajoutant la brunoise de mangue et en rappant un peu de
      zeste de citron vert. Et voilà, vous avez un dessert gourmand et bien frais qui sera
      parfait pour cet été. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les feuilles de gélatine dans de l’eau froide. Pendant qu’elles ramollissent, faites chauffer la crème dans une casserole."
      - "Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille (l’intérieur ainsi que la gousse de la vanille)."
      - "Cuisson. Après une dizaine de minutes, ajoutez la gélatine préalablement essorée entre vos mains. Mélangez le tout à l’aide d’un fouet."
      - "Mélange. Une fois que la gélatine a bien fondu, passez le mélange au chinois afin de retirer la badiane et la gousse de vanille."
      - "Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses, au choix. Placez ensuite les récipients au frigo pour que la préparation se fige."
      - "Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié [[brunoise|en brunoise]] et réservez."
      - "Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Mixez les morceaux de mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole."
      - "Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le tout au frigo."
      - "Finition. Finalisez vos panna cotta en ajoutant la [[brunoise|brunoise]] de mangue et en [[raper|râpant]] un peu de zeste de citron vert."
      pro:
      - "Plonger les feuilles de gélatine dans de l’eau froide. Pendant le ramollissement, chauffer la crème en casserole."
      - "Ajouter le sucre, de la badiane et la vanille (intérieur et gousse) dans la crème."
      - "Après une dizaine de minutes, ajouter la gélatine essorée entre les mains. Mélanger au fouet."
      - "Lorsque la gélatine a fondu, passer le mélange au chinois. Retirer la badiane et la gousse de vanille."
      - "Verser dans des verres, verrines, bols ou assiettes creuses, au choix. Placer au frigo pour figer."
      - "Éplucher la mangue. Couper en deux. Tailler la première moitié en brunoise. Réserver."
      - "Mixer l’autre moitié au robot. Chauffer le mélange en casserole."
      - "Ajouter l’agar-agar. Bouillir une à deux minutes. Mélanger au fouet. Verser la gelée dans les verrines, par dessus la crème figée. Frigo."
      - "Ajouter la brunoise de mangue. Râper un peu de zeste de citron vert."
      cavernes:
      - "Préparation. Feuilles gélatine, eau froide, plonger. Pendant ramollir : crème, casserole, chauffer."
      - "Cuisson. Casserole crème : sucre, badiane, vanille (intérieur et gousse), ajouter."
      - "Cuisson. Dizaine minutes. Gélatine essorée mains, ajouter. Fouet, mélanger."
      - "Mélange. Gélatine fondue. Chinois, passer. Badiane, gousse vanille, retirer."
      - "Mélange. Verres, verrines, bols ou assiettes creuses, choix, verser. Frigo, figer."
      - "Dressage. Mangue, éplucher. Deux, couper. Première moitié, brunoise, réserver."
      - "Mixage. Autre moitié, gelée mangue. Morceaux mangue, robot, mixer. Casserole, chauffer."
      - "Mélange. Agar-agar, ajouter. 1 à 2 minutes, bouillir. Fouet, mélanger. Gelée, verrines, dessus crème figée, verser. Frigo encore."
      - "Finition. Brunoise mangue, ajouter. peu zeste citron vert, râper."
    kcal_per_serving: 141
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
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
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1.5
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - qty: 1
      unit: piece
      item: badiane (anis étoilée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Plongez les feuilles de agar-agar dans de l’eau froide. Pendant qu’elles ramollissent,
      faites chauffer la crème dans une casserole.
    - Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille
      (l’intérieur ainsi que la gousse de la vanille).
    - Cuisson. Après une dizaine de minutes, ajoutez la agar-agar préalablement essorée entre vos mains
      (n’hésitez pas à regarder la vidéo ci-dessous pour mieux visualiser les gestes). Mélangez
      le tout à l’aide d’un fouet.
    - Mélange. Une fois que la agar-agar a bien fondue, passez le mélange au chinois afin de retirer
      la badiane et la gousse de vanille.
    - Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses (c’est
      vous qui choisissez !). Placez ensuite les récipients au frigo pour que la préparation
      se fige.
    - Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié en brunoise et réservez.
    - Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Pour cela, mixez les morceaux de
      mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole.
    - Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet
      et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le
      tout au frigo.
    - Finition. Finalisez vos panna cotta en ajoutant la brunoise de mangue et en rappant un peu de
      zeste de citron vert. Et voilà, vous avez un dessert gourmand et bien frais qui sera
      parfait pour cet été. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les feuilles de agar-agar dans de l’eau froide. Pendant qu’elles ramollissent, faites chauffer la crème dans une casserole."
      - "Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille (l’intérieur ainsi que la gousse de la vanille)."
      - "Cuisson. Après une dizaine de minutes, ajoutez la agar-agar préalablement essorée entre vos mains. Mélangez le tout à l’aide d’un fouet."
      - "Mélange. Une fois que la agar-agar a bien fondu, passez le mélange au chinois afin de retirer la badiane et la gousse de vanille."
      - "Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses, au choix. Placez ensuite les récipients au frigo pour que la préparation se fige."
      - "Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié [[brunoise|en brunoise]] et réservez."
      - "Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Mixez les morceaux de mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole."
      - "Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le tout au frigo."
      - "Finition. Finalisez vos panna cotta en ajoutant la [[brunoise|brunoise]] de mangue et en [[raper|râpant]] un peu de zeste de citron vert."
      pro:
      - "Plonger les feuilles de agar-agar dans de l’eau froide. Pendant le ramollissement, chauffer la crème en casserole."
      - "Ajouter le sucre, de la badiane et la vanille (intérieur et gousse) dans la crème."
      - "Après une dizaine de minutes, ajouter la agar-agar essorée entre les mains. Mélanger au fouet."
      - "Lorsque la agar-agar a fondu, passer le mélange au chinois. Retirer la badiane et la gousse de vanille."
      - "Verser dans des verres, verrines, bols ou assiettes creuses, au choix. Placer au frigo pour figer."
      - "Éplucher la mangue. Couper en deux. Tailler la première moitié en brunoise. Réserver."
      - "Mixer l’autre moitié au robot. Chauffer le mélange en casserole."
      - "Ajouter l’agar-agar. Bouillir une à deux minutes. Mélanger au fouet. Verser la gelée dans les verrines, par dessus la crème figée. Frigo."
      - "Ajouter la brunoise de mangue. Râper un peu de zeste de citron vert."
      cavernes:
      - "Préparation. Feuilles agar-agar, eau froide, plonger. Pendant ramollir : crème, casserole, chauffer."
      - "Cuisson. Casserole crème : sucre, badiane, vanille (intérieur et gousse), ajouter."
      - "Cuisson. Dizaine minutes. Agar-agar essorée mains, ajouter. Fouet, mélanger."
      - "Mélange. Agar-agar fondue. Chinois, passer. Badiane, gousse vanille, retirer."
      - "Mélange. Verres, verrines, bols ou assiettes creuses, choix, verser. Frigo, figer."
      - "Dressage. Mangue, éplucher. Deux, couper. Première moitié, brunoise, réserver."
      - "Mixage. Autre moitié, gelée mangue. Morceaux mangue, robot, mixer. Casserole, chauffer."
      - "Mélange. Agar-agar, ajouter. 1 à 2 minutes, bouillir. Fouet, mélanger. Gelée, verrines, dessus crème figée, verser. Frigo encore."
      - "Finition. Brunoise mangue, ajouter. peu zeste citron vert, râper."
    kcal_per_serving: 141
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
    - qty: 1
      unit: piece
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - qty: 1
      unit: piece
      item: badiane (anis étoilée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites chauffer la crème de soja ou d’avoine dans une casserole. Diluez l’agar-agar à part dans un peu d’eau froide.
    - Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille
      (l’intérieur ainsi que la gousse de la vanille).
    - Mélange. Après une dizaine de minutes, ajoutez l’agar-agar dilué. Mélangez au fouet et portez juste à ébullition une minute.
    - Mélange. Une fois l’agar-agar bien dissous, passez le mélange au chinois afin de retirer
      la badiane et la gousse de vanille.
    - Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses (c’est
      vous qui choisissez !). Placez ensuite les récipients au frigo pour que la préparation
      se fige.
    - Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié en brunoise et réservez.
    - Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Pour cela, mixez les morceaux de
      mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole.
    - Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet
      et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le
      tout au frigo.
    - Finition. Finalisez vos panna cotta en ajoutant la brunoise de mangue et en rappant un peu de
      zeste de citron vert. Et voilà, vous avez un dessert gourmand et bien frais qui sera
      parfait pour cet été. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer la crème de soja ou d’avoine dans une casserole. [[delayer|Délayez]] l’agar-agar à part dans un peu d’eau froide."
      - "Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille (l’intérieur ainsi que la gousse de la vanille)."
      - "Mélange. Après une dizaine de minutes, ajoutez l’agar-agar dilué. Mélangez au fouet et portez juste à ébullition une minute."
      - "Mélange. Une fois l’agar-agar bien dissous, passez le mélange au chinois afin de retirer la badiane et la gousse de vanille."
      - "Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses, au choix. Placez ensuite les récipients au frigo pour que la préparation se fige."
      - "Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié [[brunoise|en brunoise]] et réservez."
      - "Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Mixez les morceaux de mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole."
      - "Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le tout au frigo."
      - "Finition. Finalisez vos panna cotta en ajoutant la [[brunoise|brunoise]] de mangue et en [[raper|râpant]] un peu de zeste de citron vert."
      pro:
      - "Chauffer la crème de soja ou d’avoine en casserole. Délayer l’agar-agar à part dans un peu d’eau froide."
      - "Ajouter le sucre, de la badiane et la vanille (intérieur et gousse) dans la crème."
      - "Après une dizaine de minutes, ajouter l’agar-agar dilué. Mélanger au fouet. Porter juste à ébullition une minute."
      - "Lorsque l’agar-agar est bien dissous, passer le mélange au chinois. Retirer la badiane et la gousse de vanille."
      - "Verser dans des verres, verrines, bols ou assiettes creuses, au choix. Placer au frigo pour figer."
      - "Éplucher la mangue. Couper en deux. Tailler la première moitié en brunoise. Réserver."
      - "Mixer l’autre moitié au robot. Chauffer le mélange en casserole."
      - "Ajouter l’agar-agar. Bouillir une à deux minutes. Mélanger au fouet. Verser la gelée dans les verrines, par dessus la crème figée. Frigo."
      - "Ajouter la brunoise de mangue. Râper un peu de zeste de citron vert."
      cavernes:
      - "Cuisson. Crème de soja ou d’avoine, casserole, chauffer. Agar-agar, peu d’eau froide à part, diluer."
      - "Cuisson. Casserole crème : sucre, badiane, vanille (intérieur et gousse), ajouter."
      - "Mélange. Dizaine minutes. Agar-agar dilué, ajouter. Fouet, mélanger. Juste ébullition, minute."
      - "Mélange. Agar-agar dissous. Chinois, passer. Badiane, gousse vanille, retirer."
      - "Mélange. Verres, verrines, bols ou assiettes creuses, choix, verser. Frigo, figer."
      - "Dressage. Mangue, éplucher. Deux, couper. Première moitié, brunoise, réserver."
      - "Mixage. Autre moitié, gelée mangue. Morceaux mangue, robot, mixer. Casserole, chauffer."
      - "Mélange. Agar-agar, ajouter. 1 à 2 minutes, bouillir. Fouet, mélanger. Gelée, verrines, dessus crème figée, verser. Frigo encore."
      - "Finition. Brunoise mangue, ajouter. peu zeste citron vert, râper."
    kcal_per_serving: 126
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
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
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1.5
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - qty: 1
      unit: piece
      item: badiane (anis étoilée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Plongez les feuilles de agar-agar dans de l’eau froide. Pendant qu’elles ramollissent,
      faites chauffer la crème dans une casserole.
    - Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille
      (l’intérieur ainsi que la gousse de la vanille).
    - Cuisson. Après une dizaine de minutes, ajoutez la agar-agar préalablement essorée entre vos mains
      (n’hésitez pas à regarder la vidéo ci-dessous pour mieux visualiser les gestes). Mélangez
      le tout à l’aide d’un fouet.
    - Mélange. Une fois que la agar-agar a bien fondue, passez le mélange au chinois afin de retirer
      la badiane et la gousse de vanille.
    - Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses (c’est
      vous qui choisissez !). Placez ensuite les récipients au frigo pour que la préparation
      se fige.
    - Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié en brunoise et réservez.
    - Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Pour cela, mixez les morceaux de
      mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole.
    - Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet
      et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le
      tout au frigo.
    - Finition. Finalisez vos panna cotta en ajoutant la brunoise de mangue et en rappant un peu de
      zeste de citron vert. Et voilà, vous avez un dessert gourmand et bien frais qui sera
      parfait pour cet été. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les feuilles de agar-agar dans de l’eau froide. Pendant qu’elles ramollissent, faites chauffer la crème dans une casserole."
      - "Cuisson. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille (l’intérieur ainsi que la gousse de la vanille)."
      - "Cuisson. Après une dizaine de minutes, ajoutez la agar-agar préalablement essorée entre vos mains. Mélangez le tout à l’aide d’un fouet."
      - "Mélange. Une fois que la agar-agar a bien fondu, passez le mélange au chinois afin de retirer la badiane et la gousse de vanille."
      - "Mélange. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses, au choix. Placez ensuite les récipients au frigo pour que la préparation se fige."
      - "Dressage. Épluchez la mangue et coupez-la en deux. Coupez la première moitié [[brunoise|en brunoise]] et réservez."
      - "Mixage. Avec l’autre moitié, réalisez une gelée de mangue. Mixez les morceaux de mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole."
      - "Mélange. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le tout au frigo."
      - "Finition. Finalisez vos panna cotta en ajoutant la [[brunoise|brunoise]] de mangue et en [[raper|râpant]] un peu de zeste de citron vert."
      pro:
      - "Plonger les feuilles de agar-agar dans de l’eau froide. Pendant le ramollissement, chauffer la crème en casserole."
      - "Ajouter le sucre, de la badiane et la vanille (intérieur et gousse) dans la crème."
      - "Après une dizaine de minutes, ajouter la agar-agar essorée entre les mains. Mélanger au fouet."
      - "Lorsque la agar-agar a fondu, passer le mélange au chinois. Retirer la badiane et la gousse de vanille."
      - "Verser dans des verres, verrines, bols ou assiettes creuses, au choix. Placer au frigo pour figer."
      - "Éplucher la mangue. Couper en deux. Tailler la première moitié en brunoise. Réserver."
      - "Mixer l’autre moitié au robot. Chauffer le mélange en casserole."
      - "Ajouter l’agar-agar. Bouillir une à deux minutes. Mélanger au fouet. Verser la gelée dans les verrines, par dessus la crème figée. Frigo."
      - "Ajouter la brunoise de mangue. Râper un peu de zeste de citron vert."
      cavernes:
      - "Préparation. Feuilles agar-agar, eau froide, plonger. Pendant ramollir : crème, casserole, chauffer."
      - "Cuisson. Casserole crème : sucre, badiane, vanille (intérieur et gousse), ajouter."
      - "Cuisson. Dizaine minutes. Agar-agar essorée mains, ajouter. Fouet, mélanger."
      - "Mélange. Agar-agar fondue. Chinois, passer. Badiane, gousse vanille, retirer."
      - "Mélange. Verres, verrines, bols ou assiettes creuses, choix, verser. Frigo, figer."
      - "Dressage. Mangue, éplucher. Deux, couper. Première moitié, brunoise, réserver."
      - "Mixage. Autre moitié, gelée mangue. Morceaux mangue, robot, mixer. Casserole, chauffer."
      - "Mélange. Agar-agar, ajouter. 1 à 2 minutes, bouillir. Fouet, mélanger. Gelée, verrines, dessus crème figée, verser. Frigo encore."
      - "Finition. Brunoise mangue, ajouter. peu zeste citron vert, râper."
    kcal_per_serving: 141
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  pesco:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
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
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"

---

# Panna cotta
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/panna-cotta]]

## Ingrédients (4 personnes)

- 1 mangue
- 3 feuille de gélatine
- 40 cL de crème liquide
- 40 g de sucre
- 1 gousse de vanille
- 1 badiane (anis étoilée)
- 1 g d'agar-agar

## Préparation

1. Plongez les feuilles de gélatine dans de l’eau froide. Pendant qu’elles ramollissent, faites chauffer la crème dans une casserole.
2. Dans la casserole contenant la crème, ajoutez le sucre, de la badiane et la vanille (l’intérieur ainsi que la gousse de la vanille).
3. Après une dizaine de minutes, ajoutez la gélatine préalablement essorée entre vos mains (n’hésitez pas à regarder la vidéo ci-dessous pour mieux visualiser les gestes). Mélangez le tout à l’aide d’un fouet.
4. Mélange. Une fois que la gélatine a bien fondue, passez le mélange au chinois afin de retirer la badiane et la gousse de vanille.
5. Versez le mélange dans des verres, des verrines, des bols ou assiettes creuses (c’est vous qui choisissez !). Placez ensuite les récipients au frigo pour que la préparation se fige.
6. Épluchez la mangue et coupez-la en deux. Coupez la première moitié en brunoise et réservez.
7. Avec l’autre moitié, réalisez une gelée de mangue. Pour cela, mixez les morceaux de mangue dans un robot, puis faites chauffer le mélange obtenu dans une casserole.
8. Ajoutez l’agar-agar et laissez bouillir une à deux minutes. Mélangez à l’aide d’un fouet et versez la gelée dans les verrines, par dessus la crème figée. Placez de nouveau le tout au frigo.
9. Finalisez vos panna cotta en ajoutant la brunoise de mangue et en rappant un peu de zeste de citron vert.

 
 

 
 Et voilà, vous avez un dessert gourmand et bien frais qui sera parfait pour cet été. Bon appétit !
