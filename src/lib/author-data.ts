export interface AuthorArticle {
  slug: string;
  title: string;
}

export interface AuthorData {
  slug: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  longBio: string;
  linkedin: string;
  certifications: string[];
  specializations: string[];
  image?: string;
  articles: AuthorArticle[];
}

export const AUTHORS: AuthorData[] = [
  {
    slug: "sophie-martin",
    name: "Sophie Martin",
    role: "Directrice Data Strategy",
    experience: "12 ans",
    bio: "12 ans d'expérience en conseil data et stratégie digitale. Sophie a accompagné plus de 30 entreprises dans la définition de leur roadmap data. Certifiée AWS Solutions Architect et Azure Data Engineer, elle combine vision stratégique et expertise technique pour concevoir des architectures data robustes et scalables.",
    longBio: `Sophie Martin est Directrice Data Strategy chez DataSphere Innovation, où elle accompagne les entreprises dans la définition et la mise en œuvre de leur stratégie data depuis plus de 12 ans.

Diplômée de l'École Polytechnique et titulaire d'un Master en Data Science de l'Université Paris-Dauphine, Sophie a débuté sa carrière chez McKinsey & Company avant de rejoindre le cabinet Capgemini Consulting en tant que Senior Manager Data & Analytics.

Chez DataSphere Innovation, Sophie pilote le pôle Stratégie Data et a conduit plus de 30 missions de transformation data pour des clients du CAC40 et des ETI innovantes. Son approche combine une vision stratégique de haut niveau avec une compréhension fine des enjeux techniques, permettant d'aligner les investissements data avec les objectifs business de chaque organisation.

Certifiée AWS Solutions Architect Professional et Azure Data Engineer Associate, Sophie est reconnue pour sa capacité à traduire des architectures data complexes en feuilles de route actionnables. Elle intervient régulièrement comme conférencière sur les thématiques de gouvernance des données et de data mesh.`,
    linkedin: "https://www.linkedin.com/in/sophie-martin-datasphere",
    certifications: ["AWS Solutions Architect", "Azure Data Engineer", "Polytechnique"],
    specializations: ["Stratégie Data", "Gouvernance des données", "Data Mesh", "Roadmap Data", "Change Management"],
    articles: [
      { slug: "data-strategy-2025-tendances", title: "Stratégie Data 2025 : Les 5 Tendances à Anticiper" },
    ],
  },
  {
    slug: "thomas-dubois",
    name: "Thomas Dubois",
    role: "Lead Data Engineer",
    experience: "10 ans",
    bio: "10 ans d'expérience en data engineering et architecture data. Thomas maîtrise l'écosystème complet : dbt, Airflow, Spark, Snowflake. Certifié GCP Professional Data Engineer et dbt Analytics Engineering, il conçoit des pipelines data performants et résilients pour les entreprises les plus exigeantes.",
    longBio: `Thomas Dubois est Lead Data Engineer chez DataSphere Innovation, où il supervise la conception et le déploiement d'architectures data robustes et scalables.

Ingénieur diplômé de l'École des Mines de Paris, Thomas a passé ses premières années professionnelles chez un éditeur de logiciels data avant de rejoindre un grand groupe bancaire en tant qu'Architecte Data Senior. Ces expériences lui ont permis de développer une expertise approfondie sur les pipelines ETL/ELT, les data lakes et les architectures temps réel.

Certifié GCP Professional Data Engineer et dbt Certified Analytics Engineer, Thomas maîtrise l'ensemble de l'écosystème data moderne : dbt pour la transformation, Airflow pour l'orchestration, Spark pour le traitement distribué, Snowflake et BigQuery pour le stockage analytique. Il a conçu des plateformes data traitant plusieurs millions d'événements par heure.

Chez DataSphere Innovation, Thomas dirige le pôle Data Engineering et a livré plus de 20 projets de plateforme data pour des clients dans les secteurs finance, retail et industrie. Son approche met l'accent sur la qualité des données, la traçabilité et l'automatisation des pipelines.`,
    linkedin: "https://www.linkedin.com/in/thomas-dubois-datasphere",
    certifications: ["GCP Professional Data Engineer", "dbt Certified", "Mines Paris"],
    specializations: ["Data Engineering", "Pipelines ETL/ELT", "dbt", "Airflow", "Streaming temps réel", "Snowflake"],
    articles: [
      { slug: "automatisation-rpa-guide", title: "RPA & Automatisation : 5 Processus à Automatiser en Priorité" },
    ],
  },
  {
    slug: "lea-chen",
    name: "Léa Chen",
    role: "Head of AI Solutions",
    experience: "8 ans",
    bio: "8 ans d'expérience en intelligence artificielle et machine learning. Léa est spécialisée dans le NLP, la vision par ordinateur et le MLOps. Titulaire d'un PhD en Machine Learning et certifiée AWS ML Specialty, elle dirige la pratique IA de DataSphere Innovation avec une approche orientée impact business.",
    longBio: `Léa Chen est Head of AI Solutions chez DataSphere Innovation, où elle dirige la pratique d'intelligence artificielle et de machine learning.

Titulaire d'un PhD en Machine Learning de l'Université Pierre et Marie Curie (Sorbonne Université), Léa a publié plus de 15 articles dans des conférences de premier plan (NeurIPS, ICML, ACL). Après un post-doctorat au MIT, elle a rejoint une startup IA en tant que Lead ML Engineer, où elle a conçu et déployé des modèles de NLP et de vision par ordinateur en production.

Certifiée AWS Machine Learning Specialty, Léa possède une expertise approfondie en MLOps, NLP, vision par ordinateur et systèmes de recommandation. Elle a mené la conception de solutions IA pour des clients dans les secteurs santé, finance et industrie, avec un taux de passage du POC à la production de 85%.

Chez DataSphere Innovation, Léa pilote le pôle IA et garantit que chaque modèle déployé en production génère un ROI mesurable. Son approche intègre systématiquement les considérations d'éthique et de responsabilité dans la conception des solutions IA.`,
    linkedin: "https://www.linkedin.com/in/lea-chen-datasphere",
    certifications: ["PhD Machine Learning", "AWS ML Specialty", "Sorbonne Université"],
    specializations: ["Intelligence Artificielle", "Machine Learning", "NLP", "Vision par ordinateur", "MLOps", "IA éthique"],
    articles: [
      { slug: "mlops-production-ia", title: "MLOps : Du POC à la Production, le Guide Complet" },
    ],
  },
  {
    slug: "marc-petit",
    name: "Marc Petit",
    role: "Cloud & Architecture Lead",
    experience: "11 ans",
    bio: "11 ans d'expérience en architecture cloud et infrastructure data. Marc est certifié AWS Solutions Architect Professional, Azure Solutions Architect Expert et GCP Cloud Architect, avec une approche FinOps orientée résultats.",
    longBio: `Marc Petit est Cloud & Architecture Lead chez DataSphere Innovation, où il accompagne les entreprises dans leur migration cloud et la modernisation de leur infrastructure data.

Ingénieur diplômé de Télécom Paris, Marc a débuté sa carrière chez AWS en tant que Solutions Architect, où il a aidé plus de 50 entreprises à migrer leurs workloads vers le cloud. Il a ensuite rejoint Microsoft Azure en tant que Senior Cloud Architect, développant une expertise multi-cloud qui fait aujourd'hui sa force.

Certifié AWS Solutions Architect Professional, Azure Solutions Architect Expert et GCP Professional Cloud Architect, Marc est l'un des rares experts en France à détenir les trois certifications de niveau professionnel. Il a conduit des migrations cloud pour des clients de tous secteurs, avec une approche FinOps qui garantit l'optimisation des coûts sans compromis sur la performance.

Chez DataSphere Innovation, Marc dirige le pôle Cloud & Modernisation et a livré plus de 25 projets de migration et d'optimisation cloud. Son approche intègre systématiquement la sécurité, la conformité et la gouvernance dans chaque architecture.`,
    linkedin: "https://www.linkedin.com/in/marc-petit-datasphere",
    certifications: ["AWS SAP Professional", "Azure SAE Expert", "GCP Cloud Architect", "Télécom Paris"],
    specializations: ["Cloud Architecture", "Migration Cloud", "FinOps", "Multi-cloud", "Sécurité & Conformité", "Architecture Data"],
    articles: [
      { slug: "cloud-data-platform-comparatif", title: "AWS vs Azure vs GCP : Quelle Plateforme Data Choisir ?" },
    ],
  },
];

export function getAuthorBySlug(slug: string): AuthorData | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
