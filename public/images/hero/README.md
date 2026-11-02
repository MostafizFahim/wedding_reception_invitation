# Hero Artwork Asset Directory

This directory holds the primary visual assets for the animated wedding hero section on the **Fahim & Joyee** Wedding Invitation website.

---

## Required File Names

| Filename | Purpose | Recommended Dimensions | Format | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `couple-main.webp` | Desktop & tablet couple artwork | **1200 × 1400 px** or larger (~3:4 to 4:5 aspect ratio) | WebP or AVIF (or transparent WebP / PNG) | High-resolution realistic artwork of the bride and groom. Keep heads & torsos centered. |
| `couple-mobile.webp` | Mobile couple artwork | **900 × 1200 px** or larger (~3:4 aspect ratio) | WebP or AVIF (or transparent WebP / PNG) | Optimized for vertical mobile screens (375px–768px). Avoid edge clipping of attire. |
| `hero-background.webp` | Hero backdrop setting | **1600 × 1200 px** or larger (~4:3 landscape) | WebP or AVIF | Romantic wedding arch, floral garden, or luxury hall backdrop with soft cinematic lighting. |

---

## Creative & Aesthetic Direction

* **Characters**:
  * Realistic South Asian bride and groom (tasteful fictional figures, natural human proportions, realistic skin texture and fabric folds).
  * **Groom**: Elegant pastel powder-blue sherwani or traditional panjabi with delicate embroidery.
  * **Bride**: Elegant baby-pink or blush-pink bridal lehenga / saree, graceful draped dupatta, and tasteful traditional jewellery.
  * **Mood**: Cinematic lighting, gentle depth, soft shadows, warm highlights, and subtle background blur.
* **Palette**: Pastel baby pink (`#FFF5F8`, `#F9D5E0`), light powder blue (`#E8F5FD`, `#CDE8F8`), ivory, and champagne gold accents.
* **Composition**:
  * Keep the couple centered horizontally.
  * Ensure generous headroom (~10–15% padding from the top edge) so the arched framing does not clip hair, turbans, or dupattas.
  * Transparent background is supported and recommended for seamless integration with the built-in ambient lighting and floating petal effects.

---

## How to Update

1. Export your final artwork as WebP using the filenames above.
2. Place the files directly in this directory (`public/images/hero/`).
3. Refresh the website in your browser. The application will immediately display the new artwork with all atmospheric animations (breathing motion, floating petals, glowing bokeh, swaying lanterns) applied automatically.

---

## Fallback Behavior

If any image file is missing, the website displays an elegant pastel gradient placeholder with decorative floral arch filigree. Broken image icons are never shown.
