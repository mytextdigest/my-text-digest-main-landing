'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiPlay, FiFileText, FiLock, FiZap, FiCpu } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#3b82f6', '#2563eb'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#7C7CFF',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  const highlights = [
    { icon: FiCpu, text: 'AI-powered understanding' },
    { icon: FiFileText, text: 'All document formats' },
    { icon: FiLock, text: '100% private & offline-ready' },
    { icon: FiZap, text: 'Desktop-first experience' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={particlesConfig as any}
            className="absolute inset-0"
          />
        </div>
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[150px] z-0" />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Ask Anything.</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              From Your Documents.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Upload PDFs, Word files, PPTs, spreadsheets, code, or text —{' '}
            <span className="text-primary-600 font-semibold">
              My Text Digest
            </span>{' '}
            gives precise, contextual answers instantly.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl glass hover:glow-violet transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary-600" />
                <span className="text-sm text-foreground text-center font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Web Version */}
            <motion.a
              href="https://my-text-digest-saas.vercel.app/"
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
              <span>Use Web Version</span>
            </motion.a>

            {/* Desktop Version */}
            <motion.a
              href="https://my-text-digest-desktop-licensing.vercel.app/"
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
              <span>Get Desktop Version</span>
            </motion.a>
          </motion.div>

          {/* Floating Mockup Preview (placeholder) */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00E5FF]/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#00E5FF] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
