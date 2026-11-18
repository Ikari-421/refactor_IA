---
schema: recette-web-jigme/v2
equipment:
- ref: maryse
slug: cheesecake-chocolat-noisettes
title: Cheesecake chocolat noisettes
lang: fr
description: "Cheesecake chocolat noisettes : recette américaine avec petits beurres, beurre fondu et cream cheese, pour 4 personnes. Version maison."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- goûter
- chocolat
- végétarien
image:
  url:
  alt: Cheesecake chocolat noisettes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cheesecake-chocolat-noisettes.md
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
    note: 'Contient gluten (petits beurres) : pas d’adaptation fiable.'
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
    - from: beurre fondu
      to: beurre sans lactose ou clarifié
      note:
    - from: cream cheese
      to: fromage frais sans lactose
      note:
    - from: pâte à tartiner chocolat-noisettes
      to: pâte à tartiner vegan (sans lait)
      note:
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: pâte à tartiner chocolat-noisettes
      to: graines de tournesol
      note:
    - from: noisettes
      to: graines de tournesol
      note:
    note: 'Fruits à coque : pâte à tartiner chocolat-noisettes → graines de tournesol ; noisettes
      → graines de tournesol.'
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
histoire: >
  Le cheesecake new-yorkais, dense et cuit au four, s’est imposé au XXe siècle,
  quand le cream cheese américain a pris la place des fromages frais caillés
  des gâteaux européens. On date souvent cette pâte des années 1870, dans l’État
  de New York : William Lawrence, fromager de Chester, enrichissait un neufchâtel
  à la crème. L’année 1872 circule partout ; les historiens restent plus prudents
  (parfois 1875, parfois 1877 — la décennie, plus qu’un jour d’invention). Le style
  « New York » se fige plus tard, notamment autour des restaurants des années 1920.
  Le duo chocolat-noisette, lui, vient d’ailleurs : à Turin, au XIXe siècle, on mêle
  cacao et noisettes du Piémont — le gianduja, puis les gianduiotti du carnaval.
  Ici, les deux héritages se retrouvent sur une même base biscuitée.
fun_facts:
- text: >
    Le cream cheese new-yorkais n’est pas né un 1872 bien cadré : Lawrence, à Chester,
    enrichit un neufchâtel à la crème dans les années 1870 (1872, 1875 ou 1877 selon
    les récits).
  source_name: The Daily Meal, origines du cream cheese
  source_url: https://www.thedailymeal.com/1349814/complex-origins-cream-cheese-neufchatel/
- text: >
    À Turin, Caffarel présente les gianduiotti au carnaval de 1865 : chocolat et
    noisettes du Piémont, héritiers du gianduja du XIXe siècle.
  source_name: Tuscani Cioccolato, histoire du gianduja
  source_url: https://www.tuscani-cioccolato.com/history-of-gianduja/
wines:
- name: Maury
  producer: Mas Amiel
  origin: Maury
  grapes: grenache
  award:
  why: Cacao — le chocolat du cheese.
