---
schema: recette-web-jigme/v2
slug: gnocchi
title: Gnocchi
lang: fr
description: "Gnocchi : recette italienne avec pommes de terre, oeuf et farine, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- végétarien
- pommes de terre
image:
  url:
  alt: Gnocchi
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gnocchi.md
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
histoire: 'Gnocchi : petites pièces pochées. Ancêtres romains (farine, eau ou semoule) ; la version à
  la pomme de terre se répand dans le nord de l’Italie après l’arrivée de la pomme de terre d’Amérique.
  Le nom viendrait du lombard knohha, « nœud ».

  '
fun_facts:
- text: "Trop de farine, et les gnocchi deviennent des caoutchoucs ; trop peu, ils se délitent à l’eau."
  source_name: Grokipedia, Gnocchi
  source_url: https://grokipedia.com/page/Gnocchi
- text: "Ils sont cuits quand ils remontent à la surface de l’eau salée."
  source_name: Grokipedia, Gnocchi
  source_url: https://grokipedia.com/page/Gnocchi
wines:
- name: Barbera d'Asti
  producer: Coppo
  origin: Asti, Piémont
  grapes: barbera
  award:
  why: Cerise, acidité — la pomme de terre et la sauce, tanin modéré.
- name: Valpolicella
  producer: Allegrini
  origin: Fumane, Vénétie
  grapes: corvina
  award:
  why: Fruit rouge, peu de bois — gnocchi beurre-sauge ou tomate.
