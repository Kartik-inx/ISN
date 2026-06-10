"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/20 via-midnight to-navy" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-azure/8 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Join the Movement
              <span className="w-8 h-px bg-azure" />
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-pure-white leading-tight mb-6">
              Together, We Make{" "}
              <span className="gradient-text">It Stop.</span>
            </h2>

            <p className="text-lg text-slate-light max-w-2xl mx-auto leading-relaxed mb-10">
              Every voice matters. Every action counts. Whether you sign, share,
              donate, or simply stand with us — you become part of the change
              the police family desperately needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/take-action" className="btn-primary text-base px-10 py-4 rounded-xl">
              <span className="flex items-center gap-2">
                Take Action Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/remembrance" className="btn-outline text-base px-8 py-4 rounded-xl">
              Light a Candle
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-white/5">
            {[
              { number: "50K+", label: "Supporters" },
              { number: "100+", label: "Partner orgs" },
              { number: "24/7", label: "Support available" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="text-xl font-display font-bold text-pure-white">{item.number}</span>
                <p className="text-xs text-slate mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
