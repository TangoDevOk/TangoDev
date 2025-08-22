import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const processSteps = [
    {
      number: "01",
      title: "Contacto",
      description: "Nos reunimos contigo para entender tus necesidades y objetivos."
    },
    {
      number: "02",
      title: "Investigación",
      description: "Analizamos el mercado y definimos la mejor estrategia para tu proyecto."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Diseñamos y desarrollamos la solución adaptada a tu negocio."
    },
    {
      number: "04",
      title: "Entrega y Resultados",
      description: "Lanzamos el producto, medimos resultados y optimizamos juntos."
    }
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{fontFamily: 'Montserrat, Arial, sans-serif'}}
          >
            Nuestro proceso de trabajo
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-16"
          >
            Te acompañamos en cada etapa para lograr el éxito de tu proyecto
          </motion.p>

          {/* Timeline visual fiel a la imagen */}
          <div className="relative w-full max-w-6xl mx-auto pt-2">
            {/* Línea horizontal detrás de los puntos */}
            <div className="absolute left-20 right-20 top-[72px] md:top-[92px] h-0.5 bg-gray-500 opacity-70 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative z-10">
              {processSteps.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center text-center px-2">
                  {/* Número */}
                  <div
                    className="text-[2.8rem] md:text-[4.5rem] font-bold"
                    style={{
                      color: '#bdbdbd',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      letterSpacing: '-2px',
                      lineHeight: 1,
                      marginBottom: '0.2rem',
                      marginTop: 0
                    }}
                  >
                    {step.number}
                  </div>
                  {/* Punto blanco */}
                  <div
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full mb-4"
                    style={{
                      background: '#fff',
                      border: '2px solid #222',
                      boxShadow: '0 0 0 2px #181818',
                      marginTop: '0.2rem',
                      marginBottom: '1.2rem'
                    }}
                  ></div>
                  {/* Título */}
                  <div className="font-bold text-base md:text-lg text-white mb-1" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{step.title}</div>
                  {/* Descripción */}
                  <div className="text-xs md:text-sm text-gray-200 max-w-xs mx-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{step.description}</div>
                </div>
              ))}
            </div>
            {/* Espacio para que la timeline no tape el contenido */}
            <div className="invisible md:visible" style={{height: '180px'}}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;


