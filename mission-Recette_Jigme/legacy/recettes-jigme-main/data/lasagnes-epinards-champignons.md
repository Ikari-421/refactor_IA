---
schema: recette-web-jigme/v2
slug: lasagnes-epinards-champignons
title: Lasagnes épinards champignons
lang: fr
description: "Lasagnes épinards champignons : recette italienne avec épinards, échalote et champignon de Paris, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- champignons
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/lasagnes-epinards-champignons.webp
  alt: Lasagnes épinards champignons
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/lasagnes-epinards-champignons.md
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
    - from: feuille de lasagne (en fonction du plat)
      to: pâtes sans gluten
      note:
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
    - from: mascarpone
      to: fromage frais sans lactose
      note:
    - from: mozzarella
      to: mozzarella sans lactose
      note:
    - from: fromage râpé au choix
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Lasagnes : larges feuilles de pâte, empilées, cuites au four. En Italie du nord, plutôt ragù,
  béchamel et parmesan. Ici, épinards et champignons à la place de la viande — variante végétarienne,
  pas la lasagne bolognaise.

  '
fun_facts:
- text: 'Au sud, on croise plus souvent tomate et mozzarella ; au nord, béchamel et fromage râpé.

    '
  source_name: Wikipedia, Lasagna
  source_url: https://en.wikipedia.org/wiki/Lasagna
- text: 'Les épinards rendent de l’eau : mal essorés, la pâte nage.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Lasagnes épinards champignons ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Lasagna
wines:
- name: Montepulciano d'Abruzzo
  producer: Cantina Tollo
  origin: Abruzzes
  grapes: montepulciano
  award:
  why: Fruit noir, tanin souple — les champignons et le fromage, sans un barolo.
