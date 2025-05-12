//abi
import { useReadContract, useAccount } from 'wagmi'
import * as constants from "@/constants/addresses"; 
//import {TOKEN_ABI} from "@/constants/abis"; 
import { TOKEN_ABI } from "@/constants/abi/tokenAbi"; 
import { ERC20_ABI } from "@/constants/abi/erc20Abi"; 
import { STAKING_ABI } from "@/constants/abi/stakingAbi";

const degenatorContract = {
    address: constants.TOKEN_ADDRESS,
    abi: TOKEN_ABI, 
}

export const useToken = () => {
    const {address} = useAccount();  
    
    const {data: balance, error: tokenBalanceError} = useReadContract({
        address: constants.TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address as `0x${string}`]
    }); 

    const {data: approved, error: tokenAllowanceError, fetchStatus: isFetching} = useReadContract({
        address: constants.TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'allowance',
        args: [address as `0x${string}`, constants.STAKING as `0x${string}`],
    }); 


    const {data: totalStaked } = useReadContract({
        address: constants.TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [constants.STAKING as `0x${string}`] 
    }); 

    const {data: lpBalance, error: lpTokenBalanceError} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address as `0x${string}`] 
    }); 

    const {data: totalLpStaked, error: totalLpStakedError} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [constants.LEGENDARY_STAKING as `0x${string}`] 
    }); 

    const {data: approvedLP, error: lpAllowanceError} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'allowance', 
        args: [address as `0x${string}`, constants.LEGENDARY_STAKING]
    }); 


    return {
        balance: balance || tokenBalanceError,
        approved: {approved, tokenAllowanceError, isFetching},
        lpBalance: lpBalance,
        approvedLP: approvedLP,
        totalStaked: totalStaked,
        totalLpStaked: totalLpStaked,
        account: address,
    }; 
}
