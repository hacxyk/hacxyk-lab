# Hacxyk Lab 
## Effect on Compound when USDC depegs

Since we know stablecoins could be [unstable](https://rekt.news/luna-rekt/) [sometimes](https://rekt.news/venus-blizz-rekt/), it is dangerous to assume a stablecoin would always have a stable value of $1 in a lending protocol. 

## Lab Scenario

- USDC depegs in Curve 3pool
- 1 DAI could exchange for 80 USDC from the 3pool

## Goal

- Make use of the 5 Million DAI flashloaned from Euler, and use that to make more than 45 Million DAI
- Add your code in `Exploit.sol` file and make it pass the condition check in `exploit.js`

## How to start

- `git clone https://github.com/hacxyk/hackxyk-lab.git`
- `npm install`
- `npm install @openzeppelin/contracts`
- Get your API key from Alchemy for Ethereum mainnet, and replace the API key in `hardhat.config.js`
- `npx hardhat run scripts/exploit.js`
- If you can see `Sorry, not enough DAI gained, you only have 0 DAI in the contract` in the console, then you are ready to start by editing the function `onDeferredLiquidityCheck` in `Exploit.sol`

## Did it really happened in the past?
- [Scream finance](https://twitter.com/ftm_ecologist/status/1526081055391817729)