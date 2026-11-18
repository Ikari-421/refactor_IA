---
schema: recette-web-jigme/v2
slug: ceviche-melon-banana
title: Ceviche de poisson au melon Banana
lang: fr
description: "Ceviche de poisson au melon Banana. Recette péruvienne à base de filet de poisson blanc très frais, chair de melon Banana bien mûr et oignon rouge moyen."
cuisine: péruvienne
category: salé
tags:
- salé
- entrée
- été
- jardin
- ceviche
image:
  url:
  alt: Ceviche de poisson au melon Banana
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/ceviche-melon-banana.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- sans_lactose_sans_gluten
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
    note: Déjà sans œufs.
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
    note: Pas de mollusques dans cette fiche (hors version maison, si indiquée).
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
  sans_poisson:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: La tradi est un ceviche poisson → bascule sur la version végé (melon + palmito).
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier le mix SG du commerce (parfois du lupin).
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi. Ne pas prendre les substi tofu / soja.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de Xérès
      to: jus de citron vert extra (30 ml)
      note: Évite les sulfites du vinaigre.
    note: 'Tradi : citron, pas de vinaigre. En végé : remplacer le vinaigre de Xérès par du
      jus de citron extra.'
house_toggle:
house_options: []
histoire: 'Plat emblématique du Pérou : poisson ou fruits de mer crus marinés dans le jus
  d’agrume, qui dénature les protéines sans chaleur. Les origines côtières remontent à plus
  de 2 000 ans : conservation au sel, piment et jus de fruits locaux ou chicha, avant l’arrivée
  des agrumes au XVIe siècle avec les Espagnols. En 2023, l’Unesco inscrit les pratiques et
  significations liées à la préparation et à la consommation du ceviche sur la Liste représentative
  du patrimoine culturel immatériel. Le melon n’a rien de limeño : l’associer au poisson cru
  est une lecture d’été européenne.

  '
fun_facts:
- text: 'Deux pistes étymologiques : l’espagnol escabeche (de l’arabe sikbāj) ; le quechua
    siwichi, « poisson frais ».'
  source_name: Grokipedia, Ceviche
  source_url: https://grokipedia.com/page/Ceviche
- text: 'Le citron ne cuit pas : l’acide dénature les protéines et donne l’apparence d’une
    cuisson, sans pasteuriser.'
  source_name: Grokipedia, Ceviche
  source_url: https://grokipedia.com/page/Ceviche
- text: '2023 : l’Unesco inscrit les pratiques associées au ceviche (réunions, fête de la
    Saint-Pierre des pêcheurs, diversité côtière).'
  source_name: Grokipedia, Ceviche
  source_url: https://grokipedia.com/page/Ceviche
- text: 'Le melon Banana est une variété américaine des années 1880 ; James J. H. Gregory
    : mûr, il rappelle une grosse banane trop poussée, et il sent comme une banane.'
  source_name: Wikipedia EN, Banana melon
  source_url: https://en.wikipedia.org/wiki/Banana_melon
wines:
- name: Orthogneiss
  producer: Domaine de l’Ecu (Fred Niger)
  origin: Muscadet Sèvre-et-Maine, Loire
  grapes: Melon de Bourgogne
  award:
  why: Iodé, zeste de citron, silex, sel — même langue que la leche de tigre.
- name: Côte des Roses rosé
  producer: Gérard Bertrand
  origin: Languedoc
  grapes: assemblage Languedoc (Grenache, Cinsault, Syrah — vérifier l’étiquette)
  award:
  why: Proposé par Anne Reverdy sur un ceviche de bar au melon — groseille, fraîcheur florale.
