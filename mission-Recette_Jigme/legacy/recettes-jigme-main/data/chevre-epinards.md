---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: chevre-epinards
title: Chèvre épinards
lang: fr
description: "Chèvre épinards : recette française avec pâte à tarte, oeuf et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- tarte
- chèvre
- épinards
image:
  url:
  alt: Chèvre épinards
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/chevre-epinards.md
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
    - from: pâte à tarte
      to: pâte sans gluten
      note:
    note: 'Gluten : pâte à tarte → pâte sans gluten.'
  sans_lactose:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (fromage de chèvre) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; crème de soja ou avoine → crème d''avoine.'
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
  Tarte ou tian chèvre-épinards : assemblage de cuisine familiale française, pas un
  mets médiéval. Le chèvre de Valençay ou de crottin sur verdure est un geste de
  chèvre chaude / quiche, XXe s. de table.
fun_facts:
- text: "Les épinards dégorgent : on les serre, sinon la pâte bave."
  source_name: Usage
  source_url:
- text: "Un chèvre trop jeune fond en flaque ; trop sec, il reste en grumeaux."
  source_name: Usage
  source_url:
wines:
- name: Sancerre
  producer: François Cotat
  origin: Chavignol, Sancerre
  grapes: sauvignon
  award:
  why: Buis, chèvre — l’accord classique. (cuvees village, pas les parcellaires hors budget.)
- name: Quincy
  producer: Jean-Michel Sorbe
  origin: Quincy
  grapes: sauvignon
  award:
  why: Agrume — épinards et chèvre, moins cher qu’un Sancerre de pointe.
