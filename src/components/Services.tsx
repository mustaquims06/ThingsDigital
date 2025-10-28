import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, TrendingUp, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    { icon: Code, title: 'Web Development', description: 'Custom websites and applications built with modern, scalable technologies.' },
    { icon: Smartphone, title: 'App Development', description: 'Native and cross-platform mobile & desktop applications for maximum reach.' },
    { icon: TrendingUp, title: 'Marketing & Sales', description: 'Data-driven digital marketing and sales strategies to boost your growth.' },
    { icon: Bot, title: 'AI Integration', description: 'Cutting-edge AI solutions to automate processes and drive innovation.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" ref={ref} className="bg-github-dark section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="section-subtitle mb-20">
            Comprehensive digital solutions designed to elevate your business with the power of modern technology and AI.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(255, 0, 64, 0.2)' }}
              className="bg-github-darker p-8 rounded-xl border border-github-border flex flex-col items-start transition-all duration-300"
            >
              <div className="p-3 bg-github-dark rounded-lg border border-github-border mb-6">
                <service.icon className="w-8 h-8 text-github-accent" />
              </div>
              <h3 className="text-xl font-bold text-github-text mb-3">{service.title}</h3>
              <p className="text-github-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
