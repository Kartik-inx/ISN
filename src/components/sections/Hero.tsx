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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/bannerBg.png"
          alt="It Stops Now Banner"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Deep gradient base & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/10 via-midnight/40 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-midnight/10 to-transparent" />

        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-azure/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-royal/8 blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[300px] rounded-full bg-sky/5 blur-[80px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent 0%, transparent 100px, black 200px)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 100px, black 200px)",
          }}
        />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        {/* Eyebrow badge */}
        <div
          className={`inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-silver">
            Standing up for the police family
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-display font-extrabold leading-none tracking-tight mb-5 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-pure-white drop-shadow-xl">
            It Stops
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] gradient-text mt-1 drop-shadow-xl">
            Now.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-slate-light max-w-2xl mx-auto leading-relaxed mb-8 font-medium transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Championing the voices of serving and retired officers, honouring the fallen, and demanding the change that is long overdue.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/take-action" className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-azure border border-transparent rounded-lg hover:bg-sky focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azure shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Take Action Now
            <svg className="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-black/20 border-2 border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 backdrop-blur-md">
            Learn Our Story
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className={`grid grid-cols-3 divide-x divide-white/10 border border-white/10 py-5 max-w-2xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl mb-16 shadow-2xl transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-pure-white mb-1 tracking-tight">50K+</span>
            <span className="text-[10px] sm:text-xs text-slate-light uppercase tracking-widest font-semibold">Supporters</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-pure-white mb-1 tracking-tight">100+</span>
            <span className="text-[10px] sm:text-xs text-slate-light uppercase tracking-widest font-semibold">Partner orgs</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-pure-white mb-1 tracking-tight">24/7</span>
            <span className="text-[10px] sm:text-xs text-slate-light uppercase tracking-widest font-semibold">Support</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/5">
            <div className="w-1 h-2.5 bg-azure rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-azure/10 rounded-full animate-breathe" />
      <div className="absolute top-40 right-16 w-20 h-20 border border-sky/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-azure/40 animate-breathe" style={{ animationDelay: "1s" }} />
      <div className="absolute top-60 left-20 w-3 h-3 rounded-full bg-gold/30 animate-breathe" style={{ animationDelay: "3s" }} />
    </section>
  );
}
