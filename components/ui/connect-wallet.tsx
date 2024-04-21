import { Button } from '@/components/ui/button'; 

interface IConnectWallet {
    mobile: boolean; 
}

export const ConnectWallet = ({mobile}: IConnectWallet) => {
    return (
        <>
            {!mobile ? (
                <div> 
                    hello 
                </div> 
            ) : (
                <div className="flex flex-col items-center p-8"> 
                    <Button variant="connectMobile" className="w-7/8" size="xl"> 
                       Connect Wallet 
                    </Button> 
                </div> 
            )}
        </>
    ); 
}
