import React from "react";
import { Badge, Avatar, Image } from "@nextui-org/react";

export const PokeAvatar = ({ id }: any) => {
  return (
    <Image
      src={
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        id +
        ".svg"
      }
      alt={""}
      style={{
        width: "100px",
        height: "auto",
      }}
    />
  );
};
