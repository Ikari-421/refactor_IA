---
schema: recette-web-jigme/v2
slug: salmorejo
title: Salmorejo
lang: fr
description: "Salmorejo : recette espagnole avec tomates, demie baguette et gousse d'ail, pour 4 personnes. Version maison. Facile à suivre."
cuisine: espagnole
category: salé
tags:
- salé
- soupe
- rapide
- tomates mûres
image:
  url:
  alt: Salmorejo
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salmorejo.md
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
    - from: demie baguette
      to: pain sans gluten
      note:
    note: 'Gluten : demie baguette → pain sans gluten.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (saumon fumé) : pas d’adaptation fiable.'
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
histoire: 'Salmorejo : soupe froide de Cordoue (Andalousie), tomate, pain rassis, huile d’olive, ail.
  /. Plus épais qu’un gaspacho, souvent garni de jambon et d’œuf dur.

  '
fun_facts:
- text: >
    Le pain lie : sans assez de mie, c’est un gaspacho ; trop, une panade.
  source_name: Grokipedia, Salmorejo
  source_url: https://grokipedia.com/page/Salmorejo
- text: >
    On sert très froid, avec des dés de jambon ibérique et d’œuf — pas obligatoire,
    mais canon à Cordoue.
  source_name: Wikipedia, Salmorejo
  source_url: https://en.wikipedia.org/wiki/Salmorejo
wines:
- name: Manzanilla
  producer: Hidalgo La Gitana
  origin: Sanlúcar de Barrameda
  grapes: palomino
  award:
  why: Voile, amande — la tomate froide, voisin d’Andalousie.
