---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
- ref: fouet
slug: meringues
title: Meringues
lang: fr
description: "Meringues : recette française avec blanc d'oeuf et sucre, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- végétarien
- blanc d'oeuf
image:
  url:
  alt: Meringues
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/meringues.md
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
    redirect_variant: vegan
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
histoire: 'La meringue est une préparation pâtissière très légère et très fine composée uniquement d''un
  mélange de blancs d''œufs et de sucre. Un peu d''acide peut être ajouté sous forme de citron ou d''acide
  tartrique. La meringue possède une coquille dure à l''extérieur, et un intérieur mou et savoureux. Des
  variantes existent en changeant les quantités et le type de sucre mais surtout la façon de l''incorporer
  à la masse. Source : https://fr.org/wiki/Meringue

  '
fun_facts:
- text: On raconte que, vers 1720, un pâtissier suisse nommé Gasparini aurait mis au point la meringue
    à Meiringen. Le mot apparaît déjà chez Massialot (1692), et des blancs sucrés cuits se trouvent plus
    tôt en Angleterre.
  source_name: Grokipedia, Meringue
  source_url: https://grokipedia.com/page/Meringue
- text: Carême, au XIXe siècle, popularise la poche à douille pour dresser la meringue en décor.
  source_name: Grokipedia, Meringue
  source_url: https://grokipedia.com/page/Meringue
- text: 'Pour aller plus loin : l’histoire de « Meringues ».'
  source_name: Wikipédia
  source_url: https://fr.wikipedia.org/wiki/Meringues
