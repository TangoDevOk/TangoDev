import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Cloud, Zap, Globe, Shield, Rocket, Target, Layers, Cpu, Server, Lock } from 'lucide-react';

const TechnologyStack = () => {
  const technologies = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creamos interfaces modernas y responsivas con las últimas tecnologías web",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Desarrollamos APIs robustas y escalables para aplicaciones empresariales",
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Aplicaciones nativas e híbridas para iOS y Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestructura en la nube y automatización de despliegues",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Análisis de datos y soluciones de inteligencia empresarial",
      technologies: ["BigQuery", "Tableau", "Python", "SQL", "Machine Learning"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protección y seguridad para aplicaciones y sistemas",
      technologies: ["Penetration Testing", "SSL/TLS", "OAuth", "Encryption", "Compliance"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10"
    }
  ];

  const workCapabilities = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Desarrollo rápido de productos mínimos viables para validar ideas",
      features: ["Prototipado rápido", "Validación de mercado", "Iteración continua", "Time-to-market"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: Target,
      title: "E-commerce Solutions",
      description: "Plataformas de comercio electrónico completas y escalables",
      features: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory Management"],
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Aplicaciones web empresariales y sistemas de gestión",
      features: ["CRM Systems", "ERP Solutions", "Custom Dashboards", "API Integration"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Layers,
      title: "Legacy Modernization",
      description: "Migración y modernización de sistemas legacy",
      features: ["Code Refactoring", "Database Migration", "API Modernization", "Performance Optimization"],
      color: "from-gray-500 to-slate-500",
      bgColor: "from-gray-500/10 to-slate-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
            Nuestras <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tecnologías</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Utilizamos las tecnologías más modernas y confiables para crear soluciones 
            que impulsan el crecimiento de tu negocio.
          </p>
        </motion.div>

        {/* Technology Stack Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Stack Tecnológico
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
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
          </div>
        </div>

        {/* Work Capabilities Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Capacidades de Trabajo
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workCapabilities.map((capability, index) => (
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
                  <h4 className="text-xl font-bold text-white">{capability.title}</h4>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>
                
                {/* Features List */}
                <div className="grid grid-cols-1 gap-2">
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
              Nuestro equipo está listo para ayudarte a convertir tu visión en realidad. 
              Contáctanos para discutir cómo podemos impulsar tu proyecto con las mejores tecnologías.
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

export default TechnologyStack;
