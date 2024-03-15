"use client";
import React, { useContext } from "react";
import { PokemonList } from "@/types/Pokemon";
import Image from "next/image";
import { IdContext } from "@/contexts/PokeContext";
import { Button, Input } from "@nextui-org/react";
const getIdFromUrl = (url: string): number => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? parseInt(matches[1], 10) : 0;
};

export const PokemonListCard = (pokemon: PokemonList) => {
  const { id, setId, name, setName } = useContext(IdContext);
  return (
    //filter accoordign to the search

    <div
      className="group rounded-lg border  border-zinc-950 m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      onClick={() => {
        setId(parseInt(pokemon.url.split("/")[6]));
        setName(pokemon.name);
      }}
    >
      {pokemon.name}
    </div>
  );
};
