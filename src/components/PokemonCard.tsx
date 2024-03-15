import React, { use, useContext, useEffect, useState } from "react";
import {
  IdContext,
  MoneyContext,
  MyPokenmonContext,
} from "@/contexts/PokeContext";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import PokemonImage from "./PokemonImage";
import { PokeAvatar } from "./PokeAvatar";
import { get } from "http";
import { getPokemon } from "@/lib/pokemonAPI";
import { PokeProgress } from "./ui/PokeProgress";

interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}
export const PokemonCard = () => {
  const { money, setMoney } = useContext(MoneyContext);
  const { id, setId, name, setName } = useContext(IdContext);
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
  } = useContext<MyPokenmonContext>(MyPokenmonContext);
  const [pokemon, setPokemon] = useState<PokemonStats[]>([]); // Initialize pokemon state with an empty array
  const fetchPokemon = async () => {
    let pokemonObject;
    pokemonObject = await getPokemon(id);
    setPokemon(pokemonObject.stats);
    setWeight(pokemonObject.weight);
  };
  useEffect(() => {
    fetchPokemon();
  }, [id]);

  useEffect(() => {
    if (localStorage.getItem("money")) {
      setMoney(JSON.parse(localStorage.getItem("money") || ""));
    }
    if (localStorage.getItem("pokemons")) {
      setPokemons(JSON.parse(localStorage.getItem("pokemons") || ""));
    }
  }, []);
  const handleAddPokemon = () => {
    setMoney(money - pokemon[0].base_stat);
    console.log(pokemon[0].base_stat);
    setPokemons((prev: any) => {
      return [
        ...prev,
        {
          name: name,
          id: id,
          attack: pokemon[1].base_stat,
          defense: pokemon[2].base_stat,
          hp: pokemon[0].base_stat,
        },
      ];
    });
  };

  useEffect(() => {
    if (pokemons.length > 0) {
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
      localStorage.setItem("money", JSON.stringify(money));
    }
  }, [pokemons, money]);

  if (id === 0) {
    return <div>Select Pokemon</div>;
  }
  return (
    <div className="flex flex-col pt-2  w-full  border-cyan-300 items-center p-10">
      <div className="text-xl font-bold mb-4">{name}</div>
      <div className=" text-xl font-bold ">Weight : {weight}</div>
      <div className="flex items-center mb-10">
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
            id +
            ".svg"
          }
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div>
        {pokemon && money >= pokemon[0]?.base_stat ? (
          <Button
            onClick={handleAddPokemon}
            className="ml-2"
            color="primary"
            variant="bordered"
          >
            Add
          </Button>
        ) : null}
      </div>
      <div className="">
        {pokemon.map((m: PokemonStats) => (
          <div key={m.stat.name} className="mb-2">
            <PokeProgress name={m.stat.name} value={m.base_stat} />
          </div>
        ))}
      </div>
    </div>
  );
};
