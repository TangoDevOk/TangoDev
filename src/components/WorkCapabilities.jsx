import { motion } from 'framer-motion';
import { Rocket, Target, Globe, Layers, Zap, Shield, Database, Cpu } from 'lucide-react';

const WorkCapabilities = () => {
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
            Capacidades de <span className="gradient-text">Trabajo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones especializadas en diferentes áreas del desarrollo digital, 
            adaptándonos a las necesidades específicas de cada proyecto.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
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
        </div>


      </div>
    </section>
  );
};

export default WorkCapabilities;
