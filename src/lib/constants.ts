import {
  Database,
  BarChart3,
  BrainCircuit,
  Workflow,
  Bot,
  Cloud,
  Target,
  TrendingUp,
  Shield,
  Layers,
  Zap,
  Eye,
  type LucideIcon,
} from "lucide-react";

// ─── Company Info ───────────────────────────────────────────────────────────

export const COMPANY = {
  name: "DataSphere Innovation",
  tagline: "Cabinet expert Data & Intelligence Artificielle",
  email: "contact@datasphereinnovation.fr",
  phone: "+33 6 81 82 28 40",
  phoneHref: "tel:+33681822840",
  address: "17 rue Gaston Monmousseau, 93100 Montreuil, France",
  addressShort: "93100 Montreuil",
  linkedin: "https://www.linkedin.com/company/datasphere-innovation",
  twitter: "https://twitter.com/DataSphereInnov",
  domain: "datasphereinnovation.fr",
  url: "https://datasphereinnovation.fr",
} as const;

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Pourquoi nous", href: "/#differentiateurs" },
  { label: "Cas d'usage", href: "/#cas-usage" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Méthode", href: "/#methode" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// ─── Services ───────────────────────────────────────────────────────────────

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  benefits: string[];
  cta: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "data-strategy",
    title: "Data Strategy",
    shortTitle: "Stratégie Data",
    icon: Database,
    description:
      "Définissez une feuille de route data alignée sur vos objectifs business.",
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
    ],
    cta: "Définissez votre stratégie data",
  },
  {
    slug: "bi-dashboards",
    title: "BI & Dashboards",
    shortTitle: "BI & Dashboards",
    icon: BarChart3,
    description:
      "Des tableaux de bord clairs et actionnables pour piloter vos KPIs en temps réel.",
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
    ],
    cta: "Créez vos dashboards",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "Solutions IA",
    icon: BrainCircuit,
    description:
      "Machine Learning, NLP, vision par ordinateur — modèles d'IA qui génèrent une valeur business tangible.",
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
    ],
    cta: "Explorez l'IA pour votre business",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    shortTitle: "Data Engineering",
    icon: Workflow,
    description:
      "Pipelines robustes, data lakes, ETL/ELT modernes.",
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
    ],
    cta: "Modernisez vos pipelines data",
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    shortTitle: "Automatisation",
    icon: Bot,
    description:
      "Automatisez les tâches répétitives et les workflows complexes.",
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
      "ROI rapide (3-6 mois)",
    ],
    cta: "Automatisez vos processus",
  },
  {
    slug: "cloud-modernization",
    title: "Cloud & Modernization",
    shortTitle: "Cloud & Modernisation",
    icon: Cloud,
    description:
      "Migrez et modernisez votre infrastructure vers le cloud.",
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
    ],
    cta: "Modernisez votre infrastructure",
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 50, suffix: "+", label: "Projets délivrés" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
  { value: 3, suffix: "x", label: "ROI moyen" },
  { value: 15, suffix: "+", label: "Experts data" },
];

// ─── Partners / Tech Logos ──────────────────────────────────────────────────

export const PARTNERS = [
  "AWS",
  "Azure",
  "GCP",
  "Snowflake",
  "Databricks",
  "dbt",
  "Airflow",
  "Kafka",
  "Power BI",
  "Tableau",
  "Looker",
  "Fivetran",
  "Terraform",
  "Dataiku",
] as const;

// ─── Clients ────────────────────────────────────────────────────────────────

export const CLIENTS = [
  "Michelin",
  "Sanofi",
  "TotalEnergies",
  "Airbus",
  "Thales",
  "L'Oréal",
  "Vinci",
  "Carrefour",
  "LVMH",
  "Schneider Electric",
  "Orange",
  "EDF",
  "Renault",
  "Danone",
] as const;

// ─── Differentiators ────────────────────────────────────────────────────────

