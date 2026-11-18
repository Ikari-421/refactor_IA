---
schema: recette-web-jigme/v2
slug: salade-nicoise
title: Salade niçoise
lang: fr
description: "Salade niçoise : recette française avec oeuf, tomate et poivron vert, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- salade
- poisson
- oeuf
image:
  url:
  alt: Salade niçoise
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-nicoise.md
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
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Lactose : tofu ferme ou halloumi → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: tofu ferme ou halloumi
      to: tofu ferme
      note:
    note: 'Produits laitiers : tofu ferme ou halloumi → tofu ferme.'
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
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme ou halloumi → pois chiches rôtis ; œuf de lin (1 c.à.s. lin +
      3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches rôtis ; tofu ferme → pois chiches
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
histoire: 'Salade niçoise : Nice, tomates, œufs durs, olives de Nice, anchois ou thon, huile d’olive.
  Répandue dans le monde depuis le début du XXe s. La composition exacte (haricots, pommes de terre :
  oui ou non) se discute encore.

  '
fun_facts:
- text: >
    L’olive cailletier, dite niçoise, est petite et parfumée ; une kalamata n’est
    pas la même.
  source_name: Grokipedia, Cailletier
  source_url: https://grokipedia.com/page/Cailletier
- text: >
    Une version ancienne se passe parfois de vinaigre : l’huile et la tomate suffisent.
  source_name: Wikipedia, Salade niçoise
  source_url: https://en.wikipedia.org/wiki/Salade_ni%C3%A7oise
wines:
- name: Côtes de Provence
  producer: Château de Roquefort
  origin: Roquefort-la-Bédoule, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé de Provence — la tomate et l’anchois, voisin.
- name: Bellet
  producer: Château de Bellet
  origin: Nice, Provence
  grapes: rolle, braquet
  award:
  why: Vin de Nice — la salade, un prestige tout au plus.
- name: Cassis
  producer: Clos Sainte-Magdeleine
  origin: Cassis, Provence
  grapes: marsanne, clairette
  award:
  why: Blanc de Provence, sel — le thon et l’olive.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - oeuf
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 25
      cook_min: 10
      rest_min: 0
      total_min: 35
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: olives noires
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: thon entier au naturel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: piece
      item: filet d'anchois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade (selon vos goûts)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Plongez les oeufs dans l’eau bouillante jusqu’à obtenir des oeufs durs. Écalez-les une
      fois qu’ils ont un peu refroidi et réservez.
    - Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la
      même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux.
    - 'Finition. Disposez la salade de votre choix dans des assiettes creuses. De notre côté, on a utilisé
      de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec
      les olives noires, des miettes de thon et les oeufs durs coupés en quatre. Enfin, finalisez
      avec quelques filet d’anchois, les oignons nouveaux et les feuilles de basilic. Il ne
      vous reste plus qu’à assaisonner avec de l’huile d’olive (ou bien avec la vinaigrette
      de votre choix) et à déguster cette délicieuse salade niçoise. Bon appétit !'
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les œufs dans l’eau bouillante jusqu’à obtenir des œufs durs. Écalez-les une fois qu’ils ont un peu refroidi et réservez."
      - "Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Finition. Disposez la salade de votre choix dans des assiettes creuses. Ici, de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des miettes de thon et les œufs durs coupés en quatre. Finalisez avec quelques filets d’anchois, les oignons nouveaux et les feuilles de basilic. Assaisonnez avec de l’huile d’olive, ou avec la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs dans l’eau bouillante jusqu’à œufs durs. Laisser un peu refroidir. Écaler. Réserver."
      - "Retirer le pédoncule des tomates. Couper en quartiers, puis en petits dés. Découper de même les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Disposer la salade au choix dans des assiettes creuses (roquette). Ajouter poivrons, tomates et artichauts. Compléter avec olives noires, miettes de thon et œufs durs coupés en quatre. Finaliser avec quelques filets d’anchois, oignons nouveaux et feuilles de basilic. Assaisonner à l’huile d’olive ou vinaigrette au choix."
      cavernes:
      - "Préparation. Œufs, eau bouillante, plonger, jusqu’à œufs durs. Peu refroidi. Écaler. Réserver."
      - "Cuisson. Tomates, pédoncule, retirer. Quartiers, puis petits dés. Poivrons, artichaut, olives noires, oignons nouveaux, découper même."
      - "Finition. Salade choix, assiettes creuses. Roquette. Légumes : poivrons, tomates, artichauts, ajouter. Olives noires, miettes thon, œufs durs quatre, compléter. Filets anchois, oignons nouveaux, feuilles basilic, finaliser. Huile olive ou vinaigrette choix, assaisonner."
    kcal_per_serving: 301
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
    - oeuf
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
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: olives noires
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tofu ferme ou halloumi
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: piece
      item: câpres extra
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade (selon vos goûts)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Plongez les oeufs dans l’eau bouillante jusqu’à obtenir des oeufs durs. Écalez-les une
      fois qu’ils ont un peu refroidi et réservez.
    - Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la
      même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux.
    - 'Finition. Disposez la salade de votre choix dans des assiettes creuses. De notre côté, on a utilisé
      de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des dés de tofu ferme (ou de halloumi) et les œufs durs coupés en quatre. Finalisez avec les oignons nouveaux et les feuilles de basilic. Il ne
      vous reste plus qu’à assaisonner avec de l’huile d’olive (ou bien avec la vinaigrette
      de votre choix) et à déguster cette délicieuse salade niçoise. Bon appétit !'
    steps_niveaux:
      amateur:
      - "Préparation. Plongez les œufs dans l’eau bouillante jusqu’à obtenir des œufs durs. Écalez-les une fois qu’ils ont un peu refroidi et réservez."
      - "Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Finition. Disposez la salade de votre choix dans des assiettes creuses. Ici, de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des dés de tofu ferme (ou de halloumi) et les œufs durs coupés en quatre. Finalisez avec les oignons nouveaux et les feuilles de basilic. Assaisonnez avec de l’huile d’olive, ou avec la vinaigrette de votre choix."
      pro:
      - "Plonger les œufs dans l’eau bouillante jusqu’à œufs durs. Laisser un peu refroidir. Écaler. Réserver."
      - "Retirer le pédoncule des tomates. Couper en quartiers, puis en petits dés. Découper de même les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Disposer la salade au choix dans des assiettes creuses (roquette). Ajouter poivrons, tomates et artichauts. Compléter avec olives noires, dés de tofu ferme (ou de halloumi) et œufs durs coupés en quatre. Finaliser avec oignons nouveaux et feuilles de basilic. Assaisonner à l’huile d’olive ou vinaigrette au choix."
      cavernes:
      - "Préparation. Œufs, eau bouillante, plonger, jusqu’à œufs durs. Peu refroidi. Écaler. Réserver."
      - "Cuisson. Tomates, pédoncule, retirer. Quartiers, puis petits dés. Poivrons, artichaut, olives noires, oignons nouveaux, découper même."
      - "Finition. Salade choix, assiettes creuses. Roquette. Légumes : poivrons, tomates, artichauts, ajouter. Olives noires, dés tofu ferme ou halloumi, œufs durs quatre, compléter. Oignons nouveaux, feuilles basilic, finaliser. Huile olive ou vinaigrette choix, assaisonner."
    kcal_per_serving: 321
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: olives noires
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: piece
      item: câpres extra
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade (selon vos goûts)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le tofu ferme en quartiers (à la place des œufs durs).
    - Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la
      même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux.
    - 'Finition. Disposez la salade de votre choix dans des assiettes creuses. De notre côté, on a utilisé
      de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des miettes de tofu et les quartiers de tofu. Finalisez avec les oignons nouveaux et le basilic. Il ne vous reste plus qu’à assaisonner
      avec de l’huile d’olive (ou bien avec la vinaigrette de votre choix) et à déguster cette
      délicieuse salade niçoise. Bon appétit !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu ferme en quartiers, à la place des œufs durs."
      - "Cuisson. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Finition. Disposez la salade de votre choix dans des assiettes creuses. Ici, de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des miettes de tofu et les quartiers de tofu. Finalisez avec les oignons nouveaux et le basilic. Assaisonnez avec de l’huile d’olive, ou avec la vinaigrette de votre choix."
      pro:
      - "Couper le tofu ferme en quartiers, à la place des œufs durs."
      - "Retirer le pédoncule des tomates. Couper en quartiers, puis en petits dés. Découper de même les poivrons, l’artichaut, les olives noires et les oignons nouveaux."
      - "Disposer la salade au choix dans des assiettes creuses (roquette). Ajouter poivrons, tomates et artichauts. Compléter avec olives noires, miettes de tofu et quartiers de tofu. Finaliser avec oignons nouveaux et basilic. Assaisonner à l’huile d’olive ou vinaigrette au choix."
      cavernes:
      - "Préparation. Tofu ferme, quartiers, couper, place œufs durs."
      - "Cuisson. Tomates, pédoncule, retirer. Quartiers, puis petits dés. Poivrons, artichaut, olives noires, oignons nouveaux, découper même."
      - "Finition. Salade choix, assiettes creuses. Roquette. Légumes : poivrons, tomates, artichauts, ajouter. Olives noires, miettes tofu, quartiers tofu, compléter. Oignons nouveaux, basilic, finaliser. Huile olive ou vinaigrette choix, assaisonner."
    kcal_per_serving: 321
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
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 301
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade niçoise
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-nicoise]]

## Ingrédients (4 personnes)

- 4 oeuf
- 4 tomate
- 2 poivron vert
- 100 g d'olives noires
- 1 botte d'oignons nouveaux
- 1 boîte de thon entier au naturel (180g)
- 12 filet d'anchois
-  salade (selon vos goûts)
-  basilic frais

## Préparation

1. Plongez les oeufs dans l’eau bouillante jusqu’à obtenir des oeufs durs. Écalez-les une fois qu’ils ont un peu refroidi et réservez.
2. Retirez le pédoncule des tomates. Coupez-les en quartiers, puis en petits dés. De la même façon, découpez les poivrons, l’artichaut, les olives noires et les oignons nouveaux.
3. Disposez la salade de votre choix dans des assiettes creuses. De notre côté, on a utilisé de la roquette. Ajoutez les légumes : poivrons, tomates et artichauts. Complétez avec les olives noires, des miettes de thon et les oeufs durs coupés en quatre. Enfin, finalisez avec quelques filet d’anchois, les oignons nouveaux et les feuilles de basilic.

 
 

 
 Il ne vous reste plus qu’à assaisonner avec de l’huile d’olive (ou bien avec la vinaigrette de votre choix) et à déguster cette délicieuse salade niçoise. Bon appétit !
