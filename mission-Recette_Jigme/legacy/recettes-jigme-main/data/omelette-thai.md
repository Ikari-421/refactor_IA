---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: omelette-thai
title: Omelette thaï
lang: fr
description: "Omelette thaï : recette thaïe avec œuf, bœuf et oignon, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: thaïe
category: salé
tags:
- salé
- œufs
- œuf
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/omelette-thai.webp
  alt: Omelette thaï
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/omelette-thai.md
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
    - from: seitan ou champignons portobello
      to: tofu ferme
      note:
    note: 'Gluten : seitan ou champignons portobello → tofu ferme.'
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
    note: 'Contient poisson (sauce nuoc-mâm) : pas d’adaptation fiable.'
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
    - from: tamari
      to: aminos de coco
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : tamari → aminos de coco ; œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf)
      ou tofu soyeux → pois chiches rôtis.'
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
histoire: 'Kai jeow (khai jiao) : omelette thaïe, œufs battus souvent à la sauce poisson, cuits dans beaucoup
  d’huile chaude, donc plus soufflée qu’une omelette française. La version garnie (viande, légumes) est
  un plat de riz, pas une omelette nature du petit-déjeuner français.

  '
fun_facts:
- text: >
    L’huile doit fumer légèrement : trop froide, l’omelette reste plate et grasse.
  source_name: Grokipedia, Omelette
  source_url: https://grokipedia.com/page/Omelette
