import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Wrench,
  Droplets,
  Flame,
  Bath,
  AlertCircle,
  Hammer,
  Truck,
} from "lucide-react";
import { Card } from "../ui/card";

const services = [
  {
    icon: AlertCircle,
    title: "Dépannage Urgent",
    description:
      "Intervention rapide 24h/24 pour toutes vos urgences : fuites, canalisations bouchées, panne de chauffe-eau.",
    color: "from-red-500 to-orange-500",
    animation: "truck",
  },
  {
    icon: Droplets,
    title: "Réparation de Fuites",
    description:
      "Détection et réparation de fuites d'eau. Technologie de pointe pour localiser les fuites invisibles.",
    color: "from-sky-500 to-blue-500",
    animation: "water",
  },
  {
    icon: Flame,
    title: "Chauffe-eau",
    description:
      "Installation, dépannage et entretien de chauffe-eau électrique, gaz ou thermodynamique.",
    color: "from-orange-500 to-red-500",
    animation: "bubbles",
  },
  {
    icon: Bath,
    title: "Sanitaires",
    description:
      "Installation et rénovation complète de salles de bain, WC, lavabos et tous équipements sanitaires.",
    color: "from-cyan-500 to-blue-500",
    animation: "drain",
  },
  {
    icon: Wrench,
    title: "Débouchage",
    description:
      "Débouchage de canalisations, éviers, WC. Hydrocurage et inspection par caméra.",
    color: "from-blue-500 to-indigo-500",
    animation: "drain",
  },
  {
    icon: Hammer,
    title: "Rénovation",
    description:
      "Rénovation complète de plomberie, mise aux normes, modernisation de votre installation.",
    color: "from-purple-500 to-pink-500",
    animation: "paint",
  },
];

