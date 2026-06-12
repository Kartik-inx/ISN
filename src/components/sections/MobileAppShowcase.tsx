"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";

export default function MobileAppShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-obsidian overflow-hidden border-t border-white/5">
      {/* Subtle Background Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-azure/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <ScrollReveal variant="left" delay={0.1}>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] uppercase text-azure mb-6">
                <span className="w-8 h-px bg-azure" />
                Pocket Sergeant App
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-black text-pure-white leading-[1.1] mb-6 tracking-tight">
                The Essential Tool for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-sky">
                  Police Family
                </span>
              </h2>

              <p className="text-xl font-medium text-white/90 mb-5 leading-relaxed border-l-4 border-azure pl-4">
                Empowering officers with instant access to critical resources.
              </p>

              <p className="text-base lg:text-lg text-slate-light leading-relaxed mb-10">
                Designed to make the demanding job of a police officer just a
                little bit easier. Pocket Sergeant puts crucial information,
                legislation, and support tools right in your pocket. Trusted by
                tens of thousands of officers nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Google Play Button */}
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start gap-4 px-8 py-4 bg-[#0a0f1e]/80 hover:bg-[#111827] border border-white/10 hover:border-azure/40 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-azure/20 group backdrop-blur-md"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-pure-white group-hover:text-azure transition-colors"
                  >
                    <path
                      d="M4 3.5V20.5L18.5 12L4 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                      Get it on
                    </div>
                    <div className="text-xl font-bold text-pure-white leading-none mt-1">
                      Google Play
                    </div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start gap-4 px-8 py-4 bg-[#0a0f1e]/80 hover:bg-[#111827] border border-white/10 hover:border-azure/40 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-azure/20 group backdrop-blur-md"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-pure-white group-hover:text-azure transition-colors"
                  >
                    <path
                      d="M16 4C15.6882 4.41402 15.2536 4.72993 14.7562 4.90382C14.2588 5.07771 13.7226 5.10115 13.22 4.97001C13.2926 4.44473 13.5188 3.9515 13.87 3.55401C14.2212 3.15652 14.6811 2.87355 15.19 2.74001C15.2284 3.20379 15.0883 3.66315 14.7937 4.04169C14.4991 4.42023 14.0674 4.69485 13.57 4.82001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.06 17.65C13.2 17.65 13.9 17 14.86 17C15.82 17 16.66 17.65 17.62 17.65C18.42 17.65 19.46 17.26 20.25 16.14C21.1 14.9 21.43 13.61 21.46 13.53C21.43 13.51 19.38 12.75 19.38 10.37C19.38 8.1 21.2 7.15 21.27 7.11C20.14 5.48 18.38 5.25 17.76 5.21C16.53 5.07 15.35 5.92 14.73 5.92C14.11 5.92 13.13 5.23 12.06 5.23C10.74 5.23 9.53 5.91 8.87 7.05C7.5 9.42 8.52 13 9.85 14.93C10.5 15.88 11.26 16.94 12.28 16.94L12.06 17.65Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                      Download on the
                    </div>
                    <div className="text-xl font-bold text-pure-white leading-none mt-1">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stacked App Mockups */}
          <ScrollReveal variant="right" delay={0.2}>
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] lg:aspect-square flex items-center justify-center group/mockups mt-10 lg:mt-0">
              {/* Left Image (Back) */}
              <div className="absolute left-[5%] md:left-[10%] top-[10%] md:top-[15%] w-[45%] aspect-[9/19] rounded-[2rem] overflow-hidden border-[6px] border-slate-900 shadow-2xl shadow-black/50 -rotate-12 origin-bottom-left transition-all duration-700 ease-out z-10 group-hover/mockups:-rotate-12 group-hover/mockups:-translate-x-4 hover:!rotate-0 hover:!z-50 hover:!-translate-y-8 hover:!scale-110 bg-navy/80 backdrop-blur-sm cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 rounded-b-xl w-1/3 mx-auto"></div>
                <Image
                  src="/images/unnamed_3.webp"
                  alt="Pocket Sergeant Reference Screen"
                  fill
                  className="object-cover opacity-80 group-hover/mockups:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Right Image (Back) */}
              <div className="absolute right-[5%] md:right-[10%] top-[10%] md:top-[15%] w-[45%] aspect-[9/19] rounded-[2rem] overflow-hidden border-[6px] border-slate-900 shadow-2xl shadow-black/50 rotate-12 origin-bottom-right transition-all duration-700 ease-out z-20 group-hover/mockups:rotate-12 group-hover/mockups:translate-x-4 hover:!rotate-0 hover:!z-50 hover:!-translate-y-8 hover:!scale-110 bg-navy/80 backdrop-blur-sm cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 rounded-b-xl w-1/3 mx-auto"></div>
                <Image
                  src="/images/unnamed_3.webp"
                  alt="Pocket Sergeant Tools Screen"
                  fill
                  className="object-cover opacity-80 group-hover/mockups:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Center Image (Front) */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[52%] aspect-[9/19] rounded-[2.25rem] overflow-hidden border-[8px] border-slate-800 shadow-2xl shadow-azure/40 transition-all duration-700 ease-out z-30 group-hover/mockups:-translate-y-4 hover:!z-50 hover:!scale-105 bg-navy cursor-pointer">
                <div className="absolute top-0 inset-x-0 h-7 bg-slate-800 z-20 rounded-b-2xl w-1/3 mx-auto"></div>
                <Image
                  src="/images/unnamed.webp"
                  alt="Pocket Sergeant Main Screen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
