import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-github-darkest border-t border-github-border">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-github-muted text-sm text-center sm:text-left">
            © {currentYear} Things Digital. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-4">
            {/* Policy links - right side */}
            <nav aria-label="Legal and cookie links" className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-github-muted text-sm hover:text-github-text transition-colors">Privacy Policy</a>
              <a href="#" className="text-github-muted text-sm hover:text-github-text transition-colors">Terms of Service</a>
              <a href="#" className="text-github-muted text-sm hover:text-github-text transition-colors">Cookie Policy</a>
            </nav>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
