---
schema: recette-web-jigme/v2
slug: penne-allarrabbiata
title: Penne all'arrabbiata
lang: fr
description: "Penne all'arrabbiata : recette italienne avec penne, gousse d'ail et petite tomate, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- végane
- penne
image:
  url:
  alt: Penne all'arrabbiata
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/penne-allarrabbiata.md
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
    - from: penne
      to: pâtes sans gluten
      note:
    note: 'Gluten : penne → pâtes sans gluten.'
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
histoire: 'Salsa all’arrabbiata : tomate, ail, piment, « en colère » à cause du piment. Rome, Latium.
  Une source la fait émerger vers les années 1920 — le siècle, pas une année. Les penne tiennent la sauce
  dans les tubes.

  '
fun_facts:
- text: >
    Le piment sèche (peperoncino) infuse dans l’huile avant la tomate : trop tard,
    il reste en grains.
  source_name: Grokipedia, Arrabbiata sauce
  source_url: https://grokipedia.com/page/Arrabbiata_sauce
- text: >
    Pas de crème : l’arrabbiata est une tomate pimentée, pas une rosa.
  source_name: Usage
  source_url:
wines:
- name: Chianti
  producer: Cecchi
  origin: Chianti, Toscane
  grapes: sangiovese
  award:
  why: Cerise, tanin vif — la tomate et le piment.
- name: Montepulciano d'Abruzzo
  producer: Farnese
  origin: Abruzzes
  grapes: montepulciano
  award:
  why: Fruit noir, tanin souple — les penne, sans un barolo.
- name: Frascati
  producer: Fontana Candida
  origin: Frascati, Latium
  grapes: malvasia, trebbiano
  award:
  why: Blanc de Rome — voisin de l’arrabbiata, coupe le piment.
