import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../ui/card';

const testimonials = [
  {
    name: 'Marie Dubois',
    location: 'Antigone, Montpellier',
    rating: 5,
    text: 'Intervention très rapide pour une fuite dans ma salle de bain un dimanche soir. Le plombier est arrivé en 25 minutes, travail impeccable et prix transparent. Je recommande vivement !',
    service: 'Réparation de fuite',
  },
  {
    name: 'Pierre Martin',
    location: 'Ecusson, Montpellier',
    rating: 5,
    text: 'Excellent travail pour la rénovation complète de ma plomberie. Équipe professionnelle, ponctuelle et soignée. Le résultat dépasse mes attentes. Merci AquaPro !',
    service: 'Rénovation complète',
  },
  {
    name: 'Sophie Laurent',
    location: 'Port Marianne',
    rating: 5,
    text: 'Mon chauffe-eau est tombé en panne en pleine nuit. Appel à 2h du matin, intervention à 2h30. Problème résolu rapidement. Un service exceptionnel !',
    service: 'Dépannage urgent',
  },
  {
    name: 'Jean Rousseau',
    location: 'Castelnau-le-Lez',
    rating: 5,
    text: 'Installation d\'une nouvelle salle de bain. Travail de grande qualité, conseils avisés et respect des délais. Je suis ravi du résultat final.',
    service: 'Installation sanitaire',
  },
  {
    name: 'Isabelle Moreau',
    location: 'Lattes',
    rating: 5,
    text: 'Canalisations bouchées, intervention rapide avec caméra d\'inspection. Problème identifié et résolu en 1h. Très bon rapport qualité/prix.',
    service: 'Débouchage',
  },
  {
    name: 'Thomas Bernard',
    location: 'Saint-Jean-de-Védas',
    rating: 5,
    text: 'Plombier à l\'écoute et de bon conseil. Travail soigné et tarifs honnêtes. C\'est rare de nos jours, je recommande sans hésiter.',
    service: 'Entretien annuel',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Effet de citation en arrière-plan */}
      <div className="absolute top-10 left-10 opacity-[0.02]">
        <Quote className="w-64 h-64" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.02]">
        <Quote className="w-64 h-64" />
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
            Témoignages
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Ils Nous Font <span className="text-primary">Confiance</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Plus de 500 clients satisfaits à Montpellier. Découvrez leurs avis sur notre travail.
          </p>

          {/* Note moyenne */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-2xl text-slate-900">4.9/5</div>
            <div className="text-sm text-slate-600">sur 500+ avis</div>
          </motion.div>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Effet de brillance */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                />

                {/* Icône de citation */}
                <div className="mb-4 relative">
                  <Quote className="w-8 h-8 text-sky-200" />
                  <div className="absolute -top-2 -left-2">
                    <Quote className="w-12 h-12 text-primary opacity-10" />
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Texte du témoignage */}
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Badge service */}
                <div className="inline-block px-3 py-1 bg-sky-50 text-primary text-xs rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Auteur */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-slate-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border-2 border-sky-100"
        >
          <h3 className="text-2xl text-slate-900 mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-slate-600 mb-6">
            Intervention rapide, travail soigné et tarifs transparents
          </p>
          <a
            href="tel:0467000000"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            <span>Appelez-nous maintenant</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
