---
schema: recette-web-jigme/v2
slug: ramen-au-porc
title: Ramen au porc
lang: fr
description: "Ramen au porc : recette japonaise avec escalope de porc, œuf et nouilles japonaises, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- nouilles
- porc
- escalope de porc
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/ramen-au-porc.webp
  alt: Ramen au porc
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/ramen-au-porc.md
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
    - from: nouilles japonaises
      to: nouilles de riz
      note:
    - from: sauce soja
      to: tamari sans gluten
      note:
    - from: miso
      to: miso de riz certifié sans gluten
      note:
    - from: seitan ou tempeh
      to: tofu ferme
      note:
    note: Nouilles ramen (blé), sauce soja → nouilles de riz, tamari.
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
    impossible: true
    redirect_variant:
    clears:
    - soja
    swaps: []
    note: 'Contient soja (pâte miso rouge) : pas d’adaptation fiable.'
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
    - from: saké
      to: bouillon de légumes
      note:
    note: 'Sulfites : saké → bouillon de légumes.'
house_toggle:
house_options: []
histoire: 'Ramen : soupe japonaise de nouilles de blé alcalines, bouillon (soja, sel, miso ou os), garnitures.
  Fusion sino-japonaise. Le porc (chashu, os) est une voie courante, pas « le » ramen unique.

  '
fun_facts:
- text: >
    Les nouilles alcalines (kansui) jaunit et cale : des spaghettis ne font pas
    le même bouillon.
  source_name: Wikipedia, Ramen
  source_url: https://en.wikipedia.org/wiki/Ramen
- text: >
    Un tonkotsu se braise des heures d’os ; un shoyu se tient en tare de soja
    plus vite.
  source_name: Grokipedia, Tonkotsu ramen
  source_url: https://grokipedia.com/page/Tonkotsu_ramen
