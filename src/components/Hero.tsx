import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code } from 'lucide-react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  const initializeTyped = useCallback(() => {
    if (typedElement.current && !typedInstance.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["Web Development", "App Development", "AI Integration", "Digital Marketing", "Business Solutions"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
        backDelay: 2500,
        startDelay: 500,
      });
    }
  }, []);

  useEffect(() => {
    initializeTyped();
    return () => {
      typedInstance.current?.destroy();
      typedInstance.current = null;
    };
  }, [initializeTyped]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center overflow-hidden section-padding">
      <div className="section-container">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-github-darker/50 border border-github-border rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="text-github-accent animate-pulse" size={18} />
            <span className="text-github-text font-medium text-sm">Founded in 2025 • Nashik, India</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text animate-gradient">
            Things Digital
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-github-text mb-10 h-10">
            Innovating with <span className="text-github-accent font-semibold" ref={typedElement}></span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-github-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming businesses through cutting-edge technology, artificial intelligence, and innovative digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(255, 0, 64, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-github-accent text-white font-semibold rounded-lg shadow-lg"
            >
              <Code className="mr-2" size={20} />
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255, 0, 64, 0.8)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-github-border text-github-text font-semibold rounded-lg hover:bg-github-darker hover:border-github-accent transition-all"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
