---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: tarte-rustique-mirabelles
title: Tarte rustique aux mirabelles (crème d’amandes, romarin)
lang: fr
description: "Tarte rustique aux mirabelles : recette française avec farine T55, farine de noix et beurre froid, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- tarte
- été
- mirabelle
- amande
image:
  url:
  alt: Tarte rustique aux mirabelles (crème d’amandes, romarin)
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/tarte-rustique-mirabelles.md
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
    clears:
    - gluten
    swaps:
    - from: farine T55
      to: mix farine sans gluten + psyllium
      note:
    - from: farine de noix (option ; sinon 200 g de T55)
      to: mix farine sans gluten + psyllium
      note:
    - from: farine de noix (option)
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : farine T55 → mix farine sans gluten + psyllium ; farine de noix (option
      ; sinon 200 g de T55) → mix farine sans gluten + psyllium ; farine de noix (option)
      → mix farine sans gluten + psyllium.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: beurre froid
      to: beurre sans lactose ou clarifié
      note:
    - from: beurre pommade
      to: beurre sans lactose ou clarifié
      note:
    - from: lait (dorure)
      to: lait sans lactose
      note:
    note: 'Lactose : beurre froid → beurre sans lactose ou clarifié ; beurre pommade → beurre
      sans lactose ou clarifié ; lait (dorure) → lait sans lactose.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: beurre froid
      to: margarine végétale
      note:
    - from: beurre pommade
      to: margarine végétale
      note:
    - from: lait (dorure)
      to: lait d'avoine
      note:
    note: 'Produits laitiers : beurre froid → margarine végétale ; beurre pommade
      → margarine végétale ; lait (dorure) → lait d''avoine.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (jaune d’œuf) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: farine de noix (option ; sinon 200 g de T55)
      to: graines de tournesol
      note:
    - from: poudre d’amandes
      to: graines de tournesol
      note:
    - from: poudre d’amandes (sous les fruits)
      to: graines de tournesol
      note:
    - from: farine de noix (option)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : farine de noix (option ; sinon 200 g de T55) → graines de tournesol
      ; poudre d’amandes → graines de tournesol ; poudre d’amandes (sous les fruits) → graines
      de tournesol ; farine de noix (option) → graines de tournesol.'
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
house_toggle:
house_options: []
histoire: 'En français, une galette (du normand gale, « gâteau plat ») désigne notamment une tarte libre,
  une seule abaisse, garniture au centre, croûte repliée — ce qu’on appelle tarte rustique. La pâte sablée
  se fait par sablage à froid (beurre + farine + sucre) ; On note qu’on peut y mettre de la poudre de
  fruits secs (amandes, noisettes, noix). La crème d’amandes (base de la frangipane : beurre, sucre, œufs,
  poudre d’amandes) est un classique de pâtisserie française ; la première mention écrite de franchipane
  date de 1674. La mirabelle de Lorraine (IGP) n’a pas de tarte rustique « officielle » : on reprend le
  geste galette + crème d’amandes des tartes amandines aux mirabelles, avec le romarin demandé ici.

  '
fun_facts:
- text: Rustique = pas de cercle. Bord de 4–5 cm rabattu, dorure œuf-lait, four plutôt vif.
  source_name: Marmiton, tarte rustique aux prunes
  source_url: https://www.marmiton.org/recettes/recette_tarte-rustique-aux-prunes_372783.aspx
- text: 'Sablage ≠ crémage. Le beurre enrobe les grains : après cuisson ils ne sont pas solidaires
    → texture sablée.'
  source_name: Wikipedia FR, Pâte sablée
  source_url: https://fr.wikipedia.org/wiki/P%C3%A2te_sabl%C3%A9e
- text: Frangipane ≠ crème d’amandes pure. Traditionnellement 2 parts crème d’amandes + 1
    part crème pâtissière. Ici on reste sur la crème d’amandes (plus simple, plus nette avec
    le fruit).
  source_name: Wikipedia EN, Frangipane
  source_url: https://en.wikipedia.org/wiki/Frangipane
- text: Mirabelle, Metz, 1569. Offerte confite à Charles IX. IGP Lorraine.
  source_name: Jardin de Lorraine
  source_url: https://www.jardin-de-lorraine.fr/origines-de-la-mirabelle/
wines:
- name: Gewurztraminer
  producer: Hugel & Fils
  origin: Alsace
  grapes: gewurztraminer
  award:
  why: 'litchi / rose : suit la mirabelle ; le gras de la crème d’amandes passe.'
- name: Muscat d’Alsace
  producer: Maison Trimbach
  origin: Alsace
  grapes: muscat
  award:
  why: plus sec qu’un VT, fruit net — le romarin ne se noie pas.
