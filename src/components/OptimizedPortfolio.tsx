import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const OptimizedPortfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    { 
      title: 'AI E-commerce Platform', 
      desc: 'AI-driven recommendations and dynamic pricing system with real-time analytics.', 
      img: 'https://picsum.photos/600/400?random=1',
      tech: ['React', 'AI/ML', 'Node.js'],
      status: 'Coming Soon'
    },
    { 
      title: 'Smart Analytics Dashboard', 
      desc: 'Real-time business intelligence dashboard with predictive insights.', 
      img: 'https://picsum.photos/600/400?random=2',
      tech: ['TypeScript', 'D3.js', 'Python'],
      status: 'In Development'
    },
    { 
      title: 'Mobile-First SaaS App', 
      desc: 'Cross-platform application with cloud sync and offline capabilities.', 
      img: 'https://picsum.photos/600/400?random=3',
      tech: ['React Native', 'Supabase', 'PostgreSQL'],
      status: 'Beta Testing'
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateY: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="portfolio" ref={ref} className="bg-github-dark section-padding">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Portfolio & Projects</h2>
          <p className="section-subtitle mb-20">
            Innovative solutions that showcase our expertise in modern web technologies, AI integration, and user-centric design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                scale: 1.02,
              }}
              className="interactive-card rounded-xl border border-github-border overflow-hidden group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-github-darker via-transparent to-transparent opacity-60"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Coming Soon' 
                      ? 'bg-github-accent/20 text-github-accent border border-github-accent/30' 
                      : project.status === 'In Development'
                      ? 'bg-github-blue/20 text-github-blue border border-github-blue/30'
                      : 'bg-github-navy/20 text-github-navy-light border border-github-navy/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-github-darker/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-2 bg-github-accent/20 border border-github-accent/50 rounded-lg text-github-accent hover:bg-github-accent/30 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                  <button className="p-2 bg-github-blue/20 border border-github-blue/50 rounded-lg text-github-blue hover:bg-github-blue/30 transition-colors">
                    <Github size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-github-text mb-3 group-hover:text-github-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-github-muted mb-4 leading-relaxed text-sm">
                  {project.desc}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-github-navy/30 text-github-navy-light border border-github-navy/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-sm font-semibold text-github-muted group-hover:text-github-accent transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-github-muted mb-6">
            Interested in seeing more of our work or starting your own project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(9, 105, 218, 0.4)',
              y: -2 
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-github-blue to-github-navy text-white font-semibold rounded-lg shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedPortfolio;
