---
schema: recette-web-jigme/v2
slug: focaccia
title: Focaccia
lang: fr
description: "Focaccia : recette italienne avec levure de boulanger, farine et origan, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: salé
tags:
- salé
- boulangerie
- végane
- Italie
image:
  url:
  alt: Focaccia
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/focaccia.md
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
histoire: 'Pain plat levé italien, huile d’olive, surface marquée au doigt. Le nom vient du latin focus
  (âtre) ; la forme actuelle est surtout ligure, notamment génoise. Ce n’est pas une pizza garnie.

  '
fun_facts:
- text: "Focacius, en latin tardif, désigne un pain cuit au foyer ou sous la cendre."
  source_name: Grokipedia, Focaccia
  source_url: https://grokipedia.com/page/Focaccia
- text: "Une pâte très hydratée et beaucoup d’huile donnent la mie alvéolée ; trop de farine, elle se tasse."
  source_name: Grokipedia, Focaccia
  source_url: https://grokipedia.com/page/Focaccia
wines:
- name: Cassis
  producer: Clos Sainte-Magdeleine
  origin: Cassis, Provence
  grapes: marsanne, clairette
  award:
  why: Anis, citron — l’huile d’olive et le romarin.
- name: Verdicchio dei Castelli di Jesi
  producer: Umani Ronchi
  origin: Marches
  grapes: verdicchio
  award:
  why: Amande, amertume légère — le pain à l’huile, un blanc italien.
