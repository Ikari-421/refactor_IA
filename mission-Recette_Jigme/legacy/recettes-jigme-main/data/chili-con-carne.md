---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: chili-con-carne
title: Chili con carne
lang: fr
description: "Chili con carne : recette mexicaine avec viande de bœuf hachée, haricots rouges et coulis de tomate, pour 4 personnes. Version maison."
cuisine: mexicaine
category: salé
tags:
- salé
- mijoté
- bœuf
- haricots
image:
  url:
  alt: Chili con carne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/chili-con-carne.md
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
    - from: seitan ou portobello
      to: tofu ferme
      note:
    note: 'Gluten : seitan ou portobello → tofu ferme.'
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
    note: 'Contient poisson (cabillaud ferme) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
  Ragoût de viande et de piments, emblème tex-mex. On le rattache au Texas et à la
  frontière mexicaine du XIXe s. (San Antonio) plus qu’à un plat « aztèque ». Les
  haricots sont discutés : au Texas, beaucoup de bowls historiques n’en avaient pas.
fun_facts:
- text: "« Chili queen » désigne les vendeuses de chili dans les rues de San Antonio à la fin du XIXe s."
  source_name: Histoire alimentaire texane courante
  source_url:
- text: "Le cumin et l’origan mexicain (pas l’origan méditerranéen) font le profil « chili » plus que le simple piment."
  source_name: Usage
  source_url:
wines:
- name: Côtes du Rhône
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, garrigue — piment et bœuf.
- name: Navarra
  producer: Bodegas Otazu
  origin: Navarre
  grapes: tempranillo, merlot
  award:
  why: Fruit mûr, tanin souple — haricots et chili.
