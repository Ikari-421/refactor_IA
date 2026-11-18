---
schema: recette-web-jigme/v2
slug: gyozas-vegetariens
title: Gyozas végétariens
lang: fr
description: "Gyozas végétariens : recette japonaise avec farine T55, oignon nouveau et chou, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- entrée
- végane
- farine t
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/gyozas-vegetariens.jpg
  alt: Gyozas végétariens
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gyozas-vegetariens.md
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
    - from: sauce soja
      to: tamari sans gluten
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
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
    impossible: false
    redirect_variant:
    clears:
    - sesame
    swaps:
    - from: sésame
      to: graines de courge
      note:
    - from: tahini
      to: purée de tournesol
      note:
    note: Remplacer sésame.
  sans_sulfites:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de riz
      to: jus de citron vert
      note: Acidité un peu différente.
    note: Vinaigre de riz → citron vert.
house_toggle:
house_options: []
histoire: 'Gyoza : ravioli japonais à la poêle, héritier du jiaozi chinois. Les Japonais le rencontrent
  dans le nord de la Chine au début du XXe s. (Shandong, Mandchourie). La version végétarienne remplace
  le porc par légumes et tofu, le pli et la cuisson « à la nappe » restent les mêmes.

  '
fun_facts:
- text: >
    On les dore d’un côté, puis on ajoute un peu d’eau et on couvre : vapeur puis
    croûte, le geste yaki-gyoza.
  source_name: Grokipedia, List of dumplings
  source_url: https://grokipedia.com/page/List_of_dumplings
- text: >
    Utsunomiya se présente comme « capitale du gyoza » au Japon.
  source_name: Grokipedia, Utsunomiya
  source_url: https://grokipedia.com/page/Utsunomiya
