"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function DataTransparencyNote() {
  const [isOpen, setIsOpen] = useState(false);
  const [openRow, setOpenRow] = useState<string | null>(null);

  return (
    <ScrollReveal delay={0.3}>
      <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-navy/40 border border-white/5 overflow-hidden transition-all duration-300">
        {/* Main Header / Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="text-azure shrink-0">
              {/* info circle (ti-info-circle equivalent) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-pure-white">
              About this data
            </span>
          </div>
          <div className="text-slate transition-transform duration-300">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>

        {/* Collapsible content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[800px] border-t border-white/5" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="text-sm text-slate-light leading-relaxed space-y-2">
              <p className="font-bold text-pure-white text-base">The true number is likely to be significantly higher.</p>
              <p>Inconsistent reporting and the absence of national transparency mean the full scale of the issue may never be fully known.</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 pt-1">Data compiled between 2022–2025 using Police Federation wellbeing and misconduct research.</p>
            </div>

            {/* Inner Toggle Rows */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              {/* Row 1 */}
              <div className="rounded-xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenRow(openRow === "investigation" ? null : "investigation")}
                  className="w-full flex items-center justify-between p-4 bg-midnight/35 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-azure">
                    OFFICERS UNDER INVESTIGATION
                  </span>
                  <span className="text-azure text-xs">
                    {openRow === "investigation" ? "Collapse −" : "Expand +"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openRow === "investigation" ? "max-h-[200px] border-t border-white/5 p-4 bg-midnight/50" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    47 of 70 officer suicides were linked to misconduct or criminal investigations. 173 of 236 attempted suicides involved officers under investigation. 12 of 13 known officer suicides in 2025 involved officers under investigation.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="rounded-xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenRow(openRow === "truenumber" ? null : "truenumber")}
                  className="w-full flex items-center justify-between p-4 bg-midnight/35 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-azure">
                    THE TRUE NUMBER
                  </span>
                  <span className="text-azure text-xs">
                    {openRow === "truenumber" ? "Collapse −" : "Expand +"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openRow === "truenumber" ? "max-h-[200px] border-t border-white/5 p-4 bg-midnight/50" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
                    The true number is likely to be significantly higher. Inconsistent reporting and the absence of national transparency mean the full scale of the issue may never be fully known. Data compiled between 2022–2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
