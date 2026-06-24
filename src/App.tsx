import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RoiCalculator from './components/RoiCalculator';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  const [plannerOpenTrigger, setPlannerOpenTrigger] = useState(false);

  const handleNavigate = (sectionId: string) => {
    // If we're navigating to faq, scroll to the faq container inside the LeadForm
    const targetId = sectionId === 'faq' ? 'faq-accordion' : sectionId;
    const targetElement = document.getElementById(targetId);
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
    <div className="min-h-screen bg-[#FBF7F4] text-slate-950 font-sans selection:bg-[#f59a1e]/30 selection:text-[#253c96] antialiased">
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

      {/* Interactive PayShap Rent Calculator */}
      <RoiCalculator />

      {/* Multi-step Project Lead Capture Planner with embedded FAQ */}
      <LeadForm isAutoOpen={plannerOpenTrigger} />

      {/* Footnote Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
