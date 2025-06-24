import Hero from "@/components/Hero";
import ParallaxSections from "@/components/ParallaxSections";
import HistoricalTimeline from "@/components/HistoricalTimeline";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSections />
      <HistoricalTimeline />
      <Conclusion />
    </div>
  );
};

export default Index;
