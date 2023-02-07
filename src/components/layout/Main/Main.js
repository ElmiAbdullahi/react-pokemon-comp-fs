import usePokemon from '../../../hooks/usePokemon.js';
import { useTypes } from '../../../hooks/useTypes';
import Select from '../../Controls/Select';
import Query from '../../Controls/Query.js';
import PokemonDisplay from '../../Display/PokemonDisplay';
import '../../Controls/controls.css';

export default function Main() {
  const {
    pokemon,
    setPokemon,
    setSelectedType,
    isLoading,
    setIsLoading,
    handleSearch,
    query,
    setQuery,
  } = usePokemon();
  const types = useTypes();
  return (
    <>
      <div className="controls">
        <Select {...{ setIsLoading, setSelectedType, types, setPokemon }} />
        <Query {...{ handleSearch, query, setQuery }} />
      </div>
      <PokemonDisplay {...{ pokemon, isLoading }} />
    </>
  );
}