- name: Soave
  producer: Cantina di Soave
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — les épinards, sans un chardonnay boisé.
- name: Côtes du Rhône
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, garrigue — le gratin de lasagnes, tanin court.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 50
      rest_min: 80
      total_min: 160
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: épinards
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
    - qty: 10
      unit: piece
      item: champignon de Paris
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
    - qty: 125
      unit: g
      item: mozzarella
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage râpé au choix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de lasagne (en fonction du plat)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la noix de muscade
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez les champignons et les échalotes. Réalisez ensuite un roux en faisant fondre
      du beurre dans une casserole, puis ajoutez la farine et laissez cuire quelques minutes
      tout en mélangeant. Laissez le roux de côté.
    - Cuisson. Faites cuire les épinards dans du beurre et assaisonnez. Dans une autre poêle huilée,
      faites suer les échalotes puis ajoutez les champignons et assaisonnez. Passez les épinards
      aux chinois pour retirer l’excès de liquide. Ajoutez progressivement le lait bouillant
      à votre roux en mélangeant pour obtenir une béchamel. Salez, poivrez, et ajoutez de
      la noix de muscade. Dans un récipient, mélangez les épinards, les champignons, le mascarpone
      et la mozzarella coupée grossièrement.
    - Finition. On va maintenant assembler les lasagnes. Versez un peu de coulis de tomate dans le fond
      de votre plat afin que les pâtes n’accrochent pas. Ajoutez ensuite une couche de pâtes,
      puis une du mélange épinards/champignons/fromage, puis une autre de béchamel. Répétez
      l’opération jusqu’à arriver en haut du plat. Finissez avec une couche de coulis de tomate,
      une de béchamel, et une de fromage râpé. Enfournez à 180° pendant 35/40 minutes. C’est
      l’heure de se régaler ! À servir bien chaud !
    steps_niveaux:
      amateur:
      - "Préparation. Découpez les champignons et les échalotes. Réalisez ensuite un roux : faites fondre du beurre dans une casserole, ajoutez la farine et laissez cuire quelques minutes tout en mélangeant. Laissez le roux de côté."
      - "Cuisson. Faites cuire les épinards dans du beurre et assaisonnez. Dans une autre poêle huilée, faites suer les échalotes, puis ajoutez les champignons et assaisonnez. Passez les épinards aux chinois pour retirer l’excès de liquide. Ajoutez progressivement le lait bouillant à votre roux en mélangeant pour obtenir une béchamel. Salez, poivrez, et ajoutez de la noix de muscade. Dans un récipient, mélangez les épinards, les champignons, le mascarpone et la mozzarella coupée grossièrement."
      - "Finition. Versez un peu de coulis de tomate dans le fond de votre plat afin que les pâtes n’accrochent pas. Ajoutez une couche de pâtes, puis une du mélange épinards, champignons et fromage, puis une autre de béchamel. Répétez jusqu’à arriver en haut du plat. Finissez avec une couche de coulis de tomate, une de béchamel, et une de fromage râpé. Enfournez à 180° pendant 35/40 minutes. Servez bien chaud."
      pro:
      - "Découper champignons et échalotes. Roux : fondre le beurre en casserole, ajouter la farine, cuire quelques minutes en mélangeant. Réserver le roux."
      - "Cuire les épinards au beurre, assaisonner. Autre poêle huilée : suer les échalotes, ajouter les champignons, assaisonner. Passer les épinards aux chinois, retirer l’excès de liquide. Incorporer progressivement le lait bouillant au roux, mélanger : béchamel. Saler, poivrer, noix de muscade. Récipient : épinards, champignons, mascarpone, mozzarella coupée grossièrement."
      - "Coulis de tomate au fond du plat. Couche de pâtes, couche mélange épinards-champignons-fromage, couche de béchamel. Répéter jusqu’en haut du plat. Terminer : coulis de tomate, béchamel, fromage râpé. Four 180°, 35/40 minutes. Servir chaud."
      cavernes:
      - "Préparation. Champignons, échalotes, découper. Roux : beurre, casserole, fondre. Farine, ajouter. Cuire quelques minutes, mélanger. Roux, côté."
      - "Cuisson. Épinards, beurre, cuire, assaisonner. Poêle huilée, échalotes, suer. Champignons, ajouter, assaisonner. Épinards, chinois, passer. Excès liquide, retirer. Lait bouillant, roux, ajouter progressivement, mélanger. Béchamel. Sel, poivre, noix muscade. Récipient : épinards, champignons, mascarpone, mozzarella coupée gros, mélanger."
      - "Finition. Coulis tomate, fond plat, verser, pâtes n’accrochent pas. Couche pâtes, couche mélange épinards champignons fromage, couche béchamel. Répéter jusqu’à haut plat. Finir coulis tomate, béchamel, fromage râpé. Four 180°, 35/40 minutes. Servir chaud."
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    - vegan
    allergens:
    - gluten
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: épinards
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
    - qty: 10
      unit: piece
      item: champignon de Paris
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
    - qty: 125
      unit: g
      item: fromage végétal
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
    - qty: 100
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: feuille de lasagne (en fonction du plat)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la noix de muscade
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez les champignons et les échalotes. Réalisez ensuite un roux en faisant fondre
      de la margarine végétale dans une casserole, puis ajoutez
      la farine et laissez cuire quelques minutes tout en mélangeant. Laissez le roux de côté.
    - Cuisson. Faites cuire les épinards dans de la margarine végétale et
      assaisonnez. Dans une autre poêle huilée, faites suer les échalotes puis ajoutez les
      champignons et assaisonnez. Passez les épinards aux chinois pour retirer l’excès de
      liquide. Ajoutez progressivement le lait d'avoine ou soja bouillant à votre roux en
      mélangeant pour obtenir une béchamel. Salez, poivrez, et ajoutez de la noix de muscade.
      Dans un récipient, mélangez les épinards, les champignons, le mascarpone végétal (cajou)
      et la fromage végétal coupée grossièrement.
    - Finition. On va maintenant assembler les lasagnes. Versez un peu de coulis de tomate dans le fond
      de votre plat afin que les pâtes n’accrochent pas. Ajoutez ensuite une couche de pâtes,
      puis une du mélange épinards/champignons/fromage végétal, puis une autre de béchamel.
      Répétez l’opération jusqu’à arriver en haut du plat. Finissez avec une couche de coulis
      de tomate, une de béchamel, et une de fromage végétal râpé. Enfournez à 180° pendant
      35/40 minutes. C’est l’heure de se régaler ! À servir bien chaud !
    steps_niveaux:
      amateur:
      - "Préparation. Découpez les champignons et les échalotes. Réalisez ensuite un roux : faites fondre de la margarine végétale dans une casserole, ajoutez la farine et laissez cuire quelques minutes tout en mélangeant. Laissez le roux de côté."
      - "Cuisson. Faites cuire les épinards dans de la margarine végétale et assaisonnez. Dans une autre poêle huilée, faites suer les échalotes, puis ajoutez les champignons et assaisonnez. Passez les épinards aux chinois pour retirer l’excès de liquide. Ajoutez progressivement le lait d’avoine ou soja bouillant à votre roux en mélangeant pour obtenir une béchamel. Salez, poivrez, et ajoutez de la noix de muscade. Dans un récipient, mélangez les épinards, les champignons, le mascarpone végétal (cajou) et le fromage végétal coupé grossièrement."
      - "Finition. Versez un peu de coulis de tomate dans le fond de votre plat afin que les pâtes n’accrochent pas. Ajoutez une couche de pâtes, puis une du mélange épinards, champignons et fromage végétal, puis une autre de béchamel. Répétez jusqu’à arriver en haut du plat. Finissez avec une couche de coulis de tomate, une de béchamel, et une de fromage végétal râpé. Enfournez à 180° pendant 35/40 minutes. Servez bien chaud."
      pro:
      - "Découper champignons et échalotes. Roux : fondre la margarine végétale en casserole, ajouter la farine, cuire quelques minutes en mélangeant. Réserver le roux."
      - "Cuire les épinards à la margarine végétale, assaisonner. Autre poêle huilée : suer les échalotes, ajouter les champignons, assaisonner. Passer les épinards aux chinois, retirer l’excès de liquide. Incorporer progressivement le lait d’avoine ou soja bouillant au roux, mélanger : béchamel. Saler, poivrer, noix de muscade. Récipient : épinards, champignons, mascarpone végétal (cajou), fromage végétal coupé grossièrement."
      - "Coulis de tomate au fond du plat. Couche de pâtes, couche mélange épinards-champignons-fromage végétal, couche de béchamel. Répéter jusqu’en haut du plat. Terminer : coulis de tomate, béchamel, fromage végétal râpé. Four 180°, 35/40 minutes. Servir chaud."
      cavernes:
      - "Préparation. Champignons, échalotes, découper. Roux : margarine végétale, casserole, fondre. Farine, ajouter. Cuire quelques minutes, mélanger. Roux, côté."
      - "Cuisson. Épinards, margarine végétale, cuire, assaisonner. Poêle huilée, échalotes, suer. Champignons, ajouter, assaisonner. Épinards, chinois, passer. Excès liquide, retirer. Lait avoine ou soja bouillant, roux, ajouter progressivement, mélanger. Béchamel. Sel, poivre, noix muscade. Récipient : épinards, champignons, mascarpone végétal cajou, fromage végétal coupé gros, mélanger."
      - "Finition. Coulis tomate, fond plat, verser, pâtes n’accrochent pas. Couche pâtes, couche mélange épinards champignons fromage végétal, couche béchamel. Répéter jusqu’à haut plat. Finir coulis tomate, béchamel, fromage végétal râpé. Four 180°, 35/40 minutes. Servir chaud."
    kcal_per_serving: 393
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Lasagnes épinards champignons

