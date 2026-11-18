---
schema: recette-web-jigme/v2
slug: crumble-cerises-et-framboises
title: Crumble cerises et framboises
lang: fr
description: "Crumble cerises et framboises : recette française avec sucre roux, farine et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: britannique
category: sucré
tags:
- sucré
- dessert
- crumble
- cerise
- framboise
image:
  url:
  alt: Crumble cerises et framboises
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/crumble-cerises-et-framboises.md
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
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
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
histoire: 'Dessert britannique : fruits au four sous un sablage farine-beurre-sucre. Plat simple ; avoine,
  noix ou coco s’ajoutent plutôt vers le milieu du XXe s. Cerises et framboises sont une garniture, pas
  le crumble aux pommes le plus courant.

  '
fun_facts:
- text: "Crumble et crisp désignent le même geste ; le crisp américain porte souvent de l’avoine."
  source_name: Wikipedia, Crumble
  source_url: https://en.wikipedia.org/wiki/Crumble
- text: "Le beurre froid, en miettes, donne un sablage ; fondu, il fait une pâte, pas un crumble."
  source_name: Usage
  source_url:
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Rochefort-sur-Loire, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel — cerise et framboise, sucrosité du sablage.
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: moscato bianco
  award:
  why: Bulles douces — le crumble tiède, sans un liquoreux lourd.
- name: Banyuls
  producer: Domaine du Mas Blanc
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: Cerise noire — le fruit rouge, un cran plus sombre.
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id003
    - four
    - casserole
    - saladier
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 130
      unit: g
      item: sucre roux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: framboises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Dans un récipient, versez le sucre roux, la farine et du beurre ramolli. Mélangez à
      la main ou à l’aide d’un robot jusqu’à obtenir une pâte homogène.
    - Cuisson. Étalez votre pâte sur une plaque de four préalablement recouverte de papier cuisson.
      Enfournez le tout à 160°C pendant environ 20min.
    - Cuisson. Dénoyautez les cerises et mettez les à confire avec les framboises dans une casserole.
      Ajoutez 20g de sucre en poudre et laissez cuire à feu doux quelques minutes en mélangeant
      régulièrement.
    - Cuisson. Découpez à la main des morceaux de votre pâte à crumble et pilez le tout dans un récipient
      de façon à obtenir de petit morceaux de quelques centimètres.
    - Finition. Placez les fruits rouges au fond d’un plat à gâteau (on en a pris des petits, mais vous
      pouvez le faire avec un grand). Ajoutez un peu de menthe fraîche ciselée et saupoudrez
      le tout avec les morceaux de pâte. Il ne vous reste plus à déguster votre crumble aux
      fruits rouges. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un récipient, versez le sucre roux, la farine et du beurre ramolli. Mélangez à la main ou à l’aide d’un robot jusqu’à obtenir une pâte homogène."
      - "Cuisson. Étalez votre pâte sur une plaque de four préalablement recouverte de papier cuisson. Enfournez le tout à 160 °C pendant environ 20 min."
      - "Cuisson. Dénoyautez les cerises et mettez-les à confire avec les framboises dans une casserole. Ajoutez 20 g de sucre en poudre et laissez cuire à feu doux quelques minutes en mélangeant régulièrement."
      - "Cuisson. Découpez à la main des morceaux de votre pâte à crumble et pilez le tout dans un récipient, de façon à obtenir de petits morceaux de quelques centimètres."
      - "Finition. Placez les fruits rouges au fond d’un plat à gâteau (petits plats ou un grand). Ajoutez un peu de menthe fraîche ciselée (coupée finement) et saupoudrez le tout avec les morceaux de pâte."
      pro:
      - "Mélange. Verser sucre roux, farine et beurre ramolli dans un récipient. Mélanger à la main ou au robot jusqu’à pâte homogène."
      - "Cuisson. Étaler la pâte sur une plaque recouverte de papier cuisson. Enfourner à 160 °C environ 20 min."
      - "Cuisson. Dénoyauter les cerises. Confire avec les framboises en casserole. Ajouter 20 g de sucre en poudre. Cuire à feu doux quelques minutes, en mélangeant."
      - "Cuisson. Découper à la main la pâte à crumble. Piler dans un récipient en petits morceaux de quelques centimètres."
      - "Finition. Fruits rouges au fond d’un plat à gâteau (petits ou un grand). Menthe fraîche ciselée. Saupoudrer des morceaux de pâte."
      cavernes:
      - "Mélange. Récipient : sucre roux, farine, beurre ramolli. Main ou robot. Pâte homogène."
      - "Cuisson. Pâte, étaler plaque four, papier cuisson. 160 °C environ 20 min."
      - "Cuisson. Cerises, dénoyauter. Framboises, casserole, confire. Sucre poudre 20 g. Feu doux quelques minutes, mélanger."
      - "Cuisson. Pâte crumble, découper main. Récipient, piler. Petits morceaux quelques centimètres."
      - "Finition. Fruits rouges, fond plat gâteau (petits ou grand). Peu menthe fraîche, ciseler. Morceaux pâte, saupoudrer."
    kcal_per_serving: 571
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
    kcal_per_serving: 571
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
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 130
      unit: g
      item: sucre roux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: framboises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Dans un récipient, versez le sucre roux, la farine et de la margarine végétale ramollie. Mélangez à
      la main ou à l’aide d’un robot jusqu’à obtenir une pâte homogène.
    - Cuisson. Étalez votre pâte sur une plaque de four préalablement recouverte de papier cuisson.
      Enfournez le tout à 160°C pendant environ 20min.
    - Cuisson. Dénoyautez les cerises et mettez les à confire avec les framboises dans une casserole.
      Ajoutez 20g de sucre en poudre et laissez cuire à feu doux quelques minutes en mélangeant
      régulièrement.
    - Cuisson. Découpez à la main des morceaux de votre pâte à crumble et pilez le tout dans un récipient
      de façon à obtenir de petit morceaux de quelques centimètres.
    - Finition. Placez les fruits rouges au fond d’un plat à gâteau (on en a pris des petits, mais vous
      pouvez le faire avec un grand). Ajoutez un peu de menthe fraîche ciselée et saupoudrez
      le tout avec les morceaux de pâte. Il ne vous reste plus à déguster votre crumble aux
      fruits rouges. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un récipient, versez le sucre roux, la farine et de la margarine végétale ramollie. Mélangez à la main ou à l’aide d’un robot jusqu’à obtenir une pâte homogène."
      - "Cuisson. Étalez votre pâte sur une plaque de four préalablement recouverte de papier cuisson. Enfournez le tout à 160 °C pendant environ 20 min."
      - "Cuisson. Dénoyautez les cerises et mettez-les à confire avec les framboises dans une casserole. Ajoutez 20 g de sucre en poudre et laissez cuire à feu doux quelques minutes en mélangeant régulièrement."
      - "Cuisson. Découpez à la main des morceaux de votre pâte à crumble et pilez le tout dans un récipient, de façon à obtenir de petits morceaux de quelques centimètres."
      - "Finition. Placez les fruits rouges au fond d’un plat à gâteau (petits plats ou un grand). Ajoutez un peu de menthe fraîche ciselée (coupée finement) et saupoudrez le tout avec les morceaux de pâte."
      pro:
      - "Mélange. Verser sucre roux, farine et margarine végétale ramollie dans un récipient. Mélanger à la main ou au robot jusqu’à pâte homogène."
      - "Cuisson. Étaler la pâte sur une plaque recouverte de papier cuisson. Enfourner à 160 °C environ 20 min."
      - "Cuisson. Dénoyauter les cerises. Confire avec les framboises en casserole. Ajouter 20 g de sucre en poudre. Cuire à feu doux quelques minutes, en mélangeant."
      - "Cuisson. Découper à la main la pâte à crumble. Piler dans un récipient en petits morceaux de quelques centimètres."
      - "Finition. Fruits rouges au fond d’un plat à gâteau (petits ou un grand). Menthe fraîche ciselée. Saupoudrer des morceaux de pâte."
      cavernes:
      - "Mélange. Récipient : sucre roux, farine, margarine végétale ramollie. Main ou robot. Pâte homogène."
      - "Cuisson. Pâte, étaler plaque four, papier cuisson. 160 °C environ 20 min."
      - "Cuisson. Cerises, dénoyauter. Framboises, casserole, confire. Sucre poudre 20 g. Feu doux quelques minutes, mélanger."
      - "Cuisson. Pâte crumble, découper main. Récipient, piler. Petits morceaux quelques centimètres."
      - "Finition. Fruits rouges, fond plat gâteau (petits ou grand). Peu menthe fraîche, ciseler. Morceaux pâte, saupoudrer."
    kcal_per_serving: 342
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
    kcal_per_serving: 571
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

