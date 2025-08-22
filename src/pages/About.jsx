import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Award, Zap, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Tomás Martorelli",
      role: "Full Stack Developer",
      description: "Especialista en desarrollo web con React y Node.js. Apasionado por crear experiencias digitales únicas y funcionales.",
      image: "/images/tomas-martorelli.jpg",
      github: "https://github.com/tomasmartorelli",
      linkedin: "https://linkedin.com/in/tomasmartorelli",
      email: "tomas@tangodev.com",
      skills: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      name: "Nicolás Siciliano",
      role: "Frontend Developer",
      description: "Experto en diseño de interfaces y desarrollo frontend. Creador de experiencias visuales impactantes y responsivas.",
      image: "/images/nicolas-siciliano.jpg",
      github: "https://github.com/nicolassiciliano",
      linkedin: "https://linkedin.com/in/nicolassiciliano",
      email: "nicolas@tangodev.com",
      skills: ["React", "TypeScript", "Tailwind", "Framer Motion"]
    },
    {
      name: "Tomás Averbuj",
      role: "Backend Developer",
      description: "Desarrollador backend especializado en arquitecturas escalables y APIs robustas. Experto en bases de datos y seguridad.",
      image: "/images/tomas-averbuj.jpg",
      github: "https://github.com/tomasaverbuj",
      linkedin: "https://linkedin.com/in/tomasaverbuj",
      email: "tomas.a@tangodev.com",
      skills: ["Node.js", "PostgreSQL", "Docker", "Redis"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovación",
      description: "Buscamos constantemente las mejores tecnologías y metodologías para crear soluciones únicas."
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Cada línea de código está pensada para ofrecer la mejor experiencia y rendimiento."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos en equipo con nuestros clientes para asegurar que cada proyecto supere las expectativas."
    },
    {
      icon: Zap,
      title: "Agilidad",
      description: "Metodologías ágiles que nos permiten entregar resultados rápidos sin comprometer la calidad."
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "30+", label: "Clientes Satisfechos" },
    { number: "3", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Técnico" }
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
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200 font-gilroy"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </motion.div>

        {/* Page Title - Estilo Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="hero-title text-5xl md:text-7xl tracking-wide leading-[1.2] text-white mb-6 font-gilroy">
            Sobre
            <br />
            <span className="text-white/60">TangoDev</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-gilroy">
            Somos un equipo apasionado de desarrolladores que transforma ideas en experiencias digitales extraordinarias.
          </p>
        </motion.div>

        {/* Mission Section - Estilo consistente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-gilroy">Nuestra Misión</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6 font-gilroy">
                En TangoDev, creemos que la tecnología debe ser accesible, funcional y hermosa. 
                Nuestra misión es crear soluciones digitales que no solo resuelvan problemas, 
                sino que también inspiren y deleiten a los usuarios.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-gilroy">
                Trabajamos con startups, empresas establecidas y emprendedores para llevar sus 
                visiones al mundo digital con la más alta calidad y atención al detalle.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-gilroy">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                {[
                  "Desarrollo personalizado para cada proyecto",
                  "Tecnologías modernas y escalables",
                  "Soporte técnico continuo",
                  "Entregas a tiempo y dentro del presupuesto"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-white/70 font-gilroy">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Stats Section - Estilo Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-gilroy">
                  {stat.number}
                </div>
                <div className="text-white/60 font-gilroy">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section - Estilo consistente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-gilroy">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-gilroy">
                    {value.title}
                  </h3>
                  <p className="text-white/60 font-gilroy">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section - Integrado desde el primer golpe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          {/* Team Header - Estilo Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium font-gilroy">Nuestro Equipo</span>
            </div>
            <h2 className="hero-title text-4xl md:text-5xl tracking-wide leading-[1.2] text-white mb-6 font-gilroy">
              Conoce a
              <br />
              <span className="text-white/60">nuestro equipo</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-gilroy">
              Desarrolladores apasionados que transforman ideas en experiencias digitales extraordinarias.
            </p>
          </div>

          {/* Team Cards - Estilo moderno y consistente */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Developer Label */}
                  <div className="text-white/60 text-sm mb-4 font-gilroy">Desarrollador</div>
                  
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Name and Role */}
                    <div className="flex-1">
                      <div className="text-white font-semibold text-xl mb-1 font-gilroy">
                        {member.name}
                      </div>
                      <div className="text-white/70 text-sm font-gilroy">
                        {member.role}
                      </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-6 font-gilroy">
                    {member.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full font-gilroy"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center space-x-3">
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-white/50 hover:text-white transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Estilo consistente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-gilroy">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto font-gilroy">
              Estamos emocionados de conocer tu proyecto y ayudarte a llevarlo al siguiente nivel. 
              Contáctanos para comenzar esta increíble aventura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200 font-gilroy"
              >
                Contactar
              </Link>
              <Link 
                to="/projects"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 font-gilroy"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
