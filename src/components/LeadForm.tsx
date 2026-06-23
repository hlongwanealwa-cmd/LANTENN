import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types';
import { Check, Mail, User, Send, FileText, Trash2, Home, Phone, HelpCircle } from 'lucide-react';

interface LeadFormProps {
  isAutoOpen?: boolean;
}

export default function LeadForm({ isAutoOpen = false }: LeadFormProps) {
  const [step, setStep] = useState<number>(1);
  const [projectName, setProjectName] = useState('');
  const [unitCount, setUnitCount] = useState('1 - 5 Units');
  const [collectionMethod, setCollectionMethod] = useState('Manual Bank Transfers (EFT)');
  const [onboardingTimeline, setOnboardingTimeline] = useState('Immediate Onboarding');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [description, setDescription] = useState('');

  const [formError, setFormError] = useState('');
  const [successData, setSuccessData] = useState<any | null>(null);
  const [myInquiries, setMyInquiries] = useState<any[]>([]);

  // Load saved inquiries from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lantenn_property_inquiries');
      if (saved) {
        setMyInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error parsing inquiries', e);
    }
  }, []);

  // Smooth scroll to planner section if auto open is triggered
  useEffect(() => {
    if (isAutoOpen) {
      const el = document.getElementById('planner-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isAutoOpen]);

  const validateStep = () => {
    setFormError('');
    if (step === 1) {
      if (!projectName.trim()) {
        setFormError('Portfolio or company name is required.');
        return false;
      }
      if (description.trim().length < 10) {
        setFormError('Please write a brief sentence explaining your current rental challenges (e.g. WhatsApp confusion, repair logs).');
        return false;
      }
    }
    if (step === 2) {
      if (!clientName.trim()) {
        setFormError('Your full name is required.');
        return false;
      }
      if (!clientEmail.trim() || !/^\S+@\S+\.\S+$/.test(clientEmail)) {
        setFormError('A valid email address is required.');
        return false;
      }
      if (!clientPhone.trim() || clientPhone.length < 8) {
        setFormError('A valid contact phone number is required.');
        return false;
      }
    }
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setFormError('');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newInquiry = {
      id: 'inq_' + Math.random().toString(36).substr(2, 9),
      projectName,
      unitCount,
      collectionMethod,
      onboardingTimeline,
      clientName,
      clientEmail,
      clientPhone,
      description,
      status: 'pending',
      submittedAt: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      const updatedList = [newInquiry, ...myInquiries];
      localStorage.setItem('lantenn_property_inquiries', JSON.stringify(updatedList));
      setMyInquiries(updatedList);
      setSuccessData(newInquiry);
      
      // Reset variables
      setProjectName('');
      setDescription('');
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setStep(1);
    } catch (err) {
      setFormError('Error saving inquiry on your local browser.');
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = myInquiries.filter(item => item.id !== id);
    localStorage.setItem('lantenn_property_inquiries', JSON.stringify(updated));
    setMyInquiries(updated);
  };

  return (
    <section id="planner-section" className="py-24 bg-[#FBF7F4]/30 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#19244e] uppercase bg-[#19244e]/5 px-4 py-1.5 rounded-full">
            Landlord Portal Setup
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Claim your free landlord account
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Submit your portfolio details below. Get started for absolutely R0 upfront — only pay the flat 3% transaction fee when rent is collected.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Form column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl relative shadow-sm">
            
            {/* Step Indicators */}
            {!successData && (
              <div className="flex items-center gap-2 mb-8 border-b border-slate-200/70 pb-5">
                {[1, 2, 3].map((s) => (
                  <React.Fragment key={s}>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                          step >= s
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {s}
                      </div>
                      <span className={`text-xs font-mono font-bold ${step === s ? 'text-slate-900' : 'text-slate-400'}`}>
                        {s === 1 ? 'Portfolio' : s === 2 ? 'Your Details' : 'Timeline'}
                      </span>
                    </div>
                    {s < 3 && <div className="flex-1 h-0.5 bg-slate-200 min-w-[20px]" />}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Error Message */}
            {formError && (
              <div className="mb-6 p-3.5 bg-rose-50 text-rose-700 text-xs font-semibold rounded-xl border border-rose-200">
                {formError}
              </div>
            )}

            <AnimatePresence mode="wait">
              {successData ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-6 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#19244e]/10 text-[#19244e] flex items-center justify-center mb-6 shadow-sm">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-950 mb-3">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-6 font-sans">
                    Excellent, <strong>{successData.clientName}</strong>. We received your setup request for <strong>"{successData.projectName}"</strong> ({successData.unitCount}). Our local client onboarding specialist will contact you at <strong>{successData.clientEmail}</strong> (or {successData.clientPhone}) within 2 hours to activate your live portfolio dashboard.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl w-full text-left max-w-md text-xs font-mono mb-8 space-y-1.5">
                    <p className="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-2 uppercase tracking-wider text-[10px]">
                      Registered Specifications
                    </p>
                    <p><span className="text-slate-400">ID Reference:</span> {successData.id}</p>
                    <p><span className="text-slate-400">Portfolio Class:</span> {successData.unitCount}</p>
                    <p><span className="text-slate-400">Current Collection:</span> {successData.collectionMethod}</p>
                    <p><span className="text-slate-400">Onboarding:</span> {successData.onboardingTimeline}</p>
                    <p><span className="text-slate-400">Submitted:</span> {successData.submittedAt}</p>
                  </div>

                  <button
                    onClick={() => setSuccessData(null)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
                  >
                    Register Another Portfolio
                  </button>
                </motion.div>
              ) : (
                /* Interactive Multi Step Form */
                <form onSubmit={step === 3 ? handleSubmit : handleNext}>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Property Portfolio / Company Name
                        </label>
                        <div className="relative">
                          <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="text"
                            placeholder="e.g. Soweto Heights Rentals"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:border-slate-800 font-medium text-slate-850"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Explain your biggest property management challenge
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                          <textarea
                            rows={3}
                            placeholder="e.g. Tenants sending delayed EFT screenshots over WhatsApp, hard to monitor rent arrears, or tracking repair requests..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:border-slate-800 font-medium text-slate-850"
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 block">
                          Minimum 10 characters (Current length: {description.length})
                        </span>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-colors cursor-pointer"
                        >
                          Next: Contact Information
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Your Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                            <input
                              type="text"
                              placeholder="Alex Mercer"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:border-slate-800 font-medium text-slate-850"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Landlord Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                            <input
                              type="email"
                              placeholder="alex@example.com"
                              value={clientEmail}
                              onChange={(e) => setClientEmail(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:border-slate-800 font-medium text-slate-850"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Your Phone Number (For SMS/WhatsApp setup status)
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="text"
                            placeholder="+27 82 123 4567"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:border-slate-800 font-medium text-slate-850"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Active Rental Portfolio Size
                        </label>
                        <select
                          value={unitCount}
                          onChange={(e) => setUnitCount(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-mono focus:outline-none focus:border-slate-800 font-bold text-slate-700 cursor-pointer"
                        >
                          <option>1 - 5 Units</option>
                          <option>6 - 15 Units</option>
                          <option>16 - 50 Units</option>
                          <option>50+ Large Enterprise Portfolio</option>
                        </select>
                      </div>

                      <div className="pt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="w-1/3 text-center border border-slate-200 text-slate-700 font-semibold py-3.5 px-4 rounded-full text-sm hover:bg-slate-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-colors cursor-pointer"
                        >
                          Next: Launch Timeline
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Current Rent Collection Method
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            'Manual EFT / Bank Transfer',
                            'Physical Cash Collections',
                            'Cards / Other Portals'
                          ].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setCollectionMethod(b)}
                              className={`p-3 rounded-xl border text-center transition-colors cursor-pointer text-xs font-mono font-bold ${
                                collectionMethod === b
                                  ? 'border-[#f59a1e] bg-[#f59a1e]/5 text-slate-950 shadow-sm'
                                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                                {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Desired Account Activation Timeline
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            'Immediate Onboarding',
                            'Next 1-2 Weeks',
                            'Just Researching Tools'
                          ].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setOnboardingTimeline(t)}
                              className={`p-3 rounded-xl border text-center transition-colors cursor-pointer text-xs font-mono font-bold ${
                                onboardingTimeline === t
                                  ? 'border-[#f59a1e] bg-[#f59a1e]/5 text-slate-950 shadow-sm'
                                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="w-1/3 text-center border border-slate-200 text-slate-700 font-semibold py-3.5 px-4 rounded-full text-sm hover:bg-slate-50 transition-colors"
                        >
                          Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-2/3 inline-flex items-center justify-center gap-2 bg-[#19244e] hover:bg-[#19244e]/90 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-md shadow-slate-900/15 cursor-pointer"
                        >
                          Submit Setup Brief
                          <Send className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>           {/* Right Submitted History column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#19244e] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
              <h3 className="font-display font-extrabold text-lg mb-4 text-[#f59a1e]">
                Our Core Value Proposition
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-sans mb-6">
                We help small and medium-sized landlords collect rent automatically, manage tenants, and coordinate repairs — all from one single, mobile-first platform.
              </p>
              
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex items-start gap-2 text-slate-200">
                  <Check className="w-4.5 h-4.5 text-[#c4e7e5] shrink-0 mt-0.5 animate-pulse" />
                  <span><strong>No Setup Fees:</strong> Zero upfront payment or credit card registration required to build your portfolio.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <Check className="w-4.5 h-4.5 text-[#c4e7e5] shrink-0 mt-0.5 animate-pulse" />
                  <span><strong>Subscription-Free:</strong> Only pay a flat 3% transaction fee when your tenant pays. R0 rent = R0 fee.</span>
                </li>
              </ul>
            </div>

            {/* Live Submissions Tracker */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Your Saved Portfolios ({myInquiries.length})
                  </span>
                  <span className="text-[9px] font-semibold text-[#19244e] bg-[#c4e7e5]/40 border border-[#19244e]/10 px-2 py-0.5 rounded-full animate-pulse">
                    LocalStorage
                  </span>
                </div>

                {myInquiries.length === 0 ? (
                  <p className="text-xs text-slate-400 font-sans italic py-4 text-center">
                    No registered properties found in this browser. Use the left form to add your first one!
                  </p>
                ) : (
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {myInquiries.map((inq) => (
                      <div key={inq.id} className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm text-xs relative group flex flex-col justify-between gap-2">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-800 truncate pr-6">{inq.projectName}</span>
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="text-slate-300 hover:text-rose-500 transition-colors p-1 rounded hover:bg-slate-50 absolute right-2 top-2 animate-fade-in"
                              title="Delete local log"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[10px] text-slate-400 font-mono mb-2">{inq.submittedAt} • {inq.unitCount}</p>
                          <p className="text-[11px] text-slate-600 line-clamp-2 pr-2">"{inq.description}"</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] font-mono font-bold">
                          <span className="text-slate-500">{inq.collectionMethod}</span>
                          <span className="text-[#f59a1e] uppercase animate-pulse">● Processing Onboarding</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {myInquiries.length > 0 && (
                <div className="border-t border-slate-200/70 pt-4 mt-4">
                  <p className="text-[10px] text-slate-400 font-sans">
                    Your portfolio is currently queued for onboarding. Our support engineers will contact you at the email and phone provided to verify lease formats.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Dynamic decorative visual elements */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-400 text-xs font-mono font-bold">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#19244e] rounded-full"></span> Secure Encrypted Database</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#19244e] rounded-full"></span> POPIA Data Privacy compliant</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#f59a1e] rounded-full"></span> Instant South African Bank Settlements</span>
        </div>

      </div>
    </section>
  );
}
