/**
 * JSON-LD structured data generators for Schema.org markup.
 * Used to improve SEO/GEO with rich structured data.
 */

const SITE_URL = "https://datasphereinnovation.fr";
const SITE_NAME = "DataSphere Innovation";

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
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
