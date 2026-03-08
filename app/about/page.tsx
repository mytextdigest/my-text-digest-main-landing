'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiTarget, FiShield, FiZap, FiUsers, FiBookOpen, FiCpu, FiLock, FiCompass, FiAward } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

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

        {/* Glow Dots */}
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

          <div className="relative z-10 max-w-3xl space-y-6">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="text-foreground">About </span>
              <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                My Text Digest
              </span>
            </motion.h1>

            {/* Product Attribution */}
            <div className="flex justify-center">
              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium">
                A product of{" "}
                <Link
                  href="https://nexgeninnovation.com/"
                  target="_blank"
                  className="underline hover:text-primary-400"
                >
                  Next Generation Innovation L.L.C
                </Link>
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-foreground">
              Turning Documents Into Intelligent Knowledge
            </h2>

            <p className="text-muted-foreground text-lg">
              Professionals work with hundreds of documents including research papers, reports,
              contracts, and technical manuals. Finding the right information inside them is
              often slow and inefficient.
            </p>

            <p className="text-muted-foreground text-lg">
              My Text Digest transforms static documents into interactive knowledge.
              Instead of manually searching through pages, users can ask questions and
              receive precise answers directly from their documents.
            </p>

          </div>
          </div>

          {/* WHY WE BUILT IT */}
          <div className="py-28">
            <div className="text-center mb-14">

            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
              <FiBookOpen className="w-4 h-4" />
              Our Story
            </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Why We </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Built It
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-muted-foreground leading-relaxed space-y-6">
              <p>
                Traditional document search relies on keywords and manual reading.
                This makes research and analysis time consuming and prone to missed information.
              </p>

              <p>
                My Text Digest was created to make document intelligence simple and conversational
                so users can interact with information instead of searching for it.
              </p>
            </div>
          </div>

          {/* WHAT IT ENABLES */}
          <div className="py-24">

            <div className="text-center mb-16">

              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
                <FiCpu className="w-4 h-4" />
                Capabilities
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">What My Text Digest </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Enables
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-muted-foreground leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li>Ask natural language questions across documents</li>
                <li>Receive context aware answers instantly</li>
                <li>Analyze multiple documents as a unified knowledge base</li>
                <li>Extract insights from long or complex files in seconds</li>
              </ul>
            </div>

          </div>

          {/* PRIVACY SECTION */}
          <div className="py-28">
            <div className="text-center mb-14">

              <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
                <FiLock className="w-4 h-4" />
                Privacy
              </span>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Built for </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  Privacy and Control
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-muted-foreground leading-relaxed space-y-6">

              <p>
                My Text Digest supports both web and desktop environments so users can choose the
                workflow that fits their privacy requirements.
              </p>

              <p>
                The platform uses a Bring Your Own API Key model.
                Users provide their OpenAI API key which allows them to control usage and billing
                directly through their OpenAI account.
              </p>

            </div>

          </div>

          {/* CORE VALUES (UNCHANGED) */}
          <div className="py-24">
            <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
              <FiAward className="w-4 h-4" />
              Our Values
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
                  desc: 'Your documents remain secure especially in the desktop version.',
                },
                {
                  icon: FiZap,
                  title: 'Performance',
                  desc: 'Blazing fast answers without compromising depth or clarity.',
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

          {/* VISION */}
          <div className="py-28">
            <div className="text-center mb-14">

            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
              <FiCompass className="w-4 h-4" />
              Looking Ahead
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
                We believe documents should not just store information. They should understand it.
              </p>

              <p>
                Our goal is to build tools that turn documents into intelligent systems that
                respond to questions, surface insights, and make knowledge easier to use.
              </p>

              <p>
                My Text Digest is the first step toward that future.
              </p>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}