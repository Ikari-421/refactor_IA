---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: pad-thai
title: Pad thai
lang: fr
description: "Pad thai : recette thaïe avec nouilles de riz, tofu et oignon nouveau, pour 4 personnes. Version maison. Facile à suivre."
cuisine: thaïe
category: salé
tags:
- salé
- nouilles
- poisson
- nouilles de riz
image:
  url:
  alt: Pad thai
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pad-thai.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - crustaces
    swaps: []
    note: 'Contient crustacés (crevettes) : pas d’adaptation fiable.'
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: tofu
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
  sans_arachides:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - arachides
    swaps: []
    note: 'Contient arachides (cacahuètes) : pas d’adaptation fiable.'
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
histoire: 'Pad thaï : nouilles de riz plates sautées, tamarin, nuoc-mâm, sucre de palme, œuf, germes,
  cacahuète. Plat national thaï, cuisine de rue. Wok. Une naissance « officielle » des années 1930–1940
  circule souvent ; ici on n’en fait pas un fait daté.

  '
fun_facts:
- text: >
    Le tamarin donne l’acidité : sans lui, ce n’est plus un pad thaï, c’est un
    sauté sucré-salé.
  source_name: Grokipedia, Pad thai
  source_url: https://grokipedia.com/page/Pad_thai
- text: >
    Les germes et la ciboule chinoise se jettent à la fin : trop cuits, ils
    ramollissent.
  source_name: Wikipedia, Pad thai
  source_url: https://en.wikipedia.org/wiki/Pad_thai
