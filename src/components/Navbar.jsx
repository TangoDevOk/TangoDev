import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', href: '/', isHome: true },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Precios', href: '/pricing' },
    { name: 'Contacto', href: '/contact' },
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
    <>
      {/* Logo separado a la izquierda */}
      <motion.div
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
        className="fixed top-8 left-8 z-50"
      >
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/images/tangodev1blanco.png" 
              alt="TangoDev Logo" 
              className="h-8 w-auto object-contain"
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* Navbar centrada */}
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
        {/* Navbar Container - Solo navegación centrada */}
        <div className="bg-neutral-900/10 backdrop-blur-md border border-white/30 rounded-full px-12 py-2 flex items-center justify-center min-w-[800px] shadow-lg">
          {/* Navigation Links - Centrados */}
          <div className="flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -1 }}
              >
                <Link
                  to={item.href}
                  className={`text-base font-medium transition-all duration-300 px-6 py-3 rounded-full ${
                    location.pathname === item.href
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-white hover:text-slate-200'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar; 