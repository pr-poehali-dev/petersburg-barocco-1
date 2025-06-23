import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "./VideoPlayer";

interface Monument {
  id: number;
  name: string;
  year: number;
  architect: string;
  description: string;
  images: string[];
  videos: Array<{
    title: string;
    thumbnail: string;
    description: string;
  }>;
  facts: string[];
}

const monuments: Monument[] = [
  {
    id: 1,
    name: "Петропавловский собор",
    year: 1724,
    architect: "Доменико Трезини",
    description:
      "Главный собор Петропавловской крепости, ставший символом города. Его золотой шпиль высотой 122 метра долгое время был самой высокой точкой Санкт-Петербурга.",
    images: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800",
    ],
    videos: [
      {
        title: "История строительства",
        thumbnail:
          "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
        description: "Документальный фильм о создании главного собора крепости",
      },
      {
        title: "Архитектурные особенности",
        thumbnail:
          "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
        description:
          "Уникальные черты петровского барокко в архитектуре собора",
      },
    ],
    facts: [
      "Первый собор в России с колокольней западноевропейского типа",
      "Место захоронения всех российских императоров",
      "Шпиль венчает фигура ангела с крестом",
      "Строительство длилось 21 год",
    ],
  },
  {
    id: 2,
    name: "Летний дворец Петра I",
    year: 1714,
    architect: "Доменико Трезини",
    description:
      "Первая резиденция Петра I в новой столице. Скромный по меркам того времени дворец стал образцом раннего петровского барокко.",
    images: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800",
    ],
    videos: [
      {
        title: "Частная жизнь императора",
        thumbnail:
          "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400",
        description: "Экскурсия по личным покоям Петра Великого",
      },
    ],
    facts: [
      "Первый дворец Петра I в Петербурге",
      "Сохранился в первозданном виде",
      "Имеет всего 14 комнат",
      "Украшен барельефами на морскую тематику",
    ],
  },
];

const MonumentGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
            Галерея Памятников
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Детальное изучение архитектурных шедевров петровского барокко
          </p>
        </motion.div>

        <div className="space-y-16">
          {monuments.map((monument, index) => (
            <motion.div
              key={monument.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <CardTitle className="text-3xl font-serif text-slate-900">
                    {monument.name}
                  </CardTitle>
                  <p className="text-slate-600 text-lg">
                    {monument.year} • Архитектор: {monument.architect}
                  </p>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main description */}
                    <div className="lg:col-span-1">
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {monument.description}
                      </p>

                      <h4 className="font-semibold text-slate-900 mb-3">
                        Интересные факты:
                      </h4>
                      <ul className="space-y-2">
                        {monument.facts.map((fact, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-slate-600 text-sm">
                              {fact}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tabs for media content */}
                    <div className="lg:col-span-2">
                      <Tabs defaultValue="photos" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="photos">Фотографии</TabsTrigger>
                          <TabsTrigger value="videos">Видео</TabsTrigger>
                          <TabsTrigger value="3d">3D модель</TabsTrigger>
                        </TabsList>

                        <TabsContent value="photos" className="mt-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            {monument.images.map((image, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="relative group overflow-hidden rounded-lg"
                              >
                                <img
                                  src={image}
                                  alt={`${monument.name} - ${i + 1}`}
                                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                              </motion.div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="videos" className="mt-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            {monument.videos.map((video, i) => (
                              <VideoPlayer
                                key={i}
                                thumbnail={video.thumbnail}
                                title={video.title}
                                description={video.description}
                              />
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="3d" className="mt-4">
                          <div className="bg-slate-100 rounded-lg p-12 text-center">
                            <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span className="text-4xl">🏛️</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                              3D модель в разработке
                            </h3>
                            <p className="text-slate-600">
                              Интерактивная 3D модель {monument.name} будет
                              доступна в ближайшее время
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonumentGallery;
