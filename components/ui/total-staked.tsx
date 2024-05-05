"use client"; 
import { useToken } from "@/hooks/token"; 
import { formatEther } from "viem"; 

export const TotalSupplyStaked = () => {
    
    const { totalStaked } = useToken(); 
    console.log(totalStaked)
        
    return (
        <div className="font-poppins col-span-10 lg:col-span-10 flex items-center justify-center text-lg"> 
            <span className="text-gray-400"> 
                Total Supply Staked: &nbsp; 
            </span> 
            <div>
                {Number(totalStaked).toFixed(4).toLocaleString()}
            </div> 
        </div>
    ); 
}
