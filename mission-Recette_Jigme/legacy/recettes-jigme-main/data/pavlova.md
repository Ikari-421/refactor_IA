---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
- ref: fouet
slug: pavlova
title: Pavlova
lang: fr
description: "Pavlova : recette néo-zélandaise avec blanc d'oeuf, mascarpone et fruits, pour 4 personnes. Version maison. Facile à suivre."
cuisine: néo-zélandaise
category: sucré
tags:
- sucré
- dessert
- goûter
- végétarien
- blanc d'oeuf
image:
  url:
  alt: Pavlova
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pavlova.md
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
    - from: mascarpone
      to: fromage frais sans lactose
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de cidre
      to: jus de citron (même quantité)
      note: Acidité un peu différente.
    note: Vinaigre de cidre → citron.
house_toggle:
house_options: []
histoire: >
  Meringue croustillante, crème, fruits. On raconte qu’elle porte le nom de la
  danseuse Anna Pavlova ; l’Australie et la Nouvelle-Zélande s’en disputent
  l’invention. Aucune date n’est tranchée ici.
fun_facts:
- text: >
    Le vinaigre ou la crème de tartre dans les blancs stabilise ; trop de sucre
    trop tôt, et la meringue pleure.
  source_name: Usage
  source_url:
- text: >
    On garnit au dernier moment : la crème ramollit la meringue.
  source_name: Usage
  source_url:
