import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Solo mostrar navbar en el Hero (primeros 200px)
      if (currentScrollY < 200) {
        setIsVisible(true);
      } else {
        // En todas las demás secciones, mantener oculto
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Navbar Container - MUCHO MÁS ANCHO horizontalmente */}
      <div className="bg-neutral-900/10 backdrop-blur-md border border-white/30 rounded-full px-12 py-2 flex items-center justify-between min-w-[1000px] shadow-lg">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-slate-800" />
          </div>
          <span className="text-white font-medium text-lg">TangoDev</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -1 }}
              className={`text-base font-medium transition-all duration-300 ${
                item.name === 'Servicios' 
                  ? 'text-white bg-neutral-900/20 backdrop-blur-sm px-6 py-3 rounded-full' 
                  : 'text-white hover:text-slate-200'
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 