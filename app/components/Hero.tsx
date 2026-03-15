'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
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
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#3b82f6', '#2563eb'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1 },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1 },
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
        out_mode: 'out',
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Particles */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={particlesConfig as any}
            className="absolute inset-0"
          />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-500/20 rounded-full blur-[160px] z-0" />

      <div className="w-full mx-auto px-6 lg:px-16 py-32 relative z-10">

        {/* Wider gap between columns */}
        <div className="grid lg:grid-cols-2 gap-24">

          {/* DESKTOP SIDE */}
          <div className='flex flex-col items-center h-full'>

            <div className="flex flex-col items-center justify-start min-h-[350px]">
                {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl text-center md:text-5xl lg:text-5xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">
                  AI-powered document intelligence
                </span>
                <br />
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  with complete local privacy
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-center align-middle text-muted-foreground mb-10 leading-relaxed max-w-xl"
              >
                My Text Digest Desktop is designed for users who prioritize complete
                local control and offline privacy. All documents, summaries, and
                conversations remain securely stored on the user’s device, making
                it ideal for individuals and organizations handling sensitive
                information.
              </motion.p>
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden flex flex-col backdrop-blur-xl bg-white/5 border border-white/10"
            >

              <div className="px-8 py-5 border-b border-white/10 bg-white/[0.03]">
                <h3 className="text-xl md:text-2xl text-center font-bold">
                  <span className="text-foreground">Desktop </span>
                  <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                    Version
                  </span>
                </h3>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">

                <ul className="space-y-3 text-sm md:text-sm font-bold text-muted-foreground">
                  {[
                    "Document Ingestion: Import TXT, PDF, or DOCX files with ease.",
                    "Automated AI-powered summarization",
                    "Secure local SQLite database storage",
                    "Project management for organizing documents",
                    "Project-wise chat across all documents",
                    "Document-level chat for precise insights",
                    "Privacy — your data stays fully on your device",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="mt-0.5 text-2xl text-[var(--primary-500)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/desktop-pricing"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-8 flex items-center justify-center px-6 py-4 rounded-full 
                  bg-primary-600 hover:bg-primary-700 
                  text-white font-semibold transition-all duration-300 glow-primary"
                >
                  Sign Up Now
                </motion.a>

              </div>
            </motion.div>

          </div>

          {/* CLOUD SIDE */}
          <div className='flex flex-col items-center h-full'>

            <div className="flex flex-col items-center justify-start min-h-[350px]">
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl text-center md:text-5xl lg:text-5xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">
                  AI-powered document intelligence
                </span>
                <br />
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  with secure access anywhere
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-center text-muted-foreground mb-10 leading-relaxed max-w-xl"
              >
                My Text Digest Cloud is built for users who value anywhere access
                and scalable document management. Documents, summaries, and
                conversations are securely stored in the cloud, enabling seamless
                access across devices and environments.
              </motion.p>
            </div>

            

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden flex flex-col backdrop-blur-xl bg-white/5 border border-white/10"
            >

              <div className="px-8 py-5 border-b border-white/10 bg-white/[0.03]">
                <h3 className="text-xl md:text-2xl text-center font-bold">
                  <span className="text-foreground">Cloud </span>
                  <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                    Version
                  </span>
                </h3>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">

                <ul className="space-y-3 text-sm font-bold text-muted-foreground">
                  {[
                    "Document Ingestion: Import TXT, PDF, or DOCX files with ease.",
                    "Automated AI summarization",
                    "Secure cloud storage",
                    "Project management for organizing documents",
                    "Project-wise AI conversations",
                    "Document-level chat for precise insights",
                    "Secure access across devices",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="mt-0.5 text-2xl text-[var(--primary-500)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/web-pricing"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-8 flex items-center justify-center px-6 py-4 rounded-full 
                  bg-primary-600 hover:bg-primary-700 
                  text-white font-semibold transition-all duration-300 glow-primary"
                >
                  Sign Up Now
                </motion.a>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}