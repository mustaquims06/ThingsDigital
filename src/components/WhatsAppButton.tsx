import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = '919145600072', // Replace with your WhatsApp number
  message = 'Hello! I would like to know more about your services.'
}) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={openWhatsApp}
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
      >
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.7, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Icon and text */}
        <MessageCircle className="relative z-10 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="relative z-10 font-medium pr-1 opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap overflow-hidden">
          Chat with us
        </span>
        
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
          <div className="bg-github-darker text-github-text px-4 py-2 rounded-lg shadow-xl border border-github-border whitespace-nowrap animate-pulse">
            Click to chat on WhatsApp
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;
