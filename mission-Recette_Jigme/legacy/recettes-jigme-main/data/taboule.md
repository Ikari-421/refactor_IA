---
schema: recette-web-jigme/v2
slug: taboule
title: Taboulé
lang: fr
description: "Taboulé : recette libanaise avec semoule, concombre et tomate, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: libanaise
category: salé
tags:
- salé
- végane
- rapide
- été
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/taboule.webp
  alt: Taboulé
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/taboule.md
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
    - from: semoule
      to: quinoa (même poids, cuit puis refroidi)
      note: Taboulé de quinoa, texture plus croquante.
    note: Semoule de blé → quinoa.
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
histoire: >
  Salade d’herbes du Levant, surtout montagnes du Liban et de Syrie (plaine de la
  Bekaa). Le nom arabe *tabbūla* se rattache à l’idée d’assaisonnement. Le boulgour
  y est un liant : dans la version libanaise, persil et menthe dominent, pas la céréale.
fun_facts:
- text: >
    Dans la version levantine, le persil l’emporte largement sur le boulgour.
    Les versions occidentales inversent souvent le ratio et en font une salade de blé.
  source_name: Britannica, Tabbouleh
  source_url: https://www.britannica.com/topic/tabbouleh
- text: >
    Le citron et l’huile d’olive ne « cuisent » pas le boulgour : ils l’assaisonnent.
    Le grain a déjà cuit à la vapeur avant séchage.
  source_name: Usage levantin
  source_url: https://en.wikipedia.org/wiki/Tabbouleh
wines:
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Iodé, citron — persil, menthe et jus d’agrume du taboulé.
- name: Muscadet Sèvre-et-Maine sur lie
  producer: Domaine Pierre Luneau-Papin
  origin: Le Landreau, Loire
  grapes: melon de Bourgogne
  award:
  why: Salin, maigre — huile d’olive et tomate sans sucrosité.
- name: Blanc de Blancs
  producer: Château Ksara
  origin: Bekaa, Liban
  grapes: sauvignon, chardonnay, semillon
  award:
  why: Blanc du Levant — même terroir d’idée que la salade, frais et floral.
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
      prep_min: 15
      cook_min: 5
      rest_min: 0
      total_min: 20
    equipment: &id002
    - four
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Portez à ébullition l’eau, puis versez-la sur la semoule. Couvrez pendant 5 min avant
      d’égrainer la semoule à l’aide d’une fourchette. Ajoutez un filet d’huile d’olive, puis
      réservez.
    - Finition. Coupez vos légumes et échalotes en dés, ajoutez les à la semoule et mélangez. Pour finir,
      complétez votre taboulé avec de la menthe fraîche hachée et le jus d’un demi citron.
      Laissez reposer votre taboulé au frigo et dégustez le bien frais. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Portez à ébullition l’eau, puis versez-la sur la semoule. Couvrez pendant 5 min avant d’aérer la semoule à l’aide d’une fourchette. Ajoutez un filet d’huile d’olive, puis réservez."
      - "Finition. Coupez vos légumes et échalotes en dés, ajoutez-les à la semoule et mélangez. Pour finir, complétez votre taboulé avec de la menthe fraîche hachée et le jus d’un demi citron. Laissez reposer votre taboulé au frigo et dégustez-le bien frais."
      pro:
      - "Porter l’eau à ébullition, puis la verser sur la semoule. Couvrir 5 min, aérer la semoule à la fourchette. Ajouter un filet d’huile d’olive, réserver."
      - "Couper les légumes et échalotes en dés, les ajouter à la semoule, mélanger. Compléter de menthe fraîche hachée et du jus d’un demi citron. Reposer au frigo, déguster bien frais."
      cavernes:
      - "Préparation. Eau, ébullition. Eau, semoule, verser. 5 min, couvrir. Fourchette, semoule, aérer. Filet huile olive, ajouter. Réserver."
      - "Finition. Légumes, échalotes, dés. Semoule, ajouter, mélanger. Menthe fraîche hachée, jus demi citron, compléter. Frigo, reposer. Bien frais, déguster."
    kcal_per_serving: 117
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
    allergens:
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 117
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
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 5
      rest_min: 0
      total_min: 20
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron
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
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Portez à ébullition l’eau, puis versez-la sur la semoule. Couvrez pendant 5 min avant
      d’égrainer la semoule à l’aide d’une fourchette. Ajoutez un filet d’huile d’olive, puis
      réservez.
    - Finition. Coupez vos légumes et échalotes en dés, ajoutez les à la semoule et mélangez. Pour finir,
      complétez votre taboulé avec de la menthe fraîche hachée et le jus d’un demi citron.
      Laissez reposer votre taboulé au frigo et dégustez le bien frais. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Portez à ébullition l’eau, puis versez-la sur la semoule. Couvrez pendant 5 min avant d’aérer la semoule à l’aide d’une fourchette. Ajoutez un filet d’huile d’olive, puis réservez."
      - "Finition. Coupez vos légumes et échalotes en dés, ajoutez-les à la semoule et mélangez. Pour finir, complétez votre taboulé avec de la menthe fraîche hachée et le jus d’un demi citron. Laissez reposer votre taboulé au frigo et dégustez-le bien frais."
      pro:
      - "Porter l’eau à ébullition, puis la verser sur la semoule. Couvrir 5 min, aérer la semoule à la fourchette. Ajouter un filet d’huile d’olive, réserver."
      - "Couper les légumes et échalotes en dés, les ajouter à la semoule, mélanger. Compléter de menthe fraîche hachée et du jus d’un demi citron. Reposer au frigo, déguster bien frais."
      cavernes:
      - "Préparation. Eau, ébullition. Eau, semoule, verser. 5 min, couvrir. Fourchette, semoule, aérer. Filet huile olive, ajouter. Réserver."
      - "Finition. Légumes, échalotes, dés. Semoule, ajouter, mélanger. Menthe fraîche hachée, jus demi citron, compléter. Frigo, reposer. Bien frais, déguster."
    kcal_per_serving: 117
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
    allergens:
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 117
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Taboulé

![[taboule.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/taboule]]

## Ingrédients (4 personnes)

- 400 ml d'eau
- 300 g de semoule
- 1 concombre
- 1 tomate
- 1 poivron
- 2 échalote
- 1 citron
-  menthe fraiche

## Préparation

1. Portez à ébullition l’eau, puis versez-la sur la semoule. Couvrez  pendant 5 min avant d’égrainer la semoule à l’aide d’une fourchette. Ajoutez un filet d’huile d’olive, puis réservez.
2. Coupez vos légumes et échalotes en dés, ajoutez les à la semoule et mélangez. Pour finir, complétez votre taboulé avec de la menthe fraîche hachée et le jus d’un demi citron.

 
 

 
 Laissez reposer votre taboulé au frigo et dégustez le bien frais. Bon appétit !
