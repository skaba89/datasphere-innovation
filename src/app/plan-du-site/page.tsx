import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SERVICES } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";
import {
  Home,
  Briefcase,
  BookOpen,
  Scale,
  FileText,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plan du site — DataSphere Innovation",
  description:
    "Plan du site DataSphere Innovation : retrouvez l'ensemble de nos pages, services, articles et informations légales.",
  openGraph: {
    title: "Plan du site — DataSphere Innovation",
    description: "Retrouvez l'ensemble de nos pages et ressources.",
    url: "https://datasphereinnovation.fr/plan-du-site",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/plan-du-site",
  },
};

const SITE_SECTIONS = [
  {
    icon: Home,
    title: "Pages principales",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/a-propos" },
      { label: "Carrières", href: "/carrieres" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    icon: Briefcase,
    title: "Services",
    links: SERVICES.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  {
    icon: BookOpen,
    title: "Blog & Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      ...blogPosts.map((post) => ({
        label: post.title,
        href: `/blog/${post.slug}`,
      })),
    ],
  },
  {
    icon: Scale,
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
      { label: "Conditions générales de vente", href: "/conditions-generales" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Plan du <span className="gradient-text">site</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Retrouvez l&apos;ensemble de nos pages, services, articles de blog et
            informations légales pour naviguer facilement sur notre site.
          </p>
        </div>
      </section>

      {/* Sitemap */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SITE_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-semibold text-lg">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <ChevronRight
                            size={14}
                            className="text-muted-foreground/40 group-hover:text-primary transition-colors"
                          />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Home page sections */}
          <div className="glass-card rounded-xl p-6 mt-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-lg">
                Sections de la page d&apos;accueil
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Nos services", href: "/#services" },
                { label: "Pourquoi nous choisir", href: "/#differentiateurs" },
                { label: "Cas d'usage", href: "/#cas-usage" },
                { label: "Témoignages clients", href: "/#temoignages" },
                { label: "Notre méthode", href: "/#methode" },
                { label: "FAQ", href: "/#faq" },
                { label: "Nos partenaires", href: "/#partenaires" },
                { label: "Nos clients", href: "/#clients" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-primary transition-colors"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
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
