"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
