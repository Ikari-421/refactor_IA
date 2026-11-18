---
schema: recette-web-jigme/v2
equipment:
- ref: sous-vide
slug: saumon-sous-vide-bouillon-facile
title: Saumon sous vide bouillon facile
lang: fr
description: "Saumon sous vide bouillon facile : recette française avec pavé de saumon, bâton de citronnelle et gingembre, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- saumon
- plat
- pavé de saumon
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/saumon-sous-vide-bouillon-facile.webp
  alt: Saumon sous vide bouillon facile
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/saumon-sous-vide-bouillon-facile.md
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
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Lactose : halloumi ou tofu fumé → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Produits laitiers : halloumi ou tofu fumé → tofu ferme.'
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
    - from: halloumi ou tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    note: 'Soja : halloumi ou tofu fumé → pois chiches rôtis ; tofu fumé → pois chiches rôtis.'
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
histoire: 'Cuisson sous vide : sachet fermé, bain à température contrôlée. Pour le saumon, souvent 30
  à 60 min, pour un cœur nacre. Geste de restaurant contemporain, pas une recette de pêcheur.

  '
fun_facts:
- text: >
    Trop chaud, le saumon blanchit et sèche ; trop long, il se défait en plaques.
  source_name: Grokipedia, Sous vide
  source_url: https://grokipedia.com/page/Sous_vide
- text: >
    Le bouillon se sert à part : le poisson ne doit pas y recuire.
  source_name: Usage
  source_url:
