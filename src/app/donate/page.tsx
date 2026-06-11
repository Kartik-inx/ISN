"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
            <span className="w-8 h-px bg-azure" />
            Support Us
            <span className="w-8 h-px bg-azure" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-pure-white mb-6">
            Make a Donation
          </h1>
          <p className="text-lg text-slate-light mb-12">
            Every pound helps us push for systemic change and support the families of fallen officers.
          </p>

          <div className="p-8 rounded-2xl glass-strong border border-white/5 max-w-xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-pure-white mb-4">Donate via our partner platform</h2>
            <p className="text-sm text-slate-light mb-8">
              We process all secure donations through our verified payment gateway.
            </p>
            <button className="btn-primary w-full py-4 text-lg">
              <span>Donate Now</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
