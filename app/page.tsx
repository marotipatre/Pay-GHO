"use client";
import React, { useState, useEffect } from "react";
import { Stack, Image, Text as CText, HStack, Text, position } from "@chakra-ui/react";
import { useModal } from "connectkit";
import { useWalletToTwoFactor } from "@/hooks/useWalletToTwoFactor";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { contentOnboarding } from "@/constants/onboardingTexts";


const Home = () => {
  const [indexText, setindexText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setindexText((prevIndex) => (prevIndex + 1) % contentOnboarding.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const { setOpen } = useModal();
  const { address } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(address);

  if (walletAddress) {
    console.log("conectado!");
    if (walletAddress === "0x0000000000000000000000000000000000000000") {
      redirect("/create-wallet");
    } else {
      redirect("/wallet");
    }
  }
  return (
   
   <div justify={"center"}
   align={"center"}>
      <Button  color = {'black'} mt={"63px"} onClick={() => setOpen(true)}>
        Connect Wallet
      </Button>
      </div>
     
       
  );
};

export default Home;