- name: Soave
  producer: Inama
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Amande, fleur — si la sauce est au beurre ou aux herbes, un blanc.
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
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 50
      cook_min: 20
      rest_min: 0
      total_min: 70
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - mixeur
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
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fleur de maïs
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Mettez les pommes de terres dans une grande casserole d’eau froide, puis portez à ébullition.
      En fonction de la taille de vos pommes de terre, la cuisson devrait durer entre 15 et
      20 minutes.
    - Cuisson. Une fois cuites, égouttez les pommes de terres, épluchez-les puis écrasez-les à l’aide
      d’un presse purée (ne le faites surtout pas au mixeur).
    - Mélange. Ajoutez la farine et les jaunes d’oeufs. Salez et poivrez selon vos goûts et mélangez
      à la main jusqu’à obtenir une pâte homogène qui se détache du saladier.
    - Cuisson. Fleurez votre plan de travail avec de la fleur de maïs et réalisez des petits boudins
      de pâte. Coupez ces boudins en petits morceaux qui seront vos futurs gnocchi.
    - Cuisson. Pour de magnifiques gnocchi, faites rouler ces petits morceaux de pâte sur le dos d’une
      fourchette en appliquant une légère pression. N’hésitez pas à visionner la vidéo ci-dessous
      pour bien comprendre le geste.
    - Cuisson. Une fois que tout vos gnocchi sont prêts, plongez-les dans l’eau bouillante. Ils devraient
      tomber au fond de la casserole. Une fois qu’ils remontent à la surface, c’est qu’ils
      sont cuits !
    - Finition. Pour finalisez la cuisson, passez les gnocchi dans une poêle chaude avec un peu d’huile
      végétale jusqu’à ce qu’ils soient bien grillés. Ajoutez un peu de persil en fin de cuisson…et
      c’est prêt ! Servez bien chaud, pour accompagner un poisson, une viande ou pour cuisiner
      un plat végétarien. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Mettez les pommes de terre dans une grande casserole d’eau froide, puis portez à ébullition. Selon la taille, la cuisson dure entre 15 et 20 minutes."
      - "Cuisson. Une fois cuites, égouttez les pommes de terre, épluchez-les puis écrasez-les à l’aide d’un presse-purée (ne le faites surtout pas au mixeur)."
      - "Mélange. Ajoutez la farine et les jaunes d’œufs. Salez et poivrez selon vos goûts et mélangez à la main jusqu’à obtenir une pâte homogène qui se détache du saladier."
      - "Cuisson. Fleurez votre plan de travail avec de la fleur de maïs et réalisez des petits boudins de pâte. Coupez ces boudins en petits morceaux : ce seront vos gnocchi."
      - "Cuisson. Faites rouler ces petits morceaux de pâte sur le dos d’une fourchette en appliquant une légère pression."
      - "Cuisson. Plongez les gnocchi dans l’eau bouillante : ils tombent au fond de la casserole. Dès qu’ils remontent à la surface, ils sont cuits."
      - "Finition. Passez les gnocchi dans une poêle chaude avec un peu d’huile végétale jusqu’à ce qu’ils soient bien grillés. Ajoutez un peu de persil en fin de cuisson. Servez bien chaud, pour accompagner un poisson, une viande ou un plat végétarien."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau froide. Porter à ébullition. Cuire 15 à 20 min selon la taille."
      - "Égoutter, éplucher, écraser au presse-purée. Pas de mixeur."
      - "Ajouter farine et jaunes d’œufs. Saler, poivrer. Mélanger à la main jusqu’à pâte homogène qui se détache du saladier."
      - "Fleurer le plan de travail à la fleur de maïs. Former des boudins de pâte. Couper en petits morceaux."
      - "Rouler les morceaux sur le dos d’une fourchette, légère pression."
      - "Plonger dans l’eau bouillante. Ils tombent au fond ; dès qu’ils remontent à la surface, ils sont cuits."
      - "Passer en poêle chaude avec un peu d’huile végétale jusqu’à bien grillés. Persil en fin de cuisson. Servir bien chaud : poisson, viande ou plat végétarien."
      cavernes:
      - "Cuisson. Pommes de terre, casserole eau froide. Ébullition. 15 à 20 min selon taille."
      - "Cuisson. Égoutter. Éplucher. Presse-purée, écraser. Mixeur, non."
      - "Mélange. Farine, jaunes d’œufs. Sel, poivre. Main, mélanger jusqu’à pâte homogène, saladier, se détache."
      - "Cuisson. Plan travail, fleur de maïs. Boudins pâte. Couper morceaux, gnocchi."
      - "Cuisson. Morceaux pâte, dos fourchette, légère pression, rouler."
      - "Cuisson. Eau bouillante, plonger. Fond casserole. Surface, remonter : cuit."
      - "Finition. Poêle chaude, peu huile végétale, jusqu’à grillés. Persil fin. Chaud. Poisson, viande ou plat végétarien."
    kcal_per_serving: 404
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
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 404
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
    - gluten
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
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fleur de maïs
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Mettez les pommes de terres dans une grande casserole d’eau froide, puis portez à ébullition.
      En fonction de la taille de vos pommes de terre, la cuisson devrait durer entre 15 et
      20 minutes.
    - Cuisson. Une fois cuites, égouttez les pommes de terres, épluchez-les puis écrasez-les à l’aide
      d’un presse purée (ne le faites surtout pas au mixeur).
    - Mélange. Ajoutez la farine et l’œuf de lin (ou le tofu soyeux). Salez et poivrez selon vos goûts et mélangez à la main jusqu’à obtenir
      une pâte homogène qui se détache du saladier.
    - Cuisson. Fleurez votre plan de travail avec de la fleur de maïs et réalisez des petits boudins
      de pâte. Coupez ces boudins en petits morceaux qui seront vos futurs gnocchi.
    - Cuisson. Pour de magnifiques gnocchi, faites rouler ces petits morceaux de pâte sur le dos d’une
      fourchette en appliquant une légère pression. N’hésitez pas à visionner la vidéo ci-dessous
      pour bien comprendre le geste.
    - Cuisson. Une fois que tout vos gnocchi sont prêts, plongez-les dans l’eau bouillante. Ils devraient
      tomber au fond de la casserole. Une fois qu’ils remontent à la surface, c’est qu’ils
      sont cuits !
    - Finition. Pour finalisez la cuisson, passez les gnocchi dans une poêle chaude avec un peu d’huile
      végétale jusqu’à ce qu’ils soient bien grillés. Ajoutez un peu de persil en fin de cuisson…et
      c’est prêt ! Servez bien chaud, nature ou avec une sauce tomate. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Mettez les pommes de terre dans une grande casserole d’eau froide, puis portez à ébullition. Selon la taille, la cuisson dure entre 15 et 20 minutes."
      - "Cuisson. Une fois cuites, égouttez les pommes de terre, épluchez-les puis écrasez-les à l’aide d’un presse-purée (ne le faites surtout pas au mixeur)."
      - "Mélange. Ajoutez la farine et l’œuf de lin (ou le tofu soyeux). Salez et poivrez selon vos goûts et mélangez à la main jusqu’à obtenir une pâte homogène qui se détache du saladier."
      - "Cuisson. Fleurez votre plan de travail avec de la fleur de maïs et réalisez des petits boudins de pâte. Coupez ces boudins en petits morceaux : ce seront vos gnocchi."
      - "Cuisson. Faites rouler ces petits morceaux de pâte sur le dos d’une fourchette en appliquant une légère pression."
      - "Cuisson. Plongez les gnocchi dans l’eau bouillante : ils tombent au fond de la casserole. Dès qu’ils remontent à la surface, ils sont cuits."
      - "Finition. Passez les gnocchi dans une poêle chaude avec un peu d’huile végétale jusqu’à ce qu’ils soient bien grillés. Ajoutez un peu de persil en fin de cuisson. Servez bien chaud, nature ou avec une sauce tomate."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau froide. Porter à ébullition. Cuire 15 à 20 min selon la taille."
      - "Égoutter, éplucher, écraser au presse-purée. Pas de mixeur."
      - "Ajouter farine et œuf de lin (ou tofu soyeux). Saler, poivrer. Mélanger à la main jusqu’à pâte homogène qui se détache du saladier."
      - "Fleurer le plan de travail à la fleur de maïs. Former des boudins de pâte. Couper en petits morceaux."
      - "Rouler les morceaux sur le dos d’une fourchette, légère pression."
      - "Plonger dans l’eau bouillante. Ils tombent au fond ; dès qu’ils remontent à la surface, ils sont cuits."
      - "Passer en poêle chaude avec un peu d’huile végétale jusqu’à bien grillés. Persil en fin de cuisson. Servir bien chaud, nature ou sauce tomate."
      cavernes:
      - "Cuisson. Pommes de terre, casserole eau froide. Ébullition. 15 à 20 min selon taille."
      - "Cuisson. Égoutter. Éplucher. Presse-purée, écraser. Mixeur, non."
      - "Mélange. Farine, œuf de lin ou tofu soyeux. Sel, poivre. Main, mélanger jusqu’à pâte homogène, saladier, se détache."
      - "Cuisson. Plan travail, fleur de maïs. Boudins pâte. Couper morceaux, gnocchi."
      - "Cuisson. Morceaux pâte, dos fourchette, légère pression, rouler."
      - "Cuisson. Eau bouillante, plonger. Fond casserole. Surface, remonter : cuit."
      - "Finition. Poêle chaude, peu huile végétale, jusqu’à grillés. Persil fin. Chaud. Nature ou sauce tomate."
    kcal_per_serving: 404
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
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 404
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

