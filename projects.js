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
    num: "10",
    title: "Portfolio Personnel",
    subtitle: "Design & Développement Web",
    status: "done",
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
    photos: [],
    github: "https://github.com/nathanmichonneau/nathanmichonneau.github.io",
    download: null,
    downloadLabel: "Téléchargable sur mon github",
  },

  {
  id: "but-sd1-sae-enquete",
  num: "04",
  title: "Conception d'une enquête sur les réseaux sociaux",
  subtitle: "Création d'un questionnaire avec Sphinx",
  status: "done",
  date: "2025-12",
  semestre: 1,
  year: "2025 — déc.",
  description: `
  <p>Projet réalisé dans le cadre de la SAE <strong>« Mise en œuvre d'une enquête »</strong>. L'objectif était de concevoir une enquête sur l'utilisation des réseaux sociaux chez les jeunes afin d'étudier leurs habitudes, leurs pratiques et leur perception de ces outils numériques.</p>

  <p>En groupe, nous avons commencé par réaliser un <strong>cahier des charges</strong> définissant les objectifs de l'enquête, le public cible et les modalités de diffusion du questionnaire. Nous avons ensuite élaboré un <strong>organigramme</strong> permettant de structurer les différentes questions et d'organiser le parcours des répondants.</p>

  <p>Le questionnaire a été conçu à l'aide du logiciel <strong>Sphinx</strong>. Nous avons travaillé sur la formulation des questions et le choix des modalités de réponse afin de recueillir des données pertinentes sur les usages des réseaux sociaux, le temps passé sur les différentes plateformes et les effets positifs ou négatifs ressentis par les utilisateurs.</p>

  <p>La principale difficulté a été de construire un questionnaire à la fois complet, cohérent et facile à comprendre. Il a également fallu sélectionner les questions les plus pertinentes tout en limitant la longueur de l'enquête afin d'encourager la participation des répondants.</p>

  <p>Ce projet m'a permis de découvrir les différentes étapes de la conception d'une enquête statistique, depuis la définition des objectifs jusqu'à la création du questionnaire. J'ai également développé mes compétences en méthodologie d'enquête, en rédaction de questions et en utilisation du logiciel Sphinx, tout en renforçant ma capacité à travailler en équipe.</p>
  `,
  techs: ["Sphinx", "enquête", "Travail en équipe"],
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
  date: "2025-12",
  semestre: 1,
  year: "2025 — déc.",
  description: `
  <p>Projet réalisé dans le cadre de la SAE <strong>« Apprendre en situation la production de données en entreprise »</strong>. L'objectif était d'étudier les communes françaises présentant les taux de natalité les plus élevés afin d'identifier les facteurs favorisant leur dynamisme démographique.</p>

  <p>À partir des données de l'<strong>INSEE</strong>, nous avons constitué un échantillon regroupant les communes appartenant au dernier centile des taux de natalité observés entre 2016 et 2022. Afin d'éviter les biais liés aux petites populations, seules les communes de plus de 1 000 habitants ont été conservées.</p>

  <p>Le travail a principalement consisté à collecter, nettoyer et analyser les données sous <strong>Excel</strong>. Nous avons étudié plusieurs indicateurs tels que l'évolution de la population, la structure par âge et les catégories socioprofessionnelles afin de comparer ces communes à la moyenne nationale.</p>

  <p>La principale difficulté a été de sélectionner les indicateurs les plus pertinents et d'interpréter correctement les résultats statistiques. Il a également fallu veiller à construire un échantillon représentatif et à éviter les conclusions hâtives à partir des données observées.</p>

  <p>Ce projet m'a permis de renforcer mes compétences en traitement de données, en analyse statistique et en interprétation de résultats. J'ai également développé ma maîtrise d'Excel pour la création de tableaux, de calculs et de visualisations, tout en travaillant en équipe sur l'ensemble du projet.</p>
  `,
  techs: ["Excel", "INSEE", "Analyse statistique", "Datavisualisation"],
  photos: [
    { src: "assets/projet/but-sd1/Sae_demographie/pyramide.png", caption: "Analyse démographique" },
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
    date: "2025-12",      // Novembre/Décembre → on prend le mois de fin
    semestre: 1,
    year: "2025 — Nov./Déc.",
    description: `
    <p>Projet réalisé en première année du BUT Science des Données intitulé "Gestion de fichiers".</p>
    <p>Le sujet portait sur l'exploitation d'un jeu de données réel en format <strong>JSON</strong> contenant des mesures de qualité de l'air (concentrations de différents polluants sur plusieurs stations).</p>
    <p>L'objectif principal était de développer un script en <strong>Python (Spyder)</strong> permettant de transformer et structurer les données afin d'obtenir un fichier <strong>CSV propre et exploitable</strong>.</p>
    <p>Les étapes principales : analyse de la structure du fichier JSON, extraction et filtrage des données pertinentes, suppression des lignes incomplètes, puis réorganisation des informations selon les colonnes demandées (Nom_Station, coordonnées, date de prélèvement, polluant, valeur, unité, remarques).</p>
    <p>Un soin particulier a été apporté au formatage des données (encodage, accents, séparateur point-virgule, et format de date en français) afin de garantir une compatibilité avec Excel.</p>
    <p>Le projet a permis de renforcer les compétences en <strong>traitement de données avec Python</strong>, en logique de transformation de structures de données et en production de scripts fiables et reproductibles.</p>
    `,
    techs: ["Python", "JSON", "CSV" , "Spyder"],
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
    semestre: 2,
    year: "2025 — oct./nov.",
    description: `
    <p>Projet réalisé dans le cadre du premier projet de l’année, consistant à présenter une ville de taille comparable à Niort en termes de population.</p> 
    <p>En groupe, nous avons choisi les villes de <strong>Bourges</strong> et <strong>Peterborough</strong>. 
    Ce travail associait recherche documentaire, synthèse d’informations et préparation d’une présentation orale, réalisée à la fs en français et en anglais.</p>
    <p>Les recherches se sont déroulées sans difficulté majeure. En revanche, la conception du <strong>PowerPoint</strong> a été plus exigeante : il a fallu organiser et hiérarchiser les informations de manière claire tout en conservant un format synthétique.</p>
    <p>La principale contrainte a été la réduction et la sélection des données pertinentes : choisir les bons mots, les informations essentielles et structurer les diapositives afin d’éviter toute surcharge.</p> 
    <p>À l’oral, je me suis senti à l’aise aussi bien en français qu’en anglais. Ce projet m’a permis de développer mes compétences en expression écrite et orale dans les deux langues, ainsi que de renforcer mon travail en équipe, dont l’organisation s’est faite de manière fluide.</p>
    `,
    techs: ["PowerPoint", "Anglais", "Français", "Oral"],
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
