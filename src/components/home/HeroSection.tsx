import { motion } from "motion/react";
import { Phone, CheckCircle2, Clock, Award } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../fallback/ImageWithFallback";
import HeroPlombier from "../../assets/HeroPlombier.webp";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Motif tuyauterie animé en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-pipes"
              x="0"
              y="0"
              width="400"
              height="400"
              patternUnits="userSpaceOnUse"
            >
              <motion.g
                animate={{
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M0 200 L100 200 L100 100 L300 100 L300 300 L200 300 L200 400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary"
                />
                <circle
                  cx="100"
                  cy="200"
                  r="6"
                  fill="currentColor"
                  className="text-primary"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="6"
                  fill="currentColor"
                  className="text-primary"
                />
                <circle
                  cx="300"
                  cy="100"
                  r="6"
                  fill="currentColor"
                  className="text-primary"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="6"
                  fill="currentColor"
                  className="text-primary"
                />
              </motion.g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pipes)" />
        </svg>
      </div>

      {/* Cercles d'eau animés */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-primary rounded-full mb-6"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm">Expert certifié à Montpellier</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 text-slate-900"
            >
              Plomberie
              <br />
              <span className="text-primary">de Confiance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 mb-8 max-w-xl"
            >
              Intervention rapide 24h/24 et 7j/7 à Montpellier et ses alentours.
              Expertise, fiabilité et service premium pour tous vos besoins en
              plomberie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-xl shadow-primary/30 group relative overflow-hidden cursor-pointer"
                  onClick={() => onNavigate("tarifs")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="relative">Urgence 24/7 : 04 67 00 00 00</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 cursor-pointer transition-all duration-300"
                  onClick={() => onNavigate("interventions")}
                >
                  Nos Interventions
                </Button>
              </motion.div>
            </motion.div>

            {/* Points forts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Clock, text: "Intervention rapide" },
                { icon: Award, text: "Artisan qualifié" },
                { icon: CheckCircle2, text: "Devis gratuit" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image avec effet d'eau */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={HeroPlombier}
                alt="Plombier professionnel au travail"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay avec effet d'eau */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

              {/* Badge flottant */}
              <motion.div
                className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-6"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl text-primary mb-1">24/7</div>
                  <div className="text-xs text-slate-600">Disponible</div>
                </div>
              </motion.div>

              {/* Vague animée */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            {/* Éléments décoratifs */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-sky-400 rounded-full blur-2xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
