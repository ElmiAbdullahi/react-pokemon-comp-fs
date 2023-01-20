import './controls.css';

export default function Select({ types, handleTypeChange }) {
  return (
    <div className="controls">
      <select onChange={(event) => handleTypeChange(event.target.value)}>
        <option value="all">All</option>
        {types.map(({ type }) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
