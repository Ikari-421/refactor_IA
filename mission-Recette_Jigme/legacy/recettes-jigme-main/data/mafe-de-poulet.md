---
schema: recette-web-jigme/v2
slug: mafe-de-poulet
title: Mafé de poulet
lang: fr
description: "Mafé de poulet : recette ouest-africaine avec blanc de poulet, cuisse de poulet et pommes de terre, pour 4 personnes. Version maison."
cuisine: ouest-africaine
category: salé
tags:
- salé
- curry
- poulet
- blanc de poulet
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/mafe-de-poulet.webp
  alt: Mafé de poulet
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/mafe-de-poulet.md
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
    - from: paneer (cubes)
      to: tofu ferme
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
    note: 'Contient poisson (cabillaud (cubes)) : pas d’adaptation fiable.'
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
histoire: 'Mafé (maafe) : ragoût d’Afrique de l’Ouest à la pâte d’arachide. Le mot wolof mafé désigne
  la sauce d’arachide, plat surtout urbain au Sénégal, base souvent rattachée au Mali. On le confond parfois
  avec le tigadéguéna malinké ; le mafé tel qu’on le connaît est aussi un plat de l’époque coloniale.
  Ici, au poulet et au riz.

  '
fun_facts:
- text: 'L’arachide lie comme une béchamel : trop de pâte, la sauce colle ; trop peu, elle reste un bouillon.

    '
  source_name: Usage
  source_url: null
- text: 'Tomate, oignon, parfois chou ou patate douce : le mafé n’est pas qu’une viande nappée de beurre
    de cacahuète.

    '
  source_name: Grokipedia, Peanut stew
  source_url: https://grokipedia.com/page/Peanut_stew
- text: 'Pour aller plus loin : l’histoire de « Mafé de poulet ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Mafé
wines:
- name: Saint-Chinian
  producer: Clos Bagatelle
  origin: Saint-Chinian, Languedoc
  grapes: syrah, grenache
  award:
  why: Fruit, garrigue — le poulet à l’arachide, tanin souple.
