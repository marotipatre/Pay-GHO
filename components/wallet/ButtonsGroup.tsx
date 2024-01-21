import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ReceiveIcon } from "../icons/ReceiveIcon";
import { TransferIcon } from "../icons/TransferIcon";

import { RocketIcon } from "../icons/RocketIcon";
import Link from "next/link";

export const ButtonsGroup = ({ walletAddress }: any) => {

  
  const buttonsContent = [
    {
      title: "Receive",
      icon: <ReceiveIcon />,
      url: `/receive/${walletAddress}`,
    },
    {
      title: "Transfer",
      icon: <TransferIcon />,
      url: "/transfer/new",
    },
    
   
  ];
  return (
    <HStack justify={"center"} p={6}>
      {buttonsContent.map((button: any, index: number) => (
        <Stack key={index} as={Link} href={button.url} align={"center"}>
          <IconButton
            aria-label={""}
            icon={button.icon}
            variant={"unstyle"}
            w={"44px"}
            h={"44px"}
            color={
             
              'black'
            }
          />
          <Text
            fontSize={"10px"}
            fontWeight={500}
            color={"rgba(30, 30, 32, 0.8)"}
          >
            {button.title}
          </Text>
        </Stack>
      ))}
    </HStack>
  );
};
