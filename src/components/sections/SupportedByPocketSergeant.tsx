"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function SupportedByPocketSergeant() {
  return (
    <section className="relative py-16 bg-navy/20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-pure-white mb-4 uppercase tracking-wide">
            SUPPORTED BY POCKET SERGEANT
          </h2>
          <p className="text-base text-slate-light leading-relaxed mb-6 max-w-2xl mx-auto">
            It Stops Now is proudly funded and supported by Pocket Sergeant Ltd as part of its commitment to police officer wellbeing, welfare and reform.
          </p>
          <Link
            href="/pocket-sergeant"
            className="inline-flex items-center gap-1.5 text-xs text-azure hover:text-sky font-semibold transition-colors group tracking-widest uppercase"
          >
            Learn more about our supporter <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