// Composant pour créer une ligne ondulée animée
function WaveLine({
  delay = 0,
  opacity = 1,
  length = 45,
  phaseOffset = 0,
  speed = 0.15,
  frequency = 3.5,
}: {
  delay?: number;
  opacity?: number;
  length?: number;
  phaseOffset?: number;
  speed?: number;
  frequency?: number;
}) {
  const [phase, setPhase] = useState(delay + phaseOffset);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + speed) % (Math.PI * 2));
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [delay, speed]);

  const generateWavePath = (phaseOffset: number) => {
    const width = length;
    const height = 8;
    const centerY = height / 2;
    const amplitude = 2.5;
    const numPoints = Math.max(40, Math.floor((length / 35) * 40));

    let path = `M 0,${centerY}`;
    for (let j = 0; j <= numPoints; j++) {
      const x = (j / numPoints) * width;
      const y =
        centerY +
        amplitude *
          Math.sin((x / width) * Math.PI * 2 * frequency + phaseOffset);
      path += ` L ${x},${y}`;
    }
    return path;
  };

  const gradientId = `wave-gradient-${delay}-${phaseOffset}`;

  return (
    <svg
      width={length}
      height="8"
      viewBox={`0 0 ${length} 8`}
      style={{
        opacity,
        transformOrigin: "left center",
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d={generateWavePath(phase)}
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Motif d'arrière-plan */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-sky-100 text-primary rounded-full mb-4"
          >
            Nos Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Une Expertise <span className="text-primary">Complète</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            De l'urgence à la rénovation, nous couvrons tous vos besoins en
            plomberie avec professionnalisme et réactivité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="p-8 h-full border-2 border-slate-200 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden bg-white">
                {/* Animation Camion - Dépannage Urgent */}
                {service.animation === "truck" && hoveredCard === index && (
                  <motion.div
                    className="absolute top-1/2 left-0 -translate-y-1/2 z-10"
                    initial={{ x: -100, y: -100 }}
                    animate={{ x: "1080%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {[...Array(2)].map((_, i) => {
                      const offsetY = i % 2 === 0 ? 10 : 25;
                      const offsetX = -42;
                      const phaseOffsets = 0; // Décalage de phase différent
                      const speeds = 0.18; // Vitesses différentes
                      const frequencies = 1.8; // Fréquences différentes

                      return (
                        <div
                          key={`wind-${i}`}
                          className="absolute z-[5] pointer-events-none"
                          style={{
                            left: `${offsetX}px`,
                            top: `${offsetY}px`,
                            transform: "translate(-10%, -10%)",
                          }}
                        >
                          <WaveLine
                            delay={i * 0.1}
                            opacity={0.9 - (i % 2) * 0.2}
                            phaseOffset={phaseOffsets}
                            speed={speeds}
                            frequency={frequencies}
                          />
                        </div>
                      );
                    })}
                    {/* Camion */}
                    <Truck className="w-12 h-12 text-red-500 relative z-10" />
                  </motion.div>
                )}
                {/* Animation Eau - Réparation de Fuites */}
                {service.animation === "water" && hoveredCard === index && (
                  <>
                    {/* SVG conteneur pour la wave qui monte */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <clipPath
                          id={`wave-clip-water-${index}`}
                          clipPathUnits="objectBoundingBox"
                        >
                          <motion.path
                            d="M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z"
                            initial={{
                              d: "M0,1 L0,1 L1,1 L1,1 Z",
                            }}
                            animate={{
                              d: [
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.12 0.2,0.08 T0.4,0.12 T0.6,0.08 T0.8,0.12 T1,0.08 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                              ],
                            }}
                            transition={{
                              duration: 3,
                              delay: 0,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 0,
                            }}
                          />
                        </clipPath>
                        {/* Gradient pour la wave */}
                        <linearGradient
                          id={`wave-gradient-water-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(34, 211, 238, 0.5)"
                          />
                          <stop
                            offset="50%"
                            stopColor="rgba(59, 130, 246, 0.4)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(34, 211, 238, 0.3)"
                          />
                        </linearGradient>
                      </defs>
                      {/* Wave visible qui monte avec animation ondulante */}
                      <motion.path
                        d="M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z"
                        fill={`url(#wave-gradient-water-${index})`}
                        initial={{
                          d: "M0,100 L0,100 L100,100 L100,100 Z",
                        }}
                        animate={{
                          d: [
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                            "M0,0 Q10,12 20,8 T40,12 T60,8 T80,12 T100,8 L100,100 L0,100 Z",
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          delay: 0,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 0,
                        }}
                      />
                    </motion.svg>
                    {/* Dégradé bleu qui monte depuis le bas, masqué par la wave */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ clipPath: `url(#wave-clip-water-${index})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-400/30 via-blue-400/20 to-transparent" />
                    </motion.div>
                  </>
                )}

                {/* Animation Chauffe-eau - Vague qui monte avec dégradé chaud */}
                {service.animation === "bubbles" && hoveredCard === index && (
                  <>
                    {/* SVG conteneur pour la wave qui monte */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <clipPath
                          id={`wave-clip-heater-${index}`}
                          clipPathUnits="objectBoundingBox"
                        >
                          <motion.path
                            d="M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z"
                            initial={{
                              d: "M0,1 L0,1 L1,1 L1,1 Z",
                            }}
                            animate={{
                              d: [
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.12 0.2,0.08 T0.4,0.12 T0.6,0.08 T0.8,0.12 T1,0.08 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                              ],
                            }}
                            transition={{
                              duration: 3,
                              delay: 0,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 0,
                            }}
                          />
                        </clipPath>
                        {/* Gradient pour la wave - couleurs chaudes */}
                        <linearGradient
                          id={`wave-gradient-heater-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(251, 146, 60, 0.5)"
                          />
                          <stop
                            offset="50%"
                            stopColor="rgba(239, 68, 68, 0.4)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(251, 191, 36, 0.3)"
                          />
                        </linearGradient>
                      </defs>
                      {/* Wave visible qui monte avec animation ondulante */}
                      <motion.path
                        d="M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z"
                        fill={`url(#wave-gradient-heater-${index})`}
                        initial={{
                          d: "M0,100 L0,100 L100,100 L100,100 Z",
                        }}
                        animate={{
                          d: [
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                            "M0,0 Q10,12 20,8 T40,12 T60,8 T80,12 T100,8 L100,100 L0,100 Z",
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          delay: 0,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 0,
                        }}
                      />
                    </motion.svg>
                    {/* Dégradé qui change de bleu (bas) vers rouge/orange/jaune (haut) */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ clipPath: `url(#wave-clip-heater-${index})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-400/30 via-orange-400/25 to-red-500/30" />
                    </motion.div>
                  </>
                )}

                {/* Animation Drain - Sanitaires & Débouchage */}
                {service.animation === "drain" && hoveredCard === index && (
                  <>
                    {/* SVG conteneur pour la wave et le masque */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      initial={{ y: 0 }}
                      animate={{ y: "100%" }}
                      transition={{ duration: 1.5, ease: "easeIn" }}
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <clipPath
                          id={`wave-clip-${index}`}
                          clipPathUnits="objectBoundingBox"
                        >
                          <motion.path
                            d="M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z"
                            initial={{
                              d: "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                            }}
                            animate={{
                              d: [
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.12 0.2,0.08 T0.4,0.12 T0.6,0.08 T0.8,0.12 T1,0.08 L1,1 L0,1 Z",
                                "M0,0 Q0.1,0.15 0.2,0.1 T0.4,0.1 T0.6,0.1 T0.8,0.1 T1,0.1 L1,1 L0,1 Z",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </clipPath>
                        {/* Gradient pour la wave */}
                        <linearGradient
                          id={`wave-gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(34, 211, 238, 0.5)"
                          />
                          <stop
                            offset="50%"
                            stopColor="rgba(59, 130, 246, 0.4)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(34, 211, 238, 0.3)"
                          />
                        </linearGradient>
                      </defs>
                      {/* Wave visible qui descend avec animation ondulante */}
                      <motion.path
                        d="M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z"
                        fill={`url(#wave-gradient-${index})`}
                        initial={{
                          d: "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                        }}
                        animate={{
                          d: [
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                            "M0,0 Q10,12 20,8 T40,12 T60,8 T80,12 T100,8 L100,100 L0,100 Z",
                            "M0,0 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,100 L0,100 Z",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                    {/* Dégradé bleu masqué par la wave */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ y: 0 }}
                      animate={{ y: "100%" }}
                      transition={{ duration: 1.5, ease: "easeIn" }}
                      style={{ clipPath: `url(#wave-clip-${index})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 via-blue-400/20 to-transparent" />
                    </motion.div>
                  </>
                )}

                {/* Animation Paint - Rénovation */}
                {service.animation === "paint" && hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                )}

                {/* Icône */}
                <div className="relative z-20">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 relative`}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl mb-4 text-slate-900 group-hover:text-primary transition-colors relative z-20">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-20">
                  {service.description}
                </p>

                {/* Ligne animée au bas de la carte */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">
            Besoin d'un autre service ? Contactez-nous pour un devis
            personnalisé.
          </p>
          <a
            href="tel:0467000000"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>04 67 00 00 00</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
