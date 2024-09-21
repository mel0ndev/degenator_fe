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
import { LegendaryStakeButton } from "@/components/ui/legendary-stake"; 
import { LegendaryUnstakeButton } from "@/components/ui/legendary-unstake"; 
import { LegendaryClaimButton } from "@/components/ui/legendary-claim"; import { Input } from "@/components/ui/input"
import { TOKEN_ADDRESS } from "@/constants/addresses";  
import { useState, useEffect } from "react"; 
import { formatEther, parseEther } from "viem"; 
import { useToken } from "@/hooks/token"; 
import { useReadContract, useAccount } from 'wagmi'
import { useBlockNumber } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { LEGENDARY_MASTERCHEF } from "@/constants/abi/legendaryMasterchefAbi"; 

interface IBasicTier {
    name: string; 
    stakingPeriod: string; 
    bonus: string; 
    unstakingPeriod: string; 
    bonusColor: string; 
} 

export const LegendaryDegenator = ({
    name, 
    stakingPeriod, 
    bonus,
    unstakingPeriod,
    bonusColor,
}: IBasicTier) => {
    const { data: blockNumber } = useBlockNumber({ watch: true }) 

    const { account, lpBalance, totalLpStaked } = useToken(); 

    const [amount, setAmount] = useState(''); 
    const [stakingBalance, setStakingBalance] = useState(0); 
    const [stakingStart, setStakingStart] = useState(0); 
    const [stakingEnd, setStakingEnd] = useState(0); 
    const [apy, setApy] = useState(0); 

    const data = useReadContract({
        address: contracts.LEGENDARY_MASTERCHEF,
        abi: LEGENDARY_MASTERCHEF,
        functionName: 'userInfo',
        args: [BigInt(0), account as `0x${string}`]
    })
    

	useEffect(() => {
        if (data) {
            setStakingBalance(Number(data.data?.[0])); 
        }

        //calculate the apy
        if (totalLpStaked) {
            let secondsInYear = 60 * 60 * 24 * 365; 
            let rewardPerBlock = 1e17; 

            let poolRewardPerYear = secondsInYear * rewardPerBlock; 
            let apy = (poolRewardPerYear / Number(totalLpStaked)) * 100; 
            setApy(apy); 
        }

    }, [data, blockNumber, lpBalance]); 

    const renderButton = (stakingBalance: number, stakingStart: number, stakingEnd: number) => {
        if (stakingBalance > 0 && stakingEnd === 0) {
                //show unstake 
                return <LegendaryUnstakeButton poolIndex={0}/>
            } else if (stakingBalance > 0 && stakingEnd > 0) {
                //show claim
                return <LegendaryClaimButton /> 
            } else {
                //show stake
                return <LegendaryStakeButton amount={Number(parseEther(amount))} poolIndex={0} />
            }
    }

    return (
        <div className={`w-full h-full p-0 lg:p-6 lg:pb-0 flex flex-col items-center justify-center`}>
            <div className="bg-gradient-to-br from-[#EEA83F] to-[#92A8EC] p-1 rounded-lg w-4/5 h-full flex flex-col items-center">
                <Card className="bg-gradient-to-r w-full h-full from-zinc-600 to-[#14101D] bg-opacity-10 shadow-md flex flex-col items-center text-center font-poppins justify-between pl-8 pr-8">
                    <div className="flex w-full grid grid-cols-3 shadow-2xl shadow-color-white"> 
                        <div className="flex justify-end col-span-3 ml-16"> 
                            <Button size="icon"> 
                                <FiInfo 
                                    size={24} 
                                    color="white" 
                                    className="opacity-65 hover:opacity-90" 
                                />
                            </Button> 
                        </div> 
                    </div> 
                    <CardHeader className="pr-8 pl-8">
                        <CardTitle className="text-3xl">{name}</CardTitle>
                        <CardDescription className="text-[#FCBF21] text-lg">
                            Incentivized liquidity pool.
                        </CardDescription>
                        <CardDescription className="italic text-gray-400">{stakingPeriod}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center pr-8 pl-8">
                        <p className="text-[#B282F0] text-4xl font-bold pb-5"> APY: {apy}%</p>
                        <span className="text-sm text-white"> Additional bonus reward: <br></br></span> 
                        <span className="text-sm text-white"> (after stake duration) </span> 

                        <div className="flex flex-col justify-center items-center"> 
                            <div className={`h-16 w-48 bg-black bg-opacity-30 flex justify-center items-center rounded-lg mt-2 mb-3`}> 
                                <span className={`font-bold text-4xl text-[${bonusColor}]`}> +{900}% </span>
                            </div> 
                        </div> 
                        <div> 
                            <span className="italic text-sm text-gray-300"> Daily Rewards: </span>
                            <span className="font-semi-bold italic text-white"> {(Number(apy) / 365).toFixed(4)}% </span> 
                        </div> 
                        <div className="mb-5"> 
                            <span className="italic text-sm text-gray-300"> Yearly Rewards: </span>
                            <span className="font-semi-bold italic text-white"> {(Number(apy) / 1).toFixed(4)}% </span> 
                        </div> 
        
                    <Input 
                        type="text" 
                        disabled={stakingBalance > 0} 
                        placeholder={stakingBalance ? (Number(formatEther(BigInt(stakingBalance))) / 1e18).toFixed(4).toString() : 'Enter Amount'}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    </CardContent>

                    <CardContent className="pl-14 pr-8"> 
                    <div className="grid grid-cols-2 grid-rows-2 text-xs"> 
                        <span className="text-xs text-gray-300 flex justify-start"> Balance: {(Number(lpBalance) / 1e18).toFixed(4).toLocaleString()} </span>
                    </div> 
                    </CardContent>

                    <CardContent className="p-14 pb-4 pt-2 pr-14 text-white"> 
                        <div className="grid grid-cols-2 grid-rows-2 text-xs"> 
                            <span className="flex justify-start"> Staked Amount: </span> 
                            <span className="flex justify-end"> Staked Value:  </span> 
                            <span className="flex justify-start"> {stakingBalance ? Number(formatEther(BigInt(stakingBalance))).toFixed(4).toLocaleString() : '0' } </span>
                            <span className="flex justify-end"> [$ value] </span>
                        </div> 
                    </CardContent> 

                    <CardContent className="pr-8 pl-8"> 
                        {renderButton(stakingBalance, stakingStart, stakingEnd)}
                    </CardContent> 

                    <CardFooter className="p-6">
                        <p className="italic text-gray-300 text-sm">Un-stake duration: {unstakingPeriod}</p>
                  </CardFooter>
                </Card>                 
            </div>
        </div> 
    ); 

}
