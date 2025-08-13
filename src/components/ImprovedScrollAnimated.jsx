import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const ImprovedScrollAnimated = ({ 
  children, 
  variants, 
  className = "", 
  threshold = 0.1, 
  triggerOnce = true,
  delay = 0,
  duration = 0.6,
  customVariants = null
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-20px 0px -20px 0px',
    skip: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const animationVariants = customVariants || variants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className={className}
      style={{ 
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ImprovedScrollAnimated;