![[lasagnes-epinards-champignons.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/lasagnes-epinards-champignons]]

## Ingrédients (6 personnes)

- 1 kg d'épinards
- 2 échalote
- 10 champignon de Paris
- 250 g de mascarpone
- 125 g de mozzarella
-  fromage râpé au choix
- 10 cl de coulis de tomate
- 10 feuille de lasagne (en fonction du plat)
- 70 g de beurre
- 70 g de farine
- 80 cl de lait
-  de la noix de muscade

## Préparation

1. Découpez les champignons et les échalotes. Réalisez ensuite un roux en faisant fondre du beurre dans une casserole, puis ajoutez la farine et laissez cuire quelques minutes tout en mélangeant. Laissez le roux de côté.
2. Faites cuire les épinards dans du beurre et assaisonnez. Dans une autre poêle huilée, faites suer les échalotes puis ajoutez les champignons et assaisonnez. Passez les épinards aux chinois pour retirer l’excès de liquide. Ajoutez progressivement le lait bouillant à votre roux en mélangeant pour obtenir une béchamel. Salez, poivrez, et ajoutez de la noix de muscade. Dans un récipient, mélangez les épinards, les champignons, le mascarpone et la mozzarella coupée grossièrement.
3. On va maintenant assembler les lasagnes. Versez un peu de coulis de tomate dans le fond de votre plat afin que les pâtes n’accrochent pas. Ajoutez ensuite une couche de pâtes, puis une du mélange épinards/champignons/fromage, puis une autre de béchamel. Répétez l’opération jusqu’à arriver en haut du plat. Finissez avec une couche de coulis de tomate, une de béchamel, et une de fromage râpé. Enfournez à 180° pendant 35/40 minutes.

 
 

 
 C’est l’heure de se régaler ! À servir bien chaud !
