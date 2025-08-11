import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Search, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y responsivos con las últimas tecnologías.',
      features: ['React & Next.js', 'Optimización SEO', 'Hosting & Dominio', 'Mantenimiento']
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas y experiencias de usuario excepcionales.',
      features: ['Diseño Responsive', 'Prototipado', 'User Research', 'Testing']
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing que generan resultados medibles.',
      features: ['Google Ads', 'Redes Sociales', 'Email Marketing', 'Analytics']
    },
    {
      icon: Search,
      title: 'SEO & Posicionamiento',
      description: 'Optimización para motores de búsqueda y mayor visibilidad.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO']
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y híbridas para iOS y Android.',
      features: ['React Native', 'Flutter', 'App Store', 'Google Play']
    },
    {
      icon: Zap,
      title: 'Consultoría IT',
      description: 'Asesoramiento técnico para optimizar tu presencia digital.',
      features: ['Auditoría Web', 'Migración', 'Optimización', 'Capacitación']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para hacer crecer tu presencia digital 
            y alcanzar tus objetivos de negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contáctanos hoy mismo para discutir tu proyecto y obtener una propuesta 
              personalizada que se adapte a tus necesidades.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Solicitar Cotización
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 