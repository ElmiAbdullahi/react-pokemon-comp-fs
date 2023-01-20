import React from 'react';
import usePokemon from '../../../hooks/usePokemon.js';
import Select from '../../Controls/Select';
import './Main.css';
import PokeCard from '../../PokeCard/PokeCard.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, error, isLoading } = usePokemon();

  if (isLoading && !error) {
    return (
      <section>
        <p className="loader"></p>
      </section>
    );
  }

  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div className="display">
        {pokemon.map((pokemon) => (
          <PokeCard key={pokemon._id} {...pokemon} />
        ))}
        <p style={{ color: 'red', fontWeight: '700' }}>{error}</p>
      </div>
    </>
  );
}
