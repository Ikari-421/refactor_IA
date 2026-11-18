---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
slug: muffins-aux-pepites-de-chocolat
title: Muffins aux pépites de chocolat
lang: fr
description: "Muffins aux pépites de chocolat : recette française avec beurre, sucre et lait, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- végétarien
image:
  url:
  alt: Muffins aux pépites de chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/muffins-aux-pepites-de-chocolat.md
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
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis.'
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
  Le muffin américain est un gâteau individuel levé à la poudre, cuit au four. Il
  n’a presque rien à voir avec le muffin anglais, petit pain plat de poêle, au levain
  de boulanger. La poudre à lever, commercialisée au XIXe siècle, le rend rapide :
  on mélange juste assez pour lier, sinon la mie se serre. Les pépites de chocolat
  se répandent après le cookie de Ruth Wakefield : sa recette Toll House, « Chocolate
  Crunch Cookies », paraît en 1938. De là au muffin aux pépites, il n’y a qu’un moule.
fun_facts:
- text: >
    La Library of Congress conserve l’édition 1938 de Toll House Tried and True Recipes
    de Ruth Wakefield, où les historiens voient la première recette de cookie aux pépites.
  source_name: Library of Congress, Ruth Wakefield
  source_url: https://blogs.loc.gov/inside_adams/2025/12/ruthwakefield/
- text: >
    Une pâte trop travaillée fait un muffin serré ; on mélange juste assez pour lier.
  source_name: Usage
  source_url:
wines:
- name: Gewurztraminer
  producer: Hugel & Fils
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: 'Fruité et notes de litchi : s’accorde avec un dessert sucré sans le noyer.'
- name: Muscat d’Alsace
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: muscat
  award:
  why: Fruit net, moins liquoreux qu’une vendange tardive.
