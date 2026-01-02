import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark text-white py-4 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-gold p-1.5 rounded-lg text-brand-dark">
            <BrainCircuit size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight">Priscilla Moreira</h1>
            <p className="text-xs text-gray-300 font-light uppercase tracking-widest">Terapeuta Analista</p>
          </div>
        </div>
        
        <div className="hidden sm:block text-right">
          <p className="text-sm font-semibold text-brand-gold">SEMANA DA ANÁLISE CORPORAL</p>
          <p className="text-xs text-gray-300">12 a 26 de Janeiro de 2026</p>
        </div>
        
        {/* Mobile Date Badge */}
        <div className="sm:hidden bg-brand-main px-3 py-1 rounded-full text-xs font-semibold text-brand-gold border border-white/10">
          JAN 2026
        </div>
      </div>
    </header>
  );
};

export default Header;