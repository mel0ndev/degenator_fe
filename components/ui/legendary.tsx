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

interface IBasicTier {
    name: string; 
    stakingPeriod: string; 
    apy: string; 
    bonus: string; 
    unstakingPeriod: string; 
    bonusColor: string; 
} 

export const LegendaryDegenator = ({
    name, 
    stakingPeriod, 
    bonus,
    apy,
    unstakingPeriod,
    bonusColor,
}: IBasicTier) => {


    return (
        <div className={`w-full h-full p-0 lg:p-6 lg:pb-0 flex flex-col items-center justify-center`}>
            <div className="bg-gradient-to-br from-[#EEA83F] to-[#92A8EC] p-1 rounded-lg w-4/5 h-full flex flex-col items-center">
                <Card className="bg-gradient-to-r w-full h-full from-zinc-600 to-[#14101D] bg-opacity-10 shadow-md flex flex-col items-center text-center font-poppins justify-between pl-16 pr-16">
                    <div className="flex w-full grid grid-cols-3"> 
                        <div className="flex justify-end col-span-3 m-5"> 
                            <Button size="icon"> 
                                <FiInfo 
                                    size={24} 
                                    color="white" 
                                    className="opacity-65 hover:opacity-90" 
                                />
                            </Button> 
                        </div> 
                    </div> 
                    <CardHeader>
                        <CardTitle className="text-3xl">{name}</CardTitle>
                        <CardDescription className="text-[#FCBF21] text-lg">
                            Incentivized liquidity pool.
                        </CardDescription>
                        <CardDescription className="italic text-gray-400">{stakingPeriod}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                        <p className="text-[#B282F0] text-4xl font-bold pb-5"> APY: {apy}%</p>
                        <span className="text-sm"> Additional bonus reward: <br></br></span> 
                        <span className="text-sm"> (after stake duration) </span> 

                        <div className="flex flex-col justify-center items-center"> 
                            <div className={`h-16 w-48 bg-black bg-opacity-30 flex justify-center items-center rounded-lg mt-2 mb-3`}> 
                                <span className={`font-bold text-4xl text-[${bonusColor}]`}> +{bonus}% </span>
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

                        <div className="h-10 w-11/12 bg-black bg-opacity-70 outline outline-1 outline-[#66BEE8] flex items-center rounded-xl font-bold text-xl"> 
                            <span className="pl-6"> 
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
                        <Button variant="legendary" className="w-11/12 h-full"> 
                            Stake
                        </Button> 
                    </CardContent> 

                    <CardFooter className="p-6">
                        <p className="italic text-gray-300 text-sm">Un-stake duration: {unstakingPeriod}</p>
                  </CardFooter>
                </Card>                 
            </div>
        </div> 
    ); 

}
