---
schema: recette-web-jigme/v2
slug: tortillas-mexicaine
title: Tortillas mexicaines
lang: fr
description: "Tortillas mexicaines : recette mexicaine avec farine de maïs nixtamalisée et eau chaude, pour 4 personnes. Version maison."
cuisine: mexicaine
category: salé
tags:
- salé
- tacos
- végane
- rapide
image:
  url:
  alt: Tortillas mexicaines
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tortillas-mexicaine.md
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
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
histoire: 'Tortilla mexicaine : galette de maïs (masa) ou, plus tard, de blé. Le blé arrive au XVIe s.
  avec les Espagnols ; le maïs nixtamalisé est plus ancien. Pain plat, base des tacos.

  '
fun_facts:
- text: 'Sans pressoir, une boule écrasée entre deux feuilles tient ; trop fine, elle se déchire.

    '
  source_name: Usage
  source_url: null
- text: 'Une poêle sèche, très chaude : trop d’huile, ce n’est plus une tortilla, c’est un chip.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Tortillas mexicaines ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Tortilla
wines:
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — la galette, sans un vin de garde.
- name: Rueda
  producer: José Pariente
  origin: Rueda, Castille
  grapes: verdejo
  award:
  why: Blanc d’agrumes — dès qu’il y a citron et salsa.
- name: Campo de Borja
  producer: Bodegas Borsao
  origin: Campo de Borja, Aragon
  grapes: grenache
  award:
  why: Grenache — si la tortilla porte une viande, tanin souple.
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
    allergens: &id001
    - gluten
    difficulty: 2
    time: &id002
      prep_min: 15
      cook_min: 5
      rest_min: 0
      total_min: 20
    equipment: &id003
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine de maïs nixtamalisée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: eau chaude
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans un récipient, versez la farine de maïs. Ajoutez de l’eau chaude au fur et à mesure
      et mélangez à la main jusqu’à obtention d’une pâte ayant la texture de la pâte à modeler.
    - Cuisson. Pour faire des tortillas de taille classique, divisez votre pâte en petites boules de
      40g environ. Pour faire des taquitos, divisez-la en boules de 20g.
    - 'Cuisson. Si vous avez une presse à tortillas, placez-y votre petite boule de pâte entre deux
      morceaux de plastique (film cuisson ou sachet congélation coupé en deux). Pressez…et
      c’est fait, votre tortilla est prête ! Si vous n’en n’avez pas, essayez la méthode Mc
      Gyver : placez la petite boule de pâte entre deux morceaux de plastique, puis écrasez-la
      à l’aide d’un objet assez lourd et relativement plat. Réitérez l’opération pour toutes
      les boules de pâte.'
    - Finition. Déposez une première tortilla dans une poêle très chaude, sans ajout de matière grasse.
      Une fois la première face cuite, retournez-la. Réservez dans un torchon, afin de conserver
      la chaleur, le temps de faire cuire toutes les autres tortillas. Et voilà, il ne vous
      reste plus qu’à garnir ces tortillas maison pour en faire des fajitas ! Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, versez la farine de maïs. Ajoutez de l’eau chaude au fur et à mesure et mélangez à la main jusqu’à obtention d’une pâte ayant la texture de la pâte à modeler."
      - "Cuisson. Pour des tortillas de taille classique, divisez votre pâte en petites boules de 40 g environ. Pour des taquitos, divisez-la en boules de 20 g."
      - "Cuisson. Si vous avez une presse à tortillas, placez-y votre petite boule de pâte entre deux morceaux de plastique (film cuisson ou sachet congélation coupé en deux), puis pressez. Si vous n’en avez pas, placez la petite boule de pâte entre deux morceaux de plastique, puis écrasez-la à l’aide d’un objet assez lourd et relativement plat. Réitérez l’opération pour toutes les boules de pâte."
      - "Finition. Déposez une première tortilla dans une poêle très chaude, sans ajout de matière grasse. Une fois la première face cuite, retournez-la. Réservez dans un torchon, afin de conserver la chaleur, le temps de faire cuire toutes les autres tortillas. Garnissez ces tortillas maison pour en faire des fajitas."
      pro:
      - "Dans un récipient, verser la farine de maïs. Ajouter de l’eau chaude au fur et à mesure et mélanger à la main jusqu’à une pâte de texture pâte à modeler."
      - "Pour des tortillas de taille classique, diviser la pâte en petites boules de 40 g environ. Pour des taquitos, diviser en boules de 20 g."
      - "Presse à tortillas : placer la petite boule de pâte entre deux morceaux de plastique (film cuisson ou sachet congélation coupé en deux), puis presser. Sans presse : placer la petite boule de pâte entre deux morceaux de plastique, puis écraser à l’aide d’un objet assez lourd et relativement plat. Réitérer pour toutes les boules."
      - "Déposer une première tortilla dans une poêle très chaude, sans matière grasse. Première face cuite, retourner. Réserver dans un torchon pour conserver la chaleur, le temps de cuire les autres. Garnir en fajitas."
      cavernes:
      - "Préparation. Récipient, farine maïs, verser. Eau chaude, ajouter fur et mesure. Main, mélanger. Pâte, texture pâte à modeler."
      - "Cuisson. Tortillas taille classique : pâte, petites boules 40 g. Taquitos : boules 20 g."
      - "Cuisson. Option : presse tortillas. Petite boule pâte, deux morceaux plastique (film cuisson ou sachet congélation coupé deux). Presser. Sans presse : petite boule pâte, deux morceaux plastique, objet lourd plat, écraser. Toutes boules, réitérer."
      - "Finition. Première tortilla, poêle très chaude, zéro matière grasse. Première face cuite, retourner. Torchon, réserver, chaleur. Autres tortillas, cuire. Garnir, fajitas."
    kcal_per_serving: 175
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 175
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 175
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 175
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

# Tortillas mexicaines
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tortillas-mexicaine]]

## Ingrédients (4 personnes)

- 200 g de farine de maïs nixtamalisée
- 25 cL d'eau chaude

## Préparation

1. Dans un récipient, versez la farine de maïs. Ajoutez de l’eau chaude au fur et à mesure et mélangez à la main jusqu’à obtention d’une pâte ayant la texture de la pâte à modeler.
2. Pour faire des tortillas de taille classique, divisez votre pâte en petites boules de 40g environ. Pour faire des taquitos, divisez-la en boules de 20g.
3. Si vous avez une presse à tortillas, placez-y votre petite boule de pâte entre deux morceaux de plastique (film cuisson ou sachet congélation coupé en deux). Pressez…et c’est fait, votre tortilla est prête ! Si vous n’en n’avez pas, essayez la méthode Mc Gyver : placez la petite boule de pâte entre deux morceaux de plastique, puis écrasez-la à l’aide d’un objet assez lourd et relativement plat. Réitérez l’opération pour toutes les boules de pâte.
4. Déposez une première tortilla dans une poêle très chaude, sans ajout de matière grasse. Une fois la première face cuite, retournez-la. Réservez dans un torchon, afin de conserver la chaleur, le temps de faire cuire toutes les autres tortillas.

 
 

 
 Et voilà, il ne vous reste plus qu’à garnir ces tortillas maison pour en faire des fajitas ! Bon appétit !
