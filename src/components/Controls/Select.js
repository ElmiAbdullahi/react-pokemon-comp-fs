export default function Select({ types, handleTypeChange }) {
  return (
    <select onChange={(event) => handleTypeChange(event.target.value)}>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
