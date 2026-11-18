---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: croquettes-de-brebis
title: Croquettes de brebis
lang: fr
description: "Croquettes de brebis : recette espagnole avec fromage frais au lait de brebis, oeuf entier et jaune d'oeuf, pour 4 personnes."
cuisine: espagnole
category: salé
tags:
- salé
- fromage
- végétarien
- rapide
- plat
image:
  url:
  alt: Croquettes de brebis
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/croquettes-de-brebis.md
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
    - from: chapelure fine
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis ; crème de soja (liaison) ou amidon →
      crème d''avoine.'
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
histoire: 'Croquette : appareil lié, pané, frit. Geste français, très répandu ensuite en Espagne. Ici,
  fromage frais de brebis (herbes, échalote) — variante contemporaine, pas la croquette de pomme de terre
  ni la croqueta de jamón.

  '
fun_facts:
- text: "La chapelure et l’œuf tiennent l’appareil ; trop mou, la croquette explose dans l’huile."
  source_name: Usage
  source_url:
- text: "En Espagne, la croqueta se lie souvent d’un béchamel ; ici, le fromage de brebis suffit."
  source_name: Wikipedia, Croquette
  source_url: https://en.wikipedia.org/wiki/Croquette
wines:
- name: Irouléguy
  producer: Domaine Arretxea
  origin: Saint-Étienne-de-Baïgorry, Pays basque
  grapes: tannat, cabernet
  award:
  why: Cerise, tanin — le fromage de brebis, un rouge du piémont.
- name: Jurançon sec
  producer: Clos Lapeyre
  origin: Jurançon, Béarn
  grapes: gros manseng
  award:
  why: Agrume, gras — la friture et le lait de brebis.
