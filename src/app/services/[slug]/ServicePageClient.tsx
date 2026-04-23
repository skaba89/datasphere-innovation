"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Search,
  PenTool,
  Rocket,
  HeadphonesIcon,
  Database,
  BarChart3,
  Brain,
  HardHat,
  Cog,
  Cloud,
  PlayCircle,
  FileBarChart,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { ServiceData } from "@/lib/service-data";
import { services } from "@/lib/service-data";

const iconMap: Record<string, LucideIcon> = {
  Database,
  BarChart3,
  Brain,
  HardHat,
  Cog,
  Cloud,
};

const methodIcons: Record<string, React.ElementType> = {
  Diagnose: Search,
  Design: PenTool,
  Deploy: Rocket,
  Deliver: HeadphonesIcon,
};

// Service hero images
const SERVICE_IMAGES: Record<string, string> = {
  "data-strategy": "/images/services/data-strategy.png",
  "bi-dashboards": "/images/services/bi-dashboards.png",
  "ai-solutions": "/images/services/ai-solutions.png",
  "data-engineering": "/images/services/data-engineering.png",
  "process-automation": "/images/services/process-automation.png",
  "cloud-modernization": "/images/services/cloud-modernization.png",
};

// Related services mapping
const RELATED_MAP: Record<string, string[]> = {
  "data-strategy": ["bi-dashboards", "data-engineering"],
  "bi-dashboards": ["data-strategy", "data-engineering"],
  "ai-solutions": ["data-engineering", "process-automation"],
  "data-engineering": ["cloud-modernization", "data-strategy"],
  "process-automation": ["ai-solutions", "cloud-modernization"],
  "cloud-modernization": ["data-engineering", "process-automation"],
};

export function ServicePageClient({ service }: { service: ServiceData }) {
  const Icon = iconMap[service.icon] || Database;
  const heroImage = SERVICE_IMAGES[service.slug];

  const relatedServices = (RELATED_MAP[service.slug] || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];

  return (
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.shortTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {/* Hero with Background Image */}
      <section className="relative pt-20 pb-24 overflow-hidden" role="banner" aria-label={`Service ${service.title}`}>
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`Service ${service.shortTitle} - DataSphere Innovation`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        {/* Fallback gradient if no image */}
        {!heroImage && (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        )}

        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux services
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-18 h-18 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center p-4">
                <Icon size={36} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {service.heroDescription}
            </p>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all glow-ring"
              >
                {service.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TL;DR — Answer-First for GEO / AI answer engines */}
      <section className="py-6 bg-secondary/10" aria-label="Résumé du service">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-4 rounded-xl border border-border/20 bg-card" data-tldr>
            <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">En résumé</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.shortTitle} par DataSphere Innovation : {service.heroDescription} Méthodologie en 4 phases, 
              premiers résultats en 4 à 6 semaines, conformité RGPD native, experts certifiés AWS/Azure/GCP. 
              98% satisfaction client, ROI moyen de 3x.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background" role="region" aria-label="Fonctionnalités">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Fonctionnalités
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ce que nous <span className="gradient-text">offrons</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Un ensemble complet de fonctionnalités pour répondre à vos besoins en {service.shortTitle.toLowerCase()}.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <SectionReveal key={feature} delay={i * 0.05}>
                <GlassCard hover className="flex items-center gap-3 group/feature">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/feature:bg-primary/20 transition-colors">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with image */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden" role="region" aria-label="Bénéfices">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
                Bénéfices
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Les <span className="gradient-text">bénéfices</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Des résultats concrets et mesurables pour votre entreprise.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <SectionReveal key={benefit} delay={i * 0.05}>
                <GlassCard hover className="group/benefit">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/benefit:bg-accent/20 transition-colors">
                      <CheckCircle size={18} className="text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed font-medium">{benefit}</span>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-background" role="region" aria-label="Cas d'usage">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Cas d&apos;usage
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Cas d&apos;<span className="gradient-text">usage</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Des exemples concrets de mise en œuvre dans différents secteurs.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, i) => (
              <SectionReveal key={uc.title} delay={i * 0.1}>
                <GlassCard hover className="h-full group/case">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover/case:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold font-heading">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 group-hover/case:text-primary transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden" role="region" aria-label="Méthodologie">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Méthodologie
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Notre <span className="gradient-text">méthodologie</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Un processus en 4 étapes pour garantir le succès de votre projet {service.shortTitle.toLowerCase()}.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((step, i) => {
              const StepIcon = methodIcons[step.title] || Search;
              return (
                <SectionReveal key={step.step} delay={i * 0.1}>
                  <div className="text-center group/step">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-4 bg-primary/10 border border-primary/10 flex items-center justify-center group-hover/step:bg-primary/20 group-hover/step:border-primary/20 transition-all duration-300">
                      <StepIcon size={32} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary tracking-widest">
                      ÉTAPE {step.step}
                    </span>
                    <h3 className="text-lg font-heading font-bold mt-1 mb-2 group-hover/step:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background" role="region" aria-label="Services complémentaires">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Services complémentaires
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Allez plus loin avec nos <span className="gradient-text">autres services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Combine notre expertise {service.shortTitle.toLowerCase()} avec d&apos;autres services pour un impact maximal.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {relatedServices.map((related, i) => {
              const RelatedIcon = iconMap[related.icon] || Database;
              return (
                <SectionReveal key={related.slug} delay={i * 0.1}>
                  <Link href={`/services/${related.slug}`} className="block group">
                    <GlassCard hover className="p-6 h-full">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <RelatedIcon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                            {related.shortTitle}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {related.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <span>Découvrir</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources — Video & Infographic placeholders for multimodal content */}
      <section className="section-padding bg-secondary/20" role="region" aria-label="Ressources multimédia">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Ressources
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Explorez nos <span className="gradient-text">ressources</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Des contenus multimédia pour approfondir votre compréhension de nos solutions {service.shortTitle.toLowerCase()}.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Video placeholder */}
            <SectionReveal>
              <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative h-52 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <PlayCircle size={32} className="text-primary" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-xs font-heading font-semibold text-foreground">
                        Vidéo : {service.shortTitle} en 3 minutes
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        Découvrez les concepts clés et cas d&apos;usage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                    Comprendre {service.shortTitle} en vidéo
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nos experts vous présentent les enjeux, la méthodologie et les résultats concrets de notre approche {service.shortTitle.toLowerCase()}. Une introduction accessible pour les décideurs et les équipes techniques.
                  </p>
                </div>
              </div>
            </SectionReveal>
            {/* Infographic placeholder */}
            <SectionReveal>
              <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative h-52 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <FileBarChart size={32} className="text-accent" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-xs font-heading font-semibold text-foreground">
                        Infographie : Le parcours {service.shortTitle}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        Visualisez le processus étape par étape
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                    Infographie {service.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Un guide visuel du parcours complet : du diagnostic initial au déploiement en production. Téléchargez notre infographie pour partager la vision avec vos équipes et aligner les parties prenantes.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="section-padding bg-background relative overflow-hidden" role="region" aria-label="Appel à l'action">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`Contactez-nous pour le service ${service.shortTitle}`}
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                {service.cta}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Prenez contact avec nos experts pour discuter de votre projet et
                découvrir comment nous pouvons vous accompagner.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all glow-ring"
                >
                  {service.cta}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+33681822840"
                  aria-label="Appeler au +33 6 81 82 28 40"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium hover:bg-secondary/60 transition-colors"
                >
                  +33 6 81 82 28 40
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
    </main>
  );
}
