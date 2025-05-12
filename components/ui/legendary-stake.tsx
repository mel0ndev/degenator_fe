"use client"; 
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"; 
import { useToken } from "@/hooks/token"; 
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'; 
import * as contracts from "@/constants/addresses"; 
import { LEGENDARY_STAKING_ABI } from "@/constants/abi/legendaryStakingAbi";
import { ERC20_ABI } from "@/constants/abi/erc20Abi"; 
import { OnSuccess } from "@/components/ui/on-success"; 
import { useState } from "react"; 


interface IStakeArgs {
    amount: number; 
    poolIndex: number;
}

export const LegendaryStakeButton = ({amount, poolIndex}: IStakeArgs) => {
    
    const { account, approvedLP } = useToken(); 

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

    async function approve() {
        writeContract({
            address: contracts.LP_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'approve',
            args: [contracts.LEGENDARY_STAKING, BigInt(amount)]
        }); 
    }

    async function stake() {
        writeContract({
            address: contracts.LEGENDARY_STAKING,
            abi: LEGENDARY_STAKING_ABI,
            functionName: 'stake',
            args: [BigInt(amount), BigInt(poolIndex)]
        }); 
    }

    return (
        <div> 
            { Number(approvedLP) < amount || Number(approvedLP) == 0 ? (
            <Button variant="legendary" onClick={() => approve()} className="w-11/12 h-full" disabled={isPending}> 
                { isConfirming ? <Spinner /> : 'Approve' }
            </Button> 
            ) : (
            <Button variant="legendary" onClick={() => stake()} className="w-11/12 h-full" disabled={isPending}> 
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
