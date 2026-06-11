"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const row1Objectives = [
  {
    num: "01",
    title: "IMPROVE WELLBEING & MENTAL HEALTH",
    description: "Ensure every officer and staff member has access to timely, effective and ongoing mental health support."
  },
  {
    num: "02",
    title: "PREVENT SUICIDE & SAVE LIVES",
    description: "Reduce the number of police officer suicides through early intervention, support and cultural change."
  },
  {
    num: "03",
    title: "DRIVE ACCOUNTABILITY & TRANSPARENCY",
    description: "Ensure misconduct is investigated fairly, transparently and without bias or delay."
  },
  {
    num: "04",
    title: "SUPPORT FAMILIES & LOVED ONES",
    description: "Provide better support, information and care for the families and loved ones of officers."
  }
];

const row2Objectives = [
  {
    num: "05",
    title: "REFORM SYSTEMS & PROCESSES",
    description: "Identify failures in policies, processes and structures – and drive the reforms needed to fix them."
  },
  {
    num: "06",
    title: "EDUCATE & CHANGE POLICING CULTURE",
    description: "Promote a culture of openness, respect and support where speaking up is safe and encouraged."
  },
  {
    num: "07",
    title: "INFLUENCE POLICY & LEGISLATION",
    description: "Work with policymakers and decision makers to create laws and policies that protect those who protect us."
  }
];

export default function ObjectivesGrid() {
  return (
    <section className="relative py-28 bg-obsidian">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Campaign Priorities"
            title="Campaign Objectives"
            description="Seven core campaign objectives to deliver mental health support, prevent suicide, drive system reforms, and protect those who protect the public."
          />
        </ScrollReveal>

        {/* 4+3 Grid Layout */}
        <div className="space-y-6">
          {/* Row 1: 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1Objectives.map((obj, i) => (
              <ScrollReveal key={obj.num} delay={i * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-navy/50 border border-white/5 hover:border-azure/30 card-lift transition-all duration-300">
                  <div className="text-3xl font-display font-black text-azure/30 group-hover:text-azure/60 transition-colors duration-300 mb-4">
                    {obj.num}
                  </div>
                  <h3 className="text-lg font-display font-bold text-pure-white mb-3 tracking-wide uppercase leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: 3 columns, centered on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {row2Objectives.map((obj, i) => (
              <ScrollReveal key={obj.num} delay={(i + 4) * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-navy/50 border border-white/5 hover:border-azure/30 card-lift transition-all duration-300">
                  <div className="text-3xl font-display font-black text-azure/30 group-hover:text-azure/60 transition-colors duration-300 mb-4">
                    {obj.num}
                  </div>
                  <h3 className="text-lg font-display font-bold text-pure-white mb-3 tracking-wide uppercase leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Campaign callout footer */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 pt-10 border-t border-white/5 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-azure mb-6">
              ONE MOVEMENT. ONE MISSION. We will not stop until real change happens. It Stops Now.
            </span>
            
            <blockquote className="text-xl sm:text-2xl font-serif italic text-pure-white leading-relaxed mb-4">
              "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for."
            </blockquote>
            <cite className="block text-xs uppercase tracking-widest text-slate mb-10 not-italic">
              — Barack Obama
            </cite>

            <Link
              href="/the-issue"
              className="btn-outline text-xs tracking-widest font-bold uppercase py-4 px-8 rounded-xl hover:bg-white/5 transition-all"
            >
              VIEW ALL OBJECTIVES
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
