# Jasmeen Jawa — Portfolio Website

> **Live site**: [jawajasmine.github.io](https://jawajasmine.github.io)

A premium, animated portfolio showcasing 15+ years of UX design and product management experience. Built with React, TypeScript, Vite, and SCSS.

---

## ✨ Features

- **Animated Hero** — Typewriter role ticker, floating orbs, stats, and dual CTAs
- **About** — Career story, animated avatar with orbital rings, expertise tags
- **Skills** — Scroll-triggered animated progress bars for UX & PM skills, tools grid
- **Portfolio** — Filterable 3-column image grid with lightbox and hover effects
- **Experience** — Color-coded vertical timeline with role cards
- **Contact** — Email copy, LinkedIn, and Resume download cards
- **Responsive** — Mobile-first layout, hamburger menu
- **Dark theme** — Glass morphism, purple/sky-blue palette, micro-animations

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [SCSS](https://sass-lang.com/) | Styles (with CSS custom properties) |
| [gh-pages](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment

The site deploys to GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch. Changes go live at [jawajasmine.github.io](https://jawajasmine.github.io) within ~2 minutes.

---

## 📁 Project Structure

```
jawajasmine.github.io/
├── public/
│   └── assets/          # Portfolio images + resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx   # Fixed nav with scroll-aware glassmorphism
│   │   ├── Hero.tsx     # Animated intro with typewriter effect
│   │   ├── About.tsx    # Bio, avatar, highlights
│   │   ├── Skills.tsx   # Animated progress bars + tools
│   │   ├── Portfolio.tsx # Filterable image grid + lightbox
│   │   ├── Experience.tsx# Vertical timeline
│   │   └── Contact.tsx  # Contact cards + availability
│   ├── App.tsx
│   ├── main.tsx
│   └── index.scss       # Global design system (tokens, utilities)
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 Design Tokens (in `src/index.scss`)

| Token | Value | Use |
|-------|-------|-----|
| `--color-primary` | `#a78bfa` | Violet — primary accent |
| `--color-secondary` | `#38bdf8` | Sky blue — secondary |
| `--color-accent` | `#f472b6` | Pink — highlights |
| `--color-gold` | `#fbbf24` | Amber — Wipro callout |
| `--font-serif` | Playfair Display | Headings |
| `--font-sans` | Inter | Body text |

---

## 📝 Customization

To update personal info, edit these files:

- **Name / tagline**: `src/components/Hero.tsx`
- **Bio / tags**: `src/components/About.tsx`
- **Project cards**: `src/components/Portfolio.tsx` (`PROJECTS` array)
- **Work history**: `src/components/Experience.tsx` (`EXPERIENCES` array)
- **Email / LinkedIn**: `src/components/Contact.tsx`

---

*Built with ❤️ — Jasmeen Jawa, 2025*
