import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Monument {
  id: number;
  name: string;
  year: number;
  architect: string;
  description: string;
  images: string[];
  position: { x: number; y: number };
}

const monuments: Monument[] = [
  {
    id: 1,
    name: "Петропавловский собор",
    year: 1724,
    architect: "Доменико Трезини",
    description:
      "Главный собор Петропавловской крепости с уникальным шпилем высотой 122 метра.",
    images: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600",
    ],
    position: { x: 35, y: 25 },
  },
  {
    id: 2,
    name: "Летний дворец Петра I",
    year: 1714,
    architect: "Доменико Трезини",
    description:
      "Первая резиденция Петра I в новой столице, образец раннего петровского барокко.",
    images: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=600",
    ],
    position: { x: 55, y: 40 },
  },
  {
    id: 3,
    name: "Меншиковский дворец",
    year: 1718,
    architect: "Джованни Мария Фонтана",
    description:
      "Роскошная резиденция сподвижника Петра I, один из первых каменных дворцов города.",
    images: [
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=600",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
    ],
    position: { x: 42, y: 60 },
  },
  {
    id: 4,
    name: "Кунсткамера",
    year: 1734,
    architect: "Георг Иоганн Маттарнови",
    description:
      "Первый российский музей, здание которого стало символом петровских реформ.",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600",
    ],
    position: { x: 48, y: 55 },
  },
];

const InteractiveMap = () => {
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMonumentClick = (monument: Monument) => {
    setSelectedMonument(monument);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedMonument) {
      setCurrentImageIndex((prev) =>
        prev === selectedMonument.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedMonument) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedMonument.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <section id="map" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">
            Карта Петровского Барокко
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Интерактивная карта памятников архитектуры эпохи Петра Великого
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-blue-100 rounded-lg h-96 overflow-hidden">
              {/* Map background - simplified St. Petersburg */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300">
                {/* Neva river */}
                <div className="absolute top-1/3 left-0 right-0 h-8 bg-blue-400 transform rotate-12"></div>
                <div className="absolute top-1/2 left-1/4 right-0 h-6 bg-blue-400 transform -rotate-6"></div>
              </div>

              {/* Monument markers */}
              {monuments.map((monument) => (
                <motion.button
                  key={monument.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg hover:bg-yellow-400 transition-colors z-10"
                  style={{
                    left: `${monument.position.x}%`,
                    top: `${monument.position.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => handleMonumentClick(monument)}
                >
                  <span className="sr-only">{monument.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 text-sm text-slate-300">
              <p className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                Памятники петровского барокко
              </p>
            </div>
          </motion.div>

          {/* Monument details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            {selectedMonument ? (
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-slate-900">
                    {selectedMonument.name}
                  </CardTitle>
                  <p className="text-slate-600">
                    {selectedMonument.year} • {selectedMonument.architect}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Image gallery */}
                  <div className="relative mb-4">
                    <img
                      src={selectedMonument.images[currentImageIndex]}
                      alt={selectedMonument.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />

                    {selectedMonument.images.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                          onClick={prevImage}
                        >
                          <Icon name="ChevronLeft" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                          onClick={nextImage}
                        >
                          <Icon name="ChevronRight" />
                        </Button>

                        {/* Image indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedMonument.images.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    {selectedMonument.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Camera" className="mr-2 w-4 h-4" />
                      Галерея
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Play" className="mr-2 w-4 h-4" />
                      Видео
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Box" className="mr-2 w-4 h-4" />
                      3D модель
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white">
                <CardContent className="p-8 text-center">
                  <Icon
                    name="MapPin"
                    className="w-16 h-16 text-yellow-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Выберите памятник на карте
                  </h3>
                  <p className="text-slate-600">
                    Нажмите на желтую метку, чтобы узнать больше о памятнике
                    архитектуры
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
