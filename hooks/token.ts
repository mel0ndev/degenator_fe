//abi
import { useReadContracts } from 'wagmi'
import * as constants from "@/constants/addresses"; 
import * as abis from "@/constants/abis"; 


const degenatorContract = {
    address: constants.TOKEN_ADDRESS,
    abi: abis.TOKEN_ABI, 
}

export const useToken = () => {
    

    const {data: balance} = useReadContracts([
        contracts: [
            
        ],

    ]); 

}
