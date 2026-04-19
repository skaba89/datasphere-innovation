import type { Metadata } from "next";
import Link from "next/link";
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
import { AUTHORS } from "@/lib/author-data";
import { AuthorCard } from "./AuthorCard";

export const metadata: Metadata = {
  title: "Notre Équipe — DataSphere Innovation",
  description:
    "Découvrez les experts DataSphere Innovation : data strategy, data engineering, IA et cloud. Certifiés AWS, Azure et GCP. 10+ ans d'expérience en moyenne.",
  openGraph: {
    title: "Notre Équipe — DataSphere Innovation",
    description:
      "Experts certifiés AWS, Azure et GCP en data strategy, data engineering, IA et architecture cloud.",
    url: "https://datasphereinnovation.fr/equipe",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/equipe",
  },
};

export default function EquipePage() {
  const equipeGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Notre Équipe — DataSphere Innovation",
      description:
        "Découvrez les experts DataSphere Innovation : data strategy, data engineering, intelligence artificielle et architecture cloud.",
      url: "https://datasphereinnovation.fr/equipe",
    }),
    ...AUTHORS.map((author) =>
      generatePersonSchema({
        name: author.name,
        role: author.role,
        description: author.bio,
        url: author.linkedin,
        image: author.image,
      })
    ),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Équipe", url: "https://datasphereinnovation.fr/equipe" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={equipeGraph} />
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
                <BreadcrumbPage>Équipe</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-16 pb-16 overflow-hidden" role="banner" aria-label="Notre équipe d'experts">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Notre Équipe
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Des experts <span className="gradient-text">passionnés</span> à votre service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Nos leaders possèdent en moyenne plus de 10 ans d&apos;expérience dans la data,
              l&apos;intelligence artificielle et le cloud. Certifiés AWS, Azure et GCP,
              ils accompagnent vos projets avec expertise et engagement.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-background" role="region" aria-label="Membres de l'équipe">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {AUTHORS.map((author) => (
                <AuthorCard key={author.slug} author={author} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/20" role="region" aria-label="Appel à l'action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Prêt à travailler avec nos <span className="gradient-text">experts</span> ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Discutons de vos enjeux data et IA. Un premier échange découverte
              de 30 minutes, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-colors glow-ring"
              >
                Parler à un expert
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium hover:bg-secondary/60 transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
        <ChatWidget />
      </main>
    </>
  );
}
