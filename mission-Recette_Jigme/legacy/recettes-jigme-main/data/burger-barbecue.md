---
schema: recette-web-jigme/v2
slug: burger-barbecue
title: Burger barbecue
lang: fr
description: "Burger barbecue : recette américaine avec pain à burger, steak haché et avocat, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: salé
tags:
- salé
- burger
- pain à burger
- plat
image:
  url:
  alt: Burger barbecue
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/burger-barbecue.md
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
    - from: sauce soja (salée)
      to: tamari sans gluten
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: mimolette
      to: comté affiné (naturellement quasi sans lactose)
      note:
    note: 'Lactose : mimolette → comté affiné (naturellement quasi sans lactose).'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: mimolette
      to: fromage végétal
      note:
    note: 'Produits laitiers : mimolette → fromage végétal.'
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
    note: 'Contient poisson (pavé de thon) : pas d’adaptation fiable.'
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
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
  Hamburger américain + sauce barbecue (tomate, vinaigre, sucre, fumée). La sauce BBQ
  américaine se diversifie selon les Carolines, le Kansas, le Texas ; ici c’est un
  burger garni, pas une école régionale.
fun_facts:
- text: "Une sauce trop sucrée brûle sur le grill : on la badigeonne en fin de cuisson."
  source_name: Usage BBQ
  source_url:
- text: "Le bœuf haché se tient mieux à 15–20 % de gras, cuit à cœur pour les personnes fragiles."
  source_name: Usage / sécurité
  source_url:
wines:
- name: Zinfandel
  producer: Ridge (cuvees d’entrée) 
  origin: Californie
  grapes: zinfandel
  award:
  why: Mûre, sucrosité de fruit — la sauce BBQ. (prendre une cuvée sous 30 €, pas Monte Bello.)
