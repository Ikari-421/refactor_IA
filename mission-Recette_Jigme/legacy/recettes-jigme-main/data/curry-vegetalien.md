---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: curry-vegetalien
title: Curry végétalien
lang: fr
description: "Curry végétalien : recette indienne avec oignon, gousse d'ail et carotte, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: salé
tags:
- salé
- curry
- végane
- légumes
- coco
image:
  url:
  alt: Curry végétalien
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/curry-vegetalien.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans produits laitiers.
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
histoire: 'Curry : plat à sauce épicée, d’abord dans les cuisines du sous-continent, puis mondialisé.
  Cette version végétalienne (légumes, lait de coco, épices) est une adaptation contemporaine, pas un
  curry « d’auteur » daté.

  '
fun_facts:
- text: "Le mot curry, via le portugais puis l’anglais, a regroupé des plats très différents."
  source_name: Wikipedia, Curry
  source_url: https://en.wikipedia.org/wiki/Curry
- text: "Le lait de coco adoucit le piquant ; trop réduit, il se sépare."
  source_name: Usage
  source_url:
wines:
- name: Gewurztraminer
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, rose — le coco et l’épice, sans tanin.
- name: Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume, acidité — le piquant, vin plus sec que le gewurz.
- name: Côtes Catalanes blanc
  producer: Domaine Lafage
  origin: Perpignan, Roussillon
  grapes: grenache blanc
  award:
  why: Fleur, gras — les légumes et le coco, sudiste.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: &id001 []
    difficulty: 2
    time: &id002
      prep_min: 60
      cook_min: 25
      rest_min: 0
      total_min: 85
    equipment: &id003
    - poêle
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile pimentée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: petit piment
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: graine de cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: des graines de coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 400
      unit: g
      item: pois chiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: quelques jeunes pousses d'épinard
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Épluchez et coupez l’oignon, l’ail, la carotte et les champignons. Faites chauffer de
      l’huile pimentée dans une poêle ou un wok et ajoutez-y le piment, les graines de coriandre
      et la graine de cardamome préalablement entaillée. Lorsque cela brunit, ajoutez l’oignon
      et l’ail et mélangez.
    - Cuisson. Quand les oignons deviennent translucides, ajoutez le garam masala et le curcuma et
      mélangez. Incorporez les pois chiches préalablement trempés ainsi que les carottes.
      Assaisonnez selon vos goûts et mélangez. Versez le lait de coco et laissez mijoter à
      feu doux et à couvert. Pendant ce temps, faites sauter les champignons dans une poêle
      avec de l’huile, du sel et du poivre.
    - Cuisson. Lorsque les légumes sont cuits, ajoutez dans votre wok les jeunes pousses d’épinard,
      la coriandre fraiche et les champignons. Coupez le feu et mélangez le tout.
    - Dressage. Pour le dressage, déposez dans une assiette creuse une portion de riz, une autre de
      curry et parsemez le tout de zeste de citron vert. Placez une tranche de citron dans
      l’assiette et le tour est joué ! À déguster bien chaud. Bon appétit ! Découvrez aussi
      nos recettes de poulet au curry et de cabillaud au curry.
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et coupez l’oignon, l’ail, la carotte et les champignons. Faites chauffer de l’huile pimentée dans une poêle ou un wok et ajoutez-y le piment, les graines de coriandre et la graine de cardamome préalablement entaillée. Lorsque cela brunit, ajoutez l’oignon et l’ail et mélangez."
      - "Cuisson. Quand les oignons deviennent translucides, ajoutez le garam masala et le curcuma et mélangez. Incorporez les pois chiches préalablement trempés ainsi que les carottes. Assaisonnez selon vos goûts et mélangez. Versez le lait de coco et [[mijoter|laissez mijoter]] à feu doux et à couvert. Pendant ce temps, faites sauter les champignons dans une poêle avec de l’huile, du sel et du poivre."
      - "Cuisson. Lorsque les légumes sont cuits, ajoutez dans votre wok les jeunes pousses d’épinard, la coriandre fraiche et les champignons. Coupez le feu et mélangez le tout."
      - "Dressage. Déposez dans une assiette creuse une portion de riz et une portion de curry. Parsemez de zeste de citron vert. Placez une tranche de citron dans l’assiette. Servez bien chaud."
      pro:
      - "Cuisson. Éplucher et couper oignon, ail, carotte et champignons. Chauffer l’huile pimentée en poêle ou wok. Ajouter piment, graines de coriandre et graine de cardamome entaillée. Dès brunissement, ajouter oignon et ail. Mélanger."
      - "Cuisson. Oignons translucides : ajouter garam masala et curcuma. Mélanger. Incorporer pois chiches trempés et carottes. Assaisonner. Mélanger. Verser le lait de coco. Mijoter à feu doux, à couvert. En parallèle, sauter les champignons à l’huile, sel et poivre."
      - "Cuisson. Légumes cuits : ajouter au wok jeunes pousses d’épinard, coriandre fraiche et champignons. Couper le feu. Mélanger."
      - "Dressage. Assiette creuse : portion de riz, portion de curry. Parsemer de zeste de citron vert. Poser une tranche de citron. Servir chaud."
      cavernes:
      - "Cuisson. Oignon, ail, carotte, champignons, éplucher, couper. Huile pimentée, poêle ou wok, chauffer. Piment, graines coriandre, graine cardamome entaillée, ajouter. Brunir. Oignon, ail, ajouter. Mélanger."
      - "Cuisson. Oignons translucides. Garam masala, curcuma, ajouter. Mélanger. Pois chiches trempés, carottes, incorporer. Assaisonner goûts. Mélanger. Lait coco, verser. Feu doux, couvert, mijoter. Pendant : champignons, poêle, huile sel poivre, sauter."
      - "Cuisson. Légumes cuits. Jeunes pousses épinard, coriandre fraiche, champignons, wok, ajouter. Feu, couper. Mélanger."
      - "Dressage. Assiette creuse : portion riz, portion curry. Zeste citron vert, parsemer. Tranche citron, poser. Chaud."
    kcal_per_serving: 152
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 152
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
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile pimentée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: petit piment
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: graine de cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: des graines de coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 400
      unit: g
      item: pois chiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: quelques jeunes pousses d'épinard
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: la coriandre fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Épluchez et coupez l’oignon, l’ail, la carotte et les champignons. Faites chauffer de
      l’huile pimentée dans une poêle ou un wok et ajoutez-y le piment, les graines de coriandre
      et la graine de cardamome préalablement entaillée. Lorsque cela brunit, ajoutez l’oignon
      et l’ail et mélangez.
    - Cuisson. Quand les oignons deviennent translucides, ajoutez le garam masala et le curcuma et
      mélangez. Incorporez les pois chiches préalablement trempés ainsi que les carottes.
      Assaisonnez selon vos goûts et mélangez. Versez le lait de coco et laissez mijoter à
      feu doux et à couvert. Pendant ce temps, faites sauter les champignons dans une poêle
      avec de l’huile, du sel et du poivre.
    - Cuisson. Lorsque les légumes sont cuits, ajoutez dans votre wok les jeunes pousses d’épinard,
      la coriandre fraiche et les champignons. Coupez le feu et mélangez le tout.
    - Dressage. Pour le dressage, déposez dans une assiette creuse une portion de riz, une autre de
      curry et parsemez le tout de zeste de citron vert. Placez une tranche de citron dans
      l’assiette et le tour est joué ! À déguster bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et coupez l’oignon, l’ail, la carotte et les champignons. Faites chauffer de l’huile pimentée dans une poêle ou un wok et ajoutez-y le piment, les graines de coriandre et la graine de cardamome préalablement entaillée. Lorsque cela brunit, ajoutez l’oignon et l’ail et mélangez."
      - "Cuisson. Quand les oignons deviennent translucides, ajoutez le garam masala et le curcuma et mélangez. Incorporez les pois chiches préalablement trempés ainsi que les carottes. Assaisonnez selon vos goûts et mélangez. Versez le lait de coco et [[mijoter|laissez mijoter]] à feu doux et à couvert. Pendant ce temps, faites sauter les champignons dans une poêle avec de l’huile, du sel et du poivre."
      - "Cuisson. Lorsque les légumes sont cuits, ajoutez dans votre wok les jeunes pousses d’épinard, la coriandre fraiche et les champignons. Coupez le feu et mélangez le tout."
      - "Dressage. Déposez dans une assiette creuse une portion de riz et une portion de curry. Parsemez de zeste de citron vert. Placez une tranche de citron dans l’assiette. Servez bien chaud."
      pro:
      - "Cuisson. Éplucher et couper oignon, ail, carotte et champignons. Chauffer l’huile pimentée en poêle ou wok. Ajouter piment, graines de coriandre et graine de cardamome entaillée. Dès brunissement, ajouter oignon et ail. Mélanger."
      - "Cuisson. Oignons translucides : ajouter garam masala et curcuma. Mélanger. Incorporer pois chiches trempés et carottes. Assaisonner. Mélanger. Verser le lait de coco. Mijoter à feu doux, à couvert. En parallèle, sauter les champignons à l’huile, sel et poivre."
      - "Cuisson. Légumes cuits : ajouter au wok jeunes pousses d’épinard, coriandre fraiche et champignons. Couper le feu. Mélanger."
      - "Dressage. Assiette creuse : portion de riz, portion de curry. Parsemer de zeste de citron vert. Poser une tranche de citron. Servir chaud."
      cavernes:
      - "Cuisson. Oignon, ail, carotte, champignons, éplucher, couper. Huile pimentée, poêle ou wok, chauffer. Piment, graines coriandre, graine cardamome entaillée, ajouter. Brunir. Oignon, ail, ajouter. Mélanger."
      - "Cuisson. Oignons translucides. Garam masala, curcuma, ajouter. Mélanger. Pois chiches trempés, carottes, incorporer. Assaisonner goûts. Mélanger. Lait coco, verser. Feu doux, couvert, mijoter. Pendant : champignons, poêle, huile sel poivre, sauter."
      - "Cuisson. Légumes cuits. Jeunes pousses épinard, coriandre fraiche, champignons, wok, ajouter. Feu, couper. Mélanger."
      - "Dressage. Assiette creuse : portion riz, portion curry. Zeste citron vert, parsemer. Tranche citron, poser. Chaud."
    kcal_per_serving: 152
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 152
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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

