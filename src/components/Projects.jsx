import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useScrollAnimation, staggerContainer, cardVariants, slideInLeft, slideInRight, scaleIn } from '../hooks/useScrollAnimation';
import AnimatedText from './AnimatedText';
import ImprovedScrollAnimated from './ImprovedScrollAnimated';

const Projects = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation(0.2, true);
  const { ref: featuredRef, controls: featuredControls } = useScrollAnimation(0.1, true);
  const { ref: allProjectsRef, controls: allProjectsControls } = useScrollAnimation(0.1, true);
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation(0.1, true);

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
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={scaleIn}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
              }
            }}
          >
            Nuestros <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Proyectos</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.6 }
              }
            }}
          >
            Descubre algunos de nuestros proyectos más destacados que demuestran 
            nuestra capacidad para crear soluciones digitales innovadoras.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <ImprovedScrollAnimated 
          variants={staggerContainer}
          className="mb-16"
          threshold={0.1}
          triggerOnce={true}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
              }
            }}
          >
            Proyectos Destacados
          </motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
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
          </motion.div>
        </ImprovedScrollAnimated>

        {/* All Projects Grid */}
        <ImprovedScrollAnimated
          variants={staggerContainer}
          threshold={0.1}
          triggerOnce={true}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
              }
            }}
          >
            Todos los Proyectos
          </motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10"
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
          </motion.div>
        </ImprovedScrollAnimated>


      </div>
    </section>
  );
};

export default Projects;
