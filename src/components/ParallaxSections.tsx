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
    period: "Основание",
    years: "1703-1712",
    title: "Рождение новой столицы",
    description:
      "Петр I закладывает Петропавловскую крепость и начинает строительство города на болотистых берегах Невы.",
    details:
      "16 мая 1703 года на Заячьем острове была заложена Петропавловская крепость, ставшая началом новой столицы. Петр I лично участвовал в планировке города, привлекая лучших европейских архитекторов. Доменико Трезини стал первым главным архитектором города, создав уникальный стиль петровского барокко, сочетающий европейские традиции с русскими потребностями.",
    achievements: [
      "Основание Петропавловской крепости (1703)",
      "Строительство первых каменных домов",
      "Создание регулярной планировки города",
      "Начало строительства Адмиралтейства (1704)",
    ],
    image:
      "https://cdn.poehali.dev/files/6b32754d-b886-48da-8387-131c89c7bed9.jpg",
    backgroundImage:
      "https://cdn.poehali.dev/files/6b32754d-b886-48da-8387-131c89c7bed9.jpg",
    color: "emerald",
  },
  {
    id: 2,
    period: "Расцвет",
    years: "1712-1725",
    title: "Золотой век петровского барокко",
    description:
      "Период активного строительства дворцов и государственных зданий. Меншиковский дворец становится символом эпохи.",
    details:
      "В этот период были построены главные архитектурные шедевры эпохи: роскошный Меншиковский дворец (1710-1720), первый каменный жилой дом в городе, Летний дворец Петра I, здание Двенадцати коллегий. Александр Меншиков, ближайший соратник Петра, создал в своем дворце настоящий центр культурной жизни столицы. Дворец поражал современников богатством отделки и европейским комфортом.",
    achievements: [
      "Завершение Меншиковского дворца (1720)",
      "Строительство Летнего дворца Петра I (1714)",
      "Создание здания Двенадцати коллегий",
      "Основание Кунсткамеры (1714)",
    ],
    image:
      "https://cdn.poehali.dev/files/f69d7f52-b7cf-4472-910e-37cfe3108ed6.jpg",
    backgroundImage:
      "https://cdn.poehali.dev/files/f69d7f52-b7cf-4472-910e-37cfe3108ed6.jpg",
    color: "amber",
  },
  {
    id: 3,
    period: "Развитие",
    years: "1715-1730",
    title: "Научные и культурные достижения",
    description:
      "Основание Академии наук и строительство образовательных учреждений. Палаты Кикина становятся центром просвещения.",
    details:
      "В этот период Санкт-Петербург становится не только административным, но и научным центром империи. В 1724 году основана Российская академия наук, разместившаяся в специально построенном здании. Палаты Кикина, построенные для сподвижника Петра, становятся местом размещения первых коллекций будущего Эрмитажа. Александро-Невский монастырь превращается в духовный центр новой столицы.",
    achievements: [
      "Основание Российской академии наук (1724)",
      "Строительство палат Кикина (1714-1720)",
      "Завершение Александро-Невского монастыря",
      "Создание первых публичных библиотек",
    ],
    image:
      "https://cdn.poehali.dev/files/a05be2e5-2b64-413f-be6c-e4f82d64ba50.jpg",
    backgroundImage:
      "https://cdn.poehali.dev/files/93167a6c-5339-416a-b06e-534a5e5bd075.jpg",
    color: "blue",
  },
  {
    id: 4,
    period: "Наследие",
    years: "1725-1740",
    title: "Петергофские шедевры",
    description:
      "Завершение строительства загородных резиденций: Монплезира и павильонов Эрмитаж в Петергофе.",
    details:
      "После смерти Петра I его архитектурные замыслы продолжают воплощаться. В Петергофе завершается строительство дворца Монплезир - любимой резиденции императора на берегу Финского залива, и изящного павильона Эрмитаж. Эти постройки демонстрируют зрелость петровского барокко, его способность создавать как парадные, так и интимные пространства, гармонично вписанные в природный ландшафт.",
    achievements: [
      "Завершение дворца Монплезир в Петергофе",
      "Строительство павильона Эрмитаж",
      "Создание системы фонтанов Петергофа",
      "Формирование архитектурных традиций",
    ],
    image:
      "https://cdn.poehali.dev/files/86c92a90-c04a-41ac-8330-e049cada6277.png",
    backgroundImage:
      "https://cdn.poehali.dev/files/edc53115-6f21-4f69-9f35-398cbbe034a7.jpg",
    color: "teal",
  },
];

const ParallaxSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative" id="parallax-sections">
      {periods.map((period, index) => {
        const isEven = index % 2 === 0;
        const yTransform = useTransform(
          scrollYProgress,
          [index / periods.length, (index + 1) / periods.length],
          [150, -150],
        );

        const opacity = useTransform(
          scrollYProgress,
          [
            (index - 0.5) / periods.length,
            index / periods.length,
            (index + 0.5) / periods.length,
          ],
          [0.3, 1, 0.3],
        );

        return (
          <div
            key={period.id}
            className="relative min-h-screen flex items-center overflow-hidden"
          >
            {/* Enhanced Parallax Background */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${period.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                y: yTransform,
                opacity: opacity,
              }}
            />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-5" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto ${!isEven ? "lg:grid-cols-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 hover:shadow-3xl transition-all duration-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-4 h-4 rounded-full shadow-lg ${
                            period.color === "emerald"
                              ? "bg-emerald-500"
                              : period.color === "amber"
                                ? "bg-amber-500"
                                : period.color === "blue"
                                  ? "bg-blue-500"
                                  : "bg-teal-500"
                          }`}
                        />
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">
                          {period.period}
                        </span>
                      </div>
                      <CardTitle className="text-4xl font-serif text-slate-900 mb-3 leading-tight">
                        {period.title}
                      </CardTitle>
                      <p className="text-slate-600 font-semibold text-lg">
                        {period.years}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                        {period.description}
                      </p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={`${
                              period.color === "emerald"
                                ? "bg-emerald-600 hover:bg-emerald-700"
                                : period.color === "amber"
                                  ? "bg-amber-600 hover:bg-amber-700"
                                  : period.color === "blue"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-teal-600 hover:bg-teal-700"
                            } text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3`}
                          >
                            <Icon name="BookOpen" className="mr-2 w-5 h-5" />
                            Подробная история
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-3xl font-serif text-slate-900 mb-2">
                              {period.title}
                            </DialogTitle>
                            <p className="text-xl text-slate-600 font-medium">
                              {period.years}
                            </p>
                          </DialogHeader>
                          <div className="space-y-8">
                            <div className="relative">
                              <img
                                src={period.image}
                                alt={period.title}
                                className="w-full h-80 object-cover rounded-xl shadow-lg"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                            </div>
                            <div className="prose prose-lg max-w-none">
                              <p className="text-slate-700 leading-relaxed text-lg">
                                {period.details}
                              </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6">
                              <h4 className="font-bold text-slate-900 mb-4 text-xl">
                                Ключевые достижения периода:
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {period.achievements.map((achievement, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-3 p-2"
                                  >
                                    <Icon
                                      name="Crown"
                                      className={`w-6 h-6 mt-1 ${
                                        period.color === "emerald"
                                          ? "text-emerald-500"
                                          : period.color === "amber"
                                            ? "text-amber-500"
                                            : period.color === "blue"
                                              ? "text-blue-500"
                                              : "text-teal-500"
                                      }`}
                                    />
                                    <span className="text-slate-700 font-medium">
                                      {achievement}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                    <div className="relative">
                      <img
                        src={period.image}
                        alt={period.title}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                        >
                          <h3 className="text-slate-900 text-2xl font-serif font-bold mb-2">
                            {period.period}
                          </h3>
                          <p className="text-slate-700 text-lg font-medium">
                            {period.years}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <motion.div
              className="absolute top-20 right-20 w-40 h-40 opacity-15"
              style={{ y: yTransform }}
            >
              <div
                className={`w-full h-full border-2 rounded-full animate-pulse ${
                  period.color === "emerald"
                    ? "border-emerald-400"
                    : period.color === "amber"
                      ? "border-amber-400"
                      : period.color === "blue"
                        ? "border-blue-400"
                        : "border-teal-400"
                }`}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-32 left-16 w-24 h-24 opacity-10"
              style={{ y: yTransform }}
            >
              <div
                className={`w-full h-full border rotate-45 ${
                  period.color === "emerald"
                    ? "border-emerald-400"
                    : period.color === "amber"
                      ? "border-amber-400"
                      : period.color === "blue"
                        ? "border-blue-400"
                        : "border-teal-400"
                }`}
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default ParallaxSections;
