---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: spaghetti-bolognaise
title: Spaghetti bolognaise
lang: fr
description: "Spaghetti et ragù de bœuf à la tomate, pour 4. Version française du plat. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- bœuf
- Italie
image:
  url:
  alt: Spaghetti bolognaise
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le ragù alla bolognese, à Bologne, se fait avec tagliatelle, pas spaghetti, et peu de tomate. Hors d’Italie, les spaghetti bolognese (viande hachée, tomate, oignon) sont devenus un plat de cantine. On reste ici sur cette version populaire, en le disant."
fun_facts:
- text: "L’Accademia Italiana della Cucina dépose un ragù aux tagliatelle, vin, peu de tomate."
  source_name: "Wikipedia FR, Sauce bolognaise"
  source_url: "https://fr.wikipedia.org/wiki/Sauce_bolognaise"
- text: Spaghetti bolognese est surtout une exportation britannique et mondiale.
  source_name: "Wikipedia EN, Bolognese sauce"
  source_url: "https://en.wikipedia.org/wiki/Bolognese_sauce"
- text: "Les spaghetti tiennent une sauce liée : trop d’eau, le ragù glisse."
  source_name: "Wikipedia FR, Spaghetti"
  source_url: "https://fr.wikipedia.org/wiki/Spaghetti"
wines:
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: "Acidité, tomate, pâtes, pecorino."
- name: "Montepulciano d'Abruzzo"
  producer: Emidio Pepe
  origin: Abruzzes
  grapes: Montepulciano
  award: 
  why: "Fruit noir, bœuf, sauce brune."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, tomate, viande, mijoté."
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
    - gluten
    - celeri
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: bœuf haché
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates concassées
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: carotte
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: céleri
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
    - qty: 100
      unit: ml
      item: vin rouge
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: parmesan
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
    - "Viande. Ajoutez le bœuf haché, faites-le colorer, puis déglacez au vin rouge."
    - "Sauce. Versez les tomates concassées et laissez mijoter 35 min. Cuisez les spaghetti al dente, liez-les à la sauce et servez avec le parmesan."
    steps_niveaux:
      amateur:
      - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Viande. Ajoutez le bœuf haché, faites-le colorer, puis [[deglacer|dégacez]] au vin rouge."
      - "Sauce. Versez les tomates concassées et [[mijoter|laissez mijoter]] 35 min. Cuisez les spaghetti [[al-dente|al dente]], liez-les à la sauce et servez avec le parmesan."
      pro:
      - "Faire revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Ajouter le bœuf haché, le faire colorer, puis déglacer au vin rouge."
      - "Verser les tomates concassées, laisser mijoter 35 min. Cuire les spaghetti al dente, lier à la sauce, servir avec le parmesan."
      cavernes:
      - "Sofrito. Oignon, carotte, céleri, 8 min, huile d’olive, revenir."
      - "Viande. Bœuf haché, ajouter, colorer. Vin rouge, déglacer."
      - "Sauce. Tomates concassées, verser. 35 min, mijoter. Spaghetti al dente, cuire. Lier sauce. Parmesan, servir."
    kcal_per_serving: 680
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
    - lactose
    - produits_laitiers
    - gluten
    - celeri
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: lentilles cuites
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates concassées
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: carotte
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: céleri
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
    - qty: 30
      unit: g
      item: parmesan
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
    - "Lentilles. Ajoutez les lentilles cuites et les tomates concassées, puis laissez mijoter 25 min."
    - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec le parmesan."
    steps_niveaux:
      amateur:
      - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Lentilles. Ajoutez les lentilles cuites et les tomates concassées, puis [[mijoter|laissez mijoter]] 25 min."
      - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec le parmesan."
      pro:
      - "Faire revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Ajouter les lentilles cuites et les tomates concassées, laisser mijoter 25 min."
      - "Cuire les spaghetti, lier à la sauce, servir avec le parmesan."
      cavernes:
      - "Sofrito. Oignon, carotte, céleri, 8 min, huile d’olive, revenir."
      - "Lentilles. Lentilles cuites, tomates concassées, ajouter. 25 min, mijoter."
      - "Pâtes. Spaghetti, cuire. Lier sauce. Parmesan, servir."
    kcal_per_serving: 590
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
    allergens:
    - gluten
    - celeri
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: lentilles cuites
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates concassées
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: carotte
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: céleri
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
    - qty: 30
      unit: g
      item: levure maltée
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
    - "Lentilles. Ajoutez les lentilles cuites et les tomates concassées, puis laissez mijoter 25 min."
    - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec la levure maltée."
    steps_niveaux:
      amateur:
      - "Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Lentilles. Ajoutez les lentilles cuites et les tomates concassées, puis [[mijoter|laissez mijoter]] 25 min."
      - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec la levure maltée."
      pro:
      - "Faire revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive."
      - "Ajouter les lentilles cuites et les tomates concassées, laisser mijoter 25 min."
      - "Cuire les spaghetti, lier à la sauce, servir avec la levure maltée."
      cavernes:
      - "Sofrito. Oignon, carotte, céleri, 8 min, huile d’olive, revenir."
      - "Lentilles. Lentilles cuites, tomates concassées, ajouter. 25 min, mijoter."
      - "Pâtes. Spaghetti, cuire. Lier sauce. Levure maltée, servir."
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: spaghetti
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: thon au naturel égoutté
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates concassées
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: oignon
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
    - qty: 30
      unit: g
      item: parmesan
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Sauce. Faites revenir l’oignon, ajoutez les tomates concassées et laissez mijoter 20 min."
    - "Thon. Hors du feu, émiettez le thon au naturel égoutté."
    - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec le parmesan."
    steps_niveaux:
      amateur:
      - "Sauce. Faites revenir l’oignon, ajoutez les tomates concassées et [[mijoter|laissez mijoter]] 20 min."
      - "Thon. [[hors-du-feu|Hors du feu]], émiettez le thon au naturel égoutté."
      - "Pâtes. Cuisez les spaghetti, liez-les à la sauce et servez avec le parmesan."
      pro:
      - "Faire revenir l’oignon, ajouter les tomates concassées, laisser mijoter 20 min."
      - "Hors du feu, émietter le thon au naturel égoutté."
      - "Cuire les spaghetti, lier à la sauce, servir avec le parmesan."
      cavernes:
      - "Sauce. Oignon, revenir. Tomates concassées, ajouter. 20 min, mijoter."
      - "Thon. Hors feu. Thon naturel égoutté, émietter."
      - "Pâtes. Spaghetti, cuire. Lier sauce. Parmesan, servir."
    kcal_per_serving: 610
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
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
  a_verifier: false
  note_verif: ""

---

# Spaghetti bolognaise

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 400 g spaghetti
- 400 g bœuf haché
- 400 g tomates concassées
- 80 g oignon
- 80 g carotte
- 40 g céleri
- 20 ml huile d'olive
- 100 ml vin rouge
- 30 g parmesan

## Préparation

1. Sofrito. Faites revenir l’oignon, la carotte et le céleri 8 min dans l’huile d’olive.
2. Viande. Ajoutez le bœuf haché, faites-le colorer, puis déglacez au vin rouge.
3. Sauce. Versez les tomates concassées et laissez mijoter 35 min. Cuisez les spaghetti al dente, liez-les à la sauce et servez avec le parmesan.
