import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Text Digest - AI-Powered Private Document Intelligence",
  description: "Ask anything from your documents. Upload PDFs, Word files, PPTs, spreadsheets, code, or text — My Text Digest gives precise, contextual answers instantly. 100% private & offline-ready.",
  keywords: ["AI", "document intelligence", "PDF reader", "question answering", "private AI", "desktop app", "document analysis"],
  authors: [{ name: "My Text Digest" }],
  openGraph: {
    title: "My Text Digest - AI-Powered Private Document Intelligence",
    description: "Turn your documents into answers with complete privacy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
