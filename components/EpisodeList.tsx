import React from 'react';
import { Episode } from '../types';
import { Lock, PlayCircle, CheckCircle2, Calendar } from 'lucide-react';

interface EpisodeListProps {
  episodes: Episode[];
  activeEpisodeId: number;
  currentDate: Date;
  onSelectEpisode: (episode: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ 
  episodes, 
  activeEpisodeId, 
  currentDate, 
  onSelectEpisode 
}) => {

  return (
    <div className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-1 h-8 bg-brand-gold rounded-full block"></span>
          Cronograma das Aulas
        </h3>

        {/* Desktop Grid / Mobile Horizontal Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {episodes.map((episode) => {
            const isReleased = currentDate >= episode.releaseDate;
            const isActive = activeEpisodeId === episode.id;
            const isExtra = episode.type === 'EXTRA';
            
            // Date formatting
            const dateStr = episode.releaseDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
            const timeStr = episode.releaseDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            return (
              <div 
                key={episode.id}
                onClick={() => isReleased && onSelectEpisode(episode)}
                className={`
                  relative rounded-xl overflow-hidden transition-all duration-300 border-2 flex flex-col group
                  ${isActive 
                    ? 'border-brand-gold shadow-lg shadow-brand-gold/20 bg-white ring-2 ring-brand-gold/50 ring-offset-2' 
                    : 'border-transparent hover:border-gray-200 bg-gray-50'
                  }
                  ${!isReleased ? 'opacity-60 cursor-not-allowed grayscale' : 'cursor-pointer hover:-translate-y-1'}
                `}
              >
                {/* Thumbnail Area */}
                <div className="relative h-36 bg-gray-200 w-full overflow-hidden">
                  <img 
                    src={episode.thumbnailUrl} 
                    alt={episode.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Status Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                     {!isReleased ? (
                       <div className="bg-gray-900/80 p-2 rounded-full backdrop-blur-sm">
                         <Lock className="text-gray-400 w-6 h-6" />
                       </div>
                     ) : isActive ? (
                       <div className="text-brand-gold animate-pulse">
                         <PlayCircle className="w-10 h-10 fill-current bg-white rounded-full" />
                       </div>
                     ) : (
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="w-10 h-10" />
                        </div>
                     )}
                  </div>
                  
                  {/* Badge */}
                  {isExtra && (
                     <div className="absolute top-2 right-2 bg-brand-dark text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                       Extra
                     </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                    <Calendar size={12} />
                    <span>{dateStr} às {timeStr}</span>
                    {isActive && <span className="text-brand-main font-bold ml-auto flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-main animate-pulse"></span> Assistindo</span>}
                  </div>
                  
                  <h4 className={`font-bold text-sm sm:text-base leading-tight mb-2 ${isActive ? 'text-brand-main' : 'text-gray-800'}`}>
                    {episode.id <= 4 ? `Aula 0${episode.id}: ` : ``} {episode.title}
                  </h4>
                  
                  <p className="text-xs text-gray-500 line-clamp-2 mt-auto">
                    {episode.description}
                  </p>

                  {/* Unlock text */}
                  {!isReleased && (
                    <div className="mt-3 pt-3 border-t border-gray-200 text-xs font-medium text-gray-400 text-center uppercase tracking-widest">
                      Em breve
                    </div>
                  )}
                  {isReleased && !isActive && (
                    <div className="mt-3 pt-3 border-t border-gray-200 text-xs font-bold text-brand-main flex items-center gap-1 justify-center group-hover:underline">
                      <CheckCircle2 size={12} />
                      Disponível
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;