- text: >
    La sauce d’accompagnement chinoise est souvent vinaigre noir et soja ; au
    Japon, soja, vinaigre et un filet d’huile de sésame.
  source_name: Wikipedia, Jiaozi
  source_url: https://en.wikipedia.org/wiki/Jiaozi
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — le chou, le gingembre et la sauce soja.
- name: Picpoul de Pinet
  producer: Cave de l'Ormarine
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Blanc citronné — la panure vapeur-poêle, sans un blanc lourd.
- name: Saumur
  producer: Cave des Vignerons de Saumur
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Chenin, pomme — la pâte et le vinaigre de la trempette.
variants:
  traditionnelle:
    label: Traditionnelle
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
    - sesame
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 80
      cook_min: 25
      rest_min: 0
      total_min: 105
    equipment: &id002
    - poêle
    - saladier
    - moule / plat
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine T55
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: chou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: shiitake ou champignon de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Pour la pâte, mélangez la farine et l’eau (une dose de farine pour la moitié d’eau)
      dans un saladier. Travaillez la pâte à la main pendant 5 à 10 minutes, puis enroulez-la
      dans du cellophane et réservez-la au frigidaire pendant au moins 30 minutes.
    - Cuisson. Pour la farce, épluchez et découpez finement tous les légumes et déposez-les dans un
      saladier. Assaisonnez et ajoutez-y de la sauce soja, de l’huile de sésame et du vinaigre
      de riz.
    - Repos. Une fois que votre pâte a suffisamment reposé, faites-en de petites boules et étalez-les
      avec un rouleau à pâtisserie. Faites des cercles réguliers à l’aide d’un emporte-pièces
      ou d’un verre.
    - Cuisson. Dans le centre des ronds de pâte, déposez une petite cuillère de garniture de légumes
      et humidifiez les bords de la pâte avant de refermer pour former des demi-cercles. Pincez
      l’extrémité et repliez les bords. N’hésitez pas à visionner la vidéo pour bien comprendre
      le mécanisme.
    - Finition. Dans une poêle huilée, faites saisir la partie inférieure des gyozas. Retirez lorsque
      c’est grillé. Ensuite, faites cuire les gyozas à la vapeur pendant 15 à 25 minutes.
      Après avoir plié tous ces gyozas, vous méritez bien de les déguster ! N’hésitez pas
      à les accompagner de la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Pour la pâte, mélangez la farine et l’eau (une dose de farine pour la moitié d’eau) dans un saladier. Travaillez la pâte à la main pendant 5 à 10 minutes, puis enroulez-la dans du cellophane et réservez-la au frigidaire pendant au moins 30 minutes."
      - "Cuisson. Pour la farce, épluchez et découpez finement tous les légumes et déposez-les dans un saladier. Assaisonnez et ajoutez-y de la sauce soja, de l’huile de sésame et du vinaigre de riz."
      - "Repos. Une fois que votre pâte a suffisamment reposé, faites-en de petites boules et étalez-les avec un rouleau à pâtisserie. Faites des cercles réguliers à l’aide d’un emporte-pièces ou d’un verre."
      - "Cuisson. Dans le centre des ronds de pâte, déposez une petite cuillère de garniture de légumes et humidifiez les bords de la pâte avant de refermer pour former des demi-cercles. Pincez l’extrémité et repliez les bords. N’hésitez pas à visionner la vidéo pour bien comprendre le mécanisme."
      - "Finition. Dans une poêle huilée, faites saisir la partie inférieure des gyozas. Retirez lorsque c’est grillé. Ensuite, faites cuire les gyozas à la vapeur pendant 15 à 25 minutes. Accompagnez de la sauce de votre choix."
      pro:
      - "Mélanger farine et eau (une dose de farine pour la moitié d’eau) au saladier. Travailler à la main 5 à 10 minutes. Enrouler de cellophane. Frigidaire au moins 30 minutes."
      - "Éplucher et découper finement les légumes. Saladier. Assaisonner. Ajouter sauce soja, huile de sésame et vinaigre de riz."
      - "Pâte reposée : petites boules. Étaler au rouleau. Cercles à l’emporte-pièces ou au verre."
      - "Petite cuillère de garniture au centre. Humidifier les bords. Refermer en demi-cercles. Pincer l’extrémité, replier les bords. Vidéo si besoin."
      - "Poêle huilée : saisir la partie inférieure. Retirer une fois grillé. Cuire à la vapeur 15 à 25 minutes. Servir avec la sauce de son choix."
      cavernes:
      - "Mélange. Farine, eau, saladier. Dose farine, moitié eau. Main, 5 à 10 minutes. Cellophane, enrouler. Frigidaire minimum 30 minutes."
      - "Cuisson. Légumes, éplucher, découper fin. Saladier. Assaisonner. Sauce soja, huile sésame, vinaigre de riz, ajouter."
      - "Repos. Pâte reposée, petites boules. Rouleau pâtisserie, étaler. Cercles, emporte-pièces ou verre."
      - "Cuisson. Centre ronds pâte, petite cuillère garniture légumes. Bords, humidifier. Refermer, demi-cercles. Extrémité, pincer. Bords, replier. Vidéo, regarder."
      - "Finition. Poêle huilée, partie inférieure gyozas, saisir. Grillé, retirer. Vapeur 15 à 25 minutes. Sauce choix."
    kcal_per_serving: 241
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
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    - sesame
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 241
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    - sesame
    - sulfites
    difficulty: 2
    time:
      prep_min: 80
      cook_min: 25
      rest_min: 0
      total_min: 105
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine T55
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: chou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: shiitake ou champignon de paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Pour la pâte, mélangez la farine et l’eau (une dose de farine pour la moitié d’eau)
      dans un saladier. Travaillez la pâte à la main pendant 5 à 10 minutes, puis enroulez-la
      dans du cellophane et réservez-la au frigidaire pendant au moins 30 minutes.
    - Cuisson. Pour la farce, épluchez et découpez finement tous les légumes et déposez-les dans un
      saladier. Assaisonnez et ajoutez-y de la sauce soja, de l’huile de sésame et du vinaigre
      de riz.
    - Repos. Une fois que votre pâte a suffisamment reposé, faites-en de petites boules et étalez-les
      avec un rouleau à pâtisserie. Faites des cercles réguliers à l’aide d’un emporte-pièces
      ou d’un verre.
    - Cuisson. Dans le centre des ronds de pâte, déposez une petite cuillère de garniture de légumes
      et humidifiez les bords de la pâte avant de refermer pour former des demi-cercles. Pincez
      l’extrémité et repliez les bords. N’hésitez pas à visionner la vidéo pour bien comprendre
      le mécanisme.
    - Finition. Dans une poêle huilée, faites saisir la partie inférieure des gyozas. Retirez lorsque
      c’est grillé. Ensuite, faites cuire les gyozas à la vapeur pendant 15 à 25 minutes.
      Après avoir plié tous ces gyozas, vous méritez bien de les déguster ! N’hésitez pas
      à les accompagner de la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Pour la pâte, mélangez la farine et l’eau (une dose de farine pour la moitié d’eau) dans un saladier. Travaillez la pâte à la main pendant 5 à 10 minutes, puis enroulez-la dans du cellophane et réservez-la au frigidaire pendant au moins 30 minutes."
      - "Cuisson. Pour la farce, épluchez et découpez finement tous les légumes et déposez-les dans un saladier. Assaisonnez et ajoutez-y de la sauce soja, de l’huile de sésame et du vinaigre de riz."
      - "Repos. Une fois que votre pâte a suffisamment reposé, faites-en de petites boules et étalez-les avec un rouleau à pâtisserie. Faites des cercles réguliers à l’aide d’un emporte-pièces ou d’un verre."
      - "Cuisson. Dans le centre des ronds de pâte, déposez une petite cuillère de garniture de légumes et humidifiez les bords de la pâte avant de refermer pour former des demi-cercles. Pincez l’extrémité et repliez les bords. N’hésitez pas à visionner la vidéo pour bien comprendre le mécanisme."
      - "Finition. Dans une poêle huilée, faites saisir la partie inférieure des gyozas. Retirez lorsque c’est grillé. Ensuite, faites cuire les gyozas à la vapeur pendant 15 à 25 minutes. Accompagnez de la sauce de votre choix."
      pro:
      - "Mélanger farine et eau (une dose de farine pour la moitié d’eau) au saladier. Travailler à la main 5 à 10 minutes. Enrouler de cellophane. Frigidaire au moins 30 minutes."
      - "Éplucher et découper finement les légumes. Saladier. Assaisonner. Ajouter sauce soja, huile de sésame et vinaigre de riz."
      - "Pâte reposée : petites boules. Étaler au rouleau. Cercles à l’emporte-pièces ou au verre."
      - "Petite cuillère de garniture au centre. Humidifier les bords. Refermer en demi-cercles. Pincer l’extrémité, replier les bords. Vidéo si besoin."
      - "Poêle huilée : saisir la partie inférieure. Retirer une fois grillé. Cuire à la vapeur 15 à 25 minutes. Servir avec la sauce de son choix."
      cavernes:
      - "Mélange. Farine, eau, saladier. Dose farine, moitié eau. Main, 5 à 10 minutes. Cellophane, enrouler. Frigidaire minimum 30 minutes."
      - "Cuisson. Légumes, éplucher, découper fin. Saladier. Assaisonner. Sauce soja, huile sésame, vinaigre de riz, ajouter."
      - "Repos. Pâte reposée, petites boules. Rouleau pâtisserie, étaler. Cercles, emporte-pièces ou verre."
      - "Cuisson. Centre ronds pâte, petite cuillère garniture légumes. Bords, humidifier. Refermer, demi-cercles. Extrémité, pincer. Bords, replier. Vidéo, regarder."
      - "Finition. Poêle huilée, partie inférieure gyozas, saisir. Grillé, retirer. Vapeur 15 à 25 minutes. Sauce choix."
    kcal_per_serving: 241
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
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    - sesame
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 241
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gyozas végétariens
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gyozas-vegetariens]]

