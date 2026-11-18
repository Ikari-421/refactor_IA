---
schema: recette-web-jigme/v2
equipment: []
slug: croque-monsieur
title: Croque-monsieur
lang: fr
description: "Croque-monsieur : pain de mie, jambon, fromage, béchamel, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- jambon
- fromage
- snack
image:
  url:
  alt: Croque-monsieur
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
histoire: "Le croque-monsieur apparaît à Paris vers 1910 : pain de mie, jambon, fromage grillé. La béchamel nappe souvent le dessus. Le croque-madame ajoute un œuf. Sandwich de brasserie, pas de grande cuisine."
fun_facts:
- text: "Le nom « croque » dit qu’on le croque chaud, fromage filant."
  source_name: "Wikipedia FR, Croque-monsieur"
  source_url: "https://fr.wikipedia.org/wiki/Croque-monsieur"
- text: "Hors de France on le sert parfois sans béchamel, juste fromage fondu."
  source_name: "Wikipedia EN, Croque monsieur"
  source_url: "https://en.wikipedia.org/wiki/Croque_monsieur"
- text: Une béchamel un peu épaisse tient sur le pain sans couler au four.
  source_name: "Wikipedia FR, Béchamel"
  source_url: "https://fr.wikipedia.org/wiki/B%C3%A9chamel"
wines:
- name: Brouilly
  producer: Château Thivin
  origin: "Côte de Brouilly, Beaujolais"
  grapes: Gamay
  award: 
  why: "Fruit, charcuterie, cake salé."
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranches de jambon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: emmental
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
    - "Montage. Garnissez le pain de jambon et d’emmental."
    - "Four. Enfournez 10 min à 200 °C, nappez de béchamel."
    steps_niveaux:
      amateur:
      - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
      - "Montage. Garnissez le pain de jambon et d’emmental."
      - "Four. Enfournez 10 min à 200 °C, [[napper|nappez]] de béchamel."
      pro:
      - "Béchamel. Faire un roux beurre-farine. Verser le lait."
      - "Montage. Garnir le pain de jambon et d’emmental."
      - "Four. Enfourner 10 min à 200 °C. Napper de béchamel."
      cavernes:
      - "Béchamel. Roux, beurre farine. Lait, verser."
      - "Montage. Pain, jambon, emmental, garnir."
      - "Four. 200 °C 10 min. Béchamel, napper."
    kcal_per_serving: 620
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: emmental
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
    - qty: 30
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
    - "Montage. Garnissez de tomate et d’emmental."
    - "Four. Enfournez 10 min à 200 °C, nappez de béchamel."
    steps_niveaux:
      amateur:
      - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
      - "Montage. Garnissez de tomate et d’emmental."
      - "Four. Enfournez 10 min à 200 °C, [[napper|nappez]] de béchamel."
      pro:
      - "Béchamel. Faire un roux beurre-farine. Verser le lait."
      - "Montage. Garnir de tomate et d’emmental."
      - "Four. Enfourner 10 min à 200 °C. Napper de béchamel."
      cavernes:
      - "Béchamel. Roux, beurre farine. Lait, verser."
      - "Montage. Tomate, emmental, garnir."
      - "Four. 200 °C 10 min. Béchamel, napper."
    kcal_per_serving: 560
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
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: fromage végétal
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
    - qty: 30
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Béchamel végétale. Faites un roux avec la margarine végétale et la farine, puis versez le lait d’avoine."
    - "Montage. Garnissez de tomate et de fromage végétal."
    - "Four. Enfournez 10 min à 200 °C, nappez de béchamel."
    steps_niveaux:
      amateur:
      - "Béchamel végétale. Faites un roux avec la margarine végétale et la farine, puis versez le lait d’avoine."
      - "Montage. Garnissez de tomate et de fromage végétal."
      - "Four. Enfournez 10 min à 200 °C, [[napper|nappez]] de béchamel."
      pro:
      - "Béchamel végétale. Faire un roux margarine végétale-farine. Verser le lait d’avoine."
      - "Montage. Garnir de tomate et de fromage végétal."
      - "Four. Enfourner 10 min à 200 °C. Napper de béchamel."
      cavernes:
      - "Béchamel végétale. Roux, margarine végétale farine. Lait d’avoine, verser."
      - "Montage. Tomate, fromage végétal, garnir."
      - "Four. 200 °C 10 min. Béchamel, napper."
    kcal_per_serving: 520
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
    - lactose
    - produits_laitiers
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: saumon fumé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: emmental
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
    - "Montage. Garnissez de saumon fumé et d’emmental."
    - "Four. Enfournez 8 min à 200 °C."
    steps_niveaux:
      amateur:
      - "Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait."
      - "Montage. Garnissez de saumon fumé et d’emmental."
      - "Four. Enfournez 8 min à 200 °C."
      pro:
      - "Béchamel. Faire un roux beurre-farine. Verser le lait."
      - "Montage. Garnir de saumon fumé et d’emmental."
      - "Four. Enfourner 8 min à 200 °C."
      cavernes:
      - "Béchamel. Roux, beurre farine. Lait, verser."
      - "Montage. Saumon fumé, emmental, garnir."
      - "Four. 200 °C 8 min."
    kcal_per_serving: 600
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegetarienne:
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

# Croque-monsieur

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 8 piece tranches de pain de mie
- 4 piece tranches de jambon
- 160 g emmental
- 30 g beurre
- 20 g farine
- 250 ml lait

## Préparation

1. Béchamel. Faites un roux avec le beurre et la farine, puis versez le lait.
2. Montage. Garnissez le pain de jambon et d’emmental.
3. Four. Enfournez 10 min à 200 °C, nappez de béchamel.
