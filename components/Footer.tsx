import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white/60 py-10 text-sm pb-32 sm:pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; 2026 Priscilla Moreira - Análise Corporal. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="text-xs max-w-2xl mx-auto text-white/30">
          Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;