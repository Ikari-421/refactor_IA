---
schema: recette-web-jigme/v2
slug: veloute-de-petit-pois
title: Velouté de petit pois
lang: fr
description: "Velouté de petit pois : recette française avec petits pois frais, bouillon et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- soupe
- légumes
- printemps
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/veloute-de-petit-pois.jpg
  alt: Velouté de petit pois
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/veloute-de-petit-pois.md
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
    - from: croutons (facultatif)
      to: croûtons de pain sans gluten
      note:
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
histoire: 'Velouté de petits pois, parfois menthe, chaud ou froid. Les pois frais au printemps ; le pois
  cassé, lui, est un autre plat d’hiver. Ici, le pois vert, mixé.

  '
fun_facts:
- text: 'Trop cuit, le pois vire kaki ; on mixe dès qu’il est tendre.

    '
  source_name: Usage
  source_url: null
- text: 'La menthe se jette hors du feu : trop longtemps, elle noircit.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Velouté de petit pois ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Pea_soup
wines:
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex, buis — le pois, acidité nette.
- name: Muscadet Sèvre-et-Maine
  producer: Famille Lieubeau
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — le velouté froid, sans un chardonnay gras.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le pois et la menthe, sans un rouge.
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
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - casserole
    - saladier
    - mixeur
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: petits pois frais (avec les cosses)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de menthe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: croutons (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lard (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf poché (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez
      des frais, coupez grossièrement les oignons nouveaux.
    - Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites les suer
      et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes
      en mélangeant constamment. Laissez le refroidir.
    - Cuisson. Dans une autre casserole, portez à ébullition le bouillon ou fond d e votre choix (légumes,
      veau, volaille, etc.), puis versez directement sur le roux. Mélangez bien et ajoutez
      les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire
      20 minutes environ.
    - Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire
      filtrez la préparation, cela permettra d’éliminer les peaux et autres partie qu’on ne
      veut pas avoir dans le velouté).
    - Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits
      pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les
      et passez les sous l’eau froide pour stopper la cuisson.
    - Finition. Tout est prêt, vous n’avez plus qu’à dresser ! Mettez les petits pois dans le fond du
      récipient (gardez-en quelques uns pour la déco), versez le velouté, et voilà ! Au moment
      de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la
      crème, cela permettra d’avoir un résultat encore plus onctueux. Pour cela, dans un récipient,
      mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse,
      mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveaux puis reversez
      cette nouvelle préparation dans le reste du velouté et mélangez à nouveau. Attention,
      en revanche, avec ce jaune d’œuf, la préparation sera plus fragile et se conservera
      moins, il sera impératif de consommer le velouté très rapidement !
    steps_niveaux:
      amateur:
      - "Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez des frais, coupez grossièrement les oignons nouveaux."
      - "Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites-les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes en mélangeant constamment. Laissez-le refroidir."
      - "Cuisson. Dans une autre casserole, portez à ébullition le bouillon ou fond de votre choix (légumes, veau, volaille, etc.), puis versez directement sur le roux. Mélangez bien et ajoutez les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire 20 minutes environ."
      - "Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire [[filtrer|filtrez]] la préparation, cela permettra d’éliminer les peaux et autres parties qu’on ne veut pas avoir dans le velouté)."
      - "Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les et passez-les sous l’eau froide pour stopper la cuisson."
      - "Finition. Dressez : mettez les petits pois dans le fond du récipient (gardez-en quelques-uns pour la déco), versez le velouté. Au moment de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la crème, pour un résultat encore plus onctueux. Dans un récipient, mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveau puis reversez cette préparation dans le reste du velouté et mélangez à nouveau. Avec ce jaune d’œuf, la préparation sera plus fragile et se conservera moins : consommez le velouté très rapidement."
      pro:
      - "Préparer les ingrédients et les découpes. Écosser les petits pois s’ils sont frais, couper grossièrement les oignons nouveaux."
      - "Dans une casserole, fondre le beurre, puis rajouter les oignons. Les faire suer et rajouter la farine. Obtenir un roux. Cuire une à deux minutes en mélangeant constamment. Laisser refroidir."
      - "Dans une autre casserole, porter à ébullition le bouillon ou fond au choix (légumes, veau, volaille, etc.), puis verser directement sur le roux. Bien mélanger et ajouter les petits pois. Garder une poignée pour la garniture et la décoration. Laisser cuire 20 minutes environ."
      - "Mixer le tout au mixeur plongeur ou au blender. Passer au chinois : filtrer la préparation pour éliminer les peaux et autres parties qu’on ne veut pas dans le velouté."
      - "Dans une autre casserole, faire bouillir de l’eau avec du gros sel et cuire les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égoutter et passer sous l’eau froide pour stopper la cuisson."
      - "Dresser : mettre les petits pois dans le fond du récipient (en garder quelques-uns pour la déco), verser le velouté. Option : au moment de servir, lier le velouté au jaune d’œuf et à la crème. Dans un récipient, mélanger un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, puis rajouter deux à louches de velouté. Mélanger à nouveau, reverser dans le reste du velouté et mélanger. Avec le jaune d’œuf, la préparation est plus fragile : consommer très rapidement."
      cavernes:
      - "Préparation. Ingrédients, découpes, préparer. Petits pois frais, écosser. Oignons nouveaux, grossièrement, couper."
      - "Cuisson. Casserole, beurre, fondre. Oignons, rajouter. Suer. Farine, rajouter. Roux. 1 à 2 minutes, constamment, mélanger. Refroidir."
      - "Cuisson. Autre casserole, bouillon ou fond choix (légumes, veau, volaille, etc.), ébullition. Roux, verser. Bien, mélanger. Petits pois, ajouter. Poignée garniture et déco, garder. 20 minutes environ, cuire."
      - "Mixage. Mixeur plongeur ou blender, mixer. Chinois, passer. Peaux et autres parties, éliminer."
      - "Cuisson. Autre casserole, eau gros sel, bouillir. Petits pois garniture, cuire. Surface, remontent : cuits. Égoutter. Eau froide, passer. Cuisson, stopper."
      - "Finition. Petits pois, fond récipient, mettre. Quelques-uns déco, garder. Velouté, verser. Option : servir, jaunes d’œuf et crème, lier. Récipient, 1 ou 2 jaunes d’œuf, 2 à 3 cuillères crème fraîche épaisse, mélanger. Deux à louches velouté, rajouter. Mélanger. Reste velouté, reverser. Mélanger. Jaune d’œuf : plus fragile, consommer très rapidement."
    kcal_per_serving: 519
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: petits pois frais (avec les cosses)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de menthe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: croutons (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: tofu fumé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf poché (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez
      des frais, coupez grossièrement les oignons nouveaux.
    - Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites les suer
      et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes
      en mélangeant constamment. Laissez le refroidir.
    - Cuisson. Dans une autre casserole, portez à ébullition le bouillon de légumes, puis versez directement sur le roux. Mélangez bien et ajoutez
      les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire
      20 minutes environ.
    - Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire
      filtrez la préparation, cela permettra d’éliminer les peaux et autres partie qu’on ne
      veut pas avoir dans le velouté).
    - Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits
      pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les
      et passez les sous l’eau froide pour stopper la cuisson.
    - Finition. Tout est prêt, vous n’avez plus qu’à dresser ! Mettez les petits pois dans le fond du
      récipient (gardez-en quelques uns pour la déco), versez le velouté, et voilà ! Au moment
      de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la
      crème, cela permettra d’avoir un résultat encore plus onctueux. Pour cela, dans un récipient,
      mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse,
      mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveaux puis reversez
      cette nouvelle préparation dans le reste du velouté et mélangez à nouveau. Attention,
      en revanche, avec ce jaune d’œuf, la préparation sera plus fragile et se conservera
      moins, il sera impératif de consommer le velouté très rapidement !
    steps_niveaux:
      amateur:
      - "Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez des frais, coupez grossièrement les oignons nouveaux."
      - "Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites-les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes en mélangeant constamment. Laissez-le refroidir."
      - "Cuisson. Dans une autre casserole, portez à ébullition le bouillon de légumes, puis versez directement sur le roux. Mélangez bien et ajoutez les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire 20 minutes environ."
      - "Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire [[filtrer|filtrez]] la préparation, cela permettra d’éliminer les peaux et autres parties qu’on ne veut pas avoir dans le velouté)."
      - "Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les et passez-les sous l’eau froide pour stopper la cuisson."
      - "Finition. Dressez : mettez les petits pois dans le fond du récipient (gardez-en quelques-uns pour la déco), versez le velouté. Au moment de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la crème, pour un résultat encore plus onctueux. Dans un récipient, mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveau puis reversez cette préparation dans le reste du velouté et mélangez à nouveau. Avec ce jaune d’œuf, la préparation sera plus fragile et se conservera moins : consommez le velouté très rapidement."
      pro:
      - "Préparer les ingrédients et les découpes. Écosser les petits pois s’ils sont frais, couper grossièrement les oignons nouveaux."
      - "Dans une casserole, fondre le beurre, puis rajouter les oignons. Les faire suer et rajouter la farine. Obtenir un roux. Cuire une à deux minutes en mélangeant constamment. Laisser refroidir."
      - "Dans une autre casserole, porter à ébullition le bouillon de légumes, puis verser directement sur le roux. Bien mélanger et ajouter les petits pois. Garder une poignée pour la garniture et la décoration. Laisser cuire 20 minutes environ."
      - "Mixer le tout au mixeur plongeur ou au blender. Passer au chinois : filtrer la préparation pour éliminer les peaux et autres parties qu’on ne veut pas dans le velouté."
      - "Dans une autre casserole, faire bouillir de l’eau avec du gros sel et cuire les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égoutter et passer sous l’eau froide pour stopper la cuisson."
      - "Dresser : mettre les petits pois dans le fond du récipient (en garder quelques-uns pour la déco), verser le velouté. Option : au moment de servir, lier le velouté au jaune d’œuf et à la crème. Dans un récipient, mélanger un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, puis rajouter deux à louches de velouté. Mélanger à nouveau, reverser dans le reste du velouté et mélanger. Avec le jaune d’œuf, la préparation est plus fragile : consommer très rapidement."
      cavernes:
      - "Préparation. Ingrédients, découpes, préparer. Petits pois frais, écosser. Oignons nouveaux, grossièrement, couper."
      - "Cuisson. Casserole, beurre, fondre. Oignons, rajouter. Suer. Farine, rajouter. Roux. 1 à 2 minutes, constamment, mélanger. Refroidir."
      - "Cuisson. Autre casserole, bouillon légumes, ébullition. Roux, verser. Bien, mélanger. Petits pois, ajouter. Poignée garniture et déco, garder. 20 minutes environ, cuire."
      - "Mixage. Mixeur plongeur ou blender, mixer. Chinois, passer. Peaux et autres parties, éliminer."
      - "Cuisson. Autre casserole, eau gros sel, bouillir. Petits pois garniture, cuire. Surface, remontent : cuits. Égoutter. Eau froide, passer. Cuisson, stopper."
      - "Finition. Petits pois, fond récipient, mettre. Quelques-uns déco, garder. Velouté, verser. Option : servir, jaunes d’œuf et crème, lier. Récipient, 1 ou 2 jaunes d’œuf, 2 à 3 cuillères crème fraîche épaisse, mélanger. Deux à louches velouté, rajouter. Mélanger. Reste velouté, reverser. Mélanger. Jaune d’œuf : plus fragile, consommer très rapidement."
    kcal_per_serving: 519
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
    - qty: 1000
      unit: g
      item: petits pois frais (avec les cosses)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de menthe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: croutons (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: tofu fumé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: creme de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez
      des frais, coupez grossièrement les oignons nouveaux.
    - Cuisson. Dans une casserole, faites fondre la margarine végétale puis rajoutez les
      oignons. Faites les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce
      dernier une à deux minutes en mélangeant constamment. Laissez le refroidir.
    - Cuisson. Dans une autre casserole, portez à ébullition le bouillon de légumes, puis versez directement sur le roux. Mélangez bien et ajoutez
      les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire
      20 minutes environ.
    - Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire
      filtrez la préparation, cela permettra d’éliminer les peaux et autres partie qu’on ne
      veut pas avoir dans le velouté).
    - Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits
      pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les
      et passez les sous l’eau froide pour stopper la cuisson.
    - Finition. Tout est prêt, vous n’avez plus qu’à dresser ! Mettez les petits pois dans le fond du
      récipient (gardez-en quelques uns pour la déco), versez le velouté, et voilà ! Au moment
      de servir, si vous le souhaitez, vous pouvez lier le velouté avec du tofu soyeux mixé et un peu de crème de soja ou d’avoine, pour un résultat encore plus onctueux. Dans un récipient, mélangez 80 g de tofu soyeux et deux à trois cuillères de crème de soja, puis ajoutez deux louches de velouté. Mélangez et reversez dans le reste du velouté.
    steps_niveaux:
      amateur:
      - "Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez des frais, coupez grossièrement les oignons nouveaux."
      - "Cuisson. Dans une casserole, faites fondre la margarine végétale puis rajoutez les oignons. Faites-les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes en mélangeant constamment. Laissez-le refroidir."
      - "Cuisson. Dans une autre casserole, portez à ébullition le bouillon de légumes, puis versez directement sur le roux. Mélangez bien et ajoutez les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire 20 minutes environ."
      - "Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire [[filtrer|filtrez]] la préparation, cela permettra d’éliminer les peaux et autres parties qu’on ne veut pas avoir dans le velouté)."
      - "Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les et passez-les sous l’eau froide pour stopper la cuisson."
      - "Finition. Dressez : mettez les petits pois dans le fond du récipient (gardez-en quelques-uns pour la déco), versez le velouté. Au moment de servir, si vous le souhaitez, vous pouvez lier le velouté avec du tofu soyeux mixé et un peu de crème de soja ou d’avoine, pour un résultat encore plus onctueux. Dans un récipient, mélangez 80 g de tofu soyeux et deux à trois cuillères de crème de soja, puis ajoutez deux louches de velouté. Mélangez et reversez dans le reste du velouté."
      pro:
      - "Préparer les ingrédients et les découpes. Écosser les petits pois s’ils sont frais, couper grossièrement les oignons nouveaux."
      - "Dans une casserole, fondre la margarine végétale, puis rajouter les oignons. Les faire suer et rajouter la farine. Obtenir un roux. Cuire une à deux minutes en mélangeant constamment. Laisser refroidir."
      - "Dans une autre casserole, porter à ébullition le bouillon de légumes, puis verser directement sur le roux. Bien mélanger et ajouter les petits pois. Garder une poignée pour la garniture et la décoration. Laisser cuire 20 minutes environ."
      - "Mixer le tout au mixeur plongeur ou au blender. Passer au chinois : filtrer la préparation pour éliminer les peaux et autres parties qu’on ne veut pas dans le velouté."
      - "Dans une autre casserole, faire bouillir de l’eau avec du gros sel et cuire les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égoutter et passer sous l’eau froide pour stopper la cuisson."
      - "Dresser : mettre les petits pois dans le fond du récipient (en garder quelques-uns pour la déco), verser le velouté. Option : au moment de servir, lier le velouté avec du tofu soyeux mixé et un peu de crème de soja ou d’avoine. Dans un récipient, mélanger 80 g de tofu soyeux et deux à trois cuillères de crème de soja, puis ajouter deux louches de velouté. Mélanger et reverser dans le reste du velouté."
      cavernes:
      - "Préparation. Ingrédients, découpes, préparer. Petits pois frais, écosser. Oignons nouveaux, grossièrement, couper."
      - "Cuisson. Casserole, margarine végétale, fondre. Oignons, rajouter. Suer. Farine, rajouter. Roux. 1 à 2 minutes, constamment, mélanger. Refroidir."
      - "Cuisson. Autre casserole, bouillon légumes, ébullition. Roux, verser. Bien, mélanger. Petits pois, ajouter. Poignée garniture et déco, garder. 20 minutes environ, cuire."
      - "Mixage. Mixeur plongeur ou blender, mixer. Chinois, passer. Peaux et autres parties, éliminer."
      - "Cuisson. Autre casserole, eau gros sel, bouillir. Petits pois garniture, cuire. Surface, remontent : cuits. Égoutter. Eau froide, passer. Cuisson, stopper."
      - "Finition. Petits pois, fond récipient, mettre. Quelques-uns déco, garder. Velouté, verser. Option : servir, tofu soyeux mixé et peu crème soja ou avoine, lier. Récipient, 80 g tofu soyeux, 2 à 3 cuillères crème soja, mélanger. Deux louches velouté, ajouter. Mélanger. Reste velouté, reverser."
    kcal_per_serving: 431
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: petits pois frais (avec les cosses)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de menthe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: croutons (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: tofu fumé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf poché (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez
      des frais, coupez grossièrement les oignons nouveaux.
    - Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites les suer
      et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes
      en mélangeant constamment. Laissez le refroidir.
    - Cuisson. Dans une autre casserole, portez à ébullition le bouillon ou fond d e votre choix (légumes,
      veau, volaille, etc.), puis versez directement sur le roux. Mélangez bien et ajoutez
      les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire
      20 minutes environ.
    - Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire
      filtrez la préparation, cela permettra d’éliminer les peaux et autres partie qu’on ne
      veut pas avoir dans le velouté).
    - Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits
      pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les
      et passez les sous l’eau froide pour stopper la cuisson.
    - Finition. Tout est prêt, vous n’avez plus qu’à dresser ! Mettez les petits pois dans le fond du
      récipient (gardez-en quelques uns pour la déco), versez le velouté, et voilà ! Au moment
      de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la
      crème, cela permettra d’avoir un résultat encore plus onctueux. Pour cela, dans un récipient,
      mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse,
      mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveaux puis reversez
      cette nouvelle préparation dans le reste du velouté et mélangez à nouveau. Attention,
      en revanche, avec ce jaune d’œuf, la préparation sera plus fragile et se conservera
      moins, il sera impératif de consommer le velouté très rapidement !
    steps_niveaux:
      amateur:
      - "Préparation. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez des frais, coupez grossièrement les oignons nouveaux."
      - "Cuisson. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites-les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes en mélangeant constamment. Laissez-le refroidir."
      - "Cuisson. Dans une autre casserole, portez à ébullition le bouillon ou fond de votre choix (légumes, veau, volaille, etc.), puis versez directement sur le roux. Mélangez bien et ajoutez les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire 20 minutes environ."
      - "Mixage. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire [[filtrer|filtrez]] la préparation, cela permettra d’éliminer les peaux et autres parties qu’on ne veut pas avoir dans le velouté)."
      - "Cuisson. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les et passez-les sous l’eau froide pour stopper la cuisson."
      - "Finition. Dressez : mettez les petits pois dans le fond du récipient (gardez-en quelques-uns pour la déco), versez le velouté. Au moment de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la crème, pour un résultat encore plus onctueux. Dans un récipient, mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveau puis reversez cette préparation dans le reste du velouté et mélangez à nouveau. Avec ce jaune d’œuf, la préparation sera plus fragile et se conservera moins : consommez le velouté très rapidement."
      pro:
      - "Préparer les ingrédients et les découpes. Écosser les petits pois s’ils sont frais, couper grossièrement les oignons nouveaux."
      - "Dans une casserole, fondre le beurre, puis rajouter les oignons. Les faire suer et rajouter la farine. Obtenir un roux. Cuire une à deux minutes en mélangeant constamment. Laisser refroidir."
      - "Dans une autre casserole, porter à ébullition le bouillon ou fond au choix (légumes, veau, volaille, etc.), puis verser directement sur le roux. Bien mélanger et ajouter les petits pois. Garder une poignée pour la garniture et la décoration. Laisser cuire 20 minutes environ."
      - "Mixer le tout au mixeur plongeur ou au blender. Passer au chinois : filtrer la préparation pour éliminer les peaux et autres parties qu’on ne veut pas dans le velouté."
      - "Dans une autre casserole, faire bouillir de l’eau avec du gros sel et cuire les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égoutter et passer sous l’eau froide pour stopper la cuisson."
      - "Dresser : mettre les petits pois dans le fond du récipient (en garder quelques-uns pour la déco), verser le velouté. Option : au moment de servir, lier le velouté au jaune d’œuf et à la crème. Dans un récipient, mélanger un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, puis rajouter deux à louches de velouté. Mélanger à nouveau, reverser dans le reste du velouté et mélanger. Avec le jaune d’œuf, la préparation est plus fragile : consommer très rapidement."
      cavernes:
      - "Préparation. Ingrédients, découpes, préparer. Petits pois frais, écosser. Oignons nouveaux, grossièrement, couper."
      - "Cuisson. Casserole, beurre, fondre. Oignons, rajouter. Suer. Farine, rajouter. Roux. 1 à 2 minutes, constamment, mélanger. Refroidir."
      - "Cuisson. Autre casserole, bouillon ou fond choix (légumes, veau, volaille, etc.), ébullition. Roux, verser. Bien, mélanger. Petits pois, ajouter. Poignée garniture et déco, garder. 20 minutes environ, cuire."
      - "Mixage. Mixeur plongeur ou blender, mixer. Chinois, passer. Peaux et autres parties, éliminer."
      - "Cuisson. Autre casserole, eau gros sel, bouillir. Petits pois garniture, cuire. Surface, remontent : cuits. Égoutter. Eau froide, passer. Cuisson, stopper."
      - "Finition. Petits pois, fond récipient, mettre. Quelques-uns déco, garder. Velouté, verser. Option : servir, jaunes d’œuf et crème, lier. Récipient, 1 ou 2 jaunes d’œuf, 2 à 3 cuillères crème fraîche épaisse, mélanger. Deux à louches velouté, rajouter. Mélanger. Reste velouté, reverser. Mélanger. Jaune d’œuf : plus fragile, consommer très rapidement."
    kcal_per_serving: 519
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegetarienne:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  pesco:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
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

# Velouté de petit pois
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/veloute-de-petit-pois]]

## Ingrédients (4 personnes)

- 1 kg de petits pois frais (avec les cosses)
- 1 L de bouillon
- 50 g de beurre
- 50 g de farine
- 3 oignon nouveau
- 10 feuille de menthe
-  croutons (facultatif)
-  lard (facultatif)
-  œuf poché (facultatif)

## Préparation

1. Préparez vos ingrédients et vos découpes. Écossez les petits pois si vous en utilisez des frais, coupez grossièrement les oignons nouveaux.
2. Dans une casserole, faites fondre le beurre puis rajoutez les oignons. Faites les suer et rajoutez la farine. Vous obtenez un roux. Faites cuire ce dernier une à deux minutes en mélangeant constamment. Laissez le refroidir.
3. Dans une autre casserole, portez à ébullition le bouillon ou fond d e votre choix (légumes, veau, volaille, etc.), puis versez directement sur le roux. Mélangez bien et ajoutez les petits pois. Gardez une poignée pour la garniture et la décoration. Laissez cuire 20 minutes environ.
4. Mixez le tout à l’aide d’un mixeur plongeur ou au blender. Passez au chinois (c’est-à-dire filtrez la préparation, cela permettra d’éliminer les peaux et autres partie qu’on ne veut pas avoir dans le velouté).
5. Dans une autre casserole, faites bouillir de l’eau avec du gros sel et cuisez les petits pois pour la garniture. Dès qu’ils remontent à la surface, ils sont cuits. Égouttez-les et passez les sous l’eau froide pour stopper la cuisson.
6. Tout est prêt, vous n’avez plus qu’à dresser ! Mettez les petits pois dans le fond du récipient (gardez-en quelques uns pour la déco), versez le velouté, et voilà !

 
 

 
 Au moment de servir, si vous le souhaitez, vous pouvez lier le velouté au jaune d’œuf et à la crème, cela permettra d’avoir un résultat encore plus onctueux. Pour cela, dans un récipient, mélangez un ou deux jaunes d’œuf et deux à trois cuillères de crème fraîche épaisse, mélangez bien puis rajoutez deux à louches de velouté. Mélangez à nouveaux puis reversez cette nouvelle préparation dans le reste du velouté et mélangez à nouveau. Attention, en revanche, avec ce jaune d’œuf, la préparation sera plus fragile et se conservera moins, il sera impératif de consommer le velouté très rapidement !
