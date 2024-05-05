import { useReadContract, useAccount } from 'wagmi'
import * as constants from "@/constants/addresses"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi"; 


export const useStaking = (pid: number) => {
    const {address} = useAccount();  
    if (!pid) return; 

    const {data: stakingBalance} = useReadContract({
        address: constants.STAKING,
        abi: STAKING_ABI,
        functionName: 'stakingBalances',
        args: [address as `0x${string}`, BigInt(pid)]
    })

    
    return {
        stakingBalance: stakingBalance
    }

}
