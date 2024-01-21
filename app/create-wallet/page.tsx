"use client";
import { InputWalletOwner } from "@/components/InputWalletOwner";
import { InputWalletSecurity } from "@/components/InputWalletSecurity";
import { Button } from "@/components/ui/Button";
import { TextBody } from "@/components/ui/TextBody";
import { TextTitle } from "@/components/ui/TextTitle";
import { useCreateTwoFactorWallet } from "@/hooks/useCreateTwoFactorWallet";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Address, useAccount } from "wagmi";

export default function CreateWalletPage() {
  const [inputValue, setInputValue] = useState("");
  const { address, isConnecting } = useAccount();
  const { isLoading, isSuccess, write } = useCreateTwoFactorWallet(
    address as Address,
    inputValue as Address
  );

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  if (isConnecting) return <div>Connecting...</div>;

  if (isSuccess) {
    redirect("/wallet");
  }

  return (
    <Stack align={"center"} pt={8}>
     
      <HStack mb={4}>
        <TextTitle color = {'black'}>Create Account</TextTitle>
       
      </HStack>
     
      <InputWalletOwner address={address} />
      <InputWalletSecurity handleInputChange={handleInputChange} />
      <Button
        marginTop={"80px"}
        isDisabled={inputValue === ""}
        isLoading={isLoading}
        onClick={write}
      >
        ACCESS it
      </Button>
    </Stack>
  );
}
