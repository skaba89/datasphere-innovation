"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Share2, Twitter, Linkedin, ArrowRight, User, BadgeCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { BlogPost } from "@/lib/blog-data";

// Author mapping for author cards — enriched with certifications for E-E-A-T
const AUTHOR_MAP: Record<string, { name: string; role: string; bio: string; linkedin: string; certifications: string[]; experience: string }> = {
  "Sophie Martin": {
    name: "Sophie Martin",
    role: "Directrice Data Strategy",
    bio: "12 ans d'expérience en conseil data et stratégie digitale. Sophie a accompagné plus de 30 entreprises dans la définition de leur roadmap data. Certifiée AWS Solutions Architect et Azure Data Engineer, elle combine vision stratégique et expertise technique pour concevoir des architectures data robustes et scalables.",
    linkedin: "https://www.linkedin.com/in/sophie-martin-datasphere",
    certifications: ["AWS Solutions Architect", "Azure Data Engineer"],
    experience: "12 ans",
  },
  "Thomas Dubois": {
    name: "Thomas Dubois",
    role: "Lead Data Engineer",
    bio: "10 ans d'expérience en data engineering et architecture data. Thomas maîtrise l'écosystème complet : dbt, Airflow, Spark, Snowflake. Certifié GCP Professional Data Engineer et dbt Analytics Engineering, il conçoit des pipelines data performants et résilients pour les entreprises les plus exigeantes.",
    linkedin: "https://www.linkedin.com/in/thomas-dubois-datasphere",
    certifications: ["GCP Professional Data Engineer", "dbt Certified"],
    experience: "10 ans",
  },
  "Léa Chen": {
    name: "Léa Chen",
    role: "Head of AI Solutions",
    bio: "8 ans d'expérience en intelligence artificielle et machine learning. Léa est spécialisée dans le NLP, la vision par ordinateur et le MLOps. Titulaire d'un PhD en Machine Learning et certifiée AWS ML Specialty, elle dirige la pratique IA de DataSphere Innovation avec une approche orientée impact business.",
    linkedin: "https://www.linkedin.com/in/lea-chen-datasphere",
    certifications: ["PhD Machine Learning", "AWS ML Specialty"],
    experience: "8 ans",
  },
  "Marc Petit": {
    name: "Marc Petit",
    role: "Cloud & Architecture Lead",
    bio: "11 ans d'expérience en architecture cloud et infrastructure data. Marc est certifié AWS Solutions Architect Professional, Azure Solutions Architect Expert et GCP Cloud Architect. Avec une approche FinOps orientée résultats, il optimise les architectures cloud pour la performance et la maîtrise des coûts.",
    linkedin: "https://www.linkedin.com/in/marc-petit-datasphere",
    certifications: ["AWS SAP", "Azure SAE", "GCP Cloud Architect"],
    experience: "11 ans",
  },
  "Équipe DataSphere": {
    name: "Équipe DataSphere Innovation",
    role: "Cabinet Expert Data & IA",
    bio: "DataSphere Innovation est un cabinet expert en data et intelligence artificielle, fondé pour aider les entreprises à exploiter pleinement le potentiel de leurs données et à accélérer leur transformation digitale. Plus de 50 projets délivrés, 98% de satisfaction client et 3x de ROI moyen.",
    linkedin: "https://www.linkedin.com/company/datasphere-innovation",
    certifications: ["AWS Partner", "Azure Certified", "GCP Partner"],
    experience: "Depuis 2021",
  },
};

