export async function GET() {
    try {
      const res = await fetch(
        "https://my-text-digest-saas.vercel.app/api/plans",
        { cache: "no-store" }
      );
  
      const data = await res.json();
  
      return Response.json(data);
    } catch (error) {
      return new Response("Failed to fetch plans", { status: 500 });
    }
  }