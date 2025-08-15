import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import LightRays from './LightRays';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isDigital, setIsDigital] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDigital(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Light Rays Effect - EXACTLY as in React Bits */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main Content Container - Centered like React Bits */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 -mt-20">
        {/* New Background Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-neutral-900/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-4 hover:bg-neutral-900/20 transition-colors duration-300"
        >
          <Sparkles className="w-4 h-4 text-slate-300" />
          <span className="text-sm text-slate-300 font-medium">Desarrollo Web</span>
        </motion.button>

        {/* Main Headline - EFECTO SUTIL EN "DIGITAL/REAL" */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-12 max-w-4xl"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Iluminamos tu camino
          </span>
          <br />
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            en el mundo{' '}
            <motion.span
              key={isDigital ? 'digital' : 'real'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              {isDigital ? 'digital' : 'real'}
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 text-center mb-12 max-w-4xl leading-relaxed"
        >
          Servicios web rápidos, seguros y a tu medida para que tu idea crezca online.
        </motion.p>

        {/* CTA Buttons - EXACTLY as in React Bits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-slate-200 text-slate-900 font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-sm"
          >
            Comenzar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-neutral-900/10 backdrop-blur-md border border-white/30 text-slate-300 font-semibold rounded-full hover:bg-neutral-900/20 hover:text-white transition-all duration-300"
          >
            Saber más
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Right Demo Control */}
      {/*     <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute bottom-8 right-8 z-10 flex items-center space-x-3 text-slate-400"
        >
          <span className="text-sm">Demo Content</span>
          <div className="w-12 h-6 bg-slate-700 rounded-full p-1">
            <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
          </div>
        </motion.div> */}

      {/* Flecha de Scroll Estilo iOS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group"
        >
          {/* Flecha principal */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 