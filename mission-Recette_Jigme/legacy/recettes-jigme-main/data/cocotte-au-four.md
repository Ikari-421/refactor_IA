---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: cocotte-au-four
title: Cocotte au four
lang: fr
description: "Cocotte au four : recette française avec poulet, du cumin et la cardamome en poudre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- poulet
- four
- légumes
- hiver
image:
  url:
  alt: Cocotte au four
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cocotte-au-four.md
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
    - from: paneer ou tofu ferme
      to: tofu ferme
      note:
    note: 'Lactose : paneer ou tofu ferme → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: paneer ou tofu ferme
      to: tofu ferme
      note:
    note: 'Produits laitiers : paneer ou tofu ferme → tofu ferme.'
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
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: paneer ou tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; tofu ferme → pois chiches rôtis.'
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
  Poulet et légumes cuits à l’étouffée dans une cocotte. Le mot désigne la
  marmite en fonte émaillée (XIXe–XXe s. en France) ; le poulet en cocotte est
  un plat de maison, pas une recette datée d’un chef.
fun_facts:
- text: "La fonte retient la chaleur et concentre les jus ; le four évite de surveiller un feu vif."
  source_name: Usage
  source_url:
- text: "Le poulet en cocotte fermée reste plus juteux qu’à découvert, au prix d’une peau moins croustillante."
  source_name: Usage
  source_url:
wines:
- name: Côtes du Rhône Villages
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit mûr, herbes — poulet rôti et légumes, tanin modéré.
- name: Mâcon-Villages
  producer: Domaine de la Croix Senaillet
  origin: Davayé, Mâconnais
  grapes: chardonnay
  award:
  why: Citron, pierre — le jus de cocotte, sans bois.