- name: Recioto di Soave
  producer: Pieropan
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Amande, miel — la noisette.
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: Banyuls-sur-Mer
  grapes: grenache
  award:
  why: Noix, rancio — noisette et cacao.
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
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 0
      rest_min: 270
      total_min: 300
    equipment: &id002
    - casserole
    - saladier
    - rouleau à pâtisserie
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: petits beurres
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: beurre fondu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: cream cheese
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pâte à tartiner chocolat-noisettes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noisettes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mixage. Pour réaliser le fond du cheesecake, mixez les petits beurres en poudre et transvidez-les
      dans un saladier dans lequel vous y ajouterez le beurre fondu. Mélangez avec vos doigts
      !
    - Mélange. Dès que votre mélange est homogène, placez-le dans un plat à fond amovible et tassez
      le tout de manière uniforme pour obtenir la base de votre cheesecake. Placez-le au frais.
    - Mélange. Dans un saladier, versez 400 g de cream cheese et mélangez afin que la texture soit
      plus souple.
    - Cuisson. Chauffez la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à ce qu’elle
      soit liquide. Une fois fondue, rajoutez la pâte à tartiner au cream cheese et mélangez
      le tout.
    - Mélange. Versez votre mélange homogène sur la base du cheesecake en petits beurres.
    - Cuisson. Étalez la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe.
    - Finition. Écrasez des noisettes (avec un mortier, un rouleau ou un couteau) et disposez-les sur
      le dessus de la préparation. Placez votre cheesecake au frais pendant 5 heures…et ensuite
      vous pouvez vous délecter d’une part de cheesecake chocolat noisette.
    steps_niveaux:
      amateur:
      - "Fond. Mixez les petits beurres en poudre et transvidez-les dans un saladier. Ajoutez le beurre fondu. Mélangez avec vos doigts."
      - "Base. Dès que le mélange est homogène, placez-le dans un plat à fond amovible et tassez de manière uniforme. Placez au frais."
      - "Cream. Dans un saladier, versez 400 g de cream cheese et mélangez jusqu’à texture plus souple."
      - "Pâte. Chauffez la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à ce qu’elle soit liquide. Une fois fondue, ajoutez-la au cream cheese et mélangez."
      - "Montage. Versez le mélange homogène sur la base du cheesecake en petits beurres."
      - "Étaler. Étalez la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe."
      - "Noisettes. Écrasez des noisettes (mortier, rouleau ou couteau) et disposez-les sur le dessus. Placez le cheesecake au frais pendant 5 heures."
      pro:
      - "Mixer les petits beurres en poudre. Transvider dans un saladier. Ajouter le beurre fondu. Mélanger avec les doigts."
      - "Dès homogénéité, placer dans un plat à fond amovible. Tasser de manière uniforme. Placer au frais."
      - "Dans un saladier, verser 400 g de cream cheese. Mélanger jusqu’à texture plus souple."
      - "Chauffer la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à texture liquide. Une fois fondue, ajouter au cream cheese. Mélanger."
      - "Verser le mélange homogène sur la base du cheesecake en petits beurres."
      - "Étaler la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe."
      - "Écraser des noisettes (mortier, rouleau ou couteau). Disposer sur le dessus. Placer le cheesecake au frais pendant 5 heures."
      cavernes:
      - "Fond. Petits beurres, poudre, mixer. Saladier, transvider. Beurre fondu, ajouter. Doigts, mélanger."
      - "Base. Homogène. Plat fond amovible, placer. Tasser uniforme. Frais."
      - "Cream. Saladier. 400 g cream cheese, verser. Mélanger. Texture plus souple."
      - "Pâte. Pâte à tartiner chocolat-noisettes, casserole, chauffer. Liquide. Fondue, cream cheese, ajouter. Mélanger."
      - "Montage. Mélange homogène, base petits beurres, verser."
      - "Étaler. Maryse ou dos cuillère à soupe, étaler."
      - "Noisettes. Noisettes, écraser (mortier, rouleau ou couteau). Dessus, disposer. Frais 5 heures."
    kcal_per_serving: 414
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
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 414
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
    - gluten
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 0
      rest_min: 270
      total_min: 300
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: biscuits vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: pâte à tartiner vegan (sans lait)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noisettes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mixage. Pour réaliser le fond du cheesecake, mixez les biscuits vegan en poudre et transvidez-les
      dans un saladier dans lequel vous y ajouterez la margarine végétale fondue. Mélangez avec vos doigts
      !
    - Mélange. Dès que votre mélange est homogène, placez-le dans un plat à fond amovible et tassez
      le tout de manière uniforme pour obtenir la base de votre cheesecake. Placez-le au frais.
    - Mélange. Dans un saladier, versez 400 g de fromage végétal et mélangez afin que la texture soit
      plus souple.
    - Cuisson. Chauffez la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à ce qu’elle
      soit liquide. Une fois fondue, rajoutez la pâte à tartiner au fromage végétal et mélangez
      le tout.
    - Mélange. Versez votre mélange homogène sur la base du cheesecake en biscuits vegan.
    - Cuisson. Étalez la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe.
    - Finition. Écrasez des noisettes (avec un mortier, un rouleau ou un couteau) et disposez-les sur
      le dessus de la préparation. Placez votre cheesecake au frais pendant 5 heures…et ensuite
      vous pouvez vous délecter d’une part de cheesecake chocolat noisette.
    steps_niveaux:
      amateur:
      - "Fond. Mixez les biscuits vegan en poudre et transvidez-les dans un saladier. Ajoutez la margarine végétale fondue. Mélangez avec vos doigts."
      - "Base. Dès que le mélange est homogène, placez-le dans un plat à fond amovible et tassez de manière uniforme. Placez au frais."
      - "Fromage. Dans un saladier, versez 400 g de fromage végétal et mélangez jusqu’à texture plus souple."
      - "Pâte. Chauffez la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à ce qu’elle soit liquide. Une fois fondue, ajoutez-la au fromage végétal et mélangez."
      - "Montage. Versez le mélange homogène sur la base du cheesecake en biscuits vegan."
      - "Étaler. Étalez la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe."
      - "Noisettes. Écrasez des noisettes (mortier, rouleau ou couteau) et disposez-les sur le dessus. Placez le cheesecake au frais pendant 5 heures."
      pro:
      - "Mixer les biscuits vegan en poudre. Transvider dans un saladier. Ajouter la margarine végétale fondue. Mélanger avec les doigts."
      - "Dès homogénéité, placer dans un plat à fond amovible. Tasser de manière uniforme. Placer au frais."
      - "Dans un saladier, verser 400 g de fromage végétal. Mélanger jusqu’à texture plus souple."
      - "Chauffer la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à texture liquide. Une fois fondue, ajouter au fromage végétal. Mélanger."
      - "Verser le mélange homogène sur la base du cheesecake en biscuits vegan."
      - "Étaler la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe."
      - "Écraser des noisettes (mortier, rouleau ou couteau). Disposer sur le dessus. Placer le cheesecake au frais pendant 5 heures."
      cavernes:
      - "Fond. Biscuits vegan, poudre, mixer. Saladier, transvider. Margarine végétale fondue, ajouter. Doigts, mélanger."
      - "Base. Homogène. Plat fond amovible, placer. Tasser uniforme. Frais."
      - "Fromage. Saladier. 400 g fromage végétal, verser. Mélanger. Texture plus souple."
      - "Pâte. Pâte à tartiner chocolat-noisettes, casserole, chauffer. Liquide. Fondue, fromage végétal, ajouter. Mélanger."
      - "Montage. Mélange homogène, base biscuits vegan, verser."
      - "Étaler. Maryse ou dos cuillère à soupe, étaler."
      - "Noisettes. Noisettes, écraser (mortier, rouleau ou couteau). Dessus, disposer. Frais 5 heures."
    kcal_per_serving: 150
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
    - fruits_a_coque
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 414
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Cheesecake chocolat noisettes
**Équipement :** [[maryse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cheesecake-chocolat-noisettes]]

