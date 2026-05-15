'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiMonitor, FiCloud } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const desktopFeatures = [
  { label: 'Your files never leave your computer', sub: 'Nothing is uploaded. Nothing is shared.' },
  { label: 'Works offline, anytime', sub: 'No internet? No problem. Full speed, always.' },
  { label: 'Organize docs into projects', sub: 'Keep your work clean and searchable.' },
  { label: 'Chat with any document using AI', sub: 'Ask questions, get precise answers.' },
  { label: 'Summarize files instantly', sub: 'Understand long docs in seconds.' },
  { label: 'Use your own OpenAI API key', sub: 'You control the costs. No hidden fees.' },
];

const cloudFeatures = [
  { label: 'Access your docs from any device', sub: 'Phone, laptop, tablet - always in sync.' },
  { label: 'Your data is private to your account', sub: 'Encrypted and secured. Only you can see it.' },
  { label: 'Organize docs into projects', sub: 'Keep your work clean and searchable.' },
  { label: 'Chat with any document using AI', sub: 'Ask questions, get precise answers.' },
  { label: 'Summarize files instantly', sub: 'Understand long docs in seconds.' },
  { label: 'Use your own OpenAI API key', sub: 'You control the costs. No hidden fees.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Versions() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 900 } },
      color: { value: ['#3b82f6', '#7C7CFF'] },
      shape: { type: 'circle' },
      opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.05 } },
      size: { value: 2.5, random: true },
      line_linked: { enable: true, distance: 140, color: '#7C7CFF', opacity: 0.25, width: 1 },
      move: { enable: true, speed: 0.8, direction: 'none', out_mode: 'out' },
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
      modes: { grab: { distance: 180, line_linked: { opacity: 0.8 } }, push: { particles_nb: 3 } },
    },
    retina_detect: true,
  };

  return (
    <section id="versions" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05060A]">

      {/* Particles */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles id="tsparticles" options={particlesConfig as any} className="absolute inset-0" />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7C7CFF]/10 rounded-full blur-[140px] z-0 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-28 relative z-10">

        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary-400 font-semibold mb-4">
            Two ways to use My Text Digest
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Pick what works for you.
            <br />
            <span className="text-muted-foreground font-normal text-2xl md:text-3xl mt-2 block">
              Both give you the same AI power, just where you want it.
            </span>
          </h2>
        </motion.div>

        {/* Divider line with label */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="h-px flex-1 bg-white/10" />
          <span className="mx-6 text-xs text-muted-foreground/50 tracking-widest uppercase">vs</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── DESKTOP CARD ── */}
          <VersionCard
            icon={<FiMonitor className="w-5 h-5" />}
            badge="Desktop App"
            badgeColor="from-[#00E5FF] to-blue-500"
            accentColor="#00E5FF"
            headline={
              <>
                Your documents,{' '}
                <span className="bg-gradient-to-r from-[#00E5FF] to-blue-500 bg-clip-text text-transparent">
                  only on your machine.
                </span>
              </>
            }
            tagline="For people who want zero compromise on privacy. Your files are processed and stored entirely on your computer - no cloud, no uploads, no one else involved."
            features={desktopFeatures}
            cta="Download Desktop App"
            ctaHref="/desktop-pricing"
            glowColor="rgba(0, 229, 255, 0.12)"
          />

          {/* ── CLOUD CARD ── */}
          <VersionCard
            icon={<FiCloud className="w-5 h-5" />}
            badge="Cloud App"
            badgeColor="from-[#7C7CFF] to-purple-500"
            accentColor="#7C7CFF"
            headline={
              <>
                Your documents,{' '}
                <span className="bg-gradient-to-r from-[#7C7CFF] to-purple-500 bg-clip-text text-transparent">
                  wherever you are.
                </span>
              </>
            }
            tagline="For people who switch between devices or want instant access anywhere. Sign in from any browser and your documents, chats, and summaries are right there waiting."
            features={cloudFeatures}
            cta="Start Now"
            ctaHref="/web-pricing"
            glowColor="rgba(124, 124, 255, 0.12)"
          />

        </div>

        {/* Bottom reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-sm text-muted-foreground/50 mt-16"
        >
          Both versions use your own OpenAI API key - no subscriptions, no data sold, no surprises.
        </motion.p>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── */

interface Feature {
  label: string;
  sub: string;
}

interface VersionCardProps {
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  accentColor: string;
  headline: React.ReactNode;
  tagline: string;
  features: Feature[];
  cta: string;
  ctaHref: string;
  glowColor: string;
}

function VersionCard({
  icon, badge, badgeColor, accentColor, headline, tagline,
  features, cta, ctaHref, glowColor,
}: VersionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex flex-col"
      style={{ boxShadow: `0 0 80px 0 ${glowColor}` }}
    >

      {/* Top accent line */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${badgeColor} opacity-70`} />

      <div className="p-8 flex flex-col flex-1">

        {/* Badge + icon */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${badgeColor} text-white`}
          >
            {icon}
            {badge}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
          {headline}
        </h3>

        {/* Tagline */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 border-l-2 pl-4" style={{ borderColor: accentColor + '55' }}>
          {tagline}
        </p>

        {/* Divider */}
        <div className="h-px bg-white/[0.07] mb-6" />

        {/* Features */}
        <ul className="space-y-4 flex-1 mb-8">
          {features.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <span
                className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: accentColor + '22', border: `1px solid ${accentColor}55` }}
              >
                <FiCheck className="w-3 h-3" style={{ color: accentColor }} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white/90 leading-snug">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 bg-gradient-to-r ${badgeColor} hover:opacity-90 shadow-lg`}
          style={{ boxShadow: `0 4px 32px 0 ${glowColor}` }}
        >
          {cta}
        </motion.a>

      </div>
    </motion.div>
  );
}