import { motion } from 'framer-motion';
import { User, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStartup",
      content: "TangoDev transformó completamente nuestra presencia digital. El equipo entregó un sitio web que superó todas nuestras expectativas.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      role: "Founder, DigitalAgency",
      content: "Increíble experiencia trabajando con TangoDev. Desarrollaron nuestra aplicación SaaS en tiempo récord, con funcionalidades avanzadas.",
      avatar: "CR"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Title & Stats */}
          <div className="space-y-12">
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <User className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Testimonios</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Lo que dicen
                <br />
                <span className="text-white/60">nuestros clientes</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Lee testimonios reales de nuestros usuarios en todo el mundo.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-5xl font-bold text-white">20k+</div>
              <div className="text-white/60 text-lg">Usuarios</div>
            </motion.div>
          </div>

          {/* Right Column - Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                  
                  {/* User Label */}
                  <div className="text-white/60 text-sm mb-3">Usuario</div>
                  
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Name */}
                    <div className="text-white font-semibold text-xl">
                      {testimonial.name}
                    </div>
                    
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      <span className="text-white text-lg font-semibold">
                        {testimonial.avatar}
                      </span>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-white/70 text-base leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Role */}
                  <div className="text-white/50 text-sm mt-4">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
