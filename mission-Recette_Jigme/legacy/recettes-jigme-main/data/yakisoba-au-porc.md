---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: yakisoba-au-porc
title: Yakisoba au porc
lang: fr
description: "Yakisoba au porc : recette japonaise avec nouilles à Yakisoba/ramen, poitrine de porc et carotte, pour 4 personnes. Version maison."
cuisine: japonaise
category: salé
tags:
- salé
- nouilles
- porc
- rapide
image:
  url:
  alt: Yakisoba au porc
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/yakisoba-au-porc.md
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
    - from: nouilles
      to: nouilles de riz
      note:
    - from: sauce soja
      to: tamari sans gluten
      note:
    note: Nouilles de blé, sauce soja → nouilles de riz, tamari.
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
    impossible: true
    redirect_variant:
    clears:
    - soja
    swaps: []
    note: 'Contient soja (lardons de tempeh fumé) : pas d’adaptation fiable.'
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
histoire: 'Yakisoba : nouilles de blé sautées (malgré le nom « soba »), chou, carotte, sauce type Worcester
  japonaise. Cuisine de rue et de supérettes, pas un soba de sarrasin.

  '
fun_facts:
- text: >
    Les nouilles se précuisent à la vapeur ; trop d’eau, elles collent au wok.
  source_name: Grokipedia, Yakisoba
  source_url: https://grokipedia.com/page/Yakisoba
