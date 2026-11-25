# Goal Grid — Design Specification (Final Approved)

> **Phase 2 update (2026-11-25).** This specification is historical where it conflicts with the following. Header: no announcement strip. Programme: 12 weeks for business owners and career professionals; registration opens 1 December 2026; no waitlist. Teaching: Friday Night Business Class (weekly, Google Meet). Pricing: ₦50,000 standard, ₦60,000 instalment option. Entity: BMB Strategy and Advisory Limited. CTAs: **Sign Up** (Sellar, pending), **Start Here** (Google Form, pending), **Chat with Us** and **Make an Enquiry** (WhatsApp +234 805 211 0631). How to join: three routes, not four WhatsApp steps. Host: three-image crossfade portrait. GRID: isometric path illustration, bolder letters. Outcomes: 12-week record visual. Problem: tags removed, key phrases emphasised. Type: Space Grotesk 600–700 for major headings. Full detail and status in `docs/HANDOVER.md` §0.

## 1. Executive Summary & Design Vision

**Goal Grid** is an executive-level goal execution programme for business owners, delivered under **BMB Strategy & Advisory Ltd.** scheduled for **January–March 2027**.

The website design balances:
- **Executive Restraint & Authority:** High typography contrast, generous whitespace, and a disciplined color scheme rooted strictly in official BMB colors.
- **Light, Elegant Executive Canvas:** The hero and primary page sections are built on an open, refined light canvas with subtle navy and gold ambient treatments and restrained geometric grid details.
- **Architectural Clarity:** Subtle coordinate lines, connected milestone progressions, and clean bento cards reflecting the structural essence of the **GRID** framework.
- **Frictionless WhatsApp Conversion:** Every call-to-action on the page connects directly to WhatsApp click-to-chat via a centralized link configuration helper. There are no registration databases, multi-step forms, or backend authentication systems.
- **Uncompromised Content Integrity:** Illustrative owner experiences are never presented as testimonials; unverified quotes and unconfirmed scarcity claims ("Limited places") are strictly omitted.

---

## 2. Official Brand Palette & Color Architecture

- **Primary Brand Navy:** `#142642` (Deep Navy) — dominant anchor for dark sections (Outcomes, Final CTA), top announcement bar, primary buttons, headers, and footer.
- **Accent Gold:** `#C9A45C` (BMB Gold) — used selectively for eyebrow badges, active milestone nodes, connector lines, and subtle border highlights.
- **Pure White:** `#FFFFFF` — clean executive canvas for primary sections and high-contrast text on navy.
- **Dark Charcoal:** `#30343B` — engineered specifically for readable body text on light backgrounds to avoid harsh pure black.

> **Decision Note on `#080F1B`:** The previously suggested `#080F1B` ("Midnight Navy") is rejected and eliminated. The footer, announcement bar, and dark contrast sections strictly use official Deep Navy (`#142642`) to maintain unified brand authority.

---

## 3. Centralized WhatsApp Conversion Architecture

All conversion touchpoints lead exclusively to WhatsApp click-to-chat through the centralized helper function `getWhatsAppUrl(messageKey)` in `src/config/site.ts`.

- **Placeholder Dialing Number:** `234XXXXXXXXXX` (defined centrally in `siteConfig.contact.whatsappPhone` and configurable via `NEXT_PUBLIC_WHATSAPP_PHONE`).
- **No Backend Dependency:** Zero database storage, zero external waitlist collection forms, zero registration backend, zero authentication.

| Touchpoint Location | Button Copy | Message Intent |
| :--- | :--- | :--- |
| **Top Announcement Bar** | `Get programme updates →` | Enquiry on waitlist opening dates |
| **Header Navigation CTA** | `Join the Waitlist` | General waitlist & registration enquiry |
| **Hero Primary CTA** | `Join the Waitlist` | Hero cohort signup intent |
| **Problem Section CTA** | `I Want a Clear Plan` | Request for planning framework |
| **Inclusions Section CTA** | `Join the Waitlist` | Enquiry on programme deliverables |
| **Outcomes Section CTA** | `Join the Waitlist` | Enquiry on cohort enrollment |
| **Investment Card CTA** | `Join the Waitlist` | Enquiry on ₦50,000 fee & instalment terms |
| **How to Join CTA** | `Join the Waitlist` | Initiating Step 1 of joining |
| **FAQ Assistance CTA** | `Message us on WhatsApp` | Specific participant questions |
| **Final CTA Card** | `Join the Goal Grid Waitlist` | Final cohort reservation enquiry |
| **Persistent Floating Button**| `Chat with us` (Pill button) | Immediate live question / assistance |

