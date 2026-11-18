---
schema: recette-web-jigme/v2
slug: crumpet
title: Crumpet
lang: fr
description: "Crumpet : recette britannique avec levure de boulanger, lait et farine, pour 4 personnes. Version maison. Facile à suivre."
cuisine: britannique
category: sucré
tags:
- sucré
- dessert
- boulangerie
- végétarien
image:
  url:
  alt: Crumpet
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/crumpet.md
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
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Petit pain de gril britannique, pâte liquide levée, cuite dans un cercle. Racines médiévales
  possibles (galette sur pierre) ; la forme actuelle, alvéolée, est un pain de petit-déjeuner britannique.

  '
fun_facts:
- text: "Les trous du dessus viennent du gaz de fermentation qui perce la pâte encore molle."
  source_name: Grokipedia, Crumpet
  source_url: https://grokipedia.com/page/Crumpet
- text: "On le grille ensuite et on le beurre ; ce n’est ni un muffin anglais ni une crêpe."
  source_name: Grokipedia, Crumpet
  source_url: https://grokipedia.com/page/Crumpet
wines:
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin blanc
  award:
  why: Bulles, pomme — le beurre du crumpet, sans un vin lourd.
- name: Crémant de Bourgogne
  producer: Veuve Ambal
  origin: Rully, Bourgogne
  grapes: chardonnay, pinot noir
  award:
  why: Pomme, biscuit — le toast, un effervescent plus ample.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Maisdon-sur-Sèvre, Muscadet
  grapes: melon de Bourgogne
  award:
  why: Citron, sel — le toast beurré, vin maigre.
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
    difficulty: 2
    time: &id001
      prep_min: 70
      cook_min: 10
      rest_min: 0
      total_min: 80
    equipment: &id002
    - poêle
    - saladier
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: g
      item: levure de boulanger
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
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: bicarbonate de soude
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Versez la levure dans de l’eau. Ajoutez le lait, puis mélangez à l’aide d’une cuillère.
    - Cuisson. Dans la cuve d’un robot (ou dans un récipient classique si vous n’avez pas de robot),
      versez la farine, le sucre, puis le mélange d’eau, de lait et de levure. Mélangez le
      tout jusqu’à obtenir une pâte bien lisse. Laissez reposer pendant environ 45min.
    - Repos. Une fois que la pâte a bien reposé et que la levure a fait son travail, ajoutez le bicarbonate
      de soude dilué dans un peu d’eau et mélangez.
    - Cuisson. Étalez un peu d’huile au fond d’une poêle et beurrez des emportes pièces en métal de
      forme circulaire.
    - Finition. Placez les emporte pièces sur la poêle à feu doux. Versez la pâte jusqu’à ce qu’elle
      atteigne une hauteur d’environ 2cm. Une fois que la pâte commence à croûter sur les
      bords, décollez les bords avec la pointe d’un couteau et retournez vos crumpets. Vous
      pouvez toaster légèrement vos crumpets puis les déguster avec une pointe de beurre salée,
      de la confiture ou encore de la pâte à tartiner. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Versez la levure dans de l’eau. Ajoutez le lait, puis mélangez à l’aide d’une cuillère."
      - "Cuisson. Dans la cuve d’un robot (ou dans un récipient classique si vous n’avez pas de robot), versez la farine, le sucre, puis le mélange d’eau, de lait et de levure. Mélangez le tout jusqu’à obtenir une pâte bien lisse. Laissez reposer pendant environ 45 min."
      - "Repos. Une fois que la pâte a bien reposé et que la levure a fait son travail, ajoutez le bicarbonate de soude dilué dans un peu d’eau et mélangez."
      - "Cuisson. Étalez un peu d’huile au fond d’une poêle et beurrez des emporte-pièces en métal de forme circulaire."
      - "Finition. Placez les emporte-pièces sur la poêle à feu doux. Versez la pâte jusqu’à ce qu’elle atteigne une hauteur d’environ 2 cm. Une fois que la pâte commence à croûter sur les bords, décollez les bords avec la pointe d’un couteau et retournez vos crumpets. Vous pouvez toaster légèrement vos crumpets puis les déguster avec une pointe de beurre salé, de la confiture ou encore de la pâte à tartiner."
      pro:
      - "Mélange. Verser la levure dans l’eau. Ajouter le lait. Mélanger à la cuillère."
      - "Cuisson. En cuve de robot (ou récipient), verser farine, sucre, puis le mélange eau-lait-levure. Mélanger jusqu’à pâte lisse. Reposer environ 45 min."
      - "Repos. Après repos, ajouter le bicarbonate de soude dilué dans un peu d’eau. Mélanger."
      - "Cuisson. Huiler le fond d’une poêle. Beurrer des emporte-pièces métalliques circulaires."
      - "Finition. Poser les emporte-pièces sur la poêle à feu doux. Verser la pâte sur environ 2 cm de hauteur. Dès croûtage des bords, décoller à la pointe du couteau et retourner. Toaster légèrement. Servir avec beurre salé, confiture ou pâte à tartiner."
      cavernes:
      - "Mélange. Levure, verser eau. Lait, ajouter. Cuillère, mélanger."
      - "Cuisson. Robot ou récipient. Farine, sucre. Eau, lait, levure, verser. Pâte lisse. Repos environ 45 min."
      - "Repos. Pâte reposée. Bicarbonate soude, diluer peu eau, ajouter. Mélanger."
      - "Cuisson. Peu huile, étaler fond poêle. Emporte-pièces métal, beurrer."
      - "Finition. Emporte-pièces, poêle, feu doux. Pâte, verser hauteur environ 2 cm. Bords croûter, décoller pointe couteau. Retourner. Toaster légèrement. Beurre salé, confiture ou pâte tartiner."
    kcal_per_serving: 282
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 282
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
    - qty: 6
      unit: g
      item: levure de boulanger
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
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: bicarbonate de soude
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Versez la levure dans de l’eau. Ajoutez le lait d'avoine ou soja, puis mélangez à l’aide
      d’une cuillère.
    - Cuisson. Dans la cuve d’un robot (ou dans un récipient classique si vous n’avez pas de robot),
      versez la farine, le sucre, puis le mélange d’eau, de lait d'avoine ou soja et de levure.
      Mélangez le tout jusqu’à obtenir une pâte bien lisse. Laissez reposer pendant environ
      45min.
    - Repos. Une fois que la pâte a bien reposé et que la levure a fait son travail, ajoutez le bicarbonate
      de soude dilué dans un peu d’eau et mélangez.
    - Cuisson. Étalez un peu d’huile au fond d’une poêle et graissez des emporte-pièces en métal de forme circulaire avec de la margarine végétale.
    - Finition. Placez les emporte pièces sur la poêle à feu doux. Versez la pâte jusqu’à ce qu’elle
      atteigne une hauteur d’environ 2cm. Une fois que la pâte commence à croûter sur les
      bords, décollez les bords avec la pointe d’un couteau et retournez vos crumpets. Vous
      pouvez toaster légèrement vos crumpets puis les déguster avec une pointe de margarine végétale, de la confiture ou encore de la pâte à tartiner. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Versez la levure dans de l’eau. Ajoutez le lait d’avoine ou soja, puis mélangez à l’aide d’une cuillère."
      - "Cuisson. Dans la cuve d’un robot (ou dans un récipient classique si vous n’avez pas de robot), versez la farine, le sucre, puis le mélange d’eau, de lait d’avoine ou soja et de levure. Mélangez le tout jusqu’à obtenir une pâte bien lisse. Laissez reposer pendant environ 45 min."
      - "Repos. Une fois que la pâte a bien reposé et que la levure a fait son travail, ajoutez le bicarbonate de soude dilué dans un peu d’eau et mélangez."
      - "Cuisson. Étalez un peu d’huile au fond d’une poêle et graissez des emporte-pièces en métal de forme circulaire avec de la margarine végétale."
      - "Finition. Placez les emporte-pièces sur la poêle à feu doux. Versez la pâte jusqu’à ce qu’elle atteigne une hauteur d’environ 2 cm. Une fois que la pâte commence à croûter sur les bords, décollez les bords avec la pointe d’un couteau et retournez vos crumpets. Vous pouvez toaster légèrement vos crumpets puis les déguster avec une pointe de margarine végétale, de la confiture ou encore de la pâte à tartiner."
      pro:
      - "Mélange. Verser la levure dans l’eau. Ajouter le lait d’avoine ou soja. Mélanger à la cuillère."
      - "Cuisson. En cuve de robot (ou récipient), verser farine, sucre, puis le mélange eau-lait d’avoine ou soja-levure. Mélanger jusqu’à pâte lisse. Reposer environ 45 min."
      - "Repos. Après repos, ajouter le bicarbonate de soude dilué dans un peu d’eau. Mélanger."
      - "Cuisson. Huiler le fond d’une poêle. Graisser des emporte-pièces métalliques circulaires à la margarine végétale."
      - "Finition. Poser les emporte-pièces sur la poêle à feu doux. Verser la pâte sur environ 2 cm de hauteur. Dès croûtage des bords, décoller à la pointe du couteau et retourner. Toaster légèrement. Servir avec margarine végétale, confiture ou pâte à tartiner."
      cavernes:
      - "Mélange. Levure, verser eau. Lait avoine ou soja, ajouter. Cuillère, mélanger."
      - "Cuisson. Robot ou récipient. Farine, sucre. Eau, lait avoine ou soja, levure, verser. Pâte lisse. Repos environ 45 min."
      - "Repos. Pâte reposée. Bicarbonate soude, diluer peu eau, ajouter. Mélanger."
      - "Cuisson. Peu huile, étaler fond poêle. Emporte-pièces métal, graisser margarine végétale."
      - "Finition. Emporte-pièces, poêle, feu doux. Pâte, verser hauteur environ 2 cm. Bords croûter, décoller pointe couteau. Retourner. Toaster légèrement. Margarine végétale, confiture ou pâte tartiner."
    kcal_per_serving: 282
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 282
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Grillé le lendemain"]
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Crumpet
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/crumpet]]

