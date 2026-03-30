import { useState, useEffect } from 'react';
import type { Game } from '../types';

const FALLBACK_GAMES: Game[] = [
  {
    id: 2479031796,
    name: 'Jujutsu Kaisen: Battleground',
    description: 'Experience the world of Jujutsu Kaisen in this action-packed battleground.',
    placeId: 6586689543,
    placeVisits: 0,
    thumbnailUrl:
      'https://tr.rbxcdn.com/180DAY-369820b5a286b906ecec3e5fd82592f5/512/512/Image/Png/noFilter',
    gameUrl: 'https://www.roblox.com/games/6586689543/Jujutsu-Kaisen-Battleground',
  },
  {
    id: 9737972106,
    name: 'Spiderman: Spiderverse Battlegrounds',
    description: 'Swing into action in the Spiderverse!',
    placeId: 92487291363621,
    placeVisits: 0,
    thumbnailUrl:
      'https://tr.rbxcdn.com/180DAY-e97f5a337a14eaefe36a015da1763ba0/512/512/Image/Png/noFilter',
    gameUrl: 'https://www.roblox.com/games/92487291363621/Spiderman-Spiderverse-Battlegrounds',
  },
];

export function useRobloxGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch('/api/games');
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        if (data.games?.length > 0) {
          setGames(data.games);
        } else {
          setGames(FALLBACK_GAMES);
        }
      } catch {
        setGames(FALLBACK_GAMES);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  return { games, loading };
}
