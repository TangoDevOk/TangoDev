import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@tangodev.com",
      link: "mailto:hola@tangodev.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 11 1234-5678",
      link: "tel:+541112345678"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: "#"
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
            Hablemos
            <br />
            <span className="text-white/60">de tu proyecto</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu idea en una realidad digital. Cuéntanos sobre tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Envíanos un mensaje</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors duration-200"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Información de contacto</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Estamos disponibles para discutir tu proyecto y responder cualquier pregunta que tengas. 
                No dudes en contactarnos a través de cualquiera de estos medios.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={contact.link}
                    className="block bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-black/70 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{contact.title}</h3>
                        <p className="text-white/60">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-3">Horarios de atención</h3>
              <p className="text-white/60 text-sm">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM<br />
                <span className="text-white/40">Respondemos en menos de 24 horas</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas frecuentes</h2>
            <p className="text-white/60">Resolvemos las dudas más comunes sobre nuestros servicios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Cuánto tiempo toma desarrollar un proyecto?",
                answer: "El tiempo varía según la complejidad. Proyectos simples pueden tomar 2-4 semanas, mientras que aplicaciones complejas pueden requerir 2-3 meses."
              },
              {
                question: "¿Ofrecen mantenimiento post-lanzamiento?",
                answer: "Sí, ofrecemos planes de mantenimiento y soporte técnico para asegurar que tu proyecto funcione perfectamente."
              },
              {
                question: "¿Trabajan con presupuestos específicos?",
                answer: "Absolutamente. Adaptamos nuestras soluciones a tu presupuesto sin comprometer la calidad del resultado final."
              },
              {
                question: "¿Proporcionan hosting y dominio?",
                answer: "Sí, podemos gestionar el hosting, dominio y certificados SSL para que tu proyecto esté listo para funcionar."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-white/60 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
