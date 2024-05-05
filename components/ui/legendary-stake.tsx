"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { LEGENDARY_STAKING_ABI } from "@/constants/abi/legendaryStakingAbi"; 
import { OnSuccess } from "@/components/ui/on-success"; 


interface IStakeArgs {
    amount: number; 
    poolIndex: number;
}

export const LegendaryStakeButton = ({amount, poolIndex}: IStakeArgs) => {
    
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
            address: contracts.LEGENDARY_STAKING,
            abi: LEGENDARY_STAKING_ABI,
            functionName: 'stake',
            args: [BigInt(amount), BigInt(poolIndex)]
        })); 
    }

    return (
        <div> 
        <form onSubmit={submit}> 
            <Button variant="legendary" type="submit" className="w-11/12 h-full" disabled={isPending}> 
                { isPending ? <Spinner /> : 'Stake' }
            </Button> 

        { isConfirmed && hash && (
            <OnSuccess hash={hash} /> 
        )}
        </form> 
        </div> 
    ); 
}
