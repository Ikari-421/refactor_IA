---
schema: recette-web-jigme/v2
slug: salade-thai-au-poulet
title: Salade thaï au poulet
lang: fr
description: "Salade thaï au poulet : recette thaïe avec beurre de cacahuètes, gousse d'ail et sauce de poisson, pour 4 personnes. Version maison."
cuisine: thaïe
category: salé
tags:
- salé
- salade
- poulet
- thaï
image:
  url:
  alt: Salade thaï au poulet
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-thai-au-poulet.md
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
    - from: sauce soja + citron vert
      to: tamari sans gluten
      note:
    note: 'Gluten : sauce soja + citron vert → tamari sans gluten.'
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
    - from: tofu ferme
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
    note: 'Contient arachides (beurre de cacahuètes) : pas d’adaptation fiable.'
  sans_sesame:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sesame
    swaps:
    - from: sésame
      to: graines de courge
      note:
    - from: tahini
      to: purée de tournesol
      note:
    note: Remplacer sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Salade thaïe au poulet : herbes, citronnelle, nuoc-mâm, piment, parfois cacahuète. Cousine
  du larb / laab (Laos, Isaan) plus que d’une salade française. Le larb se fixe dans les livres aux XIXe–XXe
  s. Ici, une lecture « thaïe » de salade de poulet.

  '
fun_facts:
- text: >
    Le riz grillé pilé (khao khua) parfume le larb ; sans lui, il reste une salade
    d’herbes.
  source_name: Grokipedia, Nam tok (food)
  source_url: https://grokipedia.com/page/Nam_tok_(food)
- text: >
    Citron vert et nuoc-mâm se dosent à la fin : trop tôt, les herbes noircissent.
  source_name: Usage
  source_url:
