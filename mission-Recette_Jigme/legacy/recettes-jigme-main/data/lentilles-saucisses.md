---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: lentilles-saucisses
title: Lentilles saucisses
lang: fr
description: "Lentilles saucisses : recette française de lentilles vertes mijotées avec saucisses de porc, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- lentilles
- porc
- mijoté
image:
  url:
  alt: Lentilles saucisses
  credit:
source_fiche: ""
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
    note: Déjà sans produits laitiers.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œufs.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans fruits à coque.
  sans_celeri:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri listé. Vérifier un bouquet garni du commerce.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Saucisses parfois sulfitées.
house_toggle: 
house_options: []
histoire: "Les lentilles du Puy ou vertes du Berry se mijotent longtemps avec du porc : saucisses, lard, parfois jarret. Plat d’hiver, cheap et nourrissant, cousin du petit salé aux lentilles."
fun_facts:
- text: La lentille verte du Puy a une AOP ; elle cuit sans se défaire.
  source_name: "Wikipedia FR, Lentille culinaire"
  source_url: "https://fr.wikipedia.org/wiki/Lentille_culinaire"
- text: "On ne sale les lentilles qu’en fin de cuisson, sinon elles restent dures."
  source_name: "Wikipedia FR, Lentille culinaire"
  source_url: "https://fr.wikipedia.org/wiki/Lentille_culinaire"
- text: "Le petit salé aux lentilles est la version au porc demi-sel, même famille."
  source_name: "Wikipedia FR, Petit salé"
  source_url: "https://fr.wikipedia.org/wiki/Petit_sal%C3%A9"
wines:
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, poivre, tient lentilles et saucisse."
- name: Saint-Nicolas-de-Bourgueil
  producer: Yannick Amirault
  origin: "Bourgueil, Loire"
  grapes: Cabernet franc
  award: 
  why: "Poivron, tanin fin, plat de lentilles."
