# Goal Grid — Programme Website

Goal Grid is a practical 12-week goal-execution programme for business owners and career professionals. Registration is scheduled to open on 1 December 2026. It is organized and delivered under **BMB Strategy and Advisory Limited**.

This repository hosts the official frontend website for Goal Grid: a high-performance, single-page presentation and WhatsApp conversion experience.

---

## 1. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Space Grotesk (headings, display, numerals) & DM Sans (body, navigation, buttons, labels) via `next/font/google`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Motion:** [Motion for React](https://motion.dev/) (formerly Framer Motion)
- **Package Manager:** npm

---

## 2. Project Architecture

```
Goal Grid/
├── public/
│   ├── brand/               # Official BMB Strategy & Advisory logos
│   │   ├── bmb-logo-navy.png
│   │   └── bmb-logo-badge.jpg
│   ├── images/              # Authentic host portrait and photography (when approved)
│   └── icons/               # Custom SVG assets and favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, Google Fonts, OpenGraph metadata
│   │   └── page.tsx         # Goal Grid single-page landing experience
│   ├── components/
│   │   ├── layout/          # Header, navigation, footer
│   │   ├── sections/        # Modular page sections (Hero, Problem, GRID, etc.)
│   │   ├── motion/          # MaskedTextReveal, Reveal, ParallaxImage
│   │   └── ui/              # CtaButton, Rich, SectionLabel, FloatingWhatsApp
│   ├── lib/motion.ts        # Easing + duration tokens shared by all animation
│   ├── config/
│   │   └── site.ts          # Site metadata, WhatsApp links, navigation constants
│   ├── data/                # Structured programme copy, FAQs, GRID stage definitions
│   ├── lib/
│   │   └── utils.ts         # Utility helpers and WhatsApp URL generator
│   └── styles/
│       └── globals.css      # Tailwind base styles, typography tokens, smooth scroll
├── docs/                    # Architectural and design documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── BRAND_GUIDELINES.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_LOG.md
│   ├── DESIGN_REFERENCE_ANALYSIS.md
│   └── DESIGN_SPECIFICATION.md
└── reference-materials/     # Preserved original client briefs and inspiration videos
    ├── documents/
    └── videos/
```

---

## 3. Installation & Getting Started

### Prerequisites
- Node.js `v20.x` or later (tested on Node.js `v24.13.1`)
- npm `v10.x` or later

### Install Dependencies
```bash
npm install
```

### Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env.local
```
The WhatsApp number (+234 805 211 0631) is fixed in `src/config/site.ts`. Two destinations are **still pending from the client** and are set by environment variable (or by pasting the URL into the named constant in `src/config/site.ts`):
```env
NEXT_PUBLIC_SELLAR_SIGN_UP_URL=          # Sign Up → Sellar registration/store page (PENDING)
NEXT_PUBLIC_GOOGLE_FORM_START_HERE_URL=  # Start Here → Google Form (PENDING)
NEXT_PUBLIC_SITE_URL=https://goalgridproject.com
```
Until they are set, Sign Up / Start Here point at the in-page "How to join" section and render disabled inside it. See `docs/HANDOVER.md` §0.

### Development Server
Run the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
npm run start
```
> `next/font/google` downloads Space Grotesk and DM Sans at build time. On a machine without access to `fonts.googleapis.com` the build fails with "Failed to fetch font". Build on a connected machine (Vercel is fine), or provide a local stub via `NEXT_FONT_GOOGLE_MOCKED_RESPONSES` for offline verification only.

---

## 4. Key Architectural Decisions

1. **Frontend-Only Architecture:** Goal Grid has no database, authentication, backend API, or custom form submission endpoints. All conversion actions direct visitors to WhatsApp with prefilled enquiry messages.
2. **Official BMB Identity:** The site preserves the BMB Strategy & Advisory brand identity (Deep Navy `#142642`, Gold `#C9A45C`, White `#FFFFFF`, Charcoal `#30343B`). No separate Goal Grid logo is created.
3. **No Fabricated Content:** Every fact, quote, and credential originates from approved client briefs. Unconfirmed details remain flagged as placeholders.
4. **Accessible & Responsive:** Clean mobile-first design with high contrast, semantic HTML, and reduced-motion respect.

---

## 5. Deployment Overview

- **Platform:** Vercel (recommended)
- **Domain:** `goalgridproject.com` (subject to client DNS configuration)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
