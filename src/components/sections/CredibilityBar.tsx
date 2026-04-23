"use client";

import * as React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";

export function CredibilityBar() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section aria-labelledby="credibility-heading" className="py-8 overflow-hidden border-b border-white/5 bg-[hsl(222,20%,4%)]">
      <div className="container mx-auto px-4 mb-4">
        <h2 id="credibility-heading" className="sr-only">Technologies de confiance</h2>
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          Technologies de confiance utilisées par nos experts
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(222,20%,4%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(222,20%,4%)] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {logos.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center gap-2 px-5 py-2 mx-2 rounded-lg bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-200 shrink-0 group"
              >
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                    sizes="24px"
                  />
                </div>
                <span className="text-sm font-medium text-white/35 group-hover:text-primary transition-colors duration-200">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
