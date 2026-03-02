'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiMail } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-card/80 backdrop-blur-md border-b border-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Image
              src="/logo.png"
              alt="My Text Digest Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-foreground">
              My Text Digest
            </span>
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* {['Features', 'How It Works', 'Privacy', 'Desktop App', 'Use Cases'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))} */}
            {[ 'Web Version', 'Desktop App', 'Help'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">

            {/* Primary CTA */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-2.5 rounded-full 
                         bg-primary-600 hover:bg-primary-700 
                         text-white font-medium text-sm 
                         transition-all duration-300 glow-primary"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download App</span>
            </motion.a>

            {/* Docs Button */}
            <motion.a
              href="#docs"
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full 
                         border border-border 
                         text-muted-foreground 
                         hover:border-primary-600 hover:text-primary-600 
                         transition-all duration-300"
            >
              <FiFileText className="w-4 h-4" />
              <span className="text-sm">Docs</span>
            </motion.a>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full 
                         border border-border 
                         text-muted-foreground 
                         hover:border-primary-600 hover:text-primary-600 
                         transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Contact</span>
            </motion.a>

          </div>
        </div>
      </div>
    </motion.nav>
  );
}