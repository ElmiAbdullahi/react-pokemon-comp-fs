import React from 'react';
import usePokemon from '../../../hooks/usePokemon.js';
import Select from '../../Controls/Select';
import './Main.css';
import '../../Controls/controls.css';
import PokeCard from '../../PokeCard/PokeCard.js';
import Query from '../../Controls/Query.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, error, isLoading, handleSearch, query, setQuery } =
    usePokemon();

  if (isLoading && !error) {
    return (
      <section>
        <p className="loader"></p>
      </section>
    );
  }

  return (
    <>
      <div className="controls">
        <Select types={types} handleTypeChange={handleTypeChange} />
        <Query {...{ handleSearch, query, setQuery }} />
      </div>
      <div className="display">
        {pokemon.map((pokemon) => (
          <PokeCard key={pokemon._id} {...pokemon} />
        ))}
      </div>
      <p style={{ color: 'red', fontWeight: '700' }}>{error}</p>
    </>
  );
}
