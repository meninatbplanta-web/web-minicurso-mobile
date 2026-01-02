import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyCTAProps {
  isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-dark/95 backdrop-blur-md border-t-2 border-brand-gold shadow-[0_-5px_20px_rgba(0,0,0,0.3)] z-50 animate-in slide-in-from-bottom-20 duration-500">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-gold mb-1">
            <Sparkles size={16} className="animate-pulse" />
            <span className="font-bold text-sm tracking-wider uppercase">Vagas Abertas</span>
          </div>
          <p className="text-white text-sm sm:text-base font-medium leading-tight">
            Torne-se um <span className="font-bold">Terapeuta Analista Corporal</span> certificado.
          </p>
        </div>

        <button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group animate-pulse">
          GARANTIR MINHA VAGA
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;