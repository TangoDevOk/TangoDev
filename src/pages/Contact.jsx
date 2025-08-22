import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tangodev08@gmail.com",
      link: "mailto:tangodev08@gmail.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 11 6972-9914",
      link: "tel:+541169729914"
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
          <h1 className="hero-title text-5xl md:text-7xl tracking-wide leading-[1.2] text-white mb-6 font-gilroy">
            Hablemos de tu proyecto
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-gilroy">
            Estamos aquí para ayudarte a transformar tu idea en una realidad digital. Cuéntanos sobre tu proyecto.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 font-gilroy text-center">Envíanos un mensaje</h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 font-gilroy text-lg"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 font-gilroy text-lg"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 font-gilroy text-lg"
                  placeholder="Asunto"
                />
              </div>

              <div>
                <textarea
                  rows={8}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 resize-none font-gilroy text-lg"
                  placeholder="Mensaje (opcional)"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200 font-gilroy text-lg"
              >
                <Send className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 font-gilroy">Información de contacto</h2>
              <p className="text-white/60 leading-relaxed font-gilroy text-lg max-w-2xl mx-auto">
                Estamos disponibles para discutir tu proyecto y responder cualquier pregunta que tengas. 
                No dudes en contactarnos a través de cualquiera de estos medios.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={contact.link}
                    className="block bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-black/70 transition-all duration-300 hover:shadow-xl text-center"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold font-gilroy text-lg">{contact.title}</h3>
                        <p className="text-white/60 font-gilroy">{contact.value}</p>
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
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-white font-semibold mb-4 font-gilroy text-xl">Horarios de atención</h3>
              <p className="text-white/60 text-lg font-gilroy">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM<br />
                <span className="text-white/40 text-base">Respondemos en menos de 24 horas</span>
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
            <h2 className="text-3xl font-bold text-white mb-4 font-gilroy">Preguntas frecuentes</h2>
            <p className="text-white/60 font-gilroy">Resolvemos las dudas más comunes sobre nuestros servicios</p>
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
                <h3 className="text-white font-semibold mb-3 font-gilroy">{faq.question}</h3>
                <p className="text-white/60 text-sm font-gilroy">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
