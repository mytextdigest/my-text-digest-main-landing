"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Dashboard", href: "/rando-admin-blxs" },
    { name: "Cloud", href: "/rando-admin-blxs/cloud" },
    { name: "Desktop", href: "/rando-admin-blxs/desktop" },
    { name: "Traffic", href: "/rando-admin-blxs/traffic" }, // ✅ add this
  ];

  // ✅ Logout handler
  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/rando-admin-blxs-login");
  }

  return (
    <div className="w-64 min-h-screen p-6 bg-[#05060A] border-r border-[#7C7CFF]/10 relative flex flex-col">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[200px] h-[200px] bg-[#00E5FF]/10 blur-[100px]" />

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-xl font-bold">
          <span className="text-[#EDEDED]">Admin </span>
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
            Panel
          </span>
        </h2>
        <p className="text-xs text-[#EDEDED]/40 mt-1">
          Management dashboard
        </p>
      </div>

      {/* Links */}
      <div className="space-y-2 flex-1">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <motion.div key={link.href} whileHover={{ x: 4 }}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 relative
                  ${
                    active
                      ? "bg-[#7C7CFF]/10 text-[#00E5FF] border border-[#7C7CFF]/30"
                      : "text-[#EDEDED]/70 hover:bg-[#0B1020]/60 hover:text-[#EDEDED]"
                  }
                `}
              >
                {link.name}

                {active && (
                  <div className="absolute inset-0 rounded-xl bg-[#00E5FF]/5 blur-xl" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ✅ Logout Button */}
      <div className="mt-6">
        <motion.button
          whileHover={{ x: 4 }}
          onClick={handleLogout}
          className="w-full px-4 py-3 rounded-xl text-left transition-all duration-300
            text-[#FF6B6B]/80 hover:text-[#FF6B6B] cursor-pointer
            hover:bg-[#2A0F14]/60 border border-transparent hover:border-[#FF6B6B]/20"
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
}