---
schema: recette-web-jigme/v2
slug: pains-a-burger-brioches
title: Pains à burger briochés
lang: fr
description: "Pains à burger briochés : recette américaine avec farine, lait tiède et levure boulangère, pour 4 personnes. Version maison."
cuisine: américaine
category: salé
tags:
- salé
- burger
- végétarien
- farine
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pains-a-burger-brioches.jpg
  alt: Pains à burger briochés
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pains-a-burger-brioches.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis.'
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
histoire: 'Brioche : pâte française riche en beurre et en œufs. Le pain brioché pour hamburger se répand
  surtout aux États-Unis au début des années 2010. Ce n’est pas la brioche de fête tressée.

  '
fun_facts:
- text: 'Plus de beurre, plus la mie file ; trop de beurre, et le pain s’écrase sous le steak.

    '
  source_name: Wikipedia, Brioche
  source_url: https://en.wikipedia.org/wiki/Brioche
- text: 'Une dorure à l’œuf donne la croûte brune ; sans elle, le pain reste pâle.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Pains à burger briochés ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Brioche
wines:
- name: Côtes du Rhône
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — le pain n’est qu’un support ; le vin suit le steak qu’il recevra.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — un burger, tanin court.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — si le burger est plutôt crudités et fromage.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
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
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 105
      total_min: 150
    equipment: &id002
    - four
    - saladier
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lait tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: g
      item: levure boulangère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 10
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites chauffer du lait, il ne doit pas être bouillant mais juste tiède. Transvasez-le
      ensuite dans un récipient et ajoutez la levure. Mélangez et laissez reposer une dizaine
      de minutes.
    - Mélange. Dans un saladier, mélangez la farine, le sel et le sucre. Ajoutez ensuite progressivement
      le lait avec la levure, mélangez, et ajoutez les oeufs et le beurre à température ambiante.
      Travaillez la pâte pendant environ 10 minutes manuellement ou à l’aide d’un robot. Laissez
      la pâte reposer dans un saladier huilé que vous placerez dans un endroit chaud pendant
      une heure afin de la faire lever.
    - Cuisson. Découpez votre pâte en plusieurs pâtons et disposez-les sur une plaque avec du papier
      cuisson. Recouvrez de cellophane et laissez reposer à nouveau pendant 45 minutes dans
      un endroit chaud.
    - Finition. Dans un récipient, mélangez un oeuf entier à un peu d’eau et recouvrez-en vos pâtons
      à l’aide d’un pinceau. Vous pouvez ensuite les décorer avec du sésame, du pavot, ou
      même du piment en poudre. Enfournez ensuite à 190°C pendant environ 15 minutes. Vos
      pains à burger briochés sont prêts ! Garnissez-les selon vos envies. Si vous manquez
      d’inspiration, n’hésitez pas à consulter les recettes de burger au poulet, de burger
      végétarien, ou encore de burger barbecue. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer du lait : il ne doit pas être bouillant, juste tiède. Transvasez-le ensuite dans un récipient et ajoutez la levure. Mélangez et laissez reposer une dizaine de minutes."
      - "Mélange. Dans un saladier, mélangez la farine, le sel et le sucre. Ajoutez ensuite progressivement le lait avec la levure, mélangez, puis ajoutez les œufs et le beurre à température ambiante. Travaillez la pâte pendant environ 10 minutes, à la main ou au robot. Laissez-la reposer dans un saladier huilé, dans un endroit chaud, pendant une heure, afin de la faire lever."
      - "Cuisson. Découpez votre pâte en plusieurs pâtons et disposez-les sur une plaque avec du papier cuisson. Recouvrez de cellophane et laissez reposer à nouveau pendant 45 minutes dans un endroit chaud."
      - "Finition. Dans un récipient, mélangez un œuf entier à un peu d’eau et recouvrez-en vos pâtons au pinceau. Vous pouvez ensuite les décorer avec du sésame, du pavot, ou même du piment en poudre. Enfournez à 190 °C pendant environ 15 minutes. Garnissez-les selon vos envies."
      pro:
      - "Chauffer du lait, tiède, non bouillant. Transvaser dans un récipient. Ajouter la levure. Mélanger. Reposer une dizaine de minutes."
      - "Mélanger farine, sel et sucre. Ajouter progressivement le lait à la levure. Mélanger. Ajouter les œufs et le beurre à température ambiante. Travailler la pâte environ 10 min, à la main ou au robot. Reposer 1 h dans un saladier huilé, endroit chaud, pour lever."
      - "Découper la pâte en plusieurs pâtons. Disposer sur une plaque avec papier cuisson. Recouvrir de cellophane. Reposer 45 min, endroit chaud."
      - "Mélanger un œuf entier à un peu d’eau. En recouvrir les pâtons au pinceau. Option : sésame, pavot ou piment en poudre. Enfourner à 190 °C environ 15 min. Garnir au choix."
      cavernes:
      - "Cuisson. Lait, chauffer, tiède, pas bouillant. Récipient, transvaser. Levure, ajouter. Mélanger. Dizaine minutes, reposer."
      - "Mélange. Saladier : farine, sel, sucre, mélanger. Lait-levure, progressivement, ajouter. Mélanger. Œufs, beurre température ambiante, ajouter. Pâte, environ 10 min, mains ou robot, travailler. Saladier huilé, endroit chaud, heure, reposer, lever."
      - "Cuisson. Pâte, plusieurs pâtons, découper. Plaque, papier cuisson, disposer. Cellophane, recouvrir. 45 min, endroit chaud, reposer encore."
      - "Finition. Œuf entier, peu d’eau, mélanger. Pâtons, pinceau, recouvrir. Sésame, pavot ou piment poudre, option, décorer. 190 °C environ 15 min, enfourner. Garnir, envies."
    kcal_per_serving: 368
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
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
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 368
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: g
      item: levure boulangère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 10
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites chauffer le lait d’avoine ou de soja, il ne doit pas être bouillant mais juste tiède. Transvasez-le
      ensuite dans un récipient et ajoutez la levure. Mélangez et laissez reposer une dizaine
      de minutes.
    - Mélange. Dans un saladier, mélangez la farine, le sel et le sucre. Ajoutez ensuite progressivement
      le lait avec la levure, mélangez, et ajoutez l’œuf de lin (ou le tofu soyeux) et la margarine végétale à température ambiante.
      Travaillez la pâte pendant environ 10 minutes manuellement ou à l’aide d’un robot. Laissez
      la pâte reposer dans un saladier huilé que vous placerez dans un endroit chaud pendant
      une heure afin de la faire lever.
    - Cuisson. Découpez votre pâte en plusieurs pâtons et disposez-les sur une plaque avec du papier
      cuisson. Recouvrez de cellophane et laissez reposer à nouveau pendant 45 minutes dans
      un endroit chaud.
    - Finition. Dans un récipient, mélangez un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu
      soyeux entier à un peu d’eau et recouvrez-en vos pâtons à l’aide d’un pinceau. Vous
      pouvez ensuite les décorer avec du sésame, du pavot, ou même du piment en poudre. Enfournez
      ensuite à 190°C pendant environ 15 minutes. Vos pains à burger briochés sont prêts !
      Garnissez-les selon vos envies. Si vous manquez d’inspiration, garnissez selon vos envies. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer le lait d’avoine ou de soja : il ne doit pas être bouillant, juste tiède. Transvasez-le ensuite dans un récipient et ajoutez la levure. Mélangez et laissez reposer une dizaine de minutes."
      - "Mélange. Dans un saladier, mélangez la farine, le sel et le sucre. Ajoutez ensuite progressivement le lait avec la levure, mélangez, puis ajoutez l’œuf de lin (ou le tofu soyeux) et la margarine végétale à température ambiante. Travaillez la pâte pendant environ 10 minutes, à la main ou au robot. Laissez-la reposer dans un saladier huilé, dans un endroit chaud, pendant une heure, afin de la faire lever."
      - "Cuisson. Découpez votre pâte en plusieurs pâtons et disposez-les sur une plaque avec du papier cuisson. Recouvrez de cellophane et laissez reposer à nouveau pendant 45 minutes dans un endroit chaud."
      - "Finition. Dans un récipient, mélangez un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux entier à un peu d’eau et recouvrez-en vos pâtons au pinceau. Vous pouvez ensuite les décorer avec du sésame, du pavot, ou même du piment en poudre. Enfournez à 190 °C pendant environ 15 minutes. Garnissez-les selon vos envies."
      pro:
      - "Chauffer le lait d’avoine ou de soja, tiède, non bouillant. Transvaser dans un récipient. Ajouter la levure. Mélanger. Reposer une dizaine de minutes."
      - "Mélanger farine, sel et sucre. Ajouter progressivement le lait à la levure. Mélanger. Ajouter l’œuf de lin (ou le tofu soyeux) et la margarine végétale à température ambiante. Travailler la pâte environ 10 min, à la main ou au robot. Reposer 1 h dans un saladier huilé, endroit chaud, pour lever."
      - "Découper la pâte en plusieurs pâtons. Disposer sur une plaque avec papier cuisson. Recouvrir de cellophane. Reposer 45 min, endroit chaud."
      - "Mélanger un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux entier à un peu d’eau. En recouvrir les pâtons au pinceau. Option : sésame, pavot ou piment en poudre. Enfourner à 190 °C environ 15 min. Garnir au choix."
      cavernes:
      - "Cuisson. Lait d’avoine ou soja, chauffer, tiède, pas bouillant. Récipient, transvaser. Levure, ajouter. Mélanger. Dizaine minutes, reposer."
      - "Mélange. Saladier : farine, sel, sucre, mélanger. Lait-levure, progressivement, ajouter. Mélanger. Œuf de lin (ou tofu soyeux), margarine végétale température ambiante, ajouter. Pâte, environ 10 min, mains ou robot, travailler. Saladier huilé, endroit chaud, heure, reposer, lever."
      - "Cuisson. Pâte, plusieurs pâtons, découper. Plaque, papier cuisson, disposer. Cellophane, recouvrir. 45 min, endroit chaud, reposer encore."
      - "Finition. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux entier, peu d’eau, mélanger. Pâtons, pinceau, recouvrir. Sésame, pavot ou piment poudre, option, décorer. 190 °C environ 15 min, enfourner. Garnir, envies."
    kcal_per_serving: 309
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
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
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 368
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
  restes: ["Pain perdu"]
  anti_gaspi: ["Croûtons"]
  a_verifier: false
  note_verif: ""

