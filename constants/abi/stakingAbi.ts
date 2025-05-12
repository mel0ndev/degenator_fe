export const STAKING_ABI = [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_degenator",
                    "type": "address",
                    "internalType": "contract Degenator"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addPid",
            "inputs": [
                {
                    "name": "newStakingTier",
                    "type": "tuple",
                    "internalType": "struct DegenStaking.StakingTier",
                    "components": [
                        {
                            "name": "stakingDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "apy",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "bonus",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "unstakeDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "allowEmergencyWithdraws",
            "inputs": [],
            "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "claim",
            "inputs": [
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "degenator",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract Degenator"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "earned",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "emergencyWithdraw",
            "inputs": [
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "multiplyStakingBalance",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                { "name": "", "type": "address", "internalType": "address" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "pids",
            "inputs": [],
            "outputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "stake",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stakingBalances",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                {
                    "name": "deposited",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakeStart",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakeEnd",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tiers",
            "inputs": [
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                {
                    "name": "stakingDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                { "name": "apy", "type": "uint256", "internalType": "uint256" },
                {
                    "name": "bonus",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "unstakeDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "toggleAllowEmergencyWithdraws",
            "inputs": [
                { "name": "allow", "type": "bool", "internalType": "bool" }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "unstake",
            "inputs": [
                { "name": "pid", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Claim",
            "inputs": [
                {
                    "name": "staker",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "EmergencyWithdraw",
            "inputs": [
                {
                    "name": "staker",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "EmergencyWithdrawActive",
            "inputs": [],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Staked",
            "inputs": [
                {
                    "name": "staker",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Unstaked",
            "inputs": [
                {
                    "name": "staker",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        { "type": "error", "name": "EmergencyWithdrawNotActive", "inputs": [] },
        { "type": "error", "name": "InvalidPid", "inputs": [] },
        { "type": "error", "name": "PeriodAlreadyStarted", "inputs": [] },
        { "type": "error", "name": "PeriodNotFinished", "inputs": [] },
        { "type": "error", "name": "PeriodStillActive", "inputs": [] },
        { "type": "error", "name": "ZeroAmount", "inputs": [] }
] as const;
