---
schema: recette-web-jigme/v2
slug: tarte-legumes-ete
title: Tarte légumes d'été
lang: fr
description: "Tarte légumes d'été : recette française avec pâte feuilletée, aubergine blanche et aubergine \"classique\", pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- tarte
- légumes
- été
image:
  url:
  alt: Tarte légumes d'été
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-legumes-ete.md
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
histoire: >
  Aubergine, courgette et tomate forment le trio de l’été méditerranéen, celui de
  la ratatouille et du tian provençal. Le tian, d’abord, c’est le plat : large, peu
  profond, en terre vernissée, qui a donné son nom au gratin de légumes. Les poser
  sur une pâte, c’est en faire une tarte de jardin, à servir tiède ou froide —
  un plat d’été de Provence et d’ailleurs, pas une AOC. L’aubergine se rissole :
  crue, elle reste éponge et noie le fond.
fun_facts:
- text: >
    L’aubergine se rissole : crue, elle reste éponge et noie le fond.
  source_name: Usage
  source_url:
- text: >
    Huile d’olive et herbes rapprochent d’un tian ; la pâte en fait une tarte.
  source_name: Usage
  source_url:
wines:
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé de Provence — l’été, voisin d’herbes.
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: Tavel, Rhône
  grapes: grenache
  award:
  why: Rosé de saignée — l’aubergine et la tomate, plus de corps.
