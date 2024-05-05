export const LEGENDARY_STAKING_ABI = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_degenator",
                type: "address",
                internalType: "contract Degenator",
            },
            {
                name: "_degenatorLP",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "IS_TEST",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "claim",
        inputs: [{ name: "pid", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "degenator",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract Degenator",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "degenatorLP",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeArtifacts",
        inputs: [],
        outputs: [
            {
                name: "excludedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeContracts",
        inputs: [],
        outputs: [
            {
                name: "excludedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeSenders",
        inputs: [],
        outputs: [
            {
                name: "excludedSenders_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "failed",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "multiplyStakingBalance",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            { name: "pid", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "stake",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            { name: "pid", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "stakingBalances",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            { name: "pid", type: "uint256", internalType: "uint256" },
        ],
        outputs: [
            {
                name: "deposited",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "stakeStart",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "stakeEnd",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetArtifactSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifactSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetArtifacts",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetContracts",
        inputs: [],
        outputs: [
            {
                name: "targetedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetInterfaces",
        inputs: [],
        outputs: [
            {
                name: "targetedInterfaces_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzInterface[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "artifacts",
                        type: "string[]",
                        internalType: "string[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSenders",
        inputs: [],
        outputs: [
            {
                name: "targetedSenders_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tiers",
        inputs: [{ name: "pid", type: "uint256", internalType: "uint256" }],
        outputs: [
            {
                name: "stakingDuration",
                type: "uint256",
                internalType: "uint256",
            },
            { name: "apy", type: "uint256", internalType: "uint256" },
            {
                name: "bonus",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "unstakeDuration",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "unstake",
        inputs: [{ name: "pid", type: "uint256", internalType: "uint256" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Claim",
        inputs: [
            {
                name: "staker",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Staked",
        inputs: [
            {
                name: "staker",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Unstaked",
        inputs: [
            {
                name: "staker",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log",
        inputs: [
            {
                name: "",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_address",
        inputs: [
            {
                name: "",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "uint256[]",
                indexed: false,
                internalType: "uint256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "int256[]",
                indexed: false,
                internalType: "int256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "address[]",
                indexed: false,
                internalType: "address[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_bytes",
        inputs: [
            {
                name: "",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_bytes32",
        inputs: [
            {
                name: "",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_int",
        inputs: [
            {
                name: "",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_address",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256[]",
                indexed: false,
                internalType: "uint256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256[]",
                indexed: false,
                internalType: "int256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "address[]",
                indexed: false,
                internalType: "address[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_bytes",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_bytes32",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_decimal_int",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
            {
                name: "decimals",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_decimal_uint",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "decimals",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_int",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_string",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_uint",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_string",
        inputs: [
            {
                name: "",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_uint",
        inputs: [
            {
                name: "",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "logs",
        inputs: [
            {
                name: "",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    { type: "error", name: "PeriodAlreadyStarted", inputs: [] },
    { type: "error", name: "PeriodNotFinished", inputs: [] },
    { type: "error", name: "PeriodStillActive", inputs: [] },
    { type: "error", name: "ZeroAmount", inputs: [] },
] as const;
