import { motion } from "motion/react";
import {
  Wrench,
  Flame,
  AlertCircle,
  Hammer,
  CheckCircle2,
  Clock,
  Shield,
} from "lucide-react";
import { Card } from "../ui/card";

const interventions = [
  {
    category: "Urgences",
    icon: AlertCircle,
    color: "from-red-500 to-orange-500",
    services: [
      {
        title: "Fuite d'eau urgente",
        description:
          "Réparation immédiate de toutes fuites (robinetterie, tuyauterie, joints)",
        delai: "Intervention sous 30min",
        disponibilite: "24h/24 - 7j/7",
      },
      {
        title: "Canalisation bouchée",
        description:
          "Débouchage WC, évier, douche, avec équipement professionnel",
        delai: "Intervention rapide",
        disponibilite: "24h/24 - 7j/7",
      },
      {
        title: "Panne chauffe-eau",
        description: "Dépannage ou remplacement urgent de chauffe-eau",
        delai: "Intervention prioritaire",
        disponibilite: "24h/24 - 7j/7",
      },
    ],
  },
  {
    category: "Installation & Rénovation",
    icon: Hammer,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        title: "Salle de bain complète",
        description:
          "Création ou rénovation totale : douche, baignoire, meuble, carrelage",
        delai: "Devis gratuit sous 48h",
        disponibilite: "Planning sur mesure",
      },
      {
        title: "Cuisine",
        description:
          "Installation évier, lave-vaisselle, robinetterie, raccordements",
        delai: "Planification rapide",
        disponibilite: "Lun - Sam",
      },
      {
        title: "WC et sanitaires",
        description:
          "Pose de WC suspendus, lavabos, vasques, robinetterie design",
        delai: "Installation sous 1 semaine",
        disponibilite: "Lun - Sam",
      },
    ],
  },
  {
    category: "Chauffage & Eau chaude",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    services: [
      {
        title: "Chauffe-eau électrique",
        description: "Installation, entretien, détartrage, remplacement",
        delai: "Installation sous 48h",
        disponibilite: "7j/7",
      },
      {
        title: "Chauffe-eau thermodynamique",
        description: "Installation éco-énergétique, conseil et dimensionnement",
        delai: "Étude personnalisée",
        disponibilite: "Sur RDV",
      },
      {
        title: "Chaudière",
        description: "Dépannage, entretien annuel, remplacement chaudière gaz",
        delai: "Intervention rapide",
        disponibilite: "7j/7",
      },
    ],
  },
  {
    category: "Entretien & Diagnostic",
    icon: Wrench,
    color: "from-sky-500 to-blue-500",
    services: [
      {
        title: "Recherche de fuite",
        description:
          "Détection par caméra thermique, inspection caméra, test de pression",
        delai: "Diagnostic sous 24h",
        disponibilite: "Lun - Dim",
      },
      {
        title: "Inspection par caméra",
        description: "Vidéo-inspection de canalisations, diagnostic précis",
        delai: "RDV rapide",
        disponibilite: "Lun - Sam",
      },
      {
        title: "Entretien préventif",
        description: "Maintenance annuelle, détartrage, contrôle installation",
        delai: "Planning flexible",
        disponibilite: "Sur RDV",
      },
    ],
  },
];

const garanties = [
  {
    icon: Clock,
    title: "Rapidité",
    description: "Intervention sous 30min pour les urgences",
  },
  {
    icon: Shield,
    title: "Garantie",
    description: "Tous nos travaux sont garantis",
  },
  {
    icon: CheckCircle2,
    title: "Qualité",
    description: "Matériel professionnel de qualité",
  },
];

export function InterventionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="tools-pattern"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="150" cy="150" r="3" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tools-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 bg-sky-100 text-primary rounded-full mb-6"
            >
              Nos Interventions
            </motion.div>

            <h1 className="text-4xl md:text-6xl mb-6 text-slate-900">
              Tous Types de{" "}
              <span className="text-primary">Travaux de Plomberie</span>
            </h1>

            <p className="text-xl text-slate-600 mb-12">
              De l'urgence à la rénovation complète, nos plombiers qualifiés
              interviennent pour tous vos besoins à Montpellier et ses environs.
            </p>

            {/* Garanties */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {garanties.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3 justify-start md:justify-center p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-900">{item.title}</div>
                    <div className="text-sm text-slate-600">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interventions par catégorie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {interventions.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* En-tête de catégorie */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-3xl text-slate-900">
                    {category.category}
                  </h2>
                </div>

                {/* Services de la catégorie */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                    >
                      <Card className="p-6 h-full border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group relative">
                        <h3 className="text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-slate-700">
                              {service.delai}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-slate-700">
                              {service.disponibilite}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cta-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Besoin d'un Plombier Maintenant ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nos équipes sont disponibles 24h/24 et 7j/7 pour toutes vos
              urgences. Intervention rapide à Montpellier et ses alentours.
            </p>
            <a
              href="tel:0467000000"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-xl hover:bg-slate-50 transition-colors shadow-2xl text-lg"
            >
              <AlertCircle className="w-6 h-6" />
              <span>Appeler le 04 67 00 00 00</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
