'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">
      
      {/* Background Accents */}
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
            📜 Legal Information
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Terms of </span>
            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using My Text Digest.
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
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using My Text Digest (web or desktop version), 
              you agree to comply with these Terms of Service. 
              If you do not agree, please discontinue use immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Use of the Service
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the service only for lawful purposes. 
              You may not misuse the platform, attempt to reverse engineer it, 
              or use it in ways that violate applicable laws or regulations.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Account Responsibility (Web Version)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials. 
              Any activity under your account is your responsibility.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Desktop Licensing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The desktop version may require a valid license for continued use. 
              License keys are non-transferable unless explicitly stated. 
              Unauthorized distribution or resale is prohibited.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All software, branding, and content related to My Text Digest 
              remain the intellectual property of its creators. 
              You may not copy, modify, or distribute the platform without permission.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided “as is” without warranties of any kind. 
              We are not liable for any indirect, incidental, or consequential damages 
              arising from the use of the platform.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Modifications to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms periodically. Continued use of the service 
              after changes indicates acceptance of the revised terms.
            </p>
          </div>

          {/* Footer Note */}
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