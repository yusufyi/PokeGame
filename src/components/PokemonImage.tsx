import React, { use, useContext, useEffect } from "react";
import Image from "next/image";
import { Badge, Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { PokeAvatar } from "./PokeAvatar";
import { MyPokenmonContext, MoneyContext } from "@/contexts/PokeContext";

const PokemonImage = ({ id, attack, defense, index, hp }: any) => {
  const { money, setMoney } = useContext(MoneyContext);
  const { pokemons, setPokemons } = useContext(MyPokenmonContext);
  console.log(pokemons);

  const handleRemovePokemon = () => {
    setPokemons((prev: any) => {
      return prev.filter((_: any, i: number) => i !== index);
    });
    setMoney(money + hp);
    console.log(money);
    console.log(hp);
  };

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
    //if delete the pokemon, add the money back
  }, [pokemons]);
  return (
    <>
      <div className="flex gap-4 items-center">
        <Badge
          content="X"
          color="danger"
          placement="bottom-left"
          onClick={handleRemovePokemon}
          size="md"
        >
          <Badge content={defense} color="danger" placement="bottom-right">
            <Badge
              content={attack}
              color="success"
              shape="rectangle"
              showOutline={false}
              size="md"
            >
              <PokeAvatar id={id} />
            </Badge>
          </Badge>
        </Badge>
      </div>
    </>
  );
};

export default PokemonImage;