- name: Saumur-Champigny
  producer: Domaine Filliatreau
  origin: Chaintres, Saumur
  grapes: cabernet franc
  award:
  why: Poivron, cerise — la peau du poulet et le fond de légumes.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 90
      rest_min: 90
      total_min: 210
    equipment: &id002
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: gousses d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain sec
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: feuille de laurier
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: pomme de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de volaille
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Massez le poulet avec les épices de votre choix. Ici, on utilise du cumin et de la cardamome
      en poudre. Fourrez votre poulet avec les gousses d’ail, des morceaux de pain sec (qui
      s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez votre poulet dans
      une cocotte en fonte.
    - Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du poulet dans la cocotte
      et faites de même avec les pommes de terre grenaille. Recouvrez avec 1L de fond de volaille
      et refermez la cocotte avant d’enfourner. Comptez au moins 1h30 de cuisson à 220°C.
      C’est prêt ! Admirez comme la peau du poulet est craquante et comme les légumes sont
      bien fondants ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Massez le poulet avec les épices de votre choix : cumin et cardamome en poudre. Fourrez-le avec les gousses d’ail, des morceaux de pain sec (ils s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez-le dans une cocotte en fonte."
      - "Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du poulet dans la cocotte, ainsi que les pommes de terre grenaille. Recouvrez avec 1 L de fond de volaille, refermez la cocotte et enfournez. Comptez au moins 1 h 30 de cuisson à 220 °C."
      pro:
      - "Masser le poulet avec cumin et cardamome en poudre. Fourrer d’ail, de morceaux de pain sec et de feuilles de laurier. Placer dans une cocotte en fonte."
      - "Éplucher et découper l’oignon et les carottes. Les disposer autour du poulet avec les pommes de terre grenaille. Recouvrir de 1 L de fond de volaille. Refermer. Enfourner au moins 1 h 30 à 220 °C."
      cavernes:
      - "Préparation. Poulet, masser cumin cardamome poudre. Fourrer ail, morceaux pain sec, feuilles laurier. Poulet, cocotte fonte."
      - "Finition. Oignon carottes, éplucher découper. Autour poulet, cocotte. Pommes de terre grenaille, même. Fond volaille 1 L, recouvrir. Cocotte, refermer. Four 220 °C, 1 h 30 minimum."
    kcal_per_serving: 264
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
    - gluten
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: gousses d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain sec
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: feuille de laurier
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: pomme de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Massez le paneer ou tofu ferme avec les épices de votre choix. Ici, on utilise du cumin
      et de la cardamome en poudre. Fourrez votre paneer ou tofu ferme avec les gousses d’ail,
      des morceaux de pain sec (qui s’imbiberont de jus de cuisson) et des feuilles de laurier.
      Placez votre paneer ou tofu ferme dans une cocotte en fonte.
    - Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du paneer ou tofu ferme
      dans la cocotte et faites de même avec les pommes de terre grenaille. Recouvrez avec
      1L de fond de légumes et refermez la cocotte avant d’enfourner. Comptez au moins 1h30
      de cuisson à 220°C. C’est prêt ! Admirez comme la peau du paneer ou tofu ferme est craquante
      et comme les légumes sont bien fondants ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Massez le paneer ou tofu ferme avec les épices de votre choix : cumin et cardamome en poudre. Fourrez-le avec les gousses d’ail, des morceaux de pain sec (ils s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez-le dans une cocotte en fonte."
      - "Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du paneer ou tofu ferme dans la cocotte, ainsi que les pommes de terre grenaille. Recouvrez avec 1 L de fond de légumes, refermez la cocotte et enfournez. Comptez au moins 1 h 30 de cuisson à 220 °C."
      pro:
      - "Masser le paneer ou tofu ferme avec cumin et cardamome en poudre. Fourrer d’ail, de morceaux de pain sec et de feuilles de laurier. Placer dans une cocotte en fonte."
      - "Éplucher et découper l’oignon et les carottes. Les disposer autour du paneer ou tofu ferme avec les pommes de terre grenaille. Recouvrir de 1 L de fond de légumes. Refermer. Enfourner au moins 1 h 30 à 220 °C."
      cavernes:
      - "Préparation. Paneer ou tofu ferme, masser cumin cardamome poudre. Fourrer ail, morceaux pain sec, feuilles laurier. Paneer ou tofu ferme, cocotte fonte."
      - "Finition. Oignon carottes, éplucher découper. Autour paneer ou tofu ferme, cocotte. Pommes de terre grenaille, même. Fond légumes 1 L, recouvrir. Cocotte, refermer. Four 220 °C, 1 h 30 minimum."
    kcal_per_serving: 245
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
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
    - qty: 1
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: gousses d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain sec
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: feuille de laurier
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: pomme de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Massez le tofu ou tofu ferme avec les épices de votre choix. Ici, on utilise du cumin
      et de la cardamome en poudre. Fourrez votre tofu ou tofu ferme avec les gousses d’ail,
      des morceaux de pain sec (qui s’imbiberont de jus de cuisson) et des feuilles de laurier.
      Placez votre tofu ou tofu ferme dans une cocotte en fonte.
    - Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du tofu ou tofu ferme
      dans la cocotte et faites de même avec les pommes de terre grenaille. Recouvrez avec
      1L de fond de légumes et refermez la cocotte avant d’enfourner. Comptez au moins 1h30
      de cuisson à 220°C. C’est prêt ! Admirez comme la peau du tofu ou tofu ferme est craquante
      et comme les légumes sont bien fondants ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Massez le tofu ou tofu ferme avec les épices de votre choix : cumin et cardamome en poudre. Fourrez-le avec les gousses d’ail, des morceaux de pain sec (ils s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez-le dans une cocotte en fonte."
      - "Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du tofu ou tofu ferme dans la cocotte, ainsi que les pommes de terre grenaille. Recouvrez avec 1 L de fond de légumes, refermez la cocotte et enfournez. Comptez au moins 1 h 30 de cuisson à 220 °C."
      pro:
      - "Masser le tofu ou tofu ferme avec cumin et cardamome en poudre. Fourrer d’ail, de morceaux de pain sec et de feuilles de laurier. Placer dans une cocotte en fonte."
      - "Éplucher et découper l’oignon et les carottes. Les disposer autour du tofu ou tofu ferme avec les pommes de terre grenaille. Recouvrir de 1 L de fond de légumes. Refermer. Enfourner au moins 1 h 30 à 220 °C."
      cavernes:
      - "Préparation. Tofu ou tofu ferme, masser cumin cardamome poudre. Fourrer ail, morceaux pain sec, feuilles laurier. Tofu ou tofu ferme, cocotte fonte."
      - "Finition. Oignon carottes, éplucher découper. Autour tofu ou tofu ferme, cocotte. Pommes de terre grenaille, même. Fond légumes 1 L, recouvrir. Cocotte, refermer. Four 220 °C, 1 h 30 minimum."
    kcal_per_serving: 245
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
    - gluten
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du cumin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: gousses d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain sec
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: feuille de laurier
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: pomme de terre grenaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fumet de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Massez le cabillaud avec les épices de votre choix. Ici, on utilise du cumin et de la
      cardamome en poudre. Fourrez votre cabillaud avec les gousses d’ail, des morceaux de
      pain sec (qui s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez votre
      cabillaud dans une cocotte en fonte.
    - Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du cabillaud dans la
      cocotte et faites de même avec les pommes de terre grenaille. Recouvrez avec 1L de fumet
      de poisson et refermez la cocotte avant d’enfourner. Comptez au moins 1h30 de cuisson
      à 220°C. C’est prêt ! Admirez comme la peau du cabillaud est craquante et comme les
      légumes sont bien fondants ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Massez le cabillaud avec les épices de votre choix : cumin et cardamome en poudre. Fourrez-le avec les gousses d’ail, des morceaux de pain sec (ils s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez-le dans une cocotte en fonte."
      - "Finition. Épluchez et découpez l’oignon et les carottes. Placez-les autour du cabillaud dans la cocotte, ainsi que les pommes de terre grenaille. Recouvrez avec 1 L de fumet de poisson, refermez la cocotte et enfournez. Comptez au moins 1 h 30 de cuisson à 220 °C."
      pro:
      - "Masser le cabillaud avec cumin et cardamome en poudre. Fourrer d’ail, de morceaux de pain sec et de feuilles de laurier. Placer dans une cocotte en fonte."
      - "Éplucher et découper l’oignon et les carottes. Les disposer autour du cabillaud avec les pommes de terre grenaille. Recouvrir de 1 L de fumet de poisson. Refermer. Enfourner au moins 1 h 30 à 220 °C."
      cavernes:
      - "Préparation. Cabillaud, masser cumin cardamome poudre. Fourrer ail, morceaux pain sec, feuilles laurier. Cabillaud, cocotte fonte."
      - "Finition. Oignon carottes, éplucher découper. Autour cabillaud, cocotte. Pommes de terre grenaille, même. Fumet poisson 1 L, recouvrir. Cocotte, refermer. Four 220 °C, 1 h 30 minimum."
    kcal_per_serving: 245
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

# Cocotte au four
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cocotte-au-four]]

## Ingrédients (4 personnes)

- 1 poulet
-  du cumin
-  de la cardamome en poudre
- 4 gousses d'ail
-  du pain sec
- 2 feuille de laurier
- 1 oignon
- 3 carotte
- 250 g de pomme de terre grenaille
- 1 L de fond de volaille

## Préparation

1. Massez le poulet avec les épices de votre choix. Ici, on utilise du cumin et de la cardamome en poudre. Fourrez votre poulet avec les gousses d’ail, des morceaux de pain sec (qui s’imbiberont de jus de cuisson) et des feuilles de laurier. Placez votre poulet dans une cocotte en fonte.
2. Épluchez et découpez l’oignon et les carottes. Placez-les autour du poulet dans la cocotte et faites de même avec les pommes de terre grenaille. Recouvrez avec 1L de fond de volaille et refermez la cocotte avant d’enfourner. Comptez au moins 1h30 de cuisson à 220°C.

 
 

 
 C’est prêt ! Admirez comme la peau du poulet est craquante et comme les légumes sont bien fondants ! Bon appétit !
