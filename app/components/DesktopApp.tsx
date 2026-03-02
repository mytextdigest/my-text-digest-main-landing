'use client';

import { motion } from 'framer-motion';
import { FiFolder, FiMessageSquare, FiFile } from 'react-icons/fi';
import Image from 'next/image';

export default function DesktopApp() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]" id="desktop-app">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
        <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />

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
              🖥 Desktop Experience
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Built for </span>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
              Power Users
            </span>
          </h2>
          
          <p className="text-[#EDEDED]/70 text-lg md:text-xl max-w-2xl mx-auto">
            A native desktop experience designed for professionals who demand performance and privacy
          </p>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Floating Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Main App Window */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-[#7C7CFF]/20">
              {/* Title Bar */}
              <div className="bg-[#0B1020]/80 px-6 py-4 flex items-center justify-between border-b border-[#7C7CFF]/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[#EDEDED] text-sm font-medium">My Text Digest</span>
                </div>
                <div className="flex items-center space-x-2 text-[#EDEDED]/40 text-xs">
                  <FiFile className="w-4 h-4" />
                  <span>Document Intelligence</span>
                </div>
              </div>

              {/* App Content */}
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-64 bg-[#05060A]/50 border-r border-[#7C7CFF]/10 p-4">
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 text-[#00E5FF] mb-4">
                      <FiFolder className="w-5 h-5" />
                      <span className="font-semibold">Documents</span>
                    </div>
                    <div className="space-y-2">
                      {['Research Paper.pdf', 'Contract_2024.docx', 'Financial Report.xlsx', 'Project Notes.md', 'Code Documentation'].map((doc, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-3 rounded-lg text-sm transition-colors cursor-pointer ${
                            index === 0 
                              ? 'bg-[#7C7CFF]/20 text-[#00E5FF] border border-[#00E5FF]/30' 
                              : 'text-[#EDEDED]/60 hover:bg-[#7C7CFF]/10'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <FiFile className="w-4 h-4" />
                            <span className="truncate">{doc}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-[#05060A]/30 p-6 flex flex-col">
                  {/* Chat Interface */}
                  <div className="flex-1 space-y-4 mb-4 overflow-hidden">
                    {/* User Question */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex justify-end"
                    >
                      <div className="max-w-md bg-gradient-to-r from-[#00E5FF]/20 to-[#7C7CFF]/20 rounded-2xl rounded-tr-sm p-4 border border-[#00E5FF]/30">
                        <p className="text-[#EDEDED] text-sm">
                          What are the main findings in the research paper?
                        </p>
                      </div>
                    </motion.div>

                    {/* AI Response */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-2xl glass rounded-2xl rounded-tl-sm p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#7C7CFF] flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/logo.png"
                              alt="AI"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-[#EDEDED] text-sm leading-relaxed mb-2">
                              Based on the research paper, the main findings include:
                            </p>
                            <ul className="text-[#EDEDED]/70 text-sm space-y-1 list-disc list-inside">
                              <li>AI models show 94% accuracy improvement</li>
                              <li>Processing time reduced by 67%</li>
                              <li>Privacy-first approach maintains security</li>
                            </ul>
                            <div className="mt-3 flex items-center space-x-2 text-[#00E5FF]/70 text-xs">
                              <FiFile className="w-3 h-3" />
                              <span>Source: Research Paper.pdf, Page 12-15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input Area */}
                  <div className="glass rounded-xl p-4 flex items-center space-x-3">
                    <FiMessageSquare className="w-5 h-5 text-[#7C7CFF]" />
                    <input
                      type="text"
                      placeholder="Ask anything about your documents..."
                      className="flex-1 bg-transparent text-[#EDEDED] placeholder-[#EDEDED]/40 outline-none text-sm"
                      disabled
                    />
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] text-white text-sm font-medium">
                      Send
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Orbs */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#00E5FF]/20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#7C7CFF]/20 blur-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
