import Image from 'next/image'; 
import { Button } from '@/components/ui/button'; 
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectWalletMobile } from "@/components/ui/connect-wallet-mobile"; 

interface IConnectWallet {
    mobile?: boolean; 
}

export const ConnectWallet = ({mobile}: IConnectWallet) => {
    return (
        <>
            {!mobile ? (
                <div> 
                    {/*
                   <Image 
                       src="/assets/connect.svg"
                       alt="connect"
                       width={165}
                       height={165}
                       className="hover:opacity-90 hover:cursor-pointer"
                   />
                      */}
			<ConnectButton 
				label="Connect"
				 showBalance={{
				  smallScreen: false,
  				  largeScreen: false,
  				}}
				accountStatus={{
				  smallScreen: 'avatar',
  				  largeScreen: 'avatar',
  				}}
            />
                </div> 
            ) : (
                <div className="flex flex-col items-center p-8"> 
			<ConnectButton 
				label="Connect"
				 showBalance={{
				  smallScreen: false,
  				  largeScreen: false,
  				}}
				accountStatus={{
				  smallScreen: 'avatar',
  				  largeScreen: 'avatar',
  				}}
            />
                </div> 
            )}
        </>
    ); 
}
