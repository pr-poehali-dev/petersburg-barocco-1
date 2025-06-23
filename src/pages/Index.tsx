import Hero from "@/components/Hero";
import ParallaxSections from "@/components/ParallaxSections";
import InteractiveMap from "@/components/InteractiveMap";
import MonumentGallery from "@/components/MonumentGallery";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSections />
      <InteractiveMap />
      <MonumentGallery />
      <Conclusion />
    </div>
  );
};

export default Index;
