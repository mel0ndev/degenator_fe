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

    return (
        <> 
        {!mobile && (
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
        )}
        {mobile && (
            <div> 
                <div className="pt-5 text-white flex flex-col items-center font-poppins">
                    <div className={`w-3/4 pl-${padding} flex flex-col text-left text-accent`}>
                        {title.toUpperCase()}
                    </div> 
                    {!button ? (
                    <div className={`w-3/4 pl-${padding} flex flex-col text-left text-lg`}>
                        {info?.toUpperCase()}

                    </div> 
                    ) : (
                    <div className={`w-3/4 pl-${padding} flex flex-col text-left text-lg`}>
                    <span className="lg:text-xl pt-5 flex w-full items-center"> 
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
                </div> 
            </div> 
        )}
    </>
    ); 
}
