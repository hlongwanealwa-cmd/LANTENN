import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Process', 'Ownership'];

  const filteredFaqs = activeTab === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeTab);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#19244e] uppercase bg-[#19244e]/5 px-4 py-1.5 rounded-full">
            Any Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Got specific questions about rent payments, secure tenant logs, or the 3% transaction fee model? We've laid out clear explanations here.
          </p>
        </div>

        {/* Categories Tab Swapper */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenIndex(null); // Close current open question to prevent layout shifts
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-500 border-slate-200 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/30 hover:bg-white transition-colors duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4.5 h-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-slate-800' : ''
                    }`}
                  />
                </button>

                {/* Animated Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 border-t border-slate-150 pt-4 bg-white/50 text-slate-600 text-sm leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still need help */}
        <div className="mt-12 text-center bg-[#19244e]/5 rounded-2xl p-5 border border-[#19244e]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-sans text-slate-600 font-medium">
            Still have an unanswered question about custom integrations or payment cycles?
          </span>
          <a
            href="mailto:hello@lantenn.co.za"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#19244e] hover:text-[#f59a1e] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            hello@lantenn.co.za
          </a>
        </div>

      </div>
    </section>
  );
}
