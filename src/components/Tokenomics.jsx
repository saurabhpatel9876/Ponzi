'use client'
export default function Tokenomics() {
  return (
    <section className="bg-black text-white p-8">
      {/* Title Section */}
      

     
      <div className="flex justify-center items-center h-[200px]">
      <div className="flex items-center bg-gray-900 border border-white px-4 py-2 rounded-lg w-full max-w-lg">
        {/* Contract Address */}
        <p className="text-white font-mono break-all flex-grow text-center">
          here our ca of PWIT
        </p>

        {/* Copy Button */}
        <button
          onClick={() => navigator.clipboard.writeText("ATc32obstKTZAoYbiwLdtm5oh4rn7QXtjjm8GSoCY22Q")}
          className="ml-2 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold hover:bg-black hover:text-white transition"
        >
          Copy
        </button>
      </div>
    </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Statistic Items */}
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-sm md:text-base">[ 1B ]</p>
          <p className="text-2xl md:text-3xl font-bold">1,000,000,000</p>
          <p className="text-sm">Total Supply</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-sm md:text-base">=====</p>
          <p className="text-2xl md:text-3xl font-bold">100%</p>
          <p className="text-sm">Initial Liquidity</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-sm md:text-base">&lt; 5% &gt;</p>
          <p className="text-2xl md:text-3xl font-bold">5%</p>
          <p className="text-sm">Tax</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-sm md:text-base">&gt;&gt;100&lt;&lt;</p>
          <p className="text-2xl md:text-3xl font-bold">100%</p>
          <p className="text-sm">Fair Launch</p>
        </div>
      </div>
    </section>
  );
}
