import { useState, useEffect } from 'react';
import { Game } from '../types/game';
import { fetchGames } from '../api/api';

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchGames()
      .then((data) => {
        setGames(data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { games, loading, error };
};
