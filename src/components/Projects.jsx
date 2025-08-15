import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingCart, BarChart3, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      role: 'Desarrollo Full-Stack',
      image: '/images/project-ecommerce.jpg',
      slug: 'ecommerce-moderno',
      featured: true
    },
    {
      title: 'Dashboard Analytics',
      role: 'Frontend & UX',
      image: '/images/project-dashboard.jpg',
      slug: 'dashboard-analytics',
      featured: true
    },
    {
      title: 'App de Delivery',
      role: 'Mobile Development',
      image: '/images/project-delivery.jpg',
      slug: 'app-delivery',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-44 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Showcase Cards - Diseño elegante y centrado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Nuestros Proyectos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-20"
          >
            Descubre algunos de nuestros proyectos más destacados que demuestran nuestra capacidad para crear soluciones digitales innovadoras.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-black"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                title={project.title}
              >
                {/* Project Image Placeholder */}
                <div className="h-[400px] md:h-[560px] w-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <div className="text-slate-600 group-hover:text-white transition-colors duration-300">
                    {project.title === 'E-commerce Moderno' && <ShoppingCart className="w-24 h-24" />}
                    {project.title === 'Dashboard Analytics' && <BarChart3 className="w-24 h-24" />}
                    {project.title === 'App de Delivery' && <Smartphone className="w-24 h-24" />}
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                
                {/* Arrow Button */}
                <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-7 h-7 text-black" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                  <p className="text-xs md:text-sm text-white/70 mb-1 drop-shadow-sm tracking-widest">
                    {project.role}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
