"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface MemberData {
  id: string;
  name: string;
  role: string;
  subLabel?: string;
  quote: string;
  bio: string;
}

const mainFounder: MemberData = {
  id: "paul-cooper-about",
  name: "PAUL COOPER",
  role: "Founder",
  subLabel: "Creator of Pocket Sergeant",
  quote: "Behind every statistic is a person, a family and a story that should never have had to end this way.",
  bio: "Paul Cooper is a former police officer and the founder of Pocket Sergeant. What began as an idea to help officers access tools and information they need has grown into the UK's leading police app and a trusted wellbeing resource used by tens of thousands of officers. He created It Stops Now to help those who protect the public — because no officer should suffer in silence, and no family should be left without support."
};

const foundingMembers: MemberData[] = [
  {
    id: "emma-williams-about",
    name: "EMMA WILLIAMS",
    role: "Family Member",
    quote: "Because no officer should suffer in silence.",
    bio: "Emma lost a family member who served as a police officer. Her personal experience of the system's failures led her to join the founding team, campaigning for better family support and transparency."
  },
  {
    id: "david-ross-about",
    name: "DAVID ROSS",
    role: "Former Officer",
    quote: "Because the system failed too many of us.",
    bio: "David served for over 20 years before being medically retired. He experienced first-hand how the welfare system abandoned officers the moment they left service. He now campaigns for lifetime aftercare and reform."
  },
  {
    id: "lisa-thompson-about",
    name: "LISA THOMPSON",
    role: "Welfare Advocate",
    quote: "Because officers' wellbeing must match their performance.",
    bio: "Lisa worked as a welfare officer inside a major constabulary for over a decade. She saw the gaps, the underfunding, and the culture of silence. She joined It Stops Now to fight for the structural changes that officers deserve."
  },
  {
    id: "mark-salton-about",
    name: "MARK SALTON",
    role: "Former Officer",
    quote: "Because officers deserve better than we got.",
    bio: "Mark served on the frontline for 18 years. After struggling with PTSD and receiving no meaningful support, he committed to building a movement that would ensure the next generation of officers would never face what he did."
  }
];

export default function AboutFounders() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section className="relative py-28 bg-midnight overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-azure/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
              <span className="w-8 h-px bg-azure" />
              Leadership
              <span className="w-8 h-px bg-azure" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text-white">
              Founded by People Who Lived It
            </h2>
          </div>
        </ScrollReveal>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: Large Founder Card */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal variant="left" className="w-full flex">
              <AboutFlipCard
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
                <AboutFlipCard
                  member={member}
                  isLarge={false}
                  flippedId={flippedId}
                  setFlippedId={setFlippedId}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/founders" className="btn-primary text-sm px-8 py-4 rounded-xl">
              MEET THE FULL TEAM →
            </Link>
            <Link href="#our-mission" className="btn-outline text-sm px-8 py-4 rounded-xl">
              ABOUT OUR MISSION →
            </Link>
          </div>
        </ScrollReveal>
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

function AboutFlipCard({
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
        isLarge ? "min-h-[440px] lg:min-h-full" : "min-h-[220px]"
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
                  {member.role}
                  {member.subLabel && (
                    <span className="text-slate-light/60 font-normal ml-2">
                      | {member.subLabel}
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            {isLarge && (
              <p className="text-xs text-slate-light mt-2 font-semibold tracking-wider">
                Former police officer. Now fighting for those who protect the public.
              </p>
            )}

            <p className={`text-slate-light italic font-serif leading-relaxed mt-6 ${
              isLarge ? "text-base sm:text-lg" : "text-xs sm:text-sm"
            }`}>
              "{member.quote}"
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-azure hover:text-sky mt-6 inline-flex items-center gap-1.5 transition-colors">
            VIEW BIO <span>→</span>
          </span>
        </div>

        {/* BACK FACE */}
        <div className="flip-back bg-midnight border border-azure/30 p-8 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="font-display font-bold uppercase text-azure tracking-wider text-base sm:text-lg">
              ABOUT {member.name.split(" ")[0]}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-light/60 mt-1">
              {member.role}
            </p>
            <p className="text-xs sm:text-sm text-cloud leading-relaxed mt-4">
              {member.bio}
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-slate hover:text-pure-white mt-6 inline-flex items-center gap-1.5 transition-colors">
            <span>←</span> FLIP BACK
          </span>
        </div>
      </div>
    </div>
  );
}
