"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { objectives } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  megaphone: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  scale: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
    </svg>
  ),
  heart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  candle: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="10" width="6" height="11" rx="1" />
      <path d="M12 10V7" />
      <path d="M12 7c-1.5-2-1-4 0-5 1 1 1.5 3 0 5z" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  community: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v4M8.5 16.5L12 12l3.5 4.5" />
    </svg>
  ),
  chart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
};

// Layout: bento grid with varying sizes
const gridPositions = [
  "sm:col-span-2 sm:row-span-1",     // Wide card
  "sm:col-span-1 sm:row-span-1",     // Normal
  "sm:col-span-1 sm:row-span-1",     // Normal
  "sm:col-span-1 sm:row-span-1",     // Normal
  "sm:col-span-1 sm:row-span-1",     // Normal
  "sm:col-span-2 sm:row-span-1",     // Wide card
];

export default function ObjectivesGrid() {
  return (
    <section className="relative py-28 bg-obsidian">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Mission"
            title="What We Stand For"
            description="Six pillars driving our commitment to the police family — from raising awareness to creating lasting change."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {objectives.map((obj, i) => (
            <ScrollReveal
              key={obj.title}
              delay={i * 0.08}
              className={i === 0 ? "lg:col-span-2" : i === 5 ? "lg:col-span-2" : ""}
            >
              <div className={`group relative h-full p-8 rounded-2xl bg-navy/50 border border-white/5 card-lift overflow-hidden ${
                i === 0 || i === 5 ? "lg:flex lg:items-center lg:gap-8" : ""
              }`}>
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-azure/10 flex items-center justify-center text-azure mb-5 transition-all duration-500 group-hover:bg-azure/20 group-hover:scale-110 ${
                  i === 0 || i === 5 ? "lg:mb-0 lg:w-16 lg:h-16" : ""
                }`}>
                  {iconMap[obj.icon]}
                </div>

                <div>
                  <h3 className={`text-xl font-display font-semibold text-pure-white mb-3 ${
                    i === 0 || i === 5 ? "lg:text-2xl" : ""
                  }`}>
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-azure/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
