import { NextRequest, NextResponse } from "next/server";

/**
 * IndexNow API endpoint — notifies search engines (Bing, Yandex, etc.)
 * when content is updated for faster indexing.
 *
 * POST /api/indexnow
 * Body: { "url": "https://datasphereinnovation.fr/blog/my-article" }
 *
 * The API key is stored in the site root at /indexnow-key.txt
 */
const SITE_URL = "https://datasphereinnovation.fr";
const INDEXNOW_KEY = "datasphereinnovation2026key"; // Must match /public/indexnow-key.txt

const SEARCH_ENGINES = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // Validate URL belongs to our domain
    if (!url.startsWith(SITE_URL)) {
      return NextResponse.json(
        { error: "URL must belong to datasphereinnovation.fr" },
        { status: 400 }
      );
    }

    const payload = {
      host: SITE_URL.replace("https://", ""),
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`,
      urlList: [url],
    };

    // Notify all search engines
    const results = await Promise.allSettled(
      SEARCH_ENGINES.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        return { endpoint, status: response.status };
      })
    );

    const successCount = results.filter(
      (r) => r.status === "fulfilled" && (r.value.status === 200 || r.value.status === 202)
    ).length;

    return NextResponse.json({
      success: true,
      notified: successCount,
      total: SEARCH_ENGINES.length,
      results: results.map((r) =>
        r.status === "fulfilled" ? r.value : { error: "failed" }
      ),
    });
  } catch (error) {
    console.error("IndexNow error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
