import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimated = ({ 
  children, 
  variants, 
  className = "", 
  threshold = 0.1, 
  triggerOnce = true,
  delay = 0,
  duration = 0.8,
  customVariants = null 
}) => {
  const { ref, controls } = useScrollAnimation(threshold, triggerOnce);

  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimated;