- name: Côtes de Toul Gris
  producer: Domaine Lelièvre
  origin: Lorraine
  grapes: assemblage gris de Toul (gamay / pinot, étiquette)
  award:
  why: même terroir que la mirabelle IGP ; le perlé coupe le sablé au beurre.
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
    - fruits_a_coque
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 40
      rest_min: 30
      total_min: 100
    equipment:
    - saladier
    - rouleau
    - plaque + papier
    - pinceau
    - four Miele
    substitutions:
    - from: pas de farine de noix
      to: 100 % T55
      note:
    - from: pas de romarin
      to: thym citron, ou rien
      note:
    - from: pâte brisée du commerce si pas le temps (moins sablée)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 180
      unit: g
      item: farine T55
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine de noix (option ; sinon 200 g de T55)
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre froid
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre glace
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d’œuf
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Pâte sablée
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: eau froide si besoin
      group: Pâte sablée
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: beurre pommade
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: poudre d’amandes
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: romarin frais haché très fin
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: eau-de-vie de mirabelle ou de rhum (option, Marmiton)
      group: Crème d’amandes
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: mirabelles dénoyautées
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: poudre d’amandes (sous les fruits)
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sucre (saupoudrage)
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: romarin
      group: Garniture
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: jaune
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: lait (dorure)
      group: Garniture
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
    - "Préparation. Sablez du bout des doigts les farines, le sucre, le sel et le beurre froid, ou à la feuille du robot, très brièvement. Incorporez le jaune d’œuf, éventuellement un filet d’eau froide. Filmez et réservez 30 min au froid."
    - "Marinade. Travaillez le beurre pommade avec le sucre, puis incorporez l’œuf, la poudre d’amandes et le romarin haché, ainsi qu’un peu d’eau-de-vie de mirabelle ou de rhum si vous en mettez."
    - "Cuisson. Préchauffez le four à 200 °C. Abaissez la pâte sur 4 mm d’épaisseur, sur papier, en un disque d’environ 28 cm. Piquez-la. Saupoudrez 1 c.à.s de poudre d’amandes au centre, en laissant 5 cm de bord."
    - "Étaler la crème d’amandes. Étalez la crème d’amandes. Rangez les mirabelles bien serrées, coupe vers le haut. Saupoudrez de sucre et parsemez de quelques aiguilles de romarin."
    - "Cuisson. Rabattez le bord en plis rustiques. Dorez au jaune délayé de lait. Enfournez 40–45 min à 200 °C : la pâte doit être colorée, les fruits fondants, sans tomber en compote."
    - "Tiède. Servez tiède : le romarin cuit doit rester un parfum, pas un rôti."
    steps_niveaux:
      amateur:
      - "Préparation. Sablez du bout des doigts les farines, le sucre, le sel et le beurre froid, ou à la feuille du robot, très brièvement. Incorporez le jaune d’œuf, éventuellement un filet d’eau froide. Filmez et réservez 30 min au froid."
      - "Marinade. Travaillez le beurre pommade avec le sucre, puis incorporez l’œuf, la poudre d’amandes et le romarin haché, ainsi qu’un peu d’eau-de-vie de mirabelle ou de rhum si vous en mettez."
      - "Cuisson. Préchauffez le four à 200 °C. Abaissez la pâte sur 4 mm d’épaisseur, sur papier, en un disque d’environ 28 cm. Piquez-la. Saupoudrez 1 c.à.s de poudre d’amandes au centre, en laissant 5 cm de bord."
      - "Étaler la crème d’amandes. Étalez la crème d’amandes. Rangez les mirabelles bien serrées, coupe vers le haut. Saupoudrez de sucre et parsemez de quelques aiguilles de romarin."
      - "Cuisson. Rabattez le bord en plis rustiques. Dorez au jaune mélangé de lait. Enfournez 40–45 min à 200 °C : la pâte doit être colorée, les fruits fondants, sans tomber en compote."
      - "Tiède. Servez tiède : le romarin cuit doit rester un parfum, pas un rôti."
      pro:
      - "Sabler du bout des doigts les farines, le sucre, le sel et le beurre froid, ou à la feuille du robot, très brièvement. Incorporer le jaune d’œuf, éventuellement un filet d’eau froide. Filmer et réserver 30 min au froid."
      - "Travailler le beurre pommade avec le sucre, puis incorporer l’œuf, la poudre d’amandes et le romarin haché, ainsi qu’un peu d’eau-de-vie de mirabelle ou de rhum si l’on en met."
      - "Préchauffer le four à 200 °C. Abaisser la pâte sur 4 mm d’épaisseur, sur papier, en un disque d’environ 28 cm. Piquer. Saupoudrer 1 c.à.s de poudre d’amandes au centre, en laissant 5 cm de bord."
      - "Étaler la crème d’amandes. Ranger les mirabelles bien serrées, coupe vers le haut. Saupoudrer de sucre et parsemer de quelques aiguilles de romarin."
      - "Rabattre le bord en plis rustiques. Dorer au jaune mélangé de lait. Enfourner 40–45 min à 200 °C : la pâte doit être colorée, les fruits fondants, sans tomber en compote."
      - "Servir tiède : le romarin cuit doit rester un parfum, pas un rôti."
      cavernes:
      - "Préparation. Farines, sucre, sel, beurre froid, sabler bout doigts, ou feuille robot, très brièvement. Jaune d’œuf, incorporer. Option : filet eau froide. Filmer. Froid 30 min."
      - "Marinade. Beurre pommade, sucre, travailler. Œuf, poudre d’amandes, romarin haché, incorporer. Option : peu eau-de-vie de mirabelle ou rhum."
      - "Cuisson. Four 200 °C. Pâte, 4 mm, papier, disque environ 28 cm, abaisser. Piquer. 1 c.à.s poudre d’amandes, centre, saupoudrer, 5 cm bord."
      - "Étaler crème d’amandes. Crème d’amandes, étaler. Mirabelles, serrées, coupe haut, ranger. Sucre, saupoudrer. Quelques aiguilles romarin, parsemer."
      - "Cuisson. Bord, plis rustiques, rabattre. Jaune mélangé lait, dorer. Four 200 °C, 40–45 min. Pâte colorée, fruits fondants, pas compote."
      - "Tiède. Tiède. Romarin cuit : parfum, pas rôti."
    kcal_per_serving: 890
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 890
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - fruits_a_coque
    - gluten
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 42
      rest_min: 30
      total_min: 100
    equipment:
    - saladier
    - plaque
    - four
    substitutions:
    - from: margarine végétale type 80 % MG plutôt que 100 % huile (moins cassant)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 180
      unit: g
      item: T55
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: farine de noix (option)
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: margarine végétale froide
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sel
      group: Pâte
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: cas
      item: eau froide
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: margarine pommade
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: poudre d’amandes
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: aquafaba
      group: Crème
      scale: true
      optional: false
      to_taste: false
      note: ou 2 c.à.s. de lait d’amande
    - qty:
      unit:
      item: romarin haché
      group: Crème
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Comme la traditionnelle. Procédez comme pour la version traditionnelle, en utilisant l’aquafaba dans la crème. Enfournez 40–45 min à 200 °C."
    steps_niveaux:
      amateur:
      - "Comme la traditionnelle. Procédez comme pour la version traditionnelle, en utilisant l’aquafaba dans la crème. Enfournez 40–45 min à 200 °C."
      pro:
      - "Procéder comme pour la version traditionnelle, en utilisant l’aquafaba dans la crème. Enfourner 40–45 min à 200 °C."
      cavernes:
      - "Comme traditionnelle. Aquafaba dans crème. Four 200 °C, 40–45 min."
    kcal_per_serving: 540
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 890
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2–3 jours", contenant: "", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte rustique aux mirabelles (crème d’amandes, romarin)

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Sucré/tarte-rustique-mirabelles.md).

