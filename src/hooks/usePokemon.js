import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchTypes, fetchPokemonByType } from '../services/fetchData.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchInitialPokemon();
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        setError('Oops! Something went wrong');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data);
        setIsLoading(false);
      } catch (error) {
        setError('Oops! Something went wrong');
      }
    };
    fetchData();
  }, []);

  const handleTypeChange = async (pokemon) => {
    const data = await fetchPokemonByType(pokemon);
    setPokemon(data);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const data = await fetchPokemonByType(types, query);
    setPokemon(data);
    setIsLoading(false);
  };

  return { pokemon, types, handleTypeChange, error, isLoading, handleSearch, query, setQuery };
}
