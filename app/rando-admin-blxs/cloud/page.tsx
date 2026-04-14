import { FiUsers, FiCreditCard, FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";

type User = {
  id: string;
  email: string;
  createdAt: string;
};

type AnalyticsData = {
  totalUsers: number;
  totalSubscriptions: number;
  activeSubscriptions: number;
  recentUsers?: User[]; // 👈 added
};

async function getCloud(): Promise<AnalyticsData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/cloud`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function CloudPage() {
  const cloud = await getCloud();

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-[#EDEDED]">Cloud </span>
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
            Analytics
          </span>
        </h1>
        <p className="text-[#EDEDED]/50 text-sm mt-2">
          Insights from cloud platform usage
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Total Users" value={cloud.totalUsers} icon={FiUsers} />
        <Card title="Total Subs" value={cloud.totalSubscriptions} icon={FiCreditCard} />
        <Card title="Active Subs" value={cloud.activeSubscriptions} icon={FiActivity} />
      </div>

      {/* Recent Users */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#EDEDED]/80">
            Recent Users
          </h2>
          <p className="text-xs text-[#EDEDED]/40 mt-1">
            Data from the last 7 days
          </p>
        </div>

        {/* Empty State */}
        {!cloud.recentUsers || cloud.recentUsers.length === 0 ? (
          <div className="p-6 rounded-xl bg-[#0B1020]/40 border border-[#7C7CFF]/20 text-center">
            <p className="text-[#EDEDED]/60 text-sm">
              No recent users in the last 7 days
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {cloud.recentUsers.map((user) => (
              <div
                key={user.id}
                className="p-4 rounded-xl bg-[#0B1020]/50 border border-[#7C7CFF]/20 hover:border-[#00E5FF]/40 transition flex justify-between items-center"
              >
                <span className="text-[#EDEDED]/80">
                  {user.email}
                </span>
                <span className="text-xs text-[#EDEDED]/40">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
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
      
      <div className="absolute inset-0 rounded-2xl bg-[#00E5FF]/5 opacity-0 hover:opacity-100 transition" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#EDEDED]/60">
            {title}
          </p>

          <div className="w-10 h-10 rounded-lg flex items-center justify-center 
            bg-gradient-to-br from-[#00E5FF]/20 to-[#7C7CFF]/10 
            border border-[#00E5FF]/20"
          >
            <Icon className="w-5 h-5 text-[#00E5FF]" />
          </div>
        </div>

        <p className="text-3xl font-bold text-[#00E5FF]">
          {value}
        </p>
      </div>
    </div>
  );
}