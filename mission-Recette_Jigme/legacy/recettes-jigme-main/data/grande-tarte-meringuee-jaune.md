---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: grande-tarte-meringuee-jaune
title: Grande tarte meringuée jaune
lang: fr
description: "Grande tarte meringuée jaune : recette française de pâte, crème citron et meringue italienne, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: sucré
tags:
- sucré
- citron
- meringue
- tarte
image:
  url:
  alt: Grande tarte meringuée jaune
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
    note: Pâte sans gluten.
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
    note: "Sans œuf, plus de crème citron ni de meringue classiques."
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
histoire: "La tarte au citron meringuée assemble pâte sucrée, crème citron (jaunes, beurre, jus) et meringue. La meringue italienne (sirop) tient mieux que la française sur une grande tarte. Le jaune vient des jaunes et du citron, pas d’un colorant."
fun_facts:
- text: "La meringue italienne cuit les blancs dans un sirop à 118 °C, plus stable sur une grande surface."
  source_name: "Wikipedia FR, Tarte au citron meringuée"
  source_url: "https://fr.wikipedia.org/wiki/Tarte_au_citron_meringu%C3%A9e"
- text: "La crème citron se lie aux jaunes : trop de feu et elle tourne."
  source_name: "Wikipedia FR, Tarte au citron meringuée"
  source_url: "https://fr.wikipedia.org/wiki/Tarte_au_citron_meringu%C3%A9e"
- text: "Une grande tarte demande une pâte bien cuite à blanc, sinon le fond reste mou sous le citron."
  source_name: "Wikipedia FR, Pâte sucrée"
  source_url: "https://fr.wikipedia.org/wiki/P%C3%A2te_sucr%C3%A9e"
wines:
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise
  grapes: Muscat petits grains
  award: 
  why: "Floral, citron, meringue."
- name: Vouvray demi-sec
  producer: Domaine Huet
  origin: "Vouvray, Loire"
  grapes: Chenin
  award: 
  why: "Sucre et acidité, crème citron."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, grande tarte de fête."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 4
    time:
      prep_min: 40
      cook_min: 30
      rest_min: 60
      total_min: 130
    equipment:
    - moule 28 cm
    - four
    - batteur
    - thermomètre
    substitutions:
    - from: meringue italienne
      to: meringue française
      note: Moins stable sur une grande tarte.
    scale_note: "Grande tarte 28 cm, plutôt 8 parts."
    ingredients:
    - qty: 300
      unit: g
      item: pâte sucrée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: citrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: "jaunes d'œufs"
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: beurre doux
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: "blancs d'œufs"
      group: meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group: meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: eau
      group: meringue
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Fond. Foncez un moule de 28 cm avec la pâte sucrée, piquez-la, enfournez 15 min à 180 °C, puis laissez refroidir."
    - "Crème. Faites cuire le jus et le zeste de citron avec le sucre et les jaunes d’œufs à feu doux, jusqu’à nappe. Hors du feu, incorporez le beurre."
    - "Montage. Étalez la crème bien lisse sur le fond de tarte."
    - "Meringue. Versez le sirop à 118 °C sur les blancs montés. Dressez. Brûlez au chalumeau ou passez 5 min sous le grill."
    steps_niveaux:
      amateur:
      - "Fond. [[foncer|Foncez]] un moule de 28 cm avec la pâte sucrée, piquez-la, enfournez 15 min à 180 °C, puis laissez refroidir."
      - "Crème. Faites cuire le jus et le zeste de citron avec le sucre et les jaunes d’œufs à feu doux, jusqu’à nappe. [[hors-du-feu|Hors du feu]], incorporez le beurre."
      - "Montage. Étalez la crème bien lisse sur le fond de tarte."
      - "Meringue. Versez le sirop à 118 °C sur les blancs montés. Dressez. Brûlez au [[chalumeau|chalumeau]] ou passez 5 min sous le grill."
      pro:
      - "Foncer un moule de 28 cm avec la pâte sucrée. Piquer. Enfourner 15 min à 180 °C. Laisser refroidir."
      - "Cuire jus et zeste de citron, sucre et jaunes d’œufs à feu doux, jusqu’à nappe. Hors du feu, incorporer le beurre."
      - "Étaler la crème bien lisse sur le fond de tarte."
      - "Verser le sirop à 118 °C sur les blancs montés. Dresser. Brûler au chalumeau ou 5 min sous le grill."
      cavernes:
      - "Fond. Moule 28 cm, pâte sucrée, foncer. Piquer. Four 15 min 180 °C. Refroidir."
      - "Crème. Jus zeste citron, sucre, jaunes d’œufs, feu doux, jusqu’à nappe. Hors feu, beurre, incorporer."
      - "Montage. Crème bien lisse, fond tarte, étaler."
      - "Meringue. Sirop 118 °C, blancs montés, verser. Dresser. Chalumeau, brûler. Ou grill 5 min."
    kcal_per_serving: 490
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 4
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: 
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 3
    time:
      prep_min: 40
      cook_min: 25
      rest_min: 60
      total_min: 125
    equipment:
    - moule 28 cm
    - four
    - batteur
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: pâte sucrée végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: citrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: maïzena
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "lait d'avoine"
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: aquafaba
      group: meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: meringue
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Fond. Foncez le moule avec la pâte sucrée végétale, puis enfournez 15 min à 180 °C."
    - "Crème. Faites épaissir le jus et le zeste de citron avec le sucre, la maïzena et le lait d’avoine, jusqu’à nappe."
    - "Meringue. Montez l’aquafaba avec le sucre, dressez, puis passez 3 min sous le grill."
    steps_niveaux:
      amateur:
      - "Fond. [[foncer|Foncez]] le moule avec la pâte sucrée végétale, puis enfournez 15 min à 180 °C."
      - "Crème. Faites épaissir le jus et le zeste de citron avec le sucre, la maïzena et le lait d’avoine, jusqu’à nappe."
      - "Meringue. Montez l’aquafaba avec le sucre, dressez, puis passez 3 min sous le grill."
      pro:
      - "Foncer le moule avec la pâte sucrée végétale. Enfourner 15 min à 180 °C."
      - "Épaissir jus et zeste de citron, sucre, maïzena et lait d’avoine, jusqu’à nappe."
      - "Monter l’aquafaba avec le sucre. Dresser. 3 min sous le grill."
      cavernes:
      - "Fond. Moule, pâte sucrée végétale, foncer. Four 15 min 180 °C."
      - "Crème. Jus zeste citron, sucre, maïzena, lait d’avoine, jusqu’à nappe."
      - "Meringue. Aquafaba, sucre, monter. Dresser. Grill 3 min."
    kcal_per_serving: 380
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 4
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 2 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée à la décongélation.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Meringue et crème aux œufs : 24 à 48 h au frigo."

---

# Grande tarte meringuée jaune

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 300 g pâte sucrée
- 4 piece citrons
- 120 g sucre
- 4 piece jaunes d'œufs
- 80 g beurre doux
- 4 piece blancs d'œufs
- 150 g sucre
- 40 ml eau

## Préparation

1. Fond. Foncez un moule de 28 cm avec la pâte sucrée, piquez-la, enfournez 15 min à 180 °C, puis laissez refroidir.
2. Crème. Faites cuire le jus et le zeste de citron avec le sucre et les jaunes d’œufs à feu doux, jusqu’à nappe. Hors du feu, incorporez le beurre.
3. Montage. Étalez la crème bien lisse sur le fond de tarte.
4. Meringue. Versez le sirop à 118 °C sur les blancs montés. Dressez. Brûlez au chalumeau ou passez 5 min sous le grill.
