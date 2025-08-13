import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Rocket, Target, Globe, Layers, Zap, Shield, Database, Cpu } from 'lucide-react';
import { Code, Smartphone, Palette, Search, BarChart3, Users, Zap as ZapIcon, Shield as ShieldIcon } from 'lucide-react';

const CapabilitiesSlider = () => {
  const [activeTab, setActiveTab] = useState('capabilities');

  const capabilities = [
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Desarrollo rápido de productos mínimos viables para validar ideas de negocio.',
      features: ['Prototipado rápido', 'Validación de mercado', 'Iteración continua', 'Time-to-market'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Target,
      title: 'E-commerce Solutions',
      description: 'Plataformas de comercio electrónico completas y escalables.',
      features: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Inventory Management'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Aplicaciones web empresariales y sistemas de gestión.',
      features: ['CRM Systems', 'ERP Solutions', 'Custom Dashboards', 'API Integration'],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      icon: Layers,
      title: 'Legacy Modernization',
      description: 'Migración y modernización de sistemas legacy.',
      features: ['Code Refactoring', 'Database Migration', 'API Modernization', 'Performance Optimization'],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-500/10 to-slate-500/10'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimización de rendimiento y velocidad de aplicaciones.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Mobile Optimization', 'Caching Strategies'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implementación de medidas de seguridad y cumplimiento normativo.',
      features: ['SSL/TLS', 'Data Encryption', 'GDPR Compliance', 'Security Audits'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-500/10 to-pink-500/10'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Diseño y optimización de bases de datos para aplicaciones escalables.',
      features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Backup Strategies'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      icon: Cpu,
      title: 'System Architecture',
      description: 'Arquitectura de sistemas robustos y escalables.',
      features: ['Microservices', 'Cloud Architecture', 'Load Balancing', 'Scalability Planning'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10'
    }
  ];

  const technologies = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Desarrollo de interfaces de usuario modernas y responsivas.',
      technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Desarrollo de APIs robustas y sistemas de backend escalables.',
      technologies: ['Node.js', 'Python', 'PHP', 'Java', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      description: 'Diseño de interfaces centradas en la experiencia del usuario.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer', 'Protopie'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Optimización para motores de búsqueda y estrategias de marketing digital.',
      technologies: ['Google Analytics', 'SEO Tools', 'Google Ads', 'Social Media', 'Content Marketing'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Análisis de datos y business intelligence para decisiones informadas.',
      technologies: ['Tableau', 'Power BI', 'Google Data Studio', 'Python', 'SQL', 'Machine Learning'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10'
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
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
            Nuestras <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Capacidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones especializadas en diferentes áreas del desarrollo digital, 
            adaptándonos a las necesidades específicas de cada proyecto.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-xl p-1 border border-gray-700/30">
            <div className="flex space-x-1">
              <motion.button
                onClick={() => setActiveTab('capabilities')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'capabilities'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Capacidades de Trabajo
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('technologies')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'technologies'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Tecnologías
              </motion.button>
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'capabilities' && (
            <motion.div
              key="capabilities"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${capability.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <capability.icon className={`w-6 h-6 text-gradient-to-br ${capability.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-white">{capability.title}</h4>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{capability.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {capability.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'technologies' && (
            <motion.div
              key="technologies"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${tech.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className={`w-6 h-6 text-gradient-to-br ${tech.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-white">{tech.title}</h4>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{tech.description}</p>
                  
                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {tech.technologies.map((technology) => (
                      <div
                        key={technology}
                        className="px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700/30 text-sm text-gray-300 hover:border-blue-500/30 transition-colors duration-200"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CapabilitiesSlider;
