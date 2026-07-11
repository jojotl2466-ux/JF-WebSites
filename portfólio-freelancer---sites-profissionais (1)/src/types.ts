export type NicheId =
  | 'barbearia'
  | 'salao'
  | 'clinica'
  | 'restaurante'
  | 'academia'
  | 'imobiliaria'
  | 'advocacia'
  | 'autoeletrica';

export interface NicheTemplate {
  id: NicheId;
  title: string;
  businessType: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  bgColor: string;
  heroImage: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}
