import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar from "../components/admin/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("admin_auth")?.value === "true";

  if (!isAuth) {
    redirect("/rando-admin-blxs-login");
  }

  return (
    <div className="flex min-h-screen bg-[#05060A] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#7C7CFF]/10 rounded-full blur-[120px]" />

      <Sidebar />

      <main className="flex-1 p-8 relative z-10">
        {children}
      </main>
    </div>
  );
}