- text: >
    La sauce est plus sucrée et fruitée qu’un Worcester anglais.
  source_name: Usage
  source_url:
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — la sauce sucrée-salée, sans un rouge tannique.
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire — le porc sauté, un blanc un peu ample.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le wok, sans un vin de garde.
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
    - soja
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - poêle
    - saladier
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 360
      unit: g
      item: nouilles à Yakisoba/ramen
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: poitrine de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chou blanc
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
    - qty: 300
      unit: g
      item: shiitake ou champignons de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce huître
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce Worcestershire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: ketchup (oui, vous avez bien lu)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: pincee
      item: Aonori (algue en flocons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: ciboulette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: gingembre confit
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce huître, la sauce Worcestershire,
      le ketchup, la sauce soja et le sucre. Réservez de côté.
    - Cuisson. Coupez la carotte en julienne, puis le chou blanc, l’oignon nouveau (la partie verte),
      les shiitake, l’oignon et la poitrine de porc en petits morceaux. Ciselez la ciboulette.
    - Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire
      le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches).
      Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien
      chaud(e). Placez-y la poitrine de porc, puis l’oignon, le chou et la carotte. Laissez
      cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake.
    - Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson,
      incorporez-les aux légumes et à la viande et faites sauter le tout avec la sauce préalablement
      préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et
      le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat
      savoureux et partagez-moi vos photos !
    steps_niveaux:
      amateur:
      - "Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce huître, la sauce Worcestershire, le ketchup, la sauce soja et le sucre. Réservez de côté."
      - "Cuisson. Coupez la carotte [[julienne|en julienne]], puis le chou blanc, l’oignon nouveau (la partie verte), les shiitake, l’oignon et la poitrine de porc en petits morceaux. Ciselez la ciboulette."
      - "Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches). Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien chaud(e). Placez-y la poitrine de porc, puis l’oignon, le chou et la carotte. Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake."
      - "Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson, incorporez-les aux légumes et à la viande et faites sauter le tout avec la sauce préalablement préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat savoureux et partagez-moi vos photos !"
      pro:
      - "Mélanger dans un récipient la sauce huître, la sauce Worcestershire, le ketchup, la sauce soja et le sucre. Réserver."
      - "Couper la carotte en julienne, puis le chou blanc, l’oignon nouveau (partie verte), les shiitake, l’oignon et la poitrine de porc en petits morceaux. Ciseler la ciboulette."
      - "Placer les nouilles dans un grand volume d’eau bouillante salée. Cuire le temps indiqué sur le paquet (1 minute si nouilles fraîches). Pendant ce temps : wok ou poêle bien chaud(e). Y placer la poitrine de porc, puis l’oignon, le chou et la carotte. Cuire légèrement, puis ajouter l’oignon nouveau et les shiitake."
      - "Nouilles cuites : passer sous l’eau froide pour stopper la cuisson. Incorporer aux légumes et à la viande. Faire sauter avec la sauce. Dresser, ajouter ciboulette, algue en flocons et gingembre confit."
      cavernes:
      - "Mélange. Sauce. Récipient. Sauce huître, sauce Worcestershire, ketchup, sauce soja, sucre. Mélanger. Côté, réserver."
      - "Cuisson. Carotte, julienne, couper. Chou blanc, oignon nouveau partie verte, shiitake, oignon, poitrine porc, petits morceaux. Ciboulette, ciseler."
      - "Cuisson. Nouilles, grand volume eau bouillante salée, placer. Temps paquet, cuire. Ou nouilles fraîches : 1 minute. Pendant : wok ou poêle, feu, bien chaud. Poitrine porc, placer. Puis oignon, chou, carotte. Légèrement, cuire. Puis oignon nouveau, shiitake, ajouter."
      - "Finition. Nouilles cuites, eau froide, passer. Cuisson, stopper. Légumes, viande, nouilles, incorporer. Sauce, tout, faire sauter. Assiette, dresser. Ciboulette, algue flocons, gingembre confit, ajouter. Décoration."
    kcal_per_serving: 154
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 360
      unit: g
      item: nouilles à Yakisoba/ramen
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: lardons de tempeh fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chou blanc
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
    - qty: 300
      unit: g
      item: shiitake ou champignons de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce aux champignons (type sauce huître végétale)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: tamari
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: ketchup (oui, vous avez bien lu)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: pincee
      item: Aonori (algue en flocons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: ciboulette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: gingembre confit
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce aux champignons, la tamari,
      le ketchup, la sauce soja et le sucre. Réservez de côté.
    - Cuisson. Coupez la carotte en julienne, puis le chou blanc, l’oignon nouveau (la partie verte),
      les shiitake, l’oignon et les lardons de tempeh fumé en petits morceaux. Ciselez la ciboulette.
    - Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire
      le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches).
      Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien
      chaud(e). Placez-y les lardons de tempeh fumé, puis l’oignon, le chou et la carotte.
      Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake.
    - Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson,
      incorporez-les aux légumes et au tempeh et faites sauter le tout avec la sauce préalablement
      préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et
      le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat
      savoureux et partagez-moi vos photos !
    steps_niveaux:
      amateur:
      - "Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce aux champignons, la tamari, le ketchup, la sauce soja et le sucre. Réservez de côté."
      - "Cuisson. Coupez la carotte [[julienne|en julienne]], puis le chou blanc, l’oignon nouveau (la partie verte), les shiitake, l’oignon et les lardons de tempeh fumé en petits morceaux. Ciselez la ciboulette."
      - "Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches). Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien chaud(e). Placez-y les lardons de tempeh fumé, puis l’oignon, le chou et la carotte. Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake."
      - "Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson, incorporez-les aux légumes et au tempeh et faites sauter le tout avec la sauce préalablement préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat savoureux et partagez-moi vos photos !"
      pro:
      - "Mélanger dans un récipient la sauce aux champignons, la tamari, le ketchup, la sauce soja et le sucre. Réserver."
      - "Couper la carotte en julienne, puis le chou blanc, l’oignon nouveau (partie verte), les shiitake, l’oignon et les lardons de tempeh fumé en petits morceaux. Ciseler la ciboulette."
      - "Placer les nouilles dans un grand volume d’eau bouillante salée. Cuire le temps indiqué sur le paquet (1 minute si nouilles fraîches). Pendant ce temps : wok ou poêle bien chaud(e). Y placer les lardons de tempeh fumé, puis l’oignon, le chou et la carotte. Cuire légèrement, puis ajouter l’oignon nouveau et les shiitake."
      - "Nouilles cuites : passer sous l’eau froide pour stopper la cuisson. Incorporer aux légumes et au tempeh. Faire sauter avec la sauce. Dresser, ajouter ciboulette, algue en flocons et gingembre confit."
      cavernes:
      - "Mélange. Sauce. Récipient. Sauce champignons, tamari, ketchup, sauce soja, sucre. Mélanger. Côté, réserver."
      - "Cuisson. Carotte, julienne, couper. Chou blanc, oignon nouveau partie verte, shiitake, oignon, lardons tempeh fumé, petits morceaux. Ciboulette, ciseler."
      - "Cuisson. Nouilles, grand volume eau bouillante salée, placer. Temps paquet, cuire. Ou nouilles fraîches : 1 minute. Pendant : wok ou poêle, feu, bien chaud. Lardons tempeh fumé, placer. Puis oignon, chou, carotte. Légèrement, cuire. Puis oignon nouveau, shiitake, ajouter."
      - "Finition. Nouilles cuites, eau froide, passer. Cuisson, stopper. Légumes, tempeh, nouilles, incorporer. Sauce, tout, faire sauter. Assiette, dresser. Ciboulette, algue flocons, gingembre confit, ajouter. Décoration."
    kcal_per_serving: 154
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 360
      unit: g
      item: nouilles à Yakisoba/ramen
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: lardons de tempeh fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chou blanc
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
    - qty: 300
      unit: g
      item: shiitake ou champignons de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce aux champignons (type sauce huître végétale)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: tamari
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: ketchup (oui, vous avez bien lu)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: pincee
      item: Aonori (algue en flocons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: ciboulette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: gingembre confit
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce aux champignons, la tamari,
      le ketchup, la sauce soja et le sucre. Réservez de côté.
    - Cuisson. Coupez la carotte en julienne, puis le chou blanc, l’oignon nouveau (la partie verte),
      les shiitake, l’oignon et la lardons de tempeh fumé en petits morceaux. Ciselez la ciboulette.
    - Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire
      le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches).
      Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien
      chaud(e). Placez-y la lardons de tempeh fumé, puis l’oignon, le chou et la carotte.
      Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake.
    - Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson,
      incorporez-les aux légumes et au tempeh et faites sauter le tout avec la sauce préalablement
      préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et
      le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat
      savoureux et partagez-moi vos photos !
    steps_niveaux:
      amateur:
      - "Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce aux champignons, la tamari, le ketchup, la sauce soja et le sucre. Réservez de côté."
      - "Cuisson. Coupez la carotte [[julienne|en julienne]], puis le chou blanc, l’oignon nouveau (la partie verte), les shiitake, l’oignon et la lardons de tempeh fumé en petits morceaux. Ciselez la ciboulette."
      - "Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches). Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien chaud(e). Placez-y la lardons de tempeh fumé, puis l’oignon, le chou et la carotte. Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake."
      - "Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson, incorporez-les aux légumes et au tempeh et faites sauter le tout avec la sauce préalablement préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat savoureux et partagez-moi vos photos !"
      pro:
      - "Mélanger dans un récipient la sauce aux champignons, la tamari, le ketchup, la sauce soja et le sucre. Réserver."
      - "Couper la carotte en julienne, puis le chou blanc, l’oignon nouveau (partie verte), les shiitake, l’oignon et la lardons de tempeh fumé en petits morceaux. Ciseler la ciboulette."
      - "Placer les nouilles dans un grand volume d’eau bouillante salée. Cuire le temps indiqué sur le paquet (1 minute si nouilles fraîches). Pendant ce temps : wok ou poêle bien chaud(e). Y placer la lardons de tempeh fumé, puis l’oignon, le chou et la carotte. Cuire légèrement, puis ajouter l’oignon nouveau et les shiitake."
      - "Nouilles cuites : passer sous l’eau froide pour stopper la cuisson. Incorporer aux légumes et au tempeh. Faire sauter avec la sauce. Dresser, ajouter ciboulette, algue en flocons et gingembre confit."
      cavernes:
      - "Mélange. Sauce. Récipient. Sauce champignons, tamari, ketchup, sauce soja, sucre. Mélanger. Côté, réserver."
      - "Cuisson. Carotte, julienne, couper. Chou blanc, oignon nouveau partie verte, shiitake, oignon, lardons tempeh fumé, petits morceaux. Ciboulette, ciseler."
      - "Cuisson. Nouilles, grand volume eau bouillante salée, placer. Temps paquet, cuire. Ou nouilles fraîches : 1 minute. Pendant : wok ou poêle, feu, bien chaud. Lardons tempeh fumé, placer. Puis oignon, chou, carotte. Légèrement, cuire. Puis oignon nouveau, shiitake, ajouter."
      - "Finition. Nouilles cuites, eau froide, passer. Cuisson, stopper. Légumes, tempeh, nouilles, incorporer. Sauce, tout, faire sauter. Assiette, dresser. Ciboulette, algue flocons, gingembre confit, ajouter. Décoration."
    kcal_per_serving: 154
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
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 360
      unit: g
      item: nouilles à Yakisoba/ramen
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: dés de saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chou blanc
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
    - qty: 300
      unit: g
      item: shiitake ou champignons de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce huître
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sauce Worcestershire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: ketchup (oui, vous avez bien lu)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: pincee
      item: Aonori (algue en flocons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: ciboulette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: gingembre confit
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce huître, la sauce Worcestershire,
      le ketchup, la sauce soja et le sucre. Réservez de côté.
    - Cuisson. Coupez la carotte en julienne, puis le chou blanc, l’oignon nouveau (la partie verte),
      les shiitake, l’oignon et la dés de saumon fumé en petits morceaux. Ciselez la ciboulette.
    - Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire
      le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches).
      Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien
      chaud(e). Placez-y la dés de saumon fumé, puis l’oignon, le chou et la carotte. Laissez
      cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake.
    - Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson,
      incorporez-les aux légumes et à la viande et faites sauter le tout avec la sauce préalablement
      préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et
      le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat
      savoureux et partagez-moi vos photos !
    steps_niveaux:
      amateur:
      - "Mélange. Pour réaliser la sauce, mélangez dans un récipient la sauce huître, la sauce Worcestershire, le ketchup, la sauce soja et le sucre. Réservez de côté."
      - "Cuisson. Coupez la carotte [[julienne|en julienne]], puis le chou blanc, l’oignon nouveau (la partie verte), les shiitake, l’oignon et la dés de saumon fumé en petits morceaux. Ciselez la ciboulette."
      - "Cuisson. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches). Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien chaud(e). Placez-y la dés de saumon fumé, puis l’oignon, le chou et la carotte. Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake."
      - "Finition. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson, incorporez-les aux légumes et à la viande et faites sauter le tout avec la sauce préalablement préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et le gingembre confit pour la décoration. Rien de plus simple ! Régalez-vous avec ce plat savoureux et partagez-moi vos photos !"
      pro:
      - "Mélanger dans un récipient la sauce huître, la sauce Worcestershire, le ketchup, la sauce soja et le sucre. Réserver."
      - "Couper la carotte en julienne, puis le chou blanc, l’oignon nouveau (partie verte), les shiitake, l’oignon et la dés de saumon fumé en petits morceaux. Ciseler la ciboulette."
      - "Placer les nouilles dans un grand volume d’eau bouillante salée. Cuire le temps indiqué sur le paquet (1 minute si nouilles fraîches). Pendant ce temps : wok ou poêle bien chaud(e). Y placer la dés de saumon fumé, puis l’oignon, le chou et la carotte. Cuire légèrement, puis ajouter l’oignon nouveau et les shiitake."
      - "Nouilles cuites : passer sous l’eau froide pour stopper la cuisson. Incorporer aux légumes et à la viande. Faire sauter avec la sauce. Dresser, ajouter ciboulette, algue en flocons et gingembre confit."
      cavernes:
      - "Mélange. Sauce. Récipient. Sauce huître, sauce Worcestershire, ketchup, sauce soja, sucre. Mélanger. Côté, réserver."
      - "Cuisson. Carotte, julienne, couper. Chou blanc, oignon nouveau partie verte, shiitake, oignon, dés saumon fumé, petits morceaux. Ciboulette, ciseler."
      - "Cuisson. Nouilles, grand volume eau bouillante salée, placer. Temps paquet, cuire. Ou nouilles fraîches : 1 minute. Pendant : wok ou poêle, feu, bien chaud. Dés saumon fumé, placer. Puis oignon, chou, carotte. Légèrement, cuire. Puis oignon nouveau, shiitake, ajouter."
      - "Finition. Nouilles cuites, eau froide, passer. Cuisson, stopper. Légumes, viande, nouilles, incorporer. Sauce, tout, faire sauter. Assiette, dresser. Ciboulette, algue flocons, gingembre confit, ajouter. Décoration."
    kcal_per_serving: 262
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
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Yakisoba au porc
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/yakisoba-au-porc]]

