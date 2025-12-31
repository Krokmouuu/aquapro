import { motion } from 'motion/react';
import { MapPin, Car, Check } from 'lucide-react';

const zones = [
  'Montpellier Centre',
  'Antigone',
  'Port Marianne',
  'Ecusson',
  'Beaux-Arts',
  'Saint-Roch',
  'Près d\'Arènes',
  'Hôpitaux-Facultés',
  'Castelnau-le-Lez',
  'Lattes',
  'Pérols',
  'Le Crès',
  'Juvignac',
  'Clapiers',
  'Saint-Jean-de-Védas',
  'Vendargues',
];

export function ZoneSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Carte stylisée en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-sky-100 text-primary rounded-full mb-6"
            >
              Zone d'Intervention
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
              Montpellier et <span className="text-primary">Agglomération</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              Nous intervenons rapidement dans toute la métropole de Montpellier
              et ses communes avoisinantes. Notre position stratégique nous permet
              d'être chez vous en moins de 30 minutes en moyenne.
            </p>

            {/* Avantages géographiques */}
            <div className="space-y-4 mb-8">
              {[
                'Déplacement gratuit dans Montpellier Métropole',
                'Intervention rapide grâce à notre réseau local',
                'Connaissance parfaite du territoire et des infrastructures',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Temps de réponse */}
            <motion.div
              className="flex items-center gap-6 p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border-2 border-sky-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl text-primary mb-1">~ 30 minutes</div>
                <div className="text-sm text-slate-600">Temps de réponse moyen</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Carte des zones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image de Montpellier avec overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1630332563885-2e789d6e5941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250cGVsbGllciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcxNzYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architecture de Montpellier"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              
              {/* Marqueur animé */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative">
                  <MapPin className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" />
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full opacity-50"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Liste des zones */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-8">
              <h3 className="text-xl text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nos Zones d'Intervention
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {zones.map((zone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{zone}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-6 pt-6 border-t border-slate-100">
                Et toute la métropole de Montpellier
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
