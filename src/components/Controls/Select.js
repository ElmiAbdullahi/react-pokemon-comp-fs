import { fetchPokemon } from '../../services/fetchData';
import './controls.css';

export default function Select({ types, setIsLoading, setSelectedType, setPokemon, setError }) {
  const handleTypeChange = async (type) => {
    setIsLoading(true);
    setSelectedType(type);
    try {
      const data = await fetchPokemon(type);
      setPokemon(data);
      setIsLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  };

  return (
    // <div className="controls select">
    <select onChange={(event) => handleTypeChange(event.target.value)}>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
    // </div>
  );
}
