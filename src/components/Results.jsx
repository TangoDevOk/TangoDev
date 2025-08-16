import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const Results = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto cuesta un sitio web?",
      answer: "Nuestros precios varían según la complejidad del proyecto. Tenemos planes desde $500.000 para sitios básicos hasta $3.465.000 para aplicaciones empresariales completas."
    },
    {
      question: "¿Puedo probar antes de contratar?",
      answer: "Sí, ofrecemos una consulta gratuita donde analizamos tu proyecto y te damos una propuesta personalizada sin compromiso."
    },
    {
      question: "¿Cuál es la diferencia entre un sitio web y una aplicación web?",
      answer: "Un sitio web es informativo y estático, mientras que una aplicación web es interactiva, con funcionalidades como login, base de datos, pagos, etc."
    },
    {
      question: "¿No es lo mismo que usar plantillas de WordPress?",
      answer: "No, desarrollamos código personalizado desde cero. Las plantillas son genéricas, nosotros creamos soluciones únicas para tu negocio."
    },
    {
      question: "¿Qué tan efectivo es para generar ventas?",
      answer: "Nuestros clientes han aumentado sus conversiones hasta 340% y su ROI hasta 15x. Cada proyecto está optimizado para conversiones."
    },
    {
      question: "¿Puedo mantener los datos de mis clientes?",
      answer: "Absolutamente. Tú eres dueño de todos los datos y el código. Te damos acceso completo y capacitación para manejar tu plataforma."
    },
    {
      question: "¿Puedo usar sin Shopify u otras plataformas?",
      answer: "Sí, desarrollamos soluciones completamente independientes. No dependes de terceros, tienes control total sobre tu plataforma."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Si no encuentras una respuesta aquí, contáctanos directamente por WhatsApp, 
            envíanos un email o consulta en nuestras redes sociales.
          </p>
        </motion.div>

        {/* FAQ Items - Accordion Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
                             {/* FAQ Item Container */}
                               <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 text-left"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                 <div className="flex items-center justify-between">
                   <h3 className="text-lg font-semibold text-white pr-8 group-hover:text-gray-200 transition-colors duration-300">
                     {faq.question}
                   </h3>
                   <motion.div 
                     className="flex items-center justify-center flex-shrink-0"
                     animate={{ rotate: openIndex === index ? 45 : 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <Plus className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                   </motion.div>
                 </div>
                
                                 {/* Answer - Animated */}
                 <motion.div
                   initial={false}
                   animate={{ 
                     height: openIndex === index ? "auto" : 0,
                     opacity: openIndex === index ? 1 : 0
                   }}
                   transition={{ duration: 0.3, ease: "easeInOut" }}
                   className="overflow-hidden"
                 >
                                      <div className="pt-4 mt-4">
                     <p className="text-white/80 leading-relaxed">
                       {faq.answer}
                     </p>
                   </div>
                 </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
