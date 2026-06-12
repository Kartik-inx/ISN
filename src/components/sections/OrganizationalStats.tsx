"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { impactStats } from "@/lib/constants";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime || 10);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function OrganizationalStats() {
  return (
    <section className="relative py-28 bg-navy/20 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-azure/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              Our Impact
              <span className="w-8 h-px bg-azure" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white leading-tight">
              Making a Difference Nationwide
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-midnight border border-white/5 text-center h-full flex flex-col items-center shadow-xl hover:border-azure/30 transition-colors duration-300 card-lift group">
                <div className="w-14 h-14 rounded-full bg-azure/10 flex items-center justify-center text-azure mb-6 group-hover:scale-110 transition-transform duration-500">
                  {/* Simple icons based on string in constants.ts */}
                  {stat.icon === "shield" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {stat.icon === "message" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                  {stat.icon === "users" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {stat.icon === "clock" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                </div>
                <h3 className="text-4xl font-display font-black text-pure-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                </h3>
                <p className="text-sm font-medium text-slate-light uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
