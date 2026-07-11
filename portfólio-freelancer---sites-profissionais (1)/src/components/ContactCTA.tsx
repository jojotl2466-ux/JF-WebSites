import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, MessageCircle, CheckCircle, Smartphone, AlertCircle } from 'lucide-react';

interface ContactCTAProps {
  initialNicheName?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ initialNicheName = '' }) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [setor, setSetor] = useState(initialNicheName || 'Barbearia');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const setores = [
    'Barbearia',
    'Salão de Beleza',
    'Clínica Odontológica',
    'Restaurante / Lanchonete',
    'Academia / Personal Trainer',
    'Imobiliária / Corretor',
    'Escritório de Advocacia',
    'Auto Elétrica / Mecânica',
    'Outro Pequeno Negócio'
  ];

  // Dynamically set sector if initialNicheName changes
  React.useEffect(() => {
    if (initialNicheName) {
      // Find matching sector from lists
      const found = setores.find(s => s.toLowerCase().includes(initialNicheName.toLowerCase()) || initialNicheName.toLowerCase().includes(s.toLowerCase()));
      if (found) setSetor(found);
      else setSetor(initialNicheName);
    }
  }, [initialNicheName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !empresa.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Build the WhatsApp message string
    const whatsappNumber = '5511999998888'; // Custom portfolio developer WhatsApp number
    const baseText = `Olá! Meu nome é ${nome.trim()}, tenho um negócio de ${setor} chamado "${empresa.trim()}" e gostaria de solicitar uma demonstração gratuita de site personalizado.`;
    const encodedText = encodeURIComponent(baseText);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Simulate small feedback delay, then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  return (
    <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden" id="contact-section">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-blue-900/20 to-transparent blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Text Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="text-xs font-bold text-blue-400 tracking-widest uppercase font-mono bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
              SOLICITAÇÃO DE SITE GRÁTIS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-6 tracking-tight leading-snug">
              Quer ver como ficaria o site do seu negócio?
            </h2>
            <p className="text-sm text-slate-300 font-normal mt-4 leading-relaxed">
              Eu faço uma demonstração personalizada gratuitamente para você visualizar o design, as cores e as funcionalidades ideais para a sua empresa local antes de decidir fechar qualquer compromisso.
            </p>

            <div className="mt-8 space-y-4 text-xs text-slate-300 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3 text-left">
                <div className="h-5 w-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                <p><strong>Custo Zero Inicial:</strong> Você recebe o link de rascunho funcional em até 48 horas.</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="h-5 w-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                <p><strong>Foco em Resultados:</strong> Layout voltado para o WhatsApp de vendas do seu segmento.</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="h-5 w-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                <p><strong>Atendimento 100% Direto:</strong> Fale direto com o desenvolvedor, sem intermediários ou burocracia.</p>
              </div>
            </div>
          </div>

          {/* Form Card Right Column */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-2xl opacity-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs">
                  <Sparkles size={14} className="fill-blue-200" />
                </div>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-white tracking-tight">
                  Preencha para gerar a mensagem
                </h3>
              </div>

              {error && (
                <div className="bg-red-950/30 border border-red-500/30 text-red-400 rounded-xl p-3 text-xs flex items-center gap-2 mb-4">
                  <AlertCircle size={14} />
                  <span>{error}</span>
                </div>
              )}

              {isSubmitting ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin mb-4" />
                  <p className="text-sm font-semibold text-white">Criando sua Proposta no WhatsApp...</p>
                  <p className="text-xs text-slate-400 mt-1.5 max-w-xs leading-relaxed">
                    Você será redirecionado para o chat privado do desenvolvedor com a mensagem pré-configurada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João da Silva"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-hidden focus:border-blue-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Nome da Sua Empresa/Negócio *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Barbearia do João"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-hidden focus:border-blue-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Selecione o Setor do seu Negócio
                    </label>
                    <select
                      value={setor}
                      onChange={(e) => setSetor(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 focus:outline-hidden focus:border-blue-500"
                    >
                      {setores.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-xs font-bold py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-900/30 active:scale-95 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                  >
                    <MessageCircle size={16} className="fill-blue-200 text-blue-600" />
                    Solicitar demonstração pelo WhatsApp
                  </button>

                  <p className="text-[10px] text-slate-500 text-center mt-3">
                    Ao clicar, o WhatsApp abrirá automaticamente. É gratuito e sem nenhum compromisso de compra.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
