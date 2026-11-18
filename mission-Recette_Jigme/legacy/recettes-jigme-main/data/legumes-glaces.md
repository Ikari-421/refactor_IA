---
schema: recette-web-jigme/v2
slug: legumes-glaces
title: Légumes glacés
lang: fr
description: "Légumes glacés : recette française avec carotte, beurre et sucre, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- accompagnement
- légumes
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/legumes-glaces.jpg
  alt: Légumes glacés
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/legumes-glaces.md
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
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
histoire: 'Glacer un légume : le cuire à l’étouffée avec un peu de matière grasse, d’eau ou de fond, et
  souvent un peu de sucre, jusqu’à un nappage brillant. Un film luisant, sucré ou salé. Geste de cuisine
  française classique (carottes, navets, oignons grelots), sans date d’auteur.

  '
fun_facts:
- text: 'Trop de liquide, et ça bouille ; trop peu, et ça brûle. On finit à sec pour le brillant.

    '
  source_name: Usage
  source_url: null
- text: 'Le sucre n’est pas obligatoire : le légume sucré (carotte) caramélise tout seul en fin de cuisson.

    '
  source_name: Usage
  source_url: null
wines:
- name: Vouvray
  producer: Champalou
  origin: Vouvray, Loire
  grapes: chenin
  award:
  why: Chenin sec ou tendre — le sucré-salé du glaçage, sans un liquoreux.
