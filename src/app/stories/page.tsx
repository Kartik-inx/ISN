"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const categories = ["All Stories", "Officer Stories", "Family Stories", "Colleague Stories", "Recovery Stories"];

const stories = [
  {
    category: "Officer Stories",
    quote: "I served for 22 years. I saw things that no human should ever have to witness. When I finally asked for help, the system I'd given my life to had nothing to offer me. I was told to wait. I waited until I couldn't wait any longer.",
    name: "Former Sergeant",
    service: "22 years of service",
    force: "Metropolitan Police",
  },
  {
    category: "Family Stories",
    quote: "My partner came home different every night. The person I married was disappearing piece by piece, replaced by someone who couldn't sleep, couldn't talk, couldn't feel anything except the weight of what they'd seen that day.",
    name: "Officer's Spouse",
    service: "15 years supporting",
    force: "Police Family",
  },
  {
    category: "Colleague Stories",
    quote: "Three colleagues — three friends — took their own lives in the space of five years. Each time, the conversations started. Each time, they stopped. It stops now.",
    name: "Serving Inspector",
    service: "18 years of service",
    force: "West Midlands Police",
  },
  {
    category: "Recovery Stories",
    quote: "I was medically retired after a PTSD diagnosis. It took a year of intense therapy outside the force to rebuild my life. Now, I run a support group for other retired officers. Healing is possible.",
    name: "Retired DC",
    service: "16 years of service",
    force: "Greater Manchester Police",
  },
  {
    category: "Family Stories",
    quote: "My mum was a police officer. I watched her give everything to the job — her time, her health, her peace of mind. The job gave nothing back. That's why I support this campaign. For her. For all of them.",
    name: "Officer's Daughter",
    service: "Family perspective",
    force: "Police Family",
  },
  {
    category: "Officer Stories",
    quote: "I'm still serving. I'm still struggling. I can't use my real name because I fear the consequences. The fact that I have to remain anonymous tells you everything about the culture we're fighting against.",
    name: "Anonymous PC",
    service: "Currently serving",
    force: "Name withheld",
  },
];

export default function StoriesPage() {
  const [activeTab, setActiveTab] = useState("All Stories");

  const filteredStories = activeTab === "All Stories" 
    ? stories 
    : stories.filter(s => s.category === activeTab);

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_stories.png"
            alt="Police officers silhouettes"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-midnight/90 to-obsidian" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              Stories
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-pure-white mb-6 uppercase">
              VOICES FROM THE FRONTLINE
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Real stories from those who serve, those who love them, and those left behind.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-azure text-obsidian shadow-lg shadow-azure/20"
                    : "bg-white/5 text-slate-light hover:bg-white/10 hover:text-pure-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-navy p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between group hover:border-azure/30 transition-colors">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/5 text-azure text-[11px] font-bold uppercase tracking-wider rounded-full mb-6">
                      {story.category}
                    </span>
                    <svg className="w-8 h-8 text-white/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-pure-white leading-relaxed mb-8 italic">
                      &quot;{story.quote}&quot;
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-px bg-white/10 mb-4 group-hover:bg-azure/50 transition-colors" />
                    <h4 className="text-pure-white font-bold">{story.name}</h4>
                    <p className="text-sm text-slate-light">{story.service}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{story.force}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submission CTA Block */}
      <section className="py-24 bg-gradient-to-br from-navy via-midnight to-obsidian border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white uppercase mb-6">
              YOUR STORY COULD SAVE A LIFE
            </h2>
            <p className="text-lg text-slate-light mb-10 leading-relaxed max-w-2xl mx-auto">
              Have you been affected by the policing crisis? Sharing your experience can help break the stigma and show others they aren&apos;t alone.
            </p>
            <Link href="/take-action" className="btn-primary py-4 px-8 text-lg shadow-xl shadow-azure/20">
              SHARE YOUR STORY →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
