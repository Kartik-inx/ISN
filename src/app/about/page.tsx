import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

import WhoIsPocketSergeant from "@/components/sections/WhoIsPocketSergeant";
import MobileAppShowcase from "@/components/sections/MobileAppShowcase";
import OrganizationalStats from "@/components/sections/OrganizationalStats";
import WhySupportingMovement from "@/components/sections/WhySupportingMovement";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about It Stops Now — our mission, our values, and the people behind the movement for police officer welfare.",
};



export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutbaner.png"
            alt="About It Stops Now Banner"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle overlay only to ensure white text remains readable */}
          <div className="absolute inset-0 bg-midnight/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              About Us
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-tight tracking-tight drop-shadow-xl mb-6 max-w-4xl">
              Born from Service. <br className="hidden sm:block" />
              <span className="gradient-text">Driven by Purpose.</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl leading-relaxed">
              It Stops Now was created by people who lived it — officers and families
              who experienced the failures of the system and decided that silence
              was no longer an option.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WhoIsPocketSergeant />
      <MobileAppShowcase />
      <OrganizationalStats />
      <WhySupportingMovement />

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


      {/* Three Bottom Learn More Links */}
      <section className="relative py-28 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
                <span className="w-8 h-px bg-azure" />
                Take Action
                <span className="w-8 h-px bg-azure" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-6">
                Learn More About Pocket Sergeant
              </h2>
              <p className="text-lg text-slate-light max-w-2xl mx-auto">
                Discover the leading digital tool supporting police officers across the UK and explore how our partnership is making a tangible difference.
              </p>
            </div>
          </ScrollReveal>
          
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


    </>
  );
}
