"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PARTNERS } from "@/lib/constants";

export function PartnersSection() {
  return (
    <section className="py-12 bg-[hsl(222,20%,4%)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Partenaires
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">
              Nos partenaires{" "}
              <span className="gradient-text">technologiques</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Nous collaborons avec les leaders du marché pour vous offrir les meilleures solutions.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-16 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/40 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
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
