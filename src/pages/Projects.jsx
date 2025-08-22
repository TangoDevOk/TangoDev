import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.",
      image: "/images/web-dev.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/tangodev/ecommerce",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interactivo con gráficos en tiempo real, métricas de negocio y reportes personalizables.",
      image: "/images/web-desing.png",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.com",
      githubUrl: "https://github.com/tangodev/dashboard",
      category: "Frontend"
    },
    {
      id: 3,
      title: "API REST Services",
      description: "API robusta con autenticación JWT, documentación automática y escalabilidad horizontal.",
      image: "/images/web-dev.png",
      technologies: ["Node.js", "Express", "JWT", "Redis"],
      liveUrl: "https://api-demo.com",
      githubUrl: "https://github.com/tangodev/api",
      category: "Backend"
    },
    {
      id: 4,
      title: "Mobile App",
      description: "Aplicación móvil nativa con funcionalidades offline, notificaciones push y sincronización en la nube.",
      image: "/images/web-desing.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://mobile-demo.com",
      githubUrl: "https://github.com/tangodev/mobile",
      category: "Mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title text-5xl md:text-7xl tracking-wide leading-[1.2] text-white mb-6">
            Nuestros
            <br />
            <span className="text-white/60">Proyectos</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-gilroy">
            Descubre nuestra cartera de proyectos innovadores que transforman ideas en experiencias digitales extraordinarias.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              {/* Project Card */}
              <div className="relative bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-black/70 transition-all duration-300 hover:shadow-xl">
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/80 transition-colors duration-200 font-gilroy">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed font-gilroy">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/5 border border-white/20 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver proyecto</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-gilroy">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto font-gilroy">
              Estamos listos para transformar tu idea en una realidad digital. Contáctanos para discutir tu proyecto.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              Comenzar proyecto
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
