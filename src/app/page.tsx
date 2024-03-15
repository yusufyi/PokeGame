"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import charecterImg from "./img/Run.png";
import Charecter from "@/components/Charecter";
import { getPokemonList } from "@/lib/pokemonAPI";
import { PokemonList } from "@/types/Pokemon"; // Added missing import statement
import { PokemonListCard } from "@/components/PokemonListCard";
import { PokemonListComponent } from "@/components/PokemonListComponent";
import { NextUIProvider } from "@nextui-org/react";
import { PokemonCard } from "@/components/PokemonCard";
import {
  IdProvider,
  MyPokomenProvider,
  MoneyContextProvider,
} from "@/contexts/PokeContext";
import { PokemonArray } from "@/components/PokemonArray";
import { PokeMoney } from "@/components/PokeMoney";
import Link from "next/link";

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
                      {
                        <Link className={" text-blue-700"} href="/fight">
                          Fight
                        </Link>
                      }
                    </div>
                  </div>
                </div>
                <div className="border w-full justify-around flex flex-col md:flex-row">
                  <div className="bg-amber-600  flex-1 w-8 items-center  overflow-y-scroll h-dvh">
                    <PokemonListComponent />
                  </div>
                  <div className="bg-amber-500 flex-1">
                    {" "}
                    <PokemonCard />{" "}
                  </div>
                </div>
              </div>
            </main>
          </MoneyContextProvider>
        </MyPokomenProvider>
      </IdProvider>
    </NextUIProvider>
  );
}
