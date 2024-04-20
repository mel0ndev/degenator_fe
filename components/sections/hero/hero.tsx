import { HeroDots } from "@/components/sections/hero/herodots";
import { Navbar } from "@/components/ui/navbar"; 
import { CallToAction } from "@/components/ui/cta"; 

const HeroBanner = () => {
    return (
        <div className="bg-hero bg-[left_24%_bottom_10%] bg-cover w-full h-[849px] grid grid-rows-6"> 
                <div className="hidden lg:block lg:absolute w-full"> 
                    <HeroDots /> 
                </div> 

                <div className="flex items-center flex-col relative w-full"> 
                    <Navbar /> 
                </div> 
                
            <div className="flex row-span-5 pb-2 items-end justify-center align-bottom lg:absolute lg:right-[30%] lg:top-[60%] lg:text-right lg:w-5 lg:h-5"> 
                    <CallToAction />  
                </div> 

            </div> 
    ); 
}


export default HeroBanner; 
