import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const info = [
    { icon: Mail, text: 'thingsdigital.in@gmail.com', href: 'thingsdigital.in@gmail.com' },
    { icon: Phone, text: '+91 9145600072 / 73', href: 'tel:+919145600072' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/company/digibyte-media2025/' },
  ];

  return (
    <section id="contact" ref={ref} className="bg-github-darker section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle mb-20">
            Ready to transform your business? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-github-text mb-6">Contact Details</h3>
            <div className="space-y-6">
              {info.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <item.icon className="w-6 h-6 text-github-muted group-hover:text-github-accent transition-colors" />
                  <span className="text-github-text group-hover:text-github-accent transition-colors">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required className="w-full p-4 bg-github-dark border border-github-border rounded-lg focus:outline-none focus:ring-2 focus:ring-github-accent" />
            <input type="email" placeholder="Your Email" required className="w-full p-4 bg-github-dark border border-github-border rounded-lg focus:outline-none focus:ring-2 focus:ring-github-accent" />
            <textarea placeholder="Your Message" rows={5} required className="w-full p-4 bg-github-dark border border-github-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-github-accent"></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 64, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 p-4 bg-github-accent text-white font-semibold rounded-lg"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
