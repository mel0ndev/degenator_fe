import Image from 'next/image'; 
import { Button } from '@/components/ui/button'; 
import { TokenInfoModule } from "@/components/ui/token-info"; 
import { ConnectWallet } from "@/components/ui/connect-wallet"; 
import { TOKEN_ADDRESS } from "@/constants/addresses";  

const TokenInfo = () => {
    return (
        <div>
            <div className="hidden lg:block lg:grid lg:h-auto lg:flex lg:flex-col lg:items-center lg:bg-black lg:pt-5 lg:grid-cols-6 lg:grid-rows-1 lg:p-7"> 
                <TokenInfoModule title="supply" info="1b" important />
                <TokenInfoModule title="network" info="ethereum erc-20" />
                <TokenInfoModule title="token contract" info={TOKEN_ADDRESS.substring(0,5) + '...' + TOKEN_ADDRESS.substring(36,TOKEN_ADDRESS.length)} copy/>
                <TokenInfoModule title="symbol" info="$dgn" />
                <TokenInfoModule title="tax" info="buy/sell 5%" />
                <TokenInfoModule title="avilable on uniswap"  button />

            </div> 
        
            <div>

                <div className="lg:hidden w-full"> 
                    <ConnectWallet mobile /> 
                </div> 


                <div className="grid grid-cols-2 grid-rows-4 flex flex-col bg-black h-auto font-poppins pb-10 lg:hidden"> 
                    <TokenInfoModule title="supply" info="1b" important mobile/>
                    <TokenInfoModule title="network" info="ethereum erc-20" mobile/>
                    <TokenInfoModule title="symbol" info="$dgn" mobile />
                    <TokenInfoModule title="tax" info="buy/sell 5%" mobile />
                    <div className="col-span-2 flex flex-col justify-start">
                        <TokenInfoModule title="token contract" info={TOKEN_ADDRESS.substring(0,5) + '...' + TOKEN_ADDRESS.substring(36,TOKEN_ADDRESS.length)} mobile padding="0"/>
                    </div>
                    <div className="col-span-2 flex flex-col justify-start">
                        <TokenInfoModule title="available on uniswap" button mobile padding="0"/>
                    </div>
                </div> 
            </div>


        </div> 
    );
}

export default TokenInfo; 
