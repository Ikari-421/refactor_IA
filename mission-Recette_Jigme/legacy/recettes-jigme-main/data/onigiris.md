---
schema: recette-web-jigme/v2
slug: onigiris
title: Onigiris
lang: fr
description: "Onigiris : recette japonaise avec riz rond japonais, feuille de nori et boîte de thon, pour 4 personnes. Version maison."
cuisine: japonaise
category: salé
tags:
- salé
- entrée
- poisson
- rapide
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/onigiris.webp
  alt: Onigiris
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/onigiris.md
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
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme ou halloumi → pois chiches rôtis ; tofu ferme → pois chiches
      rôtis.'
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
histoire: 'Onigiri (omusubi) : boulette de riz japonais, souvent triangle, nori, farce salée (saumon,
  umeboshi). /. Encas de voyage plus ancien que le sandwich européen, pas son « équivalent » : le riz
  collant tient sans pain.

  '
fun_facts:
- text: 'Le riz encore chaud se moule ; trop cuit ou trop sec, la boulette s’effrite.

    '
  source_name: Wikipedia, Onigiri
  source_url: https://en.wikipedia.org/wiki/Onigiri
- text: 'Les farces traditionnelles sont salées ou acides, pour se garder hors du frigo plus longtemps
    que du poisson cru.

    '
  source_name: Wikipedia, Onigiri
  source_url: https://en.wikipedia.org/wiki/Onigiri
