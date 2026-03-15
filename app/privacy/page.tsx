'use client';

import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import mammoth from "mammoth";
import { useEffect, useState } from 'react';

export default function TermsPage() {
  const docs = [
    {
      uri: "/legal/privacy.docx",
      fileType: "docx",
      fileName: "Terms of Use",
    },
  ];

  const [html, setHtml] = useState("");

  useEffect(() => {
    async function loadDoc() {

      const response = await fetch("/legal/privacy.docx");
      const arrayBuffer = await response.arrayBuffer();

      const result = await mammoth.convertToHtml({ arrayBuffer });

      setHtml(result.value);
    }

    loadDoc();
  }, []);
  return (
    <PageLayout>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">

        {/* Background Accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute top-60 right-10 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">

          {/* Header */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center mb-16"
          >

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">Policy</span>
            </h1>

          </motion.div>

          {/* Terms Container */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            className="glass rounded-2xl p-8 md:p-12 space-y-10 leading-relaxed"
          >
            <div
              className="glass rounded-2xl p-10 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />

          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}