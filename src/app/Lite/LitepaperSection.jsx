'use client'
import React from "react";

export default function LitepaperSection() {
  const scrollToContent = () => {
    const litepaperContent = document.getElementById("litepaper-content");
    if (litepaperContent) {
      litepaperContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-8 space-y-6">
      {/* Clickable Litepaper Section */}
      <div
        onClick={scrollToContent}
        className="cursor-pointer text-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition hover:bg-gray-700"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Introduction</h2>
        <p className="text-lg md:text-xl">
      
PWINT—Print Money in Network Transaction—is a trailblazing token on the Solana blockchain, designed to turn holding into a passive income stream by delivering SOL rewards every 15 minutes. Built on Solana’s high-speed, low-cost network, PWINT embodies its name: a system that “prints” wealth through seamless network transactions. Join us in revolutionizing DeFi rewards.

        </p>
      </div>

      {/* Hidden Litepaper Content */}
      <div
        id="litepaper-content"
        className="hidden md:block bg-gray-800 p-8 mt-12 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Litepaper Introduction</h2>
        <p className="text-lg md:text-xl">
        <br/>
        	The Problem
          <br/>
Most crypto tokens offer no immediate value to holders unless traded or staked. Passive income in DeFi is often locked behind complexity or high fees. PWINT solves this by making rewards effortless and automatic—wealth creation, redefined.
<br/>
<br/>

Our Solution
<br/>
PWINT delivers: 
<br/>
•	Automated SOL Rewards: Earn SOL every 15 minutes simply by holding PWINT.

•	5% Tax Mechanism: A 5% buy tax and 5% sell tax fund the reward pool, ensuring sustainability. 

<br/>
•	Solana-Powered: Near-instant transactions and minimal fees maximize your earnings.
<br/>
4.	Tokenomics
<br/>
•	Total Supply:  1 billion PWINT 
<br/>
•	Initial Distribution: 
<br/>
o	Liquidity Pool: 100% (fully transparent, with LP tokens burned to ensure permanent liquidity and community trust) 
<br/>
o	Note: Entire supply allocated to the liquidity pool at launch; LP burning removes control, locking liquidity forever.
<br/>
•	Reward Tax: 
<br/>
o	5% on buys, redistributed as SOL to PWINT holders. 
<br/>
o	5% on sells, redistributed as SOL to PWINT holders.
<br/>
•	Burn Mechanism: [Optional: X% of tax burns PWINT to reduce supply over time.]
<br/>
5.	How It Works
<br/>
1.	Purchase PWINT on [DEX, e.g., Raydium]. 
<br/>
2.	Store PWINT in a Solana wallet (e.g., Phantom). 
<br/>
3.	Receive SOL rewards every 15 minutes, proportional to your PWINT holdings, funded by the 5% buy/sell tax. 
<br/>
4.	Enjoy passive income with confidence—liquidity is burned and secured forever.
<br/>
6.	Why Solana?
<br/>
Solana’s capacity for up to 700,000 transactions per second with negligible costs powers PWINT’s 15-minute reward cycles. Burning the LP tokens leverages Solana’s transparency, ensuring the 1 billion PWINT supply is locked in liquidity permanently.

<br/>7.	Community & Vision

<br/>PWINT is a movement built on trust and fairness. By burning the liquidity pool tokens, we commit to a fully decentralized and secure ecosystem. Future goals include: 

<br/>•	Governance for PWINT holders. 

<br/>•	Partnerships within the Solana ecosystem. 

<br/>•	Potential NFT integrations or enhanced reward tiers.


        </p>
      </div>
    </div>
  );
}
