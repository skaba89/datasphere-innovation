"use client";

import { useRouter } from "next/navigation";

interface AuthorLinkProps {
  slug: string;
  name: string;
  className?: string;
}

export function AuthorLink({ slug, name, className }: AuthorLinkProps) {
  const router = useRouter();

  return (
    <span
      role="button"
      tabIndex={0}
      className={className ?? "hover:text-primary transition-colors cursor-pointer"}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        router.push(`/equipe/${slug}`);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.stopPropagation();
          e.preventDefault();
          router.push(`/equipe/${slug}`);
        }
      }}
    >
      {name}
    </span>
  );
}
