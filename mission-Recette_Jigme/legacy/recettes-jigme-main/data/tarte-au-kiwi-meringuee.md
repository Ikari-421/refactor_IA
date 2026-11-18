---
schema: recette-web-jigme/v2
equipment:
- ref: chalumeau
- ref: fouet
slug: tarte-au-kiwi-meringuee
title: Tarte au kiwi meringuée
lang: fr
description: "Tarte au kiwi meringuée : recette française avec farine, poudre d’amande et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- fruits
- kiwi
- meringue
- tarte
image:
  url:
  alt: Tarte au kiwi meringuée
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/tarte-au-kiwi-meringuee.md
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
    - from: farine
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : farine → mix farine sans gluten + psyllium.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: beurre
      to: beurre sans lactose ou clarifié
      note:
    - from: beurre
      to: beurre sans lactose ou clarifié
      note:
    note: 'Lactose : beurre → beurre sans lactose ou clarifié.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: beurre
      to: margarine végétale
      note:
    - from: beurre
      to: margarine végétale
      note:
    note: 'Produits laitiers : beurre → margarine végétale.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (jaune d’œuf) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: poudre d’amande
      to: graines de tournesol
      note:
    note: 'Fruits à coque : poudre d’amande → graines de tournesol.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
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
histoire: 'La tarte au kiwi meringuée n’est pas un mets historique catalogué : c’est une lecture
  fruitée de la tarte au citron meringuée (pâte sablée, crème acidulée cuite, meringue). Le
  kiwi (Actinidia), originaire de Chine centrale et orientale, est décrit dès la dynastie
  Song (XIIe s.). Les graines arrivent en Nouvelle-Zélande en 1904 (Isabel Fraser) ; Hayward
  Wright sélectionne le cultivar Hayward en 1928, encore le kiwi vert le plus cultivé. Le
  nom commercial kiwifruit est adopté en 1959 par Turners & Growers, le « Chinese gooseberry
  » passant mal aux États-Unis.'
fun_facts:
- text: 'Première mention identifiable du nom « lemon meringue pie » : 1869 (American Agriculturalist)
    ; desserts aux fruits recouverts de meringue cuite dès Menon, 1739.'
  source_name: Wikipedia EN, Lemon meringue pie
  source_url: https://en.wikipedia.org/wiki/Lemon_meringue_pie
- text: La tarte au citron française classique n’a pas de meringue ; la version meringuée
    est plus récente en vitrine.
  source_name: Wikipedia EN, Lemon tart
  source_url: https://en.wikipedia.org/wiki/Lemon_tart
- text: Hayward (1928) reste le kiwi vert de référence mondiale.
  source_name: NZKGI — History
  source_url: https://www.nzkgi.org.nz/history/
- text: Le nom kiwifruit date de 1959 (Jack Turner), pas du kiwi-oiseau comme étymologie folklorique
    unique.
  source_name: Wikipedia EN, Kiwifruit
  source_url: https://en.wikipedia.org/wiki/Kiwifruit
wines:
- name: Nivole Moscato d’Asti
  producer: Michele Chiarlo
  origin: Moscato d’Asti DOCG
  grapes: moscato bianco
  award:
  why: bulles douces, raisin muscaté ; l’acidité du kiwi et le sucre de meringue demandent
    du moelleux léger, pas un liquoreux lourd.
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Coteaux du Layon AOP
  grapes: chenin blanc
  award:
  why: chenin moelleux, agrumes et fraîcheur — même logique d’accord que pour une tarte au
    citron meringuée.
