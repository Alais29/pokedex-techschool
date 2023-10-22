import { getPokemonList } from "../services/getPokemonList";

export async function loader() {
  const pokemons = await getPokemonList();
  return { pokemons };
}
