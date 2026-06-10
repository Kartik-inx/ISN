"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const stories = [
  {
    quote: "I served for 22 years, saw things no person should ever witness. When I finally asked for help, the system I'd given my life to had nothing to offer me.",
    name: "Former Sergeant",
    service: "22 years of service",
    force: "Metropolitan Police",
  },
  {
    quote: "My partner came home different every night. The person I married was disappearing piece by piece. We needed support and there was none to be found.",
    name: "Officer's Spouse",
    service: "Supporting for 15 years",
    force: "Police Family",
  },
  {
    quote: "Three of my closest colleagues have taken their own lives in the past five years. Each time, the conversations start and then stop. It stops now.",
    name: "Serving Inspector",
    service: "18 years of service",
    force: "West Midlands Police",
  },
];

export default function StoriesPreview() {
  return (
    <section className="relative py-28 bg-obsidian overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-royal/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Their Words"
            title={<>Stories That <span className="gradient-text">Must Be Heard</span></>}
            description="Real voices from the police family — serving officers, retired colleagues, and the families who stand beside them."
          />
        </ScrollReveal>

        {/* Stories Grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {stories.map((story, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.15}
              className={
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                  ? "md:col-span-5"
                  : "md:col-span-12"
              }
            >
              <div
                className={`group relative h-full rounded-2xl overflow-hidden ${
                  i === 2 ? "glass p-10 md:p-12" : "bg-navy/40 border border-white/5 p-8 md:p-10"
                } card-lift`}
              >
                {/* Large quote mark */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`mb-6 ${i === 2 ? "text-azure/30" : "text-white/10"}`}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                {/* Quote text */}
                <blockquote
                  className={`font-display leading-relaxed mb-8 ${
                    i === 2
                      ? "text-xl md:text-2xl text-pure-white"
                      : "text-lg text-silver"
                  }`}
                >
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azure/30 to-sky/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-azure">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">{story.name}</p>
                    <p className="text-xs text-slate-light">{story.service} · {story.force}</p>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-azure/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Link to all stories */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-azure hover:text-ice font-semibold transition-colors group"
            >
              Read all stories
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
