import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SmoothScrollAnimated = ({ 
  children, 
  variants, 
  className = "", 
  threshold = 0.1, 
  triggerOnce = false,
  delay = 0,
  duration = 0.8,
  customVariants = null,
  exitAnimation = true
}) => {
  const { ref, controls, inView } = useScrollAnimation(threshold, triggerOnce);

  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: exitAnimation ? {
      opacity: 0,
      y: -80,
      scale: 0.9,
      rotateX: -10,
      transition: {
        duration: duration * 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    } : {},
  };

  const animationVariants = customVariants || variants || defaultVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={animationVariants}
        className={className}
        layout
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SmoothScrollAnimated;
