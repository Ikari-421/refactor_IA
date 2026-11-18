---
schema: recette-web-jigme/v2
slug: vichyssoise
title: Vichyssoise
lang: fr
description: "Vichyssoise : recette française avec blancs de poireaux, pommes de terre et fond de volaille, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- soupe
- blancs de poireaux
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/vichyssoise.jpg
  alt: Vichyssoise
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/vichyssoise.md
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
histoire: 'Vichyssoise : potage froid poireau-pomme de terre, crème. On raconte que Louis Diat, au Ritz-Carlton
  de New York, l’aurait servie vers 1917, d’après le potage Parmentier de son enfance. Une source, donc
  « vers ».

  '
fun_facts:
- text: >
    On sert très froide : tiède, ce n’est plus une vichyssoise, c’est un potage
    Parmentier.
  source_name: Grokipedia, Vichyssoise
  source_url: https://grokipedia.com/page/Vichyssoise
- text: >
    La ciboulette se ciseau au dernier moment, sur la crème.
  source_name: Grokipedia, Leek soup
  source_url: https://grokipedia.com/page/Leek_soup
wines:
- name: Sancerre
  producer: Henri Bourgeois
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — le poireau froid, acidité nette.
- name: Chablis
  producer: La Chablisienne
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre — la crème, sans bois marqué.
- name: Crémant de Bourgogne
  producer: Louis Bouillot
  origin: Nuits-Saint-Georges, Bourgogne
  grapes: pinot noir, chardonnay
  award:
  why: Bulles — l’entrée froide, sans un champagne de prestige.
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
      prep_min: 60
      cook_min: 40
      rest_min: 0
      total_min: 100
    equipment: &id002
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: blancs de poireaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de volaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
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
    - qty:
      unit:
      item: sel et poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux,
      puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra
      servir pour d’autres recettes.
    - Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre.
      Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min,
      en remuant de temps en temps, jusqu’à ce qu’ils soient tendres.
    - Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement.
    - Cuisson. Ajoutez les pommes de terre dans la casserole et faites les revenir légèrement. Versez
      ensuite le fond de volaille, puis laissez mijoter le tout à feu doux pendant 25 à 30
      min.
    - Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez…et c’est
      prêt ! Si vous préférez la manger froide, laissez reposer le mélange environ 2h au frigo
      avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au
      congélateur. Au moment de servir, n’hésitez pas à garnir vos bols de ciboulette fraîche
      ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux, puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra servir pour d’autres recettes."
      - "Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres."
      - "Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement."
      - "Cuisson. Ajoutez les pommes de terre dans la casserole et faites-les revenir légèrement. Versez ensuite le fond de volaille, puis [[mijoter|laissez mijoter]] le tout à feu doux pendant 25 à 30 min."
      - "Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez. Si vous préférez la manger froide, laissez reposer le mélange environ 2 h au frigo avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au congélateur. Au moment de servir, garnissez vos bols de ciboulette fraîche ciselée."
      pro:
      - "Nettoyer les poireaux en retirant les feuilles abimées. Découper les blancs en morceaux, rincer à l’eau froide. Conserver la partie verte."
      - "Dans une grande casserole, faire chauffer les blancs de poireaux avec une noix de beurre. Assaisonner (sel et poivre). Cuire environ 10 min, en remuant de temps en temps, jusqu’à tendreté."
      - "Pendant ce temps, éplucher les pommes de terre, les couper grossièrement."
      - "Ajouter les pommes de terre dans la casserole et les faire revenir légèrement. Verser le fond de volaille, puis laisser mijoter à feu doux 25 à 30 min."
      - "Mixer la soupe. Incorporer la crème, mélanger. Option froide : reposer environ 2 h au frigo. Conservation : 7 jours au frigo, 3 mois au congélateur. Servir : garnir de ciboulette fraîche ciselée."
      cavernes:
      - "Préparation. Poireaux, nettoyer. Feuilles abimées, retirer. Blancs, morceaux, découper. Eau froide, rincer. Partie verte, conserver."
      - "Cuisson. Grande casserole. Blancs poireaux, noix beurre, chauffer. Sel, poivre, assaisonner. Environ 10 min, cuire. Temps en temps, remuer. Tendres."
      - "Cuisson. Pommes terre, éplucher. Grossièrement, couper."
      - "Cuisson. Pommes terre, casserole, ajouter. Légèrement, faire revenir. fond volaille, verser. Feu doux, 25 à 30 min, mijoter."
      - "Mixage. Cuisson terminée, soupe, mixer. crème, incorporer. Mélanger. Option : froide, mélange environ 2 h frigo, reposer. Conservation : 7 jours frigo, 3 mois congélateur. Servir : bols, ciboulette fraîche ciselée, garnir."
    kcal_per_serving: 575
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
    - qty: 500
      unit: g
      item: blancs de poireaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: g
      item: pommes de terre
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
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
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
    - qty:
      unit:
      item: sel et poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux,
      puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra
      servir pour d’autres recettes.
    - Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre.
      Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min,
      en remuant de temps en temps, jusqu’à ce qu’ils soient tendres.
    - Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement.
    - Cuisson. Ajoutez les pommes de terre dans la casserole et faites les revenir légèrement. Versez
      ensuite le bouillon de légumes, puis laissez mijoter le tout à feu doux pendant 25 à
      30 min.
    - Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez…et c’est
      prêt ! Si vous préférez la manger froide, laissez reposer le mélange environ 2h au frigo
      avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au
      congélateur. Au moment de servir, n’hésitez pas à garnir vos bols de ciboulette fraîche
      ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux, puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra servir pour d’autres recettes."
      - "Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres."
      - "Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement."
      - "Cuisson. Ajoutez les pommes de terre dans la casserole et faites-les revenir légèrement. Versez ensuite le bouillon de légumes, puis [[mijoter|laissez mijoter]] le tout à feu doux pendant 25 à 30 min."
      - "Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez. Si vous préférez la manger froide, laissez reposer le mélange environ 2 h au frigo avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au congélateur. Au moment de servir, garnissez vos bols de ciboulette fraîche ciselée."
      pro:
      - "Nettoyer les poireaux en retirant les feuilles abimées. Découper les blancs en morceaux, rincer à l’eau froide. Conserver la partie verte."
      - "Dans une grande casserole, faire chauffer les blancs de poireaux avec une noix de beurre. Assaisonner (sel et poivre). Cuire environ 10 min, en remuant de temps en temps, jusqu’à tendreté."
      - "Pendant ce temps, éplucher les pommes de terre, les couper grossièrement."
      - "Ajouter les pommes de terre dans la casserole et les faire revenir légèrement. Verser le bouillon de légumes, puis laisser mijoter à feu doux 25 à 30 min."
      - "Mixer la soupe. Incorporer la crème, mélanger. Option froide : reposer environ 2 h au frigo. Conservation : 7 jours au frigo, 3 mois au congélateur. Servir : garnir de ciboulette fraîche ciselée."
      cavernes:
      - "Préparation. Poireaux, nettoyer. Feuilles abimées, retirer. Blancs, morceaux, découper. Eau froide, rincer. Partie verte, conserver."
      - "Cuisson. Grande casserole. Blancs poireaux, noix beurre, chauffer. Sel, poivre, assaisonner. Environ 10 min, cuire. Temps en temps, remuer. Tendres."
      - "Cuisson. Pommes terre, éplucher. Grossièrement, couper."
      - "Cuisson. Pommes terre, casserole, ajouter. Légèrement, faire revenir. bouillon légumes, verser. Feu doux, 25 à 30 min, mijoter."
      - "Mixage. Cuisson terminée, soupe, mixer. crème, incorporer. Mélanger. Option : froide, mélange environ 2 h frigo, reposer. Conservation : 7 jours frigo, 3 mois congélateur. Servir : bols, ciboulette fraîche ciselée, garnir."
    kcal_per_serving: 575
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
    - qty: 500
      unit: g
      item: blancs de poireaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
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
    - qty:
      unit:
      item: sel et poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux,
      puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra
      servir pour d’autres recettes.
    - Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de margarine
      végétale. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les
      cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres.
    - Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement.
    - Cuisson. Ajoutez les pommes de terre dans la casserole et faites les revenir légèrement. Versez
      ensuite le fond de légumes, puis laissez mijoter le tout à feu doux pendant 25 à 30
      min.
    - Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème de soja ou d’avoine, mélangez…et c’est
      prêt ! Si vous préférez la manger froide, laissez reposer le mélange environ 2h au frigo
      avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au
      congélateur. Au moment de servir, n’hésitez pas à garnir vos bols de ciboulette fraîche
      ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux, puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra servir pour d’autres recettes."
      - "Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de margarine végétale. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres."
      - "Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement."
      - "Cuisson. Ajoutez les pommes de terre dans la casserole et faites-les revenir légèrement. Versez ensuite le fond de légumes, puis [[mijoter|laissez mijoter]] le tout à feu doux pendant 25 à 30 min."
      - "Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème de soja ou d’avoine, mélangez. Si vous préférez la manger froide, laissez reposer le mélange environ 2 h au frigo avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au congélateur. Au moment de servir, garnissez vos bols de ciboulette fraîche ciselée."
      pro:
      - "Nettoyer les poireaux en retirant les feuilles abimées. Découper les blancs en morceaux, rincer à l’eau froide. Conserver la partie verte."
      - "Dans une grande casserole, faire chauffer les blancs de poireaux avec une noix de margarine végétale. Assaisonner (sel et poivre). Cuire environ 10 min, en remuant de temps en temps, jusqu’à tendreté."
      - "Pendant ce temps, éplucher les pommes de terre, les couper grossièrement."
      - "Ajouter les pommes de terre dans la casserole et les faire revenir légèrement. Verser le fond de légumes, puis laisser mijoter à feu doux 25 à 30 min."
      - "Mixer la soupe. Incorporer la crème de soja ou d’avoine, mélanger. Option froide : reposer environ 2 h au frigo. Conservation : 7 jours au frigo, 3 mois au congélateur. Servir : garnir de ciboulette fraîche ciselée."
      cavernes:
      - "Préparation. Poireaux, nettoyer. Feuilles abimées, retirer. Blancs, morceaux, découper. Eau froide, rincer. Partie verte, conserver."
      - "Cuisson. Grande casserole. Blancs poireaux, noix margarine végétale, chauffer. Sel, poivre, assaisonner. Environ 10 min, cuire. Temps en temps, remuer. Tendres."
      - "Cuisson. Pommes terre, éplucher. Grossièrement, couper."
      - "Cuisson. Pommes terre, casserole, ajouter. Légèrement, faire revenir. fond légumes, verser. Feu doux, 25 à 30 min, mijoter."
      - "Mixage. Cuisson terminée, soupe, mixer. crème soja ou avoine, incorporer. Mélanger. Option : froide, mélange environ 2 h frigo, reposer. Conservation : 7 jours frigo, 3 mois congélateur. Servir : bols, ciboulette fraîche ciselée, garnir."
    kcal_per_serving: 421
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
    - qty: 500
      unit: g
      item: blancs de poireaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: g
      item: pommes de terre
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
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
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
    - qty:
      unit:
      item: sel et poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux,
      puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra
      servir pour d’autres recettes.
    - Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre.
      Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min,
      en remuant de temps en temps, jusqu’à ce qu’ils soient tendres.
    - Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement.
    - Cuisson. Ajoutez les pommes de terre dans la casserole et faites les revenir légèrement. Versez
      ensuite le bouillon de légumes, puis laissez mijoter le tout à feu doux pendant 25 à
      30 min.
    - Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez…et c’est
      prêt ! Si vous préférez la manger froide, laissez reposer le mélange environ 2h au frigo
      avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au
      congélateur. Au moment de servir, n’hésitez pas à garnir vos bols de ciboulette fraîche
      ciselée. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux, puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra servir pour d’autres recettes."
      - "Cuisson. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres."
      - "Cuisson. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement."
      - "Cuisson. Ajoutez les pommes de terre dans la casserole et faites-les revenir légèrement. Versez ensuite le bouillon de légumes, puis [[mijoter|laissez mijoter]] le tout à feu doux pendant 25 à 30 min."
      - "Mixage. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez. Si vous préférez la manger froide, laissez reposer le mélange environ 2 h au frigo avant de déguster. La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au congélateur. Au moment de servir, garnissez vos bols de ciboulette fraîche ciselée."
      pro:
      - "Nettoyer les poireaux en retirant les feuilles abimées. Découper les blancs en morceaux, rincer à l’eau froide. Conserver la partie verte."
      - "Dans une grande casserole, faire chauffer les blancs de poireaux avec une noix de beurre. Assaisonner (sel et poivre). Cuire environ 10 min, en remuant de temps en temps, jusqu’à tendreté."
      - "Pendant ce temps, éplucher les pommes de terre, les couper grossièrement."
      - "Ajouter les pommes de terre dans la casserole et les faire revenir légèrement. Verser le bouillon de légumes, puis laisser mijoter à feu doux 25 à 30 min."
      - "Mixer la soupe. Incorporer la crème, mélanger. Option froide : reposer environ 2 h au frigo. Conservation : 7 jours au frigo, 3 mois au congélateur. Servir : garnir de ciboulette fraîche ciselée."
      cavernes:
      - "Préparation. Poireaux, nettoyer. Feuilles abimées, retirer. Blancs, morceaux, découper. Eau froide, rincer. Partie verte, conserver."
      - "Cuisson. Grande casserole. Blancs poireaux, noix beurre, chauffer. Sel, poivre, assaisonner. Environ 10 min, cuire. Temps en temps, remuer. Tendres."
      - "Cuisson. Pommes terre, éplucher. Grossièrement, couper."
      - "Cuisson. Pommes terre, casserole, ajouter. Légèrement, faire revenir. bouillon légumes, verser. Feu doux, 25 à 30 min, mijoter."
      - "Mixage. Cuisson terminée, soupe, mixer. crème, incorporer. Mélanger. Option : froide, mélange environ 2 h frigo, reposer. Conservation : 7 jours frigo, 3 mois congélateur. Servir : bols, ciboulette fraîche ciselée, garnir."
    kcal_per_serving: 575
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
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Vichyssoise
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/vichyssoise]]

