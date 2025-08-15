import { motion } from 'framer-motion';
import { Globe, Target, Rocket } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';

const Services = () => {
  const services = [
    {
      number: '1',
      icon: Globe,
      title: 'Smooth',
      description: 'Desarrollo web fluido y optimizado'
    },
    {
      number: '2',
      icon: Target,
      title: 'Reliable',
      description: 'Soluciones confiables y escalables'
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Customizable',
      description: 'Adaptable a tus necesidades específicas'
    }
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout como la referencia: texto a la izquierda, CardSwap a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center min-h-[600px]">
          {/* Texto a la izquierda - Estilo React Bits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Nuestros servicios para tu próximo proyecto
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed"
            >
              Desde el diseño y desarrollo web hasta la optimización y escalabilidad, tenemos todo lo que tu plataforma necesita para crecer.
            </motion.p>
          </motion.div>

          {/* CardSwap a la derecha - Estilo React Bits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative h-[600px] flex justify-center items-center"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={true}
              width={500}
              height={400}
            >
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="bg-neutral-900/90 backdrop-blur-xl border border-white/20 p-8"
                >
                  <div className="h-full flex flex-col">
                    {/* Header de la card como en la referencia */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <span className="text-white font-medium text-lg">{service.title}</span>
                    </div>
                    
                    {/* Número estilizado como en la referencia */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        {/* Número principal con estilos geométricos */}
                        <div className="text-8xl font-black text-white" style={{ fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                          {service.number}
                        </div>
                        
                        {/* Elementos decorativos como en la referencia */}
                        {index === 0 && (
                          <>
                            {/* Barra superior con colores */}
                            <div className="absolute -top-4 left-0 w-16 h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-sm"></div>
                            {/* Líneas diagonales azules */}
                            <div className="absolute top-2 left-0 w-2 h-16 bg-blue-400 transform rotate-12"></div>
                            <div className="absolute top-4 left-2 w-2 h-12 bg-blue-400 transform rotate-12"></div>
                            {/* Elemento púrpura */}
                            <div className="absolute bottom-2 left-0 w-4 h-4 bg-purple-400 rounded-sm"></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 