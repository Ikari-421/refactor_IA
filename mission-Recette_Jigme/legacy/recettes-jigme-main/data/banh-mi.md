---
schema: recette-web-jigme/v2
equipment: []
slug: banh-mi
title: Banh mi
lang: fr
description: "Bánh mì vietnamien : baguette, porc, pickles, coriandre, pour 4 sandwichs. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: vietnamienne
category: salé
tags:
- salé
- Vietnam
- sandwich
- porc
image:
  url:
  alt: Banh mi
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le bánh mì naît de la baguette française en Indochine, puis du sandwich de rue vietnamien : pain léger, mayonnaise, pâté, viande, daikon-carotte au vinaigre, piment, coriandre. Hô Chi Minh-Ville en a fait un emblème de street food."
fun_facts:
- text: "Bánh mì désigne d’abord le pain, puis le sandwich garni à la vietnamienne."
  source_name: "Wikipedia FR, Bánh mì"
  source_url: "https://fr.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC"
- text: Le pickle daikon-carotte (đồ chua) coupe le gras du pâté et du porc.
  source_name: "Wikipedia EN, Bánh mì"
  source_url: "https://en.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC"
- text: "La baguette coloniale, plus légère au Vietnam, sert encore de fourreau."
  source_name: "Wikipedia FR, Baguette"
  source_url: "https://fr.wikipedia.org/wiki/Baguette_(pain)"
wines:
- name: Gewurztraminer Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Gewurztraminer
  award: 
  why: "Litchi et rose, cuisine épicée."
- name: Riesling Alsace
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, coupe le gras et le sucré léger."
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: "Tavel, Rhône"
  grapes: Grenache
  award: 
  why: "Rosé de table, pizza, tapenade."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: petites baguettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: rôti de porc froid
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: pâté de campagne
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: carotte râpée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: radis blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: coriandre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment
      group: 
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Pickles. Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis laissez mariner 20 min."
    - "Pain. Fendez les petites baguettes et faites-les légèrement toaster."
    - "Montage. Garnissez de mayonnaise, de pâté de campagne, de rôti de porc froid, des légumes marinés, de coriandre et de piment."
    steps_niveaux:
      amateur:
      - "Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis [[mariner|laissez mariner]] 20 min."
      - "Fendez les petites baguettes et faites-les légèrement toaster."
      - "Garnissez de mayonnaise, de pâté de campagne, de rôti de porc froid, des légumes [[mariner|marinés]], de coriandre et de piment."
      pro:
      - "Mélanger la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre. Mariner 20 min."
      - "Fendre les petites baguettes. Toaster légèrement."
      - "Garnir de mayonnaise, de pâté de campagne, de rôti de porc froid, des légumes marinés, de coriandre et de piment."
      cavernes:
      - "Carotte râpée, radis blanc, vinaigre de riz, sucre. Mélanger. Mariner 20 min."
      - "Petites baguettes : fendre. Légèrement toaster."
      - "Mayonnaise, pâté de campagne, rôti de porc froid, légumes marinés, coriandre, piment. Garnir."
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
    - oeuf
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: petites baguettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu ferme mariné
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: houmous
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: carotte râpée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: radis blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: coriandre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pickles. Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis laissez mariner 20 min."
    - "Tofu. Faites poêler le tofu ferme mariné 6 min."
    - "Montage. Garnissez de houmous, de tofu, des légumes marinés et de coriandre."
    steps_niveaux:
      amateur:
      - "Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis [[mariner|laissez mariner]] 20 min."
      - "Faites poêler le tofu ferme mariné 6 min."
      - "Garnissez de houmous, de tofu, des légumes [[mariner|marinés]] et de coriandre."
      pro:
      - "Mélanger la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre. Mariner 20 min."
      - "Poêler le tofu ferme mariné 6 min."
      - "Garnir de houmous, de tofu, des légumes marinés et de coriandre."
      cavernes:
      - "Carotte râpée, radis blanc, vinaigre de riz, sucre. Mélanger. Mariner 20 min."
      - "Tofu ferme mariné : poêler 6 min."
      - "Houmous, tofu, légumes marinés, coriandre. Garnir."
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
    allergens:
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: petites baguettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: houmous
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: carotte râpée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: radis blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: coriandre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pickles. Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis laissez mariner 20 min."
    - "Tofu. Faites poêler le tofu ferme 6 min."
    - "Montage. Garnissez de houmous, de tofu, des légumes marinés et de coriandre."
    steps_niveaux:
      amateur:
      - "Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis [[mariner|laissez mariner]] 20 min."
      - "Faites poêler le tofu ferme 6 min."
      - "Garnissez de houmous, de tofu, des légumes [[mariner|marinés]] et de coriandre."
      pro:
      - "Mélanger la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre. Mariner 20 min."
      - "Poêler le tofu ferme 6 min."
      - "Garnir de houmous, de tofu, des légumes marinés et de coriandre."
      cavernes:
      - "Carotte râpée, radis blanc, vinaigre de riz, sucre. Mélanger. Mariner 20 min."
      - "Tofu ferme : poêler 6 min."
      - "Houmous, tofu, légumes marinés, coriandre. Garnir."
    kcal_per_serving: 520
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
    - oeuf
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: petites baguettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: filets de maquereau ou sardines
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: carotte râpée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: radis blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: coriandre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pickles. Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis laissez mariner 20 min."
    - "Poisson. Émiettez les filets de maquereau ou les sardines."
    - "Montage. Garnissez de mayonnaise, de poisson, des légumes marinés et de coriandre."
    steps_niveaux:
      amateur:
      - "Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis [[mariner|laissez mariner]] 20 min."
      - "Émiettez les filets de maquereau ou les sardines."
      - "Garnissez de mayonnaise, de poisson, des légumes [[mariner|marinés]] et de coriandre."
      pro:
      - "Mélanger la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre. Mariner 20 min."
      - "Émietter les filets de maquereau ou les sardines."
      - "Garnir de mayonnaise, de poisson, des légumes marinés et de coriandre."
      cavernes:
      - "Carotte râpée, radis blanc, vinaigre de riz, sucre. Mélanger. Mariner 20 min."
      - "Filets de maquereau ou sardines : émietter."
      - "Mayonnaise, poisson, légumes marinés, coriandre. Garnir."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
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

# Banh mi

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 4 piece petites baguettes
- 300 g rôti de porc froid
- 80 g pâté de campagne
- 150 g carotte râpée
- 150 g radis blanc
- 40 ml vinaigre de riz
- 20 g sucre
- 40 g mayonnaise
- 20 g coriandre
- 1 piece piment

## Préparation

1. Pickles. Mélangez la carotte râpée et le radis blanc avec le vinaigre de riz et le sucre, puis laissez mariner 20 min.
2. Pain. Fendez les petites baguettes et faites-les légèrement toaster.
3. Montage. Garnissez de mayonnaise, de pâté de campagne, de rôti de porc froid, des légumes marinés, de coriandre et de piment.
