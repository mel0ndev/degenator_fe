"use client"; 
import { useToken } from "@/hooks/token"; 
import { formatEther } from "viem"; 

export const TotalSupplyStaked = () => {
    
    const { totalStaked } = useToken(); 
    console.log("total staked", totalStaked); 
        
    return (
        <div className="font-poppins col-span-10 lg:col-span-10 flex items-center justify-center text-lg"> 
            <span className="text-gray-400"> 
                Total Supply Staked: &nbsp; 
            </span> 
            <div>
                {(Number(totalStaked) / 1e18).toFixed(2).toLocaleString()}
            </div> 
        </div>
    ); 
}
