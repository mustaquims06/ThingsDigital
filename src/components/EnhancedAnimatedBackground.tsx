import React from 'react';
import { motion } from 'framer-motion';

const EnhancedAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {/* Enhanced Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(9, 105, 218, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 64, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Aurora-like Background Waves */}
      <motion.div
        className="absolute top-0 left-1/2 w-[120%] h-96"
        style={{
          background: 'radial-gradient(ellipse, rgba(9, 105, 218, 0.15) 0%, rgba(255, 0, 64, 0.08) 50%, transparent 100%)',
          filter: 'blur(120px)',
        }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 10, -5, 0],
          x: ['-50%', '-45%', '-55%', '-50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Multiple Floating Orbs with Navy Blue */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-80 h-80"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,64,0.12) 0%, rgba(31, 41, 55, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.4, 0.8, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[8%] right-[12%] w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(9, 105, 218, 0.1) 0%, rgba(255, 23, 68, 0.06) 40%, transparent 70%)',
          filter: 'blur(110px)',
        }}
        animate={{
          x: [0, -80, 100, 0],
          y: [0, 60, -80, 0],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[15%] w-96 h-96"
        style={{
          background: 'radial-gradient(circle, rgba(31, 41, 55, 0.15) 0%, rgba(9, 105, 218, 0.08) 60%, transparent 80%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -40, 60, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15
        }}
      />

      {/* Subtle scanlines effect */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(9, 105, 218, 0.3) 2px, rgba(9, 105, 218, 0.3) 4px)',
        }}
      />
    </div>
  );
};

export default EnhancedAnimatedBackground;
