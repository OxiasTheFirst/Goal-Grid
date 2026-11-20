# Goal Grid — Project Handover & Deployment Guide

## 1. Project Overview & Deliverable Summary

**Goal Grid** is an executive-level goal execution programme for business owners, organized and delivered under **BMB Strategy & Advisory Ltd.** scheduled for **January–March 2027**.

This repository contains the completed, fully responsive frontend web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

### Key Deliverables Completed:
1. **Full 15-Section Premium Landing Page:** Assembled in `src/app/page.tsx` adhering strictly to the approved section hierarchy and verified client briefs, redesigned from static card repetitions into an editorial, animated digital experience.
2. **Art-Directed Executive Hero Visual:** High-resolution bespoke visual (`public/images/hero-executive-grid.jpg`) depicting an architectural planning journal with brass instruments and slate cube, framed with gold coordinate ticks and layered geometric GRID wireframes.
3. **Comprehensive Motion System (Motion for React v12):** Choreographed scroll-triggered entrances (`useInView`), animated gold progress line in the GRID framework, smooth accordion height transitions (`AnimatePresence`), scroll-aware transparent-to-frosted navigation, and spring-animated floating WhatsApp button. Compliant with `prefers-reduced-motion`.
4. **Asymmetric Bento Inclusions & Editorial Manifesto Outcomes:** The 6 deliverables are arranged in a dynamic 12-column bento layout (7+5, 5+7, 6+6), while the outcomes section is formatted as a full-bleed Deep Navy (`#142642`) manifesto with oversized numerals (`01`–`06`).
5. **Centralized WhatsApp Architecture:** Pure WhatsApp conversion flow linking all 11 CTA touchpoints through `src/config/site.ts`. Zero backend forms, registration databases, or application portals.
6. **Registration Process (Four Steps):** Direct WhatsApp onboarding without confusing forms or timetable download illusions.
7. **FAQ Accuracy:** Audited all 9 FAQs against the brief. All unconfirmed operational parameters explicitly refer the visitor to WhatsApp for official clarification.
8. **Host Profile Integrity:** Strictly confined to confirmed facts: host name (`@Bolaji Babalola`), role as programme host under BMB Strategy & Advisory Ltd., and confirmed duties (leading Friday Google Meet calls and conducting 1-on-1 private diagnostics). Architectural executive portrait placeholder frame with monogram seal.
9. **Official BMB Visual Identity:** Strictly grounded in BMB Deep Navy (`#142642`), BMB Gold (`#C9A45C`), Pure White (`#FFFFFF`), and Charcoal (`#30343B`). All arbitrary green/emerald and unauthorized dark tokens eliminated.
10. **Architectural & Design Documentation:** Complete design reference analysis (all 14 items audited with transparent environment notes), design specification, development log (Entries 001 to 009), creative direction audit, and this handover guide.

---

## 2. Directory & Component Architecture

```
Goal Grid/
├── public/
│   ├── brand/
│   │   ├── bmb-logo-navy.png          # Transparent serif navy logo for light navigation
│   │   └── bmb-logo-badge.jpg         # Square dark badge logo for footer & host framing
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout, Sora/Manrope fonts, SEO OpenGraph
│   │   └── page.tsx                   # Master page integrating all 15 sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx    # 01. Sticky top strip in Deep Navy (#142642)
│   │   │   ├── Header.tsx             # 02. Glassmorphic navbar with mobile slide drawer
│   │   │   └── Footer.tsx             # 15. Grounded Deep Navy footer with badge & copyright
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # 03. Standardised light canvas with grid coordinate details
│   │   │   ├── ProblemSection.tsx     # 04. Illustrative owner experiences (2x2 grid)
│   │   │   ├── GridMethodSection.tsx  # 05. Connected horizontal milestone line (G-R-I-D)
│   │   │   ├── InclusionsSection.tsx  # 06. 3x2 bento grid of the 6 programme deliverables
│   │   │   ├── OutcomesSection.tsx    # 07. Contrast section in Deep Navy (#142642) (01–06)
│   │   │   ├── AudienceQualifierSection.tsx # 08. Two-column filter ("For You" vs "Not For You")
│   │   │   ├── HostSection.tsx        # 09. Executive split card (verified host details only)
│   │   │   ├── AccountabilitySection.tsx # 10. 3 confirmed execution pillars & disclaimer
│   │   │   ├── PricingSection.tsx     # 11. ₦50,000 investment card with inclusions checklist
│   │   │   ├── HowToJoinSection.tsx   # 12. 4-step direct WhatsApp process sequence
│   │   │   ├── FaqSection.tsx         # 13. 9 audited FAQs with accessible accordion markup
│   │   │   └── FinalCtaSection.tsx    # 14. Floating Deep Navy card ("YOUR 2027 STARTS NOW")
│   │   └── ui/
│   │       └── FloatingWhatsApp.tsx   # Persistent bottom-right floating action pill
│   ├── config/
│   │   └── site.ts                    # Central config & getWhatsAppUrl helper
│   ├── data/
│   │   └── landing-page-data.ts       # Centralized verified content dictionary
│   ├── lib/
│   │   └── utils.ts                   # Tailwind class merging & string utilities
│   └── styles/
│       └── globals.css                # Base styling and font variables
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── BRAND_GUIDELINES.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_REFERENCE_ANALYSIS.md   # Complete audit of 14 reference files (13 MP4s + 1 JPG)
│   ├── DESIGN_SPECIFICATION.md        # Approved section specifications
│   ├── DEVELOPMENT_LOG.md             # Complete chronological log (Entries 001 to 007)
│   └── HANDOVER.md                    # This document
└── reference-materials/
    ├── documents/                     # Client briefs (.docx and .txt)
    ├── videos/                        # 13 reference MP4 video captures
    └── obsidianos-394f69.jpg           # 1 reference high-resolution design asset
```

