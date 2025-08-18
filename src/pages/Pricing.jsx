import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "$2,500",
      duration: "por proyecto",
      description: "Perfecto para proyectos pequeños y sitios web básicos",
      features: [
        "Diseño responsivo",
        "Hasta 5 páginas",
        "Formulario de contacto",
        "SEO básico",
        "Hosting incluido (1 año)",
        "Soporte por email"
      ],
      popular: false,
      cta: "Comenzar proyecto"
    },
    {
      name: "Profesional",
      price: "$5,000",
      duration: "por proyecto",
      description: "Ideal para empresas y aplicaciones web complejas",
      features: [
        "Todo del plan Básico",
        "Hasta 15 páginas",
        "Panel de administración",
        "Integración con APIs",
        "Base de datos",
        "Soporte prioritario",
        "Mantenimiento (3 meses)"
      ],
      popular: true,
      cta: "Comenzar proyecto"
    },
    {
      name: "Enterprise",
      price: "$12,000",
      duration: "por proyecto",
      description: "Para aplicaciones complejas y sistemas empresariales",
      features: [
        "Todo del plan Profesional",
        "Páginas ilimitadas",
        "Funcionalidades personalizadas",
        "Integración con sistemas externos",
        "Escalabilidad garantizada",
        "Soporte 24/7",
        "Mantenimiento (1 año)",
        "Capacitación del equipo"
      ],
      popular: false,
      cta: "Contactar ventas"
    }
  ];

  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos",
      price: "Desde $2,500",
      features: ["Diseño personalizado", "Optimización SEO", "Integración CMS"]
    },
    {
      title: "Aplicaciones Web",
      description: "Aplicaciones web complejas y escalables",
      price: "Desde $8,000",
      features: ["Backend robusto", "Base de datos", "APIs personalizadas"]
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas",
      price: "Desde $6,000",
      features: ["Pasarela de pagos", "Gestión de inventario", "Panel administrativo"]
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas",
      price: "Desde $10,000",
      features: ["iOS y Android", "Funcionalidades offline", "Notificaciones push"]
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Planes y
            <br />
            <span className="text-white/60">Precios</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Soluciones flexibles adaptadas a tus necesidades. Elige el plan que mejor se ajuste a tu proyecto.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative bg-black/50 backdrop-blur-md border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-white/40 bg-white/5' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center space-x-1 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4" />
                      <span>Más Popular</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.duration}</span>
                  </div>
                  <p className="text-white/60">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Servicios Especializados</h2>
            <p className="text-white/60">Soluciones personalizadas para necesidades específicas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-white/50 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas sobre precios</h2>
            <p className="text-white/60">Resolvemos las dudas más comunes sobre nuestros planes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Los precios incluyen hosting y dominio?",
                answer: "Sí, todos nuestros planes incluyen hosting y dominio por el primer año. Después puedes continuar con nosotros o migrar a otro proveedor."
              },
              {
                question: "¿Ofrecen descuentos para proyectos grandes?",
                answer: "Absolutamente. Para proyectos enterprise y contratos a largo plazo ofrecemos descuentos especiales. Contáctanos para discutir."
              },
              {
                question: "¿Pueden personalizar un plan según mis necesidades?",
                answer: "Sí, creamos planes personalizados adaptados a tus requisitos específicos. Cada proyecto es único y merece una solución a medida."
              },
              {
                question: "¿Qué incluye el mantenimiento?",
                answer: "El mantenimiento incluye actualizaciones de seguridad, backups, monitoreo del sitio y soporte técnico para problemas menores."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-white/60 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Cada proyecto es único. Contáctanos para discutir tus necesidades específicas 
              y crear una propuesta personalizada que se ajuste perfectamente a tu presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                Solicitar cotización
              </Link>
              <Link 
                to="/projects"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