- name: Grands Classiques Extra-Brut Exact
  producer: Champagne Pannier
  origin: Champagne, Château-Thierry
  grapes: assemblage champenois
  award:
  why: Extra-brut peu dosé — bulles qui lessivent le piment et le gras du poisson, sans sucrer
    le Banana.
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
    time:
      prep_min: 25
      cook_min: 0
      rest_min: 10
      total_min: 35
    equipment:
    - couteau bien aiguisé
    - bol verre ou inox
    - presse-agrume
    - chinois (facultatif)
    - réfrigérateur
    substitutions:
    - from: melon Banana
      to: Charentais, même poids de chair
      note: Plus floral, moins tropical — on garde le citron vert, pas de sucre.
    - from: bar
      to: dorade ou lieu jaune
      note: Qualité sashimi, chair blanche ferme.
    - from: piment habanero / rocoto
      to: ½ piment oiseau ou 1 c. à c. de pâte d’ají amarillo
      note: Moins de feu.
    - from: coriandre
      to: menthe du jardin
      note: Plus doux.
    scale_note: Poisson qualité sashimi, idéalement 24 h à −20 °C puis froid. Consommer aussitôt.
      Le melon ne reste pas plus de 2–3 min dans l’acide.
    ingredients:
    - qty: 500
      unit: g
      item: filet de poisson blanc très frais (bar, dorade ou lieu jaune)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: chair de melon Banana bien mûr, épépinée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge moyen
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: citrons verts (environ 20 ml de jus chacun)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert (zeste)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment rouge (habanero, rocoto, ou ½ piment oiseau), épépiné
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: botte
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: sel fin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fleur de sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cas
      item: huile d'olive (finition)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: glaçons
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 400
      unit: g
      item: patate douce
      group: service péruvien
      scale: true
      optional: true
      to_taste: false
    - qty:
      unit:
      item: feuilles de laitue
      group: service péruvien
      scale: false
      optional: true
      to_taste: false
    - qty: 1
      unit: piece
      item: épi de maïs ou poignée de maïs grillé (cancha)
      group: service péruvien
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Tenir le poisson au froid. Coupez-le en cubes de 1,5 cm, couvrez-le d’eau très froide avec 1 c. à c. de sel pendant 5 min, puis égouttez et séchez."
    - "Cuisson. Émincez très finement l’oignon rouge, frottez-le avec une pincée de sel, rincez-le à l’eau froide et égouttez."
    - "Presser les citrons verts. Réservez 2 c. à s. de jus. Coupez le piment en deux et ôtez graines et nervures."
    - "Cuisson. Dans un bol froid, réunissez le poisson, l’oignon, le piment, le jus des citrons verts et une pincée de sel. Ajoutez 3 à 4 glaçons, couvrez et réservez 8 à 12 min au frais : la chair doit blanchir en surface, nacrée au cœur."
    - "Cuisson. Coupez le melon Banana en cubes de la même taille. Zestez le citron vert restant. Ciselez la coriandre, en gardant quelques feuilles entières."
    - "Retirer glaçons et piment. Ajoutez le melon et la coriandre ciselée, rectifiez le sel. Ne laissez pas le melon plus de 2 à 3 min dans l’acide."
    - "Finition. Dressez tout de suite, avec un filet d’huile d’olive, le zeste et des feuilles de coriandre. En service péruvien, facultatif : patate douce bouillie, laitue et maïs à part, sans les mélanger."
    steps_niveaux:
      amateur:
      - "Tenez le poisson au froid. Coupez-le en cubes de 1,5 cm, couvrez-le d’eau très froide avec 1 c. à c. de sel pendant 5 min, puis égouttez et séchez."
      - "Émincez l’oignon rouge en tranches très fines, frottez-le avec une pincée de sel, rincez-le à l’eau froide et égouttez."
      - "Pressez les citrons verts. Réservez 2 c. à s. de jus. Coupez le piment en deux et ôtez graines et nervures."
      - "Dans un bol froid, réunissez le poisson, l’oignon, le piment, le jus des citrons verts et une pincée de sel. Ajoutez 3 à 4 glaçons, couvrez et réservez 8 à 12 min au frais : la chair doit blanchir en surface, nacrée au cœur."
      - "Coupez le melon Banana en cubes de la même taille. Zestez le citron vert restant. Ciselez la coriandre (en petits fragments), en gardant quelques feuilles entières."
      - "Retirez les glaçons et le piment. Ajoutez le melon et la coriandre ciselée, rectifiez le sel. Ne laissez pas le melon plus de 2 à 3 min dans l’acide."
      - "Dressez tout de suite, avec un filet d’huile d’olive, le zeste et des feuilles de coriandre. En service péruvien, facultatif : patate douce bouillie, laitue et maïs à part, sans les mélanger."
      pro:
      - "Tenir le poisson au froid. Détailler en cubes de 1,5 cm. Couvrir d’eau très froide additionnée de 1 c. à c. de sel, 5 min. Égoutter, sécher."
      - "Émincer très finement l’oignon rouge. Frotter d’une pincée de sel. Rincer à l’eau froide. Égoutter."
      - "Presser les citrons verts. Réserver 2 c. à s. de jus. Fendre le piment, ôter graines et nervures."
      - "Dans un bol froid, réunir poisson, oignon, piment, jus de citrons verts et pincée de sel. Ajouter 3 à 4 glaçons. Couvrir. Réserver 8 à 12 min au frais : chair blanchie en surface, nacrée au cœur."
      - "Tailler le melon Banana en cubes de même taille. Zester le citron vert restant. Ciseler la coriandre, quelques feuilles entières de côté."
      - "Retirer glaçons et piment. Ajouter melon et coriandre ciselée. Rectifier le sel. Melon : 2 à 3 min maximum dans l’acide."
      - "Dresser aussitôt : filet d’huile d’olive, zeste, feuilles de coriandre. Service péruvien facultatif : patate douce bouillie, laitue et maïs à part, sans mélanger."
      cavernes:
      - "Poisson froid. Cubes 1,5 cm. Eau très froide, 1 c. à c. sel, 5 min. Égoutter, sécher."
      - "Oignon rouge émincer très fin. Pincée sel frotter. Eau froide rincer. Égoutter."
      - "Citrons verts presser. 2 c. à s. jus réserver. Piment couper deux. Graines nervures ôter."
      - "Bol froid. Poisson oignon piment jus citrons verts pincée sel. 3 à 4 glaçons. Couvrir. Frais 8-12 min. Surface blanche, cœur nacré."
      - "Melon Banana cubes même taille. Citron vert restant zester. Coriandre ciseler, quelques feuilles entières."
      - "Glaçons piment dehors. Melon coriandre ciselée. Sel. Melon 2-3 min max acide."
      - "Dresser tout de suite. Filet huile olive, zeste, feuilles coriandre. Service péruvien facultatif : patate douce bouillie, laitue, maïs à part. Pas mélanger."
    kcal_per_serving: 292
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (melon + palmito)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - sulfites
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 0
      rest_min: 8
      total_min: 28
    equipment:
    - mixeur
    - chinois
    - bol
    - couteau
    substitutions:
    - from: palmito
      to: dés d'avocat encore fermes, ou champignons de Paris très frais
      note: Volume et gras.
    - from: tomate
      to: omettre
      note: Si le jardin n’en a pas.
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: chair de melon Banana (ou Charentais)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: cœurs de palmier au naturel, égouttés, en rondelles de 1 cm
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates bien mûres
      group:
      scale: true
      optional: true
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: ail dégermé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: citrons verts (jus)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: vinaigre de Xérès
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment (ou 1 c. à c. de piment d'Espelette)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: botte
      item: coriandre (ou basilic + estragon)
      group:
      scale: false
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Mixage. Leche de tigre : mixer 150 g de melon + ½ tomate + ¼ oignon + l’ail + 8 feuilles de
      coriandre + jus de 4 citrons + Xérès + 2 c. à s. d’huile + sel + piment, 20 s. Passer
      au chinois.'
    - Cuisson. Cubes du reste de melon, palmito, reste de tomate, oignon ciselé.
    - Mélange. Mélanger avec assez de leche pour nacrer, 8 min au frais.
    - Finition. Dresser, reste d’huile, herbes, Espelette.
    steps_niveaux:
      amateur:
      - "Pour la leche de tigre, mixez 150 g de melon, une demi-tomate, un quart d’oignon, l’ail, 8 feuilles de coriandre, le jus de 4 citrons, le vinaigre de Xérès, 2 c. à s. d’huile, le sel et le piment, pendant 20 s. Passez au chinois."
      - "Coupez le reste de melon en cubes. Ajoutez le palmito, le reste de tomate et l’oignon ciselé (en tout petits morceaux)."
      - "Mélangez avec assez de leche de tigre pour nacrer. Réservez 8 min au frais."
      - "Dressez. Ajoutez le reste d’huile, les herbes et l’Espelette."
      pro:
      - "Leche de tigre : mixer 150 g de melon, ½ tomate, ¼ d’oignon, l’ail, 8 feuilles de coriandre, jus de 4 citrons, vinaigre de Xérès, 2 c. à s. d’huile, sel et piment, 20 s. Passer au chinois."
      - "Tailler le reste de melon en cubes. Ajouter palmito, reste de tomate, oignon ciselé."
      - "Mélanger avec assez de leche pour nacrer. Réserver 8 min au frais."
      - "Dresser. Reste d’huile, herbes, Espelette."
      cavernes:
      - "Leche tigre : 150 g melon, ½ tomate, ¼ oignon, ail, 8 feuilles coriandre, jus 4 citrons, Xérès, 2 c. à s. huile, sel, piment. Mixer 20 s. Chinois."
      - "Reste melon cubes. Palmito, reste tomate, oignon ciselé."
      - "Assez leche pour nacrer. Frais 8 min."
      - "Dresser. Reste huile, herbes, Espelette."
    kcal_per_serving: 333
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - sulfites
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 333
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco-végétarienne (ceviche poisson)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 292
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - poisson
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: La traditionnelle est déjà SL+SG. Ce bloc ne change que si le visiteur veut
      du poisson sans lactose/gluten — pas la version melon-palmito.
    ingredients: []
    steps: []
    kcal_per_serving: 350
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"

---

# Ceviche de poisson au melon Banana

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Poisson. Pas de version maison.

**Catégorie :** salé · entrée · été  
**Régimes déjà vrais (tradi) :** sans lactose, sans gluten  
**Photo :** aucune pour l’instant

## Ingrédients (4 personnes)

- 500 g de filet de poisson blanc très frais (bar, dorade ou lieu jaune)
- 400 g de chair de melon Banana bien mûr (ou Charentais)
- 1 oignon rouge moyen
- 8 citrons verts (environ 20 ml de jus chacun) + 1 pour le zeste
- 1 piment rouge épépiné
- 1 petit bouquet de coriandre
- 1 c. à c. de sel fin + fleur de sel
- 1 c. à s. d’huile d’olive
- Glaçons
- Facultatif : patate douce, laitue, maïs

## Préparation

1. Tenir le poisson au froid. Coupez-le en cubes de 1,5 cm, couvrez-le d’eau très froide avec 1 c. à c. de sel pendant 5 min, puis égouttez et séchez.
2. Cuisson. Émincez très finement l’oignon rouge, frottez-le avec une pincée de sel, rincez-le à l’eau froide et égouttez.
3. Presser les citrons verts. Réservez 2 c. à s. de jus. Coupez le piment en deux et ôtez graines et nervures.
4. Cuisson. Dans un bol froid, réunissez le poisson, l’oignon, le piment, le jus des citrons verts et une pincée de sel. Ajoutez 3 à 4 glaçons, couvrez et réservez 8 à 12 min au frais : la chair doit blanchir en surface, nacrée au cœur.
5. Cuisson. Coupez le melon Banana en cubes de la même taille. Zestez le citron vert restant. Ciselez la coriandre, en gardant quelques feuilles entières.
6. Retirer glaçons et piment. Ajoutez le melon et la coriandre ciselée, rectifiez le sel. Ne laissez pas le melon plus de 2 à 3 min dans l’acide.
7. Finition. Dressez tout de suite, avec un filet d’huile d’olive, le zeste et des feuilles de coriandre. En service péruvien, facultatif : patate douce bouillie, laitue et maïs à part, sans les mélanger.

## Variantes machine

`vegetarienne` (melon + palmito, déjà vegan) · `vegan` (inherit végé) · `sans_lactose_sans_gluten` (inherit tradi, poisson)


