export default function HeroSection() {
    return (
      <section className="bg-black text-center text-white min-h-screen flex flex-col justify-center items-center space-y-6 p-8">
        {/* Logo/Identifier */}
        <div className="text-3xl md:text-4xl font-bold tracking-widest">
          [$SPM]
        </div>
  
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span className="relative inline-block">
            <span className="text-white">Solana Printing Machine</span>
            <span className="absolute inset-0 text-pink-500 opacity-60 blur-sm">
            Solana Printing Machine
            </span>
          </span>
        </h1>
  
        {/* Subtitle */}
        <p className="text-sm md:text-lg lg:text-xl">
          print Solana rewards every 5 minutes just by holding $SPM tokens
        </p>
  
        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-gray-700 transition"
          >
            Buy Now
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-gray-700 transition"
          >
            Chart
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-gray-700 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-gray-700 transition"
          >
            Telegram
          </a>
        </div>
      </section>
    );
  }
  