---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: poulet-a-la-creme-en-cocotte
title: Poulet à la crème en cocotte
lang: fr
description: "Poulet à la crème en cocotte : recette française avec cuisse de poulet, pommes de terre grenaille et pancetta, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- poulet
- plat
- cuisse de poulet
image:
  url:
  alt: Poulet à la crème en cocotte
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-a-la-creme-en-cocotte.md
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
    - from: paneer ou tofu ferme
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
    - from: paneer ou tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; tofu fumé → pois chiches rôtis
      ; tofu ferme → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
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
  Plat de cuisine bourgeoise française : poulet mijoté à la crème, cousin de la
  fricassée. La cocotte, couvercle fermé, concentre le jus et empêche la crème de
  réduire trop vite. Pas de date d’invention unique : c’est un geste de ferme et de
  ville, répandu dès que la crème et le poulet se croisent à la table.
fun_facts:
- text: >
    La crème fraîche (légèrement acide) tranche le gras du poulet mieux qu’une crème
    liquide sucrée ; on l’ajoute hors ébullition pour éviter qu’elle tranche.
  source_name: Usage de cuisine française
  source_url:
- text: >
    En Bresse, le poulet AOP se sert souvent nappé de crème : le plat n’est pas
    « inventé » là, mais le produit y a fixé l’image.
  source_name: Usage Bresse / poulet de Bresse AOP
  source_url: https://en.wikipedia.org/wiki/Bresse_chicken
wines:
- name: Saint-Véran
  producer: Domaine des Deux Roches
  origin: Saint-Vérand, Mâconnais
  grapes: chardonnay
  award:
  why: Corps et notes de noisette — sauce crème, sans bois dominateur.
- name: Rully blanc
  producer: Domaine Jaeger-Defaix
  origin: Rully, Côte chalonnaise
  grapes: chardonnay
  award:
  why: Tension, agrume — coupe le gras de la crème et du jus de volaille.
