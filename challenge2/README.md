# Hacxyk Lab  
## Effect on Compound when a collateral supports ERC777 callback function  
  
Compound itself has never been hacked before (if you ignore the COMP reward glitch), because the collaterals in use are vetted heavily before being whitelisted as collaterals.  
  
However a Compound fork, Cream Finance, supported AMP, a ERC777 token that has a callback function. This introduced a re-entrancy vulnerability to the protocol.  
  
## Lab Scenario  
  
- AMP is still being used as collateral in Cream Finance  
- Cream Finance has over 400M AMP in the crAMP pool  
  
## Goal  
- Find a flashloan to borrow collateral and use it to borrow AMP
- Drain all AMP in Cream finance and convert all of them to WETH
- Add your code in `Exploit.sol` and make it pass the condition checks in `exploit.js`  
  
## The concept behind this lab  
  
This was the first ever hack happened to a Compound fork. Before that, everyone assumed the Compound codebase to be battle tested and safe to use/fork. However, this incident revealed that the Compound codebase had vulnerabilities which could be exploited if a collateral allowing re-entrancy was enabled. Although Compound itself was not affected because they vetted the supported assets, forks that lack the awareness would be affected. This lab aims to demonstrate that the ubiquitous re-entrancy vulnerability can penetrate even the most battle tested protocols, by recreating the moment before the attack.
  
## How to start  
  
- `git clone https://github.com/hacxyk/hackxyk-lab.git`  
- `npm install`  
- `npm install @openzeppelin/contracts`  
- Get your API key from Alchemy for Ethereum mainnet, and replace the API key in `hardhat.config.js`  
- `npx hardhat run scripts/exploit.js`  
- If you can see `Sorry, not enough AMP drained...` in the console, then you are ready to start by editing the function `start` in `Exploit.sol`  
- If you see `Congrats, you've successfully passed this game` after running `npx hardhat run scripts/exploit.js`, you've passed the game  
  
## Did it really happen in the past?  
- [Cream finance](https://medium.com/cream-finance/c-r-e-a-m-finance-post-mortem-amp-exploit-6ceb20a630c5)