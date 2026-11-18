---
schema: recette-web-jigme/v2
slug: gratin-de-pommes-de-terre
title: Gratin de pommes de terre
lang: fr
description: "Gratin de pommes de terre : recette française avec pommes de terre, fromage râpé et crème liquide, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- gratin
- végétarien
- pommes de terre
image:
  url:
  alt: Gratin de pommes de terre
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gratin-de-pommes-de-terre.md
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
    note: 'Contient lactose (munster (facultatif)) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Gratin dauphinois : pommes de terre crues, fines, cuites dans lait et crème, originaire du
  Dauphiné. On insiste : les tranches s’imprègnent au four, sans précuisson. Le fromage n’est pas obligatoire
  dans la version dauphinoise.

  '
fun_facts:
- text: >
    Un gratin dauphinois « authentique » se passe souvent de fromage ; dès qu’on
    en ajoute, on bascule vers un gratin savoyard ou un gratin « à la dauphinoise ».
  source_name: Grokipedia, Scalloped potatoes
  source_url: https://grokipedia.com/page/Scalloped_potatoes
- text: >
    L’ail frotte le plat : parfum, pas une couche d’ail.
  source_name: Wikipedia, Gratin dauphinois
  source_url: https://en.wikipedia.org/wiki/Gratin_dauphinois
wines:
- name: Apremont
  producer: Jean Perrier et Fils
  origin: Apremont, Savoie
  grapes: jacquère
  award:
  why: Blanc de montagne, poire — la crème et la pomme de terre, sans lourdeur.
- name: Chignin-Bergeron
  producer: André et Michel Quenard
  origin: Chignin, Savoie
  grapes: roussanne
  award:
  why: Blanc ample, abricot — le gras du gratin.
