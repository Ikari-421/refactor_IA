---
schema: recette-web-jigme/v2
slug: gateau-de-semoule
title: Gâteau de semoule
lang: fr
description: "Gâteau de semoule : recette française avec fruit de la passion, lait et semoule fine, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- semoule
- végétarien
image:
  url:
  alt: Gâteau de semoule
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gateau-de-semoule.md
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
    - from: semoule fine
      to: crème de riz (même poids)
      note: Texture plus fondante.
    - from: sucre semoule
      to: quinoa
      note:
    note: Semoule de blé → crème de riz.
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; crème de soja ou avoine → crème
      d''avoine.'
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
histoire: 'Semoule cuite dans du lait sucré, puis moulée. Pudding / porridge de semoule, cousin du riz
  au lait et de certains halvah. En France, gâteau de semoule (souvent caramel). Passion et crème ici
  sont une garniture, pas le canon.

  '
fun_facts:
- text: "Plus de semoule et un passage au four, et l’on s’éloigne de la bouillie pour un gâteau tranchable."
  source_name: Wikipedia, Semolina pudding
  source_url: https://en.wikipedia.org/wiki/Semolina_pudding
- text: "La semoule fine épaissit vite ; hors du feu, elle continue de prendre."
  source_name: Usage
  source_url:
wines:
- name: Muscat de Rivesaltes
  producer: Domaine Lafage
  origin: Perpignan, Roussillon
  grapes: muscat
  award:
  why: Raisin, fleur — la semoule au lait, le fruit de la passion.
- name: Clairette de Die
  producer: Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — le gâteau froid, sans un liquoreux lourd.
