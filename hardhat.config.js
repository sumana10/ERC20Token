require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.6",

  gasReporter:{
    enabled:true,
    currency:"INR",
    noColors:true,
    outputFile:"gasReport.txt",
    coinmarketcap:"<use your key>",
    token: "matic",
  }
};
