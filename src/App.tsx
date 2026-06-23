import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [plannerOpenTrigger, setPlannerOpenTrigger] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPlanner = () => {
    // Jump straight to the planner form
    setPlannerOpenTrigger(prev => !prev);
    const element = document.getElementById('planner-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F4] text-slate-950 font-sans selection:bg-[#f59a1e]/30 selection:text-[#19244e] antialiased">
      {/* Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        onOpenPlanner={handleOpenPlanner} 
      />

      {/* Hero Section */}
      <Hero 
        onCtaclick={handleOpenPlanner}
        onSecondaryClick={() => handleNavigate('services')}
      />

      {/* Core Services Section: What We Do */}
      <Services />

      {/* Multi-step Project Lead Capture Planner */}
      <LeadForm isAutoOpen={plannerOpenTrigger} />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Footnote Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
