"use client";

import { useCallback } from "react";

// Analytics event categories
export const AnalyticsEvents = {
  CONTACT_FORM: "contact_form",
  CTA_CLICK: "cta_click",
  SERVICE_VIEW: "service_view",
  BLOG_READ: "blog_read",
  NEWSLETTER: "newsletter",
  CHAT_INTERACTION: "chat_interaction",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
} as const;

export function useAnalytics() {
  const trackEvent = useCallback(
    ({
      action,
      category,
      label,
      value,
    }: {
      action: string;
      category: string;
      label?: string;
      value?: number;
    }) => {
      // Google Analytics 4
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }

      // Vercel Analytics (custom event)
      if (typeof window !== "undefined" && window.va) {
        window.va("event", {
          name: action,
          data: { category, label, value },
        });
      }
    },
    []
  );

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX", {
        page_path: url,
      });
    }
  }, []);

  return { trackEvent, trackPageView };
}

// Type declaration for Vercel Analytics
declare global {
  interface Window {
    va?: (command: string, data?: Record<string, unknown>) => void;
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
