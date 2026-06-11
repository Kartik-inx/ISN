"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const topics = ["Mental Health", "Misconduct", "Welfare", "Culture", "Data"];

export default function ResearchPage() {
  const [activeTopic, setActiveTopic] = useState("Mental Health");

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy/40 via-obsidian to-obsidian" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              Research & Evidence
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-pure-white mb-6 uppercase">
              THE EVIDENCE DEMANDS ACTION
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto mb-12">
              Explore the data, studies, and independent reports that prove the policing system is in crisis.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTopic === topic
                      ? "bg-azure text-obsidian shadow-lg shadow-azure/20"
                      : "bg-white/5 text-slate-light hover:bg-white/10 hover:text-pure-white border border-white/5"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Research Hero Grid */}
      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-10 uppercase tracking-wide">
              FEATURED RESEARCH
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ScrollReveal className="lg:col-span-2">
              <Link href="#" className="group block relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero_theissue.png"
                  alt="Primary research"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-azure text-white text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">
                    Police Federation
                  </span>
                  <h3 className="text-3xl font-display font-bold text-pure-white mb-3 group-hover:text-azure transition-colors">
                    2024 Pay and Morale Survey Results
                  </h3>
                  <p className="text-slate-light max-w-xl">
                    The most comprehensive annual survey reveals record lows in morale and alarming statistics regarding intended resignations across all ranks.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6">
              <ScrollReveal delay={0.1}>
                <Link href="#" className="group block relative h-[188px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-navy" />
                  <div className="absolute inset-0 bg-gradient-to-br from-azure/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-max">
                      IOPC Data
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-pure-white mb-2 group-hover:text-azure transition-colors leading-snug">
                        The Impact of Prolonged Misconduct Investigations
                      </h3>
                      <p className="text-xs text-slate-500">Independent Review • 2023</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Link href="#" className="group block relative h-[188px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-navy" />
                  <div className="absolute inset-0 bg-gradient-to-br from-azure/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-max">
                      Mind Charity
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-pure-white mb-2 group-hover:text-azure transition-colors leading-snug">
                        Blue Light Programme Evaluation Report
                      </h3>
                      <p className="text-xs text-slate-500">Mental Health Data • 2023</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading Path */}
      <section className="py-24 bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white uppercase tracking-wide mb-4">
                RECOMMENDED READING PATH
              </h2>
              <p className="text-slate-light max-w-2xl mx-auto">
                To understand the full scope of the policing crisis, we recommend following this reading path:
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/10 z-0" />
            
            {/* Vertical Line for Mobile */}
            <div className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-white/10 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10 pl-16 lg:pl-0">
              {[
                {
                  step: 1,
                  title: "The Reality",
                  desc: "Start here: The base data on suicide rates and mental health."
                },
                {
                  step: 2,
                  title: "Officer Trauma",
                  desc: "Deep dive into the operational trauma that builds up over a career."
                },
                {
                  step: 3,
                  title: "Misconduct",
                  desc: "Understand the broken IOPC and internal disciplinary processes."
                },
                {
                  step: 4,
                  title: "Moral Injury",
                  desc: "Read about the psychological impact of being unable to do the job properly."
                },
                {
                  step: 5,
                  title: "Prevention & Reform",
                  desc: "Explore proposed solutions and necessary cultural changes."
                }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative pt-2 lg:pt-24">
                    {/* Node Circle */}
                    <div className="absolute -left-16 lg:left-1/2 lg:-translate-x-1/2 lg:top-8 w-8 h-8 rounded-full bg-azure text-obsidian flex items-center justify-center font-bold text-sm shadow-[0_0_0_8px_#0A0F1C] z-10">
                      {item.step}
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-navy/50 border border-white/5 rounded-xl p-6 text-center hover:border-azure/30 transition-colors">
                      <h3 className="text-lg font-bold text-pure-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
