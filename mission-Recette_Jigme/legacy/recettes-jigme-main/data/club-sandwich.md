---
schema: recette-web-jigme/v2
equipment: []
slug: club-sandwich
title: Club sandwich
lang: fr
description: "Club sandwich classique : pain de mie, poulet, bacon, tomate, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: américaine
category: salé
tags:
- salé
- sandwich
- poulet
- brunch
image:
  url:
  alt: Club sandwich
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
histoire: "Le club sandwich, triple étage de pain de mie toasté, volaille, bacon, laitue, tomate et mayo, est lié aux clubs américains de la fin du XIXe siècle (Sarasota ou New York selon les récits). On le pique de piques et on le coupe en triangles."
fun_facts:
- text: "Le club est souvent servi en triangles, pain grillé, bacon et volaille."
  source_name: "Wikipedia EN, Club sandwich"
  source_url: "https://en.wikipedia.org/wiki/Club_sandwich"
- text: En France le club s’est installé dans les brasseries et hôtels.
  source_name: "Wikipedia FR, Club sandwich"
  source_url: "https://fr.wikipedia.org/wiki/Club_sandwich"
- text: "Un pain de mie ferme, toasté, évite l’effondrement des trois étages."
  source_name: "Wikipedia FR, Pain de mie"
  source_url: "https://fr.wikipedia.org/wiki/Pain_de_mie"
wines:
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, gâteau, brunch, pancakes."
- name: Brouilly
  producer: Château Thivin
  origin: "Côte de Brouilly, Beaujolais"
  grapes: Gamay
  award: 
  why: "Fruit, charcuterie, cake salé."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
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
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: blanc de poulet cuit
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranches de bacon
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Bacon. Faites dorer les tranches de bacon jusqu’à ce qu’elles soient croustillantes."
    - "Montage. Tartinez de mayonnaise, garnissez de poulet, de tomate, de laitue et de bacon. Montez sur 3 étages et fixez avec des piques."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Bacon. Faites dorer les tranches de bacon jusqu’à ce qu’elles soient croustillantes."
      - "Montage. Tartinez de mayonnaise, garnissez de poulet, de tomate, de laitue et de bacon. Montez sur 3 étages et fixez avec des piques."
      pro:
      - "Griller les tranches de pain de mie."
      - "Dorer les tranches de bacon jusqu’à croustillant."
      - "Tartiner de mayonnaise. Garnir de poulet, tomate, laitue et bacon. Monter sur 3 étages. Fixer avec des piques."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Bacon. Bacon, dorer, croustillant."
      - "Montage. Mayonnaise, tartiner. Poulet, tomate, laitue, bacon. 3 étages. Piques."
    kcal_per_serving: 640
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
    - oeuf
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
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: halloumi grillé
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Fromage. Grillez le halloumi."
    - "Montage. Tartinez de mayonnaise, garnissez de tomate et de laitue. Montez sur 3 étages et fixez avec des piques."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Fromage. Grillez le halloumi."
      - "Montage. Tartinez de mayonnaise, garnissez de tomate et de laitue. Montez sur 3 étages et fixez avec des piques."
      pro:
      - "Griller les tranches de pain de mie."
      - "Griller le halloumi."
      - "Tartiner de mayonnaise. Garnir de tomate et de laitue. Monter sur 3 étages. Fixer avec des piques."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Fromage. Halloumi, griller."
      - "Montage. Mayonnaise, tartiner. Tomate, laitue. 3 étages. Piques."
    kcal_per_serving: 580
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
    - soja
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
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu fumé
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Tofu. Faites poêler le tofu fumé."
    - "Montage. Tartinez de mayonnaise végétale, garnissez de tofu fumé, de tomate et de laitue. Montez sur 3 étages et fixez avec des piques."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Tofu. Faites poêler le tofu fumé."
      - "Montage. Tartinez de mayonnaise végétale, garnissez de tofu fumé, de tomate et de laitue. Montez sur 3 étages et fixez avec des piques."
      pro:
      - "Griller les tranches de pain de mie."
      - "Poêler le tofu fumé."
      - "Tartiner de mayonnaise végétale. Garnir de tofu fumé, tomate et laitue. Monter sur 3 étages. Fixer avec des piques."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Tofu. Tofu fumé, poêler."
      - "Montage. Mayonnaise végétale, tartiner. Tofu fumé, tomate, laitue. 3 étages. Piques."
    kcal_per_serving: 540
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
    - oeuf
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: saumon fumé
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Montage. Tartinez de mayonnaise, garnissez de saumon fumé, de tomate et de laitue."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Montage. Tartinez de mayonnaise, garnissez de saumon fumé, de tomate et de laitue."
      pro:
      - "Griller les tranches de pain de mie."
      - "Tartiner de mayonnaise. Garnir de saumon fumé, tomate et laitue."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Montage. Mayonnaise, tartiner. Saumon fumé, tomate, laitue."
    kcal_per_serving: 600
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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

# Club sandwich

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 12 piece tranches de pain de mie
- 300 g blanc de poulet cuit
- 8 piece tranches de bacon
- 2 piece tomates
- 80 g laitue
- 80 g mayonnaise

## Préparation

1. Pain. Faites griller les tranches de pain de mie.
2. Bacon. Faites dorer les tranches de bacon jusqu’à ce qu’elles soient croustillantes.
3. Montage. Tartinez de mayonnaise, garnissez de poulet, de tomate, de laitue et de bacon. Montez sur 3 étages et fixez avec des piques.
