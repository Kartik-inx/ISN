import Link from "next/link";

export default function PocketSergeantBanner() {
  return (
    <section className="border-t border-white/5 bg-navy-light/30 relative py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          {/* Logo / Badge */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-azure/10 border border-azure/20 flex items-center justify-center shrink-0">
              {/* Custom Pocket Sergeant SVG Logo */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-azure">
                {/* Shield background */}
                <path d="M12 2L4 5V11C4 16.52 7.42 20.35 12 22C16.58 20.35 20 16.52 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Chevrons (Sergeant) */}
                <path d="M8 8L12 11L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11L12 14L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-[0.25em] font-extrabold uppercase text-azure block mb-1">
                SPONSOR PARTNERSHIP
              </span>
              <span className="font-display font-black tracking-wider text-pure-white text-lg sm:text-xl block">
                POCKET SERGEANT
              </span>
            </div>
          </div>

          <div className="max-w-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure mb-1 select-none">
              IT STOPS NOW IS PROUDLY FUNDED AND SUPPORTED BY POCKET SERGEANT
            </h4>
            <p className="text-sm text-slate-light leading-relaxed">
              Pocket Sergeant Ltd is committed to supporting police officer welfare, wellbeing and meaningful reform.
            </p>
          </div>
        </div>

        <Link 
          href="/pocket-sergeant" 
          className="btn-outline text-xs tracking-widest font-bold uppercase py-3.5 px-6 whitespace-nowrap group shrink-0"
        >
          <span className="flex items-center gap-2">
            Learn more about our supporter <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