export function BlogPostClient({ post }: { post: BlogPost }) {
  // Map author names to their equipe page slugs
  const AUTHOR_SLUG_MAP: Record<string, string> = {
    "Sophie Martin": "sophie-martin",
    "Thomas Dubois": "thomas-dubois",
    "Léa Chen": "lea-chen",
    "Marc Petit": "marc-petit",
    "Équipe DataSphere": "",
  };

  const [copied, setCopied] = React.useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <article className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                <Tag size={10} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={10} />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Par <Link href={`/equipe/${AUTHOR_SLUG_MAP[post.author] || ""}`} className="text-primary hover:underline font-medium">{post.author}</Link></span>
              <span>•</span>
              <time dateTime={post.date} className="flex items-center gap-1">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.dateModified && post.dateModified !== post.date && (
                <>
                  <span>•</span>
                  <span className="text-xs text-muted-foreground/60 flex items-center gap-1">
                    Mis à jour le{" "}
                    <time dateTime={post.dateModified}>
                      {new Date(post.dateModified).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </article>

      <section className="section-padding bg-background" role="region" aria-label="Contenu de l'article">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {(() => {
              const lines = post.content.split("\n");
              type BlockType = "heading2" | "heading3" | "list" | "bold" | "paragraph" | "break";
              const blocks: { type: BlockType; content: string[] }[] = [];
              let currentList: string[] = [];

              const flushList = () => {
                if (currentList.length > 0) {
                  blocks.push({ type: "list", content: [...currentList] });
                  currentList = [];
                }
              };

              lines.forEach((line) => {
                const trimmed = line.trim();
                if (!trimmed) {
                  flushList();
                  blocks.push({ type: "break", content: [] });
                  return;
                }
                if (trimmed.startsWith("## ")) {
                  flushList();
                  blocks.push({ type: "heading2", content: [trimmed.replace("## ", "")] });
                  return;
                }
                if (trimmed.startsWith("### ")) {
                  flushList();
                  blocks.push({ type: "heading3", content: [trimmed.replace("### ", "")] });
                  return;
                }
                if (trimmed.startsWith("- ")) {
                  currentList.push(trimmed.replace("- ", ""));
                  return;
                }
                if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                  flushList();
                  blocks.push({ type: "bold", content: [trimmed.replace(/\*\*/g, "")] });
                  return;
                }
                flushList();
                blocks.push({ type: "paragraph", content: [trimmed] });
              });
              flushList();

              return blocks.map((block, i) => {
                switch (block.type) {
                  case "break":
                    return <br key={i} />;
                  case "heading2":
                    return (
                      <h2 key={i} className="text-2xl font-heading font-bold mt-8 mb-4">
                        {block.content[0]}
                      </h2>
                    );
                  case "heading3":
                    return (
                      <h3 key={i} className="text-xl font-heading font-semibold mt-6 mb-3">
                        {block.content[0]}
                      </h3>
                    );
                  case "list":
                    return (
                      <ul key={i} className="list-disc ml-6 space-y-1 my-2">
                        {block.content.map((item, j) => (
                          <li key={j} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  case "bold":
                    return (
                      <p key={i} className="font-semibold text-foreground mt-4">
                        {block.content[0]}
                      </p>
                    );
                  case "paragraph":
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-2">
                        {block.content[0]}
                      </p>
                    );
                }
              });
            })()}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-4">
              <Share2 size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Partager :</span>
              <button
                onClick={handleCopyLink}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Copier le lien de l'article"
              >
                {copied ? "Lien copié !" : "Copier le lien"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Related CTA */}
          <div className="mt-8 p-6 rounded-2xl border border-border/30 bg-card">
            <h3 className="font-heading font-semibold text-lg mb-2">
              Besoin d&apos;accompagnement sur ce sujet ?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nos experts sont à votre disposition pour discuter de vos projets data et IA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Contactez-nous
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium text-sm hover:bg-secondary/60 transition-colors"
              >
                Nos services
              </Link>
            </div>
          </div>

          {/* Related Services — Internal linking for SEO */}
          <div className="mt-8 p-6 rounded-2xl border border-border/30 bg-card">
            <h3 className="font-heading font-semibold text-base mb-3">
              Services liés
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "Stratégie Data", href: "/services/data-strategy" },
                { label: "BI & Dashboards", href: "/services/bi-dashboards" },
                { label: "Solutions IA", href: "/services/ai-solutions" },
                { label: "Data Engineering", href: "/services/data-engineering" },
                { label: "Automatisation", href: "/services/process-automation" },
                { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <ArrowRight size={12} className="text-primary/50" />
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Card — Enhanced for E-E-A-T */}
          {(() => {
            const authorInfo = AUTHOR_MAP[post.author];
            if (!authorInfo) return null;
            return (
              <div className="mt-8 p-6 rounded-2xl border border-border/30 bg-card" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                    <User size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-base" itemProp="name">
                      {AUTHOR_SLUG_MAP[post.author] ? (
                        <Link href={`/equipe/${AUTHOR_SLUG_MAP[post.author]}`} className="hover:text-primary transition-colors">
                          {authorInfo.name}
                        </Link>
                      ) : (
                        authorInfo.name
                      )}
                    </h4>
                    <p className="text-sm text-primary font-medium mb-1" itemProp="jobTitle">{authorInfo.role}</p>
                    <p className="text-xs text-muted-foreground/60 font-medium mb-2">{authorInfo.experience} d&apos;expérience</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3" itemProp="description">{authorInfo.bio}</p>
                    {authorInfo.certifications && authorInfo.certifications.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {authorInfo.certifications.map((cert) => (
                          <span key={cert} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/15">
                            <BadgeCheck size={10} />
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                    <a
                      href={authorInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors"
                      aria-label={`Profil LinkedIn de ${authorInfo.name}`}
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                    {AUTHOR_SLUG_MAP[post.author] && (
                      <Link
                        href={`/equipe/${AUTHOR_SLUG_MAP[post.author]}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors ml-4"
                      >
                        Voir le profil complet
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
    </main>
  );
}
