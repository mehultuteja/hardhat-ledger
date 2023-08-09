# Deploy contracts in Hardhat using Ledger

This project demonstrates deployment of a very simple contract using Hardware wallet ledger nano S

It makes use of official plugin [@nomicfoundation/hardhat-ledger](https://github.com/NomicFoundation/hardhat/releases/tag/%40nomicfoundation%2Fhardhat-ledger%401.0.0, "hardhat-ledger")

**Steps to follow**
* Clone this repo
* Add your contracts
* Update the deployment script to support your contract/s deployment
* Create a .env file with `touch .env`
* Update environment variables as shown in .env.example
* Connect your ledger
* Open Ethereum App on your ledger
* Ensure `Blind signing` is enabled in App settings
* Run the deployment script by
`npx hardhat run scripts/deploy.js --network network-name`
* Confirm the transaction on your ledger
* The console will display the deployed contract address
