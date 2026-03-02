'use client';

import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEyeOff, FiUserX, FiServer, FiKey } from 'react-icons/fi';

export default function Privacy() {
  const securityFeatures = [
    {
      icon: FiServer,
      title: 'No cloud storage',
      description: 'All data stays on your device',
    },
    {
      icon: FiEyeOff,
      title: 'No tracking',
      description: 'Zero telemetry or analytics',
    },
    {
      icon: FiUserX,
      title: 'No data sharing',
      description: 'We never see your documents',
    },
    {
      icon: FiLock,
      title: 'AI runs securely',
      description: 'Local processing only',
    },
    {
      icon: FiKey,
      title: 'Enterprise-grade encryption',
      description: 'Military-level security',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#05060A]" id="privacy">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute top-60 right-20 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Particle Shield */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center Shield */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7C7CFF]/20 flex items-center justify-center backdrop-blur-sm border border-[#00E5FF]/30">
                  <FiShield className="w-24 h-24 text-[#00E5FF]" />
                </div>
              </motion.div>

             

              {/* Encrypted Streams */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                    }}
                    className="absolute inset-0"
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r={20 + i * 10}
                        fill="none"
                        stroke={i % 2 === 0 ? '#00E5FF' : '#7C7CFF'}
                        strokeWidth="0.5"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-[#7C7CFF]/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full border border-[#7C7CFF]/30 text-[#00E5FF] text-sm font-medium">
                🔐 Trust & Security
              </span>
            </motion.div>

            {/* Main Message */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Your Documents </span>
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
                Never Leave Your System.
              </span>
            </h2>

            <p className="text-[#EDEDED]/70 text-lg mb-8 leading-relaxed">
              Complete privacy is not a feature — it's our foundation. Every document, every query, every answer stays on your device. Forever.
            </p>

            {/* Security Features */}
            <div className="space-y-4 mb-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00E5FF]/10 to-[#7C7CFF]/10 border border-[#7C7CFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-[#EDEDED]/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] text-white font-semibold shadow-lg shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50 transition-all duration-300"
            >
              <FiShield className="w-5 h-5" />
              <span>Download Secure App</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px]" />
    </section>
  );
}