- name: Chinon
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc, poivron — la sauce grasse, tanin vif.
- name: Alsace Pinot Gris
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le piment et l’arachide, un blanc qui calme.
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
      prep_min: 75
      cook_min: 50
      rest_min: 0
      total_min: 125
    equipment: &id002
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: blanc de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: cuisse de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
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
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: piment vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de volaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: beurre de cacahuète
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez vos morceaux de poulet dans un récipient. Épluchez et émincez l’oignon et l’ail,
      puis ajoutez le tout avec le poulet. Saupoudrez le tout d’une de curcuma, puis malaxez
      le poulet afin qu’il s’imprègne bien des autres ingrédients.
    - Cuisson. Passons à la pré-cuisson du poulet. Faites le saisir à feu doux dans une poêle avec
      un filet d’huile d’arachide. L’objectif ici est de colorer le poulet, pas de le cuire
      intégralement. Une fois joliment doré, débarrassez le poulet dans un récipient.
    - Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement
      le piment vert. Dans la même casserole utilisée pour le poulet, ajoutez à nouveau un
      filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5
      minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout.
    - Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère
      à soupe de beurre de cacahuète. Versez un peu de bouillon de volaille et mélangez. Transvasez
      votre mélange dans la casserole avant d’ajouter le reste du fond de volaille puis portez
      à ébullition.
    - Finition. Une fois que la préparation est en train de bouillir, ajoutez les morceaux de poulet.
      Baissez le feu et laissez mijoter pendant environ 45 minutes. Servez votre Mafé de poulet
      avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la
      coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez vos morceaux de poulet dans un récipient. Épluchez et émincez l’oignon et l’ail, puis ajoutez le tout avec le poulet. Saupoudrez le tout d’une de curcuma, puis malaxez le poulet afin qu’il s’imprègne bien des autres ingrédients."
      - "Cuisson. Passons à la pré-cuisson du poulet. Faites le saisir à feu doux dans une poêle avec un filet d’huile d’arachide. L’objectif ici est de colorer le poulet, pas de le cuire intégralement. Une fois joliment doré, débarrassez le poulet dans un récipient."
      - "Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement le piment vert. Dans la même casserole utilisée pour le poulet, ajoutez à nouveau un filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5 minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout."
      - "Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Versez un peu de bouillon de volaille et mélangez. Transvasez votre mélange dans la casserole avant d’ajouter le reste du fond de volaille puis portez à ébullition."
      - "Finition. Une fois que la préparation est en train de bouillir, ajoutez les morceaux de poulet. Baissez le feu et [[mijoter|laissez mijoter]] pendant environ 45 minutes. Servez votre Mafé de poulet avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !"
      pro:
      - "Placer les morceaux de poulet dans un récipient. Éplucher et émincer l’oignon et l’ail. Ajouter au poulet. Saupoudrer d’une de curcuma. Malaxer pour imprégner."
      - "Saisir le poulet à feu doux dans une poêle avec un filet d’huile d’arachide, pour colorer, pas cuire intégralement. Une fois doré, débarrasser dans un récipient."
      - "Éplucher les carottes et les pommes de terre. Tailler grossièrement. Tailler finement le piment vert. Dans la même casserole utilisée pour le poulet, ajouter un filet d’huile d’arachide. Faire revenir les légumes à feux doux environ 5 minutes. Ajouter thym et coriandre hachée. Mélanger."
      - "Dans un autre récipient, verser du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Verser un peu de bouillon de volaille. Mélanger. Transvaser dans la casserole. Ajouter le reste du fond de volaille. Porter à ébullition."
      - "Dès l’ébullition, ajouter les morceaux de poulet. Baisser le feu. Mijoter environ 45 minutes. Servir avec du riz blanc. Coriandre fraîche en fin de dressage."
      cavernes:
      - "Préparation. Morceaux poulet, récipient. Oignon, ail, éplucher, émincer. Ajouter, poulet. Curcuma, saupoudrer. Poulet, malaxer, imprégner."
      - "Cuisson. Pré-cuisson poulet. Poêle, feu doux, filet huile d’arachide, saisir. Colorer, pas cuire intégralement. Doré. Débarrasser, récipient."
      - "Cuisson. Carottes, pommes de terre, éplucher, tailler grossièrement. Piment vert, tailler finement. Même casserole poulet. Filet huile d’arachide. Légumes, feux doux, environ 5 min, revenir. Thym, coriandre hachée, ajouter. Mélanger."
      - "Cuisson. Autre récipient. Concentré tomates. Généreuse cuillère soupe beurre cacahuète, 1 ou 2. Peu bouillon volaille, verser, mélanger. Transvaser, casserole. Reste fond volaille, ajouter. Ébullition."
      - "Finition. Préparation, bouillir. Morceaux poulet, ajouter. Feu, baisser. Mijoter environ 45 min. Riz blanc, servir. Coriandre fraîche, fin dressage. Bon appétit."
    kcal_per_serving: 655
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: paneer (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
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
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: piment vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
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
    - qty: 2
      unit: cas
      item: beurre de cacahuète
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez le paneer (ou le tofu ferme) en morceaux dans un récipient. Épluchez et émincez l’oignon et l’ail, ajoutez-les. Saupoudrez de curcuma et malaxez pour imprégner.
    - Dressage. Faites saisir le paneer à feu doux avec un filet d’huile d’arachide, juste pour le dorer. Réservez.
    - Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement
      le piment vert. Dans la même casserole, ajoutez à nouveau un
      filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5
      minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout.
    - Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère
      à soupe de beurre de cacahuète. Versez un peu de bouillon de légumes et mélangez. Transvasez
      votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes puis
      portez à ébullition.
    - Dressage. Une fois que la préparation est en train de bouillir, ajoutez le paneer. Baissez le feu et laissez mijoter environ 45 minutes. Servez avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la
      coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez le paneer (ou le tofu ferme) en morceaux dans un récipient. Épluchez et émincez l’oignon et l’ail, ajoutez-les. Saupoudrez de curcuma et malaxez pour imprégner."
      - "Dressage. Faites saisir le paneer à feu doux avec un filet d’huile d’arachide, juste pour le dorer. Réservez."
      - "Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement le piment vert. Dans la même casserole, ajoutez à nouveau un filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5 minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout."
      - "Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Versez un peu de bouillon de légumes et mélangez. Transvasez votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes puis portez à ébullition."
      - "Dressage. Une fois que la préparation est en train de bouillir, ajoutez le paneer. Baissez le feu et [[mijoter|laissez mijoter]] environ 45 minutes. Servez avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !"
      pro:
      - "Placer le paneer (ou le tofu ferme) en morceaux dans un récipient. Éplucher et émincer l’oignon et l’ail. Ajouter. Saupoudrer de curcuma. Malaxer pour imprégner."
      - "Saisir le paneer à feu doux avec un filet d’huile d’arachide, juste pour dorer. Réserver."
      - "Éplucher les carottes et les pommes de terre. Tailler grossièrement. Tailler finement le piment vert. Dans la même casserole, ajouter un filet d’huile d’arachide. Faire revenir les légumes à feux doux environ 5 minutes. Ajouter thym et coriandre hachée. Mélanger."
      - "Dans un autre récipient, verser du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Verser un peu de bouillon de légumes. Mélanger. Transvaser dans la casserole. Ajouter le reste du bouillon de légumes. Porter à ébullition."
      - "Dès l’ébullition, ajouter le paneer. Baisser le feu. Mijoter environ 45 minutes. Servir avec du riz blanc. Coriandre fraîche en fin de dressage."
      cavernes:
      - "Préparation. Paneer ou tofu ferme, morceaux, récipient. Oignon, ail, éplucher, émincer, ajouter. Curcuma, saupoudrer. Malaxer, imprégner."
      - "Dressage. Paneer, feu doux, filet huile d’arachide, saisir, dorer. Réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, tailler grossièrement. Piment vert, tailler finement. Même casserole. Filet huile d’arachide. Légumes, feux doux, environ 5 min, revenir. Thym, coriandre hachée, ajouter. Mélanger."
      - "Cuisson. Autre récipient. Concentré tomates. Généreuse cuillère soupe beurre cacahuète, 1 ou 2. Peu bouillon légumes, verser, mélanger. Transvaser, casserole. Reste bouillon légumes, ajouter. Ébullition."
      - "Dressage. Préparation, bouillir. Paneer, ajouter. Feu, baisser. Mijoter environ 45 min. Riz blanc, servir. Coriandre fraîche, fin dressage. Bon appétit."
    kcal_per_serving: 526
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
    - soja
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
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
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: piment vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
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
    - qty: 2
      unit: cas
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez le tofu ferme en morceaux dans un récipient. Épluchez et émincez l’oignon et l’ail, ajoutez-les au tofu. Saupoudrez de curcuma et malaxez pour imprégner.
    - Dressage. Faites saisir le tofu à feu doux avec un filet d’huile d’arachide, juste pour le dorer. Réservez.
    - Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement
      le piment vert. Dans la même casserole, ajoutez à nouveau un
      filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5
      minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout.
    - Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère
      à soupe de margarine végétale. Versez un peu de bouillon de légumes et mélangez.
      Transvasez votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes
      puis portez à ébullition.
    - Dressage. Une fois que la préparation est en train de bouillir, ajoutez le tofu. Baissez le feu et laissez mijoter environ 45 minutes. Servez avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la
      coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez le tofu ferme en morceaux dans un récipient. Épluchez et émincez l’oignon et l’ail, ajoutez-les au tofu. Saupoudrez de curcuma et malaxez pour imprégner."
      - "Dressage. Faites saisir le tofu à feu doux avec un filet d’huile d’arachide, juste pour le dorer. Réservez."
      - "Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement le piment vert. Dans la même casserole, ajoutez à nouveau un filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5 minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout."
      - "Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère à soupe de margarine végétale. Versez un peu de bouillon de légumes et mélangez. Transvasez votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes puis portez à ébullition."
      - "Dressage. Une fois que la préparation est en train de bouillir, ajoutez le tofu. Baissez le feu et [[mijoter|laissez mijoter]] environ 45 minutes. Servez avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !"
      pro:
      - "Placer le tofu ferme en morceaux dans un récipient. Éplucher et émincer l’oignon et l’ail. Ajouter au tofu. Saupoudrer de curcuma. Malaxer pour imprégner."
      - "Saisir le tofu à feu doux avec un filet d’huile d’arachide, juste pour dorer. Réserver."
      - "Éplucher les carottes et les pommes de terre. Tailler grossièrement. Tailler finement le piment vert. Dans la même casserole, ajouter un filet d’huile d’arachide. Faire revenir les légumes à feux doux environ 5 minutes. Ajouter thym et coriandre hachée. Mélanger."
      - "Dans un autre récipient, verser du concentré de tomates et une (ou deux) généreuse cuillère à soupe de margarine végétale. Verser un peu de bouillon de légumes. Mélanger. Transvaser dans la casserole. Ajouter le reste du bouillon de légumes. Porter à ébullition."
      - "Dès l’ébullition, ajouter le tofu. Baisser le feu. Mijoter environ 45 minutes. Servir avec du riz blanc. Coriandre fraîche en fin de dressage."
      cavernes:
      - "Préparation. Tofu ferme, morceaux, récipient. Oignon, ail, éplucher, émincer, ajouter, tofu. Curcuma, saupoudrer. Malaxer, imprégner."
      - "Dressage. Tofu, feu doux, filet huile d’arachide, saisir, dorer. Réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, tailler grossièrement. Piment vert, tailler finement. Même casserole. Filet huile d’arachide. Légumes, feux doux, environ 5 min, revenir. Thym, coriandre hachée, ajouter. Mélanger."
      - "Cuisson. Autre récipient. Concentré tomates. Généreuse cuillère soupe margarine végétale, 1 ou 2. Peu bouillon légumes, verser, mélanger. Transvaser, casserole. Reste bouillon légumes, ajouter. Ébullition."
      - "Dressage. Préparation, bouillir. Tofu, ajouter. Feu, baisser. Mijoter environ 45 min. Riz blanc, servir. Coriandre fraîche, fin dressage. Bon appétit."
    kcal_per_serving: 555
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
    - qty: 2
      unit: piece
      item: cabillaud (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
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
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: piment vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
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
    - qty: 2
      unit: cas
      item: beurre de cacahuète
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez vos morceaux de poulet dans un récipient. Épluchez et émincez l’oignon et l’ail,
      puis ajoutez le tout avec le poulet. Saupoudrez le tout d’une de curcuma, puis malaxez
      le poulet afin qu’il s’imprègne bien des autres ingrédients.
    - Cuisson. Passons à la pré-cuisson du poulet. Faites le saisir à feu doux dans une poêle avec
      un filet d’huile d’arachide. L’objectif ici est de colorer le poulet, pas de le cuire
      intégralement. Une fois joliment doré, débarrassez le poulet dans un récipient.
    - Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement
      le piment vert. Dans la même casserole utilisée pour le poulet, ajoutez à nouveau un
      filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5
      minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout.
    - Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère
      à soupe de beurre de cacahuète. Versez un peu de bouillon de légumes et mélangez. Transvasez
      votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes puis
      portez à ébullition.
    - Finition. Une fois que la préparation est en train de bouillir, ajoutez les morceaux de poulet.
      Baissez le feu et laissez mijoter pendant environ 45 minutes. Servez votre Mafé de poulet
      avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la
      coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez vos morceaux de poulet dans un récipient. Épluchez et émincez l’oignon et l’ail, puis ajoutez le tout avec le poulet. Saupoudrez le tout d’une de curcuma, puis malaxez le poulet afin qu’il s’imprègne bien des autres ingrédients."
      - "Cuisson. Passons à la pré-cuisson du poulet. Faites le saisir à feu doux dans une poêle avec un filet d’huile d’arachide. L’objectif ici est de colorer le poulet, pas de le cuire intégralement. Une fois joliment doré, débarrassez le poulet dans un récipient."
      - "Cuisson. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement le piment vert. Dans la même casserole utilisée pour le poulet, ajoutez à nouveau un filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5 minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout."
      - "Cuisson. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Versez un peu de bouillon de légumes et mélangez. Transvasez votre mélange dans la casserole avant d’ajouter le reste du bouillon de légumes puis portez à ébullition."
      - "Finition. Une fois que la préparation est en train de bouillir, ajoutez les morceaux de poulet. Baissez le feu et [[mijoter|laissez mijoter]] pendant environ 45 minutes. Servez votre Mafé de poulet avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !"
      pro:
      - "Placer les morceaux de poulet dans un récipient. Éplucher et émincer l’oignon et l’ail. Ajouter au poulet. Saupoudrer d’une de curcuma. Malaxer pour imprégner."
      - "Saisir le poulet à feu doux dans une poêle avec un filet d’huile d’arachide, pour colorer, pas cuire intégralement. Une fois doré, débarrasser dans un récipient."
      - "Éplucher les carottes et les pommes de terre. Tailler grossièrement. Tailler finement le piment vert. Dans la même casserole utilisée pour le poulet, ajouter un filet d’huile d’arachide. Faire revenir les légumes à feux doux environ 5 minutes. Ajouter thym et coriandre hachée. Mélanger."
      - "Dans un autre récipient, verser du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Verser un peu de bouillon de légumes. Mélanger. Transvaser dans la casserole. Ajouter le reste du bouillon de légumes. Porter à ébullition."
      - "Dès l’ébullition, ajouter les morceaux de poulet. Baisser le feu. Mijoter environ 45 minutes. Servir avec du riz blanc. Coriandre fraîche en fin de dressage."
      cavernes:
      - "Préparation. Morceaux poulet, récipient. Oignon, ail, éplucher, émincer. Ajouter, poulet. Curcuma, saupoudrer. Poulet, malaxer, imprégner."
      - "Cuisson. Pré-cuisson poulet. Poêle, feu doux, filet huile d’arachide, saisir. Colorer, pas cuire intégralement. Doré. Débarrasser, récipient."
      - "Cuisson. Carottes, pommes de terre, éplucher, tailler grossièrement. Piment vert, tailler finement. Même casserole poulet. Filet huile d’arachide. Légumes, feux doux, environ 5 min, revenir. Thym, coriandre hachée, ajouter. Mélanger."
      - "Cuisson. Autre récipient. Concentré tomates. Généreuse cuillère soupe beurre cacahuète, 1 ou 2. Peu bouillon légumes, verser, mélanger. Transvaser, casserole. Reste bouillon légumes, ajouter. Ébullition."
      - "Finition. Préparation, bouillir. Morceaux poulet, ajouter. Feu, baisser. Mijoter environ 45 min. Riz blanc, servir. Coriandre fraîche, fin dressage. Bon appétit."
    kcal_per_serving: 526
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
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"
---

# Mafé de poulet

![[mafe-de-poulet.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/mafe-de-poulet]]

## Ingrédients (4 personnes)

- 2 blanc de poulet
- 2 cuisse de poulet
- 300 g de pommes de terre
- 240 g de riz blanc
- 2 carotte
- 1 oignon
- 2 gousse d'ail
- 1 piment vert
- 70 g de concentré de tomate
- 1 L de bouillon de volaille
- 2 c.à.s de beurre de cacahuète
- 1 c.à.s de curcuma en poudre
-  huile d'arachide
-  coriandre
-  thym

## Préparation

1. Placez vos morceaux de poulet dans un récipient. Épluchez et émincez l’oignon et l’ail, puis ajoutez le tout avec le poulet. Saupoudrez le tout d’une de curcuma, puis malaxez le poulet afin qu’il s’imprègne bien des autres ingrédients.
2. Passons à la pré-cuisson du poulet. Faites le saisir à feu doux dans une poêle avec un filet d’huile d’arachide. L’objectif ici est de colorer le poulet, pas de le cuire intégralement. Une fois joliment doré, débarrassez le poulet dans un récipient.
3. Épluchez les carottes et les pommes de terre et taillez-les grossièrement. Taillez finement le piment vert. Dans la même casserole utilisée pour le poulet, ajoutez à nouveau un filet d’huile d’arachide et faites revenir les légumes à feux doux pendant environ 5 minutes. Ajoutez du thym et de la coriandre préalablement hachée et mélangez le tout.
4. Dans un autre récipient, versez du concentré de tomates et une (ou deux) généreuse cuillère à soupe de beurre de cacahuète. Versez un peu de bouillon de volaille et mélangez. Transvasez votre mélange dans la casserole avant d’ajouter le reste du fond de volaille puis portez à ébullition.
5. Une fois que la préparation est en train de bouillir, ajoutez les morceaux de poulet. Baissez le feu et laissez mijoter pendant environ 45 minutes.

 
 

 
 Servez votre Mafé de poulet avec du riz blanc (ce sera délicieux avec la sauce !) N’hésitez-pas à ajouter de la coriandre fraîche à la fin du dressage pour magnifier votre plat. Bon appétit !
