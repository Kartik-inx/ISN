import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Issue",
  description: "Understanding the crisis facing police officers — the scale of trauma, systemic failures, and why change is urgently needed.",
};

export default function TheIssuePage() {
  return (
    <>
      {/* Hero — dramatic */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_theissue.png"
            alt="The Issue - Cracked police badge"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-midnight/80 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-midnight/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent z-0" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-ember/5 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-ember mb-6">
              <span className="w-8 h-px bg-ember" />
              The Issue
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-8 max-w-4xl">
              The System is{" "}
              <span className="text-ember">Failing</span>{" "}
              Those Who Protect Us
            </h1>
            <p className="text-xl text-slate-light max-w-2xl leading-relaxed">
              Behind the uniform, there is a human being. Behind the badge, there
              is a family. And both are being failed by a system that demands
              everything and gives back too little.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Scale */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal variant="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-8">
                  The Scale of the Crisis
                </h2>
                <div className="space-y-6 text-base text-slate-light leading-relaxed">
                  <p>
                    Police officers are exposed to levels of trauma that most people
                    will never experience. From attending fatal accidents and
                    delivering death notifications to investigating child abuse and
                    confronting violence — the psychological toll is immense.
                  </p>
                  <p>
                    Yet despite this, the support available is woefully inadequate.
                    Occupational health services are under-resourced, waiting times
                    for specialist treatment are unacceptable, and the culture of
                    &ldquo;just getting on with it&rdquo; continues to prevent officers from
                    seeking the help they need.
                  </p>
                  <p>
                    The consequences are devastating: broken relationships, substance
                    dependency, career-ending breakdowns, and — in the most tragic
                    cases — lives lost to suicide.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <div className="space-y-5">
                {[
                  { stat: "91%", label: "of officers have been exposed to traumatic events during service", color: "ember" },
                  { stat: "67%", label: "report that their job has negatively affected their mental health", color: "gold" },
                  { stat: "1 in 5", label: "officers have symptoms consistent with PTSD or complex PTSD", color: "ember" },
                  { stat: "8 weeks+", label: "average wait for psychological support through occupational health", color: "gold" },
                  { stat: "83%", label: "do not feel adequately supported by their force", color: "ember" },
                ].map((item, i) => (
                  <div key={i} className="group p-6 rounded-xl bg-navy/40 border border-white/5 card-lift">
                    <div className="flex items-start gap-5">
                      <span className={`text-3xl font-display font-bold text-${item.color} flex-shrink-0 min-w-[80px]`}>
                        {item.stat}
                      </span>
                      <p className="text-sm text-slate-light leading-relaxed pt-2">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Areas of Failure */}
      <section className="relative py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text-white">
                Where the System Fails
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mental Health Support",
                description: "Under-resourced occupational health departments, long waiting times, and a one-size-fits-all approach that fails to address the unique nature of police trauma.",
                icon: "🧠",
              },
              {
                title: "Cultural Barriers",
                description: "A deeply ingrained culture of stoicism that stigmatises vulnerability, discourages help-seeking, and punishes those who admit they are struggling.",
                icon: "🔒",
              },
              {
                title: "Family Impact",
                description: "Families bear the secondary trauma, the unpredictable shifts, the emotional withdrawal — yet they receive almost no support or recognition.",
                icon: "👨‍👩‍👧",
              },
              {
                title: "Career Consequences",
                description: "Officers who seek help fear being taken off frontline duties, passed over for promotion, or seen as weak by colleagues and supervisors.",
                icon: "📉",
              },
              {
                title: "Post-Service Abandonment",
                description: "When officers leave the service — through retirement, medical discharge, or breakdown — support typically vanishes overnight.",
                icon: "🚪",
              },
              {
                title: "Accountability Gap",
                description: "Forces acknowledge the problem but consistently fail to implement meaningful, sustained change. Reports are commissioned. Actions are delayed.",
                icon: "⚖️",
              },
            ].map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-navy/40 border border-white/5 card-lift overflow-hidden">
                  <div className="text-3xl mb-5">{area.icon}</div>
                  <h3 className="text-lg font-display font-semibold text-pure-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {area.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ember/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Needs to Change */}
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-6">
                What Needs to Change
              </h2>
              <p className="text-lg text-slate-light">
                Our campaign demands concrete, measurable improvements:
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              "Mandatory mental health check-ins for all officers, not just after critical incidents",
              "Access to specialist trauma therapy within 2 weeks, not 2 months",
              "Comprehensive family support programmes built into every force's welfare provision",
              "Protected career pathways for officers who seek mental health support",
              "Lifetime aftercare commitments for officers who leave the service",
              "Independent oversight of welfare provisions with public accountability",
            ].map((demand, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-navy/30 border border-white/5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-azure/10 flex items-center justify-center text-azure text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-base text-silver leading-relaxed">{demand}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-16">
              <Link href="/take-action" className="btn-primary text-base px-10 py-4 rounded-xl">
                <span>Support These Demands</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