## Ingrédients (4 personnes)

- 200 g de farine T55
- 100 ml d'eau
- 1 oignon nouveau
- 50 g de chou
- 4 shiitake ou champignon de paris
- 1 carotte
- 10 g de gingembre
-  sauce soja
-  huile de sésame
-  vinaigre de riz

## Préparation

1. Pour la pâte, mélangez la farine et l’eau (une dose de farine pour la moitié d’eau) dans un saladier. Travaillez la pâte à la main pendant 5 à 10 minutes, puis enroulez-la dans du cellophane et réservez-la au frigidaire pendant au moins 30 minutes.
2. Pour la farce, épluchez et découpez finement tous les légumes et déposez-les dans un saladier. Assaisonnez et ajoutez-y de la sauce soja, de l’huile de sésame et du vinaigre de riz.
3. Une fois que votre pâte a suffisamment reposé, faites-en de petites boules et étalez-les avec un rouleau à pâtisserie. Faites des cercles réguliers à l’aide d’un emporte-pièces ou d’un verre.
4. Dans le centre des ronds de pâte, déposez une petite cuillère de garniture de légumes et humidifiez les bords de la pâte avant de refermer pour former des demi-cercles. Pincez l’extrémité et repliez les bords. N’hésitez pas à visionner la vidéo pour bien comprendre le mécanisme.
5. Dans une poêle huilée, faites saisir la partie inférieure des gyozas. Retirez lorsque c’est grillé. Ensuite, faites cuire les gyozas à la vapeur pendant 15 à 25 minutes.

 
 

 
 Après avoir plié tous ces gyozas, vous méritez bien de les déguster ! N’hésitez pas à les accompagner de la sauce de votre choix. Bon appétit !