---

## 4. Final Section Order & Specifications

```
Approved Section Order:
01. Announcement Bar (Sticky Top)
02. Header & Sticky Navigation
03. Hero Section & Key Facts Ribbon (Standardised Light Executive Canvas)
04. The Problem / The Challenge ("Sound Familiar?" — Illustrative Experiences)
05. The GRID Method Framework (Progressive Milestone Line)
06. Programme Inclusions ("What You Get" — 3x2 Bento Grid)
07. Expected Outcomes ("What You Stand to Gain" — Contrast Section in Deep Navy #142642)
08. Audience Qualifier ("Is This For You?" — 2-Column Comparison)
09. Meet the Host (Approved Bio & Credentials; Unverified Quotes Removed)
10. Accountability Architecture (Credibility / Systemic Discipline — Testimonials Omitted)
11. Programme Investment & Pricing (₦50,000 Fee · Instalments Available · Scarcity Claims Removed)
12. How to Join (5 Simple Steps)
13. Frequently Asked Questions (FAQ — 9 Verified Questions with Smooth Accordion Expansion)
14. Final Call to Action (Floating Deep Navy Card)
15. Footer (Deep Navy #142642 · BMB Badge Logo · Copyright)
-- Persistent UI: Floating WhatsApp Action Button
```

---

### Section 01: Announcement Bar (Sticky Top)
- **Background:** Deep Navy (`#142642`) with subtle border bottom (`border-navy-700`).
- **Typography & Elements:**
  - Left: Gold indicator dot (`bg-gold animate-pulse`), uppercase tracking label: `WAITLIST OPENS DECEMBER 2026 · Programme Runs January–March 2027`.
  - Right: Action link: `Get programme updates →` opening WhatsApp via central helper.
- **Responsive:** On small mobile devices, secondary subtext collapses into a single clean line.

---

### Section 02: Header & Sticky Navigation
- **Visual Style:** Dynamic scroll-aware navigation. Starts completely weightless and transparent at the top of the canvas, then transitions smoothly into a frosted-light executive header (`bg-white/95 backdrop-blur-md border-gray-100 shadow-xs`) after 24px of scrolling.
- **Elements:**
  - **Left Brand Mark:** Transparent BMB Strategy & Advisory serif logo (`/brand/bmb-logo-navy.png`), paired with the "Goal Grid" programme title and "Q1 2027 Cohort" identifier.
  - **Center Navigation Links:** 6 anchor links styled in DM Sans (Medium) with gold underline hover transitions.
  - **Right Action Button:** High-contrast pill button, Deep Navy with gold WhatsApp icon: `Join the Waitlist`.
  - **Mobile:** Accessible slide-down navigation drawer with anchor links and a full-width WhatsApp CTA button.

---

### Section 03: Hero Section & Key Facts Ribbon (Cinematic Full-Bleed Canvas)
- **Visual Canvas:** Full-bleed immersive photographic environment featuring bespoke high-resolution imagery (`/images/hero-cinematic-bg.jpg`) set in a twilight executive boardroom overlooking an illuminated coastal metropolis. Rich Deep Navy (`#142642`) gradient overlays, warm directional lighting reflections, and subtle parallax scrolling movement.
- **Horizontal Masked Headline Reveal:**
  - Designed inspired by the Clear Street motion language.
  - The main headline: `Don’t Just Set the Goal. Build the Path to Achieve It.` is split into sequential horizontal clipping wrappers (`overflow: hidden`).
  - Line 1: `Don't Just Set the Goal.` (delay 0.25s)
  - Line 2: `Build the Path` (in BMB Gold with subtle glowing underline, delay 0.48s)
  - Line 3: `to Achieve It.` (delay 0.7s)
  - Each line translates from `y: 118%` below the horizontal boundary to `y: 0%` with physical cubic-bezier easing (`[0.16, 1, 0.3, 1]`).
- **Choreographed Supporting Hierarchy:**
  - 0.10s: Eyebrow badge in navy glass with pulsing gold indicator.
  - 0.25s–0.70s: Sequential horizontal masked headline reveal.
  - 0.85s: High-legibility subheadline.
  - 1.00s: High-contrast BMB Gold WhatsApp CTA button + scarcity-free pricing cue.
  - 1.15s: Institutional badge (`BMB Strategy & Advisory Ltd. · Q1 2027 Cohort`).
  - 1.25s: Glassmorphic architectural instrument bar displaying the 4 key facts (`3 Months / 01`, `Daily Tasks / 02`, `Every Friday / 03`, `1-on-1 Session / 04`).

---

