---
schema: recette-web-jigme/v2
slug: lasagnes-vegetariennes
title: Lasagnes végétariennes
lang: fr
description: "Lasagnes végétariennes : recette italienne avec feuille à lasagnes, ricotta et épinard, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- végétarien
- plat
image:
  url:
  alt: Lasagnes végétariennes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/lasagnes-vegetariennes.md
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
    - from: feuille à lasagnes
      to: pâtes sans gluten
      note:
    note: 'Gluten : feuille à lasagnes → pâtes sans gluten.'
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
    - from: ricotta
      to: fromage frais sans lactose
      note:
    - from: comté râpé
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
  Même pâte empilée que les lasagnes italiennes, sans viande. La lasagne au four
  est un plat d’Italie ; la version légumes (courgette, aubergine, tomate…) est
  une adaptation contemporaine, pas un canon régional.
fun_facts:
- text: >
    Sans ragù, la béchamel ou une tomate bien réduite tient les couches : trop
    d’eau de légumes, et ça s’effondre à la découpe.
  source_name: Usage
  source_url:
- text: >
    Le nom lasagne désigne d’abord la feuille de pâte, ensuite le plat monté.
  source_name: Wikipedia, Lasagna
  source_url: https://en.wikipedia.org/wiki/Lasagna
wines:
- name: Valpolicella
  producer: Masi
  origin: Valpolicella, Vénétie
  grapes: corvina
  award:
  why: Cerise, tanin léger — les légumes au four, sans un amarone.
- name: Vermentino di Sardegna
  producer: Sella e Mosca
  origin: Alghero, Sardaigne
  grapes: vermentino
  award:
  why: Blanc d’herbes — la tomate et la courgette.