- name: Cassis
  producer: Clos Sainte-Magdeleine
  origin: Cassis, Provence
  grapes: marsanne, clairette
  award:
  why: Blanc de Provence — si l’on veut un blanc, sel et herbes.
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
    - gluten
    difficulty: 2
    time: &id002
      prep_min: 60
      cook_min: 45
      rest_min: 0
      total_min: 105
    equipment: &id003
    - four
    - casserole
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine blanche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine "classique"
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. À l’aide d’un couteau, retirez le pédoncule des tomates et incisez la partie opposée
      (n’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous si nécessaire). Plongez
      les tomates dans une grande casserole d’eau bouillante pendant 30 secondes puis transvasez-les
      dans de l’eau glacée. La peau devrait se retirer très facilement suite à cette opération.
    - Cuisson. Découpez les tomates en dés et hachez une gousse d’ail. Faites revenir le tout dans
      une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélangez
      et laissez mijoter
    - Cuisson. Pendant ce temps, découpez les aubergines (idéalement de couleur différente, le rendu
      sera plus joli) et les courgettes en demi-rondelles.
    - Cuisson. Foncez un moule à tarte avec une pâte feuilletée ou brisée (c’est vous qui choisissez).
      Recouvrez-la d’une généreuse couche de concassé de tomates.
    - Cuisson. Passez maintenant au montage de la tarte. Pour un résultat comme celui de Patrick, disposez
      les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrez avec un peu de
      thym et un filet d’huile d’olive.
    - Cuisson. Enfournez le tout à 180°C pendant environ 30 minutes. Dégustez une généreuse part de
      cette tarte aux légumes d’été chaude ou froide, seule ou avec une petite salade pour
      l’accompagner. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. À l’aide d’un couteau, retirez le pédoncule des tomates et incisez la partie opposée. [[monder|Mondez]] les tomates : plongez-les dans une grande casserole d’eau bouillante pendant 30 secondes puis transvasez-les dans de l’eau glacée. La peau devrait se retirer très facilement suite à cette opération."
      - "Cuisson. Découpez les tomates en dés et hachez une gousse d’ail. Faites revenir le tout dans une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélangez et [[mijoter|laissez mijoter]]."
      - "Cuisson. Pendant ce temps, découpez les aubergines (idéalement de couleur différente, le rendu sera plus joli) et les courgettes en demi-rondelles."
      - "Cuisson. [[foncer|Foncez]] un moule à tarte avec une pâte feuilletée ou brisée (c’est vous qui choisissez). Recouvrez-la d’une généreuse couche de concassé de tomates."
      - "Cuisson. Passez maintenant au montage de la tarte. Disposez les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrez avec un peu de thym et un filet d’huile d’olive."
      - "Cuisson. Enfournez le tout à 180°C pendant environ 30 minutes. Dégustez chaude ou froide, seule ou avec une petite salade."
      pro:
      - "Retirer le pédoncule des tomates au couteau et inciser la partie opposée. Plonger les tomates 30 secondes dans une grande casserole d’eau bouillante, puis les transvaser dans de l’eau glacée. Retirer la peau."
      - "Découper les tomates en dés et hacher une gousse d’ail. Faire revenir le tout dans une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélanger et laisser mijoter."
      - "Pendant ce temps, découper les aubergines (idéalement de couleur différente) et les courgettes en demi-rondelles."
      - "Foncer un moule à tarte avec une pâte feuilletée ou brisée. Recouvrir d’une généreuse couche de concassé de tomates."
      - "Disposer les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrer d’un peu de thym et d’un filet d’huile d’olive."
      - "Enfourner à 180°C pendant environ 30 minutes. Servir chaud ou froid, seul ou avec une petite salade."
      cavernes:
      - "Préparation. Couteau : tomates, pédoncule, retirer, partie opposée, inciser. Tomates, casserole eau bouillante, 30 secondes, plonger, puis eau glacée, transvaser. Peau, retirer, facile."
      - "Cuisson. Tomates, dés, découper. Gousse ail, hacher. Casserole, filet huile végétal, thym, sel, poivre, tout, revenir. Mélanger, mijoter."
      - "Cuisson. Pendant ce temps : aubergines, courgettes, demi-rondelles, découper. Option : couleurs différentes, plus joli."
      - "Cuisson. Moule tarte, pâte feuilletée ou brisée, foncer. Concassé tomates, généreuse couche, recouvrir."
      - "Cuisson. Montage tarte. Demi-rondelles aubergine courgette, rosace, disposer. Peu thym, filet huile olive, saupoudrer."
      - "Cuisson. Four 180°C, environ 30 min, enfourner. Chaude ou froide. Option : petite salade."
    kcal_per_serving: 146
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
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 146
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
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 60
      cook_min: 45
      rest_min: 0
      total_min: 105
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte feuilletée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine blanche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aubergine "classique"
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. À l’aide d’un couteau, retirez le pédoncule des tomates et incisez la partie opposée
      (n’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous si nécessaire). Plongez
      les tomates dans une grande casserole d’eau bouillante pendant 30 secondes puis transvasez-les
      dans de l’eau glacée. La peau devrait se retirer très facilement suite à cette opération.
    - Cuisson. Découpez les tomates en dés et hachez une gousse d’ail. Faites revenir le tout dans
      une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélangez
      et laissez mijoter
    - Cuisson. Pendant ce temps, découpez les aubergines (idéalement de couleur différente, le rendu
      sera plus joli) et les courgettes en demi-rondelles.
    - Cuisson. Foncez un moule à tarte avec une pâte feuilletée vegan (à la margarine) ou une pâte brisée vegan.
      Recouvrez-la d’une généreuse couche de concassé de tomates.
    - Cuisson. Passez maintenant au montage de la tarte. Pour un résultat comme celui de Patrick, disposez
      les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrez avec un peu de
      thym et un filet d’huile d’olive.
    - Cuisson. Enfournez le tout à 180°C pendant environ 30 minutes. Dégustez une généreuse part de
      cette tarte aux légumes d’été chaude ou froide, seule ou avec une petite salade pour
      l’accompagner. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. À l’aide d’un couteau, retirez le pédoncule des tomates et incisez la partie opposée. [[monder|Mondez]] les tomates : plongez-les dans une grande casserole d’eau bouillante pendant 30 secondes puis transvasez-les dans de l’eau glacée. La peau devrait se retirer très facilement suite à cette opération."
      - "Cuisson. Découpez les tomates en dés et hachez une gousse d’ail. Faites revenir le tout dans une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélangez et [[mijoter|laissez mijoter]]."
      - "Cuisson. Pendant ce temps, découpez les aubergines (idéalement de couleur différente, le rendu sera plus joli) et les courgettes en demi-rondelles."
      - "Cuisson. [[foncer|Foncez]] un moule à tarte avec une pâte feuilletée vegan (à la margarine) ou une pâte brisée vegan. Recouvrez-la d’une généreuse couche de concassé de tomates."
      - "Cuisson. Passez maintenant au montage de la tarte. Disposez les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrez avec un peu de thym et un filet d’huile d’olive."
      - "Cuisson. Enfournez le tout à 180°C pendant environ 30 minutes. Dégustez chaude ou froide, seule ou avec une petite salade."
      pro:
      - "Retirer le pédoncule des tomates au couteau et inciser la partie opposée. Plonger les tomates 30 secondes dans une grande casserole d’eau bouillante, puis les transvaser dans de l’eau glacée. Retirer la peau."
      - "Découper les tomates en dés et hacher une gousse d’ail. Faire revenir le tout dans une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélanger et laisser mijoter."
      - "Pendant ce temps, découper les aubergines (idéalement de couleur différente) et les courgettes en demi-rondelles."
      - "Foncer un moule à tarte avec une pâte feuilletée vegan (à la margarine) ou une pâte brisée vegan. Recouvrir d’une généreuse couche de concassé de tomates."
      - "Disposer les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrer d’un peu de thym et d’un filet d’huile d’olive."
      - "Enfourner à 180°C pendant environ 30 minutes. Servir chaud ou froid, seul ou avec une petite salade."
      cavernes:
      - "Préparation. Couteau : tomates, pédoncule, retirer, partie opposée, inciser. Tomates, casserole eau bouillante, 30 secondes, plonger, puis eau glacée, transvaser. Peau, retirer, facile."
      - "Cuisson. Tomates, dés, découper. Gousse ail, hacher. Casserole, filet huile végétal, thym, sel, poivre, tout, revenir. Mélanger, mijoter."
      - "Cuisson. Pendant ce temps : aubergines, courgettes, demi-rondelles, découper. Option : couleurs différentes, plus joli."
      - "Cuisson. Moule tarte, pâte feuilletée vegan (à margarine) ou pâte brisée vegan, foncer. Concassé tomates, généreuse couche, recouvrir."
      - "Cuisson. Montage tarte. Demi-rondelles aubergine courgette, rosace, disposer. Peu thym, filet huile olive, saupoudrer."
      - "Cuisson. Four 180°C, environ 30 min, enfourner. Chaude ou froide. Option : petite salade."
    kcal_per_serving: 146
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
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 146
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monder:
      terme: "monder"
      explication: "Vous plongez la tomate (ou le fruit à peau fine) un instant dans l’eau bouillante, puis dans l’eau froide. Vous retirez ensuite la peau. C’est réussi quand la peau se décolle facilement."
      ref: Cuisine/Lexique/monder.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  vegan:
    monder:
      terme: "monder"
      explication: "Vous plongez la tomate (ou le fruit à peau fine) un instant dans l’eau bouillante, puis dans l’eau froide. Vous retirez ensuite la peau. C’est réussi quand la peau se décolle facilement."
      ref: Cuisine/Lexique/monder.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte légumes d'été
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-legumes-ete]]

