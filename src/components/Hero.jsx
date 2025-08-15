import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = (e) => {
      // Solo interceptar el primer scroll cuando estamos en el top
      if (window.scrollY === 0 && !hasScrolledRef.current) {
        e.preventDefault();
        hasScrolledRef.current = true;

        // Scroll suave a la primera sección
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const handleWheel = (e) => {
      if (window.scrollY === 0 && !hasScrolledRef.current) {
        e.preventDefault();
        hasScrolledRef.current = true;

        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const handleTouchStart = (e) => {
      if (window.scrollY === 0 && !hasScrolledRef.current) {
        const touch = e.touches[0];
        const startY = touch.clientY;

        const handleTouchEnd = (e) => {
          const endY = e.changedTouches[0].clientY;
          const diff = startY - endY;

          if (diff > 50) { // Scroll hacia abajo
            e.preventDefault();
            hasScrolledRef.current = true;

            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }

          document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd, { once: true });
      }
    };

    // Resetear cuando volvemos al top
    const checkScrollPosition = () => {
      if (window.scrollY === 0) {
        hasScrolledRef.current = false;
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <motion.section 
      className="h-screen relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onEnded={(e) => {
            // Asegurar que el video se reinicie
            e.target.currentTime = 0;
            e.target.play();
          }}
        >
          <source src="/video/tangodev-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 