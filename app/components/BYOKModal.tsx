'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiKey, FiExternalLink } from 'react-icons/fi';

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

              {/* Explanation */}
              <div className="text-base font-semibold text-muted-foreground space-y-4 leading-relaxed">

                <p>
                  My Text Digest follows a <strong>Bring Your Own Key (BYOK)</strong> model.
                  You connect your own OpenAI API key to enable AI-powered document
                  analysis and chat features.
                </p>

                <p>
                  This gives you full control over your AI usage and billing.
                  AI usage costs are billed directly by OpenAI based on your API usage.
                </p>

              </div>

              {/* Steps */}
              <div className="mt-6 space-y-3 text-base font-semibold text-muted-foreground">

                <h4 className="text-lg font-bold text-foreground">
                  How to get an OpenAI API Key
                </h4>

                <ol className="list-decimal list-inside space-y-2">

                  <li>
                    Visit{" "}
                    <a
                      href="https://platform.openai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline"
                    >
                      platform.openai.com
                    </a>{" "}
                    and create an account.
                  </li>

                  <li>
                    After logging in, go to <strong>API Keys</strong> and click
                    <strong> "Create new secret key"</strong>.
                  </li>

                  <li>
                    Copy the key and add billing details in your OpenAI account.
                    You will then be able to use the key inside My Text Digest.
                  </li>
                </ol>

              </div>

              {/* Security Tip */}
              <div className="mt-6 text-sm font-semibold text-muted-foreground">
                Tip: Never share your API key publicly. Treat it like a password.
              </div>

              {/* Manual Link */}
              <div className="mt-6">
                <a
                  href="/mytextdigest-desktop-user-manual.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:underline"
                >
                  Read the full setup guide
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}