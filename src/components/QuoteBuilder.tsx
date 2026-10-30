"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

export default function QuoteBuilder() {
  const [businessType, setBusinessType] = useState<string>("Property Broker / Consultant");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Real Estate Website Solutions",
    "AI & Official WhatsApp Automation"
  ]);
  const [timeline, setTimeline] = useState<string>("Standard (3 - 5 Days)");

  const businessTypes = [
    { title: "Property Broker / Consultant", desc: "Local dealer, individual agent, or consultant" },
    { title: "Builder & Developer", desc: "Township, plots colony, or high-rise builder" },
    { title: "Real Estate Agency", desc: "Firm with 5+ sales agents and multiple projects" },
    { title: "Rental & Commercial", desc: "Leasing agency or commercial high-street retail" },
  ];

  const serviceOptions = [
    { id: "Real Estate Website Solutions", name: "Real Estate Website (10 Themes)", baseMin: 18000, baseMax: 35000, category: "Web" },
    { id: "Real Estate Lead Management CRM", name: "Real Estate Lead CRM (Pipeline)", baseMin: 25000, baseMax: 45000, category: "Software" },
    { id: "Real Estate ERP & Inventory Software", name: "Builder ERP & Inventory System", baseMin: 45000, baseMax: 80000, category: "ERP" },
    { id: "Custom Real Estate Mobile Apps", name: "Android / iOS Mobile App", baseMin: 40000, baseMax: 75000, category: "Mobile" },
    { id: "AI & Official WhatsApp Automation", name: "WhatsApp Cloud API + AI Bot", baseMin: 15000, baseMax: 28000, category: "AI" },
    { id: "Real Estate Digital Ads & Lead Generation", name: "Google & Meta Lead Ads Setup", baseMin: 12000, baseMax: 22000, category: "Ads" },
    { id: "Real Estate Branding & Project Creatives", name: "Project Brochures & 3D Creatives", baseMin: 10000, baseMax: 25000, category: "Design" },
    { id: "Tech Integrations & Annual Support", name: "Cloud Hosting & Priority Support", baseMin: 8000, baseMax: 15000, category: "Infra" },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Calculate live estimate
  const activeItems = serviceOptions.filter((s) => selectedServices.includes(s.id));
  const totalMin = activeItems.reduce((acc, curr) => acc + curr.baseMin, 0);
  const totalMax = activeItems.reduce((acc, curr) => acc + curr.baseMax, 0);

  // WhatsApp pre-formatted string
  const waQuoteText = `Namaste Mohit ji! I used your PropTech Quote Calculator on your website:
🏢 Business Type: ${businessType}
📦 Selected Solutions:
${selectedServices.map((s, idx) => `  ${idx + 1}. ${s}`).join("\n")}
⏱ Timeline Preference: ${timeline}
💰 Estimated Budget: ₹${totalMin.toLocaleString("en-IN")} - ₹${totalMax.toLocaleString("en-IN")}

Please confirm availability and share next steps.`;

  const waUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(waQuoteText)}`;

  return (
    <section id="quote-builder" className="py-24 bg-[#E9F0F3] border-t border-[#D5E2E8] text-[#182B3C] relative">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/10 border border-[#12786F]/25 text-[#12786F] text-xs font-bold tracking-wider uppercase">
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182B3C] tracking-tight">
            Interactive <span className="text-[#12786F]">Smart Quote Builder</span>
          </h2>
          <p className="text-[#526475] text-base sm:text-lg font-normal leading-relaxed">
            अपनी जरूरत के हिसाब से सिस्टम कस्टमाइज़ करें। तुरंत अनुमानित बजट देखें और सीधे WhatsApp पर वन-क्लिक प्रपोज़ल प्राप्त करें।
          </p>
        </div>

        {/* Builder Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Selections (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Business Type */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-[#182B3C] uppercase tracking-wider block">
                STEP 1: आपका बिज़नेस मॉडल क्या है?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {businessTypes.map((bt) => (
                  <button
                    key={bt.title}
                    onClick={() => setBusinessType(bt.title)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      businessType === bt.title
                        ? "bg-white border-2 border-[#12786F] shadow-md shadow-[#12786F]/10 ring-1 ring-[#12786F]"
                        : "bg-white/90 border-[#CBD5E1] hover:border-[#12786F]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-[#182B3C]">{bt.title}</span>
                      {businessType === bt.title && (
                        <CheckCircle2 className="w-5 h-5 text-[#12786F]" />
                      )}
                    </div>
                    <p className="text-xs text-[#526475] font-normal">{bt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Solutions */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-[#182B3C] uppercase tracking-wider block">
                STEP 2: आपको किन समाधानों की आवश्यकता है? (Select Multiple)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((serv) => {
                  const isChecked = selectedServices.includes(serv.id);
                  return (
                    <button
                      key={serv.id}
                      onClick={() => toggleService(serv.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                        isChecked
                          ? "bg-white border-2 border-[#12786F] shadow-md ring-1 ring-[#12786F]"
                          : "bg-white/80 border-[#CBD5E1] hover:border-[#94A3B8]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-bold text-xs sm:text-sm text-[#182B3C]">
                          {serv.name}
                        </div>
                        <div className="text-[11px] font-black text-amber-600">
                          ₹{serv.baseMin.toLocaleString("en-IN")} – ₹{serv.baseMax.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? "bg-[#12786F] text-white" : "border border-[#94A3B8]"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Timeline */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-[#182B3C] uppercase tracking-wider block">
                STEP 3: डिप्लॉयमेंट टाइमलाइन प्राथमिकता
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Express Launch (3 Days)", val: "Express (3 Days)" },
                  { label: "Standard (3 - 5 Days)", val: "Standard (3 - 5 Days)" },
                  { label: "Phased Deployment (7+ Days)", val: "Phased (7+ Days)" },
                ].map((t) => (
                  <button
                    key={t.val}
                    onClick={() => setTimeline(t.val)}
                    className={`py-3 px-4 rounded-xl border text-center text-xs font-bold transition-all ${
                      timeline === t.val
                        ? "bg-[#12786F] text-white border-[#12786F] shadow-md shadow-[#12786F]/20"
                        : "bg-white text-[#182B3C] border-[#CBD5E1] hover:border-[#12786F]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Card with Anu Krupa Laser Border */}
          <div className="laser-card-light p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  LIVE ESTIMATE
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#12786F]/10 text-[#12786F] font-bold">
                  Zero Lock-in
                </span>
              </div>

              <div>
                <div className="text-xs text-[#526475] font-bold uppercase tracking-wide">Estimated Investment:</div>
                <div className="text-3xl sm:text-4xl font-black text-[#182B3C] tracking-tight mt-1">
                  ₹{totalMin.toLocaleString("en-IN")} – ₹{totalMax.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-[#526475] mt-1 font-medium">
                  * अंतिम कीमत आपकी सटीक कस्टम आवश्यकताओं पर निर्भर करेगी।
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm border-t border-[#E2E8F0] pt-4">
                <div className="flex justify-between text-[#334155]">
                  <span className="text-[#526475] font-medium">Target Business:</span>
                  <span className="font-bold text-[#182B3C] text-right">{businessType}</span>
                </div>
                <div className="flex justify-between text-[#334155]">
                  <span className="text-[#526475] font-medium">Total Solutions Selected:</span>
                  <span className="font-black text-[#12786F]">{selectedServices.length} Modules</span>
                </div>
                <div className="flex justify-between text-[#334155]">
                  <span className="text-[#526475] font-medium">Delivery Target:</span>
                  <span className="font-bold text-[#182B3C]">{timeline}</span>
                </div>
                <div className="flex justify-between text-[#334155]">
                  <span className="text-[#526475] font-medium">Source Code:</span>
                  <span className="font-black text-amber-600">100% Client Ownership</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-2">
                <div className="font-bold text-[#182B3C] flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#12786F]" /> All Packages Include:
                </div>
                <ul className="space-y-1.5 text-[#526475] font-medium text-xs">
                  <li>✓ 1-Year Fast Cloud Hosting & SSL</li>
                  <li>✓ Official WhatsApp Cloud API Integration</li>
                  <li>✓ Full Staff Onboarding & Handover Training</li>
                  <li>✓ Direct WhatsApp Priority Support</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl btn-gold-original text-sm font-black shadow-xl"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Send This Quote to Mohit on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-xs text-center text-[#526475] font-medium">
                सीधे मोहित पी जैन के साथ 15-मिनट स्ट्रैटेजी कॉल फ्री में बुक करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
