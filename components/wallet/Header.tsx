import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ArgIcon } from "../icons/ArgIcon";
import { ScanIcon } from "../icons/ScanIcon";

export const Header = () => {
  return (
    <HStack justify={"center"} pb={6}>
      
      <Image src={"/logos/transferPAY.png"} alt="GHO Logo" width={158} height={37} />
      
    </HStack>
  );
};
