"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PARTNERS } from "@/lib/constants";

export function PartnersSection() {
  return (
    <section className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Partenaires
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Nos partenaires{" "}
              <span className="gradient-text">technologiques</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Nous collaborons avec les leaders du marché pour vous offrir les meilleures solutions.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-16 rounded-xl bg-secondary/30 border border-border/30 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/20 hover:bg-secondary/50 transition-all duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
