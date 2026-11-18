---
schema: recette-web-jigme/v2
slug: papillote-de-saumon
title: Papillote de saumon
lang: fr
description: "Papillote de saumon : recette française avec filet de saumon, courgette et tomate, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- saumon
- plat
- filet de saumon
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/papillote-de-saumon.webp
  alt: Papillote de saumon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/papillote-de-saumon.md
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
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Lactose : halloumi ou tofu fumé → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Produits laitiers : halloumi ou tofu fumé → tofu ferme.'
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
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
    - from: halloumi ou tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    note: 'Soja : halloumi ou tofu fumé → pois chiches rôtis ; tofu fumé → pois chiches rôtis.'
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
histoire: 'Cuisson en papillote : l’aliment est scellé dans une feuille (papier, feuille d’alu) et cuit
  au four, à la vapeur de son propre jus. Geste français attesté vers le XVIIe s. (une source). Le saumon
  s’y prête : gras, il ne sèche pas.

  '
fun_facts:
- text: 'On ferme hermétique : si ça fuit, ce n’est plus une vapeur, c’est un four sec.

    '
  source_name: Grokipedia, Parchment paper
  source_url: https://grokipedia.com/page/Parchment_paper
- text: 'Citron, aneth, vin blanc : la papillote parfume sans nappe ; trop de liquide, le poisson poche.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Papillote de saumon ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Papillote
wines:
- name: Sancerre
  producer: Henri Bourgeois
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex, agrume — le saumon et le citron de la papillote.
- name: Muscadet Sèvre-et-Maine
  producer: Luneau-Papin
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — le poisson, sans un chardonnay boisé.
- name: Graves
  producer: Château Villa Bel-Air
  origin: Graves, Bordeaux
  grapes: sauvignon, sémillon
  award:
  why: Blanc de graviers — le saumon gras, un peu plus de corps.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 20
      rest_min: 0
      total_min: 60
    equipment: &id002
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: filet de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez
      ensuite les carottes et les courgettes, puis coupez-les en julienne (bâtonnets très
      fins).
    - Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote.
      Disposez-y successivement les rondelles de tomates, les juliennes de carottes et de
      courgettes.
    - Cuisson. Déposez votre filet de saumon sur les légumes. Vous pouvez y ajouter du thym, du laurier
      ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote.
    - Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois
      la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu
      sur une assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez ensuite les carottes et les courgettes, puis coupez-les [[julienne|en julienne]] (bâtonnets très fins)."
      - "Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote. Disposez-y successivement les rondelles de tomates, les [[julienne|juliennes]] de carottes et de courgettes."
      - "Cuisson. Déposez votre filet de saumon sur les légumes. Vous pouvez y ajouter du thym, du laurier ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote."
      - "Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu sur une assiette."
      pro:
      - "Découper les tomates en rondelles. Éplucher carottes et courgettes. Couper en julienne (bâtonnets très fins)."
      - "Disposer sur une feuille d’aluminium ou de papier cuisson, en papillote : rondelles de tomates, puis juliennes de carottes et de courgettes."
      - "Déposer le filet de saumon sur les légumes. Ajouter thym, laurier et un peu d’huile d’olive, au choix. Assaisonner. Refermer la papillote."
      - "Enfourner à 180°C, chaleur tournante, 15 à 20 minutes. Déguster à même la papillote ou dresser sur assiette."
      cavernes:
      - "Préparation. Légumes, préparer. Tomates, rondelles. Carottes, courgettes, éplucher. Julienne (bâtonnets très fins), couper."
      - "Cuisson. Feuille aluminium ou papier cuisson, papillote. Rondelles tomates, juliennes carottes et courgettes, disposer."
      - "Cuisson. Filet saumon, légumes, déposer. Thym, laurier, peu huile d’olive, possible. Assaisonner goût. Papillote, refermer."
      - "Cuisson. Papillotes, 180°C chaleur tournante, 15 à 20 minutes. Cuisson finie : même papillote, déguster, ou contenu, assiette, dresser."
    kcal_per_serving: 233
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
    - pesco
    allergens:
    - soja
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: halloumi ou tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez
      ensuite les carottes et les courgettes, puis coupez-les en julienne (bâtonnets très
      fins).
    - Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote.
      Disposez-y successivement les rondelles de tomates, les juliennes de carottes et de
      courgettes.
    - Cuisson. Déposez votre halloumi ou tofu fumé sur les légumes. Vous pouvez y ajouter du thym,
      du laurier ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez
      la papillote.
    - Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois
      la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu
      sur une assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez ensuite les carottes et les courgettes, puis coupez-les [[julienne|en julienne]] (bâtonnets très fins)."
      - "Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote. Disposez-y successivement les rondelles de tomates, les [[julienne|juliennes]] de carottes et de courgettes."
      - "Cuisson. Déposez votre halloumi ou tofu fumé sur les légumes. Vous pouvez y ajouter du thym, du laurier ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote."
      - "Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu sur une assiette."
      pro:
      - "Découper les tomates en rondelles. Éplucher carottes et courgettes. Couper en julienne (bâtonnets très fins)."
      - "Disposer sur une feuille d’aluminium ou de papier cuisson, en papillote : rondelles de tomates, puis juliennes de carottes et de courgettes."
      - "Déposer le halloumi ou le tofu fumé sur les légumes. Ajouter thym, laurier et un peu d’huile d’olive, au choix. Assaisonner. Refermer la papillote."
      - "Enfourner à 180°C, chaleur tournante, 15 à 20 minutes. Déguster à même la papillote ou dresser sur assiette."
      cavernes:
      - "Préparation. Légumes, préparer. Tomates, rondelles. Carottes, courgettes, éplucher. Julienne (bâtonnets très fins), couper."
      - "Cuisson. Feuille aluminium ou papier cuisson, papillote. Rondelles tomates, juliennes carottes et courgettes, disposer."
      - "Cuisson. Halloumi ou tofu fumé, légumes, déposer. Thym, laurier, peu huile d’olive, possible. Assaisonner goût. Papillote, refermer."
      - "Cuisson. Papillotes, 180°C chaleur tournante, 15 à 20 minutes. Cuisson finie : même papillote, déguster, ou contenu, assiette, dresser."
    kcal_per_serving: 118
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
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
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez
      ensuite les carottes et les courgettes, puis coupez-les en julienne (bâtonnets très
      fins).
    - Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote.
      Disposez-y successivement les rondelles de tomates, les juliennes de carottes et de
      courgettes.
    - Cuisson. Déposez votre tofu fumé sur les légumes. Vous pouvez y ajouter du thym, du laurier ainsi
      qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote.
    - Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois
      la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu
      sur une assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez ensuite les carottes et les courgettes, puis coupez-les [[julienne|en julienne]] (bâtonnets très fins)."
      - "Cuisson. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote. Disposez-y successivement les rondelles de tomates, les [[julienne|juliennes]] de carottes et de courgettes."
      - "Cuisson. Déposez votre tofu fumé sur les légumes. Vous pouvez y ajouter du thym, du laurier ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote."
      - "Cuisson. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes. Une fois la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu sur une assiette."
      pro:
      - "Découper les tomates en rondelles. Éplucher carottes et courgettes. Couper en julienne (bâtonnets très fins)."
      - "Disposer sur une feuille d’aluminium ou de papier cuisson, en papillote : rondelles de tomates, puis juliennes de carottes et de courgettes."
      - "Déposer le tofu fumé sur les légumes. Ajouter thym, laurier et un peu d’huile d’olive, au choix. Assaisonner. Refermer la papillote."
      - "Enfourner à 180°C, chaleur tournante, 15 à 20 minutes. Déguster à même la papillote ou dresser sur assiette."
      cavernes:
      - "Préparation. Légumes, préparer. Tomates, rondelles. Carottes, courgettes, éplucher. Julienne (bâtonnets très fins), couper."
      - "Cuisson. Feuille aluminium ou papier cuisson, papillote. Rondelles tomates, juliennes carottes et courgettes, disposer."
      - "Cuisson. Tofu fumé, légumes, déposer. Thym, laurier, peu huile d’olive, possible. Assaisonner goût. Papillote, refermer."
      - "Cuisson. Papillotes, 180°C chaleur tournante, 15 à 20 minutes. Cuisson finie : même papillote, déguster, ou contenu, assiette, dresser."
    kcal_per_serving: 118
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
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 233
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegetarienne:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
  vegan:
    julienne:
      terme: "julienne"
      explication: "Vous taillez le légume ou le fruit en bâtonnets fins et réguliers. Vous cherchez une coupe égale, plus longue que large. C’est réussi quand les bâtonnets sont fins et du même calibre."
      ref: Cuisine/Lexique/julienne.md
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

# Papillote de saumon

![[papillote-de-saumon.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/papillote-de-saumon.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/papillote-de-saumon]]

## Ingrédients (4 personnes)

- 4 filet de saumon
- 2 courgette
- 2 tomate
- 2 carotte
-  d'huile d'olive
-  thym
-  laurier

## Préparation

1. Commencez par préparer les légumes. Pour cela, découpez les tomates en rondelles. Épluchez ensuite les carottes et les courgettes, puis coupez-les en julienne (bâtonnets très fins).
2. Placez devant vous la feuille d’aluminium ou de papier cuisson qui vous servira de papillote. Disposez-y successivement les rondelles de tomates, les juliennes de carottes et de courgettes.
3. Déposez votre filet de saumon sur les légumes. Vous pouvez y ajouter du thym, du laurier ainsi qu’un peu d’huile d’olive. Assaisonnez à votre goût, puis refermez la papillote.
4. Enfournez les papillotes à 180°C (chaleur tournante) pendant 15 à 20 minutes.

 
 

 
 Une fois la cuisson terminée, vous pouvez déguster à même la papillote ou bien dresser son contenu sur une assiette. Bon appétit !
