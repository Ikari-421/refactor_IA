---
schema: recette-web-jigme/v2
slug: salade-de-lentilles-legumes-et-feta
title: Salade de lentilles, légumes et feta
lang: fr
description: "Salade de lentilles, légumes et feta : recette française avec lentilles vertes, concombre et oignon, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- salade
- lentilles
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/salade-de-lentilles-legumes-et-feta.webp
  alt: Salade de lentilles, légumes et feta
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-de-lentilles-legumes-et-feta.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (féta) : pas d’adaptation fiable.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: féta
      to: fromage végétal
      note:
    note: 'Produits laitiers : féta → fromage végétal.'
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
histoire: 'Lentilles tièdes ou froides, légumes, feta. Les salades de lentilles existent autour de la
  Méditerranée et du Moyen-Orient. La feta est grecque. Assiette contemporaine, pas un plat d’auteur.

  '
fun_facts:
- text: >
    Une lentille verte (du Puy ou non) tient en salade ; une corail se défait.
  source_name: Grokipedia, Lentilles
  source_url: https://grokipedia.com/page/lentilles
- text: >
    La feta se sale déjà : on vinaigre, on ne resale presque pas.
  source_name: Usage
  source_url:
wines:
- name: Assyrtiko
  producer: Boutari
  origin: Santorin, Grèce
  grapes: assyrtiko
  award:
  why: Blanc de Grèce, pierre — la feta, voisin de mer.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — les lentilles tièdes, sans un rouge tannique.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — la vinaigrette.
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
      prep_min: 40
      cook_min: 25
      rest_min: 0
      total_min: 65
    equipment: &id002
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: lentilles vertes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: tomates cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: féta
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Mettez à chauffer une grande casserole, dans laquelle vous aurez préalablement mis de
      l’eau, du sel ainsi que les lentilles. Laissez cuir 20 à 25min.
    - Cuisson. Pendant que les lentilles cuisent, découpez les différents ingrédients de la salade
      (poivrons, concombres, tomates cerises, féta, persil, oignons), puis mélangez le tout
      dans un saladier. Nous avons choisi une découpe fine, pour des raisons esthétiques,
      mais libre à vous de faire comme il vous plait.
    - Cuisson. Une fois que les lentilles sont cuites, égouttez-les puis passez-les à l’eau froide
      avant de les verser dans le saladier.
    - Finition. Assaisonnez avec la vinaigrette de votre choix, salez, poivrez, puis mélangez le tout.
      La salade est prête à être dégustée, seul(e) ou en groupe. Vous pouvez aussi la mettre
      au frais pour la dévorer plus tard.
    steps_niveaux:
      amateur:
      - "Cuisson. Mettez à chauffer une grande casserole dans laquelle vous aurez mis de l’eau, du sel et les lentilles. Laissez cuire 20 à 25 min."
      - "Cuisson. Pendant que les lentilles cuisent, découpez les poivrons, les concombres, les tomates cerises, la féta, le persil et les oignons, puis mélangez le tout dans un saladier. Découpe fine si vous le souhaitez."
      - "Cuisson. Une fois les lentilles cuites, égouttez-les, passez-les à l’eau froide, puis versez-les dans le saladier."
      - "Finition. Assaisonnez avec la vinaigrette de votre choix, salez, poivrez, puis mélangez. Servez, ou réservez au frais."
      pro:
      - "Chauffer une grande casserole d’eau, de sel et de lentilles. Cuire 20 à 25 min."
      - "Pendant la cuisson, découper poivrons, concombres, tomates cerises, féta, persil et oignons. Mélanger dans un saladier. Découpe fine au choix."
      - "Égoutter les lentilles, passer à l’eau froide, verser dans le saladier."
      - "Assaisonner de vinaigrette au choix, saler, poivrer, mélanger. Servir, ou réserver au frais."
      cavernes:
      - "Cuisson. Grande casserole : eau, sel, lentilles. Chauffer. Cuire 20 à 25 min."
      - "Cuisson. Pendant cuisson : poivrons, concombres, tomates cerises, féta, persil, oignons, découper. Saladier, mélanger. Découpe fine, option."
      - "Cuisson. Lentilles cuites, égoutter. Eau froide, passer. Saladier, verser."
      - "Finition. Vinaigrette choix, assaisonner. Saler, poivrer, mélanger. Servir, ou frais, réserver."
    kcal_per_serving: 132
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
    allergens: &id003 []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 132
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
      prep_min: 40
      cook_min: 25
      rest_min: 0
      total_min: 65
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: lentilles vertes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: tomates cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage végétal
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Mettez à chauffer une grande casserole, dans laquelle vous aurez préalablement mis de
      l’eau, du sel ainsi que les lentilles. Laissez cuir 20 à 25min.
    - Cuisson. Pendant que les lentilles cuisent, découpez les différents ingrédients de la salade
      (poivrons, concombres, tomates cerises, fromage végétal, persil, oignons), puis mélangez
      le tout dans un saladier. Nous avons choisi une découpe fine, pour des raisons esthétiques,
      mais libre à vous de faire comme il vous plait.
    - Cuisson. Une fois que les lentilles sont cuites, égouttez-les puis passez-les à l’eau froide
      avant de les verser dans le saladier.
    - Finition. Assaisonnez avec la vinaigrette de votre choix, salez, poivrez, puis mélangez le tout.
      La salade est prête à être dégustée, seul(e) ou en groupe. Vous pouvez aussi la mettre
      au frais pour la dévorer plus tard.
    steps_niveaux:
      amateur:
      - "Cuisson. Mettez à chauffer une grande casserole dans laquelle vous aurez mis de l’eau, du sel et les lentilles. Laissez cuire 20 à 25 min."
      - "Cuisson. Pendant que les lentilles cuisent, découpez les poivrons, les concombres, les tomates cerises, le fromage végétal, le persil et les oignons, puis mélangez le tout dans un saladier. Découpe fine si vous le souhaitez."
      - "Cuisson. Une fois les lentilles cuites, égouttez-les, passez-les à l’eau froide, puis versez-les dans le saladier."
      - "Finition. Assaisonnez avec la vinaigrette de votre choix, salez, poivrez, puis mélangez. Servez, ou réservez au frais."
      pro:
      - "Chauffer une grande casserole d’eau, de sel et de lentilles. Cuire 20 à 25 min."
      - "Pendant la cuisson, découper poivrons, concombres, tomates cerises, fromage végétal, persil et oignons. Mélanger dans un saladier. Découpe fine au choix."
      - "Égoutter les lentilles, passer à l’eau froide, verser dans le saladier."
      - "Assaisonner de vinaigrette au choix, saler, poivrer, mélanger. Servir, ou réserver au frais."
      cavernes:
      - "Cuisson. Grande casserole : eau, sel, lentilles. Chauffer. Cuire 20 à 25 min."
      - "Cuisson. Pendant cuisson : poivrons, concombres, tomates cerises, fromage végétal, persil, oignons, découper. Saladier, mélanger. Découpe fine, option."
      - "Cuisson. Lentilles cuites, égoutter. Eau froide, passer. Saladier, verser."
      - "Finition. Vinaigrette choix, assaisonner. Saler, poivrer, mélanger. Servir, ou frais, réserver."
    kcal_per_serving: 132
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
    allergens: *id003
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 132
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Salade de lentilles, légumes et feta

![[salade-de-lentilles-legumes-et-feta.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-de-lentilles-legumes-et-feta]]

## Ingrédients (4 personnes)

- 300 g de lentilles vertes
- 1 concombre
- 1 oignon
- 2 poivron
- 70 g de tomates cerises
-  féta
-  persil

## Préparation

1. Mettez à chauffer une grande casserole, dans laquelle vous aurez préalablement mis de l’eau, du sel ainsi que les lentilles. Laissez cuir 20 à 25min.
2. Pendant que les lentilles cuisent, découpez les différents ingrédients de la salade (poivrons, concombres, tomates cerises, féta, persil, oignons), puis mélangez le tout dans un saladier. Nous avons choisi une découpe fine, pour des raisons esthétiques, mais libre à vous de faire comme il vous plait.
3. Une fois que les lentilles sont cuites, égouttez-les puis passez-les à l’eau froide avant de les verser dans le saladier.
4. Assaisonnez avec la vinaigrette de votre choix, salez, poivrez, puis mélangez le tout.

 
 

 
 La salade est prête à être dégustée, seul(e) ou en groupe. Vous pouvez aussi la mettre au frais pour la dévorer plus tard.
