import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParticleBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 75]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particle 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Particle 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full blur-sm"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Particle 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-400/35 rounded-full blur-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Particle 4 */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-80 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full blur-sm"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Particle 5 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-32 left-1/2 w-1.5 h-1.5 bg-green-400/30 rounded-full blur-sm"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      {/* Particle 6 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-96 left-1/3 w-1 h-1 bg-yellow-400/35 rounded-full blur-sm"
        animate={{
          scale: [1, 1.9, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />
    </div>
  );
};

export default ParticleBackground;
