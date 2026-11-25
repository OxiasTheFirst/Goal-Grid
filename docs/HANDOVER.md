# Goal Grid — Project Handover & Deployment Guide

> **Phase 2 (2026-11-24/25) supersedes everything below where they conflict. Read §0 first.** Earlier text that mentions waitlist, 3 months, January–March, `WhatsAppButton`, `AnnouncementBar` or a placeholder phone number is historical.

> **Earlier state (2026-11-20, cinematic pass 2).** Sections 1–2 below describe the earlier (pass 1) build and are kept for history. **Section 7 is authoritative** for what exists now, what was verified, and what is still open.

## 0. Phase 2 handover (authoritative, 2026-11-25)

Source: client meeting of 24 Nov 2026 + `Goal_Grid_Website_Correction_Brief.docx`.

### What changed and why
| Area | Change | Reason (brief §) |
|---|---|---|
| Header | Announcement strip and its component deleted; nav CTA is now **Sign Up** | §2 |
| Copy | 12 weeks everywhere; January–March removed; business owners **and career professionals**; waitlist language replaced by direct registration; "registration opens 1 December 2026"; "Mondays" wording corrected | §3 |
| Company name | **BMB Strategy and Advisory Limited** (client confirmed BMB, not BMBB). Logo files untouched | §3 |
| Teaching | **Friday Night Business Class**: weekly live teaching on Google Meet (no fixed-schedule promise); 1-on-1 diagnostic retained | §4 |
| Pricing | ₦50,000 standard; ₦60,000 instalment option; internal instalment-date note removed; no schedule invented | §4 |
| Typography | GRID, Problem, Outcomes and section H2s heavier (600–700), larger supporting copy, deliberate bold phrases via `<Rich>` (`**phrase**` in the content file) | §5 |
| Imagery | GRID isometric path illustration; Outcomes "12-week record" visual; host photographs; Problem tags removed | §6 |
| CTAs | One `CtaButton`; four distinct actions (below) | §7 |
| Extra | Three-image cinematic crossfade in the host portrait frame | follow-up request |

### CTA architecture
| Label | Purpose | Destination | Status |
|---|---|---|---|
| Sign Up | Registration + payment | `SELLAR_SIGN_UP_URL` | **PENDING** |
| Start Here | Share name, email, WhatsApp number, business goals | `GOOGLE_FORM_START_HERE_URL` | **PENDING** |
| Chat with Us | Talk to the host | `https://wa.me/2348052110631?text=` + chat message | live |
| Make an Enquiry | Programme / pricing / participation questions | same number, enquiry message | live |
| Floating button | Chat with us | chat message | live |

Both pending constants live at the top of `src/config/site.ts` and read `NEXT_PUBLIC_SELLAR_SIGN_UP_URL` / `NEXT_PUBLIC_GOOGLE_FORM_START_HERE_URL`. While empty (or not `https://`), `resolveCta()` reports `pending: true`: buttons elsewhere link to `#how-to-join`; inside that section they render **disabled** with a plain-language note. Nothing falls back to WhatsApp. Every CTA carries `data-cta="signUp|startHere|chat|enquiry"` (and `data-pending="true"` while pending), which is handy for tests. Verified with test URLs that both buttons switch to `target="_blank" rel="noopener noreferrer"` when set.

### Files
Added: `src/components/ui/CtaButton.tsx`, `ui/Rich.tsx`, `motion/CrossfadeFrame.tsx`, `motion/GridPathIllustration.tsx`, `motion/OutcomesRecord.tsx`, `public/images/host/goal-grid-host-0{1,2,3}-*.jpg`.
Removed: `layout/AnnouncementBar.tsx`, `ui/WhatsAppButton.tsx`.
Rewritten/modified: `config/site.ts`, `data/landing-page-data.ts`, `app/layout.tsx` (metadata), `styles/globals.css`, Header, Footer, FloatingWhatsApp, and every section (Hero, Problem, GRID, Inclusions, Outcomes, Audience, Host, Accountability, Pricing, HowToJoin, FAQ, FinalCta).

### Host photographs
Three client photographs, cropped from 4000×6000 originals to 1200×1500 with the same eye line and head scale so the face holds position while images cross-fade (order: welcome → teaching → composed). Originals are not in the repo. `CrossfadeFrame` is reusable (`slides`, `interval`, `fade`). It pauses on hover/focus, off-screen, in a hidden tab, and via a pause button; with reduced motion it shows the first image and the indicators switch images instantly.