- name: Rivesaltes ambré
  producer: Domaine des Schistes
  origin: Estagel, Roussillon
  grapes: grenache, macabeu
  award:
  why: Orange sèche, noix — le caramel de lait de la semoule.
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 70
      total_min: 115
    equipment: &id002
    - casserole
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: fruit de la passion
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait (de vache ou végétal)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: semoule fine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: extrait de vanille
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
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 75
      unit: g
      item: beurre salé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites chauffer le lait dans une casserole. Ajoutez le sucre semoule et de l’extrait
      de vanille, puis laissez cuire à feu doux.
    - Cuisson. Pendant ce temps, coupez les fruits de la passion en deux et versez leur contenu dans
      un récipient. Réservez.
    - Mélange. Lorsque le lait commence à bouillir, versez la semoule dedans petit à petit. Mélangez
      jusqu’à ce que la semoule gonfle.
    - Mélange. Versez maintenant la chair des fruits de la passion dans la semoule et mélangez une
      dernière fois. Débarrassez dans un plat et laissez refroidir à température ambiante.
    - Cuisson. Profitez de ce temps pour réaliser un délicieux caramel au beurre salé. Pour cela, faites
      chauffer l’eau dans une casserole. Ajoutez le sucre et laissez cuire à feu doux jusqu’à
      ce que ça caramélise. À ce moment, complétez avec la crème et mélangez. Enfin, ajoutez
      le beurre demi-sel.
    - Repos. Placez le plat contenant le gâteau de semoule au frigo pendant environ 1h.
    - Dressage. Pour le dressage, faites ce que vous voulez ! Pour obtenir le même résultat que sur
      la photo, utilisez un emporte pièce circulaire pour obtenir un « rond » de semoule.
      À l’aide d’un emporte pièce plus petit, faites un trou au milieu pour obtenir une sorte
      de Donut. Enfin, versez le caramel au beurre salé au centre, dans le trou, afin de faire
      un coeur coulant. Décorez l’assiette avec des points de caramel et la chair d’un fruit
      de la passion. Et voilà, vous savez maintenant réaliser un gâteau de semoule. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer le lait dans une casserole. Ajoutez le sucre semoule et de l’extrait de vanille, puis laissez cuire à feu doux."
      - "Cuisson. Pendant ce temps, coupez les fruits de la passion en deux et versez leur contenu dans un récipient. Réservez."
      - "Mélange. Lorsque le lait commence à bouillir, versez la semoule dedans petit à petit. Mélangez jusqu’à ce que la semoule gonfle."
      - "Mélange. Versez maintenant la chair des fruits de la passion dans la semoule et mélangez une dernière fois. Débarrassez dans un plat et laissez refroidir à température ambiante."
      - "Cuisson. Réalisez un caramel au beurre salé. Faites chauffer l’eau dans une casserole. Ajoutez le sucre et laissez cuire à feu doux jusqu’à ce que ça caramélise. À ce moment, complétez avec la crème et mélangez. Enfin, ajoutez le beurre demi-sel."
      - "Repos. Placez le plat contenant le gâteau de semoule au frigo pendant environ 1 h."
      - "Dressage. Avec un emporte-pièce circulaire, prélevez un rond de semoule. Avec un emporte-pièce plus petit, faites un trou au milieu. Versez le caramel au beurre salé au centre, dans le trou, pour un cœur coulant. Décorez l’assiette avec des points de caramel et la chair d’un fruit de la passion."
      pro:
      - "Chauffer le lait en casserole. Ajouter le sucre semoule et l’extrait de vanille. Cuire à feu doux."
      - "Couper les fruits de la passion en deux. Verser le contenu dans un récipient. Réserver."
      - "Dès ébullition du lait, verser la semoule petit à petit. Mélanger jusqu’à ce que la semoule gonfle."
      - "Verser la chair des fruits de la passion dans la semoule. Mélanger. Débarrasser dans un plat. Refroidir à température ambiante."
      - "Caramel au beurre salé : chauffer l’eau. Ajouter le sucre. Cuire à feu doux jusqu’à caramélisation. Compléter avec la crème. Mélanger. Ajouter le beurre demi-sel."
      - "Frigo environ 1 h."
      - "Emporte-pièce circulaire : rond de semoule. Emporte-pièce plus petit : trou au milieu. Verser le caramel au beurre salé au centre. Décorer de points de caramel et de chair de fruit de la passion."
      cavernes:
      - "Cuisson. Casserole, lait, chauffer. Sucre semoule, extrait de vanille, ajouter. Feu doux, cuire."
      - "Cuisson. Fruits passion, deux. Contenu, récipient. Réserver."
      - "Mélange. Lait, ébullition. Semoule, petit à petit. Mélanger jusqu’à semoule gonfle."
      - "Mélange. Chair fruits passion, semoule, verser. Mélanger dernière fois. Plat, débarrasser. Température ambiante, refroidir."
      - "Cuisson. Eau, casserole, chauffer. Sucre, ajouter. Feu doux jusqu’à caramélise. Crème, compléter, mélanger. Beurre demi-sel, ajouter."
      - "Repos. Plat, Frigo environ 1 h."
      - "Dressage. Emporte-pièce circulaire, rond semoule. Emporte-pièce plus petit, trou milieu. Caramel beurre salé, centre, trou, cœur coulant. Assiette, points caramel, chair fruit passion."
    kcal_per_serving: 809
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 809
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: fruit de la passion
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: semoule fine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: extrait de vanille
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
    - qty: 200
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 75
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites chauffer le lait d’avoine ou de soja dans une casserole. Ajoutez le sucre semoule et de l’extrait
      de vanille, puis laissez cuire à feu doux.
    - Cuisson. Pendant ce temps, coupez les fruits de la passion en deux et versez leur contenu dans
      un récipient. Réservez.
    - Mélange. Lorsque le lait d’avoine ou de soja commence à bouillir, versez la semoule dedans petit à petit. Mélangez
      jusqu’à ce que la semoule gonfle.
    - Mélange. Versez maintenant la chair des fruits de la passion dans la semoule et mélangez une
      dernière fois. Débarrassez dans un plat et laissez refroidir à température ambiante.
    - Cuisson. Profitez de ce temps pour réaliser un délicieux caramel à la margarine végétale. Pour cela, faites chauffer l’eau dans une casserole. Ajoutez le sucre et laissez
      cuire à feu doux jusqu’à ce que ça caramélise. À ce moment, complétez avec la crème de soja ou d’avoine et mélangez. Enfin, ajoutez la margarine végétale.
    - Repos. Placez le plat contenant le gâteau de semoule au frigo pendant environ 1h.
    - Dressage. Pour le dressage, faites ce que vous voulez ! Pour obtenir le même résultat que sur
      la photo, utilisez un emporte pièce circulaire pour obtenir un « rond » de semoule.
      À l’aide d’un emporte pièce plus petit, faites un trou au milieu pour obtenir une sorte
      de Donut. Enfin, versez le caramel à la margarine végétale au centre, dans
      le trou, afin de faire un coeur coulant. Décorez l’assiette avec des points de caramel
      et la chair d’un fruit de la passion. Et voilà, vous savez maintenant réaliser un gâteau
      de semoule. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer le lait d’avoine ou de soja dans une casserole. Ajoutez le sucre semoule et de l’extrait de vanille, puis laissez cuire à feu doux."
      - "Cuisson. Pendant ce temps, coupez les fruits de la passion en deux et versez leur contenu dans un récipient. Réservez."
      - "Mélange. Lorsque le lait d’avoine ou de soja commence à bouillir, versez la semoule dedans petit à petit. Mélangez jusqu’à ce que la semoule gonfle."
      - "Mélange. Versez maintenant la chair des fruits de la passion dans la semoule et mélangez une dernière fois. Débarrassez dans un plat et laissez refroidir à température ambiante."
      - "Cuisson. Réalisez un caramel à la margarine végétale. Faites chauffer l’eau dans une casserole. Ajoutez le sucre et laissez cuire à feu doux jusqu’à ce que ça caramélise. À ce moment, complétez avec la crème de soja ou d’avoine et mélangez. Enfin, ajoutez la margarine végétale."
      - "Repos. Placez le plat contenant le gâteau de semoule au frigo pendant environ 1 h."
      - "Dressage. Avec un emporte-pièce circulaire, prélevez un rond de semoule. Avec un emporte-pièce plus petit, faites un trou au milieu. Versez le caramel à la margarine végétale au centre, dans le trou, pour un cœur coulant. Décorez l’assiette avec des points de caramel et la chair d’un fruit de la passion."
      pro:
      - "Chauffer le lait d’avoine ou de soja en casserole. Ajouter le sucre semoule et l’extrait de vanille. Cuire à feu doux."
      - "Couper les fruits de la passion en deux. Verser le contenu dans un récipient. Réserver."
      - "Dès ébullition du lait d’avoine ou de soja, verser la semoule petit à petit. Mélanger jusqu’à ce que la semoule gonfle."
      - "Verser la chair des fruits de la passion dans la semoule. Mélanger. Débarrasser dans un plat. Refroidir à température ambiante."
      - "Caramel à la margarine végétale : chauffer l’eau. Ajouter le sucre. Cuire à feu doux jusqu’à caramélisation. Compléter avec la crème de soja ou d’avoine. Mélanger. Ajouter la margarine végétale."
      - "Frigo environ 1 h."
      - "Emporte-pièce circulaire : rond de semoule. Emporte-pièce plus petit : trou au milieu. Verser le caramel à la margarine végétale au centre. Décorer de points de caramel et de chair de fruit de la passion."
      cavernes:
      - "Cuisson. Casserole, lait d’avoine ou soja, chauffer. Sucre semoule, extrait de vanille, ajouter. Feu doux, cuire."
      - "Cuisson. Fruits passion, deux. Contenu, récipient. Réserver."
      - "Mélange. Lait d’avoine ou soja, ébullition. Semoule, petit à petit. Mélanger jusqu’à semoule gonfle."
      - "Mélange. Chair fruits passion, semoule, verser. Mélanger dernière fois. Plat, débarrasser. Température ambiante, refroidir."
      - "Cuisson. Eau, casserole, chauffer. Sucre, ajouter. Feu doux jusqu’à caramélise. Crème de soja ou avoine, compléter, mélanger. Margarine végétale, ajouter."
      - "Repos. Plat, Frigo environ 1 h."
      - "Dressage. Emporte-pièce circulaire, rond semoule. Emporte-pièce plus petit, trou milieu. Caramel margarine végétale, centre, trou, cœur coulant. Assiette, points caramel, chair fruit passion."
    kcal_per_serving: 553
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 809
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gâteau de semoule
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gateau-de-semoule]]