- name: Gewurztraminer Vendanges tardives
  producer: Hugel & Fils
  origin: Alsace
  grapes: gewurztraminer
  award:
  why: litchi / rose du gewurztraminer collent au kiwi mûr ; le VT porte la meringue sans
    noyer le fruit.
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
    - fruits_a_coque
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 3
    time:
      prep_min: 40
      cook_min: 35
      rest_min: 30
      total_min: 105
    equipment:
    - moule 22 cm
    - poids de cuisson
    - fouet
    - casserole
    substitutions:
    - from: pas assez de jus
      to: mixer 4–5 kiwis (comme Ma recette)
      note:
    - from: pas de chalumeau
      to: 8–10 min à 180 °C
      note:
    scale_note:
    ingredients:
    - qty: 170
      unit: g
      item: farine
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: poudre d’amande
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 85
      unit: g
      item: beurre
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: sucre
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Pâte
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d’œuf
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: eau
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: jaunes d’œufs
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: g
      item: fécule de maïs
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: kiwis bien mûrs (jus ou purée)
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: beurre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: blancs d’œufs
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre glace
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Meringue
      scale: false
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
    - "Préparation. Sablez la farine, la poudre d’amande, le beurre, le sucre et le sel. Incorporez le jaune d’œuf et l’eau. Formez une boule, réservez au frais 30 min. Foncez, piquez, cuisez à blanc 12–15 min à 180 °C sous poids, puis 5 min sans."
    - "Cuisson. Blanchissez les jaunes d’œufs avec le sucre. Ajoutez la fécule de maïs et le jus de kiwi. Cuisez à feu moyen en fouettant jusqu’à nappe. Hors du feu, incorporez le beurre. Garnissez le fond. Laissez tiédir."
    - "Finition. Montez les blancs d’œufs avec le sel, en pluie de sucre glace. Étalez en collant la meringue aux bords. Enfournez 8–10 min à 180 °C, jusqu’à blond."
    steps_niveaux:
      amateur:
      - "Préparation. Sablez la farine, la poudre d’amande, le beurre, le sucre et le sel. Incorporez le jaune d’œuf et l’eau. Formez une boule, réservez au frais 30 min. [[foncer|Foncez]], piquez, cuisez à blanc 12–15 min à 180 °C sous poids, puis 5 min sans."
      - "Cuisson. [[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre. Ajoutez la fécule de maïs et le jus de kiwi. Cuisez à feu moyen en fouettant jusqu’à nappe. [[hors-du-feu|Hors du feu]], incorporez le beurre. Garnissez le fond. Laissez tiédir."
      - "Finition. [[monter-en-neige|Montez]] les blancs d’œufs avec le sel, en pluie de sucre glace. Étalez en collant la meringue aux bords. Enfournez 8–10 min à 180 °C, jusqu’à blond."
      pro:
      - "Sabler la farine, la poudre d’amande, le beurre, le sucre et le sel. Incorporer le jaune d’œuf et l’eau. Former une boule, réserver au frais 30 min. Foncer, piquer, cuire à blanc 12–15 min à 180 °C sous poids, puis 5 min sans."
      - "Blanchir les jaunes d’œufs avec le sucre. Ajouter la fécule de maïs et le jus de kiwi. Cuire à feu moyen en fouettant jusqu’à nappe. Hors du feu, incorporer le beurre. Garnir le fond. Laisser tiédir."
      - "Monter les blancs d’œufs avec le sel, en pluie de sucre glace. Étaler en collant la meringue aux bords. Enfourner 8–10 min à 180 °C, jusqu’à blond."
      cavernes:
      - "Préparation. Farine, poudre amande, beurre, sucre, sel, sabler. Jaune d’œuf, eau, incorporer. Boule, former, frais 30 min, réserver. Foncer, piquer. Cuire à blanc 12–15 min 180 °C sous poids, puis 5 min sans."
      - "Cuisson. Jaunes d’œufs, sucre, blanchir. Fécule maïs, jus kiwi, ajouter. Feu moyen, fouetter jusqu’à nappe, cuire. Hors feu, beurre, incorporer. Fond, garnir. Tiédir."
      - "Finition. Blancs d’œufs, sel, monter. Sucre glace, pluie. Meringue, bords, coller, étaler. Four 180 °C, 8–10 min, jusqu’à blond, enfourner."
    kcal_per_serving: 630
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
    kcal_per_serving: 630
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
    difficulty: 3
    time:
      prep_min: 40
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment:
    - moule 22 cm
    - poids de cuisson
    - fouet
    - casserole
    substitutions:
    - from: aquafaba trop liquide
      to: réduire 2 min à feu doux avant de monter
      note:
    scale_note:
    ingredients:
    - qty: 170
      unit: g
      item: farine
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: poudre d’amande
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 85
      unit: g
      item: margarine végétale
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: sucre
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sel
      group: Pâte
      scale: false
      optional: false
      to_taste: true
    - qty: 25
      unit: g
      item: eau froide
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: purée de kiwi
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: fécule de maïs
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: margarine
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: curcuma (couleur, facultatif)
      group: Crème
      scale: false
      optional: true
      to_taste: false
    - qty: 80
      unit: g
      item: aquafaba
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: crème de tartre (si dispo)
      group: Meringue
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Préparation. Préparez une pâte végétale et cuisez-la à blanc."
    - "Cuisson. Mélangez la purée de kiwi, le sucre et la fécule de maïs, cuisez jusqu’à nappe, incorporez la margarine. Garnissez."
    - "Finition. Montez l’aquafaba, en pluie de sucre. Étalez, puis 8 min à 180 °C ou au chalumeau."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez une pâte végétale et cuisez-la à blanc."
      - "Cuisson. Mélangez la purée de kiwi, le sucre et la fécule de maïs, cuisez jusqu’à nappe, incorporez la margarine. Garnissez."
      - "Finition. [[monter-en-neige|Montez]] l’aquafaba, en pluie de sucre. Étalez, puis 8 min à 180 °C ou au [[chalumeau|chalumeau]]."
      pro:
      - "Préparer une pâte végétale et cuire à blanc."
      - "Mélanger la purée de kiwi, le sucre et la fécule de maïs, cuire jusqu’à nappe, incorporer la margarine. Garnir."
      - "Monter l’aquafaba, en pluie de sucre. Étaler, puis 8 min à 180 °C ou au chalumeau."
      cavernes:
      - "Préparation. Pâte végétale, préparer. Cuire à blanc."
      - "Cuisson. Purée kiwi, sucre, fécule maïs, mélanger. Jusqu’à nappe, cuire, margarine, incorporer. Garnir."
      - "Finition. Aquafaba, monter. Sucre, pluie. Étaler, puis Four 180 °C, 8 min, ou chalumeau."
    kcal_per_serving: 570
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
    kcal_per_serving: 630
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 4
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
    difficulty: 3
    time:
      prep_min: 45
      cook_min: 0
      rest_min: 0
      total_min: 90
    equipment:
    - moule à tarte
    - saladier
    - fouet
    - casserole
    - four
    - chalumeau (ou gril)
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: farine
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: poudre d’amande
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: beurre
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Pâte sablée
      scale: false
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaunes d’œufs
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: eau
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: jaunes d’œufs
      group: Crème kiwi
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: sucre
      group: Crème kiwi
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: fécule de maïs
      group: Crème kiwi
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: kiwis (jus ou blender)
      group: Crème kiwi
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre
      group: Crème kiwi
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: colorant
      group: Crème kiwi
      scale: false
      optional: true
      to_taste: true
    - qty: 2
      unit: piece
      item: blancs d’œufs
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre (pour le sirop)
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: eau
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Repos. Réalisez la pâte sablée (farine, poudre d’amande, beurre, sucre, sel, jaunes d’œufs et eau). Réservez au frais. Étalez, foncez, cuisez à blanc."
    - "Cuisson. Pour la crème kiwi : blanchissez les jaunes d’œufs avec le sucre. Ajoutez la fécule de maïs et le jus de kiwi. Cuisez en fouettant jusqu’à épaississement. Hors du feu, ajoutez le beurre (et le colorant si besoin). Garnissez le fond cuit. Laissez prendre."
    - "Finition. Pour la meringue : préparez un sirop (100 g de sucre et 20 g d’eau) et les blancs d’œufs (environ 60 g) ; gardez 20 g de sucre pour les blancs ou le montage, selon le geste habituel. Pochez ou étalez. Finissez au chalumeau ou au four."
    steps_niveaux:
      amateur:
      - "Repos. Réalisez la pâte sablée (farine, poudre d’amande, beurre, sucre, sel, jaunes d’œufs et eau). Réservez au frais. Étalez, [[foncer|foncez]], cuisez à blanc."
      - "Cuisson. Pour la crème kiwi : [[blanchir|blanchissez]] les jaunes d’œufs avec le sucre. Ajoutez la fécule de maïs et le jus de kiwi. Cuisez en fouettant jusqu’à épaississement. [[hors-du-feu|Hors du feu]], ajoutez le beurre (et le colorant si besoin). Garnissez le fond cuit. Laissez prendre."
      - "Finition. Pour la meringue : préparez un sirop (100 g de sucre et 20 g d’eau) et les blancs d’œufs (environ 60 g) ; gardez 20 g de sucre pour les blancs ou le montage, selon le geste habituel. Pochez ou étalez. Finissez au [[chalumeau|chalumeau]] ou au four."
      pro:
      - "Réaliser la pâte sablée (farine, poudre d’amande, beurre, sucre, sel, jaunes d’œufs et eau). Réserver au frais. Étaler, foncer, cuire à blanc."
      - "Crème kiwi : blanchir les jaunes d’œufs avec le sucre. Ajouter la fécule de maïs et le jus de kiwi. Cuire en fouettant jusqu’à épaississement. Hors du feu, ajouter le beurre (et le colorant si besoin). Garnir le fond cuit. Laisser prendre."
      - "Meringue : préparer un sirop (100 g de sucre et 20 g d’eau) et les blancs d’œufs (environ 60 g) ; garder 20 g de sucre pour les blancs ou le montage, selon le geste habituel. Pocher ou étaler. Finir au chalumeau ou au four."
      cavernes:
      - "Repos. Pâte sablée (farine, poudre amande, beurre, sucre, sel, jaunes d’œufs, eau), réaliser. Frais, réserver. Étaler, foncer, cuire à blanc."
      - "Cuisson. Crème kiwi : jaunes d’œufs, sucre, blanchir. Fécule maïs, jus kiwi, ajouter. Fouetter jusqu’à épaississement, cuire. Hors feu, beurre (et colorant si besoin), ajouter. Fond cuit, garnir. Prendre."
      - "Finition. Meringue : sirop (100 g sucre, 20 g eau) et blancs d’œufs (environ 60 g) ; garder 20 g sucre pour blancs ou montage, selon geste habituel. Pocher ou étaler. Finir chalumeau ou four."
    kcal_per_serving: 900
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
  ma_recette:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24–48 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte au kiwi meringuée

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Sucré/tarte-au-kiwi-meringuee.md).

