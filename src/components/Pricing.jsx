import { motion } from 'framer-motion';
import { Check, Star, Zap, ShoppingCart, Globe } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Landing Page',
      description: 'Sitios web estáticos profesionales para presentar tu negocio',
      price: '$999',
      period: 'desde',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      features: [
        'Diseño personalizado y responsive',
        'Optimización SEO básica',
        'Formulario de contacto',
        'Integración con redes sociales',
        'Hasta 5 páginas',
        'Hosting incluido (1 año)',
        'Dominio incluido (1 año)',
        'Soporte técnico (3 meses)',
        'Tiempo de entrega: 2-3 semanas'
      ],
      popular: false
    },
    {
      name: 'E-commerce',
      description: 'Tiendas online completas con sistema de pagos',
      price: '$2,999',
      period: 'desde',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      features: [
        'Catálogo de productos completo',
        'Sistema de carrito de compras',
        'Integración con pasarelas de pago',
        'Panel de administración',
        'Gestión de inventario',
        'Sistema de usuarios y pedidos',
        'Optimización SEO avanzada',
        'Hosting y dominio incluidos',
        'Soporte técnico (6 meses)',
        'Tiempo de entrega: 4-6 semanas'
      ],
      popular: true
    },
    {
      name: 'SaaS / Aplicación',
      description: 'Aplicaciones web complejas y sistemas empresariales',
      price: '$4,999',
      period: 'desde',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      features: [
        'Aplicación web personalizada',
        'Base de datos compleja',
        'Sistema de autenticación',
        'Panel de administración avanzado',
        'APIs y integraciones',
        'Sistema de notificaciones',
        'Análisis y reportes',
        'Escalabilidad garantizada',
        'Hosting en la nube',
        'Soporte técnico (12 meses)',
        'Tiempo de entrega: 8-12 semanas'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
            Planes y <span className="gradient-text">Precios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones a medida para diferentes tipos de proyectos. 
            Cada plan incluye todo lo necesario para que tu proyecto sea un éxito.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative glass rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                  : 'border-gray-700/30 hover:border-blue-500/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className={`w-8 h-8 text-gradient-to-br ${plan.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-800/50 text-white border border-gray-700/30 hover:border-blue-500/30 hover:bg-gray-800/70'
                }`}
              >
                {plan.popular ? 'Comenzar Ahora' : 'Solicitar Cotización'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas algo Personalizado?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Todos nuestros planes son personalizables según tus necesidades específicas. 
              Contáctanos para obtener una cotización a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización Personalizada
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800/50 text-white px-8 py-3 rounded-lg font-semibold border border-gray-700/30 hover:border-blue-500/30 transition-all duration-200"
              >
                Ver Portafolio Completo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
