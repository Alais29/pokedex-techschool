import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { capitalizeWord } from "../utils/capitalizeWord";

const PokemonDetails = () => {
  const { pokemon } = useLoaderData();
  return (
    <div>
      <Header title={capitalizeWord(pokemon.name)} />
      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default ??
          pokemon.sprites.front_default
        }
        alt={`${pokemon.name} Image`}
      />
      <p>Number: {pokemon.id}</p>
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Types</h3>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <h3>Moves</h3>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
