import { Game } from '../types/game';

import slot1 from '../assets/games/sugarmix.png';
import slot2 from '../assets/games/joker.png';
import slot3 from '../assets/games/gold.webp';
import slot4 from '../assets/games/inca.webp';
import slot5 from '../assets/games/cosmic.webp';
import slot6 from '../assets/games/sugar.webp';
import slot7 from '../assets/games/maya.webp';
import slot8 from '../assets/games/buffalo.webp';
import slot9 from '../assets/games/ocean.webp';
import slot10 from '../assets/games/fortunemouse.webp';
import slot11 from '../assets/games/fortunedragon.webp';
import slot12 from '../assets/games/fortunerabbit.webp';
import slot13 from '../assets/games/fist.webp';
import slot14 from '../assets/games/fruit.webp';
import slot15 from '../assets/games/bouncy.webp';
import slot16 from '../assets/games/panda.webp';
import slot17 from '../assets/games/fortunetiger.webp';
import slot18 from '../assets/games/double.webp';


const gameList: Game[] = [
  {
    id: '1',
    name: 'SUGAR MIX',
    category: 'SLOTS',
    provider: 'Ggaming',
    image: slot1,
  },
  {
    id: '2',
    name: 'JOKER JEWEL',
    category: 'SLOTS',
    provider: 'Pragmatic',
    image: slot2,
  },
  {
    id: '3',
    name: 'GOLD PARTY',
    category: 'SLOTS',
    provider: 'Pragmatic',
    image: slot3,
  },
  {
    id: '4',
    name: 'INCA GEMS',
    category: 'SLOTS',
    provider: 'Skywind',
    image: slot4,
  },
  {
    id: '5',
    name: 'SUGAR RUSH',
    category: 'SLOTS',
    provider: 'Pragmatic',
    image: slot5,
  },
  {
    id: '6',
    name: 'Cosmic Cash',
    category: 'SLOTS',
    provider: 'Pragmatic',
    image: slot6,
  },
  {
    id: '7',
    name: 'MAYA JACKPOT',
    category: 'SLOTS',
    provider: 'Skywind',
    image: slot7,
  },
  {
    id: '8',
    name: 'BIG BUFFALO',
    category: 'SLOTS',
    provider: 'Skywind',
    image: slot8,
  },
  {
    id: '9',
    name: 'OCEAN GEMS',
    category: 'SLOTS',
    provider: 'Skywind',
    image: slot9,
  },
  {
    id: '10',
    name: 'FORTUNE MOUSE',
    category: 'NEW',
    provider: 'PG',
    image: slot10,
  },
  {
    id: '11',
    name: 'FORTUNE DRAGON',
    category: 'NEW',
    provider: 'PG',
    image: slot11,
  },
  {
    id: '12',
    name: 'FORTUNE RABBIT',
    category: 'NEW',
    provider: 'PG',
    image: slot12,
  },
  {
    id: '13',
    name: 'FIST OF DESTRUCTION',
    category: 'NEW',
    provider: 'Hacksaw',
    image: slot13,
  },
  {
    id: '14',
    name: 'FRUIT DUEL',
    category: 'NEW',
    provider: 'Hacksaw',
    image: slot14,
  },
  {
    id: '15',
    name: 'BOUNCY BOMBS',
    category: 'SLOTS',
    provider: 'Hacksaw',
    image: slot15,
  },
  {
    id: '16',
    name: 'EYE OF THE PANDA',
    category: 'START',
    provider: 'Hacksaw',
    image: slot16,
  },
  {
    id: '17',
    name: 'FORTUNE TIGER',
    category: 'START',
    provider: 'PG',
    image: slot17,
  },
  {
    id: '18',
    name: 'DOUBLE SCATTER',
    category: 'START',
    provider: 'Skywind',
    image: slot18,
  },
];

export const fetchGames = (): Promise<Game[]> => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Randomly simulate an error (optional)
        const shouldFail = Math.random() < 0.05;
        if (shouldFail) {
          reject('Failed to fetch games. Please try again.');
        } else {
          resolve(gameList);
        }
      }, 1000); // 1 second delay
    });
  };
