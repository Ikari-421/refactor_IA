---
schema: recette-web-jigme/v2
slug: soupe-champignons-moules
title: Soupe champignons moules
lang: fr
description: "Soupe champignons moules : recette française avec moules, champignons et poireau, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- soupe
- fruits de mer
- moules
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/soupe-champignons-moules.webp
  alt: Soupe champignons moules
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/soupe-champignons-moules.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (moules) : pas d’adaptation fiable.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine ; crème de soja (liaison) ou amidon
      → crème d''avoine.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  Le velouté, sauce liée et onctueuse, fait partie des sauces « mères » de la cuisine
  classique. Carême les a classées au XIXe siècle ; Escoffier, plus tard, en a dressé
  la carte — béchamel, velouté, tomate, espagnole, hollandaise — sans les inventer.
  Le nom a débordé sur les potages. Le champignon de Paris, lui, a grandi dans les
  carrières de la capitale au XIXe siècle : le maraîcher Chambry y transfère la culture
  vers 1810, et la fin du siècle compte des centaines de producteurs. Ajouter des moules,
  c’est marier terre et mer, à la manière des bistrots. Le velouté se tient sans elles ;
  elles s’ouvrent à part, le jus filtré, et arrivent à la fin.
fun_facts:
- text: >
    Escoffier n’invente pas les sauces mères : il cartographie le travail de Carême
    en cinq types, dont la sauce veloutée.
  source_name: Radio-Canada, sauces mères
  source_url: https://ici.radio-canada.ca/nouvelle/1731037/sauce-mere-francaise-veloutee-espagnole
