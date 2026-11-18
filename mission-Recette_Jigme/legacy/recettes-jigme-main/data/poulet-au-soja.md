---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: poulet-au-soja
title: Poulet au soja
lang: fr
description: "Poulet mijoté à la sauce soja, oignon, pour 4. Plat de semaine. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- poulet
- soja
- mijoté
image:
  url:
  alt: Poulet au soja
  credit:
source_fiche: ""
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
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    note: Déjà sans œufs.
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
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Poulet au soja : cuisses ou blancs, oignon, ail, sauce soja, un peu de sucre, parfois miel. Mijoté à la française d’inspiration asiatique. Réduire la sauce. Riz à côté."
fun_facts:
- text: "La sauce soja est un condiment fermenté ; salée, on réduit le sel ailleurs."
  source_name: "Wikipedia FR, Sauce soja"
  source_url: "https://fr.wikipedia.org/wiki/Sauce_soja"
- text: Les cuisses supportent mieux le mijoté que les blancs.
  source_name: "Wikipedia FR, Poulet"
  source_url: "https://fr.wikipedia.org/wiki/Poulet"
- text: Tamari sans blé pour une version plus courte en gluten.
  source_name: "Wikipedia EN, Soy sauce"
  source_url: "https://en.wikipedia.org/wiki/Soy_sauce"
wines:
- name: Gewurztraminer Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Gewurztraminer
  award: 
  why: "Litchi et rose, cuisine épicée."
- name: "Pinot Noir d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Pinot noir
  award: 
  why: "Fruit rouge, viande blanche, champignon."
- name: Côtes du Rhône blanc
  producer: Famille Perrin
  origin: "Orange, Rhône"
  grapes: "Grenache blanc, viognier"
  award: 
  why: "Fleurs et poire, friture, fromage."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: cuisses de poulet
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: "gousses d'ail"
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saisir. Faites saisir les cuisses de poulet et les oignons dans l’huile."
    - "Mijoter. Ajoutez la sauce soja et le sucre, puis laissez mijoter 25 min."
    - "Réduire. Poursuivez la cuisson jusqu’à ce que la sauce nappe."
    steps_niveaux:
      amateur:
      - "Saisir. Faites saisir les cuisses de poulet et les oignons dans l’huile."
      - "Mijoter. Ajoutez la sauce soja et le sucre, puis [[mijoter|laissez mijoter]] 25 min."
      - "[[reduire|Réduire]]. Poursuivez la cuisson jusqu’à ce que la sauce nappe."
      pro:
      - "Saisir les cuisses de poulet et les oignons dans l’huile."
      - "Ajouter la sauce soja et le sucre. Mijoter 25 min."
      - "Poursuivre la cuisson jusqu’à ce que la sauce nappe."
      cavernes:
      - "Saisir. Cuisses poulet, oignons, huile, saisir."
      - "Mijoter. Sauce soja, sucre, ajouter. Mijoter 25 min."
      - "Réduire. Cuisson, poursuivre. Sauce nappe."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saisir. Faites saisir le tofu ferme et les oignons dans l’huile."
    - "Soja, 10 min. Ajoutez la sauce soja et le sucre, puis laissez mijoter 25 min."
    - "Réduire. Poursuivez la cuisson jusqu’à ce que la sauce nappe."
    steps_niveaux:
      amateur:
      - "Saisir. Faites saisir le tofu ferme et les oignons dans l’huile."
      - "Soja, 10 min. Ajoutez la sauce soja et le sucre, puis [[mijoter|laissez mijoter]] 25 min."
      - "[[reduire|Réduire]]. Poursuivez la cuisson jusqu’à ce que la sauce nappe."
      pro:
      - "Saisir le tofu ferme et les oignons dans l’huile."
      - "Ajouter la sauce soja et le sucre. Mijoter 25 min."
      - "Poursuivre la cuisson jusqu’à ce que la sauce nappe."
      cavernes:
      - "Saisir. Tofu ferme, oignons, huile, saisir."
      - "Soja, 10 min. Sauce soja, sucre, ajouter. Mijoter 25 min."
      - "Réduire. Cuisson, poursuivre. Sauce nappe."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - soja
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - soja
    - poisson
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: pavés de saumon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saumon. Faites dorer les pavés de saumon 4 min par face."
    - "Soja, 2 min. Ajoutez la sauce soja et le sucre, puis laissez mijoter 25 min."
    - "Servir. Nappez de sauce et servez."
    steps_niveaux:
      amateur:
      - "Saumon. Faites dorer les pavés de saumon 4 min par face."
      - "Soja, 2 min. Ajoutez la sauce soja et le sucre, puis [[mijoter|laissez mijoter]] 25 min."
      - "Servir. [[napper|Nappez]] de sauce et servez."
      pro:
      - "Faire dorer les pavés de saumon 4 min par face."
      - "Ajouter la sauce soja et le sucre. Mijoter 25 min."
      - "Napper de sauce. Servir."
      cavernes:
      - "Saumon. Pavés saumon, dorer 4 min par face."
      - "Soja, 2 min. Sauce soja, sucre, ajouter. Mijoter 25 min."
      - "Servir. Sauce, napper. Servir."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Poulet au soja

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 800 g cuisses de poulet
- 80 ml sauce soja
- 150 g oignons
- 15 g sucre
- 20 ml huile
- 2 piece gousses d'ail

## Préparation

1. Saisir. Faites saisir les cuisses de poulet et les oignons dans l’huile.
2. Mijoter. Ajoutez la sauce soja et le sucre, puis laissez mijoter 25 min.
3. Réduire. Poursuivez la cuisson jusqu’à ce que la sauce nappe.
