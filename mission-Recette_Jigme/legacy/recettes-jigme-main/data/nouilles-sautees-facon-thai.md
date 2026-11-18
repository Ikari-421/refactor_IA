---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: nouilles-sautees-facon-thai
title: Nouilles sautées façon thaï
lang: fr
description: "Nouilles sautées façon thaï : recette thaïe avec nouilles chinoises aux oeufs, bavette de boeuf et carotte, pour 4 personnes."
cuisine: thaïe
category: salé
tags:
- salé
- nouilles
- thaï
- plat
image:
  url:
  alt: Nouilles sautées façon thaï
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/nouilles-sautees-facon-thai.md
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
    - from: nouilles chinoises
      to: nouilles de riz
      note:
    - from: sauce soja
      to: tamari sans gluten
      note:
    note: Nouilles de blé et sauce soja → nouilles de riz, tamari.
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
    - from: nouilles chinoises aux oeufs
      to: nouilles de riz (sans œuf)
      note:
    note: Nouilles aux œufs → nouilles de riz.
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
histoire: 'Nouilles sautées au wok, bavette, légumes, sauce sucrée-salée : lecture « façon thaïe » d’un
  sauté, pas le pad thaï (nouilles de riz, tamarin, cacahuète). La rue thaïe a plusieurs sautés (pad thaï,
  pad kee mao, rat na).

  '
fun_facts:
- text: 'Le wok très chaud donne le goût de brûlé léger (wok hei) ; trop d’ingrédients d’un coup, et ça
    mijote.

    '
  source_name: Usage
  source_url: null
- text: 'Les nouilles de riz et les nouilles de blé ne se comportent pas pareil : les secondes collent
    plus, on les rince.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Nouilles sautées façon thaï ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Pad_thai
