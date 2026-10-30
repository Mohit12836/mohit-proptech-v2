"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, Zap, Layers, Calculator, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I saw your PropTech agency website and want to discuss digital solutions for my real estate business."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#14283F] text-white">
      {/* Refined Radial Lighting & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,75,120,0.5)_0%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3554] border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>MOHIT P JAIN • REAL ESTATE PROPTECH SPECIALIST</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18]">
            Everything Your Real Estate Business Needs.{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent block mt-1">
              One Digital Partner.
            </span>
          </h1>

          {/* Hindi & English Value Proposition */}
          <p className="text-base sm:text-xl text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed font-normal">
            हम प्रॉपर्टी कारोबार को डिजिटल बनाते हैं — हाई-कन्वर्जन{" "}
            <span className="text-amber-300 font-bold">वेबसाइट्स</span>, स्मार्ट{" "}
            <span className="text-amber-300 font-bold">CRM</span>, बिल्डर{" "}
            <span className="text-amber-300 font-bold">ERP</span>, मोबाइल ऐप और 24/7{" "}
            <span className="text-emerald-400 font-bold">AI WhatsApp सेल्स ऑटोमेशन</span>।
          </p>

          <p className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wide bg-[#1B3554]/80 border border-white/15 py-1.5 px-4 rounded-xl inline-block shadow-sm">
            Designed specifically for Property Dealers, Brokers, Builders & Township Developers.
          </p>

          {/* Primary Action Buttons (Original 24K Gold & Emerald Gradients) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <a
              href="#quote-builder"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl btn-gold-original text-sm sm:text-base font-black shadow-xl"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl btn-emerald-original text-sm sm:text-base font-black shadow-xl"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Mohit Directly</span>
            </a>

            <a
              href="#demos"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#14283F] hover:bg-[#1B3554] border border-white/20 text-slate-100 hover:text-white font-bold text-sm transition-all btn-tactile shadow-md"
            >
              <PlayCircle className="w-4 h-4 text-amber-400" />
              <span>See Software Demos</span>
            </a>
          </div>

          {/* Quick Pillar Bullets (Anu Krupa Laser Running Light Cards) */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto">
            {AGENCY_CONFIG.heroStats.map((stat, i) => (
              <div
                key={i}
                className="laser-card-navy p-4 rounded-xl text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white">{stat.label}</div>
                <div className="text-[10px] text-slate-300 uppercase font-semibold tracking-wider">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5 bg-[#1B3554]/70 px-3.5 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Code & Database Ownership
            </span>
            <span className="flex items-center gap-1.5 bg-[#1B3554]/70 px-3.5 py-1.5 rounded-full border border-white/15">
              <Zap className="w-4 h-4 text-amber-400" /> 3-5 Days Turnaround Time
            </span>
            <span className="flex items-center gap-1.5 bg-[#1B3554]/70 px-3.5 py-1.5 rounded-full border border-white/15">
              <Layers className="w-4 h-4 text-sky-400" /> Zero Monthly Locked Hostage Fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
