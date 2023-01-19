import React from 'react';
import usePokemon from '../../../hooks/usePokemon.js';
import Select from '../../Controls/Select';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  // console.log(pokemon);
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </div>
    </>
  );
}
