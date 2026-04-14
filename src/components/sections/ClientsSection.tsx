"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CLIENTS } from "@/lib/constants";

export function ClientsSection() {
  return (
    <section className="py-12 bg-secondary/20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Clients
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Ils nous font{" "}
              <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Des leaders de chaque secteur qui ont choisi DataSphere Innovation pour leur transformation data.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-xl bg-background/50 border border-border/30 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-200"
              >
                {client}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
