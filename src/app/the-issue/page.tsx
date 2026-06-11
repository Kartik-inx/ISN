import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Issue | It Stops Now",
  description: "A system in crisis. Lives are being lost.",
};

export default function TheIssuePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_theissue.png"
            alt="Police officer looking down"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-midnight/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              The Issue
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-pure-white leading-tight mb-4 max-w-3xl">
              A SYSTEM IN CRISIS.
              <br />
              <span className="text-azure">LIVES ARE BEING LOST.</span>
            </h1>
            <div className="space-y-4 text-lg text-slate-light max-w-xl leading-relaxed mt-8">
              <p>Policing is built on courage, commitment and service.</p>
              <p>But behind the uniform is a human being.</p>
              <p>Too many are suffering in silence.</p>
              <p>Too many are being failed by the very system meant to protect them.</p>
              <p className="text-pure-white font-semibold pt-2">It Stops Now.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Facts Section */}
      <section className="py-24 bg-obsidian border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase">THE FACTS</h2>
            <p className="text-slate-light mb-12">The numbers don&apos;t lie. Our policing family is in crisis.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure">
                    <path d="M12 2L2 22l10-4 10 4L12 2z" />
                  </svg>
                ),
                stat: "185+",
                desc: "Officers and staff lost to suicide in 2023.",
                sub: "~1 every 2 days."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    <line x1="4" y1="4" x2="20" y2="20" />
                  </svg>
                ),
                stat: "4,281",
                desc: "Police officers took their own lives between 2017 and 2023.",
                sub: "That's 8 times the line of duty deaths."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                ),
                stat: "1 in 3",
                desc: "Officers won't seek help for mental health issues due to stigma or fear.",
                sub: ""
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure">
                    <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
                  </svg>
                ),
                stat: "Thousands",
                desc: "Of misconduct cases are reported every year.",
                sub: "Too many officers face injustice and shame."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                stat: "Untold",
                desc: "Families, friends and colleagues left behind, suffering in silence with no support.",
                sub: ""
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center px-2">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-azure mb-3">{item.stat}</h3>
                  <p className="text-[13px] text-slate-light leading-snug mb-2 font-medium">{item.desc}</p>
                  {item.sub && <p className="text-[11px] text-azure font-semibold">{item.sub}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-16 text-center text-[10px] text-slate-500 uppercase tracking-wider">
            Sources: NPCC, Police Suicide Data 2017-2023 | Mind Blue Light Survey | Police Federation | IOPC Data
          </div>
        </div>
      </section>

      {/* What's Going Wrong */}
      <section className="py-24 bg-midnight border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase">WHAT&apos;S GOING WRONG?</h2>
            <p className="text-slate-light mb-12">The problems run deep—and they are costing lives.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                title: "MENTAL HEALTH",
                desc: "Inadequate mental health support, long waits, poor aftercare and a culture that discourages speaking up.",
                bg: "bg-navy"
              },
              {
                title: "CULTURE",
                desc: "A toxic culture in some areas that rewards silence, overlooks bullying and punishes honesty.",
                bg: "bg-obsidian"
              },
              {
                title: "MISCONDUCT",
                desc: "A broken system where innocent officers are sometimes left to fight for years, while the guilty avoid accountability.",
                bg: "bg-obsidian/50"
              },
              {
                title: "WELFARE FAILURE",
                desc: "Welfare services are underfunded, overstretched and inconsistently delivered.",
                bg: "bg-navy"
              },
              {
                title: "LACK OF TRANSPARENCY",
                desc: "A lack of open data and transparency prevents real change and allows the same failures to continue.",
                bg: "bg-obsidian"
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`${item.bg} p-6 h-full rounded-lg text-center flex flex-col items-center justify-center min-h-[220px] border border-white/5`}>
                  <div className="w-10 h-10 rounded-full border border-azure/30 flex items-center justify-center text-azure mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-pure-white uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-[11px] text-slate-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact & Change is Possible */}
      <section className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Impact */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase">THE IMPACT</h2>
                <p className="text-slate-light mb-8">This isn&apos;t just a policing issue. It&apos;s a human issue.</p>
                
                <ul className="space-y-4 text-sm text-slate-light font-medium">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 text-azure">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    Officers are leaving the job due to stress, trauma and disillusionment.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 text-azure">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    </div>
                    Families are losing loved ones with no warning and no support.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 text-azure">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    Communities are losing experienced, dedicated officers.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 text-azure">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8"/></svg>
                    </div>
                    Trust in the police is damaged when misconduct goes unchecked.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 text-azure">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                    </div>
                    The policing crisis is becoming a national crisis.
                  </li>
                </ul>

                <p className="mt-8 text-azure font-bold text-lg max-w-sm">
                  We cannot protect the public if we don&apos;t protect those who protect the public.
                </p>
              </div>
            </ScrollReveal>

            {/* Change is Possible */}
            <ScrollReveal delay={0.2}>
              <div className="bg-navy/50 border border-white/5 p-10 rounded-2xl h-full flex flex-col justify-between shadow-xl">
                <div>
                  <h2 className="text-2xl font-display font-bold text-pure-white mb-4 uppercase">CHANGE IS POSSIBLE.</h2>
                  <p className="text-slate-light text-sm mb-8 leading-relaxed">
                    But it starts with facing the truth.<br/>
                    We need real action, real accountability and real support systems that truly work.
                  </p>

                  <ul className="space-y-4 text-sm text-pure-white mb-10">
                    {[
                      "Better mental health and trauma support",
                      "Fair, transparent misconduct processes",
                      "A culture of openness, respect and accountability",
                      "Stronger welfare for officers and their families",
                      "Leadership that puts people before politics"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-azure/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <Link href="/take-action" className="btn-primary py-3 px-6 text-sm">
                    TAKE ACTION NOW →
                  </Link>
                  <span className="text-sm text-slate-light">Be part of the change.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
