/**
 * JSON-LD structured data generators for Schema.org markup.
 * Used to improve SEO/GEO with rich structured data.
 *
 * IMPORTANT: This module must NOT have "use client" directive.
 * JSON-LD must render server-side for search engine crawlers.
 */

const SITE_URL = "https://datasphereinnovation.fr";
const SITE_NAME = "DataSphere Innovation";
const ORG_ID = `${SITE_URL}/#organization`;

// ─── Organization Schema ────────────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-datasphere.png`,
    },
    description:
      "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale. Accompagnement stratégique, BI, IA, data engineering et cloud pour entreprises.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Gaston Monmousseau",
      addressLocality: "Montreuil",
      postalCode: "93100",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8555,
      longitude: 2.4366,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33-6-81-82-28-40",
        contactType: "sales",
        availableLanguage: ["French", "English"],
      },
      {
        "@type": "ContactPoint",
        email: "contact@datasphereinnovation.fr",
        contactType: "customer service",
        availableLanguage: ["French", "English"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/datasphere-innovation",
      "https://twitter.com/DataSphereInnov",
    ],
    foundingDate: "2021",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Data & IA",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stratégie Data" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "BI & Dashboards" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solutions IA" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Engineering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & Modernisation" } },
      ],
    },
  };
}

// ─── LocalBusiness Schema ──────────────────────────────────────────────────

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/images/logo-datasphere.png`,
    telephone: "+33 6 81 82 28 40",
    email: "contact@datasphereinnovation.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Gaston Monmousseau",
      addressLocality: "Montreuil",
      postalCode: "93100",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8555,
      longitude: 2.4366,
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };
}

// ─── WebSite Schema ─────────────────────────────────────────────────────────

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr",
    publisher: {
      "@id": ORG_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── WebPage Schema ─────────────────────────────────────────────────────────

export interface WebPageSchemaInput {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}

export function generateWebPageSchema(page: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url}/#webpage`,
    name: page.title,
    description: page.description,
    url: page.url,
    dateModified: page.dateModified || new Date().toISOString().split("T")[0],
    publisher: {
      "@id": ORG_ID,
    },
    inLanguage: "fr",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}

// ─── Service Schema ─────────────────────────────────────────────────────────

export interface ServiceSchemaInput {
  slug: string;
  title: string;
  description: string;
  features?: string[];
  benefits?: string[];
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.title,
    description: service.description,
    provider: {
      "@id": ORG_ID,
    },
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services ${service.title}`,
      itemListElement: (service.features || []).map((feature, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: i + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
      bestRating: "5",
    },
  };
}

// ─── FAQPage Schema ─────────────────────────────────────────────────────────

export interface FAQSchemaInput {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQSchemaInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Article Schema ─────────────────────────────────────────────────────────

export interface ArticleSchemaInput {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export function generateArticleSchema(article: ArticleSchemaInput) {
  // Map author names to Person profiles with @id linking to equipe pages
  const authorPersonMap: Record<string, { name: string; slug: string; url: string; role: string }> = {
    "Sophie Martin": { name: "Sophie Martin", slug: "sophie-martin", url: "https://www.linkedin.com/in/sophie-martin-datasphere", role: "Directrice Data Strategy" },
    "Thomas Dubois": { name: "Thomas Dubois", slug: "thomas-dubois", url: "https://www.linkedin.com/in/thomas-dubois-datasphere", role: "Lead Data Engineer" },
    "Léa Chen": { name: "Léa Chen", slug: "lea-chen", url: "https://www.linkedin.com/in/lea-chen-datasphere", role: "Head of AI Solutions" },
    "Marc Petit": { name: "Marc Petit", slug: "marc-petit", url: "https://www.linkedin.com/in/marc-petit-datasphere", role: "Cloud & Architecture Lead" },
  };

  const authorInfo = authorPersonMap[article.author];
  const authorSchema = authorInfo
    ? {
        "@type": "Person",
        "@id": `${SITE_URL}/equipe/${authorInfo.slug}/#person`,
        name: authorInfo.name,
        url: `${SITE_URL}/equipe/${authorInfo.slug}`,
        jobTitle: authorInfo.role,
        sameAs: [authorInfo.url],
        worksFor: {
          "@id": ORG_ID,
        },
      }
    : {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: authorSchema,
    publisher: {
      "@id": ORG_ID,
    },
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "fr",
    wordCount: 1200,
  };
}

// ─── Person Schema ──────────────────────────────────────────────────────────

export interface PersonSchemaInput {
  name: string;
  role: string;
  description: string;
  url?: string;
  image?: string;
}

export function generatePersonSchema(person: PersonSchemaInput) {
  const slug = person.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": person.url || `${SITE_URL}/equipe/${slug}/#person`,
    name: person.name,
    jobTitle: person.role,
    description: person.description,
    worksFor: {
      "@id": ORG_ID,
    },
    url: person.url || `${SITE_URL}/equipe/${slug}`,
    image: person.image || `${SITE_URL}/images/logo-datasphere.png`,
    knowsAbout: ["Data", "Intelligence Artificielle", "Analytics", "Transformation Digitale", "Cloud Computing", "Machine Learning"],
    sameAs: person.url ? [person.url] : undefined,
  };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1]?.url || SITE_URL}/#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── @graph Schema (consolidated) ──────────────────────────────────────────

/**
 * Consolidates multiple schemas into a single @graph block.
 * This is CRITICAL for GEO audits: many tools only detect JSON-LD
 * if it's in a single script tag with @graph, not multiple separate ones.
 */
export function generateGraphSchema(schemas: Record<string, unknown>[]) {
  // Strip individual @context from each schema (the graph has one shared context)
  const cleanedSchemas = schemas.map((schema) => {
    const { ["@context"]: _ctx, ...rest } = schema;
    return rest;
  });
  return {
    "@context": "https://schema.org",
    "@graph": cleanedSchemas,
  };
}

// ─── Review Schema ──────────────────────────────────────────────────────────

export interface ReviewSchemaInput {
  author: string;
  reviewBody: string;
  ratingValue: string;
  datePublished: string;
}

export function generateReviewSchema(review: ReviewSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: "5",
    },
    datePublished: review.datePublished,
    publisher: {
      "@id": ORG_ID,
    },
  };
}

// ─── HowTo Schema ───────────────────────────────────────────────────────────

export interface HowToStep {
  name: string;
  text: string;
}

export function generateHowToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "P30D",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// ─── JSON-LD Script Component ───────────────────────────────────────────────

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
