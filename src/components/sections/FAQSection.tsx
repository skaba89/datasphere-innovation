"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

// Map FAQ indices to relevant service links
const FAQ_SERVICE_LINKS: { label: string; href: string }[][] = [
  [
    { label: "Stratégie Data", href: "/services/data-strategy" },
    { label: "Solutions IA", href: "/services/ai-solutions" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  ],
  [
    { label: "Notre méthode", href: "/#methode" },
    { label: "Data Engineering", href: "/services/data-engineering" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Contact", href: "/#contact" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Stratégie Data", href: "/services/data-strategy" },
  ],
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  ],
  [
    { label: "Contactez-nous", href: "/#contact" },
    { label: "Nos services", href: "/#services" },
  ],
  [
    { label: "Stratégie Data", href: "/services/data-strategy" },
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  ],
  [
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
    { label: "Solutions IA", href: "/services/ai-solutions" },
  ],
  [
    { label: "Stratégie Data", href: "/services/data-strategy" },
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
  ],
  [
    { label: "Automatisation", href: "/services/process-automation" },
    { label: "Contact", href: "/#contact" },
  ],
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Notre méthode", href: "/#methode" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Data Engineering", href: "/services/data-engineering" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Stratégie Data", href: "/services/data-strategy" },
  ],
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Stratégie Data", href: "/services/data-strategy" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "Data Engineering", href: "/services/data-engineering" },
  ],
];

export function FAQSection() {
  return (
    <section id="faq" aria-label="Questions fréquentes" className="section-padding bg-secondary/10">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Questions{" "}
              <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base">
              Retrouvez les réponses aux questions les plus courantes sur nos services,
              notre méthodologie et notre accompagnement. Chaque réponse inclut des liens
              vers les <Link href="/#services" className="text-primary hover:underline">services</Link> concernés pour aller plus loin.
            </p>
            <p className="text-muted-foreground/70 max-w-2xl text-sm mt-2" data-section-summary>
              DataSphere Innovation accompagne les entreprises en data, IA et transformation digitale : projets de 4 semaines à 12 mois, ROI moyen de 3x, conformité RGPD native, 98% de satisfaction client. Nos experts certifiés AWS, Azure et GCP interviennent sur tout le territoire français.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                  <AccordionTrigger className="text-left font-heading font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p>{faq.answer}</p>
                    {/* Links to relevant service pages */}
                    {FAQ_SERVICE_LINKS[index] && FAQ_SERVICE_LINKS[index].length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/20">
                        <span className="text-xs text-muted-foreground/60 self-center">En savoir plus :</span>
                        {FAQ_SERVICE_LINKS[index].map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
