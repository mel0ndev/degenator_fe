'use client'; 
import Image from 'next/image'; 
import { Button } from '@/components/ui/button'; 
import { MdContentCopy } from "react-icons/md";
import { TOKEN_ADDRESS } from "@/constants/addresses";  

interface ITokenInfoModule {
    title: string; 
    info?: string;
    important?: boolean; 
    className?: string; 
    mobile?: boolean; 
    padding?: string; 
    button?: boolean; 
    copy?: boolean; 
}

export const TokenInfoModule = ({title, info, important, className, mobile, padding, button, copy}: ITokenInfoModule) => {
    
    if (typeof(padding) === typeof(undefined)) padding = '6'; 

	const copyAddress = async () => {
		await navigator.clipboard.writeText(TOKEN_ADDRESS.toString());
	}

    const MobileContent = () => (
          <div className="w-full px-4 py-2">
            <div className="text-accent text-sm mb-1">
                {title.toUpperCase()}
            </div>
            {!button ? (
                <div className="text-white text-base">
                    {info?.toUpperCase()}
                    {copy && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={copyAddress}
                            className="ml-2 inline-flex items-center"
                        >
                            <MdContentCopy />
                        </Button>
                    )}
                </div>
            ) : (
                <Button
                    variant="uniswap"
                    size="lg"
                    className="w-full flex items-center justify-center mt-1"
                >
                    <Image
                        src="/assets/uniswaplogo.svg"
                        width={24}
                        height={24}
                        alt="uniswap"
                        className="mr-2"
                    />
                    BUY NOW
                </Button>
            )}
        </div>
    ); 

    const DesktopContent = () => (
        <div className={`${className} pt-5 flex flex-col justify-center items-center font-poppins`}>
            <div className="flex flex-col items-center">
                <span className="text-accent"> 
                    {title.toUpperCase()}
                </span> 
                {important ? (
                    <span className="text-3xl text-white font-bold"> 
                        {info?.toUpperCase()}
                    </span>
                ) : (
                    <div> 
                        {!button ? (
                    <span className="text-xl text-white pt-2 lg:pt-4"> 
                        {info?.toUpperCase()}
                    </span>
                ) : ( 
                    <div className={`w-full flex flex-col text-left text-lg`}>
                    <span className="lg:text-xl flex w-full items-center"> 
                        <Button 
                            variant="uniswap"
                            size="lg"
                            className="pl-8 px-12 w-full"
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
                )}
                {copy && <div className="pl-4 inline-block"> 
                    <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => copyAddress()}
                    >
                        <MdContentCopy />
                    </Button>  
                </div>
                }
                    </div> 
                )}
            </div>
        </div> 

    ); 

    return mobile ? <MobileContent /> : <DesktopContent />;
}
