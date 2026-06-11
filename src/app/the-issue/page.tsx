import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import DataTransparencyNote from "@/components/ui/DataTransparencyNote";
import PocketSergeantBanner from "@/components/sections/PocketSergeantBanner";

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
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-midnight/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-azure mb-6 select-none">
              THE ISSUE ————
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-pure-white leading-[1.1] tracking-tight mb-8">
              A SYSTEM IN CRISIS.<br />
              <span className="text-ember">LIVES ARE BEING LOST.</span>
            </h1>
            
            <div className="text-base sm:text-lg text-slate-light max-w-xl leading-loose font-medium select-text space-y-4">
              <p>Policing is built on courage, commitment and service.</p>
              <p>But behind the uniform is a human being.</p>
              <p>Too many are suffering in silence.</p>
              <p>Too many are being failed by the very system meant to protect them.</p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/take-action"
                className="text-ember hover:text-amber-500 font-display font-bold text-xl tracking-wider hover:underline transition-colors duration-300 inline-block"
              >
                It Stops Now.
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Facts Section */}
      <section className="py-24 bg-obsidian border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase tracking-wide">THE FACTS</h2>
            <p className="text-slate-light mb-16">The numbers don&apos;t lie. Our policing family is in crisis.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Stat 1 */}
            <ScrollReveal delay={0.05}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy/20 border border-white/5 h-full hover:border-azure/30 transition-all duration-300">
                <div className="mb-5 bg-azure/10 p-3 rounded-xl text-azure">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-azure mb-3">185+</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-2 font-medium">Officers and staff lost to suicide in 2023.</p>
                <p className="text-xs text-azure font-semibold mt-auto">~1 every 2 days.</p>
              </div>
            </ScrollReveal>

            {/* Stat 2 */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy/20 border border-white/5 h-full hover:border-azure/30 transition-all duration-300">
                <div className="mb-5 bg-azure/10 p-3 rounded-xl text-azure">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-azure mb-3">4,281</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-2 font-medium">Police officers took their own lives between 2017 and 2023.</p>
                <p className="text-xs text-azure font-semibold mt-auto">That's 8 times the line of duty deaths.</p>
              </div>
            </ScrollReveal>

            {/* Stat 3 */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy/20 border border-white/5 h-full hover:border-azure/30 transition-all duration-300">
                <div className="mb-5 bg-azure/10 p-3 rounded-xl text-azure">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8" cy="7" r="4" />
                    <rect x="15" y="11" width="6" height="5" rx="1" />
                    <path d="M16 11V9a2 2 0 1 1 4 0v2" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-azure mb-3">1 in 3</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-2 font-medium">Officers won't seek help for mental health issues due to stigma or fear.</p>
              </div>
            </ScrollReveal>

            {/* Stat 4 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy/20 border border-white/5 h-full hover:border-azure/30 transition-all duration-300">
                <div className="mb-5 bg-azure/10 p-3 rounded-xl text-azure">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-azure mb-3">Thousands</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-2 font-medium">Of misconduct cases are reported every year.</p>
                <p className="text-xs text-azure font-semibold mt-auto">Too many officers face injustice and shame.</p>
              </div>
            </ScrollReveal>

            {/* Stat 5 */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy/20 border border-white/5 h-full hover:border-azure/30 transition-all duration-300">
                <div className="mb-5 bg-azure/10 p-3 rounded-xl text-azure">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-azure mb-3">Untold</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-2 font-medium">Families, friends and colleagues left behind, suffering in silence with no support.</p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-16 text-center text-xs text-slate-500 uppercase tracking-widest leading-relaxed">
            Sources: NPCC, Police Suicide Data 2017–2023 | Mind Blue Light Survey | Police Federation | IOPC Data
          </div>

          {/* Collapsible Info Panel */}
          <DataTransparencyNote />
        </div>
      </section>

      {/* What's Going Wrong */}
      <section className="py-24 bg-midnight border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase tracking-wide">WHAT&apos;S GOING WRONG?</h2>
            <p className="text-slate-light mb-12">The problems run deep—and they are costing lives.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <ScrollReveal delay={0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/60 p-6 flex flex-col justify-end min-h-[300px] shadow-lg hover:border-azure/30 transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/uk_police_jw_1781074874420.png"
                    alt="Mental Health background"
                    fill
                    className="object-cover object-center opacity-10 group-hover:opacity-25 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-5 transition-all duration-300 group-hover:bg-azure/20 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3.02 3.02 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3.02 3.02 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-display font-bold text-pure-white uppercase tracking-wider mb-2">MENTAL HEALTH</h3>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Inadequate mental health support, long waits, poor aftercare and a culture that discourages speaking up.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/60 p-6 flex flex-col justify-end min-h-[300px] shadow-lg hover:border-azure/30 transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/uk_police_rm_1781074886666.png"
                    alt="Culture background"
                    fill
                    className="object-cover object-center opacity-10 group-hover:opacity-25 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-5 transition-all duration-300 group-hover:bg-azure/20 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-display font-bold text-pure-white uppercase tracking-wider mb-2">CULTURE</h3>
                  <p className="text-xs text-slate-light leading-relaxed">
                    A toxic culture in some areas that rewards silence, overlooks bullying and punishes honesty.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/60 p-6 flex flex-col justify-end min-h-[300px] shadow-lg hover:border-azure/30 transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/uk_police_sk_1781074899035.png"
                    alt="Misconduct background"
                    fill
                    className="object-cover object-center opacity-10 group-hover:opacity-25 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-5 transition-all duration-300 group-hover:bg-azure/20 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <h3 className="text-base font-display font-bold text-pure-white uppercase tracking-wider mb-2">MISCONDUCT</h3>
                  <p className="text-xs text-slate-light leading-relaxed">
                    A broken system where innocent officers are sometimes left to fight for years, while the guilty avoid accountability.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/60 p-6 flex flex-col justify-end min-h-[300px] shadow-lg hover:border-azure/30 transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/uk_police_th_1781074911702.png"
                    alt="Welfare Failure background"
                    fill
                    className="object-cover object-center opacity-10 group-hover:opacity-25 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-5 transition-all duration-300 group-hover:bg-azure/20 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                  </div>
                  <h3 className="text-base font-display font-bold text-pure-white uppercase tracking-wider mb-2">WELFARE FAILURE</h3>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Welfare services are underfunded, overstretched and inconsistently delivered.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5 */}
            <ScrollReveal delay={0.25}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/60 p-6 flex flex-col justify-end min-h-[300px] shadow-lg hover:border-azure/30 transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/uk_police_ds_1781074862198.png"
                    alt="Lack of Transparency background"
                    fill
                    className="object-cover object-center opacity-10 group-hover:opacity-25 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-5 transition-all duration-300 group-hover:bg-azure/20 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-base font-display font-bold text-pure-white uppercase tracking-wider mb-2">LACK OF TRANSPARENCY</h3>
                  <p className="text-xs text-slate-light leading-relaxed">
                    A lack of open data and transparency prevents real change and allows the same failures to continue.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The System Under Scrutiny Pull-Quote Panel */}
      <section className="relative py-24 bg-navy overflow-hidden">
        {/* Subtle Watermark on the right side */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[10rem] sm:text-[14rem] font-display font-black text-pure-white leading-none tracking-widest">
          POLICE
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: 4 problem rows */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="left">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase text-azure mb-4 select-none">
                  SYSTEM UNDER SCRUTINY
                </span>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Row 1 */}
                <ScrollReveal delay={0.05}>
                  <div className="flex gap-4 p-4 rounded-xl bg-midnight/30 border border-white/5">
                    <div className="text-azure shrink-0 mt-0.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1">LONG INVESTIGATIONS</h4>
                      <p className="text-xs text-slate-light leading-relaxed">
                        Cases can drag on for years with devastating impact on officer wellbeing and careers.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Row 2 */}
                <ScrollReveal delay={0.1}>
                  <div className="flex gap-4 p-4 rounded-xl bg-midnight/30 border border-white/5">
                    <div className="text-azure shrink-0 mt-0.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1">LACK OF TRANSPARENCY</h4>
                      <p className="text-xs text-slate-light leading-relaxed">
                        A broken system with no accountability and no one taking responsibility.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Row 3 */}
                <ScrollReveal delay={0.15}>
                  <div className="flex gap-4 p-4 rounded-xl bg-midnight/30 border border-white/5">
                    <div className="text-azure shrink-0 mt-0.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1">UNFAIR OUTCOMES</h4>
                      <p className="text-xs text-slate-light leading-relaxed">
                        Too many officers face misconduct allegations without proper due process.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Row 4 */}
                <ScrollReveal delay={0.2}>
                  <div className="flex gap-4 p-4 rounded-xl bg-midnight/30 border border-white/5">
                    <div className="text-azure shrink-0 mt-0.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        <path d="M12 5.67L9 11h6l-3 4.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-pure-white mb-1">BROKEN SUPPORT</h4>
                      <p className="text-xs text-slate-light leading-relaxed">
                        Inadequate welfare support when officers need it most.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="pt-4">
                  <Link href="/research" className="btn-primary py-3.5 px-8 text-xs inline-block text-center font-bold uppercase tracking-widest rounded-xl">
                    LEARN MORE →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side: Large pull quote */}
            <div className="lg:col-span-5 text-center lg:text-right">
              <ScrollReveal variant="right">
                <blockquote className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-pure-white leading-tight uppercase tracking-wider">
                  "A SYSTEM THAT FAILS ITS OWN, FAILS EVERYONE."
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact & Change is Possible */}
      <section className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left Column: The Impact */}
            <ScrollReveal variant="left">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-display font-bold text-pure-white mb-2 uppercase tracking-wide">THE IMPACT</h2>
                  <p className="text-azure font-semibold tracking-wider text-sm mb-8 uppercase">THIS ISN&apos;T JUST A POLICING ISSUE. IT&apos;S A HUMAN ISSUE.</p>
                  
                  <ul className="space-y-6 text-sm text-slate-light font-medium">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-azure/10 p-2 rounded-lg text-azure shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">Officers are leaving the job due to stress, trauma and disillusionment.</span>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-azure/10 p-2 rounded-lg text-azure shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">Families are losing loved ones with no warning and no support.</span>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-azure/10 p-2 rounded-lg text-azure shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">Communities are losing experienced, dedicated officers.</span>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-azure/10 p-2 rounded-lg text-azure shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 3v18M1 12h22M4.2 6.8L12 3l7.8 3.8M4.2 17.2L12 21l7.8-3.8" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">Trust in the police is damaged when misconduct goes unchecked.</span>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-azure/10 p-2 rounded-lg text-azure shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">The policing crisis is becoming a national crisis.</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-12 text-azure font-display font-black text-xl leading-relaxed select-none">
                  We cannot protect the public if we don&apos;t protect those who protect the public.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Change is Possible */}
            <ScrollReveal variant="right">
              <div className="bg-navy/40 border border-white/5 p-10 rounded-3xl h-full flex flex-col justify-between shadow-xl">
                <div>
                  <h2 className="text-2xl font-display font-bold text-pure-white mb-3 uppercase tracking-wide">CHANGE IS POSSIBLE.</h2>
                  <p className="text-slate-light text-sm mb-8 leading-relaxed font-medium">
                    But it starts with facing the truth. We need real action, real accountability and real support systems that truly work.
                  </p>

                  <ul className="space-y-4 text-sm text-pure-white mb-12">
                    {[
                      "Better mental health and trauma support",
                      "Fair, transparent misconduct processes",
                      "A culture of openness, respect and accountability",
                      "Stronger welfare for officers and their families",
                      "Leadership that puts people before politics"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-azure/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="3">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/5 pt-8">
                  <Link href="/take-action" className="w-full sm:w-auto btn-primary py-3 px-8 text-sm text-center">
                    TAKE ACTION NOW →
                  </Link>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-light">Be part of the change.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Objective Callouts Section */}
      <section className="py-20 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left callout */}
            <ScrollReveal variant="left">
              <Link 
                href="/#our-mission"
                className="group block p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-6 group-hover:bg-azure/20 group-hover:scale-110 transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18M10 12h4m-4 4h4" />
                    <line x1="2" y1="22" x2="22" y2="22" />
                  </svg>
                </div>
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-azure mb-2">OBJECTIVE 07</span>
                <h3 className="text-xl font-display font-bold text-pure-white mb-3 uppercase tracking-wide group-hover:text-azure transition-colors">
                  INFLUENCE POLICY & LEGISLATION
                </h3>
                <p className="text-sm text-slate-light leading-relaxed">
                  Work with policymakers and decision makers to create laws and policies that protect those who protect us.
                </p>
              </Link>
            </ScrollReveal>

            {/* Right callout */}
            <ScrollReveal variant="right">
              <Link 
                href="/#our-mission"
                className="group block p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center text-azure mb-6 group-hover:bg-azure/20 group-hover:scale-110 transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-2v-8l-7-2v12zM12 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h7M19 11l3 1-3 1" />
                  </svg>
                </div>
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-azure mb-2">OBJECTIVE 08</span>
                <h3 className="text-xl font-display font-bold text-pure-white mb-3 uppercase tracking-wide group-hover:text-azure transition-colors">
                  RAISE AWARENESS & DRIVE CHANGE
                </h3>
                <p className="text-sm text-slate-light leading-relaxed">
                  Use data, stories and campaigns to raise awareness and keep this issue at the heart of public conversation.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supporter Banner */}
      <PocketSergeantBanner />
    </>
  );
}
