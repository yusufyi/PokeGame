"use client";
import { MyPokenmonContext } from "@/contexts/PokeContext";
import React, { use, useContext, useEffect, useState } from "react";
import { PokeAvatar } from "./PokeAvatar";
import { Pokemon } from "@/type/Pokemon";

interface ChessBoardProps {
  rows: number;
  columns: number;
  pokemons: Pokemon[];
}
interface ChessBoardState {
  cells: number[][];
}
export const ChessBoard = () => {
  const [state, setState] = useState<ChessBoardState>({
    cells: Array(8).fill(Array(8).fill(0)),
  });
  const {
    pokemons,
    setPokemons,
    attack,
    setAttack,
    defense,
    setDefense,
    weight,
    setWeight,
    hp,
    setHp,
  } = useContext(MyPokenmonContext);
  const fight = () => {
    setPokemons((prev: any) => {
      const updatedPokemons = prev.filter(
        (pokemon: any) => pokemon.defense > 0
      );
      if (updatedPokemons.length > 0) {
        const firstPokemon = updatedPokemons[0];
        const updatedDefense = firstPokemon.defense - 1;
        const updatedPokemon = { ...firstPokemon, defense: updatedDefense };
        updatedPokemons[0] = updatedPokemon;
      }
      return updatedPokemons;
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fight();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      {state.cells.map((row, rowIndex) => (
        <div
          className={"flex flex-row w-full h-20 border border-sky-950"}
          key={rowIndex}
        >
          {row.reverse().map((_, columnIndex) => (
            <div
              className="flex flex-col  w-20 h-20 border  bg-sky-800 text-sky-950 justify-center items-center text-4xl font-bold text-center border-sky-950"
              key={columnIndex}
            >
              {pokemons[columnIndex * -1 + 7] ? (
                <PokeAvatar id={pokemons[columnIndex * -1 + 7].id} />
              ) : (
                ""
              )}

              <PokeAvatar id={0} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
