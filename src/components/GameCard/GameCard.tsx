import { Game } from '../../types/game';
import './GamesCard.css';

interface Props {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const GameCard = ({ game, isFavorite, onToggleFavorite }: Props) => {
  return (
    <div className="game-card">
      <div className="image-wrapper">
        <img src={game.image} alt={game.name} />

        <button
          className="favorite-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          {isFavorite ? <span>&#9734;</span> :  <span>&#9733;</span>}
        </button>

        <div className="title">{game.name}</div>
      </div>
    </div>
  );
};

export default GameCard;
