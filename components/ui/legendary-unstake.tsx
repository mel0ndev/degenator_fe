"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { LEGENDARY_STAKING_ABI } from "@/constants/abi/legendaryStakingAbi"; 
import { OnSuccess } from "@/components/ui/on-success"; 

interface IUnstakeArgs {
    poolIndex: number;
}

export const LegendaryUnstakeButton = ({poolIndex}: IUnstakeArgs) => {
    const { account } = useToken(); 
    
    const { 
        data: hash, 
        isPending, 
        writeContract,
        error
    } = useWriteContract(); 

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })
    
    async function unstake() {
        console.log("clicked and flicked bucko"); 
        writeContract({
            address: contracts.LEGENDARY_STAKING,
            abi: LEGENDARY_STAKING_ABI,
            functionName: 'unstake',
            args: [BigInt(poolIndex)]
        }) 
    }

    return (
        <div> 
            <Button 
                variant="legendary" 
                className="w-11/12 h-full" 
                disabled={isPending}
                onClick={() => unstake()}
            > 
                    { isPending ? <Spinner /> : 'Unstake' }
                </Button> 

            { isConfirmed && hash && (
                <OnSuccess hash={hash} /> 
            )}
        </div> 
    ); 
}
