---
schema: recette-web-jigme/v2
slug: tataki-de-thon
title: Tataki de thon
lang: fr
description: "Tataki de thon : recette japonaise avec thon, wasabi et gingembre rose, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- poisson
- rapide
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tataki-de-thon.webp
  alt: Tataki de thon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tataki-de-thon.md
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
    - from: sauce soja
      to: tamari sans gluten
      note:
    note: 'Gluten : sauce soja → tamari sans gluten.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Lactose : tofu ferme ou halloumi → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Produits laitiers : tofu ferme ou halloumi → tofu ferme.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - sesame
    swaps: []
    note: 'Contient sésame (graines de sésame doré) : pas d’adaptation fiable.'
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Tataki : pièce saisie très vite sur toutes les faces, cœur cru. Thon (maguro), souvent albacore
  ou gros œil. Geste japonais, pas un thon mi-cuit de bistrot anonyme.

  '
fun_facts:
- text: >
    La pièce doit être très froide et la poêle très chaude : sinon le cœur cuit.
  source_name: Grokipedia, Tataki
  source_url: https://grokipedia.com/page/Tataki
- text: >
    Un thon « steak » trop fin cuit à cœur ; on vise un pavé.
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Luneau-Papin
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — le thon cru-saisi, sans un chardonnay gras.
- name: Alsace Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume — le soja de la trempette, acidité nette.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le poisson, sans un rouge tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 6
      rest_min: 0
      total_min: 26
    equipment: &id002
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: wasabi
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre rose
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame doré
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame noir
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Salez et poivrez les 4 faces de votre pavé de thon.
    - Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude,
      snackez chaque face de votre thon (environ 30 secondes par face). Pour un tataki, il
      faut simplement colorer l’extérieur du thon, l’intérieur doit rester cru.
    - Cuisson. Débarrassez le thon snacké dans un bol rempli d’eau froide et de glaçons afin de stopper
      la cuisson. Sortez ensuite le thon et épongez le surplus d’eau à l’aide de papier absorbant.
    - Cuisson. Coupez le thon en tranches fines. Si la cuisson est réussie, l’intérieur doit être rosé.
    - Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi.
      Ajoutez quelques graines de sésame doré et de sésame noir.
    - Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques
      accompagnements typiques (wasabi, tranches de gingembre marinées, sauce soja). Accompagnez
      votre tataki de thon d’un bol de riz, de légumes croquants ou d’une salade et régalez
      vous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Salez et poivrez les 4 faces de votre pavé de thon."
      - "Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude, snackez chaque face de votre thon (environ 30 secondes par face). Pour un tataki, il faut simplement colorer l’extérieur du thon, l’intérieur doit rester cru."
      - "Cuisson. Débarrassez le thon snacké dans un bol rempli d’eau froide et de glaçons afin de stopper la cuisson. Sortez ensuite le thon et épongez le surplus d’eau à l’aide de papier absorbant."
      - "Cuisson. Coupez le thon en tranches fines. Si la cuisson est réussie, l’intérieur doit être rosé."
      - "Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi. Ajoutez quelques graines de sésame doré et de sésame noir."
      - "Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques accompagnements typiques (wasabi, tranches de gingembre rose, sauce soja). Accompagnez votre tataki de thon d’un bol de riz, de légumes croquants ou d’une salade."
      pro:
      - "Saler et poivrer les 4 faces du pavé de thon."
      - "Chauffer de l’huile de sésame dans une poêle. Huile bien chaude : snacker chaque face du thon (environ 30 secondes par face). Colorer l’extérieur, intérieur cru."
      - "Débarrasser le thon snacké dans un bol d’eau froide et de glaçons pour stopper la cuisson. Sortir le thon et éponger le surplus d’eau au papier absorbant."
      - "Couper le thon en tranches fines. Intérieur rosé si la cuisson est réussie."
      - "Disposer les tranches sur une assiette ou sur un natte à sushi. Ajouter quelques graines de sésame doré et de sésame noir."
      - "Option : filet d’huile de sésame, wasabi, tranches de gingembre rose, sauce soja. Accompagner d’un bol de riz, de légumes croquants ou d’une salade."
      cavernes:
      - "Préparation. Pavé thon, 4 faces, saler, poivrer."
      - "Cuisson. Huile sésame, poêle, chauffer. Huile chaude. Chaque face, 30 s environ, snack. Extérieur coloré, intérieur cru."
      - "Cuisson. Thon snacké, bol eau froide, glaçons, stopper. Thon, sortir. Papier absorbant, surplus eau, éponger."
      - "Cuisson. Thon, tranches fines. Intérieur rosé, ok."
      - "Cuisson. Tranches, assiette ou natte sushi. Graines sésame doré, sésame noir."
      - "Finition. Option : filet huile sésame. Wasabi, gingembre rose, sauce soja. Riz, légumes croquants ou salade."
    kcal_per_serving: 113
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
    - soja
    - sesame
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: tofu ferme ou halloumi
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: wasabi
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre rose
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame doré
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame noir
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Salez et poivrez les 4 faces de votre pavé de tofu ferme ou halloumi.
    - Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude,
      snackez chaque face de votre tofu ferme ou halloumi (environ 30 secondes par face).
      Pour un tataki, il faut simplement colorer l’extérieur du tofu ferme ou halloumi, l’intérieur
      doit rester cru.
    - Cuisson. Débarrassez le tofu ferme ou halloumi snacké dans un bol rempli d’eau froide et de glaçons
      afin de stopper la cuisson. Sortez ensuite le tofu ferme ou halloumi et épongez le surplus
      d’eau à l’aide de papier absorbant.
    - Cuisson. Coupez le tofu ferme ou halloumi en tranches fines. Si la cuisson est réussie, l’intérieur
      doit être rosé.
    - Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi.
      Ajoutez quelques graines de sésame doré et de sésame noir.
    - Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques
      accompagnements typiques (wasabi, tranches de gingembre marinées, sauce soja). Accompagnez
      votre tataki de tofu ferme ou halloumi d’un bol de riz, de légumes croquants ou d’une
      salade et régalez vous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Salez et poivrez les 4 faces de votre pavé de tofu ferme ou halloumi."
      - "Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude, snackez chaque face de votre tofu ferme ou halloumi (environ 30 secondes par face). Pour un tataki, il faut simplement colorer l’extérieur du tofu ferme ou halloumi, l’intérieur doit rester cru."
      - "Cuisson. Débarrassez le tofu ferme ou halloumi snacké dans un bol rempli d’eau froide et de glaçons afin de stopper la cuisson. Sortez ensuite le tofu ferme ou halloumi et épongez le surplus d’eau à l’aide de papier absorbant."
      - "Cuisson. Coupez le tofu ferme ou halloumi en tranches fines. Si la cuisson est réussie, l’intérieur doit être rosé."
      - "Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi. Ajoutez quelques graines de sésame doré et de sésame noir."
      - "Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques accompagnements typiques (wasabi, tranches de gingembre rose, sauce soja). Accompagnez votre tataki de tofu ferme ou halloumi d’un bol de riz, de légumes croquants ou d’une salade."
      pro:
      - "Saler et poivrer les 4 faces du pavé de tofu ferme ou halloumi."
      - "Chauffer de l’huile de sésame dans une poêle. Huile bien chaude : snacker chaque face du tofu ferme ou halloumi (environ 30 secondes par face). Colorer l’extérieur, intérieur cru."
      - "Débarrasser le tofu ferme ou halloumi snacké dans un bol d’eau froide et de glaçons pour stopper la cuisson. Sortir et éponger le surplus d’eau au papier absorbant."
      - "Couper le tofu ferme ou halloumi en tranches fines. Intérieur rosé si la cuisson est réussie."
      - "Disposer les tranches sur une assiette ou sur un natte à sushi. Ajouter quelques graines de sésame doré et de sésame noir."
      - "Option : filet d’huile de sésame, wasabi, tranches de gingembre rose, sauce soja. Accompagner d’un bol de riz, de légumes croquants ou d’une salade."
      cavernes:
      - "Préparation. Pavé tofu ferme ou halloumi, 4 faces, saler, poivrer."
      - "Cuisson. Huile sésame, poêle, chauffer. Huile chaude. Chaque face, 30 s environ, snack. Extérieur coloré, intérieur cru."
      - "Cuisson. Tofu ferme ou halloumi snacké, bol eau froide, glaçons, stopper. Sortir. Papier absorbant, surplus eau, éponger."
      - "Cuisson. Tofu ferme ou halloumi, tranches fines. Intérieur rosé, ok."
      - "Cuisson. Tranches, assiette ou natte sushi. Graines sésame doré, sésame noir."
      - "Finition. Option : filet huile sésame. Wasabi, gingembre rose, sauce soja. Riz, légumes croquants ou salade."
    kcal_per_serving: 211
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
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: wasabi
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre rose
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame doré
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame noir
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Salez et poivrez les 4 faces de votre pavé de tofu ferme ou tofu.
    - Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude,
      snackez chaque face de votre tofu ferme ou tofu (environ 30 secondes par face). Pour
      un tataki, il faut simplement colorer l’extérieur du tofu ferme ou tofu, l’intérieur
      doit rester cru.
    - Cuisson. Débarrassez le tofu ferme ou tofu snacké dans un bol rempli d’eau froide et de glaçons
      afin de stopper la cuisson. Sortez ensuite le tofu ferme ou tofu et épongez le surplus
      d’eau à l’aide de papier absorbant.
    - Cuisson. Coupez le tofu ferme ou tofu en tranches fines. Si la cuisson est réussie, l’intérieur
      doit être rosé.
    - Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi.
      Ajoutez quelques graines de sésame doré et de sésame noir.
    - Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques
      accompagnements typiques (wasabi, tranches de gingembre marinées, sauce soja). Accompagnez
      votre tataki de tofu ferme ou tofu d’un bol de riz, de légumes croquants ou d’une salade
      et régalez vous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Salez et poivrez les 4 faces de votre pavé de tofu ferme ou tofu."
      - "Cuisson. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude, snackez chaque face de votre tofu ferme ou tofu (environ 30 secondes par face). Pour un tataki, il faut simplement colorer l’extérieur du tofu ferme ou tofu, l’intérieur doit rester cru."
      - "Cuisson. Débarrassez le tofu ferme ou tofu snacké dans un bol rempli d’eau froide et de glaçons afin de stopper la cuisson. Sortez ensuite le tofu ferme ou tofu et épongez le surplus d’eau à l’aide de papier absorbant."
      - "Cuisson. Coupez le tofu ferme ou tofu en tranches fines. Si la cuisson est réussie, l’intérieur doit être rosé."
      - "Cuisson. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi. Ajoutez quelques graines de sésame doré et de sésame noir."
      - "Finition. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques accompagnements typiques (wasabi, tranches de gingembre rose, sauce soja). Accompagnez votre tataki de tofu ferme ou tofu d’un bol de riz, de légumes croquants ou d’une salade."
      pro:
      - "Saler et poivrer les 4 faces du pavé de tofu ferme ou tofu."
      - "Chauffer de l’huile de sésame dans une poêle. Huile bien chaude : snacker chaque face du tofu ferme ou tofu (environ 30 secondes par face). Colorer l’extérieur, intérieur cru."
      - "Débarrasser le tofu ferme ou tofu snacké dans un bol d’eau froide et de glaçons pour stopper la cuisson. Sortir et éponger le surplus d’eau au papier absorbant."
      - "Couper le tofu ferme ou tofu en tranches fines. Intérieur rosé si la cuisson est réussie."
      - "Disposer les tranches sur une assiette ou sur un natte à sushi. Ajouter quelques graines de sésame doré et de sésame noir."
      - "Option : filet d’huile de sésame, wasabi, tranches de gingembre rose, sauce soja. Accompagner d’un bol de riz, de légumes croquants ou d’une salade."
      cavernes:
      - "Préparation. Pavé tofu ferme ou tofu, 4 faces, saler, poivrer."
      - "Cuisson. Huile sésame, poêle, chauffer. Huile chaude. Chaque face, 30 s environ, snack. Extérieur coloré, intérieur cru."
      - "Cuisson. Tofu ferme ou tofu snacké, bol eau froide, glaçons, stopper. Sortir. Papier absorbant, surplus eau, éponger."
      - "Cuisson. Tofu ferme ou tofu, tranches fines. Intérieur rosé, ok."
      - "Cuisson. Tranches, assiette ou natte sushi. Graines sésame doré, sésame noir."
      - "Finition. Option : filet huile sésame. Wasabi, gingembre rose, sauce soja. Riz, légumes croquants ou salade."
    kcal_per_serving: 211
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
    - poisson
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 113
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"
---

