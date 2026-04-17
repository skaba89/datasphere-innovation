"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Share2, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import type { BlogPost } from "@/lib/blog-data";

export function BlogPostClient({ post }: { post: BlogPost }) {
  const [copied, setCopied] = React.useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <article className="relative pt-32 pb-16 overflow-hidden" role="banner" aria-label={`Article : ${post.title}`}>
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
              <span>Par {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </article>

      <section className="section-padding bg-background" role="region" aria-label="Contenu de l'article">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-heading font-bold mt-8 mb-4">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-heading font-semibold mt-6 mb-3">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={i} className="text-muted-foreground ml-4">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              }
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={i} className="font-semibold text-foreground mt-4">
                    {trimmed.replace(/\*\*/g, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-2">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-4">
              <Share2 size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Partager :</span>
              <button
                onClick={handleCopyLink}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {copied ? "Lien copié !" : "Copier le lien"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
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
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
    </main>
  );
}
