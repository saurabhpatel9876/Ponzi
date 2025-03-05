'use client';
import React from "react";

export default function LitepaperSection() {
  const scrollToContent = () => {
    const litepaperContent = document.getElementById("litepaper-content");
    if (litepaperContent) {
      litepaperContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-8 space-y-12">
      {/* Clickable Litepaper Section */}
      <div
        onClick={scrollToContent}
        className="cursor-pointer text-center bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Introduction
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          <span className="font-bold text-purple-300">PWINT</span>—Print Money in Network Transaction—is a <span className="italic">trailblazing token</span> on the Solana blockchain, designed to turn holding into a <span className="text-green-300">passive income stream</span> by delivering <span className="font-semibold">SOL rewards every 15 minutes</span>. Built on Solana’s high-speed, low-cost network, PWINT embodies its name: a system that “prints” wealth through seamless network transactions. <span className="text-yellow-300">Join us in revolutionizing DeFi rewards.</span>
        </p>
      </div>

      {/* Litepaper Content */}
      <div
        id="litepaper-content"
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 mt-12 rounded-xl shadow-lg max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 border-b-2 border-purple-500 pb-2">
          Litepaper Introduction
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-loose">
          {/* The Problem */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">The Problem</h3>
            <p>
              Most crypto tokens offer <span className="text-red-300">no immediate value</span> to holders unless traded or staked. Passive income in DeFi is often locked behind <span className="italic">complexity</span> or <span className="font-semibold">high fees</span>. PWINT solves this by making rewards <span className="text-green-300">effortless and automatic</span>—wealth creation, redefined.
            </p>
          </section>

          {/* Our Solution */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">Our Solution</h3>
            <p>PWINT delivers:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><span className="font-bold text-green-300">Automated SOL Rewards:</span> Earn SOL every 15 minutes simply by holding PWINT.</li>
              <li><span className="font-bold text-green-300">5% Tax Mechanism:</span> A 5% buy tax and 5% sell tax fund the reward pool, ensuring sustainability.</li>
              <li><span className="font-bold text-green-300">Solana-Powered:</span> Near-instant transactions and minimal fees maximize your earnings.</li>
            </ul>
          </section>

          {/* Tokenomics */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">Tokenomics</h3>
            <ul className="space-y-2">
              <li><span className="font-bold">Total Supply:</span> 1 billion PWINT</li>
              <li><span className="font-bold">Initial Distribution:</span>
                <ul className="list-circle pl-6">
                  <li>Liquidity Pool: 100% (fully transparent, with LP tokens burned to ensure permanent liquidity and community trust)</li>
                  <li>Note: Entire supply allocated to the liquidity pool at launch; LP burning removes control, locking liquidity forever.</li>
                </ul>
              </li>
              <li><span className="font-bold">Reward Tax:</span>
                <ul className="list-circle pl-6">
                  <li>5% on buys, redistributed as SOL to PWINT holders.</li>
                  <li>5% on sells, redistributed as SOL to PWINT holders.</li>
                </ul>
              </li>
              <li><span className="font-bold">Burn Mechanism:</span> [Optional: X% of tax burns PWINT to reduce supply over time.]</li>
            </ul>
          </section>

          {/* How It Works */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Purchase PWINT on [DEX, e.g., Raydium].</li>
              <li>Store PWINT in a Solana wallet (e.g., Phantom).</li>
              <li>Receive SOL rewards every 15 minutes, proportional to your PWINT holdings, funded by the 5% buy/sell tax.</li>
              <li>Enjoy passive income with confidence—liquidity is burned and secured forever.</li>
            </ol>
          </section>

          {/* Why Solana */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">Why Solana?</h3>
            <p>
              Solana’s capacity for up to <span className="font-bold">700,000 transactions per second</span> with negligible costs powers PWINT’s 15-minute reward cycles. Burning the LP tokens leverages Solana’s transparency, ensuring the 1 billion PWINT supply is locked in liquidity <span className="text-yellow-300">permanently</span>.
            </p>
          </section>

          {/* Community & Vision */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-300">Community & Vision</h3>
            <p>
              PWINT is a movement built on <span className="font-bold">trust and fairness</span>. By burning the liquidity pool tokens, we commit to a fully decentralized and secure ecosystem. Future goals include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Governance for PWINT holders.</li>
              <li>Partnerships within the Solana ecosystem.</li>
              <li>Potential NFT integrations or enhanced reward tiers.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}