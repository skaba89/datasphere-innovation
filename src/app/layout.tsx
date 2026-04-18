import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateGraphSchema,
  generateReviewSchema,
  generateHowToSchema,
  JsonLd,
} from "@/lib/json-ld";

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
    "DataSphere Innovation : cabinet expert en data, intelligence artificielle, analytics et transformation digitale. Accompagnement stratégique, BI, IA, data engineering et cloud.",
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
      "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale. 50+ projets, 98% satisfaction, 3x ROI moyen.",
    url: "https://datasphereinnovation.fr",
    siteName: "DataSphere Innovation",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataSphere Innovation — Cabinet Expert Data & IA",
    description:
      "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale.",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        <JsonLd data={graphSchema} />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