- text: >
    Vers 1810, Chambry installe les champignons de Paris dans des carrières au sud
    de la capitale ; à la fin du XIXe siècle, plus de 300 producteurs livrent les Halles.
  source_name: GEO, histoire des champignons de Paris
  source_url: https://www.geo.fr/histoire/la-veritable-histoire-des-champignons-de-paris-207866
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — la moule, même dans une crème.
- name: Chablis
  producer: Jean-Marc Brocard
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre — le champignon, sans bois marqué.
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire — la crème, un blanc un peu plus ample.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - sulfites
    - mollusques
    difficulty: 2
    time: &id001
      prep_min: 65
      cook_min: 35
      rest_min: 0
      total_min: 100
    equipment: &id002
    - four
    - casserole
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1200
      unit: g
      item: moules
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poireau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: crème
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaune d'œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez en quartiers les champignons et faites les revenir avec un peu d’huile d’olive
      au fond d’une casserole.
    - Cuisson. Lorsque les champignons sont bruns sortez-les du feu et gardez la même casserole pour
      y faire revenir avec un peu d’huile le poireau préalablement coupé en rondelles.
    - Cuisson. Laissez les poireaux se dégourdir quelques minutes puis ajoutez les moules et les échalotes
      émincées. N’hésitez-pas à utiliser des herbes à cette étape de la recette, en l’occurence
      du thym et du laurier. Coupez un demi-citron et pressez-le au dessus de la casserole,
      ajoutez le vin blanc et mélangez.
    - Cuisson. Après avoir laissé cuire le tout pendant à peine deux minutes, sortez les moules et
      gardez le jus au fond de la casserole. Ajoutez la crème. Le temps que vous décortiquiez
      les moules laissez chauffer à feu doux la crème.
    - Cuisson. Vous pouvez dès à présent préparer deux bols. Commencez par placer au fond du bol les
      champignons, puis les moules et enfin la crème.
    - Cuisson. Dans la pâte feuilletée, découpez des cercles et recouvrez vos bols avec. Dorez la pâte
      feuilletée avec le jaune d’œuf.
    - 'Cuisson. Mettez le tout au four à 180°C et laissez cuire pendant 45 minutes C’est prêt : à table,
      et bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez en quartiers les champignons et faites les revenir avec un peu d’huile d’olive au fond d’une casserole."
      - "Cuisson. Lorsque les champignons sont bruns sortez-les du feu et gardez la même casserole pour y faire revenir avec un peu d’huile le poireau préalablement coupé en rondelles."
      - "Cuisson. Laissez les poireaux se dégourdir quelques minutes puis ajoutez les moules et les échalotes émincées. Utilisez du thym et du laurier. Coupez un demi-citron et pressez-le au-dessus de la casserole, ajoutez le vin blanc et mélangez."
      - "Cuisson. Après avoir laissé cuire le tout pendant à peine deux minutes, sortez les moules et gardez le jus au fond de la casserole. Ajoutez la crème. Le temps que vous décortiquiez les moules, laissez chauffer à feu doux la crème."
      - "Cuisson. Préparez deux bols. Placez au fond du bol les champignons, puis les moules et enfin la crème."
      - "Cuisson. Dans la pâte feuilletée, découpez des cercles et recouvrez vos bols avec. Dorez la pâte feuilletée avec le jaune d’œuf."
      - "Cuisson. Mettez le tout au four à 180°C et laissez cuire pendant 45 minutes. C’est prêt : à table, et bon appétit !"
      pro:
      - "Couper en quartiers les champignons et les faire revenir avec un peu d’huile d’olive au fond d’une casserole."
      - "Lorsque les champignons sont bruns, les sortir du feu et garder la même casserole pour y faire revenir avec un peu d’huile le poireau coupé en rondelles."
      - "Laisser les poireaux se dégourdir quelques minutes, ajouter les moules et les échalotes émincées, le thym et le laurier. Presser un demi-citron au-dessus de la casserole, ajouter le vin blanc et mélanger."
      - "Cuire à peine deux minutes, sortir les moules, garder le jus. Ajouter la crème. Décortiquer les moules ; chauffer la crème à feu doux."
      - "Préparer deux bols. Placer au fond les champignons, puis les moules, puis la crème."
      - "Découper des cercles dans la pâte feuilletée, recouvrir les bols. Dorer au jaune d’œuf."
      - "Enfourner à 180°C et cuire 45 minutes."
      cavernes:
      - "Cuisson. Champignons, quartiers. Peu huile olive, casserole, revenir."
      - "Cuisson. Champignons bruns, sortir. Même casserole. Poireau, rondelles, peu huile, revenir."
      - "Cuisson. Poireaux, dégourdir quelques minutes. Moules, échalotes émincées, ajouter. Thym, laurier. Demi-citron, presser dessus casserole. Vin blanc, ajouter. Mélanger."
      - "Cuisson. Cuire à peine deux minutes. Moules, sortir. Jus, garder. Crème, ajouter. Moules, décortiquer. Crème, feu doux, chauffer."
      - "Cuisson. Deux bols. Fond bol : champignons, puis moules, puis crème."
      - "Cuisson. Pâte feuilletée, cercles, découper. Bols, recouvrir. Jaune œuf, dorer."
      - "Cuisson. Four 180°C, 45 minutes. Prêt."
    kcal_per_serving: 412
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit: vegan
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 412
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1200
      unit: g
      item: champignons de Paris (à la place des moules)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poireau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pâte feuilletée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez en quartiers les champignons et faites les revenir avec un peu d’huile d’olive
      au fond d’une casserole.
    - Cuisson. Lorsque les champignons sont bruns sortez-les du feu et gardez la même casserole pour
      y faire revenir avec un peu d’huile le poireau préalablement coupé en rondelles.
    - Cuisson. Laissez les poireaux se dégourdir quelques minutes puis ajoutez les champignons supplémentaires et les échalotes émincées. N’hésitez-pas à utiliser des herbes à cette étape de la recette, en l’occurence
      du thym et du laurier. Coupez un demi-citron et pressez-le au dessus de la casserole,
      ajoutez le vin blanc et mélangez.
    - Cuisson. Après avoir laissé cuire le tout pendant à peine deux minutes, sortez une partie des champignons et gardez le jus. Ajoutez la crème de soja ou avoine. Laissez chauffer à feu doux la crème de soja ou d’avoine.
    - Cuisson. Vous pouvez dès à présent préparer deux bols. Commencez par placer au fond du bol les
      champignons, puis le reste des champignons et enfin la crème de soja ou d’avoine.
    - Cuisson. Dans la pâte feuilletée, découpez des cercles et recouvrez vos bols avec. Dorez la pâte feuilletée vegan avec du lait d’avoine.
    - 'Cuisson. Mettez le tout au four à 180°C et laissez cuire pendant 45 minutes C’est prêt : à table,
      et bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez en quartiers les champignons et faites les revenir avec un peu d’huile d’olive au fond d’une casserole."
      - "Cuisson. Lorsque les champignons sont bruns sortez-les du feu et gardez la même casserole pour y faire revenir avec un peu d’huile le poireau préalablement coupé en rondelles."
      - "Cuisson. Laissez les poireaux se dégourdir quelques minutes puis ajoutez les champignons supplémentaires et les échalotes émincées. Utilisez du thym et du laurier. Coupez un demi-citron et pressez-le au-dessus de la casserole, ajoutez le vin blanc et mélangez."
      - "Cuisson. Après avoir laissé cuire le tout pendant à peine deux minutes, sortez une partie des champignons et gardez le jus. Ajoutez la crème de soja ou avoine. Laissez chauffer à feu doux la crème de soja ou d’avoine."
      - "Cuisson. Préparez deux bols. Placez au fond du bol les champignons, puis le reste des champignons et enfin la crème de soja ou d’avoine."
      - "Cuisson. Dans la pâte feuilletée, découpez des cercles et recouvrez vos bols avec. Dorez la pâte feuilletée vegan avec du lait d’avoine."
      - "Cuisson. Mettez le tout au four à 180°C et laissez cuire pendant 45 minutes. C’est prêt : à table, et bon appétit !"
      pro:
      - "Couper en quartiers les champignons et les faire revenir avec un peu d’huile d’olive au fond d’une casserole."
      - "Lorsque les champignons sont bruns, les sortir du feu et garder la même casserole pour y faire revenir avec un peu d’huile le poireau coupé en rondelles."
      - "Laisser les poireaux se dégourdir quelques minutes, ajouter les champignons supplémentaires et les échalotes émincées, le thym et le laurier. Presser un demi-citron au-dessus de la casserole, ajouter le vin blanc et mélanger."
      - "Cuire à peine deux minutes, sortir une partie des champignons, garder le jus. Ajouter la crème de soja ou avoine. Chauffer à feu doux la crème de soja ou d’avoine."
      - "Préparer deux bols. Placer au fond les champignons, puis le reste des champignons, puis la crème de soja ou d’avoine."
      - "Découper des cercles dans la pâte feuilletée, recouvrir les bols. Dorer au lait d’avoine."
      - "Enfourner à 180°C et cuire 45 minutes."
      cavernes:
      - "Cuisson. Champignons, quartiers. Peu huile olive, casserole, revenir."
      - "Cuisson. Champignons bruns, sortir. Même casserole. Poireau, rondelles, peu huile, revenir."
      - "Cuisson. Poireaux, dégourdir quelques minutes. Champignons supplémentaires, échalotes émincées, ajouter. Thym, laurier. Demi-citron, presser dessus casserole. Vin blanc, ajouter. Mélanger."
      - "Cuisson. Cuire à peine deux minutes. Partie champignons, sortir. Jus, garder. Crème soja ou avoine, ajouter. Crème soja ou avoine, feu doux, chauffer."
      - "Cuisson. Deux bols. Fond bol : champignons, puis reste champignons, puis crème soja ou avoine."
      - "Cuisson. Pâte feuilletée, cercles, découper. Bols, recouvrir. Lait avoine, dorer."
      - "Cuisson. Four 180°C, 45 minutes. Prêt."
    kcal_per_serving: 390
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - sulfites
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 412
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
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"
---

