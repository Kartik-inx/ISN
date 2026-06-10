import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import HonourCard from "@/components/ui/HonourCard";

export const metadata: Metadata = {
  title: "Voices & Roll of Honour",
  description: "Honouring the police family — voices from serving officers, retirees, and families, alongside our Roll of Honour.",
};

const voices = [
  {
    quote: "Nobody tells you that the nightmares don't stop when you hand in your warrant card. Fifteen years on, I still wake up hearing those calls.",
    name: "Retired Sgt. M",
    role: "30 years of service",
  },
  {
    quote: "I'm proud of what I did. I helped people. But the cost... the cost was something nobody prepared me for and nobody helped me carry.",
    name: "Former Insp. K",
    role: "25 years of service",
  },
  {
    quote: "Watching my dad come home broken, night after night, and being powerless to help — that shapes you. His service cost our whole family.",
    name: "Officer's Child",
    role: "Family voice",
  },
];

const rollOfHonour = [
  { initials: "DS", name: "PC David Smith", rank: "Constable", force: "Metropolitan Police", years: "1998 – 2019", image: "/images/uk_police_ds_1781074862198.png", simulatedGlobalCount: 8250 },
  { initials: "JW", name: "Sgt. Jane Williams", rank: "Sergeant", force: "West Yorkshire Police", years: "2001 – 2022", image: "/images/uk_police_jw_1781074874420.png", simulatedGlobalCount: 3120 },
  { initials: "RM", name: "Insp. Robert Mitchell", rank: "Inspector", force: "Thames Valley Police", years: "1995 – 2018", image: "/images/uk_police_rm_1781074886666.png", simulatedGlobalCount: 940 },
  { initials: "SK", name: "PC Sarah Khan", rank: "Constable", force: "Greater Manchester Police", years: "2005 – 2023", image: "/images/uk_police_sk_1781074899035.png", simulatedGlobalCount: 145 },
  { initials: "TH", name: "DC Thomas Harris", rank: "Detective Constable", force: "Merseyside Police", years: "2000 – 2021", image: "/images/uk_police_th_1781074911702.png", simulatedGlobalCount: 45 },
  { initials: "AL", name: "PC Amy Lewis", rank: "Constable", force: "Sussex Police", years: "2008 – 2020", image: "/images/uk_police_sk_1781074899035.png", simulatedGlobalCount: 6510 },
  { initials: "PB", name: "Sgt. Paul Brooks", rank: "Sergeant", force: "Kent Police", years: "1997 – 2017", image: "/images/uk_police_ds_1781074862198.png", simulatedGlobalCount: 2010 },
  { initials: "EC", name: "DC Emma Carter", rank: "Detective Constable", force: "Avon & Somerset Police", years: "2003 – 2024", image: "/images/uk_police_jw_1781074874420.png", simulatedGlobalCount: 520 },
  { initials: "JM", name: "PC James Morgan", rank: "Constable", force: "Northumbria Police", years: "2010 – 2023", image: "/images/uk_police_rm_1781074886666.png", simulatedGlobalCount: 88 },
];

export default function VoicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_voices.png"
            alt="Voices & Honour - Ascending embers"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-midnight/80 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/3 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              <span className="w-8 h-px bg-gold" />
              Honour & Remember
              <span className="w-8 h-px bg-gold" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Voices from the{" "}
              <span className="gradient-text-gold">Police Family</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Every voice here represents a life shaped by service. We listen,
              we honour, and we remember.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Voices Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold text-pure-white mb-2">
                In Their Words
              </h2>
              <p className="text-base text-slate-light">Testimonies from the police family</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((voice, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative h-full p-8 rounded-2xl glass gradient-border card-lift">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-gold/20 mb-6">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <blockquote className="text-lg text-silver leading-relaxed mb-8 font-display">
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">{voice.name}</p>
                    <p className="text-xs text-slate-light">{voice.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roll of Honour */}
      <section className="relative py-28 bg-obsidian">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,158,11,0.3) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pure-white mb-4">
                Roll of Honour
              </h2>
              <p className="text-base text-slate-light max-w-xl mx-auto">
                In memory of those we have lost. Their service, their sacrifice,
                and their courage will not be forgotten.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rollOfHonour.map((officer, i) => (
              <ScrollReveal key={officer.name} delay={i * 0.06}>
                <HonourCard officer={officer} simulatedGlobalCount={officer.simulatedGlobalCount} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/remembrance"
                className="inline-flex items-center gap-3 text-gold hover:text-amber font-semibold transition-colors group"
              >
                <span className="w-2 h-4 bg-gradient-to-t from-gold to-amber rounded-full animate-candle" />
                Visit the Wall of Remembrance
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
