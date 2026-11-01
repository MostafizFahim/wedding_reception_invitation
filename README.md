# 💍 Fahim & Joyee — Premium Bilingual Wedding Reception (Bou Bhat) Invitation Website

> A bespoke, luxury, mobile-first, bilingual (Bangla default + English) wedding invitation website for **Engineer Mostafizur Rahman Fahim & Engineer Naeema Jannat Joyee**.
> Built with modern front-end technologies combining an editorial wedding magazine aesthetic with subtle Islamic architectural geometry.

---

## 📑 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Prerequisites & Installation](#2-prerequisites--installation)
3. [Running the Development Server](#3-running-the-development-server)
4. [Centralized Content (`src/content.ts`)](#4-centralized-content-srccontentts)
5. [Customizing Names, Dates, Venue & Contacts](#5-customizing-names-dates-venue--contacts)
6. [Replacing the Hero Placeholder with a Real Photo](#6-replacing-the-hero-placeholder-with-a-real-photo)
7. [Managing Gallery Photographs](#7-managing-gallery-photographs)
8. [Configuration Flags (Toggles)](#8-configuration-flags-toggles)
9. [Color Palette & CSS Customization](#9-color-palette--css-customization)
10. [Google Maps Configuration](#10-google-maps-configuration)
11. [Generating & Testing Production Build](#11-generating--testing-production-build)
12. [Deploying to Vercel (Zero Config)](#12-deploying-to-vercel-zero-config)
13. [Deploying to GitHub Pages Alternative](#13-deploying-to-github-pages-alternative)

---

## 1. Project Overview

- **Bilingual Experience**: Bangla default with instant English toggle, persisting preference in `localStorage`.
- **Islamic Geometry & Typography**: Sacred Bismillah in Amiri Arabic (`dir="rtl"`), pointed Mihrab arch framing, 8-point Islamic star motif, Noto Serif Bengali and Hind Siliguri for authentic Bangla typography.
- **Timezone-Safe Countdown**: Strictly targets `2026-12-26T13:00:00+06:00` (Asia/Dhaka UTC+6) without device-skew, displaying Bengali numerals (`১, ২, ৩...`).
- **Interactive Actions**:
  - Browser-generated RFC 5545 `.ics` Calendar download ("Add to Calendar").
  - Confirmed Google Maps embedded directions to *Prokoushali Convention Hall, Joydebpur, Gazipur*.
  - Direct WhatsApp RSVP with prefilled Bengali message.
  - Direct telephone call action.
  - Floating mobile RSVP action that respects safe-area insets.
- **Privacy First**: `noindex, nofollow` headers and `public/robots.txt` disallowing all search crawlers.
- **Optimized Performance**: 100% static React + Vite build, SVG placeholders, no database, no backend.

---

## 2. Prerequisites & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) version `18+` or `20+` or `24+`
- npm (comes bundled with Node.js)

### Installation
Open your terminal in the project directory:

```bash
# On Windows PowerShell / Command Prompt
npm install
```

---

## 3. Running the Development Server

To start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173`. Any changes saved in `src/content.ts` will update instantly in your browser.

---

## 4. Centralized Content (`src/content.ts`)

**You do NOT need to touch any React component to change text, names, dates, or pictures!**

Every string, label, phone number, address, and flag is centrally located in:
👉 [`src/content.ts`](file:///e:/invitaion_web/src/content.ts)

### Architecture of `src/content.ts`:
- `config`: Feature flags (show/hide sections).
- `event`: Date, feast time, end time, and ISO timezone timestamps.
- `contact`: Display phone number, international phone number, WhatsApp configuration.
- `venue`: Coordinates, embed URL, directions URL, and names.
- `media`: Path to hero photograph and gallery items.
- `groom`: Groom details, father, mother, and residence.
- `bride`: Bride details, father, mother, and residence.
- `hosts`: Parents of the groom (দাওয়াতান্তে).
- `welcomingCommittee`: 9 welcoming members (অভ্যর্থনায়).
- `translations`: Complete Bangla (`bn`) and English (`en`) copy.

---

## 5. Customizing Names, Dates, Venue & Contacts

To update event specifics, open `src/content.ts` and modify the relevant fields:

### A. Updating Names
```ts
// src/content.ts
groom: {
  name: {
    bn: 'মোঃ মোস্তাফিজুর রহমান ফাহিম',
    en: 'Mostafizur Rahman Fahim',
  },
  fullName: {
    bn: 'ইঞ্জিনিয়ার মোঃ মোস্তাফিজুর রহমান ফাহিম',
    en: 'Engineer Mostafizur Rahman Fahim',
  },
  // ...
},

bride: {
  name: {
    bn: 'নাঈমা জান্নাত (জয়ী)',
    en: 'Naeema Jannat Joyee', // ALWAYS "Naeema Jannat Joyee"
  },
  fullName: {
    bn: 'ইঞ্জিনিয়ার নাঈমা জান্নাত (জয়ী)',
    en: 'Engineer Naeema Jannat Joyee',
  },
  // ...
}
```

### B. Updating Date and Time
```ts
event: {
  date: '2026-12-26',
  time: '13:00',
  endTime: '17:00', // When confirmed, set the end time
  timezone: 'Asia/Dhaka',
  isoDateTime: '2026-12-26T13:00:00+06:00',
  isoEndDateTime: '2026-12-26T17:00:00+06:00',
}
```

### C. Updating RSVP Phone & WhatsApp Number
```ts
contact: {
  displayPhone: '01711-672740',
  internationalPhone: '+8801711672740',
  whatsappNumber: '8801711672740',
  whatsappMessage: {
    bn: 'আসসালামু আলাইকুম। ফাহিম ও জয়ীর বৌভাত অনুষ্ঠানে উপস্থিত থাকার বিষয়ে জানাচ্ছি।',
    en: 'Assalamu Alaikum. I am confirming my attendance for Fahim & Joyee\'s Bou Bhat reception ceremony.',
  },
}
```

---

## 6. Replacing the Hero Placeholder with a Real Photo

By default, the website displays an elegant bespoke SVG placeholder inside the pointed Mihrab arch (`/images/hero-couple-placeholder.svg`).

### Step-by-Step Replacement:
1. Prepare your photograph (portrait orientation works best, ideally `800x1000px` or `4:5` aspect ratio).
2. For optimal mobile load time, convert it to WebP format (e.g. `couple-hero.webp`) or JPG.
3. Save the image into the `public/images/` folder:
   `public/images/couple-hero.webp`
4. Open `src/content.ts` and update lines in `config` and `media`:
   ```ts
   config: {
     showCouplePhoto: true,
     heroImageIsPlaceholder: false, // <-- set to false
     // ...
   },
   media: {
     heroImage: '/images/couple-hero.webp', // <-- your new image path
     // ...
   }
   ```
5. Run `npm run build` to recompile.

---

## 7. Managing Gallery Photographs

The gallery is disabled by default (`showGallery: false`).

### Step-by-Step Activation:
1. Place your gallery photos (in `.webp` or `.jpg`) in `public/images/`:
   - `public/images/gallery-01.webp`
   - `public/images/gallery-02.webp`
   - `public/images/gallery-03.webp`
   - ...
2. Open `src/content.ts` and set:
   ```ts
   config: {
     showGallery: true, // <-- set to true
     // ...
   }
   ```
3. Update the `media.gallery` list in `src/content.ts` with your image paths and captions:
   ```ts
   gallery: [
     {
       id: 'photo-1',
       src: '/images/gallery-01.webp',
       alt: { bn: 'বরের সংবর্ধনা মুহূর্ত', en: 'Groom Reception' },
       title: { bn: 'শুভ সূচনা', en: 'Sacred Beginnings' },
       subtitle: { bn: 'পারিবারিক স্মৃতি', en: 'Family moments' },
     },
     // Add more photos as needed (6 to 10 photos recommended)
   ]
   ```

---

## 8. Configuration Flags (Toggles)

In `src/content.ts`, the `config` object gives you instant control:

| Flag | Default | Description |
| :--- | :--- | :--- |
| `showCouplePhoto` | `true` | Shows or hides the framed hero portrait |
| `heroImageIsPlaceholder` | `true` | Indicates whether the SVG placeholder is in use |
| `showGallery` | `false` | Shows or hides the photo gallery section and its nav link |
| `showMap` | `true` | Shows or hides the interactive Google Maps embed section |
| `showFamilyAddresses` | `false`| Shows or hides residential street addresses of bride/groom |
| `defaultLanguage` | `'bn'` | Initial site language (`'bn'` or `'en'`) |

---

## 9. Color Palette & CSS Customization

Colors are defined as CSS variables in [`src/index.css`](file:///e:/invitaion_web/src/index.css) and wired into Tailwind CSS:

```css
:root {
  --color-emerald: #0F3D33;       /* Primary rich emerald green */
  --color-emerald-deep: #08221C;  /* Deepest background tone */
  --color-ivory: #F7F1E3;         /* Warm ivory paper card background */
  --color-ivory-light: #FCF9F2;   /* Pure ivory highlight surface */
  --color-gold: #C9A45C;          /* Soft antique gold */
  --color-gold-light: #DFC385;    /* Gold gradient accent */
  --color-terracotta: #C97B63;    /* Subtle terracotta / blush accent */
  --color-ink: #1B1B1B;           /* High contrast body text */
}
```

To modify a tone, simply change the hex code in `src/index.css`.

---

## 10. Google Maps Configuration

The confirmed location for **Prokoushali Convention Hall, Joydebpur, Gazipur** is configured in `src/content.ts`:

- **Latitude**: `23.9999571`
- **Longitude**: `90.4220385`
- **Embed URL**: `https://www.google.com/maps?q=23.9999571,90.4220385&output=embed`
- **Directions URL**: `https://www.google.com/maps/dir/?api=1&destination=23.9999571,90.4220385`

---

## 11. Generating & Testing Production Build

To test the production build locally:

```bash
# 1. Type-check and create production bundle in dist/
npm run build

# 2. Preview the built website locally
npm run preview
```

Open `http://localhost:4173` to verify performance and interactions.

---

## 12. Deploying to Vercel (Zero Config)

The project is structured for zero-configuration deployment on **Vercel**:

### Option A: Via GitHub (Recommended)
1. Initialize git and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial luxury invitation website"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** -> **Project**.
4. Import your GitHub repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your luxury invitation is live with instant SSL!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 13. Deploying to GitHub Pages Alternative

If deploying to GitHub Pages under a subpath (e.g. `https://<username>.github.io/<repo-name>/`):

1. Open [`vite.config.ts`](file:///e:/invitaion_web/vite.config.ts) and set the base path:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/<your-repo-name>/', // <-- add your repo name
     build: {
       outDir: 'dist',
     },
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `dist/` directory to your `gh-pages` branch.

---

## 📜 Credits & Blessing

> **بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ**  
> *"May Allah bless you and bestow His blessings upon you and unite you both in goodness."*

Cordially invited by **Alhaj Md. Abdur Rashid** and **Alhaj Mrs. Delowara Begum**.  
Celebration of **Fahim & Joyee** • 26 December 2026.
