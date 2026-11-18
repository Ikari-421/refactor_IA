---
schema: recette-web-jigme/v2
slug: tarte-tatin
title: Tarte Tatin
lang: fr
description: "Tarte Tatin : recette française avec pommes royal gala, sucre et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tarte
- végétarien
- pommes royal gala
image:
  url:
  alt: Tarte Tatin
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-tatin.md
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
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
histoire: 'Tarte Tatin : pommes caramélisées dans un moule, pâte par-dessus, cuite puis retournée. On
  raconte les sœurs Tatin, à Lamotte-Beuvron (Sologne) ; l’anecdote de la tarte « ratée » retournée n’est
  pas tranchée.

  '
fun_facts:
- text: >
    Des pommes fermes (canada, reinettes) tiennent le caramel ; une farineuse
    se défait.
  source_name: Usage
  source_url:
- text: >
    On retourne encore chaude : trop froide, le caramel colle au moule.
  source_name: Grokipedia, Tarte Tatin
  source_url: https://grokipedia.com/page/Tarte_Tatin
wines:
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin — la pomme caramélisée, sucré-acide.
- name: Vouvray
  producer: Champalou
  origin: Vouvray, Loire
  grapes: chenin
  award:
  why: Chenin tendre — le caramel, sans un sauternes de prestige.
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — la tarte, sans un champagne.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: &id003
    - four
    - casserole
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes royal gala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: badiane (anis étoilé)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Lavez et épluchez les pommes, puis coupez-les en quartiers bien égaux et enlevez les
      trognons. Frottez-les avec un demi citron pour éviter qu’ils ne noircissent.
    - 'Cuisson. Passons au caramel : dans une casserole, ajoutez le sucre et faites chauffer à feu
      moyen jusqu’à ce que vous obteniez une belle couleur brune.'
    - Cuisson. Pendant que le caramel cuit, coupez votre vanille en deux et ajoutez les graines de
      vanille dans le beurre.
    - Cuisson. Une fois que le caramel a obtenu sa couleur bien brune, ajoutez le beurre petit à petit
      tout en remuant pour bien l’incorporer. Versez enfin le mélange obtenu au fond du plat
      à tatin en prenant soin de bien l’étaler sur toute la surface du plat.
    - 'Cuisson. Disposez gracieusement la badiane et la gousse de vanille. Ajoutez les pommes en prenant
      soin de bien les serrer entre elles : elles vont en effet ramollir avec la cuisson,
      si vous laissez trop d’espace, elles ne se tiendront plus !'
    - Cuisson. Piquez votre pâte feuilletée et disposez-la sur vos pommes, puis retroussez les bords.
    - Cuisson. Enfournez enfin une trentaine de minutes au four à 180°C. Vérifiez de temps en temps
      la cuisson à l’aide d’un couteau en le plantant dans la tarte. Si les pommes ne présentent
      aucune résistance, c’est que c’est cuit !
    - 'Cuisson. Une fois votre tarte cuite et sortie du four, il est temps de passer au spectacle !
      Disposez un plat, face vers le bas, sur votre tarte, puis saisissez fermement le tout
      et retournez d’un geste sûr. La tarte tatin est un dessert qui demande de la minutie,
      mais qui, si elle est réussie, séduit tous les palais : accompagnée d’une boule de glace
      à la vanille, elle fera l’unanimité à coup sûr !'
    steps_niveaux:
      amateur:
      - "Préparation. Lavez et épluchez les pommes, puis coupez-les en quartiers bien égaux et enlevez les trognons. Frottez-les avec un demi citron pour éviter qu’ils ne noircissent."
      - "Cuisson. Passez au caramel : dans une casserole, ajoutez le sucre et faites chauffer à feu moyen jusqu’à ce que vous obteniez une belle couleur brune."
      - "Cuisson. Pendant que le caramel cuit, coupez votre vanille en deux et ajoutez les graines de vanille dans le beurre."
      - "Cuisson. Une fois que le caramel a obtenu sa couleur bien brune, ajoutez le beurre petit à petit tout en remuant pour bien l’incorporer. Versez enfin le mélange obtenu au fond du plat à tatin en prenant soin de bien l’étaler sur toute la surface du plat."
      - "Cuisson. Disposez gracieusement la badiane et la gousse de vanille. Ajoutez les pommes en prenant soin de bien les serrer entre elles : elles vont en effet ramollir avec la cuisson, si vous laissez trop d’espace, elles ne se tiendront plus."
      - "Cuisson. Piquez votre pâte feuilletée et disposez-la sur vos pommes, puis retroussez les bords."
      - "Cuisson. Enfournez enfin une trentaine de minutes au four à 180°C. Vérifiez de temps en temps la cuisson à l’aide d’un couteau en le plantant dans la tarte. Si les pommes ne présentent aucune résistance, c’est que c’est cuit."
      - "Cuisson. Une fois votre tarte cuite et sortie du four, disposez un plat, face vers le bas, sur votre tarte, puis saisissez fermement le tout et retournez d’un geste sûr. Accompagnez d’une boule de glace à la vanille."
      pro:
      - "Laver et éplucher les pommes, les couper en quartiers bien égaux et enlever les trognons. Frotter avec un demi citron pour éviter qu’ils ne noircissent."
      - "Caramel : dans une casserole, ajouter le sucre et faire chauffer à feu moyen jusqu’à belle couleur brune."
      - "Pendant que le caramel cuit, couper la vanille en deux et ajouter les graines de vanille dans le beurre."
      - "Une fois le caramel bien brun, ajouter le beurre petit à petit tout en remuant pour l’incorporer. Verser le mélange au fond du plat à tatin et l’étaler sur toute la surface."
      - "Disposer la badiane et la gousse de vanille. Ajouter les pommes bien serrées entre elles : elles ramollissent à la cuisson ; trop d’espace, elles ne se tiennent plus."
      - "Piquer la pâte feuilletée, la disposer sur les pommes, puis retrousser les bords."
      - "Enfourner une trentaine de minutes à 180°C. Vérifier de temps en temps la cuisson à l’aide d’un couteau planté dans la tarte. Pommes sans résistance : cuit."
      - "Tarte cuite, sortir du four. Disposer un plat, face vers le bas, sur la tarte, saisir fermement et retourner d’un geste sûr. Servir avec une boule de glace à la vanille."
      cavernes:
      - "Préparation. Pommes, laver, éplucher, quartiers égaux, couper. Trognons, enlever. Demi citron, frotter, pas noircir."
      - "Cuisson. Caramel. Casserole, sucre, feu moyen, chauffer. Belle couleur brune."
      - "Cuisson. Pendant caramel. Vanille, couper en deux. Graines vanille, beurre, ajouter."
      - "Cuisson. Caramel brun. Beurre, petit à petit, remuer, incorporer. Mélange, fond plat tatin, verser, étaler surface."
      - "Cuisson. Badiane, gousse vanille, disposer. Pommes, serrer. Cuisson, ramollir. Trop espace : plus tenir."
      - "Cuisson. Pâte feuilletée, piquer, poser dessus pommes. Bords, retrousser."
      - "Cuisson. Four 180°C, trentaine min. Couteau, planter, vérifier. Pommes zéro résistance : cuit."
      - "Cuisson. Tarte cuite, four, sortir. Plat, face bas, dessus tarte. Tout, saisir, retourner. Glace vanille, boule."
    kcal_per_serving: 395
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 395
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
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
    - qty: 1000
      unit: g
      item: pommes royal gala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: badiane (anis étoilé)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Lavez et épluchez les pommes, puis coupez-les en quartiers bien égaux et enlevez les
      trognons. Frottez-les avec un demi citron pour éviter qu’ils ne noircissent.
    - 'Cuisson. Passons au caramel : dans une casserole, ajoutez le sucre et faites chauffer à feu
      moyen jusqu’à ce que vous obteniez une belle couleur brune.'
    - Cuisson. Pendant que le caramel cuit, coupez votre vanille en deux et ajoutez les graines de vanille dans la margarine végétale.
    - Mélange. Une fois que le caramel a obtenu sa couleur bien brune, ajoutez la margarine végétale petit à petit tout en remuant pour bien l’incorporer. Versez enfin le mélange obtenu au fond du plat
      à tatin en prenant soin de bien l’étaler sur toute la surface du plat.
    - 'Cuisson. Disposez gracieusement la badiane et la gousse de vanille. Ajoutez les pommes en prenant
      soin de bien les serrer entre elles : elles vont en effet ramollir avec la cuisson,
      si vous laissez trop d’espace, elles ne se tiendront plus !'
    - Cuisson. Piquez votre pâte feuilletée et disposez-la sur vos pommes, puis retroussez les bords.
    - Cuisson. Enfournez enfin une trentaine de minutes au four à 180°C. Vérifiez de temps en temps
      la cuisson à l’aide d’un couteau en le plantant dans la tarte. Si les pommes ne présentent
      aucune résistance, c’est que c’est cuit !
    - 'Cuisson. Une fois votre tarte cuite et sortie du four, il est temps de passer au spectacle !
      Disposez un plat, face vers le bas, sur votre tarte, puis saisissez fermement le tout
      et retournez d’un geste sûr. La tarte tatin est un dessert qui demande de la minutie,
      mais qui, si elle est réussie, séduit tous les palais : accompagnée d’une boule de glace
      à la vanille, elle fera l’unanimité à coup sûr !'
    steps_niveaux:
      amateur:
      - "Préparation. Lavez et épluchez les pommes, puis coupez-les en quartiers bien égaux et enlevez les trognons. Frottez-les avec un demi citron pour éviter qu’ils ne noircissent."
      - "Cuisson. Passez au caramel : dans une casserole, ajoutez le sucre et faites chauffer à feu moyen jusqu’à ce que vous obteniez une belle couleur brune."
      - "Cuisson. Pendant que le caramel cuit, coupez votre vanille en deux et ajoutez les graines de vanille dans la margarine végétale."
      - "Mélange. Une fois que le caramel a obtenu sa couleur bien brune, ajoutez la margarine végétale petit à petit tout en remuant pour bien l’incorporer. Versez enfin le mélange obtenu au fond du plat à tatin en prenant soin de bien l’étaler sur toute la surface du plat."
      - "Cuisson. Disposez gracieusement la badiane et la gousse de vanille. Ajoutez les pommes en prenant soin de bien les serrer entre elles : elles vont en effet ramollir avec la cuisson, si vous laissez trop d’espace, elles ne se tiendront plus."
      - "Cuisson. Piquez votre pâte feuilletée et disposez-la sur vos pommes, puis retroussez les bords."
      - "Cuisson. Enfournez enfin une trentaine de minutes au four à 180°C. Vérifiez de temps en temps la cuisson à l’aide d’un couteau en le plantant dans la tarte. Si les pommes ne présentent aucune résistance, c’est que c’est cuit."
      - "Cuisson. Une fois votre tarte cuite et sortie du four, disposez un plat, face vers le bas, sur votre tarte, puis saisissez fermement le tout et retournez d’un geste sûr. Accompagnez d’une boule de glace à la vanille."
      pro:
      - "Laver et éplucher les pommes, les couper en quartiers bien égaux et enlever les trognons. Frotter avec un demi citron pour éviter qu’ils ne noircissent."
      - "Caramel : dans une casserole, ajouter le sucre et faire chauffer à feu moyen jusqu’à belle couleur brune."
      - "Pendant que le caramel cuit, couper la vanille en deux et ajouter les graines de vanille dans la margarine végétale."
      - "Une fois le caramel bien brun, ajouter la margarine végétale petit à petit tout en remuant pour l’incorporer. Verser le mélange au fond du plat à tatin et l’étaler sur toute la surface."
      - "Disposer la badiane et la gousse de vanille. Ajouter les pommes bien serrées entre elles : elles ramollissent à la cuisson ; trop d’espace, elles ne se tiennent plus."
      - "Piquer la pâte feuilletée, la disposer sur les pommes, puis retrousser les bords."
      - "Enfourner une trentaine de minutes à 180°C. Vérifier de temps en temps la cuisson à l’aide d’un couteau planté dans la tarte. Pommes sans résistance : cuit."
      - "Tarte cuite, sortir du four. Disposer un plat, face vers le bas, sur la tarte, saisir fermement et retourner d’un geste sûr. Servir avec une boule de glace à la vanille."
      cavernes:
      - "Préparation. Pommes, laver, éplucher, quartiers égaux, couper. Trognons, enlever. Demi citron, frotter, pas noircir."
      - "Cuisson. Caramel. Casserole, sucre, feu moyen, chauffer. Belle couleur brune."
      - "Cuisson. Pendant caramel. Vanille, couper en deux. Graines vanille, margarine végétale, ajouter."
      - "Mélange. Caramel brun. Margarine végétale, petit à petit, remuer, incorporer. Mélange, fond plat tatin, verser, étaler surface."
      - "Cuisson. Badiane, gousse vanille, disposer. Pommes, serrer. Cuisson, ramollir. Trop espace : plus tenir."
      - "Cuisson. Pâte feuilletée, piquer, poser dessus pommes. Bords, retrousser."
      - "Cuisson. Four 180°C, trentaine min. Couteau, planter, vérifier. Pommes zéro résistance : cuit."
      - "Cuisson. Tarte cuite, four, sortir. Plat, face bas, dessus tarte. Tout, saisir, retourner. Glace vanille, boule."
    kcal_per_serving: 266
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 395
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

