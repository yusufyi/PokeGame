import React, { createContext, useState } from "react";

export interface Pokemon {
  name: string;
  id: string;
  attack: number;
  defense: number;
  weight: number;
  hp: number;
}

export interface MyPokemons {
  pokemons: Pokemon[];
  attack: number;
  defense: number;
}

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

export interface FightPageType {
  fightPage: boolean;
  setFightPage: (newTrue: boolean) => void;
}

const IdContext = createContext<IdContextType>({
  id: 0,
  name: "",
  setId: () => {},
  setName: () => {},
});

const MoneyContext = createContext<MoneyContextType>({
  money: 1000,
  setMoney: () => {},
});

const FightPageContext = createContext<FightPageType>({
  fightPage: true,
  setFightPage: () => {},
});

const MyPokenmonContext = createContext<MyPokemons>({
  pokemons: [],
  attack: 0,
  defense: 0,
});

const IdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const value = { id, setId, name, setName };

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};

const MoneyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [money, setMoney] = useState(250);
  const value = { money, setMoney };
  return (
    <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
  );
};

const FightPageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fightPage, setFightPage] = useState(true);
  const value = { fightPage, setFightPage };
  return (
    <FightPageContext.Provider value={value}>
      {children}
    </FightPageContext.Provider>
  );
};

const MyPokomenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [attack, setAttack] = useState(2);
  const [defense, setDefense] = useState(0);

  const value = {
    pokemons,
    setPokemons,
    attack,
    setAttack,
    defense,
    setDefense,
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
  FightPageContext,
  FightPageProvider,
};
