"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const events = [
  {
    date: { day: "15", month: "JUL" },
    title: "National Police Memorial Day",
    location: "National Memorial Arboretum, Staffordshire",
    description: "Join us for a day of remembrance and solidarity as we honour officers who gave everything in service.",
    type: "Memorial",
  },
  {
    date: { day: "28", month: "AUG" },
    title: "Police Wellbeing Conference 2026",
    location: "Queen Elizabeth II Centre, London",
    description: "Leading experts discuss the state of officer welfare, featuring keynotes, workshops, and action panels.",
    type: "Conference",
  },
  {
    date: { day: "12", month: "SEP" },
    title: "Community Solidarity March",
    location: "Multiple cities nationwide",
    description: "A peaceful march uniting communities and officers, demonstrating collective support for the police family.",
    type: "Campaign",
  },
];

const typeColors: Record<string, string> = {
  Memorial: "bg-gold/10 text-gold",
  Conference: "bg-azure/10 text-azure",
  Campaign: "bg-emerald/10 text-emerald",
};

export default function EventsPreview() {
  return (
    <section className="relative py-28 bg-obsidian overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-azure/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
                <span className="w-8 h-px bg-azure" />
                Upcoming
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text-white">
                Events & Gatherings
              </h2>
            </div>
            <Link
              href="/events"
              className="btn-outline text-sm px-6 py-3 flex-shrink-0"
            >
              View All Events
            </Link>
          </div>
        </ScrollReveal>

        {/* Timeline-style events */}
        <div className="space-y-6">
          {events.map((event, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl bg-navy/30 border border-white/5 card-lift">
                {/* Date block */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-center gap-3 md:gap-1">
                  <div className="w-16 h-16 rounded-xl bg-azure/10 flex flex-col items-center justify-center group-hover:bg-azure/20 transition-colors duration-300">
                    <span className="text-2xl font-display font-bold text-pure-white leading-none">
                      {event.date.day}
                    </span>
                    <span className="text-xs font-semibold text-azure tracking-wider">
                      {event.date.month}
                    </span>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-8">
                  <h3 className="text-xl font-display font-semibold text-pure-white mb-2 group-hover:text-azure transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-light">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-sm text-slate-light">{event.description}</p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-2 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-azure/20 transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate group-hover:text-azure transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-azure group-hover:h-1/2 transition-all duration-500 rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
