import Image from 'next/image'; 
import { Button } from '@/components/ui/button'; 
import { TokenInfoModule } from "@/components/ui/token-info"; 

const TokenInfo = () => {
    return (
        <div className="grid grid-cols-2 gap-y-3 h-auto bg-black pt-5 lg:grid-cols-6 lg:grid-rows-1 lg:p-7"> 
            <TokenInfoModule title="supply" info="1b" important />
            <TokenInfoModule title="network" info="ethereum erc-20" />
            <TokenInfoModule title="token contract" info="asdfasdfasdf" />
            <TokenInfoModule title="symbol" info="$dgn" />
            <TokenInfoModule title="tax" info="buy/sell 5%" />

            <div className="flex flex-col col-span-2 font-poppins lg:hidden"> 
                <div className="flex flex-col items-left">
                    <span className="text-accent"> 
                        TOKEN CONTRACT
                    </span> 
                    <span className="lg:text-xl p-2 lg:pt-5"> 
                        asdfasdfasdfasdf
                    </span>
                </div>
            </div> 

            <div className="flex flex-col items-center col-span-2 lg:col-span-1 font-poppins"> 
                <span className="text-accent"> 
                    AVAILABLE ON UNISWAP
                </span> 
                <span className="lg:text-xl pt-5 flex justify-center items-center"> 
                    <Button 
                        variant="uniswap"
                        size="lg"
                        className="pl-8 px-12"
                    > 
                    <Image 
                        src="/assets/uniswaplogo.svg" 
                        width={30}
                        height={30}
                        alt="u"
                        className="mr-3"
                    />
                        BUY NOW 
                    </Button>
                </span>
            </div> 

        </div> 
    );
}

export default TokenInfo; 
