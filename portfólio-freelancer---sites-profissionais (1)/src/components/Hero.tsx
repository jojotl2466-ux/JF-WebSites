import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall, Zap, Star } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onDemosClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onDemosClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-radial from-blue-50/70 to-transparent blur-3xl opacity-80" />
      <div className="absolute bottom-10 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-radial from-slate-50/80 to-transparent blur-2xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[11px] font-semibold text-blue-700 mb-6"
            >
              <Zap size={12} className="text-blue-600 fill-blue-600" />
              <span>Desenho de Interfaces Premium • Carregamento Instantâneo</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Sites profissionais que ajudam pequenos negócios a{' '}
              <span className="relative inline-block text-blue-600">
                vender mais.
                <span className="absolute left-0 bottom-1 h-2 w-full bg-blue-100 -z-10 rounded-xs" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Desenvolvo sites rápidos, modernos e personalizados para barbearias, salões, clínicas, restaurantes, academias, escritórios e empresas locais. O objetivo é converter visitantes em clientes pagantes.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={15} className="text-blue-200 fill-blue-200" />
                Solicitar demonstração gratuita
              </button>
              <button
                onClick={onDemosClick}
                className="w-full sm:w-auto rounded-full bg-white border border-slate-200 px-7 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver demonstrações
                <ArrowRight size={15} className="text-slate-400" />
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Demonstração Grátis</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Veja antes de comprar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
                  <Star size={16} className="fill-blue-100" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Foco em Conversão</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Integrado ao WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="rounded-lg bg-purple-50 p-1.5 text-purple-600">
                  <Zap size={16} className="fill-purple-100" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight font-sans">Sem Fidelidade</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">O site é 100% seu</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Visual (Mock Cards Stack representing elite professional elements) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] w-full">
            {/* Visual card stack representing design quality */}
            <div className="relative w-full max-w-sm h-[320px]">
              {/* Back card: Tech optimization */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-4 left-6 w-[88%] bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 flex flex-col justify-between h-[250px]"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-blue-400 font-semibold tracking-widest uppercase">// PERFORMANCE</span>
                  <div className="h-5 w-5 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-extrabold text-[10px]">100</div>
                </div>
                <div>
                  <p className="text-lg font-serif font-bold text-white tracking-tight leading-tight">Velocidade Máxima no Google</p>
                  <p className="text-xs text-slate-400 mt-2">Páginas ultrarápidas carregam em menos de 1 segundo.</p>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-emerald-500" />
                </div>
              </motion.div>

              {/* Middle card: Leads optimization */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-12 left-2 w-[88%] bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between h-[250px] z-10"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase font-mono">CONVERSÃO</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    +42% cliques
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug">Botões de agendamento inteligentes</h3>
                  <p className="text-[11px] text-slate-500 mt-1">Conecta o cliente diretamente ao seu WhatsApp de vendas com mensagens personalizadas.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-xs">WA</div>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden relative">
                    <div className="h-full w-4/5 bg-blue-600 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Main front card: Visual Demonstration Preview teaser */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-20 right-2 w-[88%] bg-blue-600 text-white rounded-3xl p-6 shadow-2xl flex flex-col justify-between h-[250px] z-20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-blue-200 tracking-widest uppercase font-mono">PROPOSTA GRÁTIS</span>
                  <Sparkles size={16} className="text-blue-200 fill-blue-300" />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-tight">Crio um rascunho grátis do seu site.</p>
                  <p className="text-xs text-blue-100 mt-2">Sem custo algum. Você só paga se gostar e decidir publicar oficialmente.</p>
                </div>
                <button
                  onClick={onContactClick}
                  className="w-full py-2.5 bg-white text-blue-600 font-bold text-xs rounded-xl shadow-md shadow-blue-800/25 flex items-center justify-center gap-1 hover:bg-slate-50 transition-all active:scale-95"
                >
                  Garantir Minha Demonstração
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
