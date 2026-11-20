# Goal Grid — Application Architecture

## 1. Architectural Philosophy

The Goal Grid website architecture is designed around four foundational principles:
1. **Simplicity over Complexity:** It is a high-converting, single-page presentation site. We avoid over-engineering with databases, server actions, backend microservices, or complex state stores.
2. **Component Modularity:** Every section on the page is isolated into its own self-contained component in `src/components/sections/`, allowing clean testing, easy reordering, and effortless content updates.
3. **Data-Driven Presentation:** Copy, curriculum stages, pricing details, and FAQs are separated from UI logic and stored in structured TypeScript objects in `src/data/` or `src/config/site.ts`.
4. **Performance & Accessibility First:** Utilises Next.js App Router for static rendering, optimized font loading (`next/font`), responsive images (`next/image`), and semantic HTML with high color contrast.

---

## 2. Directory Structure

```
Goal Grid/
├── public/
│   ├── brand/                      # Official brand assets
│   │   ├── bmb-logo-navy.png       # Transparent primary logo
│   │   └── bmb-logo-badge.jpg      # Square navy institutional badge
│   ├── images/                     # Host portraits and approved photography
│   └── icons/                      # Favicon and standalone vector icons
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML shell, fonts (Sora/Manrope), SEO metadata
│   │   ├── page.tsx                # Single-page landing composition
│   │   └── favicon.ico             # App icon
│   │
│   ├── components/
│   │   ├── layout/                 # Structural page components
│   │   │   ├── AnnouncementBar.tsx # Top sticky strip (Waitlist opening notice)
│   │   │   ├── Header.tsx          # Brand logo, anchor navigation, desktop CTA
│   │   │   ├── Footer.tsx          # Institutional footer, legal notice, social links
│   │   │   └── WhatsAppFloat.tsx   # Persistent floating WhatsApp contact button
│   │   │
│   │   ├── sections/               # Individual landing page sections
│   │   │   ├── HeroSection.tsx     # Eyebrow, headline, quick facts, primary CTA
│   │   │   ├── ProblemSection.tsx  # "Sound Familiar?", pain points, quote cards
│   │   │   ├── MethodSection.tsx   # The GRID Method (G-R-I-D connected timeline)
│   │   │   ├── InclusionsSection.tsx# 6 Core inclusions (Daily tasks, Friday meets, etc.)
│   │   │   ├── OutcomesSection.tsx # What participants gain / work towards
│   │   │   ├── AudienceSection.tsx # "Is This For You?" qualifying criteria
│   │   │   ├── HostSection.tsx     # Host portrait, credentials, story
│   │   │   ├── ProofSection.tsx    # Real testimonials or survey insights (opt-in)
│   │   │   ├── PricingSection.tsx  # Investment breakdown (₦50,000, instalments)
│   │   │   ├── HowItWorksSection.tsx# 5 steps to join from waitlist to kickoff
│   │   │   ├── FAQSection.tsx      # Interactive accordion with pre-answered queries
│   │   │   └── FinalCTASection.tsx # High-contrast closing call to action
│   │   │
│   │   └── ui/                     # Reusable primitive UI atoms
│   │       ├── Button.tsx          # Solid navy, outline, and gold variant buttons
│   │       ├── Card.tsx            # Styled container card with hover states
│   │       ├── Badge.tsx           # Pill badges and category markers
│   │       └── Accordion.tsx       # Accessible FAQ expander component
│   │
│   ├── config/
│   │   └── site.ts                 # Global metadata, links, contact numbers, nav items
│   │
│   ├── data/
│   │   ├── programme.ts            # GRID framework copy, facts, inclusions, outcomes
│   │   └── faqs.ts                 # Full FAQ questions, answers, and categories
│   │
│   ├── lib/
│   │   └── utils.ts                # Class merging (cn) and WhatsApp URL generator
│   │
│   └── styles/
│       └── globals.css             # Tailwind base styles and custom utility classes
│
├── docs/                           # Architecture, brand, development, and design specs
└── reference-materials/            # Preserved client documents and 13 inspiration videos
```

---

## 3. Data Flow & Configuration Architecture

```
                    ┌─────────────────────────┐
                    │      .env.local /       │
                    │   Environment Config    │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    src/config/site.ts   │
                    │  (Global Constants,     │
                    │   WhatsApp Number, URL) │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┴────────────────┐
                ▼                                 ▼
    ┌──────────────────────┐          ┌──────────────────────┐
    │   src/data/*.ts      │          │  src/app/layout.tsx  │
    │ (Programme Content,  │          │  (SEO Metadata,      │
    │  GRID Stages, FAQs)  │          │   Google Fonts)      │
    └───────────┬──────────┘          └───────────┬──────────┘
                │                                 │
                └────────────────┬────────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │    src/app/page.tsx     │
                    │  (Landing Page Root)    │
                    └────────────┬────────────┘
                                 │
    ┌────────────────────────────┼────────────────────────────┐
    ▼                            ▼                            ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ Layout Components│   │Section Components│   │  UI Primitives   │
│ (Header, Footer, │   │(Hero, GRID,      │   │(Button, Card,    │
│  WhatsApp Float) │   │ Inclusions, FAQ) │   │ Accordion, Badge)│
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### WhatsApp Conversion Engine
All call-to-action buttons across the site invoke `buildWhatsAppUrl()`:
```ts
buildWhatsAppUrl(phone: string, message: string): string
```
This utility:
1. Strips non-numeric characters from the telephone string.
2. Encodes the prefilled message safely into standard URL parameters.
3. Constructs an instant click-to-chat deep link compatible with both WhatsApp Mobile and WhatsApp Web / Desktop (`https://wa.me/234XXXXXXXXXX?text=...`).

---

## 4. Animation Architecture

Animations are implemented using **Motion for React** (`motion/react`):

1. **Lightweight & Purposeful:** Motion is applied strictly to enhance comprehension and narrative pacing (fade-ins on scroll, connected line progressions in the GRID framework, accordion expansions in FAQs).
2. **Scroll-Triggered Entrances:** Components use `whileInView` with `viewport={{ once: true, amount: 0.2 }}` to prevent repetitive, distracting re-triggers.
3. **Accessibility Compliance:** Motion components adhere to `@media (prefers-reduced-motion: reduce)`, disabling transform offsets and using instant fades for sensitive users.
4. **Zero Layout Shift:** Animations animate `transform` (GPU accelerated) and `opacity` only, ensuring maximum frame rate without CPU bottlenecks or reflows.

---

## 5. Technical Decisions Summary

| Requirement | Selected Solution | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Industry standard for React, automatic font optimization, fast static page rendering, and effortless Vercel deployment. |
| **Styling** | Tailwind CSS v3 | Utility-first architecture ensures consistent spacing, official BMB color tokens, zero unused CSS in production, and rapid responsive styling. |
| **Icons** | Lucide React | Modern, tree-shakeable SVG icon library with consistent stroke widths. |
| **Motion** | Motion for React (`motion`) | Official modern evolution of Framer Motion, best-in-class layout transitions and spring physics. |
| **Typography** | Sora + Manrope (`next/font/google`) | Zero layout shift (zero CLS), self-hosted at build time with Google Fonts privacy compliance. |
| **State** | React local state (`useState`) | Only required for UI interactions (mobile navigation menu toggle, FAQ accordion state). No global state manager needed. |
