import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10+', label: 'Proyectos Innovadores' },
    { icon: Award, number: '100%', label: 'Dedicación Total' },
    { icon: Clock, number: '24/7', label: 'Disponibilidad' },
    { icon: TrendingUp, number: '∞', label: 'Potencial de Crecimiento' }
  ];

  const values = [
    {
      title: 'Ideas Frescas',
      description: 'Somos una startup joven con mentes creativas y enfoques innovadores para cada proyecto.'
    },
    {
      title: 'Innovación Argentina',
      description: 'Combinamos la pasión argentina con las mejores tecnologías globales para crear soluciones únicas.'
    },
    {
      title: 'Flexibilidad Total',
      description: 'Como startup, nos adaptamos rápidamente a las necesidades cambiantes de tu proyecto.'
    },
    {
      title: 'Crecimiento Juntos',
      description: 'No solo desarrollamos tu proyecto, crecemos junto a ti en este viaje emprendedor.'
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
                Somos <strong>TangoDev</strong>, una startup argentina nacida de la pasión por la tecnología 
                y la innovación. Nuestro equipo joven y dinámico está listo para encarar 
                proyectos nuevos con ideas frescas y enfoques disruptivos.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Como startup, entendemos los desafíos de emprender y creemos en el poder 
                de las ideas innovadoras. Estamos aquí para transformar tu visión en 
                realidad digital, con la flexibilidad y creatividad que solo una startup puede ofrecer.
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

        {/* Startup Spirit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              El Espíritu <span className="gradient-text">Startup</span> 🇦🇷
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
              Como startup argentina, traemos la pasión, creatividad y determinación que caracteriza 
              a los emprendedores de nuestro país. Estamos aquí para romper las reglas, 
              innovar sin límites y crear soluciones que marquen la diferencia.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="text-white font-semibold mb-2">Innovación Disruptiva</h4>
                <p className="text-gray-400 text-sm">Pensamos fuera de la caja</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-white font-semibold mb-2">Velocidad de Ejecución</h4>
                <p className="text-gray-400 text-sm">Resultados rápidos y efectivos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="text-white font-semibold mb-2">Enfoque en Resultados</h4>
                <p className="text-gray-400 text-sm">Tu éxito es nuestro éxito</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Nuestro <span className="gradient-text">Equipo</span> 🇦🇷
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Tomas Averbuj',
                role: 'Desarrollador Full Stack',
                description: 'Especialista en React, Node.js y tecnologías modernas. Apasionado por crear soluciones innovadoras.',
                image: '/images/tomas-averbuj.jpg'
              },
              {
                name: 'Nicolas Siciliano',
                role: 'Desarrollador Full Stack',
                description: 'Especialista en React, Vue.js y tecnologías backend. Creador de aplicaciones completas y escalables.',
                image: '/images/nicolas-siciliano.jpg'
              },
              {
                name: 'Tomas Martorelli',
                role: 'Desarrollador Full Stack & Diseñador',
                description: 'Desarrollador full stack con especialización en diseño UI/UX. Creador de experiencias digitales excepcionales.',
                image: '/images/tomas-martorelli.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-500/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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