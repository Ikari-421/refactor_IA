---
schema: recette-web-jigme/v2
slug: verrines-dete-aux-crevettes
title: Verrines d'été aux crevettes
lang: fr
description: "Verrines d'été aux crevettes : recette française avec avocats, crevettes et oignons, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- fruits de mer
- rapide
- été
- plat
image:
  url:
  alt: Verrines d'été aux crevettes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/verrines-dete-aux-crevettes.md
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
    note: Déjà sans lait.
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: mayonnaise
      to: mayonnaise vegan (à l'aquafaba)
      note:
    note: 'Œuf : mayonnaise → mayonnaise vegan (à l''aquafaba).'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - moutarde
    swaps: []
    note: 'Contient moutarde (mayonnaise) : pas d’adaptation fiable.'
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - crustaces
    swaps: []
    note: 'Contient crustacés (crevettes) : pas d’adaptation fiable.'
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
histoire: >
  La verrine, petit verre qui montre les couches comme une coupe de terrain, s’est
  imposée chez les traiteurs et dans les magazines autour des années 2000. En pâtisserie,
  on l’attribue souvent à Philippe Conticini, qui aurait transposé le plat à l’assiette
  en transparence dès 1994. Côté salé, elle hérite aussi des cocktails de crevettes
  servis en coupe, très en vogue dans les années 1960-1970. Ici, la version d’été reste
  froide, légère, prête à l’avance — à condition que les couches ne soient pas trop liquides.
fun_facts:
- text: >
    Philippe Conticini est souvent présenté comme le premier, en 1994, à proposer un
    dessert en verrine pour jouer des couleurs et des textures.
  source_name: Chef Simon, Conticini et les verrines
  source_url: https://chefsimon.com/recettes/tag/Philippe%20Conticini/verrines
- text: >
    Même attribution (verrines 1994) dans son parcours de chef pâtissier, aux côtés
    du Gault&Millau 1991 et du titre de MOF.
  source_name: À la carte, Philippe Conticini
  source_url: https://alacarte.direct/whoswho/chefs/philippe-conticini
wines:
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — la crevette, acidité nette.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — l’apéritif de mer.
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — la verrine, sans un champagne.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - crustaces
    - moutarde
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 0
      rest_min: 0
      total_min: 30
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: avocats
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: crevettes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citrons verts
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pamplemousse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cac
      item: ketchup
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cac
      item: mayonnaise
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Mélangez les crevettes avec du ketchup et de la mayonnaise, dosez selon vos envies !
      Mettez-les ensuite au frais.
    - Cuisson. Passons maintenant au guacamole ! Ecrasez les avocats dans un cul de poule, taillez
      finement de l’oignon puis de la coriandre ou du persil. Enfin rajoutez du jus de citron,
      du sel, du poivre et mélangez.
    - Cuisson. Imaginez que votre verrine présentera plusieurs étages colorés aux différentes textures.
      Le pamplemousse et l’orange apporteront de la fraîcheur et de la couleur à l’ensemble.
      Coupez des quartiers de pamplemousses et d’oranges. Coupez en dés les tomates.
    - Dressage. La partie du dressage est la plus satisfaisante à l’oeil ! Au fond du verre, placez
      les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses
      et enfin terminez avec les crevettes ! Mettez les verrines au frais puis sortez-les
      quelques minutes avant la dégustation pour profiter de toutes les saveurs lorsque ce
      sera à température ambiante. Une belle nappe, des cocktails et les verrines d’été…une
      magnifique soirée vous attend !
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez les crevettes avec du ketchup et de la mayonnaise, dosez selon vos envies. Mettez-les ensuite au frais."
      - "Cuisson. Écrasez les avocats dans un cul de poule, taillez finement de l’oignon puis de la coriandre ou du persil. Ajoutez du jus de citron, du sel, du poivre et mélangez."
      - "Cuisson. Coupez des quartiers de pamplemousses et d’oranges. Coupez en dés les tomates."
      - "Dressage. Au fond du verre, placez les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses et enfin terminez avec les crevettes. Mettez les verrines au frais puis sortez-les quelques minutes avant la dégustation, à température ambiante."
      pro:
      - "Mélanger les crevettes avec du ketchup et de la mayonnaise, doser selon l’envie. Mettre au frais."
      - "Écraser les avocats dans un cul de poule, tailler finement de l’oignon puis de la coriandre ou du persil. Ajouter du jus de citron, du sel, du poivre et mélanger."
      - "Couper des quartiers de pamplemousses et d’oranges. Couper les tomates en dés."
      - "Au fond du verre, placer les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses, terminer par les crevettes. Mettre les verrines au frais puis les sortir quelques minutes avant la dégustation, à température ambiante."
      cavernes:
      - "Mélange. Crevettes, ketchup, mayonnaise, mélanger. Selon envies, doser. Frais, mettre."
      - "Cuisson. Avocats, cul poule, écraser. Oignon, finement, tailler. Coriandre ou persil, tailler. Jus citron, sel, poivre, ajouter. Mélanger."
      - "Cuisson. Quartiers pamplemousses et oranges, couper. Tomates, dés, couper."
      - "Dressage. Fond verre, tomates. Guacamole. Quartiers oranges et pamplemousses. Crevettes, terminer. Verrines, frais. Quelques minutes avant dégustation, sortir. Température ambiante."
    kcal_per_serving: 199
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
    allergens: &id003
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 199
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
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 0
      rest_min: 0
      total_min: 30
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: avocats
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: cœurs de palmier (ou tofu ferme)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citrons verts
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pamplemousse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cac
      item: ketchup
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cac
      item: mayonnaise végétale
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Mélangez les cœurs de palmier (ou le tofu) avec du ketchup et de la mayonnaise végétale. Mettez au frais.
    - Cuisson. Passons maintenant au guacamole ! Ecrasez les avocats dans un cul de poule, taillez
      finement de l’oignon puis de la coriandre ou du persil. Enfin rajoutez du jus de citron,
      du sel, du poivre et mélangez.
    - Cuisson. Imaginez que votre verrine présentera plusieurs étages colorés aux différentes textures.
      Le pamplemousse et l’orange apporteront de la fraîcheur et de la couleur à l’ensemble.
      Coupez des quartiers de pamplemousses et d’oranges. Coupez en dés les tomates.
    - Dressage. La partie du dressage est la plus satisfaisante à l’oeil ! Au fond du verre, placez
      les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses
      et enfin terminez avec les cœurs de palmier (ou le tofu) ! Mettez les verrines au frais puis sortez-les
      quelques minutes avant la dégustation pour profiter de toutes les saveurs lorsque ce
      sera à température ambiante. Une belle nappe, des cocktails et les verrines d’été…une
      magnifique soirée vous attend !
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez les cœurs de palmier (ou le tofu) avec du ketchup et de la mayonnaise végétale. Mettez au frais."
      - "Cuisson. Écrasez les avocats dans un cul de poule, taillez finement de l’oignon puis de la coriandre ou du persil. Ajoutez du jus de citron, du sel, du poivre et mélangez."
      - "Cuisson. Coupez des quartiers de pamplemousses et d’oranges. Coupez en dés les tomates."
      - "Dressage. Au fond du verre, placez les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses et enfin terminez avec les cœurs de palmier (ou le tofu). Mettez les verrines au frais puis sortez-les quelques minutes avant la dégustation, à température ambiante."
      pro:
      - "Mélanger les cœurs de palmier (ou le tofu) avec du ketchup et de la mayonnaise végétale. Mettre au frais."
      - "Écraser les avocats dans un cul de poule, tailler finement de l’oignon puis de la coriandre ou du persil. Ajouter du jus de citron, du sel, du poivre et mélanger."
      - "Couper des quartiers de pamplemousses et d’oranges. Couper les tomates en dés."
      - "Au fond du verre, placer les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses, terminer par les cœurs de palmier (ou le tofu). Mettre les verrines au frais puis les sortir quelques minutes avant la dégustation, à température ambiante."
      cavernes:
      - "Mélange. Cœurs palmier ou tofu, ketchup, mayonnaise végétale, mélanger. Frais, mettre."
      - "Cuisson. Avocats, cul poule, écraser. Oignon, finement, tailler. Coriandre ou persil, tailler. Jus citron, sel, poivre, ajouter. Mélanger."
      - "Cuisson. Quartiers pamplemousses et oranges, couper. Tomates, dés, couper."
      - "Dressage. Fond verre, tomates. Guacamole. Quartiers oranges et pamplemousses. Cœurs palmier ou tofu, terminer. Verrines, frais. Quelques minutes avant dégustation, sortir. Température ambiante."
    kcal_per_serving: 199
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
    - crustaces
    - moutarde
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 199
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
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; œufs crus ou peu cuits"

---

# Verrines d'été aux crevettes
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/verrines-dete-aux-crevettes]]