- name: Montilla-Moriles
  producer: Alvear
  origin: Montilla, Andalousie
  grapes: pedro ximénez
  award:
  why: Fino de Montilla, amande — le salmorejo, un sec de cave, pas un PX doux.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — l’ail et la tomate, sans un rouge.
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
    time: &id001
      prep_min: 20
      cook_min: 0
      rest_min: 0
      total_min: 20
    equipment: &id002
    - saladier
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: tomates (mûres)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demie baguette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: ml
      item: huile d'olive
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
    - qty: 2
      unit:
      item: jambon Serrano
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf dur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez
      et mixez le tout.
    - Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de
      mixer à nouveau. Passez la préparation au chinois pour filtrer les éventuels morceaux
      restants. Ajoutez l’huile d’olive progressivement tout en mixant.
    - Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les
      oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur).
      Alors, facile ? Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez et mixez le tout."
      - "Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de mixer à nouveau. Passez la préparation au chinois pour [[filtrer|filtrer]] les éventuels morceaux restants. Ajoutez l’huile d’olive progressivement tout en mixant."
      - "Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      pro:
      - "Couper grossièrement les tomates et l’ail, les mettre dans un grand récipient. Assaisonner et mixer."
      - "Ajouter les morceaux de pain, laisser s’imbiber une dizaine de minutes, mixer à nouveau. Passer au chinois pour filtrer les éventuels morceaux restants. Ajouter l’huile d’olive progressivement tout en mixant."
      - "Réserver au frais. Au dressage, rajouter sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      cavernes:
      - "Préparation. Tomates, ail, couper grossièrement. Grand récipient, mettre. Assaisonner. Mixer."
      - "Cuisson. Pain, morceaux, ajouter. Dizaine minutes, imbiber. Mixer à nouveau. Chinois, passer, filtrer, morceaux restants. Huile olive, progressivement, mixer."
      - "Dressage. Frais, réserver. Dressage : oeufs durs morceaux, jambon, persil (menthe, option fraîcheur), dessus, rajouter."
    kcal_per_serving: 449
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: tomates (mûres)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demie baguette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: ml
      item: huile d'olive
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
    - qty: 2
      unit:
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf dur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez
      et mixez le tout.
    - Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de
      mixer à nouveau. Passez la préparation au chinois pour filtrer les éventuels morceaux
      restants. Ajoutez l’huile d’olive progressivement tout en mixant.
    - Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les
      oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur).
      Alors, facile ? Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez et mixez le tout."
      - "Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de mixer à nouveau. Passez la préparation au chinois pour [[filtrer|filtrer]] les éventuels morceaux restants. Ajoutez l’huile d’olive progressivement tout en mixant."
      - "Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      pro:
      - "Couper grossièrement les tomates et l’ail, les mettre dans un grand récipient. Assaisonner et mixer."
      - "Ajouter les morceaux de pain, laisser s’imbiber une dizaine de minutes, mixer à nouveau. Passer au chinois pour filtrer les éventuels morceaux restants. Ajouter l’huile d’olive progressivement tout en mixant."
      - "Réserver au frais. Au dressage, rajouter sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      cavernes:
      - "Préparation. Tomates, ail, couper grossièrement. Grand récipient, mettre. Assaisonner. Mixer."
      - "Cuisson. Pain, morceaux, ajouter. Dizaine minutes, imbiber. Mixer à nouveau. Chinois, passer, filtrer, morceaux restants. Huile olive, progressivement, mixer."
      - "Dressage. Frais, réserver. Dressage : oeufs durs morceaux, jambon, persil (menthe, option fraîcheur), dessus, rajouter."
    kcal_per_serving: 449
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
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: tomates (mûres)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demie baguette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: ml
      item: huile d'olive
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
    - qty: 2
      unit:
      item: jambon végétal
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
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez
      et mixez le tout.
    - Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de
      mixer à nouveau. Passez la préparation au chinois pour filtrer les éventuels morceaux
      restants. Ajoutez l’huile d’olive progressivement tout en mixant.
    - Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus des dés de tofu, le jambon végétal et le persil (ou de la menthe pour plus de fraîcheur).
      Alors, facile ? Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez et mixez le tout."
      - "Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de mixer à nouveau. Passez la préparation au chinois pour [[filtrer|filtrer]] les éventuels morceaux restants. Ajoutez l’huile d’olive progressivement tout en mixant."
      - "Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus des dés de tofu, le jambon végétal et le persil (ou de la menthe pour plus de fraîcheur)."
      pro:
      - "Couper grossièrement les tomates et l’ail, les mettre dans un grand récipient. Assaisonner et mixer."
      - "Ajouter les morceaux de pain, laisser s’imbiber une dizaine de minutes, mixer à nouveau. Passer au chinois pour filtrer les éventuels morceaux restants. Ajouter l’huile d’olive progressivement tout en mixant."
      - "Réserver au frais. Au dressage, rajouter sur le dessus des dés de tofu, le jambon végétal et le persil (ou de la menthe pour plus de fraîcheur)."
      cavernes:
      - "Préparation. Tomates, ail, couper grossièrement. Grand récipient, mettre. Assaisonner. Mixer."
      - "Cuisson. Pain, morceaux, ajouter. Dizaine minutes, imbiber. Mixer à nouveau. Chinois, passer, filtrer, morceaux restants. Huile olive, progressivement, mixer."
      - "Dressage. Frais, réserver. Dressage : dés tofu, jambon végétal, persil (menthe, option fraîcheur), dessus, rajouter."
    kcal_per_serving: 449
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - oeuf
    - poisson
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: tomates (mûres)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demie baguette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: ml
      item: huile d'olive
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
    - qty: 2
      unit:
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf dur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez
      et mixez le tout.
    - Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de
      mixer à nouveau. Passez la préparation au chinois pour filtrer les éventuels morceaux
      restants. Ajoutez l’huile d’olive progressivement tout en mixant.
    - Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les
      oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur).
      Alors, facile ? Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez et mixez le tout."
      - "Cuisson. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de mixer à nouveau. Passez la préparation au chinois pour [[filtrer|filtrer]] les éventuels morceaux restants. Ajoutez l’huile d’olive progressivement tout en mixant."
      - "Dressage. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      pro:
      - "Couper grossièrement les tomates et l’ail, les mettre dans un grand récipient. Assaisonner et mixer."
      - "Ajouter les morceaux de pain, laisser s’imbiber une dizaine de minutes, mixer à nouveau. Passer au chinois pour filtrer les éventuels morceaux restants. Ajouter l’huile d’olive progressivement tout en mixant."
      - "Réserver au frais. Au dressage, rajouter sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur)."
      cavernes:
      - "Préparation. Tomates, ail, couper grossièrement. Grand récipient, mettre. Assaisonner. Mixer."
      - "Cuisson. Pain, morceaux, ajouter. Dizaine minutes, imbiber. Mixer à nouveau. Chinois, passer, filtrer, morceaux restants. Huile olive, progressivement, mixer."
      - "Dressage. Frais, réserver. Dressage : oeufs durs morceaux, jambon, persil (menthe, option fraîcheur), dessus, rajouter."
    kcal_per_serving: 449
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegetarienne:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  pesco:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salmorejo
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salmorejo]]

## Ingrédients (4 personnes)

- 1 kg de tomates (mûres)
- 1 demie baguette
- 120 ml d'huile d'olive
- 1 gousse d'ail
- 2 tranches de jambon Serrano
- 2 oeuf dur
-  du persil

## Préparation

1. Coupez grossièrement les tomates et l’ail et mettez-les dans un grand récipient. Assaisonnez et mixez le tout.
2. Ajoutez les morceaux de pain et laissez-les s’imbiber une dizaine de minutes avant de mixer à nouveau. Passez la préparation au chinois pour filtrer les éventuels morceaux restants. Ajoutez l’huile d’olive progressivement tout en mixant.
3. Réservez la préparation au frais. Au moment du dressage, rajoutez sur le dessus les oeufs durs en morceaux, le jambon et le persil (ou de la menthe pour plus de fraîcheur).

 
 

 
 Alors, facile ? Bon appétit !
