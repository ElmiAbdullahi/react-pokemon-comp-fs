export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex?page=3&perPage=20');
  const data = await resp.json();
  return data.results;
}
