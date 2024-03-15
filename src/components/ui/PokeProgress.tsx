import React from "react";
import { Progress } from "@nextui-org/react";

export const PokeProgress = ({ name, value }: any) => {
  return (
    <div className="flex ">
      <div className="p-3 w-2/6  ">{name}</div>
      <div className="m-auto w-80">
        <Progress value={value} size="md" />
      </div>
      <div className="m-auto pl-3">{value}</div>
    </div>
  );
};
