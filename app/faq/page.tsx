'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHelpCircle, FiChevronDown, FiMail } from 'react-icons/fi';
import PageLayout from '../components/PageLayout';

type FAQItem = { q: string; a: string };

type Category = {
  id: string;
  label: string;
  icon: string;
  questions: FAQItem[];
};

const categories: Category[] = [
  {
    id: 'general',
    label: 'General',
    icon: '💬',
    questions: [
      {
        q: 'What is My Text Digest?',
        a: 'My Text Digest is an AI-powered private document intelligence platform. Upload your documents, organize them into projects, and chat with them using AI, getting precise, context-aware answers without manually reading through everything.',
      },
      {
        q: 'Who is My Text Digest designed for?',
        a: 'My Text Digest is built for researchers, analysts, legal professionals, engineers, consultants, students, and any knowledge worker who regularly deals with large or complex documents.',
      },
      {
        q: 'What types of documents does My Text Digest support?',
        a: 'My Text Digest works with common document formats including PDFs, Word documents, PowerPoint presentations, Excel files, and plain text files.',
      },
      {
        q: 'Can I analyze multiple documents at once?',
        a: 'Yes. You can organize documents into project-based workspaces and use Project Chat to query across all documents in a project simultaneously, uncovering connections and patterns across your entire knowledge base.',
      },
      {
        q: 'What AI model does My Text Digest use?',
        a: "My Text Digest uses OpenAI's models through the API key you provide. Since you bring your own key, you have direct access to the OpenAI models available on your account.",
      },
      {
        q: 'Is there a free trial?',
        a: 'We currently do not offer a free trial. Both Cloud and Desktop plans are available at affordable monthly and yearly rates, and you can cancel at any time.',
      },
    ],
  },
  {
    id: 'byok',
    label: 'Bring Your Own Key',
    icon: '🔑',
    questions: [
      {
        q: 'What is Bring Your Own Key (BYOK)?',
        a: 'BYOK means you connect your own OpenAI API key to My Text Digest. Instead of routing your AI usage through the platform, your key is used directly, giving you full control over your AI usage, billing, and rate limits.',
      },
      {
        q: 'Why does My Text Digest use a BYOK model?',
        a: 'The BYOK model gives you complete ownership and transparency. Your AI costs go directly to OpenAI at their standard rates with no markup from us. It also means your documents are processed under your own OpenAI account, keeping AI access fully in your hands.',
      },
      {
        q: 'Which AI providers are supported?',
        a: 'My Text Digest currently supports OpenAI API keys. Support for additional providers may be introduced in future updates.',
      },
      {
        q: 'Where do I get an OpenAI API key?',
        a: 'Visit platform.openai.com, create an account, navigate to the API Keys section, and click "Create new secret key". Copy the key, add billing details to your OpenAI account, then paste it into My Text Digest settings.',
      },
      {
        q: 'How much does the OpenAI API cost?',
        a: 'OpenAI charges based on usage (tokens processed). For most document analysis tasks, costs are very low, often just a few cents per document. You can set spending limits directly in your OpenAI dashboard.',
      },
      {
        q: 'Do I pay My Text Digest for AI usage?',
        a: 'No. AI usage costs are billed directly by OpenAI through your own API key. My Text Digest does not add any markup to API usage, you only pay us for the platform subscription.',
      },
      {
        q: 'Is my API key stored securely?',
        a: 'Yes. Your API key is stored securely and is only used to process requests between My Text Digest and OpenAI. In the Desktop version, your key is stored locally on your machine.',
      },
      {
        q: 'Can I change or remove my API key later?',
        a: 'Yes. You can update or remove your API key at any time from the settings panel inside the app.',
      },
      {
        q: 'Do I need technical knowledge to set up an API key?',
        a: 'No. Generating and adding an OpenAI API key takes only a few minutes and requires no programming experience. Our user manual includes a step-by-step setup guide.',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Version',
    icon: '☁️',
    questions: [
      {
        q: 'What is the Cloud version of My Text Digest?',
        a: 'The Cloud version is a browser-based platform hosted at cloud.mytextdigest.com. It lets you securely access your documents and AI workspace from any device, anywhere, no installation required.',
      },
      {
        q: 'What are the Cloud pricing plans?',
        a: 'Cloud plans are subscription-based (monthly or yearly) and are differentiated primarily by storage capacity in GB. Visit the Cloud Pricing page for the latest plan details and pricing.',
      },
      {
        q: 'Can I access the Cloud version from multiple devices?',
        a: 'Yes. Because the Cloud version is browser-based, you can log in from any device, desktop, laptop, or tablet, and access your full workspace instantly.',
      },
      {
        q: 'Where are my documents stored in the Cloud version?',
        a: 'Your documents are stored securely on our Cloud infrastructure. Each account has an isolated personal workspace, no other user can see or access your documents.',
      },
      {
        q: 'Is there a storage limit on Cloud plans?',
        a: 'Yes. Each Cloud plan includes a defined storage limit in GB. You can upload documents up to that limit. Upgrading your plan gives you more storage.',
      },
      {
        q: 'What happens to my data if I cancel my Cloud plan?',
        a: 'We recommend exporting or downloading your documents before cancelling. Once a subscription lapses, access to your Cloud workspace will be restricted.',
      },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop Version',
    icon: '🖥️',
    questions: [
      {
        q: 'What is the Desktop version of My Text Digest?',
        a: 'The Desktop version is a locally installed application that runs on your computer. Your documents never leave your machine, everything is stored and processed locally, giving you maximum privacy.',
      },
      {
        q: 'What are the Desktop pricing plans?',
        a: 'Desktop plans are subscription-based (monthly or yearly) and are differentiated by the number of device licenses. Visit the Desktop Pricing page for the latest plan details and pricing.',
      },
      {
        q: 'How many devices can I install the Desktop app on?',
        a: 'The number of devices depends on your plan. Each Desktop plan specifies a device license limit. If you need more devices, you can upgrade to a higher plan.',
      },
      {
        q: 'Do my documents stay on my computer?',
        a: 'Yes. With the Desktop version, your documents are stored and processed entirely on your local machine. They are never uploaded to our servers.',
      },
      {
        q: 'Does the Desktop version require an internet connection?',
        a: 'An internet connection is required for AI-powered features, since queries are sent to OpenAI via your API key. However, your documents themselves remain on your local machine at all times.',
      },
      {
        q: 'What operating systems does the Desktop app support?',
        a: 'Please refer to the Desktop user manual or contact our support team at support@mytextdigest.com for current OS compatibility details.',
      },
    ],
  },
  {
    id: 'comparison',
    label: 'Cloud vs. Desktop',
    icon: '⚖️',
    questions: [
      {
        q: 'What is the main difference between Cloud and Desktop?',
        a: 'Cloud stores your documents on our secure servers and is accessible from any device via a browser. Desktop stores everything locally on your computer, your files never leave your machine.',
      },
      {
        q: 'Which version should I choose?',
        a: 'Choose Cloud if you need multi-device access and the convenience of browser-based access. Choose Desktop if you prioritize maximum privacy and want full control over where your documents are stored. Both versions use the BYOK model for AI.',
      },
      {
        q: 'Can I use both versions?',
        a: 'Yes. Cloud and Desktop are separate products with separate subscriptions. You can subscribe to both if your workflow benefits from having both options available.',
      },
      {
        q: 'Do the two versions share documents or data?',
        a: 'No. Cloud and Desktop are fully independent. Documents in the Cloud version are stored on our servers. Documents in the Desktop version stay on your machine. They do not sync with each other.',
      },
      {
        q: 'Are the features the same across both versions?',
        a: 'Both versions offer core features including document upload, AI document chat, project-based workspaces, and smart summaries. The Desktop version additionally offers fully local storage. Feature sets may vary slightly as the products evolve.',
      },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: '🔒',
    questions: [
      {
        q: 'Is my data private?',
        a: 'Yes. My Text Digest is built with privacy as a core principle. In the Desktop version, documents never leave your machine. In the Cloud version, each account has an isolated private workspace with no cross-account access.',
      },
      {
        q: 'Who can see my documents?',
        a: 'Only you. Documents in your workspace are private to your account. My Text Digest staff do not access your document contents. In the Desktop version, no one outside your local machine sees your files.',
      },
      {
        q: 'Are my documents shared with OpenAI?',
        a: "When you use AI features such as chat or summaries, relevant portions of your document content are sent to OpenAI's API for processing, this is necessary to generate AI responses. OpenAI's usage policies apply to this data. My Text Digest does not share data with any other third party.",
      },
      {
        q: 'How is my API key protected?',
        a: 'Your API key is stored securely and used only to authenticate requests between My Text Digest and OpenAI. We do not expose your key to other users or third parties. In the Desktop version, it is stored locally on your device.',
      },
      {
        q: 'Where can I find your Privacy Policy?',
        a: 'Our full Privacy Policy is available at the /privacy page on this site.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Pricing & Billing',
    icon: '💳',
    questions: [
      {
        q: 'Are there monthly and yearly billing options?',
        a: 'Yes. Both Cloud and Desktop plans are available on monthly or yearly billing cycles. Yearly billing typically offers a discount compared to the equivalent monthly rate.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major credit and debit cards. Payment is processed securely through our payment provider.',
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes. You can cancel your subscription at any time. Your access will continue until the end of the current billing period.',
      },
      {
        q: 'Do you offer refunds?',
        a: 'Please contact our support team at support@mytextdigest.com regarding refund requests. We review these on a case-by-case basis.',
      },
      {
        q: 'Can I upgrade or downgrade my plan?',
        a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes typically take effect at the next billing cycle.',
      },
      {
        q: 'Are Cloud and Desktop subscriptions separate?',
        a: 'Yes. Cloud and Desktop are separate products with independent subscriptions. Subscribing to one does not grant access to the other.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A] min-h-screen">

        {/* Ambient dots */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute top-60 right-10 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
        </div>

        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-500/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-6">
              Frequently Asked Questions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Have </span>
              <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to know about My Text Digest, BYOK, pricing, privacy, Cloud vs. Desktop, and more.
            </p>
          </motion.div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] text-white border-transparent shadow-xl shadow-primary-500/40 scale-105 ring-2 ring-primary-500/50'
                    : 'border-primary-500/20 text-muted-foreground hover:border-primary-500/40 hover:text-primary-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto space-y-3"
            >
              {currentCategory.questions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 group"
                  >
                    <div className="flex items-start gap-3">
                      <FiHelpCircle className="mt-0.5 flex-shrink-0 text-primary-500" />
                      <span className="text-foreground font-semibold text-sm md:text-base group-hover:text-primary-400 transition-colors duration-200">
                        {item.q}
                      </span>
                    </div>
                    <FiChevronDown
                      className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180 text-primary-500' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-primary-500/10">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="glass rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-foreground">Still have </span>
                <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                  questions?
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Our support team is here to help. Reach out and we will get back to you as soon as possible.
              </p>
              <a
                href="mailto:support@mytextdigest.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all duration-300 glow-primary hover:scale-105"
              >
                <FiMail />
                Contact Support
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Or visit our{' '}
                <a href="/help" className="text-primary-500 hover:underline">
                  Help &amp; Support
                </a>{' '}
                page for guides and the user manual.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
}
