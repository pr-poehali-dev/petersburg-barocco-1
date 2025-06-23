import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-emerald-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-orange-400"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Петровское
            <span className="block text-orange-400">Барокко</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
        >
          Архитектурные шедевры эпохи Петра Великого в интерактивном путешествии
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3"
            onClick={() =>
              document
                .getElementById("parallax-sections")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Icon name="Clock" className="mr-2" />
            Начать путешествие
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
            onClick={() =>
              document
                .getElementById("map")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Icon name="Map" className="mr-2" />
            Карта памятников
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Icon
          name="ChevronDown"
          className="text-orange-400 w-8 h-8 animate-bounce"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