## Ingrédients (4 personnes)

- 1 pâte feuilletée
- 1 aubergine blanche
- 1 aubergine "classique"
- 6 tomates
- 1 gousse d'ail
- 1 grosse courgette
-  huile d'olive

## Préparation

1. À l’aide d’un couteau, retirez le pédoncule des tomates et incisez la partie opposée (n’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous si nécessaire). Plongez les tomates dans une grande casserole d’eau bouillante pendant 30 secondes puis transvasez-les dans de l’eau glacée. La peau devrait se retirer très facilement suite à cette opération.
2. Découpez les tomates en dés et hachez une gousse d’ail. Faites revenir le tout dans une casserole avec un filet d’huile végétal, du thym, du sel et du poivre. Mélangez et laissez mijoter
3. Pendant ce temps, découpez les aubergines (idéalement de couleur différente, le rendu sera plus joli) et les courgettes en demi-rondelles.
4. Foncez un moule à tarte avec une pâte feuilletée ou brisée (c’est vous qui choisissez). Recouvrez-la d’une généreuse couche de concassé de tomates.
5. Passez maintenant au montage de la tarte. Disposez les demi-rondelles d’aubergine et de courgette en rosace. Saupoudrez avec un peu de thym et un filet d’huile d’olive.
6. Enfournez le tout à 180°C pendant environ 30 minutes.

 
 

 
 Dégustez une généreuse part de cette tarte aux légumes d’été chaude ou froide, seule ou avec une petite salade pour l’accompagner. Bon appétit !
