---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: tarte-aux-legumes
title: Tarte aux légumes
lang: fr
description: "Tarte aux légumes : recette française avec courgette, aubergine et tomate, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- tarte
- légumes
- végétarien
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tarte-aux-legumes.jpg
  alt: Tarte aux légumes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-aux-legumes.md
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
    - from: poignée de fromage râpé
      to: comté affiné (naturellement quasi sans lactose)
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans poisson.
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
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; crème de soja ou avoine → crème d''avoine.'
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
  Cousine de la quiche lorraine — tarte salée à l’appareil œufs-crème — la tarte aux
  légumes reprend la même logique sur une pâte brisée. On dit souvent que le mot quiche
  vient de l’allemand Kuchen (gâteau) ; c’est une piste étymologique, pas une origine
  fermée. Sans lardons, elle devient un plat de maison très souple, qui accueille les
  légumes du moment et se mange chaude comme froide. Les légumes se rissolent d’abord :
  crus, ils noient la pâte.
fun_facts:
- text: >
    Les légumes se rissolent d’abord : crus, ils noient la pâte.
  source_name: Usage
  source_url:
- text: >
    Une pâte brisée salée tient mieux qu’une sablée sucrée sous un appareil humide.
  source_name: Usage
  source_url:
wines:
- name: Côtes de Provence
  producer: Château de Roquefort
  origin: Roquefort-la-Bédoule, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — les légumes, sans un vin de dessert.