- name: Beaujolais-Villages
  producer: Jean-Paul Brun
  origin: Beaujolais
  grapes: Gamay
  award: 
  why: "Fruit, peu de bois, saucisse grillée."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens: []
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions:
    - from: lentilles vertes
      to: lentilles du Puy
      note: Même cuisson.
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: lentilles vertes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: saucisses de porc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lardons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carottes
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
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Rinçage. Rincez les lentilles vertes. Ne les faites pas tremper."
    - "Saucisses. Faites rissoler les saucisses de porc et les lardons, puis réservez."
    - "Légumes. Faites revenir l’oignon, les carottes et l’ail dans la cocotte."
    - "Mijotage. Ajoutez les lentilles, le bouquet garni et de l’eau à hauteur. Laissez mijoter 35 min, en remettant les saucisses pour les 15 dernières min."
    - "Finition. Salez en fin de cuisson et poivrez."
    steps_niveaux:
      amateur:
      - "Rinçage. Rincez les lentilles vertes. Ne les faites pas tremper."
      - "Saucisses. Faites rissoler les saucisses de porc et les lardons, puis réservez."
      - "Légumes. Faites revenir l’oignon, les carottes et l’ail dans la cocotte."
      - "Mijotage. Ajoutez les lentilles, le bouquet garni et de l’eau à hauteur. [[mijoter|Laissez mijoter]] 35 min, en remettant les saucisses pour les 15 dernières min."
      - "Finition. Salez en fin de cuisson et poivrez."
      pro:
      - "Rincer les lentilles vertes. Ne pas faire tremper."
      - "Rissoler les saucisses de porc et les lardons. Réserver."
      - "Faire revenir l’oignon, les carottes et l’ail dans la cocotte."
      - "Ajouter les lentilles, le bouquet garni et de l’eau à hauteur. Mijoter 35 min. Remettre les saucisses pour les 15 dernières min."
      - "Saler en fin de cuisson. Poivrer."
      cavernes:
      - "Rinçage. Lentilles vertes, rincer. Pas tremper."
      - "Saucisses. Saucisses porc, lardons, rissoler. Réserver."
      - "Légumes. Oignon, carottes, ail, revenir, cocotte."
      - "Mijotage. Lentilles, bouquet garni, eau à hauteur, ajouter. Mijoter 35 min. Saucisses, remettre, 15 dernières min."
      - "Finition. Fin cuisson, saler. Poivrer."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: lentilles vertes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: saucisses végétales
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carottes
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
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Rinçage. Rincez les lentilles vertes."
    - "Légumes. Faites revenir l’oignon, les carottes et l’ail."
    - "Mijotage. Ajoutez les lentilles, le bouquet garni et le fond de légumes, puis laissez mijoter 35 min."
    - "Saucisses. Faites poêler les saucisses végétales, puis servez-les sur les lentilles."
    steps_niveaux:
      amateur:
      - "Rinçage. Rincez les lentilles vertes."
      - "Légumes. Faites revenir l’oignon, les carottes et l’ail."
      - "Mijotage. Ajoutez les lentilles, le bouquet garni et le fond de légumes, puis [[mijoter|laissez mijoter]] 35 min."
      - "Saucisses. Faites poêler les saucisses végétales, puis servez-les sur les lentilles."
      pro:
      - "Rincer les lentilles vertes."
      - "Faire revenir l’oignon, les carottes et l’ail."
      - "Ajouter les lentilles, le bouquet garni et le fond de légumes. Mijoter 35 min."
      - "Poêler les saucisses végétales. Servir sur les lentilles."
      cavernes:
      - "Rinçage. Lentilles vertes, rincer."
      - "Légumes. Oignon, carottes, ail, revenir."
      - "Mijotage. Lentilles, bouquet garni, fond de légumes, ajouter. Mijoter 35 min."
      - "Saucisses. Saucisses végétales, poêler. Servir sur lentilles."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: lentilles vertes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: saucisses végétales
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carottes
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
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Rinçage. Rincez les lentilles vertes."
    - "Légumes. Faites revenir l’oignon, les carottes et l’ail."
    - "Mijotage. Ajoutez les lentilles, le bouquet garni et le fond de légumes, puis laissez mijoter 35 min."
    - "Saucisses. Faites poêler les saucisses végétales, puis servez-les sur les lentilles."
    steps_niveaux:
      amateur:
      - "Rinçage. Rincez les lentilles vertes."
      - "Légumes. Faites revenir l’oignon, les carottes et l’ail."
      - "Mijotage. Ajoutez les lentilles, le bouquet garni et le fond de légumes, puis [[mijoter|laissez mijoter]] 35 min."
      - "Saucisses. Faites poêler les saucisses végétales, puis servez-les sur les lentilles."
      pro:
      - "Rincer les lentilles vertes."
      - "Faire revenir l’oignon, les carottes et l’ail."
      - "Ajouter les lentilles, le bouquet garni et le fond de légumes. Mijoter 35 min."
      - "Poêler les saucisses végétales. Servir sur les lentilles."
      cavernes:
      - "Rinçage. Lentilles vertes, rincer."
      - "Légumes. Oignon, carottes, ail, revenir."
      - "Mijotage. Lentilles, bouquet garni, fond de légumes, ajouter. Mijoter 35 min."
      - "Saucisses. Saucisses végétales, poêler. Servir sur lentilles."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: lentilles vertes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: saumon fumé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carottes
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
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Rinçage. Rincez les lentilles vertes."
    - "Mijotage. Faites revenir les légumes, ajoutez les lentilles et le fond de légumes, puis laissez mijoter 35 min."
    - "Finition. Hors du feu, ajoutez le saumon fumé et laissez 2 min sous le couvercle."
    steps_niveaux:
      amateur:
      - "Rinçage. Rincez les lentilles vertes."
      - "Mijotage. Faites revenir les légumes, ajoutez les lentilles et le fond de légumes, puis [[mijoter|laissez mijoter]] 35 min."
      - "Finition. [[hors-du-feu|Hors du feu]], ajoutez le saumon fumé et laissez 2 min sous le couvercle."
      pro:
      - "Rincer les lentilles vertes."
      - "Faire revenir les légumes. Ajouter les lentilles et le fond de légumes. Mijoter 35 min."
      - "Hors du feu, ajouter le saumon fumé. Laisser 2 min sous le couvercle."
      cavernes:
      - "Rinçage. Lentilles vertes, rincer."
      - "Mijotage. Légumes, revenir. Lentilles, fond de légumes, ajouter. Mijoter 35 min."
      - "Finition. Hors feu. Saumon fumé, ajouter. 2 min sous couvercle."
    kcal_per_serving: 450
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Plat mijoté viande : 3 jours au frigo."

---

# Lentilles saucisses

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 400 g lentilles vertes
- 4 piece saucisses de porc
- 150 g lardons
- 2 piece carottes
- 1 piece oignon
- 1 gousse ail
- 1 piece bouquet garni
- 1 cas huile
- 1000 ml eau
- sel (au goût)
- poivre (au goût)

## Préparation

1. Rinçage. Rincez les lentilles vertes. Ne les faites pas tremper.
2. Saucisses. Faites rissoler les saucisses de porc et les lardons, puis réservez.
3. Légumes. Faites revenir l’oignon, les carottes et l’ail dans la cocotte.
4. Mijotage. Ajoutez les lentilles, le bouquet garni et de l’eau à hauteur. Laissez mijoter 35 min, en remettant les saucisses pour les 15 dernières min.
5. Finition. Salez en fin de cuisson et poivrez.
