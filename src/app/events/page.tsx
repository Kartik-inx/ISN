import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events — memorial days, conferences, marches, and community gatherings supporting the police family.",
};

const upcomingEvents = [
  {
    date: { day: "15", month: "JUL", year: "2026" },
    title: "National Police Memorial Day",
    location: "National Memorial Arboretum, Staffordshire",
    time: "10:00 AM – 4:00 PM",
    description: "A day of remembrance honouring officers who have lost their lives in service. Includes a wreath-laying ceremony, readings, and a minute's silence.",
    type: "Memorial",
  },
  {
    date: { day: "28", month: "AUG", year: "2026" },
    title: "Police Wellbeing Conference 2026",
    location: "Queen Elizabeth II Centre, London",
    time: "9:00 AM – 6:00 PM",
    description: "Our flagship annual conference bringing together officers, families, policymakers, and mental health professionals to discuss the state of police welfare.",
    type: "Conference",
  },
  {
    date: { day: "12", month: "SEP", year: "2026" },
    title: "Community Solidarity March",
    location: "12 cities nationwide",
    time: "1:00 PM – 4:00 PM",
    description: "A peaceful march uniting communities and officers in a powerful demonstration of support for the police family.",
    type: "Campaign",
  },
  {
    date: { day: "05", month: "NOV", year: "2026" },
    title: "Officer Families Support Day",
    location: "Online & Regional Centres",
    time: "10:00 AM – 3:00 PM",
    description: "Workshops, counselling sessions, and peer support groups specifically designed for the families of serving and retired officers.",
    type: "Support",
  },
];

const pastEvents = [
  { title: "Parliamentary Evidence Session", date: "March 2026", type: "Campaign" },
  { title: "Spring Solidarity Walk", date: "April 2026", type: "Campaign" },
  { title: "Mental Health First Aid Training", date: "February 2026", type: "Support" },
];

const typeColors: Record<string, string> = {
  Memorial: "bg-gold/10 text-gold border-gold/20",
  Conference: "bg-azure/10 text-azure border-azure/20",
  Campaign: "bg-emerald/10 text-emerald border-emerald/20",
  Support: "bg-rose/10 text-rose border-rose/20",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_events.png"
            alt="Events - Crowd standing together in the rain"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-midnight/80 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Events
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold gradient-text-white leading-none tracking-tight drop-shadow-xl mb-6">
              Gatherings That Matter
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              From memorial services to campaign marches, every gathering
              strengthens our movement and honours the police family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-16 pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-10">
              Upcoming Events
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-navy/40 border border-white/5 card-lift">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Date block */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="inline-flex flex-col items-center w-20 h-20 rounded-xl bg-azure/10 justify-center group-hover:bg-azure/20 transition-colors">
                        <span className="text-3xl font-display font-bold text-pure-white leading-none">{event.date.day}</span>
                        <span className="text-xs font-semibold text-azure tracking-wider">{event.date.month}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColors[event.type]}`}>
                          {event.type}
                        </span>
                        <span className="text-xs text-slate">{event.time}</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-pure-white mb-2 group-hover:text-azure transition-colors">
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
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="relative py-16 bg-obsidian">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-8">
              Past Events
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-5 rounded-xl bg-navy/30 border border-white/5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[event.type]} inline-block mb-3`}>
                    {event.type}
                  </span>
                  <h3 className="text-sm font-semibold text-silver">{event.title}</h3>
                  <p className="text-xs text-slate mt-1">{event.date}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