- text: 'Pour aller plus loin : l’histoire de « Onigiris ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Onigiri
wines:
- name: Alsace Riesling
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le riz vinaigré ou le saumon, sans un rouge.
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — le nori et le poisson, acidité nette.
- name: Txakoli de Getaria
  producer: Txomin Etxaniz
  origin: Getaria, Pays basque
  grapes: hondarrabi zuri
  award:
  why: Blanc perlé — l’encas de riz, sans un blanc lourd.
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
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - four
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: riz rond japonais
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: boîte de thon
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Pour préparer des onigiris il faut bien sûr du riz ! Faites cuire le riz dans une casserole
      (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis lorsque l’eau commence à
      bouillir, baisser le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire
      le riz pendant 10 minutes.
    - Cuisson. Lorsque le riz est cuit, versez le riz dans un récipient plat et étalez le riz sans
      l’écraser pour qu’il se refroidisse.
    - 'Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau
      mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de
      votre main et faites-en une boule. Faites un petit puit à l’intérieur afin d’y placer
      la garniture : du thon mélangé à un peu de mayonnaise fera l’affaire ! Les onigiris
      peuvent être fourrés avec différentes garnitures, légumes, viandes et autres, soyez
      créatifs !'
    - Cuisson. Ensuite prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez
      le tout pour en faire un petit triangle qui est la forme originelle des onigiris.
    - Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle
      et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Les onigiris sont
      prêts, n’hésitez pas à tremper vos onigiris dans de la sauce soja, c’est délicieux !

    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire le riz dans une casserole (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis, lorsque l’eau commence à bouillir, baissez le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire le riz pendant 10 minutes."
      - "Cuisson. Lorsque le riz est cuit, versez-le dans un récipient plat et étalez-le sans l’écraser pour qu’il se refroidisse."
      - "Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de votre main et faites-en une boule. Faites un petit puits à l’intérieur afin d’y placer la garniture : du thon mélangé à un peu de mayonnaise fera l’affaire. Les onigiris peuvent être fourrés avec différentes garnitures, légumes, viandes et autres."
      - "Cuisson. Prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez le tout pour en faire un petit triangle, forme originelle des onigiris."
      - "Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Vous pouvez tremper les onigiris dans de la sauce soja."
      pro:
      - "Cuire le riz en casserole (1 verre de riz, 1 verre d’eau) : feu vif, puis à ébullition baisser le feu. Recouvrir d’un torchon puis du couvercle. Cuire 10 minutes."
      - "Riz cuit : verser dans un récipient plat. Étaler sans écraser. Laisser refroidir."
      - "Humidifier les mains avec de l’eau mélangée dans du vinaigre de riz. Former une boule de riz. Creuser un petit puits. Garnir de thon mélangé à un peu de mayonnaise (ou autres garnitures : légumes, viandes)."
      - "Recouvrir la garniture d’une autre petite quantité de riz. Malaxer en petit triangle."
      - "Couper une bande de quelques centimètres de largeur. Entourer la base du triangle. Saupoudrer sésame noir et sésame blanc. Servir, éventuellement tremper dans la sauce soja."
      cavernes:
      - "Cuisson. Riz, casserole, 1 verre riz 1 verre eau. Feu vif. Eau bout, feu, baisser. Torchon, couvercle. 10 min."
      - "Cuisson. Riz cuit, récipient plat, verser. Étaler, pas écraser. Refroidir."
      - "Cuisson. Mains, eau mélangée vinaigre de riz, humidifier. Riz, paume, boule. Petit puits. Thon, peu mayonnaise. Ou légumes, viandes."
      - "Cuisson. Riz, peu, garniture, recouvrir. Triangle, malaxer."
      - "Finition. Bande, quelques centimètres largeur, base triangle, entourer. Sésame noir, sésame blanc, saupoudrer. Sauce soja, tremper."
    kcal_per_serving: 328
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: riz rond japonais
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tofu ferme ou halloumi
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Pour préparer des onigiris il faut bien sûr du riz ! Faites cuire le riz dans une casserole
      (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis lorsque l’eau commence à
      bouillir, baisser le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire
      le riz pendant 10 minutes.
    - Cuisson. Lorsque le riz est cuit, versez le riz dans un récipient plat et étalez le riz sans
      l’écraser pour qu’il se refroidisse.
    - 'Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau
      mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de
      votre main et faites-en une boule. Faites un petit puit à l’intérieur afin d’y placer
      la garniture : du tofu ferme (ou du halloumi) mixé à un peu de mayonnaise fera l’affaire ! Variez les garnitures (légumes, pickles…).'
    - Cuisson. Ensuite prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez
      le tout pour en faire un petit triangle qui est la forme originelle des onigiris.
    - Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle
      et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Les onigiris sont
      prêts, n’hésitez pas à tremper vos onigiris dans de la sauce soja, c’est délicieux !

    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire le riz dans une casserole (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis, lorsque l’eau commence à bouillir, baissez le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire le riz pendant 10 minutes."
      - "Cuisson. Lorsque le riz est cuit, versez-le dans un récipient plat et étalez-le sans l’écraser pour qu’il se refroidisse."
      - "Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de votre main et faites-en une boule. Faites un petit puits à l’intérieur afin d’y placer la garniture : du tofu ferme (ou du halloumi) mixé à un peu de mayonnaise fera l’affaire. Variez les garnitures (légumes, pickles…)."
      - "Cuisson. Prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez le tout pour en faire un petit triangle, forme originelle des onigiris."
      - "Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Vous pouvez tremper les onigiris dans de la sauce soja."
      pro:
      - "Cuire le riz en casserole (1 verre de riz, 1 verre d’eau) : feu vif, puis à ébullition baisser le feu. Recouvrir d’un torchon puis du couvercle. Cuire 10 minutes."
      - "Riz cuit : verser dans un récipient plat. Étaler sans écraser. Laisser refroidir."
      - "Humidifier les mains avec de l’eau mélangée dans du vinaigre de riz. Former une boule de riz. Creuser un petit puits. Garnir de tofu ferme (ou halloumi) mixé à un peu de mayonnaise. Varier (légumes, pickles…)."
      - "Recouvrir la garniture d’une autre petite quantité de riz. Malaxer en petit triangle."
      - "Couper une bande de quelques centimètres de largeur. Entourer la base du triangle. Saupoudrer sésame noir et sésame blanc. Servir, éventuellement tremper dans la sauce soja."
      cavernes:
      - "Cuisson. Riz, casserole, 1 verre riz 1 verre eau. Feu vif. Eau bout, feu, baisser. Torchon, couvercle. 10 min."
      - "Cuisson. Riz cuit, récipient plat, verser. Étaler, pas écraser. Refroidir."
      - "Cuisson. Mains, eau mélangée vinaigre de riz, humidifier. Riz, paume, boule. Petit puits. Tofu ferme ou halloumi, peu mayonnaise, mixer. Ou légumes, pickles."
      - "Cuisson. Riz, peu, garniture, recouvrir. Triangle, malaxer."
      - "Finition. Bande, quelques centimètres largeur, base triangle, entourer. Sésame noir, sésame blanc, saupoudrer. Sauce soja, tremper."
    kcal_per_serving: 348
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: riz rond japonais
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Pour préparer des onigiris il faut bien sûr du riz ! Faites cuire le riz dans une casserole
      (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis lorsque l’eau commence à
      bouillir, baisser le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire
      le riz pendant 10 minutes.
    - Cuisson. Lorsque le riz est cuit, versez le riz dans un récipient plat et étalez le riz sans
      l’écraser pour qu’il se refroidisse.
    - 'Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau
      mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de
      votre main et faites-en une boule. Faites un petit puit à l’intérieur afin d’y placer
      la garniture : du tofu ferme mixé à un peu de mayonnaise végétale fera l’affaire ! Variez les garnitures (légumes, pickles…).'
    - Cuisson. Ensuite prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez
      le tout pour en faire un petit triangle qui est la forme originelle des onigiris.
    - Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle
      et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Les onigiris sont
      prêts, n’hésitez pas à tremper vos onigiris dans de la sauce soja, c’est délicieux !

    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire le riz dans une casserole (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis, lorsque l’eau commence à bouillir, baissez le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire le riz pendant 10 minutes."
      - "Cuisson. Lorsque le riz est cuit, versez-le dans un récipient plat et étalez-le sans l’écraser pour qu’il se refroidisse."
      - "Cuisson. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau mélangée dans du vinaigre de riz. Prenez une bonne quantité de riz dans la paume de votre main et faites-en une boule. Faites un petit puits à l’intérieur afin d’y placer la garniture : du tofu ferme mixé à un peu de mayonnaise végétale fera l’affaire. Variez les garnitures (légumes, pickles…)."
      - "Cuisson. Prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez le tout pour en faire un petit triangle, forme originelle des onigiris."
      - "Finition. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus. Vous pouvez tremper les onigiris dans de la sauce soja."
      pro:
      - "Cuire le riz en casserole (1 verre de riz, 1 verre d’eau) : feu vif, puis à ébullition baisser le feu. Recouvrir d’un torchon puis du couvercle. Cuire 10 minutes."
      - "Riz cuit : verser dans un récipient plat. Étaler sans écraser. Laisser refroidir."
      - "Humidifier les mains avec de l’eau mélangée dans du vinaigre de riz. Former une boule de riz. Creuser un petit puits. Garnir de tofu ferme mixé à un peu de mayonnaise végétale. Varier (légumes, pickles…)."
      - "Recouvrir la garniture d’une autre petite quantité de riz. Malaxer en petit triangle."
      - "Couper une bande de quelques centimètres de largeur. Entourer la base du triangle. Saupoudrer sésame noir et sésame blanc. Servir, éventuellement tremper dans la sauce soja."
      cavernes:
      - "Cuisson. Riz, casserole, 1 verre riz 1 verre eau. Feu vif. Eau bout, feu, baisser. Torchon, couvercle. 10 min."
      - "Cuisson. Riz cuit, récipient plat, verser. Étaler, pas écraser. Refroidir."
      - "Cuisson. Mains, eau mélangée vinaigre de riz, humidifier. Riz, paume, boule. Petit puits. Tofu ferme, peu mayonnaise végétale, mixer. Ou légumes, pickles."
      - "Cuisson. Riz, peu, garniture, recouvrir. Triangle, malaxer."
      - "Finition. Bande, quelques centimètres largeur, base triangle, entourer. Sésame noir, sésame blanc, saupoudrer. Sauce soja, tremper."
    kcal_per_serving: 348
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 328
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
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; riz cuit (Bacillus cereus si refroidissement lent)"
---

# Onigiris

![[onigiris.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/onigiris]]

## Ingrédients (4 personnes)

- 350 g de riz rond japonais
- 1 feuille de nori
- 1 boîte de thon

## Préparation

1. Pour préparer des onigiris il faut bien sûr du riz ! Faites cuire le riz dans une casserole (pour 1 verre de riz, 1 verre d’eau) d’abord à feu vif puis lorsque l’eau commence à bouillir, baisser le feu et recouvrez-la d’un torchon puis du couvercle. Laissez cuire le riz pendant 10 minutes.
2. Lorsque le riz est cuit, versez le riz dans un récipient plat et étalez le riz sans l’écraser pour qu’il se refroidisse.
3. Pour manier le riz sans qu’il colle à vos mains, humidifiez vos mains avec de l’eau mélangée dans du vinaigre de riz.

Prenez une bonne quantité de riz dans la paume de votre main et faites-en une boule. Faites un petit puit à l’intérieur afin d’y placer la garniture : du thon mélangé à un peu de mayonnaise fera l’affaire ! Les onigiris peuvent être fourrés avec différentes garnitures, légumes, viandes et autres, soyez créatifs !
4. Ensuite prenez une autre petite quantité de riz pour recouvrir la garniture et malaxez le tout pour en faire un petit triangle qui est la forme originelle des onigiris.
5. Coupez une bande de quelques centimètres de largeur pour entourer la base du triangle et saupoudrez un peu de sésame noir et de sésame blanc sur le dessus.

 
 

 
 Les onigiris sont prêts, n’hésitez pas à tremper vos onigiris dans de la sauce soja, c’est délicieux !