export interface DifferentiatorItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    icon: Target,
    title: "Expertise ciblée",
    subtitle: "Nous ne faisons que de la data et de l'IA.",
    description:
      "Concentration totale sur l'excellence data & IA. Pas de dispersion, une expertise profonde qui fait la différence sur chaque projet.",
  },
  {
    icon: TrendingUp,
    title: "Impact mesurable",
    subtitle: "Chaque projet est conçu pour délivrer un ROI clair.",
    description:
      "Nous définissons des KPIs dès le départ et mesurons l'impact réel. 3x ROI moyen sur nos interventions — des résultats concrets, pas des promesses.",
  },
  {
    icon: Shield,
    title: "Sécurité & conformité",
    subtitle: "RGPD, sécurité des données, bonnes pratiques cloud.",
    description:
      "Conformité RGPD native, Privacy by Design, hébergement souverain possible. La sécurité et la conformité sont au cœur de chaque projet.",
  },
  {
    icon: Layers,
    title: "Approche sur mesure",
    subtitle: "Pas de solution générique.",
    description:
      "Chaque projet est unique. Nous adaptons notre méthodologie et nos solutions à votre contexte, vos enjeux et vos objectifs business.",
  },
  {
    icon: Zap,
    title: "Exécution rapide",
    subtitle: "Des équipes seniors, des méthodologies agiles.",
    description:
      "Notre méthode itérative garantit des premiers résultats en 4 à 6 semaines. Pas de projets interminables, des livrables concrets et mesurables.",
  },
  {
    icon: Eye,
    title: "Vision produit",
    subtitle: "Nous pensons au-delà du projet : scalabilité, adoption, évolution.",
    description:
      "Nous concevons des solutions pérennes, pensées pour évoluer. Scalabilité, adoption utilisateur et maintenabilité sont intégrées dès la conception.",
  },
];

// ─── Use Cases ──────────────────────────────────────────────────────────────

export interface UseCaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  client: string;
  result: string;
}

export const USE_CASES: UseCaseItem[] = [
  {
    icon: Database,
    title: "Industrie 4.0",
    description:
      "Maintenance prédictive, optimisation de production, jumeaux numériques — nous transformons les données industrielles en efficacité opérationnelle.",
    client: "Constructeur automobile",
    result: "-40% de pannes imprévues",
  },
  {
    icon: BrainCircuit,
    title: "Santé & Pharma",
    description:
      "Analytics cliniques, pharmacovigilance, optimisation des essais — la data au service de la santé et de l'innovation thérapeutique.",
    client: "Laboratoire pharmaceutique",
    result: "60% de réduction du time-to-insight",
  },
  {
    icon: Zap,
    title: "Énergie & Utilities",
    description:
      "Prévision de consommation, optimisation du mix énergétique, smart grid — des données pour une transition énergétique efficace.",
    client: "Producteur d'énergie",
    result: "25% d'économies sur les coûts",
  },
  {
    icon: Cloud,
    title: "Transport & Logistique",
    description:
      "Optimisation des tournées, prévision de demande, suivi en temps réel — la data pour une logistique plus agile et performante.",
    client: "Opérateur logistique",
    result: "30% d'optimisation des trajets",
  },
  {
    icon: Bot,
    title: "Finance & Assurance",
    description:
      "Détection de fraude, scoring intelligent, conformité automatisée — l'IA pour une finance plus sûre et plus performante.",
    client: "Institution financière",
    result: "85% de fraudes détectées en temps réel",
  },
  {
    icon: BarChart3,
    title: "Retail & E-commerce",
    description:
      "Personnalisation, recommandation, optimisation des stocks — l'expérience client réinventée par la data et l'IA.",
    client: "Grand distributeur",
    result: "+45% de conversion en ligne",
  },
];

// ─── Testimonials ───────────────────────────────────────────────────────────

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Marie Dupont",
    role: "Directrice Data",
    company: "Groupe Industriel CAC40",
    text: "DataSphere Innovation a transformé notre approche data. En 6 mois, nous avons mis en place une gouvernance robuste et des dashboards qui ont révolutionné nos prises de décision. Le ROI a dépassé nos attentes.",
    rating: 5,
  },
  {
    name: "Pierre Martin",
    role: "DSI",
    company: "Assurance Leader",
    text: "L'équipe de DataSphere est exceptionnelle. Leur expertise technique couplée à leur compréhension métier nous a permis de déployer notre première solution IA en production en seulement 8 semaines.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Head of Analytics",
    company: "Fintech Innovante",
    text: "De la stratégie data à la mise en place de notre plateforme BI, DataSphere nous a accompagnés avec professionnalisme et réactivité. Notre time-to-insight a été réduit de 70%.",
    rating: 5,
  },
  {
    name: "Thomas Bernard",
    role: "CTO",
    company: "Scale-up SaaS",
    text: "La migration cloud réalisée par DataSphere a été impeccable. Architecture optimisée, coûts réduits de 45%, et une équipe qui forme nos développeurs pour une autonomie complète.",
    rating: 5,
  },
];

// ─── Method Steps ───────────────────────────────────────────────────────────

