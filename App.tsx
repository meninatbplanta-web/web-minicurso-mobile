import React, { useState, useEffect } from 'react';
import { EPISODES, SIMULATED_CURRENT_DATE, CART_OPEN_DATE } from './constants';
import { Episode } from './types';
import Header from './components/Header';
import EpisodeList from './components/EpisodeList';
import CommentsSection from './components/CommentsSection';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import { Play, Lock, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  // Use simulated date if available, otherwise use real now()
  const [currentDate] = useState<Date>(SIMULATED_CURRENT_DATE || new Date());
  
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Determine Cart Status
    setIsCartOpen(currentDate >= CART_OPEN_DATE);

    // Determine initial active episode (Latest released one)
    const releasedEpisodes = EPISODES.filter(ep => currentDate >= ep.releaseDate);
    
    if (releasedEpisodes.length > 0) {
      // Sort by date descending to get the latest
      const latest = releasedEpisodes[releasedEpisodes.length - 1];
      setActiveEpisode(latest);
    } else {
      // If nothing is released yet (e.g. user visits before Jan 12), show first but locked state handled in UI
      setActiveEpisode(EPISODES[0]);
    }
  }, [currentDate]);

  const handleEpisodeSelect = (episode: Episode) => {
    if (currentDate >= episode.releaseDate) {
      setActiveEpisode(episode);
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!activeEpisode) return <div className="h-screen flex items-center justify-center text-brand-main">Carregando...</div>;

  const isCurrentEpisodeLocked = currentDate < activeEpisode.releaseDate;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION / VIDEO PLAYER */}
        <div className="bg-gradient-to-b from-brand-dark to-brand-main text-white pb-12 pt-8">
          <div className="container mx-auto px-4">
            
            {/* Breadcrumb / Status */}
            <div className="mb-4 flex justify-center">
              {isCurrentEpisodeLocked ? (
                 <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                   <Lock size={16} />
                   Aula Bloqueada
                 </span>
              ) : (
                <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-in fade-in zoom-in duration-500">
                  <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse"></span>
                  EM EXIBIÇÃO
                </span>
              )}
            </div>

            {/* Video Container */}
            <div className="max-w-5xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl aspect-video relative ring-4 ring-white/10">
              {isCurrentEpisodeLocked ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-center p-6">
                  <Lock size={64} className="text-gray-600 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Este conteúdo ainda não está disponível</h2>
                  <p className="text-gray-400">
                    Disponível em: {activeEpisode.releaseDate.toLocaleDateString('pt-BR')} às {activeEpisode.releaseDate.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              ) : (
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeEpisode.videoId}?autoplay=0&rel=0&modestbranding=1`} 
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Title & Description */}
            <div className="max-w-4xl mx-auto mt-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {activeEpisode.type === 'CPL' && <span className="text-brand-gold block text-lg uppercase tracking-widest mb-2 font-extrabold">Aula 0{activeEpisode.id}</span>}
                {activeEpisode.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                {activeEpisode.description}
              </p>

              {/* Contextual Action Button (Hero) */}
              {isCartOpen && !isCurrentEpisodeLocked && (
                 <div className="mt-8">
                   <button className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-lg py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 animate-bounce">
                     QUERO FAZER MINHA INSCRIÇÃO AGORA
                   </button>
                   <p className="mt-2 text-xs text-white/60">Pagamento seguro • Garantia de 7 dias</p>
                 </div>
              )}
              
              {!isCartOpen && !isCurrentEpisodeLocked && (
                 <div className="mt-8 flex justify-center gap-4">
                   <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-colors flex items-center gap-2">
                     <Play size={18} className="fill-current" />
                     Baixar Material de Apoio (PDF)
                   </button>
                   <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors">
                     Entrar no Grupo VIP
                   </button>
                 </div>
              )}
            </div>
          </div>
        </div>

        <EpisodeList 
          episodes={EPISODES}
          activeEpisodeId={activeEpisode.id}
          currentDate={currentDate}
          onSelectEpisode={handleEpisodeSelect}
        />

        <CommentsSection />
        
      </main>

      <Footer />
      
      <StickyCTA isVisible={isCartOpen} />
      
      {/* Simulation Notice - REMOVE FOR PRODUCTION */}
      {SIMULATED_CURRENT_DATE && (
        <div className="fixed top-24 right-4 bg-red-600 text-white p-3 rounded shadow-lg text-xs max-w-[200px] z-50 opacity-80 hover:opacity-100 pointer-events-none">
          <div className="font-bold flex items-center gap-2"><AlertCircle size={14}/> MODO SIMULAÇÃO</div>
          <p>Data atual fixada em: <br/> {SIMULATED_CURRENT_DATE.toLocaleString('pt-BR')}</p>
        </div>
      )}
    </div>
  );
};

export default App;