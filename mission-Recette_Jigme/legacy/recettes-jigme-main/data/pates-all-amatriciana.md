---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: pates-all-amatriciana
title: "Pâtes all'amatriciana"
lang: fr
description: "Pâtes all'amatriciana : recette du Latium avec guanciale, tomate pelée et pecorino, pour 4 personnes. Facile à suivre à la maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- tomate
- porc
- Latium
image:
  url:
  alt: "Pâtes all'amatriciana"
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
    - from: bucatini ou spaghetti
      to: pâtes sans gluten
      note: Même poids à sec.
    note: "Pâtes de blé → pâtes sans gluten, même poids à sec."
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Pecorino affiné, lactose souvent bas ; couche lait plus stricte."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps:
    - from: pecorino
      to: sel
      note: Sans fromage.
    note: "Retirer le pecorino, saler davantage."
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
histoire: "Plat de pasta du Latium, lié à Amatrice. Sauce tomate, guanciale, pecorino, piment. Bucatini fréquents ; spaghetti ou rigatoni aussi. Le lard d’Amatrice n’est pas de la pancetta ordinaire."
fun_facts:
- text: "Amatriciana vient d’Amatrice, dans le Latium, pas de Rome au départ."
  source_name: "Wikipedia FR, Bucatini all'amatriciana"
  source_url: "https://fr.wikipedia.org/wiki/Bucatini_all%27amatriciana"
- text: Le pecorino romano salé tient le gras du guanciale ; le parmesan n’est pas le fromage du plat.
  source_name: "Wikipedia FR, Bucatini all'amatriciana"
  source_url: "https://fr.wikipedia.org/wiki/Bucatini_all%27amatriciana"
- text: La sauce se cuit sans oignon dans les versions d’Amatrice les plus strictes.
  source_name: "Wikipedia EN, Amatriciana sauce"
  source_url: "https://en.wikipedia.org/wiki/Amatriciana_sauce"