- name: Vouvray sec
  producer: Domaine Huet
  origin: Vouvray, Loire
  grapes: chenin blanc
  award:
  why: Acidité et cire d’abeille — tient la crème mieux qu’un blanc trop mûr.
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
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cuisse de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pommes de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pancetta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: bouillon de volaille
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: herbes de Provence
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
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
    steps:
    - Préparation. Coupez grossièrement l’ail et l’oignon
    - Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple),
      saisissez les cuisses de poulet. Une fois saisies, réservez-les.
    - Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien réduit,
      rajoutez les morceaux de pancetta.
    - 'Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence,
      cuisses de poulet, crème liquide. Couvrez et laissez mijoter une quarantaine de minutes.
      La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations
      mijotées.'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement l’ail et l’oignon."
      - "Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple), saisissez les cuisses de poulet. Une fois saisies, réservez-les."
      - "Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien [[reduire|réduit]], rajoutez les morceaux de pancetta."
      - "Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, cuisses de poulet, crème liquide. Couvrez et [[mijoter|laissez mijoter]] une quarantaine de minutes. La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations mijotées."
      pro:
      - "Couper grossièrement l’ail et l’oignon."
      - "Dans une cocotte, faire chauffer de la matière grasse (beurre clarifié par exemple). Saisir les cuisses de poulet. Réserver."
      - "Faire cuire l’ail et l’oignon. Ajouter du vin blanc. Dès qu’il a bien réduit, ajouter les morceaux de pancetta."
      - "Mélanger. Ajouter le reste : pommes de terre grenailles, herbes de Provence, cuisses de poulet, crème liquide. Couvrir. Mijoter une quarantaine de minutes."
      cavernes:
      - "Préparation. Ail, oignon, couper grossièrement."
      - "Cuisson. Cocotte, matière grasse (beurre clarifié par exemple), chauffer. Cuisses poulet, saisir. Saisies, réserver."
      - "Cuisson. Ail, oignon, cuire. Vin blanc, rajouter. Bien réduit. Pancetta, morceaux, rajouter."
      - "Finition. Mélanger. Restes : pommes terre grenailles, herbes Provence, cuisses poulet, crème liquide, rajouter. Couvrir. Mijoter quarantaine minutes."
    kcal_per_serving: 560
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pommes de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: bouillon de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: herbes de Provence
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
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
    steps:
    - Préparation. Coupez grossièrement l’ail et l’oignon
    - Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple),
      saisissez le paneer (ou le tofu ferme). Une fois saisi, réservez-le.
    - Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien réduit,
      rajoutez les morceaux de tofu fumé.
    - 'Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, paneer, crème liquide. Couvrez et laissez mijoter une quarantaine de minutes.
      La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations
      mijotées.'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement l’ail et l’oignon."
      - "Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple), saisissez le paneer (ou le tofu ferme). Une fois saisi, réservez-le."
      - "Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien [[reduire|réduit]], rajoutez les morceaux de tofu fumé."
      - "Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, paneer, crème liquide. Couvrez et [[mijoter|laissez mijoter]] une quarantaine de minutes. La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations mijotées."
      pro:
      - "Couper grossièrement l’ail et l’oignon."
      - "Dans une cocotte, faire chauffer de la matière grasse (beurre clarifié par exemple). Saisir le paneer (ou le tofu ferme). Réserver."
      - "Faire cuire l’ail et l’oignon. Ajouter du vin blanc. Dès qu’il a bien réduit, ajouter les morceaux de tofu fumé."
      - "Mélanger. Ajouter le reste : pommes de terre grenailles, herbes de Provence, paneer, crème liquide. Couvrir. Mijoter une quarantaine de minutes."
      cavernes:
      - "Préparation. Ail, oignon, couper grossièrement."
      - "Cuisson. Cocotte, matière grasse (beurre clarifié par exemple), chauffer. Paneer (ou tofu ferme), saisir. Saisi, réserver."
      - "Cuisson. Ail, oignon, cuire. Vin blanc, rajouter. Bien réduit. Tofu fumé, morceaux, rajouter."
      - "Finition. Mélanger. Restes : pommes terre grenailles, herbes Provence, paneer, crème liquide, rajouter. Couvrir. Mijoter quarantaine minutes."
    kcal_per_serving: 488
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pommes de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
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
    - qty: 500
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: bouillon de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: herbes de Provence
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
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement l’ail et l’oignon
    - Dressage. Dans une cocotte, faites chauffer de la margarine végétale, saisissez le tofu ferme. Une fois saisi, réservez-le.
    - Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien réduit,
      rajoutez les morceaux de tofu fumé.
    - 'Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence,
      tofu ferme, crème de soja ou d’avoine. Couvrez et laissez mijoter une quarantaine
      de minutes. La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses
      préparations mijotées.'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement l’ail et l’oignon."
      - "Dressage. Dans une cocotte, faites chauffer de la margarine végétale, saisissez le tofu ferme. Une fois saisi, réservez-le."
      - "Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien [[reduire|réduit]], rajoutez les morceaux de tofu fumé."
      - "Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, tofu ferme, crème de soja ou d’avoine. Couvrez et [[mijoter|laissez mijoter]] une quarantaine de minutes. La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations mijotées."
      pro:
      - "Couper grossièrement l’ail et l’oignon."
      - "Dans une cocotte, faire chauffer de la margarine végétale. Saisir le tofu ferme. Réserver."
      - "Faire cuire l’ail et l’oignon. Ajouter du vin blanc. Dès qu’il a bien réduit, ajouter les morceaux de tofu fumé."
      - "Mélanger. Ajouter le reste : pommes de terre grenailles, herbes de Provence, tofu ferme, crème de soja ou d’avoine. Couvrir. Mijoter une quarantaine de minutes."
      cavernes:
      - "Préparation. Ail, oignon, couper grossièrement."
      - "Dressage. Cocotte, margarine végétale, chauffer. Tofu ferme, saisir. Saisi, réserver."
      - "Cuisson. Ail, oignon, cuire. Vin blanc, rajouter. Bien réduit. Tofu fumé, morceaux, rajouter."
      - "Finition. Mélanger. Restes : pommes terre grenailles, herbes Provence, tofu ferme, crème soja ou avoine, rajouter. Couvrir. Mijoter quarantaine minutes."
    kcal_per_serving: 257
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pommes de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
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
    - qty: 500
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: bouillon de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: herbes de Provence
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement l’ail et l’oignon
    - Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple),
      saisissez les cuisses de poulet. Une fois saisies, réservez-les.
    - Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien réduit,
      rajoutez les morceaux de tofu fumé.
    - 'Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence,
      cuisses de poulet, crème liquide. Couvrez et laissez mijoter une quarantaine de minutes.
      La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations
      mijotées.'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement l’ail et l’oignon."
      - "Cuisson. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple), saisissez les cuisses de poulet. Une fois saisies, réservez-les."
      - "Cuisson. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien [[reduire|réduit]], rajoutez les morceaux de tofu fumé."
      - "Finition. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, cuisses de poulet, crème liquide. Couvrez et [[mijoter|laissez mijoter]] une quarantaine de minutes. La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations mijotées."
      pro:
      - "Couper grossièrement l’ail et l’oignon."
      - "Dans une cocotte, faire chauffer de la matière grasse (beurre clarifié par exemple). Saisir les cuisses de poulet. Réserver."
      - "Faire cuire l’ail et l’oignon. Ajouter du vin blanc. Dès qu’il a bien réduit, ajouter les morceaux de tofu fumé."
      - "Mélanger. Ajouter le reste : pommes de terre grenailles, herbes de Provence, cuisses de poulet, crème liquide. Couvrir. Mijoter une quarantaine de minutes."
      cavernes:
      - "Préparation. Ail, oignon, couper grossièrement."
      - "Cuisson. Cocotte, matière grasse (beurre clarifié par exemple), chauffer. Cuisses poulet, saisir. Saisies, réserver."
      - "Cuisson. Ail, oignon, cuire. Vin blanc, rajouter. Bien réduit. Tofu fumé, morceaux, rajouter."
      - "Finition. Mélanger. Restes : pommes terre grenailles, herbes Provence, cuisses poulet, crème liquide, rajouter. Couvrir. Mijoter quarantaine minutes."
    kcal_per_serving: 488
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
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

# Poulet à la crème en cocotte
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-a-la-creme-en-cocotte]]

## Ingrédients (4 personnes)

- 4 cuisse de poulet
- 200 g de pommes de terre grenaille
- 100 g de pancetta
- 2 oignon
- 2 gousse d'ail
- 50 cl de crème liquide
-  bouillon de volaille
-  persil
-  herbes de Provence

## Préparation

1. Coupez grossièrement l’ail et l’oignon
2. Dans une cocotte, faites chauffer de la matière grasse (beurre clarifié par exemple), saisissez les cuisses de poulet. Une fois saisies, réservez-les.
3. Faites cuire l’ail et l’oignon. Rajoutez du vin blanc. Dès que ce dernier a bien réduit, rajoutez les morceaux de pancetta.
4. Mélangez puis rajoutez le restes : pommes de terre grenailles, herbes de Provence, cuisses de poulet, crème liquide. Couvrez et laissez mijoter une quarantaine de minutes.

 
 

 
 La cocotte, y’a pas à dire, c’est l’accessoire indispensable pour les délicieuses préparations mijotées.
