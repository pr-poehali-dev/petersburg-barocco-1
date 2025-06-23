import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  period: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1703",
    title: "Основание города",
    description: "Петр I заложил Петропавловскую крепость на Заячьем острове",
    image:
      "https://cdn.poehali.dev/files/de0ed177-c830-45aa-938b-d0566c1eba99.jpg",
    period: "Петровская эпоха",
  },
  {
    year: "1714",
    title: "Кикины палаты",
    description: "Первое каменное здание частного владения в Петербурге",
    image:
      "https://cdn.poehali.dev/files/df30559e-0106-4a3c-bdbe-f8247520af64.jpg",
    period: "Раннее барокко",
  },
  {
    year: "1724",
    title: "Академия наук",
    description: "Основание первого научного учреждения России",
    image:
      "https://cdn.poehali.dev/files/72e524d2-1ce3-4cab-8cc3-23f152551515.jpg",
    period: "Просвещение",
  },
  {
    year: "1797",
    title: "Эрмитажный павильон",
    description: "Изящный павильон в Екатерининском парке",
    image:
      "https://cdn.poehali.dev/files/b07e1659-2a92-494c-8284-d4a09d710cd9.jpg",
    period: "Классицизм",
  },
  {
    year: "1797",
    title: "Александро-Невская лавра",
    description: "Духовный центр и первый монастырь города",
    image:
      "https://cdn.poehali.dev/files/2eab58f3-12ff-44b4-bc4e-235eea3fe576.jpg",
    period: "Православная традиция",
  },
];

const HistoricalTimeline = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
            Историческая Хронология
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Путешествие через века становления Северной столицы
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.period}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-lg font-bold mr-3">
                          {event.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"
                  ></motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full">
            <span className="text-2xl mr-2">🏛️</span>
            <span className="font-semibold">
              3 века истории • 5 эпох • Вечное наследие
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricalTimeline;