- name: Côtes de Provence blanc
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: rolle
  award:
  why: Fleur, agrume — la focaccia nature ou aux herbes.
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
      prep_min: 30
      cook_min: 20
      rest_min: 60
      total_min: 110
    equipment: &id003
    - four
    - saladier
    - plaque + papier sulfurisé
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 30
      unit: g
      item: levure de boulanger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: origan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Versez la levure dans de l’eau et mélangez.
    - Cuisson. Versez la farine dans la cuve d’un robot ou dans un récipient. Ajoutez le sel, puis
      la levure diluée dans l’eau et mélangez le tout. Compléter avec de l’huile d’olive au
      fur et à mesure, tout en continuant de mélanger.
    - Cuisson. Écrasez l’origan et le thym dans mortier, à l’aide d’un pilon. Ajoutez-les ensuite à
      votre pâte et mélangez de nouveau.
    - Cuisson. Une fois que la pâte est bien homogène, débarrassez-la dans un récipient et couvrez-la
      d’un torchon humide. Laissez reposer pendant environ 30 minutes.
    - Mélange. Mélangez la pâte à l’aide de vos mains et formez une boule. Sur un plan de travail préalablement
      fariné, étalez la pâte en forme de rectangle avec un rouleau à pâtisserie. Placez ce
      rectangle de pâte sur une plaque de four recouverte de papier sulfurisé et laissez reposer
      de nouveau pendant 20 minutes.
    - Cuisson. Enfournez le tout à 200°C pendant 15 à 20 minutes. Et voilà, il ne vous reste plus qu’à
      découper la focaccia plus ou moins finement en fonction de vos envies. Buon appetito
      !
    steps_niveaux:
      amateur:
      - "Mélange. Versez la levure dans de l’eau et mélangez."
      - "Cuisson. Versez la farine dans la cuve d’un robot ou dans un récipient. Ajoutez le sel, puis la levure diluée dans l’eau et mélangez le tout. Complétez avec de l’huile d’olive au fur et à mesure, tout en continuant de mélanger."
      - "Cuisson. Écrasez l’origan et le thym dans mortier, à l’aide d’un pilon. Ajoutez-les ensuite à votre pâte et mélangez de nouveau."
      - "Cuisson. Une fois que la pâte est bien homogène, débarrassez-la dans un récipient et couvrez-la d’un torchon humide. Laissez reposer pendant environ 30 minutes."
      - "Mélange. Mélangez la pâte à l’aide de vos mains et formez une boule. Sur un plan de travail préalablement fariné, étalez la pâte en forme de rectangle avec un rouleau à pâtisserie. Placez ce rectangle de pâte sur une plaque de four recouverte de papier sulfurisé et laissez reposer de nouveau pendant 20 minutes."
      - "Cuisson. Enfournez le tout à 200°C pendant 15 à 20 minutes. Découpez la focaccia plus ou moins finement."
      pro:
      - "Mélange. Verser la levure dans de l’eau et mélanger."
      - "Cuisson. Verser la farine dans la cuve d’un robot ou dans un récipient. Ajouter le sel, puis la levure diluée dans l’eau et mélanger le tout. Compléter avec de l’huile d’olive au fur et à mesure, tout en continuant de mélanger."
      - "Cuisson. Écraser l’origan et le thym dans un mortier, à l’aide d’un pilon. Ajouter ensuite à la pâte et mélanger de nouveau."
      - "Cuisson. Une fois la pâte bien homogène, débarrasser dans un récipient et couvrir d’un torchon humide. Laisser reposer environ 30 minutes."
      - "Mélange. Mélanger la pâte à la main et former une boule. Sur un plan de travail fariné, étaler la pâte en rectangle au rouleau à pâtisserie. Placer le rectangle sur une plaque de four recouverte de papier sulfurisé et laisser reposer de nouveau 20 minutes."
      - "Cuisson. Enfourner à 200°C pendant 15 à 20 minutes. Découper la focaccia plus ou moins finement."
      cavernes:
      - "Mélange. Levure, eau, verser. Mélanger."
      - "Cuisson. Farine, cuve robot ou récipient, verser. Sel, levure diluée eau, ajouter. Mélanger. Huile olive, compléter fur mesure. Continuer mélanger."
      - "Cuisson. Origan thym, mortier, pilon, écraser. Pâte, ajouter. Mélanger."
      - "Cuisson. Pâte homogène, récipient, débarrasser. Torchon humide, couvrir. Reposer environ 30 min."
      - "Mélange. Pâte, mains, mélanger. Boule, former. Plan travail fariné, pâte rectangle, rouleau pâtisserie, étaler. Rectangle pâte, plaque four, papier sulfurisé. Reposer 20 min."
      - "Cuisson. Enfourner 15-20 min 200 °C. Focaccia, découper plus moins finement."
    kcal_per_serving: 579
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
    kcal_per_serving: 579
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
      prep_min: 30
      cook_min: 20
      rest_min: 60
      total_min: 110
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 30
      unit: g
      item: levure de boulanger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: origan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Versez la levure dans de l’eau et mélangez.
    - Cuisson. Versez la farine dans la cuve d’un robot ou dans un récipient. Ajoutez le sel, puis
      la levure diluée dans l’eau et mélangez le tout. Compléter avec de l’huile d’olive au
      fur et à mesure, tout en continuant de mélanger.
    - Cuisson. Écrasez l’origan et le thym dans mortier, à l’aide d’un pilon. Ajoutez-les ensuite à
      votre pâte et mélangez de nouveau.
    - Cuisson. Une fois que la pâte est bien homogène, débarrassez-la dans un récipient et couvrez-la
      d’un torchon humide. Laissez reposer pendant environ 30 minutes.
    - Mélange. Mélangez la pâte à l’aide de vos mains et formez une boule. Sur un plan de travail préalablement
      fariné, étalez la pâte en forme de rectangle avec un rouleau à pâtisserie. Placez ce
      rectangle de pâte sur une plaque de four recouverte de papier sulfurisé et laissez reposer
      de nouveau pendant 20 minutes.
    - Cuisson. Enfournez le tout à 200°C pendant 15 à 20 minutes. Et voilà, il ne vous reste plus qu’à
      découper la focaccia plus ou moins finement en fonction de vos envies. Buon appetito
      !
    steps_niveaux:
      amateur:
      - "Mélange. Versez la levure dans de l’eau et mélangez."
      - "Cuisson. Versez la farine dans la cuve d’un robot ou dans un récipient. Ajoutez le sel, puis la levure diluée dans l’eau et mélangez le tout. Complétez avec de l’huile d’olive au fur et à mesure, tout en continuant de mélanger."
      - "Cuisson. Écrasez l’origan et le thym dans mortier, à l’aide d’un pilon. Ajoutez-les ensuite à votre pâte et mélangez de nouveau."
      - "Cuisson. Une fois que la pâte est bien homogène, débarrassez-la dans un récipient et couvrez-la d’un torchon humide. Laissez reposer pendant environ 30 minutes."
      - "Mélange. Mélangez la pâte à l’aide de vos mains et formez une boule. Sur un plan de travail préalablement fariné, étalez la pâte en forme de rectangle avec un rouleau à pâtisserie. Placez ce rectangle de pâte sur une plaque de four recouverte de papier sulfurisé et laissez reposer de nouveau pendant 20 minutes."
      - "Cuisson. Enfournez le tout à 200°C pendant 15 à 20 minutes. Découpez la focaccia plus ou moins finement."
      pro:
      - "Mélange. Verser la levure dans de l’eau et mélanger."
      - "Cuisson. Verser la farine dans la cuve d’un robot ou dans un récipient. Ajouter le sel, puis la levure diluée dans l’eau et mélanger le tout. Compléter avec de l’huile d’olive au fur et à mesure, tout en continuant de mélanger."
      - "Cuisson. Écraser l’origan et le thym dans un mortier, à l’aide d’un pilon. Ajouter ensuite à la pâte et mélanger de nouveau."
      - "Cuisson. Une fois la pâte bien homogène, débarrasser dans un récipient et couvrir d’un torchon humide. Laisser reposer environ 30 minutes."
      - "Mélange. Mélanger la pâte à la main et former une boule. Sur un plan de travail fariné, étaler la pâte en rectangle au rouleau à pâtisserie. Placer le rectangle sur une plaque de four recouverte de papier sulfurisé et laisser reposer de nouveau 20 minutes."
      - "Cuisson. Enfourner à 200°C pendant 15 à 20 minutes. Découper la focaccia plus ou moins finement."
      cavernes:
      - "Mélange. Levure, eau, verser. Mélanger."
      - "Cuisson. Farine, cuve robot ou récipient, verser. Sel, levure diluée eau, ajouter. Mélanger. Huile olive, compléter fur mesure. Continuer mélanger."
      - "Cuisson. Origan thym, mortier, pilon, écraser. Pâte, ajouter. Mélanger."
      - "Cuisson. Pâte homogène, récipient, débarrasser. Torchon humide, couvrir. Reposer environ 30 min."
      - "Mélange. Pâte, mains, mélanger. Boule, former. Plan travail fariné, pâte rectangle, rouleau pâtisserie, étaler. Rectangle pâte, plaque four, papier sulfurisé. Reposer 20 min."
      - "Cuisson. Enfourner 15-20 min 200 °C. Focaccia, découper plus moins finement."
    kcal_per_serving: 579
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
    kcal_per_serving: 579
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Croûtons"]
  anti_gaspi: ["Chapelure"]
  a_verifier: false
  note_verif: ""

