import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { COMPANY } from "@/lib/constants";
import { generateBreadcrumbSchema, generateWebPageSchema, generateGraphSchema, JsonLd } from "@/lib/json-ld";
import {
  Briefcase,
  Heart,
  Rocket,
  GraduationCap,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Lightbulb,
  Globe,
  Coffee,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Carrières — DataSphere Innovation",
  description:
    "Rejoignez DataSphere Innovation et participez à la transformation data & IA des entreprises. Découvrez nos offres d'emploi et notre culture d'entreprise.",
  openGraph: {
    title: "Carrières — DataSphere Innovation",
    description:
      "Rejoignez DataSphere Innovation et participez à la transformation data & IA des entreprises.",
    url: "https://datasphereinnovation.fr/carrieres",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/carrieres",
  },
};

const PERKS = [
  {
    icon: Rocket,
    title: "Projets impactants",
    description:
      "Travaillez sur des projets data & IA concrets pour des clients de renom. Chaque mission est une opportunité d'apprendre et de créer de la valeur mesurable. Vous ne serez jamais sur des projets low-value.",
  },
  {
    icon: GraduationCap,
    title: "Formation continue",
    description:
      "Budget formation dédié, certifications Cloud/IA financées, veille technologique hebdomadaire, accès à des conférences et événements tech. Votre montée en compétences est notre priorité.",
  },
  {
    icon: Laptop,
    title: "Flexibilité",
    description:
      "Télétravail flexible, horaires aménagés, équipement de qualité. Nous faisons confiance à nos collaborateurs et privilégions les résultats au présentéisme.",
  },
  {
    icon: Coffee,
    title: "Culture startup",
    description:
      "Ambiance bienveillante et dynamique, afterworks, hackathons internes, partage de connaissances. Nous prenons le travail au sérieux, mais pas nous-mêmes.",
  },
  {
    icon: Globe,
    title: "Mobilité internationale",
    description:
      "Des missions partout en France et en Europe. Nous encourageons la découverte de nouveaux écosystèmes et la mobilité géographique de nos consultants.",
  },
  {
    icon: Heart,
    title: "Bien-être",
    description:
      "Mutuelle santé, CE, sport, mentoring personnalisé. Nous veillons à l'équilibre vie pro/vie perso de chaque collaborateur car c'est la clé de la performance durable.",
  },
];

const JOB_OPENINGS = [
  {
    title: "Data Engineer Senior",
    department: "Data Engineering",
    location: "Paris / Télétravail",
    type: "CDI",
    description:
      "Vous concevez et déployez des pipelines de données robustes avec dbt, Airflow et Spark. Vous êtes le garant de la qualité et de la fiabilité des données pour nos clients grands comptes.",
  },
  {
    title: "Data Scientist / ML Engineer",
    department: "Intelligence Artificielle",
    location: "Paris / Télétravail",
    type: "CDI",
    description:
      "Vous développez des modèles de Machine Learning et NLP en production. Du POC à l'industrialisation avec MLOps, vous portez la chaîne complète de la data science appliquée.",
  },
  {
    title: "Consultant BI Senior",
    department: "Business Intelligence",
    location: "Paris / Télétravail",
    type: "CDI",
    description:
      "Vous concevez et déployez des solutions BI sur mesure avec Power BI, Looker ou Tableau. Data storytelling et adoption utilisateur sont au cœur de votre approche.",
  },
  {
    title: "Cloud Data Architect",
    department: "Cloud & Infrastructure",
    location: "Paris / Télétravail",
    type: "CDI",
    description:
      "Vous concevez des architectures data cloud-native sur AWS, Azure ou GCP. Migration, optimisation et FinOps sont votre quotidien. Vous définissez les patterns architecturaux de demain.",
  },
  {
    title: "RPA Developer",
    department: "Automatisation",
    location: "Paris / Télétravail",
    type: "CDI",
    description:
      "Vous automatisez les processus métier avec des solutions RPA et d'automatisation intelligente. Process mining, orchestration de workflows et digital workers n'ont pas de secrets pour vous.",
  },
  {
    title: "Stagiaire Data Analyst",
    department: "Data Strategy",
    location: "Paris",
    type: "Stage (6 mois)",
    description:
      "Vous assistez nos consultants sur des missions d'audit data, de création de dashboards et d'analyse de données. Une première expérience idéale dans le consulting data.",
  },
];

export default function CarrieresPage() {
  const carrieresGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Carrières — DataSphere Innovation",
      description:
        "Rejoignez DataSphere Innovation et participez à la transformation data & IA des entreprises. Découvrez nos offres d'emploi et notre culture d'entreprise.",
      url: "https://datasphereinnovation.fr/carrieres",
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Carrières", url: "https://datasphereinnovation.fr/carrieres" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={carrieresGraph} />
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Carrières</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" role="banner" aria-label="Carrières chez DataSphere Innovation">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Carrières
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Rejoignez l&apos;aventure{" "}
            <span className="gradient-text">DataSphere</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Participez à la transformation data & IA des entreprises les plus
            ambitieuses. Chez DataSphere Innovation, chaque collaborateur a un
            impact direct sur la réussite de nos clients et la croissance du
            cabinet.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-background" role="region" aria-label="Pourquoi nous rejoindre">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Pourquoi nous <span className="gradient-text">rejoindre</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Plus qu&apos;un emploi, nous offrons un environnement où talent et
              passion se rencontrent pour créer de l&apos;impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="glass-card rounded-xl p-6 glow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-secondary/20" role="region" aria-label="Offres d'emploi">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Nos <span className="gradient-text">offres</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez nos opportunités actuelles et trouvez le poste qui
              correspond à votre profil et à vos ambitions.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.title}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Briefcase size={12} />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                        <Clock size={12} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${COMPANY.email}?subject=Candidature : ${job.title}`}
                    className="shrink-0 inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors glow-ring"
                  >
                    Postuler
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="section-padding bg-background" role="region" aria-label="Candidature spontanée">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Vous ne trouvez pas votre <span className="gradient-text">bonheur</span> ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Nous sommes toujours à la recherche de talents passionnés par la data
            et l&apos;IA. Envoyez-nous votre candidature spontanée, nous étudions
            chaque profil avec attention.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=Candidature spontanée`}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-colors glow-ring"
          >
            Envoyer ma candidature spontanée
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/20" role="region" aria-label="Processus de recrutement">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Notre processus de <span className="gradient-text">recrutement</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Candidature", desc: "Envoyez votre CV et une lettre de motivation personnalisée. Nous répondons sous 48h." },
              { step: "02", title: "Entretien découverte", desc: "Un échange de 30 min pour comprendre votre parcours, vos motivations et vos attentes." },
              { step: "03", title: "Test technique", desc: "Un cas pratique réaliste, en lien direct avec nos projets. Pas de quiz théorique inutile." },
              { step: "04", title: "Entretien final", desc: "Rencontrez l'équipe et les fondateurs. Nous validons l'adéquation culturelle et technique." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-heading font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
      <CookieConsent />
    </main>
    </>
  );
}
