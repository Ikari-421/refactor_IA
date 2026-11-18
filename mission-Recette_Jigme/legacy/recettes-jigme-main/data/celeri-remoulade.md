---
schema: recette-web-jigme/v2
equipment:
- ref: rape
slug: celeri-remoulade
title: Céleri rémoulade
lang: fr
description: "Céleri-rave râpé, mayonnaise moutarde, pour 4. Entrée froide. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- céleri
- mayonnaise
- entrée
image:
  url:
  alt: Céleri rémoulade
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
    note: Déjà sans œufs.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans fruits à coque.
  sans_celeri:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_moutarde:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
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
histoire: "Le céleri rémoulade, entrée de bistrot : céleri-rave julienne, sauce rémoulade (mayo, moutarde, parfois câpres). Citron pour ne pas noircir. Servir très froid. Pain de campagne."
fun_facts:
- text: "La rémoulade est une mayonnaise relevée de moutarde, pas une vinaigrette."
  source_name: "Wikipedia FR, Céleri rémoulade"
  source_url: "https://fr.wikipedia.org/wiki/C%C3%A9leri_r%C3%A9moulade"
- text: Le céleri-rave est la racine ; le céleri branche est une autre partie.
  source_name: "Wikipedia FR, Céleri-rave"
  source_url: "https://fr.wikipedia.org/wiki/C%C3%A9leri-rave"
- text: "En France la rémoulade du céleri reste simple : mayo, moutarde, citron."
  source_name: "Wikipedia EN, Remoulade"
  source_url: "https://en.wikipedia.org/wiki/Remoulade"
wines:
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
- name: Muscadet Sèvre-et-Maine
  producer: "Domaine de l'Ecu"
  origin: "Muscadet, Loire"
  grapes: Melon de Bourgogne
  award: 
  why: "Iode, fruits de mer, friture légère."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - moutarde
    - celeri
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 0
      rest_min: 30
      total_min: 50
    equipment:
    - rape
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: céleri-rave
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Râper. Râpez le céleri-rave, puis mélangez-le avec le jus de citron et le sel."
    - "Sauce. Incorporez la mayonnaise et la moutarde de Dijon."
    - "Lier. Mélangez pour lier, puis réservez 30 min au frais."
    steps_niveaux:
      amateur:
      - "Râper. [[raper|Râpez]] le céleri-rave, puis mélangez-le avec le jus de citron et le sel."
      - "Sauce. Incorporez la mayonnaise et la moutarde de Dijon."
      - "Lier. Mélangez pour lier, puis réservez 30 min au frais."
      pro:
      - "Râper le céleri-rave. Mélanger avec le jus de citron et le sel."
      - "Incorporer la mayonnaise et la moutarde de Dijon."
      - "Mélanger pour lier. Réserver 30 min au frais."
      cavernes:
      - "Râper. Céleri-rave, râper. Jus citron, sel, mélanger."
      - "Sauce. Mayonnaise, moutarde Dijon, incorporer."
      - "Lier. Mélanger lier. 30 min frais."
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - oeuf
    - moutarde
    - celeri
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - moutarde
    - celeri
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 0
      rest_min: 30
      total_min: 50
    equipment:
    - rape
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: céleri-rave
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: mayonnaise végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Râper. Râpez le céleri-rave, puis mélangez-le avec le jus de citron."
    - "Mayo végétale, moutarde. Incorporez la mayonnaise végétale et la moutarde de Dijon."
    - "Frais 30 min. Réservez 30 min au frais."
    steps_niveaux:
      amateur:
      - "Râper. [[raper|Râpez]] le céleri-rave, puis mélangez-le avec le jus de citron."
      - "Mayo végétale, moutarde. Incorporez la mayonnaise végétale et la moutarde de Dijon."
      - "Frais 30 min. Réservez 30 min au frais."
      pro:
      - "Râper le céleri-rave. Mélanger avec le jus de citron."
      - "Incorporer la mayonnaise végétale et la moutarde de Dijon."
      - "Réserver 30 min au frais."
      cavernes:
      - "Râper. Céleri-rave, râper. Jus citron, mélanger."
      - "Mayo végétale, moutarde. Mayonnaise végétale, moutarde Dijon, incorporer."
      - "Frais 30 min. 30 min frais."
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - oeuf
    - moutarde
    - celeri
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
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
  frigo: {duree: 24 à 48 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Céleri rémoulade

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g céleri-rave
- 120 g mayonnaise
- 20 g moutarde de Dijon
- 15 ml jus de citron
- 4 g sel

## Préparation

1. Râper. Râpez le céleri-rave, puis mélangez-le avec le jus de citron et le sel.
2. Sauce. Incorporez la mayonnaise et la moutarde de Dijon.
3. Lier. Mélangez pour lier, puis réservez 30 min au frais.
