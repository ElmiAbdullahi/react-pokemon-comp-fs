import { useEffect, useState } from 'react';
import { fetchTypes } from '../services/fetchData';
import usePokemon from './usePokemon';

export function useTypes() {
  const [types, setTypes] = useState([]);
  const { setIsLoading, setError } = usePokemon();
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
  }, [setIsLoading, setError]);
  return types;
}
