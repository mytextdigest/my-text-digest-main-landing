'use client';

import { motion } from 'framer-motion';
import { 
  FiBookOpen, 
  FiCode, 
  FiTrendingUp, 
  FiAward,
  FiLayers,
  FiZap
} from 'react-icons/fi';

export default function UseCases() {
  const useCases = [
    {
      icon: FiBookOpen,
      emoji: '📂',
      title: 'Reviewing Case Files',
      scenario: 'Cross-Document Analysis',
      description:
        'Quickly understand arguments and evidence across related documents.',
      example: {
        question: '“What are the key arguments in this case?”',
        answer:
          'Main claims, supporting evidence, and counterpoints summarized clearly.',
      },
      color: '#00E5FF',
    },
    {
      icon: FiTrendingUp,
      emoji: '🔬',
      title: 'Analyzing Research Material',
      scenario: 'Insight Extraction',
      description:
        'Extract insights from long papers without losing context.',
      example: {
        question: '“What are the main findings in these studies?”',
        answer:
          'Shared themes, conclusions, and differences highlighted.',
      },
      color: '#7C7CFF',
    },
    {
      icon: FiLayers,
      emoji: '📊',
      title: 'Managing Multi-Document Reports',
      scenario: 'Comparative Review',
      description:
        'Compare and explore multiple reports within one focused space.',
      example: {
        question: '“How do these reports differ in their conclusions?”',
        answer:
          'Key contrasts and data variations outlined concisely.',
      },
      color: '#00E5FF',
    },
    {
      icon: FiCode,
      emoji: '🛠️',
      title: 'Exploring Technical Documentation',
      scenario: 'Precise Information Retrieval',
      description:
        'Find precise information without manual searching.',
      example: {
        question: '“What are the setup requirements mentioned?”',
        answer:
          'Required steps, specifications, and dependencies summarized.',
      },
      color: '#7C7CFF',
    },
    {
      icon: FiAward,
      emoji: '📖',
      title: 'Studying Complex Material',
      scenario: 'Structured Understanding',
      description:
        'Break down dense content into structured understanding.',
      example: {
        question: '“What are the core concepts in this chapter?”',
        answer:
          'Key principles and definitions presented clearly.',
      },
      color: '#00E5FF',
    },
    {
      icon: FiZap,
      emoji: '🗂️',
      title: 'Organizing Large Document Sets',
      scenario: 'Information Structuring',
      description:
        'Navigate and organize large collections of documents efficiently.',
      example: {
        question: '“Summarize the major themes across all files.”',
        answer:
          'Overarching topics and recurring patterns clearly structured.',
      },
      color: '#7C7CFF',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#05060A]" id="use-cases">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute top-60 right-10 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />

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
              🎯 Real-World Applications
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Built for </span>
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              Real Work
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Designed for anyone working with complex documents across multiple files
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl glass hover:glow-violet transition-all duration-500">
                {/* Background Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${useCase.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${useCase.color}20 0%, ${useCase.color}10 100%)`,
                        border: `1px solid ${useCase.color}40`,
                      }}
                    >
                      <useCase.icon 
                        className="w-7 h-7"
                        style={{ color: useCase.color }}
                      />
                    </div>
                    <span className="text-3xl">{useCase.emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors duration-300">
                    {useCase.title}
                  </h3>

                  {/* Scenario */}
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: `${useCase.color}20`,
                      color: useCase.color,
                      border: `1px solid ${useCase.color}40`,
                    }}
                  >
                    {useCase.scenario}
                  </div>

                  {/* Description */}
                  <p className="text-[#EDEDED]/70 text-sm leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Example */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#0B1020]/50 border border-[#7C7CFF]/20">
                      <p className="text-[#00E5FF] text-xs font-medium mb-1">Example Question:</p>
                      <p className="text-[#EDEDED]/80 text-sm italic">{useCase.example.question}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0B1020]/50 border border-[#00E5FF]/20">
                      <p className="text-[#7C7CFF] text-xs font-medium mb-1">AI Answer:</p>
                      <p className="text-[#EDEDED]/80 text-sm">{useCase.example.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Corner Glow */}
                <div 
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-20 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${useCase.color}60 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#EDEDED]/60 text-sm mb-6">
            No matter your profession, My Text Digest adapts to your workflow
          </p>
        </motion.div>
      </div>
    </section>
  );
}
