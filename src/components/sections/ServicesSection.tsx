"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SERVICES } from "@/lib/constants";

// Service image mapping
const SERVICE_IMAGES: Record<string, string> = {
  "data-strategy": "/images/services/data-strategy.png",
  "bi-dashboards": "/images/services/bi-dashboards.png",
  "ai-solutions": "/images/services/ai-solutions.png",
  "data-engineering": "/images/services/data-engineering.png",
  "process-automation": "/images/services/process-automation.png",
  "cloud-modernization": "/images/services/cloud-modernization.png",
};

// Related services mapping for contextual linking
const RELATED_SERVICES: Record<string, { slug: string; label: string }[]> = {
  "data-strategy": [
    { slug: "bi-dashboards", label: "BI & Dashboards" },
    { slug: "data-engineering", label: "Data Engineering" },
  ],
  "bi-dashboards": [
    { slug: "data-strategy", label: "Stratégie Data" },
    { slug: "data-engineering", label: "Data Engineering" },
  ],
  "ai-solutions": [
    { slug: "data-engineering", label: "Data Engineering" },
    { slug: "process-automation", label: "Automatisation" },
  ],
  "data-engineering": [
    { slug: "cloud-modernization", label: "Cloud & Modernisation" },
    { slug: "data-strategy", label: "Stratégie Data" },
  ],
  "process-automation": [
    { slug: "ai-solutions", label: "Solutions IA" },
    { slug: "cloud-modernization", label: "Cloud & Modernisation" },
  ],
  "cloud-modernization": [
    { slug: "data-engineering", label: "Data Engineering" },
    { slug: "process-automation", label: "Automatisation" },
  ],
};

// External sources for services
const SERVICE_SOURCES = [
  {
    name: "Gartner",
    quote: "Le marché mondial de la Business Intelligence atteindra 22 milliards USD en 2025",
    url: "https://www.gartner.com/en/information-technology",
  },
  {
    name: "McKinsey",
    quote: "L'IA générative pourrait ajouter 2 600 à 4 400 milliards USD à l'économie mondiale",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
  },
  {
    name: "Forbes",
    quote: "Le ROI moyen des projets data atteint 13x pour les entreprises matures",
    url: "https://www.forbes.com/sites/forbestechcouncil/",
  },
];

export function ServicesSection() {
  return (
    <section id="services" aria-label="Nos services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Des solutions data{" "}
              <span className="gradient-text">sur mesure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              De la stratégie à l&apos;exécution, nous offrons une expertise
              complète pour transformer vos données en valeur business.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mt-3 text-base">
              Nos six pôles de services couvrent l&apos;ensemble de la chaîne de valeur data :
              de la définition de votre <Link href="/services/data-strategy" className="text-primary hover:underline">stratégie data</Link> à la
              <Link href="/services/cloud-modernization" className="text-primary hover:underline"> modernisation cloud</Link>, en passant par la
              <Link href="/services/bi-dashboards" className="text-primary hover:underline"> Business Intelligence</Link>, le
              <Link href="/services/ai-solutions" className="text-primary hover:underline"> Machine Learning</Link>, le
              <Link href="/services/data-engineering" className="text-primary hover:underline"> Data Engineering</Link> et l&apos;
              <Link href="/services/process-automation" className="text-primary hover:underline"> automatisation des processus</Link>.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const imageUrl = SERVICE_IMAGES[service.slug];
            const related = RELATED_SERVICES[service.slug] || [];
            return (
              <SectionReveal key={service.slug} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`} className="block group">
                  <div className="relative h-full rounded-2xl border border-border/40 bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-1.5 hover:border-primary/30">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      {/* Hover arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/0 flex items-center justify-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-primary/90">
                        <ArrowRight size={18} className="text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Contextual links to related services */}
                      {related.length > 0 && (
                        <div className="pt-3 border-t border-border/20">
                          <p className="text-xs text-muted-foreground/60 mb-1.5">Services complémentaires :</p>
                          <div className="flex flex-wrap gap-1.5">
                            {related.map((r) => (
                              <Link
                                key={r.slug}
                                href={`/services/${r.slug}`}
                                className="text-xs px-2 py-0.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {r.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-3">
                        <span>En savoir plus</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        {/* External sources */}
        <SectionReveal delay={0.5}>
          <div className="mt-12">
            <p className="text-muted-foreground text-sm font-medium mb-4 text-center">Sources et références</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICE_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-card hover:bg-secondary/30 hover:border-primary/20 transition-all duration-300"
                >
                  <Quote size={16} className="text-primary/60 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {source.quote}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary/70 group-hover:text-primary transition-colors">
                      <span className="text-xs font-semibold">{source.name}</span>
                      <ExternalLink size={10} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Bottom CTA */}
        <SectionReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 glow-ring shadow-lg shadow-primary/20"
            >
              Discutons de votre projet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
