import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle, Code, DollarSign, Users, FileText, Camera } from 'lucide-react';

interface HeroProps {
  onCtaclick: () => void;
  onSecondaryClick: () => void;
}

export default function Hero({ onCtaclick, onSecondaryClick }: HeroProps) {
  // Frame Motion Variants for staggering elements gracefully
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#FBF7F4]">
      {/* Soft warm gradient highlights with floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#c4e7e5]/40 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#253c96]/8 blur-3xl animate-pulse-glow" />
        
        {/* Playful and clean glowing decor shapes */}
        <div className="absolute top-[15%] right-[25%] w-16 h-16 rounded-full bg-[#f36b2e]/10 blur-md animate-float" />
        <div className="absolute bottom-[20%] left-[5%] w-24 h-24 rounded-full bg-[#253c96]/5 blur-md animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#253c96]/5 border border-[#253c96]/10 px-4 py-1.5 rounded-full mb-6 animate-pulse"
            >
              <Sparkles className="w-4 h-4 text-[#f36b2e]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#253c96] uppercase">
                Simple Rental Management
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#1A1A1A] leading-[1.08] mb-6 animate-fade-in"
            >
              Rent collection & <br />
              <span className="text-[#f36b2e]">property management</span> <br />
              built for everyday landlords.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 font-sans leading-relaxed max-w-xl mb-10"
            >
              We help small and medium-sized landlords collect rent automatically, manage tenants, track lease agreements, and handle maintenance—all from one simple, mobile-first platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCtaclick}
                className="inline-flex items-center justify-center gap-2 bg-[#253c96] hover:bg-[#253c96]/90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group animate-bounce-subtle"
                id="hero-primary-cta"
              >
                Get Started Free
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onSecondaryClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#253c96] font-semibold py-4 px-8 rounded-full border border-slate-200 transition-colors cursor-pointer"
                id="hero-secondary-cta"
              >
                Learn Core Features
              </motion.button>
            </motion.div>

            {/* Hero Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-500 border-t border-slate-200/60 pt-8 w-full"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f36b2e]" />
                <span className="text-xs font-mono font-bold text-slate-800">Only Pay When Rent is Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f36b2e]" />
                <span className="text-xs font-mono font-bold text-slate-800">No Complex Monthly Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#253c96]" />
                <span className="text-xs font-mono font-bold text-slate-800">Designed for Small-to-Mid Landlords</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Brand Panel (Framer animated for premium feel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            className="lg:col-span-5 relative animate-float"
          >
            {/* Visual Glass Platform Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c4e7e5] to-[#253c96] rounded-3xl opacity-5 blur-xl -rotate-1 pointer-events-none" />

            <div className="relative border border-slate-200/60 rounded-3xl bg-white shadow-2xl shadow-slate-900/5 overflow-hidden p-6 sm:p-8 flex flex-col gap-6">
              
              {/* Card Header: Simulated Landlord Dashboard */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c4e7e5]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#253c96]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f36b2e]" />
                </div>
                <div className="bg-[#FAF6F3] text-slate-500 font-mono text-[10px] py-1 px-3.5 rounded-md tracking-tight font-semibold">
                  my-portfolio / live-ledger
                </div>
                <Code className="w-4 h-4 text-slate-400" />
              </div>

              {/* Live Metric Stats inside mockup */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="p-4 bg-[#FBF7F4] border border-slate-100 rounded-2xl flex flex-col gap-1 cursor-pointer transition-shadow hover:shadow-sm"
                >
                  <span className="text-[9px] font-mono font-bold uppercase text-slate-400 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-[#f36b2e]" /> Total Collected
                  </span>
                  <span className="font-display font-extrabold text-lg text-[#1A1A1A]">R 19,500</span>
                  <span className="text-[9px] font-mono text-emerald-600 block">3 of 3 Tenants Paid</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="p-4 bg-[#FBF7F4] border border-slate-100 rounded-2xl flex flex-col gap-1 cursor-pointer transition-shadow hover:shadow-sm"
                >
                  <span className="text-[9px] font-mono font-bold uppercase text-slate-400 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#253c96]" /> Active Leases
                  </span>
                  <span className="font-display font-extrabold text-lg text-[#1A1A1A]">100% Full</span>
                  <span className="text-[9px] font-mono text-slate-400 block">0 Vacancies</span>
                </motion.div>
              </div>

              {/* Photo Maintenance Request simulation */}
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                className="p-4 border border-slate-100 rounded-2xl flex flex-col gap-3 bg-white cursor-pointer transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase text-slate-400 flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-[#253c96]" /> Maintenance Ticket
                  </span>
                  <span className="text-[8px] font-mono font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full uppercase">
                    Unresolved
                  </span>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Leaking pipe"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-800">Unit 4B — Leaking Sink Pipe</span>
                    <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                      "Water pools in the kitchen cabinet when running the tap. Photo attached."
                    </p>
                    <span className="text-[9px] font-mono font-semibold text-[#f36b2e] mt-1 hover:underline cursor-pointer">
                      Assign Plumber &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tenant Invoice Receipt Widget */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-[#253c96] text-white rounded-2xl flex items-center justify-between shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-white animate-pulse">
                    ZAR
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold">Automatic Tenant Invoices</span>
                    <span className="text-[9px] font-mono text-slate-350">Delivered via SMS/WhatsApp</span>
                  </div>
                </div>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold">
                  Reconciled
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