export interface MethodStep {
  step: string;
  title: string;
  description: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    step: "01",
    title: "Diagnostic & Cadrage",
    description:
      "Analyse de l'existant, identification des quick wins et du roadmap data.",
  },
  {
    step: "02",
    title: "Architecture & Conception",
    description:
      "Design de la solution, choix technologiques et planification.",
  },
  {
    step: "03",
    title: "Implémentation & Déploiement",
    description:
      "Développement agile, tests et mise en production.",
  },
  {
    step: "04",
    title: "Suivi & Optimisation",
    description:
      "Monitoring, ajustements et amélioration continue.",
  },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous accompagnons tous types d'organisations : startups en croissance, PME, ETI et grands groupes du CAC40. Notre approche sur mesure s'adapte à votre taille, votre secteur et votre maturité data. Nos clients viennent de secteurs variés : industrie, finance, santé, retail, énergie, transport et tech.",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer:
      "La durée dépend de la complexité et de la portée du projet. Un POC IA peut être livré en 4 à 6 semaines. Un projet BI complet prend généralement 2 à 4 mois. Une transformation data d'envergure peut s'étendre sur 6 à 12 mois. Nous privilégions les livrables itératifs pour des résultats rapides.",
  },
  {
    question: "Comment garantissez-vous la qualité des livrables ?",
    answer:
      "Nous appliquons des standards de qualité rigoureux : code review systématique, tests automatisés, documentation complète, et transfert de compétences continu. Chaque projet suit notre méthodologie en 4 phases avec des points de validation à chaque étape clé.",
  },
  {
    question: "Proposez-vous un accompagnement après le projet ?",
    answer:
      "Oui, la phase de Suivi & Optimisation inclut un suivi post-lancement avec monitoring des KPIs, optimisation continue et support. Nous proposons également des forfaits de maintenance et d'évolution pour garantir la pérennité de vos solutions data.",
  },
  {
    question: "Vos solutions sont-elles conformes au RGPD ?",
    answer:
      "Absolument. La conformité RGPD est intégrée dès la conception de chaque projet (Privacy by Design). Nous implémentons les mesures techniques et organisationnelles nécessaires : anonymisation, chiffrement, gestion des consentements, registre des traitements, et audits réguliers.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous sommes agnostiques et choisissons la meilleure technologie pour chaque cas d'usage. Nos experts maîtrisent l'écosystème complet : AWS, Azure, GCP, Snowflake, Databricks, dbt, Airflow, Power BI, Looker, Tableau, Python, Spark, et bien d'autres.",
  },
  {
    question: "Comment se déroule le premier contact ?",
    answer:
      "Un premier échange découverte de 30 minutes pour comprendre vos enjeux, suivi d'un audit gratuit si pertinent. Nous vous proposons ensuite une approche détaillée avec planning, budget et livrables attendus. Pas de surprise, pas d'engagement initial — juste de l'expertise et de la transparence.",
  },
  {
    question: "Quel est le coût d'un projet data ou IA ?",
    answer:
      "Le coût varie en fonction de la complexité, de la durée et du périmètre du projet. Un POC IA démarre à partir de 15 000 €. Un projet BI complet se situe généralement entre 30 000 € et 80 000 €. Une transformation data d'envergure peut représenter un investissement de 100 000 € à 500 000 €. Nous proposons systématiquement une estimation détaillée et transparente après la phase de cadrage.",
  },
  {
    question: "Comment mesurez-vous le ROI de vos projets ?",
    answer:
      "Nous définissons des KPIs mesurables dès la phase de cadrage : réduction des coûts, gain de temps, augmentation du chiffre d'affaires, amélioration de la qualité, adoption utilisateur. Chaque projet fait l'objet d'un suivi quantifié avec des rapports réguliers. Notre ROI moyen de 3x est calculé sur l'ensemble des projets livrés et vérifiable auprès de nos clients.",
  },
  {
    question: "Travaillez-vous avec des données sensibles ou réglementées ?",
    answer:
      "Oui, nous avons une expérience approfondie avec les données sensibles : santé (HDS), finance (PCI-DSS), données personnelles (RGPD). Nous implémentons les mesures de sécurité nécessaires : chiffrement, contrôle d'accès, audit trail, anonymisation. Nos architectures sont conçues pour répondre aux exigences réglementaires les plus strictes.",
  },
  {
    question: "Proposez-vous des formations pour nos équipes ?",
    answer:
      "Absolument. Le transfert de compétences est au cœur de notre approche. Nous proposons des formations sur mesure : data literacy pour les équipes métier, formations techniques (dbt, Airflow, Power BI), ateliers IA et machine learning, et coaching pour vos équipes data. L'objectif est de rendre vos équipes autonomes et pérennes.",
  },
  {
    question: "Comment assurez-vous la pérennité des solutions déployées ?",
    answer:
      "Nous concevons chaque solution avec la pérennité en tête : documentation complète, architecture scalable, code review et best practices, transfert de compétences, et monitoring en production. Nous proposons également des contrats de maintenance et d'évolution pour un accompagnement sur le long terme, garantissant que vos solutions restent performantes et adaptées à vos besoins évolutifs.",
  },
  {
    question: "Quelle est votre approche pour les projets multi-cloud ?",
    answer:
      "Nous sommes agnostiques et maîtrisons les trois principaux clouds (AWS, Azure, GCP). Notre approche multi-cloud s'appuie sur une évaluation objective de vos besoins : performance, coûts, conformité, écosystème existant. Nous concevons des architectures qui tirent le meilleur de chaque plateforme tout en assurant l'interopérabilité et la gouvernance transverse.",
  },
  {
    question: "Qu'est-ce que le MLOps et pourquoi est-ce essentiel pour l'industrialisation de l'IA ?",
    answer:
      "Le MLOps est l'ensemble des pratiques qui permettent de passer de l'expérimentation IA à la production de manière fiable et scalable. Selon Gartner, seulement 20% des projets IA atteignent le stade de la production. Le MLOps intègre le versionning des modèles, le CI/CD ML, le monitoring de drift et la gouvernance. Les entreprises qui implémentent le MLOps déploient 3x plus de modèles en production et réduisent de 60% leur time-to-deployment.",
  },
  {
    question: "Comment choisir entre AWS, Azure et GCP pour vos données ?",
    answer:
      "Le choix dépend de votre contexte : GCP excelle avec BigQuery pour l'analytics serverless et les entreprises data-first. Azure offre la meilleure intégration avec l'écosystème Microsoft et Power BI. AWS propose l'écosystème le plus riche et la plus grande communauté. Pour le multi-cloud, nous combinons les forces de chaque plateforme. Notre équipe certifiée AWS, Azure et GCP vous accompagne dans cette décision stratégique avec une évaluation objective.",
  },
  {
    question: "Qu'est-ce que le data mesh et est-il adapté à mon entreprise ?",
    answer:
      "Le data mesh est un paradigme d'architecture décentralisée où chaque domaine métier est propriétaire de ses données, les traite comme un produit et dispose d'une infrastructure self-serve. Il est particulièrement adapté aux grandes organisations avec de multiples domaines data. Selon McKinsey, les entreprises qui adoptent le data mesh constatent une amélioration de 40% de la disponibilité des données et une réduction de 30% des délais de mise sur le marché des produits data.",
  },
  {
    question: "Comment l'IA générative transforme-t-elle la stratégie data des entreprises ?",
    answer:
      "L'IA générative redéfinit l'interaction avec les données en permettant aux équipes métier d'interroger leurs bases de données en langage naturel via des assistants data alimentés par LLM. Les entreprises qui intègrent l'IA générative dans leur stack data constatent une augmentation de 40% de l'adoption des outils analytiques selon nos observations. Elle automatise également la documentation, la qualité des données et la génération de rapports, libérant les équipes pour des tâches à plus forte valeur ajoutée.",
  },
];