# Curry végétalien
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/curry-vegetalien]]

## Ingrédients (4 personnes)

- 1 oignon
- 1 gousse d'ail
- 1 carotte
- 200 g de champignon
-  de l'huile pimentée
- 2 petit piment
- 1 graine de cardamome noire
-  des graines de coriandre
- 400 g de pois chiche
- 30 cl de lait de coco
-  quelques jeunes pousses d'épinard
-  de la coriandre fraiche
- 1 citron vert

## Préparation

1. Épluchez et coupez l’oignon, l’ail, la carotte et les champignons. Faites chauffer de l’huile pimentée dans une poêle ou un wok et ajoutez-y le piment, les graines de coriandre et la graine de cardamome préalablement entaillée. Lorsque cela brunit, ajoutez l’oignon et l’ail et mélangez.
2. Quand les oignons deviennent translucides, ajoutez le garam masala et le curcuma et mélangez. Incorporez les pois chiches préalablement trempés ainsi que les carottes. Assaisonnez selon vos goûts et mélangez. Versez le lait de coco et laissez mijoter à feu doux et à couvert. Pendant ce temps, faites sauter les champignons dans une poêle avec de l’huile, du sel et du poivre.
3. Lorsque les légumes sont cuits, ajoutez dans votre wok les jeunes pousses d’épinard, la coriandre fraiche et les champignons. Coupez le feu et mélangez le tout.
4. Pour le dressage, déposez dans une assiette creuse une portion de riz, une autre de curry et parsemez le tout de zeste de citron vert. Placez une tranche de citron dans l’assiette et le tour est joué !

 
 

 
 À déguster bien chaud. Bon appétit !

Découvrez aussi nos recettes de poulet au curry et de cabillaud au curry.
