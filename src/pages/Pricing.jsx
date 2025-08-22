import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Zap, Server, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FeatureCards from '../components/FeatureCards';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  // Planes principales con sub-planes
  const mainPlans = [
    {
      id: 'basic',
      name: 'Plan Básico',
      description: 'Perfecto para proyectos pequeños y sitios web básicos',
      icon: '🌱',
      subPlans: [
        {
          name: 'Starter',
          price: '$500.000/mes',
          features: [
            'Diseño personalizado y responsive',
            'Hasta 3 páginas web',
            'Optimización SEO básica',
            'Formulario de contacto',
            'Integración con redes sociales',
            'Hosting y dominio opcional',
            'Soporte por email'
          ],
          popular: false
        },
        {
          name: 'Standard',
          price: '$720.000/mes',
          features: [
            'Todo del plan Starter',
            'Hasta 6 páginas web',
            'Optimización SEO avanzada',
            'Blog integrado',
            'Analytics y reportes',
            'Hosting y dominio incluidos',
            'Soporte prioritario'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$945.000/mes',
          features: [
            'Todo del plan Standard',
            'Hasta 10 páginas web',
            'SEO completo y posicionamiento',
            'Sistema de reservas/citas',
            'Integración con CRM',
            'Hosting premium incluido',
            'Soporte 24/7'
          ],
          popular: false
        }
      ]
    },
    {
      id: 'ecommerce',
      name: 'Plan E-Commerce',
      description: 'Tiendas online completas con pasarelas de pago',
      icon: '🛒',
      subPlans: [
        {
          name: 'Shop',
          price: '$924.000/mes',
          features: [
            'Todo lo del plan Básico Premium',
            'Hasta 20 productos cargados',
            'Carrito de compras funcional',
            'Pasarela de pagos integrada',
            'Configuración de envíos',
            'Panel de administración',
            'Capacitación para manejar la tienda'
          ],
          popular: false
        },
        {
          name: 'Store',
          price: '$1.335.000/mes',
          features: [
            'Todo del plan Shop',
            'Hasta 100 productos',
            'Múltiples pasarelas de pago',
            'Sistema de cupones y descuentos',
            'Gestión de inventario avanzada',
            'Reportes de ventas',
            'Soporte técnico especializado'
          ],
          popular: true
        },
        {
          name: 'Marketplace',
          price: '$2.000.000/mes',
          features: [
            'Todo del plan Store',
            'Productos ilimitados',
            'Múltiples vendedores',
            'Sistema de comisiones',
            'Panel de vendedores',
            'Integración con marketplaces',
            'Soporte premium 24/7'
          ],
          popular: false
        }
      ]
    },
    {
      id: 'saas',
      name: 'Plan SaaS',
      description: 'Aplicaciones web complejas y sistemas empresariales',
      icon: '🚀',
      subPlans: [
        {
          name: 'Startup',
          price: '$3.465.000/mes',
          features: [
            'Desarrollo web a medida completo',
            'Backend personalizado y escalable',
            'Panel de administración avanzado',
            'Integraciones con APIs externas',
            'Sistema de usuarios y autenticación',
            'Pagos recurrentes y suscripciones',
            'Mantenimiento post-lanzamiento'
          ],
          popular: false
        },
        {
          name: 'Scale',
          price: '$5.000.000/mes',
          features: [
            'Todo del plan Startup',
            'Arquitectura microservicios',
            'Base de datos distribuida',
            'Sistema de notificaciones',
            'Analytics avanzados',
            'API pública documentada',
            'Soporte técnico dedicado'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$8.000.000/mes',
          features: [
            'Todo del plan Scale',
            'Infraestructura cloud nativa',
            'Sistema de roles y permisos',
            'Integración con sistemas legacy',
            'Escalabilidad automática',
            'SLA garantizado',
            'Equipo de soporte dedicado'
          ],
          popular: false
        }
      ]
    }
  ];

  return (
    <div className="bg-[#141414] relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-28 pb-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-[#E2E2E2]/60 hover:text-[#E2E2E2] transition-colors duration-200"
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
          <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl tracking-wide leading-[1.2] text-[#E2E2E2] mb-6">
            Planes y Precios
          </h1>
          <p className="text-lg md:text-xl text-[#E2E2E2]/70 max-w-3xl mx-auto font-gilroy">
            Soluciones flexibles adaptadas a tus necesidades. Elige el plan que mejor se ajuste a tu proyecto.
          </p>
        </motion.div>

        {/* Plan Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="w-full">
            <div className="flex bg-[#E2E2E2]/10 rounded-lg p-1 backdrop-blur-md">
              {mainPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative flex-1 px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'text-[#455CFF] bg-[#E2E2E2]/20'
                      : 'text-[#E2E2E2] hover:text-[#E2E2E2]/80'
                  }`}
                >
                  {plan.name}
                  {/* Indicador azul debajo del tab seleccionado */}
                  {selectedPlan === plan.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#455CFF] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selected Plan Details */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          {mainPlans.map((plan) => (
            plan.id === selectedPlan && (
              <div key={plan.id}>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E2E2E2] mb-4 font-gilroy">{plan.name}</h2>
                  <p className="text-[#E2E2E2]/70 max-w-2xl mx-auto font-gilroy">{plan.description}</p>
                </div>

                {/* Sub Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plan.subPlans.map((subPlan, index) => (
                    <motion.div
                      key={subPlan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="relative group transition-transform duration-300"
                    >
                      {/* Badge Más Popular */}
                      {subPlan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                          <span className="bg-white text-[#141414] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            Más Popular
                          </span>
                        </div>
                      )}

                      {/* Glassmorphism Card */}
                      <div className="relative bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900/30">
                        {/* Card Content */}
                        <div className="text-left mb-8">
                          <h3 className="text-xl font-semibold text-white mb-4 font-gilroy">
                            {subPlan.name}
                          </h3>
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-white font-gilroy">
                              {subPlan.price}
                            </span>
                          </div>
                          {/* Línea separadora */}
                          <div className="w-full h-px bg-white/20 mb-6"></div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
                          {subPlan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-5 h-5 bg-gray-950 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-slate-300 text-sm leading-relaxed font-gilroy">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                          className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                            subPlan.popular
                              ? 'bg-white text-[#141414] hover:bg-gray-100 shadow-lg hover:shadow-xl'
                              : 'bg-black text-white hover:bg-neutral-900 border border-neutral-800 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                          } transform hover:scale-105`}
                        >
                          Comenzar
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          ))}
        </motion.div>

        {/* Feature Cards - Ahora después de los planes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <FeatureCards />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-gilroy">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto font-gilroy">
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
