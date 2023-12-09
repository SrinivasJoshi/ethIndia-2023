export const contractAddress :`0x${string}`[] = ["0x949EeF6D73417ce4792ed611eC1c13165EC40C5E","0x37B07F01b2Cea802B0B0ea70c9E432dE248B314f"];

export const contractABI = [
  {
    inputs: [
      {
        internalType: "bytes32[5]",
        name: "_initialAnswers",
        type: "bytes32[5]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "solver",
        type: "address",
      },
    ],
    name: "PuzzleSolved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_solution",
        type: "string",
      },
    ],
    name: "submitSolution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "funcCanAttemptLevel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "participantLevels",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
