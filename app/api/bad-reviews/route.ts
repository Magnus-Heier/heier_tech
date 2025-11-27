export const runtime = "nodejs";

const BAD_REVIEWS_API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:U0lx3VKt/bad_reviews";

export async function POST(request: Request) {
  try {
    const { stars, message } = await request.json();

    if (stars === undefined || !message) {
      return new Response(JSON.stringify({ error: "Missing fields: stars and message are required" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (typeof stars !== "number" || stars < 0 || stars > 5) {
      return new Response(JSON.stringify({ error: "Invalid stars value: must be a number between 0 and 5" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const response = await fetch(BAD_REVIEWS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stars,
        message: message.trim(),
        user_id: 5,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Bad reviews API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to save review" }),
        { 
          status: response.status || 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify({ success: true, data }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("/api/bad-reviews error", error);
    const message = error instanceof Error ? error.message : "Failed to save review";
    return new Response(JSON.stringify({ error: message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