# Tataki de thon

![[tataki-de-thon.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tataki-de-thon]]

## Ingrédients (4 personnes)

- 400 g de thon
- 2 c.à.s d'huile de sésame
-  wasabi
-  gingembre rose
-  sauce soja
-  graines de sésame doré
-  graines de sésame noir

## Préparation

1. Salez et poivrez les 4 faces de votre pavé de thon.
2. Faites chauffer de l’huile de sésame dans une poêle. Quand l’huile est bien chaude, snackez chaque face de votre thon (environ 30 secondes par face). Pour un tataki, il faut simplement colorer l’extérieur du thon, l’intérieur doit rester cru.
3. Débarrassez le thon snacké dans un bol rempli d’eau froide et de glaçons afin de stopper la cuisson. Sortez ensuite le thon et épongez le surplus d’eau à l’aide de papier absorbant.
4. Coupez le thon en tranches fines. Si la cuisson est réussie, l’intérieur doit être rosé.
5. Disposez joliment vos tranches sur une assiette ou, encore mieux, sur un natte à sushi. Ajoutez quelques graines de sésame doré et de sésame noir.
6. Vous pouvez compléter ce plat de tataki avec un filet d’huile de sésame et quelques accompagnements typiques (wasabi, tranches de gingembre marinées, sauce soja).

 
 

 
 Accompagnez votre tataki de thon d’un bol de riz, de légumes croquants ou d’une salade et régalez vous. Bon appétit !
