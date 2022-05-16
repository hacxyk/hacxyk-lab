# Hacxyk Lab 
## Effect on Compound when USDC depegs

Since we know stablecoins could be [unstable](https://rekt.news/luna-rekt/) [sometimes](https://rekt.news/venus-blizz-rekt/), it is dangerous to assume a stablecoin would always have a stable value of $1 in a lending protocol. 

## Lab Scenario

- USDC depegs in Curve 3pool
- 1 DAI could exchange for 80 USDC from the 3pool
- `Exploit.sol` has flashloaned 5M DAI from Euler and could potentially take advantage of this depeg from the Compound protocol

## Goal

- Make use of the 5 Million DAI flashloaned from Euler, and use that to make more than 45 Million DAI
- Add your code in `Exploit.sol` file and make it pass the condition check in `exploit.js`

## The concept behind this lab

After the collapse of UST, we all learnt that even for a multi billion market cap tokens, depegging could still a very real threat to the Defi space. This lab is created to show why it is dangerous to always assume a stablecoin would hold the value of $1 without querying any on-chain data.

## How to start

- `git clone https://github.com/hacxyk/hackxyk-lab.git`
- `npm install`
- `npm install @openzeppelin/contracts`
- Get your API key from Alchemy for Ethereum mainnet, and replace the API key in `hardhat.config.js`
- `npx hardhat run scripts/exploit.js`
- If you can see `Sorry, not enough DAI gained, you only have 0 DAI in the contract` in the console, then you are ready to start by editing the function `onDeferredLiquidityCheck` in `Exploit.sol`
- If you see `Congrats, you've successfully passed this game` after running `npx hardhat run scripts/exploit.js`, you've passed the game

## Did it really happened in the past?
- [Scream finance](https://twitter.com/ftm_ecologist/status/1526081055391817729)