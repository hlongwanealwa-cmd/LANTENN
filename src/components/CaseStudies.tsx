import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { Layers, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'MVP', 'Fintech', 'AI/ML', 'Enterprise'];

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="py-24 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
              Kasi Track Record
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-4">
              Our work speaks in flavor & metrics
            </h2>
            <p className="text-slate-600 font-sans leading-relaxed">
              We design and ship high-retention software products. Explore detailed client launch success stories across key verticals in South Africa and globally.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 border border-slate-200 p-1.5 rounded-full self-start md:self-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4.5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group border border-slate-200 rounded-3xl overflow-hidden bg-slate-50/40 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/30 flex flex-col justify-between"
              >
                {/* Visual Header Image */}
                <div className="relative overflow-hidden aspect-video border-b border-slate-200/70">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] font-extrabold tracking-wider uppercase text-slate-900 bg-white/95 backdrop-blur-sm border border-slate-200/50 px-2.5 py-1 rounded-full shadow-sm">
                    {study.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      {study.client}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-3 group-hover:text-indigo-950 flex items-center justify-between">
                      {study.title}
                      <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-700 transition-colors shrink-0 ml-2" />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                      {study.description}
                    </p>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-4 bg-white border border-slate-150 p-4 rounded-2xl shadow-sm">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col border-r last:border-r-0 border-slate-100 pr-2">
                        <span className="text-[9px] font-mono font-bold uppercase text-slate-400 leading-none">
                          {metric.label}
                        </span>
                        <span className="font-display font-extrabold text-lg sm:text-xl text-emerald-900 mt-1">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