wines:
- name: Gewurztraminer
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, légèrement sucré — le tamarin, le piment et la cacahuète.
- name: Alsace Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume — le nuoc-mâm et les nouilles, acidité nette.
- name: Alsace Pinot Gris
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: pinot gris
  award:
  why: Poire — le sucré-salé du wok, sans un rouge tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - oeuf
    - poisson
    - soja
    - arachides
    - crustaces
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id002
    - casserole
    - saladier
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: nouilles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
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
    - qty: 150
      unit: g
      item: crevettes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: cacahuètes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce tamarin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce piquante
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: sauce poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez vous
      au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre.
    - Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer
      cet ingrédient par de la sauce huitre ou encore du ketchup si vous ne le trouvez pas.
      Complétez avec de la sauce piquante, du sucre, de la sauce poisson et du jus de citron
      vert. Mélangez bien et réservez.
    - Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez.
    - Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même
      la partie verte). Enfin, décortiquez les crevettes.
    - Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez
      et poivrez, puis ajoutez les crevettes et mélangez. Complétez enfin avec l’échalote
      et l’ail. Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites.
    - Finition. Ajoutez les oeufs dans la wok et mélangez bien. Enfin, incorporez la sauce, l’oignon
      nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette
      puis décorez selon vos envies. De son côté, Jigmé à ajouté quelques cacahuètes, des
      pousses de soja et de la coriandre fraîche. Pressez un peu de citron vert sur votre
      pad thaï et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez-vous au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre."
      - "Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer cet ingrédient par de la sauce huître ou encore du ketchup si vous ne le trouvez pas. Complétez avec de la sauce piquante, du sucre, de la sauce poisson et du jus de citron vert. Mélangez bien et réservez."
      - "Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez."
      - "Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même la partie verte). Enfin, décortiquez les crevettes."
      - "Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez et poivrez, puis ajoutez les crevettes et mélangez. Complétez enfin avec l’échalote et l’ail. Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites."
      - "Finition. Ajoutez les œufs dans le wok et mélangez bien. Enfin, incorporez la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette puis décorez selon vos envies. De son côté, Jigmé a ajouté quelques cacahuètes, des pousses de soja et de la coriandre fraîche. Pressez un peu de citron vert sur votre pad thaï et dégustez."
      pro:
      - "Cuire les nouilles de riz dans une grande casserole d’eau bouillante. Suivre le temps indiqué sur le paquet, variable selon la marque."
      - "Ajouter de la sauce tamarin dans un récipient. Remplacer au besoin par de la sauce huître ou du ketchup. Compléter avec la sauce piquante, le sucre, la sauce poisson et le jus de citron vert. Mélanger. Réserver."
      - "Débarrasser les nouilles. Rincer à l’eau froide. Réserver."
      - "Découper le tofu en dés. Tailler les échalotes, l’ail et l’oignon nouveau (partie verte comprise). Décortiquer les crevettes."
      - "Dans un wok bien chaud, griller le tofu avec un filet d’huile végétale. Saler, poivrer. Ajouter les crevettes. Mélanger. Compléter avec l’échalote et l’ail. Quand tout a cuit, ajouter les nouilles pré-cuites."
      - "Ajouter les œufs dans le wok. Mélanger. Incorporer la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Dresser. Décorer. Cacahuètes, pousses de soja et coriandre fraîche au choix. Presser un peu de citron vert. Servir."
      cavernes:
      - "Cuisson. Nouilles riz, casserole eau bouillante, cuire. Temps paquet, suivre. Marque à marque, varie."
      - "Marinade. Sauce tamarin, récipient, ajouter. Remplacer : sauce huître ou ketchup. Sauce piquante, sucre, sauce poisson, jus citron vert, compléter. Mélanger. Réserver."
      - "Dressage. Nouilles, débarrasser. Eau froide, rincer. Réserver."
      - "Cuisson. Tofu, dés, découper. Échalotes, ail, oignon nouveau, partie verte, tailler. Crevettes, décortiquer."
      - "Cuisson. Wok bien chaud. Tofu, filet huile végétale, griller. Saler, poivrer. Crevettes, ajouter, mélanger. Échalote, ail, compléter. Tout cuit : nouilles pré-cuites, ajouter."
      - "Finition. Œufs, wok, ajouter, mélanger. Sauce, oignon nouveau, pousses soja, cacahuètes concassées, incorporer. Assiette, servir. Décorer envies. Jigmé : cacahuètes, pousses soja, coriandre fraîche. Citron vert, peu, presser. Déguster."
    kcal_per_serving: 531
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
    - oeuf
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
    - qty: 400
      unit: g
      item: nouilles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
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
    - qty: 150
      unit: g
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: cacahuètes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce tamarin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce piquante
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: tofu ferme ou halloumi
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez vous
      au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre.
    - Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer
      cet ingrédient par de la sauce huitre ou encore du ketchup si vous ne le trouvez pas.
      Complétez avec de la sauce piquante, du sucre, de la tofu ferme ou halloumi et du jus
      de citron vert. Mélangez bien et réservez.
    - Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez.
    - Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même
      la partie verte). Enfin, décortiquez les tofu.
    - Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez
      et poivrez, puis ajoutez les tofu et mélangez. Complétez enfin avec l’échalote et l’ail.
      Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites.
    - Finition. Ajoutez les oeufs dans la wok et mélangez bien. Enfin, incorporez la sauce, l’oignon
      nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette
      puis décorez selon vos envies. De son côté, Jigmé à ajouté quelques cacahuètes, des
      pousses de soja et de la coriandre fraîche. Pressez un peu de citron vert sur votre
      pad thaï et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez-vous au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre."
      - "Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer cet ingrédient par de la sauce huître ou encore du ketchup si vous ne le trouvez pas. Complétez avec de la sauce piquante, du sucre, de la tofu ferme ou halloumi et du jus de citron vert. Mélangez bien et réservez."
      - "Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez."
      - "Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même la partie verte). Enfin, décortiquez les tofu."
      - "Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez et poivrez, puis ajoutez les tofu et mélangez. Complétez enfin avec l’échalote et l’ail. Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites."
      - "Finition. Ajoutez les œufs dans le wok et mélangez bien. Enfin, incorporez la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette puis décorez selon vos envies. De son côté, Jigmé a ajouté quelques cacahuètes, des pousses de soja et de la coriandre fraîche. Pressez un peu de citron vert sur votre pad thaï et dégustez."
      pro:
      - "Cuire les nouilles de riz dans une grande casserole d’eau bouillante. Suivre le temps indiqué sur le paquet, variable selon la marque."
      - "Ajouter de la sauce tamarin dans un récipient. Remplacer au besoin par de la sauce huître ou du ketchup. Compléter avec la sauce piquante, le sucre, le tofu ferme ou halloumi et le jus de citron vert. Mélanger. Réserver."
      - "Débarrasser les nouilles. Rincer à l’eau froide. Réserver."
      - "Découper le tofu en dés. Tailler les échalotes, l’ail et l’oignon nouveau (partie verte comprise). Décortiquer les tofu."
      - "Dans un wok bien chaud, griller le tofu avec un filet d’huile végétale. Saler, poivrer. Ajouter les tofu. Mélanger. Compléter avec l’échalote et l’ail. Quand tout a cuit, ajouter les nouilles pré-cuites."
      - "Ajouter les œufs dans le wok. Mélanger. Incorporer la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Dresser. Décorer. Cacahuètes, pousses de soja et coriandre fraîche au choix. Presser un peu de citron vert. Servir."
      cavernes:
      - "Cuisson. Nouilles riz, casserole eau bouillante, cuire. Temps paquet, suivre. Marque à marque, varie."
      - "Marinade. Sauce tamarin, récipient, ajouter. Remplacer : sauce huître ou ketchup. Sauce piquante, sucre, tofu ferme ou halloumi, jus citron vert, compléter. Mélanger. Réserver."
      - "Dressage. Nouilles, débarrasser. Eau froide, rincer. Réserver."
      - "Cuisson. Tofu, dés, découper. Échalotes, ail, oignon nouveau, partie verte, tailler. Tofu, décortiquer."
      - "Cuisson. Wok bien chaud. Tofu, filet huile végétale, griller. Saler, poivrer. Tofu, ajouter, mélanger. Échalote, ail, compléter. Tout cuit : nouilles pré-cuites, ajouter."
      - "Finition. Œufs, wok, ajouter, mélanger. Sauce, oignon nouveau, pousses soja, cacahuètes concassées, incorporer. Assiette, servir. Décorer envies. Jigmé : cacahuètes, pousses soja, coriandre fraîche. Citron vert, peu, presser. Déguster."
    kcal_per_serving: 543
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
    - qty: 400
      unit: g
      item: nouilles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
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
    - qty: 150
      unit: g
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: cacahuètes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce tamarin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sauce piquante
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez vous
      au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre.
    - Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer
      cet ingrédient par de la sauce huitre ou encore du ketchup si vous ne le trouvez pas.
      Complétez avec de la sauce piquante, du sucre, de la tofu ferme et du jus de citron
      vert. Mélangez bien et réservez.
    - Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez.
    - Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même
      la partie verte). Enfin, décortiquez les tofu.
    - Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez
      et poivrez, puis ajoutez les tofu et mélangez. Complétez enfin avec l’échalote et l’ail.
      Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites.
    - Finition. Ajoutez les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs dans la wok
      et mélangez bien. Enfin, incorporez la sauce, l’oignon nouveau, quelques pousses de
      soja et des cacahuètes concassées. Servez dans une assiette puis décorez selon vos envies.
      De son côté, Jigmé à ajouté quelques cacahuètes, des pousses de soja et de la coriandre
      fraîche. Pressez un peu de citron vert sur votre pad thaï et dégustez. Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez-vous au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre."
      - "Marinade. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer cet ingrédient par de la sauce huître ou encore du ketchup si vous ne le trouvez pas. Complétez avec de la sauce piquante, du sucre, de la tofu ferme et du jus de citron vert. Mélangez bien et réservez."
      - "Dressage. Débarrassez les nouilles, rincez-les à l’eau froide et réservez."
      - "Cuisson. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même la partie verte). Enfin, décortiquez les tofu."
      - "Cuisson. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez et poivrez, puis ajoutez les tofu et mélangez. Complétez enfin avec l’échalote et l’ail. Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites."
      - "Finition. Ajoutez l’œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou le tofu soyeux dans le wok et mélangez bien. Enfin, incorporez la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette puis décorez selon vos envies. De son côté, Jigmé a ajouté quelques cacahuètes, des pousses de soja et de la coriandre fraîche. Pressez un peu de citron vert sur votre pad thaï et dégustez."
      pro:
      - "Cuire les nouilles de riz dans une grande casserole d’eau bouillante. Suivre le temps indiqué sur le paquet, variable selon la marque."
      - "Ajouter de la sauce tamarin dans un récipient. Remplacer au besoin par de la sauce huître ou du ketchup. Compléter avec la sauce piquante, le sucre, le tofu ferme et le jus de citron vert. Mélanger. Réserver."
      - "Débarrasser les nouilles. Rincer à l’eau froide. Réserver."
      - "Découper le tofu en dés. Tailler les échalotes, l’ail et l’oignon nouveau (partie verte comprise). Décortiquer les tofu."
      - "Dans un wok bien chaud, griller le tofu avec un filet d’huile végétale. Saler, poivrer. Ajouter les tofu. Mélanger. Compléter avec l’échalote et l’ail. Quand tout a cuit, ajouter les nouilles pré-cuites."
      - "Ajouter l’œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou le tofu soyeux dans le wok. Mélanger. Incorporer la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Dresser. Décorer. Cacahuètes, pousses de soja et coriandre fraîche au choix. Presser un peu de citron vert. Servir."
      cavernes:
      - "Cuisson. Nouilles riz, casserole eau bouillante, cuire. Temps paquet, suivre. Marque à marque, varie."
      - "Marinade. Sauce tamarin, récipient, ajouter. Remplacer : sauce huître ou ketchup. Sauce piquante, sucre, tofu ferme, jus citron vert, compléter. Mélanger. Réserver."
      - "Dressage. Nouilles, débarrasser. Eau froide, rincer. Réserver."
      - "Cuisson. Tofu, dés, découper. Échalotes, ail, oignon nouveau, partie verte, tailler. Tofu, décortiquer."
      - "Cuisson. Wok bien chaud. Tofu, filet huile végétale, griller. Saler, poivrer. Tofu, ajouter, mélanger. Échalote, ail, compléter. Tout cuit : nouilles pré-cuites, ajouter."
      - "Finition. Œuf-lin, 1 c.à.s. lin + 3 c.à.s. eau / œuf, ou tofu soyeux, wok, ajouter, mélanger. Sauce, oignon nouveau, pousses soja, cacahuètes concassées, incorporer. Assiette, servir. Décorer envies. Jigmé : cacahuètes, pousses soja, coriandre fraîche. Citron vert, peu, presser. Déguster."
    kcal_per_serving: 543
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
    - oeuf
    - poisson
    - soja
    - arachides
    - crustaces
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 531
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Pad thai
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pad-thai]]