### Verified (actually run)
`tsc --noEmit`, `next lint`, `next build` clean. Dev-server renders at 1440 and 390 px (hero, GRID, Outcomes, Host, Investment, How to join, Final CTA, mobile menu). Overflow sweep at 360/390/430/768/820/1024/1280/1440/1920: none. Crossfade captured over time (1→2→3→1, stable face position). Rendered-page search: 0 occurrences of waitlist / get started / 3 month / January / March / BMBB / "Strategy & Advisory" / Ltd. 7 WhatsApp links checked: number and decoded messages correct. All external links have `rel="noopener noreferrer"`. Reduced-motion: no pause control, first image only. 

### Not verified / known
- **No real Sellar or Google Form URL has been tested** (none supplied).
- Not tested on real devices or outside Chrome; live deployment not checked.
- Local font files stand in for Google's (see Entry 012).
- Pre-existing (Phase 1): with reduced motion enabled, `HeroSection` and the new `CrossfadeFrame` log a React hydration warning (server cannot know the preference). Page recovers; fix needs a different reduced-motion strategy.
- The GRID and Outcomes visuals are SVG/CSS illustrations (no stock or generated imagery was available). Replace with commissioned art if the client prefers photography.

### Outstanding client inputs
1. Sellar registration URL. 2. Google Form URL (fields: full name, email, WhatsApp number, business goals). 3. Host biography/credentials (nothing invented; nothing placeholder is shown publicly). 4. Confirm ₦60,000 is the **total** instalment price (copy says "Instalment option ₦60,000", not "total") and whether any instalment terms should be published. 5. Host name is still `@Bolaji Babalola` from the Phase 1 content (leading "@"): confirm the display name. 6. Programme start date (only the registration-opening date is known). 7. After 1 December 2026, update "Registration is scheduled to open…" wording (`howToJoin.registrationOpens`, `finalCta.badge`, FAQ, hero).

### Next steps once inputs arrive
Set the two env vars on the host (or paste into `src/config/site.ts`), rebuild, click both buttons on desktop and mobile; update copy per items 4–7; add the host bio to `landingPageData.host.biography`.

---

## 1. Project Overview & Deliverable Summary

**Goal Grid** is an executive-level goal execution programme for business owners, organized and delivered under **BMB Strategy & Advisory Ltd.** scheduled for **January–March 2027**.

This repository contains the completed, fully responsive frontend web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

### Key Deliverables Completed:
1. **Full 15-Section Premium Landing Page:** Assembled in `src/app/page.tsx` adhering strictly to the approved section hierarchy and verified client briefs, elevated into a cinematic, editorial, and motion-rich digital experience.
2. **Cinematic Full-Bleed Hero Environment:** Full-width photographic backdrop (`public/images/hero-cinematic-bg.jpg`) capturing an African business executive in a twilight high-rise boardroom overlooking an illuminated coastal metropolis, with architectural blueprints and brass instruments on dark marble. Features subtle parallax movement, deep navy gradient overlays, and warm directional lighting.
3. **Horizontal Masked Headline Reveal (Motion for React v12):** Headline ("Don’t Just Set the Goal. / Build the Path / to Achieve It.") engineered with `src/components/motion/MaskedTextReveal.tsx`, emerging sequentially from behind an invisible horizontal clipping plane with custom physical cubic-bezier easing (`[0.16, 1, 0.3, 1]`). Staggered supporting content, scroll-triggered reveals (`AnimatedSection.tsx`), animated GRID progress line, and accessible accordion height transitions (`AnimatePresence`).
4. **Adaptive Navigation & Base Instrument Bar:** Navigation header (`Header.tsx`) adapts seamlessly: starts transparent with inverted white BMB logo over the dark cinematic hero, transitioning to frosted-light with navy branding upon scroll. Base hero displays a glassmorphic architectural instrument bar (`01`–`04`).
5. **Asymmetric Bento Inclusions & Editorial Manifesto Outcomes:** The 6 deliverables are arranged in a dynamic 12-column bento layout (7+5, 5+7, 6+6), while the outcomes section is formatted as a full-bleed Deep Navy (`#142642`) manifesto with oversized numerals (`01`–`06`).
6. **Centralized WhatsApp Architecture:** Pure WhatsApp conversion flow linking all 11 CTA touchpoints through `src/config/site.ts`. Zero backend forms, registration databases, or application portals.
7. **Registration Process (Four Steps):** Direct WhatsApp onboarding without confusing forms or timetable download illusions.
8. **FAQ Accuracy:** Audited all 9 FAQs against the brief. All unconfirmed operational parameters explicitly refer the visitor to WhatsApp for official clarification.
9. **Host Profile Integrity:** Strictly confined to confirmed facts: host name (`@Bolaji Babalola`), role as programme host under BMB Strategy & Advisory Ltd., and confirmed duties (leading Friday Google Meet calls and conducting 1-on-1 private diagnostics). Architectural executive portrait placeholder frame with monogram seal.
10. **Official BMB Visual Identity:** Strictly grounded in BMB Deep Navy (`#142642`), BMB Gold (`#C9A45C`), Pure White (`#FFFFFF`), and Charcoal (`#30343B`). All arbitrary green/emerald and unauthorized dark tokens eliminated.
11. **Architectural & Design Documentation:** Complete design reference analysis (including ClearStreet benchmark analysis and transparent environment notes), design specification, development log (Entries 001 to 010), creative direction audit, and this handover guide.

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
│   │   ├── layout.tsx                 # Root layout, Space Grotesk/DM Sans fonts, SEO OpenGraph
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
   - [ ] **Hero Section:** Check light canvas, subtle gold coordinate ticks, Space Grotesk headline, Key Facts ribbon (3 Months, Daily Tasks, Every Friday, 1-on-1 Session), and WhatsApp button.
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

