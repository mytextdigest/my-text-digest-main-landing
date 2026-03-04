'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiChevronRight, FiMonitor, FiPlay } from 'react-icons/fi';

export default function CTA() {
  const platforms = [
    { icon: FiMonitor, name: 'Windows', version: '10/11' },
    { icon: FiMonitor, name: 'macOS', version: '12+' },
    { icon: FiMonitor, name: 'Linux', version: 'Ubuntu/Debian' },
  ];

  const particles = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      color: i % 2 === 0 ? '#00E5FF' : '#7C7CFF',
    })),
    []
  );

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]" id="download">
      {/* Intense Particle Background */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.left}%`,
              bottom: 0,
              background: particle.color,
            }}
          />
        ))}
      </div>

      {/* Intense Gradient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C7CFF]/20 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-3 rounded-full border-2 border-[#00E5FF]/50 bg-[#00E5FF]/10 text-[#00E5FF] text-sm font-semibold backdrop-blur-sm">
              💥 Final Conversion
            </span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">Turn Your Documents</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              Into Answers.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#EDEDED]/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of professionals who trust My Text Digest for powerful document intelligence.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Web Version */}
            <motion.a
              href="/web-pricing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 px-8 py-4 rounded-full 
                        bg-primary-600 hover:bg-primary-700 
                        text-white font-semibold text-lg 
                        transition-all duration-300 glow-primary"
            >
              <FiPlay className="w-5 h-5" />
              <span>Sign Up for Cloud Version</span>
            </motion.a>

            {/* Desktop Version */}
            <motion.a
              href="/desktop-pricing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 px-8 py-4 rounded-full 
                        border-2 border-[#7C7CFF]/50 
                        text-white font-semibold text-lg 
                        hover:border-[#00E5FF] 
                        hover:bg-[#00E5FF]/10 
                        transition-all duration-300"
            >
              <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
              <span>Sign Up For Desktop Version</span>
            </motion.a>
          </motion.div>

          {/* Platform Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-7"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-center space-x-3 px-6 py-3 rounded-xl glass border border-[#7C7CFF]/20"
              >
                <platform.icon className="w-6 h-6 text-[#00E5FF]" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{platform.name}</p>
                  <p className="text-[#EDEDED]/50 text-xs">{platform.version}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-[#EDEDED]/60 text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#7C7CFF]" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span>100% Private & Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#7C7CFF]" />
              <span>Instant Setup</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Bottom Intense Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-[#00E5FF]/20 to-transparent rounded-full blur-[100px]" />
    </section>
  );
}
