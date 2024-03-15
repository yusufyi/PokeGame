import React from "react";
const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const res = await fetch(`${POKEMON_API}pokemon?limit=100`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

export async function getPokemon(id: number) {
  const res = await fetch(`${POKEMON_API}pokemon/${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data.weight);
  return data;
  // cretate interdace for the data  data.stats;
}
