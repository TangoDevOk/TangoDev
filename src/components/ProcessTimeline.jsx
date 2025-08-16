import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const processSteps = [
    {
      number: "01",
      title: "Contact me",
      description: "Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis."
    },
    {
      number: "02",
      title: "Research",
      description: "Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis."
    },
    {
      number: "03",
      title: "Work",
      description: "Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis."
    },
    {
      number: "04",
      title: "Test & results",
      description: "Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          >
            Proven process for success
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-16"
          >
            We help you on every step of the journey
          </motion.p>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gray-700"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"></div>
                  
                  <div className="text-center pt-8">
                    <div className="text-6xl font-bold text-gray-700 mb-4">{step.number}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

