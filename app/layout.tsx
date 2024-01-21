import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConnectkitProvider } from "./connectkit-provider";
import { ChakraUiProvider } from "./chakra-provider";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          w="100%"
          h="100vh"
          background={
            ["linear-gradient(225deg, #FFF 25.67%, #E5F5FE 67.06%, #D8E7FD 86.96%)", null, "linear-gradient(250deg, #FFF 25.5%, #E5F5FE 69.89%, #D8E7FD 91.23%)"]
          }
        >
          <ChakraUiProvider>
            <ConnectkitProvider>{children}</ConnectkitProvider>
          </ChakraUiProvider>
        </Box>
      </body>
    </html>
  );
}