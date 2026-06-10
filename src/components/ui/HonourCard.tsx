"use client";

import { useState, useEffect } from "react";

interface HonourCardProps {
  officer: {
    initials: string;
    name: string;
    rank: string;
    force: string;
    years: string;
    image: string;
  };
  simulatedGlobalCount: number;
}

export default function HonourCard({ officer, simulatedGlobalCount }: HonourCardProps) {
  const [isLit, setIsLit] = useState(false);
  const [hasLitBefore, setHasLitBefore] = useState(false);
  const [displayCount, setDisplayCount] = useState(simulatedGlobalCount);
  
  // Storage key specific to this officer
  const storageKey = `isn_candle_lit_${officer.name.replace(/\s+/g, '_')}`;

  useEffect(() => {
    // Check if user already lit this candle
    const lit = localStorage.getItem(storageKey);
    if (lit) {
      setHasLitBefore(true);
      setDisplayCount(simulatedGlobalCount + 1);
    }
  }, [storageKey, simulatedGlobalCount]);

  const handleLightCandle = () => {
    if (hasLitBefore || isLit) return;
    
    setIsLit(true);
    setHasLitBefore(true);
    setDisplayCount(prev => prev + 1);
    localStorage.setItem(storageKey, "true");
    
    // Simulate the personal animated moment (5 seconds of full colour)
    setTimeout(() => {
      setIsLit(false);
    }, 5000);
  };

  // Calculate base grayscale based on total candles lit
  // 0-100 candles -> 95% grayscale
  // 500 candles -> 75% grayscale
  // 2000 candles -> 50% grayscale
  // 5000+ candles -> 0% grayscale
  let baseGrayscale = "100%";
  
  if (displayCount >= 5000) {
    baseGrayscale = "0%";
  } else if (displayCount >= 2000) {
    baseGrayscale = "50%";
  } else if (displayCount >= 500) {
    baseGrayscale = "75%";
  } else {
    baseGrayscale = "95%";
  }

  // If currently lighting the candle, force full colour (0% grayscale)
  const currentGrayscale = isLit ? "0%" : baseGrayscale;

  return (
    <div 
      className={`group relative p-6 rounded-2xl bg-navy/40 border border-white/5 transition-all duration-500 overflow-hidden ${hasLitBefore ? '' : 'cursor-pointer hover:border-gold/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] card-lift'}`}
      onClick={handleLightCandle}
    >
      <div className="flex items-start gap-5 relative z-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden relative border border-white/5 bg-navy-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={officer.image}
            alt={officer.name}
            style={{ 
              filter: `grayscale(${currentGrayscale})`,
              transition: "filter 1.5s ease-in-out, transform 1.5s ease-in-out"
            }}
            className={`w-full h-full object-cover ${isLit ? 'scale-110' : 'scale-100'}`}
          />
          {/* Subtle overlay flash when lit */}
          <div className={`absolute inset-0 bg-gold/20 mix-blend-overlay transition-opacity duration-1000 ${isLit ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-pure-white">{officer.name}</h3>
          <p className="text-sm text-azure">{officer.rank}</p>
          <p className="text-xs text-slate-light mt-1">{officer.force}</p>
          <p className="text-xs text-slate mt-0.5">{officer.years}</p>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 text-xs text-slate-light/60 font-mono transition-opacity duration-1000">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isLit ? "text-gold" : ""}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        {displayCount.toLocaleString()} candles
      </div>

      {/* Candle graphic */}
      <div className="absolute top-5 right-5 flex items-center gap-1 transition-all duration-500">
        <div className="relative flex flex-col items-center">
          {/* Flame */}
          <div 
            className={`absolute -top-4 w-2 h-3 rounded-full transition-all duration-1000 ${
              isLit ? 'bg-gradient-to-t from-gold to-amber animate-candle opacity-100 scale-125' : 
              hasLitBefore ? 'bg-gradient-to-t from-gold to-amber opacity-60 animate-candle' : 'opacity-0 scale-50'
            }`} 
          />
          
          {/* Glow effect when lit */}
          <div className={`absolute -top-4 w-8 h-8 bg-gold/30 blur-md rounded-full transition-opacity duration-1000 ${isLit ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Base candle body */}
          <div className={`w-1.5 h-4 rounded-sm transition-colors duration-1000 ${isLit || hasLitBefore ? 'bg-gradient-to-t from-gold/50 to-white/90' : 'bg-white/20'}`} />
        </div>
      </div>
      
      {/* Click hint */}
      {!hasLitBefore && !isLit && (
         <div className="absolute bottom-5 right-24 text-[10px] text-gold/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Click to light
         </div>
      )}
    </div>
  );
}
