export default function Select({ types, handleTypeChange }) {
  return (
    <select onChange={(event) => handleTypeChange(event.target.value)}>
      <option value="all">All</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