### Section 04: The Problem ("Sound Familiar?" — Illustrative Experiences)
- **Visual Style:** Light surface (`bg-[#F8FAFC] py-24 sm:py-32`) with editorial thought progression cards.
- **Elements:**
  - **Section Label:** Pill badge: `SOUND FAMILIAR?`
  - **Headline:** `You Have the Goal. Where Is the Plan?`
  - **Contextual Intro:** `Every January, you write the goal down. By March, the business is busy again and the goal is still on the page. You are not lazy and you are not alone. A goal tells you where you want to go. It does not tell you what to do on Monday.`
  - **Subtitle / Integrity Note:** `Common experiences business owners share when turning goals into daily execution:`
  - **4 Illustrative Experience Cards:**
    - *"I set goals every year, but I don't follow through."*
    - *"I want more sales, but I don't know what to focus on first."*
    - *"I am busy all day, every day, and I still don't see enough progress."*
    - *"I try to do everything alone, and I can't stay consistent."*
  - **Ethical Integrity Rule:** Labeled explicitly as illustrative owner friction points; never titled or presented as customer testimonials.
  - **Turning Point Statement:** Elevated gradient box with gold center line: `You can be busy every day and still feel like your business is not moving forward. Goal Grid changes that.`
  - **CTA Button:** `I Want a Clear Plan` linking to WhatsApp.

---

### Section 05: The GRID Method Framework
- **Visual Style:** White canvas with unbroken gold progress line and large expressive ghost display typography (`G`, `R`, `I`, `D`).
- **Elements:**
  - **Section Label:** `THE METHOD`
  - **Headline:** `Four Steps From "I Want" to "I Did"`
  - **Subtitle:** `Knowing what you want is not enough. You also need to know what to do, where to start, what comes first, who can help, when each thing should happen and how you will know it is working. The Goal Grid is the structure that answers all of that.`
  - **4 Connected Framework Pillars:**
    - **Stage 01 / G — Goal:** *"What exactly do you want to achieve?"* Get clear on one goal, in plain words, so you know what you are aiming at.
    - **Stage 02 / R — Roadmap:** *"What steps will take you there?"* Break the goal into steps you can follow, and decide what to do first.
    - **Stage 03 / I — Implementation:** *"What will you actually do, and when?"* Start the work, one step at a time, with a task for every day.
    - **Stage 04 / D — Discipline:** *"How will you stay on track when things change?"* Keep showing up, check your progress and adjust when the plan meets reality.
  - **Interaction:** Animated gold progress line fills smoothly across the stages on scroll / in-view. Large ghost letters illuminate on hover.

---

### Section 06: Programme Inclusions ("What You Get")
- **Visual Style:** Asymmetric 12-column bento grid (`lg:col-span-7 + lg:col-span-5`, `lg:col-span-5 + lg:col-span-7`, `lg:col-span-6 + lg:col-span-6`) with refined gold border glow on hover (`.card-glow`).
- **Elements:**
  - 6 verified deliverables (Daily Tasks, Group Leaders, Progress Reports, Friday Teaching Sessions, Group Presentations, Private 1-on-1 Session).
  - All labeled with fee inclusion ("Included in ₦50,000 fee") and active pillar indicators.

---

### Section 07: Expected Outcomes ("What You Stand to Gain")
- **Visual Style:** Full-bleed authoritative Deep Navy (`#142642`) background providing a commanding contrast break.
- **Elements:**
  - **Editorial Numbered Manifesto:** 6 numbered principles displayed with oversized monospace numerals (`01` through `06` in gold) and checkmark indicators.
  - Phrased strictly as intended capabilities and habits, eliminating any implied financial guarantees.
  - Prominent gold CTA button: `Join the Waitlist`.

---

### Section 08: Audience Qualifier ("Is This For You?")
- **Visual Style:** White canvas with clean checkmark lists and qualifier badges.
- **Elements:**
  - **Section Label:** `IS THIS FOR YOU?`
  - **Headline:** `Built for Business Owners Ready to Act, Not Just Plan`
  - **Subtitle:** `Goal Grid is for you if you sell products, offer services, run an online business or manage a small business.`
  - **Two-Column Filter Layout:**
    - **Left Column ("Goal Grid Is For You If..."):**
      - Tired of setting goals you do not finish.
      - Wanting more sales but unsure what to focus on first.
      - Busy all the time without seeing enough progress.
      - Doing everything alone and struggling to stay consistent.
      - Determined to start 2027 with a clear plan.
    - **Right Column ("This May Not Be For You If..."):**
      - Looking only for passive motivation or inspirational talks without doing the work.
      - Unable to dedicate daily focus to action tasks.
      - Unwilling to attend Friday live Google Meet sessions and participate in group reviews.
  - **Button:** `This Is for Me` linking to WhatsApp.

