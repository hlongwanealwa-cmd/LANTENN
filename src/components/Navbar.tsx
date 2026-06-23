import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenPlanner: () => void;
}

export default function Navbar({ onNavigate, onOpenPlanner }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Features', id: 'services' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF7F4]/95 backdrop-blur-md border-b border-slate-200/40 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group h-12"
            onClick={() => handleLinkClick('hero')}
            id="nav-logo"
          >
            <Logo className="h-9 sm:h-10 transition-transform group-hover:scale-[1.02]" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('planner-section')}
              className="text-sm font-semibold text-[#19244e] hover:text-[#f59a1e] transition-colors cursor-pointer"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-2 bg-[#19244e] hover:bg-[#19244e]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
            >
              Claim Free Account
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FBF7F4] border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="block w-full text-left py-3 px-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4 flex flex-col gap-3">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLinkClick('planner-section')}
                  className="w-full text-center py-3 border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPlanner();
                  }}
                  className="w-full text-center py-3 bg-[#19244e] text-white font-semibold rounded-full hover:bg-[#19244e]/90 transition-colors shadow-md"
                >
                  Claim Free Account
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
