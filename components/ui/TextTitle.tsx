import React from "react";
import { Text as CText } from "@chakra-ui/react";

export const TextTitle = ({ children, ...restProps }: any) => {
  return (
    <CText
      textAlign={"center"}
      fontSize={"24px"}
      fontWeight={700}
      bgClip="text"
      color="black"
      {...restProps}
    >
      {children}
    </CText>
  );
};
