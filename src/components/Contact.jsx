import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { sendContactEmail, validateContactForm, initEmailJS } from '../utils/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Inicializar EmailJS cuando el componente se monta
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
        setErrors({});
        
        // Limpiar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'info@tangodev.com',
      link: 'mailto:info@tangodev.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+54 11 1234-5678',
      link: 'tel:+541112345678'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Buenos Aires, Argentina',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para transformar tu presencia digital? Cuéntanos sobre tu proyecto 
            y te ayudaremos a crear la solución perfecta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
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
                <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
              </motion.div>
            )}

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
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="+54 11 1234-5678"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Presupuesto Estimado
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm ${
                      errors.budget ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Ej: $500.000 - $1.000.000"
                    disabled={isSubmitting}
                  />
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white backdrop-blur-sm disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web-design">Diseño Web</option>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="saas-platform">SaaS / Plataforma</option>
                  <option value="ui-ux">Diseño UI/UX</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="mobile-app">App Móvil</option>
                  <option value="consulting">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 backdrop-blur-sm resize-none disabled:opacity-50 ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto, objetivos, presupuesto y cualquier detalle que consideres importante..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-white/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-blue-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Horarios de Atención</h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <p><strong>Lunes - Viernes:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-green-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Tiempo de Respuesta
              </h4>
              <p className="text-gray-300">
                Respondemos a todas las consultas en menos de 24 horas durante días hábiles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 