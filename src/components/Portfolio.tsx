import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    { title: 'AI E-commerce Platform', desc: 'AI-driven recommendations and dynamic pricing.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/161b22/ff0040.png' },
    { title: 'Smart Analytics Dashboard', desc: 'Real-time analytics with predictive business insights.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/ff1744.png' },
    { title: 'Mobile-First SaaS App', desc: 'Cross-platform app with cloud sync and offline features.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/161b22/ffffff.png' },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" ref={ref} className="bg-github-dark section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title gradient-text">Portfolio & Projects</h2>
          <p className="section-subtitle mb-20">
            A glimpse into our innovative solutions that demonstrate our commitment to excellence and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
              className="bg-github-darker rounded-xl border border-github-border overflow-hidden group"
            >
              <div className="overflow-hidden h-48">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-github-text mb-2">{project.title}</h3>
                <p className="text-github-muted mb-4">{project.desc}</p>
                <span className="text-sm font-semibold text-github-accent">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
