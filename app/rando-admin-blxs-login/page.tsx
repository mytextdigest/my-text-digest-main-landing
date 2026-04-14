"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      router.push("/rando-admin-blxs");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060A] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />

      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#7C7CFF] rounded-full animate-pulse" />

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl glass space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            <span className="text-[#EDEDED]">Admin </span>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
              Login
            </span>
          </h1>
          <p className="text-[#EDEDED]/60 text-sm">
            Secure access to dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-[#7C7CFF]/10 border border-[#7C7CFF]/30 text-[#EDEDED]/80 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm text-[#EDEDED]/60">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded-lg bg-[#0B1020]/50 border border-[#7C7CFF]/20 focus:outline-none focus:border-[#00E5FF]/60 focus:ring-1 focus:ring-[#00E5FF]/40 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm text-[#EDEDED]/60">Password</label>
          <input
            type="password"
            required
            className="w-full p-3 rounded-lg bg-[#0B1020]/50 border border-[#7C7CFF]/20 focus:outline-none focus:border-[#00E5FF]/60 focus:ring-1 focus:ring-[#00E5FF]/40 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] hover:opacity-90 transition relative overflow-hidden"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Subtle Footer */}
        <p className="text-center text-xs text-[#EDEDED]/40">
          Restricted access • Authorized personnel only
        </p>

        {/* Corner Glow */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 blur-2xl bg-[#00E5FF]" />
      </motion.form>
    </div>
  );
}