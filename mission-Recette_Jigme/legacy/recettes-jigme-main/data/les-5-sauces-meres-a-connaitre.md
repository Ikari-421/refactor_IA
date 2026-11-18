---
schema: recette-web-jigme/v2
slug: les-5-sauces-meres-a-connaitre
title: Les 5 sauces mères à connaître
lang: fr
description: "Les 5 sauces mères à connaître : recette française avec sauce béchamel, sauce veloutée et sauce tomate, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- base
- sauce béchamel
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/les-5-sauces-meres-a-connaitre.jpg
  alt: Les 5 sauces mères à connaître
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/les-5-sauces-meres-a-connaitre.md
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
    impossible: true
    redirect_variant:
    clears:
    - gluten
    swaps: []
    note: 'Contient gluten (sauce béchamel) : pas d’adaptation fiable.'
  sans_lactose:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (sauce béchamel) : pas d’adaptation fiable.'
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Contient produits laitiers (sauce béchamel) : pas d’adaptation fiable.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (sauce hollandaise) : pas d’adaptation fiable.'
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
histoire: 'En cuisine française, les sauces mères sont les bases dont on tire les sauces « filles ». On
  retient les cinq d’Escoffier : béchamel, velouté, espagnole, tomate, hollandaise. D’autres classements
  existent depuis le début du XIXe s. (Carême en citait plus).

  '
fun_facts:
- text: >
    Trois sont liées au roux (béchamel au lait, velouté au fond blond, espagnole
    au fond brun) ; la tomate se réduit ; l’hollandaise est une émulsion beurre-jaune.
  source_name: Grokipedia, French mother sauces
  source_url: https://grokipedia.com/page/French_mother_sauces
