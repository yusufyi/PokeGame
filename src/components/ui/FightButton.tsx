import { FightPageContext } from "@/contexts/PokeContext";
import { Button } from "@nextui-org/react";
import React, { useContext } from "react";

export const FightButton = () => {
  const { fightPage, setFightPage } = useContext(FightPageContext);
  return (
    <Button onClick={() => setFightPage(!fightPage)}>
      {fightPage ? "Home" : "Fight"}
    </Button>
  );
};
