import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import MPContactWizard from "@/components/forms/MPContactWizard";

export const metadata: Metadata = {
  title: "Take Action",
  description: "Join the movement — write to your MP, donate, volunteer, and help drive real change for the police family.",
};

const secondaryActions = [
  {
    title: "Donate",
    description: "Your contribution funds research, campaign activities, officer support programmes, and the fight for policy change. Every pound makes a difference.",
    icon: "💙",
    cta: "Contribute",
    href: "/donate",
  },
  {
    title: "Volunteer",
    description: "We need people to help with events, community outreach, social media, research assistance, and more. Your time and skills can change lives.",
    icon: "🤝",
    cta: "Get Involved",
    href: "#",
  },
  {
    title: "Share Your Story",
    description: "If you're a serving or retired officer, or a member of the police family, your experience can help drive the change we need. All submissions can be anonymous.",
    icon: "📝",
    cta: "Submit Story",
    href: "#",
  },
];

export default function TakeActionPage() {
  return (
    <>
      {/* Hero — Bold, urgent */}
      <section className="relative pt-40 pb-20 overflow-hidden">
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

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Get Involved
              <span className="w-8 h-px bg-azure" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-8">
              Write to Your <span className="gradient-text">MP.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-light max-w-2xl mx-auto leading-relaxed">
              Political pressure drives policy change. Use our quick wizard below to find your MP and send a personalised letter demanding better welfare support for police officers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MP Contact Wizard Section */}
      <section className="relative py-12 -mt-10 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <MPContactWizard />
        </div>
      </section>

      {/* Secondary Actions */}
      <section className="relative py-16 pb-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
                Other Ways to Help
              </h2>
              <p className="text-slate-light">Every action counts. Join the movement today.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryActions.map((action, i) => (
              <ScrollReveal
                key={action.title}
                delay={i * 0.08}
              >
                <div className="group relative h-full p-8 rounded-2xl bg-navy/30 border border-white/5 card-lift overflow-hidden text-center">
                  <div className="relative z-10">
                    <div className="text-4xl mb-5 flex justify-center">{action.icon}</div>
                    <h3 className="text-xl font-display font-semibold text-pure-white mb-3">
                      {action.title}
                    </h3>
                    <p className="text-sm text-slate-light leading-relaxed mb-8">
                      {action.description}
                    </p>
                    <Link href={action.href} className="btn-outline text-sm px-6 py-2 inline-block">
                      {action.cta}
                    </Link>
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
      <section className="relative py-20 bg-midnight border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
              Together We&apos;ve Achieved
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { number: "52,000+", label: "Letters Sent" },
                { number: "£180K+", label: "Funds raised" },
                { number: "350+", label: "Stories shared" },
                { number: "12", label: "Policy recommendations" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl glass border border-white/5">
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
