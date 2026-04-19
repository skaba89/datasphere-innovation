/**
 * IndexNow utility — auto-notifies search engines when content changes.
 * Call `notifyIndexNow(url)` after content updates for faster indexing.
 *
 * Supported engines: Bing, Yandex, IndexNow.org
 * Key file: /public/indexnow-key.txt
 */

const SITE_URL = "https://datasphereinnovation.fr";
const INDEXNOW_KEY = "datasphereinnovation2026key";

const SEARCH_ENGINES = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

/**
 * Notify search engines about a URL change via IndexNow protocol.
 * Can be called from server components, API routes, or build scripts.
 */
export async function notifyIndexNow(url: string): Promise<{
  success: boolean;
  notified: number;
  total: number;
}> {
  if (!url.startsWith(SITE_URL)) {
    console.warn(`[IndexNow] URL must belong to ${SITE_URL}: ${url}`);
    return { success: false, notified: 0, total: SEARCH_ENGINES.length };
  }

  const payload = {
    host: SITE_URL.replace("https://", ""),
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/indexnow-key.txt`,
    urlList: [url],
  };

  try {
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
      (r) =>
        r.status === "fulfilled" &&
        (r.value.status === 200 || r.value.status === 202)
    ).length;

    console.log(
      `[IndexNow] Notified ${successCount}/${SEARCH_ENGINES.length} engines for: ${url}`
    );

    return {
      success: successCount > 0,
      notified: successCount,
      total: SEARCH_ENGINES.length,
    };
  } catch (error) {
    console.error("[IndexNow] Error:", error);
    return { success: false, notified: 0, total: SEARCH_ENGINES.length };
  }
}

/**
 * Batch notify multiple URLs — useful after a full site rebuild.
 */
export async function notifyIndexNowBatch(urls: string[]): Promise<{
  success: boolean;
  notified: number;
  total: number;
}> {
  const validUrls = urls.filter((url) => url.startsWith(SITE_URL));
  if (validUrls.length === 0) {
    return { success: false, notified: 0, total: SEARCH_ENGINES.length };
  }

  const payload = {
    host: SITE_URL.replace("https://", ""),
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/indexnow-key.txt`,
    urlList: validUrls,
  };

  try {
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
      (r) =>
        r.status === "fulfilled" &&
        (r.value.status === 200 || r.value.status === 202)
    ).length;

    console.log(
      `[IndexNow] Batch notified ${successCount}/${SEARCH_ENGINES.length} engines for ${validUrls.length} URLs`
    );

    return {
      success: successCount > 0,
      notified: successCount,
      total: SEARCH_ENGINES.length,
    };
  } catch (error) {
    console.error("[IndexNow] Batch error:", error);
    return { success: false, notified: 0, total: SEARCH_ENGINES.length };
  }
}
