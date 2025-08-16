import { motion } from 'framer-motion';
import { Check, ToggleLeft } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Plan Básico",
      price: isYearly ? "$450.000/año" : "$500.000/mes",
      features: [
        "Diseño personalizado y responsive",
        "Hasta 6 páginas web",
        "Optimización SEO básica",
        "Formulario de contacto",
        "Integración con redes sociales",
        "Hosting y dominio opcional",
        "Soporte por email"
      ],
              buttonText: "Comenzar",
        buttonStyle: "bg-black text-white hover:bg-neutral-900 border border-neutral-800 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300",
        popular: false
      },
      {
        name: "Plan E-Commerce",
      price: isYearly ? "$830.000/año" : "$924.000/mes",
      features: [
        "Todo lo del plan Básico",
        "Hasta 20 productos cargados",
        "Carrito de compras funcional",
        "Pasarela de pagos integrada",
        "Configuración de envíos",
        "Panel de administración",
        "Capacitación para manejar la tienda"
      ],
      buttonText: "Comenzar",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      popular: true
    },
    {
      name: "Plan SaaS",
      price: isYearly ? "$3.120.000/año" : "$3.465.000/mes",
      features: [
        "Desarrollo web a medida completo",
        "Backend personalizado y escalable",
        "Panel de administración avanzado",
        "Integraciones con APIs externas",
        "Sistema de usuarios y autenticación",
        "Pagos recurrentes y suscripciones",
        "Mantenimiento post-lanzamiento"
      ],
              buttonText: "Comenzar",
        buttonStyle: "bg-black text-white hover:bg-neutral-900 border border-neutral-800 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300",
        popular: false
    }
  ];

  return (
    <section id="pricing" className="relative min-h-screen bg-black overflow-hidden py-20">
      

      {/* Background Title - Por detrás de las cards, cortado por la mitad */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-115">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[15rem] md:text-[18rem] lg:text-[20rem] font-black tracking-tight select-none text-white/85"
        >
          Precios
        </motion.h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Pricing Cards - Sin header, solo las cards */}
        <div className="pt-48">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="relative group transition-transform duration-300"
            >
              {/* Badge Más Popular */}
         {/*      {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )} */}

              {/* Glassmorphism Card - Profesional y sutil */}
              <div className="relative bg-gray-900/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900/30">
                {/* Card Content */}
                <div className="text-left mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  {/* Línea separadora */}
                  <div className="w-full h-px bg-white/20 mb-6"></div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gray-950 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Más redondo estilo iOS */}
                <button
                  className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${plan.buttonStyle} ${
                    plan.buttonStyle.includes('bg-black') 
                      ? 'shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]' 
                      : 'shadow-lg hover:shadow-xl'
                  } transform hover:scale-105`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        </div>



        {/* Toggle de Facturación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-4"
        >
          <span className="text-slate-300">Facturación Mensual</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              isYearly ? 'bg-white' : 'bg-gray-700'
            }`}
          >
            <motion.div
              animate={{
                x: isYearly ? 32 : 4
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-1 w-6 h-6 bg-gray-800 rounded-full shadow-md"
            />
          </button>
          <span className="text-white font-medium">Facturación Anual</span>
          {isYearly && (
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
              Ahorra 10%
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
