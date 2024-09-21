"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi"; 
import { ERC20_ABI } from "@/constants/abi/erc20Abi"; 
import { OnSuccess } from "@/components/ui/on-success"; 


interface IStakeArgs {
    amount: number; 
    poolIndex: number;
}

export const StakeButton = ({amount, poolIndex}: IStakeArgs) => {

    console.log(contracts.TOKEN_ADDRESS); 
    
    const { account, approved } = useToken(); 
    
    const { 
        data: hash, 
        isPending, 
        writeContract,
        error
    } = useWriteContract(); 

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    }
    )
    async function approve() {
        writeContract({
            address: contracts.TOKEN_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'approve',
            args: [contracts.STAKING, BigInt(amount)]
        }); 
    }

    console.log("APPROVED TOKEN", approved); 
   
    async function stake() {
        console.log(writeContract({
            address: contracts.STAKING,
            abi: STAKING_ABI,
            functionName: 'stake',
            args: [BigInt(amount), BigInt(poolIndex)]
        })); 
    }

    return (
        <div> 
            { Number(approved) < amount || Number(approved) == 0 ? (
            <Button variant="stake" onClick={() => approve()} className="w-11/12" disabled={isPending}> 
                { isConfirming ? <Spinner /> : 'Approve' }
            </Button> 
            ) : (
            <Button variant="stake" onClick={() => stake()} className="w-11/12" disabled={isPending}> 
                { isConfirming ? <Spinner /> : 'Stake' }
            </Button> 
            )}
        { error && (
            <div className="text-red-500">Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
        { isConfirmed && hash && (
            <OnSuccess hash={hash} /> 
        )}
        </div> 


    ); 
}