# Soupe champignons moules

![[soupe-champignons-moules.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/soupe-champignons-moules]]

## Ingrédients (4 personnes)

- 1.2 kg de moules
- 240 g de champignons
- 1 poireau
- 2 échalote
- 80 cl de crème
- 2 jaune d'œuf
- 2 pâte feuilletée
- 30 cl de vin blanc
-  thym
-  laurier

## Préparation

1. Coupez en quartiers les champignons et faites les revenir avec un peu d’huile d’olive au fond d’une casserole.
2. Lorsque les champignons sont bruns sortez-les du feu et gardez la même casserole pour y faire revenir avec un peu d’huile le poireau préalablement coupé en rondelles.
3. Laissez les poireaux se dégourdir quelques minutes puis ajoutez les moules et les échalotes émincées.

N’hésitez-pas à utiliser des herbes à cette étape de la recette, en l’occurence du thym et du laurier. Coupez un demi-citron et pressez-le au dessus de la casserole, ajoutez le vin blanc et mélangez.
4. Après avoir laissé cuire le tout pendant à peine deux minutes, sortez les moules et gardez le jus au fond de la casserole.

Ajoutez la crème. Le temps que vous décortiquiez les moules laissez chauffer à feu doux la crème.
5. Vous pouvez dès à présent préparer deux bols. Commencez par placer au fond du bol les champignons, puis les moules et enfin la crème.
6. Dans la pâte feuilletée, découpez des cercles et recouvrez vos bols avec. Dorez la pâte feuilletée avec le jaune d’œuf.
7. Mettez le tout au four à 180°C et laissez cuire pendant 45 minutes

 
 

 
 C’est prêt : à table, et bon appétit !
