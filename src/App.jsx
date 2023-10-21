import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import PokemonCard from "./components/PokemonCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import { capitalizeWord } from "./utils/capitalizeWord";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <>
      <CssBaseline />
      <Header title="PokeDex" />
      <Container maxWidth="lg" sx={{ padding: "1.5rem" }}>
        <Grid container spacing={2}>
          {pokemonList.map((item, index) => (
            <Grid key={item.name} item xs={12} sm={6} md={4}>
              <PokemonCard
                pokemonName={capitalizeWord(item.name)}
                pokemonNumber={index + 1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
