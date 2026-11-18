---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: fouet
slug: clafoutis-cerises-crumble-pistache
title: Clafoutis aux cerises, crumble à la pistache
lang: fr
description: "Clafoutis aux cerises, crumble à la pistache : recette française avec cerises non dénoyautées, farine T55 et œufs, pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- cerises
- clafoutis
- pistache
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/clafoutis-cerises-crumble-pistache.webp
  alt: Clafoutis aux cerises, crumble à la pistache
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/clafoutis-cerises-crumble-pistache.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    - from: farine T55
      to: mix farine sans gluten + psyllium
      note:
    - from: farine
      to: mix farine sans gluten + psyllium
      note:
    - from: farine
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : farine T55 → mix farine sans gluten + psyllium ; farine → mix farine sans
      gluten + psyllium.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: lait entier
      to: lait sans lactose
      note:
    - from: crème fraîche entière
      to: crème sans lactose
      note:
    - from: beurre + un peu pour le moule
      to: beurre sans lactose ou clarifié
      note:
    note: 'Lactose : lait entier → lait sans lactose ; crème fraîche entière → crème sans
      lactose ; beurre + un peu pour le moule → beurre sans lactose ou clarifié.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: lait entier
      to: lait d'avoine
      note:
    - from: crème fraîche entière
      to: crème de soja ou avoine
      note:
    - from: beurre + un peu pour le moule
      to: margarine végétale
      note:
    note: 'Produits laitiers : lait entier → lait d''avoine ; crème fraîche entière → crème
      de soja ou avoine ; beurre + un peu pour le moule → margarine végétale.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (œufs) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: lait d’amande
      to: graines de tournesol
      note:
    - from: pistache
      to: graines de courge
      note:
    note: 'Fruits à coque : lait d’amande → graines de tournesol ; pistache → graines de courge.'
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: crème de soja
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja → crème d''avoine.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
house_toggle: ma_recette
house_options:
- ma_recette
histoire: 'Le clafoutis est un entremets du Limousin : cerises dans un plat beurré, recouvertes
  d’un appareil type pâte à crêpes, cuit au four. En occitan, clafotís viendrait de clafir,
  « remplir » (l’appareil de cerises). Autre piste : ancien français claufir, « fixer avec
  des clous » — les cerises comme des têtes de clous. Autre fruit = flognarde (Corrèze / Limousin),
  pas un clafoutis.'
fun_facts:
- text: 'Le vrai clafoutis se fait avec des cerises non dénoyautées : la peau reste intacte,
    le jus explose.'
  source_name: Destination Limoges
  source_url: https://www.destination-limoges.com/la-recette-du-clafoutis-de-maman/
- text: Les noyaux donnent un goût d’amande (benzaldéhyde). Ils contiennent de l’amygdaline,
    mais le cyanure ne se libère que si on écrase les noyaux, et en petite quantité.
  source_name: Wikipedia EN
  source_url: https://en.wikipedia.org/wiki/Clafoutis
- text: 'Autre fruit (pomme, poire…) : on dit flognarde, pas clafoutis.'
  source_name: OT Terres de Corrèze
  source_url: https://www.terresdecorreze.com/destination/specialites-correziennes/recettes-correziennes/le-clafoutis/
wines:
- name: Maury Vintage rouge
  producer: Mas Amiel
  origin: Maury, Pyrénées-Orientales
  grapes: grenache noir
  award:
  why: 'cerise noire, cacao léger : parallèle fruit + amande des noyaux.'