- name: Alsace Pinot Blanc
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot blanc
  award:
  why: Blanc souple — carotte ou navet glacé, sans aromatique envahissant.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — coupe le beurre du glaçage.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id003
    - casserole
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du papier cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez les carottes et coupez-les chacune en tronçons de tailles égales, puis chaque
      tronçon en 4 dans la hauteur. Enlevez les arrêtes pour avoir des morceaux de carottes
      arrondis, des sortes de longs ballons de rugby (voir vidéo ci-dessous).
    - Cuisson. Déposez les morceaux de carotte dans une casserole et versez de l’eau à mi-hauteur des
      légumes. Ajoutez quelques morceaux de beurre, du sucre et du sel.
    - Cuisson. Prenez un carré de papier sulfurisé et pliez-le en 4. Repliez-le sur lui-même en forme
      de petits triangles. Coupez le bout pour créer une ouverture. Placez la pointe du papier
      cuisson au niveau du centre de votre casserole et coupez l’excédent de papier. Dépliez
      le papier et vos obtenez un genre de couvercle que vous allez déposer sur vos légumes.
      Laisser cuire 10-15 minutes à feu doux, jusqu’à ce que les légumes soit fondants. Ils
      sont ainsi glacés à blanc.
    - 'Finition. Glaçage à brun : Une fois cuits, enlevez le papier et mettez sur feu vif pendant quelques
      instants pour bien enrober les légumes du jus de cuisson. Ils seront parfaits pour accompagner
      une viande. Bon appétit !'
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les carottes et coupez-les chacune en tronçons de tailles égales, puis chaque tronçon en 4 dans la hauteur. Enlevez les arêtes pour avoir des morceaux de carottes arrondis, des sortes de longs ballons de rugby."
      - "Cuisson. Déposez les morceaux de carotte dans une casserole et versez de l’eau à mi-hauteur des légumes. Ajoutez quelques morceaux de beurre, du sucre et du sel."
      - "Cuisson. Prenez un carré de papier sulfurisé et pliez-le en 4. Repliez-le sur lui-même en forme de petits triangles. Coupez le bout pour créer une ouverture. Placez la pointe du papier cuisson au niveau du centre de votre casserole et coupez l’excédent de papier. Dépliez le papier : vous obtenez un genre de couvercle que vous allez déposer sur vos légumes. Laissez cuire 10-15 minutes à feu doux, jusqu’à ce que les légumes soient fondants. Ils sont ainsi glacés à blanc."
      - "Finition. Glaçage à brun : une fois cuits, enlevez le papier et mettez sur feu vif pendant quelques instants pour bien enrober les légumes du jus de cuisson."
      pro:
      - "Éplucher les carottes. Couper chacune en tronçons de tailles égales, puis chaque tronçon en 4 dans la hauteur. Enlever les arêtes pour obtenir des morceaux arrondis, sortes de longs ballons de rugby."
      - "Déposer les morceaux de carotte dans une casserole. Verser de l’eau à mi-hauteur des légumes. Ajouter quelques morceaux de beurre, du sucre et du sel."
      - "Prendre un carré de papier sulfurisé. Plier en 4. Replier sur lui-même en forme de petits triangles. Couper le bout pour créer une ouverture. Placer la pointe du papier cuisson au centre de la casserole. Couper l’excédent. Déplier : genre de couvercle à déposer sur les légumes. Cuire 10-15 minutes à feu doux, jusqu’à légumes fondants. Glacés à blanc."
      - "Glaçage à brun : une fois cuits, enlever le papier. Mettre sur feu vif pendant quelques instants pour enrober les légumes du jus de cuisson."
      cavernes:
      - "Préparation. Carottes, éplucher. Tronçons tailles égales. Chaque tronçon, 4 dans hauteur. Arêtes, enlever. Morceaux arrondis, longs ballons rugby."
      - "Cuisson. Morceaux carotte, casserole. Eau mi-hauteur légumes. Beurre quelques morceaux, sucre, sel, ajouter."
      - "Cuisson. Carré papier sulfurisé, plier 4. Replier, petits triangles. Bout, couper, ouverture. Pointe papier, centre casserole. Excédent papier, couper. Déplier. Genre couvercle, déposer sur légumes. Feu doux 10-15 minutes, légumes fondants. Glacés à blanc."
      - "Finition. Glaçage brun. Cuits. Papier, enlever. Feu vif quelques instants. Légumes, jus cuisson, enrober."
    kcal_per_serving: 100
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 100
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
    allergens: []
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du papier cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez les carottes et coupez-les chacune en tronçons de tailles égales, puis chaque
      tronçon en 4 dans la hauteur. Enlevez les arrêtes pour avoir des morceaux de carottes
      arrondis, des sortes de longs ballons de rugby (voir vidéo ci-dessous).
    - Cuisson. Déposez les morceaux de carotte dans une casserole et versez de l’eau à mi-hauteur des
      légumes. Ajoutez quelques morceaux de margarine végétale, du sucre et du sel.
    - Cuisson. Prenez un carré de papier sulfurisé et pliez-le en 4. Repliez-le sur lui-même en forme
      de petits triangles. Coupez le bout pour créer une ouverture. Placez la pointe du papier
      cuisson au niveau du centre de votre casserole et coupez l’excédent de papier. Dépliez
      le papier et vos obtenez un genre de couvercle que vous allez déposer sur vos légumes.
      Laisser cuire 10-15 minutes à feu doux, jusqu’à ce que les légumes soit fondants. Ils
      sont ainsi glacés à blanc.
    - 'Finition. Glaçage à brun : Une fois cuits, enlevez le papier et mettez sur feu vif pendant quelques
      instants pour bien enrober les légumes du jus de cuisson. Ils seront parfaits pour accompagner
      une viande. Bon appétit !'
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les carottes et coupez-les chacune en tronçons de tailles égales, puis chaque tronçon en 4 dans la hauteur. Enlevez les arêtes pour avoir des morceaux de carottes arrondis, des sortes de longs ballons de rugby."
      - "Cuisson. Déposez les morceaux de carotte dans une casserole et versez de l’eau à mi-hauteur des légumes. Ajoutez quelques morceaux de margarine végétale, du sucre et du sel."
      - "Cuisson. Prenez un carré de papier sulfurisé et pliez-le en 4. Repliez-le sur lui-même en forme de petits triangles. Coupez le bout pour créer une ouverture. Placez la pointe du papier cuisson au niveau du centre de votre casserole et coupez l’excédent de papier. Dépliez le papier : vous obtenez un genre de couvercle que vous allez déposer sur vos légumes. Laissez cuire 10-15 minutes à feu doux, jusqu’à ce que les légumes soient fondants. Ils sont ainsi glacés à blanc."
      - "Finition. Glaçage à brun : une fois cuits, enlevez le papier et mettez sur feu vif pendant quelques instants pour bien enrober les légumes du jus de cuisson."
      pro:
      - "Éplucher les carottes. Couper chacune en tronçons de tailles égales, puis chaque tronçon en 4 dans la hauteur. Enlever les arêtes pour obtenir des morceaux arrondis, sortes de longs ballons de rugby."
      - "Déposer les morceaux de carotte dans une casserole. Verser de l’eau à mi-hauteur des légumes. Ajouter quelques morceaux de margarine végétale, du sucre et du sel."
      - "Prendre un carré de papier sulfurisé. Plier en 4. Replier sur lui-même en forme de petits triangles. Couper le bout pour créer une ouverture. Placer la pointe du papier cuisson au centre de la casserole. Couper l’excédent. Déplier : genre de couvercle à déposer sur les légumes. Cuire 10-15 minutes à feu doux, jusqu’à légumes fondants. Glacés à blanc."
      - "Glaçage à brun : une fois cuits, enlever le papier. Mettre sur feu vif pendant quelques instants pour enrober les légumes du jus de cuisson."
      cavernes:
      - "Préparation. Carottes, éplucher. Tronçons tailles égales. Chaque tronçon, 4 dans hauteur. Arêtes, enlever. Morceaux arrondis, longs ballons rugby."
      - "Cuisson. Morceaux carotte, casserole. Eau mi-hauteur légumes. Margarine végétale quelques morceaux, sucre, sel, ajouter."
      - "Cuisson. Carré papier sulfurisé, plier 4. Replier, petits triangles. Bout, couper, ouverture. Pointe papier, centre casserole. Excédent papier, couper. Déplier. Genre couvercle, déposer sur légumes. Feu doux 10-15 minutes, légumes fondants. Glacés à blanc."
      - "Finition. Glaçage brun. Cuits. Papier, enlever. Feu vif quelques instants. Légumes, jus cuisson, enrober."
    kcal_per_serving: 100
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 100
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
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Légumes glacés
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/legumes-glaces]]

