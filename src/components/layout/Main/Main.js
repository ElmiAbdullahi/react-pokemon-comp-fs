import React from 'react';
import usePokemon from '../../../hooks/usePokemon.js';
import './Main.css';

export default function Main() {
  const { pokemon } = usePokemon();
  // console.log(pokemon);
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