## Ingrédients (4 personnes)

- 250 g de petits beurres
- 150 g de beurre fondu
- 400 g de cream cheese
- 400 g de pâte à tartiner chocolat-noisettes
-  noisettes

## Préparation

1. Pour réaliser le fond du cheesecake,  mixez les petits beurres en poudre et transvidez-les dans un saladier dans lequel vous y ajouterez le beurre fondu. Mélangez avec vos doigts !
2. Dès que votre mélange est homogène, placez-le dans un plat à fond amovible et tassez le tout de manière uniforme pour obtenir la base de votre cheesecake. Placez-le au frais.
3. Dans un saladier, versez 400 g de cream cheese et mélangez afin que la texture soit plus souple.
4. Chauffez la pâte à tartiner chocolat-noisettes dans une casserole jusqu’à ce qu’elle soit liquide.

Une fois fondue, rajoutez la pâte à tartiner au cream cheese et mélangez le tout.
5. Versez votre mélange homogène sur la base du cheesecake en petits beurres.
6. Étalez la préparation à l’aide d’une maryse ou avec le dos d’une cuillère à soupe.
7. Écrasez des noisettes (avec un mortier, un rouleau ou un couteau) et disposez-les sur le dessus de la préparation.

 
 

 
 Placez votre cheesecake au frais pendant 5 heures…et ensuite vous pouvez vous délecter d’une part de cheesecake chocolat noisette.
