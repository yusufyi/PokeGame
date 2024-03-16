import React, { useContext } from "react";
import { PokemonListComponent } from "./PokemonListComponent";
import { PokemonCard } from "./PokemonCard";
import { FightPageContext } from "@/contexts/PokeContext";
import { PokeFight } from "./PokeFight";

export const PokeMain = () => {
  const { fightPage, setFightPage } = useContext(FightPageContext);
  return (
    <>
      {fightPage ? (
        <PokeFight />
      ) : (
        <div className="border w-full justify-around flex flex-col md:flex-row">
          <div className="bg-amber-600  flex-1 w-8 items-center  overflow-y-scroll h-dvh">
            <PokemonListComponent />
          </div>
          <div className="bg-amber-500 flex-1">
            {" "}
            <PokemonCard />{" "}
          </div>
        </div>
      )}
    </>
  );
};
