import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Sliders, TrendingUp, DollarSign, Clock, Check, Info } from 'lucide-react';

type ProjectScope = 'small' | 'medium' | 'large';

export default function RoiCalculator() {
  const [scope, setScope] = useState<ProjectScope>('medium');
  const [hourlyRate, setHourlyRate] = useState<number>(750);
  const [devCount, setDevCount] = useState<number>(2);
  const [inHouseMonths, setInHouseMonths] = useState<number>(4);

  const scopeData = {
    small: {
      lantennCost: 180000,
      lantennWeeks: 5,
      title: 'Standard MVP',
      desc: 'Authentication, landing, simple database schema, local payments (Yoco/PayFast) integration, responsive frontend.'
    },
    medium: {
      lantennCost: 350000,
      lantennWeeks: 8,
      title: 'Full Product Launch',
      desc: 'Complex workflows, external API integrations, multi-role user schemas, detailed analytical graphs.'
    },
    large: {
      lantennCost: 550000,
      lantennWeeks: 12,
      title: 'Enterprise-Grade Scale',
      desc: 'Multi-tenant schemas, real-time collaboration canvas, LLM/vector search pipeline, premium scaling SLA.'
    }
  };

  const calculations = useMemo(() => {
    // 160 hours per developer per month
    const hoursPerMonth = 160;
    const traditionalCost = hourlyRate * devCount * inHouseMonths * hoursPerMonth;
    const lantennCost = scopeData[scope].lantennCost;
    const savingsCost = Math.max(0, traditionalCost - lantennCost);

    const traditionalWeeks = Math.round(inHouseMonths * 4.3);
    const lantennWeeks = scopeData[scope].lantennWeeks;
    const timeSavedWeeks = Math.max(0, traditionalWeeks - lantennWeeks);

    const roiPercentage = traditionalCost > 0 ? Math.round((savingsCost / lantennCost) * 100) : 0;

    return {
      traditionalCost,
      lantennCost,
      savingsCost,
      traditionalWeeks,
      lantennWeeks,
      timeSavedWeeks,
      roiPercentage
    };
  }, [scope, hourlyRate, devCount, inHouseMonths]);

  return (
    <section id="roi-estimator" className="py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
            Mzansi Math
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6">
            Lekker Cost & ROI Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Building in-house or with bloated traditional agencies is slow and extremely expensive. See how Lantenn saves you hundreds of hours and millions in ZAR burn.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Inputs Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            <div className="flex items-center gap-2 mb-8">
              <Sliders className="w-5.5 h-5.5 text-slate-800" />
              <h3 className="font-display font-bold text-lg text-slate-900">Configure Your Current Building Model</h3>
            </div>

            {/* Step 1: Scope Selector */}
            <div className="mb-8">
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Project Scope & Complexity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['small', 'medium', 'large'] as ProjectScope[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setScope(s)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      scope === s
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/10'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block font-bold text-sm tracking-tight">{scopeData[s].title}</span>
                    <span className="block font-mono text-[10px] mt-1 opacity-75">
                      {s === 'small' ? '5 Weeks' : s === 'medium' ? '8 Weeks' : '12 Weeks'}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 font-sans leading-relaxed flex items-start gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong>Scope Focus:</strong> {scopeData[scope].desc}</span>
              </p>
            </div>

            {/* Step 2: Slider inputs */}
            <div className="space-y-6">
              {/* Slider 1: Hourly rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    2. In-House Hourly Developer Rate (ZAR)
                  </label>
                  <span className="font-mono text-sm font-extrabold text-slate-800">R{hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1500"
                  step="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mt-1">
                  <span>R300/hr</span>
                  <span>R750/hr (Avg)</span>
                  <span>R1500/hr</span>
                </div>
              </div>

              {/* Slider 2: Dev count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    3. Estimated Team size
                  </label>
                  <span className="font-mono text-sm font-extrabold text-slate-800">{devCount} Developer{devCount > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={devCount}
                  onChange={(e) => setDevCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mt-1">
                  <span>1 Builder</span>
                  <span>2 Builders (Std)</span>
                  <span>4 Builders</span>
                </div>
              </div>

              {/* Slider 3: Months */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    4. In-House Estimated Timeline
                  </label>
                  <span className="font-mono text-sm font-extrabold text-slate-800">{inHouseMonths} Month{inHouseMonths > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={inHouseMonths}
                  onChange={(e) => setInHouseMonths(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 mt-1">
                  <span>1 Mo</span>
                  <span>4 Mo (Avg. MVP)</span>
                  <span>8 Mo</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Results Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                <TrendingUp className="w-5.5 h-5.5 text-emerald-400" />
                <h3 className="font-display font-extrabold text-lg">Lantenn Partnership Summary</h3>
              </div>

              {/* Financial comparison metrics */}
              <div className="space-y-6 mb-8">
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Traditional Build Estimated Budget
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-black text-slate-300 line-through decoration-rose-500/80 decoration-3">
                    R{calculations.traditionalCost.toLocaleString()}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Lantenn Fixed Investment
                  </span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                    R{calculations.lantennCost.toLocaleString()}
                  </span>
                </div>

                {/* Savings box */}
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                  <span className="block text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-wider">
                    Net Savings
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-display font-black text-emerald-400">
                      R{calculations.savingsCost.toLocaleString()}
                    </span>
                    {calculations.roiPercentage > 0 && (
                      <span className="text-xs font-mono font-bold text-emerald-300">
                        ({calculations.roiPercentage}% Saved)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline speed gains */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Speed Saved
                  </span>
                  <span className="text-lg font-display font-bold text-emerald-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    {calculations.timeSavedWeeks} Weeks
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Deliver Guarantee
                  </span>
                  <span className="text-lg font-display font-bold text-white flex items-center gap-1.5">
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    {calculations.lantennWeeks} Weeks
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans">
                Our timeline represents actual historic deliverables, built by senior product architects with clean source transfer.
              </p>
              <a
                href="#planner-section"
                className="block w-full text-center bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-6 rounded-full text-sm transition-all duration-150"
              >
                Claim This Rate & Savings
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
