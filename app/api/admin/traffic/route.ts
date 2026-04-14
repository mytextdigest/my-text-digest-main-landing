import { NextResponse } from "next/server";

type PostHogResponse = {
  result?: {
    data: number[];
  }[];
};

export async function GET() {
  try {
    const res = await fetch(
      "https://app.posthog.com/api/projects/YOUR_PROJECT_ID/insights/trend/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          insight: "TRENDS",
          events: [
            {
              id: "$pageview",
              name: "$pageview",
              type: "events",
            },
          ],
          interval: "day",
          date_from: "-30d",
        }),
      }
    );

    const data: PostHogResponse = await res.json();

    const series = data.result?.[0]?.data || [];

    const totalViews = series.reduce(
      (a: number, b: number) => a + b,
      0
    );

    return NextResponse.json({
      totalViews,
      raw: series,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}