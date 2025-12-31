import { useState } from 'react';
import { motion } from 'motion/react';
import { Droplet, Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'interventions', label: 'Interventions' },
    { id: 'tarifs', label: 'Tarifs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('accueil')}
          >
            <div className="relative">
              <Droplet className="w-9 h-9 text-primary" fill="currentColor" />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <div>
              <div className="text-xl text-primary tracking-tight">AquaPro</div>
              <div className="text-xs text-muted-foreground">Plomberie Montpellier</div>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-1 py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Urgence 24/7</div>
              <a href="tel:0467000000" className="text-primary flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>04 67 00 00 00</span>
              </a>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 relative overflow-hidden group"
              onClick={() => onNavigate('tarifs')}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">Devis Gratuit</span>
            </Button>
          </motion.div>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 border-t border-border mt-2"
          >
            <nav className="flex flex-col gap-4 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-secondary text-primary'
                      : 'text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Urgence 24/7</div>
                <a
                  href="tel:0467000000"
                  className="text-primary flex items-center gap-2 mb-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>04 67 00 00 00</span>
                </a>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    onNavigate('tarifs');
                    setMobileMenuOpen(false);
                  }}
                >
                  Devis Gratuit
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
