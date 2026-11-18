---
schema: recette-web-jigme/v2
slug: nouilles-fraiches-maison
title: Nouilles fraîches maison
lang: fr
description: "Nouilles fraîches maison : recette italienne avec farine tout usage, eau tiède et carbonate de sodium, pour 4 personnes."
cuisine: italienne
category: salé
tags:
- salé
- nouilles
- végane
- farine tout usage
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/nouilles-fraiches-maison.webp
  alt: Nouilles fraîches maison
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/nouilles-fraiches-maison.md
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
histoire: 'Nouilles ou pâtes fraîches : farine et eau, parfois œuf. Pâte de blé et d’œufs, abaissée, coupée
  en rubans. Le geste est commun à l’Italie, à la Chine et à l’Europe centrale ; ici, une pâte maison,
  pas une appellation.

  '
fun_facts:
- text: >
    Plus d’œuf, plus de jaune, plus la pâte est riche et jaune ; sans œuf, elle
    est plus ferme, plus « farine ».
  source_name: Grokipedia, Egg noodles
  source_url: https://grokipedia.com/page/Egg_noodles
- text: >
    On laisse reposer la pâte : le gluten se détend, l’étalage craque moins.
  source_name: Usage
  source_url:
wines:
- name: Soave
  producer: Cantina di Soave
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — la pâte nature, sans un bois qui noie le blé.
- name: Chianti
  producer: Melini
  origin: Chianti, Toscane
  grapes: sangiovese
  award:
  why: Cerise, tanin vif — dès qu’une sauce tomate entre en jeu.
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, tanin court — des pâtes en plat, pas en simple garniture.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: &id001
    - gluten
    difficulty: 2
    time: &id002
      prep_min: 60
      cook_min: 1
      rest_min: 0
      total_min: 61
    equipment: &id003
    - rouleau à pâtisserie
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: eau tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: carbonate de sodium
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: farine de riz ou farine tout usage à défaut
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Mélangez le carbonate de sodium (pour le faire vous-même, référez-vous à la section
      « le petit + ») dans l’eau.
    - Ajoutez l’eau dans la farine. Commencez à mélanger avec un ustensile en bois, puis,
      dès que la farine a absorbé le liquide, continuer à la main. Il faudra travailler la
      pâte entre 5 et 10 minutes. Enfin, dans l’idéal, laissez la reposer 1 h à température
      ambiante. Ceci dit, vous pouvez quand même passer à l’étape suivante, ça marche bien
      aussi !
    - Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur
      voulue. Essayez d’avoir un long rectangle pour avoir des nouilles de la même taille.
      Saupoudrez de la farine de riz sur vos rectangles de pâtes pour éviter qu’ils ne collent.
    - Cuisson. Passez les rectangles de pâtes au laminoir à spaghetti. Si vous le faites au couteau,
      rajoutez un peu plus de farine de riz, repliez le rectangle plusieurs fois sur lui-même
      et émincez la pâte, lorsque vous déplierez vos émincés, vous aurez de jolies nouilles.
      Saupoudrez de farine de riz et constituez des niz de pâtes.
    - Finition. À ce stade, vous pouvez faire sécher les pâtes si vous avez de quoi le suspendre. Sinon,
      vous pouvez les cuire directement, la cuisson sera de 1 min dans l’eau bouillante. Sachez
      également que vous pouvez les congeler en portions individuelles ; pour la cuisson,
      c’est une minute aussi, il faudra juste bien les remuer dans l’eau bouillante pour les
      décoller. Vous avez maintenant de quoi faire des Yakisoba ou des ramen ! Itadakimasu
      !
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez le carbonate de sodium (pour le faire vous-même, référez-vous à la section « le petit + ») dans l’eau."
      - "Ajoutez l’eau dans la farine. Commencez à mélanger avec un ustensile en bois, puis, dès que la farine a absorbé le liquide, continuez à la main. Travaillez la pâte entre 5 et 10 minutes. Enfin, dans l’idéal, laissez-la reposer 1 h à température ambiante. Ceci dit, vous pouvez quand même passer à l’étape suivante, ça marche bien aussi !"
      - "Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir un long rectangle pour avoir des nouilles de la même taille. Saupoudrez de la farine de riz sur vos rectangles de pâtes pour éviter qu’ils ne collent."
      - "Cuisson. Passez les rectangles de pâtes au laminoir à spaghetti. Si vous le faites au couteau, rajoutez un peu plus de farine de riz, repliez le rectangle plusieurs fois sur lui-même et émincez la pâte ; lorsque vous déplierez vos émincés, vous aurez de jolies nouilles. Saupoudrez de farine de riz et constituez des nids de pâtes."
      - "Finition. À ce stade, vous pouvez faire sécher les pâtes si vous avez de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera de 1 min dans l’eau bouillante. Vous pouvez aussi les congeler en portions individuelles ; pour la cuisson, c’est une minute aussi, il faudra juste bien les remuer dans l’eau bouillante pour les décoller."
      pro:
      - "Mélanger le carbonate de sodium dans l’eau (section « le petit + » pour le préparer)."
      - "Ajouter l’eau dans la farine. Mélanger à l’ustensile en bois, puis à la main dès absorption. Travailler 5 à 10 minutes. Option : reposer 1 h à température ambiante, ou enchaîner."
      - "Étaler au laminoir ou au rouleau jusqu’à l’épaisseur voulue. Viser un long rectangle. Saupoudrer de farine de riz pour éviter que ça colle."
      - "Passer au laminoir à spaghetti. Option couteau : plus de farine de riz, replier plusieurs fois, émincer, déplier. Saupoudrer de farine de riz. Former des nids."
      - "Option : faire sécher en suspendant. Sinon cuire 1 min à l’eau bouillante. Congélation possible en portions ; cuisson 1 min aussi, bien remuer pour décoller."
      cavernes:
      - "Mélange. Carbonate de sodium, eau, mélanger. Section petit +."
      - "Eau dans farine. Ustensile bois, mélanger. Liquide absorbé, main. Pâte, 5 à 10 min, travailler. Idéal, reposer 1 h, température ambiante. Ou étape suivante."
      - "Cuisson. Pâte, laminoir ou rouleau, étaler, épaisseur voulue. Long rectangle, nouilles même taille. Farine de riz, rectangles pâtes, saupoudrer. Coller, éviter."
      - "Cuisson. Rectangles pâtes, laminoir spaghetti. Ou couteau : peu plus farine de riz, rectangle replier plusieurs fois, émincer, déplier, nouilles. Farine de riz, saupoudrer. Nids pâtes."
      - "Finition. Pâtes, sécher, suspendre si possible. Ou cuire direct, eau bouillante, 1 min. Ou congeler, portions. Cuisson, minute aussi. Eau bouillante, remuer, décoller."
    kcal_per_serving: 204
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 204
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
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
      prep_min: 60
      cook_min: 1
      rest_min: 0
      total_min: 61
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: eau tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: carbonate de sodium
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: farine de riz ou farine tout usage à défaut
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Mélangez le carbonate de sodium (pour le faire vous-même, référez-vous à la section
      « le petit + ») dans l’eau.
    - Ajoutez l’eau dans la farine. Commencez à mélanger avec un ustensile en bois, puis,
      dès que la farine a absorbé le liquide, continuer à la main. Il faudra travailler la
      pâte entre 5 et 10 minutes. Enfin, dans l’idéal, laissez la reposer 1 h à température
      ambiante. Ceci dit, vous pouvez quand même passer à l’étape suivante, ça marche bien
      aussi !
    - Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur
      voulue. Essayez d’avoir un long rectangle pour avoir des nouilles de la même taille.
      Saupoudrez de la farine de riz sur vos rectangles de pâtes pour éviter qu’ils ne collent.
    - Cuisson. Passez les rectangles de pâtes au laminoir à spaghetti. Si vous le faites au couteau,
      rajoutez un peu plus de farine de riz, repliez le rectangle plusieurs fois sur lui-même
      et émincez la pâte, lorsque vous déplierez vos émincés, vous aurez de jolies nouilles.
      Saupoudrez de farine de riz et constituez des niz de pâtes.
    - Finition. À ce stade, vous pouvez faire sécher les pâtes si vous avez de quoi le suspendre. Sinon,
      vous pouvez les cuire directement, la cuisson sera de 1 min dans l’eau bouillante. Sachez
      également que vous pouvez les congeler en portions individuelles ; pour la cuisson,
      c’est une minute aussi, il faudra juste bien les remuer dans l’eau bouillante pour les
      décoller. Vous avez maintenant de quoi faire des Yakisoba ou des ramen ! Itadakimasu
      !
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez le carbonate de sodium (pour le faire vous-même, référez-vous à la section « le petit + ») dans l’eau."
      - "Ajoutez l’eau dans la farine. Commencez à mélanger avec un ustensile en bois, puis, dès que la farine a absorbé le liquide, continuez à la main. Travaillez la pâte entre 5 et 10 minutes. Enfin, dans l’idéal, laissez-la reposer 1 h à température ambiante. Ceci dit, vous pouvez quand même passer à l’étape suivante, ça marche bien aussi !"
      - "Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir un long rectangle pour avoir des nouilles de la même taille. Saupoudrez de la farine de riz sur vos rectangles de pâtes pour éviter qu’ils ne collent."
      - "Cuisson. Passez les rectangles de pâtes au laminoir à spaghetti. Si vous le faites au couteau, rajoutez un peu plus de farine de riz, repliez le rectangle plusieurs fois sur lui-même et émincez la pâte ; lorsque vous déplierez vos émincés, vous aurez de jolies nouilles. Saupoudrez de farine de riz et constituez des nids de pâtes."
      - "Finition. À ce stade, vous pouvez faire sécher les pâtes si vous avez de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera de 1 min dans l’eau bouillante. Vous pouvez aussi les congeler en portions individuelles ; pour la cuisson, c’est une minute aussi, il faudra juste bien les remuer dans l’eau bouillante pour les décoller."
      pro:
      - "Mélanger le carbonate de sodium dans l’eau (section « le petit + » pour le préparer)."
      - "Ajouter l’eau dans la farine. Mélanger à l’ustensile en bois, puis à la main dès absorption. Travailler 5 à 10 minutes. Option : reposer 1 h à température ambiante, ou enchaîner."
      - "Étaler au laminoir ou au rouleau jusqu’à l’épaisseur voulue. Viser un long rectangle. Saupoudrer de farine de riz pour éviter que ça colle."
      - "Passer au laminoir à spaghetti. Option couteau : plus de farine de riz, replier plusieurs fois, émincer, déplier. Saupoudrer de farine de riz. Former des nids."
      - "Option : faire sécher en suspendant. Sinon cuire 1 min à l’eau bouillante. Congélation possible en portions ; cuisson 1 min aussi, bien remuer pour décoller."
      cavernes:
      - "Mélange. Carbonate de sodium, eau, mélanger. Section petit +."
      - "Eau dans farine. Ustensile bois, mélanger. Liquide absorbé, main. Pâte, 5 à 10 min, travailler. Idéal, reposer 1 h, température ambiante. Ou étape suivante."
      - "Cuisson. Pâte, laminoir ou rouleau, étaler, épaisseur voulue. Long rectangle, nouilles même taille. Farine de riz, rectangles pâtes, saupoudrer. Coller, éviter."
      - "Cuisson. Rectangles pâtes, laminoir spaghetti. Ou couteau : peu plus farine de riz, rectangle replier plusieurs fois, émincer, déplier, nouilles. Farine de riz, saupoudrer. Nids pâtes."
      - "Finition. Pâtes, sécher, suspendre si possible. Ou cuire direct, eau bouillante, 1 min. Ou congeler, portions. Cuisson, minute aussi. Eau bouillante, remuer, décoller."
    kcal_per_serving: 204
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 204
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Nouilles fraîches maison

