import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface Monument {
  id: number;
  name: string;
  architect: string;
  year: number;
  style: string;
  description: string;
  image: string;
  details: string[];
}

const monuments: Monument[] = [
  {
    id: 1,
    name: "Петропавловский собор",
    architect: "Доменико Трезини",
    year: 1724,
    style: "Петровское барокко",
    description:
      "Главный собор Петропавловской крепости с уникальным золотым шпилем высотой 122 метра.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600",
    details: [
      "Высота шпиля: 122 метра",
      "Усыпальница русских императоров",
      "Первый каменный храм города",
    ],
  },
  {
    id: 2,
    name: "Екатерининский дворец",
    architect: "Франческо Растрелли",
    year: 1756,
    style: "Елизаветинское барокко",
    description:
      "Роскошная летняя резиденция российских императоров в Царском Селе.",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=600",
    details: [
      "Длина фасада: 325 метров",
      "Знаменитая Янтарная комната",
      "100 кг золота на фасаде",
    ],
  },
  {
    id: 3,
    name: "Зимний дворец",
    architect: "Франческо Растрелли",
    year: 1762,
    style: "Елизаветинское барокко",
    description:
      "Главная императорская резиденция и один из крупнейших дворцов мира.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
    details: [
      "1786 дверей и 1945 окон",
      "Более 1000 комнат",
      "Сейчас - Государственный Эрмитаж",
    ],
  },
  {
    id: 4,
    name: "Исаакиевский собор",
    architect: "Огюст Монферран",
    year: 1858,
    style: "Поздний классицизм",
    description:
      "Один из крупнейших купольных храмов мира и символ Санкт-Петербурга.",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
    details: [
      "Высота купола: 101,5 метра",
      "400 кг золота на куполе",
      "Строился 40 лет",
    ],
  },
  {
    id: 5,
    name: "Казанский собор",
    architect: "Андрей Воронихин",
    year: 1811,
    style: "Русский классицизм",
    description:
      "Собор с величественной колоннадой, вдохновленной собором Святого Петра в Риме.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600",
    details: [
      "96 колонн в колоннаде",
      "Памятник Кутузову и Барклаю",
      "Трофеи Отечественной войны",
    ],
  },
  {
    id: 6,
    name: "Смольный собор",
    architect: "Франческо Растрелли",
    year: 1764,
    style: "Елизаветинское барокко",
    description:
      "Архитектурный шедевр с пятиглавием в традициях русского православия.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600",
    details: [
      "Высота центрального купола: 93,7 метра",
      "Сочетание барокко и русских традиций",
      "Строился без единого гвоздя",
    ],
  },
];

const Gallery3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null,
  );

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % monuments.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % monuments.length;
      cards.push({ monument: monuments[index], position: i });
    }
    return cards;
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % monuments.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + monuments.length) % monuments.length);
  };

  const handleCardClick = (monument: Monument, position: number) => {
    if (position === 0) {
      setSelectedMonument(monument);
    } else if (position === 1) {
      // Center card - do nothing or show details
      return;
    } else {
      nextCard();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-serif">
            3D Галерея Памятников
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Интерактивная галерея великих архитектурных шедевров
            Санкт-Петербурга
          </p>
        </motion.div>

        {/* 3D Gallery */}
        <div className="relative h-96 mb-8">
          <div className="flex items-center justify-center h-full">
            {getVisibleCards().map(({ monument, position }) => (
              <motion.div
                key={`${monument.id}-${currentIndex}`}
                initial={{
                  x: position === 0 ? -200 : position === 1 ? 0 : 200,
                  scale: position === 1 ? 1 : 0.7,
                  rotateY: position === 0 ? 45 : position === 1 ? 0 : -45,
                  opacity: position === 1 ? 1 : 0.6,
                }}
                animate={{
                  x: position === 0 ? -200 : position === 1 ? 0 : 200,
                  scale: position === 1 ? 1 : 0.7,
                  rotateY: position === 0 ? 45 : position === 1 ? 0 : -45,
                  opacity: position === 1 ? 1 : 0.6,
                  zIndex: position === 1 ? 10 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onClick={() => handleCardClick(monument, position)}
                whileHover={{
                  scale: position === 1 ? 1.05 : 0.75,
                  rotateY: position === 0 ? 35 : position === 1 ? -5 : -35,
                }}
              >
                <Card className="w-72 h-80 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={monument.image}
                      alt={monument.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {monument.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-xs text-slate-300 mb-1">
                        {monument.style}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                      {monument.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-2">
                      {monument.architect}
                    </p>
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {monument.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={prevCard}
          >
            <Icon name="ChevronLeft" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={nextCard}
          >
            <Icon name="ChevronRight" />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant={isAutoPlay ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Icon
              name={isAutoPlay ? "Pause" : "Play"}
              className="mr-2 w-4 h-4"
            />
            {isAutoPlay ? "Пауза" : "Авто"}
          </Button>

          {/* Indicators */}
          <div className="flex space-x-2">
            {monuments.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Monument details modal */}
        <AnimatePresence>
          {selectedMonument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedMonument(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-800 rounded-xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {selectedMonument.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedMonument(null)}
                    className="text-white hover:bg-white/10"
                  >
                    <Icon name="X" />
                  </Button>
                </div>

                <img
                  src={selectedMonument.image}
                  alt={selectedMonument.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-400">Архитектор</p>
                    <p className="text-white">{selectedMonument.architect}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Стиль</p>
                    <p className="text-white">{selectedMonument.style}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Описание</p>
                    <p className="text-slate-300 text-sm">
                      {selectedMonument.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-2">
                      Интересные факты
                    </p>
                    <ul className="space-y-1">
                      {selectedMonument.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-slate-300 text-sm flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery3D;