# Gnocchi
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gnocchi]]

## Ingrédients (4 personnes)

- 1 kg de pommes de terre
- 3 oeuf
- 160 g de farine
-  fleur de maïs
-  persil frais

## Préparation

1. Mettez les pommes de terres dans une grande casserole d’eau froide, puis portez à ébullition. En fonction de la taille de vos pommes de terre, la cuisson devrait durer entre 15 et 20 minutes.
2. Une fois cuites, égouttez les pommes de terres, épluchez-les puis écrasez-les à l’aide d’un presse purée (ne le faites surtout pas au mixeur).
3. Ajoutez la farine et les jaunes d’oeufs. Salez et poivrez selon vos goûts et mélangez à la main jusqu’à obtenir une pâte homogène qui se détache du saladier.
4. Fleurez votre plan de travail avec de la fleur de maïs et réalisez des petits boudins de pâte. Coupez ces boudins en petits morceaux qui seront vos futurs gnocchi.
5. Pour de magnifiques gnocchi, faites rouler ces petits morceaux de pâte sur le dos d’une fourchette en appliquant une légère pression. N’hésitez pas à visionner la vidéo ci-dessous pour bien comprendre le geste.
6. Une fois que tout vos gnocchi sont prêts, plongez-les dans l’eau bouillante. Ils devraient tomber au fond de la casserole. Une fois qu’ils remontent à la surface, c’est qu’ils sont cuits !
7. Pour finalisez la cuisson, passez les gnocchi dans une poêle chaude avec un peu d’huile végétale jusqu’à ce qu’ils soient bien grillés. Ajoutez un peu de persil en fin de cuisson…et c’est prêt !

 
 

 
 Servez bien chaud, pour accompagner un poisson, une viande ou pour cuisiner un plat végétarien. Bon appétit !
