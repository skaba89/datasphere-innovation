import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

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
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DataSphere Innovation",
    url: "https://datasphereinnovation.fr",
    logo: "https://datasphereinnovation.fr/images/logo-datasphere.png",
    description:
      "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Gaston Monmousseau",
      addressLocality: "Montreuil",
      postalCode: "93100",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-81-82-28-40",
      contactType: "sales",
      availableLanguage: "French",
    },
    sameAs: [
      "https://www.linkedin.com/company/datasphere-innovation",
      "https://twitter.com/DataSphereInnov",
    ],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DataSphere Innovation",
    image: "https://datasphereinnovation.fr/images/logo-datasphere.png",
    telephone: "+33 6 81 82 28 40",
    email: "contact@datasphereinnovation.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Gaston Monmousseau",
      addressLocality: "Montreuil",
      postalCode: "93100",
      addressCountry: "FR",
    },
    priceRange: "$$",
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DataSphere Innovation",
    url: "https://datasphereinnovation.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://datasphereinnovation.fr/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
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
