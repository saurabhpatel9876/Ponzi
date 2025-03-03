'use client'

import { useState } from "react";

export default function RewardsCalculator() {
  const [volume, setVolume] = useState(100000);
  const [holdings, setHoldings] = useState(1000000);

  const dailyRewardsPool = (volume * 0.05).toFixed(2);
  const dailyEarnings = (dailyRewardsPool * holdings / 1000000000).toFixed(2);
  const monthlyProjection = (dailyEarnings * 30).toFixed(2);

  return (
    <section className="text-neonGreen bg-black p-8">
      <h2 className="text-2xl font-bold mb-4">[Rewards_Calculator]</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>24h Volume (USD):</label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Your $IMG Holdings:</label>
          <input
            type="number"
            value={holdings}
            onChange={(e) => setHoldings(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Daily Rewards Pool: ${dailyRewardsPool}</p>
        <p>Your Daily Earnings: ${dailyEarnings}</p>
        <p>Monthly Projection: ${monthlyProjection}</p>
      </div>
    </section>
  );
}
