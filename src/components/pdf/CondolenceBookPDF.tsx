import React, { forwardRef } from "react";
import Image from "next/image";

export interface OfficerMemorial {
  id: number;
  initials: string;
  name: string;
  rank: string;
  force: string;
  years: string;
  image: string;
  simulatedGlobalCount: number;
}

interface CondolenceBookPDFProps {
  officer: OfficerMemorial;
}

const CondolenceBookPDF = forwardRef<HTMLDivElement, CondolenceBookPDFProps>(
  ({ officer }, ref) => {
    return (
      // This is the container that will be captured by html2canvas. 
      // We set a fixed size proportional to A4 Landscape (297mm x 210mm).
      // 1123px x 794px is a common resolution for A4 landscape at 96 DPI.
      <div
        ref={ref}
        className="bg-white text-slate-900 w-[1123px] h-[794px] overflow-hidden relative flex flex-row"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Panel 1: In Loving Memory */}
        <div className="w-1/3 h-full border-r border-slate-200 flex flex-col items-center justify-center p-10 bg-slate-50 relative">
          <div className="absolute top-8 left-0 right-0 flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-300">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          
          <h2 className="text-sm tracking-[0.3em] text-slate-500 uppercase mb-8 text-center mt-12">
            In Loving Memory
          </h2>
          
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={officer.image} 
              alt={officer.name} 
              className="w-full h-full object-cover"
              crossOrigin="anonymous" 
            />
          </div>
          
          <h1 className="text-2xl font-serif font-bold text-slate-800 text-center mb-2">
            {officer.name}
          </h1>
          <p className="text-sm text-slate-500 text-center uppercase tracking-widest mb-1">
            {officer.rank}
          </p>
          <p className="text-sm text-slate-500 text-center mb-8">
            {officer.force}
          </p>
          
          <p className="text-xs text-slate-600 text-center italic max-w-[250px] leading-relaxed">
            &ldquo;This book is a tribute to the life of {officer.name}. It has been created from the memories, messages and condolences shared by colleagues, friends, family and members of the policing community.&rdquo;
          </p>
          
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
            <div className="text-2xl mb-1 text-slate-300">🕯️</div>
            <div className="text-lg font-bold text-slate-800">{officer.simulatedGlobalCount.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Messages & Tributes</div>
          </div>
        </div>

        {/* Panel 2: Their Story */}
        <div className="w-1/3 h-full border-r border-slate-200 p-10 flex flex-col relative bg-white">
          <h2 className="text-sm tracking-[0.2em] text-slate-500 uppercase mb-8 text-center">
            Their Story
          </h2>
          
          <p className="text-[10px] text-slate-400 uppercase tracking-wider text-center mb-6">
            A Devoted Officer. A True Friend. An Inspiration.
          </p>
          
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed px-4 text-justify">
            <p>
              {officer.name} served with the {officer.force} with distinction. Known for their dedication and professionalism, they devoted their life to serving and protecting the community.
            </p>
            <p>
              Their commitment to the uniform was only matched by their compassion for those they served. They leaves behind a legacy of bravery, integrity, and selflessness that will forever be remembered by colleagues and loved ones alike.
            </p>
            <p>
              A passionate public servant, a loyal colleague, and a deeply loved family member, their smile, humour, and compassion will be cherished forever by all who knew them.
            </p>
          </div>
          
          <div className="absolute bottom-10 left-10 right-10 border-t border-slate-100 pt-8 text-center">
             <p className="font-serif italic text-lg text-slate-700">
               &ldquo;He gave his all, every single day.&rdquo;
             </p>
          </div>
        </div>

        {/* Panel 3: Condolences */}
        <div className="w-1/3 h-full p-10 bg-slate-50 flex flex-col">
          <h2 className="text-sm tracking-[0.2em] text-slate-500 uppercase mb-8 text-center">
            Memories & Condolences
          </h2>
          
          <div className="space-y-6 flex-1 overflow-hidden">
            {[
              { text: "A truly outstanding officer and a wonderful person. You will be sorely missed by everyone on the shift.", author: "Sgt. Davies", role: "Colleague" },
              { text: "Thank you for always being there when we needed you most. Your courage inspired us all.", author: "The Smith Family", role: "Public Supporter" },
              { text: "You never walked past a problem. You faced everything with a smile and incredible bravery.", author: "PC Jenkins", role: "Friend" },
              { text: "We are forever grateful for the time we had with you. Your legacy will live on.", author: "Anonymous", role: "" }
            ].map((msg, idx) => (
              <div key={idx} className="relative pl-6">
                <span className="absolute left-0 top-0 text-slate-300 font-serif text-2xl leading-none">&ldquo;</span>
                <p className="text-xs text-slate-600 italic mb-2 leading-relaxed">
                  {msg.text}&rdquo;
                </p>
                <p className="text-[10px] text-slate-800 font-bold uppercase tracking-wider">
                  {msg.author}
                </p>
                {msg.role && (
                  <p className="text-[9px] text-slate-400 uppercase tracking-wider">
                    {msg.role}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-auto flex items-center justify-center gap-2 text-slate-300">
             <div className="h-px bg-slate-200 w-12" />
             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
             </svg>
             <div className="h-px bg-slate-200 w-12" />
          </div>
        </div>
      </div>
    );
  }
);

CondolenceBookPDF.displayName = "CondolenceBookPDF";

export default CondolenceBookPDF;
