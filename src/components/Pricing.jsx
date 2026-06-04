"use client";

import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    "Daily AI match brief (top 5)",
    "Verified salary bands",
    "Company insight dashboards",
    "1-click apply, unlimited"
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#5B4CFF] text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#5B4CFF] rounded-sm"></span> PRICING <span className="w-1.5 h-1.5 bg-[#5B4CFF] rounded-sm"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Pay for the leverage,<br />not the listings
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[#1A1A1E] rounded-full p-1 border border-white/5">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly <span className="bg-[#5B4CFF] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">25%</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          
          {/* Starter */}
          <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-pink-400">♔</div>
                <h3 className="text-lg font-medium">Starter</h3>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">$0</span><span className="text-xs text-gray-500"> /month</span>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-6">Start building your insights hub:</p>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#1A1A1E] hover:bg-[#25252b] text-white text-sm font-medium py-3 rounded-xl transition-colors flex items-center justify-between px-6 border border-white/5">
              Choose This Plan <span>→</span>
            </button>
          </div>

          {/* Growth */}
          <div className="bg-[#0A0A0C] border border-gray-600 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-2">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-purple-400">📈</div>
                <h3 className="text-lg font-medium">Growth</h3>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">${isYearly ? '12' : '17'}</span><span className="text-xs text-gray-500"> /month</span>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-6">Start building your insights hub:</p>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white hover:bg-gray-200 text-black text-sm font-medium py-3 rounded-xl transition-colors flex items-center justify-between px-6">
              Choose This Plan <span>→</span>
            </button>
          </div>

          {/* Premium */}
          <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-pink-500">⚡</div>
                <h3 className="text-lg font-medium">Premium</h3>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">${isYearly ? '75' : '99'}</span><span className="text-xs text-gray-500"> /month</span>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-6">Start building your insights hub:</p>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-400"><span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> Everything in Pro</li>
              <li className="flex items-start gap-3 text-sm text-gray-400"><span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> Multi-profile career portfolios</li>
              <li className="flex items-start gap-3 text-sm text-gray-400"><span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> Shared talent rooms</li>
              <li className="flex items-start gap-3 text-sm text-gray-400"><span className="bg-white/10 rounded flex items-center justify-center w-5 h-5 text-white text-xs mt-0.5">+</span> Recruiter view (read-only)</li>
            </ul>
            <button className="w-full bg-[#1A1A1E] hover:bg-[#25252b] text-white text-sm font-medium py-3 rounded-xl transition-colors flex items-center justify-between px-6 border border-white/5">
              Choose This Plan <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}