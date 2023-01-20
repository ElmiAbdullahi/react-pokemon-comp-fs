export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=10');
  const data = await resp.json();
  console.log(data);
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemonByType(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}&perPage=10`
  );
  const data = await resp.json();
  return data.results;
}
