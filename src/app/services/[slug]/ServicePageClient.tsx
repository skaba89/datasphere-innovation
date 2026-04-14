"use client";

import * as React from "react";
import Link from "next/link";
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

export function ServicePageClient({ service }: { service: ServiceData }) {
  const Icon = iconMap[service.icon] || Database;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Retour aux services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {service.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Ce que nous <span className="gradient-text">offrons</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <SectionReveal key={feature} delay={i * 0.05}>
                <GlassCard hover className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="font-medium">{feature}</span>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Les <span className="gradient-text">bénéfices</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <SectionReveal key={benefit} delay={i * 0.05}>
                <GlassCard hover>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed">{benefit}</span>
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
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Cas d&apos;<span className="gradient-text">usage</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, i) => (
              <SectionReveal key={uc.title} delay={i * 0.1}>
                <GlassCard hover className="h-full">
                  <h3 className="font-heading font-semibold text-lg mb-3">
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
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Notre <span className="gradient-text">méthodologie</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((step, i) => {
              const StepIcon = methodIcons[step.title] || Search;
              return (
                <SectionReveal key={step.step} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                      <StepIcon size={28} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary tracking-widest">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-heading font-bold mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
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