- name: Corbières
  producer: Château de Lastours
  origin: Corbières, Languedoc
  grapes: syrah, grenache
  award:
  why: Garrigue, fruit — tomate, vinaigre, grillade.
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah, mourvèdre
  award:
  why: Épice, fruit — le fromage et la sauce.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 2
      rest_min: 0
      total_min: 32
    equipment: &id002
    - four
    - poêle
    - saladier
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steak haché
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocat
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
    - qty:
      unit:
      item: mimolette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ketchup
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja (salée)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte tandoori
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commençons par la sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja
      salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et
      poivrez à votre convenance.
    - Cuisson. Épluchez un oignon rouge et coupez-le en rondelle. Coupez l’avocat en deux, videz-le
      à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines
      tranches de mimolettes.
    - Cuisson. Faites cuire un steak haché dans une poêle. On a choisi de le cuire bleue, car la cuisson
      se poursuivra ensuite au four. N’hésitez pas à le cuire plus si vous le préférez à point.
      Débarrassez sur une plaque allant au four, puis déposez par dessus plusieurs tranches
      de mimolette. Terminez la cuisson au four, à 180° pendant quelques minutes, le temps
      que le fromages soit bien fondant.
    - Finition. Coupez le pain à burger en deux et passez le au toaster. Tartinez le pain du bas du
      burger avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques
      lamelles d’oignon rouge, de l’avocat en franche et des feuilles de roquette. Finalisez
      en déposant le chapeau de votre burger. C’est prêt ! Il ne vous reste plus qu’à déguster
      ce délicieux burger accompagné de quelques frites croustillante ou d’une salade que
      vous aurez fait avec les reste de roquette, d’oignon rouge et d’avocat. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et poivrez à votre convenance."
      - "Coupes. Épluchez un oignon rouge et coupez-le en rondelles. Coupez l’avocat en deux, videz-le à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines tranches de mimolette."
      - "Steak. Faites cuire un steak haché dans une poêle, bleue : la cuisson se poursuit au four. Cuisez-le plus si vous le préférez à point. Débarrassez-le sur une plaque allant au four, déposez par-dessus plusieurs tranches de mimolette. Terminez au four, à 180°, pendant quelques minutes, le temps que le fromage soit fondant."
      - "Montage. Coupez le pain à burger en deux et passez-le au toaster. Tartinez le pain du bas avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques lamelles d’oignon rouge, de l’avocat en tranches et des feuilles de roquette. Déposez le chapeau. Servez avec des frites ou une salade faite avec le reste de roquette, d’oignon rouge et d’avocat."
      pro:
      - "Mélanger ketchup et sauce soja salée selon le goût. Ajouter 1 c.à.c de pâte tandoori. Mélanger. Saler, poivrer."
      - "Éplucher l’oignon rouge, le couper en rondelles. Couper l’avocat en deux, le vider à la cuillère, le tailler en fines tranches. Tailler quelques fines tranches de mimolette."
      - "Cuire un steak haché à la poêle, bleu (la cuisson se poursuit au four) ; plus longtemps si à point. Débarrasser sur plaque, recouvrir de tranches de mimolette. Terminer au four à 180° quelques minutes, fromage fondant."
      - "Couper le pain à burger en deux, passer au toaster. Tartiner le pain du bas de sauce barbecue. Garnir : steak, fromage fondant, lamelles d’oignon rouge, avocat, roquette. Poser le chapeau. Servir avec frites ou salade des restes."
      cavernes:
      - "Sauce. Bol. Ketchup, sauce soja salée, mélanger selon goût. 1 c.à.c pâte tandoori, mélanger. Sel, poivre."
      - "Coupes. Oignon rouge, éplucher, rondelles. Avocat, couper deux, vider cuillère, fines tranches. Mimolette, fines tranches."
      - "Steak. Steak haché, poêle, cuire bleue. Cuisson continue four. Ou plus, à point. Plaque four. Mimolette dessus. Four 180° quelques minutes, fromage fondant."
      - "Montage. Pain burger, couper deux, toaster. Pain bas, sauce barbecue, tartiner. Steak, fromage fondant, oignon rouge, avocat, roquette. Chapeau. Frites ou salade restes."
    kcal_per_serving: 276
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
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocat
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
    - qty:
      unit:
      item: mimolette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ketchup
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja (salée)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte tandoori
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commençons par la sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja
      salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et
      poivrez à votre convenance.
    - Cuisson. Épluchez un oignon rouge et coupez-le en rondelle. Coupez l’avocat en deux, videz-le
      à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines
      tranches de mimolettes.
    - Cuisson. Faites cuire le steak de pleurotes dans une poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrassez sur une plaque allant au four, puis déposez par dessus plusieurs
      tranches de mimolette. Terminez la cuisson au four, à 180° pendant quelques minutes,
      le temps que le fromages soit bien fondant.
    - Finition. Coupez le pain à burger en deux et passez le au toaster. Tartinez le pain du bas du
      burger avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques
      lamelles d’oignon rouge, de l’avocat en franche et des feuilles de roquette. Finalisez
      en déposant le chapeau de votre burger. C’est prêt ! Il ne vous reste plus qu’à déguster
      ce délicieux burger accompagné de quelques frites croustillante ou d’une salade que
      vous aurez fait avec les reste de roquette, d’oignon rouge et d’avocat. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et poivrez à votre convenance."
      - "Coupes. Épluchez un oignon rouge et coupez-le en rondelles. Coupez l’avocat en deux, videz-le à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines tranches de mimolette."
      - "Pleurotes. Faites cuire le steak de pleurotes dans une poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrassez-le sur une plaque allant au four, déposez par-dessus plusieurs tranches de mimolette. Terminez au four, à 180°, pendant quelques minutes, le temps que le fromage soit fondant."
      - "Montage. Coupez le pain à burger en deux et passez-le au toaster. Tartinez le pain du bas avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques lamelles d’oignon rouge, de l’avocat en tranches et des feuilles de roquette. Déposez le chapeau. Servez avec des frites ou une salade faite avec le reste de roquette, d’oignon rouge et d’avocat."
      pro:
      - "Mélanger ketchup et sauce soja salée selon le goût. Ajouter 1 c.à.c de pâte tandoori. Mélanger. Saler, poivrer."
      - "Éplucher l’oignon rouge, le couper en rondelles. Couper l’avocat en deux, le vider à la cuillère, le tailler en fines tranches. Tailler quelques fines tranches de mimolette."
      - "Cuire le steak de pleurotes à la poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrasser sur plaque, recouvrir de tranches de mimolette. Terminer au four à 180° quelques minutes, fromage fondant."
      - "Couper le pain à burger en deux, passer au toaster. Tartiner le pain du bas de sauce barbecue. Garnir : steak, fromage fondant, lamelles d’oignon rouge, avocat, roquette. Poser le chapeau. Servir avec frites ou salade des restes."
      cavernes:
      - "Sauce. Bol. Ketchup, sauce soja salée, mélanger selon goût. 1 c.à.c pâte tandoori, mélanger. Sel, poivre."
      - "Coupes. Oignon rouge, éplucher, rondelles. Avocat, couper deux, vider cuillère, fines tranches. Mimolette, fines tranches."
      - "Pleurotes. Steak pleurotes, poêle, 3 à 4 min par face, belle coloration. Plaque four. Mimolette dessus. Four 180° quelques minutes, fromage fondant."
      - "Montage. Pain burger, couper deux, toaster. Pain bas, sauce barbecue, tartiner. Steak, fromage fondant, oignon rouge, avocat, roquette. Chapeau. Frites ou salade restes."
    kcal_per_serving: 276
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
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
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocat
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
    - qty:
      unit:
      item: fromage végétal
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ketchup
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja (salée)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte tandoori
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commençons par la sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja
      salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et
      poivrez à votre convenance.
    - Cuisson. Épluchez un oignon rouge et coupez-le en rondelle. Coupez l’avocat en deux, videz-le
      à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines
      tranches de mimolettes.
    - Cuisson. Faites cuire le steak de pleurotes dans une poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrassez sur une plaque allant au four, puis déposez par dessus plusieurs
      tranches de fromage végétal. Terminez la cuisson au four, à 180° pendant quelques minutes,
      le temps que le fromages soit bien fondant.
    - Finition. Coupez le pain à burger en deux et passez le au toaster. Tartinez le pain du bas du
      burger avec votre sauce barbecue. Ajoutez le steak et son fromage végétal fondant, quelques
      lamelles d’oignon rouge, de l’avocat en franche et des feuilles de roquette. Finalisez
      en déposant le chapeau de votre burger. C’est prêt ! Il ne vous reste plus qu’à déguster
      ce délicieux burger accompagné de quelques frites croustillante ou d’une salade que
      vous aurez fait avec les reste de roquette, d’oignon rouge et d’avocat. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et poivrez à votre convenance."
      - "Coupes. Épluchez un oignon rouge et coupez-le en rondelles. Coupez l’avocat en deux, videz-le à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines tranches de mimolette."
      - "Pleurotes. Faites cuire le steak de pleurotes dans une poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrassez-le sur une plaque allant au four, déposez par-dessus plusieurs tranches de fromage végétal. Terminez au four, à 180°, pendant quelques minutes, le temps que le fromage soit fondant."
      - "Montage. Coupez le pain à burger en deux et passez-le au toaster. Tartinez le pain du bas avec votre sauce barbecue. Ajoutez le steak et son fromage végétal fondant, quelques lamelles d’oignon rouge, de l’avocat en tranches et des feuilles de roquette. Déposez le chapeau. Servez avec des frites ou une salade faite avec le reste de roquette, d’oignon rouge et d’avocat."
      pro:
      - "Mélanger ketchup et sauce soja salée selon le goût. Ajouter 1 c.à.c de pâte tandoori. Mélanger. Saler, poivrer."
      - "Éplucher l’oignon rouge, le couper en rondelles. Couper l’avocat en deux, le vider à la cuillère, le tailler en fines tranches. Tailler quelques fines tranches de mimolette."
      - "Cuire le steak de pleurotes à la poêle, 3 à 4 min par face, jusqu’à belle coloration. Débarrasser sur plaque, recouvrir de tranches de fromage végétal. Terminer au four à 180° quelques minutes, fromage fondant."
      - "Couper le pain à burger en deux, passer au toaster. Tartiner le pain du bas de sauce barbecue. Garnir : steak, fromage végétal fondant, lamelles d’oignon rouge, avocat, roquette. Poser le chapeau. Servir avec frites ou salade des restes."
      cavernes:
      - "Sauce. Bol. Ketchup, sauce soja salée, mélanger selon goût. 1 c.à.c pâte tandoori, mélanger. Sel, poivre."
      - "Coupes. Oignon rouge, éplucher, rondelles. Avocat, couper deux, vider cuillère, fines tranches. Mimolette, fines tranches."
      - "Pleurotes. Steak pleurotes, poêle, 3 à 4 min par face, belle coloration. Plaque four. Fromage végétal dessus. Four 180° quelques minutes, fromage fondant."
      - "Montage. Pain burger, couper deux, toaster. Pain bas, sauce barbecue, tartiner. Steak, fromage végétal fondant, oignon rouge, avocat, roquette. Chapeau. Frites ou salade restes."
    kcal_per_serving: 276
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
    - poisson
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocat
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
    - qty:
      unit:
      item: mimolette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ketchup
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja (salée)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte tandoori
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commençons par la sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja
      salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et
      poivrez à votre convenance.
    - Cuisson. Épluchez un oignon rouge et coupez-le en rondelle. Coupez l’avocat en deux, videz-le
      à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines
      tranches de mimolettes.
    - Cuisson. Faites cuire un pavé de thon dans une poêle. On a choisi de le cuire bleue, car la cuisson
      se poursuivra ensuite au four. N’hésitez pas à le cuire plus si vous le préférez à point.
      Débarrassez sur une plaque allant au four, puis déposez par dessus plusieurs tranches
      de mimolette. Terminez la cuisson au four, à 180° pendant quelques minutes, le temps
      que le fromages soit bien fondant.
    - Finition. Coupez le pain à burger en deux et passez le au toaster. Tartinez le pain du bas du
      burger avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques
      lamelles d’oignon rouge, de l’avocat en franche et des feuilles de roquette. Finalisez
      en déposant le chapeau de votre burger. C’est prêt ! Il ne vous reste plus qu’à déguster
      ce délicieux burger accompagné de quelques frites croustillante ou d’une salade que
      vous aurez fait avec les reste de roquette, d’oignon rouge et d’avocat. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et poivrez à votre convenance."
      - "Coupes. Épluchez un oignon rouge et coupez-le en rondelles. Coupez l’avocat en deux, videz-le à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines tranches de mimolette."
      - "Thon. Faites cuire un pavé de thon dans une poêle, bleu : la cuisson se poursuit au four. Cuisez-le plus si vous le préférez à point. Débarrassez-le sur une plaque allant au four, déposez par-dessus plusieurs tranches de mimolette. Terminez au four, à 180°, pendant quelques minutes, le temps que le fromage soit fondant."
      - "Montage. Coupez le pain à burger en deux et passez-le au toaster. Tartinez le pain du bas avec votre sauce barbecue. Ajoutez le pavé de thon et son fromage fondant, quelques lamelles d’oignon rouge, de l’avocat en tranches et des feuilles de roquette. Déposez le chapeau. Servez avec des frites ou une salade faite avec le reste de roquette, d’oignon rouge et d’avocat."
      pro:
      - "Mélanger ketchup et sauce soja salée selon le goût. Ajouter 1 c.à.c de pâte tandoori. Mélanger. Saler, poivrer."
      - "Éplucher l’oignon rouge, le couper en rondelles. Couper l’avocat en deux, le vider à la cuillère, le tailler en fines tranches. Tailler quelques fines tranches de mimolette."
      - "Cuire un pavé de thon à la poêle, bleu (la cuisson se poursuit au four) ; plus longtemps si à point. Débarrasser sur plaque, recouvrir de tranches de mimolette. Terminer au four à 180° quelques minutes, fromage fondant."
      - "Couper le pain à burger en deux, passer au toaster. Tartiner le pain du bas de sauce barbecue. Garnir : pavé de thon, fromage fondant, lamelles d’oignon rouge, avocat, roquette. Poser le chapeau. Servir avec frites ou salade des restes."
      cavernes:
      - "Sauce. Bol. Ketchup, sauce soja salée, mélanger selon goût. 1 c.à.c pâte tandoori, mélanger. Sel, poivre."
      - "Coupes. Oignon rouge, éplucher, rondelles. Avocat, couper deux, vider cuillère, fines tranches. Mimolette, fines tranches."
      - "Thon. Pavé thon, poêle, cuire bleue. Cuisson continue four. Ou plus, à point. Plaque four. Mimolette dessus. Four 180° quelques minutes, fromage fondant."
      - "Montage. Pain burger, couper deux, toaster. Pain bas, sauce barbecue, tartiner. Pavé thon, fromage fondant, oignon rouge, avocat, roquette. Chapeau. Frites ou salade restes."
    kcal_per_serving: 226
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Cuire à cœur pour les personnes fragiles."}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "viande hachée"

