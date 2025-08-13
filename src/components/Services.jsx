import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, cardVariants, slideInLeft, slideInRight, scaleIn } from '../hooks/useScrollAnimation';
import ScrollAnimated from './ScrollAnimated';
import StableScrollAnimated from './StableScrollAnimated';
import ParticleBackground from './ParticleBackground';

const Services = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation(0.2, true);
  const { ref: gridRef, controls: gridControls } = useScrollAnimation(0.1, true);
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation(0.1, true);
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation(0.1, true);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-2xl"></div>
        <ParticleBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={scaleIn}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-2xl font-bold text-white uppercase tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
              }
            }}
          >
            Soluciones Digitales Integrales
          </motion.h2>
        </motion.div>

        {/* Main Grid - 2x2 Layout */}
        <StableScrollAnimated 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          threshold={0.1}
          triggerOnce={true}
        >
          
          {/* Top Left - Text Block (Blue) - Desarrollo */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 h-80 flex flex-col justify-center border border-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            <motion.h3 
              className="text-3xl font-bold text-blue-400 mb-4"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
            >
              Desarrollo Web & Apps
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.4, duration: 0.6 }
                }
              }}
            >
              Desarrollamos aplicaciones web y móviles robustas, escalables y de alto rendimiento. 
              Utilizamos las últimas tecnologías para crear soluciones que impulsan tu negocio al siguiente nivel.
            </motion.p>
          </motion.div>

          {/* Top Right - Image Block - Desarrollo */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl overflow-hidden h-80 bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <motion.img
              src="/images/web-dev.png"
              alt="Desarrollo Web"
              className="w-full h-full object-contain"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.8 }
                }
              }}
            />
          </motion.div>

          {/* Bottom Left - Image Block - Diseño */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl overflow-hidden h-80 bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <motion.img
              src="/images/web-desing.png"
              alt="Diseño Web"
              className="w-full h-full object-contain"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.4, duration: 0.8 }
                }
              }}
            />
          </motion.div>

          {/* Bottom Right - Text Block (Purple) - Marketing */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-8 h-80 flex flex-col justify-center border border-purple-500/30 hover:scale-105 transition-transform duration-300"
          >
            <motion.h3 
              className="text-3xl font-bold text-purple-400 mb-4"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
            >
              Marketing & SEO
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.4, duration: 0.6 }
                }
              }}
            >
              Impulsamos tu presencia digital con estrategias de marketing efectivas y 
              optimización SEO. Llegamos a tu audiencia objetivo y convertimos visitantes en clientes.
            </motion.p>
          </motion.div>

        </StableScrollAnimated>

        {/* Services Section */}
        <StableScrollAnimated
          variants={staggerContainer}
          className="mt-20 text-center"
          threshold={0.1}
          triggerOnce={true}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-8"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
              }
            }}
          >
            Nuestros <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Servicios</span>
          </motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4"
                variants={{
                  hidden: { scale: 0, rotate: -180 },
                  visible: { 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.2, duration: 0.6 }
                  }
                }}
              >
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <motion.h4 
                className="text-lg font-semibold text-white mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3, duration: 0.6 }
                  }
                }}
              >
                Desarrollo Web
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.6 }
                  }
                }}
              >
                Aplicaciones web robustas y escalables con las últimas tecnologías
              </motion.p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4"
                variants={{
                  hidden: { scale: 0, rotate: -180 },
                  visible: { 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.3, duration: 0.6 }
                  }
                }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <motion.h4 
                className="text-lg font-semibold text-white mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.6 }
                  }
                }}
              >
                Apps Móviles
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.6 }
                  }
                }}
              >
                Desarrollo de aplicaciones nativas y multiplataforma
              </motion.p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4"
                variants={{
                  hidden: { scale: 0, rotate: -180 },
                  visible: { 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.4, duration: 0.6 }
                  }
                }}
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <motion.h4 
                className="text-lg font-semibold text-white mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.6 }
                  }
                }}
              >
                Diseño Web
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.6 }
                  }
                }}
              >
                Interfaces modernas y atractivas que cautivan a tus usuarios
              </motion.p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4"
                variants={{
                  hidden: { scale: 0, rotate: -180 },
                  visible: { 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.5, duration: 0.6 }
                  }
                }}
              >
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </motion.div>
              <motion.h4 
                className="text-lg font-semibold text-white mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.6 }
                  }
                }}
              >
                Marketing Digital
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.7, duration: 0.6 }
                  }
                }}
              >
                Estrategias de marketing que generan resultados medibles
              </motion.p>
            </motion.div>
          </motion.div>
        </StableScrollAnimated>


      </div>
    </section>
  );
};

export default Services; 