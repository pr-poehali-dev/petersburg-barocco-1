import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  importance: "high" | "medium" | "low";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1703,
    title: "Основание Санкт-Петербурга",
    description:
      "Петр I заложил основы новой столицы, которая станет воплощением барочной архитектуры.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    importance: "high",
  },
  {
    year: 1714,
    title: "Летний дворец Петра I",
    description:
      "Первый дворец в стиле петровского барокко, заложивший основы архитектурного стиля.",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400",
    importance: "high",
  },
  {
    year: 1718,
    title: "Меншиковский дворец",
    description:
      "Роскошная резиденция сподвижника Петра, образец раннего барокко.",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400",
    importance: "medium",
  },
  {
    year: 1724,
    title: "Петропавловский собор",
    description: "Кульминация петровского барокко с уникальным шпилем.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
    importance: "high",
  },
  {
    year: 1734,
    title: "Кунсткамера",
    description: "Первый российский музей в стиле петровского барокко.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400",
    importance: "medium",
  },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null,
  );

  return (
    <section id="timeline" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
            Хронология Петровского Барокко
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ключевые этапы развития архитектурного стиля эпохи Петра Великого
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <Card
                className={`w-full max-w-md cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index % 2 === 0 ? "mr-8" : "ml-8"
                } ${selectedEvent?.year === event.year ? "ring-2 ring-yellow-500" : ""}`}
                onClick={() => setSelectedEvent(event)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-serif text-slate-900">
                      {event.year}
                    </CardTitle>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        event.importance === "high"
                          ? "bg-red-500"
                          : event.importance === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    ></div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {event.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <p className="text-slate-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>

              {/* Timeline dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                  event.importance === "high"
                    ? "bg-red-500"
                    : event.importance === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Selected event details */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 bg-white rounded-lg shadow-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                  {selectedEvent.title} ({selectedEvent.year})
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
              <div>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
