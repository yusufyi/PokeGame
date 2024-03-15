import { MoneyContext, MoneyContextProvider } from "@/contexts/PokeContext";
import { create } from "domain";
import React, { useContext } from "react";

export const PokeMoney = () => {
  const { money, setMoney } = useContext(MoneyContext);
  console.log(money);
  return <div className="text-2xl font-bold p-2 ">Credit: {money}</div>;
};
