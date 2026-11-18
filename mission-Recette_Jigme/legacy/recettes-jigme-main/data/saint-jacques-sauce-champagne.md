---
schema: recette-web-jigme/v2
slug: saint-jacques-sauce-champagne
title: Saint-Jacques sauce champagne
lang: fr
description: "Saint-Jacques sauce champagne : recette française avec noix de Saint-Jacques, échalote et gousse d'ail, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- saint-jacques
- poisson
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/saint-jacques-sauce-champagne.jpg
  alt: Saint-Jacques sauce champagne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/saint-jacques-sauce-champagne.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
  sans_celeri:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - celeri
    swaps:
    - from: gros pétoncles de céleri-rave
      to: panais
      note:
    note: 'Céleri : gros pétoncles de céleri-rave → panais.'
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - mollusques
    swaps: []
    note: → version végétarienne.
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
    - from: Champagne
      to: bouillon de légumes
      note:
    note: 'Sulfites : Champagne → bouillon de légumes.'
house_toggle:
house_options: []
histoire: >
  Saint-Jacques nappées d’une réduction de champagne (ou de crémant) et de crème :
  geste de restaurant, pas une recette de pêcheur. Le champagne dans la sauce
  perd ses bulles ; il reste l’acide et le pain de levure.
fun_facts:
- text: >
    Un crémant brut suffit : un prestige s’y noie, comme dans un cocktail.
  source_name: Usage
  source_url:
- text: >
    La noix se cuit à part, on nappe : trop longtemps dans la crème, elle caoutchoute.
  source_name: Usage
  source_url:
