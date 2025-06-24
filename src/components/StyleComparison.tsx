import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ArchitecturalStyle {
  id: string;
  name: string;
  period: string;
  characteristics: string[];
  representative: string;
  description: string;
  image: string;
}

const architecturalStyles: ArchitecturalStyle[] = [
  {
    id: "petrine",
    name: "Петровское барокко",
    period: "1700-1730",
    characteristics: [
      "Простота и функциональность",
      "Голландские мотивы",
      "Красно-белая цветовая гамма",
      "Высокие шпили и башни",
    ],
    representative: "Доменико Трезини",
    description:
      "Первый архитектурный стиль новой столицы, сочетающий европейские традиции с русскими особенностями.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800",
  },
  {
    id: "elizabethan",
    name: "Елизаветинское барокко",
    period: "1740-1760",
    characteristics: [
      "Пышность и декоративность",
      "Золотые элементы",
      "Изогнутые линии",
      "Театральность форм",
    ],
    representative: "Франческо Растрелли",
    description:
      "Расцвет русского барокко с характерной роскошью и великолепием императорских резиденций.",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800",
  },
  {
    id: "catherine",
    name: "Екатерининский классицизм",
    period: "1760-1800",
    characteristics: [
      "Строгие пропорции",
      "Античные мотивы",
      "Колоннады и портики",
      "Сдержанный декор",
    ],
    representative: "Антонио Ринальди",
    description:
      "Переход к строгим классическим формам, вдохновленным античностью и просвещением.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800",
  },
];

const StyleComparison = () => {
  const [selectedStyles, setSelectedStyles] = useState<[string, string]>([
    "petrine",
    "elizabethan",
  ]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleStyleChange = (position: 0 | 1, styleId: string) => {
    const newStyles = [...selectedStyles] as [string, string];
    newStyles[position] = styleId;
    setSelectedStyles(newStyles);
  };

  const getStyleById = (id: string) =>
    architecturalStyles.find((style) => style.id === id)!;

  const leftStyle = getStyleById(selectedStyles[0]);
  const rightStyle = getStyleById(selectedStyles[1]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
            Эволюция Архитектурных Стилей
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Сравните три великие эпохи петербургской архитектуры и проследите их
            развитие
          </p>
        </motion.div>

        {/* Style selectors */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-800">
              Левая сторона
            </h3>
            <div className="flex flex-wrap gap-2">
              {architecturalStyles.map((style) => (
                <Button
                  key={style.id}
                  variant={
                    selectedStyles[0] === style.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleStyleChange(0, style.id)}
                  className="text-xs"
                >
                  {style.name}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-800">
              Правая сторона
            </h3>
            <div className="flex flex-wrap gap-2">
              {architecturalStyles.map((style) => (
                <Button
                  key={style.id}
                  variant={
                    selectedStyles[1] === style.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleStyleChange(1, style.id)}
                  className="text-xs"
                >
                  {style.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-xl shadow-xl overflow-hidden"
        >
          {/* Image comparison */}
          <div className="relative h-96 overflow-hidden">
            {/* Left image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${leftStyle.image})`,
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            />

            {/* Right image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${rightStyle.image})`,
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            />

            {/* Slider control */}
            <div className="absolute inset-0 flex items-center">
              <div
                className="absolute w-1 bg-white shadow-lg cursor-col-resize z-10"
                style={{
                  left: `${sliderPosition}%`,
                  height: "100%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon name="Move" className="w-4 h-4 text-slate-600" />
                </div>
              </div>

              {/* Invisible slider input */}
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            {/* Style labels */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {leftStyle.name}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {rightStyle.name}
            </div>
          </div>

          {/* Comparison details */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left style details */}
            <div className="p-6 border-r border-slate-200">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {leftStyle.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  {leftStyle.period}
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  {leftStyle.description}
                </p>
                <p className="text-xs text-slate-600 mb-3">
                  <strong>Представитель:</strong> {leftStyle.representative}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                  Характерные черты:
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {leftStyle.characteristics.map((char, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right style details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {rightStyle.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  {rightStyle.period}
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  {rightStyle.description}
                </p>
                <p className="text-xs text-slate-600 mb-3">
                  <strong>Представитель:</strong> {rightStyle.representative}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                  Характерные черты:
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {rightStyle.characteristics.map((char, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StyleComparison;
