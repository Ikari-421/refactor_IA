---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: tarte-au-flan
title: Tarte au flan
lang: fr
description: "Tarte au flan : recette française avec pâte feuilletée, oeuf et jaune d'oeuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tarte
- végétarien
- pâte feuilletée
image:
  url:
  alt: Tarte au flan
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-au-flan.md
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
    - from: sucre semoule
      to: quinoa
      note:
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
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; crème de soja (liaison) ou amidon → crème d''avoine ; lait d''avoine ou soja
      → lait d''avoine.'
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
histoire: 'Flan pâtissier : pâte, appareil œufs-lait-crème, four. Tarte ouverte, souvent un appareil type
  crème. Incontournable de boulangerie française, pas une date d’auteur ici.

  '
fun_facts:
- text: >
    L’appareil trop chaud fait bouillir ; trop froid, il fige mal. On verse tiède.
  source_name: Usage
  source_url:
- text: >
    Une pâte trop fine fuit ; trop épaisse, elle reste crue sous le flan.
  source_name: Grokipedia, Flan (pie)
  source_url: https://grokipedia.com/page/Flan_(pie)
wines:
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — le flan, sans un vin tannique.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Muscat doux — la vanille de l’appareil.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — le goûter, sans un champagne brut.
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
      prep_min: 70
      cook_min: 35
      rest_min: 0
      total_min: 105
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - moule / plat
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
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaune d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: maizena
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 340
      unit: g
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 320
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, versez le lait et l’eau. Coupez une gousse de vanille et ajoutez-là
      dans la casserole. Portez à ébullition.
    - Cuisson. Dans un récipient, cassez les oeufs entiers, puis ajoutez les jaunes d’oeufs. Complétez
      avec le sucre et la maïzena. Mélangez le tout à l’aide d’un fouet.
    - Cuisson. Retirez la gousse de vanille du lait chaud et versez la moitié du contenu de la casserole
      dans le récipient contenant les autre ingrédients. Mélangez bien et transvasez le tout
      dans la casserole. Laissez cuire pendant une minute.
    - Cuisson. Versez la préparation dans le fond de tarte et enfournez à 160°C pendant environ 35min.
      Laissez refroidir et déguster une généreuse part de flan à la vanille. Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez le lait et l’eau. Coupez une gousse de vanille et ajoutez-la dans la casserole. Portez à ébullition."
      - "Cuisson. Dans un récipient, cassez les œufs entiers, puis ajoutez les jaunes d’œufs. Complétez avec le sucre et la maïzena. Mélangez le tout à l’aide d’un fouet."
      - "Cuisson. Retirez la gousse de vanille du lait chaud et versez la moitié du contenu de la casserole dans le récipient contenant les autres ingrédients. Mélangez bien et transvasez le tout dans la casserole. Laissez cuire pendant une minute."
      - "Cuisson. Versez la préparation dans le fond de tarte et enfournez à 160°C pendant environ 35 min. Laissez refroidir et dégustez une généreuse part de flan à la vanille. Bon appétit !"
      pro:
      - "Verser le lait et l’eau dans une casserole. Couper une gousse de vanille et l’ajouter. Porter à ébullition."
      - "Casser les œufs entiers dans un récipient, puis ajouter les jaunes d’œufs. Compléter avec le sucre et la maïzena. Mélanger au fouet."
      - "Retirer la gousse de vanille du lait chaud. Verser la moitié du contenu de la casserole dans le récipient. Mélanger et transvaser le tout dans la casserole. Cuire une minute."
      - "Verser la préparation dans le fond de tarte. Enfourner à 160°C environ 35 min. Laisser refroidir. Déguster."
      cavernes:
      - "Cuisson. Casserole : lait, eau, verser. Gousse vanille, couper, ajouter. Ébullition."
      - "Cuisson. Récipient : œufs entiers, casser, puis jaunes d’œufs, ajouter. Sucre, maïzena, compléter. Fouet, mélanger."
      - "Cuisson. Gousse vanille, lait chaud, retirer. Moitié casserole, récipient, verser. Mélanger. Tout, casserole, transvaser. Cuire 1 min."
      - "Cuisson. Préparation, fond tarte, verser. Four 160°C, environ 35 min, enfourner. Refroidir. Déguster part flan vanille. Bon appétit !"
    kcal_per_serving: 170
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
    kcal_per_serving: 170
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
    - qty: 1
      unit: piece
      item: pâte feuilletée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: maizena
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 340
      unit: g
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 320
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Dans une casserole, versez le lait d'avoine ou soja et l’eau. Coupez une gousse de vanille
      et ajoutez-là dans la casserole. Portez à ébullition.
    - Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis la crème de soja (liaison) ou l’amidon. Complétez avec le sucre et la maïzena. Mélangez le tout à l’aide
      d’un fouet.
    - Cuisson. Retirez la gousse de vanille du lait d'avoine ou soja chaud et versez la moitié du contenu
      de la casserole dans le récipient contenant les autre ingrédients. Mélangez bien et
      transvasez le tout dans la casserole. Laissez cuire pendant une minute.
    - Cuisson. Versez la préparation dans le fond de tarte et enfournez à 160°C pendant environ 35min.
      Laissez refroidir et déguster une généreuse part de flan à la vanille. Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez le lait d’avoine ou soja et l’eau. Coupez une gousse de vanille et ajoutez-la dans la casserole. Portez à ébullition."
      - "Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis la crème de soja (liaison) ou l’amidon. Complétez avec le sucre et la maïzena. Mélangez le tout à l’aide d’un fouet."
      - "Cuisson. Retirez la gousse de vanille du lait d’avoine ou soja chaud et versez la moitié du contenu de la casserole dans le récipient contenant les autres ingrédients. Mélangez bien et transvasez le tout dans la casserole. Laissez cuire pendant une minute."
      - "Cuisson. Versez la préparation dans le fond de tarte et enfournez à 160°C pendant environ 35 min. Laissez refroidir et dégustez une généreuse part de flan à la vanille. Bon appétit !"
      pro:
      - "Verser le lait d’avoine ou soja et l’eau dans une casserole. Couper une gousse de vanille et l’ajouter. Porter à ébullition."
      - "Verser l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux dans un récipient, puis la crème de soja (liaison) ou l’amidon. Compléter avec le sucre et la maïzena. Mélanger au fouet."
      - "Retirer la gousse de vanille du lait d’avoine ou soja chaud. Verser la moitié du contenu de la casserole dans le récipient. Mélanger et transvaser le tout dans la casserole. Cuire une minute."
      - "Verser la préparation dans le fond de tarte. Enfourner à 160°C environ 35 min. Laisser refroidir. Déguster."
      cavernes:
      - "Cuisson. Casserole : lait avoine ou soja, eau, verser. Gousse vanille, couper, ajouter. Ébullition."
      - "Mélange. Récipient : œuf lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, verser, puis crème soja (liaison) ou amidon. Sucre, maïzena, compléter. Fouet, mélanger."
      - "Cuisson. Gousse vanille, lait avoine ou soja chaud, retirer. Moitié casserole, récipient, verser. Mélanger. Tout, casserole, transvaser. Cuire 1 min."
      - "Cuisson. Préparation, fond tarte, verser. Four 160°C, environ 35 min, enfourner. Refroidir. Déguster part flan vanille. Bon appétit !"
    kcal_per_serving: 156
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
    kcal_per_serving: 170
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
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte au flan
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-au-flan]]

## Ingrédients (6 personnes)

- 1 pâte feuilletée
- 2 oeuf
- 2 jaune d'oeuf
- 100 g de sucre semoule
- 50 g de maizena
- 340 g de lait
- 320 g d'eau

## Préparation

1. Dans une casserole, versez le lait et l’eau. Coupez une gousse de vanille et ajoutez-là dans la casserole. Portez à ébullition.
2. Dans un récipient, cassez les oeufs entiers, puis ajoutez les jaunes d’oeufs. Complétez avec le sucre et la maïzena. Mélangez le tout à l’aide d’un fouet.
3. Retirez la gousse de vanille du lait chaud et versez la moitié du contenu de la casserole dans le récipient contenant les autre ingrédients. Mélangez bien et transvasez le tout dans la casserole. Laissez cuire pendant une minute.
4. Versez la préparation dans le fond de tarte et enfournez à 160°C pendant environ 35min.

 
 

 
 Laissez refroidir et déguster une généreuse part de flan à la vanille. Bon appétit !
