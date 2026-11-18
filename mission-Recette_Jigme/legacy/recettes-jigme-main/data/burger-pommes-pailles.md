---
schema: recette-web-jigme/v2
equipment:
- ref: mandoline
slug: burger-pommes-pailles
title: Burger pommes pailles
lang: fr
description: "Burger pommes pailles : recette américaine avec pommes de terre, steak et champignons, pour 4 personnes. Version maison."
cuisine: américaine
category: salé
tags:
- salé
- burger
- pomme de terre
- plat
image:
  url:
  alt: Burger pommes pailles
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/burger-pommes-pailles.md
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
    - from: cheddar
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
  Variante de hamburger où le pain est remplacé par des galettes de pommes de terre
  (pailles ou rösti). Geste de bistrot contemporain, pas un mets traditionnel catalogué.
fun_facts:
- text: "Les pailles doivent sortir très sèches : sinon le « pain » s’effondre sous la sauce."
  source_name: Usage
  source_url:
- text: "On sale les pommes après cuisson, pas avant, pour moins d’eau."
  source_name: Usage
  source_url:
wines:
- name: Mondeuse
  producer: Domaine Giachino
  origin: Savoie
  grapes: mondeuse
  award:
  why: Poivre, acidité — pomme de terre frite et viande.
- name: Beaujolais-Villages
  producer: Jean Foillard
  origin: Villié-Morgon (villages)
  grapes: gamay
  award:
  why: Fruit, peu de tanin — le gras des pailles.
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: Tavel, Rhône
  grapes: grenache
  award:
  why: Rosé de corps — friture et sauce.
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
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - four
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steak
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: cheddar
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laitue
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
    - "Préparation. Épluchez les pommes de terre, passez-les à la mandoline puis taillez-les en julienne. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
    - "Cuisson. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
    - "Cuisson. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
    - "Cuisson. Assaisonnez le steak, puis faites-le revenir à la poêle. Saisissez-le bleu : il terminera de cuire au four ensuite."
    - "Cuisson. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur le steak."
    - "Cuisson. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et le steak au cheddar, le temps de réchauffer."
    - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
    steps_niveaux:
      amateur:
      - "Pailles. Épluchez les pommes de terre, passez-les à la mandoline puis [[julienne|taillez-les en julienne]]. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
      - "Galettes. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
      - "Champignons. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
      - "Steak. Assaisonnez le steak, puis faites-le revenir à la poêle. Saisissez-le bleu : il terminera de cuire au four ensuite."
      - "Cheddar. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur le steak."
      - "Four. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et le steak au cheddar, le temps de réchauffer."
      - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
      pro:
      - "Éplucher les pommes de terre, passer à la mandoline, tailler en julienne. Mettre en récipient, assaisonner, mélanger : pommes pailles."
      - "Chauffer une poêle avec une noix de beurre. Poser un emporte-pièce rond, verser les pommes pailles, tasser, retirer l’emporte-pièce, laisser dorer des deux côtés. Répéter pour le haut et le bas du burger. Réserver."
      - "Couper grossièrement les champignons. Revenir à poêle bien chaude, terminer avec une noisette de beurre. Réserver."
      - "Assaisonner le steak, le revenir à la poêle. Saisir bleu : il termine au four."
      - "Détailler une ou deux tranches de cheddar à la mandoline, les déposer sur le steak."
      - "Passer au four à 180 °C quelques minutes à peine : galettes de pommes de terre, champignons, steak au cheddar, le temps de réchauffer."
      - "Poser une galette de pommes de terre dans l’assiette. Ajouter steak au cheddar, champignons, feuille de laitue. Refermer avec la seconde galette. Servir aussitôt."
      cavernes:
      - "Pailles. Pommes terre, éplucher, mandoline, julienne. Récipient, assaisonner, mélanger. Pommes pailles."
      - "Galettes. Poêle, noix beurre, chauffer. Emporte-pièce rond, poser. Pommes pailles, verser, tasser. Emporte-pièce, retirer. Dorer deux côtés. Haut, bas burger, répéter. Réserver."
      - "Champignons. Champignons, couper gros. Poêle bien chaude, revenir. Noisette beurre, terminer. Réserver."
      - "Steak. Steak, assaisonner. Poêle, revenir. Saisir bleue. Cuisson continue four."
      - "Cheddar. 1 ou 2 tranches cheddar, mandoline. Poser steak."
      - "Four. Four 180 °C quelques minutes à peine. Galettes pommes terre, champignons, steak cheddar. Réchauffer."
      - "Dressage. Galette pommes terre, assiette. Steak cheddar, champignons, feuille laitue. Seconde galette, refermer. Servir aussitôt."
    kcal_per_serving: 296
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: cheddar
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laitue
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
    - "Préparation. Épluchez les pommes de terre, passez-les à la mandoline puis taillez-les en julienne. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
    - "Cuisson. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
    - "Cuisson. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
    - "Cuisson. Assaisonnez les steaks de pleurotes, puis faites-les revenir à la poêle : ils termineront de cuire au four ensuite."
    - "Cuisson. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur les steaks de pleurotes."
    - "Cuisson. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et les steaks de pleurotes au cheddar, le temps de réchauffer."
    - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak de pleurotes au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
    steps_niveaux:
      amateur:
      - "Pailles. Épluchez les pommes de terre, passez-les à la mandoline puis [[julienne|taillez-les en julienne]]. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
      - "Galettes. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
      - "Champignons. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
      - "Pleurotes. Assaisonnez les steaks de pleurotes, puis faites-les revenir à la poêle : ils termineront de cuire au four ensuite."
      - "Cheddar. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur les steaks de pleurotes."
      - "Four. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et les steaks de pleurotes au cheddar, le temps de réchauffer."
      - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak de pleurotes au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
      pro:
      - "Éplucher les pommes de terre, passer à la mandoline, tailler en julienne. Mettre en récipient, assaisonner, mélanger : pommes pailles."
      - "Chauffer une poêle avec une noix de beurre. Poser un emporte-pièce rond, verser les pommes pailles, tasser, retirer l’emporte-pièce, laisser dorer des deux côtés. Répéter pour le haut et le bas du burger. Réserver."
      - "Couper grossièrement les champignons. Revenir à poêle bien chaude, terminer avec une noisette de beurre. Réserver."
      - "Assaisonner les steaks de pleurotes, les revenir à la poêle : ils terminent au four."
      - "Détailler une ou deux tranches de cheddar à la mandoline, les déposer sur les steaks de pleurotes."
      - "Passer au four à 180 °C quelques minutes à peine : galettes de pommes de terre, champignons, steaks de pleurotes au cheddar, le temps de réchauffer."
      - "Poser une galette de pommes de terre dans l’assiette. Ajouter steak de pleurotes au cheddar, champignons, feuille de laitue. Refermer avec la seconde galette. Servir aussitôt."
      cavernes:
      - "Pailles. Pommes terre, éplucher, mandoline, julienne. Récipient, assaisonner, mélanger. Pommes pailles."
      - "Galettes. Poêle, noix beurre, chauffer. Emporte-pièce rond, poser. Pommes pailles, verser, tasser. Emporte-pièce, retirer. Dorer deux côtés. Haut, bas burger, répéter. Réserver."
      - "Champignons. Champignons, couper gros. Poêle bien chaude, revenir. Noisette beurre, terminer. Réserver."
      - "Pleurotes. Steaks pleurotes, assaisonner. Poêle, revenir. Cuisson continue four."
      - "Cheddar. 1 ou 2 tranches cheddar, mandoline. Poser steaks pleurotes."
      - "Four. Four 180 °C quelques minutes à peine. Galettes pommes terre, champignons, steaks pleurotes cheddar. Réchauffer."
      - "Dressage. Galette pommes terre, assiette. Steak pleurotes cheddar, champignons, feuille laitue. Seconde galette, refermer. Servir aussitôt."
    kcal_per_serving: 296
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
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage végétal
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laitue
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
    - "Préparation. Épluchez les pommes de terre, passez-les à la mandoline puis taillez-les en julienne. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
    - "Cuisson. Faites chauffer une poêle avec une noix de margarine végétale. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
    - "Cuisson. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de margarine végétale. Réservez."
    - "Cuisson. Assaisonnez les steaks de pleurotes, puis faites-les revenir à la poêle : ils termineront de cuire au four ensuite."
    - "Cuisson. Détaillez une ou deux tranches de fromage végétal à la mandoline et déposez-les sur les steaks de pleurotes."
    - "Cuisson. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et les steaks de pleurotes au fromage végétal, le temps de réchauffer."
    - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak de pleurotes au fromage végétal, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
    steps_niveaux:
      amateur:
      - "Pailles. Épluchez les pommes de terre, passez-les à la mandoline puis [[julienne|taillez-les en julienne]]. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
      - "Galettes. Faites chauffer une poêle avec une noix de margarine végétale. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
      - "Champignons. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de margarine végétale. Réservez."
      - "Pleurotes. Assaisonnez les steaks de pleurotes, puis faites-les revenir à la poêle : ils termineront de cuire au four ensuite."
      - "Fromage. Détaillez une ou deux tranches de fromage végétal à la mandoline et déposez-les sur les steaks de pleurotes."
      - "Four. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et les steaks de pleurotes au fromage végétal, le temps de réchauffer."
      - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak de pleurotes au fromage végétal, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
      pro:
      - "Éplucher les pommes de terre, passer à la mandoline, tailler en julienne. Mettre en récipient, assaisonner, mélanger : pommes pailles."
      - "Chauffer une poêle avec une noix de margarine végétale. Poser un emporte-pièce rond, verser les pommes pailles, tasser, retirer l’emporte-pièce, laisser dorer des deux côtés. Répéter pour le haut et le bas du burger. Réserver."
      - "Couper grossièrement les champignons. Revenir à poêle bien chaude, terminer avec une noisette de margarine végétale. Réserver."
      - "Assaisonner les steaks de pleurotes, les revenir à la poêle : ils terminent au four."
      - "Détailler une ou deux tranches de fromage végétal à la mandoline, les déposer sur les steaks de pleurotes."
      - "Passer au four à 180 °C quelques minutes à peine : galettes de pommes de terre, champignons, steaks de pleurotes au fromage végétal, le temps de réchauffer."
      - "Poser une galette de pommes de terre dans l’assiette. Ajouter steak de pleurotes au fromage végétal, champignons, feuille de laitue. Refermer avec la seconde galette. Servir aussitôt."
      cavernes:
      - "Pailles. Pommes terre, éplucher, mandoline, julienne. Récipient, assaisonner, mélanger. Pommes pailles."
      - "Galettes. Poêle, noix margarine végétale, chauffer. Emporte-pièce rond, poser. Pommes pailles, verser, tasser. Emporte-pièce, retirer. Dorer deux côtés. Haut, bas burger, répéter. Réserver."
      - "Champignons. Champignons, couper gros. Poêle bien chaude, revenir. Noisette margarine végétale, terminer. Réserver."
      - "Pleurotes. Steaks pleurotes, assaisonner. Poêle, revenir. Cuisson continue four."
      - "Fromage. 1 ou 2 tranches fromage végétal, mandoline. Poser steaks pleurotes."
      - "Four. Four 180 °C quelques minutes à peine. Galettes pommes terre, champignons, steaks pleurotes fromage végétal. Réchauffer."
      - "Dressage. Galette pommes terre, assiette. Steak pleurotes fromage végétal, champignons, feuille laitue. Seconde galette, refermer. Servir aussitôt."
    kcal_per_serving: 296
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: cheddar
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laitue
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
    - "Préparation. Épluchez les pommes de terre, passez-les à la mandoline puis taillez-les en julienne. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
    - "Cuisson. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
    - "Cuisson. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
    - "Cuisson. Assaisonnez le pavé de thon, puis faites-le revenir à la poêle. Saisissez-le bleu : il terminera de cuire au four ensuite."
    - "Cuisson. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur le pavé de thon."
    - "Cuisson. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et le pavé de thon au cheddar, le temps de réchauffer."
    - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le pavé de thon au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
    steps_niveaux:
      amateur:
      - "Pailles. Épluchez les pommes de terre, passez-les à la mandoline puis [[julienne|taillez-les en julienne]]. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles."
      - "Galettes. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez."
      - "Champignons. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez."
      - "Thon. Assaisonnez le pavé de thon, puis faites-le revenir à la poêle. Saisissez-le bleu : il terminera de cuire au four ensuite."
      - "Cheddar. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur le pavé de thon."
      - "Four. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et le pavé de thon au cheddar, le temps de réchauffer."
      - "Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le pavé de thon au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt."
      pro:
      - "Éplucher les pommes de terre, passer à la mandoline, tailler en julienne. Mettre en récipient, assaisonner, mélanger : pommes pailles."
      - "Chauffer une poêle avec une noix de beurre. Poser un emporte-pièce rond, verser les pommes pailles, tasser, retirer l’emporte-pièce, laisser dorer des deux côtés. Répéter pour le haut et le bas du burger. Réserver."
      - "Couper grossièrement les champignons. Revenir à poêle bien chaude, terminer avec une noisette de beurre. Réserver."
      - "Assaisonner le pavé de thon, le revenir à la poêle. Saisir bleu : il termine au four."
      - "Détailler une ou deux tranches de cheddar à la mandoline, les déposer sur le pavé de thon."
      - "Passer au four à 180 °C quelques minutes à peine : galettes de pommes de terre, champignons, pavé de thon au cheddar, le temps de réchauffer."
      - "Poser une galette de pommes de terre dans l’assiette. Ajouter pavé de thon au cheddar, champignons, feuille de laitue. Refermer avec la seconde galette. Servir aussitôt."
      cavernes:
      - "Pailles. Pommes terre, éplucher, mandoline, julienne. Récipient, assaisonner, mélanger. Pommes pailles."
      - "Galettes. Poêle, noix beurre, chauffer. Emporte-pièce rond, poser. Pommes pailles, verser, tasser. Emporte-pièce, retirer. Dorer deux côtés. Haut, bas burger, répéter. Réserver."
      - "Champignons. Champignons, couper gros. Poêle bien chaude, revenir. Noisette beurre, terminer. Réserver."
      - "Thon. Pavé thon, assaisonner. Poêle, revenir. Saisir bleue. Cuisson continue four."
      - "Cheddar. 1 ou 2 tranches cheddar, mandoline. Poser pavé thon."
      - "Four. Four 180 °C quelques minutes à peine. Galettes pommes terre, champignons, pavé thon cheddar. Réchauffer."
      - "Dressage. Galette pommes terre, assiette. Pavé thon cheddar, champignons, feuille laitue. Seconde galette, refermer. Servir aussitôt."
    kcal_per_serving: 246
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  traditionnelle:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegan:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegetarienne:
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
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Burger pommes pailles
**Équipement :** [[mandoline]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/burger-pommes-pailles]]

