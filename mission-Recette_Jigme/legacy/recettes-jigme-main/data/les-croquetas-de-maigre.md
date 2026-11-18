---
schema: recette-web-jigme/v2
slug: les-croquetas-de-maigre
title: Les croquetas de maigre
lang: fr
description: "Les croquetas de maigre : recette espagnole avec filet de maigre, pomme de terre et échalote, pour 4 personnes. Version maison."
cuisine: espagnole
category: salé
tags:
- salé
- poisson
- plat
- filet de maigre
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/les-croquetas-de-maigre.webp
  alt: Les croquetas de maigre
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/les-croquetas-de-maigre.md
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
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    - from: chapelure
      to: chapelure sans gluten
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (filet de maigre) : pas d’adaptation fiable.'
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
histoire: 'Croqueta : appareil lié (béchamel ou purée), pané, frit. Geste français, très ancré ensuite
  en Espagne. Ici, maigre (poisson) et pomme de terre — croquette de poisson, pas la croqueta de jamón.

  '
fun_facts:
- text: 'L’appareil doit être froid et ferme avant panage : trop chaud, la croquette explose dans l’huile.

    '
  source_name: Usage
  source_url: null
- text: 'Le maigre est un poisson à chair ferme ; il se hache ou s’effeuille, il ne se réduit pas en purée
    comme le cabillaud trop cuit.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Les croquetas de maigre ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Croqueta
wines:
- name: Rueda
  producer: José Pariente
  origin: Rueda, Castille
  grapes: verdejo
  award:
  why: Blanc d’agrumes — le poisson pané, sans un chardonnay boisé.
- name: Rías Baixas
  producer: Martín Códax
  origin: Rías Baixas, Galice
  grapes: albariño
  award:
  why: Albariño, fleur, sel — le maigre et la friture.