- name: Reuilly
  producer: Denis Jamain
  origin: Reuilly, Centre-Loire
  grapes: sauvignon
  award:
  why: Pierre, citron — même famille, autre rive.
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
    - oeuf
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - poêle
    - saladier
    - fouet
    - moule / plat
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte à tarte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: fromage de chèvre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: épinards frais
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pignon de pin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez les pignons de pin et les noix dans deux plats différents allant au four. Faites
      les torréfier à 180°C. Sortez-les dès qu’ils sont bien dorés (la durée ne sera pas la
      même pour les deux ingrédients).
    - Cuisson. Dans une poêle, faites fondre une généreuse noix de beurre. Ajoutez ensuite une partie
      des pousses d’épinards. Salez et poivrez en fonction de vos goûts. Piquez une demi-gousse
      d’ail sur la pointe d’une fourchette et servez-vous de celle-ci pour mélanger les épinards.
      Quand c’est cuit (en moins d’une minute), égouttez les épinards et réservez. Recommencez
      l’opération jusqu’à avoir cuit toutes les pousses.
    - Cuisson. Foncez la pâte dans un plat à tarte (retrouvez la recette de la pâte feuilletée ici).
      Disposez les épinards de manière homogène sur le fond de tarte et réservez.
    - Cuisson. Dans un récipient (ou dans la cuve d’un mixeur), cassez deux oeufs, ajoutez la crème,
      le chèvre coulant, du sel et du poivre. Mélangez à l’aide d’un fouet (ou mixez). Versez
      cet appareil dans le fond de tarte, par-dessus les épinards.
    - Finition. Saupoudrez le tout de pignons de pins et de noix torréfiés, puis complétez avec quelques
      rondelles de fromage de chèvre. Enfournez la tarte à 180°C pendant environ 30 minutes.
      C’est prêt ! Dégustez une généreuse part de tarte bien chaude, accompagnée d’une salade
      verte ou d’un mélange de crudité. Bon appétit !
    steps_niveaux:
      amateur:
      - "Torréfaction. Placez les pignons de pin et les noix dans deux plats différents allant au four. Faites-les torréfier à 180°C. Sortez-les dès qu’ils sont bien dorés (la durée ne sera pas la même pour les deux)."
      - "Épinards. Dans une poêle, faites fondre une généreuse noix de beurre. Ajoutez une partie des pousses d’épinards. Salez et poivrez selon vos goûts. Piquez une demi-gousse d’ail sur la pointe d’une fourchette et mélangez les épinards avec. Quand c’est cuit (en moins d’une minute), égouttez et réservez. Recommencez jusqu’à avoir cuit toutes les pousses."
      - "Foncer. [[foncer|Foncez]] la pâte dans un plat à tarte. Disposez les épinards de manière homogène sur le fond de tarte et réservez."
      - "Appareil. Dans un récipient (ou dans la cuve d’un mixeur), cassez deux œufs, ajoutez la crème, le chèvre coulant, du sel et du poivre. Mélangez à l’aide d’un fouet (ou mixez). Versez cet appareil dans le fond de tarte, par-dessus les épinards."
      - "Four. Saupoudrez de pignons de pin et de noix torréfiés, puis complétez avec quelques rondelles de fromage de chèvre. Enfournez à 180°C pendant environ 30 minutes."
      pro:
      - "Disposer pignons de pin et noix dans deux plats différents. Torréfier à 180°C. Sortir dès qu’ils sont bien dorés (durées distinctes)."
      - "Faire fondre une généreuse noix de beurre dans une poêle. Ajouter une partie des pousses d’épinards. Saler, poivrer. Piquer une demi-gousse d’ail sur la pointe d’une fourchette et mélanger les épinards. Cuire moins d’une minute, égoutter, réserver. Recommencer jusqu’à cuisson de toutes les pousses."
      - "Foncer la pâte dans un plat à tarte. Disposer les épinards de manière homogène sur le fond. Réserver."
      - "Casser deux œufs dans un récipient (ou cuve de mixeur). Ajouter la crème, le chèvre coulant, sel et poivre. Fouetter ou mixer. Verser l’appareil sur les épinards, dans le fond de tarte."
      - "Saupoudrer de pignons de pin et noix torréfiés. Compléter de rondelles de fromage de chèvre. Enfourner à 180°C environ 30 minutes."
      cavernes:
      - "Torréfaction. Pignons de pin, noix, deux plats four. Torréfier 180°C. Dorés, sortir. Durée pas même."
      - "Épinards. Poêle. Généreuse noix de beurre, fondre. Partie pousses d’épinards, ajouter. Sel, poivre. Demi-gousse d’ail, pointe fourchette, piquer. Épinards, mélanger. Cuit moins 1 minute, égoutter, réserver. Recommencer jusqu’à toutes pousses."
      - "Foncer. Pâte, plat tarte, foncer. Épinards, fond tarte, homogène. Réserver."
      - "Appareil. Récipient ou mixeur. Deux œufs, casser. Crème, chèvre coulant, sel, poivre, ajouter. Fouet ou mixer. Appareil, fond tarte, épinards, verser."
      - "Four. Pignons de pin, noix torréfiés, saupoudrer. Rondelles fromage de chèvre. Four 180°C environ 30 minutes."
    kcal_per_serving: 300
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
    - oeuf
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 300
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
    - fruits_a_coque
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte brisée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: épinards frais
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pignon de pin
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noix
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
    steps:
    - Cuisson. Placez les pignons de pin et les noix dans deux plats différents allant au four. Faites
      les torréfier à 180°C. Sortez-les dès qu’ils sont bien dorés (la durée ne sera pas la
      même pour les deux ingrédients).
    - Cuisson. Dans une poêle, faites fondre une généreuse noix de margarine végétale.
      Ajoutez ensuite une partie des pousses d’épinards. Salez et poivrez en fonction de vos
      goûts. Piquez une demi-gousse d’ail sur la pointe d’une fourchette et servez-vous de
      celle-ci pour mélanger les épinards. Quand c’est cuit (en moins d’une minute), égouttez
      les épinards et réservez. Recommencez l’opération jusqu’à avoir cuit toutes les pousses.
    - Cuisson. Foncez la pâte dans un plat à tarte (retrouvez la recette de la pâte feuilletée ici).
      Disposez les épinards de manière homogène sur le fond de tarte et réservez.
    - Mixage. Dans un récipient (ou dans la cuve d’un mixeur), versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf), ajoutez la crème de soja ou d’avoine, le fromage végétal, du sel et du poivre. Mélangez à l’aide d’un fouet (ou mixez). Versez cet appareil dans le fond
      de tarte, par-dessus les épinards.
    - Finition. Saupoudrez le tout de pignons de pins et de noix torréfiés, puis complétez avec quelques
      rondelles de fromage végétal. Enfournez la tarte à 180°C pendant environ 30 minutes.
      C’est prêt ! Dégustez une généreuse part de tarte bien chaude, accompagnée d’une salade
      verte ou d’un mélange de crudité. Bon appétit !
    steps_niveaux:
      amateur:
      - "Torréfaction. Placez les pignons de pin et les noix dans deux plats différents allant au four. Faites-les torréfier à 180°C. Sortez-les dès qu’ils sont bien dorés (la durée ne sera pas la même pour les deux)."
      - "Épinards. Dans une poêle, faites fondre une généreuse noix de margarine végétale. Ajoutez une partie des pousses d’épinards. Salez et poivrez selon vos goûts. Piquez une demi-gousse d’ail sur la pointe d’une fourchette et mélangez les épinards avec. Quand c’est cuit (en moins d’une minute), égouttez et réservez. Recommencez jusqu’à avoir cuit toutes les pousses."
      - "Foncer. [[foncer|Foncez]] la pâte dans un plat à tarte. Disposez les épinards de manière homogène sur le fond de tarte et réservez."
      - "Mixage. Dans un récipient (ou dans la cuve d’un mixeur), versez le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf), ajoutez la crème de soja ou d’avoine, le fromage végétal, du sel et du poivre. Mélangez à l’aide d’un fouet (ou mixez). Versez cet appareil dans le fond de tarte, par-dessus les épinards."
      - "Four. Saupoudrez de pignons de pin et de noix torréfiés, puis complétez avec quelques rondelles de fromage végétal. Enfournez à 180°C pendant environ 30 minutes."
      pro:
      - "Disposer pignons de pin et noix dans deux plats différents. Torréfier à 180°C. Sortir dès qu’ils sont bien dorés (durées distinctes)."
      - "Faire fondre une généreuse noix de margarine végétale dans une poêle. Ajouter une partie des pousses d’épinards. Saler, poivrer. Piquer une demi-gousse d’ail sur la pointe d’une fourchette et mélanger les épinards. Cuire moins d’une minute, égoutter, réserver. Recommencer jusqu’à cuisson de toutes les pousses."
      - "Foncer la pâte dans un plat à tarte. Disposer les épinards de manière homogène sur le fond. Réserver."
      - "Verser le tofu soyeux (ou l’œuf de lin, 1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) dans un récipient (ou cuve de mixeur). Ajouter la crème de soja ou d’avoine, le fromage végétal, sel et poivre. Fouetter ou mixer. Verser l’appareil sur les épinards, dans le fond de tarte."
      - "Saupoudrer de pignons de pin et noix torréfiés. Compléter de rondelles de fromage végétal. Enfourner à 180°C environ 30 minutes."
      cavernes:
      - "Torréfaction. Pignons de pin, noix, deux plats four. Torréfier 180°C. Dorés, sortir. Durée pas même."
      - "Épinards. Poêle. Généreuse noix de margarine végétale, fondre. Partie pousses d’épinards, ajouter. Sel, poivre. Demi-gousse d’ail, pointe fourchette, piquer. Épinards, mélanger. Cuit moins 1 minute, égoutter, réserver. Recommencer jusqu’à toutes pousses."
      - "Foncer. Pâte, plat tarte, foncer. Épinards, fond tarte, homogène. Réserver."
      - "Mixage. Récipient ou mixeur. Tofu soyeux ou œuf de lin, 1 c.à.s. lin + 3 c.à.s. d’eau par œuf, verser. Crème de soja ou d’avoine, fromage végétal, sel, poivre, ajouter. Fouet ou mixer. Appareil, fond tarte, épinards, verser."
      - "Four. Pignons de pin, noix torréfiés, saupoudrer. Rondelles fromage végétal. Four 180°C environ 30 minutes."
    kcal_per_serving: 146
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
    - oeuf
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 300
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
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
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Chèvre épinards
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/chevre-epinards]]

