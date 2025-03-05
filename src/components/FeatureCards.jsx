import React from "react";

const features = [
  {
    title: "10 Minute Rewards",
    description: "Receive $SOL rewards automatically every 10 minutes. No waiting, just continuous earnings.",
  },
  {
    title: "No Lock-up Period",
    description: "Keep your tokens liquid while earning rewards. Full flexibility with your assets.",
  },
  {
    title: "Compound Growth",
    description: "Reinvest your rewards to maximize earnings and accelerate your wealth accumulation.",
  },
  {
    title: "Toeknomics",
    description: "Our token is designed with a fair distribution model and a sustainable reward mechanism..",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-black px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-center shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-yellow-400 text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
