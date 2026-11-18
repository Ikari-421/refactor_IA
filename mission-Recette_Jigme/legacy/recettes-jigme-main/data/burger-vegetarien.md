---
schema: recette-web-jigme/v2
slug: burger-vegetarien
title: Burger végétarien
lang: fr
description: "Burger végétarien : recette américaine avec pain à burger, pois chiches et mont d'or, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: salé
tags:
- salé
- burger
- végétarien
- pain à burger
image:
  url:
  alt: Burger végétarien
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/burger-vegetarien.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (mont d''or) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - moutarde
    swaps:
    - from: moutarde
      to: horseradish ou omettre
      note: Allergie.
    note: Omettre ou vinaigrette sans moutarde.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - arachides
    swaps:
    - from: arachide
      to: huile de tournesol
      note:
    - from: cacahuète
      to: graines de tournesol
      note:
    note: Remplacer arachide.
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
  Le burger sans viande suit le hamburger américain (XXe s.) avec un steak de légumes,
  fromage ou légumineuses. Pas d’origine unique : street food et restaurants végétariens
  des années 1970–90.
fun_facts:
- text: "Un steak de légumes trop humide explose à la poêle : on essore et on lie (œuf, chapelure, amidon)."
  source_name: Usage
  source_url:
- text: "Le fromage fondant remplace souvent le gras du bœuf dans la perception « burger »."
  source_name: Usage
  source_url:
wines:
- name: Saumur Champigny
  producer: Domaine des Roches Neuves
  origin: Varrains, Loire
  grapes: cabernet franc
  award:
  why: Poivron, fruit — grillade végétale.
- name: Bourgogne aligoté
  producer: Goisot
  origin: Saint-Bris, Bourgogne
  grapes: aligoté
  award:
  why: Citron, pierre — si le steak est plutôt fromage-herbes.
