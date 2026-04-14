import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chat-system-prompt";

// ─── Configuration Multi-Provider (Groq / OpenRouter) ────────────────────────
// Le chatbot supporte Groq et OpenRouter comme fournisseurs IA.
// Configurez les variables d'environnement pour activer chaque provider :
//   GROQ_API_KEY=<your-groq-key>           → Active Groq (priorité 1)
//   OPENROUTER_API_KEY=<your-openrouter-key> → Active OpenRouter (priorité 2)
// Si aucun provider n'est configuré, fallback sur z-ai-web-dev-sdk.

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

const GROQ_MODEL = "llama-3.3-70b-versatile";
const OPENROUTER_MODEL = "google/gemini-2.0-flash-001";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function callGroq(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY not configured");

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 500,
      top_p: 0.9,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return (
    data.choices?.[0]?.message?.content ||
    "Je suis désolé, je n'ai pas pu générer une réponse."
  );
}

async function callOpenRouter(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not configured");

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://datasphereinnovation.fr",
      "X-Title": "DataSphere Innovation Chatbot",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return (
    data.choices?.[0]?.message?.content ||
    "Je suis désolé, je n'ai pas pu générer une réponse."
  );
}

async function callZAI(messages: ChatMessage[]): Promise<string> {
  const ZAI = (await import("z-ai-web-dev-sdk")).default;
  const zai = await ZAI.create();

  const completion = await zai.chat.completions.create({
    messages,
    temperature: 0.7,
    max_tokens: 500,
  });

  return (
    completion.choices?.[0]?.message?.content ||
    "Je suis désolé, je n'ai pas pu générer une réponse."
  );
}

// ─── Provider Resolution ─────────────────────────────────────────────────────
// Priority: Groq → OpenRouter → z-ai-web-dev-sdk (fallback)

function getActiveProvider(): {
  name: string;
  fn: (messages: ChatMessage[]) => Promise<string>;
} {
  if (process.env.GROQ_API_KEY) {
    return { name: "groq", fn: callGroq };
  }
  if (process.env.OPENROUTER_API_KEY) {
    return { name: "openrouter", fn: callOpenRouter };
  }
  return { name: "zai-sdk", fn: callZAI };
}

// ─── Rate Limiting (in-memory, basic) ────────────────────────────────────────

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 messages per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

// ─── POST Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Trop de requêtes. Veuillez patienter quelques instants avant de réessayer.",
        },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages manquants ou invalides." },
        { status: 400 }
      );
    }

    // Build message list with system prompt
    const fullMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    ];

    // Call the active provider with fallback chain
    const provider = getActiveProvider();
    let responseText: string;

    try {
      responseText = await provider.fn(fullMessages);
    } catch (primaryError) {
      console.warn(
        `Primary provider (${provider.name}) failed, trying fallback...`,
        primaryError instanceof Error ? primaryError.message : primaryError
      );

      // Try fallback providers
      const fallbacks: {
        name: string;
        fn: (messages: ChatMessage[]) => Promise<string>;
      }[] = [];

      if (provider.name !== "openrouter" && process.env.OPENROUTER_API_KEY) {
        fallbacks.push({ name: "openrouter", fn: callOpenRouter });
      }
      if (provider.name !== "groq" && process.env.GROQ_API_KEY) {
        fallbacks.push({ name: "groq", fn: callGroq });
      }
      if (provider.name !== "zai-sdk") {
        fallbacks.push({ name: "zai-sdk", fn: callZAI });
      }

      let lastError = primaryError;
      responseText = "";

      for (const fallback of fallbacks) {
        try {
          responseText = await fallback.fn(fullMessages);
          break;
        } catch (fallbackError) {
          console.warn(
            `Fallback provider (${fallback.name}) also failed:`,
            fallbackError instanceof Error ? fallbackError.message : fallbackError
          );
          lastError = fallbackError;
        }
      }

      if (!responseText) {
        throw lastError;
      }
    }

    return NextResponse.json({
      message: responseText,
      provider: provider.name,
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de la communication avec l'assistant. Veuillez réessayer.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
