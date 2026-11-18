---
schema: recette-web-jigme/v2
slug: bento-vegetarien
title: Bento végétarien
lang: fr
description: "Bento végétarien : recette française avec quinoa, petit pois et oeuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- bento
- végétarien
- quinoa
image:
  url:
  alt: Bento végétarien
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bento-vegetarien.md
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
    note: Déjà sans lait.
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
  Même cadre que le bento japonais : repas compartimenté à emporter. La version
  végétarienne suit les shōjin-ryōri (cuisine des temples) plus qu’un plat unique
  daté : riz, légumes, tofu ou œuf, pickles.
fun_facts:
- text: "Le shōjin-ryōri bouddhiste évite viande et, souvent, les alliums trop forts ; les bentos laïcs n’ont pas cette règle."
  source_name: Usage japonais
  source_url:
- text: "Le riz froid du bento se tient mieux un peu plus ferme (moins d’eau) que le riz de bol."
  source_name: Usage
  source_url:
wines:
- name: Soave
  producer: Inama
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Amande, citron — légumes et riz.
- name: Anjou blanc
  producer: Domaine Ogereau
  origin: Saint-Lambert-du-Lattay, Anjou
  grapes: chenin
  award:
  why: Chenin sec, poire — tofu et sauce soja.
- name: Etna Bianco
  producer: Cottanera
  origin: Etna, Sicile
  grapes: carricante
  award:
  why: Fumée légère, agrume — grillades de légumes.
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
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id002
    - poêle
    - saladier
    - fouet
    - film alimentaire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: quinoa
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: petit pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tomate cerise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Mettez le quinoa à cuire dans de l’eau bouillante. Pendant ce temps, écossez les petits
      pois et mettez-les à cuire dans de l’eau.
    - Cuisson. Pour l’omelette, cassez les oeufs dans un récipient et battez-les. Assaisonnez à votre
      convenance et rajoutez de l’oignon nouveau ciselé. Faites cuire l’omelette dans une
      poêle bien chaude et huilée.
    - Cuisson. Une fois l’omelette cuite, roulez-la sur elle même et enroulez-la dans du film alimentaire.
      Serrez bien et laissez-la reposer au frais.
    - Finition. Découpez le concombre et les tomates cerises, puis lorsque l’omelette a refroidit, coupez-la
      en tranches. Vous pouvez maintenant dresser votre bento en y ajoutant tous les ingrédients
      dans l’ordre que vous souhaitez en n’oubliant pas d’y ajouter une vinaigrette. Votre
      bento est prêt ! Laissez-le au frigo jusqu’au dernier moment et n’hésitez pas à le transporter
      dans un petit sac isotherme pour qu’il reste bien frais jusqu’au déjeuner. Bon appétit
      ! Découvrez aussi notre bento au saumon et notre bento à la viande.
    steps_niveaux:
      amateur:
      - "Mettez le quinoa à cuire dans de l’eau bouillante. Pendant ce temps, écossez les petits pois et mettez-les à cuire dans de l’eau."
      - "Pour l’omelette, cassez les œufs dans un récipient et battez-les. Assaisonnez à votre convenance et ajoutez de l’oignon nouveau ciselé. Faites cuire l’omelette dans une poêle bien chaude et huilée."
      - "Une fois l’omelette cuite, roulez-la sur elle-même et enroulez-la dans du film alimentaire. Serrez bien et laissez-la reposer au frais."
      - "Découpez le concombre et les tomates cerises, puis lorsque l’omelette a refroidi, coupez-la en tranches. Dressez votre bento en y ajoutant tous les ingrédients dans l’ordre que vous souhaitez, sans oublier une vinaigrette. Laissez-le au frigo jusqu’au dernier moment ; vous pouvez le transporter dans un petit sac isotherme."
      pro:
      - "Cuire le quinoa à l’eau bouillante. Pendant ce temps, écosser les petits pois et les cuire à l’eau."
      - "Casser les œufs dans un récipient. Battre. Assaisonner. Ajouter l’oignon nouveau ciselé. Cuire l’omelette dans une poêle bien chaude et huilée."
      - "Omelette cuite : rouler sur elle-même, enrouler dans du film alimentaire. Serrer. Reposer au frais."
      - "Découper le concombre et les tomates cerises. Omelette refroidie : couper en tranches. Dresser le bento avec tous les ingrédients, vinaigrette. Tenir au frigo jusqu’au dernier moment ; transport possible en sac isotherme."
      cavernes:
      - "Quinoa : cuire eau bouillante. Pendant : petits pois écosser, cuire eau."
      - "Œufs : casser récipient, battre. Assaisonner. Oignon nouveau ciselé : ajouter. Omelette : cuire poêle bien chaude, huilée."
      - "Omelette cuite : rouler sur elle-même, enrouler film alimentaire. Serrer. Reposer frais."
      - "Concombre, tomates cerises : découper. Omelette refroidie : couper tranches. Bento : dresser, tous ingrédients, vinaigrette. Frigo jusqu’à dernier moment. Sac isotherme pour transport."
    kcal_per_serving: 170
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 170
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
    - qty: 50
      unit: g
      item: quinoa
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: petit pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tomate cerise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Mettez le quinoa à cuire dans de l’eau bouillante. Pendant ce temps, écossez les petits
      pois et mettez-les à cuire dans de l’eau.
    - Cuisson. Pour l’omelette, versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) dans un récipient et battez. Assaisonnez à votre convenance et rajoutez de l’oignon
      nouveau ciselé. Faites cuire l’omelette dans une poêle bien chaude et huilée.
    - Cuisson. Une fois l’omelette cuite, roulez-la sur elle même et enroulez-la dans du film alimentaire.
      Serrez bien et laissez-la reposer au frais.
    - Finition. Découpez le concombre et les tomates cerises, puis lorsque l’omelette a refroidit, coupez-la
      en tranches. Vous pouvez maintenant dresser votre bento en y ajoutant tous les ingrédients
      dans l’ordre que vous souhaitez en n’oubliant pas d’y ajouter une vinaigrette. Votre
      bento est prêt ! Laissez-le au frigo jusqu’au dernier moment et n’hésitez pas à le transporter
      dans un petit sac isotherme pour qu’il reste bien frais jusqu’au déjeuner. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mettez le quinoa à cuire dans de l’eau bouillante. Pendant ce temps, écossez les petits pois et mettez-les à cuire dans de l’eau."
      - "Pour l’omelette, versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) dans un récipient et battez. Assaisonnez à votre convenance et ajoutez de l’oignon nouveau ciselé. Faites cuire l’omelette dans une poêle bien chaude et huilée."
      - "Une fois l’omelette cuite, roulez-la sur elle-même et enroulez-la dans du film alimentaire. Serrez bien et laissez-la reposer au frais."
      - "Découpez le concombre et les tomates cerises, puis lorsque l’omelette a refroidi, coupez-la en tranches. Dressez votre bento en y ajoutant tous les ingrédients dans l’ordre que vous souhaitez, sans oublier une vinaigrette. Laissez-le au frigo jusqu’au dernier moment ; vous pouvez le transporter dans un petit sac isotherme."
      pro:
      - "Cuire le quinoa à l’eau bouillante. Pendant ce temps, écosser les petits pois et les cuire à l’eau."
      - "Verser le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) dans un récipient. Battre. Assaisonner. Ajouter l’oignon nouveau ciselé. Cuire l’omelette dans une poêle bien chaude et huilée."
      - "Omelette cuite : rouler sur elle-même, enrouler dans du film alimentaire. Serrer. Reposer au frais."
      - "Découper le concombre et les tomates cerises. Omelette refroidie : couper en tranches. Dresser le bento avec tous les ingrédients, vinaigrette. Tenir au frigo jusqu’au dernier moment ; transport possible en sac isotherme."
      cavernes:
      - "Quinoa : cuire eau bouillante. Pendant : petits pois écosser, cuire eau."
      - "Tofu soyeux ou œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) : verser récipient, battre. Assaisonner. Oignon nouveau ciselé : ajouter. Omelette : cuire poêle bien chaude, huilée."
      - "Omelette cuite : rouler sur elle-même, enrouler film alimentaire. Serrer. Reposer frais."
      - "Concombre, tomates cerises : découper. Omelette refroidie : couper tranches. Bento : dresser, tous ingrédients, vinaigrette. Frigo jusqu’à dernier moment. Sac isotherme pour transport."
    kcal_per_serving: 170
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 170
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Bento végétarien
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bento-vegetarien]]

