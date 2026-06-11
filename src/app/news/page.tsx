"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All News", "Campaign News", "Parliament", "Expert Voices", 
  "Research", "Media", "Events", "Opinion", "Community"
];

const newsArticles = [
  {
    category: "Campaign News",
    title: "National Police Memorial Day: Remembering Those We've Lost",
    excerpt: "As we gather for National Police Memorial Day, we remember not only those lost in the line of duty, but those lost to the invisible wounds of the job.",
    date: "Sep 28, 2025",
    author: "It Stops Now Team",
    image: "/images/hero_home.png",
  },
  {
    category: "Parliament",
    title: "New Bill Proposed: Time Limits on IOPC Investigations",
    excerpt: "A cross-party coalition of MPs has tabled a new bill calling for strict 12-month time limits on disciplinary investigations, addressing the severe mental health toll of prolonged uncertainty.",
    date: "Sep 15, 2025",
    author: "Political Correspondent",
    image: "/images/hero_theissue.png",
  },
  {
    category: "Research",
    title: "Mind Blue Light Survey Reveals Shocking Toll on Frontline",
    excerpt: "The latest independent survey data shows a 15% year-on-year increase in officers reporting clinical symptoms of PTSD. The system is fundamentally broken.",
    date: "Sep 02, 2025",
    author: "Dr. Sarah Jenkins",
    image: "/images/hero_stories.png",
  },
  {
    category: "Media",
    title: "BBC Panorama: The Silent Crisis in Policing",
    excerpt: "A groundbreaking new documentary airs tonight, featuring interviews with our founders and several anonymous serving officers discussing the reality of mental health in the force.",
    date: "Aug 22, 2025",
    author: "Media Team",
    image: "/images/hero_home.png",
  },
  {
    category: "Expert Voices",
    title: "Why 'Resilience Training' Isn't Enough",
    excerpt: "We cannot yoga our way out of trauma. A leading trauma specialist explains why systemic change, not just individual resilience training, is required.",
    date: "Aug 10, 2025",
    author: "Prof. David Clark",
    image: "/images/hero_theissue.png",
  },
  {
    category: "Community",
    title: "Local Force Implements Peer-Support Pilot",
    excerpt: "Following pressure from our campaign, a northern constabulary has launched an entirely anonymous peer-to-peer support network.",
    date: "Jul 28, 2025",
    author: "Community Liaison",
    image: "/images/hero_stories.png",
  },
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("All News");

  const filteredNews = activeTab === "All News" 
    ? newsArticles 
    : newsArticles.filter(n => n.category === activeTab);

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-obsidian to-obsidian" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              Latest Updates
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-pure-white mb-6 uppercase">
              LATEST UPDATES & CAMPAIGN NEWS
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Stay informed on our progress, upcoming events, and breakthroughs in our fight for the policing family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === cat
                    ? "bg-azure text-obsidian border-azure shadow-md shadow-azure/20"
                    : "bg-white/5 text-slate-light border-white/10 hover:border-white/30 hover:text-pure-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href="#" className="group block h-full">
                  <div className="bg-navy border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-azure/30 hover:shadow-xl hover:shadow-azure/5">
                    <div className="relative h-48 w-full overflow-hidden bg-midnight">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-azure text-obsidian text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-pure-white mb-3 group-hover:text-azure transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-light leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider border-t border-white/10 pt-4 mt-auto">
                        <span>{article.date}</span>
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500">No news found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* What We're Working On Section */}
      <section className="py-24 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white uppercase tracking-wide mb-4">
                WHAT WE&apos;RE WORKING ON
              </h2>
              <p className="text-slate-light">Our Current Focus Areas</p>
              <div className="w-16 h-1 bg-azure mx-auto mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investigations Reform",
                desc: "Advocating for strict time limits on IOPC investigations to prevent the severe psychological damage of prolonged uncertainty.",
                icon: "⚖️"
              },
              {
                title: "Mental Health Support",
                desc: "Campaigning for mandatory, independent psychological assessments and fast-track trauma treatment for all frontline staff.",
                icon: "🧠"
              },
              {
                title: "Data Transparency",
                desc: "Pushing for a national, public register of police suicides to force accountability and reveal the true scale of the crisis.",
                icon: "📊"
              },
              {
                title: "Culture Change",
                desc: "Working with force leadership to eliminate the stigma around mental health and end the toxic culture of silence.",
                icon: "🤝"
              }
            ].map((focus, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-navy/50 border border-white/5 rounded-2xl p-8 h-full hover:bg-navy transition-colors hover:border-azure/20">
                  <div className="text-4xl mb-6">{focus.icon}</div>
                  <h3 className="text-lg font-bold text-pure-white mb-4 uppercase">{focus.title}</h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
