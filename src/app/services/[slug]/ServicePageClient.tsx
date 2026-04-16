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
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import type { ServiceData } from "@/lib/service-data";

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

export function ServicePageClient({ service }: { service: ServiceData }) {
  const Icon = iconMap[service.icon] || Database;
  const heroImage = SERVICE_IMAGES[service.slug];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={service.title}
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

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Fonctionnalites
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ce que nous <span className="gradient-text">offrons</span>
              </h2>
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
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
                Benefices
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Les <span className="gradient-text">bénéfices</span>
              </h2>
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
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Cas d&apos;usage
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Cas d&apos;<span className="gradient-text">usage</span>
              </h2>
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
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                Methodologie
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Notre <span className="gradient-text">méthodologie</span>
              </h2>
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
                      ETAPE {step.step}
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

      {/* CTA with background image */}
      <section className="section-padding bg-background relative overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt=""
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
