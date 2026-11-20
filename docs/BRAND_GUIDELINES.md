# Goal Grid — Brand & Visual Identity Guidelines

## 1. Brand Hierarchy & Ownership

Goal Grid is a specialised executive programme operated under **BMB Strategy & Advisory Ltd.**

- **Parent Brand:** BMB Strategy & Advisory Ltd.
- **Programme Name:** Goal Grid (or The Goal Grid Project)
- **Brand Architecture:** Monolithic endorsement. Goal Grid derives its institutional credibility, executive elegance, and authoritative tone directly from BMB Strategy & Advisory.
- **Rule on Programme Logo:** **Do not create a separate or competing Goal Grid logo.** The official BMB Strategy & Advisory brand marks are the sole visual identity marks used across the header, footer, and official programme collateral.

---

## 2. Official Brand Palette

The colour scheme reflects a classic, premium, and trustworthy advisory aesthetic.

| Color Role | Color Name | Hex Code | RGB | Tailwind Token | Usage & Guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Base** | Deep Navy | `#142642` | `rgb(20, 38, 66)` | `navy-800` / `navy` | Primary brand identifier, dark sections, prominent headings, primary buttons. |
| **Dark Variant** | Midnight Navy | `#080F1B` | `rgb(8, 15, 27)` | `navy-950` | Announcement strip, deep contrast backgrounds, footer backdrop. |
| **Primary Accent** | BMB Gold | `#C9A45C` | `rgb(201, 164, 92)` | `gold-500` / `gold` | Restrained accents, status indicators, badges, highlights, hover states. |
| **Light Accent** | Warm Champagne | `#F4ECD5` | `rgb(244, 236, 213)` | `gold-100` | Subtle badge backgrounds, highlight cards. |
| **Body Text** | Dark Charcoal | `#30343B` | `rgb(48, 52, 59)` | `charcoal` | High-legibility long-form reading, paragraphs, FAQ answers. |
| **Muted Text** | Slate Grey | `#6B7280` | `rgb(107, 114, 128)` | `charcoal-muted` | Metadata, secondary labels, timestamps. |
| **Light Surface** | Cool Off-White | `#F8F9FB` | `rgb(248, 249, 251)` | `surface-light` | Alternating section backgrounds, card containers. |
| **Pure Canvas** | Pure White | `#FFFFFF` | `rgb(255, 255, 255)` | `white` | Core page surface, card fills, high-contrast text on navy. |

### Colour Distribution Ratio
- **White & Light Neutrals (65–70%):** Clean, generous whitespace to ensure breathable editorial presentation.
- **Deep Navy (20–25%):** Anchoring elements — header, hero accents, dark feature/pricing sections, footer, primary buttons.
- **BMB Gold (5–10%):** Deliberate, high-value accents only. Never used as a large block background for text to preserve legibility.

---

## 3. Logo Assets & Placement Rules

The project utilises two supplied official BMB Strategy & Advisory logo assets located in `public/brand/`:

1. **`public/brand/bmb-logo-navy.png`**
   - **Characteristics:** Elegant serif "BMB" mark in Deep Navy on a transparent background.
   - **Usage:** Primary header on light backgrounds, light-themed cards, and official document headers.
   - **Preservation Rule:** Maintain original aspect ratio and clear space around the logo equal to the cap-height of the letter 'B'.

2. **`public/brand/bmb-logo-badge.jpg`**
   - **Characteristics:** Deep Navy squared emblem featuring white serif "BMB" typography and clean subtitle "STRATEGY & ADVISORY LTD."
   - **Usage:** Footer mark, mobile drawer branding, favicon/social share OpenGraph badge.

### Restrictions:
- Do NOT stretch, condense, or alter letter spacing.
- Do NOT recolour the logo in non-brand hues.
- Do NOT draw a replacement logo or invent a "Goal Grid" monogram.

---

## 4. Typography Direction

The typographic system balances executive authority with modern clarity.

### Primary Heading Typeface: **Sora**
- **Classification:** Geometric Sans-Serif with refined humanist curves.
- **Provider:** Google Fonts via `next/font/google`.
- **Weights Used:** Medium (`500`), SemiBold (`600`), Bold (`700`).
- **Styling Rules:** Generous line spacing (`leading-tight` or `leading-[1.15]`), tight letter-spacing (`tracking-tight`), balance text wrap (`text-balance`).

### Body & Interface Typeface: **Manrope**
- **Classification:** Clean, open, semi-geometric grotesque.
- **Provider:** Google Fonts via `next/font/google`.
- **Weights Used:** Regular (`400`), Medium (`500`), SemiBold (`600`).
- **Styling Rules:** Optimal reading line height (`leading-relaxed`), comfortable paragraph margins, high contrast on light backgrounds.

---

## 5. Design Personality & Aesthetic Tone

- **Executive & Authoritative:** Speaks with the grounded confidence of experienced advisors. No gimmicks, hype, or infomercial tropes.
- **Warm & Welcoming:** Accessible and supportive; invites business owners who feel overwhelmed into a structured haven.
- **Minimalist & Disciplined:** Every element serves a distinct communication purpose. White space is active, not empty.
- **Structured Precision:** Visual motifs echo the GRID framework: clean horizontal alignment lines, numbered milestones, connected progression paths, and crisp card borders.
