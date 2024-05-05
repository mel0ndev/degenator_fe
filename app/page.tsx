import Image from "next/image";
import HeroBanner from "@/components/sections/hero/hero"; 
import TokenInfo from "@/components/sections/token/token"; 
import Tiers from "@/components/sections/tiers/tiers"; 
import HowTo from "@/components/sections/howto/howto"; 
import Footer from "@/components/sections/footer/footer"; 
import { Socials } from "@/components/ui/socials"; 

export default function Home() {
  return (
      <div className="bg-[#00071A]">
        <div className="grid grid-cols-5"> 
            <div className="col-span-5"> 
                <HeroBanner /> 
            </div> 

            <div className="flex flex-col col-span-5">
                <TokenInfo /> 
            </div>

            <div className="col-span-5" id="rewards">
                <Tiers /> 
            </div>

            <div className="col-span-5" id="howto"> 
                <HowTo /> 
            </div> 

            <div className="col-span-5 mt-16 lg:mb-6 h-full"> 
                <Footer /> 
            </div> 

            <div className="col-span-5 lg:mt-16"> 
                <Socials /> 
            </div> 


        </div> 
      </div>
  );
}
