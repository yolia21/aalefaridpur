# The Faridpur Syeds Historical Archive

A premium, highly responsive historical archive and digital registry documenting the ancestry, lineage, migrations, and legacy of "The Faridpur Syeds". Designed with a classical heritage aesthetic and built on a high-performance, offline-capable Next.js architecture.

---

## 🏛️ Theme & Design Aesthetics: "Noble Islamic Heritage"

The website is customized around traditional heritage cues to provide an immersive historical experience:
*   **Color Palette**: Deep Lapis & Sapphire Blue background hues, Antique Gold highlights for titles/details, and soft Parchment/Cream base layers for ultimate text legibility.
*   **Typography**: Classical Serif typography (`Playfair Display` for headers, `Amiri` for calligraphy and Arabic/Urdu scripts) and clean Sans-Serif (`Plus Jakarta Sans`) for readable body text.
*   **Visual Frame Ornaments**: Heritage-inspired borders, gold corner decorations, and repeating vector Islamic star lattices (SVG-patterned backdrops).
*   **High-Fidelity Placeholders**: Detailed container structures with gold outlines, centered eight-point star medallions, and descriptive catalog-style captions for historical documents (Farman-e-Shahi, Mughal painting, 1857 resistance sketch, etc.).

---

## 🛠️ Tech Stack & Architecture

*   **Core**: Next.js 16 (App Router), React 19, TypeScript.
*   **Styling**: Tailwind CSS v4 (CSS-first configurations via `@theme` in `globals.css`).
*   **Iconography**: Lucide React.
*   **Static Data Rendering**: Zero database calls or external API keys are used. All datasets (narratives, migration timelines, and lineage structures) are fully coded in typed static components inside `src/data/historicalData.ts` to ensure instant loading, high SEO value, and complete offline capability.

---

## 📂 File Directory Structure

*   `src/app/page.tsx` — Assembly of all archive page divisions.
*   `src/app/layout.tsx` — Google fonts loader, meta-tags, and document container.
*   `src/app/globals.css` — Custom scrollbars, parchment texturing, calligraphic scripts, and animation layers.
*   `src/components/Hero.tsx` — Hero block with detailed lineage metadata, intro quote, and dual-language headings.
*   `src/components/Narrative.tsx` — Alternating high-end catalog layout tracing the four major historical eras.
*   `src/components/MigrationMap.tsx` — Interactive vertical timeline connected to a vector plotted coordinate map.
*   `src/components/LineageTree.tsx` — Visual family tree offering segmented era accordions or a unified vertical chain.
*   `src/components/ImagePlaceholder.tsx` — Reusable ornate media layout for missing imagery.
*   `src/data/historicalData.ts` — Statically typed database records.

---

## 🚀 How to Run Locally

Get the application up and running instantly by following these simple steps:

### 1. Install dependencies
From the root directory, run the package installation command:
```bash
npm install
```

### 2. Launch the Development Server
Fire up the local server instantly:
```bash
npm run dev
```

### 3. Open the browser
Open your browser and navigate to the local address:
```
http://localhost:3000
```

---

## 📦 Building for Production

To compile a highly optimized, fully static build optimized for fast loading and deployment (e.g. on Vercel):
```bash
npm run build
```
This compile step runs a full TypeScript verification, CSS assembly, and generates static pages.