wines:
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — le saumon nacre, acidité nette.
- name: Chablis
  producer: La Chablisienne
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre, citron — le poisson, sans beurre de fût.
- name: Muscadet Sèvre-et-Maine
  producer: Luneau-Papin
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — le bouillon, voisin de mer.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 120
      rest_min: 120
      total_min: 270
    equipment: &id002
    - four
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: pavé de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bâton de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon
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
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: baies rouge
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légume
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: botte d'épinards
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
    - Préparation. Commencez par retirer les éventuelles arêtes de votre pavé, puis assaisonnez-le des
      deux côtés et placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre
      en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite votre poche sous vide
      (si vous n’avez pas de machine pour mettre sous-vide, prenez un sac congélation et éliminez
      un maximum d’air possible).
    - Cuisson. Placez le saumon sous vide dans un mijoteur prévu à cet effet et laissez cuire 1h30
      à 45°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur
      ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez
      l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez
      les chapeaux en lamelles.
    - Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé,
      les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez
      réduire à feu doux pour concentrer les arômes, puis filtrez. Ajoutez ensuite le piment,
      les lamelles de champignons et de la coriandre fraîche.
    - Cuisson. Lorsque la cuisson sous vide du saumon est terminée, faites-le saisir dans une poêle
      en commençant par le côté avec la peau.
    - Dressage. Pour le dressage, déposez votre garniture dans une assiette creuse, le saumon par dessus,
      puis versez le bouillon. Assaisonnez si besoin et c’est prêt ! Et voilà, une belle recette
      généreuse en goût, la cuisson sous vide, c’est vraiment dingue !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez les éventuelles arêtes du pavé, assaisonnez-le des deux côtés, puis placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite la poche sous vide (si vous n’avez pas de machine pour mettre sous vide, prenez un sac congélation et éliminez un maximum d’air possible)."
      - "Cuisson. Placez le saumon sous vide dans un mijoteur prévu à cet effet et laissez cuire 1h30 à 45°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez les chapeaux en lamelles."
      - "Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez [[reduire|réduire]] à feu doux pour concentrer les arômes, puis [[filtrer|filtrez]]. Ajoutez ensuite le piment, les lamelles de champignons et de la coriandre fraîche."
      - "Cuisson. Lorsque la cuisson sous vide du saumon est terminée, faites-le saisir dans une poêle en commençant par le côté avec la peau."
      - "Dressage. Déposez votre garniture dans une assiette creuse, le saumon par-dessus, puis versez le bouillon. Assaisonnez si besoin."
      pro:
      - "Retirer les éventuelles arêtes du pavé, assaisonner des deux côtés, placer dans une poche sous vide. Ajouter la citronnelle, le gingembre en morceaux et l’huile de pépin de raisin. Mettre la poche sous vide (sans machine : sac congélation, éliminer un maximum d’air)."
      - "Placer le saumon sous vide dans un mijoteur, cuire 1h30 à 45°C (sinon thermoplongeur ou sonde pour surveiller la température). Pendant ce temps, couper l’oignon, l’ail et les tiges de coriandre. Couper les pieds des champignons, les chapeaux en lamelles."
      - "Dans une casserole huilée, suer l’oignon et l’ail. Ajouter le gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Réduire à feu doux pour concentrer les arômes, filtrer. Ajouter le piment, les lamelles de champignons et la coriandre fraîche."
      - "En fin de cuisson sous vide, saisir le saumon dans une poêle en commençant par le côté peau."
      - "Déposer la garniture dans une assiette creuse, le saumon par-dessus, verser le bouillon. Assaisonner si besoin."
      cavernes:
      - "Préparation. Arêtes pavé, retirer. Deux côtés, assaisonner. Poche sous vide, placer. Citronnelle, gingembre morceaux, huile pépin raisin, ajouter. Poche sous vide. Option : sans machine, sac congélation, maximum air, éliminer."
      - "Cuisson. Saumon sous vide, mijoteur. Cuire 1h30, 45°C. Option : thermoplongeur ou sonde, surveiller. Pendant, oignon, ail, tiges coriandre, couper. Pieds champignons, couper. Chapeaux, lamelles."
      - "Cuisson. Casserole huilée. Oignon, ail, suer. Gingembre pressé, pieds champignons, tiges coriandre, bouillon légumes, ajouter. Feu doux, réduire, concentrer. Filtrer. Piment, lamelles champignons, coriandre fraîche, ajouter."
      - "Cuisson. Sous vide terminé. Poêle, saisir, côté peau d’abord."
      - "Dressage. Garniture, assiette creuse. Saumon dessus. Bouillon, verser. Assaisonner si besoin."
    kcal_per_serving: 303
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: halloumi ou tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bâton de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon
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
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: baies rouge
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légume
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: botte d'épinards
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
    - Préparation. Commencez par retirer les éventuelles arêtes de votre pavé, puis assaisonnez-le des
      deux côtés et placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre
      en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite votre poche sous vide
      (si vous n’avez pas de machine pour mettre sous-vide, prenez un sac congélation et éliminez
      un maximum d’air possible).
    - Cuisson. Placez le halloumi (ou le tofu fumé) sous vide dans un mijoteur prévu à cet effet et laissez cuire 1 h à 65°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur
      ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez
      l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez
      les chapeaux en lamelles.
    - Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé,
      les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez
      réduire à feu doux pour concentrer les arômes, puis filtrez. Ajoutez ensuite le piment,
      les lamelles de champignons et de la coriandre fraîche.
    - Cuisson. Lorsque la cuisson sous vide est terminée, saisissez le halloumi (ou le tofu fumé) dans une poêle.
    - Dressage. Pour le dressage, déposez votre garniture dans une assiette creuse, le halloumi par-dessus, puis versez le bouillon. Assaisonnez si besoin et c’est prêt ! Et voilà, une belle recette
      généreuse en goût, la cuisson sous vide, c’est vraiment dingue !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez les éventuelles arêtes du pavé, assaisonnez-le des deux côtés, puis placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite la poche sous vide (si vous n’avez pas de machine pour mettre sous vide, prenez un sac congélation et éliminez un maximum d’air possible)."
      - "Cuisson. Placez le halloumi (ou le tofu fumé) sous vide dans un mijoteur prévu à cet effet et laissez cuire 1 h à 65°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez les chapeaux en lamelles."
      - "Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez [[reduire|réduire]] à feu doux pour concentrer les arômes, puis [[filtrer|filtrez]]. Ajoutez ensuite le piment, les lamelles de champignons et de la coriandre fraîche."
      - "Cuisson. Lorsque la cuisson sous vide est terminée, saisissez le halloumi (ou le tofu fumé) dans une poêle."
      - "Dressage. Déposez votre garniture dans une assiette creuse, le halloumi par-dessus, puis versez le bouillon. Assaisonnez si besoin."
      pro:
      - "Retirer les éventuelles arêtes du pavé, assaisonner des deux côtés, placer dans une poche sous vide. Ajouter la citronnelle, le gingembre en morceaux et l’huile de pépin de raisin. Mettre la poche sous vide (sans machine : sac congélation, éliminer un maximum d’air)."
      - "Placer le halloumi (ou le tofu fumé) sous vide dans un mijoteur, cuire 1 h à 65°C (sinon thermoplongeur ou sonde pour surveiller la température). Pendant ce temps, couper l’oignon, l’ail et les tiges de coriandre. Couper les pieds des champignons, les chapeaux en lamelles."
      - "Dans une casserole huilée, suer l’oignon et l’ail. Ajouter le gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Réduire à feu doux pour concentrer les arômes, filtrer. Ajouter le piment, les lamelles de champignons et la coriandre fraîche."
      - "En fin de cuisson sous vide, saisir le halloumi (ou le tofu fumé) dans une poêle."
      - "Déposer la garniture dans une assiette creuse, le halloumi par-dessus, verser le bouillon. Assaisonner si besoin."
      cavernes:
      - "Préparation. Arêtes pavé, retirer. Deux côtés, assaisonner. Poche sous vide, placer. Citronnelle, gingembre morceaux, huile pépin raisin, ajouter. Poche sous vide. Option : sans machine, sac congélation, maximum air, éliminer."
      - "Cuisson. Halloumi ou tofu fumé sous vide, mijoteur. Cuire 1 h, 65°C. Option : thermoplongeur ou sonde, surveiller. Pendant, oignon, ail, tiges coriandre, couper. Pieds champignons, couper. Chapeaux, lamelles."
      - "Cuisson. Casserole huilée. Oignon, ail, suer. Gingembre pressé, pieds champignons, tiges coriandre, bouillon légumes, ajouter. Feu doux, réduire, concentrer. Filtrer. Piment, lamelles champignons, coriandre fraîche, ajouter."
      - "Cuisson. Sous vide terminé. Halloumi ou tofu fumé, poêle, saisir."
      - "Dressage. Garniture, assiette creuse. Halloumi dessus. Bouillon, verser. Assaisonner si besoin."
    kcal_per_serving: 188
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bâton de citronnelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon
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
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: baies rouge
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légume
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: botte d'épinards
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
    - Préparation. Commencez par retirer les éventuelles arêtes de votre pavé, puis assaisonnez-le des
      deux côtés et placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre
      en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite votre poche sous vide
      (si vous n’avez pas de machine pour mettre sous-vide, prenez un sac congélation et éliminez
      un maximum d’air possible).
    - Cuisson. Placez le tofu fumé sous vide dans un mijoteur et laissez cuire 1h30 à 45°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur
      ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez
      l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez
      les chapeaux en lamelles.
    - Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé,
      les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez
      réduire à feu doux pour concentrer les arômes, puis filtrez. Ajoutez ensuite le piment,
      les lamelles de champignons et de la coriandre fraîche.
    - Cuisson. Lorsque la cuisson sous vide du tofu fumé est terminée, faites-le saisir dans une poêle.
    - Dressage. Pour le dressage, déposez votre garniture dans une assiette creuse, le tofu fumé par-dessus, puis versez le bouillon. Assaisonnez si besoin et c’est prêt ! Et voilà, une belle recette
      généreuse en goût, la cuisson sous vide, c’est vraiment dingue !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez les éventuelles arêtes du pavé, assaisonnez-le des deux côtés, puis placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite la poche sous vide (si vous n’avez pas de machine pour mettre sous vide, prenez un sac congélation et éliminez un maximum d’air possible)."
      - "Cuisson. Placez le tofu fumé sous vide dans un mijoteur et laissez cuire 1h30 à 45°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez les chapeaux en lamelles."
      - "Cuisson. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez [[reduire|réduire]] à feu doux pour concentrer les arômes, puis [[filtrer|filtrez]]. Ajoutez ensuite le piment, les lamelles de champignons et de la coriandre fraîche."
      - "Cuisson. Lorsque la cuisson sous vide du tofu fumé est terminée, faites-le saisir dans une poêle."
      - "Dressage. Déposez votre garniture dans une assiette creuse, le tofu fumé par-dessus, puis versez le bouillon. Assaisonnez si besoin."
      pro:
      - "Retirer les éventuelles arêtes du pavé, assaisonner des deux côtés, placer dans une poche sous vide. Ajouter la citronnelle, le gingembre en morceaux et l’huile de pépin de raisin. Mettre la poche sous vide (sans machine : sac congélation, éliminer un maximum d’air)."
      - "Placer le tofu fumé sous vide dans un mijoteur, cuire 1h30 à 45°C (sinon thermoplongeur ou sonde pour surveiller la température). Pendant ce temps, couper l’oignon, l’ail et les tiges de coriandre. Couper les pieds des champignons, les chapeaux en lamelles."
      - "Dans une casserole huilée, suer l’oignon et l’ail. Ajouter le gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Réduire à feu doux pour concentrer les arômes, filtrer. Ajouter le piment, les lamelles de champignons et la coriandre fraîche."
      - "En fin de cuisson sous vide du tofu fumé, saisir dans une poêle."
      - "Déposer la garniture dans une assiette creuse, le tofu fumé par-dessus, verser le bouillon. Assaisonner si besoin."
      cavernes:
      - "Préparation. Arêtes pavé, retirer. Deux côtés, assaisonner. Poche sous vide, placer. Citronnelle, gingembre morceaux, huile pépin raisin, ajouter. Poche sous vide. Option : sans machine, sac congélation, maximum air, éliminer."
      - "Cuisson. Tofu fumé sous vide, mijoteur. Cuire 1h30, 45°C. Option : thermoplongeur ou sonde, surveiller. Pendant, oignon, ail, tiges coriandre, couper. Pieds champignons, couper. Chapeaux, lamelles."
      - "Cuisson. Casserole huilée. Oignon, ail, suer. Gingembre pressé, pieds champignons, tiges coriandre, bouillon légumes, ajouter. Feu doux, réduire, concentrer. Filtrer. Piment, lamelles champignons, coriandre fraîche, ajouter."
      - "Cuisson. Sous vide tofu fumé terminé. Poêle, saisir."
      - "Dressage. Garniture, assiette creuse. Tofu fumé dessus. Bouillon, verser. Assaisonner si besoin."
    kcal_per_serving: 188
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 2
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
    ingredients: []
    steps: []
    kcal_per_serving: 303
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
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
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: "Congeler le poisson avant cuisson."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"
---

