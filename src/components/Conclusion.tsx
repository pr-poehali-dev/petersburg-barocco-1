import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Conclusion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Наследие Петровского Барокко
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Архитектурный стиль эпохи Петра Великого заложил основы для развития
            русской архитектуры и оставил неизгладимый след в облике
            Санкт-Петербурга
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "Building",
              title: "Архитектурное влияние",
              description:
                "Петровское барокко стало основой для развития русского классицизма и последующих стилей",
            },
            {
              icon: "Globe",
              title: "Культурный мост",
              description:
                "Стиль объединил европейские традиции с русскими архитектурными особенностями",
            },
            {
              icon: "Crown",
              title: "Имперский символ",
              description:
                "Памятники стали символом могущества и величия Российской империи",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon
                      name={item.icon as any}
                      className="w-8 h-8 text-black"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                Продолжите изучение
              </h3>
              <p className="text-slate-300 mb-6">
                Это путешествие по архитектурным шедеврам петровского барокко —
                лишь начало. Откройте для себя больше об истории и культуре этой
                эпохи.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Icon name="ArrowUp" className="mr-2" />
                  Вернуться к началу
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <Icon name="BookOpen" className="mr-2" />
                  Читать далее
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
