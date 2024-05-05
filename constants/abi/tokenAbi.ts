export const TOKEN_ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_stakingContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "_legendaryStakingContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "_teamWallet",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    { inputs: [], type: "error", name: "TaxTooHigh" },
    { inputs: [], type: "error", name: "TradingIsPaused" },
    {
        inputs: [],
        type: "error",
        name: "WhaleProtectionActive",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
                indexed: true,
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
                indexed: true,
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "Approval",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newWallet",
                type: "address",
                indexed: true,
            },
        ],
        type: "event",
        name: "ChangePayout",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newPotMax",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "MaxPotChanged",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
                indexed: true,
            },
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
                indexed: true,
            },
        ],
        type: "event",
        name: "OwnershipTransferred",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
                indexed: true,
            },
            {
                internalType: "uint256",
                name: "taxAmount",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "Tax",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newTaxAmount",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "TaxAmountChanged",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
                indexed: false,
            },
        ],
        type: "event",
        name: "ToggleTax",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
                indexed: false,
            },
            {
                internalType: "uint256",
                name: "block",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "TradingPaused",
        anonymous: false,
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
                indexed: true,
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
                indexed: true,
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
                indexed: false,
            },
        ],
        type: "event",
        name: "Transfer",
        anonymous: false,
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "TAX_AMOUNT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "TAX_POT_MAX",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "_transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "burn",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newPotMax",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "changeMaxPot",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newTaxAmount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "changeTaxAmount",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    },
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "function",
        name: "initialize",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "isTaxOn",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "legendaryStakingContract",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "mint",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "pause",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "pauseTrading",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "permit",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "wallet",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "setTeamWallet",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "stakingContract",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "toggleTax",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "value",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "toggleWhaleProtection",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "tokenPair",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "tradingPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "transferOwnership",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newStakingContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "updateStakingContract",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newTokenPair",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
        name: "updateTokenPair",
    },
    {
        inputs: [],
        stateMutability: "view",
        type: "function",
        name: "whaleProtectionPeriod",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
] as const;
