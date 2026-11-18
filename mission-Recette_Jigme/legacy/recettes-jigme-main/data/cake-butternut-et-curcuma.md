---
schema: recette-web-jigme/v2
slug: cake-butternut-et-curcuma
title: Cake butternut et curcuma
lang: fr
description: "Cake butternut et curcuma : recette française avec courge butternut, farine et beurre, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- légumes
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/cake-butternut-et-curcuma.webp
  alt: Cake butternut et curcuma
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cake-butternut-et-curcuma.md
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
  En français, le cake n’est pas n’importe quel gâteau : c’est un emprunt à l’anglais,
  devenu le moule long aux fruits confits. Sa déclinaison salée — olives, jambon,
  fromage — s’est imposée comme cake d’apéritif et de pique-nique à la fin du XXe siècle.
  Butternut, courge d’origine américaine, et curcuma, racine d’Inde, n’en font pas
  un mets régional. C’est une version d’automne, colorée, contemporaine : la mie
  tient si le butternut n’est pas trop d’eau.
fun_facts:
- text: >
    Le butternut trop d’eau détend la mie : on le rôtit ou on l’essuie avant de
    l’incorporer.
  source_name: Usage
  source_url:
- text: >
    Le curcuma tache et s’amertume à trop haute température ; dans un cake, un four
    doux suffit à la couleur.
  source_name: Usage
  source_url:
wines:
- name: Sauvignon de Touraine
  producer: Henry Marionnet
  origin: Soings-en-Sologne, Touraine
  grapes: sauvignon
  award:
  why: Buis, agrume — curcuma et fromage du cake.
- name: Quincy
  producer: Domaine Mardon
  origin: Quincy, Centre-Loire
  grapes: sauvignon
  award:
  why: Pamplemousse — le butternut sucré.
