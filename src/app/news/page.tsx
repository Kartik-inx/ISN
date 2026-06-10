import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, updates, and press coverage from the It Stops Now campaign.",
};

const articles = [
  {
    date: "5 June 2026",
    category: "Campaign",
    title: "Parliamentary Committee to Hear Evidence on Officer Welfare",
    excerpt: "In a landmark development, the Home Affairs Select Committee has agreed to hear evidence from serving officers and campaign groups about the state of police welfare provision.",
    featured: true,
  },
  {
    date: "28 May 2026",
    category: "Press",
    title: "National Media Coverage Puts Spotlight on Officer Suicide Rates",
    excerpt: "Major broadcast and print outlets covered the latest data showing an alarming trend in officer suicide rates, citing It Stops Now research.",
  },
  {
    date: "15 May 2026",
    category: "Update",
    title: "Wall of Remembrance Reaches 5,000 Candles Lit",
    excerpt: "The digital memorial has seen an extraordinary response, with thousands of people lighting candles and sharing memories of lost officers.",
  },
  {
    date: "3 May 2026",
    category: "Campaign",
    title: "New Partnership with Mind Blue Light Programme",
    excerpt: "We are proud to announce a formal partnership to extend specialist mental health support to officers and their families.",
  },
  {
    date: "20 April 2026",
    category: "Press",
    title: "Chief Constable Responds to Open Letter",
    excerpt: "Following our open letter to police leadership, a serving Chief Constable has publicly acknowledged the need for systemic reform in welfare provision.",
  },
  {
    date: "8 April 2026",
    category: "Update",
    title: "Community March Draws Record Attendance",
    excerpt: "Over 3,000 people joined solidarity marches across 12 cities, making it the largest demonstration of support for police officer welfare in UK history.",
  },
];

const categoryColors: Record<string, string> = {
  Campaign: "bg-azure/10 text-azure",
  Press: "bg-gold/10 text-gold",
  Update: "bg-emerald/10 text-emerald",
};

export default function NewsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_news.png"
            alt="Campaign News - Close up of microphones and reporters"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-midnight/90 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/50 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              News & Updates
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold gradient-text-white leading-none tracking-tight drop-shadow-xl mb-6">
              Latest from the Campaign
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy-light to-navy border border-white/5 card-lift">
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-sm text-slate">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-pure-white mb-4 group-hover:text-azure transition-colors">
                {featured.title}
              </h2>
              <p className="text-base text-slate-light max-w-3xl leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-azure font-semibold text-sm group-hover:gap-3 transition-all">
                Read Full Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News Grid */}
      <section className="relative py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <article className="group relative h-full flex flex-col p-7 rounded-2xl bg-navy/40 border border-white/5 card-lift">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-pure-white mb-3 group-hover:text-azure transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed flex-1 mb-5">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-azure text-sm font-medium group-hover:gap-3 transition-all">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-azure/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
