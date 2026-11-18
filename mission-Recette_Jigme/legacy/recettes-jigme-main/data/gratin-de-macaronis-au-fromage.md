---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: gratin-de-macaronis-au-fromage
title: Gratin de macaronis au fromage
lang: fr
description: "Gratin de macaronis au fromage : recette française avec macaronis, lait et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- gratin
- fromage
- végétarien
image:
  url:
  alt: Gratin de macaronis au fromage
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gratin-de-macaronis-au-fromage.md
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
    - from: macaronis
      to: pâtes sans gluten
      note:
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
    - from: comté
      to: comté affiné (naturellement quasi sans lactose)
      note:
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
histoire: 'Pâtes (souvent macaroni) liées au fromage, au four ou à la casserole. Des gratins pâtes-fromage
  existent en Angleterre dès le Moyen Âge ; le plat se répand ensuite aux États-Unis. En France, c’est
  le gratin de macaronis, cousin de la béchamel.

  '
fun_facts:
- text: >
    Le cheddar anglais est le fromage le plus cité dans les recettes
    anglo-américaines ; ici, un comté ou un gruyère joue le même rôle.
  source_name: Grokipedia, Macaroni and cheese
  source_url: https://grokipedia.com/page/Macaroni_and_cheese
- text: >
    Les versions en sachet datent du milieu du XXe s. ; elles n’ont rien à voir
    avec un gratin maison.
  source_name: Wikipedia, Macaroni and cheese
  source_url: https://en.wikipedia.org/wiki/Macaroni_and_cheese