- name: Gamay de Touraine
  producer: Clos du Tue-Bœuf
  origin: Touraine
  grapes: gamay
  award:
  why: Groseille, souplesse — bun et crudités.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 10
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pois chiches
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: mont d'or
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mâche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'arachide
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
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Laissez tremper vos pois chiche secs dans de l’eau pendant une nuit avant la réalisation
      de cette recette.
    - Mixage. Égouttez vos pois chiches, placez-les dans un robot, mixez-les jusqu’à obtention d’une
      texture malléable puis placez le tout dans un saladier.
    - Cuisson. Assaisonnez les pois chiches (sel, cumin) selon vos goûts, puis ajoutez le persil, la
      coriandre et l’oignon hachés finement. Mélangez le tout avec vos mains, puis formez
      des sortes de steak.
    - Cuisson. Remplissez une casserole d’huile de friture et plongez-y vos steaks végétariens. Une
      fois qu’ils sont bien colorés (bruns), débarrassez-les dans une assiette recouverte
      de papier absorbant.
    - Cuisson. Coupez votre pain à burger en deux. Ajoutez du beurre le « bas » de votre burger, puis
      tartinez le chapeau de moutarde. Place au montage ! Ajoutez une bonne dose de fromage
      (on a pris du Mont D’or dans notre recette) et le steak végétarien. Enfournez le tout
      au four pendant 5min à 180°C.
    - Finition. Une fois le fromage fondu, débarrassez le burger sur une assiette et finalisez avec
      des tranches de tomates et quelques feuilles de la mâche. Arrosez le tout d’un filet
      de vinaigre balsamique, déposez le chapeau du burger et c’est prêt ! Servez le burger
      sur une belle assiette, accompagné de délicieuses frites maison (il paraît que les végétariens
      ADORENT les frites de patates douces). Bon appétit !
    steps_niveaux:
      amateur:
      - "Tremper. Laissez tremper les pois chiches secs dans de l’eau pendant une nuit avant de réaliser cette recette."
      - "Mixage. Égouttez les pois chiches, placez-les dans un robot, mixez-les jusqu’à obtention d’une texture malléable, puis versez le tout dans un saladier."
      - "Steaks. Assaisonnez les pois chiches (sel, cumin) selon vos goûts, puis ajoutez le persil, la coriandre et l’oignon hachés finement. Mélangez le tout avec vos mains, puis formez des sortes de steak."
      - "Friture. Remplissez une casserole d’huile de friture et plongez-y les steaks. Une fois qu’ils sont bien colorés (bruns), débarrassez-les dans une assiette recouverte de papier absorbant."
      - "Montage. Coupez le pain à burger en deux. Ajoutez du beurre sur le bas du burger, puis tartinez le chapeau de moutarde. Ajoutez une bonne dose de mont d’or et le steak. Enfournez le tout au four pendant 5 min à 180 °C."
      - "Finition. Une fois le fromage fondu, débarrassez le burger sur une assiette. Ajoutez des tranches de tomates et quelques feuilles de mâche. Arrosez d’un filet de vinaigre balsamique, déposez le chapeau. Servez accompagné de frites maison (frites de patates douces, selon la source)."
      pro:
      - "Faire tremper les pois chiches secs dans l’eau pendant une nuit."
      - "Égoutter les pois chiches. Mixer au robot jusqu’à texture malléable. Verser dans un saladier."
      - "Assaisonner les pois chiches (sel, cumin) selon le goût. Ajouter persil, coriandre et oignon hachés finement. Mélanger à la main. Former des steaks."
      - "Remplir une casserole d’huile de friture. Y plonger les steaks. Colorés bruns : débarrasser sur assiette recouverte de papier absorbant."
      - "Couper le pain à burger en deux. Beurrer le bas, tartiner le chapeau de moutarde. Ajouter mont d’or et steak. Enfourner 5 min à 180 °C."
      - "Fromage fondu : débarrasser sur assiette. Tranches de tomates, feuilles de mâche. Filet de vinaigre balsamique. Déposer le chapeau. Servir avec frites maison (frites de patates douces, selon la source)."
      cavernes:
      - "Tremper. Pois chiches secs, tremper eau, nuit."
      - "Mixage. Pois chiches, égoutter. Robot, mixer. Texture malléable. Saladier."
      - "Steaks. Pois chiches, assaisonner sel cumin. Persil, coriandre, oignon hachés. Mains, mélanger. Steaks, former."
      - "Friture. Casserole huile friture. Steaks, plonger. Colorés bruns. Assiette papier absorbant."
      - "Montage. Pain burger, couper deux. Beurre, bas burger. Chapeau, moutarde. Mont d’or, steak. Four 180 °C 5 min."
      - "Finition. Fromage fondu. Assiette. Tranches tomates, feuilles mâche. Filet vinaigre balsamique. Chapeau. Frites maison, servir. Patates douces, selon source."
    kcal_per_serving: 500
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 67
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - moutarde
    - arachides
    difficulty: 2
    time:
      prep_min: 40
      cook_min: 10
      rest_min: 0
      total_min: 50
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pois chiches
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mâche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'arachide
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
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Laissez tremper vos pois chiche secs dans de l’eau pendant une nuit avant la réalisation
      de cette recette.
    - Mixage. Égouttez vos pois chiches, placez-les dans un robot, mixez-les jusqu’à obtention d’une
      texture malléable puis placez le tout dans un saladier.
    - Cuisson. Assaisonnez les pois chiches (sel, cumin) selon vos goûts, puis ajoutez le persil, la
      coriandre et l’oignon hachés finement. Mélangez le tout avec vos mains, puis formez
      des sortes de steak.
    - Cuisson. Remplissez une casserole d’huile de friture et plongez-y vos steaks végétariens. Une
      fois qu’ils sont bien colorés (bruns), débarrassez-les dans une assiette recouverte
      de papier absorbant.
    - Cuisson. Coupez votre pain à burger en deux. Ajoutez de la margarine végétale sur le « bas » de votre burger, puis tartinez le chapeau de moutarde. Place au montage ! Ajoutez une bonne dose de fromage végétal et le steak de pois chiches. Enfournez le tout
      au four pendant 5min à 180°C.
    - Finition. Une fois le fromage végétal fondu, débarrassez le burger sur une assiette et finalisez avec
      des tranches de tomates et quelques feuilles de la mâche. Arrosez le tout d’un filet
      de vinaigre balsamique, déposez le chapeau du burger et c’est prêt ! Servez le burger
      sur une belle assiette, accompagné de délicieuses frites maison (il paraît que les végétariens
      ADORENT les frites de patates douces). Bon appétit !
    steps_niveaux:
      amateur:
      - "Tremper. Laissez tremper les pois chiches secs dans de l’eau pendant une nuit avant de réaliser cette recette."
      - "Mixage. Égouttez les pois chiches, placez-les dans un robot, mixez-les jusqu’à obtention d’une texture malléable, puis versez le tout dans un saladier."
      - "Steaks. Assaisonnez les pois chiches (sel, cumin) selon vos goûts, puis ajoutez le persil, la coriandre et l’oignon hachés finement. Mélangez le tout avec vos mains, puis formez des sortes de steak."
      - "Friture. Remplissez une casserole d’huile de friture et plongez-y les steaks. Une fois qu’ils sont bien colorés (bruns), débarrassez-les dans une assiette recouverte de papier absorbant."
      - "Montage. Coupez le pain à burger en deux. Ajoutez de la margarine végétale sur le bas du burger, puis tartinez le chapeau de moutarde. Ajoutez une bonne dose de fromage végétal et le steak de pois chiches. Enfournez le tout au four pendant 5 min à 180 °C."
      - "Finition. Une fois le fromage végétal fondu, débarrassez le burger sur une assiette. Ajoutez des tranches de tomates et quelques feuilles de mâche. Arrosez d’un filet de vinaigre balsamique, déposez le chapeau. Servez accompagné de frites maison (frites de patates douces, selon la source)."
      pro:
      - "Faire tremper les pois chiches secs dans l’eau pendant une nuit."
      - "Égoutter les pois chiches. Mixer au robot jusqu’à texture malléable. Verser dans un saladier."
      - "Assaisonner les pois chiches (sel, cumin) selon le goût. Ajouter persil, coriandre et oignon hachés finement. Mélanger à la main. Former des steaks."
      - "Remplir une casserole d’huile de friture. Y plonger les steaks. Colorés bruns : débarrasser sur assiette recouverte de papier absorbant."
      - "Couper le pain à burger en deux. Margarine végétale sur le bas, tartiner le chapeau de moutarde. Ajouter fromage végétal et steak de pois chiches. Enfourner 5 min à 180 °C."
      - "Fromage végétal fondu : débarrasser sur assiette. Tranches de tomates, feuilles de mâche. Filet de vinaigre balsamique. Déposer le chapeau. Servir avec frites maison (frites de patates douces, selon la source)."
      cavernes:
      - "Tremper. Pois chiches secs, tremper eau, nuit."
      - "Mixage. Pois chiches, égoutter. Robot, mixer. Texture malléable. Saladier."
      - "Steaks. Pois chiches, assaisonner sel cumin. Persil, coriandre, oignon hachés. Mains, mélanger. Steaks, former."
      - "Friture. Casserole huile friture. Steaks, plonger. Colorés bruns. Assiette papier absorbant."
      - "Montage. Pain burger, couper deux. Margarine végétale, bas burger. Chapeau, moutarde. Fromage végétal, steak pois chiches. Four 180 °C 5 min."
      - "Finition. Fromage végétal fondu. Assiette. Tranches tomates, feuilles mâche. Filet vinaigre balsamique. Chapeau. Frites maison, servir. Patates douces, selon source."
    kcal_per_serving: 470
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 67
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

