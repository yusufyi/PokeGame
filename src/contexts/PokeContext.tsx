// contexts/IdContext.tsx
import React, { createContext, useState } from "react";

interface IdContextType {
  id: number;
  name?: string;
  setName: (newName: string) => void;
  setId: (newId: number) => void;
}
interface MoneyContextType {
  money: number;
  setMoney: (newMoney: number) => void;
}
const MoneyContext = createContext<MoneyContextType>({
  money: 1000,
  setMoney: () => {},
});

const MoneyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [money, setMoney] = useState(250);
  const value = { money, setMoney };
  return (
    <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
  );
};

const IdContext = createContext<IdContextType>({
  id: 0,
  name: "",
  setId: () => {},
  setName: () => {},
});

const IdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const value = { id, setId, name, setName };

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};

export interface Pokemon {
  name: string;
  id: string;
  attack: number;
  defense: number;
  weight: number;
  hp: number;
}

export interface MyPokemons {
  pokemons: Pokemon[]; // Fix syntax error by enclosing array elements in square brackets
  attack: number;
  defense: number;
}

const MyPokenmonContext = createContext<MyPokemons>({
  pokemons: [],
  attack: 0,
  defense: 0,
  weight: 0,
  hp: 0,
});

const MyPokomenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [attack, setAttack] = useState(2);
  const [defense, setDefense] = useState(0);
  const [weight, setWeight] = useState(0);
  const [hp, setHp] = useState(0);

  const value = {
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
  };

  return (
    <MyPokenmonContext.Provider value={value}>
      {children}
    </MyPokenmonContext.Provider>
  );
};

export {
  IdContext,
  IdProvider,
  MyPokenmonContext,
  MyPokomenProvider,
  MoneyContext,
  MoneyContextProvider,
};
