import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Search, HeartHandshake, Award, ArrowUpRight, TrendingUp } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Mais Credibilidade',
      description: 'Pesquisas mostram que clientes desconfiam de empresas que têm apenas redes sociais. Um site próprio profissional transmite solidez, estabilidade e confiança instantânea.',
      icon: <Award size={20} className="text-blue-600" />,
      stat: '76% confiam mais'
    },
    {
      title: 'Mais Clientes Qualificados',
      description: 'Seu site funciona como um vendedor incansável 24 horas por dia, filtrando curiosos e direcionando para seu WhatsApp apenas quem realmente está pronto para fechar.',
      icon: <Users size={20} className="text-blue-600" />,
      stat: 'Vendas no piloto automático'
    },
    {
      title: 'Encontrado no Google',
      description: 'Quando alguém pesquisar por serviços próximos (ex: "clínica odontológica perto de mim"), o seu site estará pronto para ser exibido na primeira página do maior buscador do mundo.',
      icon: <Search size={20} className="text-blue-600" />,
      stat: 'Tráfego Orgânico Grátis'
    },
    {
      title: 'Atendimento Facilitado',
      description: 'Chega de perder horas repetindo as mesmas informações no direct ou chat. Seu site tira dúvidas frequentes, mostra preços e localizações de forma automática.',
      icon: <HeartHandshake size={20} className="text-blue-600" />,
      stat: 'Economia de tempo'
    },
    {
      title: 'Presença Profissional',
      description: 'Destaque-se da concorrência amadora. Mostre que o seu negócio local investe em qualidade visual, experiência do cliente e excelência tecnológica.',
      icon: <Shield size={20} className="text-blue-600" />,
      stat: 'Diferencial Competitivo'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden" id="benefits-section">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase font-mono bg-blue-50 px-3.5 py-1 rounded-full">
              RETORNO SOBRE INVESTIMENTO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
              Por que sua empresa local precisa de um site hoje?
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-4 leading-relaxed">
              Depender apenas do Instagram ou do WhatsApp é arriscado. O algoritmo muda, as redes oscilam e você compete por atenção a todo segundo.
            </p>
            <p className="text-sm text-slate-500 font-normal mt-3 leading-relaxed">
              O seu site oficial é a única plataforma digital que pertence 100% à sua marca, onde você dita as regras e o cliente foca apenas nos seus serviços.
            </p>

            {/* Quick mini performance box */}
            <div className="mt-8 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3.5 max-w-sm mx-auto lg:mx-0">
              <div className="h-10 w-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                <TrendingUp size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900 leading-tight">Valorização da sua Marca</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Empresas com site oficial podem cobrar até 30% mais caro pelos mesmos serviços devido à percepção de valor.</p>
              </div>
            </div>
          </div>

          {/* Right Visual List Column */}
          <div className="lg:col-span-7 space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200/80 p-5 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-slate-100/50 flex flex-col sm:flex-row gap-4 items-start transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="h-10 w-10 bg-white border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>

                {/* Text Context */}
                <div className="flex-1 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
                      {benefit.title}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 rounded-full px-2 py-0.5 font-mono uppercase tracking-wider group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
