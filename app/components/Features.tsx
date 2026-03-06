'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiZap, 
  FiLayers, 
  FiTarget, 
  FiEye, 
  FiClock, 
  FiWifiOff, 
  FiCloud, 
  FiLock 
} from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: FiLayers,
      title: 'Project Chat (Multi-Document Intelligence)',
      description:
        'Analyze and compare insights across multiple documents within a project workspace to uncover deeper connections and patterns.',
      color: '#00E5FF',
    },
    {
      icon: FiZap,
      title: 'AI Document Chat',
      description:
        'Ask questions directly within a document and receive precise, context-aware answers instantly.',
      color: '#7C7CFF',
    },
    {
      icon: FiTarget,
      title: 'Smart Document Summaries',
      description:
        'Convert lengthy documents into structured summaries that highlight the most important insights.',
      color: '#00E5FF',
    },
    {
      icon: FiLayers,
      title: 'Project-Based Workspaces',
      description:
        'Organize documents by project to maintain clear context and focused knowledge exploration.',
      color: '#7C7CFF',
    },
    {
      icon: FiEye,
      title: 'Structured Knowledge Layer',
      description:
        'Documents, summaries, and insights stay organized as a persistent knowledge base that grows over time.',
      color: '#00E5FF',
    },
    {
      icon: FiLock,
      title: 'Privacy-First Architecture',
      description:
        'Project-level isolation ensures documents remain secure and confined to their intended workspace.',
      color: '#7C7CFF',
    },
    {
      icon: FiCloud,
      title: 'Desktop or Cloud Flexibility',
      description:
        'Choose how you deploy the platform - locally on Desktop or through secure Cloud access across devices.',
      color: '#00E5FF',
    },
    {
      icon: FiClock,
      title: 'Fast AI Processing',
      description:
        'Optimized AI processing delivers quick responses and efficient document analysis.',
      color: '#7C7CFF',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute top-60 right-10 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />

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
            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium">
              Power Meets Simplicity
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Powerful </span>
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Enterprise-grade capabilities designed for professionals who demand excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#EDEDED]/60 text-sm">
            And many more features to enhance your document intelligence workflow
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-6 rounded-2xl glass hover:glow-violet transition-all duration-500 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${feature.color}15 0%, transparent 70%)`,
          }}
        />

        {/* Shine Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${feature.color}10 50%, transparent 70%)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                border: `1px solid ${feature.color}40`,
              }}
            >
              <feature.icon 
                className="w-7 h-7"
                style={{ color: feature.color }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-[#EDEDED]/60 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Corner Accent */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 opacity-20"
          style={{
            background: `radial-gradient(circle at top right, ${feature.color}40 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* 3D Shadow Effect */}
      <div 
        className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${feature.color}30 0%, transparent 100%)`,
          transform: `translateY(10px)`,
        }}
      />
    </motion.div>
  );
}