wines:
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le sucré-salé du sauté, sans un rouge tannique.
- name: Alsace Riesling
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — la sauce soja et la bavette, acidité nette.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le wok, sans un blanc trop aromatique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - soja
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - poêle
    - passoire
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: nouilles chinoises aux oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bavette de boeuf
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
    - qty: 2
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
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
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet.
    - Cuisson. En attendant, épluchez et découpez tous les légumes en julienne (carotte, courgette,
      oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon
      vos goûts, et pour la bavette.
    - Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les.
    - Cuisson. Dans un poêle (ou un wok si vous en avez un), faites revenir la viande avec un filet
      d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez.
    - Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe
      et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja.
    - Dressage. Sur la fin de la cuisson, déglacez avec un peu de sauce soja salée et servez bien chaud.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet."
      - "Cuisson. En attendant, épluchez et découpez tous les légumes [[julienne|en julienne]] (carotte, courgette, oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon vos goûts, et pour la bavette."
      - "Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les."
      - "Cuisson. Dans une poêle (ou un wok si vous en avez un), faites revenir la viande avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez."
      - "Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja."
      - "Dressage. Sur la fin de la cuisson, [[deglacer|déglacez]] avec un peu de sauce soja salée et servez bien chaud."
      pro:
      - "Cuire les nouilles chinoises selon le paquet."
      - "Éplucher et tailler en julienne carotte, courgette, oignon rouge, poivron, oignon nouveau. Même taille pour le gingembre, selon le goût, et la bavette."
      - "Égoutter les nouilles, passer à l’eau froide, réserver."
      - "Faire revenir la viande à l’huile végétale, poêle ou wok. Ajouter les carottes, puis l’oignon et le poivron. Mélanger."
      - "Légumes croquants : ajouter les nouilles, menthe et coriandre fraîches hachées. Finaliser avec une poignée de pousses de soja."
      - "En fin de cuisson, déglacer avec un peu de sauce soja salée. Servir bien chaud."
      cavernes:
      - "Cuisson. Nouilles chinoises, cuire, paquet."
      - "Cuisson. Légumes, éplucher, julienne : carotte, courgette, oignon rouge, poivron, oignon nouveau. Gingembre, même, selon goûts. Bavette, même."
      - "Dressage. Nouilles, égoutter, eau froide, réserver."
      - "Cuisson. Poêle ou wok. Viande, filet huile végétale, faire revenir. Carottes, puis oignon, poivron, ajouter, mélanger."
      - "Cuisson. Légumes croquants. Nouilles, menthe, coriandre fraîches hachées, ajouter. Poignée pousses de soja, finaliser."
      - "Dressage. Fin cuisson. Peu sauce soja salée, déglacer. Servir chaud."
    kcal_per_serving: 211
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
    - soja
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: nouilles chinoises aux oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: steaks de pleurotes
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
    - qty: 2
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
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
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet.
    - Cuisson. En attendant, épluchez et découpez tous les légumes en julienne (carotte, courgette,
      oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon
      vos goûts, et pour les steaks de pleurotes.
    - Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les.
    - Cuisson. Dans un poêle (ou un wok si vous en avez un), faites revenir les pleurotes avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez.
    - Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe
      et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja.
    - Dressage. Sur la fin de la cuisson, déglacez avec un peu de sauce soja salée et servez bien chaud.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet."
      - "Cuisson. En attendant, épluchez et découpez tous les légumes [[julienne|en julienne]] (carotte, courgette, oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon vos goûts, et pour les steaks de pleurotes."
      - "Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les."
      - "Cuisson. Dans une poêle (ou un wok si vous en avez un), faites revenir les pleurotes avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez."
      - "Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja."
      - "Dressage. Sur la fin de la cuisson, [[deglacer|déglacez]] avec un peu de sauce soja salée et servez bien chaud."
      pro:
      - "Cuire les nouilles chinoises selon le paquet."
      - "Éplucher et tailler en julienne carotte, courgette, oignon rouge, poivron, oignon nouveau. Même taille pour le gingembre, selon le goût, et les steaks de pleurotes."
      - "Égoutter les nouilles, passer à l’eau froide, réserver."
      - "Faire revenir les pleurotes à l’huile végétale, poêle ou wok. Ajouter les carottes, puis l’oignon et le poivron. Mélanger."
      - "Légumes croquants : ajouter les nouilles, menthe et coriandre fraîches hachées. Finaliser avec une poignée de pousses de soja."
      - "En fin de cuisson, déglacer avec un peu de sauce soja salée. Servir bien chaud."
      cavernes:
      - "Cuisson. Nouilles chinoises, cuire, paquet."
      - "Cuisson. Légumes, éplucher, julienne : carotte, courgette, oignon rouge, poivron, oignon nouveau. Gingembre, même, selon goûts. Steaks de pleurotes, même."
      - "Dressage. Nouilles, égoutter, eau froide, réserver."
      - "Cuisson. Poêle ou wok. Pleurotes, filet huile végétale, faire revenir. Carottes, puis oignon, poivron, ajouter, mélanger."
      - "Cuisson. Légumes croquants. Nouilles, menthe, coriandre fraîches hachées, ajouter. Poignée pousses de soja, finaliser."
      - "Dressage. Fin cuisson. Peu sauce soja salée, déglacer. Servir chaud."
    kcal_per_serving: 210
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
    - pesco
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
    - qty: 250
      unit: g
      item: nouilles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: steaks de pleurotes
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
    - qty: 2
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
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
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles de riz en fonction de ce qui est indiqué sur le paquet.
    - Cuisson. En attendant, épluchez et découpez tous les légumes en julienne (carotte, courgette,
      oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon
      vos goûts, et pour les steaks de pleurotes.
    - Dressage. Égouttez les nouilles de riz, passez-les à l’eau froide et réservez-les.
    - Cuisson. Dans un poêle (ou un wok si vous en avez un), faites revenir les pleurotes avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez.
    - Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles de riz ainsi que de la
      menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de
      soja.
    - Dressage. Sur la fin de la cuisson, déglacez avec un peu de sauce soja salée et servez bien chaud.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles de riz en fonction de ce qui est indiqué sur le paquet."
      - "Cuisson. En attendant, épluchez et découpez tous les légumes [[julienne|en julienne]] (carotte, courgette, oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon vos goûts, et pour les steaks de pleurotes."
      - "Dressage. Égouttez les nouilles de riz, passez-les à l’eau froide et réservez-les."
      - "Cuisson. Dans une poêle (ou un wok si vous en avez un), faites revenir les pleurotes avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez."
      - "Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles de riz ainsi que de la menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja."
      - "Dressage. Sur la fin de la cuisson, [[deglacer|déglacez]] avec un peu de sauce soja salée et servez bien chaud."
      pro:
      - "Cuire les nouilles de riz selon le paquet."
      - "Éplucher et tailler en julienne carotte, courgette, oignon rouge, poivron, oignon nouveau. Même taille pour le gingembre, selon le goût, et les steaks de pleurotes."
      - "Égoutter les nouilles de riz, passer à l’eau froide, réserver."
      - "Faire revenir les pleurotes à l’huile végétale, poêle ou wok. Ajouter les carottes, puis l’oignon et le poivron. Mélanger."
      - "Légumes croquants : ajouter les nouilles de riz, menthe et coriandre fraîches hachées. Finaliser avec une poignée de pousses de soja."
      - "En fin de cuisson, déglacer avec un peu de sauce soja salée. Servir bien chaud."
      cavernes:
      - "Cuisson. Nouilles de riz, cuire, paquet."
      - "Cuisson. Légumes, éplucher, julienne : carotte, courgette, oignon rouge, poivron, oignon nouveau. Gingembre, même, selon goûts. Steaks de pleurotes, même."
      - "Dressage. Nouilles de riz, égoutter, eau froide, réserver."
      - "Cuisson. Poêle ou wok. Pleurotes, filet huile végétale, faire revenir. Carottes, puis oignon, poivron, ajouter, mélanger."
      - "Cuisson. Légumes croquants. Nouilles de riz, menthe, coriandre fraîches hachées, ajouter. Poignée pousses de soja, finaliser."
      - "Dressage. Fin cuisson. Peu sauce soja salée, déglacer. Servir chaud."
    kcal_per_serving: 210
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
    - poisson
    - soja
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: nouilles chinoises aux oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pavé de thon
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
    - qty: 2
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
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
    - qty: 100
      unit: g
      item: pousses de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet.
    - Cuisson. En attendant, épluchez et découpez tous les légumes en julienne (carotte, courgette,
      oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon
      vos goûts, et pour la bavette.
    - Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les.
    - Cuisson. Dans un poêle (ou un wok si vous en avez un), faites revenir la viande avec un filet
      d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez.
    - Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe
      et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja.
    - Dressage. Sur la fin de la cuisson, déglacez avec un peu de sauce soja salée et servez bien chaud.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet."
      - "Cuisson. En attendant, épluchez et découpez tous les légumes [[julienne|en julienne]] (carotte, courgette, oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon vos goûts, et pour la bavette."
      - "Dressage. Égouttez les nouilles, passez-les à l’eau froide et réservez-les."
      - "Cuisson. Dans une poêle (ou un wok si vous en avez un), faites revenir la viande avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez."
      - "Cuisson. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja."
      - "Dressage. Sur la fin de la cuisson, [[deglacer|déglacez]] avec un peu de sauce soja salée et servez bien chaud."
      pro:
      - "Cuire les nouilles chinoises selon le paquet."
      - "Éplucher et tailler en julienne carotte, courgette, oignon rouge, poivron, oignon nouveau. Même taille pour le gingembre, selon le goût, et la bavette."
      - "Égoutter les nouilles, passer à l’eau froide, réserver."
      - "Faire revenir la viande à l’huile végétale, poêle ou wok. Ajouter les carottes, puis l’oignon et le poivron. Mélanger."
      - "Légumes croquants : ajouter les nouilles, menthe et coriandre fraîches hachées. Finaliser avec une poignée de pousses de soja."
      - "En fin de cuisson, déglacer avec un peu de sauce soja salée. Servir bien chaud."
      cavernes:
      - "Cuisson. Nouilles chinoises, cuire, paquet."
      - "Cuisson. Légumes, éplucher, julienne : carotte, courgette, oignon rouge, poivron, oignon nouveau. Gingembre, même, selon goûts. Bavette, même."
      - "Dressage. Nouilles, égoutter, eau froide, réserver."
      - "Cuisson. Poêle ou wok. Viande, filet huile végétale, faire revenir. Carottes, puis oignon, poivron, ajouter, mélanger."
      - "Cuisson. Légumes croquants. Nouilles, menthe, coriandre fraîches hachées, ajouter. Poignée pousses de soja, finaliser."
      - "Dressage. Fin cuisson. Peu sauce soja salée, déglacer. Servir chaud."
    kcal_per_serving: 185
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegetarienne:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegan:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  pesco:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
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

# Nouilles sautées façon thaï
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/nouilles-sautees-facon-thai]]

## Ingrédients (4 personnes)

- 250 g de nouilles chinoises aux oeufs
- 2 bavette de boeuf
- 2 carotte
- 2 courgette
- 1 oignon rouge
- 1 oignon nouveau
- 2 poivron
-  gingembre
- 1 poignée de pousses de soja
-  sauce soja salée
-  menthe fraîche
-  coriandre fraîche

## Préparation

1. Faites cuire les nouilles chinoises en fonction de ce qui est indiqué sur le paquet.
2. En attendant, épluchez et découpez tous les légumes en julienne (carotte, courgette, oignon rouge, poivron, oignon nouveau). Faites de même pour le gingembre, à doser selon vos goûts, et pour la bavette.
3. Égouttez les nouilles, passez-les à l’eau froide et réservez-les.
4. Dans un poêle (ou un wok si vous en avez un), faites revenir la viande avec un filet d’huile végétale. Ajoutez ensuite les carottes, puis l’oignon et le poivron et mélangez.
5. Une fois que les légumes sont croquants, ajoutez les nouilles ainsi que de la menthe et de la coriandre fraîches hachées. Finalisez avec une poignée de pousses de soja.
6. Sur la fin de la cuisson, déglacez avec un peu de sauce soja salée et servez bien chaud.

 
 

 
 Bon appétit !