## Ingrédients (4 personnes)

- 50 g de quinoa
- 50 g de petit pois
- 3 oeuf
- 1 oignon nouveau
- 8 tomate cerise
- 1 concombre

## Préparation

1. Mettez le quinoa à cuire dans de l’eau bouillante. Pendant ce temps, écossez les petits pois et mettez-les à cuire dans de l’eau.
2. Pour l’omelette, cassez les oeufs dans un récipient et battez-les. Assaisonnez à votre convenance et rajoutez de l’oignon nouveau ciselé. Faites cuire l’omelette dans une poêle bien chaude et huilée.
3. Une fois l’omelette cuite, roulez-la sur elle même et enroulez-la dans du film alimentaire. Serrez bien et laissez-la reposer au frais.
4. Découpez le concombre et les tomates cerises, puis lorsque l’omelette a refroidit, coupez-la en tranches. Vous pouvez maintenant dresser votre bento en y ajoutant tous les ingrédients dans l’ordre que vous souhaitez en n’oubliant pas d’y ajouter une vinaigrette.

 
 

 
 Votre bento est prêt ! Laissez-le au frigo jusqu’au dernier moment et n’hésitez pas à le transporter dans un petit sac isotherme pour qu’il reste bien frais jusqu’au déjeuner. Bon appétit !

Découvrez aussi notre bento au saumon et notre bento à la viande.