- text: >
    Un filet de sauce poisson sale la pâte : on ne resale presque pas.
  source_name: Usage
  source_url:
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — l’œuf frit et la sauce poisson, sans un blanc lourd.
- name: Picpoul de Pinet
  producer: Cave de l'Ormarine
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron — l’huile de friture, acidité nette.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le plat de riz et d’omelette, sans un rouge.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - poêle
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: bœuf
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
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: citronelle
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
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: nuoc-mam
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez finement votre boeuf (ou achetez directement de la viande hachée). Faites le
      revenir dans une poêle bien chaude avec un filet d’huile végétale.
    - Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les
      dans la poêle contenant la viande. Quand le tout commence à colorer, baissez le feu,
      puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout
      est cuit, retirez la poêle du feu et réservez.
    - Cuisson. Dans un récipient, cassez vos oeufs et ajoutez la sauce nuoc mam pour leur donner un
      bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette.
    - Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude,
      versez vos oeufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez la viande
      et les légumes au centre.
    - Finition. Pour terminer, repliez les rebords de l’omelettes puis retournez-là. Pour cette étape,
      n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous.
      Finalisez la préparation en faisant une incision en forme de croix sur le sommet de
      l’omelette et en ajoutant quelques feuilles de coriandre hachées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez finement votre bœuf (ou achetez directement de la viande hachée). Faites-le revenir dans une poêle bien chaude avec un filet d’huile végétale."
      - "Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les dans la poêle contenant la viande. Quand le tout commence à colorer, baissez le feu, puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout est cuit, retirez la poêle [[hors-du-feu|hors du feu]] et réservez."
      - "Cuisson. Dans un récipient, cassez vos œufs et ajoutez la sauce nuoc mam pour leur donner un bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette."
      - "Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude, versez vos œufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez la viande et les légumes au centre."
      - "Finition. Pour terminer, repliez les rebords de l’omelette puis retournez-la. Pour cette étape, n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous. Finalisez la préparation en faisant une incision en forme de croix sur le sommet de l’omelette et en ajoutant quelques feuilles de coriandre hachées."
      pro:
      - "Découper finement le bœuf (ou viande hachée). Faire revenir dans une poêle bien chaude, filet d’huile végétale."
      - "Découper poivrons, oignons, ail, citronnelle. Ajouter dans la poêle contenant la viande. Dès coloration, baisser le feu. Ajouter coriandre et oignons nouveaux découpés finement. Une fois cuit, retirer la poêle hors du feu. Réserver."
      - "Casser les œufs. Ajouter la sauce nuoc mam. Battre au fouet ou à la fourchette."
      - "Chauffer une grande poêle, filet d’huile d’olive. Bien chaude, verser les œufs battus. Omelette cuite : couper le feu. Ajouter viande et légumes au centre."
      - "Replier les rebords de l’omelette. Retourner (technique de l’assiette, vidéo). Incision en croix sur le sommet. Feuilles de coriandre hachées."
      cavernes:
      - "Cuisson. Bœuf, découper finement. Ou viande hachée. Poêle bien chaude, filet huile végétale, revenir."
      - "Cuisson. Poivrons, oignons, ail, citronnelle, découper. Poêle, viande, ajouter. Colorer, feu, baisser. Coriandre, oignons nouveaux, découpés finement, ajouter. Cuit. Poêle, hors feu, réserver."
      - "Cuisson. Récipient. Œufs, casser. Sauce nuoc mam, ajouter. Goût, saler. Fouet ou fourchette, battre."
      - "Cuisson. Grande poêle, filet huile d’olive, chauffer. Bien chaude. Œufs battus, verser. Omelette cuite, feu, couper. Viande, légumes, centre, ajouter."
      - "Finition. Rebords omelette, replier. Retourner. Technique assiette, vidéo. Sommet, incision croix. Feuilles coriandre hachées, ajouter."
    kcal_per_serving: 352
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
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: seitan ou champignons portobello
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
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: cas
      item: tamari
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: citronelle
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
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez finement le seitan ou les portobellos. Faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale.
    - Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les
      dans la poêle contenant le seitan. Quand le tout commence à colorer, baissez le feu,
      puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout
      est cuit, retirez la poêle du feu et réservez.
    - Cuisson. Dans un récipient, cassez vos oeufs et ajoutez la tamari pour leur donner un bon goût
      et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette.
    - Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude,
      versez vos oeufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez le seitan et les légumes au centre.
    - Finition. Pour terminer, repliez les rebords de l’omelettes puis retournez-là. Pour cette étape,
      n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous.
      Finalisez la préparation en faisant une incision en forme de croix sur le sommet de
      l’omelette et en ajoutant quelques feuilles de coriandre hachées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez finement le seitan ou les portobellos. Faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale."
      - "Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les dans la poêle contenant le seitan. Quand le tout commence à colorer, baissez le feu, puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout est cuit, retirez la poêle [[hors-du-feu|hors du feu]] et réservez."
      - "Cuisson. Dans un récipient, cassez vos œufs et ajoutez la tamari pour leur donner un bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette."
      - "Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude, versez vos œufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez le seitan et les légumes au centre."
      - "Finition. Pour terminer, repliez les rebords de l’omelette puis retournez-la. Pour cette étape, n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous. Finalisez la préparation en faisant une incision en forme de croix sur le sommet de l’omelette et en ajoutant quelques feuilles de coriandre hachées."
      pro:
      - "Découper finement le seitan ou les portobellos. Faire revenir dans une poêle bien chaude, filet d’huile végétale."
      - "Découper poivrons, oignons, ail, citronnelle. Ajouter dans la poêle contenant le seitan. Dès coloration, baisser le feu. Ajouter coriandre et oignons nouveaux découpés finement. Une fois cuit, retirer la poêle hors du feu. Réserver."
      - "Casser les œufs. Ajouter la tamari. Battre au fouet ou à la fourchette."
      - "Chauffer une grande poêle, filet d’huile d’olive. Bien chaude, verser les œufs battus. Omelette cuite : couper le feu. Ajouter seitan et légumes au centre."
      - "Replier les rebords de l’omelette. Retourner (technique de l’assiette, vidéo). Incision en croix sur le sommet. Feuilles de coriandre hachées."
      cavernes:
      - "Cuisson. Seitan ou portobellos, découper finement. Poêle bien chaude, filet huile végétale, revenir."
      - "Cuisson. Poivrons, oignons, ail, citronnelle, découper. Poêle, seitan, ajouter. Colorer, feu, baisser. Coriandre, oignons nouveaux, découpés finement, ajouter. Cuit. Poêle, hors feu, réserver."
      - "Cuisson. Récipient. Œufs, casser. Tamari, ajouter. Goût, saler. Fouet ou fourchette, battre."
      - "Cuisson. Grande poêle, filet huile d’olive, chauffer. Bien chaude. Œufs battus, verser. Omelette cuite, feu, couper. Seitan, légumes, centre, ajouter."
      - "Finition. Rebords omelette, replier. Retourner. Technique assiette, vidéo. Sommet, incision croix. Feuilles coriandre hachées, ajouter."
    kcal_per_serving: 334
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: seitan ou champignons portobello
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
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: cas
      item: tamari
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: citronelle
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
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez finement le seitan ou les champignons portobello. Faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale.
    - Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les
      dans la poêle contenant le seitan (ou les champignons). Quand le tout commence à colorer, baissez le feu,
      puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout
      est cuit, retirez la poêle du feu et réservez.
    - Cuisson. Dans un récipient, versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) et ajoutez le tamari pour lui donner du goût et le saler. Battez le tout à l’aide d’un fouet ou d’une fourchette.
    - Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude,
      versez le tofu soyeux (ou l’œuf de lin) battu. Dès que l’omelette est cuite, coupez le feu et ajoutez le seitan (ou les champignons) et les légumes au centre.
    - Finition. Pour terminer, repliez les rebords de l’omelettes puis retournez-là. Pour cette étape,
      n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous.
      Finalisez la préparation en faisant une incision en forme de croix sur le sommet de
      l’omelette et en ajoutant quelques feuilles de coriandre hachées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez finement le seitan ou les champignons portobello. Faites-les revenir dans une poêle bien chaude avec un filet d’huile végétale."
      - "Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les dans la poêle contenant le seitan (ou les champignons). Quand le tout commence à colorer, baissez le feu, puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout est cuit, retirez la poêle [[hors-du-feu|hors du feu]] et réservez."
      - "Cuisson. Dans un récipient, versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) et ajoutez le tamari pour lui donner du goût et le saler. Battez le tout à l’aide d’un fouet ou d’une fourchette."
      - "Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude, versez le tofu soyeux (ou l’œuf de lin) battu. Dès que l’omelette est cuite, coupez le feu et ajoutez le seitan (ou les champignons) et les légumes au centre."
      - "Finition. Pour terminer, repliez les rebords de l’omelette puis retournez-la. Pour cette étape, n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous. Finalisez la préparation en faisant une incision en forme de croix sur le sommet de l’omelette et en ajoutant quelques feuilles de coriandre hachées."
      pro:
      - "Découper finement le seitan ou les champignons portobello. Faire revenir dans une poêle bien chaude, filet d’huile végétale."
      - "Découper poivrons, oignons, ail, citronnelle. Ajouter dans la poêle contenant le seitan (ou les champignons). Dès coloration, baisser le feu. Ajouter coriandre et oignons nouveaux découpés finement. Une fois cuit, retirer la poêle hors du feu. Réserver."
      - "Verser le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf). Ajouter le tamari. Battre au fouet ou à la fourchette."
      - "Chauffer une grande poêle, filet d’huile d’olive. Bien chaude, verser le tofu soyeux (ou l’œuf de lin) battu. Omelette cuite : couper le feu. Ajouter seitan (ou champignons) et légumes au centre."
      - "Replier les rebords de l’omelette. Retourner (technique de l’assiette, vidéo). Incision en croix sur le sommet. Feuilles de coriandre hachées."
      cavernes:
      - "Cuisson. Seitan ou champignons portobello, découper finement. Poêle bien chaude, filet huile végétale, revenir."
      - "Cuisson. Poivrons, oignons, ail, citronnelle, découper. Poêle, seitan ou champignons, ajouter. Colorer, feu, baisser. Coriandre, oignons nouveaux, découpés finement, ajouter. Cuit. Poêle, hors feu, réserver."
      - "Cuisson. Récipient. Tofu soyeux, verser. Ou œuf-lin, 1 c.à.s. lin + 3 c.à.s. eau par œuf. Tamari, ajouter. Goût, saler. Fouet ou fourchette, battre."
      - "Cuisson. Grande poêle, filet huile d’olive, chauffer. Bien chaude. Tofu soyeux ou œuf-lin battu, verser. Omelette cuite, feu, couper. Seitan ou champignons, légumes, centre, ajouter."
      - "Finition. Rebords omelette, replier. Retourner. Technique assiette, vidéo. Sommet, incision croix. Feuilles coriandre hachées, ajouter."
    kcal_per_serving: 334
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
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: thon ou cabillaud
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
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: citronelle
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
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez finement votre boeuf (ou achetez directement de la viande hachée). Faites le
      revenir dans une poêle bien chaude avec un filet d’huile végétale.
    - Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les
      dans la poêle contenant la viande. Quand le tout commence à colorer, baissez le feu,
      puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout
      est cuit, retirez la poêle du feu et réservez.
    - Cuisson. Dans un récipient, cassez vos oeufs et ajoutez la sauce nuoc mam pour leur donner un
      bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette.
    - Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude,
      versez vos oeufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez la viande
      et les légumes au centre.
    - Finition. Pour terminer, repliez les rebords de l’omelettes puis retournez-là. Pour cette étape,
      n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous.
      Finalisez la préparation en faisant une incision en forme de croix sur le sommet de
      l’omelette et en ajoutant quelques feuilles de coriandre hachées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez finement votre bœuf (ou achetez directement de la viande hachée). Faites-le revenir dans une poêle bien chaude avec un filet d’huile végétale."
      - "Cuisson. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les dans la poêle contenant la viande. Quand le tout commence à colorer, baissez le feu, puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout est cuit, retirez la poêle [[hors-du-feu|hors du feu]] et réservez."
      - "Cuisson. Dans un récipient, cassez vos œufs et ajoutez la sauce nuoc mam pour leur donner un bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette."
      - "Cuisson. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude, versez vos œufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez la viande et les légumes au centre."
      - "Finition. Pour terminer, repliez les rebords de l’omelette puis retournez-la. Pour cette étape, n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous. Finalisez la préparation en faisant une incision en forme de croix sur le sommet de l’omelette et en ajoutant quelques feuilles de coriandre hachées."
      pro:
      - "Découper finement le bœuf (ou viande hachée). Faire revenir dans une poêle bien chaude, filet d’huile végétale."
      - "Découper poivrons, oignons, ail, citronnelle. Ajouter dans la poêle contenant la viande. Dès coloration, baisser le feu. Ajouter coriandre et oignons nouveaux découpés finement. Une fois cuit, retirer la poêle hors du feu. Réserver."
      - "Casser les œufs. Ajouter la sauce nuoc mam. Battre au fouet ou à la fourchette."
      - "Chauffer une grande poêle, filet d’huile d’olive. Bien chaude, verser les œufs battus. Omelette cuite : couper le feu. Ajouter viande et légumes au centre."
      - "Replier les rebords de l’omelette. Retourner (technique de l’assiette, vidéo). Incision en croix sur le sommet. Feuilles de coriandre hachées."
      cavernes:
      - "Cuisson. Bœuf, découper finement. Ou viande hachée. Poêle bien chaude, filet huile végétale, revenir."
      - "Cuisson. Poivrons, oignons, ail, citronnelle, découper. Poêle, viande, ajouter. Colorer, feu, baisser. Coriandre, oignons nouveaux, découpés finement, ajouter. Cuit. Poêle, hors feu, réserver."
      - "Cuisson. Récipient. Œufs, casser. Sauce nuoc mam, ajouter. Goût, saler. Fouet ou fourchette, battre."
      - "Cuisson. Grande poêle, filet huile d’olive, chauffer. Bien chaude. Œufs battus, verser. Omelette cuite, feu, couper. Viande, légumes, centre, ajouter."
      - "Finition. Rebords omelette, replier. Retourner. Technique assiette, vidéo. Sommet, incision croix. Feuilles coriandre hachées, ajouter."
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegetarienne:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  pesco:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
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