wines:
- name: Cesanese del Piglio
  producer: Casale della Ioria
  origin: "Piglio, Latium"
  grapes: Cesanese
  award: 
  why: "Rouge local, fruit et tanin souple, tient tomate et guanciale."
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: "Acidité du sangiovese sur la tomate, tanin sur le gras du lard."
- name: "Montepulciano d'Abruzzo"
  producer: Emidio Pepe
  origin: Abruzzes
  grapes: Montepulciano
  award: 
  why: "Fruit noir et structure, voisin de cuisine du centre de l’Italie."
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
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    - grande casserole
    - râpe
    substitutions:
    - from: guanciale
      to: pancetta
      note: Moins typique.
    - from: bucatini
      to: spaghetti
      note: Même sauce.
    scale_note: Le sel du pecorino et du guanciale ne se multiplie pas linéairement.
    ingredients:
    - qty: 400
      unit: g
      item: bucatini ou spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: guanciale
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
    - qty: 60
      unit: g
      item: pecorino romano râpé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment sec
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
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
    steps:
    - "Pâtes. Portez une grande eau salée à ébullition."
    - "Guanciale. Taillez-le en lardons. Faites rissoler à feu moyen jusqu’à ce qu’il dore."
    - "Sauce. Ajoutez le piment et les tomates pelées. Laissez mijoter 10 à 12 min."
    - "Cuisson. Faites cuire les pâtes al dente, puis liez-les dans la sauce avec un peu d’eau de cuisson."
    - "Finition. Hors du feu, ajoutez le pecorino et le poivre. Servez tout de suite."
    steps_niveaux:
      amateur:
      - "Pâtes. Portez une grande eau salée à ébullition."
      - "Guanciale. Taillez-le en lardons. Faites rissoler à feu moyen jusqu’à ce qu’il dore."
      - "Sauce. Ajoutez le piment et les tomates pelées. [[mijoter|Laissez mijoter]] 10 à 12 min."
      - "Cuisson. Faites cuire les pâtes [[al-dente|al dente]], puis liez-les dans la sauce avec un peu d’eau de cuisson."
      - "Finition. [[hors-du-feu|Hors du feu]], ajoutez le pecorino et le poivre. Servez tout de suite."
      pro:
      - "Porter une grande eau salée à ébullition."
      - "Tailler le guanciale en lardons. Rissoler à feu moyen jusqu’à coloration."
      - "Ajouter le piment et les tomates pelées. Mijoter 10 à 12 min."
      - "Cuire les pâtes al dente. Lier dans la sauce avec un peu d’eau de cuisson."
      - "Hors du feu, ajouter le pecorino et le poivre. Servir aussitôt."
      cavernes:
      - "Pâtes. Grande eau salée, ébullition."
      - "Guanciale. Lardons, tailler. Feu moyen, rissoler jusqu’à dorer."
      - "Sauce. Piment, tomates pelées, ajouter. Mijoter 10 à 12 min."
      - "Cuisson. Pâtes al dente. Lier sauce, peu eau cuisson."
      - "Finition. Hors feu. Pecorino, poivre, ajouter. Servir tout de suite."
    kcal_per_serving: 620
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
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    - grande casserole
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: bucatini ou spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons de Paris
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
    - qty: 60
      unit: g
      item: pecorino romano râpé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment sec
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: paprika fumé
      group: 
      scale: false
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
    - "Pâtes. Portez une eau salée à ébullition."
    - "Champignons. Émincez-les, puis faites-les rissoler dans l’huile avec le paprika fumé."
    - "Sauce. Ajoutez les tomates pelées et le piment, puis laissez mijoter 10 à 12 min."
    - "Cuisson. Ajoutez les pâtes al dente dans la sauce."
    - "Finition. Hors du feu, ajoutez le pecorino et le poivre."
    steps_niveaux:
      amateur:
      - "Pâtes. Portez une eau salée à ébullition."
      - "Champignons. Émincez-les, puis faites-les rissoler dans l’huile avec le paprika fumé."
      - "Sauce. Ajoutez les tomates pelées et le piment, puis [[mijoter|laissez mijoter]] 10 à 12 min."
      - "Cuisson. Ajoutez les pâtes [[al-dente|al dente]] dans la sauce."
      - "Finition. [[hors-du-feu|Hors du feu]], ajoutez le pecorino et le poivre."
      pro:
      - "Porter une eau salée à ébullition."
      - "Émincer les champignons. Rissoler dans l’huile avec le paprika fumé."
      - "Ajouter les tomates pelées et le piment. Mijoter 10 à 12 min."
      - "Ajouter les pâtes al dente dans la sauce."
      - "Hors du feu, ajouter le pecorino et le poivre."
      cavernes:
      - "Pâtes. Eau salée, ébullition."
      - "Champignons. Émincer. Huile, paprika fumé, rissoler."
      - "Sauce. Tomates pelées, piment, ajouter. Mijoter 10 à 12 min."
      - "Cuisson. Pâtes al dente, sauce, ajouter."
      - "Finition. Hors feu. Pecorino, poivre, ajouter."
    kcal_per_serving: 540
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
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    - grande casserole
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: bucatini ou spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons de Paris
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
    - qty: 3
      unit: cas
      item: levure maltée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment sec
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: paprika fumé
      group: 
      scale: false
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
    - "Pâtes. Portez une eau salée à ébullition."
    - "Champignons. Faites-les rissoler dans l’huile avec le paprika fumé."
    - "Sauce. Ajoutez les tomates pelées et le piment, puis laissez mijoter 10 à 12 min."
    - "Cuisson. Ajoutez les pâtes al dente dans la sauce."
    - "Finition. Hors du feu, ajoutez la levure maltée et le poivre."
    steps_niveaux:
      amateur:
      - "Pâtes. Portez une eau salée à ébullition."
      - "Champignons. Faites-les rissoler dans l’huile avec le paprika fumé."
      - "Sauce. Ajoutez les tomates pelées et le piment, puis [[mijoter|laissez mijoter]] 10 à 12 min."
      - "Cuisson. Ajoutez les pâtes [[al-dente|al dente]] dans la sauce."
      - "Finition. [[hors-du-feu|Hors du feu]], ajoutez la levure maltée et le poivre."
      pro:
      - "Porter une eau salée à ébullition."
      - "Rissoler les champignons dans l’huile avec le paprika fumé."
      - "Ajouter les tomates pelées et le piment. Mijoter 10 à 12 min."
      - "Ajouter les pâtes al dente dans la sauce."
      - "Hors du feu, ajouter la levure maltée et le poivre."
      cavernes:
      - "Pâtes. Eau salée, ébullition."
      - "Champignons. Huile, paprika fumé, rissoler."
      - "Sauce. Tomates pelées, piment, ajouter. Mijoter 10 à 12 min."
      - "Cuisson. Pâtes al dente, sauce, ajouter."
      - "Finition. Hors feu. Levure maltée, poivre, ajouter."
    kcal_per_serving: 510
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
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    - grande casserole
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: bucatini ou spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: "anchois à l'huile"
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
    - qty: 60
      unit: g
      item: pecorino romano râpé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment sec
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
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
    steps:
    - "Pâtes. Portez une eau salée à ébullition."
    - "Anchois. Faites-les fondre à feu doux dans l’huile."
    - "Sauce. Ajoutez les tomates pelées et le piment, puis laissez mijoter 10 à 12 min."
    - "Cuisson. Ajoutez les pâtes al dente dans la sauce."
    - "Finition. Hors du feu, ajoutez le pecorino."
    steps_niveaux:
      amateur:
      - "Pâtes. Portez une eau salée à ébullition."
      - "Anchois. Faites-les fondre à feu doux dans l’huile."
      - "Sauce. Ajoutez les tomates pelées et le piment, puis [[mijoter|laissez mijoter]] 10 à 12 min."
      - "Cuisson. Ajoutez les pâtes [[al-dente|al dente]] dans la sauce."
      - "Finition. [[hors-du-feu|Hors du feu]], ajoutez le pecorino."
      pro:
      - "Porter une eau salée à ébullition."
      - "Faire fondre les anchois à feu doux dans l’huile."
      - "Ajouter les tomates pelées et le piment. Mijoter 10 à 12 min."
      - "Ajouter les pâtes al dente dans la sauce."
      - "Hors du feu, ajouter le pecorino."
      cavernes:
      - "Pâtes. Eau salée, ébullition."
      - "Anchois. Feu doux, huile, fondre."
      - "Sauce. Tomates pelées, piment, ajouter. Mijoter 10 à 12 min."
      - "Cuisson. Pâtes al dente, sauce, ajouter."
      - "Finition. Hors feu. Pecorino, ajouter."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
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
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Pâtes all'amatriciana

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 400 g bucatini ou spaghetti
- 140 g guanciale
- 400 g tomates pelées
- 60 g pecorino romano râpé
- 1 piece piment sec
- 1 cas huile d'olive
- sel (au goût)
- poivre (au goût)

## Préparation

1. Pâtes. Portez une grande eau salée à ébullition.
2. Guanciale. Taillez-le en lardons. Faites rissoler à feu moyen jusqu’à ce qu’il dore.
3. Sauce. Ajoutez le piment et les tomates pelées. Laissez mijoter 10 à 12 min.
4. Cuisson. Faites cuire les pâtes al dente, puis liez-les dans la sauce avec un peu d’eau de cuisson.
5. Finition. Hors du feu, ajoutez le pecorino et le poivre. Servez tout de suite.
