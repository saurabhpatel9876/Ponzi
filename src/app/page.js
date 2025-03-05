import Tokenomics from "@/components/Tokenomics";
import HowItWorks from "../components/HowItWorks";
import RewardsCalculator from "../components/RewardsCalculator";
import HeroSection from "@/components/HeroSection";

import Navbar from "@/components/Navbar";
import ChartDashboard from "@/components/ChartDashboard";
import NewFeatureSection from "@/components/NewFeatureSection";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {

  
  return (
    <div className="bg-black text-neonGreen min-h-screen m-0">
      <header className="p-6 text-center font-bold text-xl">Reward.io</header>
      <main>


        
        <Navbar/>
        {/* <LitepaperSection/> */}
        <HeroSection/>
        <NewFeatureSection/>
        {/* <HowItWorks /> */}
        <FeatureCards/>
        
        <Tokenomics/>
      </main>
    </div>
  );
}
