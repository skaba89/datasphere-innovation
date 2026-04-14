import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { STATS, DIFFERENTIATORS, PARTNERS, CLIENTS } from "@/lib/constants";
import {
  Award,
  Globe,
  Handshake,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Layers,
  Zap,
  Eye,
  Users,
  Lightbulb,
  Heart,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — DataSphere Innovation",
  description:
    "Découvrez DataSphere Innovation : cabinet expert en data, intelligence artificielle et transformation digitale. Notre histoire, nos valeurs, notre équipe.",
  openGraph: {
    title: "À propos — DataSphere Innovation",
    description:
      "Découvrez DataSphere Innovation : cabinet expert en data, IA et transformation digitale.",
    url: "https://datasphereinnovation.fr/a-propos",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/a-propos",
  },
};

const VALUES = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque projet. Nos consultants seniors apportent une expertise approfondie et une rigueur méthodologique qui garantissent des résultats de haute qualité. Chaque livrable est soumis à des standards de qualité exigeants.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "La veille technologique est dans notre ADN. Nous adoptons précocement les technologies émergentes — IA générative, data mesh, MLOps — pour offrir à nos clients un avantage compétitif durable. L'innovation n'est pas un buzzword, c'est notre moteur.",
  },
  {
    icon: Handshake,
    title: "Partenariat",
    description:
      "Plus qu'un prestataire, nous sommes un partenaire engagé dans la réussite de vos projets sur le long terme. Nous construisons des relations de confiance basées sur la transparence, le transfert de compétences et l'accompagnement continu.",
  },
  {
    icon: Heart,
    title: "Impact",
    description:
      "Chaque projet doit générer un impact mesurable. Nous définissons des KPIs dès le départ et mesurons les résultats concrets. Notre objectif n'est pas seulement de livrer des solutions techniques, mais de créer de la valeur business tangible.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "La transparence et l'honnêteté guident chacune de nos interactions. Nous recommandons toujours la solution la plus adaptée à votre contexte, même si ce n'est pas la plus lucrative pour nous. Votre succès est notre priorité.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Nous croyons en la force du travail collaboratif. Nos équipes travaillent main dans la main avec vos collaborateurs, favorisant le transfert de compétences et l'autonomie progressive de vos équipes internes.",
  },
];

const TEAM_VALUES = [
  {
    icon: Award,
    title: "Experts seniors",
    description:
      "8+ ans d'expérience en moyenne, issus des meilleures écoles et entreprises tech.",
  },
  {
    icon: Globe,
    title: "Couverture nationale",
    description:
      "Interventions partout en France et en Europe, en présentiel ou à distance.",
  },
  {
    icon: Sparkles,
    title: "Veille permanente",
    description:
      "Formation continue et adoption précoce des technologies émergentes.",
  },
  {
    icon: Rocket,
    title: "Agilité",
    description:
      "Méthodologies agiles adaptées à chaque contexte pour des résultats rapides.",
  },
];

export default function AProposPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            À propos
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Un cabinet né de la{" "}
            <span className="gradient-text">passion data</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Fondé par des experts passionnés par la data et l&apos;intelligence
            artificielle, DataSphere Innovation est né d&apos;un constat simple :
            trop d&apos;entreprises sous-exploitent le potentiel de leurs données.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Notre <span className="gradient-text">histoire</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              DataSphere Innovation est né de la conviction que la data et
              l&apos;intelligence artificielle peuvent transformer profondément
              la manière dont les entreprises prennent des décisions, innovent et
              créent de la valeur. Nos fondateurs, forts de plusieurs années
              d&apos;expérience dans les plus grands cabinets de conseil et
              entreprises tech, ont identifié un besoin crucial : accompagner les
              organisations avec une expertise véritable, sans les effets de
              style ni les promesses irréalistes.
            </p>
            <p>
              Depuis notre création, nous avons accompagné plus de 50 projets
              majeurs, du POC IA de 4 semaines à la transformation data
              d&apos;envergure sur 12 mois. Notre approche repose sur
              l&apos;excellence technique, la compréhension métier et
              l&apos;engagement durable auprès de nos clients. Chaque projet est
              conçu pour délivrer un ROI mesurable et des résultats concrets.
            </p>
            <p>
              Basés à Montreuil, au cœur de l&apos;écosystème tech francilien,
              nous combinons expertise technique de pointe et compréhension fine
              des enjeux métier. Notre équipe de 15+ experts data intervient sur
              tout le territoire français et en Europe, en présentiel comme à
              distance.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Notre <span className="gradient-text">mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Rendre la data et l&apos;IA accessibles, utiles et performantes
              pour chaque organisation, qu&apos;elle soit startup en croissance
              ou grand groupe établi. Nous démocratisons l&apos;intelligence
              data pour que chaque décision soit éclairée, chaque processus
              optimisé, chaque opportunité saisie.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-6 text-center glow-card"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs guident chacune de nos décisions, de la sélection de
              nos collaborateurs à la livraison de nos projets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass-card rounded-xl p-6 glow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Notre <span className="gradient-text">équipe</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des experts passionnés, des profils complémentaires, une seule
              obsession : votre succès data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 text-center glow-card"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Atouts */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Pourquoi nous <span className="gradient-text">choisir</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous distingue des autres cabinets de conseil data et IA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 glow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Partenaires & Clients */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ils nous <span className="gradient-text">font confiance</span>
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-center text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Partenaires technologiques
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {PARTNERS.map((partner) => (
                <span
                  key={partner}
                  className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Clients
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {CLIENTS.map((client) => (
                <span
                  key={client}
                  className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Prêt à transformer vos <span className="gradient-text">données</span> en avantage compétitif ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Discutons de vos enjeux data et IA. Un premier échange découverte
            de 30 minutes, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-colors glow-ring"
            >
              Parler à un expert
            </Link>
            <Link
              href="/carrieres"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium hover:bg-secondary/60 transition-colors"
            >
              Rejoindre l&apos;équipe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
      <CookieConsent />
    </main>
  );
}
