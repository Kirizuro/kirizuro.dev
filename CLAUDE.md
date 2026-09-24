# CLAUDE.md

Personal portfolio for Claudio Junior (kirizuro.dev). Static single-page site: Svelte 3 + TypeScript + Vite 4 + Tailwind 3, deployed to GitHub Pages. No backend, router or CMS.

## Commands

Use **yarn** (the lockfile is `yarn.lock`).

- `yarn dev` — dev server
- `yarn run check` — `svelte-check` (there are no tests or linter; this is the only automated check). Use `yarn run check`: plain `yarn check` is Yarn's built-in integrity command and fails on unrelated dependency mismatches.
- `yarn build` — production build to `dist/` (git-ignored)
- `yarn deploy` — `npx gh-pages -d dist`; **publishes to the live site**, so never run it unless asked, and build first

## Architecture

- `src/main.ts` mounts `src/App.svelte`, which renders the sections in order: `Nav`, `Hero`, `Experience`, `Projects`, `Skills`, `Contact` (all in `src/lib/`).
- All user-facing text lives in `src/lib/i18n.ts` as flat dot-namespaced keys, in two locales (`en`, `pt`). Components call `$t('some.key')`. A missing key renders as the raw key string.
- Non-text data (tech tags, skill levels, project icons) lives in arrays at the top of each component's `<script>`.
- Theme: `src/lib/theme.ts` store toggles `dark`/`light` classes on `<html>`; `index.html` sets the class before first paint. Colors are CSS variables in `src/app.css` (`:root` = dark, `html.light` = light).
- `src/lib/reveal.ts` provides the `use:reveal` scroll-in action used on sections and cards.

## Conventions

- **Bilingual always**: any new or changed copy must be updated in both `en` and `pt` in `i18n.ts`. Keep the PT natural, not machine-literal (existing PT job titles: "Desenvolvedor Full Stack", "Engenheiro de Software Sênior").
- **Style with CSS variables**, inline `style="color: var(--text)"` as the existing components do; don't hard-code colors (the only exception is the WhatsApp brand green in `Contact.svelte`).
- Section headers use the numbered pattern (`02.`, `03.`, …); keep numbering consistent if sections are added or reordered.
- Formatting follows `.prettierrc`; match the surrounding code (2-space indent, single quotes in TS).

## Common tasks

- **Add a job**: add `exp.<key>.{title,company,period,location,description}` to both locales, then `{ key, tech }` to `jobs` in `Experience.svelte`. `jobs` is ordered newest first. Period strings are hard-coded text (e.g. `'Oct 2025 — Present'`), so update them by hand.
- **Add a project**: add `project.<id>.{title,description,role}` to both locales, then an entry to `projects` in `Projects.svelte`.
- **Add a skill category**: add it to `categories` in `Skills.svelte` and a `skills.<key>` label to both locales. Skill `level` values are the owner's self-assessment, not derived from anything; don't invent them silently — flag new values for review.

## Content rules

- This is a public site. The source material for experience (CV, internal achievement logs) can contain internal details. **Do not publish** internal repo/service names, Jira tickets, PR numbers, coworker names, or private tooling names beyond what the CV already discloses. Describe work by outcome and public tech.
- Keep claims consistent with the CV (e.g. the "9+ years" figure appears in `Hero.svelte`, `i18n.ts` and `index.html`).

## Repo notes

- Remote is `Kirizuro/kirizuro.dev`; default branch `master`; the site is served from the `gh-pages` branch.
- `preview.html` and `favicon-preview.html` are standalone design mocks (Tailwind CDN) and are not part of the build.
- `src/routes/+layout.svelte` and `src/lib/Counter.svelte` are unused starter-template leftovers.
- Untracked files such as `cowork-memory-backup-*.zip` and `zi7PUvN4` are unrelated to the site; don't commit them.
