import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import LightRays from './LightRays';
import TextType from './TextType';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Light Rays Effect - EXACTLY as in React Bits */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f8faff"
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
          >
            <span>Comenzar Proyecto</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
          >
            <span>Ver Portafolio</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Flecha de Scroll Estilo iOS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-12 h-12 bg-transparent border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 