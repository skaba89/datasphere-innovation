"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { METHOD_STEPS } from "@/lib/constants";
import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stepIcons: LucideIcon[] = [Search, PenTool, Rocket, HeadphonesIcon];
const stepColors = ["primary", "accent", "primary", "accent"] as const;

const stepLinks: { label: string; href: string }[][] = [
  [
    { label: "Stratégie Data", href: "/services/data-strategy" },
    { label: "Audit data", href: "/#contact" },
  ],
  [
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
    { label: "Architecture data", href: "/services/data-engineering" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "Automatisation", href: "/services/process-automation" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Contact", href: "/#contact" },
  ],
];

export function MethodSection() {
  return (
    <section id="methode" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Notre Méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Un processus{" "}
              <span className="gradient-text">éprouvé</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Notre méthodologie en 4 phases garantit des résultats concrets et
              mesurables à chaque étape.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mt-3 text-base">
              Chaque projet suit un cadre rigoureux : du diagnostic initial à l&apos;optimisation continue,
              nous assurons une trajectoire claire avec des livrables concrets à chaque phase.
              Cette approche itérative permet des premiers résultats en 4 à 6 semaines.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Vertical connector line (mobile) */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {METHOD_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              const color = stepColors[index];
              const isPrimary = color === "primary";
              const links = stepLinks[index];

              return (
                <SectionReveal key={step.title} delay={index * 0.15}>
                  <div className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                    {/* Step icon */}
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center ${
                          isPrimary ? "bg-primary/10" : "bg-accent/10"
                        }`}
                      >
                        <Icon
                          size={28}
                          className={isPrimary ? "text-primary" : "text-accent"}
                        />
                      </div>
                    </div>

                    <div className="flex-1 lg:mt-5">
                      <span
                        className={`inline-block text-xs font-bold tracking-widest mb-2 ${
                          isPrimary ? "text-primary" : "text-accent"
                        }`}
                      >
                        ÉTAPE {step.step}
                      </span>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {step.description}
                      </p>
                      {/* Links to relevant service pages */}
                      <div className="flex flex-wrap lg:justify-center gap-1.5">
                        {links.map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