- name: Sancerre
  producer: Henri Bourgeois
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — la crème et les légumes, acidité nette.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — si l’on veut un rouge, tanin court.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - four
    - poêle
    - saladier
    - fouet
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
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
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 60
      unit: g
      item: fromage râpé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de persil
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de basilic
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Prenez votre pâte sablée et placez-la dans un moule à tarte. Rendez-vous sur cette vidéo
      pour apprendre à foncer votre tarte. Préchauffez également votre four à 180°C.
    - Cuisson. À l’aide d’un pinceau ou d’une cuillère à soupe, étalez un peu de moutarde à l’ancienne
      sur le fond de la quiche. Réservez au frigo le temps de découper les légumes.
    - Cuisson. Découpez la courgette et l’aubergine en demi-rondelles assez fines, puis épluchez et
      taillez l’oignon. Faites les revenir dans une poêle avec un filet d’huile jusqu’à ce
      qu’ils soient légèrement colorés. On vous conseille de les cuire séparément afin de
      pouvoir réaliser un beau dressage à la fin. Réservez.
    - Mélange. Dans un récipient, cassez deux oeufs entier et 25cl de crème liquide, puis mélangez
      à l’aide d’un fouet. Complétez avec le fromage râpé, puis mélangez de nouveau. Votre
      appareil est prêt.
    - Cuisson. Pour dresser votre quiche comme nous, déposez une première couche d’aubergines sur votre
      quiche. Recouvrez d’une couche de courgettes, puis d’une couche d’oignons.
    - Cuisson. Coupez une belle tomate en fines rondelles et disposez-les au-dessus des autres légumes.
    - Cuisson. Hachez finement du persil et du basilic frais. Déposez-en la moitié sur les légumes
      et l’autre moitié dans l’appareil à quiche. Salez et poivrez l’appareil selon vos goûts,
      puis mélangez une dernière fois.
    - Cuisson. Versez l’appareil sur la quiche afin de recouvrir les légumes. Pour les gourmands, vous
      pouvez ajouter un supplément de fromage râpé sur la quiche.
    - Cuisson. Enfournez la quiche à 180°C pendant environ 30min. Elle est prête lorsque l’appareil
      est cuit et le dessus bien doré. Votre quiche aux légumes d’été se dévorer chaude ou
      froide, seule ou accompagnée d’une salade…c’est comme vous voulez ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Prenez votre pâte sablée et placez-la dans un moule à tarte. [[foncer|Foncez]] votre tarte. Préchauffez également votre four à 180 °C."
      - "Cuisson. À l’aide d’un pinceau ou d’une cuillère à soupe, étalez un peu de moutarde à l’ancienne sur le fond de la quiche. Réservez au frigo le temps de découper les légumes."
      - "Cuisson. Découpez la courgette et l’aubergine en demi-rondelles assez fines, puis épluchez et taillez l’oignon. Faites-les revenir dans une poêle avec un filet d’huile jusqu’à ce qu’ils soient légèrement colorés. Vous pouvez les cuire séparément afin de réaliser un beau dressage à la fin. Réservez."
      - "Mélange. Dans un récipient, cassez deux œufs entiers et 25 cl de crème liquide, puis mélangez à l’aide d’un fouet. Complétez avec le fromage râpé, puis mélangez de nouveau. Votre appareil est prêt."
      - "Cuisson. Déposez une première couche d’aubergines sur votre quiche. Recouvrez d’une couche de courgettes, puis d’une couche d’oignons."
      - "Cuisson. Coupez une belle tomate en fines rondelles et disposez-les au-dessus des autres légumes."
      - "Cuisson. Hachez finement du persil et du basilic frais. Déposez-en la moitié sur les légumes et l’autre moitié dans l’appareil à quiche. Salez et poivrez l’appareil selon vos goûts, puis mélangez une dernière fois."
      - "Cuisson. Versez l’appareil sur la quiche afin de recouvrir les légumes. Pour les gourmands, vous pouvez ajouter un supplément de fromage râpé sur la quiche."
      - "Cuisson. Enfournez la quiche à 180 °C pendant environ 30 min. Elle est prête lorsque l’appareil est cuit et le dessus bien doré. Servez-la chaude ou froide."
      pro:
      - "Prendre la pâte sablée et la placer dans un moule à tarte. Foncer la tarte. Préchauffer le four à 180 °C."
      - "À l’aide d’un pinceau ou d’une cuillère à soupe, étaler un peu de moutarde à l’ancienne sur le fond de la quiche. Réserver au frigo le temps de découper les légumes."
      - "Découper la courgette et l’aubergine en demi-rondelles assez fines, puis éplucher et tailler l’oignon. Les faire revenir dans une poêle avec un filet d’huile jusqu’à légère coloration. Option : cuire séparément pour le dressage. Réserver."
      - "Dans un récipient, casser deux œufs entiers et 25 cl de crème liquide, puis mélanger au fouet. Compléter avec le fromage râpé, puis mélanger de nouveau."
      - "Déposer une première couche d’aubergines sur la quiche. Recouvrir d’une couche de courgettes, puis d’une couche d’oignons."
      - "Couper une belle tomate en fines rondelles et les disposer au-dessus des autres légumes."
      - "Hacher finement du persil et du basilic frais. En déposer la moitié sur les légumes et l’autre moitié dans l’appareil à quiche. Saler et poivrer l’appareil selon le goût, puis mélanger une dernière fois."
      - "Verser l’appareil sur la quiche afin de recouvrir les légumes. Option : ajouter un supplément de fromage râpé."
      - "Enfourner la quiche à 180 °C pendant environ 30 min. Prêt lorsque l’appareil est cuit et le dessus bien doré. Servir chaude ou froide."
      cavernes:
      - "Préparation. Pâte sablée, moule tarte, placer. Tarte, foncer. Four 180 °C, préchauffer."
      - "Cuisson. Pinceau ou cuillère soupe, peu moutarde ancienne, fond quiche, étaler. Frigo, réserver, temps découper légumes."
      - "Cuisson. Courgette, aubergine, demi-rondelles assez fines, découper, puis oignon, éplucher, tailler. Poêle, filet huile, revenir jusqu’à légèrement colorés. Option : cuire séparément, dressage. Réserver."
      - "Mélange. Récipient, 2 œufs entiers, 25 cl crème liquide, casser, puis fouet, mélanger. Fromage râpé, compléter, puis mélanger de nouveau. Appareil prêt."
      - "Cuisson. Première couche aubergines, quiche, déposer. Couche courgettes, recouvrir, puis couche oignons."
      - "Cuisson. Belle tomate, fines rondelles, couper, puis dessus autres légumes, disposer."
      - "Cuisson. Persil, basilic frais, hacher finement. Moitié, légumes, déposer, autre moitié, appareil quiche. Appareil, saler, poivrer, selon goûts, puis mélanger 1 dernière fois."
      - "Cuisson. Appareil, quiche, verser, légumes, recouvrir. Option : gourmands, supplément fromage râpé, ajouter."
      - "Cuisson. Quiche, Four 180 °C, environ 30 min, enfourner. Appareil cuit, dessus bien doré, prêt. Chaude ou froide, servir."
    kcal_per_serving: 319
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 319
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
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
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de persil
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de basilic
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Prenez votre pâte sablée et placez-la dans un moule à tarte. Rendez-vous sur cette vidéo
      pour apprendre à foncer votre tarte. Préchauffez également votre four à 180°C.
    - Cuisson. À l’aide d’un pinceau ou d’une cuillère à soupe, étalez un peu de moutarde à l’ancienne
      sur le fond de la quiche. Réservez au frigo le temps de découper les légumes.
    - Cuisson. Découpez la courgette et l’aubergine en demi-rondelles assez fines, puis épluchez et
      taillez l’oignon. Faites les revenir dans une poêle avec un filet d’huile jusqu’à ce
      qu’ils soient légèrement colorés. On vous conseille de les cuire séparément afin de
      pouvoir réaliser un beau dressage à la fin. Réservez.
    - Mélange. Dans un récipient, versez le tofu soyeux (ou l’œuf de lin) et 25 cl de crème de soja, mélangez. Complétez avec le fromage végétal râpé. Votre appareil est prêt.
    - Cuisson. Pour dresser votre quiche comme nous, déposez une première couche d’aubergines sur votre
      quiche. Recouvrez d’une couche de courgettes, puis d’une couche d’oignons.
    - Cuisson. Coupez une belle tomate en fines rondelles et disposez-les au-dessus des autres légumes.
    - Cuisson. Hachez finement du persil et du basilic frais. Déposez-en la moitié sur les légumes
      et l’autre moitié dans l’appareil à quiche. Salez et poivrez l’appareil selon vos goûts,
      puis mélangez une dernière fois.
    - Cuisson. Versez l’appareil sur la quiche afin de recouvrir les légumes. Pour les gourmands, vous
      pouvez ajouter un supplément de fromage végétal râpé sur la quiche.
    - Cuisson. Enfournez la quiche à 180°C pendant environ 30min. Elle est prête lorsque l’appareil
      est cuit et le dessus bien doré. Votre quiche aux légumes d’été se dévorer chaude ou
      froide, seule ou accompagnée d’une salade…c’est comme vous voulez ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Prenez votre pâte sablée et placez-la dans un moule à tarte. [[foncer|Foncez]] votre tarte. Préchauffez également votre four à 180 °C."
      - "Cuisson. À l’aide d’un pinceau ou d’une cuillère à soupe, étalez un peu de moutarde à l’ancienne sur le fond de la quiche. Réservez au frigo le temps de découper les légumes."
      - "Cuisson. Découpez la courgette et l’aubergine en demi-rondelles assez fines, puis épluchez et taillez l’oignon. Faites-les revenir dans une poêle avec un filet d’huile jusqu’à ce qu’ils soient légèrement colorés. Vous pouvez les cuire séparément afin de réaliser un beau dressage à la fin. Réservez."
      - "Mélange. Dans un récipient, versez le tofu soyeux (ou l’œuf de lin) et 25 cl de crème de soja, mélangez. Complétez avec le fromage végétal râpé. Votre appareil est prêt."
      - "Cuisson. Déposez une première couche d’aubergines sur votre quiche. Recouvrez d’une couche de courgettes, puis d’une couche d’oignons."
      - "Cuisson. Coupez une belle tomate en fines rondelles et disposez-les au-dessus des autres légumes."
      - "Cuisson. Hachez finement du persil et du basilic frais. Déposez-en la moitié sur les légumes et l’autre moitié dans l’appareil à quiche. Salez et poivrez l’appareil selon vos goûts, puis mélangez une dernière fois."
      - "Cuisson. Versez l’appareil sur la quiche afin de recouvrir les légumes. Pour les gourmands, vous pouvez ajouter un supplément de fromage végétal râpé sur la quiche."
      - "Cuisson. Enfournez la quiche à 180 °C pendant environ 30 min. Elle est prête lorsque l’appareil est cuit et le dessus bien doré. Servez-la chaude ou froide."
      pro:
      - "Prendre la pâte sablée et la placer dans un moule à tarte. Foncer la tarte. Préchauffer le four à 180 °C."
      - "À l’aide d’un pinceau ou d’une cuillère à soupe, étaler un peu de moutarde à l’ancienne sur le fond de la quiche. Réserver au frigo le temps de découper les légumes."
      - "Découper la courgette et l’aubergine en demi-rondelles assez fines, puis éplucher et tailler l’oignon. Les faire revenir dans une poêle avec un filet d’huile jusqu’à légère coloration. Option : cuire séparément pour le dressage. Réserver."
      - "Dans un récipient, verser le tofu soyeux (ou l’œuf de lin) et 25 cl de crème de soja, mélanger. Compléter avec le fromage végétal râpé."
      - "Déposer une première couche d’aubergines sur la quiche. Recouvrir d’une couche de courgettes, puis d’une couche d’oignons."
      - "Couper une belle tomate en fines rondelles et les disposer au-dessus des autres légumes."
      - "Hacher finement du persil et du basilic frais. En déposer la moitié sur les légumes et l’autre moitié dans l’appareil à quiche. Saler et poivrer l’appareil selon le goût, puis mélanger une dernière fois."
      - "Verser l’appareil sur la quiche afin de recouvrir les légumes. Option : ajouter un supplément de fromage végétal râpé."
      - "Enfourner la quiche à 180 °C pendant environ 30 min. Prêt lorsque l’appareil est cuit et le dessus bien doré. Servir chaude ou froide."
      cavernes:
      - "Préparation. Pâte sablée, moule tarte, placer. Tarte, foncer. Four 180 °C, préchauffer."
      - "Cuisson. Pinceau ou cuillère soupe, peu moutarde ancienne, fond quiche, étaler. Frigo, réserver, temps découper légumes."
      - "Cuisson. Courgette, aubergine, demi-rondelles assez fines, découper, puis oignon, éplucher, tailler. Poêle, filet huile, revenir jusqu’à légèrement colorés. Option : cuire séparément, dressage. Réserver."
      - "Mélange. Récipient, tofu soyeux (ou œuf de lin), 25 cl crème de soja, verser, mélanger. Fromage végétal râpé, compléter. Appareil prêt."
      - "Cuisson. Première couche aubergines, quiche, déposer. Couche courgettes, recouvrir, puis couche oignons."
      - "Cuisson. Belle tomate, fines rondelles, couper, puis dessus autres légumes, disposer."
      - "Cuisson. Persil, basilic frais, hacher finement. Moitié, légumes, déposer, autre moitié, appareil quiche. Appareil, saler, poivrer, selon goûts, puis mélanger 1 dernière fois."
      - "Cuisson. Appareil, quiche, verser, légumes, recouvrir. Option : gourmands, supplément fromage végétal râpé, ajouter."
      - "Cuisson. Quiche, Four 180 °C, environ 30 min, enfourner. Appareil cuit, dessus bien doré, prêt. Chaude ou froide, servir."
    kcal_per_serving: 164
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 319
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte aux légumes
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/tarte-aux-legumes.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-aux-legumes]]

