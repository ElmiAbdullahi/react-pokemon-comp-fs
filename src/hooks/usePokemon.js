import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchData.js';


export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);
  return { pokemon };
}
