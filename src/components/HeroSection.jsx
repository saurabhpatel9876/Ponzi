import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="bg-black text-center text-white py-16 flex flex-col justify-center items-center space-y-3">
      {/* Logo/Identifier */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
        $PWINT
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
        <span className="relative inline-block text-yellow-400">
          Print Money in Network Transaction
        </span>
      </h1>

      {/* Button Group (Compact) */}
      <div className="flex flex-wrap justify-center gap-3">
        <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-700 transition">
          Buy Now
        </a>
        <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-700 transition">
          Chart
        </a>
        <a href="https://x.com/pwint_sol" className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-700 transition">
          Twitter
        </a>
        <a href="Lite" className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-700 transition">
          LitePaper
        </a>
      </div>
    </section>
  );
}
