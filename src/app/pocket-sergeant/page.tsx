"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const RESOURCE_CATEGORIES = [
  { title: "Policy & Guidance", icon: "file", desc: "Access the latest national policies and operational guidance." },
  { title: "Welfare Support", icon: "heart", desc: "Confidential channels for personal and professional welfare." },
  { title: "Mental Health Resources", icon: "brain", desc: "Specialized psychological support and trauma care pathways." },
  { title: "Reference Library", icon: "book", desc: "Comprehensive legal definitions and procedural references." },
  { title: "Training Materials", icon: "graduation-cap", desc: "Continuous development modules and best practice guides." },
  { title: "Family Support", icon: "users", desc: "Dedicated resources for the loved ones of serving officers." },
  { title: "Crisis Assistance", icon: "alert-triangle", desc: "Immediate 24/7 help for urgent mental health crises." },
  { title: "Recovery Resources", icon: "activity", desc: "Long-term recovery plans and peer-to-peer networks." }
];

const DIRECTORY_ITEMS = [
  { title: "App Incubator", icon: "smartphone", tags: ["Development", "Tools"] },
  { title: "Find a MISPER", icon: "radar", tags: ["Operational", "Search"] },
  { title: "Books & Learning", icon: "library", tags: ["Education", "Reference"] },
  { title: "Reference Library", icon: "book-open", tags: ["Legal", "Reference"] },
  { title: "Hughes Guides", icon: "map", tags: ["Traffic", "Operational"] },
  { title: "Vehicle Check", icon: "car", tags: ["Operational", "Search"] },
  { title: "TOR Codes", icon: "file-text", tags: ["Traffic", "Reference"] },
  { title: "PND Codes", icon: "hash", tags: ["Crime", "Reference"] },
  { title: "What3Words", icon: "map-pin", tags: ["Location", "Tools"] }
];

const CHECKLIST_ITEMS = [
  { id: 1, title: "Welfare assessment completed", note: "Initial psychological wellbeing screening conducted." },
  { id: 2, title: "Mental health support reviewed", note: "Pathways to trauma support and counseling explained." },
  { id: 3, title: "Family support resources shared", note: "Contact details for family networks provided." },
  { id: 4, title: "Recovery pathway discussed", note: "Long-term occupational health plan outlined." },
  { id: 5, title: "Follow-up scheduled", note: "Date set for next welfare check-in." }
];

// Helper to render simple SVGs based on string name
const getIcon = (name: string) => {
  switch (name) {
    case 'file': return <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>;
    case 'heart': return <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />;
    case 'brain': return <><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-.08 2.5 2.5 0 0 0 2.58-3.32A2.5 2.5 0 0 0 21 14.5a2.5 2.5 0 0 0-1.74-2.38 2.5 2.5 0 0 0-1.2-4.14 2.5 2.5 0 0 0-2.42-3.1 2.5 2.5 0 0 0-2.9-2.73A2.5 2.5 0 0 0 9.5 2z" /><path d="M12 22V2" /></>;
    case 'book': return <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>;
    case 'graduation-cap': return <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>;
    case 'users': return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>;
    case 'alert-triangle': return <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>;
    case 'activity': return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />;
    case 'smartphone': return <><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>;
    case 'radar': return <><circle cx="12" cy="12" r="10" /><path d="M12 12l8-4" /><path d="M12 12V2" /></>;
    case 'library': return <><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14 2H6a2 2 0 0 0-2 2v4" /><polyline points="14 2 14 8 20 8" /><path d="M4 14h16M4 18h16" /></>;
    case 'book-open': return <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>;
    case 'map': return <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>;
    case 'car': return <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />;
    case 'file-text': return <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>;
    case 'hash': return <><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></>;
    case 'map-pin': return <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>;
    default: return <circle cx="12" cy="12" r="10" />;
  }
};

