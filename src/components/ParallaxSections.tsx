import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useRef } from "react";

interface HistoricalPeriod {
  id: number;
  period: string;
  years: string;
  title: string;
  description: string;
  details: string;
  achievements: string[];
  image: string;
  backgroundImage: string;
  color: string;
}

const periods: HistoricalPeriod[] = [
  {
    id: 1,
    period: "Зарождение",
    years: "1703-1715",
    title: "Основание новой столицы",
    description:
      "Петр I закладывает основы архитектурного стиля, который станет символом новой России.",
    details:
      "В этот период началось строительство Санкт-Петербурга с принципиально новым подходом к архитектуре. Петр I привлекал европейских мастеров, которые адаптировали барочные традиции к русским условиям и потребностям.",
    achievements: [
      "Основание Петропавловской крепости",
      "Строительство первых государственных зданий",
      "Создание регулярной планировки города",
      "Приглашение европейских архитекторов",
    ],
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600",
    backgroundImage:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200",
    color: "emerald",
  },
  {
    id: 2,
    period: "Расцвет",
    years: "1715-1725",
    title: "Формирование стиля",
    description:
      "Период активного строительства и становления характерных черт петровского барокко.",
    details:
      "В эти годы сформировались основные принципы петровского барокко: сочетание европейских традиций с русскими особенностями, использование ярких цветов, богатый декор и функциональность построек.",
    achievements: [
      "Завершение Петропавловского собора",
      "Строительство Летнего дворца",
      "Создание Летнего сада",
      "Развитие дворцовой архитектуры",
    ],
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
    backgroundImage:
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200",
    color: "coral",
  },
  {
    id: 3,
    period: "Наследие",
    years: "1725-1740",
    title: "Влияние на будущее",
    description:
      "Петровское барокко становится основой для развития русской архитектуры XVIII века.",
    details:
      "После смерти Петра I стиль продолжал развиваться, оказывая влияние на последующие архитектурные направления. Многие принципы петровского барокко были заложены в основу русского классицизма.",
    achievements: [
      "Влияние на елизаветинское барокко",
      "Формирование школы русских архитекторов",
      "Создание архитектурных традиций",
      "Развитие градостроительства",
    ],
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
    backgroundImage:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200",
    color: "slate",
  },
];

const ParallaxSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative">
      {periods.map((period, index) => {
        const isEven = index % 2 === 0;
        const yTransform = useTransform(
          scrollYProgress,
          [index / periods.length, (index + 1) / periods.length],
          [100, -100],
        );

        return (
          <div
            key={period.id}
            className="relative min-h-screen flex items-center overflow-hidden"
          >
            {/* Parallax Background */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${period.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                y: yTransform,
              }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-cols-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            period.color === "emerald"
                              ? "bg-emerald-500"
                              : period.color === "coral"
                                ? "bg-orange-500"
                                : "bg-slate-500"
                          }`}
                        />
                        <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                          {period.period}
                        </span>
                      </div>
                      <CardTitle className="text-3xl font-serif text-slate-900 mb-2">
                        {period.title}
                      </CardTitle>
                      <p className="text-slate-600 font-medium">
                        {period.years}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {period.description}
                      </p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={`${
                              period.color === "emerald"
                                ? "bg-emerald-600 hover:bg-emerald-700"
                                : period.color === "coral"
                                  ? "bg-orange-600 hover:bg-orange-700"
                                  : "bg-slate-600 hover:bg-slate-700"
                            } text-white`}
                          >
                            <Icon name="Info" className="mr-2 w-4 h-4" />
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-serif text-slate-900">
                              {period.title} ({period.years})
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <img
                              src={period.image}
                              alt={period.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-slate-700 leading-relaxed">
                              {period.details}
                            </p>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">
                                Ключевые достижения:
                              </h4>
                              <ul className="space-y-2">
                                {period.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <Icon
                                      name="CheckCircle"
                                      className={`w-5 h-5 mt-0.5 ${
                                        period.color === "emerald"
                                          ? "text-emerald-500"
                                          : period.color === "coral"
                                            ? "text-orange-500"
                                            : "text-slate-500"
                                      }`}
                                    />
                                    <span className="text-slate-700">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="relative">
                    <img
                      src={period.image}
                      alt={period.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-serif font-bold mb-2">
                        {period.period}
                      </h3>
                      <p className="text-white/90 text-lg">{period.years}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
              <div
                className={`w-full h-full border-2 rounded-full ${
                  period.color === "emerald"
                    ? "border-emerald-400"
                    : period.color === "coral"
                      ? "border-orange-400"
                      : "border-slate-400"
                }`}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ParallaxSections;