## Ingrédients (4 personnes)

- 6 g de levure de boulanger
- 10 cL d'eau
- 20 cL de lait
- 250 g de farine
- 30 g de sucre en poudre
- 8 g de bicarbonate de soude

## Préparation

1. Versez la levure dans de l’eau. Ajoutez le lait, puis mélangez à l’aide d’une cuillère.
2. Dans la cuve d’un robot (ou dans un récipient classique si vous n’avez pas de robot), versez la farine, le sucre, puis le mélange d’eau, de lait et de levure. Mélangez le tout jusqu’à obtenir une pâte bien lisse. Laissez reposer pendant environ 45min.
3. Une fois que la pâte a bien reposé et que la levure a fait son travail, ajoutez le bicarbonate de soude dilué dans un peu d’eau et mélangez.
4. Étalez un peu d’huile au fond d’une poêle et beurrez des emportes pièces en métal de forme circulaire.
5. Placez les emporte pièces sur la poêle à feu doux. Versez la pâte jusqu’à ce qu’elle atteigne une hauteur d’environ 2cm. Une fois que la pâte commence à croûter sur les bords, décollez les bords avec la pointe d’un couteau et retournez vos crumpets.

 
 

 
 Vous pouvez toaster légèrement vos crumpets puis les déguster avec une pointe de beurre salée, de la confiture ou encore de la pâte à tartiner. Bon appétit !
