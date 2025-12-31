import { motion } from 'motion/react';
import { Shield, Clock, Award, ThumbsUp, Users, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Intervention Rapide',
    description: 'Disponibles 24h/24 et 7j/7 pour vos urgences. Temps de réponse moyen : 30 minutes.',
    stat: '30min',
  },
  {
    icon: Award,
    title: 'Experts Certifiés',
    description: 'Plombiers qualifiés et certifiés avec plus de 15 ans d\'expérience dans le métier.',
    stat: '15ans',
  },
  {
    icon: Shield,
    title: 'Garantie Qualité',
    description: 'Tous nos travaux sont garantis. Assurance décennale pour votre tranquillité.',
    stat: '100%',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Client',
    description: 'Plus de 500 clients satisfaits à Montpellier. Note moyenne : 4.9/5.',
    stat: '4.9/5',
  },
  {
    icon: Users,
    title: 'Équipe Locale',
    description: 'Entreprise familiale implantée à Montpellier depuis 2008. Connaissance du territoire.',
    stat: '2008',
  },
  {
    icon: Sparkles,
    title: 'Équipement Moderne',
    description: 'Matériel de pointe et techniques innovantes pour un travail de qualité supérieure.',
    stat: 'Premium',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Effet d'eau en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 2px, transparent 2px),
                             radial-gradient(circle at 80% 80%, currentColor 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            Nos Atouts
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Pourquoi Nous <span className="text-primary">Choisir ?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une expertise reconnue à Montpellier, des valeurs de confiance et un service
            qui fait la différence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-primary/30 transition-all duration-300 h-full">
                {/* Effet de brillance au survol */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-blue-400/0 to-sky-400/0 group-hover:from-sky-400/5 group-hover:via-blue-400/5 group-hover:to-sky-400/5 rounded-2xl transition-all duration-500"
                  initial={false}
                />

                <div className="relative">
                  {/* Icône avec animation */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-400/30">
                        <reason.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Cercle animé */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-sky-400"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Stat badge */}
                    <motion.div
                      className="px-3 py-1 bg-sky-100 text-primary rounded-full text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {reason.stat}
                    </motion.div>
                  </div>

                  <h3 className="text-xl mb-3 text-slate-900 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Ligne de connexion animée (comme des tuyaux) */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chiffres clés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Clients satisfaits' },
            { number: '24/7', label: 'Disponibilité' },
            { number: '15+', label: 'Ans d\'expérience' },
            { number: '100%', label: 'Garantie qualité' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-sky-100"
              whileHover={{ y: -5, borderColor: 'rgb(14, 165, 233)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="text-4xl text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