wines:
- name: Moscato d'Asti
  producer: Coppo
  origin: Asti, Piémont
  grapes: muscat
  award:
  why: Muscat perlé — les fruits et la meringue, sans un vin tannique.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — le dessert aérien.
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — si les fruits sont acides, un doux de Loire.
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
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 60
      rest_min: 60
      total_min: 150
    equipment: &id002
    - four
    - saladier
    - fouet
    - moule / plat
    - plaque + papier sulfurisé
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: blanc d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: fruits (frais ou surgelés)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: vinaigre de cidre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: extrait de vanille
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez les blancs d’oeufs dans un récipient. Idéalement, il faut que vos oeufs soient
      à température ambiante. Ajoutez une pincée de sel, puis fouettez-les au batteur électrique
      pour les monter en neige.
    - Cuisson. Dans ce même récipient, ajoutez la moitié du sucre. Battez de nouveau les blancs et
      le sucre. Réitérez l’opération avec la seconde moitié du sucre et un peu de vinaigre
      de cidre.
    - Cuisson. Débarrassez votre appareil dans une poche à douille. Préparez une plaque de four recouverte
      d’un film cuisson. Faites la base de votre pavlova en réalisant un cercle plus ou moins
      grand, en fonction de si vous voulez faire des portions individuelle ou un grand dessert
      à partager.
    - Cuisson. Ajouter ensuite des rebords extérieur, comme si vous vouliez faire une sorte de récipient.
      Vous pouvez réaliser les formes et décorations que vous voulez, selon vos envies. Pour
      bien comprendre ce qu’il faut faire, n’hésitez pas à regarder la vidéo ci-dessous.
    - Cuisson. Enfournez ces meringues à 140°C pendant 1h (ou pendant 2h à 90°C).
    - Mixage. Équeutez les fraises et mixez-en une partie pour réaliser un coulis. Vous pouvez passez
      ce dernier à la passoire pour retirer les pépins. Coupez les fraises restantes en quatre
      et réservez.
    - Cuisson. Pour réaliser une crème onctueuse, battez la crème liquide pour la monter. Débarrassez
      dans un récipient. Ajoutez le mascarpone, l’extrait de vanille et le sucre glace, puis
      incorporez le tout à l’aide d’une spatule. Déposez le mélange obtenu dans une poche
      à douille.
    - Finition. Maintenant que vos meringues sont cuites, il est temps de passer au montage. Faites
      la pavlova que vous voulez, en laissant parler l’artiste qui est en vous ! De notre
      côté, on a tapissé le fond de crème avant d’ajouter un peu de coulis et quelques morceaux
      de fraises. On a remis de la crème pour former une sorte de chapeau sur la meringue
      et décoré le tout avec des fraises et du coulis. Vous pouvez ajouter un peu de zeste
      de citron vert sur votre pavlova avant de la servir pour apporter une pointe d’acidité.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez les blancs d’oeufs dans un récipient. Idéalement, il faut que vos oeufs soient à température ambiante. Ajoutez une pincée de sel, puis fouettez-les au batteur électrique pour les [[monter-en-neige|monter en neige]]."
      - "Cuisson. Dans ce même récipient, ajoutez la moitié du sucre. Battez de nouveau les blancs et le sucre. Réitérez l’opération avec la seconde moitié du sucre et un peu de vinaigre de cidre."
      - "Cuisson. Débarrassez votre appareil dans une poche à douille. Préparez une plaque de four recouverte d’un film cuisson. Faites la base de votre pavlova en réalisant un cercle plus ou moins grand, en fonction de si vous voulez faire des portions individuelle ou un grand dessert à partager."
      - "Cuisson. Ajoutez ensuite des rebords extérieur, comme si vous vouliez faire une sorte de récipient. Vous pouvez réaliser les formes et décorations que vous voulez, selon vos envies. Pour bien comprendre ce qu’il faut faire, n’hésitez pas à regarder la vidéo ci-dessous."
      - "Cuisson. Enfournez ces meringues à 140°C pendant 1h (ou pendant 2h à 90°C)."
      - "Mixage. Équeutez les fraises et mixez-en une partie pour réaliser un coulis. Vous pouvez [[filtrer|filtrer]] ce dernier à la passoire pour retirer les pépins. Coupez les fraises restantes en quatre et réservez."
      - "Cuisson. Pour réaliser une crème onctueuse, battez la crème liquide pour la monter. Débarrassez dans un récipient. Ajoutez le mascarpone, l’extrait de vanille et le sucre glace, puis incorporez le tout à l’aide d’une spatule. Déposez le mélange obtenu dans une poche à douille."
      - "Finition. Maintenant que vos meringues sont cuites, il est temps de passer au montage. Faites la pavlova que vous voulez, en laissant parler l’artiste qui est en vous ! Tapissez le fond de crème avant d’ajouter un peu de coulis et quelques morceaux de fraises. Remettez de la crème pour former une sorte de chapeau sur la meringue et décorez le tout avec des fraises et du coulis. Vous pouvez ajouter un peu de zeste de citron vert sur votre pavlova avant de la servir pour apporter une pointe d’acidité. Bon appétit !"
      pro:
      - "Placer les blancs d’oeufs dans un récipient, idéalement à température ambiante. Ajouter une pincée de sel. Fouetter au batteur électrique, monter en neige."
      - "Ajouter la moitié du sucre dans le même récipient. Battre de nouveau. Réitérer avec la seconde moitié du sucre et un peu de vinaigre de cidre."
      - "Débarrasser l’appareil en poche à douille. Plaque recouverte de film cuisson. Dresser la base en cercle, portions individuelles ou grand dessert."
      - "Ajouter des rebords extérieur, façon récipient. Formes et décorations au choix. Voir la vidéo."
      - "Enfourner à 140°C pendant 1h (ou 2h à 90°C)."
      - "Équeuter les fraises. Mixer une partie en coulis. Option : passer à la passoire pour retirer les pépins. Couper le reste en quatre. Réserver."
      - "Battre la crème liquide pour la monter. Débarrasser. Ajouter mascarpone, extrait de vanille et sucre glace. Incorporer à la spatule. Poche à douille."
      - "Monter : tapisser le fond de crème, coulis, morceaux de fraises, chapeau de crème, fraises, coulis. Option : zeste de citron vert. Servir. Bon appétit."
      cavernes:
      - "Préparation. Blancs d’oeufs, récipient. Idéalement oeufs température ambiante. Pincée sel, ajouter. Batteur électrique, fouetter, monter en neige."
      - "Cuisson. Même récipient, moitié sucre, ajouter. Blancs et sucre, battre encore. Seconde moitié sucre, peu vinaigre cidre, réitérer."
      - "Cuisson. Appareil, poche douille. Plaque four, film cuisson. Base pavlova, cercle plus ou moins grand, portions individuelle ou grand dessert à partager."
      - "Cuisson. Rebords extérieur, ajouter, sorte récipient. Formes, décorations, envies. Vidéo ci-dessous."
      - "Cuisson. Meringues, four 140°C 1h (ou 2h 90°C)."
      - "Mixage. Fraises, équeuter. Partie, mixer, coulis. Passoire possible, pépins dehors. Fraises restantes, couper quatre, réserver."
      - "Cuisson. Crème liquide, battre, monter. Récipient, débarrasser. Mascarpone, extrait vanille, sucre glace, ajouter. Spatule, incorporer. Poche douille."
      - "Finition. Meringues cuites, montage. Pavlova comme voulu, artiste. Fond, crème, tapisser. Peu coulis, morceaux fraises. Crème encore, sorte chapeau. Fraises, coulis, décorer. Peu zeste citron vert possible. Servir. Bon appétit."
    kcal_per_serving: 543
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 543
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
    - fruits_a_coque
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: aquafaba
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: mascarpone végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: fruits (frais ou surgelés)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: vinaigre de cidre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: extrait de vanille
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mixage. Placez l’aquafaba dans un récipient, à température ambiante. Ajoutez une pincée de sel, puis fouettez au batteur pour monter en neige.
    - Cuisson. Dans ce même récipient, ajoutez la moitié du sucre. Battez de nouveau l’aquafaba et le sucre. Réitérez l’opération avec la seconde moitié du sucre et un peu de vinaigre
      de cidre.
    - Cuisson. Débarrassez votre appareil dans une poche à douille. Préparez une plaque de four recouverte
      d’un film cuisson. Faites la base de votre pavlova en réalisant un cercle plus ou moins
      grand, en fonction de si vous voulez faire des portions individuelle ou un grand dessert
      à partager.
    - Cuisson. Ajouter ensuite des rebords extérieur, comme si vous vouliez faire une sorte de récipient.
      Vous pouvez réaliser les formes et décorations que vous voulez, selon vos envies. Pour
      bien comprendre ce qu’il faut faire, n’hésitez pas à regarder la vidéo ci-dessous.
    - Cuisson. Enfournez ces meringues à 140°C pendant 1h (ou pendant 2h à 90°C).
    - Mixage. Équeutez les fraises et mixez-en une partie pour réaliser un coulis. Vous pouvez passez
      ce dernier à la passoire pour retirer les pépins. Coupez les fraises restantes en quatre
      et réservez.
    - Cuisson. Pour réaliser une crème onctueuse, battez la crème de soja ou avoine pour la monter.
      Débarrassez dans un récipient. Ajoutez le mascarpone végétal (cajou), l’extrait de vanille
      et le sucre glace, puis incorporez le tout à l’aide d’une spatule. Déposez le mélange
      obtenu dans une poche à douille.
    - Finition. Maintenant que vos meringues sont cuites, il est temps de passer au montage. Faites
      la pavlova que vous voulez, en laissant parler l’artiste qui est en vous ! De notre
      côté, on a tapissé le fond de crème végétale avant d’ajouter un peu de coulis et quelques morceaux
      de fraises. On a remis de la crème pour former une sorte de chapeau sur la meringue
      et décoré le tout avec des fraises et du coulis. Vous pouvez ajouter un peu de zeste
      de citron vert sur votre pavlova avant de la servir pour apporter une pointe d’acidité.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Mixage. Placez l’aquafaba dans un récipient, à température ambiante. Ajoutez une pincée de sel, puis fouettez au batteur pour [[monter-en-neige|monter en neige]]."
      - "Cuisson. Dans ce même récipient, ajoutez la moitié du sucre. Battez de nouveau l’aquafaba et le sucre. Réitérez l’opération avec la seconde moitié du sucre et un peu de vinaigre de cidre."
      - "Cuisson. Débarrassez votre appareil dans une poche à douille. Préparez une plaque de four recouverte d’un film cuisson. Faites la base de votre pavlova en réalisant un cercle plus ou moins grand, en fonction de si vous voulez faire des portions individuelle ou un grand dessert à partager."
      - "Cuisson. Ajoutez ensuite des rebords extérieur, comme si vous vouliez faire une sorte de récipient. Vous pouvez réaliser les formes et décorations que vous voulez, selon vos envies. Pour bien comprendre ce qu’il faut faire, n’hésitez pas à regarder la vidéo ci-dessous."
      - "Cuisson. Enfournez ces meringues à 140°C pendant 1h (ou pendant 2h à 90°C)."
      - "Mixage. Équeutez les fraises et mixez-en une partie pour réaliser un coulis. Vous pouvez [[filtrer|filtrer]] ce dernier à la passoire pour retirer les pépins. Coupez les fraises restantes en quatre et réservez."
      - "Cuisson. Pour réaliser une crème onctueuse, battez la crème de soja ou avoine pour la monter. Débarrassez dans un récipient. Ajoutez le mascarpone végétal (cajou), l’extrait de vanille et le sucre glace, puis incorporez le tout à l’aide d’une spatule. Déposez le mélange obtenu dans une poche à douille."
      - "Finition. Maintenant que vos meringues sont cuites, il est temps de passer au montage. Faites la pavlova que vous voulez, en laissant parler l’artiste qui est en vous ! Tapissez le fond de crème végétale avant d’ajouter un peu de coulis et quelques morceaux de fraises. Remettez de la crème pour former une sorte de chapeau sur la meringue et décorez le tout avec des fraises et du coulis. Vous pouvez ajouter un peu de zeste de citron vert sur votre pavlova avant de la servir pour apporter une pointe d’acidité. Bon appétit !"
      pro:
      - "Placer l’aquafaba dans un récipient, à température ambiante. Ajouter une pincée de sel. Fouetter au batteur, monter en neige."
      - "Ajouter la moitié du sucre dans le même récipient. Battre de nouveau l’aquafaba et le sucre. Réitérer avec la seconde moitié du sucre et un peu de vinaigre de cidre."
      - "Débarrasser l’appareil en poche à douille. Plaque recouverte de film cuisson. Dresser la base en cercle, portions individuelles ou grand dessert."
      - "Ajouter des rebords extérieur, façon récipient. Formes et décorations au choix. Voir la vidéo."
      - "Enfourner à 140°C pendant 1h (ou 2h à 90°C)."
      - "Équeuter les fraises. Mixer une partie en coulis. Option : passer à la passoire pour retirer les pépins. Couper le reste en quatre. Réserver."
      - "Battre la crème de soja ou avoine pour la monter. Débarrasser. Ajouter mascarpone végétal (cajou), extrait de vanille et sucre glace. Incorporer à la spatule. Poche à douille."
      - "Monter : tapisser le fond de crème végétale, coulis, morceaux de fraises, chapeau de crème, fraises, coulis. Option : zeste de citron vert. Servir. Bon appétit."
      cavernes:
      - "Mixage. Aquafaba, récipient, température ambiante. Pincée sel, ajouter. Batteur, fouetter, monter en neige."
      - "Cuisson. Même récipient, moitié sucre, ajouter. Aquafaba et sucre, battre encore. Seconde moitié sucre, peu vinaigre cidre, réitérer."
      - "Cuisson. Appareil, poche douille. Plaque four, film cuisson. Base pavlova, cercle plus ou moins grand, portions individuelle ou grand dessert à partager."
      - "Cuisson. Rebords extérieur, ajouter, sorte récipient. Formes, décorations, envies. Vidéo ci-dessous."
      - "Cuisson. Meringues, four 140°C 1h (ou 2h 90°C)."
      - "Mixage. Fraises, équeuter. Partie, mixer, coulis. Passoire possible, pépins dehors. Fraises restantes, couper quatre, réserver."
      - "Cuisson. Crème soja ou avoine, battre, monter. Récipient, débarrasser. Mascarpone végétal (cajou), extrait vanille, sucre glace, ajouter. Spatule, incorporer. Poche douille."
      - "Finition. Meringues cuites, montage. Pavlova comme voulu, artiste. Fond, crème végétale, tapisser. Peu coulis, morceaux fraises. Crème encore, sorte chapeau. Fraises, coulis, décorer. Peu zeste citron vert possible. Servir. Bon appétit."
    kcal_per_serving: 356
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 543
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h une fois montée", contenant: "", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"

