"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Des solutions data{" "}
              <span className="gradient-text">sur mesure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              De la stratégie à l&apos;exécution, nous offrons une expertise
              complète pour transformer vos données en valeur business.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const imageUrl = SERVICE_IMAGES[service.slug];
            return (
              <SectionReveal key={service.slug} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`} className="block group">
                  <div className="relative h-full rounded-2xl border border-border/50 bg-secondary/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/30">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      {/* Hover arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/0 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-primary/80">
                        <ArrowRight size={18} className="text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 pt-3">
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
                            className="text-xs px-2.5 py-1 rounded-md bg-background/60 text-muted-foreground border border-border/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
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

        {/* Bottom CTA */}
        <SectionReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 glow-ring"
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