- name: Costières de Nîmes
  producer: Mas des Bressades
  origin: Costières de Nîmes
  grapes: syrah, grenache
  award:
  why: Fruit du sud, tanin modéré — le gratin, si la tomate domine.
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
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: feuille à lasagnes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: g
      item: ricotta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: épinard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: tomate
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
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: comté râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: estragon
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
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
    - Cuisson. Faites pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarassez-les
      ensuite dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Hachez finement l’estragon, l’ail et l’échalote. Ajoutez le tout à la ricotta, puis
      salez et poivrez selon vos goûts. Complétez avec un filet d’huile d’olive et mélangez.
    - Cuisson. Incisez les tomates et retirez les pédoncules. Pour les monder, plongez-les dans l’eau
      bouillante pendant environ 30 secondes. Transvasez-les immédiatement dans l’eau froide.
      Le choc thermique vous permettra de retirer la peau facilement.
    - Cuisson. Coupez les tomates en quatre et retirez la partie centrale avec les pépins. Vous pouvez
      conserver ça pour une autre recette ou le grignoter en cuisinant.
    - Cuisson. Coupez grossièrement les tomates et faites-les à cuire dans une casserole. Ajoutez un
      filet d’huile d’olive, de l’ail haché, du sel et du poivre. Mélangez et laissez mijoter
      à feu doux.
    - Cuisson. Pendant ce temps, faites revenir les épinards dans une poêle avec une noix de beurre,
      du sel et du poivre. Pour les parfumer, vous pouvez planter une fourchette dans une
      demi-gousse d’ail et vous en servir pour mélanger les épinards. Une fois cuits, égouttez-les
      bien.
    - Dressage. C’est le moment du dressage ! Disposez une première couche de pâte à lasagnes au fond
      d’un plat préalablement beurré. Ajoutez une couche d’épinards, de la sauce tomate, puis
      le mélange de ricotta. Renouvelez l’opération jusqu’à avoir utilisé tous vos ingrédients.
      Terminez par une couche de pâtes recouverte d’un peu de ricotta et d’une généreuse portion
      de fromage râpé. Enfournez le plat à 180°C pendant environ 20 minutes. Laissez refroidir
      vos lasagnes végétariennes quelques minutes, puis dégustez tel quel ou en accompagnant
      d’une salade. Vous pouvez aussi les conserver au frigo pour les réchauffer et les manger
      plus tard dans la semaine. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarassez-les ensuite dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Hachez finement l’estragon, l’ail et l’échalote. Ajoutez le tout à la ricotta, puis salez et poivrez selon vos goûts. Complétez avec un filet d’huile d’olive et mélangez."
      - "Cuisson. Incisez les tomates et retirez les pédoncules. Pour les [[monder|monder]], plongez-les dans l’eau bouillante pendant environ 30 secondes. Transvasez-les immédiatement dans l’eau froide. Le choc thermique vous permettra de retirer la peau facilement."
      - "Cuisson. Coupez les tomates en quatre et retirez la partie centrale avec les pépins. Vous pouvez conserver ça pour une autre recette ou le grignoter en cuisinant."
      - "Cuisson. Coupez grossièrement les tomates et faites-les cuire dans une casserole. Ajoutez un filet d’huile d’olive, de l’ail haché, du sel et du poivre. Mélangez et [[mijoter|laissez mijoter]] à feu doux."
      - "Cuisson. Pendant ce temps, faites revenir les épinards dans une poêle avec une noix de beurre, du sel et du poivre. Pour les parfumer, vous pouvez planter une fourchette dans une demi-gousse d’ail et vous en servir pour mélanger les épinards. Une fois cuits, égouttez-les bien."
      - "Dressage. Disposez une première couche de pâte à lasagnes au fond d’un plat préalablement beurré. Ajoutez une couche d’épinards, de la sauce tomate, puis le mélange de ricotta. Renouvelez l’opération jusqu’à avoir utilisé tous vos ingrédients. Terminez par une couche de pâtes recouverte d’un peu de ricotta et d’une généreuse portion de fromage râpé. Enfournez le plat à 180°C pendant environ 20 minutes. Laissez refroidir quelques minutes, puis dégustez tel quel ou en accompagnant d’une salade. Vous pouvez aussi les conserver au frigo pour les réchauffer plus tard dans la semaine."
      pro:
      - "Pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarrasser dans l’eau froide pour stopper la cuisson."
      - "Hacher finement estragon, ail et échalote. Ajouter à la ricotta. Saler, poivrer. Filet d’huile d’olive. Mélanger."
      - "Inciser les tomates, retirer les pédoncules. Monder : plonger environ 30 secondes dans l’eau bouillante, transvaser immédiatement dans l’eau froide. Retirer la peau."
      - "Couper les tomates en quatre. Retirer la partie centrale et les pépins. Réserver pour une autre recette ou grignoter."
      - "Couper grossièrement les tomates. Cuire en casserole. Filet d’huile d’olive, ail haché, sel, poivre. Mélanger. Mijoter à feu doux."
      - "Revenir les épinards à la poêle, noix de beurre, sel, poivre. Option : fourchette piquée dans une demi-gousse d’ail pour mélanger. Égoutter."
      - "Plat beurré. Couche de pâtes, épinards, sauce tomate, mélange ricotta. Renouveler jusqu’à épuisement. Terminer : pâtes, un peu de ricotta, fromage râpé. Four 180°C, environ 20 minutes. Tiédir quelques minutes. Servir tel quel ou avec une salade. Conservation frigo possible."
      cavernes:
      - "Cuisson. Pâtes lasagne, casserole grande, eau bouillante, pré-cuire. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Estragon, ail, échalote, hacher fin. Ricotta, ajouter. Sel, poivre. Filet huile olive, mélanger."
      - "Cuisson. Tomates, inciser, pédoncules retirer. Monder : eau bouillante, environ 30 secondes. Eau froide, transvaser tout de suite. Peau, retirer."
      - "Cuisson. Tomates, couper quatre. Partie centrale, pépins, retirer. Garder autre recette ou grignoter."
      - "Cuisson. Tomates, couper gros. Casserole, cuire. Filet huile olive, ail haché, sel, poivre. Mélanger. Feu doux, mijoter."
      - "Cuisson. Épinards, poêle, noix beurre, sel, poivre, revenir. Fourchette, demi-gousse ail, parfumer, mélanger. Cuits, égoutter bien."
      - "Dressage. Plat beurré. Couche pâtes lasagnes, fond. Couche épinards, sauce tomate, mélange ricotta. Renouveler jusqu’à ingrédients. Terminer pâtes, peu ricotta, fromage râpé. Four 180°C, environ 20 minutes. Refroidir quelques minutes. Déguster tel quel ou salade. Frigo, réchauffer plus tard semaine."
    kcal_per_serving: 327
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 327
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: feuille à lasagnes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: g
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: épinard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: tomate
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
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: estragon
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
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
    steps:
    - Cuisson. Faites pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarassez-les
      ensuite dans de l’eau froide pour stopper la cuisson.
    - Cuisson. Hachez finement l’estragon, l’ail et l’échalote. Ajoutez le tout à la fromage végétal,
      puis salez et poivrez selon vos goûts. Complétez avec un filet d’huile d’olive et mélangez.
    - Cuisson. Incisez les tomates et retirez les pédoncules. Pour les monder, plongez-les dans l’eau
      bouillante pendant environ 30 secondes. Transvasez-les immédiatement dans l’eau froide.
      Le choc thermique vous permettra de retirer la peau facilement.
    - Cuisson. Coupez les tomates en quatre et retirez la partie centrale avec les pépins. Vous pouvez
      conserver ça pour une autre recette ou le grignoter en cuisinant.
    - Cuisson. Coupez grossièrement les tomates et faites-les à cuire dans une casserole. Ajoutez un
      filet d’huile d’olive, de l’ail haché, du sel et du poivre. Mélangez et laissez mijoter
      à feu doux.
    - Cuisson. Pendant ce temps, faites revenir les épinards dans une poêle avec une noix de margarine végétale,
      du sel et du poivre. Pour les parfumer, vous pouvez planter une fourchette dans une
      demi-gousse d’ail et vous en servir pour mélanger les épinards. Une fois cuits, égouttez-les
      bien.
    - Dressage. C’est le moment du dressage ! Disposez une première couche de pâte à lasagnes au fond
      d’un plat préalablement graissé avec de la margarine végétale. Ajoutez une couche d’épinards, de la sauce tomate, puis
      le mélange de fromage végétal. Renouvelez l’opération jusqu’à avoir utilisé tous vos
      ingrédients. Terminez par une couche de pâtes recouverte d’un peu de fromage végétal
      et d’une généreuse portion de fromage végétal râpé. Enfournez le plat à 180°C pendant
      environ 20 minutes. Laissez refroidir vos lasagnes végétariennes quelques minutes, puis
      dégustez tel quel ou en accompagnant d’une salade. Vous pouvez aussi les conserver au
      frigo pour les réchauffer et les manger plus tard dans la semaine. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarassez-les ensuite dans de l’eau froide pour stopper la cuisson."
      - "Cuisson. Hachez finement l’estragon, l’ail et l’échalote. Ajoutez le tout au fromage végétal, puis salez et poivrez selon vos goûts. Complétez avec un filet d’huile d’olive et mélangez."
      - "Cuisson. Incisez les tomates et retirez les pédoncules. Pour les [[monder|monder]], plongez-les dans l’eau bouillante pendant environ 30 secondes. Transvasez-les immédiatement dans l’eau froide. Le choc thermique vous permettra de retirer la peau facilement."
      - "Cuisson. Coupez les tomates en quatre et retirez la partie centrale avec les pépins. Vous pouvez conserver ça pour une autre recette ou le grignoter en cuisinant."
      - "Cuisson. Coupez grossièrement les tomates et faites-les cuire dans une casserole. Ajoutez un filet d’huile d’olive, de l’ail haché, du sel et du poivre. Mélangez et [[mijoter|laissez mijoter]] à feu doux."
      - "Cuisson. Pendant ce temps, faites revenir les épinards dans une poêle avec une noix de margarine végétale, du sel et du poivre. Pour les parfumer, vous pouvez planter une fourchette dans une demi-gousse d’ail et vous en servir pour mélanger les épinards. Une fois cuits, égouttez-les bien."
      - "Dressage. Disposez une première couche de pâte à lasagnes au fond d’un plat préalablement graissé avec de la margarine végétale. Ajoutez une couche d’épinards, de la sauce tomate, puis le mélange de fromage végétal. Renouvelez l’opération jusqu’à avoir utilisé tous vos ingrédients. Terminez par une couche de pâtes recouverte d’un peu de fromage végétal et d’une généreuse portion de fromage végétal râpé. Enfournez le plat à 180°C pendant environ 20 minutes. Laissez refroidir quelques minutes, puis dégustez tel quel ou en accompagnant d’une salade. Vous pouvez aussi les conserver au frigo pour les réchauffer plus tard dans la semaine."
      pro:
      - "Pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarrasser dans l’eau froide pour stopper la cuisson."
      - "Hacher finement estragon, ail et échalote. Ajouter au fromage végétal. Saler, poivrer. Filet d’huile d’olive. Mélanger."
      - "Inciser les tomates, retirer les pédoncules. Monder : plonger environ 30 secondes dans l’eau bouillante, transvaser immédiatement dans l’eau froide. Retirer la peau."
      - "Couper les tomates en quatre. Retirer la partie centrale et les pépins. Réserver pour une autre recette ou grignoter."
      - "Couper grossièrement les tomates. Cuire en casserole. Filet d’huile d’olive, ail haché, sel, poivre. Mélanger. Mijoter à feu doux."
      - "Revenir les épinards à la poêle, noix de margarine végétale, sel, poivre. Option : fourchette piquée dans une demi-gousse d’ail pour mélanger. Égoutter."
      - "Plat graissé à la margarine végétale. Couche de pâtes, épinards, sauce tomate, mélange fromage végétal. Renouveler jusqu’à épuisement. Terminer : pâtes, un peu de fromage végétal, fromage végétal râpé. Four 180°C, environ 20 minutes. Tiédir quelques minutes. Servir tel quel ou avec une salade. Conservation frigo possible."
      cavernes:
      - "Cuisson. Pâtes lasagne, casserole grande, eau bouillante, pré-cuire. Eau froide, débarrasser, stopper cuisson."
      - "Cuisson. Estragon, ail, échalote, hacher fin. Fromage végétal, ajouter. Sel, poivre. Filet huile olive, mélanger."
      - "Cuisson. Tomates, inciser, pédoncules retirer. Monder : eau bouillante, environ 30 secondes. Eau froide, transvaser tout de suite. Peau, retirer."
      - "Cuisson. Tomates, couper quatre. Partie centrale, pépins, retirer. Garder autre recette ou grignoter."
      - "Cuisson. Tomates, couper gros. Casserole, cuire. Filet huile olive, ail haché, sel, poivre. Mélanger. Feu doux, mijoter."
      - "Cuisson. Épinards, poêle, noix margarine végétale, sel, poivre, revenir. Fourchette, demi-gousse ail, parfumer, mélanger. Cuits, égoutter bien."
      - "Dressage. Plat graissé margarine végétale. Couche pâtes lasagnes, fond. Couche épinards, sauce tomate, mélange fromage végétal. Renouveler jusqu’à ingrédients. Terminer pâtes, peu fromage végétal, fromage végétal râpé. Four 180°C, environ 20 minutes. Refroidir quelques minutes. Déguster tel quel ou salade. Frigo, réchauffer plus tard semaine."
    kcal_per_serving: 443
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 327
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    monder:
      terme: "monder"
      explication: "Vous plongez la tomate (ou le fruit à peau fine) un instant dans l’eau bouillante, puis dans l’eau froide. Vous retirez ensuite la peau. C’est réussi quand la peau se décolle facilement."
      ref: Cuisine/Lexique/monder.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    monder:
      terme: "monder"
      explication: "Vous plongez la tomate (ou le fruit à peau fine) un instant dans l’eau bouillante, puis dans l’eau froide. Vous retirez ensuite la peau. C’est réussi quand la peau se décolle facilement."
      ref: Cuisine/Lexique/monder.md
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

