"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi"; 
import { OnSuccess } from "@/components/ui/on-success"; 


interface IUnstakeArgs {
    poolIndex: number;
}

export const UnstakeButton = ({poolIndex}: IUnstakeArgs) => {
    
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
        writeContract({
            address: contracts.STAKING,
            abi: STAKING_ABI,
            functionName: 'unstake',
            args: [BigInt(poolIndex)]
        }); 
    }

    return (
        <div> 
        <form onSubmit={submit}> 
            <Button variant="stake" type="submit" className="w-11/12" disabled={isPending}> 
                { isPending ? <Spinner /> : 'Unstake' }
            </Button> 

        { isConfirmed && hash && (
            <OnSuccess hash={hash} /> 
        )}
        </form> 
        </div> 
    ); 
}