## Ingrédients (4 personnes)

- 360 g de nouilles à Yakisoba/ramen
- 300 g de poitrine de porc
- 1 carotte
- 100 g de chou blanc
- 1 oignon nouveau
- 300 g de shiitake ou champignons de paris
- 2 cuillères à soupe de sauce huître
- 2 cuillères à soupe de sauce soja
- 2 cuillères à soupe de sauce Worcestershire
- 2 cuillères à soupe de ketchup (oui, vous avez bien lu)
- 2 cuillères à soupe de sucre
-  huile végétale
- 1 pincée d'Aonori (algue en flocons)
- 1 pincée de ciboulette
- 1 pincée de gingembre confit

## Préparation

1. Pour réaliser la sauce, mélangez dans un récipient la sauce huître, la sauce Worcestershire, le ketchup, la sauce soja et le sucre. Réservez de côté.
2. Coupez la carotte en julienne, puis le chou blanc, l’oignon nouveau (la partie verte), les shiitake, l’oignon et la poitrine de porc en petits morceaux. Ciselez la ciboulette.
3. Placez les nouilles dans un grand volume d’eau bouillante salée et faites-les cuire le temps indiqué sur le paquet (ou bien 1 minute si ce sont des nouilles fraîches). Pendant ce temps, mettez votre wok ou poêle sur le feu et attendez qu’il/elle soit bien chaud(e). Placez-y la poitrine de porc, puis l’oignon, le chou et la carotte. Laissez cuire légèrement avant d’ajouter l’oignon nouveau et les shiitake.
4. Une fois les nouilles cuites et passées sous l’eau froide pour stopper leur cuisson, incorporez-les aux légumes et à la viande et faites sauter le tout avec la sauce préalablement préparée. Dressez dans une assiette et ajoutez la ciboulette, l’algue en flocons et le gingembre confit pour la décoration.

 
 

 
 Rien de plus simple ! Régalez-vous avec ce plat savoureux et partagez-moi vos photos !
