import { motion } from 'motion/react';
import { Droplet, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

/**
 * Fonction utilitaire pour obtenir l'année actuelle
 * @returns L'année actuelle (ex: 2025, 2026, etc.)
 */
function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Motif tuyauterie en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pipes" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M0 100 L50 100 L50 50 L150 50 L150 150 L100 150 L100 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="50" cy="100" r="4" fill="currentColor" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <circle cx="150" cy="50" r="4" fill="currentColor" />
              <circle cx="150" cy="150" r="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 - À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-8 h-8 text-sky-400" fill="currentColor" />
              <div>
                <div className="text-lg">AquaPro</div>
                <div className="text-xs text-sky-400">Plomberie Montpellier</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-6">
              Votre expert en plomberie à Montpellier. Intervention rapide 24h/24 et 7j/7 pour
              tous vos besoins en plomberie, chauffage et sanitaire.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center hover:bg-sky-500/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center hover:bg-sky-500/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center hover:bg-sky-500/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sky-400 mb-6">Liens Rapides</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('accueil')}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('accueil');
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interventions')}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                >
                  Interventions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tarifs')}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                >
                  Tarifs
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sky-400 mb-6">Nos Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-300">Dépannage d'urgence</li>
              <li className="text-slate-300">Réparation de fuite</li>
              <li className="text-slate-300">Installation sanitaire</li>
              <li className="text-slate-300">Chauffe-eau</li>
              <li className="text-slate-300">Débouchage</li>
              <li className="text-slate-300">Rénovation salle de bain</li>
            </ul>
          </motion.div>

          {/* Colonne 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sky-400 mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-300">Urgence 24/7</div>
                  <a href="tel:0467000000" className="text-white hover:text-sky-400 transition-colors">
                    04 67 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@aquapro-montpellier.fr"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  contact@aquapro-montpellier.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  Montpellier et agglomération
                  <br />
                  Hérault (34)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  Lun - Dim : 24h/24
                  <br />
                  <span className="text-sky-400">Intervention d'urgence</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {currentYear} AquaPro Montpellier. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
