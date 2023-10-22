import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.element.jsx";
import { loader as rootLoader } from "./routes/Root.loader.js";
import { loader as pokemonDetailsLoader } from "./routes/PokemonDetails.loader.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetails from "./routes/PokemonDetails.element.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokemonDetails />,
    loader: pokemonDetailsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
