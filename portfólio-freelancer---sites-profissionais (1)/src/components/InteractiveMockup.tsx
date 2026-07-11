import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Tablet,
  Laptop,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Sparkles,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { NicheId } from '../types';
import { NicheMockupRenderer } from './NicheMockups';

interface InteractiveMockupProps {
  nicheId: NicheId | null;
  nicheName: string;
  isOpen: boolean;
  onClose: () => void;
  onRequestFreeDemo: (nicheName: string) => void;
}

type DeviceType = 'desktop' | 'tablet' | 'mobile';

export const InteractiveMockup: React.FC<InteractiveMockupProps> = ({
  nicheId,
  nicheName,
  isOpen,
  onClose,
  onRequestFreeDemo
}) => {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [demoLog, setDemoLog] = useState<string | null>(null);

  if (!nicheId || !isOpen) return null;

  const handleActionClick = (message: string) => {
    setDemoLog(message);
    setTimeout(() => {
      setDemoLog(null);
    }, 4000);
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return '360px';
      case 'tablet':
        return '720px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const getDeviceHeight = () => {
    switch (device) {
      case 'mobile':
        return '640px';
      case 'tablet':
        return '850px';
      case 'desktop':
      default:
        return '600px';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-6 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800"
        >
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800 bg-slate-950 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <div className="ml-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">PROPOSTA DE LAYOUT INTERATIVA</span>
                <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Visualizando: <span className="text-blue-400 font-semibold">{nicheName}</span>
                </h2>
              </div>
            </div>

            {/* Viewport device switcher */}
            <div className="flex items-center justify-center bg-slate-900 rounded-xl p-1 border border-slate-800 self-center">
              {[
                { type: 'mobile', icon: <Smartphone size={16} />, label: 'Celular' },
                { type: 'tablet', icon: <Tablet size={16} />, label: 'Tablet' },
                { type: 'desktop', icon: <Laptop size={16} />, label: 'Desktop' }
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setDevice(item.type as DeviceType)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    device === item.type
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={item.label}
                >
                  {item.icon}
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Close Button */}
            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => onRequestFreeDemo(nicheName)}
                className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 active:scale-95 transition-all"
              >
                <Sparkles size={13} />
                Quero um site igual
              </button>
              <button
                onClick={onClose}
                className="rounded-full bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Device Simulator Container */}
          <div className="flex-1 bg-slate-950 p-4 md:p-6 flex flex-col items-center justify-center overflow-auto relative">
            {/* Top banner highlighting simulation concept */}
            <div className="absolute top-2 left-6 right-6 z-10 hidden md:flex items-center justify-between rounded-xl bg-blue-950/40 border border-blue-900/40 px-4 py-2 text-[11px] text-blue-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-blue-400" />
                <strong>Modo Simulação:</strong> Clique nos botões para testar as ações interativas do site proposto.
              </span>
              <span>100% Responsivo e otimizado para vendas.</span>
            </div>

            {/* Simulating Browser URL bar */}
            <div className="w-full max-w-4xl bg-slate-900 rounded-t-xl border-t border-x border-slate-800 px-4 py-2 flex items-center justify-between gap-4 mt-6 md:mt-4">
              <div className="flex items-center gap-2 text-slate-500">
                <ChevronLeft size={14} />
                <ChevronRight size={14} />
                <RotateCw size={12} />
              </div>
              <div className="flex-1 max-w-md bg-slate-950 rounded-md border border-slate-800 px-3 py-1 text-[10px] text-slate-400 font-mono text-center truncate">
                https://demo.{nicheId}.com.br
              </div>
              <div className="text-slate-500">
                <ExternalLink size={12} />
              </div>
            </div>

            {/* Render Simulated Site Inside Animated Device Window */}
            <motion.div
              animate={{
                width: getDeviceWidth(),
                height: getDeviceHeight(),
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`bg-white text-slate-900 border-x border-b border-slate-800 shadow-2xl relative overflow-auto ${
                device === 'mobile'
                  ? 'rounded-b-3xl border-4 border-slate-800'
                  : device === 'tablet'
                  ? 'rounded-b-2xl border-4 border-slate-800'
                  : 'rounded-b-xl'
              }`}
              style={{ maxWidth: '100%' }}
            >
              {/* Actual Mini Niche Render */}
              <div className="h-full overflow-auto flex flex-col">
                <NicheMockupRenderer nicheId={nicheId} onActionClick={handleActionClick} />
              </div>
            </motion.div>

            {/* Notification Toast for Interactive Clicks */}
            <AnimatePresence>
              {demoLog && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 border border-emerald-500/30 shadow-xl rounded-2xl px-5 py-3.5 flex items-center gap-3 text-xs text-white max-w-sm"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-400">Excelente!</p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {demoLog}. No site oficial do seu cliente, esta ação abrirá o WhatsApp dele de forma automatizada.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Trust Action bar */}
          <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-400">Gostou deste design? O site do seu negócio pode ser feito sob medida para você.</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Projeto demonstrativo criado com layout 100% responsivo e carregamento instantâneo.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white font-semibold transition-all px-4 py-2"
              >
                Voltar ao Portfólio
              </button>
              <button
                onClick={() => onRequestFreeDemo(nicheName)}
                className="text-xs px-5 py-2.5 rounded-full font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 active:scale-95 transition-all flex items-center gap-1.5"
              >
                Solicitar Demonstração Gratuita
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
