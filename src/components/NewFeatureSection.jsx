import React from "react";

export default function NewFeatureSection() {
  return (
    <section className="bg-black text-white px-4 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Automatic <span className="text-pink-500 neon-text">Payouts</span>
        </h2>

        {/* Description */}
        <p className="text-green-400 text-lg md:text-xl mt-4 max-w-2xl">
          Earn Solana rewards automatically every 5 minutes—no claiming required!
        </p>

        {/* Responsive Info Box */}
        <div className="border border-green-500 p-4 md:p-6 mt-6 bg-black/80 rounded-lg max-w-full md:max-w-lg">
          <h3 className="text-green-500 text-lg md:text-xl font-bold">● SYSTEM.UPDATE</h3>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            The system now distributes Solana rewards even faster, ensuring seamless passive income.
          </p>
        </div>
      </div>
    </section>
  );
}
