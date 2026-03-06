'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiKey } from 'react-icons/fi';

interface BYOKModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BYOKModal({ open, onClose }: BYOKModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
          >
            <div className="bg-[#0B1020] border border-primary-500/20 shadow-2xl max-w-xl w-full rounded-2xl p-10 relative">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-muted-foreground hover:text-white bg-red-500 hover:bg-red-700 cursor-pointer rounded-sm p-1 transition"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <FiKey className="w-6 h-6 text-primary-500" />
                <h3 className="text-2xl font-bold text-foreground">
                  Bring Your Own OpenAI Key
                </h3>
              </div>

              {/* Content */}
              <div className="text-base font-semibold text-muted-foreground space-y-5 leading-relaxed">

                <p>
                  My Text Digest follows a Bring Your Own Key (BYOK) model.
                  You connect your own OpenAI API key to enable AI-powered
                  document analysis and chat capabilities.
                </p>

                <p>
                  This model gives you full control over AI usage, billing,
                  and provider configuration while keeping your API key
                  securely managed within your workspace.
                </p>

                <p>
                  AI usage costs are billed directly by OpenAI based on your
                  API usage. The subscription fee only covers access to the
                  My Text Digest platform and its infrastructure.
                </p>

              </div>

              <div className="mt-8 text-sm font-semibold text-muted-foreground">
                You can add or update your API key anytime from your account settings.
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}