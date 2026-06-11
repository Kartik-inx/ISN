import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import AboutFounders from "@/components/sections/AboutFounders";
import SupportedByPocketSergeant from "@/components/sections/SupportedByPocketSergeant";
import PocketSergeantBanner from "@/components/sections/PocketSergeantBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about It Stops Now — our mission, our values, and the people behind the movement for police officer welfare.",
};

const timeline = [
  { year: "2020", title: "The Spark", description: "Founded by serving and retired officers who witnessed the devastating impact of inadequate support firsthand." },
  { year: "2021", title: "Gaining Ground", description: "First major campaign launched, attracting thousands of signatures and national media attention." },
  { year: "2022", title: "Growing Movement", description: "Partnerships formed with mental health organisations, legal advocates, and police family support groups." },
  { year: "2023", title: "National Recognition", description: "Parliamentary engagement begins, with the campaign being cited in debates on officer welfare." },
  { year: "2024", title: "Expanding Reach", description: "Wall of Remembrance launched, giving families and colleagues a digital space to honour lost officers." },
  { year: "2025", title: "Unstoppable", description: "Over 50,000 supporters. Multiple policy recommendations accepted. The movement cannot be ignored." },
];

const values = [
  { title: "Integrity", description: "We operate with complete transparency, honesty, and ethical conduct in everything we do.", icon: "⚡" },
  { title: "Courage", description: "We speak truth to power, even when it is uncomfortable, because silence is complicity.", icon: "🛡️" },
  { title: "Compassion", description: "We lead with empathy, understanding that behind every statistic is a human being and a family.", icon: "💙" },
  { title: "Unity", description: "We believe in the strength of collective action — officers, families, and communities standing together.", icon: "🤝" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/uk_police_ds_1781074862198.png"
            alt="British Police Officer Portrait"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-midnight/80 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-azure/5 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              About Us
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Born from Service.{" "}
              <span className="gradient-text">Driven by Purpose.</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto leading-relaxed">
              It Stops Now was created by people who lived it — officers and families
              who experienced the failures of the system and decided that silence
              was no longer an option.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR MISSION Statement Section */}
      <section id="our-mission" className="relative py-28 bg-midnight scroll-mt-20 border-t border-b border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-azure/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left side: Heading */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="left">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6 select-none">
                  <span className="w-8 h-px bg-azure" />
                  OUR MISSION
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white leading-tight mb-6">
                  To drive real change for police officers, their families and a fairer system.
                </h2>
                <p className="text-lg text-slate-light leading-relaxed">
                  It Stops Now is a movement for change, better support and a system that protects those who protect the public.
                </p>
              </ScrollReveal>
            </div>

            {/* Right side: 2x2 Grid of pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-navy/40 border border-white/5 h-full transition-colors hover:border-azure/20">
                  <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center text-azure mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-2 select-none">
                    WHAT DOES THE FUNDING SUPPORT?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Website development / Campaign resources / Events and meetings / Awareness and outreach / Memorial and tribute projects / Research and data support
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-navy/40 border border-white/5 h-full transition-colors hover:border-azure/20">
                  <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center text-azure mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-2 select-none">
                    OUR INDEPENDENCE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Although funded by Pocket Sergeant Ltd, It Stops Now is independently led and focused solely on creating meaningful change for the police community.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-navy/40 border border-white/5 h-full transition-colors hover:border-azure/20">
                  <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center text-azure mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-2 select-none">
                    OUR COMMITMENT TO TRANSPARENCY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    We believe transparency builds trust. We are open about who supports us, how funds are used and our mission to protect those who protect the public.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-navy/40 border border-white/5 h-full transition-colors hover:border-azure/20">
                  <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center text-azure mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14-1h-6m6 4h-4" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-2 select-none">
                    WHY TRANSPARENCY MATTERS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Open and honest funding ensures accountability and helps us focus on what truly matters — supporting officers and driving change.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values — Offset 3-column */}
      <section className="relative py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Mission",
                  title: "What We Do",
                  text: "We campaign for systemic change in how police officers and their families are supported — challenging the culture of silence and demanding accountability from those in power.",
                },
                {
                  label: "Vision",
                  title: "What We See",
                  text: "A police service where every officer has access to the support they need, where families are not forgotten, and where the sacrifices of those who serve are truly honoured.",
                },
                {
                  label: "Purpose",
                  title: "Why We Exist",
                  text: "Because too many officers suffer in silence. Too many families are left to cope alone. Too many lives are lost to a system that fails the very people who protect us all.",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`relative p-8 rounded-2xl glass gradient-border ${
                    i === 1 ? "md:-translate-y-6" : ""
                  }`}
                >
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-azure mb-4 block">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-pure-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
                <span className="w-8 h-px bg-azure" />
                Our Values
                <span className="w-8 h-px bg-azure" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text-white">
                What Guides Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-navy/40 border border-white/5 card-lift text-center h-full">
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h3 className="text-lg font-display font-semibold text-pure-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28 bg-obsidian overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-azure/20 to-transparent hidden md:block" />

        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
                <span className="w-8 h-px bg-azure" />
                Our Journey
                <span className="w-8 h-px bg-azure" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text-white">
                From Silence to Action
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 md:mb-16 ${
                  i % 2 === 0 ? "" : "md:direction-rtl"
                }`}>
                  {/* Content */}
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <span className="text-sm font-bold text-azure tracking-wider">{item.year}</span>
                    <h3 className="text-xl font-display font-semibold text-pure-white mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-light leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-azure border-4 border-obsidian z-10" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Founders Section directly on the page */}
      <AboutFounders />

      {/* REAL STORIES. REAL PEOPLE. Content Row */}
      <section className="relative py-16 bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Link
                href="/stories"
                className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
              >
                <div>
                  <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                    Read Experiences
                  </span>
                  <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                    REAL STORIES. REAL PEOPLE.
                  </h4>
                  <p className="text-sm text-slate-light mt-3 leading-relaxed">
                    Behind every statistic is a person, a family and a story.
                  </p>
                </div>
                <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                  READ THEIR STORIES →
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/stories"
                className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
              >
                <div>
                  <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                    Families First
                  </span>
                  <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                    FAMILIES LEFT BEHIND
                  </h4>
                  <p className="text-sm text-slate-light mt-3 leading-relaxed">
                    The impact on those they leave behind. The stories behind the numbers.
                  </p>
                </div>
                <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                  READ MORE →
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="/voices"
                className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
              >
                <div>
                  <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                    Speak Out
                  </span>
                  <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                    VOICES FOR CHANGE
                  </h4>
                  <p className="text-sm text-slate-light mt-3 leading-relaxed">
                    Officers speaking out. Because officers deserve better than they got.
                  </p>
                </div>
                <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                  READ MORE →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Bottom Learn More Links */}
      <section className="relative py-20 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Link
                href="/pocket-sergeant"
                className="group flex items-start gap-5 p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center text-azure shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1 select-none">
                    VISIT POCKET SERGEANT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Learn more about the app and our mission.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/pocket-sergeant"
                className="group flex items-start gap-5 p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center text-azure shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1 select-none">
                    DOWNLOAD THE APP
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Join tens of thousands of officers using the app.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="/pocket-sergeant"
                className="group flex items-start gap-5 p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center text-azure shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1 select-none">
                    LEARN ABOUT OUR WORK
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    Wellbeing, training and support for officers.
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supported By Pocket Sergeant Section */}
      <SupportedByPocketSergeant />

      {/* Supporter Banner */}
      <PocketSergeantBanner />
    </>
  );
}
