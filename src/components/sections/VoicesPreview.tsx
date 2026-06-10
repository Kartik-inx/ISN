"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const officers = [
  { initials: "DS", name: "PC David Smith", rank: "Constable", years: "1998 – 2019", image: "/images/uk_police_ds_1781074862198.png" },
  { initials: "JW", name: "Sgt. Jane Williams", rank: "Sergeant", years: "2001 – 2022", image: "/images/uk_police_jw_1781074874420.png" },
  { initials: "RM", name: "Insp. Robert Mitchell", rank: "Inspector", years: "1995 – 2018", image: "/images/uk_police_rm_1781074886666.png" },
  { initials: "SK", name: "PC Sarah Khan", rank: "Constable", years: "2005 – 2023", image: "/images/uk_police_sk_1781074899035.png" },
  { initials: "TH", name: "DC Thomas Harris", rank: "Detective", years: "2000 – 2021", image: "/images/uk_police_th_1781074911702.png" },
  { initials: "AL", name: "PC Amy Lewis", rank: "Constable", years: "2008 – 2020", image: "/images/uk_police_sk_1781074899035.png" },
];

export default function VoicesPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left: Tribute grid */}
          <ScrollReveal variant="left" className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {officers.map((officer, i) => (
                <div
                  key={officer.name}
                  className="group relative aspect-[3/4] rounded-2xl bg-navy/60 border border-white/5 overflow-hidden card-lift"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Portrait Image */}
                  <div className="absolute inset-0 bg-navy-light">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/20 to-midnight/90 opacity-90" />
                  </div>

                  {/* Candle icon */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1.5 h-3 bg-gradient-to-t from-gold to-amber rounded-full animate-candle" />
                  </div>

                  {/* Name overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-midnight/90 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs font-semibold text-pure-white truncate">{officer.name}</p>
                    <p className="text-xs text-slate-light">{officer.years}</p>
                  </div>

                  {/* Blue line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-azure/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal variant="right" className="lg:col-span-2">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Roll of Honour
              </span>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white leading-tight mb-6">
                Voices from the{" "}
                <span className="gradient-text-gold">Police Family</span>
              </h2>

              <p className="text-base text-slate-light leading-relaxed mb-6">
                We honour every officer who has served, those who continue to
                serve, and those we have lost. Their stories, their sacrifices,
                and their courage will not be forgotten.
              </p>

              <p className="text-base text-slate-light leading-relaxed mb-10">
                Visit the Wall of Remembrance to light a candle, share a memory,
                and ensure their legacy endures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/voices"
                  className="btn-outline text-sm px-6 py-3"
                >
                  View Roll of Honour
                </Link>
                <Link
                  href="/remembrance"
                  className="inline-flex items-center gap-2 text-gold hover:text-amber font-semibold text-sm transition-colors group"
                >
                  <span className="w-2 h-4 bg-gradient-to-t from-gold to-amber rounded-full animate-candle" />
                  Light a Candle
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
