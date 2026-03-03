'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">
      
      {/* Background Accents (same style as Features / UseCases) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
        <div className="absolute top-60 right-10 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
      </div>

      {/* Glow Gradients */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
            🔒 Your Data Matters
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Privacy </span>
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe powerful AI tools should respect your privacy. Here’s how we handle your data.
          </p>
        </motion.div>

        {/* Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 md:p-12 space-y-10"
        >

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For the web version, we may collect minimal account information such as email address 
              and usage metadata required to operate the service. We do not access your documents 
              beyond what is necessary to provide answers.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Document Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In the desktop version, your documents remain on your local machine. 
              No full documents are uploaded to external servers. Processing occurs locally 
              unless explicitly required for AI responses.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement encryption and industry-standard security practices to protect 
              stored data. Access is restricted and monitored to prevent unauthorized use.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may rely on trusted third-party providers for infrastructure and AI processing. 
              These providers are required to maintain strict confidentiality and data protection standards.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request access, correction, or deletion of your account data. 
              For any privacy-related concerns, please contact us directly.
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-6 border-t border-primary-500/10">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}