- name: Txakoli de Getaria
  producer: Txomin Etxaniz
  origin: Getaria, Pays basque
  grapes: hondarrabi zuri
  award:
  why: Citron, légère perle — la croquette chaude, vin maigre.
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
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: fromage frais au lait de brebis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oeuf entier
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
    - qty: 1
      unit: piece
      item: échalote
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
    - qty:
      unit:
      item: chapelure fine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par hacher finement les échalotes, l’ail et les herbes fraiches (ciboulettes,
      coriandres). Versez le tout dans un grand récipient et ajoutez-y le fromage frais de
      brebis. Mélangez bien, puis salez et poivrez à votre convenance.
    - Cuisson. Vous allez maintenant pouvoir passer à la panure. Munissez-vous de deux bols (ou assiettes
      creuses). L’un d’eux devra contenir vos oeufs battus et l’autre, de la chapelure.
    - Cuisson. Pour réaliser les croquettes, il vous suffit de modeler de petites boules de fromage
      frais, de la taille d’une noix. Passez chaque croquette ainsi formée dans l’oeuf battu,
      puis dans la chapelure. Répétez l’opération jusqu’à ce qu’il n’y ait plus de fromage.
    - Finition. Plongez les croquettes dans l’huile de friteuse bouillante et laissez-les frire jusqu’à
      ce qu’elles soient joliment dorée. Déposez les croquettes sur un papier absorbant pour
      enlever un peu d’huile, puis disposez-les dans un bol ou un plat avant de les servir
      bien chaudes. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Hachez finement les échalotes, l’ail et les herbes fraiches (ciboulettes, coriandres). Versez le tout dans un grand récipient et ajoutez-y le fromage frais de brebis. Mélangez bien, puis salez et poivrez à votre convenance."
      - "Cuisson. Passez à la panure. Munissez-vous de deux bols (ou assiettes creuses). L’un d’eux devra contenir vos œufs battus et l’autre, de la chapelure."
      - "Cuisson. Modelez de petites boules de fromage frais, de la taille d’une noix. Passez chaque croquette ainsi formée dans l’œuf battu, puis dans la chapelure. Répétez l’opération jusqu’à ce qu’il n’y ait plus de fromage."
      - "Finition. Plongez les croquettes dans l’huile de friteuse bouillante et [[frire|laissez-les frire]] jusqu’à ce qu’elles soient joliment dorées. Déposez-les sur un papier absorbant pour enlever un peu d’huile, puis disposez-les dans un bol ou un plat et servez-les bien chaudes."
      pro:
      - "Préparation. Hacher finement échalotes, ail et herbes fraiches (ciboulettes, coriandres). Verser dans un grand récipient. Ajouter le fromage frais de brebis. Mélanger. Saler, poivrer."
      - "Cuisson. Deux bols ou assiettes creuses : œufs battus d’un côté, chapelure de l’autre."
      - "Cuisson. Modeler de petites boules de fromage frais, taille d’une noix. Passer chaque croquette dans l’œuf battu, puis dans la chapelure. Répéter jusqu’à épuisement du fromage."
      - "Finition. Plonger dans l’huile de friteuse bouillante. Frire jusqu’à dorure. Égoutter sur papier absorbant. Dresser en bol ou plat. Servir chaud."
      cavernes:
      - "Préparation. Échalotes, ail, herbes fraiches (ciboulettes, coriandres), hacher finement. Grand récipient, verser. Fromage frais brebis, ajouter. Mélanger. Sel, poivre, convenance."
      - "Cuisson. Panure. Deux bols ou assiettes creuses. Œufs battus côté, chapelure autre."
      - "Cuisson. Fromage frais, petites boules, taille noix. Chaque croquette : œuf battu, puis chapelure. Répéter jusqu’à plus fromage."
      - "Finition. Croquettes, huile friteuse bouillante, plonger. Frire jusqu’à joliment dorées. Papier absorbant, peu huile. Bol ou plat. Servir chaudes."
    kcal_per_serving: 103
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
    kcal_per_serving: 103
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: fromage végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
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
    - qty: 1
      unit: piece
      item: échalote
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
    - qty:
      unit:
      item: chapelure fine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par hacher finement les échalotes, l’ail et les herbes fraiches (ciboulettes,
      coriandres). Versez le tout dans un grand récipient et ajoutez-y le fromage végétal (cajou). Mélangez bien, puis salez et poivrez à votre convenance.
    - Cuisson. Vous allez maintenant pouvoir passer à la panure. Munissez-vous de deux bols (ou assiettes
      creuses). L’un d’eux devra contenir l’œuf de lin (ou le tofu soyeux battu) et l’autre, de la chapelure.
    - Cuisson. Pour réaliser les croquettes, il vous suffit de modeler de petites boules de fromage végétal, de la taille d’une noix. Passez chaque croquette dans l’œuf de lin (ou le tofu soyeux), puis dans la chapelure. Répétez jusqu’à épuisement du fromage végétal.
    - Finition. Plongez les croquettes dans l’huile de friteuse bouillante et laissez-les frire jusqu’à
      ce qu’elles soient joliment dorée. Déposez les croquettes sur un papier absorbant pour
      enlever un peu d’huile, puis disposez-les dans un bol ou un plat avant de les servir
      bien chaudes. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Hachez finement les échalotes, l’ail et les herbes fraiches (ciboulettes, coriandres). Versez le tout dans un grand récipient et ajoutez-y le fromage végétal (cajou). Mélangez bien, puis salez et poivrez à votre convenance."
      - "Cuisson. Passez à la panure. Munissez-vous de deux bols (ou assiettes creuses). L’un d’eux devra contenir l’œuf de lin (ou le tofu soyeux battu) et l’autre, de la chapelure."
      - "Cuisson. Modelez de petites boules de fromage végétal, de la taille d’une noix. Passez chaque croquette dans l’œuf de lin (ou le tofu soyeux), puis dans la chapelure. Répétez jusqu’à épuisement du fromage végétal."
      - "Finition. Plongez les croquettes dans l’huile de friteuse bouillante et [[frire|laissez-les frire]] jusqu’à ce qu’elles soient joliment dorées. Déposez-les sur un papier absorbant pour enlever un peu d’huile, puis disposez-les dans un bol ou un plat et servez-les bien chaudes."
      pro:
      - "Préparation. Hacher finement échalotes, ail et herbes fraiches (ciboulettes, coriandres). Verser dans un grand récipient. Ajouter le fromage végétal (cajou). Mélanger. Saler, poivrer."
      - "Cuisson. Deux bols ou assiettes creuses : œuf de lin (ou tofu soyeux battu) d’un côté, chapelure de l’autre."
      - "Cuisson. Modeler de petites boules de fromage végétal, taille d’une noix. Passer chaque croquette dans l’œuf de lin (ou le tofu soyeux), puis dans la chapelure. Répéter jusqu’à épuisement du fromage végétal."
      - "Finition. Plonger dans l’huile de friteuse bouillante. Frire jusqu’à dorure. Égoutter sur papier absorbant. Dresser en bol ou plat. Servir chaud."
      cavernes:
      - "Préparation. Échalotes, ail, herbes fraiches (ciboulettes, coriandres), hacher finement. Grand récipient, verser. Fromage végétal (cajou), ajouter. Mélanger. Sel, poivre, convenance."
      - "Cuisson. Panure. Deux bols ou assiettes creuses. Œuf lin ou tofu soyeux battu côté, chapelure autre."
      - "Cuisson. Fromage végétal, petites boules, taille noix. Chaque croquette : œuf lin ou tofu soyeux, puis chapelure. Répéter jusqu’à épuisement fromage végétal."
      - "Finition. Croquettes, huile friteuse bouillante, plonger. Frire jusqu’à joliment dorées. Papier absorbant, peu huile. Bol ou plat. Servir chaudes."
    kcal_per_serving: 81
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
    kcal_per_serving: 103
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
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

# Croquettes de brebis
**Équipement :** [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/croquettes-de-brebis]]

## Ingrédients (4 personnes)

- 200 g de fromage frais au lait de brebis
- 1 oeuf entier
- 2 jaune d'oeuf
- 1 échalote
- 1 gousse d'ail
-  chapelure fine
-  ciboulette fraiche
-  coriandre fraiche
-  huile

## Préparation

1. Commencez par hacher finement les échalotes, l’ail et les herbes fraiches (ciboulettes, coriandres). Versez le tout dans un grand récipient et ajoutez-y le fromage frais de brebis. Mélangez bien, puis salez et poivrez à votre convenance.
2. Vous allez maintenant pouvoir passer à la panure. Munissez-vous de deux bols (ou assiettes creuses). L’un d’eux devra contenir vos oeufs battus et l’autre, de la chapelure.
3. Pour réaliser les croquettes, il vous suffit de modeler de petites boules de fromage frais, de la taille d’une noix. Passez chaque croquette ainsi formée dans l’oeuf battu, puis dans la chapelure. Répétez l’opération jusqu’à ce qu’il n’y ait plus de fromage.
4. Plongez les croquettes dans l’huile de friteuse bouillante et laissez-les frire jusqu’à ce qu’elles soient joliment dorée.

 
 

 
 Déposez les croquettes sur un papier absorbant pour enlever un peu d’huile, puis disposez-les dans un bol ou un plat avant de les servir bien chaudes. Bon appétit !
