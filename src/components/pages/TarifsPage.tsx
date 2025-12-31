import { motion } from "motion/react";
import {
  Check,
  Phone,
  Clock,
  Shield,
  AlertCircle,
  Wrench,
  Home,
  Building,
  Euro,
  FileText,
  Calculator,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const tarifs = [
  {
    category: "Dépannage Urgent",
    icon: AlertCircle,
    color: "from-red-500 to-orange-500",
    items: [
      {
        service: "Déplacement urgence (jour)",
        prix: "0€",
        note: "Inclus dans le tarif",
      },
      {
        service: "Déplacement urgence (nuit/weekend)",
        prix: "40€",
        note: "Majoré",
      },
      {
        service: "Main d'œuvre (heure)",
        prix: "65€",
        note: "Hors fournitures",
      },
      {
        service: "Réparation fuite simple",
        prix: "À partir de 120€",
        note: "Selon complexité",
      },
      {
        service: "Débouchage évier/lavabo",
        prix: "À partir de 90€",
        note: "Équipement standard",
      },
    ],
  },
  {
    category: "Installation Sanitaire",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        service: "Pose robinetterie",
        prix: "À partir de 80€",
        note: "Fourniture non comprise",
      },
      {
        service: "Installation lavabo",
        prix: "À partir de 150€",
        note: "Pose seule",
      },
      {
        service: "Installation WC suspendu",
        prix: "À partir de 350€",
        note: "Avec bâti support",
      },
      {
        service: "Remplacement chauffe-eau",
        prix: "À partir de 450€",
        note: "Hors matériel",
      },
      {
        service: "Douche italienne",
        prix: "À partir de 2500€",
        note: "Installation complète",
      },
    ],
  },
  {
    category: "Rénovation",
    icon: Building,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        service: "Salle de bain (< 5m²)",
        prix: "À partir de 4000€",
        note: "Rénovation totale",
      },
      {
        service: "Salle de bain (5-10m²)",
        prix: "À partir de 6500€",
        note: "Rénovation totale",
      },
      {
        service: "Cuisine (plomberie)",
        prix: "À partir de 1200€",
        note: "Évier + LL + LV",
      },
      {
        service: "Mise aux normes",
        prix: "Sur devis",
        note: "Selon installation",
      },
    ],
  },
];

const forfaits = [
  {
    title: "Dépannage Standard",
    prix: "140",
    periode: "intervention",
    description: "Pour les petites réparations",
    features: [
      "Déplacement inclus (Métropole)",
      "1h de main d'œuvre",
      "Diagnostic précis",
      "Petites fournitures",
    ],
    popular: false,
  },
  {
    title: "Dépannage Premium",
    prix: "290",
    periode: "intervention",
    description: "Pour les réparations complexes",
    features: [
      "Déplacement inclus 24/7",
      "3h de main d'œuvre",
      "Garantie 2 ans",
      "Pièces de qualité",
      "Nettoyage du chantier",
    ],
    popular: true,
  },
  {
    title: "Contrat Entretien",
    prix: "199",
    periode: "an",
    description: "Sérénité toute l'année",
    features: [
      "2 visites annuelles",
      "Priorité dépannage",
      "-15% sur interventions",
      "Détartrage chauffe-eau",
      "Rapport d'inspection",
    ],
    popular: false,
  },
];

const avantages = [
  {
    icon: FileText,
    title: "Devis gratuit",
    description: "Estimation détaillée sans engagement",
  },
  {
    icon: Euro,
    title: "Prix transparents",
    description: "Pas de surprise, tarifs clairs",
  },
  {
    icon: Shield,
    title: "Garantie travaux",
    description: "Tous nos travaux sont garantis",
  },
  {
    icon: Calculator,
    title: "Facilités de paiement",
    description: "Paiement en plusieurs fois possible",
  },
];

export function TarifsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="euro-pattern"
                x="0"
                y="0"
                width="150"
                height="150"
                patternUnits="userSpaceOnUse"
              >
                <text
                  x="50"
                  y="80"
                  fontSize="60"
                  fill="currentColor"
                  opacity="0.5"
                >
                  €
                </text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#euro-pattern)" />
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
              Nos Tarifs
            </motion.div>

            <h1 className="text-4xl md:text-6xl mb-6 text-slate-900">
              Tarifs <span className="text-primary">Transparents</span>
            </h1>

            <p className="text-xl text-slate-600 mb-12">
              Des prix clairs et justes pour tous vos travaux de plomberie.
              Devis gratuit et sans engagement.
            </p>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-slate-900">
              Nos <span className="text-primary">Forfaits</span>
            </h2>
            <p className="text-lg text-slate-600">
              Choisissez la formule adaptée à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {forfaits.map((forfait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {forfait.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-sm rounded-full shadow-lg z-10">
                    Plus populaire
                  </div>
                )}

                <Card
                  className={`p-8 h-full ${
                    forfait.popular
                      ? "border-2 border-primary shadow-2xl scale-105"
                      : "border-2 border-slate-100"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <h3 className="text-2xl text-slate-900 mb-2">
                    {forfait.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {forfait.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl text-primary">
                        {forfait.prix}€
                      </span>
                      <span className="text-slate-600">
                        / {forfait.periode}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {forfait.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      forfait.popular
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Choisir ce forfait
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille tarifaire détaillée */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-slate-900">
              Grille <span className="text-primary">Tarifaire</span>
            </h2>
            <p className="text-lg text-slate-600">
              Prix indicatifs TTC - Devis personnalisé gratuit
            </p>
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {tarifs.map((categorie, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Card className="p-8 border-2 border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categorie.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <categorie.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl text-slate-900">
                      {categorie.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorie.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05 }}
                        className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-slate-900 mb-1">
                            {item.service}
                          </div>
                          <div className="text-sm text-slate-500">
                            {item.note}
                          </div>
                        </div>
                        <div className="text-xl text-primary ml-4">
                          {item.prix}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note importante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-sky-50 border-2 border-sky-100 rounded-xl max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg text-slate-900 mb-2">
                  Tarifs indicatifs
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Ces tarifs sont donnés à titre indicatif. Chaque intervention
                  nécessite un diagnostic précis. Nous vous proposons
                  systématiquement un devis détaillé et gratuit avant toute
                  intervention. Les prix incluent la TVA à 10% (rénovation) ou
                  20% selon les cas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Demandez Votre Devis Gratuit
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nous vous proposons un devis détaillé, personnalisé et sans
              engagement sous 24h maximum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0467000000"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-xl hover:bg-slate-50 transition-colors shadow-2xl text-lg h-14"
              >
                <Phone className="w-6 h-6" />
                <span>04 67 00 00 00</span>
              </a>
              <Button
                variant="outline"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-xl hover:bg-slate-50 transition-colors shadow-2xl text-lg h-14"
              >
                Formulaire de contact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