wines:
- name: Champagne
  producer: Pierre Gimonnet
  origin: Cuis, Champagne
  grapes: chardonnay
  award:
  why: Blanc de blancs — le plat et le vin de la sauce, un prestige tout au plus.
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — si l’on ne veut pas ouvrir une deuxième bouteille de champagne.
- name: Chablis
  producer: Jean-Marc Brocard
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre — la noix, sans bulles, acidité nette.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - fruits_a_coque
    - mollusques
    - poisson
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: noix de Saint-Jacques
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: Champagne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: crème fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la ciboulette
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
    - Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec
      du beurre. Lorsque le tout devient translucide, rajoutez le champagne. Laissez réduire
      de moitié à feu doux.
    - Mélange. Rajoutez la crème fraîche, du sel, du poivre, et de la ciboulette hachée finement. Mélangez
      et laissez réduire à nouveau avant d’éteindre le feu. Pour une texture plus épaisse,
      vous pouvez ajouter de la fécule de maïs.
    - Finition. Déposez les noix de Saint-Jacques dans une poêle à feu vif avec un peu de matière grasse
      et faites-les saisir. Assaisonnez et retournez les Saint-Jacques pour cuire l’autre
      côté. En fin de cuisson, rajoutez du beurre, laissez-le fondre et arrosez le tout avec.
      Coupez le feu, c’est prêt ! Pour le dressage, on recommande de verser la sauce Champagne
      dans une petite assiette et d’y déposer les Saint-Jacques. Décorez avec un peu de ciboulette
      fraiche.
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec du beurre. Lorsque le tout devient translucide, rajoutez le champagne. [[reduire|Laissez réduire]] de moitié à feu doux."
      - "Mélange. Rajoutez la crème fraîche, du sel, du poivre, et de la ciboulette hachée finement. Mélangez et [[reduire|laissez réduire]] à nouveau avant d’éteindre le feu. Pour une texture plus épaisse, vous pouvez ajouter de la fécule de maïs."
      - "Finition. Déposez les noix de Saint-Jacques dans une poêle à feu vif avec un peu de matière grasse et faites-les saisir. Assaisonnez et retournez les Saint-Jacques pour cuire l’autre côté. En fin de cuisson, rajoutez du beurre, laissez-le fondre et arrosez le tout avec. Coupez le feu, c’est prêt. Pour le dressage, versez la sauce Champagne dans une petite assiette et déposez-y les Saint-Jacques. Décorez avec un peu de ciboulette fraîche."
      pro:
      - "Éplucher et couper les échalotes et l’ail. Faire cuire au beurre dans une casserole. Translucide : ajouter le champagne. Laisser réduire de moitié à feu doux."
      - "Ajouter la crème fraîche, le sel, le poivre et la ciboulette hachée finement. Mélanger. Laisser réduire à nouveau. Éteindre le feu. Option : fécule de maïs pour une texture plus épaisse."
      - "Saisir les noix de Saint-Jacques à feu vif avec un peu de matière grasse. Assaisonner. Retourner. Fin de cuisson : beurre, fondre, arroser. Couper le feu. Dresser : sauce Champagne dans une petite assiette, Saint-Jacques. Ciboulette fraîche."
      cavernes:
      - "Cuisson. Échalotes, ail, éplucher, couper. Casserole, beurre, cuire. Translucide : champagne, ajouter. Feu doux, réduire moitié."
      - "Mélange. Crème fraîche, sel, poivre, ciboulette hachée finement, ajouter. Mélanger. Réduire encore. Éteindre feu. Option : fécule maïs, plus épais."
      - "Finition. Noix Saint-Jacques, poêle feu vif, peu matière grasse, saisir. Assaisonner, retourner, autre côté. Fin cuisson : beurre, fondre, arroser. Couper feu. Dressage : sauce Champagne petite assiette, Saint-Jacques. Ciboulette fraîche."
    kcal_per_serving: 146
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
    - celeri
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: gros pétoncles de céleri-rave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: Champagne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: crème fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la ciboulette
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
    - Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec
      du beurre. Lorsque le tout devient translucide, rajoutez le champagne. Laissez réduire
      de moitié à feu doux.
    - Mélange. Rajoutez la crème fraîche, du sel, du poivre, et de la ciboulette hachée finement. Mélangez
      et laissez réduire à nouveau avant d’éteindre le feu. Pour une texture plus épaisse,
      vous pouvez ajouter de la fécule de maïs.
    - Finition. Déposez les gros pétoncles de céleri-rave dans une poêle à feu vif avec un peu de matière
      grasse et faites-les saisir. Assaisonnez et retournez les pétoncles de céleri-rave pour cuire l’autre côté. En fin de cuisson, rajoutez du beurre, laissez-le fondre et arrosez le tout avec.
      Coupez le feu, c’est prêt ! Pour le dressage, on recommande de verser la sauce Champagne
      dans une petite assiette et d’y déposer les pétoncles de céleri-rave. Décorez avec un peu de ciboulette
      fraiche.
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec du beurre. Lorsque le tout devient translucide, rajoutez le champagne. [[reduire|Laissez réduire]] de moitié à feu doux."
      - "Mélange. Rajoutez la crème fraîche, du sel, du poivre, et de la ciboulette hachée finement. Mélangez et [[reduire|laissez réduire]] à nouveau avant d’éteindre le feu. Pour une texture plus épaisse, vous pouvez ajouter de la fécule de maïs."
      - "Finition. Déposez les gros pétoncles de céleri-rave dans une poêle à feu vif avec un peu de matière grasse et faites-les saisir. Assaisonnez et retournez les pétoncles de céleri-rave pour cuire l’autre côté. En fin de cuisson, rajoutez du beurre, laissez-le fondre et arrosez le tout avec. Coupez le feu, c’est prêt. Pour le dressage, versez la sauce Champagne dans une petite assiette et déposez-y les pétoncles de céleri-rave. Décorez avec un peu de ciboulette fraîche."
      pro:
      - "Éplucher et couper les échalotes et l’ail. Faire cuire au beurre dans une casserole. Translucide : ajouter le champagne. Laisser réduire de moitié à feu doux."
      - "Ajouter la crème fraîche, le sel, le poivre et la ciboulette hachée finement. Mélanger. Laisser réduire à nouveau. Éteindre le feu. Option : fécule de maïs pour une texture plus épaisse."
      - "Saisir les gros pétoncles de céleri-rave à feu vif avec un peu de matière grasse. Assaisonner. Retourner. Fin de cuisson : beurre, fondre, arroser. Couper le feu. Dresser : sauce Champagne dans une petite assiette, pétoncles de céleri-rave. Ciboulette fraîche."
      cavernes:
      - "Cuisson. Échalotes, ail, éplucher, couper. Casserole, beurre, cuire. Translucide : champagne, ajouter. Feu doux, réduire moitié."
      - "Mélange. Crème fraîche, sel, poivre, ciboulette hachée finement, ajouter. Mélanger. Réduire encore. Éteindre feu. Option : fécule maïs, plus épais."
      - "Finition. Gros pétoncles céleri-rave, poêle feu vif, peu matière grasse, saisir. Assaisonner, retourner, autre côté. Fin cuisson : beurre, fondre, arroser. Couper feu. Dressage : sauce Champagne petite assiette, pétoncles céleri-rave. Ciboulette fraîche."
    kcal_per_serving: 165
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
    - celeri
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 12
      unit: piece
      item: gros pétoncles de céleri-rave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: Champagne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la ciboulette
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
    - Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec de la margarine végétale. Lorsque le tout devient translucide, rajoutez le champagne.
      Laissez réduire de moitié à feu doux.
    - Cuisson. Rajoutez la crème de soja ou avoine, du sel, du poivre, et de la ciboulette hachée finement.
      Mélangez et laissez réduire à nouveau avant d’éteindre le feu. Pour une texture plus
      épaisse, vous pouvez ajouter de la fécule de maïs.
    - Finition. Déposez les gros pétoncles de céleri-rave dans une poêle à feu vif avec un peu de matière
      grasse et faites-les saisir. Assaisonnez et retournez les pétoncles de céleri. En fin de cuisson, ajoutez de la margarine végétale, laissez-la fondre et arrosez. Coupez le feu, c’est prêt ! Pour le dressage, on recommande
      de verser la sauce Champagne dans une petite assiette et d’y déposer les pétoncles de céleri.
      Décorez avec un peu de ciboulette fraiche.
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec de la margarine végétale. Lorsque le tout devient translucide, rajoutez le champagne. [[reduire|Laissez réduire]] de moitié à feu doux."
      - "Cuisson. Rajoutez la crème de soja ou avoine, du sel, du poivre, et de la ciboulette hachée finement. Mélangez et [[reduire|laissez réduire]] à nouveau avant d’éteindre le feu. Pour une texture plus épaisse, vous pouvez ajouter de la fécule de maïs."
      - "Finition. Déposez les gros pétoncles de céleri-rave dans une poêle à feu vif avec un peu de matière grasse et faites-les saisir. Assaisonnez et retournez les pétoncles de céleri. En fin de cuisson, ajoutez de la margarine végétale, laissez-la fondre et arrosez. Coupez le feu, c’est prêt. Pour le dressage, versez la sauce Champagne dans une petite assiette et déposez-y les pétoncles de céleri. Décorez avec un peu de ciboulette fraîche."
      pro:
      - "Éplucher et couper les échalotes et l’ail. Faire cuire à la margarine végétale dans une casserole. Translucide : ajouter le champagne. Laisser réduire de moitié à feu doux."
      - "Ajouter la crème de soja ou avoine, le sel, le poivre et la ciboulette hachée finement. Mélanger. Laisser réduire à nouveau. Éteindre le feu. Option : fécule de maïs pour une texture plus épaisse."
      - "Saisir les gros pétoncles de céleri-rave à feu vif avec un peu de matière grasse. Assaisonner. Retourner les pétoncles de céleri. Fin de cuisson : margarine végétale, fondre, arroser. Couper le feu. Dresser : sauce Champagne dans une petite assiette, pétoncles de céleri. Ciboulette fraîche."
      cavernes:
      - "Cuisson. Échalotes, ail, éplucher, couper. Casserole, margarine végétale, cuire. Translucide : champagne, ajouter. Feu doux, réduire moitié."
      - "Cuisson. Crème soja ou avoine, sel, poivre, ciboulette hachée finement, ajouter. Mélanger. Réduire encore. Éteindre feu. Option : fécule maïs, plus épais."
      - "Finition. Gros pétoncles céleri-rave, poêle feu vif, peu matière grasse, saisir. Assaisonner, retourner pétoncles céleri. Fin cuisson : margarine végétale, fondre, arroser. Couper feu. Dressage : sauce Champagne petite assiette, pétoncles céleri. Ciboulette fraîche."
    kcal_per_serving: 165
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
    - lactose
    - produits_laitiers
    - fruits_a_coque
    - mollusques
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 146
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
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

