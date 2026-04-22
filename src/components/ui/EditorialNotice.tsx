"use client";

import * as React from "react";
import { Clock, User, RefreshCw, ExternalLink } from "lucide-react";

interface EditorialNoticeProps {
  datePublished: string;
  dateModified: string;
  author?: string;
  authorUrl?: string;
  reviewer?: string;
  sources?: { name: string; url: string }[];
}

export function EditorialNotice({
  datePublished,
  dateModified,
  author = "DataSphere Innovation",
  authorUrl,
  reviewer,
  sources,
}: EditorialNoticeProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground/70 py-3 border-t border-border/20"
      role="contentinfo"
      aria-label="Informations éditoriales"
    >
      <span className="inline-flex items-center gap-1.5">
        <Clock size={12} className="text-primary/60" />
        <span>Publié le {new Date(datePublished).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <RefreshCw size={12} className="text-primary/60" />
        <span>Mis à jour le {new Date(dateModified).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <User size={12} className="text-primary/60" />
        {authorUrl ? (
          <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {author}
          </a>
        ) : (
          <span>{author}</span>
        )}
      </span>
      {reviewer && (
        <span className="inline-flex items-center gap-1.5">
          <User size={12} className="text-accent/60" />
          <span>Révisé par {reviewer}</span>
        </span>
      )}
      {sources && sources.length > 0 && (
        <span className="inline-flex items-center gap-1.5">
          <ExternalLink size={12} className="text-primary/60" />
          <span>Sources : {sources.map((s, i) => (
            <React.Fragment key={s.url}>
              {i > 0 && ", "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">{s.name}</a>
            </React.Fragment>
          ))}</span>
        </span>
      )}
    </div>
  );
}
