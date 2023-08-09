require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ledger");
require('dotenv').config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const DEPLOYER = process.env.DEPLOYER;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      ledgerAccounts: [DEPLOYER],
    },
  },
};
