# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint check
```

## Tech Stack

- **React 19** + **Vite 8** (with `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **Tailwind CSS v4** — use canonical class names (e.g. `w-175` not `w-[700px]`, `bg-linear-to-b` not `bg-gradient-to-b`, `z-100` not `z-[100]`)
- **Framer Motion** for all animations
- **Zustand** with `persist` middleware for theme and toast state
- **EmailJS** for contact form (credentials in `Contact.jsx` constants)
- **lucide-react** for general icons — `Github` and `Linkedin` are NOT in lucide-react; use `GithubIcon`/`LinkedinIcon` from `src/components/ui/SocialIcons.jsx`
- **react-icons** (`fa`, `si`, `tb`, `md` sub-packages) used exclusively in `data.js` for skill/tech icons

## Architecture

Single-page app — no React Router, all sections in one scrollable page.

```
src/
  store/          themeStore.js (dark/light + localStorage), toastStore.js
  hooks/          useActiveSection.js (IntersectionObserver), useCounter.js (RAF counter)
  utils/data.js   All static content: NAV_LINKS, STATS, SKILLS, PROJECTS, WORKFLOW_STEPS
  components/
    ui/            Button, Card, Badge, Input, Toast, SectionLabel, SocialIcons
    common/        ScrollTop
  layouts/        Navbar (glass, sticky, active-section highlight, mobile menu)
  sections/       Hero, Stats, About, Skills, Projects, Workflow, Contact, Footer
```

## Design System

- **Colors**: bg `#0B0F0C`, card `#111715`, border `#1F2A25`, primary green `#22C55E`, glow `#4ADE80`, text `#E6F4EA` / `#9CA3AF`
- **Light mode**: toggled by adding `.light` class to `<html>` — components manually switch via `isDark` from `useThemeStore()`
- **CSS utilities** (defined in `index.css`): `glass`, `glass-light`, `gradient-text`, `gradient-text-light`, `glow-green`, `glow-green-sm`, `glow-text`
- All cards: `rounded-2xl`, hover lifts `y: -4px`, green glow border on hover
- CSS vendor prefix order: `-webkit-backdrop-filter` must come before `backdrop-filter`

## Key Patterns

- **Theme**: `useThemeStore()` → `isDark` boolean; toggle adds/removes `.light` on `<html>`; persisted to localStorage
- **Section reveal**: wrap content in `useInView` from framer-motion with `once: true`
- **Content updates**: edit `src/utils/data.js` — single source of truth for all portfolio content (projects, skills, stats, workflow)
- **Adding a project**: add entry to `PROJECTS` array in `data.js`; set `featured: true` on one to get the 2-column span card
- **EmailJS setup**: replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY` constants in `src/sections/Contact.jsx`
