import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, Cpu, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: Zap,
  Sparkles: Sparkles,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cardTabs, setCardTabs] = useState<Record<string, 'overview' | 'deliverables'>>({
    'rent-collection': 'overview',
    'tenant-lease': 'overview',
    'arrears-ledger': 'overview',
    'photo-maintenance': 'overview',
  });

  const handleTabChange = (serviceId: string, tab: 'overview' | 'deliverables') => {
    setCardTabs(prev => ({
      ...prev,
      [serviceId]: tab
    }));
  };

  // Subtle staggered Framer Motion animation container variants for Services grid items
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Framer Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-mono text-xs font-bold tracking-widest text-[#253c96] uppercase bg-[#253c96]/5 px-4 py-1.5 rounded-full">
            Core Features
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight mt-4 mb-6 leading-tight">
            Everything you need in one simple platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Ditch the WhatsApp groups, paper receipts, and spreadsheet headaches. We help small and medium-sized landlords master their rent cycles with zero effort.
          </p>
        </motion.div>

        {/* Services Grid with staggered entrance animations */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.icon] || Zap;
            const activeTab = cardTabs[service.id] || 'overview';

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.015, y: -4 }}
                className="group relative border border-slate-200 bg-[#FBF7F4]/40 hover:bg-white p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/20 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#253c96] text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 text-[#f36b2e]" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-extrabold text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#f36b2e] transition-colors">
                    {service.title}
                  </h3>

                  {/* Micro tab switcher on card */}
                  <div className="flex border-b border-slate-200/60 mb-5 text-xs font-mono font-bold">
                    <button
                      onClick={() => handleTabChange(service.id, 'overview')}
                      className={`pb-2.5 pr-4 transition-colors relative cursor-pointer ${
                        activeTab === 'overview' ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      Overview
                      {activeTab === 'overview' && (
                        <div className="absolute bottom-0 left-0 right-4 h-0.5 bg-[#f36b2e]" />
                      )}
                    </button>
                    <button
                      onClick={() => handleTabChange(service.id, 'deliverables')}
                      className={`pb-2.5 px-4 transition-colors relative cursor-pointer ${
                        activeTab === 'deliverables' ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      Key Details ({service.details.length})
                      {activeTab === 'deliverables' && (
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f36b2e]" />
                      )}
                    </button>
                  </div>

                  {/* Interactive Card Body Container */}
                  <div className="min-h-[120px]">
                    {activeTab === 'overview' ? (
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    ) : (
                      <ul className="space-y-2.5">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <span className="w-5 h-5 rounded-full bg-[#253c96]/10 text-[#253c96] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </span>
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Secure POPIA Compliant System</span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:text-[#f36b2e] transition-colors cursor-pointer group/btn"
                  >
                    View Specs
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Spec Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#FBF7F4] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#253c96] text-white flex items-center justify-center rounded-xl">
                    {React.createElement(IconMap[selectedService.icon] || Zap, { className: 'w-5 h-5 text-[#f36b2e]' })}
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#1A1A1A]">
                    {selectedService.title} Features
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-mono font-bold text-slate-500 hover:text-slate-800 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 font-sans text-sm text-slate-600 leading-relaxed">
                <p>{selectedService.description}</p>
                <div className="bg-white rounded-2xl p-4 border border-slate-200/50">
                  <h5 className="font-bold text-slate-800 mb-2.5">System Performance Specs:</h5>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold font-mono text-slate-500">
                    <li>• SECURE LOCAL PAYMENTS</li>
                    <li>• ZERO BASE SUBSCRIPTION</li>
                    <li>• SMS & WHATSAPP NOTIFICATIONS</li>
                    <li>• PHOTO UPLOADS FOR REPAIRS</li>
                    <li>• POPIA COMPLIANT DATA</li>
                    <li>• REAL-TIME FINANCIAL LEDGER</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <h5 className="font-bold text-slate-800 mb-2">Key system highlights:</h5>
                  <ul className="space-y-1.5">
                    {selectedService.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f36b2e]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-[#253c96] hover:bg-[#253c96]/90 text-white font-semibold py-2.5 px-6 rounded-full text-xs transition-colors cursor-pointer"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
