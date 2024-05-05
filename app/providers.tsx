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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets } = getDefaultWallets();

const projectId = '21d43aa076a8d5a839b7102fed57c534';

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
    mainnet,
    //...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    sepolia,
  ],
  ssr: true,
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
