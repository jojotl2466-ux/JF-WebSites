import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Home as HomeIcon,
  Briefcase,
  Wrench,
  Phone,
  MapPin,
  Clock,
  Check,
  Star,
  DollarSign,
  Send,
  Shield,
  Heart,
  Grid,
  Map,
  FileText,
  AlertTriangle,
  Menu,
  ChevronRight
} from 'lucide-react';

interface RendererProps {
  nicheId: string;
  onActionClick: (msg: string) => void;
}

export const NicheMockupRenderer: React.FC<RendererProps> = ({ nicheId, onActionClick }) => {
  // Mini state for templates to increase interactivity
  const [activeTab, setActiveTab] = useState<'inicio' | 'servicos' | 'sobre' | 'contato'>('inicio');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('Mensal');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
  const [propertyFilter, setPropertyFilter] = useState<'todos' | 'comprar' | 'alugar'>('todos');

  const handleFormSubmit = (e: React.FormEvent, business: string) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onActionClick(`Agendamento enviado para ${business}! Obrigado.`);
    }, 2000);
  };

  const getCommonHeader = (logo: React.ReactNode, title: string, primaryColor: string) => (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-2">
        {logo}
        <span className="font-bold text-gray-800 tracking-tight text-sm md:text-base">{title}</span>
      </div>
      <nav className="hidden sm:flex items-center gap-4 text-xs font-medium text-gray-600">
        <button onClick={() => setActiveTab('inicio')} className={`hover:text-gray-900 ${activeTab === 'inicio' ? 'text-blue-600 font-semibold' : ''}`}>Início</button>
        <button onClick={() => setActiveTab('servicos')} className={`hover:text-gray-900 ${activeTab === 'servicos' ? 'text-blue-600 font-semibold' : ''}`}>Serviços</button>
        <button onClick={() => setActiveTab('sobre')} className={`hover:text-gray-900 ${activeTab === 'sobre' ? 'text-blue-600 font-semibold' : ''}`}>Sobre Nós</button>
        <button onClick={() => setActiveTab('contato')} className={`hover:text-gray-900 ${activeTab === 'contato' ? 'text-blue-600 font-semibold' : ''}`}>Contato</button>
      </nav>
      <button
        onClick={() => onActionClick(`Botão Agendar do site ${title} clicado`)}
        className="text-xs px-3 py-1.5 rounded-full font-medium text-white transition-all hover:brightness-95 active:scale-95"
        style={{ backgroundColor: primaryColor }}
      >
        Falar no WhatsApp
      </button>
    </header>
  );

  const getFooter = (title: string, primaryColor: string) => (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-800 text-center text-xs mt-auto">
      <p className="font-semibold text-white mb-2">{title}</p>
      <p className="max-w-md mx-auto mb-4 text-[10px] leading-relaxed">
        © 2026 {title}. Todos os direitos reservados. Website desenvolvido para fins de apresentação e demonstração de portfólio.
      </p>
      <div className="flex items-center justify-center gap-4 text-[11px]">
        <span className="flex items-center gap-1"><MapPin size={12} style={{ color: primaryColor }} /> Centro da Cidade</span>
        <span className="flex items-center gap-1"><Phone size={12} style={{ color: primaryColor }} /> (11) 99999-8888</span>
      </div>
    </footer>
  );

  // 1. BARBEARIA
  if (nicheId === 'barbearia') {
    const pColor = '#B8860B'; // Dark Goldenrod/Gold
    return (
      <div className="bg-[#121212] text-white min-h-full flex flex-col font-sans">
        {/* Header */}
        <header className="border-b border-zinc-800 bg-[#1a1a1a] sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="text-[#B8860B]" size={20} />
            <span className="font-serif font-bold text-[#B8860B] tracking-widest text-sm md:text-base">DON CORLEONE</span>
          </div>
          <button
            onClick={() => onActionClick('Barbearia: Agendamento WhatsApp')}
            className="text-xs px-4 py-2 bg-[#B8860B] text-black font-semibold rounded-md hover:bg-yellow-600 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Phone size={12} /> Agendar Agora
          </button>
        </header>

        {/* Hero */}
        <div className="relative overflow-hidden bg-radial from-zinc-800 to-zinc-950 py-12 px-6 text-center border-b border-zinc-800">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#B8860B] border border-[#B8860B] px-2.5 py-1 rounded-sm mb-3 font-semibold">
            ESTILO & ATITUDE
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-2 text-white">
            Muito mais que um corte, <br/><span className="text-[#B8860B]">uma experiência premium</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Profissionais experientes, toalha quente, cerveja gelada e um ambiente clássico criado para você relaxar.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onActionClick('Barbearia: Ver Serviços')}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-sm hover:bg-zinc-200 transition-all"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => onActionClick('Barbearia: Como Chegar')}
              className="px-4 py-2 bg-transparent text-white border border-zinc-700 text-xs font-semibold rounded-sm hover:bg-zinc-900 transition-all"
            >
              Como Chegar
            </button>
          </div>
        </div>

        {/* Info Fast Bar */}
        <div className="grid grid-cols-3 divide-x divide-zinc-800 bg-zinc-900 text-center py-4 px-2 text-[10px] md:text-xs">
          <div className="flex flex-col items-center gap-1">
            <Clock size={14} className="text-[#B8860B]" />
            <span className="font-semibold">Seg a Sáb</span>
            <span className="text-zinc-500">09h às 20h</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin size={14} className="text-[#B8860B]" />
            <span className="font-semibold">Centro</span>
            <span className="text-zinc-500">Rua da Navalha, 120</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star size={14} className="text-[#B8860B]" />
            <span className="font-semibold">Nota 4.9</span>
            <span className="text-zinc-500">500+ Avaliações</span>
          </div>
        </div>

        {/* Services Section */}
        <div className="p-6">
          <h2 className="text-center font-serif text-lg font-bold mb-4 tracking-widest text-[#B8860B]">TABELA DE SERVIÇOS</h2>
          <div className="space-y-3 max-w-md mx-auto">
            {[
              { id: 'corte', title: 'Corte de Cabelo Masculino', desc: 'Lavagem inclusa, finalização com pomada e massagem.', price: 'R$ 55' },
              { id: 'barba', title: 'Barboterapia Completa', desc: 'Toalha quente, óleos essenciais, massagem facial e navalha.', price: 'R$ 45' },
              { id: 'combo', title: 'Combo Corleone (Corte + Barba)', desc: 'O pacote completo com desconto e cerveja cortesia.', price: 'R$ 89' },
              { id: 'pigmentacao', title: 'Pigmentação & Camuflagem', desc: 'Discreta e natural, corrige falhas em minutos.', price: 'R$ 30' }
            ].map((srv) => (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`p-3.5 rounded-md border text-left cursor-pointer transition-all ${
                  selectedService === srv.id
                    ? 'bg-zinc-900 border-[#B8860B]'
                    : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-sm text-white">{srv.title}</h3>
                  <span className="text-[#B8860B] font-bold text-sm">{srv.price}</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-normal">{srv.desc}</p>
                {selectedService === srv.id && (
                  <div className="mt-3 pt-3 border-t border-zinc-800 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onActionClick(`Barbearia: Agendar ${srv.title}`);
                      }}
                      className="text-[11px] px-3 py-1.5 bg-[#B8860B] text-black font-semibold rounded-sm hover:brightness-90 transition-all"
                    >
                      Solicitar Agendamento
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-zinc-950 p-6 border-t border-zinc-900">
          <div className="max-w-md mx-auto">
            <h3 className="font-serif text-center font-bold text-base text-[#B8860B] mb-2">AGENDAMENTO ONLINE RÁPIDO</h3>
            <p className="text-zinc-400 text-center text-[11px] mb-4">Envie seu horário desejado, responderemos no WhatsApp em minutos.</p>
            {formSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/50 rounded p-4 text-center">
                <Check className="mx-auto text-emerald-400 mb-1" size={18} />
                <p className="text-emerald-400 font-semibold text-xs">Solicitação Enviada!</p>
                <p className="text-zinc-400 text-[10px] mt-1">Estamos checando a agenda e entraremos em contato.</p>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'Don Corleone Barbearia')} className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs p-2.5 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-hidden focus:border-[#B8860B]"
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-hidden focus:border-[#B8860B]"
                />
                <input
                  type="text"
                  placeholder="Horário desejado (ex: Sábado às 14h)"
                  required
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full text-xs p-2.5 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-hidden focus:border-[#B8860B]"
                />
                <button
                  type="submit"
                  className="w-full text-xs py-2.5 bg-[#B8860B] text-black font-bold rounded-sm uppercase tracking-wider hover:bg-yellow-600 transition-all active:scale-95"
                >
                  Consultar Disponibilidade
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-950 text-zinc-600 py-6 px-4 border-t border-zinc-900 text-center text-xs mt-auto">
          <p className="font-serif font-bold text-white mb-2 tracking-widest text-xs text-[#B8860B]">DON CORLEONE</p>
          <p className="max-w-md mx-auto mb-4 text-[10px] leading-relaxed text-zinc-500">
            © 2026 Don Corleone. Projeto demonstrativo desenvolvido para apresentação de portfólio.
          </p>
        </footer>
      </div>
    );
  }

  // 2. SALÃO DE BELEZA
  if (nicheId === 'salao') {
    const pColor = '#EC4899'; // Pink
    return (
      <div className="bg-[#FAF7F6] text-gray-800 min-h-full flex flex-col font-sans">
        {getCommonHeader(<Sparkles className="text-pink-500" size={18} />, 'AURA BEAUTY', pColor)}

        {/* Hero */}
        <div className="py-12 px-6 text-center bg-radial from-pink-50 to-transparent">
          <span className="text-[10px] font-semibold text-pink-600 uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full mb-3 inline-block">
            Sinta-se Deslumbrante Todos os Dias
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight mb-3">
            Realce sua beleza natural <br className="hidden sm:inline" /> no melhor salão da cidade
          </h1>
          <p className="text-xs text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
            Oferecemos serviços personalizados de corte, coloração de luxo, tratamentos capilares profundos, unhas decoradas e maquiagem profissional.
          </p>
          <button
            onClick={() => onActionClick('Salão: Solicitar Orçamento')}
            className="px-6 py-2.5 bg-pink-500 text-white text-xs font-semibold rounded-full hover:bg-pink-600 shadow-md hover:shadow-pink-200 transition-all"
          >
            Ver Agenda de Hoje
          </button>
        </div>

        {/* Categories Carousel / Cards */}
        <div className="px-6 py-4">
          <h2 className="text-center font-serif text-base font-bold text-gray-800 mb-4">Nossas Especialidades</h2>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {[
              { title: 'Terapia Capilar', icon: <Sparkles className="text-pink-500" size={16} />, price: 'A partir de R$ 90' },
              { title: 'Loiras & Mechas', icon: <Sparkles className="text-pink-500" size={16} />, price: 'Sob avaliação' },
              { title: 'Unhas Premium', icon: <Sparkles className="text-pink-500" size={16} />, price: 'A partir de R$ 45' },
              { title: 'Maquiagem Glow', icon: <Sparkles className="text-pink-500" size={16} />, price: 'A partir de R$ 120' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-pink-100 text-center flex flex-col items-center shadow-xs">
                <div className="p-2 bg-pink-50 rounded-full mb-1.5">{item.icon}</div>
                <h3 className="font-semibold text-xs text-gray-800 mb-0.5">{item.title}</h3>
                <span className="text-[10px] text-pink-500 font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Aura */}
        <div className="bg-white p-6 border-y border-pink-50">
          <div className="max-w-md mx-auto text-left">
            <h3 className="font-serif font-bold text-sm text-gray-800 mb-3 text-center">Por que escolher o Aura?</h3>
            <div className="space-y-2.5 text-xs text-gray-600">
              <p className="flex items-start gap-2">
                <Check className="text-pink-500 shrink-0 mt-0.5" size={14} />
                <span><strong>Equipe Master:</strong> Cabeleireiros e esteticistas premiados e constantemente atualizados.</span>
              </p>
              <p className="flex items-start gap-2">
                <Check className="text-pink-500 shrink-0 mt-0.5" size={14} />
                <span><strong>Produtos de Luxo:</strong> Utilizamos apenas marcas renomadas (Kérastase, L'Oréal, Wella).</span>
              </p>
              <p className="flex items-start gap-2">
                <Check className="text-pink-500 shrink-0 mt-0.5" size={14} />
                <span><strong>Biossegurança:</strong> Ferramentas 100% esterilizadas e desinfetadas para seu bem-estar.</span>
              </p>
            </div>
          </div>
        </div>

        {getFooter('Aura Beauty', pColor)}
      </div>
    );
  }

  // 3. CLÍNICA ODONTOLÓGICA
  if (nicheId === 'clinica') {
    const pColor = '#0284C7'; // Sky-600
    return (
      <div className="bg-[#F8FAFC] text-gray-800 min-h-full flex flex-col font-sans">
        {getCommonHeader(<Stethoscope className="text-sky-600" size={18} />, 'ODONTO CLÍNICA', pColor)}

        {/* Hero */}
        <div className="py-12 px-6 text-center bg-radial from-sky-50 to-transparent">
          <span className="text-[10px] font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
            CRO/SP 123456 • Clínica Integrada
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            O sorriso que você sempre <br/> sonhou, ao seu alcance
          </h1>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            Tratamentos modernos, sem dor e de alta tecnologia para toda a sua família. Especialistas em Implantes, Aparelhos Invisíveis e Estética Dental.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onActionClick('Odonto: Agendar Consulta')}
              className="w-full sm:w-auto px-6 py-2.5 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 shadow-md transition-all flex items-center justify-center gap-2"
            >
              Agendar Avaliação Inicial
            </button>
            <button
              onClick={() => onActionClick('Odonto: Ligar')}
              className="w-full sm:w-auto px-6 py-2.5 bg-white text-sky-600 border border-sky-100 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-1"
            >
              Urgência 24h
            </button>
          </div>
        </div>

        {/* Mini Services Cards */}
        <div className="p-6">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="font-bold text-sm text-slate-800 text-center mb-1">Nossos Tratamentos</h3>
            {[
              { title: 'Implantes Dentários', desc: 'Recupere sua mastigação e autoconfiança de forma segura e indolor.' },
              { title: 'Invisalign (Alinhadores)', desc: 'Alinhamento dental rápido, discreto, confortável e totalmente estético.' },
              { title: 'Clareamento a Laser', desc: 'Dentes dentes visivelmente mais brancos na primeira sessão clínica.' },
              { title: 'Odontopediatria', desc: 'Cuidado afetuoso e especializado para garantir a saúde bucal dos seus filhos.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-100 text-left shadow-xs flex gap-3">
                <div className="h-6 w-6 rounded-full bg-sky-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="text-sky-600" size={14} />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-800">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {getFooter('Odonto Clínica', pColor)}
      </div>
    );
  }

  // 4. RESTAURANTE
  if (nicheId === 'restaurante') {
    const pColor = '#EA580C'; // Orange-600
    return (
      <div className="bg-[#1C1917] text-amber-50 min-h-full flex flex-col font-sans">
        {/* Header */}
        <header className="border-b border-stone-800 bg-[#292524] sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <UtensilsCrossed className="text-orange-500" size={18} />
            <span className="font-bold text-orange-500 tracking-wider text-sm">CANTINA BELLA</span>
          </div>
          <button
            onClick={() => onActionClick('Restaurante: Reservar Mesa')}
            className="text-xs px-3 py-1.5 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-all"
          >
            Fazer Pedido
          </button>
        </header>

        {/* Hero */}
        <div className="py-12 px-6 text-center bg-stone-900 border-b border-stone-800">
          <span className="text-[10px] uppercase tracking-widest text-orange-500 bg-orange-950/40 px-2.5 py-1 rounded-sm mb-3 inline-block border border-orange-900/50">
            Cozinha Artesanal & Amor
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
            Sabores autênticos que <br/> reúnem quem você ama
          </h1>
          <p className="text-xs text-stone-400 max-w-md mx-auto mb-6 leading-relaxed">
            Ingredientes sempre frescos, receitas de família passadas por gerações e um tempero simplesmente inesquecível. Peça delivery ou faça sua reserva.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onActionClick('Restaurante: Ver Cardápio')}
              className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-md transition-all"
            >
              Ver Menu Completo
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="p-6">
          <h3 className="font-serif text-center font-bold text-base text-orange-500 mb-4 tracking-widest">DESTAQUES DO CARDÁPIO</h3>
          <div className="space-y-3 max-w-md mx-auto">
            {[
              { name: 'Parmegiana Clássica', desc: 'Filé mignon empanado, molho de tomate caseiro gratinado com muçarela.', price: 'R$ 62,00' },
              { name: 'Fettuccine Alfredo', desc: 'Massa fresca, molho cremoso à base de manteiga, creme de leite e queijo parmesão.', price: 'R$ 49,00' },
              { name: 'Pizza di Bufala', desc: 'Molho de tomate especial, muçarela de búfala fresca, tomate cereja e manjericão.', price: 'R$ 54,00' }
            ].map((dish, idx) => (
              <div key={idx} className="bg-[#292524] p-3 rounded-lg border border-stone-800 text-left">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-white">{dish.name}</span>
                  <span className="text-orange-500 font-bold text-xs">{dish.price}</span>
                </div>
                <p className="text-stone-400 text-[10px] leading-relaxed">{dish.desc}</p>
                <button
                  onClick={() => onActionClick(`Restaurante: Adicionar ${dish.name} no WhatsApp`)}
                  className="mt-2 text-[10px] text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
                >
                  <Send size={10} /> Pedir no WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-[#141211] text-stone-600 py-6 px-4 border-t border-stone-900 text-center text-xs mt-auto">
          <p className="font-serif font-bold text-white mb-2 tracking-widest text-xs text-orange-500">CANTINA BELLA</p>
          <p className="max-w-md mx-auto mb-4 text-[10px] leading-relaxed text-stone-500">
            © 2026 Cantina Bella. Projeto demonstrativo criado para apresentação de portfólio.
          </p>
        </footer>
      </div>
    );
  }

  // 5. ACADEMIA
  if (nicheId === 'academia') {
    const pColor = '#10B981'; // Emerald-500 (representing energetic aesthetic)
    return (
      <div className="bg-[#0b0f19] text-gray-100 min-h-full flex flex-col font-sans">
        {/* Header */}
        <header className="border-b border-gray-800 bg-[#111827] sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Dumbbell className="text-emerald-400" size={18} />
            <span className="font-black text-white tracking-tighter text-sm uppercase">IRON / FITNESS</span>
          </div>
          <button
            onClick={() => onActionClick('Academia: Falar com Consultor')}
            className="text-xs px-3 py-1.5 bg-emerald-500 text-black font-bold rounded-sm uppercase tracking-wide hover:bg-emerald-400 transition-all"
          >
            Matricule-se
          </button>
        </header>

        {/* Hero */}
        <div className="py-12 px-6 text-center bg-radial from-emerald-950/20 to-transparent border-b border-gray-800">
          <span className="text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm mb-3 inline-block font-mono">
            // NO PAIN NO GAIN
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
            CONSTRUA A SUA MELHOR VERSÃO <span className="text-emerald-400">HOJE</span>
          </h1>
          <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6 leading-relaxed">
            Área de musculação de última geração, professores capacitados, aulas de spinning, funcional, lutas e acompanhamento dedicado.
          </p>
          <button
            onClick={() => onActionClick('Academia: Solicitar Aula Grátis')}
            className="px-5 py-2.5 bg-emerald-500 text-black text-xs font-bold rounded-sm hover:bg-emerald-400 transition-all uppercase tracking-wider"
          >
            Ganhar 1 Dia de Treino Livre
          </button>
        </div>

        {/* Pricing Grid */}
        <div className="p-6">
          <h3 className="font-extrabold text-center text-sm text-white uppercase mb-4 tracking-wider">Nossos Planos</h3>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {[
              { name: 'Plano Slim', price: 'R$ 89,90', desc: 'Acesso à musculação e área cardio de Seg a Sex.' },
              { name: 'Plano Black', price: 'R$ 129,90', desc: 'Acesso livre 7 dias por semana, todas as aulas e avaliação física.' }
            ].map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlan(plan.name)}
                className={`p-3.5 rounded-sm border text-left cursor-pointer transition-all ${
                  selectedPlan === plan.name ? 'bg-gray-900 border-emerald-500' : 'bg-gray-950 border-gray-800'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-xs text-white">{plan.name}</span>
                </div>
                <div className="text-emerald-400 font-extrabold text-sm mb-1">{plan.price}<span className="text-[9px] text-gray-500 font-normal">/mês</span></div>
                <p className="text-gray-400 text-[10px] leading-relaxed mb-3">{plan.desc}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onActionClick(`Academia: Quero o ${plan.name}`);
                  }}
                  className={`w-full text-[9px] py-1 text-center font-bold uppercase ${
                    selectedPlan === plan.name ? 'bg-emerald-500 text-black' : 'bg-gray-800 text-white'
                  } rounded-xs`}
                >
                  Selecionar Plano
                </button>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-[#06080e] text-gray-600 py-6 px-4 border-t border-gray-900 text-center text-xs mt-auto">
          <p className="font-black text-white mb-2 tracking-tighter text-xs">IRON FITNESS</p>
          <p className="max-w-md mx-auto mb-4 text-[10px] leading-relaxed text-gray-500">
            © 2026 Iron Fitness. Layout de apresentação de portfólio.
          </p>
        </footer>
      </div>
    );
  }

  // 6. IMOBILIÁRIA
  if (nicheId === 'imobiliaria') {
    const pColor = '#2563EB'; // Blue-600
    return (
      <div className="bg-[#F8FAFC] text-slate-800 min-h-full flex flex-col font-sans">
        {getCommonHeader(<HomeIcon className="text-blue-600" size={18} />, 'VALE IMOVEIS', pColor)}

        {/* Hero */}
        <div className="py-10 px-6 text-center bg-radial from-blue-50 to-transparent">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-2">
            O lar perfeito para sua família <br/> está mais perto do que você imagina
          </h1>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-5 leading-relaxed">
            Consulte nossa curadoria exclusiva de casas, apartamentos e terrenos residenciais prontos para morar nas melhores regiões da cidade.
          </p>

          {/* Filter Bar */}
          <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs max-w-xs mx-auto flex gap-1 justify-center mb-4">
            <button
              onClick={() => setPropertyFilter('todos')}
              className={`text-[10px] px-2.5 py-1 rounded font-medium transition-all ${
                propertyFilter === 'todos' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Ver Todos
            </button>
            <button
              onClick={() => setPropertyFilter('comprar')}
              className={`text-[10px] px-2.5 py-1 rounded font-medium transition-all ${
                propertyFilter === 'comprar' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Comprar
            </button>
            <button
              onClick={() => setPropertyFilter('alugar')}
              className={`text-[10px] px-2.5 py-1 rounded font-medium transition-all ${
                propertyFilter === 'alugar' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Alugar
            </button>
          </div>
        </div>

        {/* Properties list */}
        <div className="px-6 py-2">
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-6">
            {[
              { title: 'Apartamento Jardim das Flores', price: 'R$ 380.000', type: 'comprar', specs: '2 Qtos • 65m² • Garagem', region: 'Zona Oeste' },
              { title: 'Casa de Condomínio', price: 'R$ 3.200/mês', type: 'alugar', specs: '3 Qtos • 120m² • Churrasqueira', region: 'Parque Real' },
              { title: 'Studio Central Mobiliado', price: 'R$ 1.650/mês', type: 'alugar', specs: '1 Qto • 35m² • Portaria 24h', region: 'Centro' },
              { title: 'Sobrado Contemporâneo', price: 'R$ 680.000', type: 'comprar', specs: '4 Qtos • 180m² • Piscina', region: 'Bairro Alto' }
            ]
              .filter(item => propertyFilter === 'todos' || item.type === propertyFilter)
              .map((prop, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden text-left shadow-xs flex flex-col">
                  {/* Mock image */}
                  <div className="h-20 bg-slate-200 w-full relative flex items-center justify-center text-[10px] font-semibold text-slate-500">
                    <HomeIcon size={16} className="text-slate-400 absolute left-2 top-2" />
                    <span>Foto do Imóvel</span>
                    <span className="absolute right-2 bottom-2 bg-blue-100 text-blue-700 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                      {prop.type === 'comprar' ? 'Venda' : 'Locação'}
                    </span>
                  </div>
                  <div className="p-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] text-slate-400 font-semibold uppercase">{prop.region}</span>
                      <h4 className="font-bold text-[11px] text-slate-800 leading-tight mb-1 line-clamp-1">{prop.title}</h4>
                      <p className="text-slate-500 text-[9px] mb-1">{prop.specs}</p>
                    </div>
                    <div>
                      <span className="text-blue-600 font-extrabold text-xs block mb-1.5">{prop.price}</span>
                      <button
                        onClick={() => onActionClick(`Imobiliária: Consultar ${prop.title}`)}
                        className="w-full text-[9px] py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded text-center font-bold text-slate-700 transition-all"
                      >
                        Tenho Interesse
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {getFooter('Vale Imóveis', pColor)}
      </div>
    );
  }

  // 7. ESCRITÓRIO DE ADVOCACIA
  if (nicheId === 'advocacia') {
    const pColor = '#1E3A8A'; // Deep Navy
    return (
      <div className="bg-[#111827] text-gray-100 min-h-full flex flex-col font-sans">
        {/* Header */}
        <header className="border-b border-gray-800 bg-[#1f2937] sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Briefcase className="text-amber-400" size={18} />
            <span className="font-serif font-bold text-amber-400 tracking-wider text-xs md:text-sm">MARTINS ADVOGADOS</span>
          </div>
          <button
            onClick={() => onActionClick('Advocacia: Agendar Reunião')}
            className="text-xs px-3 py-1.5 bg-amber-500 text-gray-950 font-bold hover:bg-amber-400 transition-all rounded-xs"
          >
            Fale Conosco
          </button>
        </header>

        {/* Hero */}
        <div className="py-12 px-6 text-center bg-radial from-gray-900 to-transparent border-b border-gray-800">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 border border-amber-500/30 px-3 py-1 rounded-sm mb-3 inline-block font-serif">
            Atuação Jurídica de Excelência & Ética
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
            Defendendo seus direitos com <br/> dedicação e rigor técnico
          </h1>
          <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6 leading-relaxed">
            Nossa equipe oferece consultoria especializada para pessoas físicas e jurídicas, visando soluções ágeis, seguras e eficientes.
          </p>
          <button
            onClick={() => onActionClick('Advocacia: Consultar Caso')}
            className="px-5 py-2.5 bg-amber-500 text-gray-950 text-xs font-bold rounded-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
          >
            Falar com um Advogado de Plantão
          </button>
        </div>

        {/* Practice Areas */}
        <div className="p-6">
          <h3 className="font-serif text-center font-bold text-sm text-amber-400 mb-4 tracking-wider uppercase">ÁREAS DE ATUAÇÃO</h3>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {[
              { title: 'Direito do Trabalho', desc: 'Defesa de direitos trabalhistas, horas extras, rescisões e acordos.' },
              { title: 'Família & Sucessões', desc: 'Inventários, divórcios, pensão alimentícia e guarda de menores.' },
              { title: 'Direito Civil / Consumidor', desc: 'Contratos, cobranças indevidas, indenizações e danos morais.' },
              { title: 'Direito Empresarial', desc: 'Planejamento tributário, consultoria de contratos e societário.' }
            ].map((area, idx) => (
              <div key={idx} className="bg-gray-900/50 p-3 rounded-md border border-gray-800 text-left">
                <div className="flex items-center gap-1 mb-1">
                  <Check className="text-amber-400" size={12} />
                  <h4 className="font-bold text-[11px] text-white font-serif">{area.title}</h4>
                </div>
                <p className="text-gray-400 text-[10px] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-gray-950 text-gray-600 py-6 px-4 border-t border-gray-900 text-center text-xs mt-auto">
          <p className="font-serif font-bold text-amber-400 mb-1 tracking-widest text-xs">MARTINS ADVOCACIA</p>
          <p className="max-w-md mx-auto mb-4 text-[9px] leading-relaxed text-gray-500">
            © 2026 Martins Advogados. Demonstração criada exclusivamente para portfólio de design.
          </p>
        </footer>
      </div>
    );
  }

  // 8. AUTO ELÉTRICA
  const pColor = '#D97706'; // Amber-600 (Auto Yellow/Orange)
  return (
    <div className="bg-[#111] text-gray-100 min-h-full flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900 sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Wrench className="text-yellow-500" size={18} />
          <span className="font-black text-white tracking-tighter text-sm uppercase">AUTO-ELÉTRICA CENTRAL</span>
        </div>
        <button
          onClick={() => onActionClick('AutoElétrica: Ligar')}
          className="text-xs px-3 py-1.5 bg-yellow-500 text-black font-bold rounded-sm uppercase tracking-wide hover:bg-yellow-400 transition-all"
        >
          LIGAR AGORA
        </button>
      </header>

      {/* Hero */}
      <div className="py-12 px-6 text-center bg-zinc-950 border-b border-zinc-900 relative">
        <span className="text-[10px] uppercase tracking-wider text-yellow-500 font-bold mb-3 inline-block bg-yellow-500/10 px-2 py-0.5 rounded-sm">
          Ficou sem bateria? Nós vamos até você!
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
          SERVIÇO ELÉTRICO AUTOMOTIVO <br/> COM GARANTIA E CONFIANÇA
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6 leading-relaxed">
          Alternador, baterias novas, motor de partida, panes elétricas em geral, injeção e iluminação com preço justo e atendimento rápido.
        </p>
        <button
          onClick={() => onActionClick('AutoElétrica: Enviar Mensagem')}
          className="px-5 py-2.5 bg-yellow-500 text-black text-xs font-bold rounded-xs uppercase tracking-wider hover:bg-yellow-400 transition-all"
        >
          Chamar no WhatsApp (Socorro Rápido)
        </button>
      </div>

      {/* Services List */}
      <div className="p-6">
        <h3 className="font-black text-center text-sm text-white uppercase mb-4 tracking-widest">Nossos Serviços</h3>
        <div className="space-y-2.5 max-w-md mx-auto">
          {[
            { title: 'Socorro de Bateria de Plantão', desc: 'Entrega e instalação de baterias novas na sua garagem ou na rua.' },
            { title: 'Reparo de Motor de Partida & Alternador', desc: 'Evite problemas na partida. Revisão rápida e peças originais.' },
            { title: 'Diagnóstico por Scanner Digital', desc: 'Identificação rápida de erros na injeção e sensores do painel.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 p-3 rounded-md border border-zinc-800 text-left flex gap-3">
              <div className="h-5 w-5 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-yellow-500 font-bold text-xs">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-xs text-white uppercase">{item.title}</h4>
                <p className="text-gray-400 text-[10px] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-zinc-600 py-6 px-4 border-t border-zinc-900 text-center text-xs mt-auto">
        <p className="font-black text-white mb-2 tracking-tighter text-xs text-yellow-500">AUTO-ELÉTRICA CENTRAL</p>
        <p className="max-w-md mx-auto mb-4 text-[10px] leading-relaxed text-zinc-500">
          © 2026 Auto-Elétrica Central. Portfólio demonstrativo.
        </p>
      </footer>
    </div>
  );
};