- name: Mondeuse
  producer: Domaine Giachino
  origin: Savoie
  grapes: mondeuse
  award:
  why: Poivre, tanin vif — la crème, un rouge de Savoie plutôt qu’un tanin de sud.
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
      prep_min: 30
      cook_min: 60
      rest_min: 60
      total_min: 150
    equipment: &id002
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: fromage râpé
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
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: munster (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - 'Préparation. Épluchez vos pommes de terre puis coupez-les en tranches fines. Astuce : Mettez-les
      dans de l’eau pour éviter qu’elles s’oxydent (= qu’elles noircissent).'
    - Cuisson. Dans un plat à gratin, disposez une première couche de pommes de terre, puis recouvrez
      de fromage râpé. Ajoutez la crème liquide de façon à tout recouvrir et répétez l’opération
      jusqu’aux 2/3 du plat. N’hésitez pas à assaisonner (sel et poivre) votre plat selon
      vos goûts entre chaque étage réalisé.
    - Cuisson. À l’aide de vos mains, « tassez » les pommes de terre afin de faire remonter la crème
      et de laisser la place pour les derniers ingrédients.
    - Cuisson. Dispersez de l’ail haché finement sur le dernier étage de votre gratin. Pour les amateurs
      de fromage, vous pouvez ajouter du munster coupé grossièrement (c’est le péché mignon
      de Jigmé). Enfin, ajoutez généreusement du fromage râpé.
    - Cuisson. Recouvrez le tout d’une dernière rangée de pommes de terre et ajoutez une dernière fois
      un peu de fromage râpé afin de décorer votre plat. Vous pouvez également disposez quelques
      noisettes de beurre pour dorer le gratin.
    - Cuisson. Enfournez votre gratin à 180°C pendant une heure, en contrôlant régulièrement la cuisson.
      Une fois que le gratin est bien doré, vous pouvez le servir tout chaud avec une viande,
      un poisson ou des légumes de saison. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez vos pommes de terre puis coupez-les en tranches fines. Astuce : mettez-les dans de l’eau pour éviter qu’elles s’oxydent, c’est-à-dire qu’elles noircissent."
      - "Cuisson. Dans un plat à gratin, disposez une première couche de pommes de terre, puis recouvrez de fromage râpé. Ajoutez la crème liquide de façon à tout recouvrir et répétez l’opération jusqu’aux 2/3 du plat. Assaisonnez de sel et de poivre selon vos goûts entre chaque étage."
      - "Cuisson. Avec vos mains, tassez les pommes de terre afin de faire remonter la crème et de laisser la place pour les derniers ingrédients."
      - "Cuisson. Dispersez de l’ail haché finement sur le dernier étage. Pour les amateurs de fromage, vous pouvez ajouter du munster coupé grossièrement. Ajoutez ensuite généreusement du fromage râpé."
      - "Cuisson. Recouvrez le tout d’une dernière rangée de pommes de terre et ajoutez une dernière fois un peu de fromage râpé pour décorer. Vous pouvez aussi disposer quelques noisettes de beurre pour dorer le gratin."
      - "Cuisson. Enfournez à 180 °C pendant une heure, en contrôlant régulièrement la cuisson. Une fois bien doré, servez tout chaud avec une viande, un poisson ou des légumes de saison."
      pro:
      - "Éplucher les pommes de terre. Couper en tranches fines. Réserver dans l’eau pour éviter l’oxydation."
      - "Dans un plat à gratin, alterner couches de pommes de terre et fromage râpé. Recouvrir de crème liquide. Répéter jusqu’aux 2/3 du plat. Assaisonner sel et poivre entre chaque étage."
      - "Tasser à la main pour faire remonter la crème et laisser de la place."
      - "Disperser l’ail haché finement sur le dernier étage. Munster coupé grossièrement, facultatif. Fromage râpé généreusement."
      - "Dernière rangée de pommes de terre. Peu de fromage râpé pour décorer. Noisettes de beurre pour dorer."
      - "Enfourner à 180 °C une heure, contrôler régulièrement. Servir bien doré, tout chaud, avec viande, poisson ou légumes de saison."
      cavernes:
      - "Préparation. Pommes de terre, éplucher, tranches fines. Eau, tremper, éviter oxydation, noircir."
      - "Cuisson. Plat gratin, couche pommes de terre, fromage râpé recouvrir. Crème liquide recouvrir tout. Répéter jusqu’à 2/3 plat. Sel poivre entre étages, goûts."
      - "Cuisson. Mains, tasser pommes de terre. Crème remonter. Place derniers ingrédients."
      - "Cuisson. Ail haché fin, disperser dernier étage. Munster coupé gros, facultatif, péché mignon Jigmé. Fromage râpé généreux."
      - "Cuisson. Dernière rangée pommes de terre. Peu fromage râpé décorer. Noisettes beurre, dorer."
      - "Cuisson. Four 180 °C heure, contrôler régulièrement. Doré. Servir chaud viande, poisson ou légumes saison."
    kcal_per_serving: 438
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
    kcal_per_serving: 438
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
    - pesco
    - vegan
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: fromage végétal
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
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - 'Préparation. Épluchez vos pommes de terre puis coupez-les en tranches fines. Astuce : Mettez-les
      dans de l’eau pour éviter qu’elles s’oxydent (= qu’elles noircissent).'
    - Cuisson. Dans un plat à gratin, disposez une première couche de pommes de terre, puis recouvrez
      de fromage végétal. Ajoutez la crème de soja ou avoine de façon à tout recouvrir et
      répétez l’opération jusqu’aux 2/3 du plat. N’hésitez pas à assaisonner (sel et poivre)
      votre plat selon vos goûts entre chaque étage réalisé.
    - Cuisson. À l’aide de vos mains, « tassez » les pommes de terre afin de faire remonter la crème de soja ou d’avoine et de laisser la place pour les derniers ingrédients.
    - Cuisson. Dispersez de l’ail haché finement sur le dernier étage de votre gratin. Pour les amateurs
      de fromage, vous pouvez ajouter un peu plus de fromage végétal. Enfin, ajoutez-en généreusement.
    - Cuisson. Recouvrez le tout d’une dernière rangée de pommes de terre et ajoutez une dernière fois
      un peu de fromage végétal afin de décorer votre plat. Vous pouvez également disposez
      quelques noisettes de margarine végétale pour dorer le gratin.
    - Cuisson. Enfournez votre gratin à 180°C pendant une heure, en contrôlant régulièrement la cuisson.
      Une fois que le gratin est bien doré, vous pouvez le servir tout chaud avec une viande,
      un poisson ou des légumes de saison. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez vos pommes de terre puis coupez-les en tranches fines. Astuce : mettez-les dans de l’eau pour éviter qu’elles s’oxydent, c’est-à-dire qu’elles noircissent."
      - "Cuisson. Dans un plat à gratin, disposez une première couche de pommes de terre, puis recouvrez de fromage végétal. Ajoutez la crème de soja ou d’avoine de façon à tout recouvrir et répétez l’opération jusqu’aux 2/3 du plat. Assaisonnez de sel et de poivre selon vos goûts entre chaque étage."
      - "Cuisson. Avec vos mains, tassez les pommes de terre afin de faire remonter la crème de soja ou d’avoine et de laisser la place pour les derniers ingrédients."
      - "Cuisson. Dispersez de l’ail haché finement sur le dernier étage. Pour les amateurs de fromage, vous pouvez ajouter un peu plus de fromage végétal. Ajoutez-en ensuite généreusement."
      - "Cuisson. Recouvrez le tout d’une dernière rangée de pommes de terre et ajoutez une dernière fois un peu de fromage végétal pour décorer. Vous pouvez aussi disposer quelques noisettes de margarine végétale pour dorer le gratin."
      - "Cuisson. Enfournez à 180 °C pendant une heure, en contrôlant régulièrement la cuisson. Une fois bien doré, servez tout chaud avec une viande, un poisson ou des légumes de saison."
      pro:
      - "Éplucher les pommes de terre. Couper en tranches fines. Réserver dans l’eau pour éviter l’oxydation."
      - "Dans un plat à gratin, alterner couches de pommes de terre et fromage végétal. Recouvrir de crème de soja ou d’avoine. Répéter jusqu’aux 2/3 du plat. Assaisonner sel et poivre entre chaque étage."
      - "Tasser à la main pour faire remonter la crème de soja ou d’avoine et laisser de la place."
      - "Disperser l’ail haché finement sur le dernier étage. Un peu plus de fromage végétal, facultatif. En ajouter généreusement."
      - "Dernière rangée de pommes de terre. Peu de fromage végétal pour décorer. Noisettes de margarine végétale pour dorer."
      - "Enfourner à 180 °C une heure, contrôler régulièrement. Servir bien doré, tout chaud, avec viande, poisson ou légumes de saison."
      cavernes:
      - "Préparation. Pommes de terre, éplucher, tranches fines. Eau, tremper, éviter oxydation, noircir."
      - "Cuisson. Plat gratin, couche pommes de terre, fromage végétal recouvrir. Crème de soja ou avoine recouvrir tout. Répéter jusqu’à 2/3 plat. Sel poivre entre étages, goûts."
      - "Cuisson. Mains, tasser pommes de terre. Crème de soja ou avoine remonter. Place derniers ingrédients."
      - "Cuisson. Ail haché fin, disperser dernier étage. Fromage végétal, peu plus. Puis généreux."
      - "Cuisson. Dernière rangée pommes de terre. Peu fromage végétal décorer. Noisettes margarine végétale, dorer."
      - "Cuisson. Four 180 °C heure, contrôler régulièrement. Doré. Servir chaud viande, poisson ou légumes saison."
    kcal_per_serving: 249
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
    kcal_per_serving: 438
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
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gratin de pommes de terre
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gratin-de-pommes-de-terre]]

