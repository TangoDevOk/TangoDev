import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ShoppingCart, Globe, Users, Rocket, Crown, X, Send } from 'lucide-react';
import { sendPricingEmail, validatePricingForm, initEmailJS } from '../utils/emailjs';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    selected_plan: '',
    budget: '',
    timeline: '',
    project_details: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const plans = [
    {
      name: 'Básico',
      description: 'Ideal para emprendedores y negocios que necesitan una presencia online rápida y efectiva.',
      price: '$500.000',
      period: 'desde',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      timeframe: '1-2 semanas',
      features: [
        'Diseño personalizado',
        'Hasta 6 secciones',
        '100% responsive',
        'Optimización SEO inicial',
        'Formulario de contacto',
        'Integración con redes sociales',
        'Hosting y dominio opcional'
      ],
      popular: false
    },
    {
      name: 'Medio – E-Commerce',
      description: 'Tiendas online pequeñas/medianas que buscan vender sus productos.',
      price: '$924.000',
      period: 'sin hosting',
      priceWithHosting: '$1.732.500',
      periodWithHosting: 'con hosting',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      timeframe: '2-4 semanas',
      features: [
        'Todo lo del plan Básico',
        'Hasta 20 productos cargados',
        'Carrito de compras',
        'Pasarela de pago (MercadoPago, PayPal, Stripe, etc.)',
        'Configuración de envíos',
        'Capacitación para manejar la tienda'
      ],
      popular: true
    },
    {
      name: 'Pro – SaaS / Plataforma a medida',
      description: 'Startups y empresas que necesitan un desarrollo personalizado y escalable.',
      price: '$3.465.000',
      period: '',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      timeframe: '6-10 semanas',
      features: [
        'Diseño y desarrollo a medida',
        'Backend personalizado',
        'Panel de administración',
        'Integraciones con APIs',
        'Login y registro de usuarios',
        'Pagos recurrentes',
        'Seguridad avanzada',
        'Mantenimiento post-lanzamiento'
      ],
      popular: false
    },
    {
      name: 'Personalizado',
      description: 'Clientes con proyectos únicos y requerimientos especiales.',
      price: 'Cotización',
      period: 'a medida',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      timeframe: 'Variable',
      features: [
        'Nos reunimos para entender tu proyecto',
        'Diseñamos una propuesta a tu medida',
        'Presupuesto y tiempos adaptados a tus necesidades',
        'Seguimiento personalizado en cada etapa'
      ],
      popular: false
    }
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setFormData(prev => ({
      ...prev,
      selected_plan: plan.name,
      plan: plan.name
    }));
    setShowModal(true);
    setErrors({});
    setSubmitStatus(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedPlan(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: '',
      selected_plan: '',
      budget: '',
      timeline: '',
      project_details: ''
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validatePricingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendPricingEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          plan: '',
          selected_plan: '',
          budget: '',
          timeline: '',
          project_details: ''
        });
        setErrors({});
        
        setTimeout(() => {
          handleModalClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative glass rounded-2xl p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'border-gray-700/30 hover:border-blue-500/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Más Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-7 h-7 text-gradient-to-br ${plan.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2 text-sm">{plan.period}</span>
                    {plan.priceWithHosting && (
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-white">{plan.priceWithHosting}</span>
                        <span className="text-gray-400 ml-2 text-sm">{plan.periodWithHosting}</span>
                      </div>
                    )}
                  </div>

                  {/* Timeframe */}
                  <div className="bg-gray-800/30 rounded-lg p-2 mb-4">
                    <span className="text-blue-400 text-sm font-medium">Tiempo estimado: {plan.timeframe}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold text-sm mb-3">Incluye:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handlePlanClick(plan)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                      : plan.name === 'Personalizado'
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-800/50 text-white border border-gray-700/30 hover:border-blue-500/30 hover:bg-gray-800/70'
                  }`}
                >
                  {plan.name === 'Personalizado' ? 'Solicitar Cotización' : 'Comenzar Ahora'}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Pricing Table for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 lg:hidden"
          >
            <div className="glass rounded-2xl p-6 border border-gray-700/30 overflow-x-auto">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Comparación de Planes</h3>
              <div className="min-w-full">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/30">
                      <th className="text-left py-3 text-white font-semibold">Plan</th>
                      <th className="text-left py-3 text-white font-semibold">Ideal para...</th>
                      <th className="text-left py-3 text-white font-semibold">Precio</th>
                      <th className="text-left py-3 text-white font-semibold">Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan, index) => (
                      <tr key={plan.name} className="border-b border-gray-700/20">
                        <td className="py-3 text-white font-medium">{plan.name}</td>
                        <td className="py-3 text-gray-300 text-xs">{plan.description}</td>
                        <td className="py-3 text-white">
                          <div>
                            <div>{plan.price} {plan.period}</div>
                            {plan.priceWithHosting && (
                              <div className="text-sm text-gray-400">{plan.priceWithHosting} {plan.periodWithHosting}</div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 text-blue-400 text-sm">{plan.timeframe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente y necesitas hablar?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contáctanos para discutir tu proyecto y obtener una propuesta personalizada.
              </p>
              <motion.button
                onClick={() => {
                  // Scroll to contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contactar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Solicitar Cotización - {selectedPlan?.name}
                </h3>
                <p className="text-gray-400 mt-1">
                  Cuéntanos sobre tu proyecto para darte una propuesta personalizada
                </p>
              </div>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center space-x-2"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>¡Solicitud enviada exitosamente! Te contactaremos pronto.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center space-x-2"
              >
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Error al enviar la solicitud. Por favor, intenta nuevamente.</span>
              </motion.div>
            )}

            {/* Quote Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Tu nombre"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="tu@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm disabled:opacity-50"
                    placeholder="+54 11 1234-5678"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Precio del Plan
                  </label>
                  {selectedPlan?.name === 'Personalizado' ? (
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm disabled:opacity-50"
                      placeholder="Ej: $2.500.000 o A discutir"
                      disabled={isSubmitting}
                    />
                  ) : selectedPlan?.name === 'Básico' ? (
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona el precio</option>
                      <option value="$500.000 (sin hosting)">$500.000 (sin hosting)</option>
                      <option value="$800.000 (con hosting)">$800.000 (con hosting)</option>
                    </select>
                  ) : selectedPlan?.name === 'Medio – E-Commerce' ? (
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona el precio</option>
                      <option value="$924.000 (sin hosting)">$924.000 (sin hosting)</option>
                      <option value="$1.732.500 (con hosting)">$1.732.500 (con hosting)</option>
                    </select>
                  ) : selectedPlan?.name === 'Pro – SaaS / Plataforma a medida' ? (
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona el precio</option>
                      <option value="$3.465.000 (sin hosting)">$3.465.000 (sin hosting)</option>
                      <option value="$4.200.000 (con hosting)">$4.200.000 (con hosting)</option>
                    </select>
                  ) : (
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona el precio</option>
                      <option value="to-discuss">A discutir</option>
                    </select>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline del Proyecto
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona un timeline</option>
                  <option value="1-2-weeks">1-2 semanas</option>
                  <option value="1-month">1 mes</option>
                  <option value="2-3-months">2-3 meses</option>
                  <option value="3-6-months">3-6 meses</option>
                  <option value="6+months">Más de 6 meses</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="project_details" className="block text-sm font-medium text-gray-300 mb-2">
                  Detalles del Proyecto *
                </label>
                <textarea
                  id="project_details"
                  name="project_details"
                  value={formData.project_details}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm resize-none disabled:opacity-50 ${
                    errors.project_details ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Describe tu proyecto en detalle: objetivos, funcionalidades requeridas, público objetivo, características especiales, etc..."
                  disabled={isSubmitting}
                />
                {errors.project_details && (
                  <p className="mt-1 text-sm text-red-400">{errors.project_details}</p>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <motion.button
                  type="button"
                  onClick={handleModalClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-800/50 text-white py-3 px-6 rounded-lg font-semibold border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  Cancelar
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Pricing;