wines:
- name: Alsace Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — le piment et le nuoc-mâm.
- name: Alsace Gewurztraminer
  producer: Cave de Hunawihr
  origin: Hunawihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi — la citronnelle, un blanc aromatique.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — la salade, sans un rouge tannique.
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
    - poisson
    - soja
    - sesame
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 0
      rest_min: 0
      total_min: 20
    equipment: &id002
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: cas
      item: beurre de cacahuètes
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
    - qty: 2
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cas
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 3
      unit: piece
      item: poivron
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: g
      item: pois gourmands
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
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: blanc de poulet
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 40
      unit: g
      item: cacahuètes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriande fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraiche
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
    - Préparation. Si vous n’utilisez pas des restes de blancs de poulet pour cette recette, pensez à les
      faire cuire et les réservez au frais avant de commencer la préparation de cette salade.
    - Mixage. Commencez par préparer la sauce. Dans blender, déposez le beurre de cacahuète, l’ail
      haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce nuoc mam, un peu
      de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez le tout
      jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette.
    - Cuisson. Découpez les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon
      nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère
      au préalable.
    - Cuisson. Émiettez les blancs de poulet de manière a obtenir des petits morceaux assez fin.
    - Dressage. Dressez vos assiettes en disposant les légumes, un peu de poulet émietté puis des herbes
      fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes
      concassées et un filet de la sauce que vous avez préparez précédemment et le tour est
      joué ! N’hésitez pas à ajouter un trait de jus de citron vert avant de déguster. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Si vous n’utilisez pas des restes de blancs de poulet, faites-les cuire et réservez-les au frais avant de commencer la salade."
      - "Mixage. Préparez la sauce. Dans un blender, déposez le beurre de cacahuète, l’ail haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce nuoc mam, un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette."
      - "Cuisson. Découpez les légumes [[julienne|en julienne]] (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère au préalable."
      - "Cuisson. Émiettez les blancs de poulet de manière à obtenir des petits morceaux assez fins."
      - "Dressage. Dressez vos assiettes en disposant les légumes, un peu de poulet émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes concassées et un filet de la sauce préparée. Ajoutez un trait de jus de citron vert avant de déguster."
      pro:
      - "Si ce n’est pas des restes de blancs de poulet : cuire, réserver au frais avant la salade."
      - "Sauce : blender, beurre de cacahuète, ail haché, gingembre (selon le goût). Ajouter sauce nuoc mam, un peu de piment (entier ou poudre), huile de sésame, lait de coco. Mixer jusqu’à texture lisse. Réserver au frigo."
      - "Tailler les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : retirer les pépins à la cuillère au préalable, optionnel."
      - "Émietter les blancs de poulet en petits morceaux assez fins."
      - "Dresser : légumes, un peu de poulet émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet de sauce. Trait de jus de citron vert avant de déguster."
      cavernes:
      - "Préparation. Si pas restes blancs poulet : cuire, frais, réserver, avant salade."
      - "Mixage. Sauce. Blender : beurre cacahuète, ail haché, gingembre (goût). Sauce nuoc mam, peu piment (entier ou poudre), huile sésame, lait coco. Mixer, texture lisse. Frigo, réserver."
      - "Cuisson. Légumes, julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : pépins, cuillère, retirer, option."
      - "Cuisson. Blancs poulet, émietter, petits morceaux assez fins."
      - "Dressage. Assiettes : légumes, peu poulet émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet sauce. Trait jus citron vert, déguster."
    kcal_per_serving: 473
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
    - sesame
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: cas
      item: beurre de cacahuètes
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
    - qty: 2
      unit: cas
      item: sauce soja + citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cas
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 3
      unit: piece
      item: poivron
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: g
      item: pois gourmands
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
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: paneer (cubes)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 40
      unit: g
      item: cacahuètes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriande fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Dressage. Faites dorer le paneer (ou utilisez des restes déjà cuits) et réservez-le au frais avant de commencer la salade.
    - Mixage. Commencez par préparer la sauce. Dans blender, déposez le beurre de cacahuète, l’ail
      haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce soja + citron vert,
      un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez
      le tout jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette.
    - Cuisson. Découpez les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon
      nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère
      au préalable.
    - Cuisson. Émiettez le paneer de manière à obtenir de petits morceaux assez fins.
    - Dressage. Dressez vos assiettes en disposant les légumes, un peu de paneer émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes
      concassées et un filet de la sauce que vous avez préparez précédemment et le tour est
      joué ! N’hésitez pas à ajouter un trait de jus de citron vert avant de déguster. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Dressage. Faites dorer le paneer (ou utilisez des restes déjà cuits) et réservez-le au frais avant de commencer la salade."
      - "Mixage. Préparez la sauce. Dans un blender, déposez le beurre de cacahuète, l’ail haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce soja + citron vert, un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette."
      - "Cuisson. Découpez les légumes [[julienne|en julienne]] (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère au préalable."
      - "Cuisson. Émiettez le paneer de manière à obtenir de petits morceaux assez fins."
      - "Dressage. Dressez vos assiettes en disposant les légumes, un peu de paneer émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes concassées et un filet de la sauce préparée. Ajoutez un trait de jus de citron vert avant de déguster."
      pro:
      - "Faire dorer le paneer (ou restes déjà cuits). Réserver au frais avant la salade."
      - "Sauce : blender, beurre de cacahuète, ail haché, gingembre (selon le goût). Ajouter sauce soja + citron vert, un peu de piment (entier ou poudre), huile de sésame, lait de coco. Mixer jusqu’à texture lisse. Réserver au frigo."
      - "Tailler les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : retirer les pépins à la cuillère au préalable, optionnel."
      - "Émietter le paneer en petits morceaux assez fins."
      - "Dresser : légumes, un peu de paneer émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet de sauce. Trait de jus de citron vert avant de déguster."
      cavernes:
      - "Dressage. Paneer, dorer (ou restes déjà cuits). Frais, réserver, avant salade."
      - "Mixage. Sauce. Blender : beurre cacahuète, ail haché, gingembre (goût). Sauce soja + citron vert, peu piment (entier ou poudre), huile sésame, lait coco. Mixer, texture lisse. Frigo, réserver."
      - "Cuisson. Légumes, julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : pépins, cuillère, retirer, option."
      - "Cuisson. Paneer, émietter, petits morceaux assez fins."
      - "Dressage. Assiettes : légumes, peu paneer émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet sauce. Trait jus citron vert, déguster."
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
    - sesame
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: cas
      item: margarine végétale
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
    - qty: 2
      unit: cas
      item: sauce soja + citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cas
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 3
      unit: piece
      item: poivron
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: g
      item: pois gourmands
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
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: tofu ferme
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 40
      unit: g
      item: cacahuètes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriande fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Dressage. Faites dorer le tofu ferme, émiettez-le et réservez au frais.
    - Mixage. Commencez par préparer la sauce. Dans blender, déposez le beurre de cacahuète, l’ail
      haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce soja + citron vert,
      un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez
      le tout jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette.
    - Cuisson. Découpez les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon
      nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère
      au préalable.
    - Cuisson. Émiettez le tofu ferme en petits morceaux.
    - Dressage. Dressez vos assiettes en disposant les légumes, un peu de tofu émietté puis des herbes
      fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes
      concassées et un filet de la sauce que vous avez préparez précédemment et le tour est
      joué ! N’hésitez pas à ajouter un trait de jus de citron vert avant de déguster. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Dressage. Faites dorer le tofu ferme, émiettez-le et réservez au frais."
      - "Mixage. Préparez la sauce. Dans un blender, déposez le beurre de cacahuète, l’ail haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce soja + citron vert, un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette."
      - "Cuisson. Découpez les légumes [[julienne|en julienne]] (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère au préalable."
      - "Cuisson. Émiettez le tofu ferme en petits morceaux."
      - "Dressage. Dressez vos assiettes en disposant les légumes, un peu de tofu émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes concassées et un filet de la sauce préparée. Ajoutez un trait de jus de citron vert avant de déguster."
      pro:
      - "Faire dorer le tofu ferme, émietter, réserver au frais."
      - "Sauce : blender, beurre de cacahuète, ail haché, gingembre (selon le goût). Ajouter sauce soja + citron vert, un peu de piment (entier ou poudre), huile de sésame, lait de coco. Mixer jusqu’à texture lisse. Réserver au frigo."
      - "Tailler les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : retirer les pépins à la cuillère au préalable, optionnel."
      - "Émietter le tofu ferme en petits morceaux."
      - "Dresser : légumes, un peu de tofu émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet de sauce. Trait de jus de citron vert avant de déguster."
      cavernes:
      - "Dressage. Tofu ferme, dorer, émietter, frais, réserver."
      - "Mixage. Sauce. Blender : beurre cacahuète, ail haché, gingembre (goût). Sauce soja + citron vert, peu piment (entier ou poudre), huile sésame, lait coco. Mixer, texture lisse. Frigo, réserver."
      - "Cuisson. Légumes, julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : pépins, cuillère, retirer, option."
      - "Cuisson. Tofu ferme, émietter, petits morceaux."
      - "Dressage. Assiettes : légumes, peu tofu émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet sauce. Trait jus citron vert, déguster."
    kcal_per_serving: 366
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
    - soja
    - sesame
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: cas
      item: beurre de cacahuètes
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
    - qty: 2
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cas
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 3
      unit: piece
      item: poivron
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: g
      item: pois gourmands
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
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: cabillaud (cubes)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 40
      unit: g
      item: cacahuètes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriande fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Si vous n’utilisez pas des restes de blancs de poulet pour cette recette, pensez à les
      faire cuire et les réservez au frais avant de commencer la préparation de cette salade.
    - Mixage. Commencez par préparer la sauce. Dans blender, déposez le beurre de cacahuète, l’ail
      haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce nuoc mam, un peu
      de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez le tout
      jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette.
    - Cuisson. Découpez les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon
      nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère
      au préalable.
    - Cuisson. Émiettez les blancs de poulet de manière a obtenir des petits morceaux assez fin.
    - Dressage. Dressez vos assiettes en disposant les légumes, un peu de poulet émietté puis des herbes
      fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes
      concassées et un filet de la sauce que vous avez préparez précédemment et le tour est
      joué ! N’hésitez pas à ajouter un trait de jus de citron vert avant de déguster. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Si vous n’utilisez pas des restes de blancs de poulet, faites-les cuire et réservez-les au frais avant de commencer la salade."
      - "Mixage. Préparez la sauce. Dans un blender, déposez le beurre de cacahuète, l’ail haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce nuoc mam, un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette."
      - "Cuisson. Découpez les légumes [[julienne|en julienne]] (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère au préalable."
      - "Cuisson. Émiettez les blancs de poulet de manière à obtenir des petits morceaux assez fins."
      - "Dressage. Dressez vos assiettes en disposant les légumes, un peu de poulet émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes concassées et un filet de la sauce préparée. Ajoutez un trait de jus de citron vert avant de déguster."
      pro:
      - "Si ce n’est pas des restes de blancs de poulet : cuire, réserver au frais avant la salade."
      - "Sauce : blender, beurre de cacahuète, ail haché, gingembre (selon le goût). Ajouter sauce nuoc mam, un peu de piment (entier ou poudre), huile de sésame, lait de coco. Mixer jusqu’à texture lisse. Réserver au frigo."
      - "Tailler les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : retirer les pépins à la cuillère au préalable, optionnel."
      - "Émietter les blancs de poulet en petits morceaux assez fins."
      - "Dresser : légumes, un peu de poulet émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet de sauce. Trait de jus de citron vert avant de déguster."
      cavernes:
      - "Préparation. Si pas restes blancs poulet : cuire, frais, réserver, avant salade."
      - "Mixage. Sauce. Blender : beurre cacahuète, ail haché, gingembre (goût). Sauce nuoc mam, peu piment (entier ou poudre), huile sésame, lait coco. Mixer, texture lisse. Frigo, réserver."
      - "Cuisson. Légumes, julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Concombre : pépins, cuillère, retirer, option."
      - "Cuisson. Blancs poulet, émietter, petits morceaux assez fins."
      - "Dressage. Assiettes : légumes, peu poulet émietté, herbes fraîches hachées (menthe, basilic, coriandre). Cacahuètes concassées, filet sauce. Trait jus citron vert, déguster."
    kcal_per_serving: 334
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegetarienne:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegan:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  pesco:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade thaï au poulet
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-thai-au-poulet]]

