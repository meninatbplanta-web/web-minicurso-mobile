import { Episode } from './types';

// --- SIMULATION CONFIGURATION ---
// SET THIS TO 'null' TO USE REAL SYSTEM TIME.
// Currently set to Jan 20, 2026 to demonstrate the "Open Cart" state and unlocked videos.
export const SIMULATED_CURRENT_DATE: Date | null = new Date('2026-01-20T10:00:00'); 

export const CART_OPEN_DATE = new Date('2026-01-18T15:00:00');

export const EPISODES: Episode[] = [
  // FASE 1: CPLs
  {
    id: 1,
    title: "A Verdade sobre sua Genética",
    description: "Por que dietas falham e como sua mente moldou seu corpo.",
    releaseDate: new Date('2026-01-12T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/101/600/340",
    videoId: "dQw4w9WgXcQ", // Placeholder
    type: 'CPL'
  },
  {
    id: 2,
    title: "A Origem da Dor",
    description: "O mapa das doenças emocionais e por que tratamentos físicos não resolvem.",
    releaseDate: new Date('2026-01-14T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/102/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'CPL'
  },
  {
    id: 3,
    title: "Análise ao Vivo",
    description: "A prática real. Veja a leitura corporal acontecendo na sua frente.",
    releaseDate: new Date('2026-01-16T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/103/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'CPL'
  },
  {
    id: 4,
    title: "A Profissão do Futuro",
    description: "O plano de carreira para ser um Terapeuta Analista e Grande Abertura.",
    releaseDate: new Date('2026-01-18T15:00:00'),
    thumbnailUrl: "https://picsum.photos/id/104/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'CPL'
  },
  // FASE 2: Aulas Extras
  {
    id: 5,
    title: "Mentoria: Destravando sua Análise",
    description: "Tira-dúvidas profundo e superação de objeções.",
    releaseDate: new Date('2026-01-19T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/106/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'EXTRA'
  },
  {
    id: 6,
    title: "Decodificando Doenças Crônicas",
    description: "Estudos de caso avançados sobre psicossomática.",
    releaseDate: new Date('2026-01-21T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/107/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'EXTRA'
  },
  {
    id: 7,
    title: "O Corpo e o Dinheiro",
    description: "Como seus traços de caráter bloqueiam ou atraem prosperidade financeira.",
    releaseDate: new Date('2026-01-24T10:00:00'),
    thumbnailUrl: "https://picsum.photos/id/108/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'EXTRA'
  },
  {
    id: 8,
    title: "O Último Chamado",
    description: "Encerramento das inscrições e revisão final.",
    releaseDate: new Date('2026-01-26T20:00:00'),
    thumbnailUrl: "https://picsum.photos/id/109/600/340",
    videoId: "dQw4w9WgXcQ",
    type: 'EXTRA'
  },
];