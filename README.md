# Deploy contracts in Hardhat using Ledger

This project demonstrates deployment of a very simple contract using Hardware wallet Ledger Nano S Plus

It makes use of official plugin [@nomicfoundation/hardhat-ledger](https://github.com/NomicFoundation/hardhat/releases/tag/%40nomicfoundation%2Fhardhat-ledger%401.0.0 "hardhat-ledger")

---

Install the plugin inside the project folder
```sh
npm install --save-dev @nomicfoundation/hardhat-ledger
```

### Steps to follow on your ledger
1. Connect and unlock your ledger
2. Open Ethereum App
3. Go to settings
4. Enable `Blind Signing`
5. Keep the Ethereum App Opened
6. Optional: Disable `Blind Signing` after deployment of contracts


### Steps to follow for simple projects
* Clone this repo
* Add your contracts
* Update the deployment script to support your contract/s deployment
* Create a .env file with `touch .env`
* Update environment variables as shown in .env.example
* Update network name hardhat.config.js (if not Goerli)
* Run the deployment script by
```sh
npx hardhat run scripts/deploy.js --network network-name
```
* Confirm the transaction on your ledger (Check the network, ETH amount and max gas fees)
* The console will display the deployed contract address

---

### Steps to follow for large projects
* Add this line in your hardhat.config.js
```sh
require("@nomicfoundation/hardhat-ledger");
```
* Add your desired network and your ledger accounts like below
```sh
module.exports = {
  networks: {
    goerli: {
      url: "...",
      ledgerAccounts: ["0x123..."],
    },
  },
};
```
* Run the deployment script by
```sh
npx hardhat run scripts/deploy.js --network network-name
```
* Confirm the transaction on your ledger(Check the network, ETH amount and max gas fees)
* The console will display the deployed contract address

**Note:** You can add any of your ledger account, the index does not matter.

**Pro tip:** Do not add your ledger account which has your life savings, add a new account and transfer some funds to that for deployment.
