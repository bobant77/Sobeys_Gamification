"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 20 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0,
            y: 20 
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1,
            y: -2
          }}
          whileTap={{ 
            scale: 0.95 
          }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ 
              y: [0, -2, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full opacity-0"
            whileHover={{
              scale: [1, 1.5],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;