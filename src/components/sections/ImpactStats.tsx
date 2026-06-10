"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  {
    value: 14000,
    suffix: "+",
    label: "Officers Affected Annually",
    description: "Across forces nationwide",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
      </svg>
    ),
  },
  {
    value: 350,
    suffix: "+",
    label: "Stories Shared",
    description: "Voices finally being heard",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    value: 50000,
    suffix: "+",
    label: "Supporters Nationwide",
    description: "And growing every day",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: "+",
    label: "Years Combined Service",
    description: "Of our founding team",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function StatCard({
  value,
  suffix,
  label,
  description,
  icon,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) {
  const { count, ref } = useAnimatedCounter({ end: value, duration: 2500, delay: delay * 150 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative p-8 rounded-2xl glass card-lift gradient-border"
    >
      <div className="relative z-10">
        <div className="text-azure mb-5 transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl sm:text-5xl font-display font-bold text-pure-white tabular-nums">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl font-display font-bold text-azure">{suffix}</span>
        </div>
        <h3 className="text-base font-semibold text-silver mb-1">{label}</h3>
        <p className="text-sm text-slate">{description}</p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-azure/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              The Scale of Impact
              <span className="w-8 h-px bg-azure" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text-white">
              Numbers That Demand Action
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <StatCard {...stat} delay={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