---

# Pavlova
**Équipement :** [[fouet]] · [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pavlova]]

## Ingrédients (4 personnes)

- 3 blanc d'oeuf
- 250 g de mascarpone
- 500 g de fruits (frais ou surgelés)
- 160 g de sucre en poudre
- 40 g de sucre glace
- 250 g de crème liquide
- 1 c.à.c de vinaigre de cidre
-  extrait de vanille

## Préparation

1. Placez les blancs d’oeufs dans un récipient. Idéalement, il faut que vos oeufs soient à température ambiante. Ajoutez une pincée de sel, puis fouettez-les au batteur électrique pour les monter en neige.
2. Dans ce même récipient, ajoutez la moitié du sucre. Battez de nouveau les blancs et le sucre. Réitérez l’opération avec la seconde moitié du sucre et un peu de vinaigre de cidre.
3. Débarrassez votre appareil dans une poche à douille. Préparez une plaque de four recouverte d’un film cuisson. Faites la base de votre pavlova en réalisant un cercle plus ou moins grand, en fonction de si vous voulez faire des portions individuelle ou un grand dessert à partager.
4. Ajouter ensuite des rebords extérieur, comme si vous vouliez faire une sorte de récipient. Vous pouvez réaliser les formes et décorations que vous voulez, selon vos envies. Pour bien comprendre ce qu’il faut faire, n’hésitez pas à regarder la vidéo ci-dessous.
5. Enfournez ces meringues à 140°C pendant 1h (ou pendant 2h à 90°C).
6. Équeutez les fraises et mixez-en une partie pour réaliser un coulis. Vous pouvez passez ce dernier à la passoire pour retirer les pépins. Coupez les fraises restantes en quatre et réservez.
7. Pour réaliser une crème onctueuse, battez la crème liquide pour la monter. Débarrassez dans un récipient. Ajoutez le mascarpone, l’extrait de vanille et le sucre glace, puis incorporez le tout à l’aide d’une spatule. Déposez le mélange obtenu dans une poche à douille.
8. Maintenant que vos meringues sont cuites, il est temps de passer au montage. Faites la pavlova que vous voulez, en laissant parler l’artiste qui est en vous ! De notre côté, on a tapissé le fond de crème avant d’ajouter un peu de coulis et quelques morceaux de fraises. On a remis de la crème pour former une sorte de chapeau sur la meringue et décoré le tout avec des fraises et du coulis.

 
 

 
 Vous pouvez ajouter un peu de zeste de citron vert sur votre pavlova avant de la servir pour apporter une pointe d’acidité. Bon appétit !
