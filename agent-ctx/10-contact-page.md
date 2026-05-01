# Task 10 — Contact Page & Google Maps Enhancement

## Summary

Completed all 4 subtasks for enhancing the ContactSection and creating a standalone contact page.

### Changes Made

1. **ContactSection.tsx** — Added Google Maps embed iframe below the address card:
   - Embed URL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7!2d2.4356!3d48.8636!...` (as specified)
   - Styled with `rounded-2xl border border-border/30 overflow-hidden`
   - Full width within the contact info column
   - `aria-label`, `title`, and `loading="lazy"` attributes added
   - `referrerPolicy="no-referrer-when-downgrade"` and `allowFullScreen` for security/functionality

2. **Contact page** — Created `/src/app/contact/page.tsx`:
   - Proper Metadata export (title, description, openGraph, canonical)
   - Breadcrumb (Accueil > Contact)
   - JSON-LD structured data: WebPage + ContactPage + LocalBusiness + BreadcrumbList schemas
   - Imports and reuses ContactSection component
   - Includes Navbar, ContactSection, Footer, BackToTop, ChatWidget, CookieConsent
   - Follows exact same layout pattern as other standalone pages (a-propos, carrieres)

3. **sitemap.ts** — Added `/contact` entry with priority 0.8, monthly change frequency

4. **Navigation updates**:
   - `FOOTER_NAVIGATION` in constants.ts: Changed Contact href from `/#contact` to `/contact`
   - Plan-du-site page: Changed Contact href from `/#contact` to `/contact`
   - `NAV_LINKS` (main navbar) kept as `/#contact` for smooth-scroll UX on homepage
