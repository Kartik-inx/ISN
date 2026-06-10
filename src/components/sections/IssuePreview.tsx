"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function IssuePreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-ember/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-azure/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal variant="left">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-ember mb-6">
                <span className="w-8 h-px bg-ember" />
                The Issue
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pure-white leading-tight mb-6">
                A Crisis Hidden{" "}
                <span className="gradient-text">in Plain Sight</span>
              </h2>

              <p className="text-lg text-slate-light leading-relaxed mb-8">
                Every day, police officers face extraordinary pressures — from
                the trauma they witness on duty to the systemic failures that
                leave them without adequate support. The toll on mental health,
                families, and careers is devastating, yet too often invisible.
              </p>

              {/* Key statistics inline */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { number: "67%", label: "Report mental health impact" },
                  { number: "1 in 4", label: "Have considered leaving" },
                  { number: "83%", label: "Feel under-supported" },
                  { number: "2x", label: "Higher PTSD rates" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-navy/60 border border-white/5"
                  >
                    <span className="text-2xl font-display font-bold text-ember">
                      {stat.number}
                    </span>
                    <p className="text-xs text-slate-light mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/the-issue"
                className="inline-flex items-center gap-2 text-azure hover:text-ice font-semibold transition-colors group"
              >
                Understand the full picture
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Visual element */}
          <ScrollReveal variant="right">
            <div className="relative">
              {/* Stylized visual card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-light to-navy p-1">
                <div className="rounded-[1.25rem] overflow-hidden bg-navy-light p-10">
                  {/* Abstract data visualization */}
                  <div className="space-y-6">
                    {[
                      { label: "Trauma Exposure", width: "92%", color: "from-ember to-rose" },
                      { label: "Support Available", width: "23%", color: "from-azure to-sky" },
                      { label: "Officers Affected", width: "78%", color: "from-gold to-amber" },
                      { label: "Policy Response", width: "15%", color: "from-emerald to-teal" },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-silver">{bar.label}</span>
                          <span className="text-sm font-semibold text-pure-white">{bar.width}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${bar.color} transition-all duration-1000`}
                            style={{ width: bar.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom message */}
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-sm text-slate-light italic">
                      &ldquo;The gap between trauma exposure and support available
                      is a crisis that cannot continue.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-ember/20 rotate-12 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-azure/10 animate-breathe" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
