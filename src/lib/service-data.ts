export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: { title: string; description: string }[];
  methodology: { step: string; title: string; description: string }[];
  tools: string[];
  cta: string;
  heroDescription: string;
  faq: ServiceFAQ[];
}

export const services: ServiceData[] = [
  {
    slug: "data-strategy",
    title: "Data Strategy",
    shortTitle: "Stratégie Data",
    icon: "Database",
    description:
      "Définissez votre roadmap data, mettez en place une gouvernance efficace et concevez des architectures data scalables pour transformer vos données en avantage compétitif.",
    features: [
      "Audit de maturité data",
      "Roadmap et stratégie data",
      "Gouvernance des données",
      "Architecture data scalable",
      "Data quality management",
      "Change management data",
    ],
    benefits: [
      "Décisions éclairées basées sur les données",
      "Alignement stratégique data-business",
      "Réduction des silos de données",
      "Conformité RGPD intégrée",
      "ROI mesurable sur les investissements data",
      "Culture data dans toute l'entreprise",
    ],
    useCases: [
      {
        title: "Governance framework pour groupe industriel",
        description:
          "Mise en place d'un framework de gouvernance data pour un groupe industriel de 10 000+ collaborateurs, avec définition des rôles, processus et outils.",
      },
      {
        title: "Roadmap data pour fintech",
        description:
          "Élaboration d'une roadmap data sur 3 ans pour une fintech en croissance, incluant architecture cible et plan de migration.",
      },
      {
        title: "Data quality pour retail",
        description:
          "Déploiement d'une solution de data quality pour un retailer, réduisant les erreurs de données de 85%.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Audit de la maturité data existante et identification des enjeux stratégiques." },
      { step: "02", title: "Design", description: "Conception de la roadmap et de l'architecture data cible." },
      { step: "03", title: "Deploy", description: "Mise en place de la gouvernance et des outils data." },
      { step: "04", title: "Deliver", description: "Suivi des KPIs et optimisation continue de la stratégie." },
    ],
    cta: "Définissez votre stratégie data",
    tools: ["AWS", "Azure", "GCP", "Snowflake", "Dataiku"],
    heroDescription:
      "Transformez vos données en levier stratégique. Notre approche holistique combine gouvernance, architecture et culture data pour un impact durable.",
    faq: [
      {
        question: "Qu'est-ce qu'une stratégie data et pourquoi en avez-vous besoin ?",
        answer: "Une stratégie data est un plan structuré qui définit comment votre organisation collecte, gère et exploite ses données pour atteindre ses objectifs business. Sans stratégie claire, les données restent dispersées dans des silos, les investissements technologiques sont mal orientés et le ROI est faible. Une stratégie data bien définie aligne l'architecture, la gouvernance et la culture data sur vos priorités métier, permettant des décisions éclairées et un avantage compétitif durable.",
      },
      {
        question: "Comment se déroule un audit de maturité data ?",
        answer: "Notre audit de maturité data évalue votre organisation sur 5 dimensions : gouvernance, architecture, qualité des données, culture data et valorisation. Nous analysons vos processus existants, vos outils, vos flux de données et le niveau d'autonomie de vos équipes. L'audit se déroule sur 2 à 4 semaines avec des ateliers, des interviews et une analyse technique. Le livrable inclut un score de maturité, une cartographie des gaps et une feuille de route priorisée avec des quick wins immédiats.",
      },
      {
        question: "Quelle est la différence entre gouvernance data et stratégie data ?",
        answer: "La stratégie data définit le « pourquoi » et le « où » : vos objectifs, votre roadmap et l'architecture cible. La gouvernance data définit le « comment » : les règles, les rôles, les processus et les standards qui assurent la qualité, la sécurité et la conformité des données. Les deux sont complémentaires et indissociables. Une stratégie sans gouvernance ne produit pas de résultats fiables, et une gouvernance sans stratégie manque de direction.",
      },
      {
        question: "Combien coûte un projet de stratégie data ?",
        answer: "Le coût dépend de la portée et de la maturité existante. Un audit de maturité data démarre à partir de 8 000 €. Une stratégie data complète avec gouvernance et roadmap coûte généralement entre 25 000 € et 60 000 €. Pour une transformation data d'envergure incluant architecture et mise en œuvre, le budget peut atteindre 100 000 € à 300 000 €. Nous proposons systématiquement une estimation détaillée après la phase de cadrage, avec un ROI projeté.",
      },
      {
        question: "Quels résultats concrets pouvons-nous attendre ?",
        answer: "Nos clients constatent en moyenne une réduction de 70% du temps d'accès aux données, une amélioration de 50% de la qualité des données, et un ROI de 3x sur les investissements data. Concrètement, cela se traduit par des décisions plus rapides, des rapports fiables et automatisés, une conformité RGPD assurée, et des équipes autonomes dans l'exploitation de leurs données. Nous mesurons ces résultats avec des KPIs définis dès le départ.",
      },
    ],
  },
  {
    slug: "bi-dashboards",
    title: "BI & Dashboards",
    shortTitle: "BI & Dashboards",
    icon: "BarChart3",
    description:
      "Créez des tableaux de bord interactifs et sur mesure avec Power BI, Looker ou Tableau pour des décisions basées sur les données en temps réel.",
    features: [
      "Tableaux de bord interactifs",
      "Power BI / Looker / Tableau",
      "Data storytelling",
      "Self-service BI",
      "Alertes et monitoring",
      "Mobile BI",
    ],
    benefits: [
      "Décisions rapides et éclairées",
      "Adoption utilisateur maximale",
      "Accès aux données en temps réel",
      "Réduction des rapports manuels",
      "Visualisations impactantes",
      "Autonomie des équipes métier",
    ],
    useCases: [
      {
        title: "Executive dashboard pour énergie",
        description:
          "Dashboard stratégique pour le COMEX d'un géant de l'énergie, consolidant 12 sources de données en temps réel.",
      },
      {
        title: "Self-service BI pour pharma",
        description:
          "Plateforme self-service BI pour un laboratoire pharmaceutique, permettant aux équipes de créer leurs propres rapports.",
      },
      {
        title: "Sales analytics pour retail",
        description:
          "Solution d'analytics commerciale pour un retailer avec prévisions de ventes et optimisation des stocks.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Analyse des besoins métier et des sources de données existantes." },
      { step: "02", title: "Design", description: "Conception des maquettes et de l'architecture de la solution BI." },
      { step: "03", title: "Deploy", description: "Développement, test et déploiement des tableaux de bord." },
      { step: "04", title: "Deliver", description: "Formation des utilisateurs et optimisation continue." },
    ],
    cta: "Créez vos dashboards",
    tools: ["Power BI", "Looker", "Tableau", "Snowflake", "dbt"],
    heroDescription:
      "Des tableaux de bord qui racontent votre histoire data. Conçus pour l'impact, adoptés par les équipes.",
    faq: [
      {
        question: "Quelle est la différence entre Power BI, Looker et Tableau ?",
        answer: "Power BI offre la meilleure intégration avec l'écosystème Microsoft et un rapport qualité-prix excellent, idéal pour les entreprises déjà sur Office 365. Looker excelle dans le data modeling avec LookML et l'embed analytics, parfait pour les organisations data-first. Tableau est le leader de la visualisation avancée avec une flexibilité créative inégalée. Notre équipe vous aide à choisir la solution la plus adaptée à votre contexte technique, vos usages et votre budget.",
      },
      {
        question: "Combien de temps faut-il pour créer un dashboard opérationnel ?",
        answer: "Un dashboard MVP peut être livré en 2 à 4 semaines à partir de données déjà structurées. Un projet BI complet avec modélisation, ETL et plusieurs dashboards prend généralement 6 à 12 semaines. Pour une plateforme self-service BI avec formation des équipes, comptez 3 à 4 mois. Nous privilégions les livrables itératifs : un premier dashboard fonctionnel rapidement, puis des itérations successives basées sur les retours utilisateurs.",
      },
      {
        question: "Qu'est-ce que le data storytelling et pourquoi est-ce important ?",
        answer: "Le data storytelling est l'art de communiquer des insights à travers une combinaison de données, de visualisations et de narration. Un bon dashboard ne se contente pas d'afficher des chiffres : il guide l'utilisateur vers les insights clés, contextualise les métriques et facilite la prise de décision. Selon Forbes, les entreprises qui pratiquent le data storytelling constatent une adoption de leurs outils BI 2x supérieure à celles qui se limitent à des rapports bruts.",
      },
      {
        question: "Comment assurer l'adoption des dashboards par les équipes ?",
        answer: "L'adoption est au cœur de notre approche. Nous impliquons les utilisateurs finaux dès la conception via des ateliers co-creatives, nous concevons des interfaces intuitives adaptées à chaque profil (executif, analyste, opérationnel), et nous assurons une formation personnalisée. Notre taux d'adoption moyen est de 90% à 3 mois. Nous mettons également en place des indicateurs d'usage et des boucles de feedback pour optimiser continuellement l'expérience utilisateur.",
      },
      {
        question: "Vos dashboards fonctionnent-ils sur mobile ?",
        answer: "Oui, tous nos dashboards sont conçus avec une approche mobile-first. Nous adaptons les visualisations, les filtres et la navigation pour une expérience optimale sur tablette et smartphone. Power BI et Looker offrent des apps natives performantes. Pour les besoins avancés, nous développons des interfaces sur mesure avec framework responsive. L'accès mobile est essentiel : 40% des consultations de dashboards se font sur mobile chez nos clients.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "Solutions IA",
    icon: "Brain",
    description:
      "Du POC à la production, déployez des solutions d'intelligence artificielle : Machine Learning, NLP, vision par ordinateur et systèmes de recommandation.",
    features: [
      "Machine Learning",
      "NLP & Chatbots",
      "Vision par ordinateur",
      "Systèmes de recommandation",
      "MLOps & déploiement",
      "IA éthique et responsable",
    ],
    benefits: [
      "Automatisation intelligente",
      "Prédiction et anticipation",
      "Personnalisation à grande échelle",
      "Déploiement rapide (POC en 4 semaines)",
      "Solutions responsables et éthiques",
      "ROI mesurable sur les projets IA",
    ],
    useCases: [
      {
        title: "Maintenance prédictive pour industrie",
        description:
          "Solution de maintenance prédictive pour un constructeur automobile, réduisant les pannes de 40%.",
      },
      {
        title: "NLP pour service client",
        description:
          "Chatbot intelligent pour un opérateur télécoms, automatisant 60% des demandes niveau 1.",
      },
      {
        title: "Vision pour contrôle qualité",
        description:
          "Système de vision par ordinateur pour un fabricant, détectant 99.5% des défauts de production.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Identification des cas d'usage IA à fort ROI et faisabilité." },
      { step: "02", title: "Design", description: "Conception du POC et validation de l'approche technique." },
      { step: "03", title: "Deploy", description: "Industrialisation et déploiement en production avec MLOps." },
      { step: "04", title: "Deliver", description: "Monitoring, retraining et optimisation des modèles." },
    ],
    cta: "Explorez l'IA pour votre business",
    tools: ["Python", "Spark", "Databricks", "Azure", "GCP"],
    heroDescription:
      "De l'idée au déploiement, nous concrétisons vos ambitions IA avec des solutions robustes, scalables et responsables.",
    faq: [
      {
        question: "Quelle est la différence entre un POC IA et une mise en production ?",
        answer: "Un POC (Proof of Concept) valide la faisabilité technique et le ROI potentiel d'un cas d'usage IA sur un périmètre restreint, généralement en 4 à 6 semaines. La mise en production industrialise le modèle : scalabilité, monitoring, retraining automatisé, CI/CD ML et intégration aux systèmes existants. Selon Gartner, seulement 20% des POC IA atteignent le stade de la production. Notre approche MLOps et notre méthodologie en 4 phases garantissent que chaque POC est conçu pour être industrialisable.",
      },
      {
        question: "Quels types de problèmes l'IA peut-elle résoudre dans mon entreprise ?",
        answer: "L'IA est particulièrement efficace pour 4 catégories de problèmes : la prédiction (maintenance prédictive, prévision de demande, scoring), l'automatisation cognitive (NLP, chatbots, extraction de documents), la vision (contrôle qualité, détection d'anomalies, imagerie médicale) et la personnalisation (recommandation, pricing dynamique). La clé est d'identifier les cas d'usage à fort ROI et techniquement faisables. Notre phase de diagnostic identifie et priorise ces opportunités spécifiquement pour votre contexte.",
      },
      {
        question: "Comment gérez-vous les risques éthiques liés à l'IA ?",
        answer: "L'éthique IA est intégrée dès la conception de chaque projet. Nous appliquons un framework d'IA responsable couvrant 5 dimensions : équité (détection et correction des biais), transparence (explicabilité des modèles), sécurité (robustesse adversariale), confidentialité (privacy-preserving ML) et gouvernance (validation humaine, audit trail). Nos modèles sont documentés selon les standards Model Cards et nous effectuons des audits de biais réguliers. Nous sommes alignés avec l'AI Act européen.",
      },
      {
        question: "Qu'est-ce que le MLOps et pourquoi est-ce indispensable ?",
        answer: "Le MLOps est l'ensemble des pratiques qui permettent de gérer le cycle de vie complet des modèles IA en production : versionning des données et des modèles, CI/CD ML automatisé, monitoring de performance et de drift, retraining programmé, et gouvernance des modèles. Sans MLOps, les modèles se dégradent rapidement en production (data drift, concept drift), les mises à jour sont manuelles et risquées, et la traçabilité est absente. Les entreprises avec MLOps déploient 3x plus de modèles et réduisent de 60% leur time-to-deployment.",
      },
      {
        question: "Combien coûte un projet IA et quel ROI peut-on attendre ?",
        answer: "Un POC IA démarre à partir de 15 000 € pour 4 à 6 semaines. Un projet complet avec mise en production et MLOps se situe entre 50 000 € et 150 000 €. Pour des solutions IA d'entreprise avec intégration SI complète, le budget peut atteindre 200 000 € à 500 000 €. Le ROI varie par secteur : la maintenance prédictive génère un ROI de 5x à 10x, les chatbots un ROI de 3x à 8x, et la détection de fraude un ROI de 10x à 20x. Nous définissons les KPIs de ROI dès la phase de cadrage.",
      },
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    shortTitle: "Data Engineering",
    icon: "HardHat",
    description:
      "Concevez et déployez des pipelines de données robustes avec dbt, Airflow et Spark. Architectures data lake et data warehouse optimisées.",
    features: [
      "Pipelines ETL/ELT",
      "Data lakes & warehouses",
      "dbt / Airflow / Spark",
      "Streaming & temps réel",
      "Data quality & lineage",
      "Infrastructure as Code",
    ],
    benefits: [
      "Données fiables et accessibles",
      "Pipelines performants et résilients",
      "Coûts d'infrastructure optimisés",
      "Time-to-data réduit",
      "Scalabilité automatique",
      "Traçabilité complète des données",
    ],
    useCases: [
      {
        title: "Data platform pour banque",
        description:
          "Plateforme data unifiée pour une banque, intégrant 20+ sources avec orchestration Airflow et transformation dbt.",
      },
      {
        title: "Streaming pour e-commerce",
        description:
          "Architecture streaming temps réel pour un e-commerce, traitant 1M+ événements par heure avec Kafka.",
      },
      {
        title: "Migration data warehouse",
        description:
          "Migration d'un data warehouse legacy vers Snowflake pour un groupe média, réduisant les coûts de 60%.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Cartographie des flux de données et audit de l'existant." },
      { step: "02", title: "Design", description: "Architecture data cible et choix technologiques." },
      { step: "03", title: "Deploy", description: "Développement et déploiement des pipelines et infrastructures." },
      { step: "04", title: "Deliver", description: "Monitoring, optimisation et documentation complète." },
    ],
    cta: "Modernisez vos pipelines data",
    tools: ["dbt", "Airflow", "Spark", "Kafka", "Snowflake", "Fivetran"],
    heroDescription:
      "Des fondations data solides pour des insights fiables. Nous construisons l'infrastructure qui propulse votre transformation data.",
    faq: [
      {
        question: "Quelle est la différence entre ETL et ELT ?",
        answer: "ETL (Extract-Transform-Load) transforme les données avant de les charger dans le stockage, ce qui convient aux data warehouses traditionnels. ELT (Extract-Load-Transform) charge d'abord les données brutes puis les transforme directement dans le stockage cible (Snowflake, BigQuery), ce qui est plus performant et scalable pour les architectures modernes. Nous recommandons l'ELT avec dbt pour la majorité des projets actuels, car il sépare la transformation du pipeline et permet des itérations plus rapides.",
      },
      {
        question: "Comment choisir entre data lake, data warehouse et data lakehouse ?",
        answer: "Le data lake stocke les données brutes à bas coût, idéal pour le big data et le ML. Le data warehouse stocke les données structurées optimisées pour l'analytique et la BI. Le data lakehouse combine les deux : stockage brut à bas coût + performances analytiques du warehouse sur les mêmes données, via des technologies comme Delta Lake ou Apache Iceberg. Pour les entreprises qui démarrent, nous recommandons souvent un data lakehouse sur Snowflake ou Databricks pour éviter la complexité de deux architectures séparées.",
      },
      {
        question: "Quels outils utilisez-vous pour l'orchestration de pipelines ?",
        answer: "Notre stack d'orchestration principale repose sur Apache Airflow, le standard de l'industrie pour les workflows data complexes. Nous utilisons également dbt pour les transformations SQL, Fivetran pour l'intégration de données SaaS, et Kafka pour le streaming temps réel. Pour les architectures cloud-native, nous intégrons AWS Step Functions, Azure Data Factory ou GCP Cloud Composer. Le choix dépend de votre écosystème existant, de la complexité des pipelines et des exigences de temps réel.",
      },
      {
        question: "Comment assurez-vous la qualité des données dans les pipelines ?",
        answer: "Nous intégrons la data quality à chaque étape du pipeline avec une approche en 3 couches : des tests dbt à la transformation (schéma, unicité, référentiel), des checks Great Expectations à l'ingestion (complétude, cohérence), et un monitoring continu en production avec des alertes sur les anomalies et les drifts. Chaque pipeline inclut un data lineage complet pour tracer l'origine et les transformations de chaque champ. Notre objectif est de détecter et corriger les problèmes de données avant qu'ils n'impactent les utilisateurs finaux.",
      },
      {
        question: "Quel est le coût d'une plateforme data engineering ?",
        answer: "Le coût se décompose en deux parties : le développement (one-time) et l'infrastructure (récurrent). Un pipeline ETL/ELT basique coûte entre 15 000 € et 30 000 € en développement. Une plateforme data complète avec orchestration, qualité et monitoring se situe entre 50 000 € et 150 000 €. L'infrastructure cloud varie de 1 000 € à 10 000 €/mois selon les volumes et la complexité. Nous optimisons les coûts avec du rightsizing, des reserved instances et des pratiques FinOps pour maintenir le TCO le plus bas possible.",
      },
    ],
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    shortTitle: "Automatisation",
    icon: "Cog",
    description:
      "Automatisez vos processus métier avec RPA, orchestration de workflows et automatisation intelligente pour gagner en efficacité.",
    features: [
      "RPA & automatisation",
      "Orchestration de workflows",
      "Intelligent automation",
      "Process mining",
      "Digital workers",
      "Monitoring & analytics",
    ],
    benefits: [
      "Gain de temps significatif",
      "Réduction des erreurs humaines",
      "Conformité automatisée",
      "Scalabilité des opérations",
      "Employés libérés des tâches répétitives",
      "ROI rapide (3-6 mois)",
    ],
    useCases: [
      {
        title: "RPA pour assurances",
        description:
          "Automatisation des processus de souscription pour un assureur, réduisant le temps de traitement de 80%.",
      },
      {
        title: "Workflow intelligent pour RH",
        description:
          "Orchestration automatisée des processus RH pour un grand groupe, de l'onboarding à la paie.",
      },
      {
        title: "Process mining pour logistique",
        description:
          "Analyse et optimisation des processus logistiques pour un transporteur, identifiant 30% de gains d'efficacité.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Cartographie et analyse des processus à automatiser." },
      { step: "02", title: "Design", description: "Conception des workflows et scénarios d'automatisation." },
      { step: "03", title: "Deploy", description: "Développement et déploiement des solutions d'automatisation." },
      { step: "04", title: "Deliver", description: "Suivi des performances et optimisation continue." },
    ],
    cta: "Automatisez vos processus",
    tools: ["Python", "Airflow", "Azure", "AWS", "Databricks"],
    heroDescription:
      "Libérez le potentiel de vos équipes. L'automatisation intelligente transforme vos opérations pour plus d'efficacité et d'agilité.",
    faq: [
      {
        question: "Quelle est la différence entre RPA et automatisation intelligente ?",
        answer: "La RPA (Robotic Process Automation) automatise des tâches répétitives basées sur des règles fixes, comme la saisie de données ou le copier-coller entre applications. L'automatisation intelligente combine la RPA avec l'IA (NLP, vision, ML) pour traiter des processus non structurés et prendre des décisions contextuelles. Par exemple, une RPA extrait des données d'un formulaire, tandis qu'une automatisation intelligente lit un email, comprend la demande, classe le document et déclenche le workflow approprié.",
      },
      {
        question: "Comment identifier les processus à automatiser en priorité ?",
        answer: "Nous utilisons le process mining et une grille d'évaluation qui score chaque processus sur 4 critères : le volume de transactions, la répétitivité, le taux d'erreur humaine et le temps de traitement. Les processus à fort volume, haute répétitivité et fort taux d'erreur sont les candidats idéaux. Nous livrons une matrice priorisée avec le ROI estimé pour chaque automatisation. En moyenne, nos clients identifient 15 à 30 processus automatisables, dont 5 à 8 à ROI rapide (3 à 6 mois).",
      },
      {
        question: "Quel est le ROI typique d'un projet d'automatisation ?",
        answer: "Le ROI d'un projet d'automatisation est généralement rapide et mesurable. La RPA délivre un ROI de 3x à 8x en 6 à 12 mois. L'automatisation intelligente avec IA peut atteindre un ROI de 5x à 15x sur des processus complexes. Concrètement, nos clients constatent une réduction de 60 à 80% du temps de traitement, une élimination quasi-totale des erreurs humaines, et une réallocation de 20 à 30% du temps employé vers des tâches à plus forte valeur ajoutée. Nous mesurons ces résultats avec des KPIs précis dès le premier sprint.",
      },
      {
        question: "L'automatisation va-t-elle remplacer nos employés ?",
        answer: "Non, l'automatisation vise à augmenter vos équipes, pas à les remplacer. Les tâches automatisées sont les tâches répétitives et chronophages que personne ne souhaite faire. Cela libère vos collaborateurs pour des activités à plus forte valeur ajoutée : analyse, décision, relation client, créativité. Selon McKinsey, seulement 5% des métiers peuvent être entièrement automatisés, mais 60% des activités professionnelles contiennent au moins 30% de tâches automatisables. L'automatisation rend vos équipes plus efficaces et plus épanouies.",
      },
      {
        question: "Comment gérez-vous la conformité dans les processus automatisés ?",
        answer: "La conformité est intégrée par design dans nos solutions d'automatisation. Chaque workflow automatisé inclut un audit trail complet (qui a fait quoi, quand), des points de contrôle pour les étapes sensibles, une gestion des exceptions avec escalade humaine, et un logging détaillé pour les audits. Nous assurons la conformité RGPD dans le traitement des données personnelles, et nous adaptons les workflows aux réglementations sectorielles (HDS pour la santé, PCI-DSS pour la finance). Nos automatisations sont plus conformes que les processus manuels car elles appliquent les règles de manière systématique et documentée.",
      },
    ],
  },
  {
    slug: "cloud-modernization",
    title: "Cloud & Modernization",
    shortTitle: "Cloud & Modernisation",
    icon: "Cloud",
    description:
      "Accompagnez votre migration cloud (AWS, Azure, GCP) et modernisez votre infrastructure data avec optimisation des coûts et sécurité.",
    features: [
      "Migration cloud (AWS/Azure/GCP)",
      "Modernisation d'infrastructure",
      "Optimisation des coûts",
      "Sécurité & conformité",
      "Architecture cloud-native",
      "FinOps",
    ],
    benefits: [
      "Réduction des coûts infrastructure",
      "Agilité et scalabilité",
      "Sécurité renforcée",
      "Innovation accélérée",
      "Conformité garantie",
      "Time-to-market réduit",
    ],
    useCases: [
      {
        title: "Migration cloud pour santé",
        description:
          "Migration complète vers AWS pour un groupe de santé, avec conformité HDS et réduction des coûts de 45%.",
      },
      {
        title: "Multi-cloud pour finance",
        description:
          "Architecture multi-cloud Azure/GCP pour une institution financière, optimisant performance et coûts.",
      },
      {
        title: "FinOps pour retail",
        description:
          "Mise en place d'une pratique FinOps pour un e-commerce, réduisant la facture cloud de 35%.",
      },
    ],
    methodology: [
      { step: "01", title: "Diagnose", description: "Audit de l'infrastructure existante et évaluation cloud." },
      { step: "02", title: "Design", description: "Architecture cible et plan de migration cloud." },
      { step: "03", title: "Deploy", description: "Migration progressive et modernisation des workloads." },
      { step: "04", title: "Deliver", description: "Optimisation continue, FinOps et gouvernance cloud." },
    ],
    cta: "Modernisez votre infrastructure",
    tools: ["AWS", "Azure", "GCP", "Terraform", "dbt"],
    heroDescription:
      "Le cloud comme accélérateur de transformation. Nous sécurisons votre migration et optimisons votre infrastructure pour l'avenir.",
    faq: [
      {
        question: "Comment choisir entre AWS, Azure et GCP pour la migration ?",
        answer: "Le choix dépend de votre contexte spécifique. AWS offre l'écosystème le plus riche et la plus grande communauté, idéal pour les workloads variés. Azure s'intègre naturellement avec l'écosystème Microsoft (Active Directory, Office 365, Power BI) et excelle dans les environnements hybrides. GCP est le leader du serverless analytics avec BigQuery et offre les meilleurs prix pour le compute ML. Notre équipe certifiée sur les trois plateformes réalise une évaluation objective basée sur votre SI existant, vos workloads, vos contraintes de conformité et votre budget.",
      },
      {
        question: "Qu'est-ce que le FinOps et comment réduit-il les coûts cloud ?",
        answer: "Le FinOps (Financial Operations) est la pratique de gestion financière du cloud qui rend les coûts visibles, attribuables et optimisables. Selon Flexera, les entreprises gaspillent en moyenne 32% de leur budget cloud. Le FinOps combine l'analyse des coûts (rightsizing, reserved instances, spot instances), la culture de responsabilité (chaque équipe connaît et optimise sa consommation), et l'automatisation (scaling policies, auto-stop des environnements de dev). Nos clients réduisent en moyenne leur facture cloud de 25 à 45% avec le FinOps.",
      },
      {
        question: "Combien de temps dure une migration cloud ?",
        answer: "La durée dépend du périmètre et de la complexité. Une migration lift-and-shift d'une application simple prend 2 à 4 semaines. La migration d'un data warehouse avec refactoring prend 2 à 4 mois. Une transformation cloud complète avec modernisation des architectures et mise en place du FinOps s'étend sur 6 à 12 mois. Nous recommandons une approche progressive par vagues, avec des quick wins en première vague pour démontrer la valeur rapidement et financer les vagues suivantes.",
      },
      {
        question: "Comment assurez-vous la sécurité pendant et après la migration ?",
        answer: "La sécurité est intégrée à chaque phase de la migration. Avant : audit de sécurité, classification des données, définition de la politique de conformité. Pendant : chiffrement en transit et au repos, réseau sécurisé (VPC, private endpoints), contrôle d'accès IAM granulaire, migration progressive avec rollback possible. Après : monitoring de sécurité continu, tests d'intrusion, conformité automatisée (CIS benchmarks), gestion des vulnérabilités, et incident response plan. Nous assurons la conformité avec les réglementations sectorielles : HDS pour la santé, PCI-DSS pour la finance, SecNumCloud pour les données sensibles.",
      },
      {
        question: "Qu'est-ce qu'une architecture cloud-native et quand est-elle pertinente ?",
        answer: "Une architecture cloud-native utilise les services managés du cloud (serverless, containers, managed databases) plutôt que des machines virtuelles traditionnelles. Elle offre une scalabilité automatique, une résilience native, et un modèle de coûts à l'usage. Elle est pertinente pour les applications à forte variabilité de charge, les nouveaux services nécessitant un time-to-market rapide, et les workloads data/IA qui nécessitent des ressources élastiques. En revanche, les applications legacy stables peuvent souvent rester en lift-and-shift dans un premier temps. Nous vous conseillons la stratégie la plus adaptée à chaque workload.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
