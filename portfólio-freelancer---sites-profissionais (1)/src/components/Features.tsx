import React from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  MessageSquare,
  MapPin,
  FileText,
  Search,
  Zap,
  Server,
  Globe,
  Check
} from 'lucide-react';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Site Responsivo',
      description: 'Design fluido adaptado perfeitamente para celulares, tablets e computadores de qualquer tamanho.',
      icon: <Smartphone size={20} className="text-blue-600" />
    },
    {
      title: 'WhatsApp Integrado',
      description: 'Botões flutuantes e chamadas inteligentes que conectam o cliente direto ao seu número de vendas.',
      icon: <MessageSquare size={20} className="text-emerald-600" />
    },
    {
      title: 'Google Maps',
      description: 'Localização interativa do seu estabelecimento para que os clientes te encontrem de forma simples.',
      icon: <MapPin size={20} className="text-red-500" />
    },
    {
      title: 'Formulário de Contato',
      description: 'Envio de dados estruturados diretamente para o WhatsApp ou e-mail, facilitando agendamentos.',
      icon: <FileText size={20} className="text-purple-600" />
    },
    {
      title: 'SEO Básico Otimizado',
      description: 'Site estruturado com as melhores práticas recomendadas para aparecer nas buscas orgânicas do Google.',
      icon: <Search size={20} className="text-amber-500" />
    },
    {
      title: 'Alta Velocidade',
      description: 'Desenvolvimento leve utilizando as tecnologias mais modernas de carregamento instantâneo.',
      icon: <Zap size={20} className="text-yellow-500 fill-yellow-100" />
    },
    {
      title: 'Hospedagem Opcional',
      description: 'Infraestrutura em nuvem segura para manter o seu site no ar 24h por dia sem oscilações.',
      icon: <Server size={20} className="text-indigo-600" />
    },
    {
      title: 'Domínio Personalizado',
      description: 'Auxílio completo para registro de domínio oficial com o nome da sua marca (ex: seunegocio.com.br).',
      icon: <Globe size={20} className="text-teal-600" />
    }
  ];

  return (
    <section className="bg-slate-50/50 py-20 md:py-28 border-y border-slate-100" id="features-section">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase font-mono bg-blue-50 px-3.5 py-1 rounded-full">
            RECURSOS E ENTREGA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
            Uma estrutura completa desenhada exclusivamente para converter clientes
          </h2>
          <p className="text-sm text-slate-500 font-normal mt-4 max-w-xl mx-auto">
            Não entrego apenas uma página bonita. Cada site é desenvolvido contendo todas as ferramentas essenciais para colocar o seu negócio no mapa e impulsionar suas vendas.
          </p>
        </div>

        {/* Features Bento/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100/50 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Badge */}
                <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-4 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Check indicator */}
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span className="text-blue-600 tracking-wider font-mono">100% INCLUSO</span>
                <div className="h-4 w-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Check size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
