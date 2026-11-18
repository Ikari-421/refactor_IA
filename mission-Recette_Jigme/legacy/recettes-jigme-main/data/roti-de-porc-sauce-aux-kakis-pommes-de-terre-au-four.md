---
schema: recette-web-jigme/v2
slug: roti-de-porc-sauce-aux-kakis-pommes-de-terre-au-four
title: Rôti de porc sauce aux kakis, pommes de terre au four
lang: fr
description: "Rôti de porc sauce aux kakis, pommes de terre au four : recette française avec rôti de porc, pommes de terre nouvelles et kaki, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- porc
- automne
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/roti-de-porc-sauce-aux-kakis-pommes-de-terre-au-four.jpg
  alt: Rôti de porc sauce aux kakis, pommes de terre au four
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/roti-de-porc-sauce-aux-kakis-pommes-de-terre-au-four.md
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
    - from: seitan ou tempeh
      to: tofu ferme
      note:
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Gluten : seitan ou tempeh → tofu ferme ; champignons + seitan → tofu ferme.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: seitan ou tempeh
      to: seitan
      note:
    note: 'Soja : seitan ou tempeh → seitan.'
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
  Rôti de porc, pommes de terre au four, sauce au kaki (plaqueminier, Diospyros).
  Le kaki est un fruit d’Asie de l’Est ; la sauce sucrée-salée est une assiette
  contemporaine, pas un plat régional daté.
fun_facts:
- text: >
    Un kaki trop ferme astringe ; trop mûr, il se fond en sauce sans fibres.
  source_name: Grokipedia, Persimmon
  source_url: https://grokipedia.com/page/Persimmon
- text: >
    Le porc se repose hors du four : tranché trop tôt, le jus fuit.
  source_name: Usage
  source_url:
