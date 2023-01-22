import '../layout/Main/Main.css';
import PokeCard from '../PokeCard/PokeCard';

export default function PokemonDisplay({ pokemon, isLoading, error }) {
  if (isLoading && !error)
    return (
      <div className="stage">
        <div className="poke bounce"></div>
      </div>
    );
  return (
    <div className="display">
      {pokemon.map((pokemon) => (
        <PokeCard key={pokemon._id} {...pokemon} />
      ))}
      <p className="error" style={{ color: 'red', fontWeight: '700' }}>
        {error}
      </p>
    </div>
  );
}
