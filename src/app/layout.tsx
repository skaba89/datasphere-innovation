import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Revalidate pages every 7 days (content refresh strategy for GEO)
export const revalidate = 604800; // 7 days in seconds

import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateGraphSchema,
  generateReviewSchema,
  generateHowToSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateVideoObjectSchema,
  JsonLd,
} from "@/lib/json-ld";
import { FAQ_ITEMS, SERVICES } from "@/lib/constants";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataSphere Innovation — Cabinet Expert Data & IA",
  description:
    "DataSphere Innovation, cabinet expert data & IA à Montreuil. Stratégie data, BI, IA, data engineering, automatisation et cloud. 50+ projets, 98% satisfaction, 3x ROI moyen.",
  keywords: [
    "DataSphere Innovation",
    "data strategy",
    "intelligence artificielle",
    "BI",
    "dashboards",
    "data engineering",
    "cloud",
    "consulting data",
    "cabinet expert data",
    "transformation digitale",
    "machine learning",
    "NLP",
    "automatisation",
    "RGPD",
  ],
  authors: [{ name: "DataSphere Innovation" }],
  icons: {
    icon: "/images/favicon-datasphere.png",
  },
  openGraph: {
    title: "DataSphere Innovation — Cabinet Expert Data & IA",
    description:
      "DataSphere Innovation, cabinet expert data & IA à Montreuil. Stratégie data, BI, IA, cloud. 50+ projets, 98% satisfaction, 3x ROI moyen.",
    url: "https://datasphereinnovation.fr",
    siteName: "DataSphere Innovation",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataSphere Innovation — Cabinet Expert Data & IA",
    description:
      "DataSphere Innovation : cabinet expert data & IA. Stratégie data, BI, solutions IA, cloud et automatisation.",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: "DataSphere Innovation",
  publisher: "DataSphere Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const graphSchema = generateGraphSchema([
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      title: "DataSphere Innovation — Cabinet Expert Data & IA",
      description:
        "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale. 50+ projets, 98% satisfaction, 3x ROI moyen.",
      url: "https://datasphereinnovation.fr",
    }),
    generateFAQSchema(FAQ_ITEMS),
    ...SERVICES.map((service) =>
      generateServiceSchema({
        slug: service.slug,
        title: service.shortTitle,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
      })
    ),
    generateVideoObjectSchema({
      name: "DataSphere Innovation — Votre partenaire Data & IA",
      description: "Découvrez comment DataSphere Innovation accompagne les entreprises dans leur transformation data et IA. Méthodologie, expertise et résultats concrets.",
      url: "https://datasphereinnovation.fr/#video-presentation",
    }),
    generateReviewSchema({
      author: "Marie Dupont",
      reviewBody: "DataSphere Innovation a transformé notre approche data. En 6 mois, nous avons mis en place une gouvernance robuste et des dashboards qui ont révolutionné nos prises de décision. Le ROI a dépassé nos attentes.",
      ratingValue: "5",
      datePublished: "2024-09-15",
    }),
    generateReviewSchema({
      author: "Pierre Martin",
      reviewBody: "L'équipe de DataSphere est exceptionnelle. Leur expertise technique couplée à leur compréhension métier nous a permis de déployer notre première solution IA en production en seulement 8 semaines.",
      ratingValue: "5",
      datePublished: "2024-10-20",
    }),
    generateReviewSchema({
      author: "Sophie Laurent",
      reviewBody: "De la stratégie data à la mise en place de notre plateforme BI, DataSphere nous a accompagnés avec professionnalisme et réactivité. Notre time-to-insight a été réduit de 70%.",
      ratingValue: "5",
      datePublished: "2024-11-05",
    }),
    generateHowToSchema(
      "Comment réussir votre projet data avec DataSphere Innovation",
      "Méthodologie en 4 étapes pour garantir le succès de votre projet data et IA.",
      [
        { name: "Diagnostic & Cadrage", text: "Analyse de l'existant, identification des quick wins et du roadmap data." },
        { name: "Architecture & Conception", text: "Design de la solution, choix technologiques et planification." },
        { name: "Implémentation & Déploiement", text: "Développement agile, tests et mise en production." },
        { name: "Suivi & Optimisation", text: "Monitoring, ajustements et amélioration continue." },
      ]
    ),
    // Homepage Article schema for AI answer engines — Person author for E-E-A-T
    {
      "@type": "Article",
      "@id": "https://datasphereinnovation.fr/#homepage-article",
      headline: "DataSphere Innovation — Cabinet Expert Data & IA",
      description: "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale. 50+ projets, 98% satisfaction, 3x ROI moyen.",
      author: {
        "@type": "Person",
        "@id": "https://datasphereinnovation.fr/equipe/sophie-martin/#person",
        name: "Sophie Martin",
        jobTitle: "Directrice Data Strategy",
        url: "https://datasphereinnovation.fr/equipe/sophie-martin",
        worksFor: { "@id": "https://datasphereinnovation.fr/#organization" },
        sameAs: ["https://www.linkedin.com/in/sophie-martin-datasphere"],
      },
      publisher: { "@id": "https://datasphereinnovation.fr/#organization" },
      datePublished: "2021-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      url: "https://datasphereinnovation.fr",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://datasphereinnovation.fr" },
      articleSection: "Consulting Data & IA",
      inLanguage: "fr",
      image: { "@type": "ImageObject", url: "https://datasphereinnovation.fr/images/logo-datasphere.png" },
    },
    // BreadcrumbList for homepage
    {
      "@type": "BreadcrumbList",
      "@id": "https://datasphereinnovation.fr/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://datasphereinnovation.fr" }],
    },
    // ItemList schema for services catalog — Knowledge Graph entity signal
    {
      "@type": "ItemList",
      "@id": "https://datasphereinnovation.fr/#services-list",
      name: "Services Data & IA — DataSphere Innovation",
      description: "Catalogue des services data et intelligence artificielle proposés par DataSphere Innovation : stratégie data, BI, IA, data engineering, automatisation et cloud.",
      numberOfItems: SERVICES.length,
      itemListElement: SERVICES.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.shortTitle,
        url: `https://datasphereinnovation.fr/services/${service.slug}`,
      })),
    },
  ]);

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="DataSphere Innovation — Blog RSS"
          href="/rss.xml"
        />
        <meta name="google-site-verification" content="PENDING_VERIFICATION" />
        <meta name="msvalidate.01" content="PENDING_VERIFICATION" />
        {/* Entity identity signals for Knowledge Graph / Wikidata */}
        <meta name="wikidata" content="Q131367265" />
        <meta property="og:site_name" content="DataSphere Innovation" />
        <meta name="author" content="DataSphere Innovation" />
        <link rel="author" href="https://datasphereinnovation.fr/a-propos" />
        <link rel="publisher" href="https://datasphereinnovation.fr/#organization" />
        {/* Global JSON-LD structured data — placed in <head> for search engine visibility */}
        <JsonLd data={graphSchema} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster richColors position="bottom-right" />
          <Analytics />
          <GoogleAnalytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