variants:
  traditionnelle:
    label: Traditionnelle
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
    time: &id001
      prep_min: 25
      cook_min: 15
      rest_min: 0
      total_min: 40
    equipment: &id002
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: penne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: petite tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tomates concassées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil
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
    steps:
    - Cuisson. Faites cuire vos pâtes à l’eau. Pendant ce temps, épluchez les gousses d’ail et coupez
      le piment et les tomates en morceaux.
    - Cuisson. Dans une poêle, laissez chauffer les gousses d’ail entières dans beaucoup d’huile. Une
      fois colorées, sortez-les de la poêle et baissez le feu.
    - Cuisson. Dans la même huile de cuisson, ajoutez le piment, les tomates fraîches et les tomates
      concassées. Assaisonnez de sel et de poivre et rajoutez un peu de sucre pour réguler
      l’acidité de la tomate. Coupez finement les gousses d’ail et ajoutez-les à la préparation.
      Mélangez et laissez cuire à feu moyen.
    - Finition. Lorsque vos pâtes sont cuites et égouttées, incorporez-les dans la sauce. Ajoutez-y
      du persil haché ainsi que du fromage végétal ou de la levure maltée et mélangez. C’est super simple et rapide à faire
      ! D’ailleurs si vous êtes étudiant, cette recette est très peu onéreuse et devrait réveiller
      vos papilles !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire vos pâtes à l’eau. Pendant ce temps, épluchez les gousses d’ail et coupez le piment et les tomates en morceaux."
      - "Cuisson. Dans une poêle, laissez chauffer les gousses d’ail entières dans beaucoup d’huile. Une fois colorées, sortez-les de la poêle et baissez le feu."
      - "Cuisson. Dans la même huile de cuisson, ajoutez le piment, les tomates fraîches et les tomates concassées. Assaisonnez de sel et de poivre et rajoutez un peu de sucre pour réguler l’acidité de la tomate. Coupez finement les gousses d’ail et ajoutez-les à la préparation. Mélangez et laissez cuire à feu moyen."
      - "Finition. Lorsque vos pâtes sont cuites et égouttées, incorporez-les dans la sauce. Ajoutez-y du persil haché ainsi que du fromage végétal ou de la levure maltée et mélangez."
      pro:
      - "Cuire les pâtes à l’eau. Éplucher les gousses d’ail. Couper le piment et les tomates en morceaux."
      - "Chauffer les gousses d’ail entières dans beaucoup d’huile. Une fois colorées, les sortir de la poêle. Baisser le feu."
      - "Dans la même huile, ajouter le piment, les tomates fraîches et les tomates concassées. Assaisonner de sel et de poivre. Ajouter un peu de sucre pour réguler l’acidité de la tomate. Couper finement les gousses d’ail et les ajouter. Mélanger. Cuire à feu moyen."
      - "Incorporer les pâtes cuites et égouttées dans la sauce. Ajouter le persil haché et le fromage végétal ou la levure maltée. Mélanger."
      cavernes:
      - "Cuisson. Pâtes, eau, cuire. Pendant, gousses ail, éplucher. Piment, tomates, morceaux."
      - "Cuisson. Poêle. Gousses ail entières, beaucoup huile, chauffer. Colorées, sortir poêle. Baisser feu."
      - "Cuisson. Même huile. Piment, tomates fraîches, tomates concassées, ajouter. Sel, poivre, assaisonner. Peu sucre, acidité tomate. Gousses ail, couper finement, ajouter. Mélanger. Feu moyen, cuire."
      - "Finition. Pâtes cuites, égouttées, sauce, incorporer. Persil haché, fromage végétal ou levure maltée, ajouter. Mélanger."
    kcal_per_serving: 97
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
    - vegan
    - pesco
    allergens: &id003 []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 97
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 15
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: penne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: petite tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tomates concassées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil
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
    steps:
    - Cuisson. Faites cuire vos pâtes à l’eau. Pendant ce temps, épluchez les gousses d’ail et coupez
      le piment et les tomates en morceaux.
    - Cuisson. Dans une poêle, laissez chauffer les gousses d’ail entières dans beaucoup d’huile. Une
      fois colorées, sortez-les de la poêle et baissez le feu.
    - Cuisson. Dans la même huile de cuisson, ajoutez le piment, les tomates fraîches et les tomates
      concassées. Assaisonnez de sel et de poivre et rajoutez un peu de sucre pour réguler
      l’acidité de la tomate. Coupez finement les gousses d’ail et ajoutez-les à la préparation.
      Mélangez et laissez cuire à feu moyen.
    - Finition. Lorsque vos pâtes sont cuites et égouttées, incorporez-les dans la sauce. Ajoutez-y
      du persil haché ainsi que du fromage végétal ou de la levure maltée et mélangez. C’est super simple et rapide à faire
      ! D’ailleurs si vous êtes étudiant, cette recette est très peu onéreuse et devrait réveiller
      vos papilles !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire vos pâtes à l’eau. Pendant ce temps, épluchez les gousses d’ail et coupez le piment et les tomates en morceaux."
      - "Cuisson. Dans une poêle, laissez chauffer les gousses d’ail entières dans beaucoup d’huile. Une fois colorées, sortez-les de la poêle et baissez le feu."
      - "Cuisson. Dans la même huile de cuisson, ajoutez le piment, les tomates fraîches et les tomates concassées. Assaisonnez de sel et de poivre et rajoutez un peu de sucre pour réguler l’acidité de la tomate. Coupez finement les gousses d’ail et ajoutez-les à la préparation. Mélangez et laissez cuire à feu moyen."
      - "Finition. Lorsque vos pâtes sont cuites et égouttées, incorporez-les dans la sauce. Ajoutez-y du persil haché ainsi que du fromage végétal ou de la levure maltée et mélangez."
      pro:
      - "Cuire les pâtes à l’eau. Éplucher les gousses d’ail. Couper le piment et les tomates en morceaux."
      - "Chauffer les gousses d’ail entières dans beaucoup d’huile. Une fois colorées, les sortir de la poêle. Baisser le feu."
      - "Dans la même huile, ajouter le piment, les tomates fraîches et les tomates concassées. Assaisonner de sel et de poivre. Ajouter un peu de sucre pour réguler l’acidité de la tomate. Couper finement les gousses d’ail et les ajouter. Mélanger. Cuire à feu moyen."
      - "Incorporer les pâtes cuites et égouttées dans la sauce. Ajouter le persil haché et le fromage végétal ou la levure maltée. Mélanger."
      cavernes:
      - "Cuisson. Pâtes, eau, cuire. Pendant, gousses ail, éplucher. Piment, tomates, morceaux."
      - "Cuisson. Poêle. Gousses ail entières, beaucoup huile, chauffer. Colorées, sortir poêle. Baisser feu."
      - "Cuisson. Même huile. Piment, tomates fraîches, tomates concassées, ajouter. Sel, poivre, assaisonner. Peu sucre, acidité tomate. Gousses ail, couper finement, ajouter. Mélanger. Feu moyen, cuire."
      - "Finition. Pâtes cuites, égouttées, sauce, incorporer. Persil haché, fromage végétal ou levure maltée, ajouter. Mélanger."
    kcal_per_serving: 97
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
    - vegan
    - pesco
    allergens: *id003
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 97
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

# Penne all'arrabbiata
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/penne-allarrabbiata]]

## Ingrédients (4 personnes)

- 500 g de penne
- 2 gousse d'ail
- 3 petite tomate
- 100 g de tomates concassées
- 1 piment
-  persil
-  huile d'olive

## Préparation

1. Faites cuire vos pâtes à l’eau. Pendant ce temps, épluchez les gousses d’ail et coupez le piment et les tomates en morceaux.
2. Dans une poêle, laissez chauffer les gousses d’ail entières dans beaucoup d’huile. Une fois colorées, sortez-les de la poêle et baissez le feu.
3. Dans la même huile de cuisson, ajoutez le piment, les tomates fraîches et les tomates concassées. Assaisonnez de sel et de poivre et rajoutez un peu de sucre pour réguler l’acidité de la tomate. Coupez finement les gousses d’ail et ajoutez-les à la préparation. Mélangez et laissez cuire à feu moyen.
4. Lorsque vos pâtes sont cuites et égouttées, incorporez-les dans la sauce. Ajoutez-y du persil haché ainsi que du fromage et mélangez.

 
 

 
 C’est super simple et rapide à faire ! D’ailleurs si vous êtes étudiant, cette recette est très peu onéreuse et devrait réveiller vos papilles !
