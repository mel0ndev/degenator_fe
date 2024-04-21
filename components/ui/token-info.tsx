import Image from 'next/image'; 
import { Button } from '@/components/ui/button'; 

interface ITokenInfoModule {
    title: string; 
    info?: string;
    important?: boolean; 
    className?: string; 
    mobile?: boolean; 
    padding?: string; 
    button?: boolean; 
}

export const TokenInfoModule = ({title, info, important, className, mobile, padding, button}: ITokenInfoModule) => {
    
    if (typeof(padding) === typeof(undefined)) padding = '6'; 

    return (
        <> 
        {!mobile && (
        <div className={`${className} pt-5 flex flex-col justify-center items-center font-poppins`}>
            <div className="flex flex-col items-center">
                <span className="text-accent"> 
                    {title.toUpperCase()}
                </span> 
                {important ? (
                    <span className="text-3xl font-bold pt-2 lg:pt-4 lg:mb-5"> 
                        {info?.toUpperCase()}
                    </span>
                ) : (
                    <span className="text-xl pt-2 lg:pt-4"> 
                        {info?.toUpperCase()}
                    </span>
                )}
            </div>
        </div> 
        )}
        {mobile && (
            <div> 
                <div className="pt-5 flex flex-col items-center font-poppins">
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
