# Rithwik Kamalesh — Portfolio

> A modern, premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer)](https://framer.com/motion)

---

## ✨ Features

- **Apple/Vercel-inspired aesthetic** — dark-first, minimal, premium
- **Smooth animations** — Framer Motion throughout with staggered reveals
- **Interactive particle background** — canvas-based, performance-optimized
- **Scroll progress indicator** — thin accent-colored bar at top
- **Cursor glow effect** — radial gradient follows mouse (desktop only)
- **Page load animation** — polished entry sequence
- **Dark / Light mode toggle** — with `next-themes`
- **Active section highlighting** — navbar tracks scroll position
- **Project category filter** — animated with Framer Motion layout
- **Interactive skills explorer** — category-based skill browser
- **Contact form** — with validation and animated states
- **Fully responsive** — mobile-first, works on all screen sizes
- **SEO optimized** — metadata, Open Graph, Twitter cards
- **Accessible** — semantic HTML, aria labels, keyboard nav

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── globals.css        # CSS variables, fonts, utilities
│   ├── layout.tsx         # Root layout + SEO metadata
│   └── page.tsx           # Main page assembly
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with active section detection
│   │   └── Footer.tsx     # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── CursorGlow.tsx
│       ├── PageLoader.tsx
│       ├── ParticleBackground.tsx
│       ├── ScrollProgress.tsx
│       └── SectionWrapper.tsx
└── lib/
    ├── data.ts            # All resume/portfolio content
    └── utils.ts           # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Rithwik01/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Vercel (Recommended — 1 click)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Repository
3. Deploy — Vercel auto-detects Next.js config

### Netlify
```bash
npm run build
# Deploy the `.next` output directory
```

---

## 🎨 Customization

All portfolio content lives in **`src/lib/data.ts`**:

- `PERSONAL` — name, bio, links, email, resume URL
- `EXPERIENCE` — work history with bullets and skills
- `PROJECTS` — project cards with highlights and tags
- `SKILLS` — categorized skill lists
- `EDUCATION` — degrees and certifications
- `NAV_LINKS` — navigation items

To update colors/theme, edit the CSS variables in `src/app/globals.css`.

---

## 📬 Contact Form

The contact form currently simulates a send. To wire it to a real backend:

**Option A: Formspree**
```
https://formspree.io — free tier, add action URL to the form
```

**Option B: Resend (recommended)**
```bash
npm install resend
# Create /app/api/contact/route.ts with Resend SDK
```

**Option C: EmailJS**
```bash
npm install @emailjs/browser
```

---

## 📄 License

MIT © Rithwik Kamalesh