---

# Focaccia
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/focaccia]]

## Ingrédients (4 personnes)

- 30 g de levure de boulanger
- 25 cL d'eau
- 400 g de farine
- 8 g de sel
- 10 cL d'huile d'olive
-  origan
-  thym

## Préparation

1. Versez la levure dans de l’eau et mélangez.
2. Versez la farine dans la cuve d’un robot ou dans un récipient. Ajoutez le sel, puis la levure diluée dans l’eau et mélangez le tout. Compléter avec de l’huile d’olive au fur et à mesure, tout en continuant de mélanger.
3. Écrasez l’origan et le thym dans mortier, à l’aide d’un pilon. Ajoutez-les ensuite à votre pâte et mélangez de nouveau.
4. Une fois que la pâte est bien homogène, débarrassez-la dans un récipient et couvrez-la d’un torchon humide. Laissez reposer pendant environ 30 minutes.
5. Mélangez la pâte à l’aide de vos mains et formez une boule. Sur un plan de travail préalablement fariné, étalez la pâte en forme de rectangle avec un rouleau à pâtisserie. Placez ce rectangle de pâte sur une plaque de four recouverte de papier sulfurisé et laissez reposer de nouveau pendant 20 minutes.
6. Enfournez le tout à 200°C pendant 15 à 20 minutes.

 
 

 
 Et voilà, il ne vous reste plus qu’à découper la focaccia plus ou moins finement en fonction de vos envies. Buon appetito !
