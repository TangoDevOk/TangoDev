import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Shield, Globe, Smartphone, Database, Users, CreditCard, BarChart3 } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Básico',
      price: isYearly ? '$450.000' : '$500.000',
      period: isYearly ? '/año' : '/mes',
      features: [
        'Diseño web personalizado y único',
        'Hasta 6 secciones principales',
        '100% responsive (móvil y desktop)',
        'Optimización SEO básica',
        'Formulario de contacto integrado',
        'Hosting y dominio por 1 año'
      ],
      popular: false
    },
    {
      name: 'E-Commerce',
      price: isYearly ? '$830.000' : '$924.000',
      period: isYearly ? '/año' : '/mes',
      features: [
        'Todo lo del plan Básico',
        'Catálogo de hasta 25 productos',
        'Carrito de compras funcional',
        'Pasarela de pagos (MercadoPago/Stripe)',
        'Panel de administración de productos',
        'Sistema de envíos y facturación'
      ],
      popular: true
    },
    {
      name: 'SaaS',
      price: isYearly ? '$3.120.000' : '$3.465.000',
      period: isYearly ? '/año' : '/mes',
      features: [
        'Aplicación web completa a medida',
        'Backend robusto y escalable',
        'Panel de administración avanzado',
        'Integraciones con APIs externas',
        'Sistema de usuarios y permisos',
        'Pagos recurrentes y suscripciones'
      ],
      popular: false
    }
  ];

  const getFeatureIcon = (feature) => {
    if (feature.includes('Diseño') || feature.includes('web')) return <Globe className="w-4 h-4" />;
    if (feature.includes('móvil') || feature.includes('responsive')) return <Smartphone className="w-4 h-4" />;
    if (feature.includes('SEO') || feature.includes('meta')) return <Zap className="w-4 h-4" />;
    if (feature.includes('SSL') || feature.includes('seguridad')) return <Shield className="w-4 h-4" />;
    if (feature.includes('Hosting') || feature.includes('dominio')) return <Database className="w-4 h-4" />;
    if (feature.includes('usuarios') || feature.includes('permisos')) return <Users className="w-4 h-4" />;
    if (feature.includes('pagos') || feature.includes('facturación')) return <CreditCard className="w-4 h-4" />;
    if (feature.includes('Analytics') || feature.includes('reportes')) return <BarChart3 className="w-4 h-4" />;
    return <Check className="w-4 h-4" />;
  };

  return (
    <section id="pricing" className="py-32 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centrado y minimalista */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge "OUR PRICING" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold font-['Inter']">1</span>
              </div>
              <span className="text-slate-500 text-sm font-medium font-['Inter']">NUESTROS PRECIOS</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl text-black mb-6 tracking-tight text-center leading-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}
          >
            <span className="font-bold">
              CRECE TU NEGOCIO
            </span>
            <br />
            <span className="font-normal">
              CON NUESTROS SERVICIOS
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-['Inter']"
          >
            Planes simples y transparentes para hacer crecer tu negocio
          </motion.p>

          {/* Toggle Centrado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex flex-col items-center space-y-4"
          >
            {/* Toggle Switch Horizontal Elegante */}
            <div className="relative">
              <div className="flex bg-stone-50 border border-neutral-200 rounded-full p-1">
                {/* Botón Mensual */}
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 font-['Inter'] ${
                    !isYearly 
                      ? 'bg-neutral-800 text-white shadow-lg' 
                      : 'text-black hover:bg-neutral-100'
                  }`}
                >
                  MENSUAL
                </button>
                
                {/* Botón Anual */}
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 font-['Inter'] ${
                    isYearly 
                      ? 'bg-neutral-800 text-white shadow-lg' 
                      : 'text-black hover:bg-neutral-100'
                  }`}
                >
                  ANUAL
                </button>
              </div>
            </div>

            {/* Indicador de Ahorro */}
            {isYearly && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-center"
              >
                <span className="text-orange-400 text-sm font-medium uppercase tracking-wide font-['Inter']">
                  Ahorra 10% con facturación anual
                </span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards - Cards más altas con más detalles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="group flex flex-col"
              >
                <div className={`relative h-full rounded-3xl transition-all duration-500 hover:scale-[1.02] flex flex-col ${
                  plan.popular
                    ? 'bg-orange-400 text-white shadow-2xl shadow-orange-400/20'
                    : 'bg-stone-50 text-black border border-neutral-200 hover:border-neutral-300'
                }`}>

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neutral-800 text-white px-4 py-2 rounded-xl text-sm font-medium font-['Inter']">
                        MÁS POPULAR
                      </span>
                    </div>
                  )}

                  <div className="p-12 flex flex-col flex-grow">
                    {/* Plan Name */}
                    <h3 className={`text-2xl font-semibold mb-4 text-center font-['Inter'] ${
                      plan.popular ? 'text-white' : 'text-orange-500'
                    }`}>
                      {plan.name === 'Básico' ? 'Básico' : plan.name === 'E-Commerce' ? 'E-Commerce' : 'SaaS'}
                    </h3>

                    {/* Price con Animación */}
                    <div className="mb-10">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline justify-center"
                      >
                        <span className={`text-5xl font-bold font-['Inter'] ${
                          plan.popular ? 'text-white' : 'text-neutral-800'
                        }`}>
                          {plan.price}
                        </span>
                        <span className={`text-lg ml-3 font-['Inter'] ${
                          plan.popular ? 'text-white/80' : 'text-neutral-600'
                        }`}>
                          {plan.period}
                        </span>
                      </motion.div>

                      {/* Indicador de Ahorro por Plan */}
                      {isYearly && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, type: "spring" }}
                          className="mt-3"
                        >
                          <span className={`text-sm font-medium font-['Inter'] ${
                            plan.popular ? 'text-white/90' : 'text-orange-400'
                          }`}>
                            Ahorras ${plan.name === 'Básico' ? '50.000' : plan.name === 'E-Commerce' ? '94.000' : '345.000'} al año
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Features con iconos */}
                    <div className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>
                          <div className="flex items-start space-x-3 py-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular ? 'bg-white/20' : 'bg-orange-100'
                            }`}>
                              {getFeatureIcon(feature)}
                            </div>
                            <span className={`text-sm leading-relaxed font-['Inter'] ${
                              plan.popular ? 'text-white/90' : 'text-neutral-700'
                            }`}>
                              {feature}
                            </span>
                          </div>
                          {/* Línea separadora entre features */}
                          {featureIndex < plan.features.length - 1 && (
                            <div className={`h-px font-['Inter'] ${
                              plan.popular ? 'bg-white/20' : 'bg-neutral-200'
                            }`}></div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - Siempre al final */}
                    <div className="mt-auto">
                      <button
                        className={`w-full py-5 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 font-['Inter'] ${
                          plan.popular 
                            ? 'bg-neutral-800 text-white hover:bg-neutral-700' 
                            : 'bg-neutral-800 text-white hover:bg-neutral-700'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          plan.popular ? 'bg-white' : 'bg-white'
                        }`}></div>
                        <span>CONTACTAR</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer como en la referencia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm font-['Inter']">
            Todos los precios están en USD y se cobran por sitio con impuestos aplicables agregados al momento del pago.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