# Tarte Tatin
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-tatin]]

## Ingrédients (6 personnes)

- 1 kg de pommes royal gala
- 250 g de sucre
- 110 g de beurre
- 1 gousse de vanille
- 1 pâte feuilletée
-  badiane (anis étoilé)

## Préparation

1. Lavez et épluchez les pommes, puis coupez-les en quartiers bien égaux et enlevez les trognons. Frottez-les avec un demi citron pour éviter qu’ils ne noircissent.
2. Passons au caramel : dans une casserole, ajoutez le sucre et faites chauffer à feu moyen jusqu’à ce que vous obteniez une belle couleur brune.
3. Pendant que le caramel cuit, coupez votre vanille en deux et ajoutez les graines de vanille dans le beurre.
4. Une fois que le caramel a obtenu sa couleur bien brune, ajoutez le beurre petit à petit tout en remuant pour bien l’incorporer. Versez enfin le mélange obtenu au fond du plat à tatin en prenant soin de bien l’étaler sur toute la surface du plat.
5. Disposez gracieusement la badiane et la gousse de vanille. Ajoutez les pommes en prenant soin de bien les serrer entre elles : elles vont en effet ramollir avec la cuisson, si vous laissez trop d’espace, elles ne se tiendront plus !
6. Piquez votre pâte feuilletée et disposez-la sur vos pommes, puis retroussez les bords.
7. Enfournez enfin une trentaine de minutes au four à 180°C. Vérifiez de temps en temps la cuisson à l’aide d’un couteau en le plantant dans la tarte. Si les pommes ne présentent aucune résistance, c’est que c’est cuit !
8. Une fois votre tarte cuite et sortie du four, il est temps de passer au spectacle ! Disposez un plat, face vers le bas, sur votre tarte, puis saisissez fermement le tout et retournez d’un geste sûr.

 
 

 
 La tarte tatin est un dessert qui demande de la minutie, mais qui, si elle est réussie, séduit tous les palais : accompagnée d’une boule de glace à la vanille, elle fera l’unanimité à coup sûr !
