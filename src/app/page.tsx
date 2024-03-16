"use client";
import Image from "next/image";
import { Suspense, useContext, useEffect, useState } from "react";
import charecterImg from "./img/Run.png";
import Charecter from "@/components/Charecter";
import { getPokemonList } from "@/lib/pokemonAPI";
import { PokemonList } from "@/types/Pokemon"; // Added missing import statement
import { PokemonListCard } from "@/components/PokemonListCard";
import { PokemonListComponent } from "@/components/PokemonListComponent";
import { NextUIProvider } from "@nextui-org/react";
import { PokemonCard } from "@/components/PokemonCard";
import { mainPage } from "@/components/mainPage";
import {
  IdProvider,
  MyPokomenProvider,
  MoneyContextProvider,
  FightPageContext,
  FightPageProvider,
} from "@/contexts/PokeContext";
import { PokemonArray } from "@/components/PokemonArray";
import { PokeMoney } from "@/components/PokeMoney";
import Link from "next/link";
import { PokeMain } from "@/components/PokeMain";
import { FightButton } from "@/components/ui/FightButton";

export default function Home() {
  const [PokemonListData, setPokemonListData] = useState<PokemonList>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: PokemonList[] = await getPokemonList();
      setPokemonListData(data);
      // Handle the fetched data here
    };

    fetchData();
  }, []);
  console.log(PokemonListData);

  return (
    <NextUIProvider>
      <IdProvider>
        <MyPokomenProvider>
          <MoneyContextProvider>
            <FightPageProvider>
              {" "}
              <main>
                <div className="flex flex-col w-full justify-between">
                  {/* <PokemonListComponent />
            <PokemonCard /> */}
                  <div className="border w-full flex justify-between">
                    <div>
                      <PokemonArray />
                    </div>
                    <div className="flex flex-col place-items-center pr-3">
                      <div>
                        <PokeMoney />
                      </div>
                      <div>
                        <FightButton />
                      </div>
                    </div>
                  </div>
                </div>
                <PokeMain />
              </main>
            </FightPageProvider>
          </MoneyContextProvider>
        </MyPokomenProvider>
      </IdProvider>
    </NextUIProvider>
  );
}
