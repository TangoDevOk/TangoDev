import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectMosaic = () => {
  // Datos de proyectos de ejemplo con diferentes tamaños
  const projects = [
    {
      id: 1,
      name: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      category: 'Dashboard',
    },
    {
      id: 2,
      name: 'App Móvil',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=800&fit=crop',
      category: 'Mobile App',
    },
    {
      id: 3,
      name: 'Usuario 1',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
      category: 'User',
    },
    {
      id: 4,
      name: 'Dashboard 2',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
      category: 'Dashboard',
    },
    {
      id: 5,
      name: 'Usuario 2',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
      category: 'User',
    },
    {
      id: 6,
      name: 'Monitor',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
      category: 'Monitor',
    },
    {
      id: 7,
      name: 'Usuario 3',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
      category: 'User',
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Nuestros{' '}
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Proyectos
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            Descubre algunos de nuestros trabajos más destacados que hemos desarrollado para nuestros clientes
          </motion.p>
        </motion.div>

        {/* Projects Grid adaptado al layout de la imagen */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 lg:gap-6 h-[700px] lg:h-[900px]">
          {/* Fila 1 */}
          {/* Imagen grande horizontal (izquierda, ocupa 3 columnas) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-3 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
          {/* Imagen vertical (celular, columna 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-2 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[1].image}
                alt={projects[1].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Fila 2 */}
          {/* Imagen cuadrada (usuario 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[2].image}
                alt={projects[2].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
          {/* Imagen cuadrada (dashboard 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[3].image}
                alt={projects[3].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
          {/* Imagen cuadrada (usuario 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[4].image}
                alt={projects[4].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Fila 3 */}
          {/* Imagen grande horizontal (izquierda, ocupa 2 columnas en fila 3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[5].image}
                alt={projects[5].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Imagen grande horizontal (derecha, ocupa 2 columnas en fila 3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <span>Ver Todos los Proyectos</span>
            <ExternalLink className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectMosaic;
