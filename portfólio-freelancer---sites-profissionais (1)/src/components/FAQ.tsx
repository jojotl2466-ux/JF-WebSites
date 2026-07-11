import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'A demonstração é realmente gratuita e sem compromisso?',
      answer: 'Sim, 100% gratuita. Eu converso com você, entendo o seu negócio e desenvolvo um rascunho de design real e personalizado. Você visualiza como o site do seu negócio ficaria. Se você gostar e achar que faz sentido, nós fechamos o projeto oficial para publicá-lo. Se não gostar, não deve absolutamente nada.'
    },
    {
      question: 'Quanto custa para desenvolver e colocar o site no ar?',
      answer: 'Eu trabalho com pacotes sob medida e muito acessíveis para pequenos negócios locais. Como não sou uma grande agência cheia de custos fixos, consigo repassar um preço direto e extremamente competitivo. Após definirmos o escopo da sua demonstração, te envio um orçamento transparente sem taxas ocultas.'
    },
    {
      question: 'Quanto tempo leva para o meu site oficial ficar pronto?',
      answer: 'O rascunho de demonstração fica pronto em até 48 horas. Se você aprovar e decidirmos publicar oficialmente, o site completo, revisado, com domínio registrado e otimizado para celulares costuma ficar online em um prazo médio de 5 a 7 dias úteis.'
    },
    {
      question: 'Posso alterar os textos, fotos e cores depois que estiver pronto?',
      answer: 'Sim, com certeza. Eu desenvolvo o site utilizando estruturas modulares fáceis de editar. Além disso, dou suporte inicial completo para qualquer alteração que você precisar nos primeiros meses. Você não fica preso a mim para fazer pequenas alterações de textos ou preços.'
    },
    {
      question: 'Preciso já ter um domínio (.com.br) registrado?',
      answer: 'Não se preocupe com isso. Se você já tiver, eu faço a migração e configuração gratuitamente. Se não tiver, eu cuido de todo o processo burocrático de busca e registro do nome ideal da sua empresa no Registro.br ou provedores parceiros.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50/50 py-20 md:py-28 border-t border-slate-100" id="faq-section">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase font-mono bg-blue-50 px-3.5 py-1 rounded-full">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
            Perguntas comuns de quem está criando seu primeiro site
          </h2>
          <p className="text-sm text-slate-500 font-normal mt-4">
            A transparência é a base do meu trabalho. Se a sua dúvida não estiver listada abaixo, sinta-se à vontade para me mandar um WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-200 shadow-md shadow-blue-50/40'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className={isOpen ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`rounded-full p-1.5 transition-transform duration-300 bg-slate-50 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Support Prompt */}
        <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Tem outra dúvida específica?</h4>
            <p className="text-xs text-slate-500 mt-1">Me mande uma mensagem rápida no WhatsApp, respondo em poucos minutos.</p>
          </div>
          <a
            href="https://wa.me/5511999998888?text=Olá! Tenho uma dúvida sobre a criação de sites."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-600 transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle size={14} className="text-emerald-400 fill-emerald-400" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