# Saint-Jacques sauce champagne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/saint-jacques-sauce-champagne]]

## Ingrédients (4 personnes)

- 12 noix de Saint-Jacques
- 1 échalote
- 1 gousse d'ail
- 20 cl de Champagne
- 10 cl de crème fraîche
-  de la ciboulette
-  du beurre

## Préparation

1. Épluchez et coupez les échalotes et l’ail. Faites-les cuire dans une casserole avec du beurre. Lorsque le tout devient translucide, rajoutez le champagne. Laissez réduire de moitié à feu doux.
2. Rajoutez la crème fraîche, du sel, du poivre, et de la ciboulette hachée finement. Mélangez et laissez réduire à nouveau avant d’éteindre le feu. Pour une texture plus épaisse, vous pouvez ajouter de la fécule de maïs.
3. Déposez les noix de Saint-Jacques dans une poêle à feu vif avec un peu de matière grasse et faites-les saisir. Assaisonnez et retournez les Saint-Jacques pour cuire l’autre côté. En fin de cuisson, rajoutez du beurre, laissez-le fondre et arrosez le tout avec. Coupez le feu, c’est prêt !

 
 

 
 Pour le dressage, on recommande de verser la sauce Champagne dans une petite assiette et d’y déposer les Saint-Jacques. Décorez avec un peu de ciboulette fraiche.
