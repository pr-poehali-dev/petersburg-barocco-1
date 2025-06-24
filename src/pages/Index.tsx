import Hero from "@/components/Hero";
import ParallaxSections from "@/components/ParallaxSections";
import StyleComparison from "@/components/StyleComparison";
import Gallery3D from "@/components/Gallery3D";
import HistoricalTimeline from "@/components/HistoricalTimeline";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSections />
      <StyleComparison />
      <Gallery3D />
      <HistoricalTimeline />
      <Conclusion />
    </div>
  );
};

export default Index;
