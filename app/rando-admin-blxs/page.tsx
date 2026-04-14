import { FiUsers, FiCreditCard, FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";

type AnalyticsData = {
  totalUsers: number;
  totalSubscriptions: number;
  activeSubscriptions: number;
};

async function getCloud(): Promise<AnalyticsData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/cloud`, {
    cache: "no-store",
  });
  return res.json();
}

async function getDesktop(): Promise<AnalyticsData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/desktop`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function DashboardPage() {
  const [cloud, desktop] = await Promise.all([
    getCloud(),
    getDesktop(),
  ]);

  const combined = {
    totalUsers: cloud.totalUsers + desktop.totalUsers,
    totalSubscriptions:
      cloud.totalSubscriptions + desktop.totalSubscriptions,
    activeSubscriptions:
      cloud.activeSubscriptions + desktop.activeSubscriptions,
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-[#EDEDED]">Admin </span>
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
            Dashboard
          </span>
        </h1>
        <p className="text-[#EDEDED]/50 text-sm mt-2">
          Overview of platform analytics
        </p>
      </div>

      {/* Sections */}
      <Section title="Combined">
        <Card title="Total Users" value={combined.totalUsers} icon={FiUsers} />
        <Card title="Total Subs" value={combined.totalSubscriptions} icon={FiCreditCard} />
        <Card title="Active Subs" value={combined.activeSubscriptions} icon={FiActivity} />
      </Section>

      <Section title="Cloud">
        <Card title="Users" value={cloud.totalUsers} icon={FiUsers} />
        <Card title="Subs" value={cloud.totalSubscriptions} icon={FiCreditCard} />
        <Card title="Active" value={cloud.activeSubscriptions} icon={FiActivity} />
      </Section>

      <Section title="Desktop">
        <Card title="Users" value={desktop.totalUsers} icon={FiUsers} />
        <Card title="Subs" value={desktop.totalSubscriptions} icon={FiCreditCard} />
        <Card title="Active" value={desktop.activeSubscriptions} icon={FiActivity} />
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold mb-6 text-[#EDEDED]/80">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: number;
  icon: IconType;
}) {
  return (
    <div className="relative p-6 rounded-2xl glass hover:glow-violet transition-all duration-300">
      
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#7C7CFF]/5 opacity-0 hover:opacity-100 transition" />

      <div className="relative z-10">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#EDEDED]/60">
            {title}
          </p>

          {/* ICON (Enhanced Version) */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center 
            bg-gradient-to-br from-[#00E5FF]/20 to-[#7C7CFF]/10 
            border border-[#00E5FF]/20"
          >
            <Icon className="w-5 h-5 text-[#00E5FF]" />
          </div>
        </div>

        {/* Value */}
        <p className="text-3xl font-bold text-[#00E5FF]">
          {value}
        </p>
      </div>
    </div>
  );
}