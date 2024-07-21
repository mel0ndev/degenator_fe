//abi
import { useReadContract, useAccount } from 'wagmi'
import * as constants from "@/constants/addresses"; 
//import {TOKEN_ABI} from "@/constants/abis"; 
import { TOKEN_ABI } from "@/constants/abi/tokenAbi"; 

const degenatorContract = {
    address: constants.TOKEN_ADDRESS,
    abi: TOKEN_ABI, 
}

export const useToken = () => {
    const {address} = useAccount();  
    
    const {data: balance} = useReadContract({
        address: constants.TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address as `0x${string}`] 
    }); 

    const {data: totalStaked } = useReadContract({
        address: constants.TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [constants.STAKING as `0x${string}`] 
    }); 

    const {data: lpBalance} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address as `0x${string}`] 
    }); 

    const {data: totalLpStaked} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'balanceOf',
        args: [constants.LEGENDARY_MASTERCHEF as `0x${string}`] 
    }); 

    const {data: approvedLP} = useReadContract({
        address: constants.LP_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'allowance', 
        args: [address, constants.LEGENDARY_MASTERCHEF]
    }); 

    return {
        balance: balance,
        lpBalance: lpBalance,
        approvedLP: approvedLP,
        totalStaked: totalStaked,
        totalLpStaked: totalLpStaked,
        account: address,
    }; 
}
