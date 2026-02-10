export type GameCategory = 'START' | 'NEW' | 'SLOTS';

export type Game = {
    id: string
    name: string
    category: 'START' | 'NEW' | 'SLOTS'
    provider: 'Pragmatic' | 'Skywind' | 'Ggaming' | 'PG' | 'Hacksaw'
    image: string
  };
