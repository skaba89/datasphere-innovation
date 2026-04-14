import type { Metadata } from "next";
import { services } from "@/lib/service-data";
import { ServicePageClient } from "./ServicePageClient";

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
  return <ServicePageClient service={service} />;
}
