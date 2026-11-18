---
schema: recette-web-jigme/v2
slug: oeufs-tikka-masala
title: Œufs tikka masala
lang: fr
description: "Œufs tikka masala : recette indienne avec oeuf, yaourt nature et coriandre en poudre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: salé
tags:
- salé
- curry
- végétarien
- oeuf
image:
  url:
  alt: Œufs tikka masala
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/oeufs-tikka-masala.md
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
    - from: yaourt nature
      to: yaourt sans lactose
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
    - from: yaourt de soja nature
      to: yaourt de coco
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; yaourt de soja nature → yaourt de coco.'
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
histoire: 'Tikka masala : morceaux marinés au yaourt, sauce tomate-crème. / plat indo-britannique, souvent
  au poulet. On raconte une naissance à Glasgow (Ali Ahmed Aslam) ; ce n’est pas tranché. Ici, l’œuf remplace
  le poulet : variante végétarienne, pas un canon indien.

  '
fun_facts:
- text: >
    Tikka désigne d’abord la pièce grillée ; masala, la sauce. Sans grill, ce
    n’est plus tout à fait un tikka.
  source_name: Grokipedia, Tikka (food)
  source_url: https://grokipedia.com/page/Tikka_(food)
- text: >
    Le beurre (butter chicken) et le tikka masala se ressemblent ; le second est
    souvent plus tomate, plus « resto britannique ».
  source_name: Wikipedia, Chicken tikka masala
  source_url: https://en.wikipedia.org/wiki/Chicken_tikka_masala
