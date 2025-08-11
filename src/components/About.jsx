import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Clientes Satisfechos' },
    { icon: Award, number: '100+', label: 'Proyectos Completados' },
    { icon: Clock, number: '5+', label: 'Años de Experiencia' },
    { icon: TrendingUp, number: '95%', label: 'Tasa de Éxito' }
  ];

  const values = [
    {
      title: 'Innovación Constante',
      description: 'Siempre al día con las últimas tecnologías y tendencias del mercado.'
    },
    {
      title: 'Calidad Premium',
      description: 'Cada proyecto se desarrolla con los más altos estándares de calidad.'
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe atención individualizada y soluciones a medida.'
    },
    {
      title: 'Resultados Medibles',
      description: 'Nos enfocamos en generar resultados tangibles para tu negocio.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Sobre <span className="gradient-text">TangoDev</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                Somos un equipo apasionado de desarrolladores, diseñadores y especialistas 
                en marketing digital. Nuestra misión es transformar ideas en experiencias 
                digitales excepcionales que impulsen el crecimiento de tu negocio.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Con años de experiencia en el sector, hemos ayudado a empresas de todos 
                los tamaños a alcanzar sus objetivos digitales y posicionarse en el mercado.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Nuestro <span className="gradient-text">Equipo</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Rodríguez',
                role: 'Desarrollador Frontend',
                description: 'Especialista en React, Vue.js y tecnologías modernas.'
              },
              {
                name: 'Ana Martínez',
                role: 'Diseñadora UI/UX',
                description: 'Creadora de experiencias digitales excepcionales.'
              },
              {
                name: 'Luis González',
                role: 'Especialista en Marketing',
                description: 'Estrategias digitales que generan resultados.'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 