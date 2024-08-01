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
import { StakeButton } from "@/components/ui/stake-button"; 
import { UnstakeButton } from "@/components/ui/unstake-button"; 
import { ClaimButton } from "@/components/ui/claim-button"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { FiInfo } from "react-icons/fi";
import { useState, useEffect } from "react"; 
import { useBlockNumber } from 'wagmi'; 
import { useToken } from "@/hooks/token"; 
import { formatEther, parseEther } from "viem"; 
import { useReadContract, useAccount } from 'wagmi'
import * as constants from "@/constants/addresses"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi"; 

interface IBasicTier {
    name: string; 
    stakingPeriod: string; 
    apy: string; 
    bonus: string; 
    unstakingPeriod: string; 
    bonusColor: string; 
    badgeSource: string; 
    index: number; 
} 

export const BasicTier = ({
    name, 
    stakingPeriod, 
    bonus,
    apy,
    unstakingPeriod,
    bonusColor,
    badgeSource,
    index
}: IBasicTier) => {
    const { data: blockNumber } = useBlockNumber({ watch: true }) 

    const { account, balance } = useToken(); 

    const [amount, setAmount] = useState(''); 
    const [stakingBalance, setStakingBalance] = useState(0); 
    const [stakingStart, setStakingStart] = useState(0); 
    const [stakingEnd, setStakingEnd] = useState(0); 

    const data = useReadContract({
        address: constants.STAKING,
        abi: STAKING_ABI,
        functionName: 'stakingBalances',
        args: [account as `0x${string}`, BigInt(index)]
    })

	useEffect(() => {
            if (index || index == 0 && data) {
                setStakingBalance(Number(data.data?.[0])); 
                setStakingStart(Number(data.data?.[1])); 
                setStakingEnd(Number(data.data?.[2])); 
            }

    }, [data, blockNumber]); 

    const renderButton = (stakingBalance: number, stakingStart: number, stakingEnd: number) => {
        if (stakingBalance > 0 && stakingEnd === 0) {
                //show unstake 
                return <UnstakeButton poolIndex={index} />
            } else if (stakingBalance > 0 && stakingEnd > 0) {
                //show claim
                return <ClaimButton poolIndex={index} /> 
            } else {
                //show stake
                return <StakeButton amount={Number(parseEther(amount))} poolIndex={index} />
            }
    }

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
                <CardTitle className="text-white">{name}</CardTitle>
                <CardDescription className="italic text-gray-400">{stakingPeriod}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <p className="text-[#B282F0] font-bold pb-5"> APY: {apy}%</p>
                <span className="text-sm text-white"> Additional bonus reward: <br></br></span> 
                <span className="text-sm text-white"> (after stake duration) </span> 

                <div className="flex flex-col justify-center items-center"> 
                    <div className={`h-10 w-28 bg-black bg-opacity-30 flex justify-center items-center rounded-lg mt-2 mb-3`}> 
                        <span className={`font-bold text-xl text-[${bonusColor}]`}> +{bonus}% </span>
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

                <div className="flex align-left justify-start w-5/6 mr-2 pb-2 pt-1">
                    <span className="text-xs text-gray-300"> Balance: {(Number(balance) / 1e18).toFixed(4).toString()} </span>
                </div> 

            </CardContent>
            <CardContent className="p-12 lg:p-6 pb-2 pt-0 text-white"> 
                <div className="grid grid-cols-2 grid-rows-2 text-xs"> 
                    <span className="flex justify-start"> Staked Amount: </span> 
                    <span className="flex justify-end"> Staked Value:  </span> 
                    <span className="flex justify-start"> {stakingBalance ? (Number(formatEther(BigInt(stakingBalance)))).toFixed(2).toString() : '0'} </span>
                    <span className="flex justify-end"> [amount] </span>
                </div> 
            </CardContent> 

            <CardContent> 
                {renderButton(stakingBalance, stakingStart, stakingEnd)}
            </CardContent> 

            <CardFooter className="p-6">
                <p className="italic text-gray-300 text-sm">Un-stake duration: {unstakingPeriod}</p>
          </CardFooter>
        </Card>                 
        </div> 
    ); 
}


