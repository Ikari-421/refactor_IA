---
schema: recette-web-jigme/v2
slug: gratin-inspiration-normande
title: Gratin inspiration normande
lang: fr
description: "Gratin inspiration normande : recette française avec grosse pomme de terre, coeur de Neufchatel et crème fraîche, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- gratin
- pomme de terre
- Normandie
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/gratin-inspiration-normande.jpg
  alt: Gratin inspiration normande
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gratin-inspiration-normande.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
  sans_lactose:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (coeur de Neufchatel) : pas d’adaptation fiable.'
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
    note: 'Contient poisson (dés de saumon fumé) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - soja
    swaps: []
    note: 'Contient soja (lardons de tempeh fumé) : pas d’adaptation fiable.'
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
  Gratin de pommes de terre à la crème, oignons et lardons : lecture « normande »
  (crème, porc) d’un gratin de pommes de terre, pas une AOC ni une recette datée.
  Le gratin dauphinois, lui, est du Dauphiné et se passe souvent de lardons.
fun_facts:
- text: >
    La crème fraîche d’épaisseur normande lie sans béchamel : trop chaude d’un
    coup, elle granule.
  source_name: Usage
  source_url:
- text: >
    Les lardons rendent le plat plus salé que le dauphinois : on sale le lait
    avec retenue.
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Famille Lieubeau
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé, citron — la crème et le lardon, sans un chardonnay boisé.
- name: Coteaux du Giennois
  producer: Domaine de Villargeau
  origin: Giennois, Loire
  grapes: sauvignon
  award:
  why: Blanc vif — l’oignon et le gras.
