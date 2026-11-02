# ⚜️ Fahim & Joyee — Luxury Wedding Reception (Bou Bhat) Invitation Website

> A bespoke, luxury, mobile-first, bilingual wedding invitation website for **Engineer Mostafizur Rahman Fahim & Engineer Naeema Jannat Joyee**.
> Designed in an exquisite **Ivory, Gold & Crimson** palette with a painted golden wedding arch hero, interactive digital invitation envelope, live wedding countdown strip, and authentic bilingual typography.

---

## 📑 Table of Contents

1. [Revision 3 Architecture & Features](#1-revision-3-architecture--features)
2. [Color Palette & WCAG AA Contrast Compliance](#2-color-palette--wcag-aa-contrast-compliance)
3. [Page Structure](#3-page-structure)
4. [Centralized Content (`src/content.ts`)](#4-centralized-content-srccontentts)
5. [Hero Painting & Scaled Text Architecture](#5-hero-painting--scaled-text-architecture)
6. [Countdown Strip Directly Below Hero](#6-countdown-strip-directly-below-hero)
7. [Bilingual Switching & LocalStorage](#7-bilingual-switching--localstorage)
8. [Calendar Export (.ics) & Google Maps](#8-calendar-export-ics--google-maps)
9. [RSVP & Collapsible Hosts Accordion](#9-rsvp--collapsible-hosts-accordion)
10. [Local Development & Production Build](#10-local-development--production-build)

---

## 1. Revision 3 Architecture & Features

- **Painted Wedding Arch Hero**: Portrait 9:16 painting asset (`public/images/hero/hero-background.webp`, ~152KB, 900x1600).
  - **Mobile (<768px)**: Spans full width at natural 9:16 aspect ratio without any cropping.
  - **Desktop (>=768px)**: Centered framed panel (max-height `100svh`, 9:16, gold border, soft shadow) with enlarged, heavily blurred background copy.
  - **Scaled Text Zone**: Text sits strictly in the empty ivory area (top 28% to 58%, max width ~70%), with zero overlap on the chandelier (top 8-28%) or the couple (bottom 62-100%).
- **Ambient Micro-Animations**:
  - Gentle candle-glow pulse over the chandelier flames.
  - 10–14 drifting gold leaves, deep-red rose petals, and gold sparkle glints strictly along the side margins and upper arch.
  - Very slow Ken Burns zoom on the painting panel.
  - First-load soft gold shimmer sweep across the arch frame.
  - High performance: pauses when the browser tab is hidden; respects `prefers-reduced-motion`.
- **Slim Crimson Countdown Strip**: Directly below the hero in `#5E1520` background with ivory numbers (`#FBF6EA`) and gold labels (`#E3C77E`).
- **Interactive Digital Invitation Envelope**: Luxury stationery envelope with centered `F&J` wax seal, flap-opening physics, and smooth transition to the main invitation.
- **Privacy First**: Zero backend, zero tracking, crawler blocking via `public/robots.txt` and `noindex, nofollow`.

---

## 2. Color Palette & WCAG AA Contrast Compliance

All colors are controlled exclusively through CSS variables defined in [`src/index.css`](file:///e:/invitaion_web/src/index.css) and mapped in `tailwind.config.ts`:

```css
:root {
  --ivory-50: #FBF6EA;      /* Page background, cards */
  --ivory-100: #F6EEDC;     /* Alternating section background */
  --ivory-200: #E9DCC0;     /* Tints, soft borders */
  --gold-500: #B8913A;      /* Lines, dividers, ornaments ONLY (not for text) */
  --gold-700: #7A5C14;      /* Gold text and icons on ivory */
  --gold-300: #E3C77E;      /* Gold text on dark crimson */
  --crimson-700: #7A1F2E;   /* Primary buttons, names, headings, links */
  --crimson-900: #5E1520;   /* Countdown strip, footer, dark sections */
  --ink: #3A2A22;           /* Body text */
  --ink-muted: #6B5A4C;     /* Secondary text */
}
```

### Contrast Compliance Report (sRGB Relative Luminance)

| Text / Foreground Element | Background | Hex Values | Contrast Ratio | WCAG AA Status |
| :--- | :--- | :--- | :--- | :--- |
| Body Text (`--ink`) | Ivory 50 | `#3A2A22` on `#FBF6EA` | **12.69:1** | ✅ AAA Pass |
| Primary Names / Headings (`--crimson-700`) | Ivory 50 | `#7A1F2E` on `#FBF6EA` | **9.44:1** | ✅ AAA Pass |
| Secondary Text (`--ink-muted`) | Ivory 50 | `#6B5A4C` on `#FBF6EA` | **6.10:1** | ✅ AA Pass |
| Gold Text / Icons (`--gold-700`) | Ivory 50 | `#7A5C14` on `#FBF6EA` | **5.78:1** | ✅ AA Pass |
| Primary Button Text (`--ivory-50`) | Crimson 700 | `#FBF6EA` on `#7A1F2E` | **9.44:1** | ✅ AAA Pass |
| WhatsApp RSVP Text (White) | Dark Green | `#FFFFFF` on `#0B5B4A` | **8.05:1** | ✅ AAA Pass |
| Countdown Numbers (`--ivory-50`) | Crimson 900 | `#FBF6EA` on `#5E1520` | **12.14:1** | ✅ AAA Pass |
| Countdown Labels (`--gold-300`) | Crimson 900 | `#E3C77E` on `#5E1520` | **7.94:1** | ✅ AAA Pass |
| Headings on Alternating Section | Ivory 100 | `#7A1F2E` on `#F6EEDC` | **8.81:1** | ✅ AAA Pass |
| Body Text on Alternating Section | Ivory 100 | `#3A2A22` on `#F6EEDC` | **11.85:1** | ✅ AAA Pass |

---

## 3. Page Structure

1. **HERO**:
   - 9:16 portrait painted wedding arch.
   - Scaled HTML text overlay: Sacred Bismillah, Tagline, Couple Names ("Fahim & Joyee"), Subtitle ("Wedding Reception · Bou Bhat"), and Date.
2. **COUNTDOWN STRIP**:
   - Sits directly below the hero in crimson-900.
   - 4 units: Days, Hours, Minutes, Seconds with Bengali numeral support.
   - Dynamic states for Event Day and Post-Event gratitude.
3. **INVITATION CARD + TIMELINE**:
   - Printed double-hairline card in ivory-50 with gold-500 borders.
   - Parents' names and family addresses block.
   - 3-step connected milestone progression (Date, Reception Lunch 1:00 PM, Venue).
   - "Add to Calendar" (.ics export) and "Directions" buttons.
4. **VENUE & MAP**:
   - Prokoushali Convention Hall address details.
   - Embedded Google Map with 1px gold frame.
5. **RSVP & WELCOMING COMMITTEE**:
   - Contrast-compliant WhatsApp RSVP (`#0B5B4A`) and telephone call.
   - Expandable Hosts and Welcoming Committee accordion.
6. **FOOTER**:
   - Crimson-900 background with ivory text, gold-300 accents, and sacred Sunnah Dua.

---

## 4. Centralized Content (`src/content.ts`)

All content, dates, names, translations, phone numbers, and coordinates live in:  
👉 [`src/content.ts`](file:///e:/invitaion_web/src/content.ts)

```ts
export const CONTENT: ContentConfig = {
  config: {
    defaultLanguage: 'en',
    heroImage: '/images/hero/hero-background.webp',
    heroImageWidth: 900,
    heroImageHeight: 1600,
    heroAlt: {
      en: 'Painted golden wedding arch with a bride in red and a groom in ivory walking beneath a chandelier',
      bn: 'একটি সোনালী খিলান ও ঝাড়বাতির নিচে লাল শাড়িতে কনে ও আইভরি পোশাকে বরের চিত্রকর্ম',
    },
    showMap: true,
    showFamilyAddresses: true,
  },
  // ...
}
```

---

## 5. Local Development & Production Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (TypeScript check + Vite bundle)
npm run build

# 4. Preview production build
npm run preview
```

---

## 📜 Sacred Sunnah Blessing

> **بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ**  
> *"May Allah bless you and bestow His blessings upon you and unite you both in goodness."*  
> Cordially invited by **Alhaj Md. Abdur Rashid** and **Alhajja Delowara Begum**.  
> Celebration of **Fahim & Joyee** • 26 December 2026.
