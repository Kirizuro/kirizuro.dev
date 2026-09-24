# kirizuro.dev

Personal portfolio of **Claudio Junior** — Senior Software Engineer (full stack, now building GenAI products).

**Live:** [kirizuro.dev](https://kirizuro.dev) · [kirizuro.github.io](https://kirizuro.github.io)

A single-page, bilingual (EN / PT), light/dark portfolio built with Svelte, TypeScript, Vite and Tailwind CSS. There is no backend, router or CMS — all content lives in the source and ships as static files to GitHub Pages.

## Highlights

- **Light / dark theme** — follows the system preference on first visit, persists the choice in `localStorage`, and sets the theme class before first paint to avoid a flash.
- **Bilingual (EN / PT)** — every user-facing string is a key in a single translation store; the nav toggles the language instantly with no reload.
- **Scroll-reveal animations** — a small IntersectionObserver-based Svelte action (`use:reveal`), no animation library.
- **Responsive and accessible** — mobile-first layout with a hamburger nav, semantic HTML, aria labels and focus-visible outlines.
- **Tiny footprint** — no runtime libraries in use (`svelte-pdf` is declared in `package.json` but not imported); styling is Tailwind plus CSS variables.

## Sections

| # | Section | Component | What it shows |
|---|---------|-----------|---------------|
| – | Hero | `src/lib/Hero.svelte` | Intro, role, terminal-style snippet, CTAs |
| 02 | Experience | `src/lib/Experience.svelte` | Timeline of positions with tech tags |
| 03 | Projects | `src/lib/Projects.svelte` | Featured work as cards |
| 04 | Skills | `src/lib/Skills.svelte` | Skill bars grouped by category |
| 05 | Contact | `src/lib/Contact.svelte` | Email, WhatsApp, GitHub, LinkedIn, footer |

## Tech stack

- [Svelte 3](https://svelte.dev) + TypeScript
- [Vite 4](https://vitejs.dev) (build and dev server)
- [Tailwind CSS 3](https://tailwindcss.com) + PostCSS/Autoprefixer, with theme colors as CSS variables
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment to GitHub Pages

## Getting started

Requires Node.js 18+ and Yarn (the repo is locked with `yarn.lock`).

```bash
yarn            # install dependencies
yarn dev        # dev server with HMR
yarn run check  # svelte-check / TypeScript (plain `yarn check` is Yarn's own integrity command)
yarn build      # production build into dist/
yarn preview    # serve the production build locally
yarn deploy     # publish dist/ to the gh-pages branch
```

## Updating the content

Almost every change is a text edit.

**Copy, job descriptions, project descriptions** — edit both the `en` and `pt` blocks in `src/lib/i18n.ts`. Keys are namespaced (`exp.<job>.title`, `project.<n>.description`, `skills.<category>`, …). A missing key renders as the raw key, which makes gaps easy to spot.

**Add a job** — add `exp.<key>.{title,company,period,location,description}` in both locales, then add `{ key: '<key>', tech: [...] }` to the `jobs` array in `Experience.svelte`. The array is ordered newest first.

**Add a project** — add `project.<id>.{title,description,role}` in both locales, then an entry (`id`, `tech`, `icon`) to `projects` in `Projects.svelte`.

**Skills** — categories and bar levels are plain data at the top of `Skills.svelte`; a new category also needs a `skills.<key>` label in both locales.

**Theme colors** — all colors are CSS variables in `src/app.css` (`:root` for dark, `html.light` for light). Change them there instead of hard-coding colors in components.

## Project structure

```
.
├── index.html              # entry HTML, meta tags, pre-paint theme script
├── src/
│   ├── main.ts             # mounts <App />
│   ├── App.svelte          # page composition + html theme class sync
│   ├── app.css             # Tailwind layers, CSS variables, animations
│   └── lib/
│       ├── i18n.ts         # EN/PT translations, `locale` and `t` stores
│       ├── theme.ts        # theme store + toggle (localStorage)
│       ├── reveal.ts       # scroll-reveal Svelte actions
│       ├── Nav.svelte      # fixed nav, theme and language toggles
│       ├── Hero.svelte
│       ├── Experience.svelte
│       ├── Projects.svelte
│       ├── Skills.svelte
│       └── Contact.svelte  # contact links + footer
├── public/                 # favicons (classic terminal and solid emerald)
├── preview.html            # standalone static design mock (Tailwind CDN) — not part of the build
├── favicon-preview.html    # favicon design comparison — not part of the build
└── dist/                   # build output (git-ignored, published to gh-pages)
```

`src/routes/+layout.svelte` and `src/lib/Counter.svelte` are leftovers from the starter template and are not used by the app.

## Deployment

`yarn deploy` runs `npx gh-pages -d dist`, pushing the contents of `dist/` to the `gh-pages` branch of [`Kirizuro/kirizuro.dev`](https://github.com/Kirizuro/kirizuro.dev). Run `yarn build` first so `dist/` is current. Vite is configured with `base: "/"`, so the site is expected to be served from the root of the custom domain.

## Brand

**Kirizuro** is the personal brand. The nav logo renders as `<kirizuro />` in monospace, with an emerald accent (`#10b981` dark / `#059669` light).

## License

All rights reserved. © Claudio Junior
