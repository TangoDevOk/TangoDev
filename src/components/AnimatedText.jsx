import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  animationType = "fadeInUp"
}) => {
  const { ref, controls } = useScrollAnimation(0.1, true);

  const getVariants = () => {
    switch (animationType) {
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 30 },
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
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case "scaleIn":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
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
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
