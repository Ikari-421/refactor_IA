---
schema: recette-web-jigme/v2
slug: bo-bun-au-boeuf
title: Bo bun au bœuf
lang: fr
description: "Bo bun au bœuf : recette vietnamienne avec rumsteak ou filet de boeuf, vermicelles de riz et gousse d'ail, pour 4 personnes."
cuisine: vietnamienne
category: salé
tags:
- salé
- bœuf
- vermicelles
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/bo-bun-au-boeuf.webp
  alt: Bo bun au bœuf
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bo-bun-au-boeuf.md
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
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - mollusques
    swaps: []
    note: → version végétarienne.
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
    - from: sauce soja + citron vert
      to: aminos de coco
      note:
    note: 'Soja : sauce soja + citron vert → aminos de coco.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de riz
      to: jus de citron vert
      note: Acidité un peu différente.
    note: Vinaigre de riz → citron vert.
house_toggle:
house_options: []
histoire: >
  Le bò bún (bœuf, vermicelles de riz, herbes, nems parfois) est un bol vietnamien
  de repas de midi, surtout au Sud. Ce n’est pas un « bun » chinois : *bún* désigne
  le vermicelle de riz. Date d’invention unique : inconnue.
fun_facts:
- text: "La sauce (nước chấm, nuoc mam, citron, piment) se verse au dernier moment, sinon le vermicelle colle."
  source_name: Usage vietnamien
  source_url:
- text: "Le bœuf sauté au wok (bò lúc lắc ou émincé) n’est pas braisé : trop cuit, il durcit dans le bol froid."
  source_name: Usage
  source_url:
wines:
- name: Riesling d'Alsace
  producer: Domaine Albert Mann
  origin: Wettolsheim, Alsace
  grapes: riesling
  award:
  why: Acidité, citron — nuoc mam, herbes et bœuf.
- name: Pacherenc du Vic-Bilh sec
  producer: Château Montus
  origin: Madiran / Vic-Bilh
  grapes: petit manseng, petit courbu
  award:
  why: Agrume, corps — la friture des nems.
