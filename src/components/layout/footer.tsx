"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection = ({ id = "footer" }: { id?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const footerLinks = [
    { name: 'Sobeys', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' }
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Twitter', icon: 't' },
    { name: 'Instagram', icon: 'i' }
  ];

  return (
    <footer id={id} className="relative w-full bg-green-900 py-6 md:py-8 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Subtle Accent Elements */}
        <motion.div 
          className="absolute top-4 right-8 w-16 h-16 border border-green-700/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-4 left-12 w-12 h-12 bg-green-700/20 rounded-lg rotate-45"
          animate={{
            rotate: [45, 135, 45],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Section - Logo and Copyright */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Logo */}
            <Link href="/" className="group">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/sobeys.svg"
                    alt="Sobeys Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 transition-all duration-300 group-hover:brightness-110"
                    priority
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </Link>

            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-white/80 text-sm font-medium">
                Copyright © 2025 Sobeys Inc.
              </p>
            </div>
          </motion.div>

          {/* Center Section - Navigation Links */}
          <motion.nav 
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  {/* Underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-green-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Right Section - Social Icons */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialIcons.map((social, index) => (
              <motion.button
                key={social.name}
                className="relative w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {/* Icon placeholder - you can replace with actual icons */}
                <span className="text-white/80 group-hover:text-white text-xs font-bold uppercase">
                  {social.icon}
                </span>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom divider line */}
        <motion.div 
          className="mt-6 md:mt-8 pt-4 border-t border-green-700/30"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-white/60 text-xs">
              All rights reserved. Grocery Giveaways contest rules apply.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span>Made with care for our customers</span>
              <motion.div
                className="w-1 h-1 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;