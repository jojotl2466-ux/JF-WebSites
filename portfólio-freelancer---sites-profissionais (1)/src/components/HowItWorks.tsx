import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Laptop, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

interface HowItWorksProps {
  onContactClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onContactClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Você me chama no WhatsApp',
      description: 'Conversamos por 5 minutos sobre o seu negócio, seus concorrentes e seus objetivos de vendas.',
      icon: <MessageSquare size={24} className="text-blue-600" />,
      colorBg: 'bg-blue-50/70 border-blue-100/50',
      tag: 'Contato Simples'
    },
    {
      number: '02',
      title: 'Crio sua demonstração grátis',
      description: 'Em até 48 horas, desenvolvo um rascunho real e personalizado do seu site com a sua marca e cores.',
      icon: <Laptop size={24} className="text-purple-600" />,
      colorBg: 'bg-purple-50/70 border-purple-100/50',
      tag: 'Sem Compromisso'
    },
    {
      number: '03',
      title: 'Publicamos o site oficial',
      description: 'Se você gostar e decidir fechar, finalizamos o site, otimizamos o Google e colocamos seu domínio no ar.',
      icon: <CheckCircle2 size={24} className="text-emerald-600" />,
      colorBg: 'bg-emerald-50/70 border-emerald-100/50',
      tag: 'Lançamento de Sucesso'
    }
  ];

  return (
    <section className="bg-slate-50/50 py-20 md:py-28 border-y border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase font-mono bg-blue-50 px-3.5 py-1 rounded-full">
            PROCESSO TRANSPARENTE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
            Sua presença online construída em 3 passos simples
          </h2>
          <p className="text-sm text-slate-500 font-normal mt-4 max-w-xl mx-auto">
            Sem contratos longos, burocracia ou taxas surpresa. Você vê o rascunho do site pronto antes de investir qualquer centavo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Decorative Connecting Lines (hidden on mobile) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 -z-10 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300 transition-all duration-300 relative h-full min-h-[290px]"
              >
                {/* Step Number Top Accents */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-display font-extrabold text-slate-200 group-hover:text-blue-500 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-1 font-mono">
                    {step.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center border mb-5 ${step.colorBg}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Decorator inside cards (only for step 1 & 2) */}
                {index < 2 && (
                  <div className="absolute right-6 bottom-6 text-slate-300 group-hover:text-slate-400 transition-colors hidden lg:block">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Helper */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 flex-col sm:flex-row">
            <span>Quer começar agora mesmo com o passo 1?</span>
            <button
              onClick={onContactClick}
              className="text-blue-600 font-bold hover:underline inline-flex items-center gap-0.5 cursor-pointer"
            >
              Criar rascunho gratuito do meu negócio
              <ArrowRight size={12} />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
