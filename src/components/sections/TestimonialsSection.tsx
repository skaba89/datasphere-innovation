"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0);

  const next = React.useCallback(
    () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length),
    []
  );
  const prev = React.useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      ),
    []
  );

  React.useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="temoignages"
      role="region"
      aria-label="Témoignages clients"
      aria-labelledby="temoignages-heading"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 id="temoignages-heading" className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Ce que disent nos{" "}
              <span className="gradient-text">clients</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base">
              Avec un taux de satisfaction de 98% et un ROI moyen de 3x, nos clients témoignent de l&apos;impact concret de nos
              <Link href="/#services" className="text-primary hover:underline"> services data & IA</Link> sur leur performance.
              Découvrez leurs retours d&apos;expérience.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl border border-border/30 bg-card relative overflow-hidden" aria-live="polite" aria-atomic="true" role="region" aria-roledescription="carrousel" aria-label="Témoignage client actuel">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              {/* Quote decoration */}
              <Quote
                size={48}
                className="absolute top-4 right-4 text-primary/10"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-center gap-1 mb-6" aria-label={`${testimonial.rating} étoiles sur 5`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-accent fill-accent"
                      />
                    ))}
                    <span className="sr-only">{testimonial.rating} sur 5</span>
                    <meta itemProp="reviewRating" itemType="https://schema.org/Rating" content={String(testimonial.rating)} />
                  </div>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8" itemProp="reviewBody">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-heading font-semibold text-foreground" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{testimonial.name}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} — {testimonial.company}
                    </p>
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors mt-1"
                        aria-label={`Profil LinkedIn de ${testimonial.name}`}
                      >
                        <ExternalLink size={10} />
                        Vérifier sur LinkedIn
                      </a>
                    )}
                    <meta itemProp="itemReviewed" itemType="https://schema.org/Organization" content="DataSphere Innovation" />
                    <meta itemProp="datePublished" content="2024-09-15" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "bg-primary w-6"
                          : "bg-border hover:bg-muted-foreground w-2"
                      }`}
                      aria-label={`Témoignage ${i + 1} sur ${TESTIMONIALS.length}`}
                      aria-pressed={i === current}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    aria-label="Précédent"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    aria-label="Suivant"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
