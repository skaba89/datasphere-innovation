import type { Metadata } from "next";
import { services } from "@/lib/service-data";
import { ServicePageClient } from "./ServicePageClient";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateGraphSchema,
  JsonLd,
} from "@/lib/json-ld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service non trouvé" };
  }
  return {
    title: `${service.title} — DataSphere Innovation`,
    description: service.description,
    openGraph: {
      title: `${service.title} — DataSphere Innovation`,
      description: service.description,
      url: `https://datasphereinnovation.fr/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://datasphereinnovation.fr/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return <div>Service non trouvé</div>;
  }

  const serviceGraph = generateGraphSchema([
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: `${service.title} — DataSphere Innovation`,
      description: service.description,
      url: `https://datasphereinnovation.fr/services/${service.slug}`,
    }),
    generateServiceSchema({
      slug: service.slug,
      title: service.title,
      description: service.description,
      features: service.features,
      benefits: service.benefits,
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Services", url: "https://datasphereinnovation.fr/#services" },
      { name: service.title, url: `https://datasphereinnovation.fr/services/${service.slug}` },
    ]),
  ]);

  return (
    <>
      <JsonLd data={serviceGraph} />
      <ServicePageClient service={service} />
    </>
  );
}
