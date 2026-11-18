---
schema: recette-web-jigme/v2
equipment:
- ref: mixeur-plongeant
slug: veloute-de-cresson
title: Velouté de cresson
lang: fr
description: "Velouté de cresson : recette française de soupe mixée, pomme de terre, cresson et crème, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- soupe
- cresson
- entrée
image:
  url:
  alt: Velouté de cresson
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Crème : lait d’avoine ou sans crème."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le cresson de fontaine, piquant, se mange en soupe depuis longtemps dans le nord et l’ouest de la France. Pomme de terre pour lier, crème en fin. On mixe hors du feu pour garder le vert."
fun_facts:
- text: "Le cresson de fontaine pousse dans l’eau courante ; le goût est poivré, pas seulement « vert »."
  source_name: "Wikipedia FR, Cresson de fontaine"
  source_url: "https://fr.wikipedia.org/wiki/Cresson_de_fontaine"
- text: Un mixage trop long après ébullition grise la soupe.
  source_name: "Wikipedia FR, Cresson de fontaine"
  source_url: "https://fr.wikipedia.org/wiki/Cresson_de_fontaine"
- text: "Le cresson se lave plusieurs eaux : sable et petits escargots."
  source_name: "Wikipedia EN, Watercress"
  source_url: "https://en.wikipedia.org/wiki/Watercress"
wines:
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes, piquant du cresson."
- name: Muscadet Sèvre-et-Maine
  producer: "Domaine de l'Ecu"
  origin: "Muscadet, Loire"
  grapes: Melon de Bourgogne
  award: 
  why: "Iode, soupe verte."
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre, crème du velouté."
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
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - casserole
    - mixeur
    substitutions:
    - from: crème fraîche
      to: crème liquide
      note: Plus fluide.
    scale_note: 
    ingredients:
    - qty: 2
      unit: botte
      item: cresson de fontaine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pommes de terre
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
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Lavage. Lavez le cresson de fontaine à plusieurs eaux. Ciselez-le, en réservant quelques feuilles."
    - "Base. Faites revenir l’oignon au beurre doux, ajoutez les pommes de terre et l’eau, puis laissez cuire 20 min."
    - "Cresson. Ajoutez le cresson et laissez frémir 3 min."
    - "Mixage. Hors du feu, mixez. Incorporez la crème fraîche, salez et poivrez."
    - "Service. Servez chaud, avec les feuilles crues."
    steps_niveaux:
      amateur:
      - "Lavage. Lavez le cresson de fontaine à plusieurs eaux. Ciselez-le, en réservant quelques feuilles."
      - "Base. Faites revenir l’oignon au beurre doux, ajoutez les pommes de terre et l’eau, puis laissez cuire 20 min."
      - "Cresson. Ajoutez le cresson et laissez frémir 3 min."
      - "Mixage. [[hors-du-feu|Hors du feu]], mixez. Incorporez la crème fraîche, salez et poivrez."
      - "Service. Servez chaud, avec les feuilles crues."
      pro:
      - "Laver le cresson de fontaine à plusieurs eaux. Ciseler, en réservant quelques feuilles."
      - "Faire revenir l’oignon au beurre doux, ajouter les pommes de terre et l’eau, puis laisser cuire 20 min."
      - "Ajouter le cresson et laisser frémir 3 min."
      - "Hors du feu, mixer. Incorporer la crème fraîche, saler et poivrer."
      - "Servir chaud, avec les feuilles crues."
      cavernes:
      - "Lavage. Cresson fontaine, plusieurs eaux, laver. Ciseler, quelques feuilles, réserver."
      - "Base. Oignon, beurre doux, faire revenir. Pommes de terre, eau, ajouter. 20 min, cuire."
      - "Cresson. Cresson, ajouter. 3 min, frémir."
      - "Mixage. Hors feu, mixer. Crème fraîche, incorporer. Sel, poivre."
      - "Service. Chaud, servir. Feuilles crues."
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
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
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
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
    - pesco
    allergens: []
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - casserole
    - mixeur
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 2
      unit: botte
      item: cresson de fontaine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pommes de terre
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
    - qty: 20
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: "crème d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Lavage. Lavez le cresson de fontaine."
    - "Base. Faites revenir l’oignon à l’huile d’olive, ajoutez les pommes de terre et le fond de légumes, puis laissez cuire 20 min."
    - "Cresson. Ajoutez le cresson et laissez cuire 3 min. Mixez hors du feu, puis incorporez la crème d’avoine."
    steps_niveaux:
      amateur:
      - "Lavage. Lavez le cresson de fontaine."
      - "Base. Faites revenir l’oignon à l’huile d’olive, ajoutez les pommes de terre et le fond de légumes, puis laissez cuire 20 min."
      - "Cresson. Ajoutez le cresson et laissez cuire 3 min. Mixez [[hors-du-feu|hors du feu]], puis incorporez la crème d’avoine."
      pro:
      - "Laver le cresson de fontaine."
      - "Faire revenir l’oignon à l’huile d’olive, ajouter les pommes de terre et le fond de légumes, puis laisser cuire 20 min."
      - "Ajouter le cresson et laisser cuire 3 min. Mixer hors du feu, puis incorporer la crème d’avoine."
      cavernes:
      - "Lavage. Cresson fontaine, laver."
      - "Base. Oignon, huile olive, faire revenir. Pommes de terre, fond légumes, ajouter. 20 min, cuire."
      - "Cresson. Cresson, ajouter. 3 min, cuire. Hors feu, mixer. Crème avoine, incorporer."
    kcal_per_serving: 190
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
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
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
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

# Velouté de cresson

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 2 botte cresson de fontaine
- 400 g pommes de terre
- 1 piece oignon
- 20 g beurre doux
- 80 ml crème fraîche
- 1000 ml eau
- sel (au goût)
- poivre (au goût)

## Préparation

1. Lavage. Lavez le cresson de fontaine à plusieurs eaux. Ciselez-le, en réservant quelques feuilles.
2. Base. Faites revenir l’oignon au beurre doux, ajoutez les pommes de terre et l’eau, puis laissez cuire 20 min.
3. Cresson. Ajoutez le cresson et laissez frémir 3 min.
4. Mixage. Hors du feu, mixez. Incorporez la crème fraîche, salez et poivrez.
5. Service. Servez chaud, avec les feuilles crues.
