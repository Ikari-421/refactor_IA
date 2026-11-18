---
schema: recette-web-jigme/v2
slug: puree-a-lancienne
title: Purée à l'ancienne
lang: fr
description: "Purée à l'ancienne : recette française avec pomme de terre, lait et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- accompagnement
- végétarien
- pomme de terre
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/puree-a-lancienne.jpg
  alt: Purée à l'ancienne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/puree-a-lancienne.md
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
histoire: 'Pommes de terre cuites, écrasées, beurre, lait. Accompagnement de viande, sel, poivre. « À
  l’ancienne » désigne ici une purée au presse-purée ou à l’écrase, pas une mousse au siphon. Pas de date
  d’auteur.

  '
fun_facts:
- text: 'Une variété farineuse (bintje, ratte selon le geste) s’écrase ; une ferme reste en grains.

    '
  source_name: Usage
  source_url: null
- text: 'Le beurre d’abord, le lait ensuite, hors du feu : trop d’eau, et ça colle.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Purée à l''ancienne ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Purée_de_pommes_de_terre
wines:
- name: Viré-Clessé
  producer: Cave de Viré
  origin: Viré, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple — le beurre de la purée, sans un chardonnay boisé.
- name: Apremont
  producer: Jean Perrier et Fils
  origin: Apremont, Savoie
  grapes: jacquère
  award:
  why: Jacquère, poire — la pomme de terre, voisin de montagne.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — dès que la purée accompagne un rôti.
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
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement vos pommes de terre. Ici, on a choisi des pommes de
      terre de type « Bintje » qui sont particulièrement adaptées à la purée.
    - Cuisson. Placez les pommes de terre coupées dans une casserole. Ajoutez le lait, salez puis allumez
      le feu. Surveillez la cuisson.
    - Finition. Lorsque les pommes de terre sont cuites, réduisez le tout en purée à l’aide d’une fourchette
      ou d’un presse purée. Rajoutez du beurre pour apporter de l’onctuosité, rectifiez l’assaisonnement
      et le tour est joué ! Cette authentique purée sera parfaite pour accompagner une viande,
      un poisson ou même un plat végétarien. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement vos pommes de terre. Ici, on a choisi des pommes de terre de type « Bintje » qui sont particulièrement adaptées à la purée."
      - "Cuisson. Placez les pommes de terre coupées dans une casserole. Ajoutez le lait, salez puis allumez le feu. Surveillez la cuisson."
      - "Finition. Lorsque les pommes de terre sont cuites, écrasez le tout en purée à l’aide d’une fourchette ou d’un presse purée. Rajoutez du beurre pour apporter de l’onctuosité, rectifiez l’assaisonnement et le tour est joué ! Cette authentique purée sera parfaite pour accompagner une viande, un poisson ou même un plat végétarien. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les pommes de terre. Type Bintje, adaptées à la purée."
      - "Placer les pommes de terre coupées dans une casserole. Ajouter le lait, saler, allumer le feu. Surveiller la cuisson."
      - "Pommes de terre cuites : écraser en purée à la fourchette ou au presse-purée. Ajouter du beurre. Rectifier l’assaisonnement. Accompagner viande, poisson ou plat végétarien."
      cavernes:
      - "Préparation. Pommes terre, éplucher, couper grossièrement. Ici, type Bintje, adaptées purée."
      - "Cuisson. Pommes terre coupées, casserole. Lait, ajouter, saler, allumer feu. Surveiller cuisson."
      - "Finition. Pommes terre cuites, écraser tout purée, fourchette ou presse purée. Beurre, rajouter, onctuosité. Rectifier assaisonnement, tour joué. Accompagner viande, poisson ou plat végétarien. Bon appétit !"
    kcal_per_serving: 546
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 546
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pomme de terre
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
    - qty: 150
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement vos pommes de terre. Ici, on a choisi des pommes de
      terre de type « Bintje » qui sont particulièrement adaptées à la purée.
    - Cuisson. Placez les pommes de terre coupées dans une casserole. Ajoutez le lait d'avoine ou soja,
      salez puis allumez le feu. Surveillez la cuisson.
    - Finition. Lorsque les pommes de terre sont cuites, réduisez le tout en purée à l’aide d’une fourchette
      ou d’un presse purée. Rajoutez de la margarine végétale pour apporter de l’onctuosité,
      rectifiez l’assaisonnement et le tour est joué ! Servez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement vos pommes de terre. Ici, on a choisi des pommes de terre de type « Bintje » qui sont particulièrement adaptées à la purée."
      - "Cuisson. Placez les pommes de terre coupées dans une casserole. Ajoutez le lait d'avoine ou soja, salez puis allumez le feu. Surveillez la cuisson."
      - "Finition. Lorsque les pommes de terre sont cuites, écrasez le tout en purée à l’aide d’une fourchette ou d’un presse purée. Rajoutez de la margarine végétale pour apporter de l’onctuosité, rectifiez l’assaisonnement et le tour est joué ! Servez bien chaud. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les pommes de terre. Type Bintje, adaptées à la purée."
      - "Placer les pommes de terre coupées dans une casserole. Ajouter le lait d'avoine ou soja, saler, allumer le feu. Surveiller la cuisson."
      - "Pommes de terre cuites : écraser en purée à la fourchette ou au presse-purée. Ajouter de la margarine végétale. Rectifier l’assaisonnement. Servir bien chaud."
      cavernes:
      - "Préparation. Pommes terre, éplucher, couper grossièrement. Ici, type Bintje, adaptées purée."
      - "Cuisson. Pommes terre coupées, casserole. Lait avoine ou soja, ajouter, saler, allumer feu. Surveiller cuisson."
      - "Finition. Pommes terre cuites, écraser tout purée, fourchette ou presse purée. Margarine végétale, rajouter, onctuosité. Rectifier assaisonnement, tour joué. Servir chaud. Bon appétit !"
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 546
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
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Purée à l'ancienne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/puree-a-lancienne]]

## Ingrédients (4 personnes)

- 500 g de pomme de terre
- 1 L de lait
- 150 g de beurre

## Préparation

1. Épluchez et coupez grossièrement vos pommes de terre. Ici, on a choisi des pommes de terre de type « Bintje » qui sont particulièrement adaptées à la purée.
2. Placez les pommes de terre coupées dans une casserole. Ajoutez le lait, salez puis allumez le feu. Surveillez la cuisson.
3. Lorsque les pommes de terre sont cuites, réduisez le tout en purée à l’aide d’une fourchette ou d’un presse purée. Rajoutez du beurre pour apporter de l’onctuosité, rectifiez l’assaisonnement et le tour est joué !

 
 

 
 Cette authentique purée sera parfaite pour accompagner une viande, un poisson ou même un plat végétarien. Bon appétit !