# Saumon sous vide bouillon facile

![[saumon-sous-vide-bouillon-facile.webp]]
**Équipement :** [[sous-vide]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 2 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/saumon-sous-vide-bouillon-facile]]

## Ingrédients (2 personnes)

- 2 pavé de saumon
- 1 bâton de citronnelle
- 7 g de gingembre
- 4 champignon
- 2 échalote
- 1 piment rouge
-  huile végétale de votre choix
-  baies rouge
-  bouillon de légume
- 1 botte d'épinards
-  coriandre

## Préparation

1. Commencez par retirer les éventuelles arêtes de votre pavé, puis assaisonnez-le des deux côtés et placez-le dans une poche sous vide. Ajoutez-y la citronnelle et le gingembre en morceaux ainsi que l’huile de pépin de raisin. Mettez ensuite votre poche sous vide (si vous n’avez pas de machine pour mettre sous-vide, prenez un sac congélation et éliminez un maximum d’air possible).
2. Placez le saumon sous vide dans un mijoteur prévu à cet effet et laissez cuire 1h30 à 45°C (si vous n’avez pas de mijoteur sous vide, vous pouvez utiliser un thermoplongeur ou une sonde afin de surveiller la température de cuisson). Pendant ce temps, coupez l’oignon, l’ail et les tiges de coriandre. Coupez les pieds des champignons puis coupez les chapeaux en lamelles.
3. Dans une casserole huilée, faites suer l’oignon et l’ail. Ajoutez du gingembre pressé, les pieds de champignons, les tiges de coriandre et le bouillon de légumes. Laissez réduire à feu doux pour concentrer les arômes, puis filtrez. Ajoutez ensuite le piment, les lamelles de champignons et de la coriandre fraîche.
4. Lorsque la cuisson sous vide du saumon est terminée, faites-le saisir dans une poêle en commençant par le côté avec la peau.
5. Pour le dressage, déposez votre garniture dans une assiette creuse, le saumon par dessus, puis versez le bouillon. Assaisonnez si besoin et c’est prêt !

 
 

 
 Et voilà, une belle recette généreuse en goût, la cuisson sous vide, c’est vraiment dingue !
