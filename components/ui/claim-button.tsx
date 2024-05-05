"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi"; 
import { OnSuccess } from "@/components/ui/on-success"; 


interface IClaimArgs {
    poolIndex: number;
}

export const ClaimButton = ({poolIndex}: IClaimArgs) => {
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
    
    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        console.log(writeContract({
            address: contracts.STAKING,
            abi: STAKING_ABI,
            functionName: 'claim',
            args: [BigInt(poolIndex)]
        })); 
    }

    return (
        <div> 
        <form onSubmit={submit}> 
            <Button variant="stake" type="submit" className="w-11/12" disabled={isPending}> 
                { isConfirming ? <Spinner /> : 'Claim' }
            </Button> 

        { isConfirmed && hash && (
            <OnSuccess hash={hash} /> 
        )}
        </form> 
        </div> 
    ); 
}
