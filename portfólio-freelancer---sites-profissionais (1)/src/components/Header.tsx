import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onDemosClick: () => void;
  onHowItWorksClick: () => void;
  onFeaturesClick: () => void;
  onFAQClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onContactClick,
  onDemosClick,
  onHowItWorksClick,
  onFeaturesClick,
  onFAQClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (scrollFn: () => void) => {
    setIsMenuOpen(false);
    // Add small delay to let menu close transition complete
    setTimeout(() => {
      scrollFn();
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <span className="font-display font-extrabold text-base tracking-tighter">W</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight block">WebLocal</span>
              <span className="text-[10px] font-medium text-blue-600 tracking-widest uppercase block -mt-1 font-mono">STUDIO CREATIVE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-600">
            <button onClick={onHowItWorksClick} className="hover:text-blue-600 transition-colors cursor-pointer">Como funciona</button>
            <button onClick={onDemosClick} className="hover:text-blue-600 transition-colors cursor-pointer">Ver demonstrações</button>
            <button onClick={onFeaturesClick} className="hover:text-blue-600 transition-colors cursor-pointer">O que está incluso</button>
            <button onClick={onFAQClick} className="hover:text-blue-600 transition-colors cursor-pointer">Perguntas frequentes</button>
          </nav>

          {/* Call to action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511999998888?text=Olá! Gostaria de entender mais sobre as demonstrações de sites."
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall size={13} className="text-slate-400" />
              Suporte WhatsApp
            </a>
            <button
              onClick={onContactClick}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles size={13} className="text-blue-400 fill-blue-400" />
              Demonstração Gratuita
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-full bg-slate-50 p-2.5 text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-white border-b border-slate-200 px-6 py-6 shadow-xl lg:hidden flex flex-col gap-5"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-800">
              <button
                onClick={() => handleNavLinkClick(onHowItWorksClick)}
                className="text-left py-2 hover:text-blue-600 transition-colors border-b border-slate-50"
              >
                Como funciona
              </button>
              <button
                onClick={() => handleNavLinkClick(onDemosClick)}
                className="text-left py-2 hover:text-blue-600 transition-colors border-b border-slate-50"
              >
                Demonstrações de Sites
              </button>
              <button
                onClick={() => handleNavLinkClick(onFeaturesClick)}
                className="text-left py-2 hover:text-blue-600 transition-colors border-b border-slate-50"
              >
                O que está incluso
              </button>
              <button
                onClick={() => handleNavLinkClick(onFAQClick)}
                className="text-left py-2 hover:text-blue-600 transition-colors border-b border-slate-50"
              >
                Perguntas Frequentes
              </button>
            </div>

            <div className="flex flex-col gap-3 pt-3">
              <a
                href="https://wa.me/5511999998888?text=Olá! Gostaria de entender mais sobre as demonstrações de sites."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5"
              >
                <PhoneCall size={14} className="text-slate-500" />
                Falar com Desenvolvedor no WhatsApp
              </a>
              <button
                onClick={() => handleNavLinkClick(onContactClick)}
                className="w-full py-3.5 rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles size={14} className="text-blue-200" />
                Solicitar Demonstração Gratuita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