- name: Malbec de Cahors
  producer: Château du Cèdre
  origin: Cahors
  grapes: malbec
  award:
  why: Violette, tanin — la viande hachée et le piment.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets: []
    allergens: []
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 60
      rest_min: 90
      total_min: 180
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: viande de bœuf hachée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: haricots rouges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
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
    - qty: 4
      unit: piece
      item: piment guajillo entier sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron (en plus ou pour remplacer le piment sec)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Préparation. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez
      des piments guajillo secs) et/ou poivrons.'
    - Cuisson. Mettez un peu d’huile végétale dans une casserole ou cocotte. Faites suer les oignons
      et l’ail. Rajoutez ensuite les piments et/ou poivrons.
    - Cuisson. Rajoutez la viande hachée, le cumin en poudre, le piment en poudre et assaisonnez. Laisser
      cuire tout en mélangeant régulièrement.
    - Cuisson. Rajoutez le concentré de tomate et le coulis de tomate. rajoutez un peu d’eau pour rendre
      la préparation un peu plus liquide et mélangez bien.
    - 'Cuisson. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous
      utilisez des haricots secs, n’oubliez pas qu’il faudra les avoir laissé tremper dans
      de l’eau pendant une nuit. Cuisez-les en amont de la recette : 45 minutes dans de l’eau
      salée, égouttez et réserver avant de mettre dans votre chili con carne.'
    - Finition. Laissez mijoter à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour
      éviter que le fond accroche ou brûle. Si vous constater que la préparation est trop
      épaisse, rajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez
      et réassaisonnez à votre goût. À servir avec du riz blanc, de la coriandre fraîche !
      Bon, et soyons d’accord, comme tout ragoût, il sera meilleur le lendemain !
    steps_niveaux:
      amateur:
      - "Découpes. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez des piments guajillo secs) et/ou poivrons."
      - "Suer. Mettez un peu d’huile végétale dans une casserole ou une cocotte. Faites suer les oignons et l’ail. Ajoutez ensuite les piments et/ou poivrons."
      - "Viande. Ajoutez la viande hachée, le cumin en poudre, le piment en poudre et assaisonnez. Faites cuire tout en mélangeant régulièrement."
      - "Tomate. Ajoutez le concentré de tomate et le coulis de tomate. Ajoutez un peu d’eau pour rendre la préparation un peu plus liquide et mélangez bien."
      - "Haricots. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous utilisez des haricots secs, faites-les tremper dans de l’eau pendant une nuit, cuisez-les en amont 45 minutes dans de l’eau salée, égouttez et réservez, puis versez-les dans le chili."
      - "Mijoter. [[mijoter|Laissez mijoter]] à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour éviter que le fond accroche ou brûle. Si la préparation est trop épaisse, ajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez et réassaisonnez selon votre goût. Servez avec de la coriandre fraîche."
      pro:
      - "Préparer les découpes : ail, oignons, piments (réhydratés en amont si piments guajillo secs) et/ou poivrons."
      - "Mettre un peu d’huile végétale dans une casserole ou une cocotte. Faire suer les oignons et l’ail. Ajouter les piments et/ou poivrons."
      - "Ajouter la viande hachée, le cumin en poudre, le piment en poudre. Assaisonner. Cuire en mélangeant régulièrement."
      - "Ajouter le concentré de tomate et le coulis de tomate. Ajouter un peu d’eau pour rendre la préparation un peu plus liquide. Mélanger."
      - "Haricots en conserve : verser dans la préparation. Haricots secs : tremper une nuit, cuire en amont 45 minutes dans de l’eau salée, égoutter, réserver, verser dans le chili."
      - "Mijoter à feu doux au moins 45 minutes. Mélanger de temps en temps pour éviter que le fond accroche ou brûle. Si trop épais, ajouter un peu d’eau. En fin de cuisson, goûter et réassaisonner. Servir avec de la coriandre fraîche."
      cavernes:
      - "Découpes. Ail, oignons, piments (réhydratés amont si piments guajillo secs) et/ou poivrons, préparer."
      - "Suer. Peu huile végétale, casserole ou cocotte. Oignons, ail, suer. Piments et/ou poivrons, ajouter."
      - "Viande. Viande hachée, cumin poudre, piment poudre, ajouter. Assaisonner. Cuire, mélanger régulièrement."
      - "Tomate. Concentré de tomate, coulis de tomate, ajouter. Peu eau, plus liquide. Mélanger."
      - "Haricots. Conserve : verser. Secs : tremper eau nuit. Cuire amont 45 minutes eau salée, égoutter, réserver, chili."
      - "Mijoter. Feu doux, moins 45 minutes. Mélanger. Fond accroche, éviter. Trop épaisse, peu eau, mélanger. Cuisson finie, goûter, réassaisonner. Coriandre fraîche."
    kcal_per_serving: 252
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: seitan ou portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: haricots rouges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
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
    - qty: 4
      unit: piece
      item: piment guajillo entier sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron (en plus ou pour remplacer le piment sec)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Préparation. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez
      des piments guajillo secs) et/ou poivrons.'
    - Cuisson. Mettez un peu d’huile végétale dans une casserole ou cocotte. Faites suer les oignons
      et l’ail. Rajoutez ensuite les piments et/ou poivrons.
    - Cuisson. Rajoutez le seitan (ou les portobellos) haché, le cumin, le piment en poudre et assaisonnez. Laisser
      cuire tout en mélangeant régulièrement.
    - Cuisson. Rajoutez le concentré de tomate et le coulis de tomate. rajoutez un peu d’eau pour rendre
      la préparation un peu plus liquide et mélangez bien.
    - 'Cuisson. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous
      utilisez des haricots secs, n’oubliez pas qu’il faudra les avoir laissé tremper dans
      de l’eau pendant une nuit. Cuisez-les en amont de la recette : 45 minutes dans de l’eau
      salée, égouttez et réserver avant de mettre dans votre chili con carne.'
    - Finition. Laissez mijoter à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour
      éviter que le fond accroche ou brûle. Si vous constater que la préparation est trop
      épaisse, rajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez
      et réassaisonnez à votre goût. À servir avec du riz blanc, de la coriandre fraîche !
      Bon, et soyons d’accord, comme tout ragoût, il sera meilleur le lendemain !
    steps_niveaux:
      amateur:
      - "Découpes. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez des piments guajillo secs) et/ou poivrons."
      - "Suer. Mettez un peu d’huile végétale dans une casserole ou une cocotte. Faites suer les oignons et l’ail. Ajoutez ensuite les piments et/ou poivrons."
      - "Seitan. Ajoutez le seitan (ou les portobellos) haché, le cumin, le piment en poudre et assaisonnez. Faites cuire tout en mélangeant régulièrement."
      - "Tomate. Ajoutez le concentré de tomate et le coulis de tomate. Ajoutez un peu d’eau pour rendre la préparation un peu plus liquide et mélangez bien."
      - "Haricots. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous utilisez des haricots secs, faites-les tremper dans de l’eau pendant une nuit, cuisez-les en amont 45 minutes dans de l’eau salée, égouttez et réservez, puis versez-les dans le chili."
      - "Mijoter. [[mijoter|Laissez mijoter]] à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour éviter que le fond accroche ou brûle. Si la préparation est trop épaisse, ajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez et réassaisonnez selon votre goût. Servez avec de la coriandre fraîche."
      pro:
      - "Préparer les découpes : ail, oignons, piments (réhydratés en amont si piments guajillo secs) et/ou poivrons."
      - "Mettre un peu d’huile végétale dans une casserole ou une cocotte. Faire suer les oignons et l’ail. Ajouter les piments et/ou poivrons."
      - "Ajouter le seitan (ou les portobellos) haché, le cumin, le piment en poudre. Assaisonner. Cuire en mélangeant régulièrement."
      - "Ajouter le concentré de tomate et le coulis de tomate. Ajouter un peu d’eau pour rendre la préparation un peu plus liquide. Mélanger."
      - "Haricots en conserve : verser dans la préparation. Haricots secs : tremper une nuit, cuire en amont 45 minutes dans de l’eau salée, égoutter, réserver, verser dans le chili."
      - "Mijoter à feu doux au moins 45 minutes. Mélanger de temps en temps pour éviter que le fond accroche ou brûle. Si trop épais, ajouter un peu d’eau. En fin de cuisson, goûter et réassaisonner. Servir avec de la coriandre fraîche."
      cavernes:
      - "Découpes. Ail, oignons, piments (réhydratés amont si piments guajillo secs) et/ou poivrons, préparer."
      - "Suer. Peu huile végétale, casserole ou cocotte. Oignons, ail, suer. Piments et/ou poivrons, ajouter."
      - "Seitan. Seitan ou portobellos haché, cumin, piment poudre, ajouter. Assaisonner. Cuire, mélanger régulièrement."
      - "Tomate. Concentré de tomate, coulis de tomate, ajouter. Peu eau, plus liquide. Mélanger."
      - "Haricots. Conserve : verser. Secs : tremper eau nuit. Cuire amont 45 minutes eau salée, égoutter, réserver, chili."
      - "Mijoter. Feu doux, moins 45 minutes. Mélanger. Fond accroche, éviter. Trop épaisse, peu eau, mélanger. Cuisson finie, goûter, réassaisonner. Coriandre fraîche."
    kcal_per_serving: 237
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: vegetarienne
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 237
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: cabillaud ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: haricots rouges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
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
    - qty: 4
      unit: piece
      item: piment guajillo entier sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron (en plus ou pour remplacer le piment sec)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Préparation. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez
      des piments guajillo secs) et/ou poivrons.'
    - Cuisson. Mettez un peu d’huile végétale dans une casserole ou cocotte. Faites suer les oignons
      et l’ail. Rajoutez ensuite les piments et/ou poivrons.
    - Cuisson. Rajoutez la viande hachée, le cumin en poudre, le piment en poudre et assaisonnez. Laisser
      cuire tout en mélangeant régulièrement.
    - Cuisson. Rajoutez le concentré de tomate et le coulis de tomate. rajoutez un peu d’eau pour rendre
      la préparation un peu plus liquide et mélangez bien.
    - 'Cuisson. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous
      utilisez des haricots secs, n’oubliez pas qu’il faudra les avoir laissé tremper dans
      de l’eau pendant une nuit. Cuisez-les en amont de la recette : 45 minutes dans de l’eau
      salée, égouttez et réserver avant de mettre dans votre chili con carne.'
    - Finition. Laissez mijoter à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour
      éviter que le fond accroche ou brûle. Si vous constater que la préparation est trop
      épaisse, rajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez
      et réassaisonnez à votre goût. À servir avec du riz blanc, de la coriandre fraîche !
      Bon, et soyons d’accord, comme tout ragoût, il sera meilleur le lendemain !
    steps_niveaux:
      amateur:
      - "Découpes. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez des piments guajillo secs) et/ou poivrons."
      - "Suer. Mettez un peu d’huile végétale dans une casserole ou une cocotte. Faites suer les oignons et l’ail. Ajoutez ensuite les piments et/ou poivrons."
      - "Viande. Ajoutez la viande hachée, le cumin en poudre, le piment en poudre et assaisonnez. Faites cuire tout en mélangeant régulièrement."
      - "Tomate. Ajoutez le concentré de tomate et le coulis de tomate. Ajoutez un peu d’eau pour rendre la préparation un peu plus liquide et mélangez bien."
      - "Haricots. Si vous utilisez des haricots en conserve, versez-les dans la préparation. Si vous utilisez des haricots secs, faites-les tremper dans de l’eau pendant une nuit, cuisez-les en amont 45 minutes dans de l’eau salée, égouttez et réservez, puis versez-les dans le chili."
      - "Mijoter. [[mijoter|Laissez mijoter]] à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour éviter que le fond accroche ou brûle. Si la préparation est trop épaisse, ajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez et réassaisonnez selon votre goût. Servez avec de la coriandre fraîche."
      pro:
      - "Préparer les découpes : ail, oignons, piments (réhydratés en amont si piments guajillo secs) et/ou poivrons."
      - "Mettre un peu d’huile végétale dans une casserole ou une cocotte. Faire suer les oignons et l’ail. Ajouter les piments et/ou poivrons."
      - "Ajouter la viande hachée, le cumin en poudre, le piment en poudre. Assaisonner. Cuire en mélangeant régulièrement."
      - "Ajouter le concentré de tomate et le coulis de tomate. Ajouter un peu d’eau pour rendre la préparation un peu plus liquide. Mélanger."
      - "Haricots en conserve : verser dans la préparation. Haricots secs : tremper une nuit, cuire en amont 45 minutes dans de l’eau salée, égoutter, réserver, verser dans le chili."
      - "Mijoter à feu doux au moins 45 minutes. Mélanger de temps en temps pour éviter que le fond accroche ou brûle. Si trop épais, ajouter un peu d’eau. En fin de cuisson, goûter et réassaisonner. Servir avec de la coriandre fraîche."
      cavernes:
      - "Découpes. Ail, oignons, piments (réhydratés amont si piments guajillo secs) et/ou poivrons, préparer."
      - "Suer. Peu huile végétale, casserole ou cocotte. Oignons, ail, suer. Piments et/ou poivrons, ajouter."
      - "Viande. Viande hachée, cumin poudre, piment poudre, ajouter. Assaisonner. Cuire, mélanger régulièrement."
      - "Tomate. Concentré de tomate, coulis de tomate, ajouter. Peu eau, plus liquide. Mélanger."
      - "Haricots. Conserve : verser. Secs : tremper eau nuit. Cuire amont 45 minutes eau salée, égoutter, réserver, chili."
      - "Mijoter. Feu doux, moins 45 minutes. Mélanger. Fond accroche, éviter. Trop épaisse, peu eau, mélanger. Cuisson finie, goûter, réassaisonner. Coriandre fraîche."
    kcal_per_serving: 167
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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

