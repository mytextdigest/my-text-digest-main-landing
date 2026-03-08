'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiDownload, FiHelpCircle, FiMail, FiChevronDown } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import PageLayout from '../components/PageLayout';


export default function HelpPage() {
  const manualRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToManual = () => {
    manualRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [init, setInit] = useState(false);

    useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });
    }, []);

    const particlesConfig = {
    particles: {
        number: {
        value: 70,
        density: { enable: true, value_area: 800 },
        },
        color: { value: ['#3b82f6', '#2563eb'] },
        shape: { type: 'circle' },
        opacity: {
        value: 0.5,
        random: true,
        },
        size: {
        value: 3,
        random: true,
        },
        line_linked: {
        enable: true,
        distance: 150,
        color: '#7C7CFF',
        opacity: 0.3,
        width: 1,
        },
        move: {
        enable: true,
        speed: 1,
        out_mode: 'out',
        },
    },
    interactivity: {
        events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
        },
    },
    retina_detect: true,
    };

  return (
    <PageLayout>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#05060A] via-[#0B1020] to-[#05060A]">
            
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div className="absolute top-60 right-10 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
                <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary-700 rounded-full animate-pulse" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* HERO */}
                <div className="relative min-h-screen flex flex-col items-center justify-center text-center py-24 overflow-hidden">

                    {/* Particles Background */}
                    {init && (
                        <div className="absolute inset-0 z-0">
                            <Particles
                            id="helpParticles"
                            options={particlesConfig as any}
                            className="absolute inset-0"
                            />
                        </div>
                    )}

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] z-0" /> */}

                {/* Light Exposure Glow (like Features) */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-500/20 rounded-full blur-[150px] z-0" />

                {/* Content */}
                    <div className="relative z-10 max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            <span className="text-foreground">Help & </span>
                            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                            Support
                            </span>
                        </motion.h1>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Find guidance, explore FAQs, and get the support you need to make the most of My Text Digest
                        </p>

                        <motion.button
                            onClick={scrollToManual}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition-all duration-300 glow-primary"
                        >
                            Get Help Now
                        </motion.button>
                    </div>
                </div>

                {/* USER MANUAL */}
                <div ref={manualRef} className="py-28 relative">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                    <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
                        📘 Getting Started
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-foreground">User </span>
                        <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                        Manual
                        </span>
                    </h2>

                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        A quick guide to help you start using My Text Digest efficiently.
                    </p>
                    </div>

                    {/* Centered Narrow Container */}
                    <div className="max-w-3xl mx-auto">
                    <div className="glass rounded-2xl p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed">

                        <div className="space-y-4">
                        {[
                            "Upload your documents (PDF, Word, PPT, Excel, or text files).",
                            "Allow the system to process and index your content.",
                            "Ask natural-language questions about your documents.",
                            "Review answers with contextual understanding.",
                            "Use search and multi-document querying for deeper insights.",
                        ].map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-500 flex items-center justify-center font-semibold text-sm">
                                {index + 1}
                            </div>
                            <p className="text-sm md:text-base">{step}</p>
                            </div>
                        ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">

                            {/* Web Manual Button */}
                            <a
                            href="/mytextdigest-web-user-manual.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                                        bg-primary-600 hover:bg-primary-700 
                                        text-white font-semibold 
                                        transition-all duration-300 
                                        glow-primary hover:scale-105"
                            >
                            <FiDownload className="group-hover:animate-bounce" />
                            Download Web Manual
                            </a>

                            {/* Desktop Manual Button */}
                            <a
                            href="/mytextdigest-desktop-user-manual.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                                        border-2 border-primary-500/40 
                                        text-primary-500 font-semibold
                                        hover:bg-primary-500/10 
                                        hover:border-primary-500
                                        transition-all duration-300 
                                        hover:scale-105"
                            >
                            <FiDownload className="group-hover:animate-bounce" />
                            Download Desktop Manual
                            </a>

                        </div>
                    </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 max-w-4xl mx-auto">

                    {[
                    {
                        q: "What is My Text Digest?",
                        a: "My Text Digest is an AI powered platform that lets you ask questions and extract insights directly from your documents instead of manually searching through them.",
                    },
                    {
                        q: "Do I need an API key to use My Text Digest?",
                        a: "Yes. My Text Digest requires users to provide their own OpenAI API key to run the platform.",
                    },
                    {
                        q: "What does Bring Your Own API Key mean?",
                        a: "Bring Your Own API Key means you connect your OpenAI API key to My Text Digest so the platform can process your documents using your own AI usage and billing.",
                    },
                    {
                        q: "Why does My Text Digest require my own API key?",
                        a: "This model gives users full control over API usage, billing, and limits instead of routing AI usage through the platform.",
                    },
                    {
                        q: "Where do I get an OpenAI API key?",
                        a: "You can generate an API key directly from your account at OpenAI through their developer dashboard.",
                    },
                    {
                        q: "Do I pay My Text Digest for AI usage?",
                        a: "No. AI usage costs are billed directly by OpenAI through your own API key. My Text Digest does not add additional markup to API usage.",
                    },
                    {
                        q: "Is my API key stored securely?",
                        a: "Yes. Your API key is stored securely and is only used to process requests between My Text Digest and OpenAI.",
                    },
                    {
                        q: "Can I change or remove my API key later?",
                        a: "Yes. You can update or remove your API key at any time from your settings.",
                    },
                    {
                        q: "Which AI providers are supported?",
                        a: "Currently My Text Digest supports OpenAI API keys. Support for additional providers may be added in future versions.",
                    },
                    {
                        q: "Do I need technical knowledge to use an API key?",
                        a: "No. Generating and adding an OpenAI API key typically takes only a few minutes and requires no programming experience.",
                    },
                    {
                        q: "What types of documents can I upload?",
                        a: "My Text Digest works with common document formats such as PDFs, reports, research papers, and technical documentation.",
                    },
                    {
                        q: "Can I analyze multiple documents at once?",
                        a: "Yes. You can upload multiple documents and interact with them as a single searchable knowledge base.",
                    },
                    {
                        q: "Is my data private?",
                        a: "Yes. My Text Digest is designed with privacy in mind and the desktop version ensures documents remain on your local device.",
                    },
                    {
                        q: "Who is My Text Digest designed for?",
                        a: "The platform is built for anyone working with large or complex documents including researchers, analysts, legal professionals, engineers, and students.",
                    },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className="glass rounded-xl overflow-hidden"
                    >
                        <button
                        onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-6 text-left"
                        >
                        <div className="flex items-center gap-3 text-primary-500 font-semibold">
                            <FiHelpCircle />
                            {item.q}
                        </div>

                        <FiChevronDown
                            className={`transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                            }`}
                        />
                        </button>

                        {openFaq === index && (
                        <div className="px-6 pb-6 text-muted-foreground">
                            {item.a}
                        </div>
                        )}
                    </div>
                    ))}

                </div>
                </div>

                {/* CONTACT */}
                <div className="py-28 relative">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <span className="px-4 py-2 rounded-full border border-primary-500/30 text-primary-500 text-sm font-medium inline-block mb-4">
                            💬 Get in Touch
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="text-foreground">Still Have </span>
                            <span className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent">
                            Questions?
                            </span>
                        </h2>

                        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                            Send us a message and our support team will get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="max-w-3xl mx-auto">
                        <div className="glass rounded-2xl p-8 md:p-12">

                            <form className="space-y-6">

                            {/* Name + Email Row */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                <label className="block text-sm text-muted-foreground mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-[#0B1020]/50 border border-primary-500/20 
                                            focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                                            text-foreground transition"
                                />
                                </div>

                                <div>
                                <label className="block text-sm text-muted-foreground mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-[#0B1020]/50 border border-primary-500/20 
                                            focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                                            text-foreground transition"
                                />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm text-muted-foreground mb-2">
                                Subject
                                </label>
                                <input
                                type="text"
                                placeholder="How can we help?"
                                className="w-full px-4 py-3 rounded-xl bg-[#0B1020]/50 border border-primary-500/20 
                                            focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                                            text-foreground transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-muted-foreground mb-2">
                                Message
                                </label>
                                <textarea
                                rows={5}
                                placeholder="Describe your issue or question..."
                                className="w-full px-4 py-3 rounded-xl bg-[#0B1020]/50 border border-primary-500/20 
                                            focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                                            text-foreground transition resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                                <button
                                type="submit"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full 
                                            bg-primary-600 hover:bg-primary-700 text-white font-semibold 
                                            transition-all duration-300 glow-primary hover:scale-105"
                                >
                                <FiMail className="group-hover:animate-bounce" />
                                Send Message
                                </button>

                                <a
                                href="mailto:support@mytextdigest.com"
                                className="text-primary-500 text-sm hover:underline"
                                >
                                Or email us directly at support@mytextdigest.com
                                </a>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </section>
    </PageLayout>
  );
}