wines:
- name: Alsace Riesling
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le bouillon salé et le porc, sans un rouge tannique.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — le gras du porc, légèrement sucré.
- name: Saumur
  producer: Cave des Vignerons de Saumur
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Chenin, pomme — la soupe, un blanc qui tient l’umami.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - soja
    - gluten
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 25
      rest_min: 0
      total_min: 65
    equipment: &id002
    - casserole
    - poêle
    - saladier
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: escalope de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles japonaises
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
      item: botte d'asperges sauvages (ou autre légume vert)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: saké
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: pâte miso rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: curry
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez
      les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée
      de sauce soja, de saké et de gingembre pendant environ une heure.
    - Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir
      à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame
      de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole.
    - Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon
      cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le
      mélange commence à bouillir, baissez le feu, couvrez et laissez mijoter à feu doux.
    - Cuisson. Pendant ce temps, hachez finement vos escalopes de porc et assaisonnez-les (sel, poivre)
      selon vos goûts. Faites les ensuite revenir dans une poêle à feu vif, avec un filet
      d’huile d’olive. Une fois la viande bien cuite, réservez dans une assiette.
    - Cuisson. Maintenant qu’il a bien mijoté, retirez tous les éléments solides de votre bouillon
      à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps
      de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites,
      dressez-les dans vos bols.
    - Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous
      avons pris des asperges sauvages (cuisson 1min), car c’était la saison.
    - Cuisson. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de porc grillé
      et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs marinés
      et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là
      au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil
      haché et quelques gouttes de soja.
    - Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer
      sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes
      de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien
      chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée de sauce soja, de saké et de gingembre pendant environ une heure."
      - "Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole."
      - "Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le mélange commence à bouillir, baissez le feu, couvrez et laissez [[mijoter|mijoter]] à feu doux."
      - "Cuisson. Pendant ce temps, hachez finement vos escalopes de porc et assaisonnez-les (sel, poivre) selon vos goûts. Faites les ensuite revenir dans une poêle à feu vif, avec un filet d’huile d’olive. Une fois la viande bien cuite, réservez dans une assiette."
      - "Cuisson. Maintenant qu’il a bien [[mijoter|mijoté]], retirez tous les éléments solides de votre bouillon à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites, dressez-les dans vos bols."
      - "Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous avons pris des asperges sauvages (cuisson 1min), car c’était la saison."
      - "Cuisson. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de porc grillé et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs [[mariner|marinés]] et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil haché et quelques gouttes de soja."
      - "Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !"
      pro:
      - "Cuire des œufs dans de l’eau bouillante 6 minutes. Passer à l’eau froide, écaler. Incorporer dans une marinade soja, saké et gingembre environ une heure."
      - "Couper l’oignon. Faire revenir à feu vif dans une casserole avec un filet d’huile d’olive. Écraser un morceau de racine de gingembre à la lame, ajouter."
      - "Oignons colorés : remplir d’eau, ajouter un bouillon cube, la pâte miso rouge et le curry. Mélanger. Dès ébullition, baisser le feu, couvrir, mijoter à feu doux."
      - "Hacher finement les escalopes de porc, assaisonner (sel, poivre). Faire revenir à feu vif avec un filet d’huile d’olive. Viande cuite : réserver."
      - "Bouillon mijoté : retirer les solides à l’écumoire. Cuire les nouilles dans le bouillon selon le temps du paquet. Dresser dans les bols."
      - "Cuire dans le bouillon les légumes choisis. Asperges sauvages : 1min."
      - "Compléter les bols de nouilles avec du porc grillé et des légumes. Remplir de bouillon à hauteur. Ajouter les œufs marinés coupés en deux. Plier une feuille de nori en deux ou en quatre, disposer au bord du bol. Persil haché, quelques gouttes de soja."
      - "Plier une feuille de nori en deux voire en quatre, disposer sur un bord du bol avec persil haché, vert d’oignon et quelques gouttes de sauce soja. Déguster chaud."
      cavernes:
      - "Cuisson. Œufs, eau bouillante, 6 min. Cuits, eau froide, écaler. Marinade soja saké gingembre, environ 1 h."
      - "Cuisson. Bouillon. Oignon, couper. Feu vif, casserole, filet huile olive, faire revenir. Racine gingembre, lame, écraser, ajouter."
      - "Cuisson. Oignons colorés. Eau, remplir. Bouillon cube, pâte miso rouge, curry, incorporer, mélanger. Ça bout : baisser feu, couvrir, mijoter feu doux."
      - "Cuisson. Escalopes porc, hacher finement. Sel, poivre. Poêle feu vif, filet huile olive, faire revenir. Viande cuite, réserver assiette."
      - "Cuisson. Bouillon mijoté. Solides, écumoire, retirer. Nouilles, cuire dans bouillon (temps paquet). Cuites, dresser bols."
      - "Cuisson. Légumes choisis, cuire dans bouillon. Asperges sauvages : 1min."
      - "Cuisson. Dresser. Nouilles, porc grillé, légumes. Bouillon à hauteur. Œufs marinés, couper en deux. Feuille nori, plier deux ou quatre, bord bol. Persil haché, gouttes soja."
      - "Finition. Feuille nori, plier deux voire quatre, bord bol. Persil haché, vert oignon, gouttes sauce soja. Déguster ramen chaud."
    kcal_per_serving: 263
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
    - soja
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles japonaises
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
      item: botte d'asperges sauvages (ou autre légume vert)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: saké
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: pâte miso rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: curry
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez
      les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée
      de sauce soja, de saké et de gingembre pendant environ une heure.
    - Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir
      à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame
      de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole.
    - Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon
      cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le
      mélange commence à bouillir, baissez le feu, couvrez et laissez mijoter à feu doux.
    - Dressage. Pendant ce temps, hachez finement le seitan (ou le tempeh) et assaisonnez (sel, poivre). Faites-le revenir à feu vif avec un filet d’huile d’olive. Une fois bien coloré, réservez.
    - Cuisson. Maintenant qu’il a bien mijoté, retirez tous les éléments solides de votre bouillon
      à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps
      de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites,
      dressez-les dans vos bols.
    - Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous
      avons pris des asperges sauvages (cuisson 1min), car c’était la saison.
    - Marinade. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de seitan grillé et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs marinés
      et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là
      au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil
      haché et quelques gouttes de soja.
    - Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer
      sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes
      de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien
      chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée de sauce soja, de saké et de gingembre pendant environ une heure."
      - "Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole."
      - "Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le mélange commence à bouillir, baissez le feu, couvrez et laissez [[mijoter|mijoter]] à feu doux."
      - "Dressage. Pendant ce temps, hachez finement le seitan (ou le tempeh) et assaisonnez (sel, poivre). Faites-le revenir à feu vif avec un filet d’huile d’olive. Une fois bien coloré, réservez."
      - "Cuisson. Maintenant qu’il a bien [[mijoter|mijoté]], retirez tous les éléments solides de votre bouillon à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites, dressez-les dans vos bols."
      - "Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous avons pris des asperges sauvages (cuisson 1min), car c’était la saison."
      - "Marinade. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de seitan grillé et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs [[mariner|marinés]] et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil haché et quelques gouttes de soja."
      - "Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !"
      pro:
      - "Cuire des œufs dans de l’eau bouillante 6 minutes. Passer à l’eau froide, écaler. Incorporer dans une marinade soja, saké et gingembre environ une heure."
      - "Couper l’oignon. Faire revenir à feu vif dans une casserole avec un filet d’huile d’olive. Écraser un morceau de racine de gingembre à la lame, ajouter."
      - "Oignons colorés : remplir d’eau, ajouter un bouillon cube, la pâte miso rouge et le curry. Mélanger. Dès ébullition, baisser le feu, couvrir, mijoter à feu doux."
      - "Hacher finement le seitan (ou le tempeh), assaisonner (sel, poivre). Faire revenir à feu vif avec un filet d’huile d’olive. Bien coloré : réserver."
      - "Bouillon mijoté : retirer les solides à l’écumoire. Cuire les nouilles dans le bouillon selon le temps du paquet. Dresser dans les bols."
      - "Cuire dans le bouillon les légumes choisis. Asperges sauvages : 1min."
      - "Compléter les bols de nouilles avec du seitan grillé et des légumes. Remplir de bouillon à hauteur. Ajouter les œufs marinés coupés en deux. Plier une feuille de nori en deux ou en quatre, disposer au bord du bol. Persil haché, quelques gouttes de soja."
      - "Plier une feuille de nori en deux voire en quatre, disposer sur un bord du bol avec persil haché, vert d’oignon et quelques gouttes de sauce soja. Déguster chaud."
      cavernes:
      - "Cuisson. Œufs, eau bouillante, 6 min. Cuits, eau froide, écaler. Marinade soja saké gingembre, environ 1 h."
      - "Cuisson. Bouillon. Oignon, couper. Feu vif, casserole, filet huile olive, faire revenir. Racine gingembre, lame, écraser, ajouter."
      - "Cuisson. Oignons colorés. Eau, remplir. Bouillon cube, pâte miso rouge, curry, incorporer, mélanger. Ça bout : baisser feu, couvrir, mijoter feu doux."
      - "Dressage. Seitan (ou tempeh), hacher finement. Sel, poivre. Feu vif, filet huile olive, faire revenir. Bien coloré, réserver."
      - "Cuisson. Bouillon mijoté. Solides, écumoire, retirer. Nouilles, cuire dans bouillon (temps paquet). Cuites, dresser bols."
      - "Cuisson. Légumes choisis, cuire dans bouillon. Asperges sauvages : 1min."
      - "Marinade. Dresser. Nouilles, seitan grillé, légumes. Bouillon à hauteur. Œufs marinés, couper en deux. Feuille nori, plier deux ou quatre, bord bol. Persil haché, gouttes soja."
      - "Finition. Feuille nori, plier deux voire quatre, bord bol. Persil haché, vert oignon, gouttes sauce soja. Déguster ramen chaud."
    kcal_per_serving: 330
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
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles japonaises
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
      item: botte d'asperges sauvages (ou autre légume vert)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: saké
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: pâte miso rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: curry
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Marinade. Coupez le tofu ferme en gros cubes (pour le « mariné »). Enfin, incorporez-les dans une marinade composée de sauce soja, de
      saké et de gingembre pendant environ une heure.
    - Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir
      à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame
      de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole.
    - Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon
      cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le
      mélange commence à bouillir, baissez le feu, couvrez et laissez mijoter à feu doux.
    - Dressage. Pendant ce temps, hachez finement le seitan ou le tempeh, assaisonnez, faites revenir à feu vif. Réservez.
    - Cuisson. Maintenant qu’il a bien mijoté, retirez tous les éléments solides de votre bouillon
      à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps
      de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites,
      dressez-les dans vos bols.
    - Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous
      avons pris des asperges sauvages (cuisson 1min), car c’était la saison.
    - Marinade. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de seitan grillé et quelques légumes. Remplissez de bouillon, puis ajoutez le tofu mariné. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là
      au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil
      haché et quelques gouttes de soja.
    - Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer
      sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes
      de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien
      chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Marinade. Coupez le tofu ferme en gros cubes (pour le « [[mariner|mariné]] »). Enfin, incorporez-les dans une marinade composée de sauce soja, de saké et de gingembre pendant environ une heure."
      - "Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole."
      - "Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le mélange commence à bouillir, baissez le feu, couvrez et laissez [[mijoter|mijoter]] à feu doux."
      - "Dressage. Pendant ce temps, hachez finement le seitan ou le tempeh, assaisonnez, faites revenir à feu vif. Réservez."
      - "Cuisson. Maintenant qu’il a bien [[mijoter|mijoté]], retirez tous les éléments solides de votre bouillon à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites, dressez-les dans vos bols."
      - "Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous avons pris des asperges sauvages (cuisson 1min), car c’était la saison."
      - "Marinade. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de seitan grillé et quelques légumes. Remplissez de bouillon, puis ajoutez le tofu [[mariner|mariné]]. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil haché et quelques gouttes de soja."
      - "Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !"
      pro:
      - "Couper le tofu ferme en gros cubes. Incorporer dans une marinade soja, saké et gingembre environ une heure."
      - "Couper l’oignon. Faire revenir à feu vif dans une casserole avec un filet d’huile d’olive. Écraser un morceau de racine de gingembre à la lame, ajouter."
      - "Oignons colorés : remplir d’eau, ajouter un bouillon cube, la pâte miso rouge et le curry. Mélanger. Dès ébullition, baisser le feu, couvrir, mijoter à feu doux."
      - "Hacher finement le seitan ou le tempeh, assaisonner, faire revenir à feu vif. Réserver."
      - "Bouillon mijoté : retirer les solides à l’écumoire. Cuire les nouilles dans le bouillon selon le temps du paquet. Dresser dans les bols."
      - "Cuire dans le bouillon les légumes choisis. Asperges sauvages : 1min."
      - "Compléter les bols de nouilles avec du seitan grillé et des légumes. Remplir de bouillon. Ajouter le tofu mariné. Plier une feuille de nori en deux ou en quatre, disposer au bord du bol. Persil haché, quelques gouttes de soja."
      - "Plier une feuille de nori en deux voire en quatre, disposer sur un bord du bol avec persil haché, vert d’oignon et quelques gouttes de sauce soja. Déguster chaud."
      cavernes:
      - "Marinade. Tofu ferme, gros cubes. Marinade soja saké gingembre, environ 1 h."
      - "Cuisson. Bouillon. Oignon, couper. Feu vif, casserole, filet huile olive, faire revenir. Racine gingembre, lame, écraser, ajouter."
      - "Cuisson. Oignons colorés. Eau, remplir. Bouillon cube, pâte miso rouge, curry, incorporer, mélanger. Ça bout : baisser feu, couvrir, mijoter feu doux."
      - "Dressage. Seitan ou tempeh, hacher finement, assaisonner, feu vif, faire revenir. Réserver."
      - "Cuisson. Bouillon mijoté. Solides, écumoire, retirer. Nouilles, cuire dans bouillon (temps paquet). Cuites, dresser bols."
      - "Cuisson. Légumes choisis, cuire dans bouillon. Asperges sauvages : 1min."
      - "Marinade. Dresser. Nouilles, seitan grillé, légumes. Bouillon. Tofu mariné. Feuille nori, plier deux ou quatre, bord bol. Persil haché, gouttes soja."
      - "Finition. Feuille nori, plier deux voire quatre, bord bol. Persil haché, vert oignon, gouttes sauce soja. Déguster ramen chaud."
    kcal_per_serving: 330
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
    - soja
    - gluten
    - sulfites
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
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles japonaises
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
      item: botte d'asperges sauvages (ou autre légume vert)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: saké
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: pâte miso rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: curry
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouillon cube
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez
      les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée
      de sauce soja, de saké et de gingembre pendant environ une heure.
    - Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir
      à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame
      de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole.
    - Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon
      cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le
      mélange commence à bouillir, baissez le feu, couvrez et laissez mijoter à feu doux.
    - Cuisson. Pendant ce temps, hachez finement vos escalopes de porc et assaisonnez-les (sel, poivre)
      selon vos goûts. Faites les ensuite revenir dans une poêle à feu vif, avec un filet
      d’huile d’olive. Une fois la viande bien cuite, réservez dans une assiette.
    - Cuisson. Maintenant qu’il a bien mijoté, retirez tous les éléments solides de votre bouillon
      à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps
      de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites,
      dressez-les dans vos bols.
    - Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous
      avons pris des asperges sauvages (cuisson 1min), car c’était la saison.
    - Cuisson. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de porc grillé
      et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs marinés
      et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là
      au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil
      haché et quelques gouttes de soja.
    - Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer
      sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes
      de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien
      chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée de sauce soja, de saké et de gingembre pendant environ une heure."
      - "Cuisson. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole."
      - "Cuisson. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le mélange commence à bouillir, baissez le feu, couvrez et laissez [[mijoter|mijoter]] à feu doux."
      - "Cuisson. Pendant ce temps, hachez finement vos escalopes de porc et assaisonnez-les (sel, poivre) selon vos goûts. Faites les ensuite revenir dans une poêle à feu vif, avec un filet d’huile d’olive. Une fois la viande bien cuite, réservez dans une assiette."
      - "Cuisson. Maintenant qu’il a bien [[mijoter|mijoté]], retirez tous les éléments solides de votre bouillon à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites, dressez-les dans vos bols."
      - "Cuisson. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous avons pris des asperges sauvages (cuisson 1min), car c’était la saison."
      - "Cuisson. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de porc grillé et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs [[mariner|marinés]] et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil haché et quelques gouttes de soja."
      - "Finition. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes de sauce soja. Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !"
      pro:
      - "Cuire des œufs dans de l’eau bouillante 6 minutes. Passer à l’eau froide, écaler. Incorporer dans une marinade soja, saké et gingembre environ une heure."
      - "Couper l’oignon. Faire revenir à feu vif dans une casserole avec un filet d’huile d’olive. Écraser un morceau de racine de gingembre à la lame, ajouter."
      - "Oignons colorés : remplir d’eau, ajouter un bouillon cube, la pâte miso rouge et le curry. Mélanger. Dès ébullition, baisser le feu, couvrir, mijoter à feu doux."
      - "Hacher finement les escalopes de porc, assaisonner (sel, poivre). Faire revenir à feu vif avec un filet d’huile d’olive. Viande cuite : réserver."
      - "Bouillon mijoté : retirer les solides à l’écumoire. Cuire les nouilles dans le bouillon selon le temps du paquet. Dresser dans les bols."
      - "Cuire dans le bouillon les légumes choisis. Asperges sauvages : 1min."
      - "Compléter les bols de nouilles avec du porc grillé et des légumes. Remplir de bouillon à hauteur. Ajouter les œufs marinés coupés en deux. Plier une feuille de nori en deux ou en quatre, disposer au bord du bol. Persil haché, quelques gouttes de soja."
      - "Plier une feuille de nori en deux voire en quatre, disposer sur un bord du bol avec persil haché, vert d’oignon et quelques gouttes de sauce soja. Déguster chaud."
      cavernes:
      - "Cuisson. Œufs, eau bouillante, 6 min. Cuits, eau froide, écaler. Marinade soja saké gingembre, environ 1 h."
      - "Cuisson. Bouillon. Oignon, couper. Feu vif, casserole, filet huile olive, faire revenir. Racine gingembre, lame, écraser, ajouter."
      - "Cuisson. Oignons colorés. Eau, remplir. Bouillon cube, pâte miso rouge, curry, incorporer, mélanger. Ça bout : baisser feu, couvrir, mijoter feu doux."
      - "Cuisson. Escalopes porc, hacher finement. Sel, poivre. Poêle feu vif, filet huile olive, faire revenir. Viande cuite, réserver assiette."
      - "Cuisson. Bouillon mijoté. Solides, écumoire, retirer. Nouilles, cuire dans bouillon (temps paquet). Cuites, dresser bols."
      - "Cuisson. Légumes choisis, cuire dans bouillon. Asperges sauvages : 1min."
      - "Cuisson. Dresser. Nouilles, porc grillé, légumes. Bouillon à hauteur. Œufs marinés, couper en deux. Feuille nori, plier deux ou quatre, bord bol. Persil haché, gouttes soja."
      - "Finition. Feuille nori, plier deux voire quatre, bord bol. Persil haché, vert oignon, gouttes sauce soja. Déguster ramen chaud."
    kcal_per_serving: 263
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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

