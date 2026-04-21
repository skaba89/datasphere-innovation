"use client";

import Link from "next/link";
import { BadgeCheck, Linkedin, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { AuthorData } from "@/lib/author-data";

export function AuthorCard({ author }: { author: AuthorData }) {
  return (
    <GlassCard hover className="p-8 glow-card h-full flex flex-col" itemScope itemType="https://schema.org/Person">
      <div className="flex items-start gap-5 mb-4">
        <div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-2xl font-heading font-bold text-primary">
            {author.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-heading font-semibold text-xl mb-0.5" itemProp="name">
            <Link href={`/equipe/${author.slug}`} className="hover:text-primary transition-colors">
              {author.name}
            </Link>
          </h2>
          <p className="text-sm text-primary font-medium" itemProp="jobTitle">{author.role}</p>
          <p className="text-xs text-muted-foreground/60 font-medium">{author.experience} d&apos;expérience</p>
          <meta itemProp="url" content={`https://datasphereinnovation.fr/equipe/${author.slug}`} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow" itemProp="description">{author.bio}</p>

      {author.certifications && author.certifications.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {author.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/15"
            >
              <BadgeCheck size={10} />
              {cert}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-border/20 mt-auto">
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors"
          aria-label={`Profil LinkedIn de ${author.name}`}
          itemProp="sameAs"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
        <Link
          href={`/equipe/${author.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ml-auto group/profile"
        >
          Voir le profil
          <ArrowRight size={14} className="group-hover/profile:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Articles by this author */}
      {author.articles && author.articles.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60 font-medium mb-2">Articles récents :</p>
          <div className="space-y-1.5">
            {author.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block text-xs text-foreground/70 hover:text-primary transition-colors leading-relaxed"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  );
}