# Chili con carne
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/chili-con-carne]]

## Ingrédients (6 personnes)

- 500 g de viande de bœuf hachée
- 800 g de haricots rouges
- 1 L de coulis de tomate
- 35 g de concentré de tomate
- 1 oignon rouge
- 1 gousse d'ail
- 4 piment guajillo entier sec
- 1 poivron (en plus ou pour remplacer le piment sec)
- 2 cuillères à soupe rase de cumin
- 1 cuillère à soupe rase de piment en poudre
-  Coriandre

## Préparation

1. Préparez toutes vos découpes : ail, oignons, piments (réhydratés en amont si vous utilisez des piments guajillo secs) et/ou poivrons.
2. Mettez un peu d’huile végétale dans une casserole ou cocotte. Faites suer les oignons et l’ail. Rajoutez ensuite les piments et/ou poivrons.
3. Rajoutez la viande hachée, le cumin en poudre, le piment en poudre et assaisonnez. Laisser cuire tout en mélangeant régulièrement.
4. Rajoutez le concentré de tomate et le coulis de tomate. rajoutez un peu d’eau pour rendre la préparation un peu plus liquide et mélangez bien.
5. Si vous utilisez des haricots en conserve, versez-les dans la préparation.

Si vous utilisez des haricots secs, n’oubliez pas qu’il faudra les avoir laissé tremper dans de l’eau pendant une nuit. Cuisez-les en amont de la recette : 45 minutes dans de l’eau salée, égouttez et réserver avant de mettre dans votre chili con carne.
6. Laissez mijoter à feu doux pendant au moins 45 minutes. Mélangez de temps en temps pour éviter que le fond accroche ou brûle. Si vous constater que la préparation est trop épaisse, rajoutez un peu d’eau et mélangez. Lorsque la cuisson est terminée, goûtez et réassaisonnez à votre goût.

 
 

 
 À servir avec du riz blanc, de la coriandre fraîche ! Bon, et soyons d’accord, comme tout ragoût, il sera meilleur le lendemain !
