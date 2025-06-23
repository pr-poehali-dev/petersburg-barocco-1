import Hero from "@/components/Hero";
import ParallaxSections from "@/components/ParallaxSections";
import InteractiveMap from "@/components/InteractiveMap";
import HistoricalTimeline from "@/components/HistoricalTimeline";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSections />
      <InteractiveMap />
      <HistoricalTimeline />
      <Conclusion />
    </div>
  );
};

export default Index;
