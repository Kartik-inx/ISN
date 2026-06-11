"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { calculateColorization } from "@/lib/utils";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CondolenceBookPDF, { OfficerMemorial } from "@/components/pdf/CondolenceBookPDF";

const memorials: OfficerMemorial[] = [
  { id: 1, initials: "DS", name: "PC David Smith", rank: "Constable", force: "Metropolitan Police", years: "1998 – 2019", image: "/images/uk_police_ds_1781074862198.png", simulatedGlobalCount: 8250 },
  { id: 2, initials: "JW", name: "Sgt. Jane Williams", rank: "Sergeant", force: "West Yorkshire Police", years: "2001 – 2022", image: "/images/uk_police_jw_1781074874420.png", simulatedGlobalCount: 3120 },
  { id: 3, initials: "RM", name: "Insp. Robert Mitchell", rank: "Inspector", force: "Thames Valley Police", years: "1995 – 2018", image: "/images/uk_police_rm_1781074886666.png", simulatedGlobalCount: 940 },
  { id: 4, initials: "SK", name: "PC Sarah Khan", rank: "Constable", force: "Greater Manchester Police", years: "2005 – 2023", image: "/images/uk_police_sk_1781074899035.png", simulatedGlobalCount: 145 },
  { id: 5, initials: "TH", name: "DC Thomas Harris", rank: "Detective Constable", force: "Merseyside Police", years: "2000 – 2021", image: "/images/uk_police_th_1781074911702.png", simulatedGlobalCount: 45 },
  { id: 6, initials: "AL", name: "PC Amy Lewis", rank: "Constable", force: "Sussex Police", years: "2008 – 2020", image: "/images/uk_police_sk_1781074899035.png", simulatedGlobalCount: 6510 },
  { id: 7, initials: "PB", name: "Sgt. Paul Brooks", rank: "Sergeant", force: "Kent Police", years: "1997 – 2017", image: "/images/uk_police_ds_1781074862198.png", simulatedGlobalCount: 2010 },
  { id: 8, initials: "EC", name: "DC Emma Carter", rank: "Detective Constable", force: "Avon & Somerset Police", years: "2003 – 2024", image: "/images/uk_police_jw_1781074874420.png", simulatedGlobalCount: 520 },
  { id: 9, initials: "JM", name: "PC James Morgan", rank: "Constable", force: "Northumbria Police", years: "2010 – 2023", image: "/images/uk_police_rm_1781074886666.png", simulatedGlobalCount: 88 },
];

