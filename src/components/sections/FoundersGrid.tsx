"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const founders = [
  {
    name: "James Thornton",
    title: "Co-Founder & Campaign Director",
    initials: "JT",
    bio: "A retired police inspector with 28 years of frontline service. James experienced firsthand the devastating impact of inadequate mental health support after multiple critical incidents. His personal journey through PTSD and recovery became the catalyst for It Stops Now. He now dedicates his time to ensuring no officer faces these battles alone.",
    service: "28 years of service",
    force: "Metropolitan Police Service",
  },
  {
    name: "Sarah Mitchell",
    title: "Co-Founder & Head of Advocacy",
    initials: "SM",
    bio: "Sarah's career as a detective sergeant spanning 22 years brought her face to face with the system's failures — not just for victims of crime, but for the officers investigating them. After losing a close colleague to suicide, she committed to building a campaign that would demand accountability and drive policy change at every level.",
    service: "22 years of service",
    force: "West Midlands Police",
  },
  {
    name: "Dr. Rachel Edwards",
    title: "Co-Founder & Research Lead",
    initials: "RE",
    bio: "A clinical psychologist specialising in police trauma and PTSD, Rachel brings the evidence base that underpins every campaign demand. Her research into the long-term psychological impact of policing has been cited in parliamentary debates and has helped shift the national conversation around officer welfare.",
    service: "Clinical Psychology Lead",
    force: "Independent Researcher",
  },
  {
    name: "Mark Patterson",
    title: "Co-Founder & Community Liaison",
    initials: "MP",
    bio: "Mark served as a police constable for 18 years before being medically retired due to complex PTSD. His experience of post-service abandonment — losing access to support the moment he left the force — drives the campaign's focus on lifetime aftercare for officers. He now works tirelessly to build bridges between serving officers, retirees, and communities.",
    service: "18 years of service",
    force: "Greater Manchester Police",
  },
];

export default function FoundersGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {founders.map((founder, i) => (
        <ScrollReveal key={founder.name} delay={i * 0.1}>
          <FlipCard founder={founder} />
        </ScrollReveal>
      ))}
    </div>
  );
}

function FlipCard({ founder }: { founder: typeof founders[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card cursor-pointer h-[380px] sm:h-[420px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="flip-card-front rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-white/5 p-10 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-azure/20 to-sky/10 flex items-center justify-center mb-6 border border-azure/20">
            <span className="text-3xl font-display font-bold text-azure">
              {founder.initials}
            </span>
          </div>

          <h3 className="text-2xl font-display font-bold text-pure-white mb-2">
            {founder.name}
          </h3>
          <p className="text-sm text-azure font-medium mb-2">{founder.title}</p>
          <p className="text-xs text-slate-light">{founder.force}</p>
          <p className="text-xs text-slate">{founder.service}</p>

          <div className="mt-6 flex items-center gap-2 text-xs text-slate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            Click to read bio
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back rounded-2xl glass-strong p-10 flex flex-col justify-center overflow-y-auto">
          <h3 className="text-xl font-display font-bold text-pure-white mb-2">
            {founder.name}
          </h3>
          <p className="text-sm text-azure font-medium mb-5">{founder.title}</p>
          <p className="text-sm text-slate-light leading-relaxed">
            {founder.bio}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-slate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
}