- name: Manzanilla
  producer: Hidalgo La Gitana
  origin: Sanlúcar de Barrameda
  grapes: palomino
  award:
  why: Voile, amande — l’apéritif frit, comme une croqueta espagnole.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    - oeuf
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 15
      rest_min: 0
      total_min: 55
    equipment: &id002
    - four
    - poêle
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: filet de maigre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: farine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: chapelure
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de friture
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
    - Préparation. Épluchez les pommes de terre et coupez-les en morceaux grossiers avant de les mettre
      à cuire dans de l’eau à couvert. Disposez vos filets de maigre sur du papier sulfurisé
      pour les cuire à la vapeur (4 à 5 minutes pour un filet de 200 g). Pendant que cela
      cuit, coupez l’échalote et l’ail en petits morceaux.
    - Cuisson. Lorsque les pommes de terre et le poisson sont cuits, débarrassez-les. Écrasez les pommes
      de terre à la fourchette pour en faire une purée grossière et émiettez le maigre avec
      vos doigts. Mélangez les deux préparations ensemble.
    - Cuisson. Dans une poêle chaude huilée, faites cuire l’échalote et l’ail avant de les rajouter
      à votre mélange de pommes de terre et de poisson. Ajoutez la ciboulette ciselée et assaisonnez
      selon vos goûts. Mélangez bien le tout.
    - Finition. À l’aide de vos mains, faites des petites boules avec la préparation obtenue et roulez-les
      dans la farine, puis dans les oeufs et enfin dans la chapelure. Faites frire les croquetas
      jusqu’à coloration en les retournant à mi-cuisson. Pour finir, débarrassez-les sur du
      papier absorbant pour retirer l’excédent d’huile. Vous pouvez déguster vos croquetas
      avec la sauce de votre choix. On vous recommande une crème ciboulette qui devrait les
      sublimer !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terre et coupez-les en morceaux grossiers avant de les mettre à cuire dans de l’eau à couvert. Disposez vos filets de maigre sur du papier sulfurisé pour les cuire à la vapeur (4 à 5 minutes pour un filet de 200 g). Pendant que cela cuit, coupez l’échalote et l’ail en petits morceaux."
      - "Cuisson. Lorsque les pommes de terre et le poisson sont cuits, débarrassez-les. Écrasez les pommes de terre à la fourchette pour en faire une purée grossière et émiettez le maigre avec vos doigts. Mélangez les deux préparations ensemble."
      - "Cuisson. Dans une poêle chaude huilée, faites cuire l’échalote et l’ail avant de les rajouter à votre mélange de pommes de terre et de poisson. Ajoutez la ciboulette ciselée et assaisonnez selon vos goûts. Mélangez bien le tout."
      - "Finition. À l’aide de vos mains, faites des petites boules avec la préparation obtenue et roulez-les dans la farine, puis dans les oeufs et enfin dans la chapelure. [[frire|Faites frire]] les croquetas jusqu’à coloration en les retournant à mi-cuisson. Pour finir, débarrassez-les sur du papier absorbant pour retirer l’excédent d’huile. Vous pouvez déguster vos croquetas avec la sauce de votre choix. On vous recommande une crème ciboulette qui devrait les sublimer !"
      pro:
      - "Éplucher les pommes de terre. Couper en morceaux grossiers. Cuire dans de l’eau à couvert. Disposer les filets de maigre sur du papier sulfurisé. Cuire à la vapeur 4 à 5 minutes pour un filet de 200 g. Pendant ce temps, couper l’échalote et l’ail en petits morceaux."
      - "Débarrasser pommes de terre et poisson. Écraser les pommes de terre à la fourchette en purée grossière. Émietter le maigre. Mélanger."
      - "Poêle chaude huilée : cuire l’échalote et l’ail. Ajouter au mélange pommes de terre et poisson. Ajouter la ciboulette ciselée. Assaisonner. Mélanger."
      - "Former de petites boules. Rouler dans la farine, puis dans les oeufs, puis dans la chapelure. Frire jusqu’à coloration, retourner à mi-cuisson. Débarrasser sur papier absorbant. Servir avec une sauce ; crème ciboulette recommandée."
      cavernes:
      - "Préparation. Pommes de terre, éplucher. Morceaux grossiers, couper. Eau, couvert, cuire. Filets maigre, papier sulfurisé. Vapeur 4 à 5 min, filet 200 g. Pendant, échalote, ail, petits morceaux."
      - "Cuisson. Pommes de terre, poisson, cuits, débarrasser. Pommes de terre, fourchette, écraser, purée grossière. Maigre, émietter, doigts. Mélanger."
      - "Cuisson. Poêle chaude huilée. Échalote, ail, cuire. Rajouter, mélange pommes de terre, poisson. Ciboulette ciselée, ajouter. Assaisonner. Mélanger."
      - "Finition. Mains. Petites boules, former. Farine, oeufs, chapelure, rouler. Croquetas, frire jusqu’à coloration. Mi-cuisson, retourner. Papier absorbant, débarrasser, huile. Sauce, choix. Crème ciboulette, recommander."
    kcal_per_serving: 187
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit: vegan
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 187
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: farine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: chapelure
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de friture
      group:
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
    - Préparation. Épluchez les pommes de terre et coupez-les en morceaux grossiers avant de les mettre
      à cuire dans de l’eau à couvert. Disposez le tofu fumé sur du papier sulfurisé pour le chauffer à la vapeur 4 à 5 minutes. Pendant que cela
      cuit, coupez l’échalote et l’ail en petits morceaux.
    - Mélange. Lorsque les pommes de terre et le tofu sont cuits, débarrassez-les. Écrasez les pommes de terre à la fourchette et émiettez le tofu fumé. Mélangez les deux préparations ensemble.
    - Cuisson. Dans une poêle chaude huilée, faites cuire l’échalote et l’ail avant de les rajouter
      à votre mélange de pommes de terre et de tofu. Ajoutez la ciboulette ciselée et assaisonnez
      selon vos goûts. Mélangez bien le tout.
    - Finition. À l’aide de vos mains, faites des petites boules avec la préparation obtenue et roulez-les
      dans la farine, puis dans l’œuf de lin (ou le tofu soyeux) et enfin dans la chapelure. Faites frire les croquetas jusqu’à coloration en
      les retournant à mi-cuisson. Pour finir, débarrassez-les sur du papier absorbant pour
      retirer l’excédent d’huile. Vous pouvez déguster vos croquetas avec la sauce de votre
      choix. On vous recommande une crème ciboulette qui devrait les sublimer !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez les pommes de terre et coupez-les en morceaux grossiers avant de les mettre à cuire dans de l’eau à couvert. Disposez le tofu fumé sur du papier sulfurisé pour le chauffer à la vapeur 4 à 5 minutes. Pendant que cela cuit, coupez l’échalote et l’ail en petits morceaux."
      - "Mélange. Lorsque les pommes de terre et le tofu sont cuits, débarrassez-les. Écrasez les pommes de terre à la fourchette et émiettez le tofu fumé. Mélangez les deux préparations ensemble."
      - "Cuisson. Dans une poêle chaude huilée, faites cuire l’échalote et l’ail avant de les rajouter à votre mélange de pommes de terre et de tofu. Ajoutez la ciboulette ciselée et assaisonnez selon vos goûts. Mélangez bien le tout."
      - "Finition. À l’aide de vos mains, faites des petites boules avec la préparation obtenue et roulez-les dans la farine, puis dans l’œuf de lin (ou le tofu soyeux) et enfin dans la chapelure. [[frire|Faites frire]] les croquetas jusqu’à coloration en les retournant à mi-cuisson. Pour finir, débarrassez-les sur du papier absorbant pour retirer l’excédent d’huile. Vous pouvez déguster vos croquetas avec la sauce de votre choix. On vous recommande une crème ciboulette qui devrait les sublimer !"
      pro:
      - "Éplucher les pommes de terre. Couper en morceaux grossiers. Cuire dans de l’eau à couvert. Disposer le tofu fumé sur du papier sulfurisé. Chauffer à la vapeur 4 à 5 minutes. Pendant ce temps, couper l’échalote et l’ail en petits morceaux."
      - "Débarrasser pommes de terre et tofu. Écraser les pommes de terre à la fourchette. Émietter le tofu fumé. Mélanger."
      - "Poêle chaude huilée : cuire l’échalote et l’ail. Ajouter au mélange pommes de terre et tofu. Ajouter la ciboulette ciselée. Assaisonner. Mélanger."
      - "Former de petites boules. Rouler dans la farine, puis dans l’œuf de lin (ou le tofu soyeux), puis dans la chapelure. Frire jusqu’à coloration, retourner à mi-cuisson. Débarrasser sur papier absorbant. Servir avec une sauce ; crème ciboulette recommandée."
      cavernes:
      - "Préparation. Pommes de terre, éplucher. Morceaux grossiers, couper. Eau, couvert, cuire. Tofu fumé, papier sulfurisé. Vapeur 4 à 5 min, chauffer. Pendant, échalote, ail, petits morceaux."
      - "Mélange. Pommes de terre, tofu, cuits, débarrasser. Pommes de terre, fourchette, écraser. Tofu fumé, émietter. Mélanger."
      - "Cuisson. Poêle chaude huilée. Échalote, ail, cuire. Rajouter, mélange pommes de terre, tofu. Ciboulette ciselée, ajouter. Assaisonner. Mélanger."
      - "Finition. Mains. Petites boules, former. Farine, œuf de lin ou tofu soyeux, chapelure, rouler. Croquetas, frire jusqu’à coloration. Mi-cuisson, retourner. Papier absorbant, débarrasser, huile. Sauce, choix. Crème ciboulette, recommander."
    kcal_per_serving: 187
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 187
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Les croquetas de maigre

