
# ERC20 Token

The ERC20 contract for our custom token was built by inheriting from the Openzeppelin contract.


## Features

- This allows for easy implementation of the core functionality such as buying, minting, withdrawing, and burning tokens.
- The contract was thoroughly tested using MOCHA and CHAI to ensure its stability and security before deployment. 
- The deployment process was done using hardhat on a local node and a gas report was generated using hardhat-gas-reporter to monitor the cost of the deployment.
- Additionally, Coinmarketcap API was used to calculate the gas cost.


## Run Locally

Clone the project

```shell
  git clone https://github.com/sumana10/ERC20Token.git
```

Go to the project directory

```shell
  cd ERC20Token
```

Install dependencies

```shell
  npm install
```

Start the server

```shell
  npx hardhat compile
```


## Running Tests

To run tests, run the following command

```shell
  npx hardhat test
```


## Acknowledgements

 - [OpenZeppelin ERC20 Contracts](https://docs.openzeppelin.com/contracts/4.x/erc20)
 - [CoinMarketCap API](https://pro.coinmarketcap.com/account)
 - [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start)


## 🛠 Skills
Solidity, Hardhat, Mocha, Chai.


## Authors

- [@sumana](https://www.github.com/sumana10)