## Ingrédients (4 personnes)

- 4 fruit de la passion
- 1 L de lait (de vache ou végétal)
- 125 g de semoule fine
- 100 g de sucre semoule
- 1 c.à.c d'extrait de vanille
- 10 cL d'eau
- 20 cL de crème liquide
- 75 g de beurre salé
- 200 g de sucre en poudre

## Préparation

1. Faites chauffer le lait dans une casserole. Ajoutez le sucre semoule et de l’extrait de vanille, puis laissez cuire à feu doux.
2. Pendant ce temps, coupez les fruits de la passion en deux et versez leur contenu dans un récipient. Réservez.
3. Lorsque le lait commence à bouillir, versez la semoule dedans petit à petit. Mélangez jusqu’à ce que la semoule gonfle.
4. Versez maintenant la chair des fruits de la passion dans la semoule et mélangez une dernière fois. Débarrassez dans un plat et laissez refroidir à température ambiante.
5. Profitez de ce temps pour réaliser un délicieux caramel au beurre salé. Pour cela, faites chauffer l’eau dans une casserole. Ajoutez le sucre et laissez cuire à feu doux jusqu’à ce que ça caramélise. À ce moment, complétez avec la crème et mélangez. Enfin, ajoutez le beurre demi-sel.
6. Placez le plat contenant le gâteau de semoule au frigo pendant environ 1h.
7. Pour le dressage, faites ce que vous voulez ! Pour obtenir le même résultat que sur la photo, utilisez un emporte pièce circulaire pour obtenir un « rond » de semoule. À l’aide d’un emporte pièce plus petit, faites un trou au milieu pour obtenir une sorte de Donut. Enfin, versez le caramel au beurre salé au centre, dans le trou, afin de faire un coeur coulant. Décorez l’assiette avec des points de caramel et la chair d’un fruit de la passion.

 
 

 
 Et voilà, vous savez maintenant réaliser un gâteau de semoule. Bon appétit !
