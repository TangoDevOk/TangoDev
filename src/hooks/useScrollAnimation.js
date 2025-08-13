import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = false) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px 0px -50px 0px',
    skip: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};

// Variantes de animación predefinidas
export const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -150,
    scale: 0.9,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: -150,
    scale: 0.9,
    rotateY: -15,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 150,
    scale: 0.9,
    rotateY: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: 150,
    scale: 0.9,
    rotateY: 15,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const staggerContainer = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