wines:
- name: Viré-Clessé
  producer: Cave de Viré
  origin: Viré, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple, pomme — la béchamel, sans bois marqué.
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit mûr, tanin modéré — le fromage fondu.
- name: Cheverny
  producer: Domaine du Salvard
  origin: Cheverny, Loire
  grapes: sauvignon, chardonnay
  award:
  why: Blanc vif — coupe la pâte et le gras du gratin.
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
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 10
      rest_min: 0
      total_min: 40
    equipment: &id002
    - four
    - casserole
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: macaronis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: crème fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix de muscade en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: comté
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Dans une grande casserole d’eau bouillante, faites cuire les macaronis."
    - "Cuisson. Dans une seconde casserole, faites chauffer le lait avec un peu de sel, de poivre et de noix de muscade, selon votre goût."
    - "Cuisson. Dans une troisième casserole, faites fondre le beurre pour réaliser un roux. Une fois liquide, ajoutez la farine et mélangez au fouet. Incorporez le lait pour obtenir une béchamel onctueuse. Égouttez les macaronis dès qu’ils sont cuits."
    - "Cuisson. Complétez la béchamel avec la crème fraîche et le comté râpé, généreusement si vous aimez. Mélangez."
    - "Cuisson. Disposez les macaronis dans un plat à gratin. Versez la béchamel, puis râpez encore du comté par-dessus."
    - "Cuisson. Enfournez à 200 °C, mode grill, jusqu’à ce que ce soit bien gratiné. Laissez un peu refroidir et servez avec une salade ou quelques crudités."
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une grande casserole d’eau bouillante, faites cuire les macaronis."
      - "Cuisson. Dans une seconde casserole, faites chauffer le lait avec un peu de sel, de poivre et de noix de muscade, selon votre goût."
      - "Cuisson. Dans une troisième casserole, faites fondre le beurre pour réaliser un roux. Une fois liquide, ajoutez la farine et mélangez au fouet. Incorporez le lait pour obtenir une béchamel onctueuse. Égouttez les macaronis dès qu’ils sont cuits."
      - "Cuisson. Complétez la béchamel avec la crème fraîche et le comté râpé, généreusement si vous aimez. Mélangez."
      - "Cuisson. Disposez les macaronis dans un plat à gratin. Versez la béchamel, puis [[raper|râpez]] encore du comté par-dessus."
      - "Cuisson. Enfournez à 200 °C, mode grill, jusqu’à ce que ce soit bien gratiné. Laissez un peu refroidir et servez avec une salade ou quelques crudités."
      pro:
      - "Cuire les macaronis dans une grande casserole d’eau bouillante."
      - "Chauffer le lait avec un peu de sel, de poivre et de noix de muscade, selon le goût."
      - "Faire fondre le beurre pour un roux. Une fois liquide, ajouter la farine, mélanger au fouet. Incorporer le lait jusqu’à béchamel onctueuse. Égoutter les macaronis dès qu’ils sont cuits."
      - "Compléter la béchamel avec la crème fraîche et le comté râpé, généreusement. Mélanger."
      - "Disposer les macaronis dans un plat à gratin. Verser la béchamel. Râper encore du comté par-dessus."
      - "Enfourner à 200 °C, mode grill, jusqu’à bien gratiné. Laisser un peu refroidir. Servir avec une salade ou des crudités."
      cavernes:
      - "Cuisson. Grande casserole, eau bouillante, macaronis, cuire."
      - "Cuisson. Seconde casserole, lait, peu sel poivre muscade, chauffer, goût."
      - "Cuisson. Troisième casserole, beurre, fondre, roux. Liquide, farine, fouet. Lait, béchamel onctueuse. Macaronis cuits, égoutter."
      - "Cuisson. Béchamel, crème fraîche, comté râpé, généreux. Mélanger."
      - "Cuisson. Macaronis plat gratin. Béchamel verser. Comté, râper dessus."
      - "Cuisson. Four 200 °C mode grill jusqu’à bien gratiné. Peu refroidir. Servir salade ou crudités."
    kcal_per_serving: 331
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 331
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: macaronis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix de muscade en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Dans une grande casserole d’eau bouillante, faites cuire les macaronis."
    - "Cuisson. Dans une seconde casserole, faites chauffer le lait d’avoine ou de soja avec un peu de sel, de poivre et de noix de muscade, selon votre goût."
    - "Cuisson. Dans une troisième casserole, faites fondre la margarine végétale pour réaliser un roux. Une fois liquide, ajoutez la farine et mélangez au fouet. Incorporez le lait d’avoine ou de soja pour obtenir une béchamel onctueuse. Égouttez les macaronis dès qu’ils sont cuits."
    - "Mélange. Complétez la béchamel avec la crème de soja ou d’avoine et le parmesan végétal ou la levure maltée, généreusement si vous aimez. Mélangez."
    - "Cuisson. Disposez les macaronis dans un plat à gratin. Versez la béchamel, puis parsemez encore de parmesan végétal ou de levure maltée."
    - "Cuisson. Enfournez à 200 °C, mode grill, jusqu’à ce que ce soit bien gratiné. Laissez un peu refroidir et servez avec une salade ou quelques crudités."
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une grande casserole d’eau bouillante, faites cuire les macaronis."
      - "Cuisson. Dans une seconde casserole, faites chauffer le lait d’avoine ou de soja avec un peu de sel, de poivre et de noix de muscade, selon votre goût."
      - "Cuisson. Dans une troisième casserole, faites fondre la margarine végétale pour réaliser un roux. Une fois liquide, ajoutez la farine et mélangez au fouet. Incorporez le lait d’avoine ou de soja pour obtenir une béchamel onctueuse. Égouttez les macaronis dès qu’ils sont cuits."
      - "Mélange. Complétez la béchamel avec la crème de soja ou d’avoine et le parmesan végétal ou la levure maltée, généreusement si vous aimez. Mélangez."
      - "Cuisson. Disposez les macaronis dans un plat à gratin. Versez la béchamel, puis parsemez encore de parmesan végétal ou de levure maltée."
      - "Cuisson. Enfournez à 200 °C, mode grill, jusqu’à ce que ce soit bien gratiné. Laissez un peu refroidir et servez avec une salade ou quelques crudités."
      pro:
      - "Cuire les macaronis dans une grande casserole d’eau bouillante."
      - "Chauffer le lait d’avoine ou de soja avec un peu de sel, de poivre et de noix de muscade, selon le goût."
      - "Faire fondre la margarine végétale pour un roux. Une fois liquide, ajouter la farine, mélanger au fouet. Incorporer le lait d’avoine ou de soja jusqu’à béchamel onctueuse. Égoutter les macaronis dès qu’ils sont cuits."
      - "Compléter la béchamel avec la crème de soja ou d’avoine et le parmesan végétal ou la levure maltée, généreusement. Mélanger."
      - "Disposer les macaronis dans un plat à gratin. Verser la béchamel. Parsemer encore de parmesan végétal ou de levure maltée."
      - "Enfourner à 200 °C, mode grill, jusqu’à bien gratiné. Laisser un peu refroidir. Servir avec une salade ou des crudités."
      cavernes:
      - "Cuisson. Grande casserole, eau bouillante, macaronis, cuire."
      - "Cuisson. Seconde casserole, lait d’avoine ou soja, peu sel poivre muscade, chauffer, goût."
      - "Cuisson. Troisième casserole, margarine végétale, fondre, roux. Liquide, farine, fouet. Lait d’avoine ou soja, béchamel onctueuse. Macaronis cuits, égoutter."
      - "Mélange. Béchamel, crème de soja ou avoine, parmesan végétal ou levure maltée, généreux. Mélanger."
      - "Cuisson. Macaronis plat gratin. Béchamel verser. Parmesan végétal ou levure maltée, parsemer."
      - "Cuisson. Four 200 °C mode grill jusqu’à bien gratiné. Peu refroidir. Servir salade ou crudités."
    kcal_per_serving: 225
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 331
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
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

# Gratin de macaronis au fromage
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gratin-de-macaronis-au-fromage]]

## Ingrédients (4 personnes)

- 250 g de macaronis
- 75 cL de lait
- 60 g de beurre
- 45 g de farine
- 200 g de crème fraîche
-  noix de muscade en poudre
-  comté

## Préparation

1. Cuisson. Dans une grande casserole d’eau bouillante, faites cuire les macaronis.
2. Cuisson. Dans une seconde casserole, faites chauffer le lait avec un peu de sel, de poivre et de noix de muscade, selon votre goût.
3. Cuisson. Dans une troisième casserole, faites fondre le beurre pour réaliser un roux. Une fois liquide, ajoutez la farine et mélangez au fouet. Incorporez le lait pour obtenir une béchamel onctueuse. Égouttez les macaronis dès qu’ils sont cuits.
4. Cuisson. Complétez la béchamel avec la crème fraîche et le comté râpé, généreusement si vous aimez. Mélangez.
5. Cuisson. Disposez les macaronis dans un plat à gratin. Versez la béchamel, puis râpez encore du comté par-dessus.
6. Cuisson. Enfournez à 200 °C, mode grill, jusqu’à ce que ce soit bien gratiné. Laissez un peu refroidir et servez avec une salade ou quelques crudités.

 
 

 
 Laissez refroidir un peu et déguster une bonne part de gratin accompagné d’une salade ou de quelques crudités. Bon appétit !
