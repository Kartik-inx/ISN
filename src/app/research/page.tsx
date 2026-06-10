import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research & Evidence",
  description: "The evidence base behind our campaign — research, data, and reports documenting the crisis in police officer welfare.",
};

const keyFindings = [
  { stat: "91%", context: "of officers report exposure to traumatic events during their career", source: "Police Federation Survey, 2024" },
  { stat: "67%", context: "say their work has negatively impacted their mental health", source: "PFEW Officer Demand Survey" },
  { stat: "1 in 5", context: "officers show symptoms consistent with PTSD", source: "University of Cambridge Study" },
  { stat: "2.6x", context: "higher suicide rate compared to the general population", source: "ONS Occupational Analysis" },
];

const reports = [
  {
    title: "The Hidden Crisis: Police Officer Mental Health in the UK",
    year: "2025",
    type: "Research Report",
    description: "A comprehensive analysis of mental health prevalence, support gaps, and policy failures across UK police forces.",
  },
  {
    title: "Families in the Shadows: The Impact of Policing on Families",
    year: "2024",
    type: "Qualitative Study",
    description: "In-depth interviews with 120 police families exploring secondary trauma, relationship strain, and support needs.",
  },
  {
    title: "After the Badge: Post-Service Welfare Provision",
    year: "2024",
    type: "Policy Brief",
    description: "Analysis of welfare support available to officers after leaving the service, revealing critical gaps in aftercare.",
  },
  {
    title: "Breaking the Silence: Cultural Barriers to Help-Seeking",
    year: "2023",
    type: "Academic Paper",
    description: "Examination of stigma, peer pressure, and organisational culture that prevent officers from accessing support.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_research.png"
            alt="Research & Evidence - Abstract data layers"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-midnight/80 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-azure/5 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Evidence Base
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Research &{" "}
              <span className="gradient-text">Evidence</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Our campaign is built on evidence. Every demand we make is supported by
              data, research, and the lived experiences of the police family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Findings */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-12">
              Key Findings
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyFindings.map((finding, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl glass gradient-border card-lift h-full">
                  <span className="text-4xl font-display font-bold text-azure block mb-3">
                    {finding.stat}
                  </span>
                  <p className="text-base text-silver leading-relaxed mb-4">{finding.context}</p>
                  <p className="text-xs text-slate italic">Source: {finding.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Publications */}
      <section className="relative py-20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
              Reports & Publications
            </h2>
            <p className="text-base text-slate-light mb-12">
              Access our published research, policy briefs, and evidence summaries.
            </p>
          </ScrollReveal>

          <div className="space-y-5">
            {reports.map((report, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group flex flex-col md:flex-row md:items-center gap-6 p-7 rounded-2xl bg-navy/40 border border-white/5 card-lift">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-azure/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-azure">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-display font-semibold text-pure-white group-hover:text-azure transition-colors">
                        {report.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-azure/10 text-azure">{report.type}</span>
                      <span className="text-xs text-slate">{report.year}</span>
                    </div>
                    <p className="text-sm text-slate-light">{report.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="btn-outline text-xs px-4 py-2">
                      Download
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
