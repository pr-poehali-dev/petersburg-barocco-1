import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import InteractiveMap from "@/components/InteractiveMap";
import MonumentGallery from "@/components/MonumentGallery";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <InteractiveMap />
      <MonumentGallery />
      <Conclusion />
    </div>
  );
};

export default Index;
