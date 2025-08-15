import { motion } from 'framer-motion';
import { Rocket, Heart, Zap, Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Desarrollo Web', href: '#web-development' },
      { name: 'Aplicaciones Móviles', href: '#mobile-apps' },
      { name: 'Diseño UI/UX', href: '#ui-ux-design' },
      { name: 'Consultoría IT', href: '#it-consulting' },
      { name: 'Mantenimiento', href: '#maintenance' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestro Equipo', href: '#team' },
      { name: 'Carreras', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contacto', href: '#contact' }
    ],
    legal: [
      { name: 'Términos de Servicio', href: '#terms' },
      { name: 'Política de Privacidad', href: '#privacy' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Licencias', href: '#licenses' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/3 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Company Section - Flexible width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              {/* Logo Section */}
              <div className="mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center mb-6"
                >
                  <img 
                    src="/images/tangodev1blanco.png" 
                    alt="TangoDev Logo" 
                    className="h-72 w-auto object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section - Flexible width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
                  {Object.entries(footerLinks).map(([category, links], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-6 capitalize flex items-center">
                        {category === 'servicios' && <Rocket className="w-5 h-5 text-blue-400 mr-2" />}
                        {category === 'empresa' && <Heart className="w-5 h-5 text-red-400 mr-2" />}
                        {category === 'legal' && <Zap className="w-5 h-5 text-yellow-400 mr-2" />}
                        {category}
                      </h4>
                      <ul className="space-y-3">
                        {links.map((link, linkIndex) => (
                          <motion.li
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + linkIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <a
                              href={link.href}
                              className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-2 transform inline-block group"
                            >
                              <span className="relative">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="lg:w-1/3"
                >
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Mail className="w-5 h-5 text-green-400 mr-2" />
                    Contacto
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Email</div>
                        <div className="text-white text-sm">tangodev08@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-200">
                        <Phone className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Teléfono</div>
                        <div className="text-white text-sm">+54 11 1234-5678</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-200">
                        <MapPin className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Ubicación</div>
                        <div className="text-white text-sm">Buenos Aires, Argentina 🇦🇷</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-3">Síguenos en redes sociales</h5>
              <p className="text-gray-400 text-sm">Mantente conectado con las últimas novedades</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/30 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TangoDev. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 