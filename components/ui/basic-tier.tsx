"use client"; 
import Image from "next/image"; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"; import { FiInfo } from "react-icons/fi";
import { TOKEN_ADDRESS } from "@/constants/addresses";  
import { useState, useEffect } from "react"; 
import { useQueryClient } from '@tanstack/react-query' 
import { useBlockNumber, useBalance } from 'wagmi' 

interface IBasicTier {
    name: string; 
    stakingPeriod: string; 
    apy: string; 
    bonus: string; 
    unstakingPeriod: string; 
    bonusColor: string; 
    badgeSource: string; 
} 

export const BasicTier = ({
    name, 
    stakingPeriod, 
    bonus,
    apy,
    unstakingPeriod,
    bonusColor,
    badgeSource
}: IBasicTier) => {
        
    const queryClient = useQueryClient() 
    const { data: balance, queryKey } = useBalance({ 
      address: TOKEN_ADDRESS
    })

    console.log(balance); 
    
    useEffect(() => { 
        queryClient.invalidateQueries({ queryKey }) 
    }, [queryClient]) 


    return (
        <div>
            <div className="flex flex-col items-center relative"> 
                <Image 
                    src={badgeSource}
                    alt="badge"
                    width={180}
                    height={180}
                    className="relative bottom-[-4.5rem]"
                />
                </div> 
        <Card className="bg-gradient-to-r from-zinc-600 to-[#14101D] bg-opacity-10 shadow-md flex flex-col items-center text-center font-poppins justify-between">
            <div className="flex w-full grid grid-cols-3"> 
                <div className="flex justify-end col-span-3 m-5"> 
                    <Button size="icon"> 
                        <FiInfo 
                            size={24} 
                            color="white" 
                            className="opacity-65 hover:opacity-100" 
                        />
                    </Button> 
                </div> 
            </div> 
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription className="italic text-gray-400">{stakingPeriod}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <p className="text-[#B282F0] font-bold pb-5"> APY: {apy}%</p>
                <span className="text-sm"> Additional bonus reward: <br></br></span> 
                <span className="text-sm"> (after stake duration) </span> 

                <div className="flex flex-col justify-center items-center"> 
                    <div className={`h-10 w-28 bg-black bg-opacity-30 flex justify-center items-center rounded-lg mt-2 mb-3`}> 
                        <span className={`font-bold text-xl text-[${bonusColor}]`}> +{bonus}% </span>
                    </div> 
                </div> 
                <div> 
                    <span className="italic text-sm text-gray-300"> Daily Rewards: </span>
                    <span className="font-semi-bold italic"> {(Number(apy) / 365).toFixed(4)}% </span> 
                </div> 
                <div className="mb-5"> 
                    <span className="italic text-sm text-gray-300"> Yearly Rewards: </span>
                    <span className="font-semi-bold italic"> {(Number(apy) / 1).toFixed(4)}% </span> 
                </div> 
                
                <span className="text-sm text-gray-300"> Balance: {balance?.toString()} </span>
                <div className="h-10 w-11/12 bg-black bg-opacity-70 outline outline-1 outline-[#66BEE8] flex items-center rounded-xl font-bold text-xl"> 
                    <span className="pl-5"> 
                        100
                    </span> 
                </div> 

            </CardContent>
            <CardContent className="p-6 pt-0"> 
                <div className="grid grid-cols-2 grid-rows-2 text-xs"> 
                    <span className="flex justify-start"> Current value: </span> 
                    <span className="flex justify-end"> Value after staking:  </span> 
                    <span className="flex justify-start"> [amount] </span>
                    <span className="flex justify-end"> [amount] </span>
                </div> 
            </CardContent> 

            <CardContent> 
                <Button variant="stake" className="w-11/12"> 
                    Stake
                </Button> 
            </CardContent> 

            <CardFooter className="p-6">
                <p className="italic text-gray-300 text-sm">Un-stake duration: {unstakingPeriod}</p>
          </CardFooter>
        </Card>                 
        </div> 
    ); 
}


