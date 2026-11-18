---
schema: recette-web-jigme/v2
slug: mini-mille-feuilles-de-pommes-de-terre-et-fromage-abondance
title: Mini mille-feuilles de pommes de terre et fromage Abondance
lang: fr
description: "Mini mille-feuilles de pommes de terre et fromage Abondance : recette française avec pommes de terre, fromage et gousse d'ail, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- fromage
- végétarien
- plat
image:
  url:
  alt: Mini mille-feuilles de pommes de terre et fromage Abondance
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/mini-mille-feuilles-de-pommes-de-terre-et-fromage-abondance.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (fromage (Abondance)) : pas d’adaptation fiable.'
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
histoire: 'Mille-feuille : « mille feuilles », pâte feuilletée et crème, dessert dont la forme moderne
  doit beaucoup à Carême. Ici, le mot est pris au propre : fines couches de pomme de terre et d’abondance,
  version salée d’apéritif, pas le gâteau.

  '
fun_facts:
- text: >
    L’abondance est un fromage au lait cru de Haute-Savoie, nommé d’après la
    commune ; pâte pressée demi-cuite, parfum franc.
  source_name: Wikipedia, Abondance cheese
  source_url: https://en.wikipedia.org/wiki/Abondance_cheese
- text: >
    Les tranches de pomme de terre doivent être régulières : trop épaisses, le
    centre reste cru ; trop fines, ça se ramollit en purée.
  source_name: Usage
  source_url:
wines:
- name: Roussette de Savoie
  producer: Domaine Dupasquier
  origin: Savoie
  grapes: altesse
  award:
  why: Blanc de Savoie — l’abondance, voisin de montagne.
- name: Apremont
  producer: Jean Perrier et Fils
  origin: Apremont, Savoie
  grapes: jacquère
  award:
  why: Jacquère, poire — la pomme de terre et le fromage, sans bois.
- name: Mondeuse
  producer: Louis Magnin
  origin: Arbin, Savoie
  grapes: mondeuse
  award:
  why: Mondeuse, poivre — l’abondance, un rouge de Savoie plutôt qu’un bordeaux.
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
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: fromage (Abondance)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
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
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les pommes de terre en tranches très fines. Râpez l’Abondance.
    - Mélange. Mélangez le tout avec du beurre, de l’ail, du sel et du poivre.
    - Mélange. Disposez le mélange dans des petits moules préalablement beurrés.
    - Cuisson. Faites cuire le tout au four à 190°C pendant une bonne trentaine de minutes. Et voilà,
      c’est tout ! C’est prêt à être dégusté ! Simple, rapide, efficace !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les pommes de terre en tranches très fines. [[raper|Râpez]] l’Abondance."
      - "Mélange. Mélangez le tout avec du beurre, de l’ail, du sel et du poivre."
      - "Mélange. Disposez le mélange dans des petits moules préalablement beurrés."
      - "Cuisson. Faites cuire le tout au four à 190°C pendant une bonne trentaine de minutes. Et voilà, c’est tout ! C’est prêt à être dégusté ! Simple, rapide, efficace !"
      pro:
      - "Couper les pommes de terre en tranches très fines. Râper l’Abondance."
      - "Mélanger le tout avec du beurre, de l’ail, du sel et du poivre."
      - "Disposer le mélange dans des petits moules préalablement beurrés."
      - "Cuire au four à 190 °C pendant une bonne trentaine de minutes. Servir."
      cavernes:
      - "Préparation. Pommes de terre, tranches très fines. Abondance, râper."
      - "Mélange. Tout, beurre, ail, sel, poivre, mélanger."
      - "Mélange. Petits moules, beurrés d’abord. Mélange, disposer."
      - "Cuisson. Four 190°C, bonne trentaine min. Prêt. Déguster."
    kcal_per_serving: 485
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 485
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
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
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
    steps:
    - Préparation. Coupez les pommes de terre en tranches très fines. Râpez le fromage végétal.
    - Mélange. Mélangez le tout avec de la margarine végétale, de l’ail, du sel et du poivre.
    - Mélange. Disposez le mélange dans des petits moules préalablement graissés avec de la margarine végétale.
    - Cuisson. Faites cuire le tout au four à 190°C pendant une bonne trentaine de minutes. Et voilà,
      c’est tout ! C’est prêt à être dégusté ! Simple, rapide, efficace !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les pommes de terre en tranches très fines. [[raper|Râpez]] le fromage végétal."
      - "Mélange. Mélangez le tout avec de la margarine végétale, de l’ail, du sel et du poivre."
      - "Mélange. Disposez le mélange dans des petits moules préalablement graissés avec de la margarine végétale."
      - "Cuisson. Faites cuire le tout au four à 190°C pendant une bonne trentaine de minutes. Et voilà, c’est tout ! C’est prêt à être dégusté ! Simple, rapide, efficace !"
      pro:
      - "Couper les pommes de terre en tranches très fines. Râper le fromage végétal."
      - "Mélanger le tout avec de la margarine végétale, de l’ail, du sel et du poivre."
      - "Disposer le mélange dans des petits moules préalablement graissés avec de la margarine végétale."
      - "Cuire au four à 190 °C pendant une bonne trentaine de minutes. Servir."
      cavernes:
      - "Préparation. Pommes de terre, tranches très fines. Fromage végétal, râper."
      - "Mélange. Tout, margarine végétale, ail, sel, poivre, mélanger."
      - "Mélange. Petits moules, graissés d’abord, margarine végétale. Mélange, disposer."
      - "Cuisson. Four 190°C, bonne trentaine min. Prêt. Déguster."
    kcal_per_serving: 420
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 485
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Mini mille-feuilles de pommes de terre et fromage Abondance
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/mini-mille-feuilles-de-pommes-de-terre-et-fromage-abondance]]

## Ingrédients (4 personnes)

- 600 g de pommes de terre
- 250 g de fromage (Abondance)
- 2 gousse d'ail
- 60 g de beurre

## Préparation

1. Coupez les pommes de terre en tranches très fines. Râpez l’Abondance.
2. Mélangez le tout avec du beurre, de l’ail, du sel et du poivre.
3. Disposez le mélange dans des petits moules préalablement beurrés.
4. Faites cuire le tout au four à 190°C pendant une bonne trentaine de minutes.

 
 

 
 Et voilà, c’est tout ! C’est prêt à être dégusté ! Simple, rapide, efficace !