---

### Section 09: Meet the Host
- **Visual Style:** Light surface (`bg-surface-light`) with an executive split layout.
- **Elements:**
  - **Left Column:** High-resolution portrait container with rounded corners, BMB badge mark, and clear note: `Official portrait pending client confirmation`.
  - **Right Column:**
    - Label: `MEET THE HOST`
    - Headline: `Programme Leadership & Host Advisory`
    - Host Attribution: Indicated as `@Bolaji Babalola` under BMB Strategy & Advisory Ltd.
    - Role: Programme Host, Goal Grid.
    - Confirmed Duties: Weekly Friday teaching calls on Google Meet, cohort curriculum guidance, and private 1-on-1 diagnostic sessions.
    - **Integrity Rule:** Zero invented qualifications, achievements, experience, client metrics, or personal stories. Approved biography to be supplied by client prior to launch.

---

### Section 10: Accountability Architecture (Credibility / Integrity Focus)
- **Visual Style:** White canvas with 3 confirmed structural pillars of programme execution.
- **Pillars Grounded in Confirmed Brief:**
  1. *Daily Tasks:* A clear task each day to maintain steady daily momentum throughout the 3 months.
  2. *Weekly Live Sessions:* Friday teaching sessions on Google Meet to plan, prioritise, and review progress.
  3. *Group Support & 1-on-1 Access:* Assigned cohort groups with group leaders, progress reporting, and a private 1-on-1 session with the host.
- **Execution Disclaimer:** Explicit note confirming that structures provide guidance and accountability, but individual business outcomes depend on active participant participation, consistency, and execution.

---

### Section 11: Programme Investment
- **Visual Style:** High-impact pricing card in Deep Navy / White.
- **Elements:**
  - **Section Label:** `YOUR INVESTMENT`
  - **Headline:** `₦50,000 for 3 Months of Structure, Support and Accountability`
  - **Price Tag:** `₦50,000` per person
  - **Terms:** `Instalments Available` *(Scarcity claim "Limited places" removed).*
  - **Deliverables Checklist:**
    - 3 months of daily tasks (January to March 2027)
    - Weekly Friday teaching sessions on Google Meet
    - Dedicated group and group leader
    - Structured progress reports
    - Group presentations and peer reviews
    - Private 1-on-1 diagnostic session with the host
  - **Persuasion Copy:** `Think about how long you have carried your goal. Think about what another year without a plan would cost your business. Compare that with ₦50,000, which you can pay in instalments.`
  - **CTA Button:** `Join the Waitlist` linking to WhatsApp.

---

