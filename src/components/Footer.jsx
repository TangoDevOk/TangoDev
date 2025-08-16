import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-h-screen bg-neutral-950 relative overflow-hidden">
      {/* Puente visual para conectar con el componente de arriba */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black"></div>
      
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
      </div>

      {/* Texto grande de fondo - tangodev */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-black text-white leading-none tracking-tighter select-none mb-[-6rem]"
        >
          tangodev
        </motion.span>
      </div>

      {/* Contenido principal del footer */}
      <div className="relative z-20 w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Grid de contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {/* Columna 1 - Sobre TangoDev */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img 
              src="/src/assets/tangodev1blancoo.png" 
              alt="TangoDev Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/70 text-lg leading-relaxed">
              Somos una agencia de desarrollo web independiente y emprendedora, 
              especializada en crear soluciones digitales que transforman ideas en realidades.
            </p>
          </motion.div>

          {/* Columna 2 - Explorar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Explorar</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white transition-colors duration-300 text-lg">Inicio</a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors duration-300 text-lg">Nosotros</a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors duration-300 text-lg">Proyectos</a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors duration-300 text-lg">Contacto</a>
            </div>
          </motion.div>

          {/* Columna 3 - Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Seguinos</h4>
            <div className="space-y-4">
              <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl text-white/90 hover:bg-gray-900/30 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@tangodev</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl text-white/90 hover:bg-gray-900/30 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@tangodev</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl text-white/90 hover:bg-gray-900/30 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>@tangodev</span>
              </a>
            </div>
          </motion.div>

          {/* Columna 4 - CTA y Herramientas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Trabajemos Juntos</h4>
            <div className="space-y-4">
              <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-gray-900/30 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                <span className="font-semibold">Contactar</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-white/60 text-sm leading-relaxed">
                Cursos, tutoriales y herramientas para desarrolladores
              </p>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria con efecto glass */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
        />

        {/* Footer inferior con copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div className="flex items-center gap-4 text-white/60">
     {/*        <span className="text-lg">TangoDev ©{currentYear}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span> */}
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <span className="text-lg">Buenos Aires, Argentina</span>
            {/* <div className="w-2 h-2 bg-white/40 rounded-full"></div> */}
       {/*      <span className="text-lg">Desarrollo Web</span> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 