## Ingrédients (4 personnes)

- 3 avocats
- 200 gr de crevettes
- 1 oignons
- 2 citrons verts
- 1 bouquet de coriandre
- 2 pamplemousse
- 2 oranges
- 2 tomates
- 3 càc de ketchup
- 3 càc de mayonnaise

## Préparation

1. Mélangez les crevettes avec du ketchup et de la mayonnaise, dosez selon vos envies ! Mettez-les ensuite au frais.
2. Passons maintenant au guacamole ! Ecrasez les avocats dans un cul de poule, taillez finement de l’oignon puis de la coriandre ou du persil. Enfin rajoutez du jus de citron, du sel, du poivre et mélangez.
3. Imaginez que votre verrine présentera plusieurs étages colorés aux différentes textures. Le pamplemousse et l’orange apporteront de la fraîcheur et de la couleur à l’ensemble.

Coupez des quartiers de pamplemousses et d’oranges.

Coupez en dés les tomates.
4. La partie du dressage est la plus satisfaisante à l’oeil ! Au fond du verre, placez les tomates, ensuite le guacamole, puis les quartiers d’oranges et de pamplemousses et enfin terminez avec les crevettes !

 
 

 
 Mettez les verrines au frais puis sortez-les quelques minutes avant la dégustation pour profiter de toutes les saveurs lorsque ce sera à température ambiante. Une belle nappe, des cocktails et les verrines d’été…une magnifique soirée vous attend !
