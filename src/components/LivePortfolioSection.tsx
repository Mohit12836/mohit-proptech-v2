"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ExternalLink, CheckCircle2, Sparkles, Layout, Smartphone, ArrowRight } from "lucide-react";

export default function LivePortfolioSection() {
  const themeVariants = [
    { num: 1, name: "Luxury Gold", tag: "Premium Broker" },
    { num: 2, name: "Emerald Green", tag: "Township Developer" },
    { num: 3, name: "Modern Minimal", tag: "Modern Consultant" },
    { num: 4, name: "Dark Obsidian", tag: "High-Rise Luxury" },
    { num: 5, name: "Royal Burgundy", tag: "Elite Estates" },
    { num: 6, name: "Slate Blue", tag: "Corporate Agency" },
    { num: 7, name: "High Contrast", tag: "Fast Conversions" },
    { num: 8, name: "Warm Sandstone", tag: "Residential Plots" },
    { num: 9, name: "Midnight Titanium", tag: "Commercial Retail" },
    { num: 10, name: "Clean Executive", tag: "Investor Portal" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#F7F8F6] border-t border-[#E5E7EB] text-[#182B3C] relative">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/10 border border-[#12786F]/25 text-[#12786F] text-xs font-bold tracking-wider uppercase">
            Live Proven Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182B3C] tracking-tight">
            Explore Our Live <span className="text-[#12786F]">Real Estate Deployments</span>
          </h2>
          <p className="text-[#526475] text-base sm:text-lg font-normal leading-relaxed">
            कागज़ी वादों पर नहीं, लाइव रिजल्ट्स पर भरोसा करें। हमारे द्वारा बनाई और डिप्लॉय की गई लाइव वेबसाइट्स को खुद टेस्ट करें।
          </p>
        </div>

        {/* Live Case Studies Cards (Anu Krupa Laser Running Light Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Samriddhi Classic */}
          <div className="laser-card-light p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  Flagship Real Estate Broker Portal
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#12786F]/15 text-[#12786F] border border-[#12786F]/25 font-black">
                  ● 100% Live
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#182B3C]">
                  Samriddhi Properties – Digital Broker Platform
                </h3>
                <p className="text-sm sm:text-base text-[#526475] mt-2 leading-relaxed font-normal">
                  A complete, end-to-end commercial real estate broker portal built with modern Next.js, featuring EMI calculator, colony filtering, verified property badges, and 1-tap WhatsApp site visit booking.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                  Live System Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>Real-Time EMI Calculator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>Colony / Road Width Filtering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>WhatsApp 1-Click Site Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>100% Fluid Mobile Auto-Fit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href="https://samriddhi-property-broker-cxj1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl btn-gold-original text-sm font-black shadow-lg"
              >
                <span>Open Live Broker Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 2: Samriddhi 10-Theme Master Engine */}
          <div className="laser-card-light p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  PropTech Multi-Theme Engine
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 border border-amber-500/30 font-black">
                  ● 10 Live Themes
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#182B3C]">
                  10-Theme Real Estate Design System
                </h3>
                <p className="text-sm sm:text-base text-[#526475] mt-2 leading-relaxed font-normal">
                  An enterprise real estate design engine providing 10 ready-to-deploy visual themes (Luxury Gold, Emerald Green, Dark Obsidian, Modern Minimal, Royal Burgundy, etc.) for any agency brand.
                </p>
              </div>

              {/* Theme Pills */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                  Selectable Visual Themes:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {themeVariants.map((t) => (
                    <a
                      key={t.num}
                      href={`https://samriddhi-property-redesign.vercel.app/?design=${t.num}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F1F5F9] hover:bg-[#12786F] hover:text-white border border-[#E2E8F0] text-[#334155] transition-colors"
                    >
                      Theme {t.num}: {t.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href="https://samriddhi-property-redesign.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl btn-emerald-original text-sm font-black shadow-lg"
              >
                <span>Launch 10-Theme Live Switcher</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
