"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = "center",
  className = "",
  light = false,
}: SectionHeaderProps) {
  const alignClass = alignment === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-azure">
          <span className="w-8 h-px bg-azure" />
          {eyebrow}
          <span className="w-8 h-px bg-azure" />
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-6 ${
          light ? "text-pure-white" : "gradient-text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-light leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
