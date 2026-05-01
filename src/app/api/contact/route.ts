import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// ─── Input Types ──────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  rgpd: boolean;
}

// ─── Server-side Validation ───────────────────────────────────────────────────

function validateInput(data: unknown): {
  valid: boolean;
  error?: string;
  sanitized?: ContactPayload;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Données invalides." };
  }

  const raw = data as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const rgpd = raw.rgpd === true;

  if (!name) return { valid: false, error: "Le nom est requis." };
  if (!email) return { valid: false, error: "L'email est requis." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { valid: false, error: "L'email n'est pas valide." };
  if (!subject) return { valid: false, error: "Veuillez sélectionner un sujet." };
  if (!message) return { valid: false, error: "Le message est requis." };
  if (message.length < 10)
    return {
      valid: false,
      error: "Le message doit contenir au moins 10 caractères.",
    };
  if (!rgpd)
    return {
      valid: false,
      error: "Vous devez accepter la politique de confidentialité.",
    };

  return {
    valid: true,
    sanitized: {
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      subject,
      message,
      rgpd,
    },
  };
}

// ─── Rate Limiting (in-memory, 3 per IP per 15 minutes) ──────────────────────

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 15 * 60_000; // 15 minutes
const RATE_LIMIT_MAX = 3; // 3 submissions per 15 minutes

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

// ─── POST Handler ─────────────────────────────────────────────────────────────

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
            "Trop de demandes. Veuillez patienter 15 minutes avant de réessayer.",
        },
        { status: 429 }
      );
    }

    // Parse body
    const body = await req.json();

    // Validate input
    const { valid, error, sanitized } = validateInput(body);
    if (!valid || !sanitized) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Save to database
    const submission = await db.contactSubmission.create({
      data: {
        name: sanitized.name,
        email: sanitized.email,
        phone: sanitized.phone ?? null,
        company: sanitized.company ?? null,
        subject: sanitized.subject,
        message: sanitized.message,
        rgpd: sanitized.rgpd,
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: submission.id,
        message:
          "Merci pour votre message ! Nous vous recontacterons sous 24h.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
