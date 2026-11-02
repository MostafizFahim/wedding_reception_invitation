# 🌸 Fahim & Joyee — Premium Bilingual Wedding Reception (Bou Bhat) Invitation Website

> A bespoke, luxury, mobile-first, bilingual wedding invitation website for **Engineer Mostafizur Rahman Fahim & Engineer Naeema Jannat Joyee**.
> Designed in an airy, pastel color palette (Baby Pink & Light Sky Blue) with delicate Islamic architectural geometry, modern typography, and original animated vector illustration.

---

## 📑 Table of Contents

1. [Project Overview & Key Features](#1-project-overview--key-features)
2. [Color Palette & Theme Customization](#2-color-palette--theme-customization)
3. [Page Structure (~3-4 Mobile Screens)](#3-page-structure-3-4-mobile-screens)
4. [Centralized Content (`src/content.ts`)](#4-centralized-content-srccontentts)
5. [Switching between Vector Illustration & Photo](#5-switching-between-vector-illustration--photo)
6. [Bilingual Switching & LocalStorage](#6-bilingual-switching--localstorage)
7. [Calendar Export (.ics) & Google Maps](#7-calendar-export-ics--google-maps)
8. [RSVP & Collapsible Hosts Accordion](#8-rsvp--collapsible-hosts-accordion)
9. [Local Development & Production Build](#9-local-development--production-build)
10. [Vercel Deployment (Zero Config)](#10-vercel-deployment-zero-config)
11. [GitHub Pages Deployment Alternative](#11-github-pages-deployment-alternative)

---

## 1. Project Overview & Key Features

- **Soft Pastel Aesthetics**: Baby pink (`#FFF5F8`, `#F9D5E0`) and light sky blue (`#E8F5FD`, `#CDE8F8`), accented with deep rose (`#B04C6C`) passing WCAG AA contrast.
- **Default Language**: English (`en`) on first visit, with instant toggle to Bangla (`bn`) in the top navigation. Remembers selection in `localStorage`.
- **Original Vector Hero Art**: Built-in SVG + CSS/Framer Motion animated illustration of the bride and groom under a pastel Mihrab arch (faceless, respectful, idle swaying dupatta, drifting rose petals, and swinging lanterns).
- **Embedded Countdown**: Directly integrated into the Hero under the date as a compact 4-tile row (Days, Hours, Min, Sec), formatted with Bengali numerals in Bangla mode.
- **Privacy & Security**: Zero backend, zero cookies, zero tracking scripts. Search engine crawlers blocked via `public/robots.txt` and `<meta name="robots" content="noindex, nofollow" />`.
- **Ultra Compact**: Merged 4-section layout fitting within ~3.3 mobile screens of scrolling.

---

## 2. Color Palette & Theme Customization

All colors are controlled exclusively through CSS variables defined in [`src/index.css`](file:///e:/invitaion_web/src/index.css):

```css
:root {
  --pink-50: #FFF5F8;       /* Primary page background */
  --pink-200: #F9D5E0;      /* Baby pink card & accent tint */
  --pink-400: #EFA9BF;      /* Soft rose decorative borders */
  --sky-100: #E8F5FD;       /* Light sky blue section background */
  --sky-200: #CDE8F8;       /* Groom sherwani & border accent */
  --sky-400: #8EC5E8;       /* Sky blue highlight */
  --accent: #B04C6C;        /* Deeper rose for buttons/links (WCAG AA compliant) */
  --accent-hover: #983E5B;  /* Button hover state */
  --ink: #2E3A4D;           /* Soft navy body text */
  --ink-muted: #5C6B82;     /* Subtitle & secondary text */
  --line: #E7C9D3;          /* Hairline dividers */
}
```

To adjust any tone, simply modify the hex values in `src/index.css`.

---

## 3. Page Structure (~3-4 Mobile Screens)

The website is structured into 4 compact, high-impact sections:

1. **HERO**:
   - Sacred Bismillah in Amiri Arabic (`dir="rtl"`).
   - Animated vector wedding illustration (or photo mode).
   - Couple names ("Fahim & Joyee" / "ফাহিম & জয়ী").
   - Event subtitle ("Wedding Reception · Bou Bhat").
   - Date badge ("Saturday, 26 December 2026").
   - Compact single-row countdown timer (4 tiles).
2. **INVITATION + DETAILS (Merged Card)**:
   - Heartfelt invitation letter.
   - 3-row detail list: Date, Reception time (1:00 PM), Venue.
   - Action buttons: "Add to Calendar" (`.ics` download) and "Directions".
3. **VENUE**:
   - Google Maps iframe container (aspect ratio 4/3 mobile, 16/9 desktop).
   - Address and directions button for mobile navigation.
4. **RSVP + FAMILY ACCORDION**:
   - Prominent WhatsApp confirmation button (`https://wa.me/8801785227997`) with prefilled greeting.
   - Event information telephone call action (`tel:+8801711697240`).
   - Collapsible accordion for "Hosts & Welcome Committee" (closed by default).
   - Minimalist footer with Sunnah Dua.

---

## 4. Centralized Content (`src/content.ts`)

All content, dates, names, translations, phone numbers, and coordinates live in:  
👉 [`src/content.ts`](file:///e:/invitaion_web/src/content.ts)

You never need to touch React components to edit wedding details!

```ts
export const CONTENT: ContentConfig = {
  config: {
    defaultLanguage: 'en', // 'en' or 'bn'
    heroMode: 'animated-image', // 'animated-image' | 'photo'
    heroImages: {
      desktop: '/images/hero/couple-main.webp',
      mobile: '/images/hero/couple-mobile.webp',
      background: '/images/hero/hero-background.webp',
    },
    heroPhoto: '/images/hero-couple.jpg',
    showMap: true,
    showFamilyAddresses: false,
  },
  // ...
}
```

---

## 5. Premium Animated Wedding Hero & Custom Artwork

The hero features `AnimatedWeddingHero.tsx` with atmospheric animations (breathing motion, floating rose petals, glowing bokeh, swaying Moroccan lanterns, and ambient shimmer).

### Supplying or Updating Couple Artwork:
1. Place your exported couple artwork in `public/images/hero/`:
   - `couple-main.webp` (Desktop/Tablet, recommended 1200 × 1400 px or larger)
   - `couple-mobile.webp` (Mobile, recommended 900 × 1200 px or larger)
   - `hero-background.webp` (Optional backdrop, recommended 1600 × 1200 px or larger)
2. See [`public/images/hero/README.md`](file:///e:/invitaion_web/public/images/hero/README.md) for full image specifications.
3. If no artwork is placed, an elegant pastel gradient placeholder with graceful fallback is automatically rendered with zero broken image icons.

---

## 6. Bilingual Switching & LocalStorage

- **English default**: First-time visitors see English immediately.
- **Instant Toggle**: Clicking the `বাংলা` button in the navigation switches the entire site to Bengali, formatting numbers to Bengali digits (`১, ২, ৩...`) and updating `document.documentElement.lang`.
- **Persistent**: Guest preference is saved to browser `localStorage` and automatically restored on subsequent visits.

---

## 7. Calendar Export (.ics) & Google Maps

- **Client-Side .ics**: Clicking "Add to Calendar" downloads a valid RFC 5545 `.ics` file with UTC timestamps (`20261226T070000Z`), venue, and alarms.
- **Confirmed Venue Coordinates**:
  - Venue: *Prokoushali Convention Hall, Joydebpur, Gazipur*
  - Coordinates: `23.9999571, 90.4220385`
  - Directions URL: `https://www.google.com/maps?dir/?api=1&destination=23.9999571,90.4220385`

---

## 8. RSVP & Collapsible Hosts Accordion

- **WhatsApp Action**: Automatically encodes the prefilled message (`https://wa.me/8801785227997`):
  - English: *"Assalamu Alaikum. I am confirming my attendance for Fahim & Joyee's Bou Bhat reception ceremony."*
  - Bangla: *"আসসালামু আলাইকুম। ফাহিম ও জয়ীর বৌভাত অনুষ্ঠানে উপস্থিত থাকার বিষয়ে জানাচ্ছি।"*
- **Event Information Call**: `tel:+8801711697240`.
- **Collapsible Accordion**:
  - Closed by default to maintain a compact page height.
  - Hosts: Alhaj Md. Abdur Rashid & Alhajja Delowara Begum.
  - Welcoming Committee: Sohag, Sumi, Rumi, Urmi, Ayaan, Anas, Ayash, Sara, Zara.

---

## 9. Local Development & Production Build

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Test production build
npm run build
npm run preview
```

---

## 10. Vercel Deployment (Zero Config)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: Revision 2 pastel theme, compact layout, illustration hero"
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com), click **Add New Project**, select the repository.
3. Vercel detects Vite automatically:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 11. GitHub Pages Deployment Alternative

If hosting under a GitHub repository subpath (e.g. `https://<user>.github.io/<repo-name>/`):
1. In `vite.config.ts`, set `base: '/<repo-name>/'`.
2. Run `npm run build` and deploy the `dist/` directory.

---

## 📜 Sacred Sunnah Blessing

> **بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ**  
> *"May Allah bless you and bestow His blessings upon you and unite you both in goodness."*  
> Cordially invited by **Alhaj Md. Abdur Rashid** and **Alhajja Delowara Begum**.  
> Celebration of **Fahim & Joyee** • 26 December 2026.
