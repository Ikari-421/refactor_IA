---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: paris-brest
title: Paris-Brest
lang: fr
description: "Paris-Brest : couronne de choux, crème mousseline praliné, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: sucré
tags:
- sucré
- praliné
- choux
- pâtisserie
image:
  url:
  alt: Paris-Brest
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le Paris-Brest, couronne de pâte à choux créée en 1910 par Louis Durand à Maisons-Laffitte pour la course Paris–Brest–Paris, se garnit de crème au praliné. Forme de roue. Amandes effilées sur le chou."
fun_facts:
- text: La couronne évoque la roue du vélo de la course Paris–Brest–Paris.
  source_name: "Wikipedia FR, Paris-Brest"
  source_url: "https://fr.wikipedia.org/wiki/Paris-Brest"
- text: Le praliné (amandes ou noisettes caramélisées) est le goût du gâteau.
  source_name: "Wikipedia EN, Paris-Brest"
  source_url: "https://en.wikipedia.org/wiki/Paris%E2%80%93Brest"
- text: "Même pâte que l’éclair, pochée en cercle puis fendue."
  source_name: "Wikipedia FR, Pâte à choux"
  source_url: "https://fr.wikipedia.org/wiki/P%C3%A2te_%C3%A0_choux"
wines:
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, dessert aux noix ou chocolat."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: "Bulles, fête, bananes flambées, île flottante."
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: "Rivesaltes, Roussillon"
  grapes: Muscat
  award: 
  why: "Fleur d’oranger, pêches, crème."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    - gluten
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 45
      rest_min: 15
      total_min: 90
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 80
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: praliné
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: beurre
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: amandes effilées
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Chou. Préparez la panade, dressez en cercle, parsemez d’amandes effilées, puis enfournez 25 min à 180 °C."
    - "Crème. Préparez une crème mousseline au praliné, puis réservez-la au froid."
    - "Monter. Fendez le chou et garnissez-le de crème."
    steps_niveaux:
      amateur:
      - "Chou. Préparez la [[panade|panade]], dressez en cercle, parsemez d’amandes effilées, puis enfournez 25 min à 180 °C."
      - "Crème. Préparez une crème mousseline au praliné, puis réservez-la au froid."
      - "Monter. Fendez le chou et garnissez-le de crème."
      pro:
      - "Préparer la panade. Dresser en cercle. Parsemer d’amandes effilées. Enfourner 25 min à 180 °C."
      - "Préparer une crème mousseline au praliné. Réserver au froid."
      - "Fendre le chou. Garnir de crème."
      cavernes:
      - "Chou. Panade, préparer. Cercle, dresser. Amandes effilées, parsemer. 25 min, 180 °C, enfourner."
      - "Crème. Crème mousseline praliné, préparer. Froid, réserver."
      - "Monter. Chou, fendre. Crème, garnir."
    kcal_per_serving: 620
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
    - lactose
    - produits_laitiers
    - gluten
    - fruits_a_coque
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 620
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
    - gluten
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 45
      rest_min: 15
      total_min: 90
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 80
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: praliné
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: margarine végétale
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: amandes effilées
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Chou végétal. Préparez la panade, dressez en cercle, parsemez d’amandes effilées, puis enfournez 25 min à 180 °C."
    - "Crème praliné. Préparez une crème mousseline au praliné, puis réservez-la au froid."
    - "Monter. Fendez le chou et garnissez-le de crème."
    steps_niveaux:
      amateur:
      - "Chou végétal. Préparez la [[panade|panade]], dressez en cercle, parsemez d’amandes effilées, puis enfournez 25 min à 180 °C."
      - "Crème praliné. Préparez une crème mousseline au praliné, puis réservez-la au froid."
      - "Monter. Fendez le chou et garnissez-le de crème."
      pro:
      - "Préparer la panade. Dresser en cercle. Parsemer d’amandes effilées. Enfourner 25 min à 180 °C."
      - "Préparer une crème mousseline au praliné. Réserver au froid."
      - "Fendre le chou. Garnir de crème."
      cavernes:
      - "Chou végétal. Panade, préparer. Cercle, dresser. Amandes effilées, parsemer. 25 min, 180 °C, enfourner."
      - "Crème praliné. Crème mousseline praliné, préparer. Froid, réserver."
      - "Monter. Chou, fendre. Crème, garnir."
    kcal_per_serving: 560
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
    - lactose
    - produits_laitiers
    - gluten
    - fruits_a_coque
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 620
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    panade:
      terme: "panade"
      explication: "Vous faites une pâte de base avec un liquide, de la matière grasse et de la farine, souvent desséchée sur le feu, puis vous y incorporez les œufs. C’est la pâte des choux et des éclairs. C’est réussi quand la pâte est lisse et se dresse."
      ref: Cuisine/Lexique/panade.md
  vegan:
    panade:
      terme: "panade"
      explication: "Vous faites une pâte de base avec un liquide, de la matière grasse et de la farine, souvent desséchée sur le feu, puis vous y incorporez les œufs. C’est la pâte des choux et des éclairs. C’est réussi quand la pâte est lisse et se dresse."
      ref: Cuisine/Lexique/panade.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 2 à 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Paris-Brest

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 80 g beurre
- 125 ml eau
- 100 g farine
- 3 piece œufs
- 200 ml lait
- 80 g sucre
- 100 g praliné
- 150 g beurre
- 30 g amandes effilées

## Préparation

1. Chou. Préparez la panade, dressez en cercle, parsemez d’amandes effilées, puis enfournez 25 min à 180 °C.
2. Crème. Préparez une crème mousseline au praliné, puis réservez-la au froid.
3. Monter. Fendez le chou et garnissez-le de crème.
