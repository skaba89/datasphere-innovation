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
  cta: string;
  heroDescription: string;
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
    heroDescription:
      "Transformez vos données en levier stratégique. Notre approche holistique combine gouvernance, architecture et culture data pour un impact durable.",
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
    heroDescription:
      "Des tableaux de bord qui racontent votre histoire data. Conçus pour l'impact, adoptés par les équipes.",
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
    heroDescription:
      "De l'idée au déploiement, nous concrétisons vos ambitions IA avec des solutions robustes, scalables et responsables.",
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
    heroDescription:
      "Des fondations data solides pour des insights fiables. Nous construisons l'infrastructure qui propulse votre transformation data.",
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
    heroDescription:
      "Libérez le potentiel de vos équipes. L'automatisation intelligente transforme vos opérations pour plus d'efficacité et d'agilité.",
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
    heroDescription:
      "Le cloud comme accélérateur de transformation. Nous sécurisons votre migration et optimisons votre infrastructure pour l'avenir.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
