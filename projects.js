// ============================================================
//  DONNÉES DES PROJETS — modifiez ce fichier pour ajouter /
//  modifier vos projets. Compatible GitHub Pages (100% JS).
//
//  CHAMPS NOUVEAUX :
//    date      : "YYYY-MM"  → sert au tri et au filtre mois/année
//    semestre  : 1 | 2      → filtre semestre
// ============================================================

const PROJECTS = [
  {
    id: "portfolio",
    num: "12",
    title: "Portfolio Personnel",
    subtitle: "Design & Développement Web",
    status: "wip",
    date: "2026-06",      // YYYY-MM (pas de jour)
    semestre: 2,
    year: "2026- Juin",
    description: `
      <p>Conception et développement de ce portfolio entièrement en HTML, CSS et JavaScript.
      L'objectif était de créer une vitrine interactive qui reflète à la fois mon style et mes compétences techniques.</p>
      <p>L'interface inclut des animations déclenchées au scroll via
      <code>IntersectionObserver</code>, des barres de compétences animées, un basculeur de thème clair/sombre
      persistant via <code>localStorage</code>, et une navigation multi-pages cohérente.</p>
      <p>Chaque page est indépendante, ce qui le rend hébergeable directement sur GitHub.</p>
    `,
    techs: ["HTML", "CSS", "JavaScript", "GitHub"],
    cover: null, // ex: "assets/projet/portfolio/cover.png"
    photos: [

    ],
    github: "https://github.com/nathanmichonneau/nathanmichonneau.github.io",
    download: null,
    downloadLabel: "Téléchargable sur mon github",
  },

  {
  id: "but-sd1-sae-indicateurs-performance",
  num: "09",
  title: "Diagnostic financier - Fleury Michon Libre-Service",
  subtitle: "Construction d'indicateurs de performance et présentation structurée",
  status: "done",
  date: "2026-05",
  semestre: 2,
  year: "2026 — Mai",
  description: `
  <p>Projet réalisé en trinôme avec Alix Gouriet et Nahel Goumard dans le cadre de la SAE <strong>« Construction et présentation d'indicateurs de performance »</strong>. L'objectif était de mener un <strong>diagnostic financier complet</strong> de l'entreprise <strong>Fleury Michon Libre-Service</strong>, leader français du jambon supérieur, à partir de ses données comptables sur la période 2019–2022.</p>

  <p>Le travail s'est articulé en deux temps. D'abord, une <strong>analyse des indicateurs clés</strong> : évolution du chiffre d'affaires (de 685 M€ en 2019 à 743,7 M€ en 2022), de la valeur ajoutée, de l'EBE et du résultat net. Ces données ont été calculées et organisées dans un fichier <strong>Excel</strong> structuré. Ensuite, un <strong>positionnement sectoriel</strong> par comparaison avec les normes de l'industrie alimentaire publiées par l'INSEE en 2022, permettant d'identifier précisément les écarts, favorables (VA/CA de 20,3 % vs 17,2 % secteur) ou défavorables (EBE/CA de 3,8 % vs 4,8 %, CAF/CA de 3,0 % vs 5,8 %).</p>

  <p>L'analyse a mis en évidence une <strong>résilience structurelle</strong> de l'entreprise (CA en croissance, productivité par salarié passée de 273 k€ à 327 k€), mais aussi une compression des marges depuis 2020, accentuée par la hausse des matières premières (+24 % en 2022) et un poids des charges de personnel supérieur aux normes sectorielles (76,9 % de la VA contre 68,1 %).</p>

  <p>Le livrable final prend la forme d'un <strong>rapport de diagnostic structuré</strong> (points forts, points de vigilance, verdict et perspectives) accompagné d'une <strong>présentation visuelle</strong> au format PDF et du fichier Excel de calcul des indicateurs.</p>

  <p>Ce projet m'a permis de développer une première expérience concrète en <strong>analyse financière d'entreprise</strong>, en lecture de documents comptables réels, en comparaison sectorielle et en synthèse structurée de données chiffrées pour produire un avis argumenté.</p>
  `,
  techs: ["Excel", "Analyse financière", "SIG", "PowerPoint"],
  cover: "assets/projet/but-sd1/Sae_indicateurs/couverture.png",
  photos: [
    {src: "assets/projet/but-sd1/Sae_indicateurs/livrable.png", caption : "Livrable photo 1"},
    {src: "assets/projet/but-sd1/Sae_indicateurs/livrable2.png", caption : "Livrable photo 2"},
    {src: "assets/projet/but-sd1/Sae_indicateurs/livrable3.png", caption : "Livrable photo 3"},
    {src: "assets/projet/but-sd1/Sae_indicateurs/infographie.png", caption : "infographie"},
    {src: "assets/projet/but-sd1/Sae_indicateurs/excel.png", caption : "excel"},
  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_indicateurs/Construction_et_présentation_d_indicateurs_de_performance.zip",
  downloadLabel: "Télécharger le dossier (.zip)",
  },

  {
  id: "but-sd1-sae-regression-lineaire",
  num: "08",
  title: "Régression linéaire - Prix immobiliers niortais",
  subtitle: "Modélisation statistique segmentée sous R, sans fonctions",
  status: "done",
  date: "2026-04",
  semestre: 2,
  year: "2026 — Avril",
  description: `
  <p>Projet réalisé en binôme avec Airy Tagne dans le cadre de la SAE <strong>« Régression sur des données réelles »</strong>. L'objectif était de construire un <strong>modèle de régression linéaire simple</strong> pour prédire les prix de vente de 1 277 logements situés dans la Communauté d'Agglomération du Niortais (Deux-Sèvres), à partir de transactions immobilières réelles enregistrées depuis 2021.</p>

  <p>La première étape a consisté en une <strong>analyse exploratoire approfondie</strong> de la variable cible (valeur foncière), dont la distribution s'étend de 12 000 € à 860 000 € avec une forte asymétrie à droite. Ce constat, couplé à l'observation d'un écart de prix de près de 80 % entre maisons et appartements, a conduit à mettre en place une <strong>segmentation en cinq groupes</strong> : tous les appartements (fusionnés en un segment unique), les maisons de Niort, les maisons périurbaines haut de gamme (Chauray, Bessines, Échiré...), les maisons périurbaines bas de gamme, et les maisons rurales.</p>

  <p>Pour chaque segment, un modèle de régression linéaire <code>Prix = b0 + b1 × Surface</code> a été calibré <strong>manuellement par la méthode des moindres carrés</strong>, sans recourir aux fonctions <code>lm()</code> ni <code>predict()</code> de R. Les valeurs manquantes de surface dans le jeu à prédire ont été remplacées par la médiane du segment correspondant. Les 1 277 prédictions ont ensuite été exportées dans un fichier <code>prediction.csv</code>.</p>

  <p>La principale difficulté a été de trouver la bonne granularité de segmentation : trop fine, elle produisait des groupes avec trop peu d'observations pour être fiables ; trop grossière, elle masquait des disparités de marché réelles entre communes. Le choix final (cinq segments basés sur le type de bien et le niveau de prix moyen par commune) constituait le meilleur compromis entre représentativité et précision.</p>

  <p>Ce projet m'a permis de consolider ma compréhension des <strong>fondements mathématiques de la régression linéaire</strong>, de pratiquer la segmentation de données réelles et de produire un livrable complet incluant rapport d'analyse, script R commenté et fichier de prédictions.</p>
  `,
  techs: ["R", "CSV", "Statistiques", "Régression linéaire"],
  cover: "assets/projet/but-sd1/Sae_regression/couverture.png",
  photos: [
    {src: "assets/projet/but-sd1/Sae_regression/Livrable.png", caption : "Livrable introduction"},
    {src: "assets/projet/but-sd1/Sae_regression/code_r.png", caption : "code R"}

  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_regression/Sae_Regression_linéaire.zip",
  downloadLabel: "Télécharger le projet (.zip)",
  },

  {
  id: "but-sd1-sae-greensd",
  num: "07",
  title: "GreenSD - Système de gestion logistique éco-responsable",
  subtitle: "Conception d'un SGBD et alimentation par scripts Python",
  status: "done",
  date: "2026-03",
  semestre: 2,
  year: "2026 — Mars",
  description: `
  <p>Projet réalisé <strong>en une semaine</strong> dans le cadre de la SAE <strong>« Reporting à partir de données stockées dans un SGBD relationnel »</strong>. L'objectif était de concevoir la base de données MySQL d'une entreprise de livraison éco-responsable fictive, <strong>GreenSD</strong>, et de l'exploiter via une application de bureau développée en <strong>Python / Tkinter</strong>.</p>

  <p>Le cœur de l'application est son <strong>tableau de bord</strong> : dès l'ouverture, trois cartes affichent en temps réel l'état de la base — combien de tables existent, combien d'enregistrements ont été insérés au total, et combien de requêtes SQL sont stockées. Une barre en haut de fenêtre indique en permanence l'heure, le nom de la base connectée et si la connexion MySQL est active ou non.</p>

  <p>Depuis ce tableau de bord, on accède à tous les modules de l'application : <strong>Visualiser</strong> pour consulter le contenu de n'importe quelle table dans un tableau interactif, un ensemble de formulaires pour <strong>ajouter, modifier et supprimer</strong> des enregistrements directement depuis l'interface, un module de <strong>requêtes SQL</strong> pour sélectionner et exécuter des analyses stockées en base, et enfin un espace d'<strong>administration</strong> pour créer la base, lancer les scripts de création et d'insertion, exécuter le script Python d'import CSV, ou remettre les tables à zéro.</p>

  <p>La principale difficulté dans ce délai d'une semaine a été de garder l'interface à jour avec l'état réel de la base après chaque action, de gérer les erreurs MySQL sans faire planter l'application, et d'assurer une navigation fluide entre les pages en nettoyant proprement l'affichage à chaque changement de vue.</p>

  <p>Ce projet m'a permis de développer une première expérience concrète en <strong>développement d'application de bureau avec Tkinter</strong>, en connexion base de données via <code>mysql-connector</code> et en conception d'une interface utilisateur complète, en binôme avec Alix Gouriet.</p>
  `,
  techs: [ "SQL", "phpMyAdmin", "CSV", "Tkinter", "Python" ],
  cover : "assets/projet/but-sd1/Sae_app_greensd/couverture.png",
  photos: [ 
    {src: "assets/projet/but-sd1/Sae_app_greensd/dashboard.png", caption : "Tableau de bord"},
    {src: "assets/projet/but-sd1/Sae_app_greensd/administratif.png", caption : "Onglet administratif"},
    {src: "assets/projet/but-sd1/Sae_app_greensd/table_livreur.png", caption : "table livreur"},
  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_app_greensd/Conception et Implémentation d'une BDD Nathan_Alix.zip",
  downloadLabel: "Télécharger l'application (.zip)",
  },

  {
  id: "but-sd1-sae-telephone",
  num: "06",
  title: "Enquête Téléphone - Usage et dépendance numérique",
  subtitle: "Préparation et synthèse d'un tableau de données",
  status: "done",
  date: "2026-01",
  semestre: 1,
  year: "2026 — Jan.",
  description: `
  <p>Projet réalisé <strong>en une semaine</strong> dans le cadre de la SAE <strong>« Reporting à partir de données stockées dans un SGBD relationnel »</strong>. L'objectif était de concevoir une base de données MySQL pour une entreprise de livraison éco-responsable fictive, <strong>GreenSD</strong>, et de l'exploiter via une interface graphique complète développée en <strong>Python / Tkinter</strong>.</p>

  <p>L'application GreenSD est une interface de bureau à thème sombre organisée en plusieurs modules : un <strong>tableau de bord</strong> affichant en temps réel le nombre de tables, d'enregistrements et de requêtes stockées, un <strong>visualiseur de données</strong> permettant de parcourir le contenu de chaque table via un tableau interactif, un module d'<strong>administration BDD</strong> pour créer la base, exécuter les scripts SQL de création et d'insertion, et supprimer les tables, et enfin un module <strong>CRUD complet</strong> (ajouter, modifier, supprimer des enregistrements) directement depuis l'interface.</p>

  <p>L'application intègre aussi un module de <strong>requêtes SQL</strong> permettant de sélectionner et d'exécuter des requêtes analytiques stockées dans la base (table <code>requetes_sql</code>), ainsi qu'un bouton pour lancer le script Python d'import CSV directement depuis l'interface. Une <strong>topbar</strong> affiche en permanence l'horloge, le nom de la base active et l'état de connexion MySQL en temps réel.</p>

  <p>La principale difficulté, dans un délai d'une semaine, a été de gérer la connexion dynamique à MySQL (sauvegardée en JSON entre les sessions), de synchroniser l'interface avec l'état réel de la base, et de rendre l'outil suffisamment robuste pour encaisser des erreurs SQL sans planter.</p>

  <p>Ce projet m'a permis de développer une première expérience concrète en <strong>développement d'application de bureau avec Tkinter</strong>, en connexion base de données via <code>mysql-connector</code>, et en conception d'une interface utilisateur complète et fonctionnelle, le tout en binôme avec Alix Gouriet sous forte contrainte de temps.</p>
  `,
  techs: ["Excel", "Analyse statistique", "Datavisualisation", "Enquête"],
  cover: "assets/projet/but-sd1/Sae_analyse_enquete/couverture.png",
  photos: [
    {src: "assets/projet/but-sd1/Sae_analyse_enquete/screen1.png", caption : "Paragraphe 1 + graph"},
    {src: "assets/projet/but-sd1/Sae_analyse_enquete/screen2.png", caption : "Paragraphe 2 + graph"},
    {src: "assets/projet/but-sd1/Sae_analyse_enquete/screen3.png", caption : "Tableau de bord"},
  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_analyse_enquete/SAE 3 - L'enquête Téléphone - Nathan Michonneau Alix Gouriet.pdf",
  downloadLabel: "Télécharger (.pdf)",
  },

  {
  id: "but-sd1-sae-educheck",
  num: "05",
  title: "EduCheck - Système de gestion des notes académiques",
  subtitle: "Reporting à partir de données stockées dans un SGBD relationnel",
  status: "done",
  date: "2025-12",
  semestre: 1,
  year: "2025 — Déc.",
  description: `
  <p>Projet réalisé dans le cadre de la SAE <strong>« Reporting à partir de données stockées dans un SGBD relationnel »</strong>. L'objectif était de produire un rapport structuré à partir de données académiques stockées dans une base de données relationnelle, en exploitant <strong>Excel</strong> comme outil d'analyse et de visualisation.</p>

  <p>Le travail a consisté à interroger, nettoyer et structurer les données issues du SGBD afin de produire des tableaux de bord clairs et exploitables : moyennes par matière, par module et par semestre, le tout en tenant compte des coefficients associés à chaque unité d'enseignement.</p>

  <p>En parallèle du livrable attendu, nous avons développé <strong>EduCheck</strong>, un outil Excel complet réalisé en bonus avec <strong>Alix Gouriet</strong>. Il s'agit d'un véritable système de gestion de notes organisé en quatre feuilles interdépendantes : un tableau de bord interactif, une base de données structurée, une feuille de calcul des moyennes et une vue graphique des résultats. L'interface repose sur des <strong>formulaires VBA</strong> permettant d'ajouter, modifier ou supprimer des notes sans toucher directement aux données, avec gestion des absences justifiées et des ABI.</p>

  <p>La principale difficulté a été de concevoir une architecture cohérente entre les feuilles pour que les moyennes se recalculent automatiquement à chaque saisie, tout en garantissant l'intégrité des données. Nous avons également rédigé un <strong>guide utilisateur complet</strong> pour documenter l'outil.</p>

  <p>Ce projet m'a permis de renforcer mes compétences en <strong>reporting de données</strong> et en <strong>modélisation relationnelle</strong>, tout en développant une première expérience concrète en automatisation <strong>VBA</strong> et en conception d'interface utilisateur sous Excel.</p>
  `,
  techs: ["Excel", "VBA", "SGBD", "Reporting", "Datavisualisation"],
  photos: [
    { src: "assets/projet/but-sd1/Sae_app_notes/dashboard.png", caption: "Écran d'accueil (notes fictives)" },
    { src: "assets/projet/but-sd1/Sae_app_notes/resultats.png", caption: "Résultats (notes fictives)" },
  ],
  cover: "assets/projet/but-sd1/Sae_app_notes/couverture.png",
  github: null,
  download: "assets/projet/but-sd1/Sae_app_notes/EduCheck - SAE reporting à partir de données stockées dans un SGBD relationnel - Nathan et Alix .zip",
  downloadLabel: "Télécharger (.zip) — notes fictives",
  },

  {
  id: "but-sd1-sae-enquete",
  num: "04",
  title: "Conception d'une enquête sur les réseaux sociaux",
  subtitle: "Création d'un questionnaire avec Sphinx",
  status: "done",
  date: "2025-11",
  semestre: 1,
  year: "2025 — Nov.",
  description: `
  <p>Projet réalisé dans le cadre de la SAE <strong>« Mise en œuvre d'une enquête »</strong>. L'objectif était de concevoir une enquête sur l'utilisation des réseaux sociaux chez les jeunes afin d'étudier leurs habitudes, leurs pratiques et leur perception de ces outils numériques.</p>

  <p>En groupe, nous avons commencé par réaliser un <strong>cahier des charges</strong> définissant les objectifs de l'enquête, le public cible et les modalités de diffusion du questionnaire. Nous avons ensuite élaboré un <strong>organigramme</strong> permettant de structurer les différentes questions et d'organiser le parcours des répondants.</p>

  <p>Le questionnaire a été conçu à l'aide du logiciel <strong>Sphinx</strong>. Nous avons travaillé sur la formulation des questions et le choix des modalités de réponse afin de recueillir des données pertinentes sur les usages des réseaux sociaux, le temps passé sur les différentes plateformes et les effets positifs ou négatifs ressentis par les utilisateurs.</p>

  <p>La principale difficulté a été de construire un questionnaire à la fois complet, cohérent et facile à comprendre. Il a également fallu sélectionner les questions les plus pertinentes tout en limitant la longueur de l'enquête afin d'encourager la participation des répondants.</p>

  <p>Ce projet m'a permis de découvrir les différentes étapes de la conception d'une enquête statistique, depuis la définition des objectifs jusqu'à la création du questionnaire. J'ai également développé mes compétences en méthodologie d'enquête, en rédaction de questions et en utilisation du logiciel Sphinx, tout en renforçant ma capacité à travailler en équipe.</p>
  `,
  techs: ["Sphinx", "enquête", "Travail en équipe"],
  cover : "assets/projet/but-sd1/Sae_mise_en_place_enquete/couverture.png",
  photos: [
    {src: "assets/projet/but-sd1/Sae_mise_en_place_enquete/organigrame.png", caption : "organigrame"},
  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_mise_en_place_enquete/SAE_Enquete_Groupe14.pdf",
  downloadLabel: "Télécharger (.pdf)",
  },

  {
  id: "but-sd1-sae-démograhie",
  num: "03",
  title: "Étude des villes les plus natalistes de France",
  subtitle: "Production et analyse de données",
  status: "done",
  date: "2025-11",
  semestre: 1,
  year: "2025 — Nov.",
  description: `
  <p>Projet réalisé dans le cadre de la SAE <strong>« Apprendre en situation la production de données en entreprise »</strong>. L'objectif était d'étudier les communes françaises présentant les taux de natalité les plus élevés afin d'identifier les facteurs favorisant leur dynamisme démographique.</p>

  <p>À partir des données de l'<strong>INSEE</strong>, nous avons constitué un échantillon regroupant les communes appartenant au dernier centile des taux de natalité observés entre 2016 et 2022. Afin d'éviter les biais liés aux petites populations, seules les communes de plus de 1 000 habitants ont été conservées.</p>

  <p>Le travail a principalement consisté à collecter, nettoyer et analyser les données sous <strong>Excel</strong>. Nous avons étudié plusieurs indicateurs tels que l'évolution de la population, la structure par âge et les catégories socioprofessionnelles afin de comparer ces communes à la moyenne nationale.</p>

  <p>La principale difficulté a été de sélectionner les indicateurs les plus pertinents et d'interpréter correctement les résultats statistiques. Il a également fallu veiller à construire un échantillon représentatif et à éviter les conclusions hâtives à partir des données observées.</p>

  <p>Ce projet m'a permis de renforcer mes compétences en traitement de données, en analyse statistique et en interprétation de résultats. J'ai également développé ma maîtrise d'Excel pour la création de tableaux, de calculs et de visualisations, tout en travaillant en équipe sur l'ensemble du projet.</p>
  `,
  techs: ["Excel", "INSEE", "Analyse statistique", "Datavisualisation"],
  cover : "assets/projet/but-sd1/Sae_Demographie/couverture.png",
  photos: [
    { src: "assets/projet/but-sd1/Sae_Demographie/pyramide.png", caption: "Analyse démographique" },
  ],
  github: null,
  download: "assets/projet/but-sd1/Sae_Demographie/Sae-Demographie.pdf",
  downloadLabel: "Télécharger (.pdf)",
  },


  {
    id: "but-sd1-gestion-fichiers",
    num: "02",
    title: "Projet Gestion de fichiers",
    subtitle: "JSON → CSV",
    status: "done",
    date: "2025-10",      
    semestre: 1,
    year: "2025 — oct.",
    description: `
    <p>Projet réalisé en première année du BUT Science des Données intitulé "Gestion de fichiers".</p>
    <p>Le sujet portait sur l'exploitation d'un jeu de données réel en format <strong>JSON</strong> contenant des mesures de qualité de l'air (concentrations de différents polluants sur plusieurs stations).</p>
    <p>L'objectif principal était de développer un script en <strong>Python (Spyder)</strong> permettant de transformer et structurer les données afin d'obtenir un fichier <strong>CSV propre et exploitable</strong>.</p>
    <p>Les étapes principales : analyse de la structure du fichier JSON, extraction et filtrage des données pertinentes, suppression des lignes incomplètes, puis réorganisation des informations selon les colonnes demandées (Nom_Station, coordonnées, date de prélèvement, polluant, valeur, unité, remarques).</p>
    <p>Un soin particulier a été apporté au formatage des données (encodage, accents, séparateur point-virgule, et format de date en français) afin de garantir une compatibilité avec Excel.</p>
    <p>Le projet a permis de renforcer les compétences en <strong>traitement de données avec Python</strong>, en logique de transformation de structures de données et en production de scripts fiables et reproductibles.</p>
    `,
    techs: ["Python", "JSON", "CSV" , "Spyder"],
    cover : "assets/projet/but-sd1/Sae_Json_vers_csv/couverture.png",
    photos: [
      { src: "assets/projet/but-sd1/Sae_Json_vers_csv/gestion_donnee_fichier_json.png", caption: "Fichier JSON de départ" },
      { src: "assets/projet/but-sd1/Sae_Json_vers_csv/gestion_donnees_csv.png", caption: "Fichier CSV de fin" },
    ],
    github: null,
    download: "assets/projet/but-sd1/Sae_Json_vers_csv/JSON_vers_CSV.py",
    downloadLabel: "Télécharger (.py)",
  },

  {
    id: "but-sd1-territoire",
    num: "01",
    title: "Présentation d'un territoire",
    subtitle: "Oral en Anglais et en Français",
    status: "done",
    date: "2025-10",
    semestre: 1,
    year: "2025 — oct.",
    description: `
    <p>Projet réalisé dans le cadre du premier projet de l’année, consistant à présenter une ville de taille comparable à Niort en termes de population.</p> 
    <p>En groupe, nous avons choisi les villes de <strong>Bourges</strong> et <strong>Peterborough</strong>. 
    Ce travail associait recherche documentaire, synthèse d’informations et préparation d’une présentation orale, réalisée à la fs en français et en anglais.</p>
    <p>Les recherches se sont déroulées sans difficulté majeure. En revanche, la conception du <strong>PowerPoint</strong> a été plus exigeante : il a fallu organiser et hiérarchiser les informations de manière claire tout en conservant un format synthétique.</p>
    <p>La principale contrainte a été la réduction et la sélection des données pertinentes : choisir les bons mots, les informations essentielles et structurer les diapositives afin d’éviter toute surcharge.</p> 
    <p>À l’oral, je me suis senti à l’aise aussi bien en français qu’en anglais. Ce projet m’a permis de développer mes compétences en expression écrite et orale dans les deux langues, ainsi que de renforcer mon travail en équipe, dont l’organisation s’est faite de manière fluide.</p>
    `,
    techs: ["PowerPoint", "Anglais", "Français", "Oral"],
    cover : "assets/projet/but-sd1/Sae_Territoire/couverture.png",
    photos: [
      { src: "assets/projet/but-sd1/Sae_Territoire/territoire-diapo1.png", caption: "Diapositive" },
    ],
    github: null,
    download: "assets/projet/but-sd1/Sae_Territoire/Diapo SAE Territoire Nathan,Lucas,Alix.odp",
    downloadLabel: "Télécharger le powerpoint(.odp)",
  },

  // Ajoutez un nouveau projet ici
  // {
  //   id: "mon-projet",
  //   num: "04",
  //   title: "Mon Nouveau Projet",
  //   subtitle: "Courte description",
  //   status: "wip",
  //   date: "2025-03",    // YYYY-MM
  //   semestre: 2,        // 1 ou 2
  //   year: "2025",
  //   description: `<p>Description HTML ici.</p>`,
  //   techs: ["React", "Node.js"],
  //   photos: [],
  //   github: "https://github.com/...",
  //   download: "assets/projet/mon-projet/archive.zip",
  //   downloadLabel: "Télécharger (.zip)",
  // },
];
