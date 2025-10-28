import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Technologies: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tech = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'React Native', 'Flutter','OpenAI API'
    
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150 } },
  };

  return (
    <section id="technologies" ref={ref} className="bg-github-darker section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title gradient-text">Technologies & Approach</h2>
          <p className="section-subtitle mb-20">
            We leverage a modern, robust tech stack to build scalable, performant, and future-ready solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {tech.map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ y: -5, color: '#ff0040' }}
              className="bg-github-dark px-5 py-2 rounded-md border border-github-border text-github-text font-medium cursor-default transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
