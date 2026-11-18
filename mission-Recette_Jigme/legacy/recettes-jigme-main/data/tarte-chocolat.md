---
schema: recette-web-jigme/v2
slug: tarte-chocolat
title: Tarte chocolat
lang: fr
description: "Tarte chocolat : recette française avec pâte sablée, chocolat et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tarte
- chocolat
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tarte-chocolat.webp
  alt: Tarte chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-chocolat.md
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
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    - from: pâte sablée
      to: pâte brisée vegan (à la margarine)
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
    - from: pâte sablée
      to: pâte brisée vegan (à la margarine)
      note:
    note: 'Œuf : pâte sablée → pâte brisée vegan (à la margarine).'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amandes
      to: graines de tournesol
      note:
    note: 'Fruits à coque : amandes → graines de tournesol.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Tarte au chocolat : pâte, ganache ou appareil chocolat-crème. Dessert de
  pâtisserie française contemporaine plus qu’une tarte paysanne. Pas de date
  d’auteur ici.
fun_facts:
- text: >
    Une ganache trop chaude fend en refroidissant ; trop froide, elle ne lisse pas.
  source_name: Usage
  source_url:
- text: >
    Un chocolat à 60–70 % tient mieux qu’un chocolat au lait, trop sucré.
  source_name: Usage
  source_url:
wines:
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: VDN cacao — la ganache, sucré-amer.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cerise noire — le chocolat, tanin doux.
- name: Rivesaltes
  producer: Domaine Lafage
  origin: Roussillon
  grapes: grenache, muscat
  award:
  why: Doux du Roussillon — la tarte, sans un vin sec.
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
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 60
      total_min: 110
    equipment: &id002
    - four
    - casserole
    - moule / plat
    - plaque + papier sulfurisé
    - rouleau à pâtisserie
    - poids pour cuisson à blanc
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte sablée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 540
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: amandes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: farine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Fleurez votre plan de travail et déposez-y votre pâte sablée (achetée toute faite ou
      préparée grâce à notre recette 😉 ). Abaissez la pâte à votre convenance et de sorte
      à ce qu’elle tienne dans votre plat à tarte.
    - 'Cuisson. Disposez la pâte au dessus du plat et foncez-la : faites-en sorte qu’elle soit bien
      collée au fond du plat. Retirez l’excédent de pâte en passant par exemple votre rouleau
      sur les bords. Enfin, relevez la pâte.'
    - 'Cuisson. Posez une feuille de papier sulfurisé sur la pâte et disposez du poids dessus : riz,
      lentilles, billes de céramique, à vous de voir, l’important est que ce soit un poids
      uniformément réparti sur toute la pâte.'
    - Cuisson. Mettez le tout au four à 180°C pendant 20 minutes.
    - Cuisson. Pendant que le fond de tarte cuit, écrasez finement vos amandes à l’aide d’un mortier-pilon,
      d’un cul de bouteille ou de tout autre objet suffisamment massif.
    - Cuisson. Passons à la ganache ! Faites chauffer votre crème dans une casserole et incorporez-y
      votre chocolat. Pour une ganache bien onctueuse, ajoutez le chocolat en 3 fois, en attendant
      bien qu’il ait fondu entre chaque rajout. Mélangez en permanence pour que le chocolat
      ne brûle pas au fond de la casserole. La ganache est prête lorsque tout le chocolat
      a bien fondu et que la consistance est homogène.
    - Cuisson. Sortez le fond de tarte du four lorsqu’il est prêt. Répartissez uniformément vos amandes
      écrasées de façon à ce qu’elles couvrent tout le fond.
    - Cuisson. Enfin, ajoutez la ganache. Recouvrez toute la surface du fond de tarte et remuez doucement
      pour bien boucher tous les trous et lisser la surface.
    - Dressage. Réservez votre tarte au frais pendant 1h minimum. Votre tarte au chocolat est prête
      à être dégustée ! Accompagnée d’oranges (entières, pressées, confites,…), elle viendra
      conclure à merveille un bon repas.
    steps_niveaux:
      amateur:
      - "Préparation. Fleurez votre plan de travail et déposez-y votre pâte sablée (achetée toute faite ou préparée). Abaissez la pâte à votre convenance, de sorte qu’elle tienne dans votre plat à tarte."
      - "Cuisson. Disposez la pâte au-dessus du plat et [[foncer|foncez-la]] : faites en sorte qu’elle soit bien collée au fond du plat. Retirez l’excédent de pâte en passant par exemple votre rouleau sur les bords. Enfin, relevez la pâte."
      - "Cuisson. Posez une feuille de papier sulfurisé sur la pâte et disposez du poids dessus : riz, lentilles, billes de céramique, à vous de voir ; l’important est que ce soit un poids uniformément réparti sur toute la pâte."
      - "Cuisson. Mettez le tout au four à 180 °C pendant 20 minutes."
      - "Cuisson. Pendant que le fond de tarte cuit, écrasez finement vos amandes à l’aide d’un mortier-pilon, d’un cul de bouteille ou de tout autre objet suffisamment massif."
      - "Cuisson. Faites chauffer votre crème dans une casserole et incorporez-y votre chocolat. Pour une ganache bien onctueuse, ajoutez le chocolat en 3 fois, en attendant bien qu’il ait fondu entre chaque rajout. Mélangez en permanence pour que le chocolat ne brûle pas au fond de la casserole. La ganache est prête lorsque tout le chocolat a bien fondu et que la consistance est homogène."
      - "Cuisson. Sortez le fond de tarte du four lorsqu’il est prêt. Répartissez uniformément vos amandes écrasées de façon à ce qu’elles couvrent tout le fond."
      - "Cuisson. Ajoutez la ganache. Recouvrez toute la surface du fond de tarte et remuez doucement pour bien boucher tous les trous et lisser la surface."
      - "Dressage. Réservez votre tarte au frais pendant 1 h minimum. Vous pouvez l’accompagner d’oranges (entières, pressées, confites)."
      pro:
      - "Fleurer le plan de travail et y déposer la pâte sablée (achetée toute faite ou préparée). Abaisser la pâte à convenance, de sorte qu’elle tienne dans le plat à tarte."
      - "Disposer la pâte au-dessus du plat et la foncer : bien collée au fond du plat. Retirer l’excédent de pâte, par exemple en passant le rouleau sur les bords. Relever la pâte."
      - "Poser une feuille de papier sulfurisé sur la pâte et disposer du poids dessus : riz, lentilles, billes de céramique. L’important est un poids uniformément réparti sur toute la pâte."
      - "Mettre le tout au four à 180 °C pendant 20 minutes."
      - "Pendant que le fond de tarte cuit, écraser finement les amandes à l’aide d’un mortier-pilon, d’un cul de bouteille ou de tout autre objet suffisamment massif."
      - "Faire chauffer la crème dans une casserole et y incorporer le chocolat. Pour une ganache onctueuse, ajouter le chocolat en 3 fois, en attendant qu’il ait fondu entre chaque rajout. Mélanger en permanence pour que le chocolat ne brûle pas au fond de la casserole. Ganache prête : chocolat fondu, consistance homogène."
      - "Sortir le fond de tarte du four lorsqu’il est prêt. Répartir uniformément les amandes écrasées de façon à couvrir tout le fond."
      - "Ajouter la ganache. Recouvrir toute la surface du fond de tarte et remuer doucement pour boucher tous les trous et lisser la surface."
      - "Réserver la tarte au frais pendant 1 h minimum. Option : accompagner d’oranges (entières, pressées, confites)."
      cavernes:
      - "Préparation. Plan travail, fleurer. Pâte sablée (achetée toute faite ou préparée), déposer. Pâte, abaisser, convenance, tenir dans plat tarte."
      - "Cuisson. Pâte, dessus plat, disposer, foncer : collée fond plat. Excédent pâte, retirer, exemple rouleau, bords. Enfin, pâte, relever."
      - "Cuisson. Feuille papier sulfurisé, pâte, poser. Poids dessus : riz, lentilles, billes céramique, à voir. Important : poids, toute pâte, réparti uniforme."
      - "Cuisson. Tout, Four 180 °C, 20 min."
      - "Cuisson. Pendant fond tarte cuit : amandes, écraser finement, mortier-pilon, cul bouteille ou objet massif."
      - "Cuisson. Crème, casserole, chauffer. Chocolat, incorporer. Ganache onctueuse : chocolat, 3 fois, ajouter, attendre fondu entre chaque rajout. Mélanger permanence, chocolat, fond casserole, pas brûler. Prête : chocolat fondu, consistance homogène."
      - "Cuisson. Fond tarte, four, sortir, prêt. Amandes écrasées, répartir uniforme, tout fond, couvrir."
      - "Cuisson. Ganache, ajouter. Toute surface fond tarte, recouvrir. Remuer doucement, trous, boucher, surface, lisser."
      - "Dressage. Tarte, frais, 1 h minimum, réserver. Option : oranges (entières, pressées, confites)."
    kcal_per_serving: 411
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
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 411
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
    - gluten
    - soja
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte brisée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 540
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: amandes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: farine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Fleurez votre plan de travail et déposez-y votre pâte sablée (achetée toute faite ou
      préparée grâce à notre recette 😉 ). Abaissez la pâte à votre convenance et de sorte
      à ce qu’elle tienne dans votre plat à tarte.
    - 'Cuisson. Disposez la pâte au dessus du plat et foncez-la : faites-en sorte qu’elle soit bien
      collée au fond du plat. Retirez l’excédent de pâte en passant par exemple votre rouleau
      sur les bords. Enfin, relevez la pâte.'
    - 'Cuisson. Posez une feuille de papier sulfurisé sur la pâte et disposez du poids dessus : riz,
      lentilles, billes de céramique, à vous de voir, l’important est que ce soit un poids
      uniformément réparti sur toute la pâte.'
    - Cuisson. Mettez le tout au four à 180°C pendant 20 minutes.
    - Cuisson. Pendant que le fond de tarte cuit, écrasez finement vos amandes à l’aide d’un mortier-pilon,
      d’un cul de bouteille ou de tout autre objet suffisamment massif.
    - Cuisson. Passons à la ganache ! Faites chauffer votre crème de soja ou d’avoine dans une casserole et incorporez-y
      votre chocolat. Pour une ganache bien onctueuse, ajoutez le chocolat en 3 fois, en attendant
      bien qu’il ait fondu entre chaque rajout. Mélangez en permanence pour que le chocolat
      ne brûle pas au fond de la casserole. La ganache est prête lorsque tout le chocolat
      a bien fondu et que la consistance est homogène.
    - Cuisson. Sortez le fond de tarte du four lorsqu’il est prêt. Répartissez uniformément vos amandes
      écrasées de façon à ce qu’elles couvrent tout le fond.
    - Cuisson. Enfin, ajoutez la ganache. Recouvrez toute la surface du fond de tarte et remuez doucement
      pour bien boucher tous les trous et lisser la surface.
    - Dressage. Réservez votre tarte au frais pendant 1h minimum. Votre tarte au chocolat est prête
      à être dégustée ! Accompagnée d’oranges (entières, pressées, confites,…), elle viendra
      conclure à merveille un bon repas.
    steps_niveaux:
      amateur:
      - "Préparation. Fleurez votre plan de travail et déposez-y votre pâte sablée (achetée toute faite ou préparée). Abaissez la pâte à votre convenance, de sorte qu’elle tienne dans votre plat à tarte."
      - "Cuisson. Disposez la pâte au-dessus du plat et [[foncer|foncez-la]] : faites en sorte qu’elle soit bien collée au fond du plat. Retirez l’excédent de pâte en passant par exemple votre rouleau sur les bords. Enfin, relevez la pâte."
      - "Cuisson. Posez une feuille de papier sulfurisé sur la pâte et disposez du poids dessus : riz, lentilles, billes de céramique, à vous de voir ; l’important est que ce soit un poids uniformément réparti sur toute la pâte."
      - "Cuisson. Mettez le tout au four à 180 °C pendant 20 minutes."
      - "Cuisson. Pendant que le fond de tarte cuit, écrasez finement vos amandes à l’aide d’un mortier-pilon, d’un cul de bouteille ou de tout autre objet suffisamment massif."
      - "Cuisson. Faites chauffer votre crème de soja ou d’avoine dans une casserole et incorporez-y votre chocolat. Pour une ganache bien onctueuse, ajoutez le chocolat en 3 fois, en attendant bien qu’il ait fondu entre chaque rajout. Mélangez en permanence pour que le chocolat ne brûle pas au fond de la casserole. La ganache est prête lorsque tout le chocolat a bien fondu et que la consistance est homogène."
      - "Cuisson. Sortez le fond de tarte du four lorsqu’il est prêt. Répartissez uniformément vos amandes écrasées de façon à ce qu’elles couvrent tout le fond."
      - "Cuisson. Ajoutez la ganache. Recouvrez toute la surface du fond de tarte et remuez doucement pour bien boucher tous les trous et lisser la surface."
      - "Dressage. Réservez votre tarte au frais pendant 1 h minimum. Vous pouvez l’accompagner d’oranges (entières, pressées, confites)."
      pro:
      - "Fleurer le plan de travail et y déposer la pâte sablée (achetée toute faite ou préparée). Abaisser la pâte à convenance, de sorte qu’elle tienne dans le plat à tarte."
      - "Disposer la pâte au-dessus du plat et la foncer : bien collée au fond du plat. Retirer l’excédent de pâte, par exemple en passant le rouleau sur les bords. Relever la pâte."
      - "Poser une feuille de papier sulfurisé sur la pâte et disposer du poids dessus : riz, lentilles, billes de céramique. L’important est un poids uniformément réparti sur toute la pâte."
      - "Mettre le tout au four à 180 °C pendant 20 minutes."
      - "Pendant que le fond de tarte cuit, écraser finement les amandes à l’aide d’un mortier-pilon, d’un cul de bouteille ou de tout autre objet suffisamment massif."
      - "Faire chauffer la crème de soja ou d’avoine dans une casserole et y incorporer le chocolat. Pour une ganache onctueuse, ajouter le chocolat en 3 fois, en attendant qu’il ait fondu entre chaque rajout. Mélanger en permanence pour que le chocolat ne brûle pas au fond de la casserole. Ganache prête : chocolat fondu, consistance homogène."
      - "Sortir le fond de tarte du four lorsqu’il est prêt. Répartir uniformément les amandes écrasées de façon à couvrir tout le fond."
      - "Ajouter la ganache. Recouvrir toute la surface du fond de tarte et remuer doucement pour boucher tous les trous et lisser la surface."
      - "Réserver la tarte au frais pendant 1 h minimum. Option : accompagner d’oranges (entières, pressées, confites)."
      cavernes:
      - "Préparation. Plan travail, fleurer. Pâte sablée (achetée toute faite ou préparée), déposer. Pâte, abaisser, convenance, tenir dans plat tarte."
      - "Cuisson. Pâte, dessus plat, disposer, foncer : collée fond plat. Excédent pâte, retirer, exemple rouleau, bords. Enfin, pâte, relever."
      - "Cuisson. Feuille papier sulfurisé, pâte, poser. Poids dessus : riz, lentilles, billes céramique, à voir. Important : poids, toute pâte, réparti uniforme."
      - "Cuisson. Tout, Four 180 °C, 20 min."
      - "Cuisson. Pendant fond tarte cuit : amandes, écraser finement, mortier-pilon, cul bouteille ou objet massif."
      - "Cuisson. Crème soja ou avoine, casserole, chauffer. Chocolat, incorporer. Ganache onctueuse : chocolat, 3 fois, ajouter, attendre fondu entre chaque rajout. Mélanger permanence, chocolat, fond casserole, pas brûler. Prête : chocolat fondu, consistance homogène."
      - "Cuisson. Fond tarte, four, sortir, prêt. Amandes écrasées, répartir uniforme, tout fond, couvrir."
      - "Cuisson. Ganache, ajouter. Toute surface fond tarte, recouvrir. Remuer doucement, trous, boucher, surface, lisser."
      - "Dressage. Tarte, frais, 1 h minimum, réserver. Option : oranges (entières, pressées, confites)."
    kcal_per_serving: 78
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
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 411
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