## Ingrédients (4 personnes)

- 1 c.à.s de beurre de cacahuètes
- 1 gousse d'ail
- 2 c.à.s de sauce nuoc mam
- 3 c.à.s d'huile de sésame
- 5 c.à.s de lait de coco
-  gingembre
-  piment
- 3 poivron
- 2 poignée de pois gourmands
- 2 carotte
- 0.5 chou rouge
- 2 oignon nouveau
- 1 concombre
- 3 blanc de poulet
- 1 poignée de cacahuètes
-  pousses de soja
-  coriande fraiche
-  basilic frais
-  menthe fraiche

## Préparation

1. Si vous n’utilisez pas des restes de blancs de poulet pour cette recette, pensez à les faire cuire et les réservez au frais avant de commencer la préparation de cette salade.
2. Commencez par préparer la sauce. Dans blender, déposez le beurre de cacahuète, l’ail haché et le gingembre (à doser selon vos goûts). Ajoutez de la sauce nuoc mam, un peu de piment (entier ou en poudre), de l’huile de sésame et du lait de coco. Mixez le tout jusqu’à obtenir une texture lisse. Réservez au frigo le temps de finir la recette.
3. Découpez les légumes en julienne (poivron, carotte, concombre, pois gourmand, oignon nouveau, chou). Pour le concombre, vous pouvez retirer les pépins à l’aide d’une cuillère au préalable.
4. Émiettez les blancs de poulet de manière a obtenir des petits morceaux assez fin.
5. Dressez vos assiettes en disposant les légumes, un peu de poulet émietté puis des herbes fraîches hachées (menthe, basilic et coriandre). Complétez avec quelques cacahuètes concassées et un filet de la sauce que vous avez préparez précédemment et le tour est joué !

 
 

 
 N’hésitez pas à ajouter un trait de jus de citron vert avant de déguster. Bon appétit !
