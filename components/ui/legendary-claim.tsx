"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { LEGENDARY_MASTERCHEF } from "@/constants/abi/legendaryMasterchefAbi"; 
import { OnSuccess } from "@/components/ui/on-success"; 


export const LegendaryClaimButton = () => {
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
            address: contracts.LEGENDARY_MASTERCHEF,
            abi: LEGENDARY_MASTERCHEF,
            functionName: 'withdraw',
            args: [BigInt(1)]
        })); 
    }

    return (
        <div> 
        <form onSubmit={submit}> 
            <Button variant="stake" type="submit" className="w-11/12 h-full" disabled={isPending}> 
                { isConfirming ? <Spinner /> : 'Claim' }
            </Button> 

        { isConfirmed && hash && (
            <OnSuccess hash={hash} /> 
        )}
        </form> 
        </div> 
    ); 
}