# Ramen au porc

![[ramen-au-porc.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/ramen-au-porc]]

## Ingrédients (4 personnes)

- 4 escalope de porc
- 4 œuf
- 400 g de nouilles japonaises
- 1 oignon
- 1 botte d'asperges sauvages (ou autre légume vert)
- 4 feuille de nori
- 1 racine de gingembre
- 2 c.à.s saké
- 2 c.à.s sauce soja
- 2 c.à.s pâte miso rouge
- 0.5 c.à.c curry
- 1 bouillon cube
-  huile d'olive
-  persil frais

## Préparation

1. Faites cuire des œufs dans de l’eau bouillante pendant 6 minutes. Une fois cuits, placez les dans l’eau froide puis écalez-les. Enfin, incorporez-les dans une marinade composée de sauce soja, de saké et de gingembre pendant environ une heure.
2. Maintenant, place au bouillon. Commencez par couper votre oignon. Faites le revenir à feu vif, dans une casserole contenant un filet d’huile d’olive. À l’aide de la lame de votre couteau, écrasez un morceau de racine de gingembre et ajoutez-le dans la casserole.
3. Une fois les oignons bien colorés, remplissez la casserole d’eau et ajoutez un bouillon cube. Incorporez également la pâte miso rouge, le curry et mélangez. Une fois que le mélange commence à bouillir, baissez le feu, couvrez et laissez mijoter à feu doux.
4. Pendant ce temps, hachez finement vos escalopes de porc et assaisonnez-les (sel, poivre) selon vos goûts. Faites les ensuite revenir dans une poêle à feu vif, avec un filet d’huile d’olive. Une fois la viande bien cuite, réservez dans une assiette.
5. Maintenant qu’il a bien mijoté, retirez tous les éléments solides de votre bouillon à l’aide d’un écumoire. Faites cuire vos nouilles dans le bouillon (fiez-vous au temps de cuisson indiqué sur le paquet de nouilles que vous avez acheté). Une fois cuites, dressez-les dans vos bols.
6. Faites cuire dans le bouillon les légumes que vous avez choisi pour votre recette. Nous avons pris des asperges sauvages (cuisson 1min), car c’était la saison.
7. C’est le moment de dresser ! Complétez vos bols de nouilles avec un peu de porc grillé et quelques légumes. Remplissez de bouillon à hauteur, puis ajoutez vos oeufs marinés et coupés en deux. Enfin, pliez une feuille de nori en deux ou en quatre et disposez-là au bord du bol (comme sur nos photos). Ajoutez une touche final avec un peu de persil haché et quelques gouttes de soja.
8. Enfin, pliez une feuille de nori en deux voire en quatre que vous pouvez ensuite disposer sur un bord du bol avec un peu de persil haché, du vert d’oignon et quelques gouttes de sauce soja.

 
 

 
 Glissez-vous dans la peau d’un japonais en dégustant votre ramen bien chaud. Réconfort garanti après une grosse journée de travail ! Bon appétit !
