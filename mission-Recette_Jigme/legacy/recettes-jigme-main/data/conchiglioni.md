---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: conchiglioni
title: Conchiglioni
lang: fr
description: "Conchiglioni : recette italienne de grandes pâtes farcies à la ricotta et aux épinards, pour 4 personnes. Facile à suivre à la maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- ricotta
- four
image:
  url:
  alt: Conchiglioni
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps:
    - from: conchiglioni
      to: coquilles sans gluten
      note: Même farce.
    note: Pâtes de blé → conchiglioni ou coquilles sans gluten.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Les conchiglie sont des pâtes en coquille. Les grandes, conchiglioni, se farcissent puis se gratinent au four, souvent ricotta et épinards, nappées de tomate."
fun_facts:
- text: Conchiglie veut dire coquilles ; les conchiglioni sont le grand format à farcir.
  source_name: "Wikipedia FR, Conchiglie"
  source_url: "https://fr.wikipedia.org/wiki/Conchiglie"
- text: "La ridule de la pâte retient la sauce, d’où le gratin tomate-fromage."
  source_name: "Wikipedia FR, Conchiglie"
  source_url: "https://fr.wikipedia.org/wiki/Conchiglie"
- text: "Les épinards se dessèchent à la poêle avant la farce, sinon le gratin rend de l’eau."
  source_name: "Wikipedia FR, Épinard"
  source_url: "https://fr.wikipedia.org/wiki/%C3%89pinard"
wines:
- name: "Barbera d'Asti"
  producer: Vietti
  origin: Piémont
  grapes: Barbera
  award: 
  why: Acidité du barbera sur la tomate et la ricotta.
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: "Tomate, four, fromage."
- name: "Montepulciano d'Abruzzo"
  producer: Emidio Pepe
  origin: Abruzzes
  grapes: Montepulciano
  award: 
  why: Fruit et tanin souple sur le gratin.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - casserole
    - plat à gratin
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: conchiglioni
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: ricotta
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: épinards
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: parmesan râpé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates pelées
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
      item: œuf
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: "huile d'olive"
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
    - qty: 
      unit: 
      item: noix de muscade
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pâtes. Faites cuire les conchiglioni très al dente. Égouttez-les."
    - "Farce. Faites tomber les épinards, essorez-les, puis mélangez-les à la ricotta, à l’œuf, au parmesan et à la muscade."
    - "Sauce. Faites revenir l’ail, ajoutez les tomates pelées et laissez mijoter 15 min."
    - "Montage. Farcez les conchiglioni, nappez de sauce et enfournez 25 min à 180 °C."
    - "Finition. Laissez reposer 5 min avant de servir."
    steps_niveaux:
      amateur:
      - "Pâtes. Faites cuire les conchiglioni très [[al-dente|al dente]]. Égouttez-les."
      - "Farce. Faites tomber les épinards, essorez-les, puis mélangez-les à la ricotta, à l’œuf, au parmesan et à la muscade."
      - "Sauce. Faites revenir l’ail, ajoutez les tomates pelées et [[mijoter|laissez mijoter]] 15 min."
      - "Montage. Farcez les conchiglioni, [[napper|nappez]] de sauce et enfournez 25 min à 180 °C."
      - "Finition. Laissez reposer 5 min avant de servir."
      pro:
      - "Cuire les conchiglioni très al dente. Égoutter."
      - "Faire tomber les épinards, essorer. Mélanger ricotta, œuf, parmesan, muscade."
      - "Faire revenir l’ail. Ajouter les tomates pelées. Mijoter 15 min."
      - "Farcir les conchiglioni, napper de sauce. Enfourner 25 min à 180 °C."
      - "Laisser reposer 5 min. Servir."
      cavernes:
      - "Pâtes. Conchiglioni, cuire très al dente. Égoutter."
      - "Farce. Épinards, tomber, essorer. Mélanger ricotta, œuf, parmesan, muscade."
      - "Sauce. Ail, revenir. Tomates pelées, mijoter 15 min."
      - "Montage. Conchiglioni, farcer. Sauce, napper. Four 180 °C 25 min."
      - "Finition. Reposer 5 min. Servir."
    kcal_per_serving: 610
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 610
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
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - casserole
    - plat à gratin
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: conchiglioni
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tofu soyeux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: épinards
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: levure maltée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates pelées
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
    - qty: 20
      unit: ml
      item: "huile d'olive"
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
    - qty: 
      unit: 
      item: noix de muscade
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pâtes. Faites cuire les conchiglioni très al dente."
    - "Farce. Essorez les épinards, mélangez-les au tofu soyeux, à la levure maltée et à la muscade."
    - "Sauce. Faites mijoter les tomates pelées avec l’ail 15 min."
    - "Montage. Farcez, nappez et enfournez 25 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Pâtes. Faites cuire les conchiglioni très [[al-dente|al dente]]."
      - "Farce. Essorez les épinards, mélangez-les au tofu soyeux, à la levure maltée et à la muscade."
      - "Sauce. Faites [[mijoter|mijoter]] les tomates pelées avec l’ail 15 min."
      - "Montage. Farcez, [[napper|nappez]] et enfournez 25 min à 180 °C."
      pro:
      - "Cuire les conchiglioni très al dente."
      - "Essorer les épinards. Mélanger tofu soyeux, levure maltée, muscade."
      - "Mijoter les tomates pelées avec l’ail 15 min."
      - "Farcir, napper. Enfourner 25 min à 180 °C."
      cavernes:
      - "Pâtes. Conchiglioni, cuire très al dente."
      - "Farce. Épinards, essorer. Mélanger tofu soyeux, levure maltée, muscade."
      - "Sauce. Tomates pelées ail, mijoter 15 min."
      - "Montage. Farcer, napper. Four 180 °C 25 min."
    kcal_per_serving: 540
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
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
    - oeuf
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 610
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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
  a_verifier: false
  note_verif: ""

---

# Conchiglioni

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 300 g conchiglioni
- 400 g ricotta
- 300 g épinards
- 80 g parmesan râpé
- 400 g tomates pelées
- 1 gousse ail
- 1 piece œuf
- 20 ml huile d'olive
- sel (au goût)
- poivre (au goût)
- noix de muscade (au goût)

## Préparation

1. Pâtes. Faites cuire les conchiglioni très al dente. Égouttez-les.
2. Farce. Faites tomber les épinards, essorez-les, puis mélangez-les à la ricotta, à l’œuf, au parmesan et à la muscade.
3. Sauce. Faites revenir l’ail, ajoutez les tomates pelées et laissez mijoter 15 min.
4. Montage. Farcez les conchiglioni, nappez de sauce et enfournez 25 min à 180 °C.
5. Finition. Laissez reposer 5 min avant de servir.
