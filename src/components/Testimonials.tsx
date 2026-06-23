import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
            Ayoba Vibe Check
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6">
            Approved by Mzansi SaaS Pioneers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Read how startup creators, informal trade ledger builders, and local product innovators accelerate launch velocity and revenue with Lantenn's expert developers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-500 gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Profile Details */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                    {testimonial.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro statistics block */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-900 text-sm sm:text-base">Ready to launch your SaaS with real flavor?</p>
              <p className="text-xs text-slate-500">Every design file and code repository represents dedicated, masterclass-tier local engineering.</p>
            </div>
          </div>
          <a
            href="#planner-section"
            className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full transition-colors shrink-0"
          >
            Start Your SaaS
          </a>
        </div>

      </div>
    </section>
  );
}
