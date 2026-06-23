import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-white/10">
          
          {/* Logo Brand Info Box */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center cursor-pointer group mb-5 h-10" onClick={() => onNavigate('hero')}>
              <Logo variant="dark" className="h-9 transition-transform group-hover:scale-[1.02]" />
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-xs mb-6">
              A simple, mobile-first rental management platform built for everyday landlords. Collect rent automatically, track tenants, and coordinate repairs with real Mzansi flavor.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="https://twitter.com" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
              Core Platform
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Automated Rent Collections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Tenant & Lease Vault
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Arrears & Income Metrics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Photo Maintenance Support
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  FAQ Accordion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('planner-section')} className="hover:text-white transition-colors cursor-pointer">
                  Claim Account Form
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
              Digital Platform
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400 font-sans">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Zero Subscription Fee (Flat 3%)</span>
              </p>
              <p>Email: <a href="mailto:hello@lantenn.co.za" className="text-white font-bold hover:underline">hello@lantenn.co.za</a></p>
              <p>Hours: Mon - Fri, 8am - 5pm SAST</p>
            </div>
          </div>

        </div>

        {/* Lower copyright legal bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lantenn. All rights reserved. Coded with raw local flavor.</p>
          <div className="flex gap-6 font-mono font-bold">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span className="text-emerald-500">Proudly Mzansi 🇿🇦</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