### Section 12: How to Join (Four Simple Steps on WhatsApp)
- **Visual Style:** Responsive 4-card sequence (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Elements:**
  - **Section Label:** `HOW IT WORKS`
  - **Headline:** `Four Simple Steps on WhatsApp`
  - **Subtitle:** `Registration for Goal Grid is managed directly via WhatsApp conversation. There are no online forms or complex portals.`
  - **4 Direct Steps:**
    1. *Click the WhatsApp button:* Click any 'Join the Waitlist' or 'Chat with us' button across the page.
    2. *Send the prefilled enquiry message:* Your WhatsApp opens with a ready-to-send enquiry addressed to the team.
    3. *Receive programme and waitlist information:* The advisory team replies directly with official cohort details.
    4. *Follow the instructions provided for registration:* Review the schedule, instalment details, and complete registration with the team.
  - **Clarification Note:** Explicitly clarifies that clicking the button opens an enquiry conversation with our team; it does not automatically register a place until confirmed.
  - **CTA Button:** `Enquire on WhatsApp` linking via central helper.

---

### Section 13: Frequently Asked Questions (FAQ)
- **Visual Style:** Clean card accordions with smooth height transitions, rotating plus/minus toggles, and fully indexable markup.
- **Audited Answers Against Brief:**
  1. *Who is Goal Grid for?* (Business owners who sell products, offer services, run online or small businesses and want real progress on a goal.)
  2. *What exactly is Goal Grid?* (A 3-month programme to build a practical structure using Goal, Roadmap, Implementation, and Discipline.)
  3. *When does it run?* (January–March 2027; Waitlist opens December 2026.)
  4. *What will I do each week?* (Daily tasks, Friday Google Meet, progress reports, group & leader support, group presentations, private 1-on-1 session.)
  5. *How much time do I need?* (Daily task minutes and Friday session length are currently being finalized. Visitors are directed to WhatsApp for schedule clarification.)
  6. *How much does it cost? Can I pay in instalments?* (₦50,000 per person; instalments available. Milestone dates and amounts are being finalized; visitors are directed to WhatsApp for payment options.)
  7. *Is my business too small or too new for this?* (For business owners who want clearer goals and steady action; if you have an active business and goal, you will benefit.)
  8. *What if I miss a session or a task?* (Attendance requirements and catch-up arrangements are being finalized; visitors are directed to WhatsApp for clarification on guidelines.)
  9. *Will sessions be recorded?* (Recording and replay availability policies are currently being decided; visitors are directed to WhatsApp for recording policy clarification.)
- **Closing Help CTA:** `Have another question? Message us on WhatsApp` with direct link.

---

### Section 14: Final Call to Action
- **Visual Style:** Elevated floating card in Deep Navy (`#142642`) with rounded corners (`rounded-3xl`) and gold border accent.
- **Elements:**
  - Eyebrow: `YOUR 2027 STARTS NOW`
  - Headline: `Another Year With the Same Unfinished Goal, or Three Months That Change It?`
  - Subtext: `You already know what you want. What you need is a clear plan, daily action and people who help you keep going. Goal Grid gives you all three, from January to March 2027.`
  - CTA Button: Large pill button: `Join the Goal Grid Waitlist` with WhatsApp icon and arrow.
  - Pricing Cue: `₦50,000 · Instalments available`. *(Scarcity claim removed).*
  - Closing Note: `Tell us one business goal you want to work on in 2027. Start there.`

---

### Section 15: Footer
- **Visual Style:** Grounded strictly in official BMB Deep Navy (`#142642 text-white/80 py-16`), eliminating `#080F1B`.
- **Elements:**
  - Square BMB Strategy & Advisory badge logo (`bmb-logo-badge.jpg`).
  - Programme subtitle: `The Goal Grid Project · A 3-Month Goal Execution Programme`.
  - Programme Dates: `January–March 2027`.
  - Channels: WhatsApp contact link, Instagram link, Email placeholder.
  - Copyright: `© 2026 BMB Strategy & Advisory Ltd. All rights reserved.`

---

### Persistent UI Element: Floating WhatsApp Action Button
- **Visual Style:** Fixed bottom-right circular pill (`fixed bottom-6 right-6 z-40`), styled in Deep Navy with gold icon and green WhatsApp accent.
- **Interaction:** Opens direct WhatsApp conversation with prefilled message. Subtle pulse on page load. Accessible tooltip: `Chat with us on WhatsApp`.

---

## 5. Motion & Interaction Guidelines

1. **Entrance Animations:** Subtle upward translation with opacity fade (`y: 16 -> 0, opacity: 0 -> 1`, duration `0.45s`).
2. **Card Hover Effects:** Subtle elevation (`translateY(-2px)`) and delicate border highlight (`border-gold/30`), with zero jarring rotations.
3. **Timeline Progression:** Smooth line fill on scroll for the GRID method without abrupt snapping.
4. **Accordion Motion:** CSS/Motion height auto-animation with rotating indicator (`0deg` to `45deg`).
5. **No Decorative Noise:** No drifting particles, no chaotic cursor trails, no unnecessary floating blobs.

---

## Revision 2 — Cinematic pass (2026-11-20)
**Rhythm:** hero (navy photograph) → Problem (white, editorial) → photographic band → GRID (navy) → Programme (off-white ledger) → Outcomes (navy, large type) → Audience (white) → Host (off-white, placeholder) → Accountability (white triptych) → Investment (navy) → How to Join (white) → FAQ (off-white) → Final CTA (navy photograph) → Footer (navy).

**Hero:** 4 intentional lines — "Don’t Just / Set the Goal. / Build the Path (gold) / to Achieve It." — each in its own clipping container. Sizes: 2.9rem (mobile) → 6.5rem (2xl). Photograph `hero-cinematic-bg.jpg` retained after critical review: composition has a calm dark left for type and a clear focal subject at right. **Weakness:** source is 1376×768 and is upscaled on large screens; grain masks softness but a higher-resolution original should replace it.

**Motion tokens** (`src/lib/motion.ts`): reveal ease `[0.22,1,0.36,1]`, soft ease `[0.16,1,0.3,1]`, in-out `[0.65,0,0.35,1]`; line duration 1.15 s, base 0.7 s. Reduced motion renders final states; `noscript` rule reveals content without JS.

**Rules kept:** BMB palette only (navy, gold, white, charcoal; tints of these), no Goal Grid logo, no forms/backends, placeholder WhatsApp number, no scarcity, no invented instalment schedule, no host credentials.