wines:
- name: Gewurztraminer
  producer: Cave de Hunawihr
  origin: Hunawihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, légèrement sucré — le piment et la crème, sans un rouge tannique.
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — la tomate épicée, acidité nette.
- name: Côtes du Rhône
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, poivre — si l’on veut un rouge, tanin souple à côté de la crème.
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
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: yaourt nature
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: coriandre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cumin en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
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
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamome verte
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 30
      unit: g
      item: noix de cajou
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates fraîches (ou pelées/concentré si ce n'est pas la saison)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: des feuilles de fenugrec
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
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire du riz et des oeufs pendant 10 minutes avant de les écaler. Ajoutez la
      moitié des épices sur les oeufs afin qu’ils en soient bien recouverts, puis faites-les
      revenir dans une poêle.
    - Finition. Dans un saladier, mélangez le yaourt et le reste d’épices. Dans une poêle, faites revenir
      les graines de cumin, les oignons et l’ail puis rajouter le mélange yaourt/épices et
      les tomates. Ajoutez les oeufs et laissez mijoter à feu doux pendant quelques minutes.
      Pour le dressage, versez les oeufs et la sauce sur le riz, un peu de coriandre fraîche
      sur le dessus et c’est déjà prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire du riz et des œufs pendant 10 minutes avant de les écaler. Ajoutez la moitié des épices sur les œufs afin qu’ils en soient bien recouverts, puis faites-les revenir dans une poêle."
      - "Finition. Dans un saladier, mélangez le yaourt et le reste d’épices. Dans une poêle, faites revenir les graines de cumin, les oignons et l’ail puis rajoutez le mélange yaourt/épices et les tomates. Ajoutez les œufs et [[mijoter|laissez mijoter]] à feu doux pendant quelques minutes. Pour le dressage, versez les œufs et la sauce sur le riz, un peu de coriandre fraîche sur le dessus."
      pro:
      - "Cuire du riz et des œufs 10 minutes. Écaler. Recouvrir les œufs de la moitié des épices. Faire revenir dans une poêle."
      - "Mélanger le yaourt et le reste d’épices dans un saladier. Faire revenir graines de cumin, oignons et ail. Rajouter le mélange yaourt/épices et les tomates. Ajouter les œufs. Mijoter à feu doux quelques minutes. Dresser : œufs et sauce sur le riz, un peu de coriandre fraîche sur le dessus."
      cavernes:
      - "Cuisson. Riz, œufs, 10 min, cuire. Écaler. Moitié épices, œufs, recouvrir. Poêle, revenir."
      - "Finition. Saladier. Yaourt, reste épices, mélanger. Poêle. Graines de cumin, oignons, ail, revenir. Mélange yaourt/épices, tomates, rajouter. Œufs, ajouter. Feu doux, quelques minutes, mijoter. Dressage. Œufs, sauce, riz, verser. Coriandre fraîche, peu, dessus."
    kcal_per_serving: 274
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 274
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: yaourt de soja nature
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: coriandre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cumin en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon rouge
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
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamome verte
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 30
      unit: g
      item: noix de cajou
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates fraîches (ou pelées/concentré si ce n'est pas la saison)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: des feuilles de fenugrec
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
    - Faites cuire du riz. Coupez le tofu ferme en gros cubes, enrobez-les de la moitié des épices, puis faites-les dorer dans une poêle.
    - Finition. Dans un saladier, mélangez le yaourt de soja et le reste d’épices. Dans une poêle, faites revenir
      les graines de cumin, les oignons et l’ail puis rajouter le mélange yaourt/épices et
      les tomates. Ajoutez les cubes de tofu et laissez mijoter à feu doux. Pour le dressage, versez le tofu et la sauce sur le riz,
      un peu de coriandre fraîche sur le dessus et c’est déjà prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Faites cuire du riz. Coupez le tofu ferme en gros cubes, enrobez-les de la moitié des épices, puis faites-les dorer dans une poêle."
      - "Finition. Dans un saladier, mélangez le yaourt de soja et le reste d’épices. Dans une poêle, faites revenir les graines de cumin, les oignons et l’ail puis rajoutez le mélange yaourt/épices et les tomates. Ajoutez les cubes de tofu et [[mijoter|laissez mijoter]] à feu doux. Pour le dressage, versez le tofu et la sauce sur le riz, un peu de coriandre fraîche sur le dessus."
      pro:
      - "Cuire du riz. Couper le tofu ferme en gros cubes. Enrober de la moitié des épices. Dorer dans une poêle."
      - "Mélanger le yaourt de soja et le reste d’épices dans un saladier. Faire revenir graines de cumin, oignons et ail. Rajouter le mélange yaourt/épices et les tomates. Ajouter les cubes de tofu. Mijoter à feu doux. Dresser : tofu et sauce sur le riz, un peu de coriandre fraîche sur le dessus."
      cavernes:
      - "Riz, cuire. Tofu ferme, gros cubes, couper. Moitié épices, enrober. Poêle, dorer."
      - "Finition. Saladier. Yaourt de soja, reste épices, mélanger. Poêle. Graines de cumin, oignons, ail, revenir. Mélange yaourt/épices, tomates, rajouter. Cubes tofu, ajouter. Feu doux, mijoter. Dressage. Tofu, sauce, riz, verser. Coriandre fraîche, peu, dessus."
    kcal_per_serving: 274
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 274
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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

# Œufs tikka masala
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/oeufs-tikka-masala]]

## Ingrédients (4 personnes)

- 8 oeuf
- 1 yaourt nature
- 2 càs de coriandre en poudre
- 2 càs de cumin en poudre
- 2 oignon rouge
- 2 gousse d'ail
- 10 g de gingembre
- 1 càs de graines de cumin
- 4 cardamome verte
- 1 poignée de noix de cajou
- 400 g de tomates fraîches (ou pelées/concentré si ce n'est pas la saison)
- 1 citron
-  de la coriandre
-  des feuilles de fenugrec
-  beurre

## Préparation

1. Faites cuire du riz et des oeufs pendant 10 minutes avant de les écaler. Ajoutez la moitié des épices sur les oeufs afin qu’ils en soient bien recouverts, puis faites-les revenir dans une poêle.
2. Dans un saladier, mélangez le yaourt et le reste d’épices. Dans une poêle, faites revenir les graines de cumin, les oignons et l’ail puis rajouter le mélange yaourt/épices et les tomates. Ajoutez les oeufs et laissez mijoter à feu doux pendant quelques minutes.

 
 

 
 Pour le dressage, versez les oeufs et la sauce sur le riz, un peu de coriandre fraîche sur le dessus et c’est déjà prêt ! Bon appétit !