wines:
- name: Chinon
  producer: Olga Raffault
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc — le porc, tanin vif contre le sucré du kaki.
- name: Alsace Pinot Gris
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: pinot gris
  award:
  why: Poire — la sauce fruitée, légèrement sucré.
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — le rôti, tanin court.
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
      cook_min: 90
      rest_min: 90
      total_min: 210
    equipment: &id002
    - four
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: rôti de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre nouvelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bouillon (fond de veau dilué dans de l'eau)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: romarin
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
      item: huile d'olive
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
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les
      d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté.
    - Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et
      demi à 180°. Au bout d’une demie heure de cuisson, ajouter le plat de pommes de terre
      dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de
      tous les côtés.
    - Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez
      les échalotes puis les kakis. Versez du fond de veau et le curcuma. Laissez cuire cette
      sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux
      de kaki avec un peu de miel.
    - 'Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez
      de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et
      ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis.,Sortez
      les pommes de terre du four. Quelques tranches de rôti avec un peu de sauce au kaki,
      des pommes de terre : délice garanti !'
    steps_niveaux:
      amateur:
      - "Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté."
      - "Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et demi à 180°. Au bout d’une demie heure de cuisson, ajoutez le plat de pommes de terre dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de tous les côtés."
      - "Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez les échalotes puis les kakis. Versez du fond de veau et le curcuma. Laissez cuire cette sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux de kaki avec un peu de miel."
      - "Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis. Sortez les pommes de terre du four. Servez quelques tranches de rôti avec un peu de sauce au kaki et des pommes de terre."
      pro:
      - "Laver les pommes de terre. Les verser dans un plat adapté au four. Badigeonner d’huile, de sel et de romarin. Mélanger à la main. Réserver."
      - "Saisir le rôti sur chaque face dans une poêle. Enfourner une heure et demi à 180°. Au bout d’une demie heure, ajouter le plat de pommes de terre. Mélanger plusieurs fois pour dorer de tous les côtés."
      - "Couper l’échalote et les kakis. Dans la poêle du rôti, ajouter les échalotes puis les kakis. Verser le fond de veau et le curcuma. Laisser cuire la sauce. Dans une autre poêle, huile et beurre : cuire de gros morceaux de kaki avec un peu de miel."
      - "Sortir le rôti. Incorporer le jus à la sauce. Ajouter la crème liquide. Quand la sauce a légèrement épaissi, couper le feu, ajouter de petits morceaux de beurre, puis les gros morceaux de kakis. Sortir les pommes de terre. Servir."
      cavernes:
      - "Cuisson. Pommes de terre, laver, verser dans plat four. Huile, sel, romarin, badigeonner. Mains, mélanger. Réserver."
      - "Cuisson. Rôti, saisir chaque face, poêle. Four 180°, heure et demi. Après demie heure, plat pommes de terre, ajouter. Mélanger plusieurs fois, dorer tous côtés."
      - "Cuisson. Échalote, kakis, couper. Poêle rôti, échalotes puis kakis. Fond de veau, curcuma, verser. Sauce, cuire. Autre poêle, peu huile beurre. Gros morceaux kaki, peu miel, cuire."
      - "Cuisson. Rôti, sortir. Jus, incorporer sauce. Crème liquide, ajouter. Sauce légèrement épaissi, couper feu, petits morceaux beurre. Gros morceaux kakis, ajouter. Pommes de terre, sortir. Tranches rôti, peu sauce kaki, pommes de terre. Servir."
    kcal_per_serving: 354
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
    - lactose
    - produits_laitiers
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre nouvelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: romarin
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
      item: huile d'olive
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
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les
      d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté.
    - Cuisson. Faites saisir le seitan (ou le tempeh) sur chaque face dans une poêle. Enfournez pendant une heure et
      demi à 180°. Au bout d’une demie heure de cuisson, ajouter le plat de pommes de terre
      dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de
      tous les côtés.
    - Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le seitan, ajoutez les échalotes puis les kakis. Versez du fond de légumes et le curcuma. Laissez cuire cette
      sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux
      de kaki avec un peu de miel.
    - 'Cuisson. Sortez le seitan du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez
      de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et
      ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis.,Sortez
      les pommes de terre du four. Quelques tranches de seitan avec un peu de sauce au kaki,
      des pommes de terre : délice garanti !'
    steps_niveaux:
      amateur:
      - "Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté."
      - "Cuisson. Faites saisir le seitan (ou le tempeh) sur chaque face dans une poêle. Enfournez pendant une heure et demi à 180°. Au bout d’une demie heure de cuisson, ajoutez le plat de pommes de terre dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de tous les côtés."
      - "Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le seitan, ajoutez les échalotes puis les kakis. Versez du fond de légumes et le curcuma. Laissez cuire cette sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux de kaki avec un peu de miel."
      - "Cuisson. Sortez le seitan du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis. Sortez les pommes de terre du four. Servez quelques tranches de seitan avec un peu de sauce au kaki et des pommes de terre."
      pro:
      - "Laver les pommes de terre. Les verser dans un plat adapté au four. Badigeonner d’huile, de sel et de romarin. Mélanger à la main. Réserver."
      - "Saisir le seitan (ou le tempeh) sur chaque face dans une poêle. Enfourner une heure et demi à 180°. Au bout d’une demie heure, ajouter le plat de pommes de terre. Mélanger plusieurs fois pour dorer de tous les côtés."
      - "Couper l’échalote et les kakis. Dans la poêle du seitan, ajouter les échalotes puis les kakis. Verser le fond de légumes et le curcuma. Laisser cuire la sauce. Dans une autre poêle, huile et beurre : cuire de gros morceaux de kaki avec un peu de miel."
      - "Sortir le seitan. Incorporer le jus à la sauce. Ajouter la crème liquide. Quand la sauce a légèrement épaissi, couper le feu, ajouter de petits morceaux de beurre, puis les gros morceaux de kakis. Sortir les pommes de terre. Servir."
      cavernes:
      - "Cuisson. Pommes de terre, laver, verser dans plat four. Huile, sel, romarin, badigeonner. Mains, mélanger. Réserver."
      - "Cuisson. Seitan ou tempeh, saisir chaque face, poêle. Four 180°, heure et demi. Après demie heure, plat pommes de terre, ajouter. Mélanger plusieurs fois, dorer tous côtés."
      - "Cuisson. Échalote, kakis, couper. Poêle seitan, échalotes puis kakis. Fond de légumes, curcuma, verser. Sauce, cuire. Autre poêle, peu huile beurre. Gros morceaux kaki, peu miel, cuire."
      - "Cuisson. Seitan, sortir. Jus, incorporer sauce. Crème liquide, ajouter. Sauce légèrement épaissi, couper feu, petits morceaux beurre. Gros morceaux kakis, ajouter. Pommes de terre, sortir. Tranches seitan, peu sauce kaki, pommes de terre. Servir."
    kcal_per_serving: 606
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre nouvelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: romarin
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
      item: huile d'olive
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
    - Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les
      d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté.
    - Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et
      demi à 180°. Au bout d’une demie heure de cuisson, ajouter le plat de pommes de terre
      dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de
      tous les côtés.
    - Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez
      les échalotes puis les kakis. Versez du fond de légumes et le curcuma. Laissez cuire cette
      sauce. Dans une autre poêle avec un peu d’huile et de margarine végétale,
      faites cuire de gros morceaux de kaki avec un peu de sirop d’érable ou d’agave.
    - 'Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème de soja ou d’avoine, et une fois que la sauce a légèrement épaissi, coupez le feu et
      ajoutez de petits morceaux de margarine végétale. Enfin, ajoutez les gros
      morceaux de kakis.,Sortez les pommes de terre du four. Quelques tranches de rôti avec
      un peu de sauce au kaki, des pommes de terre : délice garanti !'
    steps_niveaux:
      amateur:
      - "Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté."
      - "Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et demi à 180°. Au bout d’une demie heure de cuisson, ajoutez le plat de pommes de terre dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de tous les côtés."
      - "Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez les échalotes puis les kakis. Versez du fond de légumes et le curcuma. Laissez cuire cette sauce. Dans une autre poêle avec un peu d’huile et de margarine végétale, faites cuire de gros morceaux de kaki avec un peu de sirop d’érable ou d’agave."
      - "Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème de soja ou d’avoine, et une fois que la sauce a légèrement épaissi, coupez le feu et ajoutez de petits morceaux de margarine végétale. Enfin, ajoutez les gros morceaux de kakis. Sortez les pommes de terre du four. Servez quelques tranches de rôti avec un peu de sauce au kaki et des pommes de terre."
      pro:
      - "Laver les pommes de terre. Les verser dans un plat adapté au four. Badigeonner d’huile, de sel et de romarin. Mélanger à la main. Réserver."
      - "Saisir le rôti sur chaque face dans une poêle. Enfourner une heure et demi à 180°. Au bout d’une demie heure, ajouter le plat de pommes de terre. Mélanger plusieurs fois pour dorer de tous les côtés."
      - "Couper l’échalote et les kakis. Dans la poêle du rôti, ajouter les échalotes puis les kakis. Verser le fond de légumes et le curcuma. Laisser cuire la sauce. Dans une autre poêle, huile et margarine végétale : cuire de gros morceaux de kaki avec un peu de sirop d’érable ou d’agave."
      - "Sortir le rôti. Incorporer le jus à la sauce. Ajouter la crème de soja ou d’avoine. Quand la sauce a légèrement épaissi, couper le feu, ajouter de petits morceaux de margarine végétale, puis les gros morceaux de kakis. Sortir les pommes de terre. Servir."
      cavernes:
      - "Cuisson. Pommes de terre, laver, verser dans plat four. Huile, sel, romarin, badigeonner. Mains, mélanger. Réserver."
      - "Cuisson. Rôti, saisir chaque face, poêle. Four 180°, heure et demi. Après demie heure, plat pommes de terre, ajouter. Mélanger plusieurs fois, dorer tous côtés."
      - "Cuisson. Échalote, kakis, couper. Poêle rôti, échalotes puis kakis. Fond de légumes, curcuma, verser. Sauce, cuire. Autre poêle, peu huile margarine végétale. Gros morceaux kaki, peu sirop d’érable ou d’agave, cuire."
      - "Cuisson. Rôti, sortir. Jus, incorporer sauce. Crème de soja ou d’avoine, ajouter. Sauce légèrement épaissi, couper feu, petits morceaux margarine végétale. Gros morceaux kakis, ajouter. Pommes de terre, sortir. Tranches rôti, peu sauce kaki, pommes de terre. Servir."
    kcal_per_serving: 606
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
    - qty: 1000
      unit: g
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre nouvelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: romarin
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
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les
      d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté.
    - Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et
      demi à 180°. Au bout d’une demie heure de cuisson, ajouter le plat de pommes de terre
      dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de
      tous les côtés.
    - Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez
      les échalotes puis les kakis. Versez du fond de veau et le curcuma. Laissez cuire cette
      sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux
      de kaki avec un peu de miel.
    - 'Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez
      de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et
      ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis.,Sortez
      les pommes de terre du four. Quelques tranches de rôti avec un peu de sauce au kaki,
      des pommes de terre : délice garanti !'
    steps_niveaux:
      amateur:
      - "Cuisson. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté."
      - "Cuisson. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et demi à 180°. Au bout d’une demie heure de cuisson, ajoutez le plat de pommes de terre dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de tous les côtés."
      - "Cuisson. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez les échalotes puis les kakis. Versez du fond de veau et le curcuma. Laissez cuire cette sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux de kaki avec un peu de miel."
      - "Cuisson. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis. Sortez les pommes de terre du four. Servez quelques tranches de rôti avec un peu de sauce au kaki et des pommes de terre."
      pro:
      - "Laver les pommes de terre. Les verser dans un plat adapté au four. Badigeonner d’huile, de sel et de romarin. Mélanger à la main. Réserver."
      - "Saisir le rôti sur chaque face dans une poêle. Enfourner une heure et demi à 180°. Au bout d’une demie heure, ajouter le plat de pommes de terre. Mélanger plusieurs fois pour dorer de tous les côtés."
      - "Couper l’échalote et les kakis. Dans la poêle du rôti, ajouter les échalotes puis les kakis. Verser le fond de veau et le curcuma. Laisser cuire la sauce. Dans une autre poêle, huile et beurre : cuire de gros morceaux de kaki avec un peu de miel."
      - "Sortir le rôti. Incorporer le jus à la sauce. Ajouter la crème liquide. Quand la sauce a légèrement épaissi, couper le feu, ajouter de petits morceaux de beurre, puis les gros morceaux de kakis. Sortir les pommes de terre. Servir."
      cavernes:
      - "Cuisson. Pommes de terre, laver, verser dans plat four. Huile, sel, romarin, badigeonner. Mains, mélanger. Réserver."
      - "Cuisson. Rôti, saisir chaque face, poêle. Four 180°, heure et demi. Après demie heure, plat pommes de terre, ajouter. Mélanger plusieurs fois, dorer tous côtés."
      - "Cuisson. Échalote, kakis, couper. Poêle rôti, échalotes puis kakis. Fond de veau, curcuma, verser. Sauce, cuire. Autre poêle, peu huile beurre. Gros morceaux kaki, peu miel, cuire."
      - "Cuisson. Rôti, sortir. Jus, incorporer sauce. Crème liquide, ajouter. Sauce légèrement épaissi, couper feu, petits morceaux beurre. Gros morceaux kakis, ajouter. Pommes de terre, sortir. Tranches rôti, peu sauce kaki, pommes de terre. Servir."
    kcal_per_serving: 354
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Rôti de porc sauce aux kakis, pommes de terre au four
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/roti-de-porc-sauce-aux-kakis-pommes-de-terre-au-four.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/roti-de-porc-sauce-aux-kakis-pommes-de-terre-au-four]]

