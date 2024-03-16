import React, { useContext } from "react";
import PokemonImage from "./PokemonImage";
import { Input } from "@nextui-org/react";

const { MyPokenmonContext, IdContext } = require("@/contexts/PokeContext");

export const PokemonArray = () => {
  const { pokemons, setPokemons, attack, setAttack, defense, setDefense } =
    useContext(MyPokenmonContext);

  return (
    <div className="flex flex-row justify-start h-36">
      {pokemons
        .slice(0)
        .reverse()
        .map((m: any) => (
          <div className="border p-5 ">
            <PokemonImage
              id={m.id}
              attack={m.attack}
              defense={m.defense}
              index={pokemons.indexOf(m)}
              hp={m.hp}
            />
          </div>
        ))}{" "}
    </div>
  );
};
