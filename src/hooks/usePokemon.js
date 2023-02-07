import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon } from '../services/fetchData.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
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

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const data = await fetchPokemon(selectedType, query);
      setPokemon(data);
      setIsLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  };

  return {
    pokemon,
    setPokemon,
    error,
    isLoading,
    setIsLoading,
    setSelectedType,
    handleSearch,
    query,
    setQuery,
  };
}
