'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiHardDrive, FiLock, FiZap, FiKey, FiCloud } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import PageLayout from '../components/PageLayout';
import BYOKModal from '../components/BYOKModal';

interface Plan {
  id: string;
  name: string;
  description: string;
  storageLimitGb: number;
  priceCents: number;
  currency: string;
  billingInterval: 'month' | 'year';
}

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billing, setBilling] = useState<'month' | 'year'>('month');
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [byokOpen, setByokOpen] = useState(false);

  // Initialize particles
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    setLoading(true);
  
    fetch('/api/web-plans')
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredPlans = plans.filter((p) => p.billingInterval === billing);

  return (

    <PageLayout>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">

        {/* Particles */}
        {init && (
          <div className="absolute inset-0 z-0">
            <Particles
              id="pricingParticles"
              options={{
                particles: {
                  number: { value: 60 },
                  color: { value: ['#3b82f6', '#2563eb'] },
                  size: {
                      value: { min: 1, max: 3 }
                  },
                  move: { enable: true, speed: 1 },
                  opacity: { value: 0.4 },
                },
              }}
            />
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-flex items-center gap-2 mb-4">
              <FiCloud className="w-4 h-4" />
              Cloud Plans
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">My Text Digest </span>
              <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                Cloud Pricing
              </span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your workflow. The platform follows a <span className='font-bold'>Bring Your Own Open AI Key</span> model, allowing you to securely use your own AI API key for document processing and analysis.
            </p>
          </motion.div>

          <div className="flex justify-center mb-6">
            <button
              onClick={() => setByokOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-full border border-primary-500/30 text-primary-500 hover:bg-primary-500/10 transition"
            >
              <FiKey className="w-4 h-4" />
              What is Bring Your Own OpenAI Key?
            </button>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
              <div className="relative grid grid-cols-2 w-64 bg-[#0B1020]/60 border border-primary-500/20 rounded-full p-1">

                  {/* Sliding Background */}
                  <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary-600"
                  animate={{
                      x: billing === 'month' ? 0 : '100%',
                  }}
                  />

                  {/* Monthly */}
                  <button
                  onClick={() => setBilling('month')}
                  className={`relative z-10 py-2 text-sm font-semibold rounded-full transition ${
                      billing === 'month'
                      ? 'text-white bg-[var(--primary-700)]'
                      : 'text-muted-foreground hover:text-white bg-transparent'
                  }`}
                  >
                  Monthly
                  </button>

                  {/* Yearly */}
                  <button
                  onClick={() => setBilling('year')}
                  className={`relative z-10 py-2 text-sm font-semibold rounded-full transition ${
                      billing === 'year'
                      ? 'text-white bg-[var(--primary-700)]'
                      : 'text-muted-foreground hover:text-white bg-transparent'
                  }`}
                  >
                  Yearly
                  </button>

              </div>
          </div>

          {/* Plans Grid */}
          <AnimatePresence mode="wait">
              <motion.div
                  key={billing}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                  {loading
                  ? [1, 2].map((i) => <SkeletonCard key={i} />)
                  : filteredPlans.map((plan) => (
                      <PlanCard key={plan.id} plan={plan} />
                      ))}
              </motion.div>
          </AnimatePresence>

        </div>
        </section>
        <BYOKModal open={byokOpen} onClose={() => setByokOpen(false)} />
    </PageLayout>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-8 space-y-6 text-center transition-all duration-300">

        <h4 className="text-xl font-bold text-foreground">
          {plan.name}
        </h4>

        <p className="text-muted-foreground text-sm">
          {plan.description}
        </p>

        <div>
          <span className="text-4xl font-extrabold text-foreground">
            {formatPrice(plan.priceCents, plan.currency)}
          </span>
          <span className="text-sm text-muted-foreground">
            {' '} / {plan.billingInterval}
          </span>
        </div>

        <ul className="text-sm text-left text-muted-foreground space-y-2">
          <li className="flex items-center justify-center gap-2">
            <FiHardDrive className="w-4 h-4 text-primary-500" />
            {plan.storageLimitGb} GB Storage
          </li>

          <li className="flex items-center justify-center gap-2">
            <FiLock className="w-4 h-4 text-primary-500" />
            Secure and Private Workspace
          </li>

          <li className="flex items-center justify-center gap-2">
            <FiZap className="w-4 h-4 text-primary-500" />
            Fast Web Access
          </li>

          <li className="flex items-center justify-center gap-2">
            <FiKey className="w-4 h-4 text-primary-500" />
            Bring Your Own Open AI API Key
          </li>
        </ul>

        <p className="text-xs text-muted-foreground/80 text-center">
          AI usage costs are billed directly by your AI provider based on your API usage.
        </p>

        <a
          href="https://my-text-digest-saas.vercel.app/auth/signup"
          className="block px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all duration-300 glow-primary hover:scale-105"
        >
          Sign Up Now <FiArrowRight className="inline ml-2" />
        </a>
      </div>

      <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 bg-primary-500/30 transition-opacity duration-500" />
    </motion.div>
  );
}

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(cents / 100);
}


function SkeletonCard() {
    return (
      <div className="glass rounded-2xl p-8 space-y-6 animate-pulse">
  
        {/* Title */}
        <div className="h-6 bg-primary-500/20 rounded w-1/2 mx-auto" />
  
        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-primary-500/10 rounded w-3/4 mx-auto" />
          <div className="h-3 bg-primary-500/10 rounded w-2/3 mx-auto" />
        </div>
  
        {/* Price */}
        <div className="h-10 bg-primary-500/20 rounded w-1/3 mx-auto" />
  
        {/* Features */}
        <div className="space-y-2">
          <div className="h-3 bg-primary-500/10 rounded w-2/3 mx-auto" />
          <div className="h-3 bg-primary-500/10 rounded w-1/2 mx-auto" />
          <div className="h-3 bg-primary-500/10 rounded w-3/4 mx-auto" />
        </div>
  
        {/* Button */}
        <div className="h-10 bg-primary-500/30 rounded-full w-2/3 mx-auto" />
      </div>
    );
  }