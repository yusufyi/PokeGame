import React, { useEffect, useState } from "react";
import { PokemonList } from "@/types/Pokemon";
import { PokemonListCard } from "@/components/PokemonListCard";
import { getPokemonList } from "@/lib/pokemonAPI";
import { SkeletonList } from "@/Ui/Skeleton";
import { Input } from "@nextui-org/react";

export const PokemonListComponent = () => {
  const [PokemonListData, setPokemonListData] = useState<PokemonList>([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data: PokemonList[] = await getPokemonList();
      setPokemonListData(data);
      // Handle the fetched data here
    };

    fetchData();
  }, []);

  const SearchFilter = (PokemonListData: any) => {
    const pokemon: Array<PokemonList> = PokemonListData.filter(
      (pokemon: PokemonList) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return pokemon;
  };
  const filteredPokemonList = SearchFilter(PokemonListData);
  return (
    <>
      <div className="sticky top-0 left-0 right-0 bg-amber-600 flex flex-col items-center ">
        <h1 className="text-2xl font-bold p-2  ">Pokemon List</h1>
        <Input
          className="w-1/2 mx-auto mb-2 pb-4"
          placeholder="Search Pokemon"
          variant="bordered"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {PokemonListData.length === 0 && <SkeletonList />}
      </div>
      <ul className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: PokemonList) => (
          <PokemonListCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </ul>
    </>
  );
};