## Ingrédients (4 personnes)

- 1 courgette
- 1 aubergine
- 1 tomate
- 1 oignon
- 2 oeuf
- 25 cl de crème liquide
- 2 poignée de fromage râpé
- 1 bouquet de persil
- 1 bouquet de basilic

## Préparation

1. Prenez votre pâte sablée et placez-la dans un moule à tarte. Rendez-vous sur cette vidéo pour apprendre à foncer votre tarte. Préchauffez également votre four à 180°C.
2. À l’aide d’un pinceau ou d’une cuillère à soupe, étalez un peu de moutarde à l’ancienne sur le fond de la quiche. Réservez au frigo le temps de découper les légumes.
3. Découpez la courgette et l’aubergine en demi-rondelles assez fines, puis épluchez et taillez l’oignon. Faites les revenir dans une poêle avec un filet d’huile jusqu’à ce qu’ils soient légèrement colorés. On vous conseille de les cuire séparément afin de pouvoir réaliser un beau dressage à la fin. Réservez.
4. Dans un récipient, cassez deux oeufs entier et 25cl de crème liquide, puis mélangez à l’aide d’un fouet. Complétez avec le fromage râpé, puis mélangez de nouveau. Votre appareil est prêt.
5. Pour dresser votre quiche comme nous, déposez une première couche d’aubergines sur votre quiche. Recouvrez d’une couche de courgettes, puis d’une couche d’oignons.
6. Coupez une belle tomate en fines rondelles et disposez-les au-dessus des autres légumes.
7. Hachez finement du persil et du basilic frais. Déposez-en la moitié sur les légumes et l’autre moitié dans l’appareil à quiche. Salez et poivrez l’appareil selon vos goûts, puis mélangez une dernière fois.
8. Versez l’appareil sur la quiche afin de recouvrir les légumes. Pour les gourmands, vous pouvez ajouter un supplément de fromage râpé sur la quiche.
9. Enfournez la quiche à 180°C pendant environ 30min. Elle est prête lorsque l’appareil est cuit et le dessus bien doré.

 
 

 
 Votre quiche aux légumes d’été se dévorer chaude ou froide, seule ou accompagnée d’une salade…c’est comme vous voulez ! Bon appétit !