## Ingrédients (4 personnes)

- 400 g de nouilles de riz
- 200 g de tofu
- 1 oignon nouveau
- 1 gousse d'ail
- 150 g de crevettes
- 2 oeuf
- 50 g de pousses de soja
- 20 g de cacahuètes
- 1 c.à.s de sauce tamarin
- 1 c.à.s de sauce piquante
- 10 g de sucre
- 3 c.à.s de sauce poisson
- 1 citron vert
-  coriandre

## Préparation

1. Faites cuire les nouilles de riz dans une grande casserole d’eau bouillante. Fiez vous au temps indiqué sur le paquet, comme celui-ci varie d’une marque à une autre.
2. Pendant ce temps, ajoutez de la sauce tamarin dans un récipient. Vous pouvez remplacer cet ingrédient par de la sauce huitre ou encore du ketchup si vous ne le trouvez pas. Complétez avec de la sauce piquante, du sucre, de la sauce poisson et du jus de citron vert. Mélangez bien et réservez.
3. Débarrassez les nouilles, rincez-les à l’eau froide et réservez.
4. Découpez le tofu en dés, puis taillez les échalotes, l’ail et l’oignon nouveau (même la partie verte). Enfin, décortiquez les crevettes.
5. Dans un wok bien chaud, faites griller le tofu avec un filet d’huile végétale. Salez et poivrez, puis ajoutez les crevettes et mélangez. Complétez enfin avec l’échalote et l’ail. Enfin, quand tout a bien cuit, ajoutez les nouilles pré-cuites.
6. Ajoutez les oeufs dans la wok et mélangez bien. Enfin, incorporez la sauce, l’oignon nouveau, quelques pousses de soja et des cacahuètes concassées. Servez dans une assiette puis décorez selon vos envies. De son côté, Jigmé à ajouté quelques cacahuètes, des pousses de soja et de la coriandre fraîche.

 
 

 
 Pressez un peu de citron vert sur votre pad thaï et dégustez. Bon appétit !
