---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: tarte-poire-noix
title: Tarte poire noix
lang: fr
description: "Tarte poire noix : recette française de pâte sucrée, poires, cerneaux et crème, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: sucré
tags:
- sucré
- poire
- noix
- tarte
image:
  url:
  alt: Tarte poire noix
  credit:
source_fiche: ""
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
    clears: []
    swaps: []
    note: Pâte sans gluten du commerce.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Noix : version poire seule."
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Tarte aux poires sur pâte sucrée, cerneaux de noix, parfois crème d’amande ou nappage miel. Plat d’automne, poires Williams ou Conférence. La noix rappelle les tartes du Périgord et du Dauphiné."
fun_facts:
- text: "Une tarte fruit se cuit souvent à blanc d’abord, pour éviter une pâte détrempée."
  source_name: "Wikipedia FR, Tarte"
  source_url: "https://fr.wikipedia.org/wiki/Tarte"
- text: La poire Williams tient mieux au four qu’une poire trop mûre.
  source_name: "Wikipedia FR, Williams (poire)"
  source_url: "https://fr.wikipedia.org/wiki/Williams_(poire)"
- text: "Les noix se rajoutent en fin de cuisson, sinon elles brûlent."
  source_name: "Wikipedia FR, Tarte"
  source_url: "https://fr.wikipedia.org/wiki/Tarte"
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux, poire et noix."
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, tarte d’automne."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, pâte et fruit."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - moule à tarte
    - four
    substitutions:
    - from: pâte sucrée
      to: pâte brisée
      note: Moins sucrée.
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: pâte sucrée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: poires
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: cerneaux de noix
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: crème liquide
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Fond. Foncez le moule avec la pâte sucrée et piquez-la. Enfournez 10 min à 180 °C."
    - "Poires. Épluchez les poires, coupez-les en tranches et disposez-les."
    - "Nappage. Mélangez l’œuf, la crème liquide et le sucre. Ajoutez les cerneaux de noix et des noisettes de beurre."
    - "Cuisson. Enfournez 30 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Fond. [[foncer|Foncez]] le moule avec la pâte sucrée et piquez-la. Enfournez 10 min à 180 °C."
      - "Poires. Épluchez les poires, coupez-les en tranches et disposez-les."
      - "[[napper|Nappage]]. Mélangez l’œuf, la crème liquide et le sucre. Ajoutez les cerneaux de noix et des noisettes de beurre."
      - "Cuisson. Enfournez 30 min à 180 °C."
      pro:
      - "Foncer le moule avec la pâte sucrée et piquer. Enfourner 10 min à 180 °C."
      - "Éplucher les poires, les couper en tranches et les disposer."
      - "Mélanger l’œuf, la crème liquide et le sucre. Ajouter les cerneaux de noix et des noisettes de beurre."
      - "Enfourner 30 min à 180 °C."
      cavernes:
      - "Fond. Moule, pâte sucrée, foncer. Piquer. Four 180 °C, 10 min."
      - "Poires. Poires, éplucher, tranches, disposer."
      - "Nappage. Œuf, crème liquide, sucre, mélanger. Cerneaux noix, noisettes beurre, ajouter."
      - "Cuisson. Four 180 °C, 30 min."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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
    - gluten
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - moule à tarte
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: pâte brisée végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: poires
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: cerneaux de noix
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: huile de coco
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Fond. Foncez avec la pâte brisée végétale. Enfournez 10 min à 180 °C."
    - "Poires. Disposez les poires en tranches, avec le sucre, l’huile de coco et le lait d’avoine."
    - "Noix. Ajoutez les cerneaux de noix en fin de cuisson, pour 30 min au total."
    steps_niveaux:
      amateur:
      - "Fond. [[foncer|Foncez]] avec la pâte brisée végétale. Enfournez 10 min à 180 °C."
      - "Poires. Disposez les poires en tranches, avec le sucre, l’huile de coco et le lait d’avoine."
      - "Noix. Ajoutez les cerneaux de noix en fin de cuisson, pour 30 min au total."
      pro:
      - "Foncer avec la pâte brisée végétale. Enfourner 10 min à 180 °C."
      - "Disposer les poires en tranches, avec le sucre, l’huile de coco et le lait d’avoine."
      - "Ajouter les cerneaux de noix en fin de cuisson, pour 30 min au total."
      cavernes:
      - "Fond. Pâte brisée végétale, foncer. Four 180 °C, 10 min."
      - "Poires. Poires, tranches, sucre, huile de coco, lait d’avoine, disposer."
      - "Noix. Cerneaux noix, fin cuisson, ajouter. 30 min total."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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
  frigo: {duree: 2 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte poire noix

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 250 g pâte sucrée
- 4 piece poires
- 80 g cerneaux de noix
- 20 g beurre doux
- 30 g sucre
- 1 piece œuf
- 50 ml crème liquide

## Préparation

1. Fond. Foncez le moule avec la pâte sucrée et piquez-la. Enfournez 10 min à 180 °C.
2. Poires. Épluchez les poires, coupez-les en tranches et disposez-les.
3. Nappage. Mélangez l’œuf, la crème liquide et le sucre. Ajoutez les cerneaux de noix et des noisettes de beurre.
4. Cuisson. Enfournez 30 min à 180 °C.