---

# Pains à burger briochés
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pains-a-burger-brioches]]

## Ingrédients (6 personnes)

- 400 g de farine
- 150 g de lait tiède
- 9 g de levure boulangère
- 40 g de sucre
- 50 g de beurre
- 2 oeuf
-  un peu d'eau
- 10 g de sel

## Préparation

1. Faites chauffer du lait, il ne doit pas être bouillant mais juste tiède. Transvasez-le ensuite dans un récipient et ajoutez la levure. Mélangez et laissez reposer une dizaine de minutes.
2. Dans un saladier, mélangez la farine, le sel et le sucre. Ajoutez ensuite progressivement le lait avec la levure, mélangez, et ajoutez les oeufs et le beurre à température ambiante. Travaillez la pâte pendant environ 10 minutes manuellement ou à l’aide d’un robot. Laissez la pâte reposer dans un saladier huilé que vous placerez dans un endroit chaud pendant une heure afin de la faire lever.
3. Découpez votre pâte en plusieurs pâtons et disposez-les sur une plaque avec du papier cuisson. Recouvrez de cellophane et laissez reposer à nouveau pendant 45 minutes dans un endroit chaud.
4. Dans un récipient, mélangez un oeuf entier à un peu d’eau et recouvrez-en vos pâtons à l’aide d’un pinceau. Vous pouvez ensuite les décorer avec du sésame, du pavot, ou même du piment en poudre. Enfournez ensuite à 190°C pendant environ 15 minutes.

 
 

 
 Vos pains à burger briochés sont prêts ! Garnissez-les selon vos envies. Si vous manquez d’inspiration, n’hésitez pas à consulter les recettes de burger au poulet, de burger végétarien, ou encore de burger barbecue. Bon appétit !
