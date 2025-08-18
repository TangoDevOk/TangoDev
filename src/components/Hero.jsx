import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ArrowRight, Globe, Clock, Zap, Server, HeadphonesIcon } from 'lucide-react';
import { useMemo } from 'react';

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

  const cards = useMemo(() => ([
    { label: 'Tiempo de entrega', title: 'Sitios en 7–15 días', foot: 'Plan Profesional', icon: Clock },
    { label: 'Rendimiento', title: '90+ en Lighthouse', foot: 'Core Web Vitals', icon: Zap },
    { label: 'Infraestructura', title: 'Hosting + SSL incluidos', foot: 'AWS/Cloudflare', icon: Server },
    { label: 'Soporte', title: 'Mantenimiento y actualizaciones', foot: 'SLA mensual', icon: HeadphonesIcon },
  ]), []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

=======
import { ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import LightRays from './LightRays';
import TextType from './TextType';

const Hero = () => {
>>>>>>> 2eb6c758c2f87baeac6d57b3fec5509780c8e4bb
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

<<<<<<< HEAD
        {/* Columna derecha: Cubo 3D */}
        <div className="lg:col-span-1 justify-self-center lg:justify-self-end">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
=======
      {/* Main Content Container - Centered like React Bits */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* New Background Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-3 bg-neutral-900/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 hover:bg-neutral-900/20 transition-colors duration-300"
        >
          <Sparkles className="w-5 h-5 text-slate-300" />
          <span className="text-base text-slate-300 font-medium">Desarrollo Web</span>
        </motion.button>

        {/* Main Headline - EFECTO DE ESCRITURA */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-10 max-w-5xl"
        >
          <TextType 
            text={[
              "Iluminamos tu camino en el mundo digital",
              "Iluminamos tu camino en el mundo real",
              "Iluminamos tu camino en el mundo web"
            ]}
            typingSpeed={100}
            pauseDuration={3000}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
            className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 text-center mb-10 max-w-5xl leading-relaxed"
        >
          Servicios web rápidos, seguros y a tu medida para que tu idea crezca online.
        </motion.p>

        {/* CTA Buttons - EXACTLY as in React Bits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
>>>>>>> 2eb6c758c2f87baeac6d57b3fec5509780c8e4bb
          >
            {Cube3D}
          </motion.div>
        </div>
      </div>

      {/* Cards de premios placeholder (fila) */}
      <div className="max-w-[90rem] mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={i}
              className="group relative rounded-2xl border border-[#E2E2E2]/10 p-6 bg-[#E2E2E2]/[0.02] cursor-pointer overflow-hidden"
              whileHover={{
                y: -12,
                scale: 1.08,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background celeste que aparece en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out" style={{ backgroundColor: '#455CFF' }}></div>

              {/* Sombra sutil en hover */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"></div>

              {/* Contenido de la card */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center group-hover:bg-[#E2E2E2]/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-[#E2E2E2]/60 group-hover:text-[#E2E2E2] transition-all duration-300" />
                  </div>
                </div>
                <div className="text-[#E2E2E2]/60 text-sm mb-1 group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.label}</div>
                <div className="text-lg font-semibold text-[#E2E2E2] group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.title}</div>
                <div className="mt-6 text-[#E2E2E2]/40 text-sm group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.foot}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

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