---

# Burger barbecue
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/burger-barbecue]]

## Ingrédients (4 personnes)

- 4 pain à burger
- 4 steak haché
- 2 avocat
- 1 oignon rouge
-  mimolette
-  ketchup
-  sauce soja (salée)
-  pâte tandoori
-  roquette

## Préparation

1. Commençons par la sauce. Dans un petit bol, mélangez du ketchup et de la sauce soja salée selon vos goûts. Ajoutez 1 c.à.c de pâte tandoori et mélangez le tout. Salez et poivrez à votre convenance.
2. Épluchez un oignon rouge et coupez-le en rondelle. Coupez l’avocat en deux, videz-le à l’aide d’une cuillère, puis coupez-le en fines tranches. Enfin coupez quelques fines tranches de mimolettes.
3. Faites cuire un steak haché dans une poêle. On a choisi de le cuire bleue, car la cuisson se poursuivra ensuite au four. N’hésitez pas à le cuire plus si vous le préférez  à point. Débarrassez sur une plaque allant au four, puis déposez par dessus plusieurs tranches de mimolette. Terminez la cuisson au four, à 180° pendant quelques minutes, le temps que le fromages soit bien fondant.
4. Coupez le pain à burger en deux et passez le au toaster. Tartinez le pain du bas du burger avec votre sauce barbecue. Ajoutez le steak et son fromage fondant, quelques lamelles d’oignon rouge, de l’avocat en franche et des feuilles de roquette. Finalisez en déposant le chapeau de votre burger.

 
 

 
 C’est prêt ! Il ne vous reste plus qu’à déguster ce délicieux burger accompagné de quelques frites croustillante ou d’une salade que vous aurez fait avec les reste de roquette, d’oignon rouge et d’avocat. Bon appétit !
