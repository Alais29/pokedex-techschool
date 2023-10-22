import PokemonCard from "../components/PokemonCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import { capitalizeWord } from "../utils/capitalizeWord";
import { Link, useLoaderData } from "react-router-dom";

function Root() {
  //TODO: BUSCAR BENEFICIO DE HACER ESTO
  const { pokemons } = useLoaderData();

  return (
    <>
      <Header title="PokeDex" />
      <Container maxWidth="lg" sx={{ padding: "1.5rem" }}>
        <Grid container spacing={2}>
          {pokemons.map((item, index) => (
            <Grid key={item.name} item xs={12} sm={6} md={4}>
              <Link to={`pokemon/${index + 1}`}>
                <PokemonCard
                  pokemonName={capitalizeWord(item.name)}
                  pokemonNumber={index + 1}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Root;