## Ingrédients (4 personnes)

- 500 g de blancs de poireaux
- 1 kg de pommes de terre
- 1 L de fond de volaille
- 250 ml de crème liquide
-  ciboulette fraîche
-  beurre
-  sel et poivre

## Préparation

1. Nettoyez vos poireaux en retirant les feuilles abimées. Découpez les blancs en morceaux, puis rincez-les à l’eau froide. Conservez la partie verte des poireaux, elle pourra servir pour d’autres recettes.
2. Dans une grande casserole, faites chauffer les blancs de poireaux avec une noix de beurre. Assaisonnez (sel et poivre) selon vos préférences. Laissez-les cuire environ 10 min, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres.
3. Pendant ce temps, épluchez vos pommes de terre, puis coupez-les grossièrement.
4. Ajoutez les pommes de terre dans la casserole et faites les revenir légèrement. Versez ensuite le fond de volaille, puis laissez mijoter le tout à feu doux pendant 25 à 30 min.
5. Une fois la cuisson terminée, mixez votre soupe. Incorporez la crème, mélangez…et c’est prêt ! Si vous préférez la manger froide, laissez reposer le mélange environ 2h au frigo avant de déguster.

 
 

 
 La Vichyssoise se conserve jusqu’à 7 jours au frigo et 3 mois au congélateur. Au moment de servir, n’hésitez pas à garnir vos bols de ciboulette fraîche ciselée. Bon appétit !