## Ingrédients (4 personnes)

- 1 pâte à tarte
- 2 oeuf
- 25 cL de crème liquide
- 1 bûche de fromage de chèvre
- 500 g d'épinards frais
-  pignon de pin
-  noix
-  beurre

## Préparation

1. Placez les pignons de pin et les noix dans deux plats différents allant au four. Faites les torréfier à 180°C. Sortez-les dès qu’ils sont bien dorés (la durée ne sera pas la même pour les deux ingrédients).
2. Dans une poêle, faites fondre une généreuse noix de beurre. Ajoutez ensuite une partie des pousses d’épinards. Salez et poivrez en fonction de vos goûts. Piquez une demi-gousse d’ail sur la pointe d’une fourchette et servez-vous de celle-ci pour mélanger les épinards. Quand c’est cuit (en moins d’une minute), égouttez les épinards et réservez. Recommencez l’opération jusqu’à avoir cuit toutes les pousses.
3. Foncez la pâte dans un plat à tarte (retrouvez la recette de la pâte feuilletée ici). Disposez les épinards de manière homogène sur le fond de tarte et réservez.
4. Dans un récipient (ou dans la cuve d’un mixeur), cassez deux oeufs, ajoutez la crème, le chèvre coulant, du sel et du poivre. Mélangez à l’aide d’un fouet (ou mixez). Versez cet appareil dans le fond de tarte, par-dessus les épinards.
5. Saupoudrez le tout de pignons de pins et de noix torréfiés, puis complétez avec quelques rondelles de fromage de chèvre. Enfournez la tarte à 180°C pendant environ 30 minutes.

 
 

 
 C’est prêt ! Dégustez une généreuse part de tarte bien chaude, accompagnée d’une salade verte ou d’un mélange de crudité. Bon appétit !
