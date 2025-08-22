import { motion } from 'framer-motion';
import { ArrowRight, Globe, Clock, Zap, Server, HeadphonesIcon } from 'lucide-react';
import { useMemo } from 'react';
import FeatureCards from './FeatureCards';

const Hero = () => {
  // Cubo 3D con wireframe y etiquetas como en la inspiración
  const Cube3D = useMemo(() => (
    <svg viewBox="0 0 300 300" className="w-full max-w-md text-[#E2E2E2]/80">
      {/* Cubo principal */}
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* Cara frontal */}
        <rect x="100" y="120" width="120" height="120" />
        
        {/* Cara superior */}
        <path d="M100 120 L160 80 L280 80 L220 120 Z" />
        
        {/* Cara lateral derecha */}
        <path d="M220 120 L280 80 L280 200 L220 240 Z" />
        
        {/* Líneas de conexión */}
        <line x1="100" y1="120" x2="160" y2="80" />
        <line x1="220" y1="120" x2="280" y2="80" />
        <line x1="220" y1="240" x2="280" y2="200" />
        <line x1="100" y1="240" x2="160" y2="200" />
      </g>
      
      {/* Hatching/Shading en caras */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        {/* Hatching cara superior */}
        {Array.from({ length: 8 }, (_, i) => (
          <line 
            key={`top-${i}`} 
            x1={100 + i * 15} 
            y1={120 - i * 5} 
            x2={100 + i * 15 + 15} 
            y2={120 - i * 5 - 5} 
          />
        ))}
        
        {/* Hatching cara frontal */}
        {Array.from({ length: 6 }, (_, i) => (
          <line 
            key={`front-${i}`} 
            x1="100" 
            y1={120 + i * 20} 
            x2="220" 
            y2={120 + i * 20} 
          />
        ))}
      </g>
      
      {/* Etiquetas a, b, c */}
      <g fill="currentColor" fontSize="14" fontFamily="monospace">
        {/* Etiqueta 'a' arriba */}
        <text x="90" y="70" className="text-[#E2E2E2]/80">a</text>
        
        {/* Etiqueta 'b' abajo izquierda */}
        <text x="80" y="270" className="text-[#E2E2E2]/80">b</text>
        
        {/* Etiqueta 'c' abajo derecha */}
        <text x="290" y="270" className="text-[#E2E2E2]/80">c</text>
      </g>
      
      {/* Arcos con puntos conectando las etiquetas */}
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
        {/* Arco de 'a' a 'b' */}
        <path d="M90 70 Q150 150 80 270" strokeDasharray="3,3" />
        
        {/* Arco de 'b' a 'c' */}
        <path d="M80 270 Q180 280 290 270" strokeDasharray="3,3" />
      </g>
    </svg>
  ), []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] bg-[#141414]">
      <div className="max-w-[90rem] mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Columna izquierda: contenido */}
        <div className="lg:col-span-4">
          <div className="hero-overline text-sm tracking-[0.2em] text-[#E2E2E2]/60 mb-6 font-gilroy font-medium">— SERVICIO WEB</div>
          <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl tracking-wide leading-[1.2] text-[#E2E2E2]">
            <div className="flex items-center gap-4 mb-2">
              <span className="whitespace-nowrap">Impulsamos tu</span>
            </div>
            <div className="whitespace-nowrap">negocio online, desde <span className="italic underline decoration-[#E2E2E2]/60 decoration-2 underline-offset-8 font-serif font-normal">Argentina</span></div>
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a className="inline-flex items-center gap-3 rounded-full border border-[#E2E2E2] px-6 py-3 text-[#E2E2E2] hover:bg-[#E2E2E2] hover:text-[#141414] transition-all duration-300 font-gilroy font-medium" href="#presupuesto">
              Solicitar Presupuesto
              <ArrowRight className="w-6 h-6" />
            </a>
            <a className="text-[#E2E2E2] hover:text-[#E2E2E2] underline underline-offset-4 font-gilroy font-normal" href="#portfolio">Ver Portafolio</a>
          </div>
        </div>

        {/* Columna derecha: Cubo 3D */}
        <div className="lg:col-span-1 justify-self-center lg:justify-self-end">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {Cube3D}
          </motion.div>
        </div>
      </div>

      {/* Cards de premios placeholder (fila) */}
      <FeatureCards />

      {/* Flecha hacia abajo simple - ArrowRight rotada */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ 
          y: 8,
          transition: { duration: 0.3 }
        }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ 
            opacity: [0.6, 1, 0.6],
            y: [0, 4, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <ArrowRight className="w-8 h-8 text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors duration-300 transform rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 