# Crumble cerises et framboises
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/crumble-cerises-et-framboises]]

## Ingrédients (4 personnes)

- 130 g de sucre roux
- 130 g de farine
- 130 g de beurre
- 250 g de cerises
- 250 g de framboises
- 20 g de sucre en poudre
-  menthe fraîche

## Préparation

1. Dans un récipient, versez le sucre roux, la farine et du beurre ramolli. Mélangez à la main ou à l’aide d’un robot jusqu’à obtenir une pâte homogène.
2. Étalez votre pâte sur une plaque de four préalablement recouverte de papier cuisson. Enfournez le tout à 160°C pendant environ 20min.
3. Dénoyautez les cerises et mettez les à confire avec les framboises dans une casserole. Ajoutez 20g de sucre en poudre et laissez cuire à feu doux quelques minutes en mélangeant régulièrement.
4. Découpez à la main des morceaux de votre pâte à crumble et pilez le tout dans un récipient de façon à obtenir de petit morceaux de quelques centimètres.
5. Placez les fruits rouges au fond d’un plat à gâteau (on en a pris des petits, mais vous pouvez le faire avec un grand). Ajoutez un peu de menthe fraîche ciselée et saupoudrez le tout avec les morceaux de pâte.

 
 

 
 Il ne vous reste plus à déguster votre crumble aux fruits rouges. Bon appétit !