## Ingrédients (4 personnes)

- 3 carotte
- 40 g de beurre
-  eau
-  sucre
-  sel
-  du papier cuisson

## Préparation

1. Épluchez les carottes et coupez-les chacune en tronçons de tailles égales, puis chaque tronçon en 4 dans la hauteur. Enlevez les arrêtes pour avoir des morceaux de carottes arrondis, des sortes de longs ballons de rugby (voir vidéo ci-dessous).
2. Déposez les morceaux de carotte dans une casserole et versez de l’eau à mi-hauteur des légumes. Ajoutez quelques morceaux de beurre, du sucre et du sel.
3. Prenez un carré de papier sulfurisé et pliez-le en 4. Repliez-le sur lui-même en forme de petits triangles. Coupez le bout pour créer une ouverture. Placez la pointe du papier cuisson au niveau du centre de votre casserole et coupez l’excédent de papier. Dépliez le papier et vos obtenez un genre de couvercle que vous allez déposer sur vos légumes. Laisser cuire 10-15 minutes à feu doux, jusqu’à ce que les légumes soit fondants. Ils sont ainsi glacés à blanc.
4. Glaçage à brun : Une fois cuits, enlevez le papier et mettez sur feu vif pendant quelques instants pour bien enrober les légumes du jus de cuisson.

 
 

 
 Ils seront parfaits pour accompagner une viande. Bon appétit !