**Catégorie :** sucré

## Ingrédients (4 personnes)

**Pâte sablée**
- 180 g de farine T55
- 20 g de farine de noix (option ; sinon 200 g de T55)
- 100 g de beurre froid
- 50 g de sucre glace
- 1 jaune d’œuf
- 1 pincée de sel
- 1–2 c.à.s d’eau froide si besoin

**Crème d’amandes**
- 80 g de beurre pommade
- 80 g de sucre
- 80 g de poudre d’amandes
- 1 œuf
- 1 c.à.c de romarin frais haché très fin
- 1 c.à.s d’eau-de-vie de mirabelle ou de rhum (option, Marmiton)

**Garniture**
- 450 g de mirabelles dénoyautées
- 1 c.à.s de poudre d’amandes (sous les fruits)
- 1 c.à.s de sucre (saupoudrage)
- Quelques aiguilles de romarin
- 1 jaune + 1 c.à.s de lait (dorure)

## Préparation

1. Préparation. Sablez du bout des doigts les farines, le sucre, le sel et le beurre froid, ou à la feuille du robot, très brièvement. Incorporez le jaune d’œuf, éventuellement un filet d’eau froide. Filmez et réservez 30 min au froid.
2. Marinade. Travaillez le beurre pommade avec le sucre, puis incorporez l’œuf, la poudre d’amandes et le romarin haché, ainsi qu’un peu d’eau-de-vie de mirabelle ou de rhum si vous en mettez.
3. Cuisson. Préchauffez le four à 200 °C. Abaissez la pâte sur 4 mm d’épaisseur, sur papier, en un disque d’environ 28 cm. Piquez-la. Saupoudrez 1 c.à.s de poudre d’amandes au centre, en laissant 5 cm de bord.
4. Étaler la crème d’amandes. Étalez la crème d’amandes. Rangez les mirabelles bien serrées, coupe vers le haut. Saupoudrez de sucre et parsemez de quelques aiguilles de romarin.
5. Cuisson. Rabattez le bord en plis rustiques. Dorez au jaune délayé de lait. Enfournez 40–45 min à 200 °C : la pâte doit être colorée, les fruits fondants, sans tomber en compote.
6. Tiède. Servez tiède : le romarin cuit doit rester un parfum, pas un rôti.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco`
