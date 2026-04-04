# kirizuro.dev

Personal portfolio for **Claudio Junior** — Senior Software Engineer with 9+ years of experience building web systems and mobile applications.

**Live:** [kirizuro.dev](https://kirizuro.dev) · [kirizuro.github.io](https://kirizuro.github.io)

## Tech Stack

- **Svelte** + **TypeScript** — component framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **GitHub Pages** — hosting and deployment

## Features

- **Light / Dark mode** — toggle with system preference detection and localStorage persistence
- **Bilingual (EN / PT)** — language switch with full translations via Svelte stores
- **Scroll animations** — IntersectionObserver-based reveal effects on sections
- **Responsive** — mobile-first layout with hamburger navigation
- **Accessible** — focus-visible outlines, semantic HTML, aria labels

## Sections

- **Hero** — intro with terminal-style code snippet
- **Experience** — timeline of 5 positions with tech tags
- **Projects** — featured work in a 2×2 card grid
- **Skills** — progress bars across Frontend, Backend, Mobile, and Tools
- **Contact** — email, WhatsApp, GitHub, and LinkedIn links

## Getting Started

```bash
# install dependencies
yarn

# start dev server
yarn dev

# type check
yarn check

# production build
yarn build

# deploy to GitHub Pages
yarn deploy
```

## Project Structure

```
src/
├── App.svelte          # root component with theme binding
├── app.css             # global styles, CSS variables, animations
├── main.ts             # entry point
└── lib/
    ├── i18n.ts         # bilingual translation store (EN/PT)
    ├── theme.ts        # dark/light theme store
    ├── reveal.ts       # scroll-triggered animation actions
    ├── Nav.svelte      # fixed nav with theme + language toggles
    ├── Hero.svelte     # landing section
    ├── Experience.svelte
    ├── Projects.svelte
    ├── Skills.svelte
    └── Contact.svelte  # contact + footer
```

## Brand

**Kirizuro** is the personal brand. The nav logo renders as `<kirizuro />` in monospace. Two favicon variants exist in `/public`: a classic terminal style and a solid emerald design.

## License

All rights reserved. © Claudio Junior