- name: Bourgueil
  producer: Yannick Amirault
  origin: Bourgueil, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc, poivron — les lardons, tanin souple.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 80
      cook_min: 45
      rest_min: 0
      total_min: 125
    equipment: &id002
    - four
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: grosse pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: coeur de Neufchatel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraîche
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
      item: la poitrine de porc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon.
      Découpez des lardons dans la poitrine.
    - Dressage. Pour le dressage, beurrez votre moule et commencez par faire un lit de pommes de terre
      et recouvrez-le de crème, de lardons et d’oignons.
    - Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez
      le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit
      de pommes de terre, d’oignons et de lardons. Pour finir, placez le chapeau du fromage
      sur le dessus de votre gratin. Enfournez à 160° pendant 45 minutes. Il est l’heure de
      vous régaler ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon. Découpez des lardons dans la poitrine."
      - "Dressage. Beurrez votre moule. Faites un lit de pommes de terre et recouvrez-le de crème, de lardons et d’oignons."
      - "Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de lardons. Placez le chapeau du fromage sur le dessus. Enfournez à 160° pendant 45 minutes."
      pro:
      - "Éplucher les pommes de terres. Couper en tranches fines. Couper l’oignon. Découper des lardons dans la poitrine."
      - "Beurrer le moule. Lit de pommes de terre. Recouvrir de crème, lardons et oignons."
      - "Couper le coeur de Neufchatel en deux. Réserver le chapeau. Déposer le reste en morceaux. Nouveau lit de pommes de terre, oignons et lardons. Chapeau du fromage sur le dessus. Enfourner à 160° 45 minutes."
      cavernes:
      - "Préparation. Pommes de terres, éplucher, tranches fines. Oignon, couper. Poitrine, lardons."
      - "Dressage. Moule, beurrer. Lit pommes de terre. Crème, lardons, oignons, recouvrir."
      - "Finition. Coeur Neufchatel, couper deux. Chapeau garder. Reste, morceaux, gratin. Nouveau lit pommes de terre, oignons, lardons. Chapeau fromage dessus. Four 160° 45 minutes."
    kcal_per_serving: 173
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
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: grosse pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: coeur de Neufchatel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraîche
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
      item: lardons de tempeh fumé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon.
      Découpez le tempeh fumé en lardons.
    - Dressage. Pour le dressage, beurrez votre moule et commencez par faire un lit de pommes de terre
      et recouvrez-le de crème, de lardons de tempeh et d’oignons.
    - Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez
      le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit
      de pommes de terre, d’oignons et de lardons de tempeh. Pour finir, placez le chapeau du fromage
      sur le dessus de votre gratin. Enfournez à 160° pendant 45 minutes. Il est l’heure de
      vous régaler ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon. Découpez le tempeh fumé en lardons."
      - "Dressage. Beurrez votre moule. Faites un lit de pommes de terre et recouvrez-le de crème, de lardons de tempeh et d’oignons."
      - "Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de lardons de tempeh. Placez le chapeau du fromage sur le dessus. Enfournez à 160° pendant 45 minutes."
      pro:
      - "Éplucher les pommes de terres. Couper en tranches fines. Couper l’oignon. Découper le tempeh fumé en lardons."
      - "Beurrer le moule. Lit de pommes de terre. Recouvrir de crème, lardons de tempeh et oignons."
      - "Couper le coeur de Neufchatel en deux. Réserver le chapeau. Déposer le reste en morceaux. Nouveau lit de pommes de terre, oignons et lardons de tempeh. Chapeau du fromage sur le dessus. Enfourner à 160° 45 minutes."
      cavernes:
      - "Préparation. Pommes de terres, éplucher, tranches fines. Oignon, couper. Tempeh fumé, lardons."
      - "Dressage. Moule, beurrer. Lit pommes de terre. Crème, lardons tempeh, oignons, recouvrir."
      - "Finition. Coeur Neufchatel, couper deux. Chapeau garder. Reste, morceaux, gratin. Nouveau lit pommes de terre, oignons, lardons tempeh. Chapeau fromage dessus. Four 160° 45 minutes."
    kcal_per_serving: 173
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: grosse pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème de soja ou avoine
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
      item: lardons de tempeh fumé
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
    - Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon.
      Découpez le tempeh fumé en lardons.
    - Dressage. Pour le dressage, graissez votre moule avec de la margarine végétale et commencez par un lit de pommes de terre, recouvrez-le de crème de soja ou d’avoine, de lardons de tempeh et d’oignons.
    - Cuisson. Coupez le fromage végétal en morceaux et répartissez-les dans le gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de tempeh. Terminez par une couche de fromage végétal. Enfournez à 160° pendant 45 minutes. Il est l’heure de
      vous régaler ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon. Découpez le tempeh fumé en lardons."
      - "Dressage. Graissez votre moule avec de la margarine végétale. Faites un lit de pommes de terre et recouvrez-le de crème de soja ou d’avoine, de lardons de tempeh et d’oignons."
      - "Cuisson. Coupez le fromage végétal en morceaux et répartissez-les dans le gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de tempeh. Terminez par une couche de fromage végétal. Enfournez à 160° pendant 45 minutes."
      pro:
      - "Éplucher les pommes de terres. Couper en tranches fines. Couper l’oignon. Découper le tempeh fumé en lardons."
      - "Graisser le moule à la margarine végétale. Lit de pommes de terre. Recouvrir de crème de soja ou d’avoine, lardons de tempeh et oignons."
      - "Couper le fromage végétal en morceaux. Répartir dans le gratin. Nouveau lit de pommes de terre, oignons et tempeh. Couche de fromage végétal. Enfourner à 160° 45 minutes."
      cavernes:
      - "Préparation. Pommes de terres, éplucher, tranches fines. Oignon, couper. Tempeh fumé, lardons."
      - "Dressage. Moule, margarine végétale, graisser. Lit pommes de terre. Crème de soja ou avoine, lardons tempeh, oignons, recouvrir."
      - "Cuisson. Fromage végétal, morceaux, répartir gratin. Nouveau lit pommes de terre, oignons, tempeh. Couche fromage végétal. Four 160° 45 minutes."
    kcal_per_serving: 173
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
    - lactose
    - produits_laitiers
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: grosse pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: coeur de Neufchatel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: crème fraîche
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
      item: dés de saumon fumé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon.
      Découpez des lardons dans la poitrine.
    - Dressage. Pour le dressage, beurrez votre moule et commencez par faire un lit de pommes de terre
      et recouvrez-le de crème, de lardons et d’oignons.
    - Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez
      le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit
      de pommes de terre, d’oignons et de lardons. Pour finir, placez le chapeau du fromage
      sur le dessus de votre gratin. Enfournez à 160° pendant 45 minutes. Il est l’heure de
      vous régaler ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon. Découpez des lardons dans la poitrine."
      - "Dressage. Beurrez votre moule. Faites un lit de pommes de terre et recouvrez-le de crème, de lardons et d’oignons."
      - "Finition. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de lardons. Placez le chapeau du fromage sur le dessus. Enfournez à 160° pendant 45 minutes."
      pro:
      - "Éplucher les pommes de terres. Couper en tranches fines. Couper l’oignon. Découper des lardons dans la poitrine."
      - "Beurrer le moule. Lit de pommes de terre. Recouvrir de crème, lardons et oignons."
      - "Couper le coeur de Neufchatel en deux. Réserver le chapeau. Déposer le reste en morceaux. Nouveau lit de pommes de terre, oignons et lardons. Chapeau du fromage sur le dessus. Enfourner à 160° 45 minutes."
      cavernes:
      - "Préparation. Pommes de terres, éplucher, tranches fines. Oignon, couper. Poitrine, lardons."
      - "Dressage. Moule, beurrer. Lit pommes de terre. Crème, lardons, oignons, recouvrir."
      - "Finition. Coeur Neufchatel, couper deux. Chapeau garder. Reste, morceaux, gratin. Nouveau lit pommes de terre, oignons, lardons. Chapeau fromage dessus. Four 160° 45 minutes."
    kcal_per_serving: 173
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

# Gratin inspiration normande
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gratin-inspiration-normande]]

## Ingrédients (4 personnes)

- 3 grosse pomme de terre
- 1 coeur de Neufchatel
- 50 cl de crème fraîche
- 1 oignon
-  de la poitrine de porc
-  du beurre

## Préparation

1. Épluchez les pommes de terres et coupez-les en tranches fines, puis coupez l’oignon. Découpez des lardons dans la poitrine.
2. Pour le dressage, beurrez votre moule et commencez par faire un lit de pommes de terre et recouvrez-le de crème, de lardons et d’oignons.
3. Coupez le coeur de Neufchatel en deux. Gardez la partie supérieure pour la fin et coupez le reste en morceaux avant de les déposer dans votre gratin. Ajoutez un nouveau lit de pommes de terre, d’oignons et de lardons. Pour finir, placez le chapeau du fromage sur le dessus de votre gratin. Enfournez à 160° pendant 45 minutes.

 
 

 
 Il est l’heure de vous régaler ! Bon appétit !
