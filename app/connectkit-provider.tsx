'use client'
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";
import theme from '../family-theme.json'

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId:"f1fad836ae84c2328cdbddb9d37b9e6b",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)


    //chains
    chains
  })
);

export const ConnectkitProvider = ({ children }: any) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider customTheme={theme}>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};