- text: >
    La Mornay, l’aurore, la bordelaise ne sont pas des mères : ce sont des dérivées.
  source_name: Wikipedia, French mother sauces
  source_url: https://en.wikipedia.org/wiki/French_mother_sauces
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "Ce sont des bases de cuisine, pas un plat : pas d’accord vin."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: sauce béchamel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce veloutée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce tomate
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce espagnole
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce hollandaise
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques-monsieur, les endives au jambon et les gratins."
    - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
    - "Cuisson. Préparez la sauce tomate."
    - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
    - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques-monsieur, les endives au jambon et les gratins."
      - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
      - "Cuisson. Préparez la sauce tomate."
      - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
      - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
      pro:
      - "Préparer la sauce béchamel : lasagnes, croques-monsieur, endives au jambon, gratins."
      - "Préparer la sauce veloutée : base d’une sauce suprême ou d’une sauce Nantua."
      - "Préparer la sauce tomate."
      - "Préparer la sauce espagnole, à base de tomate : départ d’une sauce bordelaise ou d’une sauce madère."
      - "Préparer la sauce hollandaise, onctueuse : base de la sauce moutarde et de la sauce mousseline."
      cavernes:
      - "Préparation. Sauce béchamel, préparer. Lasagnes, croques-monsieur, endives jambon, gratins."
      - "Cuisson. Sauce veloutée, préparer. Base sauce suprême ou sauce Nantua."
      - "Cuisson. Sauce tomate, préparer."
      - "Cuisson. Sauce espagnole, base tomate, préparer. Départ sauce bordelaise ou sauce madère."
      - "Finition. Sauce hollandaise onctueuse, préparer. Base sauce moutarde, sauce mousseline."
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : portion ≈ 60 ml de sauce (moyenne béchamel / hollandaise / tomate)
      ; quantités non précisées'
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: sauce béchamel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce veloutée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce tomate
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce espagnole
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce hollandaise
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques et les gratins."
    - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
    - "Cuisson. Préparez la sauce tomate."
    - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
    - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques et les gratins."
      - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
      - "Cuisson. Préparez la sauce tomate."
      - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
      - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
      pro:
      - "Préparer la sauce béchamel : lasagnes, croques, gratins."
      - "Préparer la sauce veloutée : base d’une sauce suprême ou d’une sauce Nantua."
      - "Préparer la sauce tomate."
      - "Préparer la sauce espagnole, à base de tomate : départ d’une sauce bordelaise ou d’une sauce madère."
      - "Préparer la sauce hollandaise, onctueuse : base de la sauce moutarde et de la sauce mousseline."
      cavernes:
      - "Préparation. Sauce béchamel, préparer. Lasagnes, croques, gratins."
      - "Cuisson. Sauce veloutée, préparer. Base sauce suprême ou sauce Nantua."
      - "Cuisson. Sauce tomate, préparer."
      - "Cuisson. Sauce espagnole, base tomate, préparer. Départ sauce bordelaise ou sauce madère."
      - "Finition. Sauce hollandaise onctueuse, préparer. Base sauce moutarde, sauce mousseline."
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : portion ≈ 60 ml de sauce (moyenne béchamel / hollandaise / tomate)
      ; quantités non précisées'
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
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: sauce béchamel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce veloutée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce tomate
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce espagnole
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce hollandaise
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: creme de soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Préparez une béchamel végétalienne avec la margarine végétale et le lait d’avoine, comme un roux classique. Elle sert aux lasagnes, aux gratins et aux croques."
    - "Cuisson. Préparez un velouté végétalien sur le même principe que la béchamel, en remplaçant le lait par un fond de légumes."
    - "Cuisson. Préparez la sauce tomate."
    - "Cuisson. Préparez une sauce espagnole végétalienne, liée et à la tomate, pour une sauce madère ou bordelaise sans jus de viande."
    - "Finition. Préparez une hollandaise végétalienne : montez la crème de soja au bain-marie avec la margarine fondue et du jus de citron."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez une béchamel végétalienne avec la margarine végétale et le lait d’avoine, comme un roux classique. Elle sert aux lasagnes, aux gratins et aux croques."
      - "Cuisson. Préparez un velouté végétalien sur le même principe que la béchamel, en remplaçant le lait par un fond de légumes."
      - "Cuisson. Préparez la sauce tomate."
      - "Cuisson. Préparez une sauce espagnole végétalienne, liée et à la tomate, pour une sauce madère ou bordelaise sans jus de viande."
      - "Finition. Préparez une hollandaise végétalienne : montez la crème de soja au-dessus d’une eau frémissante avec la margarine fondue et du jus de citron."
      pro:
      - "Préparer une béchamel végétalienne : margarine végétale, lait d’avoine, comme un roux classique. Lasagnes, gratins, croques."
      - "Préparer un velouté végétalien sur le même principe que la béchamel : remplacer le lait par un fond de légumes."
      - "Préparer la sauce tomate."
      - "Préparer une sauce espagnole végétalienne, liée et à la tomate, pour sauce madère ou bordelaise sans jus de viande."
      - "Préparer une hollandaise végétalienne : monter la crème de soja au-dessus d’une eau frémissante avec la margarine fondue et du jus de citron."
      cavernes:
      - "Préparation. Béchamel végétalienne, margarine végétale, lait d’avoine, préparer. Comme roux classique. Lasagnes, gratins, croques."
      - "Cuisson. Velouté végétalien, même principe que béchamel. Lait, remplacer par fond de légumes."
      - "Cuisson. Sauce tomate, préparer."
      - "Cuisson. Sauce espagnole végétalienne, liée, tomate, préparer. Sauce madère ou bordelaise, zéro jus viande."
      - "Finition. Hollandaise végétalienne, préparer. Crème de soja, margarine fondue, jus de citron, monter. Casserole dessus eau frémissante."
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : portion ≈ 60 ml de sauce (moyenne béchamel / hollandaise / tomate)
      ; quantités non précisées'
  pesco:
    label: Pas de version pesco fiable
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: sauce béchamel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce veloutée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce tomate
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce espagnole
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce hollandaise
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques-monsieur, les endives au jambon et les gratins."
    - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
    - "Cuisson. Préparez la sauce tomate."
    - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
    - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques-monsieur, les endives au jambon et les gratins."
      - "Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua."
      - "Cuisson. Préparez la sauce tomate."
      - "Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère."
      - "Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline."
      pro:
      - "Préparer la sauce béchamel : lasagnes, croques-monsieur, endives au jambon, gratins."
      - "Préparer la sauce veloutée : base d’une sauce suprême ou d’une sauce Nantua."
      - "Préparer la sauce tomate."
      - "Préparer la sauce espagnole, à base de tomate : départ d’une sauce bordelaise ou d’une sauce madère."
      - "Préparer la sauce hollandaise, onctueuse : base de la sauce moutarde et de la sauce mousseline."
      cavernes:
      - "Préparation. Sauce béchamel, préparer. Lasagnes, croques-monsieur, endives jambon, gratins."
      - "Cuisson. Sauce veloutée, préparer. Base sauce suprême ou sauce Nantua."
      - "Cuisson. Sauce tomate, préparer."
      - "Cuisson. Sauce espagnole, base tomate, préparer. Départ sauce bordelaise ou sauce madère."
      - "Finition. Sauce hollandaise onctueuse, préparer. Base sauce moutarde, sauce mousseline."
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : portion ≈ 60 ml de sauce (moyenne béchamel / hollandaise / tomate)
      ; quantités non précisées'
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

# Les 5 sauces mères à connaître
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/les-5-sauces-meres-a-connaitre.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/les-5-sauces-meres-a-connaitre]]

## Ingrédients (4 personnes)

-  sauce béchamel
-  sauce veloutée
-  sauce tomate
-  sauce espagnole
-  sauce hollandaise

## Préparation

1. Préparation. Préparez la sauce béchamel : elle entre dans les lasagnes, les croques-monsieur, les endives au jambon et les gratins.
2. Cuisson. Préparez la sauce veloutée : cette base permet de réaliser une sauce suprême ou une sauce Nantua.
3. Cuisson. Préparez la sauce tomate.
4. Cuisson. Préparez la sauce espagnole, à base de tomate : elle sert de départ à une sauce bordelaise ou à une sauce madère.
5. Finition. Préparez la sauce hollandaise : cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline.

Lasagnes, croques-monsieur, endives au jambon, gratins… Cette sauce est utilisée dans de nombreuses recettes.
2. La sauce veloutée

Cette base vous permettra de réaliser une sauce Suprême ou une sauce Nantua.
3. La sauce tomate
4. La sauce espagnole

Cette sauce à base de tomate vous permettra de réaliser une sauce bordelaise ou une sauce madère.
5. La sauce hollandaise

Cette sauce onctueuse est la base de la sauce moutarde et de la sauce mousseline.

 
 

 
 .
