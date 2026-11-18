---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: falafels
title: Falafels
lang: fr
description: "Falafels : recette française avec pois chiches, tofu et oignon, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: moyen-orientale
category: salé
tags:
- salé
- entrée
- végane
- pois chiches
image:
  url:
  alt: Falafels
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/falafels.md
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
    - from: sauce soja salée
      to: tamari sans gluten
      note:
    note: 'Gluten : sauce soja salée → tamari sans gluten.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: tofu
      to: pois chiches rôtis
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
histoire: 'Beignet de légumineuses, herbes et épices. Origine la plus probable en Égypte (taameya, fèves),
  puis cuisine de rue au Levant, souvent aux pois chiches. On raconte un rôle de jeûne copte ; les sources
  premières manquent.

  '
fun_facts:
- text: "En Égypte, la taameya se fait surtout à la fève ; au Levant, le pois chiche domine."
  source_name: Grokipedia, Falafel
  source_url: https://grokipedia.com/page/Falafel
- text: "Une pâte trop mouillée explose à la friture ; trop sèche, le beignet casse."
  source_name: Usage
  source_url:
wines:
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — la friture et le pois chiche, vin maigre.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Fraise, herbes — le persil et le cumin, un rosé.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Maisdon-sur-Sèvre, Muscadet
  grapes: melon de Bourgogne
  award:
  why: Agrume — le tahini ou la sauce, sans tanin.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - soja
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 5
      rest_min: 0
      total_min: 45
    equipment: &id002
    - four
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 130
      unit: g
      item: pois chiches
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 20
      unit: g
      item: sauce soja salée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 14
      unit: g
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mélange 4 épices
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: yaourt nature
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Si vous utilisez des pois chiches secs (ce qui est mieux pour cette recette), pensez
      à les mettre à tremper la veille dans un grand volume d’eau froide.
    - Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir le tout dans une poêle
      chaude avec un filet d’huile végétale.
    - Mélange. Quand les oignons sont commencent à colorer, ajoutez du cumin, du mélange quatre épices
      et du piment en poudre pour relever le goût. Déglacer le mélange avec un peu de sauce
      soja puis placez le tout dans la cuve d’un robot.
    - Cuisson. Ajoutez les pois chiches et la coriandre fraiche. Complétez avec du tofu pour donner
      de l’onctuosité à la recette. Mixez le tout jusqu’à obtenir un mélange homogène.
    - Cuisson. Débarrassez la préparation dans un récipient. N’hésitez pas à ré-assaisonner selon vos
      goûts.
    - Finition. Formez des boules de la taille d’une grosse noix à l’aide de vos mains. Mettez de la
      fleur de farine sur la paume de vos mains pour que ce soit plus facile. Placez-les ensuite
      dans la friteuse à 170°C jusqu’à ce qu’elle soit bien dorées. Débarrassez sur du papier
      absorbant. C’est prêt ! Dégustez les falafels seules ou comme accompagnement. Si vous
      cherchez de l’inspiration, elles sont parfois utilisées dans des sandwich de pain pita,
      accompagnées de crudités et d’une sauce au yaourt de soja. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Si vous utilisez des pois chiches secs (ce qui est mieux pour cette recette), mettez-les à tremper la veille dans un grand volume d’eau froide."
      - "Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir le tout dans une poêle chaude avec un filet d’huile végétale."
      - "Mélange. Quand les oignons commencent à colorer, ajoutez du cumin, du mélange quatre épices et du piment en poudre. [[deglacer|Déglacez]] le mélange avec un peu de sauce soja, puis placez le tout dans la cuve d’un robot."
      - "Cuisson. Ajoutez les pois chiches et la coriandre fraiche. Complétez avec du tofu. Mixez jusqu’à obtenir un mélange homogène."
      - "Cuisson. Débarrassez la préparation dans un récipient. Ré-assaisonnez selon vos goûts."
      - "Finition. Formez des boules de la taille d’une grosse noix. Mettez de la fleur de farine sur la paume de vos mains. Placez-les dans la friteuse à 170°C jusqu’à ce qu’elles soient bien dorées. Débarrassez sur du papier absorbant. Servez les falafels seules ou en accompagnement, parfois en sandwich de pain pita, avec des crudités et une sauce au yaourt de soja."
      pro:
      - "Préparation. Si pois chiches secs : tremper la veille dans un grand volume d’eau froide."
      - "Cuisson. Éplucher et couper finement l’oignon et l’ail. Faire revenir dans une poêle chaude avec un filet d’huile végétale."
      - "Mélange. Dès coloration des oignons : cumin, mélange quatre épices, piment en poudre. Déglacer avec un peu de sauce soja. Verser dans la cuve d’un robot."
      - "Cuisson. Ajouter pois chiches, coriandre fraiche et tofu. Mixer jusqu’à mélange homogène."
      - "Cuisson. Débarrasser dans un récipient. Ré-assaisonner."
      - "Finition. Former des boules de la taille d’une grosse noix, fleur de farine aux paumes. Friteuse 170°C jusqu’à bien doré. Débarrasser sur papier absorbant. Servir seules, en accompagnement ou en sandwich pita, crudités, sauce au yaourt de soja."
      cavernes:
      - "Préparation. Pois chiches secs, tremper veille, eau froide."
      - "Cuisson. Oignon, ail, éplucher, couper fin. Poêle chaude, filet huile végétale, revenir."
      - "Mélange. Oignons, colorer. Cumin, mélange quatre épices, piment poudre, ajouter. Peu sauce soja, déglacer. Cuve robot."
      - "Cuisson. Pois chiches, coriandre fraiche, tofu, ajouter. Mixer jusqu’à homogène."
      - "Cuisson. Préparation, récipient, débarrasser. Ré-assaisonner."
      - "Finition. Boules taille grosse noix, former. Fleur farine, paume. Friteuse 170°C jusqu’à bien doré. Papier absorbant. Servir. Pain pita, crudités, sauce yaourt soja."
    kcal_per_serving: 224
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - soja
    - gluten
    - lactose
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 224
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    - gluten
    difficulty: 2
    time:
      prep_min: 40
      cook_min: 5
      rest_min: 0
      total_min: 45
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 130
      unit: g
      item: pois chiches
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
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
    - qty: 20
      unit: g
      item: sauce soja salée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 14
      unit: g
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: mélange 4 épices
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: yaourt de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Si vous utilisez des pois chiches secs (ce qui est mieux pour cette recette), pensez
      à les mettre à tremper la veille dans un grand volume d’eau froide.
    - Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir le tout dans une poêle
      chaude avec un filet d’huile végétale.
    - Mélange. Quand les oignons sont commencent à colorer, ajoutez du cumin, du mélange quatre épices
      et du piment en poudre pour relever le goût. Déglacer le mélange avec un peu de sauce
      soja puis placez le tout dans la cuve d’un robot.
    - Cuisson. Ajoutez les pois chiches et la coriandre fraiche. Complétez avec du tofu pour donner
      de l’onctuosité à la recette. Mixez le tout jusqu’à obtenir un mélange homogène.
    - Cuisson. Débarrassez la préparation dans un récipient. N’hésitez pas à ré-assaisonner selon vos
      goûts.
    - Finition. Formez des boules de la taille d’une grosse noix à l’aide de vos mains. Mettez de la
      fleur de farine sur la paume de vos mains pour que ce soit plus facile. Placez-les ensuite
      dans la friteuse à 170°C jusqu’à ce qu’elle soit bien dorées. Débarrassez sur du papier
      absorbant. C’est prêt ! Dégustez les falafels seules ou comme accompagnement. Si vous
      cherchez de l’inspiration, elles sont parfois utilisées dans des sandwich de pain pita,
      accompagnées de crudités et d’une sauce au yaourt de soja. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Si vous utilisez des pois chiches secs (ce qui est mieux pour cette recette), mettez-les à tremper la veille dans un grand volume d’eau froide."
      - "Cuisson. Épluchez et coupez finement l’oignon et l’ail. Faites revenir le tout dans une poêle chaude avec un filet d’huile végétale."
      - "Mélange. Quand les oignons commencent à colorer, ajoutez du cumin, du mélange quatre épices et du piment en poudre. [[deglacer|Déglacez]] le mélange avec un peu de sauce soja, puis placez le tout dans la cuve d’un robot."
      - "Cuisson. Ajoutez les pois chiches et la coriandre fraiche. Complétez avec du tofu. Mixez jusqu’à obtenir un mélange homogène."
      - "Cuisson. Débarrassez la préparation dans un récipient. Ré-assaisonnez selon vos goûts."
      - "Finition. Formez des boules de la taille d’une grosse noix. Mettez de la fleur de farine sur la paume de vos mains. Placez-les dans la friteuse à 170°C jusqu’à ce qu’elles soient bien dorées. Débarrassez sur du papier absorbant. Servez les falafels seules ou en accompagnement, parfois en sandwich de pain pita, avec des crudités et une sauce au yaourt de soja."
      pro:
      - "Préparation. Si pois chiches secs : tremper la veille dans un grand volume d’eau froide."
      - "Cuisson. Éplucher et couper finement l’oignon et l’ail. Faire revenir dans une poêle chaude avec un filet d’huile végétale."
      - "Mélange. Dès coloration des oignons : cumin, mélange quatre épices, piment en poudre. Déglacer avec un peu de sauce soja. Verser dans la cuve d’un robot."
      - "Cuisson. Ajouter pois chiches, coriandre fraiche et tofu. Mixer jusqu’à mélange homogène."
      - "Cuisson. Débarrasser dans un récipient. Ré-assaisonner."
      - "Finition. Former des boules de la taille d’une grosse noix, fleur de farine aux paumes. Friteuse 170°C jusqu’à bien doré. Débarrasser sur papier absorbant. Servir seules, en accompagnement ou en sandwich pita, crudités, sauce au yaourt de soja."
      cavernes:
      - "Préparation. Pois chiches secs, tremper veille, eau froide."
      - "Cuisson. Oignon, ail, éplucher, couper fin. Poêle chaude, filet huile végétale, revenir."
      - "Mélange. Oignons, colorer. Cumin, mélange quatre épices, piment poudre, ajouter. Peu sauce soja, déglacer. Cuve robot."
      - "Cuisson. Pois chiches, coriandre fraiche, tofu, ajouter. Mixer jusqu’à homogène."
      - "Cuisson. Préparation, récipient, débarrasser. Ré-assaisonner."
      - "Finition. Boules taille grosse noix, former. Fleur farine, paume. Friteuse 170°C jusqu’à bien doré. Papier absorbant. Servir. Pain pita, crudités, sauce yaourt soja."
    kcal_per_serving: 224
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - soja
    - gluten
    - lactose
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 224
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegan:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
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

