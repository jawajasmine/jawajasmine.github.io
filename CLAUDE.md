# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page portfolio site for Jasmeen Jawa (UX designer / product manager), built with React 18 + TypeScript + Vite 5 + SCSS. Deployed to GitHub Pages at https://jawajasmine.github.io (a user site, so Vite `base` is `/`).

## Commands

```bash
npm install
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # tsc --noEmit && vite build -> dist/ (type errors fail the build)
npm run typecheck  # type-check only
npm run preview    # serve the production build
npm run deploy     # predeploy runs build, then gh-pages pushes dist/ to the gh-pages branch
```

There is no test suite and no linter. GitHub Pages serves the `gh-pages` branch, so nothing goes live until `npm run deploy` runs.

## Architecture

- `src/main.tsx` imports `index.scss` *before* `App` on purpose. Component SCSS must load after the globals so component rules (e.g. `.navbar__cta { display: none }`) can override shared classes like `.btn`.
- `src/App.tsx` renders a fixed list of sections: Hero, About, Skills, Portfolio, Experience, Contact. It also owns scroll state: one window scroll listener sets `scrolled` (past 50px) and `activeSection`, which it passes down to `Navbar`. Active-section detection uses a hard-coded list of section IDs (`home`, `about`, `skills`, `portfolio`, `experience`, `contact`). When you add, remove, or rename a section, update that list, the section element's `id`, and the links in `Navbar.tsx` together.
- Each component in `src/components/` is self-contained: it has a co-located `.scss` file, and its content lives in constant arrays at the top of the file (e.g. `PROJECTS` in `Portfolio.tsx`, `EXPERIENCES` in `Experience.tsx`, `EXPERTISE`/`TOOLS` in `Skills.tsx`, `IMPACT` in `About.tsx`). There is no CMS or data layer. To change site content, edit those arrays.
- Contact details (email, LinkedIn, resume path) live in `src/site.ts`. Don't hard-code them in components.
- Site content must match the resume (`Jasmeen_Jawa_Resume_UX_Leadership_2026`, the source of the Experience, Skills and "Selected Impact" data). Don't invent metrics, employers, or certifications, and project descriptions must match their screenshots.
- Scroll-reveal: add the `.reveal` class to an element and call `useReveal(sectionRef)` (`src/hooks/useReveal.ts`). It adds `is-visible` when the element enters the viewport. If `.reveal` children mount or unmount dynamically (like the portfolio filter), pass deps so newly mounted nodes get observed: `useReveal(ref, [activeFilter])`. Reveal and reduced-motion styles live in `index.scss`.
- `src/index.scss` is the global design system: CSS custom properties (`--color-primary`, `--font-serif`, etc.) and shared utility classes (`.container`, `.section`, `.section-header`, `.glass-card`, `.btn-*`, `.gradient-text`, `.orb`) plus keyframes. Reuse these before adding component-level styles. Fonts (Playfair Display, Inter) load from Google Fonts in `index.html`.

## Assets and legacy files

- Images and the resume PDF (`Jasmeen-Jawa-Resume.pdf`, path set in `src/site.ts`) live in `public/assets/` and are referenced by absolute path (`/assets/...`) in components. The hashed-looking filenames are just the real file names; keep them in sync if you rename anything.
- The root-level `assets/` directory and `vite.svg` are committed output from an earlier build/deploy, before the move to `gh-pages`. The current source doesn't use them. `dist/` is gitignored.
- Visual check without a test suite: run `npm run build && npx vite preview`, then screenshot with headless Chrome (`/Applications/Google Chrome.app`). Emulate mobile at 390px with real device emulation, because a plain `--window-size` gives misleading layouts.
