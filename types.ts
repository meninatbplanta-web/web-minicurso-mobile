export interface Episode {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  videoId: string; // YouTube ID or similar
  type: 'CPL' | 'EXTRA';
}

export interface VideoState {
  isLocked: boolean;
  isActive: boolean;
  isFuture: boolean;
}