require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.7.6",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.5.0",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.8.0",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
      {
        version: "0.8.10",
        settings:{
          optimizer:{
            enabled:true,
            runs: 100
          }
        }
      },
    ],
    
  },

  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/REPLACEME", // ONLY EDIT THIS LINE
        blockNumber: 14584692
      },
      initialBaseFeePerGas: 0,
      gasPrice: 0
    }
  }
};