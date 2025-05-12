import Image from 'next/image'; 
import { NavbarText } from '@/components/ui/navbar-text';  
import { ConnectWallet } from '@/components/ui/connect-wallet'; 
import { BurgerMenu } from '@/components/ui/burger-menu'; 

export const Navbar = () => {
    return (
        <div className="grid grid-cols-5 w-full">
            <div className="lg:flex lg:flex-col items-center col-span-4 lg:col-span-2">
                <div className="flex lg:justify-start items-center p-3 pt-8"> 
                    <div className="pr-5"> <Image 
                            src="/assets/degenator-new-logo.png"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    </div>
                    <span className="text-lg text-white lg:text-2xl font-open tracking-[.5em] lg:tracking-[1.2em]">
                        DEGENATOR
                    </span> 
                </div> 
            </div> 

            <div className="flex col-span-1 items-center justify-end pr-8 lg:hidden"> 
                <BurgerMenu /> 
            </div> 

            <div className="invisible text-white lg:visible lg:justify-end lg:flex lg:items-center lg:col-span-3">
                <div className="flex justify-end p-3"> 
                    <div className="grid grid-cols-4 gap-x-2 items-center">

                        <NavbarText text="Rewards" scrollTo="rewards"/> 
                        <NavbarText text="Legendary Degenator" scrollTo="legendary"/> 
                        <NavbarText text="How To Buy" scrollTo="howto"/> 
                        <ConnectWallet /> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}
