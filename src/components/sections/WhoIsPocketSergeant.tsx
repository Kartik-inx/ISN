"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function WhoIsPocketSergeant() {
  return (
    <section className="relative py-28 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-6">
              <span className="w-8 h-px bg-azure" />
              Supporting Organization
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pure-white leading-tight mb-6">
              Who Is Pocket Sergeant?
            </h2>
            <p className="text-lg text-slate-light leading-relaxed mb-6">
              Pocket Sergeant is a leading mobile application designed specifically for police officers and staff across the UK. It serves as an essential digital companion, providing instant access to up-to-date legislation, reference materials, and vital tools to support officers in their daily duties.
            </p>
            <p className="text-lg text-slate-light leading-relaxed">
              Beyond just a reference tool, Pocket Sergeant is deeply committed to the welfare and wellbeing of the police family, recognizing the immense pressures officers face and actively investing in initiatives that drive meaningful reform and support.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="right" delay={0.2}>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-azure/20 to-transparent z-10 mix-blend-overlay"></div>
              {/* Placeholder for Pocket Sergeant Office/Team or abstract image */}
              <img 
                src="/images/uk_police_ds_1781074862198.png" 
                alt="Pocket Sergeant Team" 
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