# Falafels
**Équipement :** [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 2 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/falafels]]

## Ingrédients (2 personnes)

- 130 g de pois chiches
- 130 g de tofu
- 1 oignon
- 2 gousse d'ail
- 20 g de sauce soja salée
- 14 g d'huile d'olive
- 1 c.à.c de cumin
-  mélange 4 épices
-  coriandre fraîche

## Préparation

1. Si vous utilisez des pois chiches secs (ce qui est mieux pour cette recette), pensez à les mettre à tremper la veille dans un grand volume d’eau froide.
2. Épluchez et coupez finement l’oignon et l’ail. Faites revenir le tout dans une poêle chaude avec un filet d’huile végétale.
3. Quand les oignons sont commencent à colorer, ajoutez du cumin, du mélange quatre épices et du piment en poudre pour relever le goût. Déglacer le mélange avec un peu de sauce soja puis placez le tout dans la cuve d’un robot.
4. Ajoutez les pois chiches et la coriandre fraiche. Complétez avec du tofu pour donner de l’onctuosité à la recette. Mixez le tout jusqu’à obtenir un mélange homogène.
5. Débarrassez la préparation dans un récipient. N’hésitez pas à ré-assaisonner selon vos goûts.
6. Formez des boules de la taille d’une grosse noix à l’aide de vos mains. Mettez de la fleur de farine sur la paume de vos mains pour que ce soit plus facile. Placez-les ensuite dans la friteuse à 170°C jusqu’à ce qu’elle soit bien dorées. Débarrassez sur du papier absorbant.

 
 

 
 C’est prêt ! Dégustez les falafels seules ou comme accompagnement. Si vous cherchez de l’inspiration, elles sont parfois utilisées dans des sandwich de pain pita, accompagnées de crudités et d’une sauce au yaourt. Bon appétit !