export default function RemembrancePage() {
  const [litCandles, setLitCandles] = useState<Set<number>>(new Set());
  const [totalCandles, setTotalCandles] = useState(4847);
  const [justLit, setJustLit] = useState<number | null>(null);
  
  const [generatingPdfId, setGeneratingPdfId] = useState<number | null>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("isn-lit-candles");
      if (stored) {
        setLitCandles(new Set(JSON.parse(stored)));
      }
      const storedTotal = localStorage.getItem("isn-total-candles");
      if (storedTotal) {
        setTotalCandles(parseInt(storedTotal, 10));
      }
    } catch {}
  }, []);

  const lightCandle = useCallback((id: number) => {
    if (litCandles.has(id)) return;

    const newSet = new Set(litCandles);
    newSet.add(id);
    setLitCandles(newSet);
    setTotalCandles((prev) => {
      const newTotal = prev + 1;
      localStorage.setItem("isn-total-candles", String(newTotal));
      return newTotal;
    });
    localStorage.setItem("isn-lit-candles", JSON.stringify([...newSet]));
    setJustLit(id);
    setTimeout(() => setJustLit(null), 3000);
  }, [litCandles]);

  const generatePDF = async (officer: OfficerMemorial) => {
    setGeneratingPdfId(officer.id);
    
    // Allow React to render the hidden component
    setTimeout(async () => {
      if (pdfRef.current) {
        try {
          const canvas = await html2canvas(pdfRef.current, {
            scale: 2, // High DPI for printing
            useCORS: true,
            logging: false,
          });
          
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          
          // A4 Landscape dimensions in mm: 297 x 210
          const pdf = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4"
          });
          
          pdf.addImage(imgData, "JPEG", 0, 0, 297, 210);
          pdf.save(`Book_of_Condolence_${officer.name.replace(/ /g, "_")}.pdf`);
        } catch (error) {
          console.error("Failed to generate PDF", error);
          alert("Sorry, there was an issue generating the PDF. Please try again.");
        } finally {
          setGeneratingPdfId(null);
        }
      }
    }, 500); // give it a moment to render images
  };

  const grayscale = calculateColorization(totalCandles);

  return (
    <>
      {/* Hidden container for PDF generation */}
      {generatingPdfId !== null && (
        <div className="absolute top-[-9999px] left-[-9999px]">
          <CondolenceBookPDF 
            ref={pdfRef} 
            officer={memorials.find(m => m.id === generatingPdfId)!} 
          />
        </div>
      )}

      {/* Hero — Reverent, dark */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_remembrance.png"
            alt="Wall of Remembrance - Single candle glowing in the dark"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-midnight/90 to-midnight" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-midnight/50 to-transparent" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px] z-0" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            {/* Candle icon */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative w-12 h-20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-14 bg-gradient-to-b from-slate-dark to-navy-light rounded-t-sm rounded-b-md" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-6 bg-gradient-to-t from-gold via-amber to-transparent rounded-full animate-candle opacity-90" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold/20 rounded-full blur-md animate-candle-glow" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-pure-white leading-none tracking-tight drop-shadow-xl mb-6">
              Wall of Remembrance
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto mb-8">
              Light a candle, share a memory, and ensure their legacy endures.
              As more candles are lit, colour returns to their portraits — a
              symbol that they are remembered. You can also download a Book of Condolence PDF for printing.
            </p>

            {/* Counter */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-light">
              <div className="w-2 h-4 bg-gradient-to-t from-gold to-amber rounded-full animate-candle" />
              <span className="text-lg font-display font-bold text-gold tabular-nums">
                {totalCandles.toLocaleString()}
              </span>
              <span className="text-sm text-slate-light">candles lit</span>
            </div>

            {/* Colorization indicator */}
            <div className="mt-6 max-w-sm mx-auto">
              <div className="flex justify-between text-xs text-slate mb-2">
                <span>Monochrome</span>
                <span>Full colour</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-slate-light via-azure to-gold transition-all duration-1000"
                  style={{ width: `${(1 - grayscale) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Memorial Grid */}
      <section className="relative py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memorials.map((memorial, i) => {
              const isLit = litCandles.has(memorial.id);
              const wasJustLit = justLit === memorial.id;

              return (
                <ScrollReveal key={memorial.id} delay={i * 0.06}>
                  <div className={`group relative rounded-2xl overflow-hidden bg-navy/40 border transition-all duration-700 ${
                    isLit ? "border-gold/20" : "border-white/5"
                  } ${wasJustLit ? "glow-gold" : ""}`}>
                    {/* Portrait area */}
                    <div
                      className="relative aspect-[3/4] flex items-center justify-center bg-gradient-to-b from-navy-light to-midnight transition-all duration-[2s]"
                      style={{
                        filter: `grayscale(${isLit ? Math.max(grayscale - 0.2, 0) : grayscale})`,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={memorial.image}
                        alt={memorial.name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      />

                      {/* Candle overlay when lit */}
                      {isLit && (
                        <div className="absolute top-3 right-3">
                          <div className="relative">
                            <div className="w-2 h-5 bg-gradient-to-t from-gold via-amber to-transparent rounded-full animate-candle" />
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-gold/20 rounded-full blur-sm animate-candle-glow" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-sm font-semibold text-pure-white mb-0.5">
                        {memorial.name}
                      </h3>
                      <p className="text-xs text-azure mb-1">{memorial.rank} · {memorial.force}</p>
                      <p className="text-xs text-slate mb-4">{memorial.years}</p>

                      <div className="space-y-2">
                        {/* Light candle button */}
                        <button
                          onClick={() => lightCandle(memorial.id)}
                          disabled={isLit}
                          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                            isLit
                              ? "bg-gold/10 text-gold cursor-default"
                              : "bg-white/5 text-slate-light hover:bg-gold/10 hover:text-gold"
                          }`}
                        >
                          <div className={`w-1.5 h-3 rounded-full ${
                            isLit
                              ? "bg-gradient-to-t from-gold to-amber animate-candle"
                              : "bg-slate/50"
                          }`} />
                          {isLit ? "Candle Lit" : "Light a Candle"}
                        </button>

                        {/* Download PDF button */}
                        <button
                          onClick={() => generatePDF(memorial)}
                          disabled={generatingPdfId === memorial.id}
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 bg-white/5 text-slate-light hover:bg-white/10 hover:text-pure-white border border-white/5 hover:border-white/10"
                        >
                          {generatingPdfId === memorial.id ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Generating PDF...
                            </span>
                          ) : (
                            <>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                              </svg>
                              Download Book of Condolence
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leave a Memory */}
      <section className="relative py-20 bg-obsidian">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-display font-bold text-pure-white mb-3">
                Leave a Memory
              </h2>
              <p className="text-sm text-slate-light">
                Share a tribute, a memory, or a message of support. All entries
                are moderated before being displayed.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-silver mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name (or 'Anonymous')"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-pure-white placeholder:text-slate focus:outline-none focus:border-azure/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver mb-2">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Share your memory or message of support..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-pure-white placeholder:text-slate focus:outline-none focus:border-azure/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-sm py-3">
                <span>Submit Memory</span>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
