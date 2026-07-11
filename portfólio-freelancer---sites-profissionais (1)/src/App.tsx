/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Phone,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Bell,
  X
} from 'lucide-react';

import { NicheId } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { DemoGallery } from './components/DemoGallery';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { InteractiveMockup } from './components/InteractiveMockup';

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  type: 'demo' | 'success' | 'alert';
}

export default function App() {
  const [activeNiche, setActiveNiche] = useState<NicheId | null>(null);
  const [activeNicheTitle, setActiveNicheTitle] = useState<string>('');
  const [isMockupOpen, setIsMockupOpen] = useState(false);
  const [notification, setNotification] = useState<NotificationItem | null>(null);
  const [selectedNicheForCTA, setSelectedNicheForCTA] = useState<string>('');

  // Refs for smooth scroll
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const demosRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simulated social proof alerts to build high trust
  const trustAlerts: Omit<NotificationItem, 'id'>[] = [
    { message: 'Nova demonstração de Barbearia criada há 12 min.', time: 'Agora mesmo', type: 'demo' },
    { message: 'Site de Odontologia publicado e entregue com sucesso.', time: 'Há 2 horas', type: 'success' },
    { message: 'Rascunho de Restaurante aprovado em Campinas/SP!', time: 'Há 30 min', type: 'success' },
    { message: 'Demonstração de Salão de Beleza solicitada há 5 min.', time: 'Agora mesmo', type: 'demo' },
    { message: 'Site de Auto Elétrica otimizado para o Google Maps.', time: 'Há 4 horas', type: 'success' }
  ];

  useEffect(() => {
    // Show first notification after 4 seconds
    const timer = setTimeout(() => {
      const randomAlert = trustAlerts[Math.floor(Math.random() * trustAlerts.length)];
      setNotification({
        id: Date.now(),
        ...randomAlert
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Periodic notification cycler
  useEffect(() => {
    if (notification) {
      const dismissTimer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      const nextTimer = setTimeout(() => {
        const randomAlert = trustAlerts[Math.floor(Math.random() * trustAlerts.length)];
        setNotification({
          id: Date.now(),
          ...randomAlert
        });
      }, 15000); // Trigger new notification every 15 seconds

      return () => {
        clearTimeout(dismissTimer);
        clearTimeout(nextTimer);
      };
    }
  }, [notification]);

  const handleSelectDemo = (id: NicheId, title: string) => {
    setActiveNiche(id);
    setActiveNicheTitle(title);
    setIsMockupOpen(true);
  };

  const handleRequestFreeDemoFromMockup = (nicheName: string) => {
    setIsMockupOpen(false);
    setSelectedNicheForCTA(nicheName);
    setTimeout(() => {
      scrollToSection(contactRef);
    }, 400);
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen flex flex-col relative antialiased selection:bg-blue-600 selection:text-white">
      {/* Floating Header */}
      <Header
        onHowItWorksClick={() => scrollToSection(howItWorksRef)}
        onDemosClick={() => scrollToSection(demosRef)}
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onFAQClick={() => scrollToSection(faqRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onContactClick={() => scrollToSection(contactRef)}
          onDemosClick={() => scrollToSection(demosRef)}
        />

        {/* How It Works Section */}
        <div ref={howItWorksRef}>
          <HowItWorks onContactClick={() => scrollToSection(contactRef)} />
        </div>

        {/* Interactive Demos Grid Section */}
        <div ref={demosRef}>
          <DemoGallery onSelectDemo={handleSelectDemo} />
        </div>

        {/* What's Included / Features Section */}
        <div ref={featuresRef}>
          <Features />
        </div>

        {/* Benefits Section */}
        <Benefits />

        {/* FAQ Section */}
        <div ref={faqRef}>
          <FAQ />
        </div>

        {/* Final CTA Form Section */}
        <div ref={contactRef}>
          <ContactCTA initialNicheName={selectedNicheForCTA} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onHowItWorksClick={() => scrollToSection(howItWorksRef)}
        onDemosClick={() => scrollToSection(demosRef)}
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onFAQClick={() => scrollToSection(faqRef)}
      />

      {/* Immersive Responsive Device Simulator Overlay */}
      <InteractiveMockup
        nicheId={activeNiche}
        nicheName={activeNicheTitle}
        isOpen={isMockupOpen}
        onClose={() => setIsMockupOpen(false)}
        onRequestFreeDemo={handleRequestFreeDemoFromMockup}
      />

      {/* Social Proof Trust Notifications */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-6 left-6 z-40 max-w-sm w-[90vw] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 flex items-start gap-3"
          >
            <div className={`p-2 rounded-xl shrink-0 ${
              notification.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
            }`}>
              <Bell size={16} />
            </div>
            <div className="flex-1 text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">ATIVIDADE RECENTE</span>
              <p className="text-xs font-bold text-slate-800 leading-snug mt-0.5">{notification.message}</p>
              <span className="text-[9px] text-slate-400 block mt-1">{notification.time} • Verificado</span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-all cursor-pointer"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trust WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/5511999998888?text=Olá! Vi seu portfólio de demonstrações e gostaria de solicitar uma proposta."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs pl-4 pr-5 py-3 shadow-xl shadow-emerald-500/20 active:scale-95 transition-all hover:scale-105"
        >
          <div className="relative">
            <MessageCircle size={18} className="fill-white" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
          </div>
          <span>Chamar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
