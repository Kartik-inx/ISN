import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stories",
  description: "Real stories from serving officers, retired colleagues, and police families — the voices behind the campaign.",
};

const stories = [
  {
    quote: "I served for 22 years. I saw things that no human should ever have to witness. When I finally asked for help, the system I'd given my life to had nothing to offer me. I was told to wait. I waited until I couldn't wait any longer.",
    name: "Former Sergeant",
    service: "22 years of service",
    force: "Metropolitan Police",
    featured: true,
  },
  {
    quote: "My partner came home different every night. The person I married was disappearing piece by piece, replaced by someone who couldn't sleep, couldn't talk, couldn't feel anything except the weight of what they'd seen that day.",
    name: "Officer's Spouse",
    service: "15 years supporting",
    force: "Police Family",
    featured: false,
  },
  {
    quote: "Three colleagues — three friends — took their own lives in the space of five years. Each time, the conversations started. Each time, they stopped. It stops now.",
    name: "Serving Inspector",
    service: "18 years of service",
    force: "West Midlands Police",
    featured: false,
  },
  {
    quote: "I was medically retired after a PTSD diagnosis. The day I left the station was the last day anyone from the job checked on me. I went from being surrounded by colleagues to complete isolation overnight.",
    name: "Retired DC",
    service: "16 years of service",
    force: "Greater Manchester Police",
    featured: false,
  },
  {
    quote: "My mum was a police officer. I watched her give everything to the job — her time, her health, her peace of mind. The job gave nothing back. That's why I support this campaign. For her. For all of them.",
    name: "Officer's Daughter",
    service: "Family perspective",
    force: "Police Family",
    featured: false,
  },
  {
    quote: "I'm still serving. I'm still struggling. I can't use my real name because I fear the consequences. The fact that I have to remain anonymous tells you everything about the culture we're fighting against.",
    name: "Anonymous PC",
    service: "Currently serving",
    force: "Name withheld",
    featured: false,
  },
  {
    quote: "In 30 years, I attended over 200 sudden deaths, dozens of fatal traffic collisions, and more domestic violence than I can count. There was never a single mandatory debrief. Not one. The assumption was that we could handle it.",
    name: "Retired Inspector",
    service: "30 years of service",
    force: "Thames Valley Police",
    featured: false,
  },
  {
    quote: "I found help outside the system. A charity stepped in where my force didn't. But not everyone has the strength or the knowledge to find that help themselves. The system should catch people before they fall.",
    name: "Former Constable",
    service: "12 years of service",
    force: "Sussex Police",
    featured: false,
  },
];

export default function StoriesPage() {
  const featured = stories.find((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_stories.png"
            alt="Untold Stories - Empty locker room"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-midnight/90 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/50 to-transparent" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-azure/5 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Their Words
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Stories That{" "}
              <span className="gradient-text">Must Be Heard</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              These are real experiences from real people. Names have been changed
              or withheld to protect identities, but every word is true.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Story */}
      {featured && (
        <section className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <div className="relative p-10 md:p-16 rounded-3xl glass gradient-border">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-azure/20 mb-8">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-display text-pure-white leading-relaxed mb-10">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-sky flex items-center justify-center">
                    <span className="text-lg font-bold text-pure-white">{featured.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-pure-white">{featured.name}</p>
                    <p className="text-sm text-slate-light">{featured.service} · {featured.force}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Stories Grid */}
      <section className="relative py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-navy/40 border border-white/5 card-lift">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white/10 mb-5">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <blockquote className="text-base text-silver leading-relaxed mb-8">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-azure/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-azure">{story.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pure-white">{story.name}</p>
                      <p className="text-xs text-slate-light">{story.service}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-azure/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Share your story CTA */}
      <section className="relative py-20 bg-obsidian">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
              Share Your Story
            </h2>
            <p className="text-base text-slate-light mb-8">
              Your voice matters. If you&apos;re a serving or retired officer, or a member
              of the police family, your experience can help drive the change we need.
              All submissions can be anonymous.
            </p>
            <a href="/take-action" className="btn-primary text-base px-8 py-4 rounded-xl inline-flex">
              <span>Submit Your Story</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
