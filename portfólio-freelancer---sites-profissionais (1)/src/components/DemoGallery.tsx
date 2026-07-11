import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Scissors,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Home,
  Briefcase,
  Wrench,
  ExternalLink,
  ChevronRight,
  Info,
  CheckCircle,
  Eye
} from 'lucide-react';
import { NicheId } from '../types';

interface DemoItem {
  id: NicheId;
  title: string;
  category: string;
  tagline: string;
  icon: React.ReactNode;
  themeColor: string;
  accentBg: string;
  goal: string;
  features: string[];
}

interface DemoGalleryProps {
  onSelectDemo: (id: NicheId, title: string) => void;
}

export const DemoGallery: React.FC<DemoGalleryProps> = ({ onSelectDemo }) => {
  const [filter, setFilter] = useState<'todos' | 'servicos' | 'saude_estetica' | 'corporativo'>('todos');

  const demos: DemoItem[] = [
    {
      id: 'barbearia',
      title: 'Barbearia Don Corleone',
      category: 'saude_estetica',
      tagline: 'Estilo clássico & Atendimento moderno',
      icon: <Scissors className="text-amber-500" size={18} />,
      themeColor: '#B8860B',
      accentBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      goal: 'Atrair agendamentos pelo WhatsApp e automatizar a agenda',
      features: ['Tabela de preços interativa', 'Agendamento rápido', 'Depoimentos de clientes']
    },
    {
      id: 'salao',
      title: 'Salão Aura Beauty',
      category: 'saude_estetica',
      tagline: 'Realce sua beleza natural',
      icon: <Sparkles className="text-pink-500" size={18} />,
      themeColor: '#EC4899',
      accentBg: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      goal: 'Apresentar especialidades, pacotes e fechar agendamentos',
      features: ['Carrossel de tratamentos', 'Portfólio de cortes', 'Integração WhatsApp']
    },
    {
      id: 'clinica',
      title: 'Odonto Clínica Integrada',
      category: 'saude_estetica',
      tagline: 'O sorriso que você sempre sonhou',
      icon: <Stethoscope className="text-sky-500" size={18} />,
      themeColor: '#0284C7',
      accentBg: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
      goal: 'Gerar confiança médica e captar novos pacientes de implantes/aparelhos',
      features: ['Registro CRO visível', 'Formulário de pré-avaliação', 'FAQ de tratamentos']
    },
    {
      id: 'restaurante',
      title: 'Cantina Bella Itália',
      category: 'servicos',
      tagline: 'Sabores autênticos que unem pessoas',
      icon: <UtensilsCrossed className="text-orange-500" size={18} />,
      themeColor: '#EA580C',
      accentBg: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      goal: 'Impulsionar pedidos de delivery no WhatsApp e reservas de mesas',
      features: ['Menu digital com cliques', 'Botão de delivery direto', 'Google Maps integrado']
    },
    {
      id: 'academia',
      title: 'Iron Fitness Club',
      category: 'servicos',
      tagline: 'Construa sua melhor versão',
      icon: <Dumbbell className="text-emerald-500" size={18} />,
      themeColor: '#10B981',
      accentBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      goal: 'Aumentar matrículas online e agendamento de aulas grátis',
      features: ['Comparador de planos', 'Grade de horários', 'Chamada para ação agressiva']
    },
    {
      id: 'imobiliaria',
      title: 'Vale Imóveis',
      category: 'corporativo',
      tagline: 'O lar perfeito para sua família',
      icon: <Home className="text-blue-500" size={18} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      goal: 'Apresentar imóveis em destaque e captar leads qualificados',
      features: ['Filtro de busca rápido', 'Cards com detalhes (m²)', 'Contato com corretor']
    },
    {
      id: 'advocacia',
      title: 'Martins & Advogados',
      category: 'corporativo',
      tagline: 'Atuação Jurídica de Excelência',
      icon: <Briefcase className="text-amber-600" size={18} />,
      themeColor: '#1E3A8A',
      accentBg: 'bg-slate-500/10 text-slate-700 border-slate-500/20',
      goal: 'Transmitir autoridade jurídica e agendar consultas de avaliação',
      features: ['Áreas de atuação em grid', 'Perfil dos advogados', 'Solicitação de consulta']
    },
    {
      id: 'autoeletrica',
      title: 'Auto-Elétrica Central',
      category: 'servicos',
      tagline: 'Serviço elétrico automotivo de confiança',
      icon: <Wrench className="text-yellow-600" size={18} />,
      themeColor: '#D97706',
      accentBg: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      goal: 'Acionamento rápido de socorro mecânico e orçamentos pelo celular',
      features: ['Botão de ligar em destaque', 'Socorro rápido com um clique', 'Lista de serviços']
    }
  ];

  const filteredDemos = demos.filter(item => {
    if (filter === 'todos') return true;
    return item.category === filter;
  });

  return (
    <section className="bg-white py-20 md:py-28" id="demos-section">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase font-mono bg-blue-50 px-3.5 py-1 rounded-full">
            NOSSO PORTFÓLIO DE PROPOSTAS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
            Veja demonstrações interativas criadas para o seu setor
          </h2>
          <p className="text-sm text-slate-500 font-normal mt-4 max-w-xl mx-auto">
            Desenvolvo rascunhos focados no comportamento do cliente final. Escolha uma categoria abaixo e clique para navegar no site como se ele estivesse online.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos os Setores' },
            { id: 'saude_estetica', label: 'Saúde, Beleza & Estética' },
            { id: 'servicos', label: 'Serviços, Alimentação & Lazer' },
            { id: 'corporativo', label: 'Corporativos & Empresas Locais' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                filter === btn.id
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-950/10'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDemos.map((demo) => (
            <motion.div
              key={demo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-3xl border border-slate-100/90 hover:border-slate-300 shadow-xs hover:shadow-xl hover:shadow-slate-100/50 flex flex-col justify-between overflow-hidden transition-all duration-300 h-full"
            >
              {/* Card visual header (Mock screenshot background with niche elements) */}
              <div className="h-44 relative bg-slate-50 border-b border-slate-100 flex flex-col justify-between p-5 overflow-hidden">
                {/* Background decorative styling mimicking a layout skeleton */}
                <div className="absolute inset-0 bg-radial from-slate-100/30 to-transparent pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 h-24 w-40 bg-white border border-slate-200/50 rounded-2xl rotate-6 shadow-xs p-3 opacity-90 group-hover:-translate-y-2 group-hover:-translate-x-1 group-hover:rotate-4 transition-all duration-300">
                  <div className="h-2 w-16 bg-slate-200 rounded-full mb-1.5" />
                  <div className="h-1.5 w-24 bg-slate-100 rounded-full mb-1" />
                  <div className="h-1.5 w-20 bg-slate-100 rounded-full mb-2" />
                  <div className="h-3 w-8 rounded-full bg-blue-100" />
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full border text-[10px] font-bold ${demo.accentBg}`}>
                    {demo.icon}
                    <span>{demo.title.split(' ')[0]}</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-white/80 border border-slate-200/50 rounded px-1.5 py-0.5">
                    ID: {demo.id}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">MODELO PROPOSTO</p>
                  <h3 className="text-base font-bold text-slate-800 leading-tight mt-0.5">{demo.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium italic mb-4 leading-normal">
                    "{demo.tagline}"
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <p className="text-[11px] text-slate-600 leading-normal flex items-start gap-1.5">
                      <span className="text-blue-500 font-extrabold shrink-0">•</span>
                      <span><strong>Meta:</strong> {demo.goal}</span>
                    </p>
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Recursos Inclusos:</p>
                      <ul className="space-y-1 text-[11px] text-slate-500">
                        {demo.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle size={12} className="text-emerald-500" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Disclaimer and CTA Button */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {/* IMPORTANT disclaimer explicitly required in portuguese */}
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex gap-2">
                    <Info size={14} className="text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-[9px] text-slate-500 leading-normal">
                      <strong>Projeto demonstrativo</strong> desenvolvido para apresentar uma proposta de design. Não representa um cliente real.
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectDemo(demo.id, demo.title)}
                    className="w-full rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white hover:bg-blue-600 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-lg group-hover:shadow-blue-500/10 cursor-pointer"
                  >
                    <Eye size={13} className="text-slate-300 group-hover:text-white" />
                    Visualizar demonstração
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