# Burger végétarien
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 1 personne.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/burger-vegetarien]]

## Ingrédients (1 personne)

- 1 pain à burger
- 100 g de pois chiches
- 30 g de mont d'or
- 1 tomate
- 1 oignon
-  coriandre fraiche
-  persil frais
-  cumin
-  mâche
-  huile d'arachide
-  beurre
-  moutarde

## Préparation

1. Laissez tremper vos pois chiche secs dans de l’eau pendant une nuit avant la réalisation de cette recette.
2. Égouttez vos pois chiches, placez-les dans un robot, mixez-les jusqu’à obtention d’une texture malléable puis placez le tout dans un saladier.
3. Assaisonnez les pois chiches (sel, cumin) selon vos goûts, puis ajoutez le persil, la coriandre et l’oignon hachés finement. Mélangez le tout avec vos mains, puis formez des sortes de steak.
4. Remplissez une casserole d’huile de friture et plongez-y vos steaks végétariens. Une fois qu’ils sont bien colorés (bruns), débarrassez-les dans une assiette recouverte de papier absorbant.
5. Coupez votre pain à burger en deux. Ajoutez du beurre le « bas » de votre burger, puis tartinez le chapeau de moutarde. Place au montage ! Ajoutez une bonne dose de fromage (on a pris du Mont D’or dans notre recette) et le steak végétarien. Enfournez le tout au four pendant 5min à 180°C.
6. Une fois le fromage fondu, débarrassez le burger sur une assiette et finalisez avec des tranches de tomates et quelques feuilles de la mâche. Arrosez le tout d’un filet de vinaigre balsamique, déposez le chapeau du burger et c’est prêt !

 
 

 
 Servez  le burger sur une belle assiette, accompagné de délicieuses frites maison (il paraît que les végétariens ADORENT les frites de patates douces). Bon appétit !
