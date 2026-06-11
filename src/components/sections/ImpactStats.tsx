"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    value: "100+",
    label: "POLICE OFFICERS & STAFF LOST TO SUICIDE",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4v16m-8-8h16" />
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    value: "70+",
    label: "POLICE OFFICERS LOST TO SUICIDE",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    value: "200+",
    label: "ATTEMPTED SUICIDES RECORDED",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    value: "47 OF 70",
    label: "OFFICER SUICIDES LINKED TO MISCONDUCT OR CRIMINAL INVESTIGATIONS",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
      </svg>
    ),
    value: "173 OF 236",
    label: "ATTEMPTED SUICIDES INVOLVED OFFICERS UNDER INVESTIGATION",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    value: "12 OF 13",
    label: "KNOWN OFFICER SUICIDES IN 2025 INVOLVED OFFICERS UNDER INVESTIGATION",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative py-28 bg-obsidian border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-pure-white uppercase tracking-wide">
              THE REALITY WE CAN&apos;T IGNORE
            </h2>
            <div className="w-16 h-1 bg-azure mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-white/10 bg-navy/50 flex flex-col items-center text-center shadow-lg hover:border-azure/30 transition-colors">
                <div className="text-azure mb-6">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-3">
                  {stat.value}
                </div>
                <h3 className="text-xs font-semibold text-slate-light uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="bg-navy/30 rounded-xl p-6 border border-white/5 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center text-slate-400 flex-shrink-0 mt-0.5 font-serif italic">
              i
            </div>
            <div>
              <p className="text-sm font-semibold text-pure-white mb-1">The true number is likely to be significantly higher.</p>
              <p className="text-sm text-slate-light leading-relaxed mb-3">
                Inconsistent reporting and the absence of national transparency mean the full scale of the issue may never be fully known.
              </p>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                Data source: Police Federation wellbeing and misconduct research (2022-2025)
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
