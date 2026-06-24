import { Service, CaseStudy, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'rent-collection',
    title: 'Automated Rent Collection',
    description: 'Ditch the bank statement reconciliations and manual follow-ups. Tenants pay directly into your account using PayShap for instant, secure settlement.',
    details: [
      'PayShap processes payments directly to your bank account — zero delay',
      'We request our flat 3% transaction fee afterward from you',
      'Zero monthly subscriptions — pay only when rent is collected',
      'Automatic invoice creation and instant tenant payment receipts'
    ],
    icon: 'Zap',
    tag: '3% Per Collection'
  },
  {
    id: 'tenant-lease',
    title: 'Tenant & Lease Vault',
    description: 'Keep your occupants and agreements neatly coordinated. Say goodbye to hunting through old WhatsApp chats, messy spreadsheets, or paper binders.',
    details: [
      'Centralized digital tracking for active leases and vacancies',
      'Secure storage of tenant contact details and lease documentation',
      'Automatic alerts when agreements are nearing their renewal date',
      'Seamless multi-property and tenant onboarding portals'
    ],
    icon: 'ShieldCheck',
    tag: '100% Secure'
  },
  {
    id: 'arrears-ledger',
    title: 'Real-Time Arrears & Yields',
    description: 'Instantly view who has paid, who is in arrears, and how your rental yields are performing over time with beautiful, high-contrast analytics.',
    details: [
      'Live dynamic updates on outstanding rent balances',
      'Automated tenant friendly-reminders sent via SMS & WhatsApp',
      'Visual net-yield calculators showing absolute cash flow performance',
      'Exportable tax-ready spreadsheets and PDF financial summaries'
    ],
    icon: 'Cpu',
    tag: 'Live Analytics'
  },
  {
    id: 'photo-maintenance',
    title: 'Photo-Based Repair Logger',
    description: 'Manage property maintenance without constant chaotic back-and-forth calls. Tenants upload photos of problems directly to your landlord portal.',
    details: [
      'Visual support ticket logs with precise photo proof uploading',
      'Direct landlord notification containing item details and description',
      'Streamlined contractor scheduling and repair status progression tracking',
      'Complete historical record of all repairs and contractor invoices'
    ],
    icon: 'Sparkles',
    tag: 'Photo Support'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'jozi-rentals',
    title: 'Jozi Everyday Rentals',
    category: 'Fintech',
    client: 'Nhlapo Holdings',
    description: 'Successfully consolidated 24 rental units across Johannesburg. Reduced arrears reconciliation from 12 hours a month to a single live click.',
    metrics: [
      { label: 'Reconciliation Time Saved', value: '11 hrs/mo' },
      { label: 'Arrears Reduction', value: '45%' }
    ],
    image: 'https://picsum.photos/seed/jozi/800/600'
  },
  {
    id: 'capetown-flats',
    title: 'Cape Flats Multi-Letting',
    category: 'MVP',
    client: 'Mokoena Properties',
    description: 'Migrated 15 micro-rental apartments from manual WhatsApp follow-ups to our automatic SMS notification system, capturing rent with 98% on-time performance.',
    metrics: [
      { label: 'On-Time Payments', value: '98%' },
      { label: 'Tenant Satisfaction', value: '+35%' }
    ],
    image: 'https://picsum.photos/seed/ctflats/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sipho Ndlovu',
    role: 'Soweto Landlord',
    company: '12 Residential Units',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Before this platform, I spent my first weekend of every month matching bank deposits to WhatsApp screenshots. Now, rent collection is automatic and I only pay the 3% fee when I actually get paid. Absolute bliss.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Lerato Molefe',
    role: 'Micro-Property Investor',
    company: '8 Multi-let Apartments',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'The photo-based maintenance reporting is incredible. My tenants upload a photo of the leaking tap, and I can send it straight to my plumber. No more confusing voice notes or hand-waving.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Pricing',
    question: 'How does the 3% rent payment transaction fee work?',
    answer: 'It is simple: we do not charge any monthly subscriptions or setup fees. When tenants pay rent via PayShap on the portal, payments go 100% directly into your landlord bank account. We then request or invoice our flat 3% transaction fee from you. If a unit is vacant or you do not collect rent that month, you pay absolutely R0.'
  },
  {
    category: 'Process',
    question: 'How do my tenants pay their rent?',
    answer: 'Tenants receive a safe, custom digital invoice link via SMS or WhatsApp every month. They can pay instantly and securely using PayShap for immediate settlement directly into your bank account, as well as standard EFT or credit/debit card options.'
  },
  {
    category: 'Ownership',
    question: 'Are my tenant and property details kept secure?',
    answer: 'Yes, security is our absolute priority. All property leases, tenant contact records, payment data, and photo uploads are fully encrypted. We adhere to POPIA (Protection of Personal Information Act) guidelines to ensure complete privacy.'
  },
  {
    category: 'Collaboration',
    question: 'How do tenants submit maintenance and repair requests?',
    answer: 'Tenants get access to a dedicated mobile portal where they can quickly log any issue, write a brief description, and upload photos of the problem. You are immediately notified on your dashboard with the photo proof, allowing you to quickly assign a plumber, electrician, or handyman.'
  }
];