- name: Crémant de Loire brut
  producer: Bouvet-Ladubay
  origin: Saint-Hilaire-Saint-Florent
  grapes: chenin
  award:
  why: Bulles — cake apéritif.
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
      prep_min: 50
      cook_min: 40
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - poêle
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile de coco
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
    - Mélange. Dans un récipient, versez la farine, la levure, ajoutez les oeufs, puis mélangez. Ajoutez
      ensuite le lait de votre choix (ici, on a pris du lait de soja) puis le beurre préalablement
      fondu. Complétez avec de la menthe ciselée et mélangez le tout. Votre appareil est prêt
      !
    - Cuisson. Coupez votre courge butternut (pour 4 personnes, il vous en faudra environ un quart).
      Épluchez-la, coupez-la en brunoise puis mettez-la à dégourdir dans une poêle pendant
      quelques minutes avec un peu d’huile de coco.
    - Cuisson. Une fois que les morceaux se sont un peu attendris, ajoutez le butternut à votre appareil.
      Rectifiez l’assaisonnement selon vos goûts (sel, poivre), puis finalisez avec le curcuma
      avant de mélanger une dernière fois.
    - Finition. Beurrez et farinez un moule à cake et versez ensuite votre appareil à l’intérieur. Comme
      nous, vous pouvez ensuite ajouter des graines de courge et de tournesol au dessus du
      cake, avant de le mettre au four à 170°C pendant 30 à 40 minutes. Et voilà, vous avez
      un cake végétarien parfait pour grignoter dans la journée ou déguster en entrée, accompagné
      d’une petite salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un récipient, versez la farine et la levure, ajoutez les œufs, puis mélangez. Ajoutez ensuite le lait de votre choix (ici, on a pris du lait de soja), puis le beurre préalablement fondu. Complétez avec de la menthe ciselée, coupée très finement, et mélangez."
      - "Cuisson. Coupez votre courge butternut (pour 4 personnes, il vous en faudra environ un quart). Épluchez-la, [[brunoise|coupez-la en brunoise]], de tout petits dés, puis mettez-la à dégourdir dans une poêle pendant quelques minutes avec un peu d’huile de coco."
      - "Cuisson. Une fois que les morceaux se sont un peu attendris, ajoutez le butternut à votre appareil. Rectifiez l’assaisonnement selon vos goûts (sel, poivre), puis finalisez avec le curcuma avant de mélanger une dernière fois."
      - "Finition. Beurrez et farinez un moule à cake, puis versez l’appareil. Vous pouvez ajouter des graines de courge et de tournesol au-dessus du cake, puis enfournez à 170 °C pendant 30 à 40 minutes."
      pro:
      - "Verser farine et levure dans un récipient, ajouter les œufs, mélanger. Ajouter le lait au choix (ici, lait de soja), puis le beurre préalablement fondu. Compléter de menthe ciselée. Mélanger."
      - "Couper la courge butternut (environ un quart pour 4 personnes). Éplucher, couper en brunoise. Dégourdir à la poêle quelques minutes avec un peu d’huile de coco."
      - "Dès que les morceaux se sont un peu attendris, ajouter le butternut à l’appareil. Rectifier l’assaisonnement (sel, poivre), finaliser avec le curcuma. Mélanger une dernière fois."
      - "Beurrer et fariner un moule à cake. Verser l’appareil. Ajouter éventuellement des graines de courge et de tournesol au-dessus. Enfourner à 170 °C pendant 30 à 40 minutes."
      cavernes:
      - "Mélange. Récipient : farine, levure, verser. Œufs, ajouter, mélanger. Lait choix (ici lait soja), beurre fondu. Menthe ciselée, couper fin, mélanger."
      - "Cuisson. Courge butternut, couper (4 personnes, environ quart). Éplucher, brunoise, petits dés. Poêle, dégourdir quelques minutes, peu huile coco."
      - "Cuisson. Morceaux peu attendris. Butternut, ajouter appareil. Assaisonnement, rectifier (sel, poivre). Curcuma, finaliser. Mélanger dernière fois."
      - "Finition. Moule cake, beurrer, fariner. Appareil, verser. Graines courge, tournesol, dessus, possible. Four 170 °C 30 à 40 min."
    kcal_per_serving: 411
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
    kcal_per_serving: 411
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
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile de coco
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
    - Préparation. Dans un récipient, versez la farine et la levure, ajoutez les œufs de lin (1 c.à.s. de
      lin + 3 c.à.s. d'eau par œuf) ou le tofu soyeux, puis mélangez. Ajoutez le lait d'avoine
      ou de soja, puis la margarine végétale préalablement fondue. Complétez avec de la menthe
      ciselée et mélangez le tout. Votre appareil est prêt !
    - Cuisson. Coupez votre courge butternut (pour 4 personnes, il vous en faudra environ un quart).
      Épluchez-la, coupez-la en brunoise puis mettez-la à dégourdir dans une poêle pendant
      quelques minutes avec un peu d’huile de coco.
    - Cuisson. Une fois que les morceaux se sont un peu attendris, ajoutez le butternut à votre appareil.
      Rectifiez l’assaisonnement selon vos goûts (sel, poivre), puis finalisez avec le curcuma
      avant de mélanger une dernière fois.
    - Finition. Graissez et farinez un moule à cake avec de la margarine végétale, puis versez
      ensuite votre appareil à l’intérieur. Comme nous, vous pouvez ensuite ajouter des graines
      de courge et de tournesol au dessus du cake, avant de le mettre au four à 170°C pendant
      30 à 40 minutes. Et voilà, vous avez un cake végétarien parfait pour grignoter dans
      la journée ou déguster en entrée, accompagné d’une petite salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, versez la farine et la levure, ajoutez les œufs de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis mélangez. Ajoutez le lait d’avoine ou de soja, puis la margarine végétale préalablement fondue. Complétez avec de la menthe ciselée, coupée très finement, et mélangez."
      - "Cuisson. Coupez votre courge butternut (pour 4 personnes, il vous en faudra environ un quart). Épluchez-la, [[brunoise|coupez-la en brunoise]], de tout petits dés, puis mettez-la à dégourdir dans une poêle pendant quelques minutes avec un peu d’huile de coco."
      - "Cuisson. Une fois que les morceaux se sont un peu attendris, ajoutez le butternut à votre appareil. Rectifiez l’assaisonnement selon vos goûts (sel, poivre), puis finalisez avec le curcuma avant de mélanger une dernière fois."
      - "Finition. Graissez et farinez un moule à cake avec de la margarine végétale, puis versez l’appareil. Vous pouvez ajouter des graines de courge et de tournesol au-dessus du cake, puis enfournez à 170 °C pendant 30 à 40 minutes."
      pro:
      - "Verser farine et levure dans un récipient. Ajouter les œufs de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélanger. Ajouter le lait d’avoine ou de soja, puis la margarine végétale préalablement fondue. Compléter de menthe ciselée. Mélanger."
      - "Couper la courge butternut (environ un quart pour 4 personnes). Éplucher, couper en brunoise. Dégourdir à la poêle quelques minutes avec un peu d’huile de coco."
      - "Dès que les morceaux se sont un peu attendris, ajouter le butternut à l’appareil. Rectifier l’assaisonnement (sel, poivre), finaliser avec le curcuma. Mélanger une dernière fois."
      - "Graisser et fariner un moule à cake avec de la margarine végétale. Verser l’appareil. Ajouter éventuellement des graines de courge et de tournesol au-dessus. Enfourner à 170 °C pendant 30 à 40 minutes."
      cavernes:
      - "Préparation. Récipient : farine, levure, verser. Œufs lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, ajouter, mélanger. Lait d’avoine ou soja, margarine végétale fondue. Menthe ciselée, couper fin, mélanger."
      - "Cuisson. Courge butternut, couper (4 personnes, environ quart). Éplucher, brunoise, petits dés. Poêle, dégourdir quelques minutes, peu huile coco."
      - "Cuisson. Morceaux peu attendris. Butternut, ajouter appareil. Assaisonnement, rectifier (sel, poivre). Curcuma, finaliser. Mélanger dernière fois."
      - "Finition. Moule cake, graisser fariner margarine végétale. Appareil, verser. Graines courge, tournesol, dessus, possible. Four 170 °C 30 à 40 min."
    kcal_per_serving: 324
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
    kcal_per_serving: 411
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
  vegan:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Cake butternut et curcuma

![[cake-butternut-et-curcuma.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cake-butternut-et-curcuma]]

## Ingrédients (4 personnes)

- 1 courge butternut
- 200 g de farine
- 50 g de beurre
- 100 mL de lait
- 4 oeuf
- 4 g de levure
- 1 c.à.s d'huile de coco
-  menthe fraîche

## Préparation

1. Dans un récipient, versez la farine, la levure, ajoutez les oeufs, puis mélangez. Ajoutez ensuite le lait de votre choix (ici, on a pris du lait de soja) puis le beurre préalablement fondu. Complétez avec de la menthe ciselée et mélangez le tout. Votre appareil est prêt !
2. Coupez votre courge butternut (pour 4 personnes, il vous en faudra environ un quart). Épluchez-la, coupez-la en brunoise puis mettez-la à dégourdir dans une poêle pendant quelques minutes avec un peu d’huile de coco.
3. Une fois que les morceaux se sont un peu attendris, ajoutez le butternut à votre appareil. Rectifiez l’assaisonnement selon vos goûts (sel, poivre), puis finalisez avec le curcuma avant de mélanger une dernière fois.
4. Beurrez et farinez un moule à cake et versez ensuite votre appareil à l’intérieur. Comme nous, vous pouvez ensuite ajouter des graines de courge et de tournesol au dessus du cake, avant de le mettre au four à 170°C pendant 30 à 40 minutes.

 
 

 
 Et voilà, vous avez un cake végétarien parfait pour grignoter dans la journée ou déguster en entrée, accompagné d’une petite salade. Bon appétit !
