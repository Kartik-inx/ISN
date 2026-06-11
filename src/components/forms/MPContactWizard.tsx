"use client";

import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";

const templates = [
  {
    id: "general",
    title: "General Support",
    subject: "Urgent: Support Needed for Police Officer Welfare",
    content: "Dear [MP Name],\n\nI am writing to you as your constituent to raise an issue of urgent concern: the inadequate support and welfare provision for serving and retired police officers.\n\nOfficers protect our communities every day, often facing traumatic, high-pressure and emotionally demanding situations. Yet too many are left without the support they need when they struggle with their mental health.\n\nI am asking you to support calls for the government to mandate comprehensive mental health checks and reduce waiting times for specialist trauma therapy.\n\nI would be grateful if you could let me know what steps you are taking to support police officer wellbeing.\n\nYours sincerely,\n\n[Your Name]",
  },
  {
    id: "mental-health",
    title: "Mental Health Funding",
    subject: "Urgent: Ring-fenced Funding for Police Mental Health",
    content: "Dear [MP Name],\n\nAs your constituent, I am writing to ask for your support in securing ring-fenced funding specifically for police officer mental health services.\n\nThe current waiting times for occupational health and trauma therapy are unacceptable. Officers who experience trauma in the line of duty shouldn't have to wait months for specialist help or rely on charities to fill the gap.\n\nPlease raise this issue in Parliament and support the call for dedicated mental health funding for all forces.\n\nI look forward to hearing your views on this matter.\n\nYours sincerely,\n\n[Your Name]",
  },
  {
    id: "family",
    title: "Family Support",
    subject: "Urgent: Support for Police Families",
    content: "Dear [MP Name],\n\nI am writing to you regarding the often-forgotten victims of the policing crisis: the families of police officers.\n\nFamilies bear the secondary trauma, the unpredictable shifts, and the emotional withdrawal when officers struggle, yet they receive almost no formal support or recognition from forces.\n\nI am asking you to back the demand for comprehensive family support programmes to be built into every police force's welfare provision.\n\nPlease let me know if you will support this initiative.\n\nYours sincerely,\n\n[Your Name]",
  }
];

