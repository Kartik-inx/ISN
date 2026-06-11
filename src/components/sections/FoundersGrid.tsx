"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface MemberData {
  id: string;
  name: string;
  title: string;
  subLabel?: string;
  quote: string;
  bio: string;
}

const mainFounder: MemberData = {
  id: "paul-cooper",
  name: "PAUL COOPER",
  title: "Founder",
  subLabel: "Creator of Pocket Sergeant",
  quote: "Behind every statistic is a person, a family and a story that should never have had to end this way.",
  bio: "Paul Cooper is a former police officer and the founder of Pocket Sergeant. What began as an idea to help officers access tools and information they need, has grown into the UK's leading police app and a trusted wellbeing resource used by tens of thousands of officers. Now fighting for those who protect the public."
};

const foundingMembers: MemberData[] = [
  {
    id: "emma-williams",
    name: "EMMA WILLIAMS",
    title: "Family Member",
    quote: "Because no officer should suffer in silence.",
    bio: "Emma is a dedicated family advocate supporting police spouses and children. After experiencing the lack of support firsthand, she joined the movement to ensure no family has to suffer in silence."
  },
  {
    id: "david-ross",
    name: "DAVID ROSS",
    title: "Former Officer",
    quote: "Because the system failed too many of us.",
    bio: "David served as a frontline officer for 15 years. Having witnessed system breakdowns, he campaigns for transparent procedures and structural reform that prioritizes the officer's humanity."
  },
  {
    id: "lisa-thompson",
    name: "LISA THOMPSON",
    title: "Welfare Advocate",
    quote: "Because officers' wellbeing must match their performance.",
    bio: "Lisa has spent over a decade in officer welfare and occupational health. She advocates for institutionalizing wellbeing metrics that carry the same weight as performance KPIs."
  },
  {
    id: "mark-salton",
    name: "MARK SALTON",
    title: "Former Officer",
    quote: "Because officers deserve better than we got.",
    bio: "Mark is a retired inspector who fought through the ranks while coping with the invisible wounds of the job. He works to ensure future officers receive the institutional support they deserve."
  }
];

export default function FoundersGrid() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section className="relative py-28 bg-midnight overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-azure/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-royal/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Leadership"
            title="Founded by People Who Lived It"
            description="Our movement is led by former police officers, welfare advocates, and family members who have lived through the system and are fighting for real change."
          />
        </ScrollReveal>

        {/* Flip Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left: Large Founder Card */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal variant="left" className="w-full flex">
              <FlipCard
                member={mainFounder}
                isLarge={true}
                flippedId={flippedId}
                setFlippedId={setFlippedId}
              />
            </ScrollReveal>
          </div>

          {/* Right: 4 Smaller Founding Member Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {foundingMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08} className="flex">
                <FlipCard
                  member={member}
                  isLarge={false}
                  flippedId={flippedId}
                  setFlippedId={setFlippedId}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom 3 Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
          <ScrollReveal delay={0.1}>
            <Link
              href="/stories"
              className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
            >
              <div>
                <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                  Read Experiences
                </span>
                <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                  REAL STORIES. REAL PEOPLE.
                </h4>
                <p className="text-sm text-slate-light mt-3 leading-relaxed">
                  Hear directly from officers who have faced the reality of serving and the struggles of seeking support.
                </p>
              </div>
              <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                READ ALL STORIES <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/stories"
              className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
            >
              <div>
                <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                  Families First
                </span>
                <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                  FAMILIES LEFT BEHIND
                </h4>
                <p className="text-sm text-slate-light mt-3 leading-relaxed">
                  Support and resources dedicated to the loved ones left behind by fallen colleagues.
                </p>
              </div>
              <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                SEE STORIES <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/voices"
              className="group flex flex-col justify-between p-8 rounded-2xl bg-navy/40 border border-white/5 hover:border-azure/30 transition-all duration-300 h-full card-lift"
            >
              <div>
                <span className="block text-2xs font-extrabold uppercase tracking-[0.25em] text-azure mb-3">
                  Speak Out
                </span>
                <h4 className="text-xl font-display font-black uppercase text-pure-white group-hover:text-azure tracking-wider leading-snug transition-colors">
                  VOICES FOR CHANGE
                </h4>
                <p className="text-sm text-slate-light mt-3 leading-relaxed">
                  Join our advocates, retired personnel, and public figures lending their support to demand reform.
                </p>
              </div>
              <span className="text-xs font-bold text-azure group-hover:text-sky tracking-widest uppercase mt-6 flex items-center gap-1.5 transition-colors">
                VISIT VOICES <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* ─── FLIP ANIMATION CSS UTILITIES ─── */}
      <style jsx global>{`
        .flip-container {
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .flip-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .flip-front, .flip-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

function FlipCard({
  member,
  isLarge = false,
  flippedId,
  setFlippedId
}: {
  member: MemberData;
  isLarge?: boolean;
  flippedId: string | null;
  setFlippedId: (id: string | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isFlipped = flippedId === member.id;

  // Handle click outside to flip back
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        if (isFlipped) {
          setFlippedId(null);
        }
      }
    }
    // Handle tap outside on mobile
    function handleTouchOutside(event: TouchEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        if (isFlipped) {
          setFlippedId(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [isFlipped, setFlippedId]);

  return (
    <div
      ref={cardRef}
      onClick={(e) => {
        e.stopPropagation();
        setFlippedId(isFlipped ? null : member.id);
      }}
      className={`flip-container w-full select-none cursor-pointer ${
        isLarge ? "min-h-[420px] lg:min-h-full" : "min-h-[220px]"
      }`}
    >
      <div className={`flip-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT FACE */}
        <div className="flip-front bg-navy/60 border border-white/5 hover:border-azure/30 p-8 flex flex-col justify-between shadow-xl transition-all duration-300">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-display font-black uppercase text-pure-white tracking-wider ${
                  isLarge ? "text-2xl" : "text-lg"
                }`}>
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-azure mt-1 leading-none">
                  {member.title}
                  {member.subLabel && (
                    <span className="text-slate-light/60 font-normal ml-2">
                      | {member.subLabel}
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <p className={`text-slate-light italic font-serif leading-relaxed mt-6 ${
              isLarge ? "text-base sm:text-lg" : "text-xs sm:text-sm"
            }`}>
              "{member.quote}"
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-azure hover:text-sky mt-6 inline-flex items-center gap-1.5 transition-colors">
            {isLarge ? "READ BIO" : "VIEW BIO"} <span>→</span>
          </span>
        </div>

        {/* BACK FACE */}
        <div className="flip-back bg-midnight border border-azure/30 p-8 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="font-display font-bold uppercase text-azure tracking-wider text-base sm:text-lg">
              ABOUT {member.name.split(" ")[0]}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-light/60 mt-1">
              {member.title}
            </p>
            <p className="text-xs sm:text-sm text-cloud leading-relaxed mt-4">
              {member.bio}
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-slate hover:text-pure-white mt-6 inline-flex items-center gap-1.5 transition-colors">
            <span>←</span> BACK
          </span>
        </div>
      </div>
    </div>
  );
}
