---
schema: recette-web-jigme/v2
slug: pizza-au-curry
title: Pizza au curry
lang: fr
description: "Pizza au curry : recette fusion avec pâte à pizza, crème fraiche et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: fusion
category: salé
tags:
- salé
- pizza
- curry
- plat
image:
  url:
  alt: Pizza au curry
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pizza-au-curry.md
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
    - from: crème liquide
      to: crème sans lactose
      note:
    - from: emmental râpé
      to: comté affiné (naturellement quasi sans lactose)
      note:
    - from: paneer (cubes)
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
    note: 'Contient poisson (cabillaud (cubes)) : pas d’adaptation fiable.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine ; tofu ferme → pois chiches rôtis.'
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
histoire: 'Pizza : pâte levée, tomate, fromage, four très chaud — plat italien. Ici, crème et curry, poulet
  : fusion contemporaine, pas une pizza napolitaine. Le curry sur une pâte est un usage de resto, sans
  date d’auteur.

  '
fun_facts:
- text: >
    La crème à la place de la tomate rapproche d’une pizza bianca ; le curry
    n’est pas un condiment napolitain.
  source_name: Usage
  source_url:
- text: >
    Un four trop doux ramollit la pâte sous la crème : il faut de la chaleur,
    comme pour toute pizza.
  source_name: Wikipedia, Pizza
  source_url: https://en.wikipedia.org/wiki/Pizza
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — le curry et la crème, sans un chianti trop acide.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le poulet au curry sur pâte, sans un rouge tannique.
- name: Barbera d'Asti
  producer: Coppo
  origin: Asti, Piémont
  grapes: barbera
  award:
  why: Acidité de barbera — si l’on veut un rouge, tanin souple à côté de la crème.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - casserole
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte à pizza (maison, c'est mieux !)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: blanc de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: emmental râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cac
      item: garam massala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: vadouvan (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette (disponible cliquant
      sur ce lien).
    - Cuisson. Commencez par dégraisser les blancs de poulet, puis coupez-les grossièrement. Faites
      chauffer ces dés de poulet dans une casserole bien chaude avec un filet d’huile végétale.
      L’objectif n’est pas de les cuire totalement, mais qu’ils soient bien dorés. Réservez.
    - Cuisson. Épluchez et hachez un oignon, un gousse d’ail et un peu de gingembre frais. Faites revenir
      le tout dans la même casserole avec un filet d’huile végétale.
    - Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez.
      Ajoutez ensuite le poulet et la crème liquide. Salez et poivrez selon vos goûts, puis
      laissez mijoter quelques minutes à feu doux. Si vous en avez, Jigmé vous conseille également
      d’ajouter un peu de vadouvan (on vous en parle dans « le petit + » ci-dessous).
    - Mélange. Lorsque le mélange a un peu réduit, passez-le au chinois. La partie crémeuse servira
      de base à la pizza, le reste de garniture.
    - Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert
      en lamelles ou en petits dés (c’est vous qui choisissez).
    - Finition. Placez votre pâte à pizza face à vous et recouvrez-là de la crème au curry. Ajoutez
      du fromage râpé, le poulet, les poivrons et l’oignon. Enfournez le tout à 280°C pendant
      3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée et dégustez cette pizza
      originale. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette."
      - "Cuisson. Dégraissez les blancs de poulet, puis coupez-les grossièrement. Faites chauffer ces dés de poulet dans une casserole bien chaude avec un filet d’huile végétale. L’objectif n’est pas de les cuire totalement, mais qu’ils soient bien dorés. Réservez."
      - "Cuisson. Épluchez et hachez un oignon, une gousse d’ail et un peu de gingembre frais. Faites revenir le tout dans la même casserole avec un filet d’huile végétale."
      - "Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez. Ajoutez ensuite le poulet et la crème liquide. Salez et poivrez selon vos goûts, puis [[mijoter|laissez mijoter]] quelques minutes à feu doux. Si vous en avez, ajoutez un peu de vadouvan."
      - "Mélange. Lorsque le mélange a un peu [[reduire|réduit]], passez-le au chinois. La partie crémeuse servira de base à la pizza, le reste de garniture."
      - "Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Finition. Placez votre pâte à pizza face à vous et recouvrez-la de la crème au curry. Ajoutez du fromage [[raper|râpé]], le poulet, les poivrons et l’oignon. Enfournez le tout à 280°C pendant 3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée."
      pro:
      - "Préparer une pâte à pizza maison."
      - "Dégraisser les blancs de poulet. Couper grossièrement. Dorer les dés dans une casserole bien chaude, filet d’huile végétale, sans cuire totalement. Réserver."
      - "Éplucher et hacher un oignon, une gousse d’ail et un peu de gingembre frais. Faire revenir dans la même casserole, filet d’huile végétale."
      - "Ajouter le garam massala et le curcuma. Compléter avec la crème fraîche. Ajouter le poulet et la crème liquide. Saler, poivrer. Laisser mijoter quelques minutes à feu doux. Vadouvan optionnel."
      - "Quand le mélange a un peu réduit, passer au chinois. Partie crémeuse : base. Reste : garniture."
      - "Découper un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Recouvrir la pâte de crème au curry. Ajouter fromage râpé, poulet, poivrons et oignon. Enfourner 3 ou 4 minutes à 280°C. Saupoudrer de coriandre fraîche hachée."
      cavernes:
      - "Préparation. Pâte pizza maison, préparer."
      - "Cuisson. Blancs poulet, dégraisser. Couper gros. Dés, casserole bien chaude, filet huile végétale, dorer, pas cuire totalement. Réserver."
      - "Cuisson. Oignon, gousse ail, gingembre frais, éplucher, hacher. Même casserole, filet huile végétale, revenir."
      - "Mélange. Garam massala, curcuma, ajouter. Crème fraîche, compléter, mélanger. Poulet, crème liquide, ajouter. Sel, poivre. Feu doux, mijoter quelques minutes. Vadouvan si y a."
      - "Mélange. Mélange peu réduit. Passer chinois. Crème = base pizza. Reste = garniture."
      - "Cuisson. Oignon, poivron rouge, poivron vert, lamelles ou petits dés."
      - "Finition. Pâte face à vous. Crème curry, recouvrir. Fromage râpé, poulet, poivrons, oignon, ajouter. 280°C, 3 ou 4 min, enfourner. Coriandre fraîche hachée, saupoudrer."
    kcal_per_serving: 494
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
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte à pizza (maison, c'est mieux !)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: paneer (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: emmental (présure microbienne) râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cac
      item: garam massala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: vadouvan (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette (disponible cliquant
      sur ce lien).
    - Coupez le paneer en dés. Faites-les dorer dans une casserole bien chaude avec un filet d’huile végétale, sans les cuire totalement. Réservez.
    - Cuisson. Épluchez et hachez un oignon, un gousse d’ail et un peu de gingembre frais. Faites revenir
      le tout dans la même casserole avec un filet d’huile végétale.
    - Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez.
      Ajoutez ensuite le paneer et la crème liquide. Salez et poivrez selon vos goûts, puis
      laissez mijoter quelques minutes à feu doux. Si vous en avez, Jigmé vous conseille également
      d’ajouter un peu de vadouvan (on vous en parle dans « le petit + » ci-dessous).
    - Mélange. Lorsque le mélange a un peu réduit, passez-le au chinois. La partie crémeuse servira
      de base à la pizza, le reste de garniture.
    - Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert
      en lamelles ou en petits dés (c’est vous qui choisissez).
    - Cuisson. Placez votre pâte à pizza face à vous et recouvrez-là de la crème au curry. Ajoutez du fromage râpé, le paneer, les poivrons et l’oignon. Enfournez le tout à 280°C pendant
      3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée et dégustez cette pizza
      originale. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette."
      - "Coupez le paneer en dés. Faites-les dorer dans une casserole bien chaude avec un filet d’huile végétale, sans les cuire totalement. Réservez."
      - "Cuisson. Épluchez et hachez un oignon, une gousse d’ail et un peu de gingembre frais. Faites revenir le tout dans la même casserole avec un filet d’huile végétale."
      - "Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez. Ajoutez ensuite le paneer et la crème liquide. Salez et poivrez selon vos goûts, puis [[mijoter|laissez mijoter]] quelques minutes à feu doux. Si vous en avez, ajoutez un peu de vadouvan."
      - "Mélange. Lorsque le mélange a un peu [[reduire|réduit]], passez-le au chinois. La partie crémeuse servira de base à la pizza, le reste de garniture."
      - "Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Cuisson. Placez votre pâte à pizza face à vous et recouvrez-la de la crème au curry. Ajoutez du fromage [[raper|râpé]], le paneer, les poivrons et l’oignon. Enfournez le tout à 280°C pendant 3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée."
      pro:
      - "Préparer une pâte à pizza maison."
      - "Couper le paneer en dés. Dorer dans une casserole bien chaude, filet d’huile végétale, sans cuire totalement. Réserver."
      - "Éplucher et hacher un oignon, une gousse d’ail et un peu de gingembre frais. Faire revenir dans la même casserole, filet d’huile végétale."
      - "Ajouter le garam massala et le curcuma. Compléter avec la crème fraîche. Ajouter le paneer et la crème liquide. Saler, poivrer. Laisser mijoter quelques minutes à feu doux. Vadouvan optionnel."
      - "Quand le mélange a un peu réduit, passer au chinois. Partie crémeuse : base. Reste : garniture."
      - "Découper un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Recouvrir la pâte de crème au curry. Ajouter fromage râpé, paneer, poivrons et oignon. Enfourner 3 ou 4 minutes à 280°C. Saupoudrer de coriandre fraîche hachée."
      cavernes:
      - "Préparation. Pâte pizza maison, préparer."
      - "Paneer, dés. Casserole bien chaude, filet huile végétale, dorer, pas cuire totalement. Réserver."
      - "Cuisson. Oignon, gousse ail, gingembre frais, éplucher, hacher. Même casserole, filet huile végétale, revenir."
      - "Mélange. Garam massala, curcuma, ajouter. Crème fraîche, compléter, mélanger. Paneer, crème liquide, ajouter. Sel, poivre. Feu doux, mijoter quelques minutes. Vadouvan si y a."
      - "Mélange. Mélange peu réduit. Passer chinois. Crème = base pizza. Reste = garniture."
      - "Cuisson. Oignon, poivron rouge, poivron vert, lamelles ou petits dés."
      - "Cuisson. Pâte face à vous. Crème curry, recouvrir. Fromage râpé, paneer, poivrons, oignon, ajouter. 280°C, 3 ou 4 min, enfourner. Coriandre fraîche hachée, saupoudrer."
    kcal_per_serving: 401
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
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte à pizza (maison, c'est mieux !)
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
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron vert
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
      item: gingembre frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cac
      item: garam massala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: vadouvan (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette (disponible cliquant
      sur ce lien).
    - Coupez le tofu ferme en dés. Faites-les dorer dans une casserole bien chaude avec un filet d’huile. Réservez.
    - Cuisson. Épluchez et hachez un oignon, un gousse d’ail et un peu de gingembre frais. Faites revenir
      le tout dans la même casserole avec un filet d’huile végétale.
    - Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème de soja ou d’avoine et mélangez. Ajoutez ensuite le tofu. Salez et poivrez selon vos
      goûts, puis laissez mijoter quelques minutes à feu doux. Si vous en avez, Jigmé vous
      conseille également d’ajouter un peu de vadouvan (on vous en parle dans « le petit +
      » ci-dessous).
    - Mélange. Lorsque le mélange a un peu réduit, passez-le au chinois. La partie crémeuse servira
      de base à la pizza, le reste de garniture.
    - Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert
      en lamelles ou en petits dés (c’est vous qui choisissez).
    - Cuisson. Placez votre pâte à pizza face à vous et recouvrez-là de la crème au curry. Ajoutez le parmesan végétal ou la levure maltée, le tofu, les poivrons et l’oignon. Enfournez le tout à 280°C pendant
      3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée et dégustez cette pizza
      originale. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette."
      - "Coupez le tofu ferme en dés. Faites-les dorer dans une casserole bien chaude avec un filet d’huile. Réservez."
      - "Cuisson. Épluchez et hachez un oignon, une gousse d’ail et un peu de gingembre frais. Faites revenir le tout dans la même casserole avec un filet d’huile végétale."
      - "Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème de soja ou d’avoine et mélangez. Ajoutez ensuite le tofu. Salez et poivrez selon vos goûts, puis [[mijoter|laissez mijoter]] quelques minutes à feu doux. Si vous en avez, ajoutez un peu de vadouvan."
      - "Mélange. Lorsque le mélange a un peu [[reduire|réduit]], passez-le au chinois. La partie crémeuse servira de base à la pizza, le reste de garniture."
      - "Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Cuisson. Placez votre pâte à pizza face à vous et recouvrez-la de la crème au curry. Ajoutez le parmesan végétal ou la levure maltée, le tofu, les poivrons et l’oignon. Enfournez le tout à 280°C pendant 3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée."
      pro:
      - "Préparer une pâte à pizza maison."
      - "Couper le tofu ferme en dés. Dorer dans une casserole bien chaude, filet d’huile. Réserver."
      - "Éplucher et hacher un oignon, une gousse d’ail et un peu de gingembre frais. Faire revenir dans la même casserole, filet d’huile végétale."
      - "Ajouter le garam massala et le curcuma. Compléter avec la crème de soja ou d’avoine. Ajouter le tofu. Saler, poivrer. Laisser mijoter quelques minutes à feu doux. Vadouvan optionnel."
      - "Quand le mélange a un peu réduit, passer au chinois. Partie crémeuse : base. Reste : garniture."
      - "Découper un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Recouvrir la pâte de crème au curry. Ajouter parmesan végétal ou levure maltée, tofu, poivrons et oignon. Enfourner 3 ou 4 minutes à 280°C. Saupoudrer de coriandre fraîche hachée."
      cavernes:
      - "Préparation. Pâte pizza maison, préparer."
      - "Tofu ferme, dés. Casserole bien chaude, filet huile, dorer. Réserver."
      - "Cuisson. Oignon, gousse ail, gingembre frais, éplucher, hacher. Même casserole, filet huile végétale, revenir."
      - "Mélange. Garam massala, curcuma, ajouter. Crème soja ou avoine, compléter, mélanger. Tofu, ajouter. Sel, poivre. Feu doux, mijoter quelques minutes. Vadouvan si y a."
      - "Mélange. Mélange peu réduit. Passer chinois. Crème = base pizza. Reste = garniture."
      - "Cuisson. Oignon, poivron rouge, poivron vert, lamelles ou petits dés."
      - "Cuisson. Pâte face à vous. Crème curry, recouvrir. Parmesan végétal ou levure maltée, tofu, poivrons, oignon, ajouter. 280°C, 3 ou 4 min, enfourner. Coriandre fraîche hachée, saupoudrer."
    kcal_per_serving: 401
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
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte à pizza (maison, c'est mieux !)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: cabillaud (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: emmental râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cac
      item: garam massala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: vadouvan (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette (disponible cliquant
      sur ce lien).
    - Cuisson. Commencez par dégraisser les blancs de poulet, puis coupez-les grossièrement. Faites
      chauffer ces dés de poulet dans une casserole bien chaude avec un filet d’huile végétale.
      L’objectif n’est pas de les cuire totalement, mais qu’ils soient bien dorés. Réservez.
    - Cuisson. Épluchez et hachez un oignon, un gousse d’ail et un peu de gingembre frais. Faites revenir
      le tout dans la même casserole avec un filet d’huile végétale.
    - Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez.
      Ajoutez ensuite le poulet et la crème liquide. Salez et poivrez selon vos goûts, puis
      laissez mijoter quelques minutes à feu doux. Si vous en avez, Jigmé vous conseille également
      d’ajouter un peu de vadouvan (on vous en parle dans « le petit + » ci-dessous).
    - Mélange. Lorsque le mélange a un peu réduit, passez-le au chinois. La partie crémeuse servira
      de base à la pizza, le reste de garniture.
    - Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert
      en lamelles ou en petits dés (c’est vous qui choisissez).
    - Finition. Placez votre pâte à pizza face à vous et recouvrez-là de la crème au curry. Ajoutez
      du fromage râpé, le poulet, les poivrons et l’oignon. Enfournez le tout à 280°C pendant
      3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée et dégustez cette pizza
      originale. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. En amont, préparez une pâte à pizza maison grâce à notre recette."
      - "Cuisson. Dégraissez les blancs de poulet, puis coupez-les grossièrement. Faites chauffer ces dés de poulet dans une casserole bien chaude avec un filet d’huile végétale. L’objectif n’est pas de les cuire totalement, mais qu’ils soient bien dorés. Réservez."
      - "Cuisson. Épluchez et hachez un oignon, une gousse d’ail et un peu de gingembre frais. Faites revenir le tout dans la même casserole avec un filet d’huile végétale."
      - "Mélange. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez. Ajoutez ensuite le poulet et la crème liquide. Salez et poivrez selon vos goûts, puis [[mijoter|laissez mijoter]] quelques minutes à feu doux. Si vous en avez, ajoutez un peu de vadouvan."
      - "Mélange. Lorsque le mélange a un peu [[reduire|réduit]], passez-le au chinois. La partie crémeuse servira de base à la pizza, le reste de garniture."
      - "Cuisson. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Finition. Placez votre pâte à pizza face à vous et recouvrez-la de la crème au curry. Ajoutez du fromage [[raper|râpé]], le poulet, les poivrons et l’oignon. Enfournez le tout à 280°C pendant 3 ou 4 minutes. Saupoudrez d’un peu de coriandre fraîche hachée."
      pro:
      - "Préparer une pâte à pizza maison."
      - "Dégraisser les blancs de poulet. Couper grossièrement. Dorer les dés dans une casserole bien chaude, filet d’huile végétale, sans cuire totalement. Réserver."
      - "Éplucher et hacher un oignon, une gousse d’ail et un peu de gingembre frais. Faire revenir dans la même casserole, filet d’huile végétale."
      - "Ajouter le garam massala et le curcuma. Compléter avec la crème fraîche. Ajouter le poulet et la crème liquide. Saler, poivrer. Laisser mijoter quelques minutes à feu doux. Vadouvan optionnel."
      - "Quand le mélange a un peu réduit, passer au chinois. Partie crémeuse : base. Reste : garniture."
      - "Découper un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés."
      - "Recouvrir la pâte de crème au curry. Ajouter fromage râpé, poulet, poivrons et oignon. Enfourner 3 ou 4 minutes à 280°C. Saupoudrer de coriandre fraîche hachée."
      cavernes:
      - "Préparation. Pâte pizza maison, préparer."
      - "Cuisson. Blancs poulet, dégraisser. Couper gros. Dés, casserole bien chaude, filet huile végétale, dorer, pas cuire totalement. Réserver."
      - "Cuisson. Oignon, gousse ail, gingembre frais, éplucher, hacher. Même casserole, filet huile végétale, revenir."
      - "Mélange. Garam massala, curcuma, ajouter. Crème fraîche, compléter, mélanger. Poulet, crème liquide, ajouter. Sel, poivre. Feu doux, mijoter quelques minutes. Vadouvan si y a."
      - "Mélange. Mélange peu réduit. Passer chinois. Crème = base pizza. Reste = garniture."
      - "Cuisson. Oignon, poivron rouge, poivron vert, lamelles ou petits dés."
      - "Finition. Pâte face à vous. Crème curry, recouvrir. Fromage râpé, poulet, poivrons, oignon, ajouter. 280°C, 3 ou 4 min, enfourner. Coriandre fraîche hachée, saupoudrer."
    kcal_per_serving: 401
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
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
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
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
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

# Pizza au curry
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 1 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pizza-au-curry]]

## Ingrédients (1 personnes)

- 1 pâte à pizza (maison, c'est mieux !)
- 50 cL de crème fraiche
- 25 cL de crème liquide
- 1 gousse d'ail
- 2 blanc de poulet
- 2 oignon rouge
- 1 poivron rouge
- 1 poivron vert
- 130 g d'emmental râpé
-  gingembre frais
- 1 c.à.c de garam massala
- 1 c.à.c de curcuma
- 0.5 c.à.c de vadouvan (facultatif)
-  coriandre fraîche

## Préparation

1. En amont, préparez une pâte à pizza maison grâce à notre recette (disponible cliquant sur ce lien).
2. Commencez par dégraisser les blancs de poulet, puis coupez-les grossièrement. Faites chauffer ces dés de poulet dans une casserole bien chaude avec un filet d’huile végétale. L’objectif n’est pas de les cuire totalement, mais qu’ils soient bien dorés. Réservez.
3. Épluchez et hachez  un oignon, un gousse d’ail et un peu de gingembre frais. Faites revenir le tout dans la même casserole avec un filet d’huile végétale.
4. Ajoutez le garam massala et le curcuma. Complétez avec la crème fraîche et mélangez. Ajoutez ensuite le poulet et la crème liquide. Salez et poivrez selon vos goûts, puis laissez mijoter quelques minutes à feu doux. Si vous en avez, Jigmé vous conseille également d’ajouter un peu de vadouvan (on vous en parle dans « le petit + » ci-dessous).
5. Lorsque le mélange a un peu réduit, passez-le au chinois. La partie crémeuse servira de base à la pizza, le reste de garniture.
6. Pour compléter la garniture, découpez un oignon, un poivron rouge et un poivron vert en lamelles ou en petits dés (c’est vous qui choisissez).
7. Placez votre pâte à pizza face à vous et recouvrez-là de la crème au curry. Ajoutez du fromage râpé, le poulet, les poivrons et l’oignon. Enfournez le tout à 280°C pendant 3 ou 4 minutes.

 
 

 
 Saupoudrez d’un peu de coriandre fraîche hachée et dégustez cette pizza originale. Bon appétit !
