"use client";

import * as React from "react";
import { PARTNERS } from "@/lib/constants";

export function CredibilityBar() {
  const partners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-10 border-y border-border/30 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground">
          Technologies de confiance utilisées par nos experts
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {partners.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center px-6 py-2.5 mx-2 rounded-lg bg-background/50 border border-border/30 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-200 shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