## Ingrédients (4 personnes)

- 1 kg de rôti de porc
- 800 g de pommes de terre nouvelles
- 3 kaki
- 2 échalote
- 20 cl de bouillon (fond de veau dilué dans de l'eau)
-  romarin
-  beurre
-  huile d'olive

## Préparation

1. Lavez les pommes de terre et versez-les dans un plat adapté au four. Badigeonnez-les d’huile, de sel et de romarin. Mélangez bien avec vos mains et laissez de côté.
2. Faites saisir le rôti sur chaque face dans une poêle. Enfournez pendant une heure et demi à 180°. Au bout d’une demie heure de cuisson, ajouter le plat de pommes de terre dans le four. Mélangez-les plusieurs fois pendant la cuisson pour qu’elles dorent de tous les côtés.
3. Coupez l’échalote et les kakis. Dans la poêle qui a servi à saisir le rôti, ajoutez les échalotes puis les kakis. Versez du fond de veau et le curcuma. Laissez cuire cette sauce. Dans une autre poêle avec un peu d’huile et de beurre, faites cuire de gros morceaux de kaki avec un peu de miel.
4. Sortez le rôti du four et récupérez le jus pour l’incorporer dans la sauce. Ajoutez de la crème liquide, et une fois que la sauce a légèrement épaissi, coupez le feu et ajoutez de petits morceaux de beurre. Enfin, ajoutez les gros morceaux de kakis.,Sortez les pommes de terre du four.

 
 

 
 Quelques tranches de rôti avec un peu de sauce au kaki, des pommes de terre  : délice garanti !