// ─── Contact Form Subjects ──────────────────────────────────────────────────

export const CONTACT_SUBJECTS = [
  { value: "data-strategy", label: "Stratégie Data" },
  { value: "bi-dashboards", label: "BI & Dashboards" },
  { value: "ai-solutions", label: "Solutions IA" },
  { value: "data-engineering", label: "Data Engineering" },
  { value: "process-automation", label: "Automatisation" },
  { value: "cloud-modernization", label: "Cloud & Modernisation" },
  { value: "other", label: "Autre" },
] as const;

// ─── Footer Links ───────────────────────────────────────────────────────────

export const FOOTER_SERVICES = [
  { label: "Stratégie Data", href: "/services/data-strategy" },
  { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  { label: "Solutions IA", href: "/services/ai-solutions" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Automatisation", href: "/services/process-automation" },
  { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
];

export const FOOTER_NAVIGATION = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Cas d'usage", href: "/#cas-usage" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Carrières", href: "/carrieres" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_RESOURCES = [
  { label: "Blog & Insights", href: "/blog" },
  { label: "Plan du site", href: "/plan-du-site" },
  { label: "FAQ", href: "/#faq" },
  { label: "Méthodologie", href: "/#methode" },
];

export const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
];

// ─── Chatbot ────────────────────────────────────────────────────────────────

export const CHAT_SUGGESTED_QUESTIONS = [
  "Quels services proposez-vous ?",
  "Comment se déroule un projet ?",
  "Quelles technologies utilisez-vous ?",
  "Comment contacter un expert ?",
] as const;

export const CHAT_WELCOME_MESSAGE =
  "Bonjour ! Je suis Nexus, l'IA assistant de DataSphere Innovation. Je suis là pour vous aider à explorer nos services en data, IA et transformation digitale. Posez-moi votre question !";

export const CHAT_ERROR_MESSAGE =
  "Je suis désolé, une erreur est survenue. N'hésitez pas à réessayer ou à contacter directement notre équipe à contact@datasphereinnovation.fr";

export const CHAT_NETWORK_ERROR =
  "Je suis désolé, je n'arrive pas à me connecter. Veuillez réessayer dans quelques instants ou contactez-nous à contact@datasphereinnovation.fr";