---

## 3. How to Update the WhatsApp Phone Number

When the client supplies the official international dialing number:

### Method A: Environment Variable (Recommended for Production)
In production (e.g. Vercel, Netlify), add an environment variable:
```env
NEXT_PUBLIC_WHATSAPP_PHONE=2348012345678
```
Or in a local `.env.local` file:
```env
NEXT_PUBLIC_WHATSAPP_PHONE=2348012345678
```

### Method B: Directly in Site Configuration
Edit `src/config/site.ts`:
```ts
contact: {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "2348012345678",
  ...
}
```
Because every CTA button in the codebase uses `getWhatsAppUrl()`, updating this single variable updates all 11 conversion buttons across the entire website instantly.

---

## 4. Verification & Build Confirmation

The project was compiled and validated with the following results:
- **TypeScript Typecheck (`npx tsc --noEmit`):** Exit Code `0` (0 type errors).
- **Production Build (`npm run build`):** Exit Code `0` (0 errors, 0 warnings).
- **Static Prerender Output:** `.next/server/app/index.html` (120 KB optimized HTML).
- **Shared JS Bundle:** 103 kB
- **Page JS Bundle:** 23 kB

### Verified Content Checks:
- Verified: All 11 CTAs correctly render `https://wa.me/234XXXXXXXXXX?text=...`.
- Verified: "Four Simple Steps on WhatsApp" flow is active; forms and portal steps are absent.
- Verified: "Limited Places" / unconfirmed scarcity claims are 100% absent.
- Verified: Unverified first-person quotations and fabricated host bios are 100% absent.
- Verified: Unauthorized `#080F1B` is 100% absent.
- Verified: Deep Navy `#142642` is consistently dominant.

---

## 5. Remaining Items Requiring Client Confirmation

Before public launch, the client should confirm:
1. **Official WhatsApp Number:** Replace placeholder `234XXXXXXXXXX`.
2. **Exact Waitlist Opening Date:** Brief states "December 2026" (calendar day needed if live countdown is requested).
3. **Host Photo & Bio:** Approved high-resolution portrait photograph and finalized biography for `@Bolaji Babalola`.
4. **Instalment Schedule:** Specific installment milestone dates and amounts (e.g. 2 x ₦25,000).
5. **Session Logistics:** Daily task time commitment (minutes/day) and Friday Google Meet session duration (e.g. 60 vs 90 mins).
6. **Missed Session Policy:** Replay and catch-up availability.

---

## 6. Exact Instructions for Continuing Visual QA

To inspect the landing page visually in the browser:

1. **Start the local Next.js development server:**
   ```powershell
   npm run dev
   ```
2. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

3. **Verify the 15 Sections in Sequence:**
   - [ ] **Announcement Bar:** Confirm Deep Navy `#142642` top bar, pulsing gold live indicator, and WhatsApp link.
   - [ ] **Header:** Check BMB Strategy & Advisory transparent logo (`bmb-logo-navy.png`), 6 anchor navigation links, and desktop CTA button. Test mobile drawer on narrow viewports.
   - [ ] **Hero Section:** Check light canvas, subtle gold coordinate ticks, Sora headline, Key Facts ribbon (3 Months, Daily Tasks, Every Friday, 1-on-1 Session), and WhatsApp button.
   - [ ] **Problem Section:** Verify 4 illustrative experience quote cards (2x2 grid) and turning point banner.
   - [ ] **GRID Method:** Test continuous connected gold milestone line across G-R-I-D cards on desktop, and vertical sequence on mobile.
   - [ ] **Programme Inclusions:** Verify 3x2 bento grid detailing the 6 components with hover gold border illumination.
   - [ ] **Programme Outcomes:** Verify contrast break in Deep Navy `#142642` with 6 stacked principles (`01`–`06`).
   - [ ] **Audience Qualifier:** Check two-column comparison ("Goal Grid Is For You If..." vs "This May Not Be For You If...").
   - [ ] **Meet the Host:** Verify executive split layout, portrait container with BMB badge, confirmed duties, and placeholder note for client portrait.
   - [ ] **Accountability Architecture:** Check 3 confirmed execution pillars and disclaimer.
   - [ ] **Pricing Card:** Verify ₦50,000 fee, deliverables checklist, instalment note, and absence of scarcity claims.
   - [ ] **How to Join:** Verify the 4 direct WhatsApp steps and the clarification box.
   - [ ] **FAQ Section:** Test expanding all 9 accordions; verify rotating plus/minus toggles and WhatsApp support link.
   - [ ] **Final CTA Card:** Check floating Deep Navy card ("YOUR 2027 STARTS NOW") and CTA button.
   - [ ] **Footer:** Verify Deep Navy `#142642` background, square BMB badge logo (`bmb-logo-badge.jpg`), links, and copyright.
   - [ ] **Floating Button:** Check persistent bottom-right WhatsApp action pill.
