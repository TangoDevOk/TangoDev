import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isVisible] = useState(true);
  const location = useLocation();

  const centerNav = [
    { name: 'Inicio', href: '/', id: 'inicio' },
    { name: 'Proyectos', href: '/projects', id: 'projects' },
    { name: 'Sobre Nosotros', href: '/about', id: 'about' },
    { name: 'Precios', href: '/pricing', id: 'pricing' },
    { name: 'Contacto', href: '/contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[90rem] mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left: logo + email */}
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <Link to="/">
            <img src="/images/tangodev1blanco.png" alt="TangoDev" className="h-6 w-auto opacity-90" />
          </Link>
        </div>

        {/* Center: navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {centerNav.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`transition-colors font-gilroy ${
                location.pathname === item.href
                  ? 'text-white font-medium' 
                  : 'text-slate-300 hover:text-white font-normal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: FAQ + CTA + Menu */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="text-sm text-slate-300 hover:text-white transition-colors font-gilroy font-normal">Contacto</Link>
          <Link
            to="/pricing"
            className="hidden sm:inline-flex items-center gap-2 rounded-full text-white text-sm font-semibold px-6 py-3 shadow transition-colors font-gilroy"
            style={{ backgroundColor: '#455CFF' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3B4FD9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#455CFF'}
          >
            Comenzar
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors font-gilroy">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;