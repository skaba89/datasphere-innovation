import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbSchema, generatePersonSchema, generateWebPageSchema, generateGraphSchema, JsonLd } from "@/lib/json-ld";
import { AUTHORS, getAuthorBySlug } from "@/lib/author-data";
import { BadgeCheck, Linkedin, Clock, ArrowRight, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) {
    return { title: "Auteur non trouvé" };
  }
  return {
    title: `${author.name} — ${author.role} — DataSphere Innovation`,
    description: author.bio,
    openGraph: {
      title: `${author.name} — ${author.role} — DataSphere Innovation`,
      description: author.bio,
      url: `https://datasphereinnovation.fr/equipe/${author.slug}`,
      type: "profile",
    },
    alternates: {
      canonical: `https://datasphereinnovation.fr/equipe/${author.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) {
    notFound();
  }

  const authorGraph = generateGraphSchema([
    generateWebPageSchema({
      title: `${author.name} — ${author.role} — DataSphere Innovation`,
      description: author.bio,
      url: `https://datasphereinnovation.fr/equipe/${author.slug}`,
    }),
    generatePersonSchema({
      name: author.name,
      role: author.role,
      description: author.longBio,
      url: author.linkedin,
      image: author.image,
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Équipe", url: "https://datasphereinnovation.fr/equipe" },
      { name: author.name, url: `https://datasphereinnovation.fr/equipe/${author.slug}` },
    ]),
  ]);

  // Map specializations to relevant service links
  const SERVICE_LINKS: Record<string, { label: string; href: string }> = {
    "Stratégie Data": { label: "Stratégie Data", href: "/services/data-strategy" },
    "Gouvernance des données": { label: "Stratégie Data", href: "/services/data-strategy" },
    "Data Mesh": { label: "Stratégie Data", href: "/services/data-strategy" },
    "Data Engineering": { label: "Data Engineering", href: "/services/data-engineering" },
    "Pipelines ETL/ELT": { label: "Data Engineering", href: "/services/data-engineering" },
    "dbt": { label: "Data Engineering", href: "/services/data-engineering" },
    "Airflow": { label: "Data Engineering", href: "/services/data-engineering" },
    "Streaming temps réel": { label: "Data Engineering", href: "/services/data-engineering" },
    "Intelligence Artificielle": { label: "Solutions IA", href: "/services/ai-solutions" },
    "Machine Learning": { label: "Solutions IA", href: "/services/ai-solutions" },
    "NLP": { label: "Solutions IA", href: "/services/ai-solutions" },
    "Vision par ordinateur": { label: "Solutions IA", href: "/services/ai-solutions" },
    "MLOps": { label: "Solutions IA", href: "/services/ai-solutions" },
    "IA éthique": { label: "Solutions IA", href: "/services/ai-solutions" },
    "Cloud Architecture": { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    "Migration Cloud": { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    "FinOps": { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    "Multi-cloud": { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    "Sécurité & Conformité": { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    "Architecture Data": { label: "Data Engineering", href: "/services/data-engineering" },
    "Snowflake": { label: "Data Engineering", href: "/services/data-engineering" },
    "Roadmap Data": { label: "Stratégie Data", href: "/services/data-strategy" },
    "Change Management": { label: "Stratégie Data", href: "/services/data-strategy" },
  };

  const relevantServices = author.specializations
    .map((spec) => SERVICE_LINKS[spec])
    .filter((v, i, a) => v && a.findIndex((t) => t && t.href === v.href) === i);

  return (
    <>
      <JsonLd data={authorGraph} />
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
                <BreadcrumbLink asChild>
                  <Link href="/equipe">Équipe</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{author.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <article className="relative pt-16 pb-16 overflow-hidden" itemScope itemType="https://schema.org/Person">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              ← Retour à l&apos;équipe
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="text-3xl font-heading font-bold text-primary">
                  {author.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-1" itemProp="name">
                  {author.name}
                </h1>
                <p className="text-lg text-primary font-medium mb-1" itemProp="jobTitle">{author.role}</p>
                <p className="text-sm text-muted-foreground/60 font-medium">{author.experience} d&apos;expérience</p>
              </div>
            </div>

            {/* Certifications */}
            {author.certifications.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {author.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/15"
                  >
                    <BadgeCheck size={12} />
                    {cert}
                  </span>
                ))}
              </div>
            )}

            {/* Long bio */}
            <div className="prose prose-lg max-w-none mb-8" itemProp="description">
              {author.longBio.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Specializations / Services */}
            {relevantServices.length > 0 && (
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-lg mb-3">Domaines d&apos;expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {relevantServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-sm px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* LinkedIn */}
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 hover:text-primary transition-colors mb-8"
              aria-label={`Profil LinkedIn de ${author.name}`}
            >
              <Linkedin size={16} />
              Voir le profil LinkedIn de {author.name}
            </a>
          </div>
        </article>

        {/* Articles by this author */}
        {author.articles.length > 0 && (
          <section className="section-padding bg-secondary/20" role="region" aria-label={`Articles écrits par ${author.name}`}>
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Articles par {author.name}
              </h2>
              <div className="space-y-4">
                {author.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block p-5 rounded-xl border border-border/30 bg-card hover:border-primary/20 hover:bg-secondary/30 transition-all"
                  >
                    <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                      Lire l&apos;article
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding bg-background" role="region" aria-label="Appel à l'action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Besoin de l&apos;expertise de {author.name.split(" ")[0]} ?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Nos experts sont à votre disposition pour discuter de vos projets data et IA.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-colors glow-ring"
            >
              Contactez-nous
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <Footer />
        <BackToTop />
        <ChatWidget />
      </main>
    </>
  );
}
