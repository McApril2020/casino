import { useMemo, useState, useEffect  } from 'react';
import { useGames } from '../hooks/useGames';
import { GameCategory } from '../types/game';
import './Casino.css';

import BannerCarousel from '../components/BannerCarousel/BannerCarousel';
import Filters from '../components/Filters/Filters';
import GameCard from '../components/GameCard/GameCard';

const Casino = () => {
const [search, setSearch] = useState('');
  const [category, setCategory] = useState<GameCategory | 'ALL'>('ALL');
  const [provider, setProvider] = useState<string>('ALL');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFavorites, setShowFavorites] = useState(false);

  const { games, loading, error } = useGames();

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const filteredGames = useMemo(() => {
    let filtered = games.filter((game) => {
      return (
        game.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'ALL' || game.category === category) &&
        (provider === 'ALL' || game.provider === provider)
      );
    });

    if (showFavorites && favorites.size > 0) {
      filtered = filtered.filter((game) => favorites.has(game.id));
    }

    return filtered;
  }, [games, search, category, provider, favorites, showFavorites]);

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <BannerCarousel />

      <Filters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        provider={provider}
        onProviderChange={setProvider}
      />

      {favorites.size > 0 && (
        <button
          className="show-favorites-btn"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? 'Show All Games' : 'Show My Favorites'}
        </button>
      )}

      <div className="grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.has(game.id)}
            onToggleFavorite={() => {
              setFavorites((prev) => {
                const next = new Set(prev);
                next.has(game.id) ? next.delete(game.id) : next.add(game.id);
                return next;
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Casino;
