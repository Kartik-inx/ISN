import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function PocketSergeantBanner() {
  return (
    <section className="border-t border-b border-white/5 bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-azure/20 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-azure">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-display font-semibold text-pure-white mb-1">
              Proudly supported by {siteConfig.supporterName}
            </h3>
            <p className="text-sm text-slate-light">
              The essential app for today's police officer.
            </p>
          </div>
        </div>
        <Link href="/pocket-sergeant" className="btn-secondary whitespace-nowrap">
          <span>Learn more about our supporter</span>
        </Link>
      </div>
    </section>
  );
}
