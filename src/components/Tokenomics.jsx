export default function Tokenomics() {
    return (
      <section className="bg-black text-white p-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Tokenomics</h2>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            Our token is designed with a fair distribution model and sustainable reward mechanism.
          </p>
        </div>
  
        {/* Contract Section */}
        <div className="mb-8 bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <p className="text-sm md:text-base">Contract:</p>
            <p className="text-neonGreen font-mono break-all">
              kchbhig thaljflasjdlsjfdlksfsmfkls
            </p>
          </div>
          <p className="text-xs md:text-sm lg:text-base mt-2 md:mt-0 text-green-500">
            ● VERIFIED ON SOLSCAN
          </p>
        </div>
  
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Statistic Item */}
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
  