---

## 7. Pass 2 handover (authoritative)

### What changed
See DEVELOPMENT_LOG Entry 011. Components modified: every file in `src/components/sections/`, `layout/Header.tsx`, `layout/Footer.tsx`, `layout/AnnouncementBar.tsx`, `ui/FloatingWhatsApp.tsx`, `motion/MaskedTextReveal.tsx`, `app/page.tsx`, `app/layout.tsx` (noscript fallback), `styles/globals.css` (grain, outline text, focus ring). New: `lib/motion.ts`, `motion/Reveal.tsx`, `motion/ParallaxImage.tsx`, `ui/WhatsAppButton.tsx`, `ui/SectionLabel.tsx`. No new dependencies. No new image assets (the two existing photographs are reused with different crops).

### Verified (rendered in headless Chrome against a production build)
Typecheck and build clean; 390/768/1024/1440/1920 screenshots reviewed; no horizontal overflow from 360–2560 px; masked reveal captured mid-animation; reduced-motion renders final state; FAQ (mouse + keyboard), scroll-spy, mobile menu, all 6 nav anchors; 12 WhatsApp links use `getWhatsAppUrl` and the placeholder number.

### Not verified / known limitations
- **Live deployment** was unreachable from the build environment. Confirm in the hosting dashboard that production tracks `main`, then compare the live page to this build.
- Hero photograph is 1376×768; replace with a ≥2560 px original when available.
- Fonts were rendered locally from system copies of Space Grotesk/DM Sans (Google Fonts blocked); confirm the weights and the ₦ glyph on the deployed site (see Typography below).
- Real-device and Safari/Firefox testing were not done (Chrome only). Scroll-linked GRID progression should be checked on a physical phone.
- Without JavaScript, entrance animations are bypassed by a `noscript` rule; not browser-tested.

### Outstanding client confirmations (unchanged)
WhatsApp number; waitlist opening date; official host portrait/biography/credentials (name currently `@Bolaji Babalola` as in the brief header, spelling unconfirmed); instalment schedule; daily time and session length; missed-session and recording policy; official Instagram/email (removed from footer until supplied).

### Instructions for the next developer or AI
1. `npm ci`, copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_WHATSAPP_PHONE`.
2. Edit copy only in `src/data/landing-page-data.ts`; edit WhatsApp messages only in `src/config/site.ts`.
3. Use `MaskedTextReveal` for headings and `Reveal` for blocks; take easing from `src/lib/motion.ts`. Always set an explicit text colour on headings placed on dark backgrounds (the global `h1–h6` rule sets navy).
4. Keep every CTA on `WhatsAppButton` / `getWhatsAppUrl`.
5. After any layout change, check for horizontal overflow at 1024 and 390 px.
6. Never commit `.env`. Do not invent host details, results, testimonials, instalment terms or scarcity.

### Typography (current, supersedes any earlier mention of Sora/Manrope)
Two families only: **Space Grotesk** for headings/display/numerals and **DM Sans** for body, navigation, buttons and labels, loaded in `src/app/layout.tsx` and mapped in `tailwind.config.ts` (`font-heading`, `font-body`). Space Grotesk must keep the `latin-ext` subset because it is the only place it ships ₦, and it must stay in DM Sans's fallback stack because DM Sans has no ₦. Do not use `font-mono`. Rationale and weights: DEVELOPMENT_LOG Entry 012 and BRAND_GUIDELINES §4.