## Ingrédients (4 personnes)

- 1 kg de pommes de terre
- 4 steak
- 40 g de champignons
-  cheddar
-  laitue
-  beurre

## Préparation

1. Préparation. Épluchez les pommes de terre, passez-les à la mandoline puis taillez-les en julienne. Placez-les dans un récipient, assaisonnez et mélangez : vous obtenez des pommes pailles.
2. Cuisson. Faites chauffer une poêle avec une noix de beurre. Posez-y un emporte-pièce rond, versez les pommes pailles, tassez bien, retirez l’emporte-pièce et laissez dorer. La galette est cuite lorsqu’elle est bien dorée des deux côtés. Répétez l’opération pour le haut et le bas du burger, puis réservez.
3. Cuisson. Coupez grossièrement les champignons. Faites-les revenir dans une poêle bien chaude, puis terminez la cuisson avec une noisette de beurre. Réservez.
4. Cuisson. Assaisonnez le steak, puis faites-le revenir à la poêle. Saisissez-le bleu : il terminera de cuire au four ensuite.
5. Cuisson. Détaillez une ou deux tranches de cheddar à la mandoline et déposez-les sur le steak.
6. Cuisson. Passez au four à 180 °C pendant quelques minutes à peine les galettes de pommes de terre, les champignons et le steak au cheddar, le temps de réchauffer.
7. Dressage. Posez une galette de pommes de terre dans l’assiette. Ajoutez le steak au cheddar, quelques champignons et une feuille de laitue, puis refermez avec la seconde galette. Servez aussitôt.

 
 

 
 Et voilà, votre burger pommes pailles est prêt ! Une recette super originale et délicieuse à dévorer sans plus tarder. Bon appétit !
