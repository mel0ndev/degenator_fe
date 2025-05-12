'use client';
import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  Locale,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import { http } from '@wagmi/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets } = getDefaultWallets();

const projectId = '21d43aa076a8d5a839b7102fed57c534';

const customMainnet = {
  ...mainnet,
  rpcUrls: {
    ...mainnet.rpcUrls,
    default: {
      http: ['https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY'],
    },
    public: {
      http: ['https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY'],
    },
  },
};

const customSepolia = {
  ...sepolia,
  rpcUrls: {
    ...sepolia.rpcUrls,
    default: {
      http: ['https://eth-sepolia.g.alchemy.com/v2/4a_fcooQpl1VYmABiq23Tg2BHLmG6I4V'],
    },
    public: {
      http: ['https://eth-sepolia.g.alchemy.com/v2/4a_fcooQpl1VYmABiq23Tg2BHLmG6I4V'],
    },
  },
};


export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: projectId,
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
chains: [
    customMainnet,
    customSepolia,
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/4a_fcooQpl1VYmABiq23Tg2BHLmG6I4V'),
  },
});

const queryClient = new QueryClient();

//const { chains, publicClient, webSocketPublicClient } = configureChains(
//  [
//    mainnet,
//    sepolia,
//  ],
//  [publicProvider()]
//);



//const config = getDefaultConfig({
//  appName: 'My RainbowKit App',
//  projectId: projectId, 
//  chains: [mainnet, sepolia],
//  transports: {
//    [mainnet.id]: http('https://mainnet.infura.io/v3/1cad81887e224784a4d2ad2db5c0587a'),
//    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/4a_fcooQpl1VYmABiq23Tg2BHLmG6I4V'),
//  },
//});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const [client] = React.useState(new QueryClient()); 
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiProvider config={config}>
	  <QueryClientProvider client={queryClient}>
        <RainbowKitProvider >
          {mounted && children}
        </RainbowKitProvider>
	  </QueryClientProvider>
    </WagmiProvider>
  );
}
