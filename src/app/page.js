import Tokenomics from "@/components/Tokenomics";
import HowItWorks from "../components/HowItWorks";
import RewardsCalculator from "../components/RewardsCalculator";
import HeroSection from "@/components/HeroSection";

import Navbar from "@/components/Navbar";

export default function Home() {

  
  return (
    <div className="bg-black text-neonGreen min-h-screen">
      <header className="p-6 text-center font-bold text-xl">Reward.io</header>
      <main>


        
        <Navbar/>
        {/* <LitepaperSection/> */}
        <HeroSection/>
        <HowItWorks />
        <Tokenomics/>
      </main>
    </div>
  );
}
