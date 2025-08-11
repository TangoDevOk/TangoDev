import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.',
      image: '/images/project-ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de control empresarial con gráficos interactivos y análisis de datos en tiempo real.',
      image: '/images/project-dashboard.jpg',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Chart.js'],
      category: 'SaaS',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'App de Delivery',
      description: 'Aplicación móvil para delivery de comida con geolocalización y sistema de pagos.',
      image: '/images/project-delivery.jpg',
      technologies: ['React Native', 'Expo', 'Google Maps', 'PayPal'],
      category: 'Mobile App',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Landing Page Corporativa',
      description: 'Sitio web corporativo moderno con animaciones y optimizado para SEO.',
      image: '/images/project-landing.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'Landing Page',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Sistema CRM',
      description: 'Sistema de gestión de relaciones con clientes con pipeline de ventas y reportes.',
      image: '/images/project-crm.jpg',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Redis'],
      category: 'SaaS',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog Personal',
      description: 'Blog personal con sistema de gestión de contenido y diseño minimalista.',
      image: '/images/project-blog.jpg',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
      category: 'Blog',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados que demuestran 
            nuestra capacidad para crear soluciones digitales innovadoras.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Proyectos Destacados
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
                      {project.category === 'E-commerce' && '🛒'}
                      {project.category === 'SaaS' && '📊'}
                      {project.category === 'Mobile App' && '📱'}
                      {project.category === 'Landing Page' && '🌐'}
                      {project.category === 'Blog' && '✍️'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Todos los Proyectos
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
                      {project.category === 'E-commerce' && '🛒'}
                      {project.category === 'SaaS' && '📊'}
                      {project.category === 'Mobile App' && '📱'}
                      {project.category === 'Landing Page' && '🌐'}
                      {project.category === 'Blog' && '✍️'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 bg-gray-800/50 rounded flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-200"
                      >
                        <Eye className="w-3 h-3 text-gray-400 hover:text-blue-400" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 bg-gray-800/50 rounded flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-200"
                      >
                        <Github className="w-3 h-3 text-gray-400 hover:text-blue-400" />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes un Proyecto en Mente?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estamos listos para ayudarte a crear algo increíble. 
              Contáctanos para discutir tu próximo proyecto.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Iniciar Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
