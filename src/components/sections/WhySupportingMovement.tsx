"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function WhySupportingMovement() {
  return (
    <section className="relative py-28 bg-obsidian overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Our Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pure-white leading-tight mb-6">
              Why Are We Supporting This Movement?
            </h2>
            <p className="text-lg text-slate-light leading-relaxed mb-6">
              The challenges faced by modern policing require modern solutions, but technology alone is not enough. We recognized early on that providing tools to officers must be coupled with advocacy for their well-being.
            </p>
            <p className="text-lg text-slate-light leading-relaxed mb-10">
              Supporting "It Stops Now" aligns perfectly with our core mission: to protect those who protect the public. By funding this movement, we ensure that critical awareness, research, and support systems are sustained for officers and their families when they need it most.
            </p>
            
            <div className="p-8 rounded-2xl bg-navy/40 border border-white/5 relative mt-8">
              <svg className="absolute -top-4 -left-4 w-10 h-10 text-azure opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg font-medium italic text-pure-white leading-relaxed mb-6 relative z-10">
                "We cannot stand by while those who dedicate their lives to public service are left without adequate support. Pocket Sergeant is proud to stand behind It Stops Now, demanding better for our police family."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden border-2 border-azure/50">
                  {/* Testimonial Author Image */}
                  <img src="/images/uk_police_ds_1781074862198.png" alt="Author" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-pure-white">Paul</h4>
                  <p className="text-xs text-azure uppercase tracking-wider font-semibold">Founder, Pocket Sergeant</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={0.2}>
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-10"></div>
              {/* Associated Image Placeholder */}
              <img 
                src="/images/uk_police_ds_1781074862198.png" 
                alt="Partnership in Action" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
