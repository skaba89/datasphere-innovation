/**
 * JSON-LD structured data generators for Schema.org markup.
 * Used to improve SEO/GEO with rich structured data.
 *
 * IMPORTANT: This module must NOT have "use client" directive.
 * JSON-LD must render server-side for search engine crawlers.
 */

const SITE_URL = "https://datasphereinnovation.fr";
const SITE_NAME = "DataSphere Innovation";

// ─── Organization Schema ────────────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-datasphere.png`,
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
}

// ─── LocalBusiness Schema ──────────────────────────────────────────────────

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: `${SITE_URL}/images/logo-datasphere.png`,
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
}

// ─── WebSite Schema ─────────────────────────────────────────────────────────

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
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
    name: page.title,
    description: page.description,
    url: page.url,
    dateModified: page.dateModified || new Date().toISOString().split("T")[0],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "fr",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
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
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
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
  // Map author names to Person profiles
  const authorPersonMap: Record<string, { name: string; url: string; role: string }> = {
    "Sophie Martin": { name: "Sophie Martin", url: "https://www.linkedin.com/in/sophie-martin-datasphere", role: "Directrice Data Strategy" },
    "Thomas Dubois": { name: "Thomas Dubois", url: "https://www.linkedin.com/in/thomas-dubois-datasphere", role: "Lead Data Engineer" },
    "Léa Chen": { name: "Léa Chen", url: "https://www.linkedin.com/in/lea-chen-datasphere", role: "Head of AI Solutions" },
    "Marc Petit": { name: "Marc Petit", url: "https://www.linkedin.com/in/marc-petit-datasphere", role: "Cloud & Architecture Lead" },
  };

  const authorInfo = authorPersonMap[article.author];
  const authorSchema = authorInfo
    ? {
        "@type": "Person",
        name: authorInfo.name,
        url: authorInfo.url,
        jobTitle: authorInfo.role,
        worksFor: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }
    : {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: authorSchema,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-datasphere.png`,
      },
    },
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "fr",
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
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.description,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: person.url || `${SITE_URL}/a-propos`,
    image: person.image || `${SITE_URL}/images/logo-datasphere.png`,
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