- name: Banyuls
  producer: Domaine de la Rectorie
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: 'oxydatif léger, fruit confit : tient le crumble pistache.'
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Anjou, Loire
  grapes: chenin
  award:
  why: 'sucrosité + acidité : le chenin coupe la crème sans écraser la cerise.'
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 45
      rest_min: 0
      total_min: 60
    equipment:
    - plat 24–26 cm
    - saladier
    - fouet
    - four
    substitutions:
    - from: pas de crème
      to: tout lait
      note:
    - from: cerises dénoyautées si enfants (perte du goût amande)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: cerises non dénoyautées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: farine T55
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: crème fraîche entière
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: beurre + un peu pour le moule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: sachet de sucre vanillé (ou graines de ½ gousse)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Cuisson. Préchauffez le four à 180 °C. Beurrez le plat."
    - "Cuisson. Battez les œufs avec les sucres et le sel. Incorporez la farine, la crème fraîche et le lait jusqu’à pâte lisse."
    - "Cuisson. Disposez les cerises au fond, versez l’appareil (pas à ras : ça gonfle)."
    - "Finition. Enfournez 45 min à 180 °C : le centre reste encore un peu tremblotant. Servez tiède."
    steps_niveaux:
      amateur:
      - "Cuisson. Préchauffez le four à 180 °C. Beurrez le plat."
      - "Cuisson. Battez les œufs avec les sucres et le sel. Incorporez la farine, la crème fraîche et le lait jusqu’à pâte lisse."
      - "Cuisson. Disposez les cerises au fond, versez l’appareil (pas à ras : ça gonfle)."
      - "Finition. Enfournez 45 min à 180 °C : le centre reste encore un peu tremblotant. Servez tiède."
      pro:
      - "Préchauffer le four à 180 °C. Beurrer le plat."
      - "Battre les œufs avec les sucres et le sel. Incorporer la farine, la crème fraîche et le lait jusqu’à pâte lisse."
      - "Disposer les cerises au fond. Verser l’appareil (pas à ras : ça gonfle)."
      - "Enfourner 45 min à 180 °C : le centre reste encore un peu tremblotant. Servir tiède."
      cavernes:
      - "Cuisson. Four 180 °C. Plat, beurrer."
      - "Cuisson. Œufs, sucres, sel, battre. Farine, crème fraîche, lait, incorporer, pâte lisse."
      - "Cuisson. Cerises fond. Appareil, verser, pas ras, gonfle."
      - "Finition. 45 min 180 °C. Centre encore peu tremblotant. Tiède."
    kcal_per_serving: 410
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 410
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - fruits_a_coque
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 45
      rest_min: 0
      total_min: 65
    equipment:
    - plat
    - fouet
    substitutions:
    - from: lait d’avoine si l’amande double le goût pistache
      to:
      note:
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: cerises (dénoyautées si tu sers des enfants)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: fécule de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: lait d’amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: crème de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: huile de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: huile de coco
      group: Crumble
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group: Crumble
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: pistache
      group: Crumble
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: cassonade
      group: Crumble
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel, vanille
      group:
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Préparation. Fouettez la farine, la fécule de maïs, le sucre, le sel, le lait d’amande, la crème de soja, l’huile de coco fondue et la vanille."
    - "Finition. Disposez les cerises, versez l’appareil, enfournez 30 min à 180 °C. Ajoutez le crumble et poursuivez 15 à 20 min."
    steps_niveaux:
      amateur:
      - "Préparation. Fouettez la farine, la fécule de maïs, le sucre, le sel, le lait d’amande, la crème de soja, l’huile de coco fondue et la vanille."
      - "Finition. Disposez les cerises, versez l’appareil, enfournez 30 min à 180 °C. Ajoutez le crumble et poursuivez 15 à 20 min."
      pro:
      - "Fouetter la farine, la fécule de maïs, le sucre, le sel, le lait d’amande, la crème de soja, l’huile de coco fondue et la vanille."
      - "Disposer les cerises. Verser l’appareil. Enfourner 30 min à 180 °C. Ajouter le crumble. Poursuivre 15 à 20 min."
      cavernes:
      - "Préparation. Farine, fécule maïs, sucre, sel, lait d’amande, crème soja, huile coco fondue, vanille, fouetter."
      - "Finition. Cerises. Appareil, verser. 30 min 180 °C. Crumble, ajouter. 15 à 20 min."
    kcal_per_serving: 660
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 410
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - fruits_a_coque
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    - sulfites
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 50
      rest_min: 0
      total_min: 80
    equipment:
    - plat à gratin
    - fouet
    - saladier
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: cerises avec noyaux
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lait
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: crème liquide
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaunes d'œufs
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œufs entiers
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Clafoutis
      scale: false
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: fécule de maïs
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: beurre fondu
      group: Clafoutis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: fond de verre de Cognac (facultatif)
      group: Clafoutis
      scale: true
      optional: true
      to_taste: false
    - qty: 80
      unit: g
      item: beurre
      group: Crumble pistache
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine
      group: Crumble pistache
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: poudre de pistache
      group: Crumble pistache
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: cassonade
      group: Crumble pistache
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Crumble pistache
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Préparation. Faites infuser la vanille dans le lait et la crème liquide."
    - "Cuisson. Fouettez les œufs entiers et les jaunes avec le sucre, le sel, la fécule de maïs, le beurre fondu, le Cognac et le mélange lait-crème."
    - "Cuisson. Chemisez le moule de sucre, disposez les cerises, versez l’appareil."
    - "Cuisson. Enfournez 30 à 40 min à 180 °C."
    - "Finition. Ajoutez le crumble et enfournez encore 20 min."
    steps_niveaux:
      amateur:
      - "Préparation. [[infuser|Faites infuser]] la vanille dans le lait et la crème liquide."
      - "Cuisson. Fouettez les œufs entiers et les jaunes avec le sucre, le sel, la fécule de maïs, le beurre fondu, le Cognac et le mélange lait-crème."
      - "Cuisson. [[chemiser|Chemisez]] le moule de sucre, disposez les cerises, versez l’appareil."
      - "Cuisson. Enfournez 30 à 40 min à 180 °C."
      - "Finition. Ajoutez le crumble et enfournez encore 20 min."
      pro:
      - "Faire infuser la vanille dans le lait et la crème liquide."
      - "Fouetter les œufs entiers et les jaunes avec le sucre, le sel, la fécule de maïs, le beurre fondu, le Cognac et le mélange lait-crème."
      - "Chemiser le moule de sucre. Disposer les cerises. Verser l’appareil."
      - "Enfourner 30 à 40 min à 180 °C."
      - "Ajouter le crumble. Enfourner encore 20 min."
      cavernes:
      - "Préparation. Vanille, lait, crème liquide, infuser."
      - "Cuisson. Œufs entiers, jaunes, sucre, sel, fécule maïs, beurre fondu, Cognac, mélange lait-crème, fouetter."
      - "Cuisson. Moule, chemiser sucre. Cerises. Appareil, verser."
      - "Cuisson. 30 à 40 min 180 °C."
      - "Finition. Crumble, ajouter. Encore 20 min."
    kcal_per_serving: 830
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  ma_recette:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    chemiser:
      terme: "chemiser"
      explication: "Vous tapissez le moule avant de le remplir. Vous le recouvrez (film, rhodoïd, beurre et farine, biscuits…). C’est réussi quand le moule est tapissé, sans trou."
      ref: Cuisine/Lexique/chemiser.md
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

# Clafoutis aux cerises, crumble à la pistache

![[clafoutis-cerises-crumble-pistache.webp]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Sucré/clafoutis-cerises-crumble-pistache.md).

**Catégorie :** sucré

## Ingrédients (4 personnes)

- 500 g de cerises **non dénoyautées**
- 90 g de farine T55
- 3 œufs
- 80 g de sucre
- 250 ml de lait entier
- 80 g de crème fraîche entière
- 15 g de beurre + un peu pour le moule
- 1 pincée de sel
- 1 sachet de sucre vanillé (ou graines de ½ gousse)

## Préparation

1. Cuisson. Préchauffez le four à 180 °C. Beurrez le plat.
2. Cuisson. Battez les œufs avec les sucres et le sel. Incorporez la farine, la crème fraîche et le lait jusqu’à pâte lisse.
3. Cuisson. Disposez les cerises au fond, versez l’appareil (pas à ras : ça gonfle).
4. Finition. Enfournez 45 min à 180 °C : le centre reste encore un peu tremblotant. Servez tiède.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
