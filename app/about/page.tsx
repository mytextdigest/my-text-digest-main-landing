'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiTarget, FiShield, FiZap, FiUsers } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import PageLayout from '../components/PageLayout';

export default function AboutPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 800 } },
      color: { value: ['#3b82f6', '#2563eb'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#7C7CFF',
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1, out_mode: 'out' },
    },
    retina_detect: true,
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">

        {/* Subtle Glow Dots */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute top-60 right-10 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* HERO */}
          <div className="relative min-h-screen flex flex-col items-center justify-center text-center py-24 overflow-hidden">

            {init && (
              <div className="absolute inset-0 z-0">
                <Particles
                  id="aboutParticles"
                  options={particlesConfig as any}
                  className="absolute inset-0"
                />
              </div>
            )}

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-500/20 rounded-full blur-[150px] z-0" />

            <div className="relative z-10 max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-foreground">About </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  My Text Digest
                </span>
              </motion.h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                We built My Text Digest to transform how people interact with their documents —
                turning static files into intelligent, conversational knowledge.
              </p>
            </div>
          </div>

          {/* OUR STORY */}
          <div className="py-28">
            <div className="text-center mb-14">
              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
                🚀 Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Why We </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Built This
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-muted-foreground leading-relaxed space-y-6">
              <p>
                Modern professionals deal with hundreds of documents — reports, research papers,
                contracts, technical manuals, and internal knowledge bases.
              </p>
              <p>
                Searching through them manually is slow, inefficient, and error-prone.
                We believed documents should respond like intelligent systems — not static files.
              </p>
              <p>
                That belief led to My Text Digest: a platform designed to make document
                intelligence effortless, precise, and private.
              </p>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="py-24">
            <div className="text-center mb-16">
              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
                💎 Our Values
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">What We </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Stand For
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiTarget,
                  title: 'Precision',
                  desc: 'Accurate, context-aware responses built for real-world usage.',
                },
                {
                  icon: FiShield,
                  title: 'Privacy',
                  desc: 'Your documents remain secure — especially in the desktop version.',
                },
                {
                  icon: FiZap,
                  title: 'Performance',
                  desc: 'Blazing-fast answers without compromising depth or clarity.',
                },
                {
                  icon: FiUsers,
                  title: 'Accessibility',
                  desc: 'Designed for professionals across industries and domains.',
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-8 text-center space-y-4"
                >
                  <value.icon className="w-8 h-8 text-primary-500 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FUTURE VISION */}
          <div className="py-28">
            <div className="text-center mb-14">
              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
                🔮 Looking Ahead
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-muted-foreground leading-relaxed space-y-6">
              <p>
                We envision a future where every document becomes interactive,
                searchable, and intelligently connected.
              </p>
              <p>
                Our goal is to continue building tools that empower knowledge workers
                with clarity, speed, and confidence.
              </p>
              <p>
                My Text Digest is just the beginning.
              </p>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}