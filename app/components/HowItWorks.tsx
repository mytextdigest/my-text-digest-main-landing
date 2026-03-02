'use client';

import { motion } from 'framer-motion';
import { FiUpload, FiCpu, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FiUpload,
      title: 'Upload Any Document',
      description: 'PDF, DOCX, PPT, XLSX, TXT, CSV, Markdown, Code files',
      color: '#00E5FF',
    },
    {
      number: '02',
      icon: FiCpu,
      title: 'AI Understands Context',
      description: 'Semantic reading, structure detection, meaning extraction',
      color: '#7C7CFF',
    },
    {
      number: '03',
      icon: FiMessageSquare,
      title: 'Ask Questions Naturally',
      description: 'No keywords. Ask like a human.',
      color: '#00E5FF',
    },
    {
      number: '04',
      icon: FiCheckCircle,
      title: 'Get Exact Answers',
      description: 'Precise, referenced, relevant — no hallucinations',
      color: '#7C7CFF',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#05060A]" id="how-it-works">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full border border-[#7C7CFF]/30 text-[#00E5FF] text-sm font-medium">
              🧬 AI Intelligence Flow
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">How It </span>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          
          <p className="text-[#EDEDED]/70 text-lg md:text-xl max-w-2xl mx-auto">
            Four simple steps to transform your documents into intelligent answers
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl glass hover:glow-violet transition-all duration-500">
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    className="absolute top-4 right-4 w-20 h-20 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-2 -left-2">
                    <span 
                      className="text-6xl font-bold opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6 mt-8"
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      <step.icon 
                        className="w-8 h-8"
                        style={{ color: step.color }}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#EDEDED]/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${step.color}15 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Connection Line (except for last card) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#7C7CFF]/50 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#EDEDED]/60 text-sm mb-6">
            Experience the power of AI-driven document intelligence
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] text-white font-semibold shadow-lg shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50 transition-all duration-300"
          >
            <span>Get Started Now</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
