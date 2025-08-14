import { motion } from 'framer-motion';
import { Code, Palette, Zap, ArrowRight, Star, Coffee } from 'lucide-react';
import LightRays from './LightRays';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Light Rays Effect as Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#6366f1"
          raysSpeed={0.6}
          lightSpread={1.0}
          rayLength={2.0}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.02}
          className="absolute inset-0"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2"
            >
              <Star className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">Web Development & Design</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Desarrollamos
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                soluciones web
              </span>
              <br />
              que funcionan
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-slate-300 max-w-lg leading-relaxed"
            >
              Creamos sitios web y aplicaciones que realmente funcionan para tu negocio. 
              Sin complicaciones, solo resultados.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Iniciar proyecto</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
              >
                Ver portafolio
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center space-x-6 text-sm text-slate-400 pt-4"
            >
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span>+30 proyectos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-purple-400" />
                <span>Diseño personalizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>100% responsive</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative w-full h-80 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl backdrop-blur-xl border border-slate-700/30 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-indigo-500/30"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"></div>
              <div className="absolute bottom-8 left-12 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg backdrop-blur-sm border border-amber-500/30"></div>
              
              {/* Code-like Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 flex items-center justify-center">
                  <Code className="w-8 h-8 text-indigo-400" />
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute top-1/4 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <div className="absolute bottom-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-purple-500 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg"
            >
              React + Next.js
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 