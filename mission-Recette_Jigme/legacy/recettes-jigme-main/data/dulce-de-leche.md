---
schema: recette-web-jigme/v2
equipment: []
slug: dulce-de-leche
title: Dulce de leche
lang: fr
description: "Dulce de leche : lait sucré réduit jusqu’au caramel, pour 4. Confiture de lait. Recette pour 4 personnes, version maison."
cuisine: argentine
category: sucré
tags:
- sucré
- lait
- caramel
- Argentine
image:
  url:
  alt: Dulce de leche
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
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le dulce de leche (cajeta, arequipe, confiture de lait) est du lait sucré cuit longtemps jusqu’au brun. L’Amérique latine en a fait un tartinable national. On peut aussi cuire une boîte de lait concentré sucré au bain-marie, avec prudence (jamais une boîte close sur un feu vif à sec)."
fun_facts:
- text: "Argentine et Uruguay se disputent l’origine ; le geste est le même : réduire le lait sucré."
  source_name: "Wikipedia FR, Dulce de leche"
  source_url: "https://fr.wikipedia.org/wiki/Dulce_de_leche"
- text: La cajeta mexicaine se fait souvent au lait de chèvre.
  source_name: "Wikipedia EN, Dulce de leche"
  source_url: "https://en.wikipedia.org/wiki/Dulce_de_leche"
- text: Le bain-marie d’une boîte déjà ouverte dans un ramequin est plus sûr qu’une boîte close.
  source_name: "Wikipedia FR, Lait concentré sucré"
  source_url: "https://fr.wikipedia.org/wiki/Lait_concentr%C3%A9_sucr%C3%A9"
wines:
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: "Rivesaltes, Roussillon"
  grapes: Muscat
  award: 
  why: "Fleur d’oranger, pêches, crème."
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, dessert aux noix ou chocolat."
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux, tarte, caramel, banane."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 165
      rest_min: 0
      total_min: 180
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 1000
      unit: ml
      item: lait entier
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: bicarbonate de soude
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Réduction. Portez le lait, le sucre, la vanille et le bicarbonate à petits bouillons 1 h 30, en remuant."
    - "Texture. Poursuivez jusqu’à ce que la préparation nappe la cuillère et prenne une couleur blond brun."
    - "Pot. Laissez refroidir et filmez au contact."
    steps_niveaux:
      amateur:
      - "Réduction. Portez le lait, le sucre, la vanille et le bicarbonate à petits bouillons 1 h 30, en remuant."
      - "Texture. Poursuivez jusqu’à ce que la préparation nappe la cuillère et prenne une couleur blond brun."
      - "Pot. Laissez refroidir et filmez au contact."
      pro:
      - "Réduction. Porter le lait, le sucre, la vanille et le bicarbonate à petits bouillons 1 h 30, en remuant."
      - "Texture. Poursuivre jusqu’à nappe sur la cuillère et couleur blond brun."
      - "Pot. Laisser refroidir. Filmer au contact."
      cavernes:
      - "Réduction. Lait, sucre, vanille, bicarbonate, petits bouillons 1 h 30, remuer."
      - "Texture. Poursuivre jusqu’à préparation nappe cuillère, couleur blond brun."
      - "Pot. Refroidir. Filmer contact."
    kcal_per_serving: 320
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
    - lactose
    - produits_laitiers
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 320
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
    allergens: []
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 1000
      unit: ml
      item: lait de coco
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Réduction. Portez le lait de coco, le sucre et la vanille à petits bouillons 1 h 30, en remuant."
    - "Texture. Poursuivez jusqu’à ce que la préparation nappe la cuillère et prenne une couleur blond brun."
    - "Pot. Laissez refroidir et filmez au contact."
    steps_niveaux:
      amateur:
      - "Réduction. Portez le lait de coco, le sucre et la vanille à petits bouillons 1 h 30, en remuant."
      - "Texture. Poursuivez jusqu’à ce que la préparation nappe la cuillère et prenne une couleur blond brun."
      - "Pot. Laissez refroidir et filmez au contact."
      pro:
      - "Réduction. Porter le lait de coco, le sucre et la vanille à petits bouillons 1 h 30, en remuant."
      - "Texture. Poursuivre jusqu’à nappe sur la cuillère et couleur blond brun."
      - "Pot. Laisser refroidir. Filmer au contact."
      cavernes:
      - "Réduction. Lait coco, sucre, vanille, petits bouillons 1 h 30, remuer."
      - "Texture. Poursuivre jusqu’à préparation nappe cuillère, couleur blond brun."
      - "Pot. Refroidir. Filmer contact."
    kcal_per_serving: 300
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
    - lactose
    - produits_laitiers
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 320
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 semaines après ouverture, contenant: pot, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: pot non ouvert au sec, note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi:
  - Sur yaourt ou crêpes.
  a_verifier: false
  note_verif: ""

---

# Dulce de leche

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 1000 ml lait entier
- 300 g sucre
- 2 g bicarbonate de soude
- 1 piece gousse de vanille

## Préparation

1. Réduction. Portez le lait, le sucre, la vanille et le bicarbonate à petits bouillons 1 h 30, en remuant.
2. Texture. Poursuivez jusqu’à ce que la préparation nappe la cuillère et prenne une couleur blond brun.
3. Pot. Laissez refroidir et filmez au contact.
