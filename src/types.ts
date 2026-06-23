export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // Name of Lucide icon
  tag: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'MVP' | 'Fintech' | 'AI/ML' | 'Enterprise';
  client: string;
  description: string;
  metrics: { label: string; value: string }[];
  image: string; // CDN or generated asset path
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Inquiry {
  id: string;
  projectName: string;
  saasType: string;
  budgetRange: string;
  timeline: string;
  clientName: string;
  clientEmail: string;
  description: string;
  status: 'pending' | 'reviewed';
  submittedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
