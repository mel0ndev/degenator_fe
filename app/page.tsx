import Image from "next/image";
import HeroBanner from "@/components/sections/hero/hero"; 
import TokenInfo from "@/components/sections/token/token"; 
import Tiers from "@/components/sections/tiers/tiers"; 

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

            <div className="col-span-5">
                <Tiers /> 
            </div>
        </div> 
      </div>
  );
}