export default function PocketSergeantPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [expandedNote, setExpandedNote] = useState<number | null>(null);

  const filteredDirectory = DIRECTORY_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleChecklist = (id: number) => {
    setCompletedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round((completedItems.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <main className="pt-32 pb-24 bg-obsidian min-h-screen font-sans">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-azure mb-4">
            <span className="w-8 h-px bg-azure" />
            Official Partner
            <span className="w-8 h-px bg-azure" />
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-pure-white mb-6 uppercase tracking-wide">
            Pocket Sergeant Support Hub
          </h1>
          <p className="text-lg text-slate-light max-w-3xl mx-auto leading-relaxed">
            Integrating directly with Pocket Sergeant to help serving and retired police officers, staff, and families access essential welfare, operational, and mental health support resources quickly.
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Resource Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-pure-white mb-8 uppercase tracking-wider flex items-center gap-3">
            <span className="w-4 h-4 rounded-sm bg-azure/20 border border-azure inline-block" />
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCE_CATEGORIES.map((cat, i) => (
              <div 
                key={i} 
                className="group relative bg-navy/40 backdrop-blur-md border border-white/5 hover:border-azure/40 hover:bg-navy/60 rounded-2xl p-6 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="w-12 h-12 bg-azure/10 text-azure rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {getIcon(cat.icon)}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-pure-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-6">{cat.desc}</p>
                <div className="absolute bottom-6 right-6 text-azure opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Resource Directory */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <div className="bg-midnight/80 border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-azure/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 relative z-10">
              <div>
                <h2 className="text-2xl font-bold text-pure-white mb-2 uppercase tracking-wider">Resource Directory</h2>
                <p className="text-slate-light text-sm">Search the complete operational and welfare toolkit.</p>
              </div>
              <div className="relative w-full lg:w-80">
                <input 
                  type="text" 
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-obsidian/80 border border-white/10 rounded-full py-3 px-12 text-sm text-pure-white placeholder-slate-500 focus:outline-none focus:border-azure/50 transition-colors"
                />
                <svg className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {filteredDirectory.length > 0 ? filteredDirectory.map((item, i) => (
                <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl p-5 flex items-center gap-5 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-navy rounded-lg shadow-inner flex items-center justify-center text-azure shrink-0 group-hover:text-pure-white transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {getIcon(item.icon)}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pure-white font-bold text-sm mb-1">{item.title}</h3>
                    <div className="flex gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-obsidian/50 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-12 text-center text-slate-500">
                  No resources found matching &quot;{searchTerm}&quot;.
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Checklist Section */}
      <section className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-obsidian border border-white/10 rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-pure-white mb-2 uppercase tracking-wider flex items-center gap-3">
                  <svg className="text-azure w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>
                  Officer Welfare & Support Checklist
                </h2>
                <p className="text-slate-light text-sm">Ensure all critical support pathways have been offered.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-display font-black text-pure-white mb-1">{progressPercentage}%</div>
                <div className="text-xs text-azure uppercase tracking-wider font-bold">Completion Rate</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-white/5 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-azure to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Interactive Items */}
            <div className="space-y-4">
              {CHECKLIST_ITEMS.map((item) => {
                const isCompleted = completedItems.includes(item.id);
                const isExpanded = expandedNote === item.id;
                
                return (
                  <div 
                    key={item.id} 
                    className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                      isCompleted ? "bg-navy/20 border-azure/30" : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between p-4 sm:p-5 cursor-pointer" onClick={() => toggleChecklist(item.id)}>
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors shrink-0 ${
                          isCompleted ? "bg-azure border-azure text-obsidian" : "border-slate-500"
                        }`}>
                          {isCompleted && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                        </div>
                        <h3 className={`font-semibold text-sm sm:text-base transition-colors ${
                          isCompleted ? "text-pure-white line-through opacity-70" : "text-pure-white"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded hidden sm:inline-block ${
                          isCompleted ? "bg-azure/10 text-azure" : "bg-white/5 text-slate-400"
                        }`}>
                          {isCompleted ? "Completed" : "Pending"}
                        </span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setExpandedNote(isExpanded ? null : item.id); }}
                          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors"
                        >
                          <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                        </button>
                      </div>
                    </div>

                    {/* Expandable Notes Panel */}
                    <div className={`px-5 sm:px-14 overflow-hidden transition-all duration-300 bg-black/20 ${
                      isExpanded ? "max-h-40 py-4 border-t border-white/5" : "max-h-0"
                    }`}>
                      <p className="text-sm text-slate-light leading-relaxed">
                        <span className="font-bold text-azure mr-2">Notes:</span>
                        {item.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {progressPercentage === 100 && (
              <div className="mt-8 p-4 bg-azure/10 border border-azure/30 rounded-xl flex items-center justify-center gap-3 text-azure font-bold animate-pulse">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                All welfare checks completed.
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
