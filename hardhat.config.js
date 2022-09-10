require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
    defaultNetwork: "matic",
    networks: {
        matic: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.MATIC_DEPLOYER_PRIVATE_KEY]
        },
    },
    solidity: "0.8.4"
};