**Catégorie :** sucré

## Ingrédients (4 personnes)

**Pâte**
- 170 g de farine
- 35 g de poudre d’amande
- 85 g de beurre
- 35 g de sucre + pincée de sel
- 1 jaune d’œuf + 20 g d’eau

**Crème**
- 3 jaunes d’œufs
- 50 g de sucre
- 12 g de fécule de maïs
- jus / purée de 5 kiwis bien mûrs
- 15 g de beurre

**Meringue**
- 2 blancs d’œufs (~60 g)
- 80 g de sucre glace
- pincée de sel

## Préparation

1. Préparation. Sablez la farine, la poudre d’amande, le beurre, le sucre et le sel. Incorporez le jaune d’œuf et l’eau. Formez une boule, réservez au frais 30 min. Foncez, piquez, cuisez à blanc 12–15 min à 180 °C sous poids, puis 5 min sans.
2. Cuisson. Blanchissez les jaunes d’œufs avec le sucre. Ajoutez la fécule de maïs et le jus de kiwi. Cuisez à feu moyen en fouettant jusqu’à nappe. Hors du feu, incorporez le beurre. Garnissez le fond. Laissez tiédir.
3. Finition. Montez les blancs d’œufs avec le sel, en pluie de sucre glace. Étalez en collant la meringue aux bords. Enfournez 8–10 min à 180 °C, jusqu’à blond.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