# Omelette thaï

![[omelette-thai.webp]]
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/omelette-thai]]

## Ingrédients (4 personnes)

- 8 œuf
- 400 g de bœuf
- 1 oignon
- 1 poivron
- 1 gousse d'ail
- 1 c.à.s de sauce nuoc-mâm
-  citronelle
-  coriandre
-  huile végétale

## Préparation

1. Découpez finement votre boeuf (ou achetez directement de la viande hachée). Faites le revenir dans une poêle bien chaude avec un filet d’huile végétale.
2. Découpez vos différents ingrédients (poivrons, oignons, ail, citronnelle) et ajoutez-les dans la poêle contenant la viande. Quand le tout commence à colorer, baissez le feu, puis ajoutez la coriandre et les oignons nouveaux découpés finement. Une fois que tout est cuit, retirez la poêle du feu et réservez.
3. Dans un récipient, cassez vos oeufs et ajoutez la sauce nuoc mam pour leur donner un bon goût et les saler. Battez le tout à l’aide d’un fouet ou d’une fourchette.
4. Faites chauffer une grande poêle avec un filet d’huile d’olive. Une fois bien chaude, versez vos oeufs battus. Dès que l’omelette est cuite, coupez le feu et ajoutez la viande et les légumes au centre.
5. Pour terminer, repliez les rebords de l’omelettes puis retournez-là. Pour cette étape, n’hésitez pas à appliquer la technique de l’assiette qu’on montre dans la vidéo ci-dessous.

 
 

 
 Finalisez la préparation en faisant une incision en forme de croix sur le sommet de l’omelette et en ajoutant quelques feuilles de coriandre hachées. Bon appétit !
