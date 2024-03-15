import React from "react";
import PokeLogo from "@/app/img/pokemon-23.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full border border-black flex justify-center ">
      <Image src={PokeLogo} width={200} />{" "}
    </div>
  );
};

export default Navbar;
