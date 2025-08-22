import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const ServiceCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos que convierten visitantes en clientes. Utilizamos las últimas tecnologías para garantizar velocidad, seguridad y escalabilidad.",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Frontend & Backend",
      details: [
        "Sitios web responsivos y modernos",
        "Optimización SEO y rendimiento",
        "Integración con sistemas existentes",
        "Mantenimiento y soporte continuo"
      ]
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: "Desarrollamos aplicaciones móviles nativas e híbridas que ofrecen experiencias de usuario excepcionales en iOS y Android.",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      category: "Mobile Development",
      details: [
        "Apps nativas iOS y Android",
        "Desarrollo híbrido con React Native",
        "Integración con APIs y servicios",
        "Publicación en App Store y Google Play"
      ]
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Construimos plataformas de comercio electrónico completas con pasarelas de pago, gestión de inventario y análisis avanzados.",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "E-commerce Solutions",
      details: [
        "Plataformas completas de e-commerce",
        "Integración con pasarelas de pago",
        "Gestión de inventario y pedidos",
        "Analytics y reportes avanzados"
      ]
    },
    {
      id: 4,
      title: "Consultoría Digital",
      description: "Asesoramos en estrategias digitales, optimización de procesos y transformación tecnológica para impulsar tu negocio.",
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      category: "Digital Strategy",
      details: [
        "Auditoría y análisis de sistemas",
        "Estrategias de transformación digital",
        "Optimización de procesos empresariales",
        "Capacitación y transferencia de conocimiento"
      ]
    }
  ];

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Calcular el ancho de la card expandida
  const getExpandedCardWidth = () => {
    const totalCards = services.length;
    const normalCardWidth = 300;
    const availableWidth = 1200; // Ancho aproximado del contenedor
    const otherCardsWidth = (totalCards - 1) * normalCardWidth;
    const expandedWidth = availableWidth - otherCardsWidth;
    return Math.max(expandedWidth, 500);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-gilroy">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-gilroy">
            Soluciones digitales integrales para hacer crecer tu negocio
          </p>
        </motion.div>

        {/* Service Cards Container */}
        <div className="relative">
          <div className={`flex transition-all duration-700 gap-8 justify-center`}>
            {services.map((service, index) => {
              const isExpanded = expandedCard === service.id;
              const expandedIndex = expandedCard ? services.findIndex(s => s.id === expandedCard) : -1;
              
              // Determinar si esta card debe tener margen negativo para pegarse a la expandida
              let marginLeft = 0;
              if (expandedCard && !isExpanded) {
                if (index === expandedIndex + 1) {
                  // La card que está justo después de la expandida se pega a ella
                  marginLeft = -16; // -gap-4 (16px) en lugar de -32px para dejar un pequeño padding
                }
              }
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    width: isExpanded ? getExpandedCardWidth() : 300,
                    flexShrink: isExpanded ? 0 : 0,
                    marginLeft: marginLeft,
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: "easeInOut",
                    delay: index * 0.1 
                  }}
                  className={`group relative h-[500px]`}
                >
                  <div 
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 h-full rounded-2xl`}
                    onClick={() => handleCardClick(service.id)}
                  >
                    {/* Background with gradient */}
                    <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: service.background }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* Top section */}
                      <div>
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <span className="text-xs font-medium text-white/90 font-gilroy">
                            {service.category}
                          </span>
                        </div>
                        <h3 className={`font-bold text-white mb-4 font-gilroy ${
                          isExpanded ? 'text-2xl' : 'text-xl'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-white/80 leading-relaxed font-gilroy ${
                          isExpanded ? 'text-sm' : 'text-sm'
                        }`}>
                          {service.description}
                        </p>
                        
                        {/* Expanded content - Horizontal layout */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="mt-6 overflow-hidden"
                            >
                              <h4 className="text-base font-semibold text-white mb-3 font-gilroy">
                                Características principales:
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                {service.details.map((detail, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="flex items-center text-white/80 font-gilroy text-sm"
                                  >
                                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 flex-shrink-0"></div>
                                    {detail}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {/* Bottom section with arrow/close button */}
                      <div className="flex justify-center">
                        <motion.div
                          className={`backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'w-10 h-10 bg-red-500/20 hover:bg-red-500/30'
                              : 'w-10 h-10 bg-white/20 group-hover:bg-white/30'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isExpanded ? (
                            <X className="w-4 h-4 text-white" />
                          ) : (
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                          )}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
