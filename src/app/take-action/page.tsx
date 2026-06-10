import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Take Action",
  description: "Join the movement — sign petitions, share your story, donate, volunteer, and help drive real change for the police family.",
};

const actions = [
  {
    title: "Sign the Petition",
    description: "Add your name to our open letter demanding systemic reform in how police officers and their families are supported. Every signature amplifies the call for change.",
    icon: "✍️",
    cta: "Sign Now",
    color: "azure",
    size: "large",
  },
  {
    title: "Donate",
    description: "Your contribution funds research, campaign activities, officer support programmes, and the fight for policy change. Every pound makes a difference.",
    icon: "💙",
    cta: "Contribute",
    color: "azure",
    size: "normal",
  },
  {
    title: "Share Your Story",
    description: "If you're a serving or retired officer, or a member of the police family, your experience can help drive the change we need. All submissions can be anonymous.",
    icon: "📝",
    cta: "Submit Story",
    color: "azure",
    size: "normal",
  },
  {
    title: "Volunteer",
    description: "We need people to help with events, community outreach, social media, research assistance, and more. Your time and skills can change lives.",
    icon: "🤝",
    cta: "Get Involved",
    color: "azure",
    size: "normal",
  },
  {
    title: "Contact Your Representative",
    description: "Write to your local MP about officer welfare. We provide template letters and talking points to make it easy. Political pressure drives policy change.",
    icon: "📮",
    cta: "Write Now",
    color: "azure",
    size: "normal",
  },
  {
    title: "Spread the Word",
    description: "Share our campaign on social media, talk to your community, and help us reach more people. Awareness is the first step toward action.",
    icon: "📢",
    cta: "Share Campaign",
    color: "azure",
    size: "large",
  },
];

export default function TakeActionPage() {
  return (
    <>
      {/* Hero — Bold, urgent */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_take_action.png"
            alt="Take Action - Hands clasped in solidarity"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-royal/60 via-midnight/80 to-navy" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-azure/6 rounded-full blur-[150px] z-0" />
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Get Involved
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-8">
              Your Voice{" "}
              <span className="gradient-text">Matters.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-light max-w-2xl mx-auto leading-relaxed">
              Every action counts. Whether you sign, share, donate, or simply stand
              with us — you become part of the change the police family needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Action Cards — Bento Grid */}
      <section className="relative py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action, i) => (
              <ScrollReveal
                key={action.title}
                delay={i * 0.08}
                className={action.size === "large" ? "lg:col-span-2" : ""}
              >
                <div className="group relative h-full p-8 rounded-2xl bg-navy/50 border border-white/5 card-lift overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-4xl mb-5">{action.icon}</div>
                    <h3 className="text-xl font-display font-semibold text-pure-white mb-3">
                      {action.title}
                    </h3>
                    <p className="text-sm text-slate-light leading-relaxed mb-6">
                      {action.description}
                    </p>
                    <button className="btn-primary text-sm px-6 py-3">
                      <span>{action.cta}</span>
                    </button>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact tracker */}
      <section className="relative py-20 bg-obsidian">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
              Together We&apos;ve Achieved
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { number: "52,000+", label: "Petition signatures" },
                { number: "£180K+", label: "Funds raised" },
                { number: "350+", label: "Stories shared" },
                { number: "12", label: "Policy recommendations" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl glass">
                  <span className="text-2xl font-display font-bold text-azure">{item.number}</span>
                  <p className="text-xs text-slate-light mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