- name: Côtes de Toul Gris
  producer: Domaine Lelièvre
  origin: Lucey, Lorraine
  grapes: gamay / pinot (assemblage gris)
  award:
  why: Léger perlé qui coupe un dessert beurré.
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
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id002
    - four
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 120
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine (type 55)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pépites de chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans un récipient, déposer le beurre pommade. Pour l’obtenir, placez le beurre à température
      ambiante et travaillez-le à la spatule jusqu’à obtenir une texture souple et lisse…comme
      une pommade ! Ajoutez le sucre et mélangez.
    - Cuisson. Clarifiez les oeufs en déposant les jaunes dans votre récipient et les blancs dans la
      cuve d’un batteur.
    - Mélange. Mélangez le contenu de votre récipient, puis compléter avec le lait en continuant de
      mélanger. Incorporez ensuite la farine et la levure chimique.
    - Cuisson. Ajoutez une pincée de sel dans la cuve de votre batteur, puis montez les blancs d’oeufs
      en neige. Une fois que la texture est bien ferme, incorporez-les délicatement au mélange
      de votre récipient à l’aide d’une spatule.
    - Mélange. Ajoutez des pépites de chocolat et mélangez. Votre appareil est prêt !
    - Cuisson. Beurrez de petits moules cylindriques (ceux qu’on utilise pour les muffins et cupcakes)
      et remplissez-les avec votre appareil au trois quarts. Pour que ce soit plus facile,
      n’hésitez pas à utiliser une poche à douille.
    - Cuisson. Saupoudrez avec quelques pépites de chocolat, puis enfournez à 190°C pendant 15 minutes.
      Vous pouvez déguster vos muffins aux pépites de chocolat tout chaud, ou les mettre de
      côté pour les savourer plus tard. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, déposez le beurre pommade. Pour l’obtenir, placez le beurre à température ambiante et travaillez-le à la spatule jusqu’à obtenir une texture souple et lisse, comme une pommade. Ajoutez le sucre et mélangez."
      - "Cuisson. Clarifiez les œufs en déposant les jaunes dans votre récipient et les blancs dans la cuve d’un batteur."
      - "Mélange. Mélangez le contenu de votre récipient, puis complétez avec le lait en continuant de mélanger. Incorporez ensuite la farine et la levure chimique."
      - "Cuisson. Ajoutez une pincée de sel dans la cuve de votre batteur, puis [[monter-en-neige|montez les blancs d’œufs en neige]]. Une fois que la texture est bien ferme, incorporez-les délicatement au mélange de votre récipient à l’aide d’une spatule."
      - "Mélange. Ajoutez des pépites de chocolat et mélangez. Votre appareil est prêt !"
      - "Cuisson. Beurrez de petits moules cylindriques (ceux qu’on utilise pour les muffins et cupcakes) et remplissez-les avec votre appareil au trois quarts. Pour que ce soit plus facile, n’hésitez pas à utiliser une poche à douille."
      - "Cuisson. Saupoudrez avec quelques pépites de chocolat, puis enfournez à 190°C pendant 15 minutes. Vous pouvez déguster vos muffins aux pépites de chocolat tout chaud, ou les mettre de côté pour les savourer plus tard. Bon appétit !"
      pro:
      - "Déposer le beurre pommade dans un récipient. Le placer à température ambiante et le travailler à la spatule jusqu’à texture souple et lisse, comme une pommade. Ajouter le sucre. Mélanger."
      - "Clarifier les œufs : jaunes dans le récipient, blancs dans la cuve d’un batteur."
      - "Mélanger le contenu du récipient. Compléter avec le lait en continuant de mélanger. Incorporer la farine et la levure chimique."
      - "Ajouter une pincée de sel dans la cuve du batteur. Monter les blancs d’œufs en neige. Texture bien ferme. Incorporer délicatement au mélange du récipient, à la spatule."
      - "Ajouter des pépites de chocolat. Mélanger. Appareil prêt."
      - "Beurrer de petits moules cylindriques (muffins, cupcakes). Remplir au trois quarts. Poche à douille possible."
      - "Saupoudrer de quelques pépites de chocolat. Enfourner à 190°C pendant 15 minutes. Déguster tout chaud ou mettre de côté."
      cavernes:
      - "Préparation. Récipient, beurre pommade, déposer. Température ambiante. Spatule, travailler, texture souple lisse, pommade. Sucre, ajouter, mélanger."
      - "Cuisson. Œufs, clarifier. Jaunes, récipient. Blancs, cuve batteur."
      - "Mélange. Récipient, mélanger. Lait, compléter, continuer mélanger. Farine, levure chimique, incorporer."
      - "Cuisson. Pincée sel, cuve batteur. Blancs d’œufs, monter en neige. Texture ferme. Spatule, incorporer délicat, mélange récipient."
      - "Mélange. Pépites chocolat, ajouter, mélanger. Appareil prêt."
      - "Cuisson. Petits moules cylindriques, beurrer. Appareil, remplir trois quarts. Poche à douille, option."
      - "Cuisson. Pépites chocolat, saupoudrer. Four 190°C, 15 min. Déguster chaud, ou côté plus tard."
    kcal_per_serving: 671
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
    kcal_per_serving: 671
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
    - qty: 120
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine (type 55)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pépites de chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans un récipient, déposer la margarine végétale pommade.
      Pour l’obtenir, placez la margarine végétale à température
      ambiante et travaillez-la à la spatule jusqu’à obtenir une texture souple et lisse…comme
      une pommade ! Ajoutez le sucre et mélangez.
    - Mélange. Incorporez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis mélangez.
    - Mélange. Mélangez le contenu de votre récipient, puis compléter avec le lait d'avoine ou soja
      en continuant de mélanger. Incorporez ensuite la farine et la levure chimique.
    - Mélange. Ajoutez des pépites de chocolat et mélangez. Votre appareil est prêt !
    - Cuisson. Graissez de petits moules cylindriques avec de la margarine végétale (ceux
      qu’on utilise pour les muffins et cupcakes) et remplissez-les avec votre appareil au
      trois quarts. Pour que ce soit plus facile, n’hésitez pas à utiliser une poche à douille.
    - Cuisson. Saupoudrez avec quelques pépites de chocolat, puis enfournez à 190°C pendant 15 minutes.
      Vous pouvez déguster vos muffins aux pépites de chocolat tout chaud, ou les mettre de
      côté pour les savourer plus tard. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, déposez la margarine végétale pommade. Pour l’obtenir, placez la margarine végétale à température ambiante et travaillez-la à la spatule jusqu’à obtenir une texture souple et lisse, comme une pommade. Ajoutez le sucre et mélangez."
      - "Mélange. Incorporez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis mélangez."
      - "Mélange. Mélangez le contenu de votre récipient, puis complétez avec le lait d’avoine ou soja en continuant de mélanger. Incorporez ensuite la farine et la levure chimique."
      - "Mélange. Ajoutez des pépites de chocolat et mélangez. Votre appareil est prêt !"
      - "Cuisson. Graissez de petits moules cylindriques avec de la margarine végétale (ceux qu’on utilise pour les muffins et cupcakes) et remplissez-les avec votre appareil au trois quarts. Pour que ce soit plus facile, n’hésitez pas à utiliser une poche à douille."
      - "Cuisson. Saupoudrez avec quelques pépites de chocolat, puis enfournez à 190°C pendant 15 minutes. Vous pouvez déguster vos muffins aux pépites de chocolat tout chaud, ou les mettre de côté pour les savourer plus tard. Bon appétit !"
      pro:
      - "Déposer la margarine végétale pommade dans un récipient. La placer à température ambiante et la travailler à la spatule jusqu’à texture souple et lisse, comme une pommade. Ajouter le sucre. Mélanger."
      - "Incorporer l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélanger."
      - "Mélanger le contenu du récipient. Compléter avec le lait d’avoine ou soja en continuant de mélanger. Incorporer la farine et la levure chimique."
      - "Ajouter des pépites de chocolat. Mélanger. Appareil prêt."
      - "Graisser de petits moules cylindriques avec de la margarine végétale (muffins, cupcakes). Remplir au trois quarts. Poche à douille possible."
      - "Saupoudrer de quelques pépites de chocolat. Enfourner à 190°C pendant 15 minutes. Déguster tout chaud ou mettre de côté."
      cavernes:
      - "Préparation. Récipient, margarine végétale pommade, déposer. Température ambiante. Spatule, travailler, texture souple lisse, pommade. Sucre, ajouter, mélanger."
      - "Mélange. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, incorporer, mélanger."
      - "Mélange. Récipient, mélanger. Lait d’avoine ou soja, compléter, continuer mélanger. Farine, levure chimique, incorporer."
      - "Mélange. Pépites chocolat, ajouter, mélanger. Appareil prêt."
      - "Cuisson. Petits moules cylindriques, margarine végétale, graisser. Appareil, remplir trois quarts. Poche à douille, option."
      - "Cuisson. Pépites chocolat, saupoudrer. Four 190°C, 15 min. Déguster chaud, ou côté plus tard."
    kcal_per_serving: 460
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
    kcal_per_serving: 671
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: ""}
  congelation: {possible: true, duree: "2 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "4 à 7 jours", note: "Boîte hermétique."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Muffins aux pépites de chocolat
**Équipement :** [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/muffins-aux-pepites-de-chocolat]]