![[les-croquetas-de-maigre.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/les-croquetas-de-maigre]]

## Ingrédients (4 personnes)

- 4 filet de maigre
- 3 pomme de terre
- 2 échalote
- 1 gousse d'ail
-  ciboulette
-  farine
- 2 oeuf
-  chapelure
-  huile de friture

## Préparation

1. Épluchez les pommes de terre et coupez-les en morceaux grossiers avant de les mettre à cuire dans de l’eau à couvert. Disposez vos filets de maigre sur du papier sulfurisé pour les cuire à la vapeur (4 à 5 minutes pour un filet de 200 g). Pendant que cela cuit, coupez l’échalote et l’ail en petits morceaux.
2. Lorsque les pommes de terre et le poisson sont cuits, débarrassez-les. Écrasez les pommes de terre à la fourchette pour en faire une purée grossière et émiettez le maigre avec vos doigts. Mélangez les deux préparations ensemble.
3. Dans une poêle chaude huilée, faites cuire l’échalote et l’ail avant de les rajouter à votre mélange de pommes de terre et de poisson. Ajoutez la ciboulette ciselée et assaisonnez selon vos goûts. Mélangez bien le tout.
4. À l’aide de vos mains, faites des petites boules avec la préparation obtenue et roulez-les dans la farine, puis dans les oeufs et enfin dans la chapelure. Faites frire les croquetas jusqu’à coloration en les retournant à mi-cuisson. Pour finir, débarrassez-les sur du papier absorbant pour retirer l’excédent d’huile.

 
 

 
 Vous pouvez déguster vos croquetas avec la sauce de votre choix. On vous recommande une crème ciboulette qui devrait les sublimer !