wines:
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — le sucre de la meringue, sans un champagne de prestige.
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — le blanc d’œuf sucré, acidité de Loire.
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: muscat
  award:
  why: Muscat perlé — la meringue, sans un vin tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - oeuf
    difficulty: 2
    time: &id002
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: blanc d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Repos. Si vos oeufs sont stockés au frigo, sortez-les un peu avant de réaliser la recette.
      Séparez les blancs des jaunes, puis placez les blancs d’oeufs dans un récipient. Ajoutez
      une pincée de sel puis fouettez-les (avec un batteur électrique, c’est plus facile).
    - Mixage. Lorsque les oeufs sont bien montés, ajoutez la moitié du sucre et fouettez de nouveau.
      Cela devrait les faire doubler de volume.
    - Cuisson. Ajoutez ensuite le reste du sucre progressivement, tout en continuant à battre les blancs
      d’oeufs. Débarrassez le mélange ainsi obtenu dans une poche à douille.
    - Cuisson. Placez une feuille de papier cuisson sur une plaque de four (vous pouvez déposez un
      tout petit peu de meringue dans les quatre coin de la plaque afin de « coller » le papier
      cuisson).
    - Cuisson. Amusez-vous à réaliser les formes et les tailles de meringues qui vous plaisent. Vous
      pouvez également ajouter un peu de pralin sur les meringues si vous aimez ça !
    - Cuisson. Enfournez le tout pendant 2h à 90°C.
    steps_niveaux:
      amateur:
      - "Repos. Si vos oeufs sont stockés au frigo, sortez-les un peu avant de réaliser la recette. Séparez les blancs des jaunes, puis placez les blancs d’oeufs dans un récipient. Ajoutez une pincée de sel puis [[monter-en-neige|montez-les en neige]] (avec un batteur électrique, c’est plus facile)."
      - "Mixage. Lorsque les oeufs sont bien montés, ajoutez la moitié du sucre et fouettez de nouveau. Cela devrait les faire doubler de volume."
      - "Cuisson. Ajoutez ensuite le reste du sucre progressivement, tout en continuant à battre les blancs d’oeufs. Débarrassez le mélange ainsi obtenu dans une poche à douille."
      - "Cuisson. Placez une feuille de papier cuisson sur une plaque de four (vous pouvez déposez un tout petit peu de meringue dans les quatre coin de la plaque afin de « coller » le papier cuisson)."
      - "Cuisson. Amusez-vous à réaliser les formes et les tailles de meringues qui vous plaisent. Vous pouvez également ajouter un peu de pralin sur les meringues si vous aimez ça !"
      - "Cuisson. Enfournez le tout pendant 2h à 90°C."
      pro:
      - "Si les œufs sont au frigo, les sortir un peu avant. Séparer les blancs des jaunes. Placer les blancs dans un récipient. Ajouter une pincée de sel. Monter en neige (batteur électrique plus facile)."
      - "Blancs bien montés : ajouter la moitié du sucre. Fouetter de nouveau. Volume qui double."
      - "Ajouter le reste du sucre progressivement, tout en battant les blancs. Débarrasser dans une poche à douille."
      - "Poser une feuille de papier cuisson sur une plaque de four. Option : un tout petit peu de meringue aux quatre coins de la plaque pour coller le papier."
      - "Former les meringues, formes et tailles au choix. Option : un peu de pralin sur les meringues."
      - "Enfourner 2 h à 90 °C."
      cavernes:
      - "Repos. Oeufs frigo : sortir, peu avant. Blancs, jaunes, séparer. Blancs, récipient. Pincée sel, ajouter. Monter neige. Batteur électrique, plus facile."
      - "Mixage. Oeufs bien montés. Moitié sucre, ajouter. Fouetter encore. Volume, doubler."
      - "Cuisson. Reste sucre, progressivement, ajouter. Blancs, battre. Poche douille, débarrasser."
      - "Cuisson. Feuille papier cuisson, plaque four. Tout petit peu meringue, quatre coin plaque, coller papier."
      - "Cuisson. Formes, tailles meringues, plaisir. Option : peu pralin, meringues."
      - "Cuisson. Four 2h 90°C."
    kcal_per_serving: 324
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 324
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
    allergens: []
    difficulty: 2
    time: *id002
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: aquafaba
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Sortez l’aquafaba (eau des pois chiches) un peu avant de réaliser la recette si elle
      était au frigo. Versez-la dans un récipient, ajoutez une pincée de sel, puis fouettez-la
      (avec un batteur électrique, c’est plus facile) jusqu’à ce qu’elle mousse fermement.
    - Mixage. Lorsque l’aquafaba est bien montée, ajoutez la moitié du sucre et fouettez de nouveau.
      Cela devrait les faire doubler de volume.
    - Mélange. Ajoutez ensuite le reste du sucre progressivement, tout en continuant à battre l’aquafaba. Débarrassez le mélange ainsi obtenu dans une poche à douille.
    - Cuisson. Placez une feuille de papier cuisson sur une plaque de four (vous pouvez déposez un
      tout petit peu de meringue dans les quatre coin de la plaque afin de « coller » le papier
      cuisson).
    - Cuisson. Amusez-vous à réaliser les formes et les tailles de meringues qui vous plaisent. Vous
      pouvez également ajouter un peu de pralin sur les meringues si vous aimez ça !
    - Cuisson. Enfournez le tout pendant 2h à 90°C.
    steps_niveaux:
      amateur:
      - "Préparation. Sortez l’aquafaba (eau des pois chiches) un peu avant de réaliser la recette si elle était au frigo. Versez-la dans un récipient, ajoutez une pincée de sel, puis [[monter-en-neige|montez-la en neige]] (avec un batteur électrique, c’est plus facile) jusqu’à ce qu’elle mousse fermement."
      - "Mixage. Lorsque l’aquafaba est bien montée, ajoutez la moitié du sucre et fouettez de nouveau. Cela devrait les faire doubler de volume."
      - "Mélange. Ajoutez ensuite le reste du sucre progressivement, tout en continuant à battre l’aquafaba. Débarrassez le mélange ainsi obtenu dans une poche à douille."
      - "Cuisson. Placez une feuille de papier cuisson sur une plaque de four (vous pouvez déposez un tout petit peu de meringue dans les quatre coin de la plaque afin de « coller » le papier cuisson)."
      - "Cuisson. Amusez-vous à réaliser les formes et les tailles de meringues qui vous plaisent. Vous pouvez également ajouter un peu de pralin sur les meringues si vous aimez ça !"
      - "Cuisson. Enfournez le tout pendant 2h à 90°C."
      pro:
      - "Si l’aquafaba (eau des pois chiches) est au frigo, la sortir un peu avant. Verser dans un récipient. Ajouter une pincée de sel. Monter en neige (batteur électrique plus facile) jusqu’à mousse ferme."
      - "Aquafaba bien montée : ajouter la moitié du sucre. Fouetter de nouveau. Volume qui double."
      - "Ajouter le reste du sucre progressivement, tout en battant l’aquafaba. Débarrasser dans une poche à douille."
      - "Poser une feuille de papier cuisson sur une plaque de four. Option : un tout petit peu de meringue aux quatre coins de la plaque pour coller le papier."
      - "Former les meringues, formes et tailles au choix. Option : un peu de pralin sur les meringues."
      - "Enfourner 2 h à 90 °C."
      cavernes:
      - "Préparation. Aquafaba, eau pois chiches. Frigo : sortir, peu avant. Récipient, verser. Pincée sel, ajouter. Monter neige. Batteur électrique, plus facile. Mousse ferme."
      - "Mixage. Aquafaba bien montée. Moitié sucre, ajouter. Fouetter encore. Volume, doubler."
      - "Mélange. Reste sucre, progressivement, ajouter. Aquafaba, battre. Poche douille, débarrasser."
      - "Cuisson. Feuille papier cuisson, plaque four. Tout petit peu meringue, quatre coin plaque, coller papier."
      - "Cuisson. Formes, tailles meringues, plaisir. Option : peu pralin, meringues."
      - "Cuisson. Four 2h 90°C."
    kcal_per_serving: 280
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 324
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: ""}
  congelation: {possible: true, duree: "2 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "4 à 7 jours", note: "Boîte hermétique."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---