export default function MPContactWizard() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);
  const [letterContent, setLetterContent] = useState(templates[0].content);
  const [letterSubject, setLetterSubject] = useState(templates[0].subject);
  
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    postcode: "",
    mpName: "Jane Smith MP", // Mock MP name based on postcode
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleTemplateChange = (id: string) => {
    const template = templates.find((t) => t.id === id);
    if (template) {
      setSelectedTemplate(id);
      
      // Keep user's name if they've entered it
      const personalizedContent = template.content.replace(
        "[Your Name]", 
        personalDetails.name || "[Your Name]"
      ).replace(
        "[MP Name]",
        personalDetails.postcode ? personalDetails.mpName : "[MP Name]"
      );
      
      setLetterContent(personalizedContent);
      setLetterSubject(template.subject);
    }
  };

  const handlePersonalDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    
    if (name === "name") {
      setLetterContent(prev => {
        // Simple replace, in a real app we'd use a more robust templating approach
        return prev.replace(/Yours sincerely,\n\n.*/, `Yours sincerely,\n\n${value || "[Your Name]"}`);
      });
    }
  };

  const findMP = () => {
    // In a real app, this would call an API (e.g. TheyWorkForYou)
    if (personalDetails.postcode.trim().length > 4) {
      setPersonalDetails(prev => ({ ...prev, mpName: "Jane Smith MP" }));
      setLetterContent(prev => prev.replace(/\[MP Name\]/, "Jane Smith MP"));
    }
  };

  const handleSend = () => {
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1500);
  };

  if (isSent) {
    return (
      <div className="bg-navy/40 border border-white/5 rounded-3xl p-10 text-center">
        <div className="w-20 h-20 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl font-display font-bold text-pure-white mb-4">Letter Sent!</h2>
        <p className="text-slate-light mb-8 max-w-lg mx-auto">
          Thank you for taking action. Your message has been sent to your MP. We&apos;ve also sent a copy to your email address for your records.
        </p>
        <button onClick={() => { setStep(1); setIsSent(false); }} className="btn-outline">
          Send another letter
        </button>
      </div>
    );
  }

  return (
    <div className="bg-navy/30 border border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-midnight/50">
      {/* Progress Bar */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-navy/50">
        {[
          { num: 1, label: "Find MP" },
          { num: 2, label: "Choose Letter" },
          { num: 3, label: "Personalise & Send" },
        ].map((s) => (
          <div key={s.num} className={`flex items-center gap-3 ${step === s.num ? "opacity-100" : "opacity-40"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= s.num ? "bg-azure text-white" : "bg-white/10 text-slate"
            }`}>
              {s.num}
            </div>
            <span className={`text-sm font-semibold hidden md:block ${
              step >= s.num ? "text-pure-white" : "text-slate"
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="p-8 md:p-12">
        {step === 1 && (
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-2">Find Your MP</h2>
            <p className="text-sm text-slate-light mb-8">Enter your postcode to find your local Member of Parliament.</p>
            
            <div className="flex gap-4 max-w-md">
              <input
                type="text"
                name="postcode"
                value={personalDetails.postcode}
                onChange={handlePersonalDetailsChange}
                placeholder="e.g. SW1A 0AA"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-azure/50 transition-colors uppercase"
              />
              <button 
                onClick={() => { findMP(); setStep(2); }}
                disabled={personalDetails.postcode.trim().length < 4}
                className="btn-primary px-6 disabled:opacity-50"
              >
                Find MP
              </button>
            </div>
            
            <p className="text-xs text-slate mt-4">
              Your details are not saved or shared with anyone else.
            </p>
          </ScrollReveal>
        )}

        {step === 2 && (
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-pure-white mb-2">Choose a Template</h2>
            <p className="text-sm text-slate-light mb-8">Select the issue you&apos;d like to write to {personalDetails.mpName} about.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {templates.map((t) => (
                <div 
                  key={t.id}
                  onClick={() => handleTemplateChange(t.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    selectedTemplate === t.id 
                      ? "bg-azure/10 border-azure shadow-[0_0_20px_rgba(56,189,248,0.15)]" 
                      : "bg-white/5 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-pure-white">{t.title}</h3>
                    {selectedTemplate === t.id && (
                      <div className="w-5 h-5 rounded-full bg-azure flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-light line-clamp-3">
                    {t.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
              <button onClick={() => setStep(1)} className="text-slate hover:text-white text-sm font-medium transition-colors">
                ← Back
              </button>
              <button onClick={() => setStep(3)} className="btn-primary px-8 py-3">
                Continue to Personalise
              </button>
            </div>
          </ScrollReveal>
        )}

        {step === 3 && (
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-pure-white mb-2">Personalise Letter</h2>
                <p className="text-sm text-slate-light mb-8">Adding a personal message makes your letter much more effective.</p>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={personalDetails.name}
                      onChange={handlePersonalDetailsChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-azure/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={personalDetails.email}
                      onChange={handlePersonalDetailsChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-azure/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">Letter Subject</label>
                    <input
                      type="text"
                      value={letterSubject}
                      onChange={(e) => setLetterSubject(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-azure/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">Letter Content</label>
                    <textarea
                      rows={12}
                      value={letterContent}
                      onChange={(e) => setLetterContent(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-pure-white focus:outline-none focus:border-azure/50 resize-y font-mono leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl relative">
                <div className="absolute top-4 right-4 text-xs font-bold uppercase text-slate-400 tracking-widest">
                  Preview
                </div>
                <div className="mb-8 pb-6 border-b border-slate-200">
                  <p className="font-bold text-lg mb-1">{personalDetails.mpName}</p>
                  <p className="text-sm text-slate-600">House of Commons</p>
                  <p className="text-sm text-slate-600">London</p>
                  <p className="text-sm text-slate-600">SW1A 0AA</p>
                </div>
                
                <div className="font-serif text-sm leading-relaxed whitespace-pre-wrap">
                  {letterContent}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10 pt-8 border-t border-white/5">
              <button onClick={() => setStep(2)} className="text-slate hover:text-white text-sm font-medium transition-colors">
                ← Back
              </button>
              <button 
                onClick={handleSend} 
                disabled={isSending || !personalDetails.name || !personalDetails.email}
                className="btn-primary px-10 py-4 shadow-lg shadow-azure/20 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Letter to MP"}
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
