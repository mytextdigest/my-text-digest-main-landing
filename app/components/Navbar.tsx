'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", link: "/#features" },
    { name: "Use Cases", link: "/#use-cases" },
    { name: "Desktop Pricing", link: "/desktop-pricing" },
    { name: "Cloud Pricing", link: "/web-pricing" },
  ];

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
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="My Text Digest Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                My Text Digest
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => {
              const isActive =
                item.link === pathname ||
                (item.link.includes('#') && pathname === '/');

              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.link}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-muted-foreground hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">

            {/* Help Button */}
            <motion.a
              href="/help"
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full 
                         border border-border 
                         text-muted-foreground 
                         hover:border-primary-600 hover:text-primary-600 
                         transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
              <span className="text-sm">Help</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">

              {navLinks.map((item) => {
                const isActive =
                  item.link === pathname ||
                  (item.link.includes('#') && pathname === '/');

                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-muted-foreground hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/help"
                onClick={() => setMobileOpen(false)}
                className="flex items-center space-x-2 pt-2 text-muted-foreground hover:text-primary-600"
              >
                <FiMail className="w-4 h-4" />
                <span className="text-sm">Help</span>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}