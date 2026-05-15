'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const PILLS = [
  'PDFs & Reports',
  'Research Papers',
  'Contracts',
  'Financial Docs',
  'Manuals',
];

export default function Hero() {
  const [init, setInit] = useState(false);
  const [index, setIndex] = useState(0);
  const [pillIndex, setPillIndex] = useState(0);

  const mockups = [
    '/mockup/mtd-mockup-01.png',
    '/mockup/mtd-mockup-02.png',
  ];

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Auto image switch
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockups.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Rotating pill
  useEffect(() => {
    const interval = setInterval(() => {
      setPillIndex((prev) => (prev + 1) % PILLS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToVersions = () => {
    document.getElementById('versions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particlesConfig = {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 900 } },
      color: { value: ['#3b82f6', '#7C7CFF'] },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.05 } },
      size: { value: 2.5, random: true },
      line_linked: { enable: true, distance: 150, color: '#7C7CFF', opacity: 0.2, width: 1 },
      move: { enable: true, speed: 0.8, out_mode: 'out' },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.8 } },
        push: { particles_nb: 3 },
      },
    },
    retina_detect: true,
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05060A]">

      {/* Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig as any}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] z-0 pointer-events-none" />
      {/* Left glow — behind text */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-500/20 rounded-full blur-[160px] z-0" />
      {/* Right glow — behind mockup */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#7C7CFF]/15 rounded-full blur-[180px] z-0" />

      <div className="w-full mx-auto px-6 lg:px-16 py-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-start max-w-xl">

            {/* Rotating document-type pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Works with&nbsp;
              <span className="relative inline-block overflow-hidden h-4 w-32">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={pillIndex}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 text-primary-400 font-semibold whitespace-nowrap"
                  >
                    {PILLS[pillIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.12] mb-5 tracking-tight"
            >
              <span className="text-white">Ask Anything</span>
              <br />
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-[var(--primary-400)] to-[#7C7CFF] bg-clip-text text-transparent">
                Your Documents.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5 max-w-md"
            >
              Upload PDFs, reports, research, and more.
              My Text Digest turns your files into instant answers, summaries, and insights, inside a secure private workspace.
            </motion.p>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 text-xs text-muted-foreground/60 mb-9"
            >
              <span className="inline-block w-4 h-px bg-primary-500/60" />
              Your data is never sold, never shared, never seen by us.
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <motion.button
                onClick={scrollToVersions}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[var(--primary-500)] to-[#7C7CFF] text-white text-sm font-semibold shadow-lg shadow-primary-500/20 transition-all"
              >
                Get Started
              </motion.button>

              <motion.button
                onClick={scrollToVersions}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 text-sm font-medium hover:bg-white/[0.07] transition-all"
              >
                Compare versions →
              </motion.button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground/40"
            >
              {[, 'Use your own API key', 'Desktop & Cloud'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="text-primary-500">✓</span> {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-[#7C7CFF]/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating frame */}
            <div className="relative w-full max-w-[560px] sm:max-w-[680px] lg:max-w-none lg:w-[110%] xl:w-[120%]">

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary-500/40 rounded-tl-lg z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#7C7CFF]/40 rounded-br-lg z-20 pointer-events-none" />

              {/* Invisible spacer to hold layout */}
              <img src={mockups[0]} className="w-full h-auto opacity-0 block" alt="" aria-hidden />

              {/* Animated mockup images */}
              {mockups.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt="My Text Digest app preview"
                  className="absolute inset-0 w-full h-auto rounded-2xl shadow-2xl"
                  style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}
                  animate={{ opacity: i === index ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                />
              ))}

              {/* Mockup switcher dots */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {mockups.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-primary-400 w-4' : 'bg-white/20'
                    }`}
                    aria-label={`View mockup ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}