# Lasagnes végétariennes
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/lasagnes-vegetariennes]]

## Ingrédients (4 personnes)

- 8 feuille à lasagnes
- 750 g de ricotta
- 500 g d'épinard
- 10 tomate
- 2 échalote
- 3 gousse d'ail
- 130 g de comté râpé
-  estragon
-  huile d'olive

## Préparation

1. Faites pré-cuire les pâtes à lasagne dans une grande casserole d’eau bouillante. Débarassez-les ensuite dans de l’eau froide pour stopper la cuisson.
2. Hachez finement l’estragon, l’ail et l’échalote. Ajoutez le tout à la ricotta, puis salez et poivrez selon vos goûts. Complétez avec un filet d’huile d’olive et mélangez.
3. Incisez les tomates et retirez les pédoncules. Pour les monder, plongez-les dans l’eau bouillante pendant environ 30 secondes. Transvasez-les immédiatement dans l’eau froide. Le choc thermique vous permettra de retirer la peau facilement.
4. Coupez les tomates en quatre et retirez la partie centrale avec les pépins. Vous pouvez conserver ça pour une autre recette ou le grignoter en cuisinant.
5. Coupez grossièrement les tomates et faites-les à cuire dans une casserole. Ajoutez un filet d’huile d’olive, de l’ail haché, du sel et du poivre. Mélangez et laissez mijoter à feu doux.
6. Pendant ce temps, faites revenir les épinards dans une poêle avec une noix de beurre, du sel et du poivre. Pour les parfumer, vous pouvez planter une fourchette dans une demi-gousse d’ail et vous en servir pour mélanger les épinards. Une fois cuits, égouttez-les bien.
7. C’est le moment du dressage ! Disposez une première couche de pâte à lasagnes au fond d’un plat préalablement beurré. Ajoutez une couche d’épinards, de la sauce tomate, puis le mélange de ricotta. Renouvelez l’opération jusqu’à avoir utilisé tous vos ingrédients. Terminez par une couche de pâtes recouverte d’un peu de ricotta et d’une généreuse portion de fromage râpé. Enfournez le plat à 180°C pendant environ 20 minutes.

 
 

 
 Laissez refroidir vos lasagnes végétariennes quelques minutes, puis dégustez tel quel ou en accompagnant d’une salade. Vous pouvez aussi les conserver au frigo pour les réchauffer et les manger plus tard dans la semaine. Bon appétit !
