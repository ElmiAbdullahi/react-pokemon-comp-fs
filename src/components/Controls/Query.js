import './controls.css';

export default function Query({ handleSearch, query, setQuery }) {
  return (
    <>
      <input value={query} type="text" onChange={(event) => setQuery(event.target.value)}></input>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