- name: Rosé de Loire
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Fruit, peu de tanin — herbes et piment.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - mollusques
    - poisson
    - sulfites
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 130
      total_min: 180
    equipment: &id002
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: rumsteak ou filet de boeuf (morceaux tendres)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: vermicelles de riz
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
    - qty: 2
      unit: piece
      item: tige de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cacahuètes
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
      item: carotte
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de menthe fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: nems (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit piment (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade verte (iceberg ou batavia)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce nuoc mam
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce huitre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
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
    - Préparation. Découpez vos morceaux de boeuf en petites lamelles puis placez-les dans un grand bol.
    - Cuisson. Hachez finement une gousse d’ail et la citronnelle puis ajoutez-les dans le bol contenant
      la viande. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de
      riz, 2 c.à.s de sauce nuoc mam et 2 c.à.s de sauce huitre. Placez la marinade ainsi
      obtenue au frigo pendant au moins 2h. Si vous avez le temps, vous pouvez même réaliser
      la marinade la veille.
    - Cuisson. Profitez de l’attente pour réaliser la sauce poisson. Pour cela, hachez finement une
      gousse d’ail et un ou deux petits piments (en fonction de vos goûts). Ajoutez du 1 c.à.s
      de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau.
    - Cuisson. Dans une poêle, faites griller vos cacahuètes avec un peu de sel. Dès qu’elles sont
      bien colorées, concassez-les à l’aide d’un mortier-pilon (ou d’un autre ustensile si
      vous n’en avez pas) puis réservez.
    - Cuisson. Taillez grossièrement l’oignon et faites le revenir à feu vif dans une poêle avec un
      peu d’huile d’arachide. Dès qu’il commence à colorer, ajouter la viande et la marinade.
      Quand la viande se colore légèrement, baissez le feu et laissez cuire encore quelques
      minutes.
    - Cuisson. Faites cuire vos vermicelles de riz dans une grande casserole d’eau bouillante. Quand
      ils sont cuits (regardez le temps de cuisson au dos de votre paquet de vermicelles),
      égouttez-les, passez-les sous l’eau froide puis réservez.
    - Épluchez vos légumes. Taillez les carottes en bâtonnets et les concombres en rondelles
      (ou « demi-rondelles », comme dans la vidéo ci-dessous). Coupez très grossièrement vos
      feuilles de salade et réservez le tout.
    - 'Finition. Maintenant que tout est prêt, il ne vous reste plus qu’à dresser. Déposez devant vous
      des assiettes creuses, puis garnissez-les de vos différents ingrédients : vermicelles
      de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes
      grillées. Cerise sur le gâteau : ajoutez quelques nems fait maison d’après notre recette
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Découpez les morceaux de boeuf en petites lamelles, puis placez-les dans un grand bol."
      - "Hachez finement une gousse d’ail et la citronnelle, puis ajoutez-les dans le bol contenant la viande. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce nuoc mam et 2 c.à.s de sauce huître. Placez la marinade au frigo pendant au moins 2 h. Si vous avez le temps, vous pouvez réaliser la marinade la veille."
      - "Pendant l’attente, réalisez la sauce poisson. Hachez finement une gousse d’ail et un ou deux petits piments, selon vos goûts. Ajoutez 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau."
      - "Dans une poêle, faites griller les cacahuètes avec un peu de sel. Dès qu’elles sont bien colorées, concassez-les au mortier-pilon (ou avec un autre ustensile si vous n’en avez pas), puis réservez."
      - "Taillez grossièrement l’oignon et faites-le revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès qu’il commence à colorer, ajoutez la viande et la marinade. Quand la viande se colore légèrement, baissez le feu et laissez cuire encore quelques minutes."
      - "Faites cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Quand ils sont cuits (regardez le temps de cuisson au dos de votre paquet), égouttez-les, passez-les sous l’eau froide, puis réservez."
      - "Épluchez les légumes. Taillez les carottes en bâtonnets et les concombres en rondelles (ou en demi-rondelles). Coupez très grossièrement les feuilles de salade et réservez le tout."
      - "Dressez dans des assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes grillées. Ajoutez quelques nems faits maison d’après notre recette."
      pro:
      - "Couper le boeuf en petites lamelles. Placer dans un grand bol."
      - "Hacher finement une gousse d’ail et la citronnelle. Ajouter dans le bol de viande. Sel, poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce nuoc mam, 2 c.à.s de sauce huître. Marinade au frigo au moins 2 h, veille possible."
      - "Pendant l’attente : sauce poisson. Hacher finement une gousse d’ail et un ou deux petits piments, selon le goût. Ajouter 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau."
      - "Poêle : griller les cacahuètes avec un peu de sel. Bien colorées : concasser au mortier-pilon (ou autre ustensile), réserver."
      - "Tailler grossièrement l’oignon. Le faire revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès coloration : ajouter la viande et la marinade. Viande légèrement colorée : baisser le feu, cuire encore quelques minutes."
      - "Cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Cuits (temps au dos du paquet) : égoutter, passer sous l’eau froide, réserver."
      - "Éplucher les légumes. Carottes en bâtonnets, concombres en rondelles ou demi-rondelles. Couper très grossièrement les feuilles de salade. Réserver."
      - "Dresser en assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée, cacahuètes grillées. Ajouter quelques nems faits maison d’après la recette."
      cavernes:
      - "Boeuf : petites lamelles. Grand bol."
      - "Gousse ail, citronnelle : hacher fin. Bol viande. Sel, poivre, 1 c.à.c sucre, 2 c.à.s vinaigre de riz, 2 c.à.s sauce nuoc mam, 2 c.à.s sauce huître. Frigo minimum 2 h. Veille possible."
      - "Sauce poisson. Gousse ail, piment 1 ou 2 selon goût : hacher fin. 1 c.à.s sucre, jus citron, 12 cL sauce nuoc mam, environ 20 cL eau."
      - "Poêle : cacahuètes, peu sel : griller. Bien colorées : concasser mortier-pilon (ou autre ustensile). Réserver."
      - "Oignon : tailler gros. Poêle feu vif, peu huile arachide : revenir. Colorer : viande, marinade. Viande légèrement colorée : baisser feu, cuire encore quelques minutes."
      - "Vermicelles de riz : grande casserole eau bouillante. Cuits (temps dos paquet) : égoutter, eau froide, réserver."
      - "Légumes : éplucher. Carottes bâtonnets. Concombres rondelles ou demi-rondelles. Feuilles salade : couper très gros. Réserver."
      - "Assiettes creuses. Vermicelles de riz, salade, carottes, concombres, feuilles menthe, coriandre hachée, cacahuètes grillées. Nems maison d’après recette : ajouter."
    kcal_per_serving: 620
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    - vegetarien
    allergens:
    - mollusques
    - poisson
    - soja
    - sulfites
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: vermicelles de riz
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
    - qty: 2
      unit: piece
      item: tige de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cacahuètes
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
      item: carotte
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de menthe fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: nems (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit piment (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade verte (iceberg ou batavia)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja + citron vert
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce aux champignons (type sauce huître végétale)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez les steaks de pleurotes en petites lamelles puis placez-les dans un grand bol.
    - Cuisson. Hachez finement une gousse d’ail et la citronnelle puis ajoutez-les dans le bol contenant les pleurotes. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de
      riz, 2 c.à.s de sauce soja + citron vert et 2 c.à.s de sauce aux champignons. Placez
      la marinade ainsi obtenue au frigo pendant au moins 2h. Si vous avez le temps, vous
      pouvez même réaliser la marinade la veille.
    - Cuisson. Profitez de l’attente pour réaliser la sauce (soja-citron). Pour cela, hachez finement une
      gousse d’ail et un ou deux petits piments (en fonction de vos goûts). Ajoutez du 1 c.à.s
      de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau.
    - Cuisson. Dans une poêle, faites griller vos cacahuètes avec un peu de sel. Dès qu’elles sont
      bien colorées, concassez-les à l’aide d’un mortier-pilon (ou d’un autre ustensile si
      vous n’en avez pas) puis réservez.
    - Cuisson. Taillez grossièrement l’oignon et faites le revenir à feu vif dans une poêle avec un
      peu d’huile d’arachide. Dès qu’il commence à colorer, ajouter les pleurotes et la marinade. Quand ils se colorent légèrement, baissez le feu et laissez cuire encore quelques
      minutes.
    - Cuisson. Faites cuire vos vermicelles de riz dans une grande casserole d’eau bouillante. Quand
      ils sont cuits (regardez le temps de cuisson au dos de votre paquet de vermicelles),
      égouttez-les, passez-les sous l’eau froide puis réservez.
    - Épluchez vos légumes. Taillez les carottes en bâtonnets et les concombres en rondelles
      (ou « demi-rondelles », comme dans la vidéo ci-dessous). Coupez très grossièrement vos
      feuilles de salade et réservez le tout.
    - 'Finition. Maintenant que tout est prêt, il ne vous reste plus qu’à dresser. Déposez devant vous
      des assiettes creuses, puis garnissez-les de vos différents ingrédients : vermicelles
      de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes
      grillées. Cerise sur le gâteau : ajoutez quelques nems fait maison d’après notre recette
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Découpez les steaks de pleurotes en petites lamelles, puis placez-les dans un grand bol."
      - "Hachez finement une gousse d’ail et la citronnelle, puis ajoutez-les dans le bol contenant les pleurotes. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce soja + citron vert et 2 c.à.s de sauce aux champignons. Placez la marinade au frigo pendant au moins 2 h. Si vous avez le temps, vous pouvez réaliser la marinade la veille."
      - "Pendant l’attente, réalisez la sauce soja-citron. Hachez finement une gousse d’ail et un ou deux petits piments, selon vos goûts. Ajoutez 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau."
      - "Dans une poêle, faites griller les cacahuètes avec un peu de sel. Dès qu’elles sont bien colorées, concassez-les au mortier-pilon (ou avec un autre ustensile si vous n’en avez pas), puis réservez."
      - "Taillez grossièrement l’oignon et faites-le revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès qu’il commence à colorer, ajoutez les pleurotes et la marinade. Quand ils se colorent légèrement, baissez le feu et laissez cuire encore quelques minutes."
      - "Faites cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Quand ils sont cuits (regardez le temps de cuisson au dos de votre paquet), égouttez-les, passez-les sous l’eau froide, puis réservez."
      - "Épluchez les légumes. Taillez les carottes en bâtonnets et les concombres en rondelles (ou en demi-rondelles). Coupez très grossièrement les feuilles de salade et réservez le tout."
      - "Dressez dans des assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes grillées. Ajoutez quelques nems faits maison d’après notre recette."
      pro:
      - "Couper les steaks de pleurotes en petites lamelles. Placer dans un grand bol."
      - "Hacher finement une gousse d’ail et la citronnelle. Ajouter dans le bol de pleurotes. Sel, poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce soja + citron vert, 2 c.à.s de sauce aux champignons. Marinade au frigo au moins 2 h, veille possible."
      - "Pendant l’attente : sauce soja-citron. Hacher finement une gousse d’ail et un ou deux petits piments, selon le goût. Ajouter 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau."
      - "Poêle : griller les cacahuètes avec un peu de sel. Bien colorées : concasser au mortier-pilon (ou autre ustensile), réserver."
      - "Tailler grossièrement l’oignon. Le faire revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès coloration : ajouter les pleurotes et la marinade. Légèrement colorés : baisser le feu, cuire encore quelques minutes."
      - "Cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Cuits (temps au dos du paquet) : égoutter, passer sous l’eau froide, réserver."
      - "Éplucher les légumes. Carottes en bâtonnets, concombres en rondelles ou demi-rondelles. Couper très grossièrement les feuilles de salade. Réserver."
      - "Dresser en assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée, cacahuètes grillées. Ajouter quelques nems faits maison d’après la recette."
      cavernes:
      - "Steaks de pleurotes : petites lamelles. Grand bol."
      - "Gousse ail, citronnelle : hacher fin. Bol pleurotes. Sel, poivre, 1 c.à.c sucre, 2 c.à.s vinaigre de riz, 2 c.à.s sauce soja + citron vert, 2 c.à.s sauce champignons. Frigo minimum 2 h. Veille possible."
      - "Sauce soja-citron. Gousse ail, piment 1 ou 2 selon goût : hacher fin. 1 c.à.s sucre, jus citron, 12 cL sauce soja + citron vert, environ 20 cL eau."
      - "Poêle : cacahuètes, peu sel : griller. Bien colorées : concasser mortier-pilon (ou autre ustensile). Réserver."
      - "Oignon : tailler gros. Poêle feu vif, peu huile arachide : revenir. Colorer : pleurotes, marinade. Légèrement colorés : baisser feu, cuire encore quelques minutes."
      - "Vermicelles de riz : grande casserole eau bouillante. Cuits (temps dos paquet) : égoutter, eau froide, réserver."
      - "Légumes : éplucher. Carottes bâtonnets. Concombres rondelles ou demi-rondelles. Feuilles salade : couper très gros. Réserver."
      - "Assiettes creuses. Vermicelles de riz, salade, carottes, concombres, feuilles menthe, coriandre hachée, cacahuètes grillées. Nems maison d’après recette : ajouter."
    kcal_per_serving: 620
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    - vegetarien
    - vegan
    allergens:
    - soja
    - sulfites
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: vermicelles de riz
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
    - qty: 2
      unit: piece
      item: tige de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cacahuètes
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
      item: carotte
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de menthe fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: nems (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit piment (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade verte (iceberg ou batavia)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja + citron vert
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce aux champignons (type sauce huître végétale)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez les steaks de pleurotes en petites lamelles puis placez-les dans un grand bol.
    - Cuisson. Hachez finement une gousse d’ail et la citronnelle puis ajoutez-les dans le bol contenant les pleurotes. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de
      riz, 2 c.à.s de sauce soja + citron vert et 2 c.à.s de sauce aux champignons. Placez
      la marinade ainsi obtenue au frigo pendant au moins 2h. Si vous avez le temps, vous
      pouvez même réaliser la marinade la veille.
    - Cuisson. Profitez de l’attente pour réaliser la sauce (soja-citron). Pour cela, hachez finement une
      gousse d’ail et un ou deux petits piments (en fonction de vos goûts). Ajoutez du 1 c.à.s
      de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau.
    - Cuisson. Dans une poêle, faites griller vos cacahuètes avec un peu de sel. Dès qu’elles sont
      bien colorées, concassez-les à l’aide d’un mortier-pilon (ou d’un autre ustensile si
      vous n’en avez pas) puis réservez.
    - Cuisson. Taillez grossièrement l’oignon et faites le revenir à feu vif dans une poêle avec un
      peu d’huile d’arachide. Dès qu’il commence à colorer, ajouter les pleurotes et la marinade. Quand ils se colorent légèrement, baissez le feu et laissez cuire encore quelques
      minutes.
    - Cuisson. Faites cuire vos vermicelles de riz dans une grande casserole d’eau bouillante. Quand
      ils sont cuits (regardez le temps de cuisson au dos de votre paquet de vermicelles),
      égouttez-les, passez-les sous l’eau froide puis réservez.
    - Épluchez vos légumes. Taillez les carottes en bâtonnets et les concombres en rondelles
      (ou « demi-rondelles », comme dans la vidéo ci-dessous). Coupez très grossièrement vos
      feuilles de salade et réservez le tout.
    - 'Finition. Maintenant que tout est prêt, il ne vous reste plus qu’à dresser. Déposez devant vous
      des assiettes creuses, puis garnissez-les de vos différents ingrédients : vermicelles
      de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes
      grillées. Cerise sur le gâteau : ajoutez quelques nems fait maison d’après notre recette
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Découpez les steaks de pleurotes en petites lamelles, puis placez-les dans un grand bol."
      - "Hachez finement une gousse d’ail et la citronnelle, puis ajoutez-les dans le bol contenant les pleurotes. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce soja + citron vert et 2 c.à.s de sauce aux champignons. Placez la marinade au frigo pendant au moins 2 h. Si vous avez le temps, vous pouvez réaliser la marinade la veille."
      - "Pendant l’attente, réalisez la sauce soja-citron. Hachez finement une gousse d’ail et un ou deux petits piments, selon vos goûts. Ajoutez 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau."
      - "Dans une poêle, faites griller les cacahuètes avec un peu de sel. Dès qu’elles sont bien colorées, concassez-les au mortier-pilon (ou avec un autre ustensile si vous n’en avez pas), puis réservez."
      - "Taillez grossièrement l’oignon et faites-le revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès qu’il commence à colorer, ajoutez les pleurotes et la marinade. Quand ils se colorent légèrement, baissez le feu et laissez cuire encore quelques minutes."
      - "Faites cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Quand ils sont cuits (regardez le temps de cuisson au dos de votre paquet), égouttez-les, passez-les sous l’eau froide, puis réservez."
      - "Épluchez les légumes. Taillez les carottes en bâtonnets et les concombres en rondelles (ou en demi-rondelles). Coupez très grossièrement les feuilles de salade et réservez le tout."
      - "Dressez dans des assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes grillées. Ajoutez quelques nems faits maison d’après notre recette."
      pro:
      - "Couper les steaks de pleurotes en petites lamelles. Placer dans un grand bol."
      - "Hacher finement une gousse d’ail et la citronnelle. Ajouter dans le bol de pleurotes. Sel, poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce soja + citron vert, 2 c.à.s de sauce aux champignons. Marinade au frigo au moins 2 h, veille possible."
      - "Pendant l’attente : sauce soja-citron. Hacher finement une gousse d’ail et un ou deux petits piments, selon le goût. Ajouter 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce soja + citron vert et environ 20 cL d’eau."
      - "Poêle : griller les cacahuètes avec un peu de sel. Bien colorées : concasser au mortier-pilon (ou autre ustensile), réserver."
      - "Tailler grossièrement l’oignon. Le faire revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès coloration : ajouter les pleurotes et la marinade. Légèrement colorés : baisser le feu, cuire encore quelques minutes."
      - "Cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Cuits (temps au dos du paquet) : égoutter, passer sous l’eau froide, réserver."
      - "Éplucher les légumes. Carottes en bâtonnets, concombres en rondelles ou demi-rondelles. Couper très grossièrement les feuilles de salade. Réserver."
      - "Dresser en assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée, cacahuètes grillées. Ajouter quelques nems faits maison d’après la recette."
      cavernes:
      - "Steaks de pleurotes : petites lamelles. Grand bol."
      - "Gousse ail, citronnelle : hacher fin. Bol pleurotes. Sel, poivre, 1 c.à.c sucre, 2 c.à.s vinaigre de riz, 2 c.à.s sauce soja + citron vert, 2 c.à.s sauce champignons. Frigo minimum 2 h. Veille possible."
      - "Sauce soja-citron. Gousse ail, piment 1 ou 2 selon goût : hacher fin. 1 c.à.s sucre, jus citron, 12 cL sauce soja + citron vert, environ 20 cL eau."
      - "Poêle : cacahuètes, peu sel : griller. Bien colorées : concasser mortier-pilon (ou autre ustensile). Réserver."
      - "Oignon : tailler gros. Poêle feu vif, peu huile arachide : revenir. Colorer : pleurotes, marinade. Légèrement colorés : baisser feu, cuire encore quelques minutes."
      - "Vermicelles de riz : grande casserole eau bouillante. Cuits (temps dos paquet) : égoutter, eau froide, réserver."
      - "Légumes : éplucher. Carottes bâtonnets. Concombres rondelles ou demi-rondelles. Feuilles salade : couper très gros. Réserver."
      - "Assiettes creuses. Vermicelles de riz, salade, carottes, concombres, feuilles menthe, coriandre hachée, cacahuètes grillées. Nems maison d’après recette : ajouter."
    kcal_per_serving: 620
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
    - mollusques
    - poisson
    - sulfites
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: vermicelles de riz
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
    - qty: 2
      unit: piece
      item: tige de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cacahuètes
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
      item: carotte
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de menthe fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: nems (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit piment (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade verte (iceberg ou batavia)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce nuoc mam
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce huitre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez vos morceaux de boeuf en petites lamelles puis placez-les dans un grand bol.
    - Cuisson. Hachez finement une gousse d’ail et la citronnelle puis ajoutez-les dans le bol contenant
      la viande. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de
      riz, 2 c.à.s de sauce nuoc mam et 2 c.à.s de sauce huitre. Placez la marinade ainsi
      obtenue au frigo pendant au moins 2h. Si vous avez le temps, vous pouvez même réaliser
      la marinade la veille.
    - Cuisson. Profitez de l’attente pour réaliser la sauce poisson. Pour cela, hachez finement une
      gousse d’ail et un ou deux petits piments (en fonction de vos goûts). Ajoutez du 1 c.à.s
      de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau.
    - Cuisson. Dans une poêle, faites griller vos cacahuètes avec un peu de sel. Dès qu’elles sont
      bien colorées, concassez-les à l’aide d’un mortier-pilon (ou d’un autre ustensile si
      vous n’en avez pas) puis réservez.
    - Cuisson. Taillez grossièrement l’oignon et faites le revenir à feu vif dans une poêle avec un
      peu d’huile d’arachide. Dès qu’il commence à colorer, ajouter la viande et la marinade.
      Quand la viande se colore légèrement, baissez le feu et laissez cuire encore quelques
      minutes.
    - Cuisson. Faites cuire vos vermicelles de riz dans une grande casserole d’eau bouillante. Quand
      ils sont cuits (regardez le temps de cuisson au dos de votre paquet de vermicelles),
      égouttez-les, passez-les sous l’eau froide puis réservez.
    - Épluchez vos légumes. Taillez les carottes en bâtonnets et les concombres en rondelles
      (ou « demi-rondelles », comme dans la vidéo ci-dessous). Coupez très grossièrement vos
      feuilles de salade et réservez le tout.
    - 'Finition. Maintenant que tout est prêt, il ne vous reste plus qu’à dresser. Déposez devant vous
      des assiettes creuses, puis garnissez-les de vos différents ingrédients : vermicelles
      de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes
      grillées. Cerise sur le gâteau : ajoutez quelques nems fait maison d’après notre recette
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Découpez les morceaux de boeuf en petites lamelles, puis placez-les dans un grand bol."
      - "Hachez finement une gousse d’ail et la citronnelle, puis ajoutez-les dans le bol contenant la viande. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce nuoc mam et 2 c.à.s de sauce huître. Placez la marinade au frigo pendant au moins 2 h. Si vous avez le temps, vous pouvez réaliser la marinade la veille."
      - "Pendant l’attente, réalisez la sauce poisson. Hachez finement une gousse d’ail et un ou deux petits piments, selon vos goûts. Ajoutez 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau."
      - "Dans une poêle, faites griller les cacahuètes avec un peu de sel. Dès qu’elles sont bien colorées, concassez-les au mortier-pilon (ou avec un autre ustensile si vous n’en avez pas), puis réservez."
      - "Taillez grossièrement l’oignon et faites-le revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès qu’il commence à colorer, ajoutez la viande et la marinade. Quand la viande se colore légèrement, baissez le feu et laissez cuire encore quelques minutes."
      - "Faites cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Quand ils sont cuits (regardez le temps de cuisson au dos de votre paquet), égouttez-les, passez-les sous l’eau froide, puis réservez."
      - "Épluchez les légumes. Taillez les carottes en bâtonnets et les concombres en rondelles (ou en demi-rondelles). Coupez très grossièrement les feuilles de salade et réservez le tout."
      - "Dressez dans des assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes grillées. Ajoutez quelques nems faits maison d’après notre recette."
      pro:
      - "Couper le boeuf en petites lamelles. Placer dans un grand bol."
      - "Hacher finement une gousse d’ail et la citronnelle. Ajouter dans le bol de viande. Sel, poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce nuoc mam, 2 c.à.s de sauce huître. Marinade au frigo au moins 2 h, veille possible."
      - "Pendant l’attente : sauce poisson. Hacher finement une gousse d’ail et un ou deux petits piments, selon le goût. Ajouter 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau."
      - "Poêle : griller les cacahuètes avec un peu de sel. Bien colorées : concasser au mortier-pilon (ou autre ustensile), réserver."
      - "Tailler grossièrement l’oignon. Le faire revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès coloration : ajouter la viande et la marinade. Viande légèrement colorée : baisser le feu, cuire encore quelques minutes."
      - "Cuire les vermicelles de riz dans une grande casserole d’eau bouillante. Cuits (temps au dos du paquet) : égoutter, passer sous l’eau froide, réserver."
      - "Éplucher les légumes. Carottes en bâtonnets, concombres en rondelles ou demi-rondelles. Couper très grossièrement les feuilles de salade. Réserver."
      - "Dresser en assiettes creuses : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée, cacahuètes grillées. Ajouter quelques nems faits maison d’après la recette."
      cavernes:
      - "Boeuf : petites lamelles. Grand bol."
      - "Gousse ail, citronnelle : hacher fin. Bol viande. Sel, poivre, 1 c.à.c sucre, 2 c.à.s vinaigre de riz, 2 c.à.s sauce nuoc mam, 2 c.à.s sauce huître. Frigo minimum 2 h. Veille possible."
      - "Sauce poisson. Gousse ail, piment 1 ou 2 selon goût : hacher fin. 1 c.à.s sucre, jus citron, 12 cL sauce nuoc mam, environ 20 cL eau."
      - "Poêle : cacahuètes, peu sel : griller. Bien colorées : concasser mortier-pilon (ou autre ustensile). Réserver."
      - "Oignon : tailler gros. Poêle feu vif, peu huile arachide : revenir. Colorer : viande, marinade. Viande légèrement colorée : baisser feu, cuire encore quelques minutes."
      - "Vermicelles de riz : grande casserole eau bouillante. Cuits (temps dos paquet) : égoutter, eau froide, réserver."
      - "Légumes : éplucher. Carottes bâtonnets. Concombres rondelles ou demi-rondelles. Feuilles salade : couper très gros. Réserver."
      - "Assiettes creuses. Vermicelles de riz, salade, carottes, concombres, feuilles menthe, coriandre hachée, cacahuètes grillées. Nems maison d’après recette : ajouter."
    kcal_per_serving: 620
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

# Bo bun au bœuf

![[bo-bun-au-boeuf.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bo-bun-au-boeuf]]

## Ingrédients (4 personnes)

- 600 g de rumsteak ou filet de boeuf (morceaux tendres)
- 400 g de vermicelles de riz
- 2 gousse d'ail
- 2 tige de citronnelle
- 4 c.à.s de cacahuètes
- 1 oignon
- 2 carotte
- 1 concombre
- 1 citron
- 1 bouquet de menthe fraîche
- 1 bouquet de coriandre fraîche
- 8 nems (facultatif)
- 1 petit piment (facultatif)
-  salade verte (iceberg ou batavia)
-  sauce nuoc mam
-  sauce huitre
-  vinaigre de riz
-  sucre

## Préparation

1. Découpez vos morceaux de boeuf en petites lamelles puis placez-les dans un grand bol.
2. Hachez finement une gousse d’ail et la citronnelle puis ajoutez-les dans le bol contenant la viande. Complétez avec du sel, du poivre, 1 c.à.c de sucre, 2 c.à.s de vinaigre de riz, 2 c.à.s de sauce nuoc mam et 2 c.à.s de sauce huitre. Placez la marinade ainsi obtenue au frigo pendant au moins 2h. Si vous avez le temps, vous pouvez même réaliser la marinade la veille.
3. Profitez de l’attente pour réaliser la sauce poisson. Pour cela, hachez finement une gousse d’ail et un ou deux petits piments (en fonction de vos goûts). Ajoutez du 1 c.à.s de sucre, le jus d’un citron, 12 cL de sauce nuoc mam et environ 20 cL d’eau.
4. Dans une poêle, faites griller vos cacahuètes avec un peu de sel. Dès qu’elles sont bien colorées, concassez-les à l’aide d’un mortier-pilon (ou d’un autre ustensile si vous n’en avez pas) puis réservez.
5. Taillez grossièrement l’oignon et faites le revenir à feu vif dans une poêle avec un peu d’huile d’arachide. Dès qu’il commence à colorer, ajouter la viande et la marinade. Quand la viande se colore légèrement, baissez le feu et laissez cuire encore quelques minutes.
6. Faites cuire vos vermicelles de riz dans une grande casserole d’eau bouillante. Quand ils sont cuits (regardez le temps de cuisson au dos de votre paquet de vermicelles), égouttez-les, passez-les sous l’eau froide puis réservez.
7. Épluchez vos légumes. Taillez les carottes en bâtonnets et les concombres en rondelles (ou « demi-rondelles », comme dans la vidéo ci-dessous). Coupez très grossièrement vos feuilles de salade et réservez le tout.
8. Maintenant que tout est prêt, il ne vous reste plus qu’à dresser. Déposez devant vous des assiettes creuses, puis garnissez-les de vos différents ingrédients : vermicelles de riz, salade, carottes, concombres, feuilles de menthe, coriandre hachée et cacahuètes grillées. Cerise sur le gâteau : ajoutez quelques nems fait maison d’après notre recette !

 
 

 
 Bon appétit !

 
