---
schema: recette-web-jigme/v2
slug: salade-parisienne
title: Salade parisienne
lang: fr
description: "Salade parisienne : recette française avec salade verte type laitue, oeuf et tranche de jambon épaisse, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- salade
- Paris
- rapide
image:
  url:
  alt: Salade parisienne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-parisienne.md
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
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    - from: emmental
      to: comté affiné (naturellement quasi sans lactose)
      note:
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (saumon fumé) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
histoire: >
  Salade parisienne : salade composée de bistro (souvent pomme de terre, jambon
  ou viande froide, œuf, mayonnaise). Pas une recette d’auteur ni une AOC.
  « Parisienne » dit le service de ville, pas un canon figé.
fun_facts:
- text: >
    La mayo lie : trop, c’est une macédoine ; trop peu, les dés se séparent.
  source_name: Usage
  source_url:
- text: >
    Les pommes de terre encore tièdes absorbent la sauce mieux que froides.
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Famille Lieubeau
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — la mayo, sans un chardonnay gras.
- name: Bourgueil
  producer: Yannick Amirault
  origin: Bourgueil, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc — le jambon, tanin souple.
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — l’entrée froide, sans un champagne.
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
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 10
      rest_min: 0
      total_min: 25
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de jambon épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: emmental
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: champignons de Paris
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante. Laissez-le dix minutes afin d’obtenir
      un oeuf dur.
    - Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines
      lamelles.
    - Cuisson. Écalez les oeufs et coupez-les en quatre.
    - Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles
      de champignons, de dés d’emmental et de jambon. Complétez avec l’oeuf dur et assaisonnez
      selon vos goûts (Jigmé a ajouté du persil haché et du poivre par exemple). Finalisez
      votre salade avec la vinaigrette de votre choix et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante. Laissez-les dix minutes afin d’obtenir un œuf dur."
      - "Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Cuisson. Écalez les œufs et coupez-les en quatre."
      - "Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles de champignons, de dés d’emmental et de jambon. Complétez avec l’œuf dur et assaisonnez selon vos goûts (persil haché et poivre, par exemple). Finalisez votre salade avec la vinaigrette de votre choix."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante. Laisser dix minutes, jusqu’à œuf dur."
      - "Pendant ce temps, découper le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Écaler les œufs. Couper en quatre."
      - "Déposer la salade préalablement nettoyée dans une assiette creuse. Parsemer de lamelles de champignons, de dés d’emmental et de jambon. Compléter avec l’œuf dur. Assaisonner selon le goût (persil haché et poivre, par exemple). Finaliser avec la vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante. Dix minutes, jusqu’à œuf dur."
      - "Cuisson. Pendant, fromage, jambon, dés. Champignons, fines lamelles."
      - "Cuisson. Œufs, écaler. Quatre, couper."
      - "Finition. Salade nettoyée, assiette creuse, déposer. Lamelles champignons, dés emmental, jambon, parsemer. Œuf dur, compléter. Goûts : persil haché, poivre, exemple. Vinaigrette choix, finaliser."
    kcal_per_serving: 134
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: emmental
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: champignons de Paris
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante. Laissez-le dix minutes afin d’obtenir
      un oeuf dur.
    - Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines
      lamelles.
    - Cuisson. Écalez les oeufs et coupez-les en quatre.
    - Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles
      de champignons, de dés d’emmental et de jambon. Complétez avec l’oeuf dur et assaisonnez
      selon vos goûts (Jigmé a ajouté du persil haché et du poivre par exemple). Finalisez
      votre salade avec la vinaigrette de votre choix et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante. Laissez-les dix minutes afin d’obtenir un œuf dur."
      - "Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Cuisson. Écalez les œufs et coupez-les en quatre."
      - "Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles de champignons, de dés d’emmental et de jambon. Complétez avec l’œuf dur et assaisonnez selon vos goûts (persil haché et poivre, par exemple). Finalisez votre salade avec la vinaigrette de votre choix."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante. Laisser dix minutes, jusqu’à œuf dur."
      - "Pendant ce temps, découper le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Écaler les œufs. Couper en quatre."
      - "Déposer la salade préalablement nettoyée dans une assiette creuse. Parsemer de lamelles de champignons, de dés d’emmental et de jambon. Compléter avec l’œuf dur. Assaisonner selon le goût (persil haché et poivre, par exemple). Finaliser avec la vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante. Dix minutes, jusqu’à œuf dur."
      - "Cuisson. Pendant, fromage, jambon, dés. Champignons, fines lamelles."
      - "Cuisson. Œufs, écaler. Quatre, couper."
      - "Finition. Salade nettoyée, assiette creuse, déposer. Lamelles champignons, dés emmental, jambon, parsemer. Œuf dur, compléter. Goûts : persil haché, poivre, exemple. Vinaigrette choix, finaliser."
    kcal_per_serving: 159
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
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: champignons de Paris
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le tofu ferme en quartiers.
    - Cuisson. Pendant ce temps, découpez le fromage végétal et le jambon végétal en dés, puis les champignons en fines
      lamelles.
    - Dressage. Réservez les quartiers de tofu.
    - Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles
      de champignons, de dés de parmesan végétal ou levure maltée et de jambon végétal. Complétez avec le tofu et assaisonnez selon
      vos goûts (Jigmé a ajouté du persil haché et du poivre par exemple). Finalisez votre
      salade avec la vinaigrette de votre choix et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu ferme en quartiers."
      - "Cuisson. Pendant ce temps, découpez le fromage végétal et le jambon végétal en dés, puis les champignons en fines lamelles."
      - "Dressage. Réservez les quartiers de tofu."
      - "Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles de champignons, de dés de parmesan végétal ou de levure maltée et de jambon végétal. Complétez avec le tofu et assaisonnez selon vos goûts (persil haché et poivre, par exemple). Finalisez votre salade avec la vinaigrette de votre choix."
      pro:
      - "Couper le tofu ferme en quartiers."
      - "Pendant ce temps, découper le fromage végétal et le jambon végétal en dés, puis les champignons en fines lamelles."
      - "Réserver les quartiers de tofu."
      - "Déposer la salade préalablement nettoyée dans une assiette creuse. Parsemer de lamelles de champignons, de dés de parmesan végétal ou de levure maltée et de jambon végétal. Compléter avec le tofu. Assaisonner selon le goût (persil haché et poivre, par exemple). Finaliser avec la vinaigrette au choix."
      cavernes:
      - "Préparation. Tofu ferme, quartiers, couper."
      - "Cuisson. Pendant, fromage végétal, jambon végétal, dés. Champignons, fines lamelles."
      - "Dressage. Quartiers tofu, réserver."
      - "Finition. Salade nettoyée, assiette creuse, déposer. Lamelles champignons, dés parmesan végétal ou levure maltée, jambon végétal, parsemer. Tofu, compléter. Goûts : persil haché, poivre, exemple. Vinaigrette choix, finaliser."
    kcal_per_serving: 337
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade verte type laitue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: emmental
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: champignons de Paris
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les oeufs dans une casserole d’eau bouillante. Laissez-le dix minutes afin d’obtenir
      un oeuf dur.
    - Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines
      lamelles.
    - Cuisson. Écalez les oeufs et coupez-les en quatre.
    - Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles
      de champignons, de dés d’emmental et de jambon. Complétez avec l’oeuf dur et assaisonnez
      selon vos goûts (Jigmé a ajouté du persil haché et du poivre par exemple). Finalisez
      votre salade avec la vinaigrette de votre choix et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez les œufs dans une casserole d’eau bouillante. Laissez-les dix minutes afin d’obtenir un œuf dur."
      - "Cuisson. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Cuisson. Écalez les œufs et coupez-les en quatre."
      - "Finition. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles de champignons, de dés d’emmental et de jambon. Complétez avec l’œuf dur et assaisonnez selon vos goûts (persil haché et poivre, par exemple). Finalisez votre salade avec la vinaigrette de votre choix."
      pro:
      - "Placer les œufs dans une casserole d’eau bouillante. Laisser dix minutes, jusqu’à œuf dur."
      - "Pendant ce temps, découper le fromage et le jambon en dés, puis les champignons en fines lamelles."
      - "Écaler les œufs. Couper en quatre."
      - "Déposer la salade préalablement nettoyée dans une assiette creuse. Parsemer de lamelles de champignons, de dés d’emmental et de jambon. Compléter avec l’œuf dur. Assaisonner selon le goût (persil haché et poivre, par exemple). Finaliser avec la vinaigrette au choix."
      cavernes:
      - "Cuisson. Œufs, casserole, eau bouillante. Dix minutes, jusqu’à œuf dur."
      - "Cuisson. Pendant, fromage, jambon, dés. Champignons, fines lamelles."
      - "Cuisson. Œufs, écaler. Quatre, couper."
      - "Finition. Salade nettoyée, assiette creuse, déposer. Lamelles champignons, dés emmental, jambon, parsemer. Œuf dur, compléter. Goûts : persil haché, poivre, exemple. Vinaigrette choix, finaliser."
    kcal_per_serving: 274
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade parisienne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-parisienne]]

## Ingrédients (4 personnes)

- 1 salade verte type laitue
- 4 oeuf
- 4 tranche de jambon épaisse
- 200 g d'emmental
-  champignons de Paris

## Préparation

1. Placez les oeufs dans une casserole d’eau bouillante. Laissez-le dix minutes afin d’obtenir un oeuf dur.
2. Pendant ce temps, découpez le fromage et le jambon en dés, puis les champignons en fines lamelles.
3. Écalez les oeufs et coupez-les en quatre.
4. Déposez la salade préalablement nettoyée dans une assiette creuse. Parsemez de lamelles de champignons, de dés d’emmental et de jambon. Complétez avec l’oeuf dur et assaisonnez selon vos goûts (Jigmé a ajouté du persil haché et du poivre par exemple).

 
 

 
 Finalisez votre salade avec la vinaigrette de votre choix et dégustez. Bon appétit !
