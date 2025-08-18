import { motion } from 'framer-motion';
import { Users, Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Tomás Martorelli",
      role: "Full Stack Developer",
      description: "Especialista en desarrollo web con React y Node.js. Apasionado por crear experiencias digitales únicas y funcionales.",
      image: "/images/tomas-martorelli.jpg",
      github: "https://github.com/tomasmartorelli",
      linkedin: "https://linkedin.com/in/tomasmartorelli",
      email: "tomas@tangodev.com"
    },
    {
      name: "Nicolás Siciliano",
      role: "Frontend Developer",
      description: "Experto en diseño de interfaces y desarrollo frontend. Creador de experiencias visuales impactantes y responsivas.",
      image: "/images/nicolas-siciliano.jpg",
      github: "https://github.com/nicolassiciliano",
      linkedin: "https://linkedin.com/in/nicolassiciliano",
      email: "nicolas@tangodev.com"
    },
    {
      name: "Tomás Averbuj",
      role: "Backend Developer",
      description: "Desarrollador backend especializado en arquitecturas escalables y APIs robustas. Experto en bases de datos y seguridad.",
      image: "/images/tomas-averbuj.jpg",
      github: "https://github.com/tomasaverbuj",
      linkedin: "https://linkedin.com/in/tomasaverbuj",
      email: "tomas.a@tangodev.com"
    }
  ];

  return (
    <section id="team" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Single Column Layout */}
        <div className="space-y-16">
          
          {/* Title & Stats Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full gap-12">
            {/* Left Side - Badge, Title & Description */}
            <div className="space-y-12 flex-1">
              {/* Section Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-3 bg-black border border-white/20 rounded-full px-4 py-2"
              >
                <Users className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Nuestro Equipo</span>
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
                  Conoce a
                  <br />
                  <span className="text-white/60">nuestro equipo</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed w-full">
                  Desarrolladores apasionados que transforman ideas en experiencias digitales extraordinarias.
                </p>
              </motion.div>
            </div>

                         {/* Right Side - Stats */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="space-y-2 lg:text-right lg:self-end"
             >
               <div className="text-5xl font-bold text-white">3</div>
               <div className="text-white/60 text-lg">Desarrolladores Expertos</div>
             </motion.div>
          </div>

          {/* Team Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-black/70 transition-all duration-300 hover:shadow-xl w-full h-full">
                  
                  {/* Developer Label */}
                  <div className="text-white/60 text-sm mb-3">Desarrollador</div>
                  
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Name and Role */}
                    <div className="flex-1">
                      <div className="text-white font-semibold text-xl mb-1">
                        {member.name}
                      </div>
                      <div className="text-white/70 text-sm">
                        {member.role}
                      </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
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
        </div>
      </div>
    </section>
  );
};

export default Team;
