import { GameCategory } from '../../types/game';
import './Filters.css';

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  category: GameCategory | 'ALL';
  onCategoryChange: (value: GameCategory | 'ALL') => void;

  provider: string;
  onProviderChange: (value: string) => void;
}

const Filters = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  provider,
  onProviderChange,
}: Props) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search game"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) =>
          onCategoryChange(e.target.value as GameCategory | 'ALL')
        }
      >
        <option value="ALL">ALL</option>
        <option value="START">START</option>
        <option value="NEW">NEW</option>
        <option value="SLOTS">SLOTS</option>
      </select>

      <select
        value={provider}
        onChange={(e) => onProviderChange(e.target.value)}
      >
        <option value="ALL">ALL</option>
        <option value="Pragmatic">Pragmatic</option>
        <option value="Skywind">Skywind</option>
        <option value="PG">PG</option>
        <option value="Hacksaw">Hacksaw</option>
        {/* <option value="Oacks">Oacks</option> */}
      </select>
    </div>
  );
};

export default Filters;