## Ingrédients (4 personnes)

- 1 kg de pommes de terre
- 60 g de fromage râpé
- 25 cL de crème liquide
- 1 gousse d'ail
- 0.5 munster (facultatif)
- 20 g de beurre

## Préparation

1. Épluchez vos pommes de terre puis coupez-les en tranches fines. Astuce : Mettez-les dans de l’eau pour éviter qu’elles s’oxydent (= qu’elles noircissent).
2. Dans un plat à gratin, disposez une première couche de pommes de terre, puis recouvrez de fromage râpé. Ajoutez la crème liquide de façon à tout recouvrir et répétez l’opération jusqu’aux 2/3 du plat. N’hésitez pas à assaisonner (sel et poivre) votre plat selon vos goûts entre chaque étage réalisé.
3. À l’aide de vos mains, « tassez » les pommes de terre afin de faire remonter la crème et de laisser la place pour les derniers ingrédients.
4. Dispersez de l’ail haché finement sur le dernier étage de votre gratin. Pour les amateurs de fromage, vous pouvez ajouter du munster coupé grossièrement (c’est le péché mignon de Jigmé). Enfin, ajoutez généreusement du fromage râpé.
5. Recouvrez le tout d’une dernière rangée de pommes de terre et ajoutez une dernière fois un peu de fromage râpé afin de décorer votre plat. Vous pouvez également disposez quelques noisettes de beurre pour dorer le gratin.
6. Enfournez votre gratin à 180°C pendant une heure, en contrôlant régulièrement la cuisson.

 
 

 
 Une fois que le gratin est bien doré, vous pouvez le servir tout chaud avec une viande, un poisson ou des légumes de saison. Bon appétit !
