import { FiActivity, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";

type TrafficData = {
  totalViews: number;
  raw: number[];
};

async function getTraffic(): Promise<TrafficData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/traffic`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function TrafficPage() {
  const traffic = await getTraffic();

  const lastDayViews =
    traffic.raw?.[traffic.raw.length - 1] || 0;

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-[#EDEDED]">Traffic </span>
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C7CFF] bg-clip-text text-transparent">
            Analytics
          </span>
        </h1>
        <p className="text-[#EDEDED]/50 text-sm mt-2">
          Landing page traffic insights (PostHog)
        </p>
      </div>

      {/* Overview Section */}
      <Section title="Overview">
        <Card
          title="Total Page Views (30d)"
          value={traffic.totalViews}
          icon={FiActivity}
        />

        <Card
          title="Last Day Views"
          value={lastDayViews}
          icon={FiTrendingUp}
        />
      </Section>

      {/* Raw Data List (Optional but useful) */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-6 text-[#EDEDED]/80">
          Daily Views (Last 30 Days)
        </h2>

        <div className="space-y-2">
          {traffic.raw?.map((val, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-[#0B1020]/60 border border-[#7C7CFF]/10 text-[#EDEDED]/70 text-sm"
            >
              Day {i + 1}: {val}
            </div>
          ))}
        </div>
      </div>
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