# Tarte chocolat

![[tarte-chocolat.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-chocolat]]

## Ingrédients (4 personnes)

- 1 pâte sablée
- 1 tablette de chocolat
- 540 ml de crème liquide
-  amandes
-  farine

## Préparation

1. Fleurez votre plan de travail et déposez-y votre pâte sablée (achetée toute faite ou préparée grâce à notre recette 😉 ). Abaissez la pâte à votre convenance et de sorte à ce qu’elle tienne dans votre plat à tarte.
2. Disposez la pâte au dessus du plat et foncez-la : faites-en sorte qu’elle soit bien collée au fond du plat. Retirez l’excédent de pâte en passant par exemple votre rouleau sur les bords. Enfin, relevez la pâte.
3. Posez une feuille de papier sulfurisé sur la pâte et disposez du poids dessus : riz, lentilles, billes de céramique, à vous de voir, l’important est que ce soit un poids uniformément réparti sur toute la pâte.
4. Mettez le tout au four à 180°C pendant 20 minutes.
5. Pendant que le fond de tarte cuit, écrasez finement vos amandes à l’aide d’un mortier-pilon, d’un cul de bouteille ou de tout autre objet suffisamment massif.
6. Passons à la ganache ! Faites chauffer votre crème dans une casserole et incorporez-y votre chocolat. Pour une ganache bien onctueuse, ajoutez le chocolat en 3 fois, en attendant bien qu’il ait fondu entre chaque rajout. Mélangez en permanence pour que le chocolat ne brûle pas au fond de la casserole. La ganache est prête lorsque tout le chocolat a bien fondu et que la consistance est homogène.
7. Sortez le fond de tarte du four lorsqu’il est prêt. Répartissez uniformément vos amandes écrasées de façon à ce qu’elles couvrent tout le fond.
8. Enfin, ajoutez la ganache. Recouvrez toute la surface du fond de tarte et remuez doucement pour bien boucher tous les trous et lisser la surface.
9. Réservez votre tarte au frais pendant 1h minimum.

 
 

 
 Votre tarte au chocolat est prête à être dégustée ! Accompagnée d’oranges (entières, pressées, confites,…), elle viendra conclure à merveille un bon repas.
