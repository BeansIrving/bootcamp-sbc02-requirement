"use client";
// import {
//   createDefaultAuthorizationResultCache,
//   SolanaMobileWalletAdapter,
// } from "@solana-mobile/wallet-adapter-mobile";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { AppProps } from "next/app";
import { FC, useMemo } from "react";

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");
// require("../styles/globals.css");

const SolanaProvider = ({ children }: any) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = "http://127.0.0.1:8899";

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => network, [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      //   new SolanaMobileWalletAdapter({
      //     appIdentity: { name: "Solana Next.js Starter App" },
      //     authorizationResultCache: createDefaultAuthorizationResultCache(),
      //   }),
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaProvider;
