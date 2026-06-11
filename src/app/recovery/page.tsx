import { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recovery & Support",
  description: "Resources, helplines, and support services for police officers and their families — you are not alone.",
};

const emergencyResources = [
  {
    name: "Police Care UK",
    description: "24/7 confidential support for serving and retired officers and their families.",
    phone: "0300 012 0030",
    type: "Helpline",
  },
  {
    name: "Samaritans",
    description: "Free 24/7 emotional support for anyone in distress.",
    phone: "116 123",
    type: "Crisis",
  },
];

const supportCategories = [
  {
    title: "Mental Health",
    description: "Specialist therapy, counselling, and psychological support services designed for the unique challenges of policing.",
    icon: "🧠",
    resources: [
      "Police Care UK – Psychological support and counselling",
      "Mind Blue Light Programme – Mental health resources for emergency workers",
      "PTSD Resolution – Free trauma-focused therapy for officers",
      "Oscar Kilo – National police wellbeing service",
    ],
  },
  {
    title: "Family Support",
    description: "Dedicated support for the families of serving and retired officers, including partners, children, and parents.",
    icon: "👨‍👩‍👧‍👦",
    resources: [
      "National Police Helpline – Family counselling referrals",
      "Police Dependants' Trust – Financial aid for bereaved families",
      "Family support peer networks across forces",
      "Children's bereavement counselling specialists",
    ],
  },
  {
    title: "Peer Support",
    description: "Connect with fellow officers and families who understand what you're going through.",
    icon: "🤝",
    resources: [
      "Blue Light Together – Peer support community",
      "Force-level peer support networks",
      "Retired officers' social groups and mentorship",
      "Online forums and confidential discussion groups",
    ],
  },
  {
    title: "Legal Support",
    description: "Guidance on employment rights, medical discharge processes, and compensation claims.",
    icon: "⚖️",
    resources: [
      "Police Federation legal advice service",
      "Employment rights for officers with PTSD",
      "Medical retirement guidance and advocacy",
      "Injury on duty pension entitlements",
    ],
  },
  {
    title: "Financial Aid",
    description: "Grants, emergency funding, and financial planning support for officers in hardship.",
    icon: "💰",
    resources: [
      "Police Benevolent Fund – Emergency grants",
      "Gurney Fund – Financial support for retired officers",
      "St George's Police Trust – Welfare grants",
      "Police Dependants' Trust – Ongoing financial support",
    ],
  },
  {
    title: "Physical Health",
    description: "Rehabilitation, physiotherapy, and wellness programmes to support overall wellbeing.",
    icon: "💪",
    resources: [
      "Police Rehabilitation Centre (Flint House)",
      "Police Treatment Centres",
      "Force fitness and wellbeing programmes",
      "Specialist injury rehabilitation services",
    ],
  },
];

export default function RecoveryPage() {
  return (
    <>
      {/* Hero — Warm, hopeful tone */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_recovery.png"
            alt="Recovery & Support - Sunlight breaking through mist"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-midnight/80 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        </div>
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald/4 rounded-full blur-[140px] z-0" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-emerald mb-6">
              <span className="w-8 h-px bg-emerald" />
              You Are Not Alone
              <span className="w-8 h-px bg-emerald" />
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Recovery &{" "}
              <span className="text-emerald">Support</span>
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              If you or someone you know is struggling, help is available.
              Below you&apos;ll find helplines, resources, and support services
              designed specifically for the police family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency / Crisis Help — Always visible, prominent */}
      <section className="relative py-10">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-ember/10 via-navy to-ember/5 border border-ember/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ember/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ember">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-display font-bold text-pure-white mb-1">
                    Need Help Now?
                  </h2>
                  <p className="text-sm text-slate-light">
                    If you or someone you know is in immediate crisis, please reach out:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {emergencyResources.map((resource) => (
                  <div key={resource.name} className="p-5 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-ember/20 text-ember">{resource.type}</span>
                    </div>
                    <h3 className="text-base font-semibold text-pure-white mb-1">{resource.name}</h3>
                    <p className="text-xs text-slate-light mb-3">{resource.description}</p>
                    <a
                      href={`tel:${resource.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-lg font-display font-bold text-emerald hover:text-teal transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      {resource.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-4">
              Support Resources
            </h2>
            <p className="text-base text-slate-light mb-12 max-w-2xl">
              Browse resources by category. All services listed are verified and appropriate for serving officers, retired officers, and their families.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.08}>
                <div className="group h-full p-7 rounded-2xl bg-navy/40 border border-white/5 card-lift">
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="text-lg font-display font-semibold text-pure-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-light mb-5">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.resources.map((res, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-silver">
                        <span className="w-1 h-1 rounded-full bg-azure mt-1.5 flex-shrink-0" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Media */}
      <section className="relative py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-pure-white mb-12 text-center">
              Recommended Resources
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Apps */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-navy/40 border border-white/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center text-azure">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-pure-white">Apps</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pocket Sergeant</h4>
                    <p className="text-xs text-slate-light">Essential operational and wellbeing guidance for police officers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headspace</h4>
                    <p className="text-xs text-slate-light">Meditation and sleep support, often available free for emergency services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Backup Buddy</h4>
                    <p className="text-xs text-slate-light">Mental health support app designed specifically for police forces.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Books */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-navy/40 border border-white/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center text-azure">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-pure-white">Books</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Emotional Survival for Law Enforcement</h4>
                    <p className="text-xs text-slate-light">Dr. Kevin Gilmartin's essential guide to maintaining mental health.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">The Body Keeps the Score</h4>
                    <p className="text-xs text-slate-light">Bessel van der Kolk's definitive work on trauma and healing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Man's Search for Meaning</h4>
                    <p className="text-xs text-slate-light">Viktor Frankl's classic on finding purpose in difficult circumstances.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Podcasts */}
            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-navy/40 border border-white/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center text-azure">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-pure-white">Podcasts</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1">The Tango Romeo Podcast</h4>
                    <p className="text-xs text-slate-light">Real conversations about mental health in emergency services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Police Hour</h4>
                    <p className="text-xs text-slate-light">Discussions on current policing issues, including welfare.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Oscar Kilo Podcasts</h4>
                    <p className="text-xs text-slate-light">Official wellbeing broadcasts from the National Police Wellbeing Service.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Message of hope */}
      <section className="relative py-20 bg-obsidian">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="text-5xl mb-6">💙</div>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-4">
              Recovery Is Possible
            </h2>
            <p className="text-base text-slate-light leading-relaxed mb-8">
              Whatever you&apos;re going through, there is a way forward. You served
              with courage — now let others serve you. Reaching out is not
              weakness; it is the bravest thing you can do.
            </p>
            <Link href="/stories" className="inline-flex items-center gap-2 text-azure font-semibold group">
              Read recovery stories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
