import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, CheckCircle, Smartphone, ShieldCheck, ArrowRight, TrendingUp, HelpCircle } from 'lucide-react';

export default function RoiCalculator() {
  const [rentAmount, setRentAmount] = useState<number>(6500);
  const [unitCount, setUnitCount] = useState<number>(3);

  const calculatedTotalRent = useMemo(() => rentAmount * unitCount, [rentAmount, unitCount]);
  const platformFee = useMemo(() => Math.round(calculatedTotalRent * 0.03), [calculatedTotalRent]);

  // Quick preset buttons for active units
  const presets = [1, 3, 5, 10, 25];

  return (
    <section id="pricing-calculator" className="py-24 bg-gradient-to-b from-[#FBF7F4] to-white border-b border-slate-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Soft decorative background glows */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#f36b2e]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-[#253c96]/5 blur-3xl pointer-events-none" />

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs font-bold tracking-widest text-[#253c96] uppercase bg-[#253c96]/5 px-4 py-1.5 rounded-full"
          >
            Zero Subscription Risk
          </motion.span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight mt-4 mb-6 leading-tight">
            Transparent <span className="text-[#f36b2e]">3% Calculator</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            We use <strong className="text-[#253c96] font-bold">PayShap</strong> to route tenant rent payments directly into your bank account. No middleman hold-ups. We invoice you for our 3% afterwards.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between relative group hover:border-[#253c96]/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#253c96]/10 flex items-center justify-center text-[#253c96]">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">Adjust Portfolio Settings</h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Drag the sliders to reflect your current rental inventory</p>
                </div>
              </div>

              {/* Slider 1: Average Rent Amount */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">
                    Average Rent per Unit
                  </span>
                  <span className="font-mono text-lg font-black text-[#253c96] bg-[#253c96]/5 py-1 px-3.5 rounded-xl border border-[#253c96]/10">
                    R {rentAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="25000"
                  step="250"
                  value={rentAmount}
                  onChange={(e) => setRentAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#253c96]"
                />
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mt-2">
                  <span>R 2,000</span>
                  <span>R 10,000</span>
                  <span>R 18,000</span>
                  <span>R 25,000</span>
                </div>
              </div>

              {/* Slider 2: Unit Count */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">
                    Active Units Count
                  </span>
                  <span className="font-mono text-lg font-black text-[#f36b2e] bg-[#f36b2e]/5 py-1 px-3.5 rounded-xl border border-[#f36b2e]/10">
                    {unitCount} {unitCount === 1 ? 'Unit' : 'Units'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={unitCount}
                  onChange={(e) => setUnitCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#f36b2e]"
                />
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mt-2">
                  <span>1 Unit</span>
                  <span>10 Units</span>
                  <span>25 Units</span>
                  <span>50 Units</span>
                </div>

                {/* Quick Presets */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Quick Presets:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {presets.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setUnitCount(val)}
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border cursor-pointer transition-all ${
                          unitCount === val
                            ? 'bg-[#f36b2e] border-[#f36b2e] text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {val} {val === 1 ? 'unit' : 'units'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How PayShap and Lantenn work step indicators */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <span className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-widest block mb-4">
                Mzansi direct cash flow process
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#253c96] text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">1</div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-900">Tenant Portal Pay</span>
                    <p className="text-[10px] text-slate-500 leading-normal font-sans">Tenant gets a WhatsApp link and pays rent instantly.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">2</div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">PayShap Direct</span>
                    <p className="text-[10px] text-slate-500 leading-normal font-sans">Rent hits your landlord bank account immediately.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#f36b2e] text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">3</div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-900">Lantenn 3% Bill</span>
                    <p className="text-[10px] text-slate-500 leading-normal font-sans">We request the 3% transaction fee afterward.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Calculations Summary Column */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            {/* Interactive decorative background shine */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-[#253c96]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#f36b2e]" />
                  <span className="font-display font-extrabold text-sm text-slate-100 uppercase tracking-wide">Expected Cash Flow</span>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold py-1 px-3 rounded-full uppercase animate-pulse">
                  ● PayShap Active
                </span>
              </div>

              {/* Financial metrics list */}
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Total Collected Rent
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-slate-100 tracking-tight">
                    R {calculatedTotalRent.toLocaleString()}
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl relative group-hover:border-emerald-500/40 transition-all duration-300">
                  <span className="block text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest mb-1">
                    Direct Landlord Settlement
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400">
                    R {calculatedTotalRent.toLocaleString()}
                  </div>
                  <span className="text-[9px] font-sans font-medium text-emerald-200 mt-1 block leading-tight">
                    &rarr; 100% of this settles straight into your bank account via PayShap.
                  </span>
                </div>

                <div className="bg-[#f36b2e]/10 border border-[#f36b2e]/30 p-4 rounded-2xl relative">
                  <span className="block text-[10px] font-mono font-bold text-[#f36b2e] uppercase tracking-widest mb-1">
                    Lantenn 3% Invoice Fee
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white">
                    R {platformFee.toLocaleString()}
                  </div>
                  <span className="text-[9px] font-sans font-medium text-slate-300 mt-1 block leading-tight">
                    &rarr; Billed afterward. You keep full control of your cash flow.
                  </span>
                </div>
              </div>

              {/* Core Protection badges */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No rent collected? You pay absolutely R0</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#f36b2e] shrink-0" />
                  <span>Free lease vaults, SMS alerts & photo repair loggers</span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="#planner-section"
                className="block w-full text-center bg-[#253c96] hover:bg-[#253c96]/90 text-white font-bold py-4 px-6 rounded-full text-sm transition-all duration-150 hover:shadow-lg active:scale-95 shadow-md shadow-slate-950/20"
              >
                Onboard Your First Tenant Free
              </a>
              <p className="text-[9px] font-mono text-center text-slate-400 mt-3">
                Setup takes 3 minutes • Instant POPIA & PAIA Compliance verified
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
