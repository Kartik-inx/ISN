import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

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

      {/* CTA */}
      <section className="relative py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-6">
              Meet the People Behind the Mission
            </h2>
            <p className="text-lg text-slate-light mb-10">
              Our founders bring decades of frontline experience and an
              unshakeable commitment to change.
            </p>
            <Link href="/founders" className="btn-primary text-base px-8 py-4 rounded-xl">
              <span>Meet Our Founders</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
