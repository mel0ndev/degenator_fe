import Image from 'next/image'; 

export const Navbar = () => {
    return (
        <div className="grid grid-cols-5 w-full">
            <div className="lg:flex lg:flex-col items-center col-span-4 lg:col-span-2">
                <div className="flex lg:justify-start items-center p-3"> 
                    <div className="pr-5"> 
                        <Image 
                            src="/assets/logo.svg"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    </div>
                    <span className="text-lg lg:text-2xl font-open tracking-[.5em] lg:tracking-[1.2em]">
                        DEGENATOR
                    </span> 
                </div> 
            </div> 

            <div className="flex col-span-1 items-center justify-end pr-8 lg:hidden"> 
                menu
            </div> 

            <div className="invisible lg:visible lg:justify-end lg:flex lg:items-center lg:col-span-3">
                <div className="flex justify-end p-3"> 
                    <span className="drop-shadow-lg shadow-black">
                        Rewards
                    </span> 
                    <span>
                        Legendary Degenator
                    </span> 
                    <span>
                        How to Buy
                    </span> 
                    <span>
                        Connect Wallet
                    </span> 
                </div> 
            </div> 



        </div> 
    ); 
}
