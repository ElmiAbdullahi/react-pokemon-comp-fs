import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchTypes, fetchPokemonByType } from '../services/fetchData.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);
  const handleTypeChange = async (type) => {
    const data = await fetchPokemonByType(type);
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange };
}
