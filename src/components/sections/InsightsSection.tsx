"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const INSIGHTS = [
  {
    slug: "data-strategy-2025-tendances",
    category: "Stratégie Data",
    title: "Tendances Data Strategy 2025 : Ce que les leaders font différemment",
    excerpt: "Découvrez les 5 tendances clés qui redéfinissent la stratégie data des entreprises en 2025, de l'IA générative aux data products.",
    readTime: "6 min",
    date: "15 Jan 2025",
    image: "/images/services/data-strategy.png",
  },
  {
    slug: "mlops-production-ia",
    category: "IA & Machine Learning",
    title: "MLOps : Passer du POC à la production IA sans frictions",
    excerpt: "Les meilleures pratiques pour industrialiser vos modèles de Machine Learning et garantir leur performance en production.",
    readTime: "8 min",
    date: "28 Déc 2024",
    image: "/images/services/ai-solutions.png",
  },
  {
    slug: "cloud-data-platform-comparatif",
    category: "Cloud & Infrastructure",
    title: "Comparatif des plateformes Cloud Data : AWS vs Azure vs GCP",
    excerpt: "Guide complet pour choisir la plateforme cloud data adaptée à votre contexte : coûts, performances, écosystème et cas d'usage.",
    readTime: "10 min",
    date: "12 Déc 2024",
    image: "/images/services/cloud-modernization.png",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/2 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          {/* Section Header — Keyrus-style left aligned */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={16} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Insights & Perspectives</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Nos dernières <span className="gradient-text">publications</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl text-lg">
                Analyses, guides et perspectives de nos experts data & IA pour vous aider à prendre les meilleures décisions.
              </p>
              <p className="text-muted-foreground/70 mt-2 max-w-xl text-sm">
                Nos publications couvrent la <a href="/services/data-strategy" className="text-primary hover:underline">stratégie data</a>, le
                <a href="/services/ai-solutions" className="text-primary hover:underline"> Machine Learning</a>, le
                <a href="/services/data-engineering" className="text-primary hover:underline"> Data Engineering</a> et le
                <a href="/services/cloud-modernization" className="text-primary hover:underline"> Cloud</a>.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/20 text-sm font-medium text-foreground hover:bg-secondary/40 hover:border-primary/20 transition-all shrink-0"
            >
              Voir tous les articles
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block h-full rounded-2xl border border-border/30 bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-primary text-primary-foreground">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Lire l&apos;article
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
