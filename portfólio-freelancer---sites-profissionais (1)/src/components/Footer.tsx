import React from 'react';
import { Mail, Phone, MessageSquare, ShieldAlert, ArrowUpCircle } from 'lucide-react';

interface FooterProps {
  onHowItWorksClick: () => void;
  onDemosClick: () => void;
  onFeaturesClick: () => void;
  onFAQClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onHowItWorksClick,
  onDemosClick,
  onFeaturesClick,
  onFAQClick
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 md:px-8 border-t border-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-base">
                W
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight block">WebLocal</span>
                <span className="text-[10px] font-medium text-blue-400 tracking-widest uppercase block -mt-1 font-mono">STUDIO CREATIVE</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Especialista em criar sites rápidos, limpos e otimizados para converter visitantes de anúncios do WhatsApp em clientes pagantes para empresas locais.
            </p>

            {/* Fictional layout warning required by user */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex gap-3 max-w-sm">
              <ShieldAlert size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 leading-normal">
                <strong>Nota Importante:</strong> Todos os projetos apresentados são demonstrações criadas para apresentação de layout e experiência visual.
              </p>
            </div>
          </div>

          {/* Nav Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onHowItWorksClick} className="hover:text-white transition-colors cursor-pointer">Como Funciona</button>
              </li>
              <li>
                <button onClick={onDemosClick} className="hover:text-white transition-colors cursor-pointer">Demonstrações de Sites</button>
              </li>
              <li>
                <button onClick={onFeaturesClick} className="hover:text-white transition-colors cursor-pointer">O que está incluso</button>
              </li>
              <li>
                <button onClick={onFAQClick} className="hover:text-white transition-colors cursor-pointer">Perguntas Frequentes</button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Canais de Contato</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">WhatsApp de Atendimento</span>
                  <a
                    href="https://wa.me/5511999998888?text=Olá! Gostaria de conversar sobre um projeto."
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    (11) 99999-8888
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Email Profissional</span>
                  <a
                    href="mailto:contato@weblocalstudio.com.br"
                    className="font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    contato@weblocalstudio.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 WebLocal Studio. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] font-semibold"
          >
            Voltar ao topo
            <ArrowUpCircle size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
