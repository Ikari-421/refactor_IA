---
schema: recette-web-jigme/v2
slug: les-huitres-chaudes-a-la-noisette
title: Les huîtres chaudes à la noisette
lang: fr
description: "Les huîtres chaudes à la noisette : recette française avec huître, échalote et quelques noisettes concassées, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- poisson
- plat
- huître
image:
  url:
  alt: Les huîtres chaudes à la noisette
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/les-huitres-chaudes-a-la-noisette.md
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
    - from: chapelure
      to: chapelure sans gluten
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: quelques noisettes concassées
      to: graines de tournesol
      note:
    note: 'Fruits à coque : quelques noisettes concassées → graines de tournesol.'
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
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - mollusques
    swaps: []
    note: → version végétarienne.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
  sans_poisson:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
  Huître (bivalve marin) servie chaude, panée à la noisette : geste de restaurant,
  pas l’huître plate au naturel. L’huître se mange surtout crue en France depuis
  le XIXe s. d’élevage ; la version chaude (gratinée, pochée, panée) est une
  variante, sans auteur unique.
fun_facts:
- text: >
    Chaude, l’huître se rassemble : trop cuite, elle durcit. On vise juste le
    nacre qui tourne.
  source_name: Usage
  source_url:
- text: >
    La noisette masque l’iode : un blanc trop aromatique ferait double emploi.
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — l’huître, même panée, reste un plat de mer.
- name: Jurançon sec
  producer: Clos Lapeyre
  origin: Jurançon, Béarn
  grapes: petit manseng, gros manseng
  award:
  why: Blanc de fruits secs — la noisette, sans un liquoreux.
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — l’apéritif chaud, sans un champagne de prestige.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - mollusques
    - poisson
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 10
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: huître
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
    - qty:
      unit:
      item: quelques noisettes concassées
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: chapelure
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: concombre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, faites fondre du beurre et laissez-le frémir afin d’obtenir un beurre
      noisette. Lorsqu’il a pris une coloration brune, débarrassez-le dans un récipient. Coupez
      les échalotes et faites-les revenir dans une poêle avant de les réserver.
    - Cuisson. Ouvrez et nettoyez les huîtres puis étalez-les sur une plaque de cuisson. Garnissez-les
      de beurre noisette et d’échalotes, puis déposez-y la chapelure et enfin les noisettes
      concassées. Enfournez les huîtres à 250° pendant 5 minutes en mode grill.
    - Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis
      ciselez de la ciboulette. Une fois grillées, sortez les huîtres du four et déposez-y
      les dés de concombre ainsi que la ciboulette. Servez les huîtres à l’apéritif et observez
      la surprise sur le visage de vos invités ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, faites fondre du beurre et laissez-le frémir afin d’obtenir un beurre noisette. Lorsqu’il a pris une coloration brune, débarrassez-le dans un récipient. Coupez les échalotes et faites-les revenir dans une poêle avant de les réserver."
      - "Cuisson. Ouvrez et nettoyez les huîtres puis étalez-les sur une plaque de cuisson. Garnissez-les de beurre noisette et d’échalotes, puis déposez-y la chapelure et enfin les noisettes concassées. Enfournez les huîtres à 250° pendant 5 minutes en mode grill."
      - "Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis ciselez de la ciboulette. Une fois grillées, sortez les huîtres du four et déposez-y les dés de concombre ainsi que la ciboulette. Servez les huîtres à l’apéritif et observez la surprise sur le visage de vos invités ! Bon appétit !"
      pro:
      - "Faire fondre du beurre en casserole. Laisser frémir jusqu’au beurre noisette, coloration brune. Débarrasser dans un récipient. Couper les échalotes. Faire revenir à la poêle. Réserver."
      - "Ouvrir et nettoyer les huîtres. Étaler sur une plaque de cuisson. Garnir de beurre noisette et d’échalotes, puis chapelure et noisettes concassées. Enfourner 5 minutes à 250°, mode grill."
      - "Éplucher un morceau de concombre. Couper en petits dés. Ciseler la ciboulette. Sortir les huîtres du four. Déposer dés de concombre et ciboulette. Servir à l’apéritif."
      cavernes:
      - "Cuisson. Casserole. Beurre, fondre. Frémir, beurre noisette. Coloration brune. Débarrasser, récipient. Échalotes, couper. Poêle, revenir. Réserver."
      - "Cuisson. Huîtres, ouvrir, nettoyer. Plaque cuisson, étaler. Beurre noisette, échalotes, garnir. Chapelure, noisettes concassées, déposer. Four 250°, grill, 5 min."
      - "Finition. Pendant. Concombre, morceau, éplucher. Petits dés, découper. Ciboulette, ciseler. Huîtres grillées, four, sortir. Dés concombre, ciboulette, déposer. Apéritif, servir. Surprise invités. Bon appétit."
    kcal_per_serving: 133
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
    - gluten
    - lactose
    - produits_laitiers
    - mollusques
    - poisson
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: gros champignon de Paris
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
    - qty:
      unit:
      item: quelques noisettes concassées
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: chapelure
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: concombre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, faites fondre du beurre et laissez-le frémir afin d’obtenir un beurre
      noisette. Lorsqu’il a pris une coloration brune, débarrassez-le dans un récipient. Coupez
      les échalotes et faites-les revenir dans une poêle avant de les réserver.
    - Cuisson. Ouvrez et nettoyez les gros champignon de Pariss puis étalez-les sur une plaque de cuisson. Garnissez-les
      de beurre noisette et d’échalotes, puis déposez-y la chapelure et enfin les noisettes
      concassées. Enfournez les gros champignon de Pariss à 250° pendant 5 minutes en mode grill.
    - Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis
      ciselez de la ciboulette. Une fois grillées, sortez les gros champignon de Pariss du four et déposez-y
      les dés de concombre ainsi que la ciboulette. Servez les gros champignon de Pariss à l’apéritif et observez
      la surprise sur le visage de vos invités ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, faites fondre du beurre et laissez-le frémir afin d’obtenir un beurre noisette. Lorsqu’il a pris une coloration brune, débarrassez-le dans un récipient. Coupez les échalotes et faites-les revenir dans une poêle avant de les réserver."
      - "Cuisson. Ouvrez et nettoyez les gros champignon de Pariss puis étalez-les sur une plaque de cuisson. Garnissez-les de beurre noisette et d’échalotes, puis déposez-y la chapelure et enfin les noisettes concassées. Enfournez les gros champignon de Pariss à 250° pendant 5 minutes en mode grill."
      - "Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis ciselez de la ciboulette. Une fois grillées, sortez les gros champignon de Pariss du four et déposez-y les dés de concombre ainsi que la ciboulette. Servez les gros champignon de Pariss à l’apéritif et observez la surprise sur le visage de vos invités ! Bon appétit !"
      pro:
      - "Faire fondre du beurre en casserole. Laisser frémir jusqu’au beurre noisette, coloration brune. Débarrasser dans un récipient. Couper les échalotes. Faire revenir à la poêle. Réserver."
      - "Ouvrir et nettoyer les gros champignon de Pariss. Étaler sur une plaque de cuisson. Garnir de beurre noisette et d’échalotes, puis chapelure et noisettes concassées. Enfourner 5 minutes à 250°, mode grill."
      - "Éplucher un morceau de concombre. Couper en petits dés. Ciseler la ciboulette. Sortir les gros champignon de Pariss du four. Déposer dés de concombre et ciboulette. Servir à l’apéritif."
      cavernes:
      - "Cuisson. Casserole. Beurre, fondre. Frémir, beurre noisette. Coloration brune. Débarrasser, récipient. Échalotes, couper. Poêle, revenir. Réserver."
      - "Cuisson. Gros champignon de Pariss, ouvrir, nettoyer. Plaque cuisson, étaler. Beurre noisette, échalotes, garnir. Chapelure, noisettes concassées, déposer. Four 250°, grill, 5 min."
      - "Finition. Pendant. Concombre, morceau, éplucher. Petits dés, découper. Ciboulette, ciseler. Gros champignon de Pariss grillés, four, sortir. Dés concombre, ciboulette, déposer. Apéritif, servir. Surprise invités. Bon appétit."
    kcal_per_serving: 133
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - gluten
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: gros champignon de Paris
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
    - qty:
      unit:
      item: quelques noisettes concassées
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: chapelure
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: concombre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, faites fondre de la margarine végétale et laissez-la frémir
      afin d’obtenir une margarine végétale noisette. Lorsqu’elle a pris une coloration brune, débarrassez-la dans un récipient. Coupez les échalotes et faites-les revenir
      dans une poêle avant de les réserver.
    - Cuisson. Évidez légèrement les chapeaux de champignons et étalez-les sur une plaque. Garnissez-les de margarine végétale noisette et d’échalotes, puis chapelure et noisettes. Enfournez 5 minutes à 250°C, mode grill.
    - Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis
      ciselez de la ciboulette. Une fois grillées, sortez les champignons du four et déposez-y les dés de concombre et la ciboulette. Servez à l’apéritif. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, faites fondre de la margarine végétale et laissez-la frémir afin d’obtenir une margarine végétale noisette. Lorsqu’elle a pris une coloration brune, débarrassez-la dans un récipient. Coupez les échalotes et faites-les revenir dans une poêle avant de les réserver."
      - "Cuisson. Évidez légèrement les chapeaux de champignons et étalez-les sur une plaque. Garnissez-les de margarine végétale noisette et d’échalotes, puis chapelure et noisettes. Enfournez 5 minutes à 250°C, mode grill."
      - "Finition. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis ciselez de la ciboulette. Une fois grillées, sortez les champignons du four et déposez-y les dés de concombre et la ciboulette. Servez à l’apéritif. Bon appétit !"
      pro:
      - "Faire fondre de la margarine végétale en casserole. Laisser frémir jusqu’à margarine végétale noisette, coloration brune. Débarrasser dans un récipient. Couper les échalotes. Faire revenir à la poêle. Réserver."
      - "Évider légèrement les chapeaux de champignons. Étaler sur une plaque. Garnir de margarine végétale noisette et d’échalotes, puis chapelure et noisettes. Enfourner 5 minutes à 250°C, mode grill."
      - "Éplucher un morceau de concombre. Couper en petits dés. Ciseler la ciboulette. Sortir les champignons du four. Déposer dés de concombre et ciboulette. Servir à l’apéritif."
      cavernes:
      - "Cuisson. Casserole. Margarine végétale, fondre. Frémir, margarine végétale noisette. Coloration brune. Débarrasser, récipient. Échalotes, couper. Poêle, revenir. Réserver."
      - "Cuisson. Chapeaux champignons, évider légèrement. Plaque, étaler. Margarine végétale noisette, échalotes, garnir. Chapelure, noisettes. Four 250°C, grill, 5 min."
      - "Finition. Pendant. Concombre, morceau, éplucher. Petits dés, découper. Ciboulette, ciseler. Champignons grillés, four, sortir. Dés concombre, ciboulette, déposer. Apéritif, servir. Bon appétit."
    kcal_per_serving: 133
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - mollusques
    - poisson
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 133
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "à consommer aussitôt, ne se garde pas", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"

---

# Les huîtres chaudes à la noisette
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/les-huitres-chaudes-a-la-noisette]]

## Ingrédients (4 personnes)

- 12 huître
- 2 échalote
-  quelques noisettes concassées
-  chapelure
-  concombre
-  ciboulette
-  beurre

## Préparation

1. Dans une casserole, faites fondre du beurre et laissez-le frémir afin d’obtenir un beurre noisette. Lorsqu’il a pris une coloration brune, débarrassez-le dans un récipient. Coupez les échalotes et faites-les revenir dans une poêle avant de les réserver.
2. Ouvrez et nettoyez les huîtres puis étalez-les sur une plaque de cuisson. Garnissez-les de beurre noisette et d’échalotes, puis déposez-y la chapelure et enfin les noisettes concassées. Enfournez les huîtres à 250° pendant 5 minutes en mode grill.
3. Pendant ce temps, épluchez un morceau de concombre et découpez-le en petits dés, puis ciselez de la ciboulette. Une fois grillées, sortez les huîtres du four et déposez-y les dés de concombre ainsi que la ciboulette.

 
 

 
 Servez les huîtres à l’apéritif et observez la surprise sur le visage de vos invités ! Bon appétit !