![[nouilles-fraiches-maison.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/nouilles-fraiches-maison]]

## Ingrédients (6 personnes)

- 350 g de farine tout usage
- 180 g d'eau tiède
- 1 cuillère à café de carbonate de sodium
-  farine de riz ou farine tout usage à défaut

## Préparation

1. Mélangez le carbonate de sodium (pour le faire vous-même, référez-vous à la section « le petit + ») dans l’eau.
2. Ajoutez l’eau dans la farine. Commencez à mélanger avec un ustensile en bois, puis, dès que la farine a absorbé le liquide, continuer à la main. Il faudra travailler la pâte entre 5 et 10 minutes. Enfin, dans l’idéal, laissez la reposer 1 h à température ambiante. Ceci dit, vous pouvez quand même passer à l’étape suivante, ça marche bien aussi !
3. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir un long rectangle pour avoir des nouilles de la même taille. Saupoudrez de la farine de riz sur vos rectangles de pâtes pour éviter qu’ils ne collent.
4. Passez les rectangles de pâtes au laminoir à spaghetti. Si vous le faites au couteau, rajoutez un peu plus de farine de riz, repliez le rectangle plusieurs fois sur lui-même et émincez la pâte, lorsque vous déplierez vos émincés, vous aurez de jolies nouilles. Saupoudrez de farine de riz et constituez des niz de pâtes.
5. À ce stade, vous pouvez faire sécher les pâtes si vous avez de quoi le suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera de 1 min dans l’eau bouillante. Sachez également que vous pouvez les congeler en portions individuelles ; pour la cuisson, c’est une minute aussi, il faudra juste bien les remuer dans l’eau bouillante pour les décoller.

 
 

 
 Vous avez maintenant de quoi faire des Yakisoba ou des ramen ! Itadakimasu !
