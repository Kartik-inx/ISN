"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-midnight pt-24 px-6 md:px-12 select-none">
      
      {/* ─── LAYER 1: CINEMATIC BACKGROUND IMAGE ─── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/homebaner.png"
          alt="London skyline memorial background"
          fill
          priority
          className="object-cover object-center scale-100 opacity-80 transition-opacity duration-1000"
        />
        
        {/* Soft vignettes & radial gradients to pop typography without blocking details */}
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,10,20,0.65)_0%,rgba(6,10,20,0.1)_60%,rgba(6,10,20,0.85)_100%)]" />
        
        {/* Volumetric blue emergency light bleed from the left */}
        <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-azure/10 to-transparent blur-3xl opacity-40 pointer-events-none" />

        {/* Ambient candle flame warmth glow rising from bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.15)_0%,rgba(245,158,11,0.02)_55%,transparent_100%)] blur-2xl animate-[candle-glow_6s_ease-in-out_infinite]" />
      </div>

      {/* ─── LAYER 3: FLOATING CONTENT AREA (NO BORDERS/NO GIANT CARD) ─── */}
      <div className="relative z-20 w-full mx-auto px-0 md:px-6 flex justify-center md:justify-end select-text">
        <div 
          className={`w-full max-w-[650px] relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12 text-center md:text-left flex flex-col items-center md:items-start transition-all duration-1000 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Subtle backdrop blur only behind the text area */}
          <div className="absolute inset-0 z-0 backdrop-blur-[3px] rounded-3xl bg-midnight/20 pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center md:items-start">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 mb-6 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-pure-white/50">
                The Police Family Support Movement
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse" />
            </div>

            {/* Structured Editorial Headline */}
            <h1 className="font-display font-black uppercase text-3xl sm:text-5xl md:text-5xl lg:text-6xl tracking-wider text-pure-white leading-[1.08] mb-8 max-w-2xl select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              BEHIND EVERY<br />
              UNIFORM IS A<br />
              HUMAN BEING
            </h1>

            {/* Readability Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-cloud/90 max-w-2xl leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              We champion the voices of serving and retired police officers, honor the fallen, and demand the deep cultural change that is long overdue. You are not alone.
            </p>

            {/* Structured CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full max-w-md select-none">
              <Link 
                href="/take-action" 
                className="w-full sm:w-auto inline-flex items-center justify-center p-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-pure-white bg-gradient-to-r from-azure/90 to-sky/95 border border-azure/30 hover:from-sky hover:to-azure shadow-[0_4px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.45)] transition-all duration-300 rounded-xl"
              >
                Take Action
              </Link>

              <Link 
                href="/remembrance" 
                className="w-full sm:w-auto inline-flex items-center justify-center p-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-pure-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber/40 hover:text-amber shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.2)] transition-all duration-300 backdrop-blur-md"
              >
                Wall of Remembrance
              </Link>
            </div>

            {/* Embedded Statistics Section (Unified & Responsive) */}
            <div className="w-full mt-12 pt-8 border-t border-white/10 select-none">
              {/* Desktop Statistics Row */}
              <div className="hidden md:flex items-center justify-between lg:justify-start gap-8 lg:gap-12">
                <div className="text-left">
                  <span className="block font-display text-2xl lg:text-3xl font-extrabold tracking-wide text-pure-white">
                    50,000+
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-cloud/90 font-bold mt-1">
                    Supporters standing together
                  </span>
                </div>
                <div className="w-px h-8 bg-white/20 shrink-0" />
                <div className="text-left">
                  <span className="block font-display text-2xl lg:text-3xl font-extrabold tracking-wide text-pure-white">
                    4,281
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-cloud/90 font-bold mt-1">
                    Remembrance candles lit
                  </span>
                </div>
                <div className="w-px h-8 bg-white/20 shrink-0" />
                <div className="text-left">
                  <span className="block font-display text-2xl lg:text-3xl font-extrabold tracking-wide text-pure-white">
                    185+
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-cloud/90 font-bold mt-1">
                    Secure officer stories shared
                  </span>
                </div>
              </div>

              {/* Mobile Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 w-full md:hidden">
                <div className="text-center">
                  <span className="block font-display text-lg font-bold text-pure-white">
                    50k+
                  </span>
                  <span className="block text-[8px] uppercase tracking-wider text-cloud/80 mt-1">
                    Supporters
                  </span>
                </div>
                <div className="text-center border-x border-white/10">
                  <span className="block font-display text-lg font-bold text-pure-white">
                    4.2k
                  </span>
                  <span className="block text-[8px] uppercase tracking-wider text-cloud/80 mt-1">
                    Candles Lit
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-display text-lg font-bold text-pure-white">
                    185+
                  </span>
                  <span className="block text-[8px] uppercase tracking-wider text-cloud/80 mt-1">
                    Stories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── LAYER 5: ANIMATED SCROLL DOWN INDICATOR ─── */}
      <div 
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ease-out ${
          loaded ? "opacity-45" : "opacity-0"
        }`}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-light">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-azure animate-[scroll-dot_1.8s_infinite]" />
        </div>
      </div>

      {/* ─── STYLES & CUSTOM KEYFRAMES ─── */}
      <style jsx>{`
        .bg-radial-vignette {
          background: radial-gradient(
            circle at 70% 50%,
            rgba(6, 10, 20, 0.15) 0%,
            rgba(6, 10, 20, 0.5) 45%,
            rgba(6, 10, 20, 0.95) 100%
          );
        }

        @keyframes slow-pan {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        @keyframes candle-glow {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1.02);
          }
        }

        @keyframes scroll-dot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(6px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
