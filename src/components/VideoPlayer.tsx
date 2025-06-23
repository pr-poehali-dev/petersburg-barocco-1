import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnail: string;
  title: string;
  description: string;
}

const VideoPlayer = ({
  videoUrl,
  thumbnail,
  title,
  description,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true);
    } else {
      // Заглушка для демонстрации
      alert("Видео будет доступно в полной версии проекта");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative group">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-16 h-16 p-0"
                  onClick={handlePlay}
                >
                  <Icon name="Play" className="w-8 h-8 ml-1" />
                </Button>
              </div>
            )}

            {/* Play button overlay */}
            <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
              <Icon name="Play" className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              {title}
            </h3>
            <p className="text-slate-600 text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoPlayer;