## Ingrédients (4 personnes)

- 120 g de beurre
- 125 g de sucre
- 15 cL de lait
- 250 g de farine (type 55)
- 3 oeuf
- 12 g de levure chimique
- 100 g de pépites de chocolat

## Préparation

1. Dans un récipient, déposer le beurre pommade. Pour l’obtenir, placez le beurre à température ambiante et travaillez-le à la spatule jusqu’à obtenir une texture souple et lisse…comme une pommade ! Ajoutez le sucre et mélangez.
2. Clarifiez les oeufs en déposant les jaunes dans votre récipient et les blancs dans la cuve d’un batteur.
3. Mélangez le contenu de votre récipient, puis compléter avec le lait en continuant de mélanger. Incorporez ensuite la farine et la levure chimique.
4. Ajoutez une pincée de sel dans la cuve de votre batteur, puis montez les blancs d’oeufs en neige. Une fois que la texture est bien ferme, incorporez-les délicatement au mélange de votre récipient à l’aide d’une spatule.
5. Ajoutez des pépites de chocolat et mélangez. Votre appareil est prêt !
6. Beurrez de petits moules cylindriques (ceux qu’on utilise pour les muffins et cupcakes) et remplissez-les avec votre appareil au trois quarts. Pour que ce soit plus facile, n’hésitez pas à utiliser une poche à douille.
7. Saupoudrez avec quelques pépites de chocolat, puis enfournez à 190°C pendant 15 minutes.

 
 

 
 Vous pouvez déguster vos muffins aux pépites de chocolat tout chaud, ou les mettre de côté pour les savourer plus tard. Bon appétit !
