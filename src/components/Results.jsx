import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Results = () => {
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

  return (
    <section id="faq" className="py-32 bg-violet-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pt-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
              ¿Tienes Preguntas?
            </h2>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-20"
          >
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="py-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-800 pr-8">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <Plus className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
