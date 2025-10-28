import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Calendar, label: 'Founded', value: '2025' },
    { icon: MapPin, label: 'Location', value: 'Nashik, India' },
    { icon: Target, label: 'Services', value: '4+' },
    { icon: Eye, label: 'Vision', value: 'AI-Driven' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" ref={ref} className="bg-github-darker section-padding">
      <div className="section-container">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="section-title gradient-text">
            About Things Digital
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mb-20">
            A visionary startup committed to revolutionizing digital experiences through innovative technology and AI-powered solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-3xl font-bold mb-6 text-github-text">Our Story</h3>
            <p className="text-github-muted mb-6 leading-relaxed">
              Born in Nashik, Things Digital emerged from a passion to bridge the gap between cutting-edge technology and practical business solutions. Our journey began with a simple yet powerful vision: to democratize access to premium digital services powered by AI.
            </p>
            <p className="text-github-muted leading-relaxed">
              We believe every business deserves world-class digital tools. Our team combines deep technical expertise with creative innovation to deliver results that not only meet but exceed expectations.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 25px rgba(255, 0, 64, 0.2)' }}
                className="bg-github-dark/50 rounded-xl p-6 text-center border border-github-border"
              >
                <stat.icon className="w-10 h-10 text-github-accent mx-auto mb-4" />
                <p className="text-2xl font-bold text-github-text mb-1">{stat.value}</p>
                <p className="text-github-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
